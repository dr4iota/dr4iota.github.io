const e=`# The heptagon rosette: {7,3} — HEPTAGONS, three to a corner — the centre, its
# ring of seven, and the seven second-ring PETALS, one over each adjacent pair
# of ring tiles (every petal shares an edge with both, so each sits on a
# three-tile cycle and nothing is ever wedged). Fourteen tiles, one open cell.
#
# The petals are the difficulty: a centre-and-ring board alone plays in a few
# turns of the carousel (a plain seven-tile ring proved too easy), but a tile
# parked on a petal can only come down into one of two ring cells, and the gap
# has to be walked around behind it first.
#
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back. At fifteen cells
# this board is past the optimal search's reach, so Hint and Solve answer
# through the constructive reduction in \`rust/packing-engine\` — valid plans,
# not minimal ones.
id: npuzzle-hepta14
title: 14 Puzzle · Heptagons
space: tessera
genus: npuzzle
order: 538
stage: labs
board: { p: 7, q: 3, rings: 2 }
region: { cells: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 17, 20, 23, 26] }
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
  - { id: t13, cells: [[]], symmetry: one-sided }
  - { id: t14, cells: [[]], symmetry: one-sided }
rules:
  motion: slide
  slide: { unit: crossing }
  supply:
    kind: roster
    scramble: 220
    layout:
      # Ring tiles 1–7, then the petals 8–14, each petal numbered after the
      # ring pair it bridges (8 over 1·2, … 14 over 7·1).
      - { piece: t1, at: 1, label: 1 }
      - { piece: t2, at: 2, label: 2 }
      - { piece: t3, at: 3, label: 3 }
      - { piece: t4, at: 4, label: 4 }
      - { piece: t5, at: 5, label: 5 }
      - { piece: t6, at: 6, label: 6 }
      - { piece: t7, at: 7, label: 7 }
      - { piece: t8, at: 11, label: 8 }
      - { piece: t9, at: 14, label: 9 }
      - { piece: t10, at: 17, label: 10 }
      - { piece: t11, at: 20, label: 11 }
      - { piece: t12, at: 23, label: 12 }
      - { piece: t13, at: 26, label: 13 }
      - { piece: t14, at: 8, label: 14 }
  terminal: at-home
  onWin: freeze
info: >-
  Fourteen numbered heptagons — a ring of seven around the open cell's home,
  and seven petals, one over each pair of ring tiles. Tap a tile beside the
  gap to slide it in; the gap belongs in the middle.
about: |
  The heptagon rosette: {7,3}, regular **heptagons**, three to a corner — a
  centre, its ring of seven, and seven petals, one bridging each adjacent pair
  of ring tiles.

  Seven-sided tiles cannot tile a flat plane — three of them around a corner
  already overfill the turn, and the surplus goes into curvature. They are
  also the most restless tiles in the collection: with an odd number of sides
  there is never a side opposite the one a tile entered by, so every crossing
  turns it, and a tile that goes out to a petal and back comes home leaning.

  The petals are where the puzzle lives. A petal opens onto exactly two ring
  cells, so a tile parked out there cannot be fetched — the gap has to come
  around the ring, climb the petal, and let it out the other side.

  The scramble is a recorded walk from the solved position, so every deal can
  be undone. If you get stuck, Hint knows the way back.
`;export{e as default};
