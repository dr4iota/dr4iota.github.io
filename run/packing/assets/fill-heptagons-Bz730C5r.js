const e=`id: fill-heptagons
title: Heptagons, three to a corner
space: tessera
genus: tessera-fill
order: 6
stage: labs
board: { p: 7, q: 3, rings: 1 }
region: { rings: 1 }
pieces:
  - use: polycells
    sizes: [2, 3]
    pick: [c2-0, c3-1, c3-2]
    symmetry: free
info: >-
  Seven-sided tiles, three to a corner — and with an odd number of sides,
  "straight on" no longer exists.
about: |
  This is {7,3}: regular **heptagons**, three around every corner. It is the
  tiling on the cover of every book about hyperbolic geometry, and the
  centre tile alone has seven neighbours.

  Odd-sided tiles bring a wrinkle worth knowing. On squares or hexagons, a
  tile has an exactly opposite side, so a piece can carry straight on across
  the board. A heptagon has no opposite side — only two sides that lean
  either way — so as a piece travels, the game keeps it as close to
  unturned as the tiling allows, and picks the nearer of the two when it
  must choose.
`;export{e as default};
