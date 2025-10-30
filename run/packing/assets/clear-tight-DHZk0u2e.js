const e=`id: clear-tight
title: Lines · Small Honeycomb
space: tessera
genus: clear
order: 520
board: { p: 6, q: 3, rings: 2 }
region: { rings: 2 }
pieces:
  - { id: one, cells: [[]], symmetry: fixed, supply: unlimited }
  - { id: two, cells: [[], [0]], symmetry: fixed, supply: unlimited }
  - { id: bend, cells: [[], [0], [0, 2]], symmetry: fixed, supply: unlimited }
rules:
  motion: free-place
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0, 4, 8] } }]
  supply: { kind: queue, draw: 3 }
  terminal: stuck
  score: line-clears
  seed: 19
info: >-
  Nineteen tiles and only small pieces. Every placement matters when there is
  nowhere to hide a mistake.
about: |
  The same three-directional clearing, on a board barely big enough to hold it:
  nineteen hexes, and the longest line is five.

  A small board changes the game rather than just shortening it. On the large
  comb you can afford a wasted corner; here every tile you leave awkward comes
  back within a few moves, and the tray keeps dealing whether you are ready
  or not.
`;export{e as default};
