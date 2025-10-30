const e=`id: klotski-01
title: 1
genus: klotski
order: 400
par: 10
space: square
region: { rect: [5, 5] }
marks: { goal: [[3, 3], [3, 4]] }
pieces:
  - { id: vbar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: vbar, at: [2, 0], target: true }
      - { piece: hbar, at: [3, 2] }
      - { piece: dot, at: [1, 2] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [4, 4] }
      - { piece: dot, at: [1, 0] }
      - { piece: vbar, at: [0, 1] }
      - { piece: dot, at: [2, 3] }
      - { piece: hbar, at: [0, 3] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [2, 4] }
      - { piece: hbar, at: [0, 4] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [4, 1] }
      - { piece: dot, at: [0, 0] }
`;export{e as default};
