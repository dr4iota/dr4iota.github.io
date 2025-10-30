const e=`id: fill-mixed
title: One of each
space: tessera
genus: tessera-fill
order: 8
stage: labs
board: { p: 4, q: 5, rings: 1 }
region: { rings: 1 }
pieces:
  - use: polycells
    sizes: [2, 3, 5]
    pick: [c2-0, c3-0, c3-1, c5-3]
    symmetry: free
info: >-
  Four different shapes, one copy each — the pentomino deal, played on a
  curved board.
about: |
  Back to {4,5}, now with the real puzzle shape: a set of distinct pieces,
  one of each, and only a handful of ways they fit.

  Pieces here are **free polyforms** of the tiling — every shape you can
  build from that many tiles, counted once up to rotation and reflection,
  exactly as polyominoes are enumerated on the square grid. The game
  enumerates them per {p,q}, so the "five-tile shapes" of this board are
  its own family, not a picture of pentominoes.
`;export{e as default};
