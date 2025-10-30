const e=`# Curated home — the visual front door. Ordered top→bottom, laid out as a
# responsive grid of square cards (a board shot + two lines of text). Each entry
# is one puzzle (a specific \`level\`); tapping it plays that board.
#
#   level    — the \`?level=\` key the card opens (must be a real level). Either
#              kingdom's — the card routes to the document that plays it.
#   image    — basename (no theme/extension) of the board shots in ./images;
#              resolves to \`<image>-light.webp\` / \`<image>-dark.webp\` (~256px
#              long-edge, fit not cropped) and the card shows the pair matching
#              the active theme (one theme present ⇒ it serves both). Absent ⇒
#              the game's icon shows.
#   title    — first line: the puzzle's name.
#   subtitle — second line: the short variant / flavor.
#   first    — optional; when true, the card gets a corner button that starts
#              the game's ladder at level 1 (its gentlest board) instead of the
#              featured one. Authored on every fill / mosaic / slide card; the
#              card hides it by itself when the featured board IS the start.
#
# To add art: play the board in BOTH themes, press Shift+P (debug) in each to
# download \`<level>-<theme>-<ts>.png\`, then hand both over — they get optimized
# to \`<image>-light.webp\` / \`<image>-dark.webp\` and dropped in ./images.
#
# Cards split into on-screen sections by their board's GEOMETRY (the manifest's
# {p,q} + curvature, see home/index.ts): hyperbolic boards first, then the flat
# tilings — triangles {3,6}, the honeycomb {6,3}, squares {4,4}. Order within
# each section follows the order here; a section renders only when it has a
# card, and a card ships only once its board's own shots exist.

# --- Hyperbolic ---
- level: tessera/7-3/fill-crown
  image: fill-crown
  title: Hyperbolic Fill
  subtitle: Heptagon Crown
  first: true
- level: tessera/5-4/mosaic-pentagons
  image: mosaic-pentagons
  title: Edge Match
  subtitle: Pentagons
  first: true
- level: tessera/4-5/npuzzle-hyper17
  image: npuzzle-hyper17
  title: N-Puzzles
  subtitle: 17 Puzzle · Hyperbolic
- level: tessera/5-4/merge-pent51
  image: merge-pent51
  title: Number Merge
  subtitle: The Funnel

# --- Triangles {3,6} ---
- level: tessera/3-6/hexagram-2
  image: hexagram-2
  title: Polyiamonds
  subtitle: Six-Pointed Star
  first: true
- level: tessera/3-6/picture-tri
  image: picture-tri
  title: Pictures
  subtitle: Starry Triangle
  first: true
- level: tessera/3-6/mosaic-starry-12x6
  image: mosaic-starry-12x6
  title: Iamond Mosaic
  subtitle: Starry Night
  first: true
- level: tessera/3-6/slideout-tumble
  image: slideout-tumble
  title: Slide Out
  subtitle: Tumble
  first: true
- level: tessera/3-6/npuzzle-tri12
  image: npuzzle-tri12
  title: N-Puzzles
  subtitle: 12 Puzzle · Triangles
- level: tessera/3-6/drop-iamond-12x16
  image: drop-iamond-12x16
  title: Falling Blocks
  subtitle: Tri Drop · 12×16

# --- Honeycomb {6,3} ---
- level: tessera/6-3/fill-medley
  image: fill-medley
  title: Polyhexes
  subtitle: Two, Three, Four
  first: true
- level: tessera/6-3/merge-hex2048
  image: merge-hex2048
  title: Number Merge
  subtitle: Six Ways to Push

# --- Squares {4,4} --- (the flat classics, canonical tessera keys since (G′))
- level: tessera/4-4/fill-pent-8x8-corners
  image: fill-pent-8x8-corners
  title: Polyominoes
  subtitle: Pentominoes · 8×8
  first: true
- level: tessera/4-4/mosaic-euler-4x5
  image: mosaic-euler-4x5
  title: Pictures
  subtitle: Euler
  first: true
- level: tessera/4-4/mosaic-numtiles-4x4
  image: mosaic-numtiles-4x4
  title: Edge Match
  subtitle: Number Tiles
  first: true
- level: tessera/4-4/huarongdao-1
  image: huarongdao-1
  title: Huarong Dao
  subtitle: Blade Astride
  first: true
- level: tessera/4-4/sort-fifteen-4x4
  image: sort-fifteen-4x4
  title: N-Puzzles
  subtitle: 15 Puzzle · 4×4
- level: tessera/4-4/merge-equal-4x4
  image: merge-equal-4x4
  title: Number Merge
  subtitle: 4×4 Square
- level: tessera/4-4/drop-tetromino-10x20
  image: drop-tetromino-10x20
  title: Falling Blocks
  subtitle: Tetromino
`;export{e as h};
