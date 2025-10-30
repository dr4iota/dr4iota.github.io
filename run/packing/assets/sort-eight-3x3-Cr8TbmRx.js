const e=`id: sort-eight-3x3
title: 8 Puzzle · 3×3
genus: npuzzle
order: 316
space: square
# The gentle sibling of the 15 puzzle: eight numbered tiles and one blank on a
# 3×3 board. The layout below is the *solved* position — \`scramble\` walks a
# seeded random shuffle away from it (always solvable — the walk is made of
# legal moves), and \`at-home\` wins when every tile is back on its authored
# cell. A 1×1 tile can only slide into the blank, so the classic rule falls out
# of collision for free.
region: { rect: [3, 3] }
pieces:
  - { id: t1, cells: [[0, 0]], symmetry: fixed }
  - { id: t2, cells: [[0, 0]], symmetry: fixed }
  - { id: t3, cells: [[0, 0]], symmetry: fixed }
  - { id: t4, cells: [[0, 0]], symmetry: fixed }
  - { id: t5, cells: [[0, 0]], symmetry: fixed }
  - { id: t6, cells: [[0, 0]], symmetry: fixed }
  - { id: t7, cells: [[0, 0]], symmetry: fixed }
  - { id: t8, cells: [[0, 0]], symmetry: fixed }
rules:
  motion: slide
  terminal: at-home
  onWin: freeze
  supply:
    kind: roster
    scramble: 80
    layout:
      - { piece: t1, at: [0, 0], label: 1 }
      - { piece: t2, at: [1, 0], label: 2 }
      - { piece: t3, at: [2, 0], label: 3 }
      - { piece: t4, at: [0, 1], label: 4 }
      - { piece: t5, at: [1, 1], label: 5 }
      - { piece: t6, at: [2, 1], label: 6 }
      - { piece: t7, at: [0, 2], label: 7 }
      - { piece: t8, at: [1, 2], label: 8 }
about: |
  The 3×3 little sibling of the Fifteen Puzzle, and computer science's
  favorite toy problem: the **8-puzzle** has been the textbook example for
  heuristic search since the field began — small enough to explore completely
  (181,440 reachable positions, none needing more than 31 moves), rich enough
  to show why informed search beats blind search.

  When a hint here plans a path with A* and the Manhattan-distance heuristic,
  it is literally running the classroom classic.
`;export{e as default};
