const e=`# Tri Merge on the side-3 hexagon (54 cells) — the same six-direction
# slide-all 2048 as merge-hex2, on a larger board with more room to build.
id: merge-hex3
title: Grand Hexagon of Triangles
space: trihex
genus: merge
order: 61
region:
  hexagon: 3
pieces:
  - { id: tile, cells: [[0, 0]], symmetry: one-sided }
rules:
  motion: slide-all
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 2048 }, lose: stuck }
  onWin: continue
  score: merge-sum
skin:
  name: tiles
about: |
  The larger triangular 2048 board — a side-3 hexagon of 54 cells. The rules
  are identical to the small Hexagon: six lane directions, every lane a zigzag
  strip of alternating triangles, merge equal neighbors once per move. The
  extra room lets the numbers climb higher before the board locks up, so it
  plays as the roomier, longer companion to the side-2 board.
`;export{e as default};
