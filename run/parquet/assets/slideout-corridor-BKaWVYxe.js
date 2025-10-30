const e=`# Tri Slide-Out, starter — a 6×2 corridor: walk the red rhomb east to its
# goal past two guards who must first duck into the bottom row. A rigid tri
# slide SWEEPS through the cell between start and destination, so the guards
# genuinely block the corridor until they move. Machine-certified by
# \`solves_shipped_corridor\` in rust/parquet-engine/src/tri/slideout.rs: the
# solver finds a path, replays it action-for-action for legality, and pins
# the 3-piece-move optimum.
id: slideout-corridor
title: Corridor
space: trihex
genus: tri-slideout
order: 40
region:
  rect: [6, 2]
marks:
  goal: [[4, 0], [5, 0]]
pieces:
  - { id: t, cells: [[0, 0], [1, 0]], symmetry: fixed }
  - { id: u, cells: [[0, 0]], symmetry: fixed }
  - { id: d, cells: [[1, 0]], symmetry: fixed }
rules:
  motion: slide
  supply:
    kind: roster
    layout:
      - { piece: t, at: [0, 0], target: true }
      - { piece: u, at: [4, 0] }
      - { piece: d, at: [4, 0] }
  terminal: at-goal
  onWin: freeze
info: >-
  A slide passes through the triangle between start and landing — a blocked
  middle cell blocks the whole step.
`;export{e as default};
