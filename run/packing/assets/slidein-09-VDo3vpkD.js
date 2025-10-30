const e=`id: slidein-09
title: hard · 9
genus: slidein
order: 328
par: 7
space: square
# HARD — notched bay pentominoes. Reverse-constructed (guaranteed
# solvable), valued by the min-step solver: 30-cell region,
# 6 pieces, 3×5 unloading pocket,
# min 7 steps / 25 slides (+1 interleave). Stage each piece in the buffer (right), then slide it in to fill the
# region.
region:
  mask:
    - '######'
    - '######'
    - '######'
    - '######'
    - '...###'
    - '...###'
buffer: { cells: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4]] }
pieces:
  - { id: s0, cells: [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2]], symmetry: fixed, supply: { count: 1 } }
  - { id: s1, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 0]], symmetry: fixed, supply: { count: 1 } }
  - { id: s2, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0]], symmetry: fixed, supply: { count: 1 } }
  - { id: s3, cells: [[0, 1], [0, 2], [0, 3], [1, 0], [1, 1]], symmetry: fixed, supply: { count: 1 } }
  - { id: s4, cells: [[0, 2], [1, 0], [1, 1], [1, 2], [2, 1]], symmetry: fixed, supply: { count: 1 } }
  - { id: s5, cells: [[0, 0], [0, 2], [1, 0], [1, 1], [1, 2]], symmetry: fixed, supply: { count: 1 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
  onWin: freeze
`;export{e as default};
