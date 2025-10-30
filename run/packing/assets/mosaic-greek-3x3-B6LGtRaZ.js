const e=`id: mosaic-greek-3x3
title: Greek tiles · 3×3
genus: edge-match
order: 48
space: square
info: Match the Greek letters on every shared edge.
# The number-tiles idea in Greek dress: α β γ δ on the triangles (seed 21).
# \`match: greek\` paints every tile one uniform face, so the letter — not a
# color — is the only match cue.
# Engine-verified solvable via the edge-match solver (2026-07-05).
region: { rect: [3, 3] }
about: |
  The same game, now speaking Greek: **α** (alpha), **β** (beta), **γ**
  (gamma) and **δ** (delta) — the first four letters of the Greek alphabet,
  the very letters that gave the *alphabet* its name. Mathematicians use
  them daily: α and β for angles, γ for a famous constant, δ for a tiny
  change. Match the letters across every seam and you can read a little
  Greek by the time the board is done.
pieces:
  - id: t1
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'β' }
      - { cell: [0, 0], side: W, label: 'γ' }
      - { cell: [0, 0], side: E, label: 'β' }
  - id: t2
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'β' }
      - { cell: [0, 0], side: W, label: 'β' }
      - { cell: [0, 0], side: E, label: 'α' }
  - id: t3
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'δ' }
      - { cell: [0, 0], side: W, label: 'α' }
      - { cell: [0, 0], side: E, label: 'δ' }
  - id: t4
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'δ' }
      - { cell: [0, 0], side: W, label: 'α' }
      - { cell: [0, 0], side: E, label: 'γ' }
  - id: t5
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'β' }
      - { cell: [0, 0], side: W, label: 'γ' }
      - { cell: [0, 0], side: E, label: 'δ' }
  - id: t6
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'δ' }
      - { cell: [0, 0], side: S, label: 'β' }
      - { cell: [0, 0], side: W, label: 'δ' }
      - { cell: [0, 0], side: E, label: 'α' }
  - id: t7
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'δ' }
      - { cell: [0, 0], side: S, label: 'δ' }
      - { cell: [0, 0], side: W, label: 'β' }
      - { cell: [0, 0], side: E, label: 'α' }
  - id: t8
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'α' }
      - { cell: [0, 0], side: W, label: 'α' }
      - { cell: [0, 0], side: E, label: 'γ' }
  - id: t9
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: 'β' }
      - { cell: [0, 0], side: S, label: 'β' }
      - { cell: [0, 0], side: W, label: 'γ' }
      - { cell: [0, 0], side: E, label: 'β' }
rules:
  validity: [edge-match]
  terminal: complete
skin: { name: edges, match: greek }
`;export{e as default};
