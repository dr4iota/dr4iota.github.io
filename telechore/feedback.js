// The feedback form: a page's checkboxes, drawn from the form's YAML, and
// what it sends to the Apps Script that keeps the Sheet.
//
// Two copies, kept the same: Telechore's tools/site/feedback.js and iota's
// misc/website/feedback.js (with feedback.css beside each). The build imports
// `prepare` to check a form and turn it into the page's JSON; the page loads
// this file as a module, which draws the form and sends it. The Apps Script
// (iota's misc/gsheets/Code.js) checks everything again: the page is a
// convenience, not a guard.

export const COMMENT = 'COMMENT';
export const ID = /^[A-Z][A-Z0-9_]{1,31}$/;
export const APP = /^[a-z][a-z0-9-]{0,31}$/;
export const LIMITS = { text: 500, comment: 2000, nickname: 40 };
// What the form adds to a box that may stay empty, so the YAML never says it.
export const OPTIONAL = ' (optional)';
const optional = (s) => s + OPTIONAL;

// The YAML as parsed, to { form, problems }: `form` is what the page embeds,
// with each section's entries as a list, in the file's order. An entry is a
// label, or { label, detail } for one with a text box, `detail` its hint.
export function prepare(doc, where = 'feedback') {
  const problems = [];
  const bad = (m) => problems.push(`${where}: ${m}`);
  const text = (v) => (typeof v === 'string' && v.trim() ? v.trim() : '');
  // A shape YAML allows and the form does not is said, not thrown, and not
  // read as something else: a string or a list has keys too, its indexes.
  const mapping = (o) => o !== null && typeof o === 'object' && !Array.isArray(o);
  if (!mapping(doc)) return { form: null, problems: [`${where}: not a mapping`] };
  // A key nothing reads is a typo, or a comma YAML took for a separator:
  // `{ label: x, detail: What, and where? }` is three keys.
  const only = (o, keys, at) => {
    for (const k of Object.keys(mapping(o) ? o : {})) {
      if (!keys.includes(k)) bad(`${at}takes no ${JSON.stringify(k)} (only ${keys.join(', ')}; quote a value with a comma)`);
    }
  };
  only(doc, ['app', 'endpoint', 'title', 'intro', 'nickname', 'most', 'sections', 'comment', 'done'], 'the form ');
  const app = text(doc.app);
  if (!APP.test(app)) bad(`app is the Sheet's tab, lower case: ${JSON.stringify(doc.app)}`);
  const endpoint = text(doc.endpoint);
  if (endpoint && !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
    bad(`endpoint is an Apps Script /exec address: ${endpoint}`);
  }
  if (!text(doc.title)) bad('no title');
  const most = doc.most ?? 3;
  if (!Number.isInteger(most) || most < 1) bad(`most is a count: ${JSON.stringify(doc.most)}`);
  const seen = new Set();
  const sections = [];
  const list = doc.sections ?? [];
  if (!Array.isArray(list)) bad('sections is a list, each `- title: …` with its `entries:`');
  for (const [i, s] of (Array.isArray(list) ? list : []).entries()) {
    const at = `section ${i + 1}`;
    // A wrong shape is the one line; what follows from it would only repeat it.
    if (!mapping(s)) {
      bad(`${at} is a mapping, its \`title:\` and \`entries:\``);
      continue;
    }
    only(s, ['title', 'entries'], `${at} `);
    if (!text(s?.title)) bad(`${at} has no title`);
    const entries = [];
    const given = s?.entries ?? {};
    if (!mapping(given)) {
      bad(`${at}: entries is a mapping, one \`ID: label\` a line`);
      continue;
    }
    for (const [id, v] of Object.entries(given)) {
      if (!ID.test(id) || id === COMMENT) bad(`${at}: ${id} is not an id (${ID}, and not ${COMMENT})`);
      else if (seen.has(id)) bad(`${at}: ${id} is used twice`);
      seen.add(id);
      if (typeof v !== 'string') only(v, ['label', 'detail'], `${at}: ${id} `);
      const label = text(typeof v === 'string' ? v : v?.label);
      if (!label) bad(`${at}: ${id} has no label`);
      const detail = typeof v === 'string' ? '' : text(v?.detail);
      if (/\(optional\)$/i.test(detail)) bad(`${at}: ${id}'s detail ends in (optional), which the form adds`);
      entries.push(detail ? { id, label, detail } : { id, label });
    }
    if (!entries.length) bad(`${at} has no entries`);
    sections.push({ title: text(s?.title), entries });
  }
  if (Array.isArray(list) && !list.length && !text(doc.comment)) bad('neither sections nor a comment box');
  for (const k of ['nickname', 'comment']) {
    if (/\(optional\)$/i.test(text(doc[k]))) bad(`${k} ends in (optional), which the form adds`);
  }
  const form = {
    app,
    endpoint,
    title: text(doc.title),
    intro: text(doc.intro),
    nickname: text(doc.nickname),
    most,
    sections,
    comment: text(doc.comment),
    done: text(doc.done) || 'Thank you. It is on its way.',
  };
  return { form, problems };
}

// The form's JSON, safe inside a <script> element.
export const embed = (form) => JSON.stringify(form).replace(/</g, '\\u003c');

// ---- the page ----

const store = {
  get(k) {
    try {
      return localStorage.getItem(k) ?? '';
    } catch {
      return '';
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch {}
  },
};

// A random id for this browser, so that two sends from it can be told to be
// one person's without saying who. Nothing else is in it.
function browserId() {
  let id = store.get('feedback-id');
  if (!/^[0-9a-f-]{16,64}$/.test(id)) {
    id = crypto.randomUUID ? crypto.randomUUID() : [...crypto.getRandomValues(new Uint8Array(16))]
      .map((b) => b.toString(16).padStart(2, '0')).join('');
    store.set('feedback-id', id);
  }
  return id;
}

function zone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    return '';
  }
}

function el(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') e.className = v;
    else if (k in e && typeof v !== 'string') e[k] = v;
    else e.setAttribute(k, v);
  }
  e.append(...kids.filter((k) => k != null));
  return e;
}

function draw(root, form) {
  const boxes = []; // { id, tick, detail }
  const nick = el('input', {
    type: 'text', name: 'nickname', maxLength: LIMITS.nickname, autocomplete: 'nickname',
    placeholder: 'Blank sends it anonymously',
  });
  nick.value = store.get('feedback-nickname');
  // A field no person sees; whatever fills it in is not a person. Named so
  // that no browser's autofill knows it: Chrome fills a field called
  // `website` from the profile, off screen and `autocomplete="off"` or not,
  // and a person's send was then taken for a bot's and dropped.
  const trap = el('input', { type: 'text', name: 'fb_hp', tabIndex: -1, autocomplete: 'off' });

  const body = [
    el('label', { class: 'fb-nick' }, el('span', {}, optional(form.nickname || 'What should we call you?')), nick),
    el('div', { class: 'fb-trap', 'aria-hidden': 'true' }, trap),
  ];
  for (const s of form.sections) {
    const set = el('fieldset', { class: 'fb-section' }, el('legend', {}, s.title));
    for (const e of s.entries) {
      const tick = el('input', { type: 'checkbox', value: e.id });
      const row = el('div', { class: 'fb-entry' }, el('label', {}, tick, ' ', e.label));
      let detail = null;
      if (e.detail) {
        detail = el('input', {
          type: 'text', class: 'fb-detail', maxLength: LIMITS.text, placeholder: optional(e.detail),
          'aria-label': `${e.label}: ${optional(e.detail)}`,
        });
        row.append(detail);
      }
      boxes.push({ id: e.id, tick, detail });
      set.append(row);
    }
    body.push(set);
  }
  let comment = null;
  if (form.comment) {
    comment = el('textarea', { rows: 5, maxLength: LIMITS.comment });
    // Optional beside the entries, where a tick is a send; on a form that is
    // only the box, the box is the send.
    const heading = form.sections.length ? optional(form.comment) : form.comment;
    body.push(el('label', { class: 'fb-comment' }, el('span', {}, heading), comment));
  }
  const count = el('span', { class: 'fb-count', 'aria-live': 'polite' });
  const send = el('button', { type: 'submit', class: 'fb-send' }, 'Send');
  body.push(el('div', { class: 'fb-bar' }, count, send));
  root.replaceChildren(...body);

  const chosen = () => boxes.filter((b) => b.tick.checked);
  const said = () => Boolean(comment?.value.trim());
  let sending = false;
  const update = (note) => {
    const n = chosen().length;
    const full = n >= form.most;
    for (const b of boxes) {
      const off = full && !b.tick.checked;
      b.tick.disabled = off;
      if (b.detail) b.detail.disabled = off;
    }
    if (note) count.textContent = note;
    else if (!form.endpoint) count.textContent = 'Sending is not open yet.';
    else if (!boxes.length) count.textContent = '';
    else count.textContent = full
      ? `${n} of ${form.most} chosen. Untick one to choose another.`
      : `${n} of ${form.most} chosen`;
    count.classList.toggle('fb-bad', Boolean(note));
    send.disabled = sending || !form.endpoint || (!n && !said());
  };
  for (const b of boxes) {
    b.tick.addEventListener('change', () => update());
    // Saying something about an entry chooses it; clearing the text leaves
    // the tick as it is, and an unticked entry's text is not sent.
    b.detail?.addEventListener('input', () => {
      if (b.detail.value.trim() && !b.tick.checked && !b.tick.disabled) b.tick.checked = true;
      update();
    });
  }
  comment?.addEventListener('input', () => update());

  // Assigned, not added: Send another draws again, and replaces it.
  root.onsubmit = async (ev) => {
    ev.preventDefault();
    if (send.disabled) return;
    const picked = chosen();
    const q = new URLSearchParams(location.search);
    const data = new URLSearchParams({
      app: form.app,
      entries: picked.map((b) => b.id).join(','),
      comment: comment?.value.trim() ?? '',
      nickname: nick.value.trim(),
      uid: browserId(),
      // What an app's link says it is: `0.5.0 android`, and for a copy that
      // is not a store's release its kind and commit, `debug a1b2c3d4+2`.
      build: ['v', 'on', 'k', 'c'].map((k) => q.get(k)).filter(Boolean).join(' ').slice(0, 60),
      // Roughly where, without asking and without a third party: the zone
      // the device's clock is set to, and the browser's language.
      tz: zone().slice(0, 64),
      lang: (navigator.language || '').slice(0, 35),
      fb_hp: trap.value,
    });
    for (const b of picked) {
      const t = b.detail?.value.trim();
      if (t) data.set(`d_${b.id}`, t);
    }
    store.set('feedback-nickname', nick.value.trim());
    sending = true;
    update('Sending…');
    let answer;
    try {
      // A form-encoded POST is a simple request, so there is no preflight;
      // Apps Script answers through a redirect the browser may read.
      const res = await fetch(form.endpoint, { method: 'POST', body: data });
      answer = await res.json();
    } catch {
      answer = { ok: false, why: 'network' };
    }
    sending = false;
    if (answer?.ok) {
      const again = el('button', { type: 'button', class: 'fb-send' }, 'Send another');
      again.addEventListener('click', () => draw(root, form));
      root.replaceChildren(el('p', { class: 'fb-done', role: 'status' }, form.done), el('p', {}, again));
      return;
    }
    const WHY = {
      busy: 'That is a lot of sends at once. Try again in a few minutes.',
      network: 'It could not be sent. Check the connection and try again.',
    };
    update(WHY[answer?.why] ?? 'It could not be sent. Try again later.');
  };
  update();
}

if (typeof document !== 'undefined') {
  const data = document.getElementById('feedback-data');
  const root = document.getElementById('feedback');
  if (data && root) draw(root, JSON.parse(data.textContent));
}
