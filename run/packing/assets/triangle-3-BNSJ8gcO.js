const e=`# The side-3 triangle (9 cells) under three straight triamonds. Rows shrink
# toward the apex, so at least one bar must lie along a slanted lane.
# Certified: 12 covers, matching parquet's tri engine (2026-08-14).
id: triangle-3
title: Little Pyramid
space: tessera
genus: iamond-fill
order: 502
board: { p: 3, q: 6 }
orient: edge-down
region: { triangle: 3 }
pieces:
  - id: bar3
    cells: [[0, 0], [1, 0], [2, 0]]
    lattice: true
    supply: { count: 3 }
`;export{e as default};
