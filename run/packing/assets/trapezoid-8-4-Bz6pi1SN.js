const e=`# The grandstand: a side-8 triangle with its side-4 crown removed (48 cells).
# The 26:22 up/down split makes the two unbalanced pieces lean the SAME way,
# where the balanced 12×3 block made them oppose.
# Certified: 10 covers (5 past the mirror), matching parquet (2026-08-14).
id: trapezoid-8-4
title: Grandstand
space: tessera
genus: iamond-fill
order: 509
board: { p: 3, q: 6 }
orient: edge-down
region:
  mask: [....#########..., ...###########.., ..#############., .###############]
pieces:
  - use: hexiamonds
    pick: [bar, crook, crown, sphinx, yacht, chevron, lobster, hexagon]
`;export{e as default};
