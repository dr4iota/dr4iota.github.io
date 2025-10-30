const e=`id: merge-equal-5x5
title: 5×5 Square
genus: merge
order: 105
space: square
skin: tiles
# Roomier board — easier to reach 2048, so the target is pushed to 4096.
region: { rect: [5, 5] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  reaction: []
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 4096 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 4096
`;export{e as default};
