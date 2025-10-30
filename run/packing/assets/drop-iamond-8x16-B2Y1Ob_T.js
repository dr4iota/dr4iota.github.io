const n=`# Tri Drop — narrow and fast: eight wide with a quick clock, less room to lean
# and less time to think.
# The fall is \`zigzag: [4, 3]\` — lane directions \`(+1, +1)\` and \`(−1, +1)\`,
# alternating by row parity so the column comes out vertical. Each step is a
# TRANSLATION, two side crossings rather than one: a single crossing on {3,6}
# lands on the other triangle class, and a piece that took it would arrive
# upside down. Rows clear as lane clears along the row family, and collapse.
id: drop-iamond-8x16
title: Tri Drop · 8×16 fast
space: tessera
genus: drop
order: 570
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [8, 16] }
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
  clock: { kind: interval, ms: 650 }
about: |
  The pressure version. A narrow eight-wide well and a fast clock leave little
  room to lean and little time to plan, with the full deal up to the
  tetriamonds falling. Pack tight along the diagonals and clear rows before the
  stack leans its way out of the top.
`;export{n as default};
