const e=`id: gridlock-7x7-08
title: 7×7 · 8
genus: gridlock
order: 352
par: 14
space: square
region:
  mask:
    - "#######.."
    - "#######.."
    - "#######.."
    - "#########"
    - "#######.."
    - "#######.."
    - "#######.."
marks: { goal: [[7, 3], [8, 3]] }
pieces:
  - { id: red, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: truckV, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
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
      - { piece: red, at: [0, 3], target: true }
      - { piece: truckV, at: [6, 1] }
      - { piece: truckH, at: [1, 5] }
      - { piece: carV, at: [2, 0] }
      - { piece: truckV, at: [3, 1] }
      - { piece: carV, at: [2, 2] }
      - { piece: truckV, at: [5, 1] }
      - { piece: truckH, at: [3, 0] }
      - { piece: carV, at: [5, 4] }
`;export{e as default};
