const e=`id: drop-tetromino-6x16
title: Tetromino Drop · 6×16 fast
genus: drop
order: 210
space: square
# A narrow well at a quicker cadence — less room to recover, faster to stack out.
region: { rect: [6, 16] }
pieces: [{ use: tetrominoes, symmetry: one-sided, supply: unlimited }]
rules:
  motion: gravity-settle
  reaction: [{ kind: clear-lines, lines: rows, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 600 }
  terminal: stack-out
  score: drop-lines
  seed: 16
`;export{e as default};
