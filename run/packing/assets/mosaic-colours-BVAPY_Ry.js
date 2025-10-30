const e=`id: mosaic-colours
title: Colours that must agree
space: tessera
genus: tessera-edge-match
order: 1
stage: labs
board: { p: 4, q: 5, rings: 1 }
region: { rings: 1 }
pieces:
  - id: split
    cells: [[]]
    symmetry: one-sided
    supply: { count: 7 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 3, label: b }
  - id: banded
    cells: [[]]
    symmetry: one-sided
    supply: { count: 6 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
rules:
  validity: [edge-match]
info: >-
  Thirteen tiles: seven split, six banded. Turning a tile turns its colours
  with it.
skin: { name: edges }
about: |
  A **MacMahon** board in the hyperbolic plane — {4,5}, five square tiles
  around every corner. Thirteen tiles, two paintings: seven **split** (two
  neighbouring edges of each colour) and six **banded** (colours opposite).

  Turning a tile turns its colours with it. That sounds too obvious to say,
  and it is the whole difficulty: a curved board has no global north, so
  "the red edge points up" means nothing you can carry from one cell to
  another. What the game carries instead is the tile's own frame — its
  colours ride the piece, and the seam test asks only what the two tiles
  facing each other actually show.
`;export{e as default};
