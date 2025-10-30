const e=`# The crown hexiamond scaled ×2 (24 cells, spike up). Three of the 495 quartets
# tile it; this one does it in exactly one way. The crown is not among them —
# the doubled crown refuses its own shape.
# Certified: 2 covers (1 past the mirror), matching parquet (2026-08-14).
id: crown-x2
title: The Double Crown
space: tessera
genus: iamond-fill
order: 508
board: { p: 3, q: 6 }
orient: edge-down
region: { mask: [......#....., .....###...., .###########, ..#########.] }
pieces: [{ use: hexiamonds, pick: [bar, crook, sphinx, yacht] }]
`;export{e as default};
