const e=`id: klotski-walled-detour
title: Walled detour · 3×3
genus: klotski
order: 312
space: square
# A wall (Phase 2) seals the top-right edge, so the red block can't slide
# straight to the goal — it must detour down and around. First nudge the grey
# block out of the lane, then walk red: right, down, right, up onto the goal.
region: { rect: [3, 3] }
walls: [[[1, 0], [2, 0]]]
pieces:
  - { id: red, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
  - { id: block, cells: [[0, 0]], symmetry: fixed, supply: unlimited }
# Red wins by reaching the top-right cell.
marks: { goal: [[2, 0]] }
rules:
  motion: slide
  terminal: at-goal
  onWin: freeze
  supply:
    kind: roster
    layout:
      - { piece: red, at: [0, 0], target: true }
      - { piece: block, at: [1, 1] }
`;export{e as default};
