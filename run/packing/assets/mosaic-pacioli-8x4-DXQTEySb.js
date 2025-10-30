const e=`# Iamond Mosaic ladder, step 1 — the Pacioli portrait on an 8×4 zigzag block
# (32 triangles) cut into eight tetriamonds (mask is a real engine tiling of
# the three four-triangle shapes). The gentlest shaped cut on the triangular
# grid: small slices, only three silhouettes to learn.
id: mosaic-pacioli-8x4
title: Pacioli · 8 tetriamonds
space: trihex
genus: iamond-mosaic
order: 1
mosaic:
  image: pacioli.jpg
  mask:
    - 'EEEBBBAA'
    - 'EGGHBDAA'
    - 'GGHHHDDD'
    - 'FFFFCCCC'
about: |
  Luca Pacioli — the friar who taught Leonardo mathematics and wrote the
  book that spread double-entry bookkeeping across Europe — demonstrates a
  theorem beside a glass polyhedron half full of water. Here his portrait is
  cut along the *triangular* grid for the first time: four-triangle pieces,
  their slanted edges interlocking like folded paper. Attr. Jacopo de'
  Barbari, Portrait of Luca Pacioli (c. 1500) — public domain, via Wikimedia
  Commons.
`;export{e as default};
