const e=`id: mosaic-pentagons
title: An odd number of edges
space: tessera
genus: tessera-edge-match
order: 3
stage: labs
board: { p: 5, q: 4, rings: 1 }
orient: edge-down
region: { rings: 1 }
pieces:
  - id: heavy
    cells: [[]]
    symmetry: one-sided
    supply: { count: 6 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
      - { cell: 0, side: 4, label: b }
  - id: light
    cells: [[]]
    symmetry: one-sided
    supply: { count: 5 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
      - { cell: 0, side: 4, label: b }
rules:
  validity: [edge-match]
info: >-
  Pentagons: five edges, so a tile can never be painted symmetrically. Every
  seam still has to agree.
skin: { name: edges }
about: |
  Edge-matching on **pentagons**, where the tile itself refuses to be tidy.

  With an even number of edges you can paint a tile in halves, or in stripes,
  and turning it gives you back something you recognise. Five edges will not
  divide evenly into anything — three of one colour and two of the other is as
  close as it gets — so every one of a tile's five turns shows you a genuinely
  different arrangement.

  That is more freedom than it sounds like, and harder to hold in your head.
`;export{e as default};
