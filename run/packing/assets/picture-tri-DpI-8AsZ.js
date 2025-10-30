const e=`# A picture cut along the triangular grid: every tile is one triangle of the
# image, and each interior seam only accepts its original neighbour — so the
# finished board IS the proof that every piece went home.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: picture-tri
title: Starry Triangle
space: tessera
genus: picture
order: 511
board: { p: 3, q: 6 }
orient: edge-down
mosaic: { image: starry-night.jpg, cut: { triangle: 4 } }
about: |
  A picture cut along the triangular grid: every tile is one triangle of the
  image, and each interior seam only accepts its original neighbor — so the
  finished board *is* the proof you placed every piece where it came from.
  Vincent van Gogh, The Starry Night (1889) — public domain, via Wikimedia
  Commons.
`;export{e as default};
