const e=`id: fill-pentagons
title: Pentagons, four to a corner
space: tessera
genus: tessera-fill
order: 5
stage: labs
board: { p: 5, q: 4, rings: 1 }
orient: edge-down
pieces:
  - id: pair
    cells: [[], [0]]
    symmetry: free
    supply: { count: 5 }
  - id: mono
    cells: [[]]
    supply: { count: 1 }
info: >-
  Regular pentagons can't tile a flat floor — but in hyperbolic space they
  meet four to a corner, like squares do at home.
about: |
  This is {5,4}: regular **pentagons**, four around every corner — the tiling
  flat geometry famously forbids. Escher drew its cousins as the Circle
  Limit prints; here you can cover one patch of it with your own hands.

  And though the drawing shows them at different sizes, every cell is the
  same regular pentagon — congruent in the hyperbolic plane, with right
  angles at every corner (that is how four meet). Only the disk map shrinks
  the outer ones.
`;export{e as default};
