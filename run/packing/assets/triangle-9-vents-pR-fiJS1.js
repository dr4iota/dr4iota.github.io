const e=`# Iamond Fill ladder, step 10 — the full dozen again, now on a side-9 triangle
# pierced by nine vents (81 − 9 = 72 cells) in three 120°-symmetric triples:
# the clipped corners (top row is all vent, hence empty in the mask), the edge
# midpoints, and an inner ring. Engine search over the ten D3-symmetric vent
# patterns built from the triangle's axis orbits: this is the ONLY one that
# admits any tiling. Certified: 12 raw = 2 solutions past the board's six
# symmetries (packing-tri-cert, 2026-07-25).
id: triangle-9-vents
title: Nine Windows
space: trihex
genus: iamond-fill
order: 10
about: |
  The same twelve hexiamonds that filled the zigzag block, poured into a
  side-9 triangle with nine windows punched through it. The windows are not
  decoration — they are the arithmetic. A solid side-9 triangle holds 81
  cells, nine too many for the set, and its up-triangles outnumber its
  down-triangles by nine, far beyond what sphinx and yacht can absorb. Nine
  up-pointing windows fix both books at once.

  Where to punch them matters just as much: keeping the triangle's threefold
  symmetry, there are ten ways to choose the windows along its axes — and the
  engine proves this is the **only** one the twelve pieces can fill at all.
  Two arrangements exist; find either.
region:
  mask:
    - '................'
    - '.......###......'
    - '......#####.....'
    - '.....#######....'
    - '.....###.###....'
    - '...###########..'
    - '..####.###.####.'
    - '.###############'
    - '.#######.#######'
pieces:
  - use: hexiamonds
`;export{e as default};
