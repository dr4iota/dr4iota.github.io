const e=`id: mosaic-rotate-2x2
title: Color tiles · 2×2 rotating
genus: edge-match
order: 42
space: tessera
board: { p: 4, q: 4 }
# A rotating edge-match (Eternity-style): four tiles, each \`one-sided\` so it can
# be turned in 90° steps. Edges are authored a half-turn from their solved pose,
# so every tile must be rotated to make its colors meet. Interior seam colors
# (a/b/c/d) are each shared by exactly one tile pair, so each tile's cell and
# rotation are forced — the layout is unique up to the board's four global
# rotations (rim labels are on the unconstrained boundary, so rotating the whole
# solved board is also valid). Place the tiles, then rotate (R / ⟲⟳) until no
# seam glows red. Edge colors show on the board once a piece is placed.
region: { rect: [2, 2] }
pieces:
  - id: TL
    cells: [[0, 0]]
    symmetry: one-sided
    edges: [{ cell: 0, side: 3, label: b }, { cell: 0, side: 0, label: rA },
            { cell: 0, side: 1, label: rB }, { cell: 0, side: 2, label: a }]
  - id: TR
    cells: [[0, 0]]
    symmetry: one-sided
    edges: [{ cell: 0, side: 3, label: c }, { cell: 0, side: 0, label: a },
            { cell: 0, side: 1, label: rC }, { cell: 0, side: 2, label: rD }]
  - id: BL
    cells: [[0, 0]]
    symmetry: one-sided
    edges: [{ cell: 0, side: 3, label: rE }, { cell: 0, side: 0, label: rF },
            { cell: 0, side: 1, label: b }, { cell: 0, side: 2, label: d }]
  - id: BR
    cells: [[0, 0]]
    symmetry: one-sided
    edges: [{ cell: 0, side: 3, label: rG }, { cell: 0, side: 0, label: d },
            { cell: 0, side: 1, label: c }, { cell: 0, side: 2, label: rH }]
rules:
  validity: [edge-match]
skin: edges
`;export{e as default};
