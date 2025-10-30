const e=`id: huarongdao-25
title: 桃花園中 · Peach Garden
genus: huarongdao
order: 276
par: 70
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
      - { piece: vert, at: [2, 2] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **桃花園中** (táo huā yuán zhōng)
  桃 táo peach · 花 huā blossom · 園 yuán garden · 中 zhōng within — simplified: 桃花园中

  In the peach-blossom garden — where Liu Bei, Guan Yu and Zhang Fei swore to live and die as
  brothers, the oath that opens the whole novel.

  Shortest solution: **70 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
