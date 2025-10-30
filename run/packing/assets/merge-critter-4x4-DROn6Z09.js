const e=`id: merge-critter-4x4
title: Critter Merge · 4×4
genus: merge
order: 118
space: square
# The merge game with icons instead of numbers — the value's rank picks an emoji from the
# labels list. display: icon, same double merge. Shows that the display method
# is fully a skin concern; the engine still just merges numbers.
skin:
  name: tiles
  display: icon
  labels: ["🥚", "🐛", "🐌", "🐝", "🐞", "🦋", "🐸", "🦎", "🐢", "🐙", "🐉"]
region: { rect: [4, 4] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  reaction: []
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 2048 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 77
`;export{e as default};
