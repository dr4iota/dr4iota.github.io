const e=`id: slide-jam
title: Ten in thirteen
space: tessera
genus: tessera-slide
order: 4
stage: labs
par: 8
board: { p: 4, q: 5, rings: 2 }
region: { rings: 1 }
pieces:
  - { id: runner, cells: [[]], symmetry: fixed }
  - { id: stone, cells: [[]], symmetry: fixed, supply: { count: 9 } }
marks:
  goal: [5]
rules:
  motion: slide
  slide: { metric: moves }
  terminal: at-goal
  supply:
    kind: roster
    layout:
      - { piece: runner, at: 11, target: true }
      - { piece: stone#1, at: 9 }
      - { piece: stone#2, at: 8 }
      - { piece: stone#3, at: 1 }
      - { piece: stone#4, at: 7 }
      - { piece: stone#5, at: 4 }
      - { piece: stone#6, at: 10 }
      - { piece: stone#7, at: 3 }
      - { piece: stone#8, at: 0 }
      - { piece: stone#9, at: 2 }
info: >-
  Ten pieces, thirteen tiles, three gaps. The red one has to cross the board.
about: |
  The tightest board in the set: ten pieces on thirteen tiles, so only three
  tiles are ever empty and nothing moves without something else moving first.

  This is the hyperbolic {4,5} board — square tiles, five around every corner,
  which is one more than flat space allows. The extra tile at each corner is
  why the board can hold thirteen tiles in a ring of twelve around one, and
  why the shortest route is rarely the one that looks shortest on the disk.
`;export{e as default};
