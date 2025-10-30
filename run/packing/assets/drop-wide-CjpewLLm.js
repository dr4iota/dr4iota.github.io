const e=`id: drop-wide
title: Hex Drop · 9×7
space: tessera
genus: drop
order: 520
# Flat-bottom hexes (see drop-63-hexfall): the gravity axis runs straight
# down the screen.
board: { p: 6, q: 3, rings: 10 }
orient: edge-down
region: { rect: [9, 7] }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: one-sided, supply: unlimited }
  - { id: three, cells: [[], [0], [0, 3]], symmetry: one-sided, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: one-sided, supply: unlimited }
  # The compact tri-hex: three hexes meeting at ONE corner, the third form a
  # hexagonal grid has and the only one that fills a pocket rather than a
  # line. Its walk turns by the SHARPEST angle (local side 1) where \`bend\`
  # turns by two — \`hex-drop.test.ts\` pins that its three cells are pairwise
  # adjacent, which is the whole difference and is invisible in the walk.
  - { id: triangle, cells: [[], [0], [0, 1]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 1300 }
  terminal: stack-out
  score: drop-lines
  seed: 96
info: >-
  Wide and shallow: nine columns to spread across, but only seven rows before
  the stack reaches the top.
about: |
  The honeycomb faller again, turned the other way: wide rather than deep.

  A shallow board rewards the opposite habit. On the tall one you can leave a
  ragged surface and tidy it later; here there is no later — the stack reaches
  the ceiling in seven rows, so every piece has to go somewhere it will not
  need moving. The clock is slower to compensate, which is not the same as
  being easier.
`;export{e as default};
