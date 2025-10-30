const e=`id: fill-reflecting-pool
title: Reflecting Pool · 5×11
genus: fill
order: 30
space: square
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
pieces: [{ use: tetrominoes, pick: [T], symmetry: free, supply: { count: 12 } }]
about: |
  A long thin pool of still water with a walkway all around — like the
  Reflecting Pool on the National Mall in Washington, the mirror that holds
  the Lincoln Memorial upside down. Your twelve T's pave the banks; the
  water stays open. Pools are pickier than they look: make this one a cell
  shorter or longer and no arrangement of T's works at all, however you try.
  And the smallest pool that can be paved — a 5×7 with a three-cell strip of
  water — fills in **exactly one way**: a mirror holds only one reflection.
`;export{e as default};
