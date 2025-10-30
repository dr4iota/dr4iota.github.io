const e=`# Tri Cages — cage-clear on the triangular lattice: lanes clear as in Tri Ten,
# and so does any filled cage. On the side-3 hexagon the \`triangles: 3\` cages are
# exactly its six side-3 corner triangles (54 cells, 6 × 9 — pinned in
# \`clear-tri.test.ts\`).
# \`spread\` deals each shape's orientations as separate fixed draws. On {3,6} a
# piece is inherently two-faced — the odd-p rounding means one entry realizes one
# way at an up anchor and the other at a down one — so the bag holds seven chips
# covering the eleven looks the flat kingdom lists as eleven pieces.
id: tricages-hex2
title: Tri Cages · Hexagon
space: tessera
genus: clear
order: 540
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
  reaction: [{ kind: clear-cages, cages: { triangles: 3 } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
info: The outlined cages clear when filled, just like full lanes.
`;export{e as default};
