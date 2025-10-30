const e=`id: fill-rep-corner
title: Giant corner · ×2
genus: fill
order: 18
space: square
# Rep-tile: four L-trominoes build the L-tromino at 2× scale. Engine-verified
# (2026-07-04): 24 raw = 1 solution × 4! piece swaps — unique.
region: { mask: ['####', '####', '##..', '##..'] }
pieces:
  - { use: polyominoes, sizes: [3], pick: [n3-1], symmetry: free, supply: { count: 4 } }
about: |
  Four corner pieces, and a board shaped like — a giant corner piece. A shape
  that can build a bigger copy of itself is called a **rep-tile** (Solomon
  Golomb's joke: it *rep*licates). There is exactly one way to do it here.
  And the trick never stops: four giant corners would build a giant-giant
  corner, and so on forever — which is why copies of this little piece could
  tile a whole infinite floor.
`;export{e as default};
