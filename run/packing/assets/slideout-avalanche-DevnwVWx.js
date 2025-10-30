const e=`# Blocks slide along the six lane directions and may also TIP OVER an edge:
# select a block, then tap an empty cell beside it to turn it across the shared
# edge. It lands mirrored, which is why every block here is \`symmetry: free\`.
#
# Two rules make the board what it is. A rigid slide SWEEPS the cell between
# start and destination — on {3,6} a step is two crossings, and the cell jumped
# over must be empty, so a guard blocks a corridor until it moves. And a block
# may only tip over an edge it lies wholly on one side of; straddle the line and
# there is nothing to pivot on.
# Certified: the flat kingdom's optimal path replays here move for move, in
# exactly par 42 (2026-08-14). Minimality is parquet's Rust solver's — a search
# in TypeScript does not finish on a board this size.
#
# A tumble is legal here where a rigid slide would round, and the difference is
# the mathematics: a reflection in a tiling edge is an exact symmetry of {p,q} at
# every curvature. Moves count Hua-Rong-Dao style — everything one block reaches
# on its own is one move.
id: slideout-avalanche
title: Avalanche
space: tessera
genus: tri-slideout
order: 549
par: 42
board: { p: 3, q: 6 }
orient: edge-down
region: { triangle: 4 }
marks: { goal: [[-2, 2], [-1, 2], [-2, 3]] }
pieces:
  - id: a
    cells: [[1, 0], [2, 0], [2, 1]]
    lattice: true
    symmetry: free
  - id: b
    cells: [[1, 0], [2, 0], [3, 0], [4, 0]]
    lattice: true
    symmetry: free
  - { id: c, cells: [[0, 0], [0, 1]], lattice: true, symmetry: free }
  - { id: d, cells: [[0, 0]], lattice: true, symmetry: free }
rules:
  motion: slide
  slide: { unit: translation, metric: moves }
  flips: true
  supply:
    kind: roster
    layout:
      - { piece: a, at: [1, 2], target: true }
      - { piece: b, at: [-2, 3] }
      - { piece: c, at: [-1, 1] }
      - { piece: d, at: [0, 2] }
      - { piece: d, at: [1, 1] }
      - { piece: d, at: [3, 3] }
  terminal: at-goal
  onWin: freeze
info: "Blocks slide along the six directions — and here they may also tip over an edge:
  select a block, then tap an empty cell right beside it to flip it across the shared edge.
  A flipped block lands mirrored. Moves count Hua-Rong-Dao style — moving one block several
  steps in a row is one move. A marathon: the certified optimum is 42 moves."
`;export{e as default};
