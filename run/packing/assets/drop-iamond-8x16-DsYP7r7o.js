const e=`# Tri Drop — narrow, fast board with the full deal (sizes 1–4) and a quick
# clock. Less room to lean and less time to think than the 12×16 standard.
id: drop-iamond-8x16
title: Tri Drop · 8×16 fast
space: trihex
genus: drop
order: 75
region:
  rect: [8, 16]
pieces:
  # The full small-polyiamond deal, moniamond through the three tetriamonds —
  # size-1/2 fillers keep gaps fixable even at speed.
  - { use: polyiamonds, sizes: [1, 2, 3, 4], symmetry: one-sided }
rules:
  motion: gravity-settle
  reaction: [{ kind: clear-lines, lines: rows, collapse: true }]
  supply: { kind: bag }
  terminal: stack-out
  score: lane-clears
  clock: { kind: interval, ms: 650 }
about: |
  The pressure version. A narrow eight-wide well and a fast clock leave little
  room to lean and little time to plan, with the full deal up to the
  tetriamonds falling. Pack tight along the diagonals and clear rows before the
  stack leans its way out of the top.
`;export{e as default};
