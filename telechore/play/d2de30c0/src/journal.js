// The journal a browser transport keeps for the games that save: each
// `saved` notice put into storage (or, with a `null` value, removed), and
// every record handed back as `options.journal` at the next start. Any
// browser transport can use it; `WorkerTransport` does by default.
//
// `localStorage` unless another storage is given, under
// `termoasis.journal.<game>/<key>`, the value as base64. Every access is in
// try/catch: a private window or blocked storage keeps nothing and breaks
// nothing.

const PREFIX = 'termoasis.journal.';

/** @typedef {{ game: string, key: string, value: number[] }} SavedRecord */

function encode(bytes) {
  let text = '';
  for (const byte of bytes) {
    text += String.fromCharCode(byte);
  }
  return btoa(text);
}
const decode = (text) => Array.from(atob(text), (char) => char.charCodeAt(0));

function defaultStorage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

/**
 * @param {Storage | null} [storage]  `getItem`, `setItem`, `removeItem`, `key`, `length`
 */
export function createJournal(storage = defaultStorage()) {
  return {
    /**
     * The records kept, for one game or all.
     * @param {string} [game]
     * @returns {SavedRecord[]}
     */
    load(game) {
      const records = [];
      try {
        for (let index = 0; index < storage.length; index += 1) {
          const name = storage.key(index);
          if (!name?.startsWith(PREFIX)) {
            continue;
          }
          const path = name.slice(PREFIX.length);
          const slash = path.indexOf('/');
          if (slash < 0 || (game !== undefined && path.slice(0, slash) !== game)) {
            continue;
          }
          try {
            records.push({ game: path.slice(0, slash), key: path.slice(slash + 1), value: decode(storage.getItem(name)) });
          } catch {
            // A record that no longer decodes is left out, not the rest.
          }
        }
      } catch {
        return [];
      }
      return records;
    },
    /**
     * Keep what a `saved` notice says.
     * @param {{ game: string, key: string, value: number[] | null }} saved
     */
    apply({ game, key, value }) {
      try {
        const name = `${PREFIX}${game}/${key}`;
        if (value === null) {
          storage.removeItem(name);
        } else {
          storage.setItem(name, encode(value));
        }
      } catch {
        // Not kept: the game starts fresh next time.
      }
    },
  };
}
