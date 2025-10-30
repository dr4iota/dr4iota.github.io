const e=`# Tri picture mosaic — the golden spiral (first-party generated art) cut over
# the side-3 triangle into 9 single-triangle tiles. A gentle first reassembly.
id: mosaic-golden-tri3
title: Golden Spiral
space: trihex
genus: picture
order: 54
mosaic:
  image: golden-spiral.svg
  cut: { triangle: 3 }
about: |
  A picture cut along the triangular grid: nine single-triangle tiles, each a
  slice of the golden spiral drawn on Fibonacci squares. Every interior seam
  accepts only its original neighbor, so the finished board is the picture
  itself — a gentle introduction to the triangle mosaics.
`;export{e as default};
