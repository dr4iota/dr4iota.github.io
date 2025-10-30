const e=`id: klotski-10
title: 10
genus: klotski
order: 409
par: 19
space: square
region: { rect: [6, 4] }
marks: { goal: [[0, 3], [1, 3]] }
pieces:
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: hbar, at: [0, 0], target: true }
      - { piece: hbar, at: [2, 1] }
      - { piece: hbar, at: [4, 1] }
      - { piece: hbar, at: [2, 2] }
      - { piece: dot, at: [5, 0] }
      - { piece: dot, at: [5, 2] }
      - { piece: hbar, at: [2, 3] }
      - { piece: dot, at: [2, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [4, 0] }
      - { piece: dot, at: [1, 1] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [4, 2] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [4, 3] }
`;export{e as default};
