const e=`id: klotski-14
title: 14
genus: klotski
order: 413
par: 23
space: square
region: { rect: [5, 4] }
marks: { goal: [[2, 2], [2, 3], [3, 3]] }
pieces:
  - { id: lTro, cells: [[0, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: vbar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: lTro, at: [0, 0], target: true }
      - { piece: dot, at: [3, 3] }
      - { piece: hbar, at: [3, 0] }
      - { piece: vbar, at: [4, 1] }
      - { piece: dot, at: [2, 2] }
      - { piece: vbar, at: [0, 2] }
      - { piece: dot, at: [2, 1] }
      - { piece: dot, at: [3, 2] }
      - { piece: hbar, at: [1, 0] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [4, 3] }
      - { piece: dot, at: [2, 3] }
`;export{e as default};
