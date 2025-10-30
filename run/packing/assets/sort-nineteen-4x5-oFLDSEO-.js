const e=`id: sort-nineteen-4x5
title: 19 Puzzle · 4×5
genus: npuzzle
order: 320
space: square
# Nineteen tiles and one blank on a 4×5 board — a step past the classic 15.
# \`scramble\` walks the blank from solved (always solvable), \`at-home\` wins.
region: { rect: [4, 5] }
pieces:
  - { id: t1, cells: [[0, 0]], symmetry: fixed }
  - { id: t2, cells: [[0, 0]], symmetry: fixed }
  - { id: t3, cells: [[0, 0]], symmetry: fixed }
  - { id: t4, cells: [[0, 0]], symmetry: fixed }
  - { id: t5, cells: [[0, 0]], symmetry: fixed }
  - { id: t6, cells: [[0, 0]], symmetry: fixed }
  - { id: t7, cells: [[0, 0]], symmetry: fixed }
  - { id: t8, cells: [[0, 0]], symmetry: fixed }
  - { id: t9, cells: [[0, 0]], symmetry: fixed }
  - { id: t10, cells: [[0, 0]], symmetry: fixed }
  - { id: t11, cells: [[0, 0]], symmetry: fixed }
  - { id: t12, cells: [[0, 0]], symmetry: fixed }
  - { id: t13, cells: [[0, 0]], symmetry: fixed }
  - { id: t14, cells: [[0, 0]], symmetry: fixed }
  - { id: t15, cells: [[0, 0]], symmetry: fixed }
  - { id: t16, cells: [[0, 0]], symmetry: fixed }
  - { id: t17, cells: [[0, 0]], symmetry: fixed }
  - { id: t18, cells: [[0, 0]], symmetry: fixed }
  - { id: t19, cells: [[0, 0]], symmetry: fixed }
rules:
  motion: slide
  terminal: at-home
  onWin: freeze
  supply:
    kind: roster
    scramble: 220
    layout:
      - { piece: t1, at: [0, 0], label: 1 }
      - { piece: t2, at: [1, 0], label: 2 }
      - { piece: t3, at: [2, 0], label: 3 }
      - { piece: t4, at: [3, 0], label: 4 }
      - { piece: t5, at: [0, 1], label: 5 }
      - { piece: t6, at: [1, 1], label: 6 }
      - { piece: t7, at: [2, 1], label: 7 }
      - { piece: t8, at: [3, 1], label: 8 }
      - { piece: t9, at: [0, 2], label: 9 }
      - { piece: t10, at: [1, 2], label: 10 }
      - { piece: t11, at: [2, 2], label: 11 }
      - { piece: t12, at: [3, 2], label: 12 }
      - { piece: t13, at: [0, 3], label: 13 }
      - { piece: t14, at: [1, 3], label: 14 }
      - { piece: t15, at: [2, 3], label: 15 }
      - { piece: t16, at: [3, 3], label: 16 }
      - { piece: t17, at: [0, 4], label: 17 }
      - { piece: t18, at: [1, 4], label: 18 }
      - { piece: t19, at: [2, 4], label: 19 }
about: |
  Nineteen tiles on a 4×5 board — a taller cousin of the Fifteen Puzzle. The
  jump in size is staggering: 20!/2 is about **1.2 quintillion** reachable
  positions (a 1 followed by eighteen digits). No computer could ever check
  them all — so if you ask for a hint, the game solves the board the way
  people do: it puts the top row in place, then works on the smaller board
  that's left, over and over. Row by row, any size comes home.
`;export{e as default};
