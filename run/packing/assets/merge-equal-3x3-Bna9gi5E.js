const e=`id: merge-equal-3x3
title: 3×3 Square
genus: merge
order: 95
space: square
skin: tiles
# Nine cells leave no room to breathe — reaching 128 is the real challenge.
region: { rect: [3, 3] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  reaction: []
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 128 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 128
`;export{e as default};
