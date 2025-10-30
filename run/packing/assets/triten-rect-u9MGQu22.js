const e=`# Tri-Ten on a 10×4 zigzag block. The two right-hand corner cells are holes:
# each is the sole region cell of its extreme diagonal lane (a rect board's
# sharp corners degenerate there), and a one-cell lane would self-clear the
# moment it's covered — free points and a confusing pop. Clipping them keeps
# every lane at least two cells.
id: triten-rect
title: Tri Ten · Block
space: trihex
genus: clear
order: 11
region:
  rect: [10, 4]
  holes: [[9, 0], [9, 3]]
pieces:
  - { id: up, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: down, cells: [[1, 0]], symmetry: fixed, supply: unlimited }
  - { id: rhomb, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: rhomb2, cells: [[1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: vert, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: bar3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: bar3b, cells: [[1, 0], [2, 0], [3, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: lanes }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: lane-clears
info: >-
  The two clipped corners aren't part of the board — their diagonal lanes
  would be a single cell.
`;export{e as default};
