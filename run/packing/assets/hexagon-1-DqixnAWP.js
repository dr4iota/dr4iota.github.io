const e=`# Iamond Fill ladder, step 1 — the unit hexagon: six triangles around one
# vertex, tiled by three diamonds (the 2-cell polyiamond). The gentlest
# possible board: every piece is the same shape, only orientation matters.
# Certified: 12 solutions (packing-tri-cert, 2026-07-06).
id: hexagon-1
title: Three Diamonds
space: trihex
genus: iamond-fill
order: 1
region:
  hexagon: 1
pieces:
  - id: d
    cells: [[0, 0], [1, 0]]
    symmetry: one-sided
    supply: { count: 3 }
`;export{e as default};
