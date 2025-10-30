const e=`id: klotski-05
title: 5
genus: klotski
order: 404
par: 14
space: square
region: { rect: [4, 4] }
marks: { goal: [[2, 2], [3, 2], [2, 3], [3, 3]] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
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
      - { piece: cao, at: [2, 0], target: true }
      - { piece: vbar, at: [0, 0] }
      - { piece: hbar, at: [1, 2] }
      - { piece: hbar, at: [0, 3] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [1, 1] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [1, 0] }
`;export{e as default};
