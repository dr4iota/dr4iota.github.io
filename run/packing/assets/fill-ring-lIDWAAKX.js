const e=`id: fill-ring
title: Ring of twelve
space: tessera
genus: tessera-fill
order: 4
stage: labs
board: { p: 4, q: 5, rings: 1 }
region: { remove: [0] }
pieces:
  - id: elbow
    cells: [[], [0], [0, 1]]
    symmetry: free
    supply: { count: 4 }
info: >-
  The middle tile is missing — a board may have holes, and the ring left
  behind is its own puzzle.
about: |
  Same {4,5} board as before, with the centre tile taken out: four bent
  triples have to close the ring around the gap.

  Boards here are always a full patch of the tiling; a level then says which
  tiles are actually in play. That is how a hole in the middle — or any
  carved shape — becomes a level.
`;export{e as default};
