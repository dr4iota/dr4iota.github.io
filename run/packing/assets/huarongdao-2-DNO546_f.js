const e=`id: huarongdao-2
title: 橫豎皆將 · Generals Everywhere
genus: huarongdao
order: 284
par: 81
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
      - { piece: vert, at: [3, 0] }
      - { piece: vert, at: [0, 2] }
      - { piece: horiz, at: [1, 2] }
      - { piece: horiz, at: [1, 3] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **橫豎皆將** (héng shù jiē jiàng)
  橫 héng across · 豎 shù upright · 皆 jiē all · 將 jiàng general — simplified: 横竖皆将

  Generals lying across and generals standing tall — the name is a tally of the position,
  where the five long blocks appear both ways. Also known as 雲遮霧障 (yún zhē wù zhàng), “veiled
  in cloud and fog.”

  Shortest solution: **81 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
