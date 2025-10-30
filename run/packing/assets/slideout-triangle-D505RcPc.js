const e=`# Blocks slide along the six lane directions and may also TIP OVER an edge:
# select a block, then tap an empty cell beside it to turn it across the shared
# edge. It lands mirrored, which is why every block here is \`symmetry: free\`.
#
# Two rules make the board what it is. A rigid slide SWEEPS the cell between
# start and destination — on {3,6} a step is two crossings, and the cell jumped
# over must be empty, so a guard blocks a corridor until it moves. And a block
# may only tip over an edge it lies wholly on one side of; straddle the line and
# there is nothing to pivot on.
#
# A tumble is legal here where a rigid slide would round, and the difference is
# the mathematics: a reflection in a tiling edge is an exact symmetry of {p,q} at
# every curvature. Moves count Hua-Rong-Dao style — everything one block reaches
# on its own is one move.
id: slideout-triangle
title: Downhill
space: tessera
genus: tri-slideout
order: 541
board: { p: 3, q: 6 }
orient: edge-down
region: { triangle: 4 }
marks: { goal: [[0, 2], [-1, 3], [0, 3], [1, 3]] }
pieces:
  - id: T
    cells: [[2, 0], [1, 1], [2, 1], [3, 1]]
    lattice: true
    symmetry: fixed
  - { id: u, cells: [[0, 0]], lattice: true, symmetry: fixed }
rules:
  motion: slide
  slide: { unit: translation, metric: moves }
  supply:
    kind: roster
    layout: [{ piece: T, at: [0, 0], target: true }, { piece: u, at: [0, 2] }]
  terminal: at-goal
  onWin: freeze
info: The red triangle moves along the 60° diagonals — two diagonal steps make one row of
  descent.
`;export{e as default};
