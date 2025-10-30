const e=`id: huarongdao-29
title: 巧過五關 · Five Passes
genus: huarongdao
order: 263
par: 34
space: square
region: { rect: [4, 5] }
pieces:
  - { id: cao, cells: [[0, 0], [1, 0], [0, 1], [1, 1]], symmetry: fixed, supply: unlimited }
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
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: horiz, at: [0, 3] }
      - { piece: horiz, at: [2, 3] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 1] }
about: |
  **巧過五關** (qiǎo guò wǔ guān)
  巧 qiǎo cleverly · 過 guò pass · 五 wǔ five · 關 guān pass/gate — simplified: 巧过五关

  Slipping cleverly past five passes — Guan Yu once fought through five gates and six generals
  to rejoin his sworn brother; here the passing is done quietly.

  Shortest solution: **34 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
