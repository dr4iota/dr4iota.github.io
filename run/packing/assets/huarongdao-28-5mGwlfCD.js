const e=`id: huarongdao-28
title: 將守角樓 · Corner Towers
genus: huarongdao
order: 277
par: 70
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
      - { piece: vert, at: [0, 3] }
      - { piece: vert, at: [3, 3] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [2, 3] }
about: |
  **將守角樓** (jiàng shǒu jiǎo lóu)
  將 jiàng general · 守 shǒu guard · 角 jiǎo corner · 樓 lóu tower — simplified: 将守角楼

  Generals man the corner watchtowers. Also known as 指揮若定 (zhǐ huī ruò dìng), “commanding as
  if all were already decided” — perfect composure.

  Shortest solution: **70 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
