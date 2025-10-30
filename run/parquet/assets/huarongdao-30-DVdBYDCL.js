const e=`id: huarongdao-30
title: 屯兵東路 · East Road
genus: huarongdao
order: 278
par: 71
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
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [1, 3] }
      - { piece: horiz, at: [0, 2] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **屯兵東路** (tún bīng dōng lù)
  屯 tún station · 兵 bīng troops · 東 dōng east · 路 lù road — simplified: 屯兵东路

  Troops massed on the eastern road — the pursuit concentrates on one flank.

  Shortest solution: **71 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
