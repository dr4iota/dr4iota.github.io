const e=`id: huarongdao-11
title: 五虎攔路 · Five Tigers
genus: huarongdao
order: 264
par: 39
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
      - { piece: cao, at: [0, 0], target: true }
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [1, 2] }
      - { piece: horiz, at: [2, 0] }
      - { piece: horiz, at: [2, 1] }
      - { piece: horiz, at: [2, 2] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **五虎攔路** (wǔ hǔ lán lù)
  五 wǔ five · 虎 hǔ tiger · 攔 lán bar · 路 lù road — simplified: 五虎拦路

  Five tigers bar the way — a nod to Shu’s Five Tiger Generals: Guan Yu, Zhang Fei, Zhao Yun,
  Ma Chao and Huang Zhong. Also known as 四將聯防 (sì jiàng lián fáng), “four generals in joint
  defense.”

  Shortest solution: **39 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
