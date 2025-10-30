const e=`# Tri Ten on a block rather than a hexagon — the same three lane families over a
# zigzag-edged board, where the short lanes near the corners bite.
id: triten-rect
title: Tri Ten · Block
space: tessera
genus: clear
order: 531
board: { p: 3, q: 6 }
orient: edge-down
region: { rect: [10, 4], holes: [[9, 0], [9, 3]] }
pieces:
  - id: up
    cells: [[0, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: down
    cells: [[1, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: rhomb
    cells: [[0, 0], [1, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: rhomb2
    cells: [[1, 0], [2, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: vert
    cells: [[0, 0], [0, 1]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: bar3
    cells: [[0, 0], [1, 0], [2, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: bar3b
    cells: [[1, 0], [2, 0], [3, 0]]
    lattice: true
    symmetry: fixed
    supply: unlimited
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0, 1, 2] } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
info: The two clipped corners aren't part of the board — their diagonal lanes would be a
  single cell.
`;export{e as default};
