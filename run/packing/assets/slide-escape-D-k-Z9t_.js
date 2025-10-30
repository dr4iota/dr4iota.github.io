const e=`id: slide-escape
title: The long way round
space: tessera
genus: tessera-slide
order: 2
stage: labs
par: 3
board: { p: 4, q: 5, rings: 2 }
region: { rings: 1 }
marks:
  goal: [1, 2]
pieces:
  - { id: runner, cells: [[], [0]], symmetry: fixed }
  - { id: stone, cells: [[], [0]], symmetry: fixed, supply: { count: 2 } }
rules:
  motion: slide
  slide: { metric: moves }
  terminal: at-goal
  supply:
    kind: roster
    layout:
      - { piece: runner, at: 8, target: true }
      - { piece: stone#1, at: 0 }
      - { piece: stone#2, at: 11 }
info: >-
  Get the red block onto the marked pair. The stones move too — that is the
  whole difficulty.
about: |
  A sliding-block puzzle on the hyperbolic {4,5} board. The rules are the ones
  you already know — blocks slide, nothing passes through anything — but the
  board is not one you know.

  There is no *left* here. On a flat grid every piece agrees which way north
  is, and it stays agreed however far anything travels. Curved space does not
  offer that: carry a heading around a loop and it comes back turned. So this
  game asks you for something slightly different — not "move it left" but
  "move it toward that tile" — and a block keeps its own heading as it goes.

  Three moves are enough. A move is one block, carried as far as you like
  before you let go — so the count is of blocks touched, not cells crossed.
  Finding which three is the puzzle.
`;export{e as default};
