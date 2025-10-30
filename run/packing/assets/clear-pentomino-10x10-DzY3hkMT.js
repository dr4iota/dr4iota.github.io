const e=`id: clear-pentomino-10x10
title: Block Puzzle · pentominoes
genus: clear
order: 85
space: tessera
board: { p: 4, q: 4 }
# A line-clear board with the twelve pentominoes — bigger fixed-orientation blocks
# drawn three at a time; fill a row or column to clear it. Same place-and-clear dials.
region: { rect: [10, 10] }
pieces:
  - { id: F, cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: I, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: N, cells: [[1, 0], [1, 1], [0, 2], [1, 2], [0, 3]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: P, cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: U, cells: [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: V, cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: W, cells: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: X, cells: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: Y, cells: [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
rules:
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0, 2] } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 512
`;export{e as default};
