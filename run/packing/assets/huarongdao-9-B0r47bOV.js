const e=`id: huarongdao-9
title: 水泄不通 · Watertight
genus: huarongdao
order: 282
par: 79
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
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: horiz, at: [0, 3] }
      - { piece: horiz, at: [2, 3] }
      - { piece: dot, at: [3, 0] }
      - { piece: dot, at: [3, 1] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **水泄不通** (shuǐ xiè bù tōng)
  水 shuǐ water · 泄 xiè leak · 不 bù not · 通 tōng through

  So tightly packed that “not even water could seep through” — the everyday idiom for a
  hopeless crush of people.

  Shortest solution: **79 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
