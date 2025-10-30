const n=`# Iamond Fill ladder, step 3 — the side-4 triangle (16 cells): two straight
# bars and two size-2 triangles. The board's 10:6 up/down split forces both
# small triangles to point up — a gentle lesson in the lattice's parity.
# Certified: 36 solutions (packing-tri-cert, 2026-07-06).
id: triangle-4
title: Triangles in a Triangle
space: trihex
genus: iamond-fill
order: 3
region:
  triangle: 4
pieces:
  - id: bar4
    cells: [[0, 0], [1, 0], [2, 0], [3, 0]]
    supply: { count: 2 }
  - id: tri2
    cells: [[0, 0], [-1, 1], [0, 1], [1, 1]]
    supply: { count: 2 }
`;export{n as default};
