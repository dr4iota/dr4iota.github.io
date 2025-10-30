const e=`# The 15-puzzle's hyperbolic cousin: a centre square and the twelve around it,
# on {4,5} — four-sided tiles, FIVE to a corner. Twelve tiles and one open cell,
# the same count as the triangle starter, so the only new thing is the board.
#
# Why this board and this size. Every tile has four sides, so the moves are the
# ones a player already knows; what changes is that there are twelve neighbours
# in the ring instead of eight, because the extra tile at every corner buys the
# board more room than a flat one has. The open cell belongs in the CENTRE,
# which is the one cell with all four of its neighbours present — the tiles that
# have to pass through it need somewhere to turn around.
#
# \`slide: { unit: crossing }\` is the mechanic: a tile steps across ONE edge into
# the open cell. On a curved board a crossing also TURNS the tile a little —
# carry a heading around a loop here and it comes back rotated — which is the
# board's own arithmetic showing through rather than a defect.
#
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back. Hint and Solve
# answer it through the \`npuzzle\` graph reduction in \`rust/packing-engine\`, which knows nothing
# about curvature — a sliding tile belongs to no geometry.
id: npuzzle-hyper12
title: 12 Puzzle · Hyperbolic
space: tessera
genus: npuzzle
order: 534
stage: labs
board: { p: 4, q: 5, rings: 2 }
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
  - { id: t11, cells: [[]], symmetry: one-sided }
  - { id: t12, cells: [[]], symmetry: one-sided }
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
      - { piece: t11, at: 11, label: 11 }
      - { piece: t12, at: 12, label: 12 }
  terminal: at-home
  onWin: freeze
info: >-
  Twelve numbered tiles and one open cell. Tap a tile beside the gap to slide it
  in, and work them all back into order — the numbers run around the ring, and
  the gap belongs in the middle.
about: |
  The 15-puzzle, moved onto a hyperbolic board.

  This is {4,5}: squares again, but **five** of them meet at every corner where
  a flat grid fits four. That extra tile per corner is the whole difference. It
  buys the board more room than the plane has — the ring around the centre tile
  holds twelve tiles here, against eight on a flat grid — and the room has to
  come from somewhere, so the tiles shrink as they go out. They are all the same
  size on the board; it is the picture of it that cannot be drawn flat, exactly
  as a world map cannot.

  The moves are the ones you know: a tile beside the gap steps into it. What is
  different is that a tile also turns slightly as it travels, and how much
  depends on the path it took. On a flat board you can carry "north" anywhere
  and everyone agrees; here, walk a heading around a loop and it comes back
  turned. Nothing is lost by it — every tile still has a home and every scramble
  still comes apart — but it is worth watching a tile go the long way round and
  seeing it arrive facing differently.

  The scramble is a recorded walk from the solved position, so every deal can be
  undone. If you get stuck, Hint knows the way back.
`;export{e as default};
