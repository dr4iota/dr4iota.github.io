const e=`id: drop-square
title: Mixed Drop · 7×12
space: tessera
genus: drop
order: 500
board: { p: 4, q: 4, rings: 6 }
region: { rect: [7, 12] }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: one-sided, supply: unlimited }
  - { id: three, cells: [[], [0], [0, 2]], symmetry: one-sided, supply: unlimited }
  - { id: corner, cells: [[], [0], [0, 1]], symmetry: one-sided, supply: unlimited }
  - { id: square, cells: [[], [0], [1], [0, 1]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 900 }
  terminal: stack-out
  score: drop-lines
  seed: 7
info: >-
  Seven columns, twelve rows, one way down. The familiar version.
about: |
  Falling blocks on **{4,4}** — the ordinary grid, gravity down one axis and
  steering along the other. The version everybody's hands already know.

  It is here to make the hexagonal board legible by contrast. There, gravity
  runs down one of three axes and you steer along the other two, so a piece
  does not go left or right but *down-left* and *down-right* — and the stack
  that builds is a slope rather than a wall of columns.
`;export{e as default};
