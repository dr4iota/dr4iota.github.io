const e=`# Iamond Fill ladder, step 9 — the grandstand trapezoid (side-8 triangle with
# its side-4 crown removed; 48 cells). The board's 26:22 up/down split forces
# the two unbalanced pieces to BOTH lean the same way — where the balanced
# 12×3 block made sphinx and yacht oppose, this terrace makes them agree.
# Pick chosen mid-range by engine search over the 210 sphinx+yacht subsets
# (127 tile it, raw 2..54). Certified: 10 raw = 5 solutions past the mirror
# (packing-tri-cert, 2026-07-25).
id: trapezoid-8-4
title: Grandstand
space: trihex
genus: iamond-fill
order: 9
region:
  mask:
    - '....#########...'
    - '...###########..'
    - '..#############.'
    - '.###############'
pieces:
  - use: hexiamonds
    pick: [bar, crook, crown, sphinx, yacht, chevron, lobster, hexagon]
`;export{e as default};
