const e=`# Tri Merge on the side-2 hexagon (24 cells). A move names
# one of the SIX directions — an end of one of the three lane families — and
# every tile
# slides along its own lane until blocked, merging equal neighbors once per
# move (the classic no-chain rule). The \`tile\` piece is the unit up-triangle
# under one-sided symmetry: its two orientations carry the tile's parity, so
# a spawn can land on any cell without an odd offset. Endless: the win
# latches at 2048 and play continues.
id: merge-hex2
title: Hexagon of Triangles
space: trihex
genus: merge
order: 60
region:
  hexagon: 2
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
  2048 on the triangular lattice: with three lane families instead of rows
  and columns, a move has **six** directions — and every lane is a zigzag
  strip of alternating triangles, so tiles snake along their lane rather than
  gliding straight. Web curiosities of this shape exist (*Triangular 2048*);
  here it runs on the same verified engine as every other board.
`;export{e as default};
