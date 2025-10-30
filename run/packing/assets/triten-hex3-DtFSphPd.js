const e=`# Tri Ten — the 1010 of the triangular lattice, on the side-3 hexagon (54 cells;
# a hexagon has no sharp corners, so no lane degenerates to a single cell).
# Three lane families, named here as the bearings they are: 2 is the row, 0 and 1
# the two 60° strips. The generic \`lanes()\` walk reproduces each one exactly —
# a triangle's neighbours alternate, so the ray zigzags, and the zigzag IS the
# strip (pinned in \`ray.test.ts\`).
id: triten-hex3
title: Tri Ten · Hexagon
space: tessera
genus: clear
order: 530
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 3 }
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
  - id: tri-up
    cells: [[0, 0], [-1, 1], [0, 1], [1, 1]]
    lattice: true
    symmetry: fixed
    supply: unlimited
  - id: tri-down
    cells: [[1, 0], [2, 0], [3, 0], [2, 1]]
    lattice: true
    symmetry: fixed
    supply: unlimited
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0, 1, 2] } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
about: |
  The place-and-clear genre on the triangular grid — the *Trigon* family of
  mobile puzzles. Where the square 1010 clears rows and columns, this board
  has **three** lane directions: the horizontal rows and the two 60° strips.
  Complete any lane to clear it; the game ends when none of the dealt pieces
  fits anywhere.
`;export{e as default};
