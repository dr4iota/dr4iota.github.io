const e=`id: mosaic-picture-mask
title: Picture · polyomino
genus: omino-mosaic
order: 53
space: square
# The "use polyominoes" mosaic: the same image cut into irregular polyomino
# pieces by a letter mask (each letter is one piece), rather than a uniform grid.
# A piece shows its shaped slice of the picture; auto-derived seam labels force
# the unique solution, exactly as the grid cut does.
mosaic:
  image: scene.svg
  mask:
    - "AABB"
    - "ACCB"
    - "ADDB"
`;export{e as default};
