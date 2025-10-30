const e=`id: huarongdao-22
title: 一路順風 · Fair Winds
genus: huarongdao
order: 265
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
      - { piece: cao, at: [1, 0], target: true }
      - { piece: vert, at: [0, 0] }
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [3, 2] }
      - { piece: vert, at: [2, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [1, 4] }
about: |
  **一路順風** (yī lù shùn fēng)
  一 yī one · 路 lù road · 順 shùn favorable · 風 fēng wind — simplified: 一路顺风

  “Fair winds the whole way” — what you wish a departing traveler (bon voyage). For once the
  name is kind: this is one of the gentler openings.

  Shortest solution: **39 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
