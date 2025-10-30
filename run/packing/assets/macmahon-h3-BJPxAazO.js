const e=`# MacMahon triangles on the side-3 hexagon: 54 tiles, four colours — the grand
# board of the family. Solvable by construction.
# Certified: the mosaic solver fills 54/54 with zero mismatched seams
# (2026-08-14).
id: macmahon-h3
title: MacMahon · Grand Hexagon
space: tessera
genus: edge-match
order: 514
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 3 }
pieces:
  - id: m1
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: d }
  - id: m2
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: d }
  - id: m3
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: b }
  - id: m4
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: b }
  - id: m5
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: b }
  - id: m6
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: b }
  - id: m7
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: b }
  - id: m8
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m9
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: c }
  - id: m10
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: c }
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
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: a }
  - id: m14
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: c }
  - id: m15
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: c }
  - id: m16
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: b }
  - id: m17
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: b }
  - id: m18
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: a }
  - id: m19
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: d }
  - id: m20
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: d }
  - id: m21
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: a }
  - id: m22
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: a }
  - id: m23
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: d }
  - id: m24
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: d }
  - id: m25
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: a }
  - id: m26
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: c }
  - id: m27
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: c }
  - id: m28
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m29
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: c }
  - id: m30
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: a }
  - id: m31
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: d }
  - id: m32
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 0, label: d }
  - id: m33
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: c }
  - id: m34
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: c }
  - id: m35
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: b }
      - { cell: 0, side: 2, label: d }
  - id: m36
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: d }
  - id: m37
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: a }
  - id: m38
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: a }
  - id: m39
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: a }
  - id: m40
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: b }
  - id: m41
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: b }
  - id: m42
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: c }
  - id: m43
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: a }
  - id: m44
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: a }
  - id: m45
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: b }
  - id: m46
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 0, label: b }
  - id: m47
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 0, label: c }
      - { cell: 0, side: 2, label: d }
  - id: m48
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: d }
  - id: m49
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: d }
      - { cell: 0, side: 2, label: d }
  - id: m50
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 2, label: d }
      - { cell: 0, side: 0, label: d }
  - id: m51
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: a }
  - id: m52
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: c }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: a }
  - id: m53
    cells: [[0, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: d }
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 2, label: c }
  - id: m54
    cells: [[1, 0]]
    lattice: true
    symmetry: one-sided
    edges:
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: c }
      - { cell: 0, side: 0, label: c }
rules: { validity: [edge-match] }
skin: { name: edges }
about: |
  A hexagon three to a side: fifty-four tiles, more than twice the last board,
  and every one of them turnable six ways. Work outward from one corner and keep
  the seams green behind you — on a board this size, undoing a wrong guess is
  what costs you. Rotate and place the tiles so every touching pair of edges
  shares a color; the red seam lines show exactly where two colors still
  disagree.
`;export{e as default};
