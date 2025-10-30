const e=`id: huarongdao-14
title: 齊頭並進 · Marching Abreast
genus: huarongdao
order: 271
par: 60
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
      - { piece: vert, at: [0, 0] }
      - { piece: vert, at: [3, 0] }
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [1, 3] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [1, 2] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [3, 2] }
about: |
  **齊頭並進** (qí tóu bìng jìn)
  齊 qí even · 頭 tóu head · 並 bìng side by side · 進 jìn advance — simplified: 齐头并进

  Advancing abreast, heads level — the idiom for moving forward together, drawn here by the
  neat ranks of the opening rows.

  Shortest solution: **60 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
