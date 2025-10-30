const e=`# Picture on the side-2 hexagon: twenty-four one-triangle tiles, and the two
# triangle classes cut genuinely different slices of the image.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-euler-hex2
title: Euler Hexagon
space: tessera
genus: picture
order: 512
board: { p: 3, q: 6 }
orient: edge-down
mosaic: { image: euler.jpg, cut: { hexagon: 2 } }
about: |
  A portrait cut along the triangular grid over a hexagonal frame:
  twenty-four single-triangle tiles, each a shard of the image, and each
  interior seam accepts only its original neighbor — so the only edge-clean
  arrangement is the finished portrait. The hexagon keeps the face centered
  and whole where a triangle would clip its corners. Jakob Emanuel Handmann,
  Leonhard Euler (1753) — public domain, via Wikimedia Commons.
`;export{e as default};
