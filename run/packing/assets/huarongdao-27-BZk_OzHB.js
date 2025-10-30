const e=`id: huarongdao-27
title: 圍而不殲 · Surrounded, Spared
genus: huarongdao
order: 273
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
      - { piece: vert, at: [0, 2] }
      - { piece: vert, at: [1, 3] }
      - { piece: vert, at: [2, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [3, 3] }
about: |
  **圍而不殲** (wéi ér bù jiān)
  圍 wéi surround · 而 ér yet · 不 bù not · 殲 jiān annihilate — simplified: 围而不歼

  Surround, but do not destroy — old siegecraft wisdom: always leave a trapped enemy a way
  out, or he will fight to the death.

  Shortest solution: **62 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
