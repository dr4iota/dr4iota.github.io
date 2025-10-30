const e=`# A 12×3 zigzag block (36 cells) with half the hexiamond set, including both
# unbalanced pieces — sphinx and yacht are the only two whose up/down counts
# differ, so on a balanced board they must lean opposite ways.
# Certified: 2 covers, matching parquet's tri engine (2026-08-14) — a tight fit.
id: hexiamonds-12x3
title: Six of Twelve
space: tessera
genus: iamond-fill
order: 505
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [12, 3] }
pieces:
  - { use: hexiamonds, pick: [bar, crook, sphinx, yacht, hexagon, butterfly] }
`;export{e as default};
