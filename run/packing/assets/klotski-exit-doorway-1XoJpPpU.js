const e=`id: klotski-exit-doorway
title: Slide-Out · exit doorway
genus: klotski
order: 310
space: square
# A walled 4×4 board whose right side opens — through a one-cell doorway — into a
# buffer: a two-cell exit lane (drawn in a muted color, outside the goal). Slide
# the two blockers up out of row 2, then slide the red car right, through the
# doorway, into the exit (the green goal cells) to win. The buffer is navigable
# but never counts toward fill — it is purely room to leave by.
region: { rect: [4, 4] }
buffer: { cells: [[4, 2], [5, 2]] }
pieces:
  - { id: hcar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: vcar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
# The red car wins by covering the exit lane.
marks: { goal: [[4, 2], [5, 2]] }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: hcar, at: [0, 2], target: true }
      - { piece: vcar, at: [2, 1] }
      - { piece: vcar, at: [3, 1] }
`;export{e as default};
