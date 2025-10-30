const e=`# Tri Slide-Out with flips — machine-generated on the side-4 triangle board and
# certified by the rust solver (examples/tri_slideout_gen.rs): the optimum is
# 16 piece-moves (25 unit steps), and every block moves
# along that optimal line — no dead-weight guards.
id: slideout-somersault
title: Somersault
space: trihex
genus: tri-slideout
order: 45
par: 16
region:
  triangle: 4
marks: { goal: [[-1, 1], [-1, 2], [0, 2]] }
pieces:
  - { id: a, cells: [[1, 0], [2, 0], [3, 0]], symmetry: free }
  - { id: b, cells: [[1, 1], [2, 0], [2, 1], [3, 1]], symmetry: free }
  - { id: c, cells: [[0, 0]], symmetry: free }
  - { id: d, cells: [[0, 0], [1, 0]], symmetry: free }
rules:
  motion: slide
  flips: true
  supply:
    kind: roster
    layout:
      - { piece: a, at: [-3, 3], target: true }
      - { piece: b, at: [-2, 0] }
      - { piece: c, at: [0, 2] }
      - { piece: d, at: [1, 3] }
      - { piece: c, at: [2, 2] }
      - { piece: c, at: [3, 3] }
  terminal: at-goal
  onWin: freeze
info: >-
  Blocks slide along the six directions — and here they may also tip over an edge: select a
  block, then tap an empty cell right beside it to flip it across the shared edge. A flipped
  block lands mirrored. Moves count Hua-Rong-Dao style — moving one block several steps in a row
  is one move. The certified optimum is 16 moves.
`;export{e as default};
