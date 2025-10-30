const e=`# Tri-Ten — the 1010 of the triangular lattice, on the side-3 hexagon
# (54 cells; a hexagon board has no sharp corners, so no lane degenerates to
# a single cell). Pieces are dealt three at a time in fixed orientations, so
# the catalog carries both parity forms of each shape (a fixed up-triangle
# can never sit on a down cell — that's the lattice, not a bug).
id: triten-hex3
title: Tri Ten · Hexagon
space: trihex
genus: clear
order: 10
region:
  hexagon: 3
pieces:
  - { id: up, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: down, cells: [[1, 0]], symmetry: fixed, supply: unlimited }
  - { id: rhomb, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: rhomb2, cells: [[1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: vert, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: bar3, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: bar3b, cells: [[1, 0], [2, 0], [3, 0]], symmetry: fixed, supply: unlimited }
  - id: tri-up
    cells: [[0, 0], [-1, 1], [0, 1], [1, 1]]
    symmetry: fixed
    supply: unlimited
  - id: tri-down
    cells: [[1, 0], [2, 0], [3, 0], [2, 1]]
    symmetry: fixed
    supply: unlimited
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: lanes }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: lane-clears
about: |
  The place-and-clear genre on the triangular grid — the *Trigon* family of
  mobile puzzles. Where the square 1010 clears rows and columns, this board
  has **three** lane directions: the horizontal rows and the two 60° strips.
  Complete any lane to clear it; the game ends when none of the dealt pieces
  fits anywhere.
`;export{e as default};
