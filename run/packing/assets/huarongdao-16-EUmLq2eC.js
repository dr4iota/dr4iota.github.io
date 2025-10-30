const e=`id: huarongdao-16
title: 將擁曹營 · Crowded Camp
genus: huarongdao
order: 280
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
      - { piece: vert, at: [1, 2] }
      - { piece: vert, at: [2, 2] }
      - { piece: horiz, at: [0, 4] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [2, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **將擁曹營** (jiàng yōng cáo yíng)
  將 jiàng general · 擁 yōng crowd around · 曹 Cáo Cao · 營 yíng camp — simplified: 将拥曹营

  The generals crowd in a protective wall around Cao Cao’s camp — protective for them, a
  prison for him.

  Shortest solution: **72 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
