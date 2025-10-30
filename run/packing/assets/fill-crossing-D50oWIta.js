const e=`id: fill-crossing
title: Five squares to a corner
space: tessera
genus: tessera-fill
order: 3
stage: labs
board: { p: 4, q: 5, rings: 1 }
pieces:
  - id: elbow
    cells: [[], [0], [0, 1]]
    symmetry: free
    supply: { count: 4 }
  - id: mono
    cells: [[]]
    supply: { count: 1 }
info: >-
  Every tile here is the SAME regular four-sided cell — the disk drawing
  shrinks them toward the rim, the way a fisheye photo shrinks the edges.
about: |
  This is {4,5}: square tiles, **five** around every corner. One more than
  flat geometry allows, so the plane must curve — this board lives in
  hyperbolic space, shown through the **Poincaré disk**.

  The cells look different — a fat diamond in the middle, slim petals near
  the edge — but that is only the map. In the hyperbolic plane itself every
  cell is the **same regular quadrilateral**: equal sides, equal corners
  (72°, which is exactly why five of them fit around a vertex). The disk
  squeezes an infinite plane into a circle, so equal things far from the
  center simply draw smaller — like the edges of a fisheye photo.

  You have played in hyperbolic space now.
`;export{e as default};
