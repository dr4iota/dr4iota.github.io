const e=`# DEV BENCH — demoted from the shipped catalog 2026-08-25: a single-cell
# slide-out is too trivial to ship, and a real hex slide-out genus needs
# multi-cell pieces, whose rigid translation on a honeycomb is geometrically
# awkward (parked). The board survives here as a
# test fixture: slide-replay.test.ts needs its interchangeable three-stone
# roster, and slide-drag.test.ts its tightly packed single-step drags.
id: slide-firststep
title: Two moves on a honeycomb
space: tessera
genus: klotski
order: 500
par: 2
board: { p: 6, q: 3, rings: 2 }
region: { rings: 1 }
pieces:
  - { id: runner, cells: [[]], symmetry: fixed }
  - { id: stone, cells: [[]], symmetry: fixed, supply: { count: 3 } }
marks:
  goal: [1]
rules:
  motion: slide
  slide: { metric: moves }
  terminal: at-goal
  supply:
    kind: roster
    layout:
      - { piece: runner, at: 5, target: true }
      - { piece: stone#1, at: 0 }
      - { piece: stone#2, at: 3 }
      - { piece: stone#3, at: 6 }
info: >-
  Two moves are enough — a move being one block, carried as far as you like
  before you let go. The board is a honeycomb, so you aim at a tile
  rather than at a direction.
about: |
  The gentlest sliding board there is, and a flat one: six-sided tiles, three
  to a corner, is the honeycomb — the same tiling as a beehive or a bathroom
  floor.

  It is here to teach the one thing a hexagon board changes — you do not push a
  piece *left*, you point at the tile you want it to go to. That already means
  six choices instead of four, which is enough to make the habit stick.
`;export{e as default};
