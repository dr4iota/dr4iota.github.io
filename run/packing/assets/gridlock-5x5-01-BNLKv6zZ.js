const e=`id: gridlock-5x5-01
title: 5×5 · 1
genus: gridlock
order: 330
par: 2
space: square
region:
  mask:
    - "#####.."
    - "#####.."
    - "#######"
    - "#####.."
    - "#####.."
marks: { goal: [[5, 2], [6, 2]] }
pieces:
  - { id: red, cells: [[0, 0], [1, 0]], symmetry: fixed, supply: unlimited }
  - { id: carV, cells: [[0, 0], [0, 1]], symmetry: fixed, supply: unlimited }
rules:
  motion: slide
  slide: { axisLock: true }
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 2], target: true }
      - { piece: carV, at: [4, 1] }
about: |
  A little traffic jam. Every vehicle can only roll **straight along its own
  length** — a car pointing across the board slides left and right, one
  pointing up the board slides up and down, and none of them can turn. Your
  red car is stuck in the jam; nudge the others out of its lane so it can
  drive out the gap on the right. This is the puzzle famously sold as *Rush
  Hour*, invented by the Japanese puzzle master Nob Yoshigahara — and it hides
  a surprise: deciding whether the red car can escape at all is, for big
  boards, one of the genuinely hard problems in computer science.
`;export{e as default};
