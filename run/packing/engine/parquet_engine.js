/* @ts-self-types="./parquet_engine.d.ts" */

/**
 * @returns {string}
 */
export function engineVersion() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.engineVersion();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
 * Complete an edge-match mosaic from a partial: the *added* placements that
 * fill the board with every seam matching, or `undefined` if the partial
 * extends to no matching solution. Distinct from `squareComplete`, which is
 * geometry-only and ignores edge labels. `next`, when set, leads the plan
 * with that tile (the player's selected tile).
 * @param {string} problem
 * @param {string} partial
 * @param {string | null} [next]
 * @returns {string | undefined}
 */
export function mosaicComplete(problem, partial, next) {
    const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(next) ? 0 : passStringToWasm0(next, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.mosaicComplete(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    let v4;
    if (ret[0] !== 0) {
        v4 = getStringFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v4;
}

/**
 * Solve a slide-in fill level: `Place`/`Slide` moves that fill the region
 * from the problem's `layout` (empty ⇒ from scratch, which validates the
 * level). The `cap` bounds the evacuation search (0 = uncapped). Returns the
 * same three-case envelope as `slideSolve` — and only "the region admits no
 * tiling" comes back `unsolvable` here: this pass walks a single tiling's
 * evacuation path, so its other failures are `capped`.
 * @param {string} problem
 * @param {number} cap
 * @returns {string}
 */
export function slideInSolve(problem, cap) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.slideInSolve(ptr0, len0, cap);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Robust slide-in fill solve from the current `layout`: a cost-ordered
 * forward search that solves from ANY reachable position (sliding pieces in,
 * placing from the tray, or — as a penalized last resort — taking a buffer
 * piece back out). `cap` bounds explored positions (0 = uncapped). This is
 * the only slide-in entry point whose search is complete, so it is the one
 * that can answer `unsolvable` from an exhausted position rather than only
 * from a region no piece set tiles.
 * @param {string} problem
 * @param {number} cap
 * @returns {string}
 */
export function slideInSolveFrom(problem, cap) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.slideInSolveFrom(ptr0, len0, cap);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Minimum grouped-step slide-in fill solution from the empty board (the true
 * difficulty measure — finds interleaving the tiling-guided solver can't).
 * `cap` bounds explored positions (0 = uncapped); the cap, the 64-nav-cell
 * bitboard limit, and an exhausted single-tiling BFS all report `capped`.
 * @param {string} problem
 * @param {number} cap
 * @returns {string}
 */
export function slideInSolveMin(problem, cap) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.slideInSolveMin(ptr0, len0, cap);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Shortest solution for a sliding-block position (Klotski / Hua Rong Dao /
 * Gridlock) under the problem's `metric` — one-cell slides (default) or
 * grouped steps. Returns a JSON envelope, because a bare "no path" cannot
 * say WHY and the two reasons need opposite player-facing copy:
 *
 * - `{"kind":"path","steps":[…]}` — `from` + `dir` per one-cell step
 *   (both metrics); an empty list means already won.
 * - `{"kind":"unsolvable"}` — the search exhausted the reachable space.
 * - `{"kind":"capped"}` — it stopped at `cap` explored positions
 *   (0 = uncapped) or an engine size limit; the position is unknown.
 * @param {string} problem
 * @param {number} cap
 * @returns {string}
 */
export function slideSolve(problem, cap) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.slideSolve(ptr0, len0, cap);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Complete a valid partial to a full cover. Returns the JSON of the
 * *added* placements, or `undefined` when no completion exists. When `next`
 * names a remaining piece, the completion leads with it (the selected
 * piece the player wants placed next); `undefined` ⇒ the solver's own order.
 * @param {string} problem
 * @param {string} partial
 * @param {string | null} [next]
 * @returns {string | undefined}
 */
export function squareComplete(problem, partial, next) {
    const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(next) ? 0 : passStringToWasm0(next, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.squareComplete(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    let v4;
    if (ret[0] !== 0) {
        v4 = getStringFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v4;
}

/**
 * Count full covers extending `partial`, stopping at `cap` (0 = no cap).
 * Exact while the count stays below 2^53.
 * @param {string} problem
 * @param {string} partial
 * @param {number} cap
 * @returns {number}
 */
export function squareCount(problem, partial, cap) {
    const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.squareCount(ptr0, len0, ptr1, len1, cap);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0];
}

/**
 * Exact placement check on the square lattice; returns a `VerifyResult`.
 * @param {string} problem
 * @param {string} placements
 * @returns {string}
 */
export function squareVerify(problem, placements) {
    let deferred4_0;
    let deferred4_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(placements, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.squareVerify(ptr0, len0, ptr1, len1);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0; len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
 * Complete a partial fill via exact cover; returns `Placement[] | null`.
 * When `next` names a remaining piece, the completion leads with it (the
 * selected piece the player wants placed next); `undefined` ⇒ the solver's
 * own order.
 * @param {string} problem
 * @param {string} partial
 * @param {string | null} [next]
 * @returns {string}
 */
export function triComplete(problem, partial, next) {
    let deferred5_0;
    let deferred5_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(next) ? 0 : passStringToWasm0(next, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.triComplete(ptr0, len0, ptr1, len1, ptr2, len2);
        var ptr4 = ret[0];
        var len4 = ret[1];
        if (ret[3]) {
            ptr4 = 0; len4 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred5_0 = ptr4;
        deferred5_1 = len4;
        return getStringFromWasm0(ptr4, len4);
    } finally {
        wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
    }
}

/**
 * Count solutions (capped when `cap > 0`); returns the count as a JSON
 * number string so values above 2^53 stay exact on the wire. The JS
 * `Number` that parses it is exact only while the count stays below 2^53
 * — the same limit `squareCount` documents; we do not change the wire.
 * @param {string} problem
 * @param {string} partial
 * @param {number} cap
 * @returns {string}
 */
export function triCount(problem, partial, cap) {
    let deferred4_0;
    let deferred4_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.triCount(ptr0, len0, ptr1, len1, cap);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0; len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
 * Complete an edge-match mosaic on the tri lattice from a partial: the
 * *added* placements that fill the board with every seam matching, or
 * `null` if the partial extends to no matching solution. Serves both tri
 * edge-match families (MacMahon `TriMatch`, picture `TriMosaic`). Distinct
 * from `triComplete`, which is geometry-only and ignores edge labels.
 * `next`, when set, leads the plan with that tile (the selected tile).
 * @param {string} problem
 * @param {string} partial
 * @param {string | null} [next]
 * @returns {string}
 */
export function triMosaicComplete(problem, partial, next) {
    let deferred5_0;
    let deferred5_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(partial, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(next) ? 0 : passStringToWasm0(next, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.triMosaicComplete(ptr0, len0, ptr1, len1, ptr2, len2);
        var ptr4 = ret[0];
        var len4 = ret[1];
        if (ret[3]) {
            ptr4 = 0; len4 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred5_0 = ptr4;
        deferred5_1 = len4;
        return getStringFromWasm0(ptr4, len4);
    } finally {
        wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
    }
}

/**
 * Solve a tri "Slide-Out" position (rigid polyiamond bodies translate —
 * and, on a `flips` level, roll over their boundary edges — to free the
 * target). Returns the JSON of the ordered atomic actions (`from` anchor
 * plus `dir` per one-cell slide OR `flip` per edge roll); the path is
 * piece-move-minimal (consecutive same-body actions are one Hua-Rong-Dao
 * move). The result distinguishes exhausted/unsolvable from capped/unknown.
 * The cap bounds **memory**:
 * this solver runs on user-built boards (the tri Slide Builder), where a
 * dense unsolvable position can enumerate far more states than any authored
 * level. Each state costs ~300–400 B, so 500K ≈ 150–200 MB — the same
 * budget square's `SLIDE_NODE_CAP` picks (5M could reach ~2 GB and crash the
 * tab, since the JS timeout only rejects the promise while the worker keeps
 * allocating). Authored levels solve in far fewer states.
 * @param {string} problem
 * @returns {string}
 */
export function triSlideOutSolve(problem) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.triSlideOutSolve(ptr0, len0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Solve a tri sliding-tile (occupant N-puzzle) position. The three-case
 * envelope carries the ordered moving tile cells, a parity/malformed proof
 * of unsolvability, or `capped` when the bounded constructive reducer fails.
 * @param {string} problem
 * @returns {string}
 */
export function triSlideSolve(problem) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.triSlideSolve(ptr0, len0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * Exact placement check on the tri lattice; returns a `VerifyResult`.
 * Edge-labeled problems (mosaic / MacMahon) are handled edge-aware: the
 * verifier resolves orientation indices through the same edge-aware
 * enumeration the TS side and the mosaic solver use, so a placed labeled
 * tile verifies at the orientation index it was rendered with.
 * @param {string} problem
 * @param {string} placements
 * @returns {string}
 */
export function triVerify(problem, placements) {
    let deferred4_0;
    let deferred4_1;
    try {
        const ptr0 = passStringToWasm0(problem, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(placements, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.triVerify(ptr0, len0, ptr1, len1);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0; len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_92b29b0548f8b746: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./parquet_engine_bg.js": import0,
    };
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('parquet_engine_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
