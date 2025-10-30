const e=`# Tri Fifteen, the true fifteen — a 3-5-5-3 hexagon of the triangular lattice
# (tri12 with one more row of three): 15 numbered tiles + 1 open cell. A
# hexagon has no sharp corners, so every tile keeps neighbors to slide
# through. Tiles step across EDGES (parity flips every move — the occupant
# regime); the layout below is the solved state, \`scramble\` walks 220 seeded
# legal steps from it, so every deal is provably solvable by construction.
# The open cell rests in the interior when solved (an edge-neighbour of the
# centre), which is what lets Hint / Solve always find the way home.
id: npuzzle-tri15
title: 15 Puzzle · Triangles
space: trihex
genus: npuzzle
order: 31
region:
  cells:
    [[-1, 1], [0, 1], [1, 1],
     [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2],
     [-2, 3], [-1, 3], [0, 3], [1, 3], [2, 3],
     [-1, 4], [0, 4], [1, 4]]
marks:
  hole: [[0, 2]] # where the open cell belongs when solved (the centre)
pieces:
  - { id: t1, cells: [[0, 0]], symmetry: one-sided }
  - { id: t2, cells: [[0, 0]], symmetry: one-sided }
  - { id: t3, cells: [[0, 0]], symmetry: one-sided }
  - { id: t4, cells: [[0, 0]], symmetry: one-sided }
  - { id: t5, cells: [[0, 0]], symmetry: one-sided }
  - { id: t6, cells: [[0, 0]], symmetry: one-sided }
  - { id: t7, cells: [[0, 0]], symmetry: one-sided }
  - { id: t8, cells: [[0, 0]], symmetry: one-sided }
  - { id: t9, cells: [[0, 0]], symmetry: one-sided }
  - { id: t10, cells: [[0, 0]], symmetry: one-sided }
  - { id: t11, cells: [[0, 0]], symmetry: one-sided }
  - { id: t12, cells: [[0, 0]], symmetry: one-sided }
  - { id: t13, cells: [[0, 0]], symmetry: one-sided }
  - { id: t14, cells: [[0, 0]], symmetry: one-sided }
  - { id: t15, cells: [[0, 0]], symmetry: one-sided }
rules:
  motion: step
  supply:
    kind: roster
    scramble: 220
    layout:
      # the open cell rests at the centre (0, 2) when solved
      - { piece: t1, at: [-1, 1], label: 1 }
      - { piece: t2, at: [0, 1], label: 2 }
      - { piece: t3, at: [1, 1], label: 3 }
      - { piece: t4, at: [-2, 2], label: 4 }
      - { piece: t5, at: [-1, 2], label: 5 }
      - { piece: t6, at: [1, 2], label: 6 }
      - { piece: t7, at: [2, 2], label: 7 }
      - { piece: t8, at: [-2, 3], label: 8 }
      - { piece: t9, at: [-1, 3], label: 9 }
      - { piece: t10, at: [0, 3], label: 10 }
      - { piece: t11, at: [1, 3], label: 11 }
      - { piece: t12, at: [2, 3], label: 12 }
      - { piece: t13, at: [-1, 4], label: 13 }
      - { piece: t14, at: [0, 4], label: 14 }
      - { piece: t15, at: [1, 4], label: 15 }
  terminal: at-home
  onWin: freeze
about: >-
  The lattice's true fifteen puzzle — one row larger than the Twelve, a
  symmetric 3-5-5-3 hexagon. A tile steps across an *edge* into the open
  cell, flipping between pointing up and pointing down with every move. The
  scramble is a recorded random walk from the solved position, so every deal
  can always be restored — and Hint / Solve can always find the way back.
`;export{e as default};
