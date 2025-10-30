const e=`# Tri Drop — the standard well: twelve wide, twenty deep, the full deal up to
# the tetriamonds.
# The fall is \`zigzag: [4, 3]\` — lane directions \`(+1, +1)\` and \`(−1, +1)\`,
# alternating by row parity so the column comes out vertical. Each step is a
# TRANSLATION, two side crossings rather than one: a single crossing on {3,6}
# lands on the other triangle class, and a piece that took it would arrive
# upside down. Rows clear as lane clears along the row family, and collapse.
id: drop-iamond-12x20
title: Tri Drop · 12×20
space: tessera
genus: drop
order: 550
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [12, 20] }
pieces: [{ use: polyiamonds, sizes: [1, 2, 3], symmetry: one-sided }]
rules:
  gravity: { zigzag: [4, 3] }
  motion: gravity-settle
  reaction:
    - kind: clear-lines
      lines: { kind: lanes, bearings: [2] }
      collapse: true
  supply: { kind: bag }
  terminal: stack-out
  score: line-clears
  clock: { kind: interval, ms: 950 }
about: |
  A calm place to learn the diagonal fall. On a true triangle grid a piece
  cannot drop straight down — it leans south-east, then south-west, one full
  row at a time, and you bias the lean with the arrows. Here only the smallest
  polyiamonds fall — a single triangle, a diamond, a triamond — so there is
  always something small enough to slot into a gap. Clear a full horizontal row
  and everything above settles back down the same alternating diagonals.
`;export{e as default};
