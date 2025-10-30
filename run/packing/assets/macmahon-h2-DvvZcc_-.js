const e=`# MacMahon-style edge-matching triangles on the side-2 hexagon: 24 tiles, 3
# colored edges each, 4 colors — the tile count of MacMahon's classic 1921
# set (all 24 distinct 4-colorings of a triangle). This set is derived
# differently, solvable BY CONSTRUCTION: a seeded assignment (LCG seed
# 20260707, misc-note: generator recorded in the step-7c report) colored
# every lattice edge of the hexagon, and tile mᵢ read its three edge colors
# off region cell i (buildRegion order) — so placing every tile mᵢ on cell i
# at orientation 0 is a solution. Not machine-pinned: levels.test.ts only
# compiles the board — the construction is the guarantee, and the recipe is
# exercised at side 1 by rust \`tri::mosaic\` and by
# libs/packing-base/src/trihex/levels-tri.test.ts.
# Tiles rotate (one-sided ⇒ 6 orientations for a labeled tile); the tray is
# shuffled by the edge-match rule so the deal isn't pre-sorted.
id: macmahon-h2
title: MacMahon · Hexagon
space: trihex
genus: edge-match
order: 52
region:
  hexagon: 2
rules:
  validity: [edge-match]
skin:
  name: edges
about: |
  The same tiles on a hexagonal board, and now there are twenty-four of them —
  exactly the number of different triangles three edges and four colors allow,
  which is why MacMahon's own 1921 set had twenty-four. A hexagon two to a side
  holds precisely that many. Rotate the tiles and place them so every touching
  pair of edges shares a color; the red seam lines show exactly where two colors
  still disagree.
pieces:
  - id: m1
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: c }
      - { cell: [0,0], side: R, label: b }
      - { cell: [0,0], side: B, label: a }
  - id: m2
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: c }
      - { cell: [1,0], side: T, label: a }
  - id: m3
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: a }
      - { cell: [0,0], side: B, label: d }
  - id: m4
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: b }
      - { cell: [1,0], side: R, label: c }
      - { cell: [1,0], side: T, label: d }
  - id: m5
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: c }
      - { cell: [0,0], side: R, label: b }
      - { cell: [0,0], side: B, label: a }
  - id: m6
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: c }
      - { cell: [1,0], side: T, label: a }
  - id: m7
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: a }
      - { cell: [1,0], side: R, label: b }
      - { cell: [1,0], side: T, label: a }
  - id: m8
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: c }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: c }
  - id: m9
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: b }
      - { cell: [1,0], side: R, label: b }
      - { cell: [1,0], side: T, label: c }
  - id: m10
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: c }
      - { cell: [0,0], side: R, label: a }
      - { cell: [0,0], side: B, label: d }
  - id: m11
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: c }
      - { cell: [0,0], side: B, label: b }
  - id: m12
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: b }
  - id: m13
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: c }
  - id: m14
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: a }
      - { cell: [1,0], side: R, label: b }
      - { cell: [1,0], side: T, label: c }
  - id: m15
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: c }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: d }
  - id: m16
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: a }
      - { cell: [0,0], side: R, label: c }
      - { cell: [0,0], side: B, label: b }
  - id: m17
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: b }
  - id: m18
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: c }
  - id: m19
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: a }
      - { cell: [0,0], side: R, label: b }
      - { cell: [0,0], side: B, label: a }
  - id: m20
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: c }
      - { cell: [1,0], side: R, label: d }
      - { cell: [1,0], side: T, label: a }
  - id: m21
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: a }
      - { cell: [0,0], side: R, label: c }
      - { cell: [0,0], side: B, label: b }
  - id: m22
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: b }
  - id: m23
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: c }
  - id: m24
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: c }
      - { cell: [1,0], side: R, label: b }
      - { cell: [1,0], side: T, label: c }
`;export{e as default};
