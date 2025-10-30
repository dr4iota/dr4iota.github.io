const e=`id: mosaic-edges-2x2
title: Color tiles · 2×2
genus: edge-match
order: 40
space: square
# A four-tile edge-matching mosaic (Eternity II in miniature). Each tile's four
# sides carry a color label; adjacent tiles agree only in one arrangement —
# interior seam colors (a/b/c/d) are shared by exactly one tile pair, and every
# border label is unique, so border edges are forced to the rim. The board lights
# "Solved" when it is covered AND every seam matches (the \`edge-match\` validity).
# Mismatched seams show red, matched seams a faint green. Fixed orientation (no
# rotation yet — that is a later step).
region: { rect: [2, 2] }
pieces:
  - id: TL
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: n1 }
      - { cell: [0, 0], side: W, label: n2 }
      - { cell: [0, 0], side: E, label: a }
      - { cell: [0, 0], side: S, label: b }
  - id: TR
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: N, label: n3 }
      - { cell: [0, 0], side: E, label: n4 }
      - { cell: [0, 0], side: W, label: a }
      - { cell: [0, 0], side: S, label: c }
  - id: BL
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: W, label: n5 }
      - { cell: [0, 0], side: S, label: n6 }
      - { cell: [0, 0], side: N, label: b }
      - { cell: [0, 0], side: E, label: d }
  - id: BR
    cells: [[0, 0]]
    symmetry: fixed
    edges:
      - { cell: [0, 0], side: E, label: n7 }
      - { cell: [0, 0], side: S, label: n8 }
      - { cell: [0, 0], side: N, label: c }
      - { cell: [0, 0], side: W, label: d }
rules:
  validity: [edge-match]
  terminal: complete
skin: edges
`;export{e as default};
