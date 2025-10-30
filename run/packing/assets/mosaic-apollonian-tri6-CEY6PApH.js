const e=`# Tri picture mosaic — the Apollonian gasket (first-party generated art) cut
# over the side-6 triangle into 36 single-triangle tiles. The hard one.
id: mosaic-apollonian-tri6
title: Apollonian Gasket
space: trihex
genus: picture
order: 89
mosaic:
  image: apollonian.svg
  cut: { triangle: 6 }
about: |
  A picture cut along the triangular grid at full depth: thirty-six
  single-triangle tiles from the Apollonian gasket, the fractal of mutually
  tangent circles born from Descartes' circle theorem. With every interior
  seam matching only its original neighbor, reassembling the gasket is the
  hardest of the triangle mosaics.
`;export{e as default};
