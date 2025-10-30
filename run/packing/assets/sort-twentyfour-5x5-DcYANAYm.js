const e=`id: sort-twentyfour-5x5
title: 24 Puzzle · 5×5
genus: npuzzle
order: 322
space: square
# The big square: twenty-four tiles and one blank on 5×5. \`scramble\` walks
# the blank from solved (always solvable), \`at-home\` wins. A direct optimal
# solve is infeasible here, so the hint uses row/column reduction
# (slide-problem.ts → reduceSlideSolve): reliable and low-memory, at the cost
# of a non-optimal path.
region: { rect: [5, 5] }
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
  - { id: t20, cells: [[0, 0]], symmetry: fixed }
  - { id: t21, cells: [[0, 0]], symmetry: fixed }
  - { id: t22, cells: [[0, 0]], symmetry: fixed }
  - { id: t23, cells: [[0, 0]], symmetry: fixed }
  - { id: t24, cells: [[0, 0]], symmetry: fixed }
rules:
  motion: slide
  terminal: at-home
  onWin: freeze
  supply:
    kind: roster
    scramble: 280
    layout:
      - { piece: t1, at: [0, 0], label: 1 }
      - { piece: t2, at: [1, 0], label: 2 }
      - { piece: t3, at: [2, 0], label: 3 }
      - { piece: t4, at: [3, 0], label: 4 }
      - { piece: t5, at: [4, 0], label: 5 }
      - { piece: t6, at: [0, 1], label: 6 }
      - { piece: t7, at: [1, 1], label: 7 }
      - { piece: t8, at: [2, 1], label: 8 }
      - { piece: t9, at: [3, 1], label: 9 }
      - { piece: t10, at: [4, 1], label: 10 }
      - { piece: t11, at: [0, 2], label: 11 }
      - { piece: t12, at: [1, 2], label: 12 }
      - { piece: t13, at: [2, 2], label: 13 }
      - { piece: t14, at: [3, 2], label: 14 }
      - { piece: t15, at: [4, 2], label: 15 }
      - { piece: t16, at: [0, 3], label: 16 }
      - { piece: t17, at: [1, 3], label: 17 }
      - { piece: t18, at: [2, 3], label: 18 }
      - { piece: t19, at: [3, 3], label: 19 }
      - { piece: t20, at: [4, 3], label: 20 }
      - { piece: t21, at: [0, 4], label: 21 }
      - { piece: t22, at: [1, 4], label: 22 }
      - { piece: t23, at: [2, 4], label: 23 }
      - { piece: t24, at: [3, 4], label: 24 }
about: |
  The **24-puzzle**: the next square up from the famous 15, with 25!/2 ≈
  **7.8 septillion** reachable positions — so many that computers cannot map
  it out completely the way they can the little 8-puzzle. Nobody even knows
  for certain the largest number of moves a 24-puzzle can need. It is the
  same family, though — mathematicians call them all the *N-puzzle* — and the
  same walk-from-solved shuffle means your board, however tangled, always has
  a way home. Work in bands: finish the top row and left column, then the
  puzzle that remains is just a smaller one.
`;export{e as default};
