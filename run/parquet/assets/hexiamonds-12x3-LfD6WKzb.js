const e=`# Iamond Fill ladder, step 5 — a 12×3 zigzag block (36 cells) with half the
# hexiamond set, including both unbalanced pieces (sphinx and yacht — the only
# two whose up/down triangle counts differ, so they must travel as a pair on
# any balanced board). Pick chosen by engine search over the six-piece subsets.
# Certified: 2 solutions (packing-tri-cert, 2026-07-06) — a genuinely tight fit.
id: hexiamonds-12x3
title: Six of Twelve
space: trihex
genus: iamond-fill
order: 5
region:
  rect: [12, 3]
pieces:
  - use: hexiamonds
    pick: [bar, crook, sphinx, yacht, hexagon, butterfly]
`;export{e as default};
