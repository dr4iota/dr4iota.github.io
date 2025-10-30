const e=`# The merge game on {5,4} — PENTAGONS, four to a corner. Five ways to push.
#
# The small board: one ring, eleven cells. Chosen as the gentle one because
# almost every cell here has one way to go — seven of the eleven do, one is
# pressed equally two ways, and the three at the rim have nothing ahead of
# them. Just two cells arrive in the same place; the funnel that makes
# \`merge-pent51\` strange needs a second ring to open up. Measured, not
# assumed: see \`field.test.ts\`.
#
# Five directions rather than ten. A push is named by the side the CENTRE tile
# leaves through (\`pushDirs\`), and every other cell answers the same question
# for itself: which neighbour lies farthest that way (\`pushField\`, ADR-0026).
# A tile pressed equally toward two neighbours takes whichever of them it can
# use — the empty one, or the one it fuses with — and tosses for it when both
# would have it.
id: merge-pent11
title: Five ways to push
space: tessera
genus: merge
order: 540
stage: labs
skin: { name: tiles }
board: { p: 5, q: 4, rings: 1 }
orient: edge-down
region: { rings: 1 }
pieces: [{ id: tile, cells: [[]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  supply: { kind: spawn, values: { 2: 0.9, 4: 0.1 } }
  terminal: { win: { maxTile: 128 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 5041
info: >-
  Reach 128 on eleven pentagons. Five ways to push, and no two of them are
  opposite — there is no "back" to undo a move with.
about: |
  The merge game on the hyperbolic tiling **{5,4}**: regular pentagons, four
  meeting at every corner.

  A square board gives four ways to push, and they come in two opposite pairs —
  push left, push right, and you are roughly where you started. A pentagon has
  an **odd** number of sides, so no direction here has an opposite. Push one
  way and there is no second push that undoes it; the five directions cycle
  around each other instead of cancelling in pairs, and a board you have tidied
  cannot be untidied by going back the way you came.

  This is the small board — one ring of ten around a centre tile. Push it and
  the tiles travel together, the way a row of them does on a flat board: just
  one cell anywhere on it is ever driven into from more than one side. The
  bigger pentagon board does something the plane cannot do at all.

  Pentagons cannot tile a flat plane: four around a corner comes to more than a
  full turn. The surplus goes into curvature, which is why the board fits ten
  tiles around its centre where a flat one of four-sided tiles fits eight.
`;export{e as default};
