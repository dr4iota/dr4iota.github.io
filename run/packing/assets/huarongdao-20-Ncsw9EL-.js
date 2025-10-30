const e=`id: huarongdao-20
title: 兵臨城下 · At the Gates
genus: huarongdao
order: 269
par: 54
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
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [1, 2] }
      - { piece: vert, at: [2, 2] }
      - { piece: vert, at: [3, 2] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 1] }
about: |
  **兵臨城下** (bīng lín chéng xià)
  兵 bīng troops · 臨 lín arrive at · 城 chéng city wall · 下 xià beneath — simplified: 兵临城下

  “Troops beneath the city wall” — the idiom for an enemy at the gates and an ultimatum in the
  air.

  Shortest solution: **54 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
