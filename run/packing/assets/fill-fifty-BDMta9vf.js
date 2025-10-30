const e=`id: fill-fifty
title: Fifty pentagons
space: tessera
genus: tessera-fill
order: 12
stage: labs
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { remove: [0] }
pieces:
  - use: polycells
    sizes: [4]
    symmetry: free
  - use: polycells
    sizes: [3]
    symmetry: free
    supply: { count: 3 }
info: >-
  The pentagon board out to its second ring, with the centre tile removed —
  fifty cells for all eight tetracells and six bent triples.
about: |
  The {5,4} pentagons at full stretch: a centre, a ring of ten, a ring of
  **forty** — fifty-one tiles, four times as many in each ring as the last,
  drawn ever smaller toward the rim. The centre is taken out, which does two
  things at once: it makes the area come out right, and it leaves the widest
  tile on the board — the one every piece would love to sit on — off limits.

  The pieces are the tiling's own: all **eight** free four-cell shapes of
  {5,4}, one each, plus three copies of each of its two three-cell shapes.
  Fourteen pieces around a hole, with most of the work pressed against the
  rim where the tiles crowd — the {5,4} answer to the sixty-one-square board
  of {4,5}.
`;export{e as default};
