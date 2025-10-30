const e=`# Tri picture mosaic — Euler's portrait cut over the side-2 hexagon into 24
# single-triangle tiles. A hexagon (not a triangle) so the portrait keeps a
# near-rectangular frame and no corner of the face is cut away.
id: mosaic-euler-hex2
title: Euler Hexagon
space: trihex
genus: picture
order: 77
mosaic:
  image: euler.jpg
  cut: { hexagon: 2 }
about: |
  A portrait cut along the triangular grid over a hexagonal frame:
  twenty-four single-triangle tiles, each a shard of the image, and each
  interior seam accepts only its original neighbor — so the only edge-clean
  arrangement is the finished portrait. The hexagon keeps the face centered
  and whole where a triangle would clip its corners. Jakob Emanuel Handmann,
  Leonhard Euler (1753) — public domain, via Wikimedia Commons.
`;export{e as default};
