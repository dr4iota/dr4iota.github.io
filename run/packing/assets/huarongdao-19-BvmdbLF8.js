const e=`id: huarongdao-19
title: 兵擋將阻 · Double Barred
genus: huarongdao
order: 287
par: 87
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
      - { piece: vert, at: [3, 0] }
      - { piece: vert, at: [0, 2] }
      - { piece: horiz, at: [1, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [3, 3] }
about: |
  **兵擋將阻** (bīng dǎng jiàng zǔ)
  兵 bīng soldier · 擋 dǎng block · 將 jiàng general · 阻 zǔ bar — simplified: 兵挡将阻

  Soldiers screen the way and generals bar it — both ranks stand in the road.

  Shortest solution: **87 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
