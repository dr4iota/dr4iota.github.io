const e=`id: gridlock-5x5-06
title: 5×5 · 6
genus: gridlock
order: 335
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
      - { piece: carH, at: [2, 0] }
      - { piece: carV, at: [2, 1] }
      - { piece: carH, at: [3, 4] }
      - { piece: carV, at: [3, 2] }
      - { piece: carV, at: [4, 2] }
`;export{e as default};
