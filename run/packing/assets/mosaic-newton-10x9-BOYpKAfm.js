const e=`# Iamond Mosaic, step 5 — Newton, fifteen hexiamonds: the largest shaped cut
# in the ladder.
# \`mosaic:\` is sugar: tessera resolves it at parse into region + fixed pieces +
# edge labels + a picture skin, and measures each crop in the board's OWN raster
# frame — the same frame the renderer cuts its bitmap in, so slice and mask agree
# by construction. Every interior seam carries one id shared by the two tiles
# that meet on it and every rim edge an id of its own, so the one arrangement
# with no mismatched seam is the picture.
# Certified: the mosaic solver fills the board with zero mismatched seams,
# matching parquet's tri engine tile for tile (2026-08-14).
id: mosaic-newton-10x9
title: Newton · 15 hexiamonds
space: tessera
genus: iamond-mosaic
order: 505
board: { p: 3, q: 6 }
orient: edge-down
mosaic:
  image: newton.jpg
  mask:
    - FFFDDDDDBB
    - GGFFDEEBBB
    - GGGFEEEBCC
    - GKKKEJJJCC
    - LKKKNJJJCC
    - LLNNNNNIII
    - LLMMOOOOII
    - LMMMMOOHIH
    - AAAAAAHHHH
about: |
  Kneller's Newton, painted the year *Principia* changed what "why" means in
  physics. Ninety triangles, fifteen six-triangle pieces — the full
  hexiamond set plus a doubled crown, lobster and hexagon, so twice you'll
  hold a shape whose twin already sits on the board and only the paint can
  tell them apart. The largest triangular mosaic in the gallery. After
  Godfrey Kneller, Isaac Newton (1689) — public domain, via Wikimedia
  Commons.
`;export{e as default};
