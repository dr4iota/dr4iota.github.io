const e=`id: drop-pentomino-12x18
title: Pentomino Drop · 12×18
genus: drop
order: 220
space: tessera
board: { p: 4, q: 4 }
# A falling-block drop with the twelve pentominoes — a pure recombination of the falling
# dials (gravity-settle / collapse-rows / 12-piece bag), no engine change.
# One-sided symmetry: rotations only, no reflections (so F/Y/… keep a chirality).
region: { rect: [12, 18] }
pieces:
  - { id: F, cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: I, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: N, cells: [[1, 0], [1, 1], [0, 2], [1, 2], [0, 3]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: P, cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: U, cells: [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: V, cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: W, cells: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: X, cells: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: Y, cells: [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]], lattice: true,
      symmetry: one-sided, supply: unlimited }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]], lattice: true,
      symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  reaction:
    - { kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }
  supply: { kind: bag }
  clock: { kind: interval, ms: 900 }
  terminal: stack-out
  score: drop-lines
  seed: 5
`;export{e as default};
