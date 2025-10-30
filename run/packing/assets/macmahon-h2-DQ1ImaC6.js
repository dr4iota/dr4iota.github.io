const e=`# MacMahon triangles on the side-2 hexagon: 24 tiles, four colours. Solvable by
# construction, as \`macmahon-tri4\` is.
# Certified: the mosaic solver fills 24/24 with zero mismatched seams
# (2026-08-14).
id: macmahon-h2
title: MacMahon · Hexagon
space: tessera
genus: edge-match
order: 512
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 2 }
pieces:
  - id: m1
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: a }
  - id: m2
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: a }
  - id: m3
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: d }
  - id: m4
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: d }
  - id: m5
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: a }
  - id: m6
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: a }
  - id: m7
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: a }
  - id: m8
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m9
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: c }
  - id: m10
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: d }
  - id: m11
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: b }
  - id: m12
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m13
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m14
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: c }
  - id: m15
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: d }
  - id: m16
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: b }
  - id: m17
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m18
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m19
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: a }
  - id: m20
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: a }
  - id: m21
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: b }
  - id: m22
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m23
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m24
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: c }
rules: { validity: [edge-match] }
skin: { name: edges }
about: |
  The same tiles on a hexagonal board, and now there are twenty-four of them —
  exactly the number of different triangles three edges and four colors allow,
  which is why MacMahon's own 1921 set had twenty-four. A hexagon two to a side
  holds precisely that many. Rotate the tiles and place them so every touching
  pair of edges shares a color; the red seam lines show exactly where two colors
  still disagree.
`;export{e as default};
