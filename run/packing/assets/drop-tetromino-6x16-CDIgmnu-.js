const e=`id: drop-tetromino-6x16
title: Tetromino Drop · 6×16 fast
genus: drop
order: 210
space: tessera
board: { p: 4, q: 4 }
# A narrow well at a quicker cadence — less room to recover, faster to stack out.
region: { rect: [6, 16] }
pieces:
  - { id: I, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: O, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: S, cells: [[1, 0], [2, 0], [0, 1], [1, 1]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [2, 1]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: J, cells: [[1, 0], [1, 1], [0, 2], [1, 2]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [1, 2]], lattice: true, symmetry: one-sided,
      supply: unlimited }
rules:
  motion: gravity-settle
  reaction:
    - { kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }
  supply: { kind: bag }
  clock: { kind: interval, ms: 600 }
  terminal: stack-out
  score: drop-lines
  seed: 16
`;export{e as default};
