const e=`id: fill-pent-two-boxes
title: Two boxes · 5×6 each
genus: fill
order: 44
space: square
info: Fill the two separate boxes at the same time.
# The full dozen split across two separate 5×6 boxes. Engine-verified
# (2026-07-04): 64 raw assignments. Equivalent to a 6×10 tiling with a clean
# straight seam down the middle — far scarcer than the 2,339 free ones.
region:
  mask:
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
    - '#####.#####'
pieces: [{ use: pentominoes, symmetry: free }]
about: |
  All twelve pentominoes, two separate boxes. Nobody tells you which pieces
  belong together — **the split is the real puzzle**. Choosing six pieces for
  the left box decides the six that remain for the right, and most splits
  doom one side or the other. Another way to see it: this is the famous 6×10
  rectangle sawed clean in half — of its 2,339 tilings, only a rare few have
  a straight seam all the way down the middle, and those are exactly the
  boards that can win here.
`;export{e as default};
