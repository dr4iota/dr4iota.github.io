const e=`id: huarongdao-7
title: 三軍聯防 · Three Armies
genus: huarongdao
order: 274
par: 65
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
      - { piece: vert, at: [2, 0] }
      - { piece: vert, at: [3, 0] }
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **三軍聯防** (sān jūn lián fáng)
  三 sān three · 軍 jūn army · 聯 lián joint · 防 fáng defense — simplified: 三军联防

  Three armies holding the line together. Also known as 交錯堵道 (jiāo cuò dǔ dào), “roads blocked
  crisscross.”

  Shortest solution: **65 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
