const e=`# Iamond Mosaic, step 1 — the Pacioli portrait on an 8×4 zigzag block (32
# triangles) cut into eight tetriamonds. The gentlest shaped cut on this grid:
# small slices, three silhouettes to learn.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-pacioli-8x4
title: Pacioli · 8 tetriamonds
space: tessera
genus: iamond-mosaic
order: 501
board: { p: 3, q: 6 }
orient: edge-down
mosaic: { image: pacioli.jpg, mask: [EEEBBBAA, EGGHBDAA, GGHHHDDD, FFFFCCCC] }
about: |
  Luca Pacioli — the friar who taught Leonardo mathematics and wrote the
  book that spread double-entry bookkeeping across Europe — demonstrates a
  theorem beside a glass polyhedron half full of water. Here his portrait is
  cut along the *triangular* grid for the first time: four-triangle pieces,
  their slanted edges interlocking like folded paper. Attr. Jacopo de'
  Barbari, Portrait of Luca Pacioli (c. 1500) — public domain, via Wikimedia
  Commons.
`;export{e as default};
