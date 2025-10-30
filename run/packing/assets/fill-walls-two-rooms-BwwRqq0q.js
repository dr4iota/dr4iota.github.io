const e=`id: fill-walls-two-rooms
title: Two rooms · 4×2
genus: fill
order: 56
space: square
# A wall splits the board into two 2×2 rooms — no piece may span it, so the
# square tetromino can't sit in the middle; each room takes its own.
region: { rect: [4, 2] }
walls: [[[1, 0], [2, 0]], [[1, 1], [2, 1]]]
pieces:
  - { id: o1, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed }
  - { id: o2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed }
`;export{e as default};
