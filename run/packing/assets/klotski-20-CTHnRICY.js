const e=`id: klotski-20
title: 20
genus: klotski
order: 419
par: 29
space: square
region: { rect: [6, 4] }
marks: { goal: [[1, 2], [1, 3], [2, 3]] }
pieces:
  - { id: lTro, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: vbar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: lTro, at: [3, 0], target: true }
      - { piece: hbar, at: [3, 3] }
      - { piece: hbar, at: [4, 0] }
      - { piece: dot, at: [2, 3] }
      - { piece: vbar, at: [5, 1] }
      - { piece: vbar, at: [2, 0] }
      - { piece: vbar, at: [0, 2] }
      - { piece: hbar, at: [2, 2] }
      - { piece: dot, at: [1, 1] }
      - { piece: dot, at: [1, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [4, 2] }
      - { piece: dot, at: [1, 2] }
`;export{e as default};
