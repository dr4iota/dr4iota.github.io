const e=`id: fill-tetrahexes
title: Four tetrahexes and a bar
space: tessera
genus: hex-fill
order: 530
board: { p: 6, q: 3, rings: 2 }
pieces:
  - use: polycells
    sizes: [3, 4]
    pick: [c3-2, c4-0, c4-1, c4-2, c4-5]
    symmetry: free
info: >-
  Four of the seven tetrahexes, plus one straight trihex — a deal chosen so
  that only twelve arrangements in the world cover the board.
about: |
  Four hexagons make exactly **seven** free shapes — the tetrahexes, the
  honeycomb's pentomino moment. Four of them are dealt here: the rhombus, the
  pistol, the propeller and the arch, with a straight trihex to make the count
  come out at nineteen.

  The deal is not casual. Of the 105 ways to pick four tetrahexes and one
  trihex, only **20** can cover this board at all — the other 85 add up to
  nineteen cells and still fail, because area is a promise the corners don't
  have to keep. This pick admits exactly **twelve** covering arrangements,
  counted by the same exact-cover search behind Hint and Solve. Find one.
`;export{e as default};
