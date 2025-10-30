const e=`id: fill-double-t
title: Giant T · ×2
genus: fill
order: 20
space: square
# Duplication: build the T pentomino at 2× scale (4× the area) from four other
# pentominoes. Engine-verified (2026-07-04): I+P+V+Z does it in one way (2 raw
# = 1 solution × the giant T's mirror). Checked over all 330 subsets per
# shape: N, P, T, U, W, Y, Z can be doubled; F, I, L, V, X never can.
region:
  mask:
    - '######'
    - '######'
    - '..##..'
    - '..##..'
    - '..##..'
    - '..##..'
pieces: [{ use: pentominoes, pick: [I, P, V, Z], symmetry: free }]
about: |
  Build a T out of pentominoes — a **T twice as tall and twice as wide**, so
  four times the area: exactly four pieces. Puzzlers call this
  **duplication**, triplication's little sibling, and it is choosier than it
  looks: our engine tried every choice of four helpers for every pentomino,
  and five of the twelve — F, I, L, V and X — can never be doubled at all.
  The T can, with I, P, V and Z, in exactly one way. Find it.
`;export{e as default};
