const e=`id: klotski-4x4
title: 4×4
genus: klotski
order: 298
par: 3
space: square
# A compact sliding-block puzzle: slide the red 2×2 down onto the red goal. The
# side bars wall it in. Solution: drop the two centre soldiers a row, slide the
# block down, push those soldiers into the bottom corners, drop the block again.
region: { rect: [4, 4] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: bar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
marks: { goal: [[1, 2], [2, 2], [1, 3], [2, 3]] }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: cao, at: [1, 0], target: true } # the red 2×2 (key piece)
      - { piece: bar, at: [0, 0] }               # left wall
      - { piece: bar, at: [3, 0] }               # right wall
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [1, 2] }               # in the block's path
      - { piece: dot, at: [2, 2] }
about: |
  A **sliding-block** puzzle: the blocks are packed so tightly they can only
  shuffle around the few empty squares, and your job is to work the **red
  block** onto the red goal. Nothing lifts off the board — everything slides.
  This family is centuries old; its most famous member is the Chinese
  **Huarong Dao** (its own game here). The Slide-Out puzzles that follow change
  the hero block from board to board — a fat square, a long bar, even an L or a
  T — on boards you won't find in the classic set, so each one is a fresh
  escape.
`;export{e as default};
