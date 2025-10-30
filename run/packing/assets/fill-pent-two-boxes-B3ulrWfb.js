const e=`id: fill-pent-two-boxes
title: Two boxes · 5×6 each
genus: fill
order: 44
space: tessera
board: { p: 4, q: 4 }
info: Fill the two separate boxes at the same time.
# The full dozen split across two separate 5×6 boxes. Engine-verified
# (2026-07-04): 64 raw assignments. Equivalent to a 6×10 tiling with a clean
# straight seam down the middle — far scarcer than the 2,339 free ones.
region:
  mask:
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
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
  All twelve pentominoes, two separate boxes. Nobody tells you which pieces
  belong together — **the split is the real puzzle**. Choosing six pieces for
  the left box decides the six that remain for the right, and most splits
  doom one side or the other. Another way to see it: this is the famous 6×10
  rectangle sawed clean in half — of its 2,339 tilings, only a rare few have
  a straight seam all the way down the middle, and those are exactly the
  boards that can win here.
`;export{e as default};
