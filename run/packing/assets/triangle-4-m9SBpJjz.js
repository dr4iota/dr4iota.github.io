const e=`# The side-4 triangle (16 cells): two bars and two size-2 triangles. The
# board's 10:6 up/down split forces both small triangles to point up — the
# lattice's parity, felt rather than read.
# Certified: 36 covers, matching parquet's tri engine (2026-08-14).
id: triangle-4
title: Triangles in a Triangle
space: tessera
genus: iamond-fill
order: 503
board: { p: 3, q: 6 }
orient: edge-down
region: { triangle: 4 }
pieces:
  - id: bar4
    cells: [[0, 0], [1, 0], [2, 0], [3, 0]]
    lattice: true
    supply: { count: 2 }
  - id: tri2
    cells: [[0, 0], [-1, 1], [0, 1], [1, 1]]
    lattice: true
    supply: { count: 2 }
`;export{e as default};
