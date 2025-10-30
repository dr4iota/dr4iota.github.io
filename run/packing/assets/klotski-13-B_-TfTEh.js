const e=`id: klotski-13
title: 13
genus: klotski
order: 412
par: 22
space: square
region: { rect: [5, 4] }
marks: { goal: [[0, 2], [1, 2], [0, 3], [1, 3]] }
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
      - { piece: cao, at: [3, 0], target: true }
      - { piece: vbar, at: [3, 2] }
      - { piece: vbar, at: [2, 2] }
      - { piece: dot, at: [2, 0] }
      - { piece: vbar, at: [4, 2] }
      - { piece: hbar, at: [0, 1] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [2, 1] }
      - { piece: dot, at: [1, 0] }
`;export{e as default};
