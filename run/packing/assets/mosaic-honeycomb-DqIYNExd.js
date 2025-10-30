const e=`id: mosaic-honeycomb
title: Color tiles · Honeycomb
space: tessera
genus: edge-match
order: 500
board: { p: 6, q: 3, rings: 1 }
region: { rings: 1 }
pieces:
  - id: split
    cells: [[]]
    symmetry: one-sided
    supply: { count: 4 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
      - { cell: 0, side: 4, label: b }
      - { cell: 0, side: 5, label: b }
  - id: banded
    cells: [[]]
    symmetry: one-sided
    supply: { count: 3 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
      - { cell: 0, side: 4, label: a }
      - { cell: 0, side: 5, label: b }
rules:
  validity: [edge-match]
info: >-
  Four tiles split down the middle, three banded. Turn them until every
  shared edge agrees.
skin: { name: edges }
about: |
  A **MacMahon** board on the honeycomb — the one with the most edges to
  satisfy. Every hex has six neighbours, so a tile placed in the middle has to
  agree with six others at once.

  Four of the tiles are **split**: three edges of one colour, three of the
  other, in one run. Three are **banded**: the colours alternate all the way
  round. Seven banded tiles could not be made to agree at all — the alternating
  pattern fights itself on a hexagon — which is why the mix is what it is.
`;export{e as default};
