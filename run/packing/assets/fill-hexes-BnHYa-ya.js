const e=`id: fill-hexes
title: Honeycomb ring
space: tessera
genus: hex-fill
order: 500
board: { p: 6, q: 3, rings: 1 }
pieces:
  - id: pair
    cells: [[], [0]]
    symmetry: free
    supply: { count: 3 }
  - id: mono
    cells: [[]]
    supply: { count: 1 }
info: >-
  Hexagons, three to a corner — the honeycomb, as flat as the square grid and
  just as fillable.
about: |
  This is {6,3}: the honeycomb, hexagons meeting three to a corner. It is
  perfectly flat — squares {4,4}, hexagons {6,3} and triangles {3,6} are the
  only regular tilings that fit in the flat plane. Every other board the engine
  can cut needs curvature.
`;export{e as default};
