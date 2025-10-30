const e=`id: fill-tetromino-7x8
title: Two tetromino sets · 7×8
genus: fill
order: 36
space: tessera
board: { p: 4, q: 4 }
# Two copies of each of the seven tetrominoes fill 7×8. One full set can never
# fill any rectangle (the T-parity coloring argument) — engine-confirmed: a
# single set on 4×7 counts zero. Two sets verified solvable (2026-07-04).
region: { rect: [8, 7] }
pieces:
  - { id: I#1, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], lattice: true, symmetry: free }
  - { id: I#2, cells: [[0, 0], [1, 0], [2, 0], [3, 0]], lattice: true, symmetry: free }
  - { id: O#1, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], lattice: true, symmetry: free }
  - { id: O#2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], lattice: true, symmetry: free }
  - { id: T#1, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#2, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: S#1, cells: [[1, 0], [2, 0], [0, 1], [1, 1]], lattice: true, symmetry: free }
  - { id: S#2, cells: [[1, 0], [2, 0], [0, 1], [1, 1]], lattice: true, symmetry: free }
  - { id: Z#1, cells: [[0, 0], [1, 0], [1, 1], [2, 1]], lattice: true, symmetry: free }
  - { id: Z#2, cells: [[0, 0], [1, 0], [1, 1], [2, 1]], lattice: true, symmetry: free }
  - { id: J#1, cells: [[1, 0], [1, 1], [0, 2], [1, 2]], lattice: true, symmetry: free }
  - { id: J#2, cells: [[1, 0], [1, 1], [0, 2], [1, 2]], lattice: true, symmetry: free }
  - { id: L#1, cells: [[0, 0], [0, 1], [0, 2], [1, 2]], lattice: true, symmetry: free }
  - { id: L#2, cells: [[0, 0], [0, 1], [0, 2], [1, 2]], lattice: true, symmetry: free }
about: |
  Every tetromino, twice. Why twice? Here is one of the neatest proofs in
  puzzling: color the board like a chessboard and *one* full set of seven can
  never fill any rectangle. Six of the pieces always cover two dark and two
  light squares wherever you put them — but the T covers three of one color
  and one of the other. With a single T in the set the colors can never come
  out even, and a rectangle needs them even. Two full sets means two T's, the
  colors can balance again, and the puzzle becomes possible — here is your
  board.
`;export{e as default};
