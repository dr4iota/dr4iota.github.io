const e=`id: clear-boxes-9x9
title: Boxes · 9×9
genus: clear
order: 80
space: square
region: { rect: [9, 9] }
# Wood-block shapes, fixed orientation, drawn three at a time into the tray.
# Same place-and-clear feel as the line clears, but a full 3×3 cage clears too — so a
# placement can trigger a row, a column, and a box at once.
pieces:
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: h2, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: v2, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: h3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: v3, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
  - { id: corner, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: sq2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: diag2, cells: [[0, 0], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: bigL, cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-box, box: [3, 3] }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 9009
`;export{e as default};
