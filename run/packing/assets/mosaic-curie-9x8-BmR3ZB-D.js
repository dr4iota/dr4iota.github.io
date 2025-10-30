const e=`# Iamond Mosaic, step 3 — Curie, cut into the full twelve hexiamonds.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-curie-9x8
title: Curie · 12 hexiamonds
space: tessera
genus: iamond-mosaic
order: 503
board: { p: 3, q: 6 }
orient: edge-down
mosaic:
  image: curie.jpg
  mask:
    - AAABBCCCC
    - AAAGBBCDC
    - GGGGGBBDD
    - IIIHHHHDD
    - IIIJJHHDE
    - KKJJJJEEE
    - KKLLLLEEF
    - KKLLFFFFF
about: |
  Marie Curie — two Nobel Prizes in two different sciences, still the only
  person to manage it — photographed around 1920. Her portrait is cut into
  **all twelve hexiamonds**, every shape six triangles can make, each used
  exactly once. Without the picture this is the full Iamond Fill challenge;
  with it, every slice whispers its home. Photo Henri Manuel (c. 1920) —
  public domain, via Wikimedia Commons.
`;export{e as default};
