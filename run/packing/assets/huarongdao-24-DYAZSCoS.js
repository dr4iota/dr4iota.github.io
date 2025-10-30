const e=`id: huarongdao-24
title: 雨聲淅瀝 · Pitter-Patter
genus: huarongdao
order: 268
par: 47
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
      - { piece: vert, at: [0, 0] }
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [3, 2] }
      - { piece: vert, at: [1, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **雨聲淅瀝** (yǔ shēng xī lì)
  雨 yǔ rain · 聲 shēng sound · 淅瀝 xī lì pitter-patter — simplified: 雨声淅沥

  The soft patter of falling rain — 淅瀝 imitates the sound, like English “pitter-patter,” and
  the scattered soldiers fall like raindrops.

  Shortest solution: **47 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
