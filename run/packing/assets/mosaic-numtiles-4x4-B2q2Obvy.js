const e=`id: mosaic-numtiles-4x4
title: Number tiles · 4×4
genus: edge-match
order: 50
space: square
info: Match the numbers on every shared edge.
# The bigger deal: sixteen tiles, six digits (seed 42). \`match: number\`
# paints every tile one uniform face, so the digit — not a color — is the
# only match cue. Engine-verified solvable via the edge-match solver
# (2026-07-05).
region: { rect: [4, 4] }
about: |
  Sixteen tiles and six different numbers — the full-size version of the
  classic. With more tiles the corner trick matters: a tile whose numbers
  appear on no other tile's edges can only live on the border, with those
  rare sides facing out. Count how often each number appears before you
  place a thing; the scarce ones tell you where the walls are.
pieces:
  - id: t1
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '4' }
      - { cell: [0, 0], side: S, label: '2' }
      - { cell: [0, 0], side: W, label: '6' }
      - { cell: [0, 0], side: E, label: '1' }
  - id: t2
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '3' }
      - { cell: [0, 0], side: S, label: '4' }
      - { cell: [0, 0], side: W, label: '1' }
      - { cell: [0, 0], side: E, label: '4' }
  - id: t3
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '6' }
      - { cell: [0, 0], side: S, label: '2' }
      - { cell: [0, 0], side: W, label: '4' }
      - { cell: [0, 0], side: E, label: '1' }
  - id: t4
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '5' }
      - { cell: [0, 0], side: S, label: '4' }
      - { cell: [0, 0], side: W, label: '1' }
      - { cell: [0, 0], side: E, label: '2' }
  - id: t5
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '2' }
      - { cell: [0, 0], side: S, label: '6' }
      - { cell: [0, 0], side: W, label: '1' }
      - { cell: [0, 0], side: E, label: '2' }
  - id: t6
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '4' }
      - { cell: [0, 0], side: S, label: '3' }
      - { cell: [0, 0], side: W, label: '2' }
      - { cell: [0, 0], side: E, label: '5' }
  - id: t7
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '2' }
      - { cell: [0, 0], side: S, label: '2' }
      - { cell: [0, 0], side: W, label: '5' }
      - { cell: [0, 0], side: E, label: '4' }
  - id: t8
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '4' }
      - { cell: [0, 0], side: S, label: '6' }
      - { cell: [0, 0], side: W, label: '4' }
      - { cell: [0, 0], side: E, label: '1' }
  - id: t9
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '6' }
      - { cell: [0, 0], side: S, label: '5' }
      - { cell: [0, 0], side: W, label: '2' }
      - { cell: [0, 0], side: E, label: '6' }
  - id: t10
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '3' }
      - { cell: [0, 0], side: S, label: '2' }
      - { cell: [0, 0], side: W, label: '6' }
      - { cell: [0, 0], side: E, label: '3' }
  - id: t11
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '2' }
      - { cell: [0, 0], side: S, label: '2' }
      - { cell: [0, 0], side: W, label: '3' }
      - { cell: [0, 0], side: E, label: '5' }
  - id: t12
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '6' }
      - { cell: [0, 0], side: S, label: '4' }
      - { cell: [0, 0], side: W, label: '5' }
      - { cell: [0, 0], side: E, label: '2' }
  - id: t13
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '5' }
      - { cell: [0, 0], side: S, label: '5' }
      - { cell: [0, 0], side: W, label: '3' }
      - { cell: [0, 0], side: E, label: '1' }
  - id: t14
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '2' }
      - { cell: [0, 0], side: S, label: '4' }
      - { cell: [0, 0], side: W, label: '1' }
      - { cell: [0, 0], side: E, label: '1' }
  - id: t15
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '2' }
      - { cell: [0, 0], side: S, label: '1' }
      - { cell: [0, 0], side: W, label: '1' }
      - { cell: [0, 0], side: E, label: '4' }
  - id: t16
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: '4' }
      - { cell: [0, 0], side: S, label: '3' }
      - { cell: [0, 0], side: W, label: '4' }
      - { cell: [0, 0], side: E, label: '4' }
rules:
  validity: [edge-match]
  terminal: complete
skin: { name: edges, match: number }
`;export{e as default};
