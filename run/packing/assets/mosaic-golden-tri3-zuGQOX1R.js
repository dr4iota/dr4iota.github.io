const e=`# Picture, step 1 — the golden spiral over a side-3 triangle, nine one-triangle
# tiles. The gentlest picture board there is.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-golden-tri3
title: Golden Spiral
space: tessera
genus: picture
order: 510
board: { p: 3, q: 6 }
orient: edge-down
mosaic: { image: golden-spiral.svg, cut: { triangle: 3 } }
about: |
  A picture cut along the triangular grid: nine single-triangle tiles, each a
  slice of the golden spiral drawn on Fibonacci squares. Every interior seam
  accepts only its original neighbor, so the finished board is the picture
  itself — a gentle introduction to the triangle mosaics.
`;export{e as default};
