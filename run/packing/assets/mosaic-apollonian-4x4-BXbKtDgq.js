const e=`id: mosaic-apollonian-4x4
title: Circle gasket · 4×4
genus: picture
order: 88
space: square
# Art gallery: first-party render of an Apollonian gasket (circles to r≈0.006,
# placed by Descartes-circle reflections). Self-similar — the hardest picture.
mosaic:
  image: apollonian.svg
  cut: [4, 4]
about: |
  Start with three coins touching each other. In the little gap between
  them fits exactly one perfect circle — the ancient geometer **Apollonius**
  proved it around 200 BC. But now there are new, smaller gaps, and each
  takes its own perfect circle, and so on forever: an **Apollonian gasket**.
  Every circle here was placed by a formula René Descartes wrote in a
  letter to a princess in 1643, relating the sizes of four touching
  circles. Zoom into any corner and the same picture greets you again —
  it is a fractal, made of nothing but circles.
`;export{e as default};
