const e=`# Tri Merge on the side-2 hexagon (24 cells). A move names one of the SIX
# directions and every tile slides along its own lane until blocked, merging
# equal neighbours once per move (the classic no-chain rule).
# Six, not three: a board-wide sweep packs along LANES, and a triangle's lanes
# zigzag — the rows run due east while the sides point 30° off them. Three lane
# families, each sweepable both ways. Endless; the win latches at 2048.
id: merge-hex2
title: Hexagon of Triangles
space: tessera
genus: merge
order: 530
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 2 }
pieces: [{ id: tile, cells: [[0, 0]], lattice: true, symmetry: one-sided }]
rules:
  motion: slide-all
  supply: { kind: spawn, values: { "2": 0.9, "4": 0.1 } }
  terminal: { win: { maxTile: 2048 }, lose: stuck }
  onWin: continue
  score: merge-sum
skin: { name: tiles }
about: |
  2048 on the triangular lattice: with three lane families instead of rows
  and columns, a move has **six** directions — and every lane is a zigzag
  strip of alternating triangles, so tiles snake along their lane rather than
  gliding straight. Web curiosities of this shape exist (*Triangular 2048*);
  here it runs on the same verified engine as every other board.
`;export{e as default};
