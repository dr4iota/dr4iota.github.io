const e=`id: fill-pent-six-5x6
title: Six pentominoes · 5×6
genus: fill
order: 32
space: square
# Six of the twelve pentominoes pack a 5×6 box (30 cells) exactly — a gentle
# first taste of pentominoes before the full set. The engine finds 4 solutions.
region: { rect: [5, 6] }
pieces:
  - { id: n5-0, cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], symmetry: free }
  - { id: n5-1, cells: [[0, 0], [0, 1], [1, 0], [2, 0], [3, 0]], symmetry: free }
  - { id: n5-2, cells: [[0, 0], [1, 0], [1, 1], [2, 0], [3, 0]], symmetry: free }
  - { id: n5-6, cells: [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0]], symmetry: free }
  - { id: n5-7, cells: [[0, 1], [0, 2], [1, 0], [1, 1], [2, 1]], symmetry: free }
  - { id: n5-8, cells: [[0, 0], [0, 1], [1, 0], [2, 0], [2, 1]], symmetry: free }
`;export{e as default};
