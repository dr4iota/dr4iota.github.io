const e=`# Iamond Fill ladder, step 7 — the chevron hexiamond scaled ×2 (24 cells),
# rebuilt from four of the twelve. Engine search over all 495 quartets:
# {sphinx, yacht, chevron, lobster} is the ONLY one that can tile the doubled
# chevron — and the same four are the only quartet for the doubled butterfly.
# Certified: 8 raw = 4 solutions past the board's mirror (packing-tri-cert, 2026-07-25).
id: chevron-x2
title: The Double Chevron
space: trihex
genus: iamond-fill
order: 7
region:
  mask:
    - '..........####'
    - '.........####.'
    - '....########..'
    - '...########...'
pieces:
  - use: hexiamonds
    pick: [sphinx, yacht, chevron, lobster]
`;export{e as default};
