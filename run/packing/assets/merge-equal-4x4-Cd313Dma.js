const e=`id: merge-equal-4x4
title: 4×4 Square
genus: merge
order: 100
space: square
skin: tiles
region: { rect: [4, 4] }
# A single tile template; the generator spawns instances with a \`value\` attr.
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all          # slide + merge happen in one pass (no chains)
  reaction: []
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 2048 }, lose: stuck }
  onWin: continue            # keep playing past 2048
  score: merge-sum
  seed: 2048
about: |
  The original board. In March 2014 Gabriele Cirulli, a 19-year-old Italian
  developer, wrote 2048 over a single weekend — a free, open-source take on
  the merging-tile idea of *Threes* and *1024* — and released it on the web.
  Within days it was everywhere; within weeks it had spawned hundreds of
  clones. Cirulli kept it free, calling it too derivative to charge for.

  On this 4×4 board the theoretical maximum tile is 131,072 ($2^{17}$) — but
  reaching 2048 already means shepherding more than a thousand points of
  merge history into one corner without ever letting the board jam.
`;export{e as default};
