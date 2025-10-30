const e=`id: fill-pent-8x8-corners
title: Pentominoes · 8×8, no corners
genus: fill
order: 46
space: square
# An 8×8 board with its four corners removed: 60 cells for the full set of 12
# pentominoes — a classic exact cover, sibling to the centre-hole 8×8.
region: { rect: [8, 8], holes: [[0, 0], [7, 0], [0, 7], [7, 7]] }
pieces: [{ use: pentominoes, symmetry: free }]
`;export{e as default};
