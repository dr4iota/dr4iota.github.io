const e=`id: merge-hex2048
title: Honeycomb
space: tessera
genus: merge
order: 510
skin: { name: tiles }
board: { p: 6, q: 3, rings: 2 }
region: { rings: 2 }
pieces: [{ id: tile, cells: [[]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 512 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 2048
info: >-
  Reach 512. The three axes cut across each other, so tidying one direction
  disturbs the other two.
about: |
  The merge game on the **hexagonal tiling** {6,3}.

  A square board gives you four ways to push. A hexagon gives you **six**, and
  that changes the game more than it sounds like it should. On a square board a
  tile pushed left stays in its row forever, so the board is really four rows
  played side by side. Here the three axes cut across each other, and a push
  along one of them rearranges the lines of the other two — you cannot tidy one
  direction without disturbing the rest.

  The board is flat, and it must be: "everything moves that way" only has one
  meaning when the lines in a direction *tile* the board, which is a property of
  flat space. On a curved board a tile can lie on two lines running the same
  way, and the answer would depend on which was swept first.
`;export{e as default};
