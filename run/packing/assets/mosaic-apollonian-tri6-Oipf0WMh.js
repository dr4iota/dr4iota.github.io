const e=`# Picture, the long one — the Apollonian gasket over a side-6 triangle, 36
# one-triangle tiles.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-apollonian-tri6
title: Apollonian Gasket
space: tessera
genus: picture
order: 513
board: { p: 3, q: 6 }
orient: edge-down
mosaic: { image: apollonian.svg, cut: { triangle: 6 } }
about: |
  A picture cut along the triangular grid at full depth: thirty-six
  single-triangle tiles from the Apollonian gasket, the fractal of mutually
  tangent circles born from Descartes' circle theorem. With every interior
  seam matching only its original neighbor, reassembling the gasket is the
  hardest of the triangle mosaics.
`;export{e as default};
