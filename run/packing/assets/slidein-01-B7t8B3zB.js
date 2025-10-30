const e=`id: slidein-01
title: easy · 1
genus: slidein
order: 320
par: 4
space: square
# EASY — tetromino quartet. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 16-cell region,
# 4 pieces, 4×3 unloading pocket,
# min 4 steps / 17 slides. Stage each piece in the buffer (right), then slide it in to fill the
# region.
region: { rect: [4, 4] }
buffer: { cells: [[4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2], [6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2]] }
pieces:
  - { id: s0, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], symmetry: fixed, supply: { count: 1 } }
  - { id: s1, cells: [[0, 0], [0, 1], [1, 0], [1, 1]], symmetry: fixed, supply: { count: 1 } }
  - { id: s2, cells: [[0, 1], [1, 1], [2, 0], [2, 1]], symmetry: fixed, supply: { count: 1 } }
  - { id: s3, cells: [[0, 0], [1, 0], [1, 1], [1, 2]], symmetry: fixed, supply: { count: 1 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
  onWin: freeze
`;export{e as default};
