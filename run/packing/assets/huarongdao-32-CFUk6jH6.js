const e=`id: huarongdao-32
title: 峰迴路轉 · Winding Road
genus: huarongdao
order: 291
par: 138
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
      - { piece: cao, at: [0, 1], target: true }
      - { piece: vert, at: [3, 0] }
      - { piece: vert, at: [2, 1] }
      - { piece: vert, at: [3, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: horiz, at: [2, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [1, 0] }
      - { piece: dot, at: [2, 0] }
      - { piece: dot, at: [1, 4] }
about: |
  **峰迴路轉** (fēng huí lù zhuǎn)
  峰 fēng peak · 迴 huí turn · 路 lù road · 轉 zhuǎn wind — simplified: 峰回路转

  “The peaks turn, the path winds on” — the idiom for fortunes reversing just when the road
  seems to end. You will need the optimism: this is the hardest classical opening of all.

  Shortest solution: **138 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
