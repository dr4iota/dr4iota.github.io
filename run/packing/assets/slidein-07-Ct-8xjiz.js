const e=`id: slidein-07
title: hard · 7
genus: slidein
order: 326
par: 6
space: square
# HARD — pentomino sextet. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 30-cell region,
# 6 pieces, 4×4 unloading pocket,
# min 6 steps / 31 slides. Stage each piece in the buffer (right), then slide it in to fill the
# region. Rotation/flip allowed (free pieces).
region: { rect: [5, 6] }
buffer: { cells: [[5, 2], [5, 3], [5, 4], [5, 5], [6, 2], [6, 3], [6, 4], [6, 5], [7, 2], [7, 3], [7, 4], [7, 5], [8, 2], [8, 3], [8, 4], [8, 5]] }
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
