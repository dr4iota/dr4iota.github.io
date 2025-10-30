const e=`id: drop-zigzag
title: Hex Drop · Zigzag
space: tessera
genus: drop
order: 530
# Pointy-top hexes (the default view) have no neighbour straight down, so the
# fall ALTERNATES the two downward bearings by row: even rows step side 1,
# odd rows side 2 — a vertical zigzag column. The hexrect region's walls
# zigzag the same way, so a piece can ride the edge all the way to the floor.
board: { p: 6, q: 3 }
region: { hexrect: [7, 10] }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: one-sided, supply: unlimited }
  - { id: three, cells: [[], [0], [0, 3]], symmetry: one-sided, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { zigzag: [2, 4] }
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 1100 }
  terminal: stack-out
  score: drop-lines
  seed: 47
info: >-
  Seven zigzag columns, ten level rows. The fall weaves left-right-left; a
  full horizontal row clears.
about: |
  The zigzag faller: hexagons point-up, the way a honeycomb usually hangs —
  which leaves no straight way down. So a falling piece takes the only honest
  path there is: one step down-right, one step down-left, weaving a vertical
  column out of the two diagonal axes.

  The rows, though, are level — that is the trade this orientation makes.
  Fill a horizontal line wall to wall and it clears, exactly like the square
  game. Watch the shadow: it lands where the weave ends, which after a tall
  drop is not where your eye first says it will.
`;export{e as default};
