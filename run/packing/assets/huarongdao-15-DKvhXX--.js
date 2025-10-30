const e=`id: huarongdao-15
title: 兵分三路 · Three Columns
genus: huarongdao
order: 279
par: 72
space: square
region: { rect: [4, 5] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
  - { id: vert, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
  - { id: horiz, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: dot, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
marks: { goal: [[1, 3], [2, 3], [1, 4], [2, 4]] }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: cao, at: [1, 0], target: true }
      - { piece: vert, at: [0, 1] }
      - { piece: vert, at: [3, 1] }
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [2, 3] }
about: |
  **兵分三路** (bīng fēn sān lù)
  兵 bīng troops · 分 fēn split · 三 sān three · 路 lù road

  The force splits down three roads — soldiers left, right and center.

  Shortest solution: **72 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
