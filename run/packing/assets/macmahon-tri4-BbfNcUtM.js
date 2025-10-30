const e=`# MacMahon-style edge-matching triangles on the side-4 triangle (16
# tiles, 3 colored edges each, 4 colors). Generated solvable BY CONSTRUCTION by
# misc/scripts/tri-macmahon-gen.mjs (LCG seed 20260725): every lattice edge is
# colored once and tile mᵢ reads cell i's three edges, so placing every mᵢ on
# cell i at orientation 0 is a solution. Not machine-pinned: levels.test.ts only
# compiles the board — the construction is the guarantee, and the recipe is
# exercised at side 1 by rust \`tri::mosaic\` and by
# libs/packing-base/src/trihex/levels-tri.test.ts.
# The tray is shuffled at runtime by the edge-match rule.
id: macmahon-tri4
title: MacMahon · Triangle
space: trihex
genus: edge-match
order: 44
region:
  triangle: 4
rules:
  validity: [edge-match]
skin:
  name: edges
about: |
  Percy MacMahon's *New Mathematical Pastimes* (1921) introduced edge-colored
  triangles a half-century before their square cousins became commercial
  puzzles — the triangular grid is this genre's native home. Sixteen tiles fill
  a triangle four to a side. Rotate and place them so every touching pair of
  edges shares a color; the red seam lines show exactly where two colors still
  disagree.
pieces:
  - id: m1
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: b }
      - { cell: [0,0], side: B, label: b }
  - id: m2
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: a }
  - id: m3
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: b }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: a }
  - id: m4
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: a }
      - { cell: [0,0], side: B, label: b }
  - id: m5
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: c }
      - { cell: [1,0], side: T, label: b }
  - id: m6
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: a }
      - { cell: [0,0], side: R, label: c }
      - { cell: [0,0], side: B, label: c }
  - id: m7
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: b }
      - { cell: [0,0], side: B, label: b }
  - id: m8
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: a }
      - { cell: [1,0], side: R, label: b }
      - { cell: [1,0], side: T, label: b }
  - id: m9
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: c }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: d }
  - id: m10
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: c }
      - { cell: [1,0], side: R, label: d }
      - { cell: [1,0], side: T, label: d }
  - id: m11
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: b }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: c }
  - id: m12
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: d }
      - { cell: [1,0], side: R, label: d }
      - { cell: [1,0], side: T, label: c }
  - id: m13
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: a }
      - { cell: [0,0], side: B, label: b }
  - id: m14
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: d }
      - { cell: [0,0], side: R, label: c }
      - { cell: [0,0], side: B, label: b }
  - id: m15
    cells: [[1,0]]
    symmetry: one-sided
    edges:
      - { cell: [1,0], side: L, label: a }
      - { cell: [1,0], side: R, label: a }
      - { cell: [1,0], side: T, label: b }
  - id: m16
    cells: [[0,0]]
    symmetry: one-sided
    edges:
      - { cell: [0,0], side: L, label: a }
      - { cell: [0,0], side: R, label: d }
      - { cell: [0,0], side: B, label: a }
`;export{e as default};
