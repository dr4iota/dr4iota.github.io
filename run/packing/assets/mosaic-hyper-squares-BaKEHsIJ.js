const e=`id: mosaic-hyper-squares
title: Hyperbolic squares · 5×5
genus: picture
order: 100
space: square
# First-party render: the {4,5} tiling — squares, five meeting at every vertex
# (impossible on a flat floor, where only four fit) — on the Poincaré disk.
mosaic:
  image: hyper-45.svg
  cut: [5, 5]
about: |
  Four squares meet at a corner on any flat floor — that is why floor tiles
  are square. But this floor curves: it is **hyperbolic space**, and here
  *five* squares crowd around every corner, which no flat floor can do. The
  squares look like they have bulging sides and shrink toward the rim, but
  that is only because we flattened an endless curved world onto a disk (the
  **Poincaré disk**) to fit it on the screen. Out in the real hyperbolic
  space, every square is identical and its sides are perfectly straight.
`;export{e as default};
