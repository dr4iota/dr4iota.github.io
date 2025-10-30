const e=`id: fill-tromino-4x4
title: Five corners · 4×4−1
genus: fill
order: 16
space: square
# Golomb's deficient board: 4×4 minus one cell, tiled by five L-trominoes.
# Engine-verified (2026-07-04): 120 raw = 1 solution × 5! piece swaps — unique;
# and it stays solvable wherever the hole is placed (the 1954 theorem).
region: { rect: [4, 4], holes: [[1, 1]] }
pieces:
  - { use: polyominoes, sizes: [3], pick: [n3-1], symmetry: free, supply: { count: 5 } }
about: |
  A 4×4 board with one square missing, and five copies of the little corner
  piece. Here is the wonder: it does not matter *which* square goes missing —
  the five corners can always finish the board. In 1954 the mathematician
  Solomon Golomb proved it with a trick called **induction**: cut the board
  into four quarters — the hole sits in one of them — and lay a corner piece
  in the exact middle so it takes one bite out of each of the other three.
  Now all four quarters are little boards with one square missing: the same
  puzzle again, only smaller. The same argument climbs to 8×8, 16×16, 32×32 —
  forever. This board has exactly one solution. Find it, then move the hole
  in your head and believe the theorem.
`;export{e as default};
