const e=`id: huarongdao-4
title: 守口如瓶之二 · Bottled Up II
genus: huarongdao
order: 288
par: 99
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
      - { piece: horiz, at: [0, 4] }
      - { piece: horiz, at: [2, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **守口如瓶之二** (shǒu kǒu rú píng)
  守 shǒu guard · 口 kǒu mouth · 如 rú like · 瓶 píng bottle · 之二 zhī èr no. 2

  The second bottling — same corked exit, but the guards above are rearranged and the secret
  is kept eighteen steps longer than in 之一.

  Shortest solution: **99 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
