const e=`id: huarongdao-6
title: 層層設防之二 · Layered Defense II
genus: huarongdao
order: 290
par: 120
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
      - { piece: horiz, at: [1, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **層層設防之二** (céng céng shè fáng)
  層 céng layer · 層 céng layer · 設 shè set up · 防 fáng defense — simplified: 层层设防之二

  The second layered defense earns the name: at 120 steps, only one classical opening is
  harder.

  Shortest solution: **120 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
