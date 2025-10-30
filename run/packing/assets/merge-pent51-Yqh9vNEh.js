const e=`# The merge game on {5,4} at TWO rings — fifty-one cells, and the board where
# the funnel appears.
#
# From ring two out the direction field is many-to-one: several cells are sent
# into the same cell, so one push gathers tiles that arrived by different sides
# and equal ones fuse where they meet. Measured per direction on this board:
# five cells arriving into two shared ones, and as many as eleven into four once
# the tiles pressed two ways are counted (one such cell on the one-ring board,
# and none at all on any flat board, at any size) — see \`field.test.ts\`.
#
# That is the level. A flat 2048 keeps its rows forever; here a push is a
# funnel, and tiles that were never in line with each other collide.
id: merge-pent51
title: The funnel
space: tessera
genus: merge
order: 541
stage: labs
skin: { name: tiles }
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { rings: 2 }
pieces: [{ id: tile, cells: [[]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 512 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 5142
info: >-
  Reach 512 on fifty-one pentagons. Tiles that were never in line with each
  other arrive in the same cell and fuse — a push here is a funnel.
about: |
  The same five-way push as the small pentagon board, on two rings instead of
  one — and the extra ring changes the game rather than merely enlarging it.

  ## What a push does here

  On a flat board a push is a set of parallel lines swept to one end. Every
  tile stays in its own line forever, so a 2048 board is really four rows played
  side by side, and two tiles that do not share a row can never meet.

  This board has no such lines. You push the middle tile one way, and every
  other tile answers the same question for itself: which of my neighbours lies
  farthest that way? In the hyperbolic plane those answers *converge* — five
  cells arrive into two, and as many as eleven into four once you count the
  tiles pressed equally two ways. So a push gathers tiles that were never in
  line with each other, and equal ones fuse where they meet.

  There is more room out here than the plane has, and this is what that room
  costs: going outward, the board keeps branching and nothing stays lined up;
  going inward, everything is funnelled together. A few tiles are pressed
  equally two ways: those take whichever neighbour will have them, and toss for
  it when both will. The ones at the rim with nothing ahead stay put.

  ## Why the small board is not like this

  On one ring it barely happens — one cell is arrived at from more than one
  side, and the game is ordinary apart from having five directions. It does not
  happen on any flat board at any size: there the paths are exactly the rows.
  It takes a second ring of curved space before the board fills with cells that
  arrive together.

  ## Five directions, none of them opposite

  A pentagon has an odd number of sides, so no push has an opposite. You cannot
  undo one by pushing back; there is no back. The five directions cycle around
  each other, and a board you have tidied one way comes apart differently
  whichever way you tidy it next.
`;export{e as default};
