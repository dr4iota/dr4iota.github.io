const e=`# The flagship: all twelve hexiamonds (72 cells) on a 12×6 zigzag block. The
# neat 60° parallelograms famously refuse the full set, so the classic board
# trades straight slopes for zigzag vertical edges.
# Certified: 1866 covers, matching parquet's tri engine exactly (2026-08-14) —
# the number that proves this import is the same puzzle.
id: hexiamonds-12x6
title: The Twelve Hexiamonds
space: tessera
genus: iamond-fill
order: 506
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [12, 6] }
pieces: [{ use: hexiamonds }]
about: |
  The twelve **hexiamonds** — every shape six unit triangles can make — were
  named by Thomas O'Beirne around 1959 (bar, crook, crown, sphinx, snake,
  yacht, chevron, signpost, lobster, hook, hexagon, butterfly) and popularized
  in Martin Gardner's *Scientific American* columns. They are the triangular
  cousins of the twelve pentominoes: 72 triangles, every piece used exactly
  once.

  Two of the twelve are special. The sphinx and the yacht are the only
  *unbalanced* hexiamonds — four triangles point one way and two the other —
  so on any board with equally many up- and down-triangles they must lean in
  opposite directions. And unlike the pentominoes, which happily fill
  rectangles, the full hexiamond set refuses every straight 60° parallelogram:
  the solver proves the 6×6, 4×9, and 3×12 rhombi impossible. The block you
  see here keeps the area but swaps the straight slopes for zigzag edges —
  and that small change is enough to let all twelve fit.
`;export{e as default};
