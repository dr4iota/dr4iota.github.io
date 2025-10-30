const e=`# The one-sided set: 19 pieces, 114 triangles, on the twelve-piece block widened
# from twelve columns to nineteen. Seven of the twelve hexiamonds are chiral, and
# \`symmetry: one-sided\` is what keeps each mirror a piece of its own — allow a
# flip and the nineteen collapse back to twelve.
# Certified: both engines agree past 3000 covers (2026-08-14); the board fills.
id: hexiamonds-onesided-19x6
title: The Nineteen Hexiamonds
space: tessera
genus: iamond-fill
order: 512
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [19, 6] }
symmetry: one-sided
pieces:
  - { use: hexiamonds }
  - id: bar'
    cells: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]
    lattice: true
  - id: crook'
    cells: [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
    lattice: true
  - id: sphinx'
    cells: [[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [5, 0]]
    lattice: true
  - id: snake'
    cells: [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [3, 2]]
    lattice: true
  - id: yacht'
    cells: [[1, 0], [2, 0], [2, 1], [3, 0], [4, 0], [4, 1]]
    lattice: true
  - id: signpost'
    cells: [[0, 1], [1, 1], [2, 0], [2, 1], [3, 0], [3, 1]]
    lattice: true
  - id: hook'
    cells: [[1, 0], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1]]
    lattice: true
about: |
  The **one-sided** hexiamonds: nineteen pieces, not twelve. Seven of the twelve
  — bar, crook, sphinx, snake, yacht, signpost and hook — are *chiral*: no
  amount of turning makes one match its own mirror image. Count those mirrors as
  pieces in their own right and the set grows to nineteen, covering 114
  triangles, which is this board exactly.

  Think of the pieces as cut from card printed on one side only. You may turn a
  piece any way you like, but you may not flip it over — and that single
  restriction is the whole puzzle. The other five (crown, chevron, lobster,
  hexagon and butterfly) are symmetric enough that flipping them was never worth
  anything anyway.

  The board is the twelve-piece block widened from twelve columns to nineteen,
  which keeps what makes that one work: the full hexiamond set famously refuses
  every straight 60° parallelogram, and the zigzag vertical edges are the escape
  from that. Seven more pieces and seven more columns, same idea.
`;export{e as default};
