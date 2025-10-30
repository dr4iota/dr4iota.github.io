const e=`id: merge-powers-4x4
title: Powers · 4×4
genus: merge
order: 115
space: square
# Plain merge, but tiles show their *rank* (1, 2, 3, …) instead of the value —
# the logarithm view of the same game. display: rank, same double merge.
skin: { name: tiles, display: rank }
region: { rect: [4, 4] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  reaction: []
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 2048 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 11
`;export{e as default};
