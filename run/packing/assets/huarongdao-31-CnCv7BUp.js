const e=`id: huarongdao-31
title: 比翼橫空 · Wing to Wing
genus: huarongdao
order: 260
par: 28
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
      - { piece: cao, at: [2, 0], target: true }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [0, 0] }
      - { piece: horiz, at: [0, 1] }
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [2, 4] }
about: |
  **比翼橫空** (bǐ yì héng kōng)
  比 bǐ paired · 翼 yì wing · 橫 héng across · 空 kōng sky — simplified: 比翼横空

  Wing to wing across the sky — the lying generals fly in pairs, like the legendary birds that
  each have one wing and can only fly together. The gentlest classical opening.

  Shortest solution: **28 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
