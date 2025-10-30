const e=`id: fill-pent-6x10
title: Pentominoes · 6×10
genus: fill
order: 40
space: tessera
board: { p: 4, q: 4 }
region: { rect: [10, 6] }
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
about: |
  The most famous pentomino problem: fit all twelve pentominoes into the 6×10
  rectangle. It looks like the friendliest of the four rectangles (the area
  argument allows 6×10, 5×12, 4×15 and 3×20), and it is the richest — a 1960
  computer search first counted exactly **2,339** distinct solutions (not
  counting rotations and reflections). The 3×20 box, by contrast, has just 2.

  Finding even one by hand is a rite of passage; Solve will prove the board
  out with an exact-cover search if you want to watch.
`;export{e as default};
