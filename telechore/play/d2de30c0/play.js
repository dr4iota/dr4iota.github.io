// The website's play page: Termoasis's game UI over the engine as WebAssembly
// in a Web Worker, the transport Termoasis ships (`docs/tasks/termoasis.md`,
// C5). Copied by tools/site/build.mjs beside the UI, the worker (src/) and
// the engine (pkg/), which the worker loads from `../pkg/`.
//
// What the app does on its own page and the site does not: no Back (the bar
// is the way out), no theme button (the site follows the system), no Keep
// and no strip of kept games (a browser keeps nothing between visits but the
// saves the worker's journal holds, in localStorage).

(() => {
  // At top level: `currentScript` is null inside a callback.
  const here = document.currentScript.src;
  const transport = new TermoasisUI.WorkerTransport(new URL('./src/worker.js', here));
  const dark = matchMedia('(prefers-color-scheme: dark)');
  const asked = new URLSearchParams(location.search).get('game') || '';
  const handle = TermoasisUI.mountGame(document.getElementById('game'), {
    transport,
    theme: dark.matches ? 'dark' : 'light',
    game: /^[a-z0-9-]{1,40}$/.test(asked) ? asked : undefined,
    keys: 'auto',
    // As the app's: split over the keys only when the page is short, the
    // menu's entries and the words in the row while they fit.
    header: { split: 'short', overflow: 'fit', words: 'fit' },
    onGame({ id, name }) {
      document.title = id === 'menu' ? 'Play — Telechore' : `${name} — Play — Telechore`;
    },
  });
  dark.addEventListener('change', (event) => handle.setTheme(event.matches ? 'dark' : 'light'));
  // Leaving ends the game; its saves are in the journal already. Back to a
  // page the browser kept would show the game that ended: start afresh.
  window.addEventListener('pagehide', () => transport.close());
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) location.reload();
  });
})();
