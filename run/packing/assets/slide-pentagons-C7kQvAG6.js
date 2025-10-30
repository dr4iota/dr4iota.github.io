const e=`id: slide-pentagons
title: The board with no straight ahead
space: tessera
genus: tessera-slide
order: 3
stage: labs
par: 6
board: { p: 5, q: 4, rings: 2 }
orient: edge-down
region: { rings: 1 }
pieces:
  - { id: runner, cells: [[]], symmetry: fixed }
  - { id: stone, cells: [[]], symmetry: fixed, supply: { count: 7 } }
marks:
  goal: [4]
rules:
  motion: slide
  slide: { metric: moves }
  terminal: at-goal
  supply:
    kind: roster
    layout:
      - { piece: runner, at: 10, target: true }
      - { piece: stone#1, at: 2 }
      - { piece: stone#2, at: 6 }
      - { piece: stone#3, at: 0 }
      - { piece: stone#4, at: 1 }
      - { piece: stone#5, at: 3 }
      - { piece: stone#6, at: 5 }
      - { piece: stone#7, at: 9 }
info: >-
  Pentagons, four to a corner. Only three tiles are free, so every move has
  to be the right one.
about: |
  A hyperbolic board of **pentagons** — and pentagons have an odd number of
  sides, which changes something you have never had to think about.

  On a square or a hexagon, every side has one directly opposite it. Set off
  across a tile and you come out the far side, and "straight ahead" is a real
  place. A pentagon has no opposite side at all. Leave by one, and the far
  wall is a *corner*, with two sides either side of it.

  So a piece travelling here cannot go straight. It leans to whichever side is
  nearer its heading, then the other way, then back — the straightest line the
  board has to offer, which is a zigzag. The heading itself never bends; only
  the step has to choose.
`;export{e as default};
