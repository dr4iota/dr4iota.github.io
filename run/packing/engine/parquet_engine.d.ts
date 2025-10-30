/* tslint:disable */
/* eslint-disable */

export function engineVersion(): string;

/**
 * Complete an edge-match mosaic from a partial: the *added* placements that
 * fill the board with every seam matching, or `undefined` if the partial
 * extends to no matching solution. Distinct from `squareComplete`, which is
 * geometry-only and ignores edge labels. `next`, when set, leads the plan
 * with that tile (the player's selected tile).
 */
export function mosaicComplete(problem: string, partial: string, next?: string | null): string | undefined;

/**
 * Solve a slide-in fill level: `Place`/`Slide` moves that fill the region
 * from the problem's `layout` (empty ⇒ from scratch, which validates the
 * level). The `cap` bounds the evacuation search (0 = uncapped). Returns the
 * same three-case envelope as `slideSolve` — and only "the region admits no
 * tiling" comes back `unsolvable` here: this pass walks a single tiling's
 * evacuation path, so its other failures are `capped`.
 */
export function slideInSolve(problem: string, cap: number): string;

/**
 * Robust slide-in fill solve from the current `layout`: a cost-ordered
 * forward search that solves from ANY reachable position (sliding pieces in,
 * placing from the tray, or — as a penalized last resort — taking a buffer
 * piece back out). `cap` bounds explored positions (0 = uncapped). This is
 * the only slide-in entry point whose search is complete, so it is the one
 * that can answer `unsolvable` from an exhausted position rather than only
 * from a region no piece set tiles.
 */
export function slideInSolveFrom(problem: string, cap: number): string;

/**
 * Minimum grouped-step slide-in fill solution from the empty board (the true
 * difficulty measure — finds interleaving the tiling-guided solver can't).
 * `cap` bounds explored positions (0 = uncapped); the cap, the 64-nav-cell
 * bitboard limit, and an exhausted single-tiling BFS all report `capped`.
 */
export function slideInSolveMin(problem: string, cap: number): string;

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
 */
export function slideSolve(problem: string, cap: number): string;

/**
 * Complete a valid partial to a full cover. Returns the JSON of the
 * *added* placements, or `undefined` when no completion exists. When `next`
 * names a remaining piece, the completion leads with it (the selected
 * piece the player wants placed next); `undefined` ⇒ the solver's own order.
 */
export function squareComplete(problem: string, partial: string, next?: string | null): string | undefined;

/**
 * Count full covers extending `partial`, stopping at `cap` (0 = no cap).
 * Exact while the count stays below 2^53.
 */
export function squareCount(problem: string, partial: string, cap: number): number;

/**
 * Exact placement check on the square lattice; returns a `VerifyResult`.
 */
export function squareVerify(problem: string, placements: string): string;

/**
 * Complete a partial fill via exact cover; returns `Placement[] | null`.
 * When `next` names a remaining piece, the completion leads with it (the
 * selected piece the player wants placed next); `undefined` ⇒ the solver's
 * own order.
 */
export function triComplete(problem: string, partial: string, next?: string | null): string;

/**
 * Count solutions (capped when `cap > 0`); returns the count as a JSON
 * number string so values above 2^53 stay exact on the wire. The JS
 * `Number` that parses it is exact only while the count stays below 2^53
 * — the same limit `squareCount` documents; we do not change the wire.
 */
export function triCount(problem: string, partial: string, cap: number): string;

/**
 * Complete an edge-match mosaic on the tri lattice from a partial: the
 * *added* placements that fill the board with every seam matching, or
 * `null` if the partial extends to no matching solution. Serves both tri
 * edge-match families (MacMahon `TriMatch`, picture `TriMosaic`). Distinct
 * from `triComplete`, which is geometry-only and ignores edge labels.
 * `next`, when set, leads the plan with that tile (the selected tile).
 */
export function triMosaicComplete(problem: string, partial: string, next?: string | null): string;

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
 */
export function triSlideOutSolve(problem: string): string;

/**
 * Solve a tri sliding-tile (occupant N-puzzle) position. The three-case
 * envelope carries the ordered moving tile cells, a parity/malformed proof
 * of unsolvability, or `capped` when the bounded constructive reducer fails.
 */
export function triSlideSolve(problem: string): string;

/**
 * Exact placement check on the tri lattice; returns a `VerifyResult`.
 * Edge-labeled problems (mosaic / MacMahon) are handled edge-aware: the
 * verifier resolves orientation indices through the same edge-aware
 * enumeration the TS side and the mosaic solver use, so a placed labeled
 * tile verifies at the orientation index it was rendered with.
 */
export function triVerify(problem: string, placements: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly engineVersion: () => [number, number];
    readonly mosaicComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly slideInSolve: (a: number, b: number, c: number) => [number, number, number, number];
    readonly slideInSolveFrom: (a: number, b: number, c: number) => [number, number, number, number];
    readonly slideInSolveMin: (a: number, b: number, c: number) => [number, number, number, number];
    readonly slideSolve: (a: number, b: number, c: number) => [number, number, number, number];
    readonly squareComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly squareCount: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly squareVerify: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly triComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly triCount: (a: number, b: number, c: number, d: number, e: number) => [number, number, number, number];
    readonly triMosaicComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly triSlideOutSolve: (a: number, b: number) => [number, number, number, number];
    readonly triSlideSolve: (a: number, b: number) => [number, number, number, number];
    readonly triVerify: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
