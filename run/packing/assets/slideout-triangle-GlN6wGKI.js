const e=`# Tri Slide-Out — the side-4 triangle: bring the big red triangle from the
# apex down to its den at the bottom center; a guard sits in the way and must
# step aside (and not into the den row's path). Machine-certified by
# \`solves_shipped_triangle\` in rust/parquet-engine/src/tri/slideout.rs: the
# solver finds a path, replays it action-for-action for legality, and pins
# the 2-piece-move optimum.
# The T piece is authored pre-normalized (min x ∈ {0, 1}): a roster \`at\` is
# the pose offset against the normalized orientation-0 shape.
id: slideout-triangle
title: Downhill
space: trihex
genus: tri-slideout
order: 41
region:
  triangle: 4
marks:
  goal: [[0, 2], [-1, 3], [0, 3], [1, 3]]
pieces:
  - { id: T, cells: [[2, 0], [1, 1], [2, 1], [3, 1]], symmetry: fixed }
  - { id: u, cells: [[0, 0]], symmetry: fixed }
rules:
  motion: slide
  supply:
    kind: roster
    layout:
      - { piece: T, at: [-2, 0], target: true }
      - { piece: u, at: [0, 2] }
  terminal: at-goal
  onWin: freeze
info: >-
  The red triangle moves along the 60° diagonals — two diagonal steps make
  one row of descent.
`;export{e as default};
