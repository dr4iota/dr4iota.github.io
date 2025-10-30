const e=`id: gridlock-5x5-03
title: 5×5 · 3
genus: gridlock
order: 332
par: 4
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
      - { piece: carH, at: [3, 4] }
      - { piece: truckH, at: [2, 0] }
      - { piece: carV, at: [3, 2] }
      - { piece: carH, at: [3, 1] }
      - { piece: carV, at: [1, 3] }
`;export{e as default};
