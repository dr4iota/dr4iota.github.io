const n=`id: huarongdao-12
title: 兵將連環 · Linked Rings
genus: huarongdao
order: 281
par: 75
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
      - { piece: cao, at: [0, 0], target: true }
      - { piece: vert, at: [3, 0] }
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: horiz, at: [0, 3] }
      - { piece: horiz, at: [2, 3] }
      - { piece: dot, at: [2, 0] }
      - { piece: dot, at: [2, 1] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **兵將連環** (bīng jiàng lián huán)
  兵 bīng soldier · 將 jiàng general · 連環 lián huán linked rings — simplified: 兵将连环

  Soldiers and generals interlocked like the rings of a chain. Also known as 夾道藏兵 (jiā dào
  cáng bīng), “troops hidden along the corridor.”

  Shortest solution: **75 steps** — a step is one piece sliding any distance, turns included.
`;export{n as default};
