const e=`id: mosaic-hilbert-4x4
title: Hilbert curve · 4×4
genus: picture
order: 80
space: square
# Art gallery: first-party render, order-5 Hilbert curve, rainbow by position.
mosaic:
  image: hilbert.svg
  cut: [4, 4]
about: |
  One single line, never crossing itself, visiting every corner of the
  square — this is the **Hilbert curve**, and the rainbow shows its journey
  from red to violet. Keep refining it and the line passes through *every
  point* of the square: a one-dimensional thread that fills two-dimensional
  space, which sounded impossible until mathematicians drew it. It is
  useful, too: computers use Hilbert curves to turn maps into lists so that
  places near each other on the map stay near each other in the list.
`;export{e as default};
