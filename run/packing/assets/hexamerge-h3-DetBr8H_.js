const e=`# Hexa Merge — the tri-native flagship (vision §4: "six unit triangles → one
# hexagon"). Place dealt iamonds (single triangles up to trapezoid triamonds);
# the moment six unit cells surround one lattice corner they fuse into a
# hexagon and CLEAR (60 points), freeing the six cells. The multi-cell pieces
# make corner-tight play a real placement puzzle, not a one-triangle tap.
# (Redesigned 2026-07-18: fused hexagons used to stay as terrain, so every
# fuse shrank the board.) Endless; ends when no dealt piece fits.
id: hexamerge-h3
title: Hexa Merge
space: trihex
genus: clear
order: 65
region:
  hexagon: 3
pieces:
  # The full iamond ladder in every orientation (2 + 3 + 6 = 11 fixed pieces),
  # dealt 1010!-style — \`spread\` fans each shape's rotations into the bag, none
  # rotatable in hand. Bigger pieces make surrounding a corner a real puzzle.
  - { use: polyiamonds, sizes: [1, 2, 3], symmetry: one-sided, spread: true, supply: unlimited }
rules:
  motion: free-place
  reaction: [hexa-merge]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: merge-sum
about: |
  The merge-to-milestone idea (Triple Town, Suika, 2048) restated as pure
  geometry: six unit triangles around a shared corner *are* a hexagon — and
  completing one clears it, handing the space back. Corner-tight play keeps
  the board breathing; scattered triangles let the deal outrun the room. No
  direct triangular-lattice ancestor is known — this one is ours.
`;export{e as default};
