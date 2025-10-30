const e=`id: klotski-16
title: 16
genus: klotski
order: 415
par: 25
space: square
region: { rect: [5, 4] }
marks: { goal: [[3, 3], [4, 3]] }
pieces:
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
      - { piece: hbar, at: [0, 0], target: true }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [1, 3] }
      - { piece: hbar, at: [0, 2] }
      - { piece: hbar, at: [3, 3] }
      - { piece: dot, at: [2, 3] }
      - { piece: vbar, at: [3, 1] }
      - { piece: dot, at: [4, 2] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [2, 1] }
      - { piece: dot, at: [2, 0] }
      - { piece: dot, at: [1, 1] }
      - { piece: dot, at: [4, 0] }
      - { piece: dot, at: [0, 1] }
`;export{e as default};
