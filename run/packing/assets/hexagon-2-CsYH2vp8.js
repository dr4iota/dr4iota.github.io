const e=`# The side-2 hexagon (24 cells) and the first meeting with the named set: the
# crook and hook are chiral, so flipping starts to matter. Only 7 of the 495
# four-piece subsets tile this hexagon at all.
# Certified: 12 covers, matching parquet's tri engine (2026-08-14).
id: hexagon-2
title: Four in a Hexagon
space: tessera
genus: iamond-fill
order: 504
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 2 }
pieces: [{ use: hexiamonds, pick: [crook, crown, hook, hexagon] }]
`;export{e as default};
