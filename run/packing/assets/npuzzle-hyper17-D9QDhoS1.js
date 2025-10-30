const e=`# The {4,5} puzzle, grown a step: npuzzle-hyper12's centre-and-ring board plus
# a five-cell ARC of the second ring (cells 13–17), hung over three adjacent
# ring tiles. The arc's ends both touch the first ring, so every cell sits on
# a cycle — no pendant tile that could only ever shuffle in and out of one
# doorway.
#
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back. At eighteen cells
# this board is past the optimal search's reach, so Hint and Solve answer
# through the constructive reduction in \`rust/packing-engine\` — valid plans,
# not minimal ones.
id: npuzzle-hyper17
title: 17 Puzzle · Hyperbolic
space: tessera
genus: npuzzle
order: 536
stage: labs
board: { p: 4, q: 5, rings: 2 }
region: { cells: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] }
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
  - { id: t15, cells: [[]], symmetry: one-sided }
  - { id: t16, cells: [[]], symmetry: one-sided }
  - { id: t17, cells: [[]], symmetry: one-sided }
rules:
  motion: slide
  slide: { unit: crossing }
  supply:
    kind: roster
    scramble: 240
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
      - { piece: t13, at: 13, label: 13 }
      - { piece: t14, at: 14, label: 14 }
      - { piece: t15, at: 15, label: 15 }
      - { piece: t16, at: 16, label: 16 }
      - { piece: t17, at: 17, label: 17 }
  terminal: at-home
  onWin: freeze
info: >-
  Seventeen numbered tiles and one open cell — the ring of twelve, plus a
  five-tile bay hung off it. Tap a tile beside the gap to slide it in; the gap
  belongs in the middle.
about: |
  The Twelve, with an annex. Same board — {4,5}, squares with five to a corner
  — plus a five-tile bay from the SECOND ring, bridged to the board at both of
  its ends.

  Twelve tiles ring the centre here where a flat grid fits eight; the second
  ring holds forty-eight. Even this five-tile slice of it makes the point: the
  board grows outward faster than any flat picture of it can, so the bay
  crowds toward the rim and its tiles shrink in the drawing while staying the
  same size on the board. Both ends of the bay open onto the ring, so the gap
  can run through it rather than backing out the way it came.

  The scramble is a recorded walk from the solved position, so every deal can
  be undone. If you get stuck, Hint knows the way back.
`;export{e as default};
