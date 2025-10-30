const e=`id: fill-triangles
title: Triangles, six to a corner
space: tessera
genus: iamond-fill
order: 500
board: { p: 3, q: 6, rings: 1 }
# Horizontal rows, apex up — the way the flat kingdom draws triangles, and the way
# a triangular grid reads. The default frame turn leaves the board on a slant.
orient: edge-down
pieces:
  - id: pair
    cells: [[], [0]]
    symmetry: free
    supply: { count: 6 }
  - id: mono
    cells: [[]]
    supply: { count: 1 }
info: >-
  Triangles, six to a corner — the third flat tiling, and the last one that fits
  in the plane. Six diamonds and a single, into thirteen tiles.
about: |
  This is {3,6}: equilateral **triangles**, six around every corner. With the
  square grid {4,4} and the honeycomb {6,3} it completes the set — those three
  are the *only* regular tilings the flat plane admits, and every other board
  this engine can cut has to curve.

  It is also the odd one out among them, in a way you can feel rather than just
  read. A square has a side opposite every side, and so does a hexagon; a
  triangle does not. So a triangle's neighbours are not copies of it slid over —
  they are the same triangle turned upside down, and the board is really two
  interleaved families of cell, points up and points down.

  That is why the diamonds here matter. A single triangle cannot be moved onto
  its neighbour without flipping, but a **diamond** — two triangles sharing an
  edge — contains one of each, and slides freely. Polyiamonds are built out of
  that asymmetry, which is what makes them feel different from polyominoes even
  though the rules of the game are identical.
`;export{e as default};
