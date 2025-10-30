const e=`# Hexa Merge — six unit triangles around a corner fuse into a hexagon and CLEAR,
# handing the space back. Tessera says that generically: the \`q\` faces meeting at
# a vertex, fused. On {3,6} q is six and the fused shape is a hexagon; the rule
# is written against \`vertexFan\` and has no {3,6} table in it.
# Fill-based, so a diamond or triamond counts toward a corner and keeps its
# outside cells as a dissolved remainder. Endless; ends when nothing fits.
id: hexamerge-h3
title: Hexa Merge
space: tessera
genus: clear
order: 550
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 3 }
pieces:
  - use: polyiamonds
    sizes: [1, 2, 3]
    symmetry: one-sided
    spread: true
    supply: unlimited
rules:
  motion: free-place
  reaction: [{ kind: vertex-fuse }]
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
