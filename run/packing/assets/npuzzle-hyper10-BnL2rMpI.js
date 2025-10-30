const e=`# The sliding-tile puzzle on {5,4}: PENTAGONS, four to a corner. A centre tile
# and the ten around it — ten tiles and one open cell.
#
# The companion to the {4,5} board, and deliberately its mirror: there a square
# had five neighbours at each corner, here a pentagon has four. Both are curved,
# and the pair is the cheapest way to see that the curvature is the board's and
# not the tile's — the tiles here have an odd number of sides, so a tile has no
# side directly opposite the one it came in by, and it leans as it travels.
#
# The open cell belongs in the CENTRE, the one tile with all five of its
# neighbours present: the tiles passing through need somewhere to turn around.
#
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back. Hint and Solve
# answer it through the \`npuzzle\` graph reduction in \`rust/packing-engine\`, which knows nothing
# about curvature or about pentagons.
id: npuzzle-hyper10
title: 10 Puzzle · Pentagons
space: tessera
genus: npuzzle
order: 535
stage: labs
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { rings: 1 }
marks: { hole: [0] }
pieces:
  - { id: t1, cells: [[]], symmetry: one-sided }
  - { id: t2, cells: [[]], symmetry: one-sided }
  - { id: t3, cells: [[]], symmetry: one-sided }
  - { id: t4, cells: [[]], symmetry: one-sided }
  - { id: t5, cells: [[]], symmetry: one-sided }
  - { id: t6, cells: [[]], symmetry: one-sided }
  - { id: t7, cells: [[]], symmetry: one-sided }
  - { id: t8, cells: [[]], symmetry: one-sided }
  - { id: t9, cells: [[]], symmetry: one-sided }
  - { id: t10, cells: [[]], symmetry: one-sided }
rules:
  motion: slide
  slide: { unit: crossing }
  supply:
    kind: roster
    scramble: 200
    layout:
      - { piece: t1, at: 1, label: 1 }
      - { piece: t2, at: 2, label: 2 }
      - { piece: t3, at: 3, label: 3 }
      - { piece: t4, at: 4, label: 4 }
      - { piece: t5, at: 5, label: 5 }
      - { piece: t6, at: 6, label: 6 }
      - { piece: t7, at: 7, label: 7 }
      - { piece: t8, at: 8, label: 8 }
      - { piece: t9, at: 9, label: 9 }
      - { piece: t10, at: 10, label: 10 }
  terminal: at-home
  onWin: freeze
info: >-
  Ten numbered tiles and one open cell, on pentagons. Tap a tile beside the gap
  to slide it in — the numbers run around the ring, and the gap belongs in the
  middle.
about: |
  A sliding-tile puzzle on {5,4} — regular **pentagons**, four meeting at every
  corner.

  Pentagons cannot tile a flat plane at all. Four of them around a corner comes
  to more than a full turn, and the surplus has to go somewhere: it goes into
  curvature, which is why this board fits ten tiles around its centre where a
  flat one of four-sided tiles fits eight.

  There is a second thing here that the square board does not show. A pentagon
  has an ODD number of sides, so no side is directly opposite the one a tile
  entered by. "Straight on" is not available — a tile leans to the nearer side
  and alternates, and after a few steps it is facing somewhere it never would
  have on a grid. The numbers stay upright to be read, but the tiles genuinely
  turn underneath them.

  The scramble is a recorded walk from the solved position, so every deal can be
  undone. If you get stuck, Hint knows the way back.
`;export{e as default};
