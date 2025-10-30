const e=`id: fill-triple-v
title: Giant V · ×3
genus: fill
order: 38
space: tessera
board: { p: 4, q: 4 }
# Triplication: build the V pentomino at 3× scale (9× the area) from nine
# other pentominoes. Engine-verified (2026-07-04): this set has 16 raw
# assignments = 8 solutions (the giant V's mirror symmetry halves them), and
# every one of the twelve pentominoes can be tripled from nine of its fellows.
region:
  mask:
    - '###......'
    - '###......'
    - '###......'
    - '###......'
    - '###......'
    - '###......'
    - '#########'
    - '#########'
    - '#########'
pieces:
  - { id: F, cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]], lattice: true, symmetry: free }
  - { id: I, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], lattice: true, symmetry: free }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]], lattice: true, symmetry: free }
  - { id: P, cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], lattice: true, symmetry: free }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]], lattice: true, symmetry: free }
  - { id: U, cells: [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]], lattice: true, symmetry: free }
  - { id: W, cells: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: free }
  - { id: Y, cells: [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]], lattice: true, symmetry: free }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]], lattice: true, symmetry: free }
about: |
  Make a pentomino out of pentominoes! The board is a **V blown up three
  times** — three times as tall and three times as wide, so nine times the
  area: room for exactly nine pieces. Puzzlers call this **triplication**, a
  classic pastime from Solomon Golomb's pentomino book, and every one of the
  twelve pentominoes can be built at 3× scale from nine of its fellows.
  Corners first: the giant V has three of them, and only a few pieces can
  fill a corner neatly.
`;export{e as default};
