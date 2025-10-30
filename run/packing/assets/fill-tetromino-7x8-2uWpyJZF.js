const e=`id: fill-tetromino-7x8
title: Two tetromino sets · 7×8
genus: fill
order: 36
space: square
# Two copies of each of the seven tetrominoes fill 7×8. One full set can never
# fill any rectangle (the T-parity coloring argument) — engine-confirmed: a
# single set on 4×7 counts zero. Two sets verified solvable (2026-07-04).
region: { rect: [8, 7] }
pieces: [{ use: tetrominoes, symmetry: free, supply: { count: 2 } }]
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
