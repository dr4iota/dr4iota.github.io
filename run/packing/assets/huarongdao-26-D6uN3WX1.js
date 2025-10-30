const e=`id: huarongdao-26
title: 捷足先登 · Swift Feet
genus: huarongdao
order: 261
par: 32
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
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [1, 3] }
      - { piece: vert, at: [2, 3] }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [0, 0] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [0, 1] }
      - { piece: dot, at: [3, 1] }
about: |
  **捷足先登** (jié zú xiān dēng)
  捷 jié quick · 足 zú foot · 先 xiān first · 登 dēng arrive

  “The swift-footed gets there first” — the idiom for beating everyone to the prize.
  Fittingly, the second-easiest of the classical openings.

  Shortest solution: **32 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
