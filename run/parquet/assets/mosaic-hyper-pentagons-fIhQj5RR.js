const e=`id: mosaic-hyper-pentagons
title: Hyperbolic pentagons · 4×4
genus: picture
order: 98
space: square
# First-party render (misc/scripts/packing-gen-art.mjs): the {5,4} tiling —
# regular pentagons, four meeting at every vertex — drawn on the Poincaré disk,
# the disk inscribing the square board so every cell has tiling.
mosaic:
  image: hyper-54.svg
  cut: [4, 4]
about: |
  On a flat floor you can fit squares or hexagons, but never regular
  pentagons — they leave gaps. In **hyperbolic space**, a bendier kind of
  space that curves away from itself at every point, they fit perfectly:
  here four pentagons meet at every corner. To draw an endless hyperbolic
  world on a flat screen we squash it into a disk (the **Poincaré disk**),
  so shapes shrink as they crowd toward the edge — the same trick the artist
  M. C. Escher used for his *Circle Limit* prints. Every tile is really the
  same size; the "shrinking" is just the map. You have played in hyperbolic
  space now — the word is yours.
`;export{e as default};
