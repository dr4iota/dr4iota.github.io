const e=`id: fill-pent-3x20
title: Pentominoes · 3×20
genus: fill
order: 54
space: tessera
board: { p: 4, q: 4 }
# The scarcest rectangle for the 12 pentominoes — only two tilings up to symmetry.
region: { rect: [20, 3] }
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
`;export{e as default};
