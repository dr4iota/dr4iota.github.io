const e=`id: huarongdao-17
title: 橫馬當關 · Horse at the Pass
genus: huarongdao
order: 286
par: 83
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
      - { piece: vert, at: [1, 3] }
      - { piece: horiz, at: [0, 2] }
      - { piece: horiz, at: [2, 2] }
      - { piece: dot, at: [0, 3] }
      - { piece: dot, at: [3, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **橫馬當關** (héng mǎ dāng guān)
  橫 héng crosswise · 馬 mǎ horse · 當 dāng hold · 關 guān pass — simplified: 横马当关

  A horse set sideways holds the pass — one rider stopping an army at a narrow gate, as the
  poets said: one man at the pass, ten thousand cannot force it.

  Shortest solution: **83 steps** — a step is one piece sliding any distance, turns included.
`;export{e as default};
