const e=`id: fill-y-5x10
title: Ten Y's · 5×10
genus: fill
order: 34
space: square
# The Y-pentomino's first rectangle: ten copies fill 5×10, and no smaller
# number of Y's can build any rectangle (the Y's "order" is 10).
# Engine-verified solvable (2026-07-04).
region: { rect: [10, 5] }
pieces: [{ use: pentominoes, pick: [Y], symmetry: free, supply: { count: 10 } }]
about: |
  Ten copies of the Y and nothing else. Some pentominoes build rectangles
  right away — two P's snap together into a 2×5 box. The Y is stubborn.
  Mathematicians call the number of copies a shape needs to build its first
  rectangle the shape's **order**, and the Y's order is ten: no smaller
  gang of Y's can build any rectangle at all. Y's don't stack like bricks —
  they hook into one another. Find the rhythm and the whole board hums.
`;export{e as default};
