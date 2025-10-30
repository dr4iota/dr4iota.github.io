const e=`id: huarongdao-8
title: 堵塞要道 · Roadblock
genus: huarongdao
order: 266
par: 40
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
      - { piece: horiz, at: [2, 2] }
      - { piece: horiz, at: [2, 3] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 1] }
about: |
  **堵塞要道** (dǔ sè yào dào)
  堵塞 dǔ sè to block up · 要 yào vital · 道 dào road

  Choking the vital road — every lane Cao Cao could take is stopped up.

  Shortest solution: **40 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
