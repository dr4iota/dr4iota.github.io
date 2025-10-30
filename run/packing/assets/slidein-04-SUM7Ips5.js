const e=`id: slidein-04
title: easy · 4
genus: slidein
order: 323
par: 6
space: square
info: Pieces may slide across the open slot but needn't fill it.
# EASY — bridged rooms. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 24-cell region,
# 6 pieces, 4×4 unloading pocket, 4-cell passage,
# min 6 steps / 26 slides. Stage each piece in the buffer (right), then slide it in to fill the
# region. Rotation/flip allowed (free pieces).
region:
  mask:
    - '###.###'
    - '###.###'
    - '###.###'
    - '###.###'
buffer: { cells: [[7, 0], [7, 1], [7, 2], [7, 3], [8, 0], [8, 1], [8, 2], [8, 3], [9, 0], [9, 1], [9, 2], [9, 3], [10, 0], [10, 1], [10, 2], [10, 3]] }
passage: { cells: [[3, 0], [3, 1], [3, 2], [3, 3]] }
pieces:
  - { id: s0, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], symmetry: free, supply: { count: 1 } }
  - { id: s1, cells: [[0, 0], [0, 1], [1, 0], [1, 1]], symmetry: free, supply: { count: 1 } }
  - { id: s2, cells: [[0, 0], [0, 1], [1, 0], [1, 1]], symmetry: free, supply: { count: 1 } }
  - { id: s3, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], symmetry: free, supply: { count: 1 } }
  - { id: s4, cells: [[0, 2], [1, 0], [1, 1], [1, 2]], symmetry: free, supply: { count: 1 } }
  - { id: s5, cells: [[0, 2], [1, 0], [1, 1], [1, 2]], symmetry: free, supply: { count: 1 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
  onWin: freeze
`;export{e as default};
