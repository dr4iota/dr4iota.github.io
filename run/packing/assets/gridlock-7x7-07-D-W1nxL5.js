const e=`id: gridlock-7x7-07
title: 7×7 · 7
genus: gridlock
order: 351
par: 7
space: tessera
board: { p: 4, q: 4 }
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
  - { id: red, cells: [[0, 0], [1, 0]], lattice: true, symmetry: fixed, supply: unlimited }
  - { id: carV, cells: [[0, 0], [0, 1]], lattice: true, symmetry: fixed, supply: unlimited }
  - { id: truckV, cells: [[0, 0], [0, 1], [0, 2]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: carH, cells: [[0, 0], [1, 0]], lattice: true, symmetry: fixed, supply: unlimited }
  - { id: truckH, cells: [[0, 0], [1, 0], [2, 0]], lattice: true, symmetry: fixed,
      supply: unlimited }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 3], target: true }
      - { piece: carV, at: [5, 3] }
      - { piece: truckV, at: [3, 0] }
      - { piece: carV, at: [5, 5] }
      - { piece: carH, at: [2, 5] }
      - { piece: truckV, at: [2, 1] }
      - { piece: truckH, at: [4, 1] }
      - { piece: carH, at: [3, 6] }
`;export{e as default};
