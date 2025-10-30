const e=`id: huarongdao-13
title: 插翅難飛 · Clipped Wings
genus: huarongdao
order: 272
par: 62
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
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [3, 2] }
about: |
  **插翅難飛** (chā chì nán fēi)
  插 chā attach · 翅 chì wing · 難 nán hard · 飛 fēi fly — simplified: 插翅难飞

  “Hard to fly away even if you grew wings” — the idiom for being utterly cornered. It is said
  of Cao Cao here; your job is to prove it wrong.

  Shortest solution: **62 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
