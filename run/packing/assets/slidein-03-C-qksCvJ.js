const e=`id: slidein-03
title: easy · 3
genus: slidein
order: 322
par: 6
space: square
info: Interior walls block some slide paths.
# EASY — walled pentomino sextet. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 30-cell region,
# 6 pieces, 4×6 unloading pocket, 2 walls,
# min 6 steps / 25 slides. Stage each piece in the buffer (right), then slide it in to fill the
# region. Rotation/flip allowed (free pieces).
region: { rect: [5, 6] }
buffer: { cells: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5]] }
walls: [[[1, 2], [1, 3]], [[3, 2], [3, 3]]]
pieces:
  - { id: s0, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]], symmetry: free, supply: { count: 1 } }
  - { id: s1, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 0]], symmetry: free, supply: { count: 1 } }
  - { id: s2, cells: [[0, 1], [1, 0], [1, 1], [1, 2], [1, 3]], symmetry: free, supply: { count: 1 } }
  - { id: s3, cells: [[0, 2], [0, 3], [1, 0], [1, 1], [1, 2]], symmetry: free, supply: { count: 1 } }
  - { id: s4, cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]], symmetry: free, supply: { count: 1 } }
  - { id: s5, cells: [[0, 0], [0, 1], [1, 1], [2, 0], [2, 1]], symmetry: free, supply: { count: 1 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
  onWin: freeze
`;export{e as default};
