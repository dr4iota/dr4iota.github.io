const e=`id: sort-eleven-3x4
title: 11 Puzzle · 3×4
genus: npuzzle
order: 317
space: square
# The rectangular in-between: eleven numbered tiles and one blank on a 3×4
# board. Same rules as its square siblings — \`scramble\` walks the blank from
# the solved position (always solvable on any rectangle), \`at-home\` wins.
region: { rect: [3, 4] }
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
rules:
  motion: slide
  terminal: at-home
  onWin: freeze
  supply:
    kind: roster
    scramble: 120
    layout:
      - { piece: t1, at: [0, 0], label: 1 }
      - { piece: t2, at: [1, 0], label: 2 }
      - { piece: t3, at: [2, 0], label: 3 }
      - { piece: t4, at: [0, 1], label: 4 }
      - { piece: t5, at: [1, 1], label: 5 }
      - { piece: t6, at: [2, 1], label: 6 }
      - { piece: t7, at: [0, 2], label: 7 }
      - { piece: t8, at: [1, 2], label: 8 }
      - { piece: t9, at: [2, 2], label: 9 }
      - { piece: t10, at: [0, 3], label: 10 }
      - { piece: t11, at: [1, 3], label: 11 }
about: |
  The size nobody made famous — and that is the point. The sliding puzzle
  works on **any** rectangle, not just the square 3×3 and 4×4 that history
  happened to turn into crazes. Eleven tiles on a 3×4 board give 12!/2 =
  **239,500,800** solvable positions: over a thousand times the 8-puzzle, yet
  a tiny fraction of the 15. A neat rung to climb on the way up.

  It is always solvable because every shuffle here is a walk of legal moves
  away from the finished board — so, unlike a puzzle scrambled by lifting
  tiles out, you can never be dealt an impossible start.
`;export{e as default};
