const e=`# Iamond Fill ladder, step 2 — the side-3 triangle (9 cells) tiled by three
# straight triamonds. The rows shrink toward the apex, so at least one bar
# must lie along a slanted lane — the first taste of the three lane axes.
# (A triamond is 2 up + 1 down or vice versa, so a mixed triamond+diamond
# inventory can never balance this board's 6:3 split — engine-checked.)
# Certified: 12 solutions (packing-tri-cert, 2026-07-06).
id: triangle-3
title: Little Pyramid
space: trihex
genus: iamond-fill
order: 2
region:
  triangle: 3
pieces:
  - id: bar3
    cells: [[0, 0], [1, 0], [2, 0]]
    supply: { count: 3 }
`;export{e as default};
