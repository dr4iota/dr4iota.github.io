const e=`id: clear-lines-8x8
title: Lines · 8×8
genus: clear
order: 75
space: square
# Same block set as 10×10, tighter board — clears come faster but so does stuck.
region: { rect: [8, 8] }
pieces:
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: h2, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: v2, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: h3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: v3, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
  - { id: sq2, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: corner, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: rows-cols }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 88
`;export{e as default};
