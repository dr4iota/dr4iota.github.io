const e=`id: fill-second-ring
title: Sixty-one squares
space: tessera
genus: tessera-fill
order: 10
stage: labs
board: { p: 4, q: 5, rings: 2 }
region: { rings: 2 }
pieces:
  - use: polycells
    sizes: [3, 4, 5]
    pick:
      [c3-0, c3-1, c4-0, c4-1, c4-2, c4-3, c4-4,
       c5-3, c5-4, c5-6, c5-9, c5-10, c5-13, c5-14]
    symmetry: free
info: >-
  The {4,5} board taken out to its second ring — sixty-one tiles, most of them
  crowded against the rim, and fourteen different pieces to cover them.
about: |
  The same tiling as the first {4,5} boards, one ring further out. Every
  curved board before this one has been a centre tile and the ring around it
  — thirteen cells, and hardly any edge. This is **sixty-one**, and the
  difference is the whole point.

  ## Each ring is four times the last

  Counting outward from the middle:

  - the centre — **1** tile
  - the first ring — **12**
  - the second ring — **48**

  Keep going and the third ring holds 180, the fourth nearly 700. The board
  grows *exponentially* with its radius. Squared paper does nothing of the
  sort: there the ring at distance \`r\` holds \`8r\` tiles, growing one steady
  step at a time. That gap is what "curved" means, and it is why the picture
  has to cheat — all sixty-one tiles are the same regular quadrilateral in the
  hyperbolic plane, so the further out one sits, the smaller it must be drawn.
  Four times as many per ring, each drawn smaller: that is the crowd you see
  at the edge.

  ## Which changes the puzzle, not just its size

  **Forty-eight of the sixty-one tiles are in the outer ring.** On a flat
  board the middle is most of the work; here the middle is thirteen tiles out
  of sixty-one and the real work is at the rim, where the tiles are small and
  there are many. Starting comfortably in the centre barely starts the puzzle.

  Fourteen pieces, one of each: both three-tile shapes, all five four-tile
  shapes, and seven of the sixteen five-tile shapes — 6 + 20 + 35 = 61, cut to
  the board. Out of every way those fourteen can sit, **1,672** cover it,
  counted by the same exact-cover search behind Hint and Solve.
`;export{e as default};
