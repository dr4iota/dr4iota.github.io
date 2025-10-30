const e=`id: mosaic-numtiles-3x3
title: Number tiles · 3×3
genus: edge-match
order: 46
space: tessera
board: { p: 4, q: 4 }
info: Match the numbers on every shared edge.
# TetraVex-style: nine fixed tiles, each side carrying a digit drawn in its
# quadrant triangle; adjacent digits must agree. Labels were dealt from a
# solved grid (seed 7, 4 digits), so at least one arrangement works — and
# unlike the picture mosaics, repeats mean several arrangements may.
# \`match: number\` paints every tile one uniform face, so the digit — not a
# color — is the only match cue.
# Engine-verified solvable via the edge-match solver (2026-07-05).
region: { rect: [3, 3] }
about: |
  Every tile is split into four triangles, and every triangle holds a
  number: neighbors must agree wherever two tiles touch. Puzzles like this
  go back a century — the mathematician Percy MacMahon sold sets of
  color-triangle squares in the 1920s — and a computer version called
  *TetraVex* shipped with Windows in 1991. One warning from its history:
  arranging such tiles is provably hard in general, so lean on the seams —
  green means the two numbers agree. Here there is no picture to guide you,
  so more than one finished arrangement can be correct.
pieces:
  - id: t1
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "1" }, { cell: 0, side: 1, label: "3" },
            { cell: 0, side: 2, label: "4" }, { cell: 0, side: 0, label: "3" }]
  - id: t2
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "1" }, { cell: 0, side: 1, label: "3" },
            { cell: 0, side: 2, label: "3" }, { cell: 0, side: 0, label: "1" }]
  - id: t3
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "4" }, { cell: 0, side: 1, label: "2" },
            { cell: 0, side: 2, label: "1" }, { cell: 0, side: 0, label: "2" }]
  - id: t4
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "3" }, { cell: 0, side: 1, label: "2" },
            { cell: 0, side: 2, label: "2" }, { cell: 0, side: 0, label: "3" }]
  - id: t5
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "3" }, { cell: 0, side: 1, label: "1" },
            { cell: 0, side: 2, label: "3" }, { cell: 0, side: 0, label: "2" }]
  - id: t6
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "2" }, { cell: 0, side: 1, label: "3" },
            { cell: 0, side: 2, label: "2" }, { cell: 0, side: 0, label: "4" }]
  - id: t7
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "2" }, { cell: 0, side: 1, label: "3" },
            { cell: 0, side: 2, label: "1" }, { cell: 0, side: 0, label: "4" }]
  - id: t8
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "1" }, { cell: 0, side: 1, label: "2" },
            { cell: 0, side: 2, label: "4" }, { cell: 0, side: 0, label: "1" }]
  - id: t9
    cells: [[0, 0]]
    symmetry: fixed
    edges: [{ cell: 0, side: 3, label: "3" }, { cell: 0, side: 1, label: "1" },
            { cell: 0, side: 2, label: "1" }, { cell: 0, side: 0, label: "1" }]
rules:
  validity: [edge-match]
skin: { name: edges, match: number }
`;export{e as default};
