const e=`id: clear-lines-10x10
title: Lines · 10×10
genus: clear
order: 70
space: square
region: { rect: [10, 10] }
# The classic block set — fixed orientation, drawn endlessly into a 3-slot tray.
pieces:
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: h2, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: v2, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: h3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: v3, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
  - { id: sq2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: corner, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: rows-cols }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 1010
about: |
  The layout popularized by *1010!* (Gram Games, 2014), one of the defining
  mobile puzzle hits: a 10×10 board, three pieces dealt at a time, rows and
  columns clear — no gravity, no timer, just placement. Its ancestry runs
  straight back through Tetris to pentomino packing, with the time pressure
  traded for the slow squeeze of a filling board.
`;export{e as default};
