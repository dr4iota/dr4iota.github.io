const e=`# Tri Cages — box-clear on the triangular lattice: lanes
# clear as in Tri-Ten, and so does any filled cage. On the side-3 hexagon
# the \`triangles: 3\` cages are exactly its six side-3 corner triangles
# (54 cells, 6 cages of 9 — verified by the modules-tri cage tests). The
# side-3 cages need nine cells apiece, so the deal offers the full iamond
# ladder (single triangles, diamonds, trapezoid triamonds) in every rotation —
# \`spread\` fans each shape's orientations into the bag as separate fixed draws.
id: tricages-hex2
title: Tri Cages · Hexagon
space: trihex
genus: clear
order: 20
region:
  hexagon: 3
pieces:
  # The full iamond ladder in every orientation (2 + 3 + 6 = 11 fixed pieces),
  # dealt 1010!-style: \`spread\` puts each rotation in the bag as its own draw,
  # so nothing turns in hand. (\`one-sided\` = rotations, no flips.)
  - { use: polyiamonds, sizes: [1, 2, 3], symmetry: one-sided, spread: true, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-cages, cages: { triangles: 3 } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: lane-clears
info: >-
  The outlined cages clear when filled, just like full lanes.
`;export{e as default};
