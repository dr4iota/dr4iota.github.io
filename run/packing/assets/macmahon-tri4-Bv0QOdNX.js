const e=`# MacMahon-style edge-matching triangles on the side-4 triangle: 16 tiles, three
# coloured edges each, four colours. Solvable BY CONSTRUCTION — every lattice
# edge is coloured once and tile mᵢ reads cell i's three edges.
# Certified: the mosaic solver fills 16/16 with zero mismatched seams
# (2026-08-14). Labels are (shape-cell index, local side) — tessera's own form,
# so they ride through every spin.
id: macmahon-tri4
title: MacMahon · Triangle
space: tessera
genus: edge-match
order: 510
board: { p: 3, q: 6 }
orient: edge-down
region: { triangle: 4 }
pieces:
  - id: m1
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: b }
  - id: m2
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: a }
  - id: m3
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: a }
  - id: m4
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: b }
  - id: m5
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: b }
  - id: m6
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: c }
  - id: m7
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: b }
  - id: m8
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: b }
  - id: m9
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: d }
  - id: m10
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: d }
  - id: m11
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m12
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: c }
  - id: m13
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: b }
  - id: m14
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: b }
  - id: m15
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m16
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: a }
rules: { validity: [edge-match] }
skin: { name: edges }
about: |
  Percy MacMahon's *New Mathematical Pastimes* (1921) introduced edge-colored
  triangles a half-century before their square cousins became commercial
  puzzles — the triangular grid is this genre's native home. Sixteen tiles fill
  a triangle four to a side. Rotate and place them so every touching pair of
  edges shares a color; the red seam lines show exactly where two colors still
  disagree.
`;export{e as default};
