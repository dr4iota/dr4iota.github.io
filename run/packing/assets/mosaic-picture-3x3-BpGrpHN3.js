const e=`id: mosaic-picture-3x3
title: Picture · 3×3
genus: picture
order: 50
space: square
# A picture mosaic: one image cut into a 3×3 grid of single-cell pieces. Each
# piece shows its slice of the image; \`expandMosaic\` derives a unique edge label
# for every interior seam and rim edge, so the only edge-clean arrangement is the
# original picture. Drag the scrambled slices from the tray; mismatched seams
# glow red, "Solved" lights when the picture is whole.
mosaic:
  image: scene.svg
  cut: [3, 3]
`;export{e as default};
