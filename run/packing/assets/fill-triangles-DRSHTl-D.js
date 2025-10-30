const e=`id: fill-triangles
title: Seven triangles to a corner
space: tessera
genus: tessera-fill
order: 7
stage: labs
board: { p: 3, q: 7, rings: 1 }
region: { rings: 1 }
pieces:
  - use: polycells
    sizes: [2, 4, 5]
    pick: [c2-0, c4-1, c5-0, c5-2]
    symmetry: free
info: >-
  Triangles again — but seven around each corner instead of the flat six,
  and the whole sheet buckles into the disk.
about: |
  This is {3,7}: equilateral **triangles**, seven around every corner. The
  flat honeycomb of triangles puts six at each corner ({3,6}); squeezing in
  a seventh is exactly one triangle too many for the plane, so the surface
  curves away and sixteen tiles already reach the rim.

  Four different pieces, one of each — the polyiamond deal, on a board that
  cannot be drawn flat without distortion.
`;export{e as default};
