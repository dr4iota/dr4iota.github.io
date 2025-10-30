const n=`# Iamond Mosaic ladder, step 4 — Starry Night on THE classic hexiamond board:
# the 12×6 zigzag block (72 triangles) that hosts the Iamond Fill flagship,
# now cut into the full twelve-hexiamond set (mask is a real engine tiling —
# one of that board's 1866). Landscape, matching the painting's aspect.
id: mosaic-starry-12x6
title: Starry Night · 12 hexiamonds
space: trihex
genus: iamond-mosaic
order: 4
mosaic:
  image: starry-night.jpg
  mask:
    - 'LLLGGGAAAAAA'
    - 'LKLLGGGEEECC'
    - 'KKKKHHHEEECC'
    - 'JJKHHFFFFBCC'
    - 'JJJHIIFFDBBB'
    - 'JIIIIDDDDDBB'
about: |
  The swirling sky over Saint-Rémy, on the very board where the twelve
  hexiamonds famously all fit — the zigzag-edged block from the Iamond Fill
  finale. This cut is one of that board's real tilings, so solving the
  jigsaw *is* solving the packing; van Gogh's whirls just mark which piece
  is which. Vincent van Gogh, The Starry Night (1889) — public domain, via
  Wikimedia Commons.
`;export{n as default};
