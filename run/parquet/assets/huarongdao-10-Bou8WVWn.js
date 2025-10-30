const e=`id: huarongdao-10
title: 四路皆兵 · Four Roads
genus: huarongdao
order: 275
par: 66
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
      - { piece: vert, at: [3, 0] }
      - { piece: horiz, at: [0, 3] }
      - { piece: horiz, at: [2, 3] }
      - { piece: horiz, at: [0, 4] }
      - { piece: horiz, at: [2, 4] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [1, 2] }
      - { piece: dot, at: [2, 2] }
      - { piece: dot, at: [3, 2] }
about: |
  **四路皆兵** (sì lù jiē bīng)
  四 sì four · 路 lù road · 皆 jiē all · 兵 bīng soldier

  A soldier posted on every one of the four roads. Also known as 四路進兵 (sì lù jìn bīng),
  “advancing on four roads.”

  Shortest solution: **66 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
