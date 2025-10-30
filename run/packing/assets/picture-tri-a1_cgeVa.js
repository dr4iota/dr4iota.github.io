const e=`# Triangle picture mosaic — Van Gogh's Starry Night (already bundled +
# licensed in levels/images/manifest.yaml) cut over the side-4 triangle into
# 16 one-triangle tiles. \`expandTriMosaic\` derives a unique shared label per
# interior seam and a unique rim label per boundary edge, so the only
# edge-clean arrangement is the original picture; the identity arrangement is
# a solution by construction — and machine-pinned: the "picture cut" case of
# libs/packing-base/src/trihex/levels-tri.test.ts solves this exact mosaic
# block (starry-night.jpg, triangle 4) and asserts every tile lands home.
id: picture-tri
title: Starry Triangle
space: trihex
genus: picture
order: 71
mosaic:
  image: starry-night.jpg
  cut: { triangle: 4 }
about: |
  A picture cut along the triangular grid: every tile is one triangle of the
  image, and each interior seam only accepts its original neighbor — so the
  finished board *is* the proof you placed every piece where it came from.
  Vincent van Gogh, The Starry Night (1889) — public domain, via Wikimedia
  Commons.
`;export{e as default};
