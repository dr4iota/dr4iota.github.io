const e=`# Iamond Mosaic, step 4 — Starry Night across the twelve-hexiamond block.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-starry-12x6
title: Starry Night · 12 hexiamonds
space: tessera
genus: iamond-mosaic
order: 504
board: { p: 3, q: 6 }
orient: edge-down
mosaic:
  image: starry-night.jpg
  mask:
    - LLLGGGAAAAAA
    - LKLLGGGEEECC
    - KKKKHHHEEECC
    - JJKHHFFFFBCC
    - JJJHIIFFDBBB
    - JIIIIDDDDDBB
about: |
  The swirling sky over Saint-Rémy, on the very board where the twelve
  hexiamonds famously all fit — the zigzag-edged block from the Iamond Fill
  finale. This cut is one of that board's real tilings, so solving the
  jigsaw *is* solving the packing; van Gogh's whirls just mark which piece
  is which. Vincent van Gogh, The Starry Night (1889) — public domain, via
  Wikimedia Commons.
`;export{e as default};
