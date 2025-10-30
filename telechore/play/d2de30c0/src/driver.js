// The loop around one WebSession: call poll when it is due, and hand every
// event on in order. The worker runs it in the browser and the Node test runs
// it with fake timers, so both exercise the same code.

// The JSON shapes (notices, pad buttons and their `emit`, start options) are
// described in docs/ARCHITECTURE.md under "Contracts every host relies on".

/**
 * @typedef {{ kind: string, [field: string]: unknown }} Notice  A notice: `ready`, `size`,
 *   `shapes`, `size-request`, `keys`, `saved`, `chosen` (the launcher's pick) or `end`.
 * @typedef {{ kind: 'key', code: unknown } | { kind: 'command', command: string }} PadEmit
 *   What a pad button sends, exactly as the session gave it.
 * @typedef {{ type: 'output', bytes: Uint8Array } | { type: 'notice', notice: Notice }} SessionEvent
 *
 * @typedef {object} Session  What `WebSession` exposes to the loop.
 * @property {(bytes: Uint8Array, nowMs: number) => void} input
 * @property {(emit: string) => void} press
 * @property {(command: string) => void} command
 * @property {(columns: number, rows: number) => void} offer
 * @property {() => void} close
 * @property {() => void} announce
 * @property {(nowMs: number) => number | undefined} poll
 * @property {() => Array<Uint8Array | string>} drain
 * @property {() => boolean} finished
 *
 * @typedef {object} Host  How the loop waits and delivers.
 * @property {() => number} now  Monotonic milliseconds.
 * @property {(run: () => void, ms: number) => unknown} setTimer
 * @property {(timer: unknown) => void} clearTimer
 * @property {(events: SessionEvent[]) => void} deliver  One batch, in order.
 * @property {(error: unknown) => void} [fail]  The module trapped: after the
 *   final `end`, nothing it holds can run again.
 */

/**
 * @param {Session} session
 * @param {Host} host
 */
export function createDriver(session, host) {
  /** @type {unknown} */
  let timer = null;
  let ended = false;

  /** Do what is due, deliver what it produced, and wait for the next. */
  function run() {
    if (ended) {
      return;
    }
    if (timer !== null) {
      host.clearTimer(timer);
      timer = null;
    }
    /** @type {SessionEvent[]} */
    const events = [];
    let wake;
    try {
      wake = session.poll(host.now());
      for (const event of session.drain()) {
        events.push(
          typeof event === 'string'
            ? { type: 'notice', notice: JSON.parse(event) }
            : { type: 'output', bytes: event },
        );
      }
    } catch (error) {
      // A panic in WASM leaves the module unusable. Say the session ended,
      // as the native thread host does, rather than leave the page waiting.
      events.push({ type: 'notice', notice: { kind: 'end', status: 'error' } });
      ended = true;
      host.deliver(events);
      host.fail?.(error);
      return;
    }
    if (events.some((event) => event.type === 'notice' && event.notice.kind === 'end')) {
      ended = true;
    }
    if (events.length > 0) {
      host.deliver(events);
    }
    if (!ended && wake !== undefined) {
      timer = host.setTimer(run, wake);
    }
  }

  /** Apply one change, then run, unless the session has already ended. */
  function then(/** @type {() => void} */ change) {
    if (ended) {
      return;
    }
    try {
      change();
    } catch (error) {
      console.error('termoasis rejected a request', error);
    }
    run();
  }

  return {
    run,
    /** @param {Uint8Array} bytes */
    input: (bytes) => then(() => session.input(bytes, host.now())),
    /** @param {PadEmit} emit */
    press: (emit) => then(() => session.press(JSON.stringify(emit))),
    /** @param {string} command */
    command: (command) => then(() => session.command(command)),
    /** @param {number} columns @param {number} rows */
    offer: (columns, rows) => then(() => session.offer(columns, rows)),
    close: () => then(() => session.close()),
    /** A fresh `ready`, setup and a whole frame, for a new view of the session. */
    announce: () => then(() => session.announce()),
    get ended() {
      return ended;
    },
  };
}
