const e=`id: klotski-02
title: 2
genus: klotski
order: 401
par: 11
space: tessera
board: { p: 4, q: 4 }
region: { rect: [4, 4] }
marks: { goal: [[0, 2], [1, 2], [0, 3], [1, 3]] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], lattice: true, symmetry: fixed,
      supply: unlimited }
  - { id: dot, cells: [[0, 0]], lattice: true, symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: cao, at: [0, 0], target: true }
      - { piece: dot, at: [1, 2] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [2, 1] }
`;export{e as default};
