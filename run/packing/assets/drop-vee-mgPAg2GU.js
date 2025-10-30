const e=`id: drop-vee
title: Hex Drop · V Well
space: tessera
genus: drop
order: 540
# Flat-bottom hexes, straight vertical fall — and a board built for it: an
# elongated hexagon of seven straight columns, the middle one longest, so the
# floor is a V with its apex under the spawn. The lines that clear are the
# floor's own contours: V after V, each one column-deep above the last.
board: { p: 6, q: 3 }
orient: edge-down
region: { hexagon: [7, 10] }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: one-sided, supply: unlimited }
  - { id: three, cells: [[], [0], [0, 3]], symmetry: one-sided, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction: [{ kind: clear-lines, lines: { kind: contours }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 1100 }
  terminal: stack-out
  score: drop-lines
  seed: 58
info: >-
  Pieces fall straight down; a complete V — one cell in every column, level
  with the floor's shape — clears.
about: |
  The V board: a hexagon stretched tall, its middle column the longest, its
  floor two ramps meeting in a point. Gravity is the plain kind — straight
  down a column — and the shape of the board does the rest.

  A "line" here is a V: the set of cells sitting the same height above the
  floor of their own column. Complete one and it clears, and everything above
  settles a step down its column. Near the top the board tapers, so the last
  few Vs are short — if the stack climbs that high, the fast clears up there
  are the way back down.
`;export{e as default};
