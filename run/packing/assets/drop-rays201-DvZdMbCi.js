const e=`# DEBUG spike, the roomier board: {5,4} at THREE rings, 201 cells.
#
# Same machinery as \`drop-rays\`, one ring wider — which is where the courses
# stop being a curiosity. Two rings give five of them (5, 4, 4, 3, 3 cells);
# three give twenty, from three cells up to seven, so there is a ladder to climb
# rather than a single row to hope for.
#
# The clock is quicker than the small board's because the fall is longer: the
# entry sits ten steps above the floor here, and 900ms a step is a wait rather
# than a game.
id: drop-rays201
title: Fall along the rays · wide
space: tessera
genus: drop
order: 901
board: { p: 5, q: 4, rings: 3 }
orient: edge-down
region: { rings: 3 }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction:
    - kind: clear-lines
      lines: { kind: courses }
      collapse: true
  supply: { kind: bag }
  clock: { kind: interval, ms: 500 }
  terminal: stack-out
  score: drop-lines
  seed: 543
info: >-
  Debug: the wide pentagon well — twenty courses instead of five, from three
  cells to seven.
about: |
  The pentagon well one ring wider, and the ring is what makes it a game. On
  two rings there are five courses to fill; on three there are **twenty**,
  running from three cells near the rim up to seven across the middle.

  Everything else is the same board: the fall weaves, because half the
  pentagons point the other way up and have no side facing down, and a course
  is the band between one edge line and the next.
`;export{e as default};
