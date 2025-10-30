const e=`id: mosaic-einstein-tet
title: Einstein · 12 tetrominoes
genus: omino-mosaic
order: 85
space: square
# Polyomino-cut band, step 1 — the 1921 Einstein portrait on a 6×8 board cut
# into twelve tetrominoes (I, O, T twice each; S and L three times; mask is a
# real engine tiling). Four-cell pieces are the gentlest shaped cut: small
# slices, familiar Tetris silhouettes.
mosaic:
  image: einstein.jpg
  mask:
    - 'AAAACB'
    - 'DDECCB'
    - 'DDEECB'
    - 'GGHEFB'
    - 'GGHFFF'
    - 'IIHHKL'
    - 'JIIKKL'
    - 'JJJKLL'
about: |
  The Vienna lecture portrait again — but the cut is Tetris now: twelve
  four-square pieces instead of a neat grid. A shaped piece carries more
  picture than a plain square, and its outline is a second clue — an S-bend
  only fits an S-shaped hole. Einstein taught that space itself bends and
  stretches; here it is cut into little bends. Photo by Ferdinand Schmutzer
  (1921) — public domain, via Wikimedia Commons.
`;export{e as default};
