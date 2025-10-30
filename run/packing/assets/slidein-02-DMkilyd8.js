const e=`id: slidein-02
title: easy · 2
genus: slidein
order: 321
par: 4
space: square
# EASY — pentomino quartet LPTY. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 20-cell region,
# 4 pieces, 4×4 unloading pocket,
# min 4 steps / 16 slides. Stage each piece in the buffer (right), then slide it in to fill the
# region.
region: { rect: [5, 4] }
buffer: { cells: [[5, 0], [5, 1], [5, 2], [5, 3], [6, 0], [6, 1], [6, 2], [6, 3], [7, 0], [7, 1], [7, 2], [7, 3], [8, 0], [8, 1], [8, 2], [8, 3]] }
pieces:
  - { id: s0, cells: [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]], symmetry: fixed, supply: { count: 1 } }
  - { id: s1, cells: [[0, 2], [1, 0], [1, 1], [1, 2], [1, 3]], symmetry: fixed, supply: { count: 1 } }
  - { id: s2, cells: [[0, 2], [1, 0], [1, 1], [1, 2], [2, 2]], symmetry: fixed, supply: { count: 1 } }
  - { id: s3, cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]], symmetry: fixed, supply: { count: 1 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
  onWin: freeze
`;export{e as default};
