const e=`id: clear-pentomino-10x10
title: Block Puzzle · pentominoes
genus: clear
order: 85
space: square
# A line-clear board with the twelve pentominoes — bigger fixed-orientation blocks
# drawn three at a time; fill a row or column to clear it. Same place-and-clear dials.
region: { rect: [10, 10] }
pieces: [{ use: pentominoes, symmetry: fixed, supply: unlimited }]
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: rows-cols }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 512
`;export{e as default};
