const e=`id: fill-crown
title: Twenty-nine heptagons
space: tessera
genus: tessera-fill
order: 11
stage: labs
board: { p: 7, q: 3, rings: 2 }
pieces:
  - use: polycells
    sizes: [3, 4]
    pick: [c3-0, c3-1, c3-2, c4-0, c4-1, c4-2, c4-4, c4-6]
    symmetry: free
info: >-
  The {7,3} board taken to its second ring — twenty-nine heptagons, eight
  distinct pieces, and only fourteen arrangements that cover it.
about: |
  The heptagon board, one ring further out: a centre, a ring of seven, and a
  ring of **twenty-one**. Three tiles in the ring for every one a flat board
  would grant — the exponential crowd of the hyperbolic plane, already
  unmistakable at radius two.

  The deal is one of each: all three of the tiling's three-cell shapes and
  five of its ten four-cell shapes. Eight silhouettes, no duplicates, and
  no room for goodwill — of the 252 ways to choose five tetracells to ride
  with the three tricells, only **54** can cover this board at all. This
  choice admits exactly **fourteen** covering arrangements, counted by the
  same exact-cover search behind Hint and Solve — the tightest deal in the
  hyperbolic ladder.
`;export{e as default};
