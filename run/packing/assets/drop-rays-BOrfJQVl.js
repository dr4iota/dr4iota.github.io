const e=`# DEBUG spike: a falling-block game on a disk, rows and all.
#
# The fall is the board's direction FIELD (\`field.ts\`, ADR-0026): each cell goes
# to the neighbour lying farthest down, and where two tie the piece weaves
# between them as the flat zigzag drops do. Left and right are that direction
# turned an exact quarter — no side of a pentagon is square to gravity, so
# steering cannot borrow a key. The rows are \`courses\`: every edge of a {p,4}
# tiling extends to a complete geodesic, each one cuts the board in two, and a
# course is what lies inside one and outside the smaller ones within it — the
# nested arcs a player sees. Three of them are rows here, of 5, 4 and 4 cells;
# the two smallest arcs are not, because the fall carries a cell along them.
#
# Collapse works here for the same reason: a course is a LEVEL, so "fall one
# level per cleared level beneath" is a per-cell question. It is still refused
# for \`lines: rings\`, which have no such family below them.
#
# One-cell pieces only: a multi-cell faller on odd-p curvature is a holonomy
# question this spike is not answering.
id: drop-rays
title: Fall along the rays
space: tessera
genus: drop
order: 900
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { rings: 2 }
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
  clock: { kind: interval, ms: 900 }
  terminal: stack-out
  score: drop-lines
  seed: 54
info: >-
  Debug: pieces fall along the board's rays and gather where several rays meet.
  Fill one of the nested arcs and it clears.
about: |
  A falling-block game on **{5,4}**, where gravity is not a grid axis. Each
  cell has its own way "down": the neighbour lying farthest that way, which is
  the same question the pentagon merge game asks of a push. Several cells can
  share the one below them, so pieces funnel together as they land.

  And it has rows, though not straight ones. Every edge of this tiling
  continues into a complete line — four pentagons meet at each corner, so the
  edges run straight on through — and each line draws as an arc across the
  disk. The band between one arc and the next is a **course**, and filling one
  clears it, exactly as filling a row does in a square well. Three of the arcs
  here are rows — five, four and four cells — and the two smallest, nearest the
  rim, are not: a piece falling inside them slides along the arc instead of
  crossing it, which is what tells a row from a column on a board with neither.
`;export{e as default};
