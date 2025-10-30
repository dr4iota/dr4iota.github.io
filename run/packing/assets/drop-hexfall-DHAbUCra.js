const e=`id: drop-hexfall
title: Hex Drop · 6×9
space: tessera
genus: drop
order: 510
# A rhombus, not a disc: falling needs a FLOOR, and a hex disc funnels
# everything to the single cell at the far rim. In axial coordinates this is
# six columns to fall down and nine rows to complete.
board: { p: 6, q: 3, rings: 8 }
# Flat-bottom hexes (+30° from the default pointy-bottom view), so the
# gravity axis (dir 2 = side 1) runs straight down the screen and the floor
# reads as a floor.
orient: edge-down
region: { rect: [6, 9] }
pieces:
  - { id: one, cells: [[]], symmetry: one-sided, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: one-sided, supply: unlimited }
  - { id: three, cells: [[], [0], [0, 3]], symmetry: one-sided, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: one-sided, supply: unlimited }
  # The compact tri-hex: three hexes meeting at ONE corner, the third form a
  # hexagonal grid has and the only one that fills a pocket rather than a
  # line. Its walk turns by the SHARPEST angle (local side 1) where \`bend\`
  # turns by two — \`hex-drop.test.ts\` pins that its three cells are pairwise
  # adjacent, which is the whole difference and is invisible in the walk.
  - { id: triangle, cells: [[], [0], [0, 1]], symmetry: one-sided, supply: unlimited }
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 1100 }
  terminal: stack-out
  score: drop-lines
  seed: 36
info: >-
  Six columns, nine rows. Only one of the three axes clears — the one across
  the fall.
about: |
  The falling-block game on the **hexagonal tiling** {6,3}.

  Gravity here runs along one of the hexagon's three axes, and the two others
  are what you steer along — so a piece does not simply go left or right, it
  goes *down-left* or *down-right*, sliding along the grain of the board. The
  stack that builds up is not a wall of columns but a slope.

  Only one of the three axes clears, the one across the fall — the same rule a
  square board has, where rows clear and columns do not. Which line that is on
  a hexagon takes a moment to see, and that moment is the game.
`;export{e as default};
