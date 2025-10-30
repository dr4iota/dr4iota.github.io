const e=`id: sort-fifteen-4x4
title: 15 Puzzle · 4×4
genus: npuzzle
order: 318
space: square
# The classic: fifteen numbered tiles and one blank on a 4×4 board. Authored in
# the solved position; \`scramble\` deals a seeded random shuffle (a walk of legal
# moves — always solvable), and \`at-home\` wins when every tile is back home.
region: { rect: [4, 4] }
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
rules:
  motion: slide
  terminal: at-home
  onWin: freeze
  supply:
    kind: roster
    scramble: 200
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
about: |
  The original 4×4 Fifteen Puzzle, credited to the New York postmaster Noyes
  Palmer Chapman around 1874. By 1880 it was a full-blown craze on two
  continents — newspapers reported employers banning it from offices, and it
  is often called the first international puzzle mania.

  Its most famous episode is a swindle: the showman Sam Loyd claimed for years
  to have invented the puzzle and offered **$1,000** to anyone who could solve
  it from a position with only the 14 and 15 swapped. He never paid, and never
  had to — Johnson and Story had already proved in 1879 that exactly half of
  all positions are reachable, and the 14–15 swap is on the wrong side of the
  line. Every shuffle here is dealt by walking the blank from the solved
  board, so *your* start is always on the right side.
`;export{e as default};
