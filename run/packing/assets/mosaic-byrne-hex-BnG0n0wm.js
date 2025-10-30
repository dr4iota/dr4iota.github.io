const e=`id: mosaic-byrne-hex
title: Byrne's Euclid · 12 hexominoes
genus: omino-mosaic
order: 86
space: square
# Polyomino-cut band, step 2 — Byrne's color-block Elements spread (aspect
# 2.06) on a 12×6 board cut into twelve distinct hexominoes (mask is a real
# engine tiling drawn from the 35 free hexominoes). Six-cell pieces carry big
# slices of the page, but twelve different silhouettes must interlock.
mosaic:
  image: byrne-euclid.jpg
  mask:
    - 'AAAAAAKKLJJJ'
    - 'BBBBBEKLLJJJ'
    - 'BDEEEEKLLIHH'
    - 'DDFFFEKKLIHH'
    - 'DDDCFFFGIIIH'
    - 'CCCCCGGGGGIH'
about: |
  Oliver Byrne's 1847 edition of Euclid replaced the letters in every proof
  with **colored shapes** — red triangles and blue angles where other books
  wrote ABC — a century before anyone said "information design". Rebuilding
  his page from twelve six-square pieces is a proof of its own: each colored
  diagram fragment tells you which corner of the spread it came from. Oliver
  Byrne, The First Six Books of the Elements of Euclid (1847) — public
  domain, via Wikimedia Commons.
`;export{e as default};
