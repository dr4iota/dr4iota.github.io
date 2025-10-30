/* tslint:disable */
/* eslint-disable */

export function engineVersion(): string;

/**
 * Complete a partial board, optionally leading with the held piece.
 * Emits the ADDED placements, or `null` when no completion exists.
 */
export function tesseraComplete(problem: string, partial: string, next?: string | null): string;

/**
 * Count full covers extending `partial`, stopping at `cap` (0 = no cap).
 * Exact while the count stays below 2^53 — the same limit `squareCount`
 * documents.
 */
export function tesseraCount(problem: string, partial: string, cap: number): string;

/**
 * Complete a mosaic so every seam matches — the edge-aware sibling of
 * `tesseraComplete`, for boards whose pieces carry labels.
 */
export function tesseraMosaicComplete(problem: string, partial: string, next?: string | null): string;

/**
 * Solve a scrambled N-puzzle: the moves that put every tile home, or which
 * kind of no-plan it is. Shares [`SlideSolveOut`] with the slide search
 * because a caller replays both the same way — one move at a time, each
 * naming a body and a bearing.
 */
export function tesseraNPuzzleSolve(problem: string, request: string): string;

/**
 * The MINIMUM grouped-move slide-in plan — what a level's `par` is quoted
 * in. Its own export rather than a dial on `tesseraSlideInSolve` because
 * it answers a different question at a different price: that one finds a
 * plan quickly for Hint and Solve, this one searches for the shortest and
 * is an authoring tool. A request with a non-empty `layout` is an error:
 * a par prices the level, never a position, and quietly ignoring the
 * layout would hand back a number about a different question.
 */
export function tesseraSlideInMin(problem: string, request: string): string;

/**
 * Solve a slide-in level: the plan that stages pieces in the bay and
 * slides them in until the region is covered, or which kind of no-plan it
 * is. `Unsolvable` here means the region admits no cover at all — every
 * other failure is `Capped`, because this search walks one cover's
 * evacuation path and is incomplete by construction.
 */
export function tesseraSlideInSolve(problem: string, request: string): string;

/**
 * Solve a slide puzzle: the shortest move list landing the target body on
 * the goal, or which kind of no-plan it is — see [`SlideSolveOut`].
 */
export function tesseraSlideSolve(problem: string, request: string): string;

/**
 * Exact verdict for a placement list — the authority the TS mirror is
 * pinned to by the shared contract fixtures.
 */
export function tesseraVerify(problem: string, placements: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly engineVersion: () => [number, number];
    readonly tesseraComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly tesseraCount: (a: number, b: number, c: number, d: number, e: number) => [number, number, number, number];
    readonly tesseraMosaicComplete: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly tesseraNPuzzleSolve: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly tesseraSlideInMin: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly tesseraSlideInSolve: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly tesseraSlideSolve: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly tesseraVerify: (a: number, b: number, c: number, d: number) => [number, number, number, number];
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
