const e=`id: fill-twin-el
title: Twin L · 4×2
genus: fill
order: 58
space: square
# Two L-tetrominoes tile the 4×2 board. Both copies share one tray chip carrying
# a ×2 badge (duplicate pieces are grouped), so the roster reads "2 L's", not two
# identical chips. Rotate one L and interlock it with the other to fill the board.
region: { rect: [4, 2] }
pieces:
  - { id: el, cells: [[0, 0], [0, 1], [1, 1], [2, 1]], symmetry: free, supply: { count: 2 } }
`;export{e as default};
