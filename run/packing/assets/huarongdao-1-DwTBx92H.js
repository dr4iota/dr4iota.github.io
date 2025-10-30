const e=`id: huarongdao-1
title: 橫刀立馬 · Blade Astride
genus: huarongdao
order: 283
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
      - { piece: vert, at: [3, 2] }
      - { piece: horiz, at: [1, 2] }
      - { piece: dot, at: [1, 3] }
      - { piece: dot, at: [2, 3] }
      - { piece: dot, at: [0, 4] }
      - { piece: dot, at: [3, 4] }
about: |
  **橫刀立馬** (héng dāo lì mǎ)
  橫 héng crosswise · 刀 dāo blade · 立 lì stand · 馬 mǎ horse — simplified: 横刀立马

  A lone rider plants his horse across the road, blade held level — nobody passes. This is
  *the* classic opening, and the position draws its own name: four tall generals hem Cao Cao
  in while the crosswise general beneath him is the leveled blade. The most studied
  sliding-block position in the world.

  Shortest solution: **81 steps** (116 one-cell slides) — a step is one piece sliding any
  distance, turns included.
`;export{e as default};
