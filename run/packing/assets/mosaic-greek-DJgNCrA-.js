const e=`# The same thirteen tiles as \`mosaic-colours\`, matched by LETTER instead of by
# colour — \`match: greek\`, which paints every sector one face and writes the
# label's symbol in it. Square ships the same pair (\`mosaic-edges-2x2\` beside
# \`mosaic-numtiles-3x3\`); this is that pair on a curved board.
#
# Solvable by construction: the tile set and the seam constraints are exactly
# \`mosaic-colours\`'s, so any arrangement solving one solves the other. Only the
# CUE changes — which is the point of the level, not a shortcut in authoring it.
#
# It is also the level that exercises per-side glyphs on a {p,q} board at all.
# Until 2026-08-16 tessera drew none: \`CellPaint.sideGlyphs\` reached the board
# and nothing read it, so a level like this one would have shipped as thirteen
# blank cards. See \`chip-fill.test.ts\`, which used to guard against authoring it.
id: mosaic-greek
title: Letters that must agree
space: tessera
genus: tessera-edge-match
order: 2
stage: labs
board: { p: 4, q: 5, rings: 1 }
region: { rings: 1 }
pieces:
  - id: split
    cells: [[]]
    symmetry: one-sided
    supply: { count: 7 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: a }
      - { cell: 0, side: 2, label: b }
      - { cell: 0, side: 3, label: b }
  - id: banded
    cells: [[]]
    symmetry: one-sided
    supply: { count: 6 }
    edges:
      - { cell: 0, side: 0, label: a }
      - { cell: 0, side: 1, label: b }
      - { cell: 0, side: 2, label: a }
      - { cell: 0, side: 3, label: b }
rules:
  validity: [edge-match]
info: >-
  The same thirteen tiles, read by letter rather than by colour. Every tile is
  one shade; α must meet α and β must meet β across each seam.
skin: { name: edges, match: greek }
about: |
  This is \`Colours that must agree\` with the colour taken away.

  Every tile is painted a single shade, and each of its four sides carries a
  **letter** instead — α or β. The rule has not moved: what two tiles show
  each other across a seam must be the same. Only the way you read it has.

  It is a surprisingly different puzzle to play. A colour match is something
  you see; a letter match is something you *check*. Colour lets you scan a
  whole board at once and spot the break, and that scanning is most of what
  makes the coloured version feel quick. Here you go seam by seam, and the
  board stops being a picture and becomes a list of small questions.

  The curvature is unchanged and still does the thing it does: turn a tile and
  its letters turn with it, and there is no global north to say which way "up"
  was. On a flat board you could memorise *the α edge points north-east*. Here
  that sentence does not survive the trip from one cell to the next — only the
  tile's own frame does, and the seam test asks nothing else.
`;export{e as default};
