const e=`id: drop-pentomino-12x18
title: Pentomino Drop · 12×18
genus: drop
order: 220
space: square
# A falling-block drop with the twelve pentominoes — a pure recombination of the falling
# dials (gravity-settle / collapse-rows / 12-piece bag), no engine change.
# One-sided symmetry: rotations only, no reflections (so F/Y/… keep a chirality).
region: { rect: [12, 18] }
pieces: [{ use: pentominoes, symmetry: one-sided, supply: unlimited }]
rules:
  motion: gravity-settle
  reaction: [{ kind: clear-lines, lines: rows, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 900 }
  terminal: stack-out
  score: drop-lines
  seed: 5
`;export{e as default};
