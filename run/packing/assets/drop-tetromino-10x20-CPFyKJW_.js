const e=`id: drop-tetromino-10x20
title: Tetromino Drop · 10×20
genus: drop
order: 200
space: tessera
board: { p: 4, q: 4 }
region: { rect: [10, 20] }
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
  clock: { kind: interval, ms: 800 }
  terminal: stack-out
  score: drop-lines
  seed: 7
about: |
  The standard well: 10 columns, 20 rows, unchanged since Alexey Pajitnov's
  1984 original, written at the Soviet Academy of Sciences on an
  Elektronika-60 so limited that the first pieces were drawn from bracket
  characters. The name fuses *tetra* — the pieces are the four-square
  tetrominoes — with tennis, Pajitnov's favorite sport.

  Pieces here are dealt Tetris-style from a shuffled seven-bag, which is more
  than tradition: with a truly random dealer, an unlucky alternation of S and
  Z pieces provably overflows any well eventually (Burgiel, 1997). The bag
  keeps the game fair — the geometry stays cruel on its own.
`;export{e as default};
