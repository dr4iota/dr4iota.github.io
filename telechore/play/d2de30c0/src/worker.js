// A module Web Worker that owns one game session at a time. The page talks
// to it through `client.js`; events come back in batches, in order, tagged
// with the session they belong to, with output buffers transferred rather
// than copied.

import init, { WebSession, catalogue } from '../pkg/termoasis_web.js';
import { createDriver } from './driver.js';

/** @typedef {import('./driver.js').SessionEvent} SessionEvent */

/** Set when the module failed to load or trapped; the worker is then useless. */
let broken = /** @type {string | null} */ (null);
const ready = init().catch((error) => {
  broken = `could not load termoasis_web.wasm: ${error}`;
});
/** @type {ReturnType<typeof createDriver> | null} */
let driver = null;
const encoder = new TextEncoder();

/**
 * Every buffer here is a copy made for this batch (`Uint8Array::from` in the
 * bindings), never a view of WASM memory, so transferring it is safe.
 * @param {number} session
 * @param {SessionEvent[]} events
 */
function deliver(session, events) {
  const buffers = events.flatMap((event) => (event.type === 'output' ? [event.bytes.buffer] : []));
  self.postMessage({ type: 'events', session, events }, { transfer: buffers });
}

/** Report a module that can no longer run anything, and stop. @param {string} message */
function fail(message) {
  broken = message;
  self.postMessage({ type: 'fatal', message });
  self.close();
}

self.onmessage = async ({ data }) => {
  await ready;
  if (broken !== null) {
    if (data.type === 'catalogue') {
      self.postMessage({ type: 'catalogue', id: data.id, error: broken });
    }
    fail(broken);
    return;
  }
  switch (data.type) {
    case 'catalogue':
      self.postMessage({ type: 'catalogue', id: data.id, games: JSON.parse(catalogue()) });
      break;
    case 'start': {
      driver?.close();
      driver = null;
      const session = data.session;
      let engine;
      try {
        engine = new WebSession(data.id, JSON.stringify(data.options ?? {}), performance.now());
      } catch (error) {
        // Not a trap: a bad id or bad options. The worker is still fine.
        self.postMessage({ type: 'error', session, message: String(error) });
        break;
      }
      driver = createDriver(engine, {
        now: () => performance.now(),
        setTimer: (run, ms) => setTimeout(run, ms),
        clearTimer: (timer) => clearTimeout(/** @type {number} */ (timer)),
        deliver: (events) => deliver(session, events),
        fail: (error) => fail(`termoasis session failed: ${error}`),
      });
      driver.run();
      break;
    }
    case 'input':
      driver?.input(typeof data.data === 'string' ? encoder.encode(data.data) : data.data);
      break;
    case 'press':
      driver?.press(data.emit);
      break;
    case 'command':
      driver?.command(data.command);
      break;
    case 'offer':
      driver?.offer(data.columns, data.rows);
      break;
    case 'close':
      driver?.close();
      break;
    case 'announce':
      driver?.announce();
      break;
    default:
      console.warn('termoasis worker: unknown message', data);
  }
};
