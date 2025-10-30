// The page's side of a Termoasis session: a transport for the game UI. The
// engine runs in a Web Worker (`worker.js`), so a long game computation never
// freezes the page, and the worker's messages arrive in the order it sent
// them.

// Plain JavaScript, no dependencies and no build step: the host loads it as
// an ES module. The JSON it carries is described in docs/ARCHITECTURE.md;
// the interface it keeps is the `Transport` in `ui/mount.js`.

import { createJournal } from './journal.js';

/**
 * @typedef {import('./driver.js').Notice} Notice
 * @typedef {import('./driver.js').PadEmit} PadEmit
 * @typedef {{ type: 'output', session: number, bytes: Uint8Array }
 *   | { type: 'notice', session: number, notice: Notice }
 *   | { type: 'error', session: number, message: string }} TransportEvent
 *   Every event names the session (`start`'s return value) it belongs to, so
 *   a page that restarts can tell the old game's `end` from the new one.
 *   `error`: that session never started (unknown game, bad options), or the
 *   worker failed under it; no `end` follows.
 * @typedef {{ id: string, name: string, genre: string, [field: string]: unknown }} GameDescriptor
 * @typedef {{ budget?: [number, number], capabilities?: object, config?: object,
 *   params?: object, journal?: object[], today?: number }} StartOptions
 */

/** A seed for a session: 53 random bits, a JSON number serde reads exactly as `u64`. */
function freshSeed() {
  const words = crypto.getRandomValues(new Uint32Array(2));
  return (words[0] & 0x1fffff) * 2 ** 32 + words[1];
}

export class WorkerTransport {
  /**
   * @param {string | URL} workerUrl  Where `worker.js` is served, next to
   *   `../pkg/termoasis_web.js`.
   * @param {{ journal?: ReturnType<typeof createJournal> }} [options]
   *   Where saves are kept: `localStorage` by default.
   */
  constructor(workerUrl, { journal = createJournal() } = {}) {
    this.workerUrl = workerUrl;
    this.journal = journal;
    /** @type {Set<(event: TransportEvent) => void>} */
    this.listeners = new Set();
    /** @type {Map<number, { resolve: (games: GameDescriptor[]) => void, reject: (error: Error) => void }>} */
    this.catalogues = new Map();
    this.requests = 0;
    this.sessions = 0;
    /** The latest session started, and whether its `end` (or an `error`) came. */
    this.live = { session: 0, over: true };
    this.worker = this.spawn();
  }

  /** @returns {Worker} */
  spawn() {
    const worker = new Worker(this.workerUrl, { type: 'module' });
    worker.onmessage = ({ data }) => {
      switch (data.type) {
        case 'events':
          for (const event of data.events) {
            if (event.type === 'notice') {
              if (event.notice.kind === 'saved') {
                this.journal.apply(event.notice);
              } else if (event.notice.kind === 'end') {
                this.finish(data.session);
              }
            }
            this.emit({ ...event, session: data.session });
          }
          break;
        case 'catalogue': {
          const pending = this.catalogues.get(data.id);
          this.catalogues.delete(data.id);
          if (data.error) {
            pending?.reject(new Error(data.error));
          } else {
            pending?.resolve(data.games);
          }
          break;
        }
        case 'error':
          this.finish(data.session);
          this.emit({ type: 'error', session: data.session, message: data.message });
          break;
        case 'fatal': {
          // The module failed to load (a 404, a wrong MIME type, a CSP) or
          // trapped. A session that has had no `end` hears it as an `error`
          // rather than waiting for ever; the next one starts in a fresh
          // worker.
          console.error('termoasis:', data.message);
          for (const pending of this.catalogues.values()) {
            pending.reject(new Error(data.message));
          }
          this.catalogues.clear();
          if (!this.live.over) {
            this.finish(this.live.session);
            this.emit({ type: 'error', session: this.live.session, message: data.message });
          }
          this.worker.terminate();
          this.worker = this.spawn();
          break;
        }
        default:
          console.warn('termoasis transport: unknown message', data);
      }
    };
    return worker;
  }

  /** @param {number} session */
  finish(session) {
    if (session === this.live.session) {
      this.live.over = true;
    }
  }

  /** @param {TransportEvent} event */
  emit(event) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }

  /** Every game in this build. @returns {Promise<GameDescriptor[]>} */
  catalogue() {
    const id = ++this.requests;
    return new Promise((resolve, reject) => {
      this.catalogues.set(id, { resolve, reject });
      this.worker.postMessage({ type: 'catalogue', id });
    });
  }

  /**
   * Start a game, ending any running one. Fills what the engine cannot:
   * `today` (the current UTC day, as native hosts use), a random
   * `config.seed`, and the journal's records.
   *
   * @param {string} id
   * @param {StartOptions} [options]
   * @returns {number} The session its events will carry.
   */
  start(id, options = {}) {
    const session = ++this.sessions;
    this.live = { session, over: false };
    const today = options.today ?? Math.floor(Date.now() / 86_400_000);
    // A missing `config` means host-owned chrome; keep that when adding the
    // seed. A given one is the host's, `key_chrome` included (`StartOptions`).
    const config = { ...(options.config ?? { key_chrome: 'host-owned' }) };
    config.seed ??= freshSeed();
    const journal = options.journal ?? this.journal.load(id);
    this.worker.postMessage({ type: 'start', session, id, options: { ...options, today, config, journal } });
    return session;
  }

  /** Terminal input as the host's terminal sends it: a string or bytes. @param {string | Uint8Array} data */
  input(data) {
    this.worker.postMessage({ type: 'input', data });
  }

  /** A pad button, by the `emit` the session sent with it. @param {PadEmit} emit */
  press(emit) {
    this.worker.postMessage({ type: 'press', emit });
  }

  /** @param {string} command */
  command(command) {
    this.worker.postMessage({ type: 'command', command });
  }

  /** Offer up to this many cells; answered by a `size` notice. @param {number} columns @param {number} rows */
  offer(columns, rows) {
    this.worker.postMessage({ type: 'offer', columns, rows });
  }

  close() {
    this.worker.postMessage({ type: 'close' });
  }

  /**
   * Receive every event, in order. Returns a function that stops it.
   * @param {(event: TransportEvent) => void} listener
   */
  onEvent(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Stop the worker. Host-only: the UI never calls it. */
  terminate() {
    this.worker.terminate();
  }
}
