const e=`id: gridlock-7x7-02
title: 7×7 · 2
genus: gridlock
order: 346
par: 7
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
  - { id: carV, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: carH, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: truckH, cells: [[0, 0], [1, 0], [2, 0]], symmetry: fixed, supply: unlimited }
  - { id: truckV, cells: [[0, 0], [0, 1], [0, 2]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 3], target: true }
      - { piece: carV, at: [3, 3] }
      - { piece: carH, at: [1, 0] }
      - { piece: truckH, at: [2, 5] }
      - { piece: truckH, at: [3, 1] }
      - { piece: truckV, at: [2, 1] }
      - { piece: carV, at: [5, 2] }
      - { piece: truckV, at: [6, 2] }
`;export{e as default};
