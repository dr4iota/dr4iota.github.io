const e=`id: klotski-19
title: 19
genus: klotski
order: 418
par: 28
space: square
region: { rect: [4, 4] }
marks: { goal: [[2, 3], [3, 3]] }
pieces:
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: vbar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: hbar, at: [2, 0], target: true }
      - { piece: hbar, at: [0, 3] }
      - { piece: vbar, at: [1, 1] }
      - { piece: vbar, at: [0, 1] }
      - { piece: dot, at: [1, 0] }
      - { piece: dot, at: [2, 2] }
      - { piece: vbar, at: [3, 1] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [2, 1] }
`;export{e as default};
