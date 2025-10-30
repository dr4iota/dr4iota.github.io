const e=`# Tri Drop — the shorter standard well.
# The fall is \`zigzag: [4, 3]\` — lane directions \`(+1, +1)\` and \`(−1, +1)\`,
# alternating by row parity so the column comes out vertical. Each step is a
# TRANSLATION, two side crossings rather than one: a single crossing on {3,6}
# lands on the other triangle class, and a piece that took it would arrive
# upside down. Rows clear as lane clears along the row family, and collapse.
id: drop-iamond-12x16
title: Tri Drop · 12×16
space: tessera
genus: drop
order: 560
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [12, 16] }
pieces: [{ use: polyiamonds, sizes: [1, 2, 3, 4], symmetry: one-sided }]
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
  clock: { kind: interval, ms: 800 }
about: |
  Tetris met the triangular grid in hobbyist curiosities decades ago (the
  closest well-known relative is Lucas Goel's *Tritris*, which sidesteps the
  problem by cutting square cells into right triangles). This version takes the
  genre's lattice problem head-on. A true triangle grid has no one-row vertical
  move — a straight drop would flip every triangle's pointing — so the piece
  *leans down the diagonals*, alternating south-east and south-west. Each step
  is still one full row of descent; clears collapse along the same walk. Pieces
  range from a single triangle up to the tetriamonds, so there is always
  something small enough to patch a hole.
`;export{e as default};
