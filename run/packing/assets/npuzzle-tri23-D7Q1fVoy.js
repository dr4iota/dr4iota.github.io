const e=`# The 23-tile triangular puzzle — the largest of the family.
# \`slide: { unit: crossing }\` is the whole mechanic: a tile crosses ONE edge into
# the hole and flips between pointing up and pointing down as it goes. That is
# the occupant regime — a sliding BLOCK translates instead, arriving the way it
# left, and on {3,6} the two are genuinely different moves.
# Solvable by construction: \`scramble\` walks seeded legal moves away from the
# solved layout, and \`at-home\` wins when every tile is back.
id: npuzzle-tri23
title: 23 Puzzle · Triangles
space: tessera
genus: npuzzle
order: 533
board: { p: 3, q: 6 }
orient: edge-down
region: { hexagon: 2 }
marks: { hole: [[0, 3]] }
pieces:
  - { id: t1, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t2, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t3, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t4, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t5, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t6, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t7, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t8, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t9, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t10, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t11, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t12, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t13, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t14, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t15, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t16, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t17, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t18, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t19, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t20, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t21, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t22, cells: [[0, 0]], lattice: true, symmetry: one-sided }
  - { id: t23, cells: [[0, 0]], lattice: true, symmetry: one-sided }
rules:
  slide: { unit: crossing }
  motion: slide
  supply:
    kind: roster
    scramble: 240
    layout:
      - { piece: t1, at: [-2, 2], label: 1 }
      - { piece: t2, at: [-1, 2], label: 2 }
      - { piece: t3, at: [0, 2], label: 3 }
      - { piece: t4, at: [1, 2], label: 4 }
      - { piece: t5, at: [2, 2], label: 5 }
      - { piece: t6, at: [-3, 3], label: 6 }
      - { piece: t7, at: [-2, 3], label: 7 }
      - { piece: t8, at: [-1, 3], label: 8 }
      - { piece: t9, at: [1, 3], label: 9 }
      - { piece: t10, at: [2, 3], label: 10 }
      - { piece: t11, at: [3, 3], label: 11 }
      - { piece: t12, at: [-3, 4], label: 12 }
      - { piece: t13, at: [-2, 4], label: 13 }
      - { piece: t14, at: [-1, 4], label: 14 }
      - { piece: t15, at: [0, 4], label: 15 }
      - { piece: t16, at: [1, 4], label: 16 }
      - { piece: t17, at: [2, 4], label: 17 }
      - { piece: t18, at: [3, 4], label: 18 }
      - { piece: t19, at: [-2, 5], label: 19 }
      - { piece: t20, at: [-1, 5], label: 20 }
      - { piece: t21, at: [0, 5], label: 21 }
      - { piece: t22, at: [1, 5], label: 22 }
      - { piece: t23, at: [2, 5], label: 23 }
  terminal: at-home
  onWin: freeze
info: The open cell rests at the centre when solved.
`;export{e as default};
