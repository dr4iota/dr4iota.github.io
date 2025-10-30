const e=`id: mosaic-edges-2x2
title: Color tiles · 2×2
genus: edge-match
order: 40
space: tessera
board: { p: 4, q: 4 }
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
    edges: [{ cell: 0, side: 3, label: n1 }, { cell: 0, side: 2, label: n2 },
            { cell: 0, side: 0, label: a }, { cell: 0, side: 1, label: b }]
  - id: TR
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: n3 }, { cell: 0, side: 0, label: n4 },
            { cell: 0, side: 2, label: a }, { cell: 0, side: 1, label: c }]
  - id: BL
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 2, label: n5 }, { cell: 0, side: 1, label: n6 },
            { cell: 0, side: 3, label: b }, { cell: 0, side: 0, label: d }]
  - id: BR
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 0, label: n7 }, { cell: 0, side: 1, label: n8 },
            { cell: 0, side: 3, label: c }, { cell: 0, side: 2, label: d }]
rules:
  validity: [edge-match]
skin: edges
`;export{e as default};
