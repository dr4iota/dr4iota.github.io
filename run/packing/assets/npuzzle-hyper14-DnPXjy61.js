const e=`# The pentagon puzzle, grown a step: the {5,4} centre-and-ring board of
# npuzzle-hyper10 plus a four-cell ARC of the second ring (cells 14–17), hung
# over two adjacent ring tiles. The arc's ends both touch the first ring, so
# every cell sits on a cycle — no pendant tile that could only ever shuffle in
# and out of one doorway.
#
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back. At fifteen cells
# this board is past the optimal search's reach, so Hint and Solve answer
# through the constructive reduction in \`rust/packing-engine\` — valid plans,
# not minimal ones.
id: npuzzle-hyper14
title: 14 Puzzle · Pentagons
space: tessera
genus: npuzzle
order: 537
stage: labs
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { cells: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17] }
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
      - { piece: t11, at: 14, label: 11 }
      - { piece: t12, at: 15, label: 12 }
      - { piece: t13, at: 16, label: 13 }
      - { piece: t14, at: 17, label: 14 }
  terminal: at-home
  onWin: freeze
info: >-
  Fourteen numbered tiles on pentagons — the ten around the centre, plus a
  four-tile bay hung off the ring. Tap a tile beside the gap to slide it in;
  the gap belongs in the middle.
about: |
  The pentagon puzzle with an annex: the same {5,4} centre-and-ring as the Ten,
  plus a four-tile bay from the SECOND ring, bridged to the board at both of
  its ends.

  The bay is where the curvature starts to bite. On {5,4} the second ring
  holds forty tiles against the first ring's ten, so even a four-tile slice of
  it hangs off the board like a balcony — and a tile parked out there has a
  long way home. Both ends of the bay open onto the ring, so the gap can run
  through it rather than backing out the way it came.

  The scramble is a recorded walk from the solved position, so every deal can
  be undone. If you get stuck, Hint knows the way back.
`;export{e as default};
