const n=`# Iamond Fill ladder, step 8 — the crown hexiamond scaled ×2 (24 cells, spike
# up). Only 3 of the 495 quartets tile it at all, and this one does it in
# exactly ONE way — a unique solution from just four pieces. Note the crown
# itself is not among them: the doubled crown refuses its own shape.
# Certified: 2 raw = 1 solution past the board's mirror (packing-tri-cert, 2026-07-25).
id: crown-x2
title: The Double Crown
space: trihex
genus: iamond-fill
order: 8
region:
  mask:
    - '......#.....'
    - '.....###....'
    - '.###########'
    - '..#########.'
pieces:
  - use: hexiamonds
    pick: [bar, crook, sphinx, yacht]
`;export{n as default};
