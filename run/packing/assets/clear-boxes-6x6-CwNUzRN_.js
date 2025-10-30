const e=`id: clear-boxes-6x6
title: Boxes · 6×6
genus: clear
order: 82
space: square
# A compact box-clear — 2×3 cages (the classic 6×6 sudoku box) clear alongside
# rows and columns. clear-box is parameterized by box size, so this is a new
# level with no engine change.
region: { rect: [6, 6] }
pieces:
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: h2, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: v2, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: h3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: v3, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
  - { id: corner, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: sq2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: diag2, cells: [[0, 0], [1, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-box, box: [3, 2] }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 636
`;export{e as default};
