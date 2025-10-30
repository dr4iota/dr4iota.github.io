const e=`# The unit hexagon — six triangles around one vertex, tiled by three diamonds.
# The gentlest board in the ladder: every piece is the same shape, so only
# orientation matters.
# Certified: 12 covers, tesseraCount — the number parquet's tri engine certifies
# for the same board (2026-08-14).
id: hexagon-1
title: Three Diamonds
space: tessera
genus: iamond-fill
order: 501
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 1 }
pieces:
  - id: d
    cells: [[0, 0], [1, 0]]
    lattice: true
    symmetry: one-sided
    supply: { count: 3 }
`;export{e as default};
