const e=`# Tri Fifteen, starter — a side-4 triangle with its three sharp corners
# trimmed (a 1-2-1-2-1-2 hexagon): 12 numbered tiles + 1 open cell. The
# trim is what makes it playable: a triangle's corner tile touches only one
# neighbor and can never move, which freezes the puzzle; every cell here has
# at least two neighbors, so tiles circulate freely. Tiles step across EDGES
# (parity flips every move — the occupant regime); the layout below is the
# solved state, \`scramble\` walks 200 seeded legal steps away from it, so
# every deal is provably solvable by construction. Occupant pieces must have
# both parity orientations: \`one-sided\` on the unit up-triangle gives its up
# and down forms.
id: npuzzle-tri12
title: 12 Puzzle · Triangles
space: trihex
genus: npuzzle
order: 30
region:
  cells:
    [[-1, 1], [0, 1], [1, 1],
     [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2],
     [-2, 3], [-1, 3], [0, 3], [1, 3], [2, 3]]
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
rules:
  motion: step
  supply:
    kind: roster
    scramble: 200
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
  terminal: at-home
  onWin: freeze
about: >-
  The 15-puzzle's triangular cousin. A tile steps across an *edge* into the
  open cell, flipping between pointing up and pointing down with every move.
  The board is a side-4 triangle with its three corners trimmed off — the
  corners are dead ends where a tile could never move, so removing them keeps
  every piece in play. The open cell rests in the interior when solved; the
  scramble is a recorded random walk from that position, so every deal can
  always be restored — and Hint / Solve can always find the way back.
`;export{e as default};
