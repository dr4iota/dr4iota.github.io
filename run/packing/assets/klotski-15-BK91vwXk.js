const e=`id: klotski-15
title: 15
genus: klotski
order: 414
par: 24
space: square
region: { rect: [5, 5] }
marks: { goal: [[0, 3], [0, 4]] }
pieces:
  - { id: vbar, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: hbar, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: vbar, at: [3, 0], target: true }
      - { piece: dot, at: [4, 4] }
      - { piece: dot, at: [2, 0] }
      - { piece: vbar, at: [0, 2] }
      - { piece: hbar, at: [2, 4] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [4, 3] }
      - { piece: hbar, at: [0, 4] }
      - { piece: hbar, at: [1, 1] }
      - { piece: dot, at: [4, 2] }
      - { piece: vbar, at: [0, 0] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [4, 0] }
      - { piece: hbar, at: [2, 3] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [1, 2] }
`;export{e as default};
