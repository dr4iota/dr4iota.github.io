const e=`id: clear-hexlines
title: Lines · Honeycomb
space: tessera
genus: clear
order: 510
board: { p: 6, q: 3, rings: 3 }
region: { rings: 3 }
pieces:
  - { id: one, cells: [[]], symmetry: fixed, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: fixed, supply: unlimited }
  # Turn 3 continues straight on a hexagon (turn 0 would walk back through the
  # side it entered by); turn 2 bends.
  - { id: three, cells: [[], [0], [0, 3]], symmetry: fixed, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: fixed, supply: unlimited }
  - { id: fan, cells: [[], [0], [1], [2]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0, 4, 8] } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 63
info: >-
  Three pieces at a time, placed anywhere they fit. A full line clears — and
  on a hexagon there are three directions a line can run.
about: |
  The endless-tray line clearer, moved onto the **hexagonal tiling** {6,3}:
  six-sided tiles, three around every corner.

  A square board offers two ways to complete a line — across and down. A hex
  board offers **three**, because a hexagon's six sides pair into three axes,
  and a straight path through the tiling runs along any of them. Every tile you
  place sits on three lines at once, which is what makes the board harder to
  read than it looks: the row you were not thinking about is the one that goes.

  The board is flat, and it has to be. A line clear needs its lines to *tile*
  the board — every cell on exactly one of them — and that only holds where
  space is flat. On a curved board the straight paths in one direction are not
  parallel; they drift together, some cells falling on two of them and some on
  none, so "the line is full" stops being a question with one answer.
`;export{e as default};
