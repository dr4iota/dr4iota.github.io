const e=`id: merge-trio-4x4
title: Trio · 4×4
genus: merge
order: 125
space: square
info: A 1 and a 2 combine into 3, then equal tiles double from there.
# The Threes merge rule on the slide-all engine: a 1 and a 2 combine into 3,
# then equal tiles (≥3) double. (Authentic Threes also uses a one-step slide +
# edge spawn — a future Motion variant; this is the merge, on the standard slide.)
skin: { name: tiles, ramp: [1, 2, 3, 6, 12, 24, 48, 96, 192, 384, 768] }
region: { rect: [4, 4] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  merge: trio
  reaction: []
  supply: { kind: spawn, values: { 1: 0.4, 2: 0.4, 3: 0.2 } }
  terminal: { win: { maxTile: 384 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 333
about: |
  The merge rule of *Threes* (Sirvo, February 2014) — the game that started
  the whole genre after fourteen months of design by Asher Vollmer and Greg
  Wohlwend. Its signature move: 1 and 2 merge into 3, and from there only
  equal tiles pair up. Weeks after its release, free derivatives (*1024*,
  then *2048*) made the mechanic world-famous; Threes remains the original.

  Note this level keeps 2048-style all-the-way sliding — authentic Threes
  moves every tile exactly one step — so think of it as Threes arithmetic in
  2048 motion.
`;export{e as default};
