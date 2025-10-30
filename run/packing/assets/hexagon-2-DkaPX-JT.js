const e=`# Iamond Fill ladder, step 4 — the side-2 hexagon (24 cells) with four named
# hexiamonds. First meeting with the classic set; the crook and hook are
# chiral, so flipping starts to matter. Pick chosen by engine search: only 7
# of the 495 four-piece subsets can tile this hexagon at all.
# Certified: 12 solutions (packing-tri-cert, 2026-07-06).
id: hexagon-2
title: Four in a Hexagon
space: trihex
genus: iamond-fill
order: 4
region:
  hexagon: 2
pieces:
  - use: hexiamonds
    pick: [crook, crown, hook, hexagon]
`;export{e as default};
