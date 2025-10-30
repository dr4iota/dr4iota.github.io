const e=`id: gridlock-7x7-17
title: 7×7 · 17
genus: gridlock
order: 361
par: 18
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
  - { id: carH, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 3], target: true }
      - { piece: truckV, at: [2, 1] }
      - { piece: truckH, at: [2, 0] }
      - { piece: truckH, at: [0, 5] }
      - { piece: carV, at: [5, 4] }
      - { piece: truckV, at: [3, 1] }
      - { piece: carV, at: [3, 4] }
      - { piece: carH, at: [5, 0] }
      - { piece: truckH, at: [4, 1] }
      - { piece: truckV, at: [6, 4] }
      - { piece: truckV, at: [4, 3] }
`;export{e as default};
