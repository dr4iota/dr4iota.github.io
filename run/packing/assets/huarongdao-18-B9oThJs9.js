const e=`id: huarongdao-18
title: 前擋後堵 · Boxed In
genus: huarongdao
order: 267
par: 42
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
      - { piece: vert, at: [2, 1] }
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [1, 2] }
      - { piece: horiz, at: [2, 0] }
      - { piece: horiz, at: [1, 4] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **前擋後堵** (qián dǎng hòu dǔ)
  前 qián front · 擋 dǎng block · 後 hòu behind · 堵 dǔ seal — simplified: 前挡后堵

  Blocked in front, sealed from behind. Also known as 前擋後阻 (qián dǎng hòu zǔ), with the same
  meaning.

  Shortest solution: **42 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
