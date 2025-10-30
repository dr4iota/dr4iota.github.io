const e=`id: fill-tee-4x4
title: Four T's · 4×4
genus: fill
order: 14
space: square
# Four copies of the T-tetromino tile 4×4. Engine-verified (2026-07-04): 48 raw
# assignments = 2 placement sets × 4! piece swaps — one pinwheel and its mirror.
region: { rect: [4, 4] }
pieces: [{ use: tetrominoes, pick: [T], symmetry: free, supply: { count: 4 } }]
about: |
  Four copies of the very same T — your first crowd of identical pieces. With
  twins (here, quadruplets) the question changes: not "where does each piece
  go?" but "what pattern do they make together?" The answer here is a
  **pinwheel**: the four T's chase each other around the middle of the board.
  There is exactly one way (plus its mirror image) — find the spin.
`;export{e as default};
