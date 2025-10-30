const e=`id: fill-pent-6x10
title: Pentominoes · 6×10
genus: fill
order: 40
space: square
region: { rect: [10, 6] }
pieces: [{ use: pentominoes, symmetry: free }]
about: |
  The most famous pentomino problem: fit all twelve pentominoes into the 6×10
  rectangle. It looks like the friendliest of the four rectangles (the area
  argument allows 6×10, 5×12, 4×15 and 3×20), and it is the richest — a 1960
  computer search first counted exactly **2,339** distinct solutions (not
  counting rotations and reflections). The 3×20 box, by contrast, has just 2.

  Finding even one by hand is a rite of passage; Solve will prove the board
  out with an exact-cover search if you want to watch.
`;export{e as default};
