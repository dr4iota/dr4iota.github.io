const e=`id: fill-tight
title: Three pieces, ten ways
space: tessera
genus: tessera-fill
order: 9
stage: labs
board: { p: 5, q: 4, rings: 1 }
orient: edge-down
region: { rings: 1 }
pieces:
  - use: polycells
    sizes: [3, 4]
    pick: [c3-0, c4-0, c4-4]
    symmetry: free
info: >-
  Eleven pentagons, three pieces, and only ten arrangements that work — the
  tightest board here.
about: |
  The {5,4} pentagon patch again, filled by three distinct pieces instead of
  a handful of pairs. Eleven tiles, and out of every way those three shapes
  can sit, exactly ten cover the board.

  The count comes from the same exact-cover search behind Hint and Solve, so
  every level in this ladder is known to have an answer before it ships.
`;export{e as default};
