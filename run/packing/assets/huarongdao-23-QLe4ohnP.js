const e=`id: huarongdao-23
title: 兵臨曹營 · Camp Besieged
genus: huarongdao
order: 262
par: 34
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
      - { piece: vert, at: [3, 2] }
      - { piece: vert, at: [1, 3] }
      - { piece: vert, at: [2, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 1] }
about: |
  **兵臨曹營** (bīng lín cáo yíng)
  兵 bīng troops · 臨 lín arrive at · 曹 Cáo Cao · 營 yíng camp — simplified: 兵临曹营

  The pursuers have reached Cao Cao’s own camp — the noose is already tight, but the way out
  is short.

  Shortest solution: **34 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
