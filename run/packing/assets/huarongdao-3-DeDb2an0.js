const e=`id: huarongdao-3
title: 守口如瓶之一 · Bottled Up I
genus: huarongdao
order: 285
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
      - { piece: vert, at: [1, 2] }
      - { piece: horiz, at: [0, 4] }
      - { piece: horiz, at: [2, 4] }
      - { piece: dot, at: [0, 2] }
      - { piece: dot, at: [3, 2] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
about: |
  **守口如瓶之一** (shǒu kǒu rú píng)
  守 shǒu guard · 口 kǒu mouth · 如 rú like · 瓶 píng bottle · 之一 zhī yī no. 1

  “Lips sealed like a bottle” — the idiom for keeping a secret. Here the bottle is literal:
  two lying generals cork the entire exit row. First of the two bottled openings.

  Shortest solution: **81 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
