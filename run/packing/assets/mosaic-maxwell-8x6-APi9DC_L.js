const e=`# Iamond Mosaic, step 2 — Maxwell on an 8×6 block, eight hexiamonds.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-maxwell-8x6
title: Maxwell · 8 hexiamonds
space: tessera
genus: iamond-mosaic
order: 502
board: { p: 3, q: 6 }
orient: edge-down
mosaic:
  image: maxwell.jpg
  mask: [HHHHHAAA, GGFFHAAB, GGGFFABB, EEGDFFBB, EEDDDCCB, EEDDCCCC]
about: |
  James Clerk Maxwell folded electricity, magnetism and light into four
  equations — and, in 1861, made the first color photograph. His portrait
  comes apart into eight **hexiamonds**, the six-triangle cousins of the
  pentominoes: a bar, a sphinx, a yacht, a lobster and their kin. The
  picture tells you roughly where a piece lives; the slanted silhouettes say
  exactly where. G. J. Stodart engraving, James Clerk Maxwell — public
  domain, via Wikimedia Commons.
`;export{e as default};
