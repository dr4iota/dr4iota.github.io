const e=`id: gridlock-5x5-05
title: 5×5 · 5
genus: gridlock
order: 334
par: 5
space: square
region:
  mask:
    - "#####.."
    - "#####.."
    - "#######"
    - "#####.."
    - "#####.."
marks: { goal: [[5, 2], [6, 2]] }
pieces:
  - { id: red, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: carH, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: truckH, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: carV, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 2], target: true }
      - { piece: carH, at: [1, 1] }
      - { piece: truckH, at: [0, 4] }
      - { piece: carV, at: [2, 2] }
      - { piece: carH, at: [2, 0] }
      - { piece: carV, at: [3, 2] }
`;export{e as default};
