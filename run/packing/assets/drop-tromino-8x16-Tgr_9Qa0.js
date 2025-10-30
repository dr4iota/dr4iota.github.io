const e=`id: drop-tromino-8x16
title: Tromino Drop · 8×16
genus: drop
order: 230
space: tessera
board: { p: 4, q: 4 }
# A falling-block drop with the two free trominoes — a gentler faller (3-cell pieces, a
# 2-piece bag). Pure recombination of the gravity dials, no engine change.
region: { rect: [8, 16] }
pieces:
  - { id: n3-0, cells: [[0, 0], [1, 0], [2, 0]], lattice: true, symmetry: one-sided,
      supply: unlimited }
  - { id: n3-1, cells: [[0, 0], [0, 1], [1, 0]], lattice: true, symmetry: one-sided,
      supply: unlimited }
rules:
  motion: gravity-settle
  reaction:
    - { kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }
  supply: { kind: bag }
  clock: { kind: interval, ms: 850 }
  terminal: stack-out
  score: drop-lines
  seed: 3
`;export{e as default};
