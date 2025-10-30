const e=`id: fill-reflecting-pool
title: Reflecting Pool · 5×11
genus: fill
order: 30
space: tessera
board: { p: 4, q: 4 }
# A 5×11 bank with a 1×7 water strip in the center row (3rd cell from each
# end), filled by twelve T-tetrominoes. Engine-verified (2026-07-04): solvable
# with many arrangements; lengths 8, 9 and 10 count zero (T-parity), and the
# smallest pool that works, 5×7, fills in exactly one way (40320 raw = 8!).
region:
  mask:
    - '###########'
    - '###########'
    - '##.......##'
    - '###########'
    - '###########'
pieces:
  - { id: T#1, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#2, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#3, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#4, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#5, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#6, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#7, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#8, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#9, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#10, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#11, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
  - { id: T#12, cells: [[0, 0], [1, 0], [2, 0], [1, 1]], lattice: true, symmetry: free }
about: |
  A long thin pool of still water with a walkway all around — like the
  Reflecting Pool on the National Mall in Washington, the mirror that holds
  the Lincoln Memorial upside down. Your twelve T's pave the banks; the
  water stays open. Pools are pickier than they look: make this one a cell
  shorter or longer and no arrangement of T's works at all, however you try.
  And the smallest pool that can be paved — a 5×7 with a three-cell strip of
  water — fills in **exactly one way**: a mirror holds only one reflection.
`;export{e as default};
