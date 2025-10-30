const e=`# The full dozen on a side-9 triangle pierced by nine vents (81 − 9 = 72 cells)
# in three 120°-symmetric triples. Of the ten D3-symmetric vent patterns, this
# is the only one the twelve pieces can fill.
# Certified: 12 covers (2 past the board's six symmetries), matching parquet
# (2026-08-14).
id: triangle-9-vents
title: Nine Windows
space: tessera
genus: iamond-fill
order: 510
board: { p: 3, q: 6 }
orient: edge-down
region:
  mask:
    - ................
    - .......###......
    - ......#####.....
    - .....#######....
    - .....###.###....
    - ...###########..
    - ..####.###.####.
    - .###############
    - .#######.#######
pieces: [{ use: hexiamonds }]
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
`;export{e as default};
