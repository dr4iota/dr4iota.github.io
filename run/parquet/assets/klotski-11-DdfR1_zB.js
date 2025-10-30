const e=`id: klotski-11
title: 11
genus: klotski
order: 410
par: 20
space: square
region: { rect: [6, 4] }
marks: { goal: [[3, 2], [4, 2], [3, 3], [4, 3]] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
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
      - { piece: cao, at: [1, 0], target: true }
      - { piece: vbar, at: [5, 2] }
      - { piece: vbar, at: [3, 0] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [2, 2] }
      - { piece: vbar, at: [4, 0] }
      - { piece: hbar, at: [3, 3] }
      - { piece: dot, at: [1, 2] }
      - { piece: hbar, at: [3, 2] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [0, 0] }
`;export{e as default};
