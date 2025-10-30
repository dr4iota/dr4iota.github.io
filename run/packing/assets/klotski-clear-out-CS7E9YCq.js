const e=`id: klotski-clear-out
title: Slide-Out · clear the exit
genus: klotski
order: 314
space: square
# Empty the board: slide every block out through the doorway into the buffer (the
# muted 2-wide lane on the right) and it disappears. The gate (the vertical bar at
# the doorway) leaves first, then each row's blocks slide out. Win when the board
# is clear. Every piece here is consumable — contrast Gridlock, where only the
# target leaves.
region: { rect: [4, 4] }
buffer: { cells: [[4, 0], [5, 0], [4, 1], [5, 1], [4, 2], [5, 2], [4, 3], [5, 3]] }
pieces:
  - { id: bar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: gate, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  reaction: [buffer-exit]
  terminal: cleared
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: gate, at: [3, 0] } # (3,0),(3,1) blocks the doorway — out first
      - { piece: bar, at: [0, 0] }
      - { piece: bar, at: [0, 1] }
      - { piece: bar, at: [0, 2] }
      - { piece: bar, at: [2, 2] }
`;export{e as default};
