const e=`id: mosaic-golden-spiral-5x3
title: Golden spiral · 5×3
genus: picture
order: 78
space: square
# Art gallery: first-party render (misc/scripts/packing-gen-art.mjs), cut 5×3
# to match the 21×13 Fibonacci rectangle.
mosaic:
  image: golden-spiral.svg
  cut: [5, 3]
about: |
  Those squares are the **Fibonacci numbers** — 1, 1, 2, 3, 5, 8, 13 — where
  each number is the sum of the two before it. Snap squares of those sizes
  together and they coil neatly into a rectangle; run a quarter-circle
  through each square and you get this spiral. Grow the numbers further and
  the rectangle's shape settles toward the **golden ratio**, about 1.618 —
  a proportion painters and architects have chased for centuries, and the
  same spiral logic you can spot in sunflower heads and pinecones.
`;export{e as default};
