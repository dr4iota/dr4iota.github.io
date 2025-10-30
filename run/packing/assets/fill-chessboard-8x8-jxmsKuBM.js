const e=`id: fill-chessboard-8x8
title: Broken chessboard · 8×8
genus: fill
order: 52
space: tessera
board: { p: 4, q: 4 }
# Dudeney's Broken Chessboard (The Canterbury Puzzles, 1907): the twelve
# pentominoes plus the 2×2 square tile the 8×8 board — the first appearance
# of the full pentomino set in print. Engine-verified solvable (2026-07-04).
region: { rect: [8, 8] }
pieces:
  - { id: F, cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]], lattice: true, symmetry: free }
  - { id: I, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], lattice: true, symmetry: free }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]], lattice: true, symmetry: free }
  - { id: N, cells: [[1, 0], [1, 1], [0, 2], [1, 2], [0, 3]], lattice: true, symmetry: free }
  - { id: P, cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], lattice: true, symmetry: free }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]], lattice: true, symmetry: free }
  - { id: U, cells: [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]], lattice: true, symmetry: free }
  - { id: V, cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]], lattice: true, symmetry: free }
  - { id: W, cells: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: free }
  - { id: X, cells: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], lattice: true, symmetry: free }
  - { id: Y, cells: [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]], lattice: true, symmetry: free }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: free }
  - { id: O, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], lattice: true, symmetry: free }
about: |
  The oldest pentomino puzzle in print. In 1907 the English puzzle master
  Henry Dudeney told the story — in *The Canterbury Puzzles* — of a
  chessboard smashed into thirteen pieces: the twelve pentominoes, making
  their very first appearance anywhere, plus one square 2×2 piece, because
  64 = 12 × 5 + 4. Your copy is in better shape: the same thirteen pieces
  and the same board, more than a century later. Keep an eye on the little
  square — where it settles shapes everything around it.
`;export{e as default};
