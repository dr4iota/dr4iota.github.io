const e=`# Tri Slide-Out with flips — machine-generated on the 16-cell hexagon board and
# certified by the rust solver (examples/tri_slideout_gen.rs): the optimum is
# 20 piece-moves (35 unit steps), and every block moves
# along that optimal line — no dead-weight guards.
id: slideout-cartwheel
title: Cartwheel
space: trihex
genus: tri-slideout
order: 46
par: 20
region:
  cells: [[-1, 1], [0, 1], [1, 1], [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2], [-2, 3], [-1, 3],
          [0, 3], [1, 3], [2, 3], [-1, 4], [0, 4], [1, 4]]
marks: { goal: [[-1, 1], [-1, 2], [0, 2], [0, 3]] }
pieces:
  - { id: a, cells: [[1, 1], [1, 2], [2, 0], [2, 1]], symmetry: free }
  - { id: b, cells: [[0, 0], [1, 0]], symmetry: free }
  - { id: c, cells: [[1, 0], [2, 0]], symmetry: free }
  - { id: d, cells: [[1, 0]], symmetry: free }
rules:
  motion: slide
  flips: true
  supply:
    kind: roster
    layout:
      - { piece: a, at: [-3, 1], target: true }
      - { piece: b, at: [-1, 3] }
      - { piece: c, at: [-2, 4] }
      - { piece: d, at: [-1, 1] }
      - { piece: d, at: [0, 2] }
      - { piece: d, at: [0, 4] }
      - { piece: d, at: [1, 3] }
  terminal: at-goal
  onWin: freeze
info: >-
  Blocks slide along the six directions — and here they may also tip over an edge: select a
  block, then tap an empty cell right beside it to flip it across the shared edge. A flipped
  block lands mirrored. Moves count Hua-Rong-Dao style — moving one block several steps in a row
  is one move. The certified optimum is 20 moves.
`;export{e as default};
