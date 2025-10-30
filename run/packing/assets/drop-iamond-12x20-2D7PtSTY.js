const n=`# Tri Drop — gentle intro. A tall, roomy board with only the smallest
# polyiamonds (1–3) and a slow clock, so there is always a single triangle or
# diamond to patch a gap while the player learns the diagonal SE/SW lean.
id: drop-iamond-12x20
title: Tri Drop · 12×20
space: trihex
genus: drop
order: 65
region:
  rect: [12, 20]
pieces:
  # Only the small fillers — moniamond (1), diamond (2), triamond (3). No
  # tetriamonds yet, so every gap stays easy to patch.
  - { use: polyiamonds, sizes: [1, 2, 3], symmetry: one-sided }
rules:
  motion: gravity-settle
  reaction: [{ kind: clear-lines, lines: rows, collapse: true }]
  supply: { kind: bag }
  terminal: stack-out
  score: lane-clears
  clock: { kind: interval, ms: 950 }
about: |
  A calm place to learn the diagonal fall. On a true triangle grid a piece
  cannot drop straight down — it leans south-east, then south-west, one full
  row at a time, and you bias the lean with the arrows. Here only the smallest
  polyiamonds fall — a single triangle, a diamond, a triamond — so there is
  always something small enough to slot into a gap. Clear a full horizontal row
  and everything above settles back down the same alternating diagonals.
`;export{n as default};
