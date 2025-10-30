const e=`id: fill-pent-onesided-9x10
title: One-sided pentominoes · 9×10
genus: fill
order: 60
space: square
region: { rect: [10, 9] }
# No reflections — which is what MAKES this set. Mirror-image pieces are
# separate pieces here, so allowing flips would collapse the 18 back to 12.
symmetry: one-sided
pieces:
  # The six achiral pentominoes — a mirror does nothing a rotation cannot.
  - { id: I, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] }
  - { id: T, cells: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]] }
  - { id: U, cells: [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]] }
  - { id: V, cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]] }
  - { id: W, cells: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]] }
  - { id: X, cells: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]] }
  # The six chiral ones, each with its mirror as a piece in its own right.
  - { id: F, cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]] }
  - { id: F', cells: [[0, 0], [1, 0], [1, 1], [2, 1], [1, 2]] }
  - { id: L, cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]] }
  - { id: L', cells: [[1, 0], [1, 1], [1, 2], [0, 3], [1, 3]] }
  - { id: N, cells: [[1, 0], [1, 1], [0, 2], [1, 2], [0, 3]] }
  - { id: N', cells: [[0, 0], [0, 1], [0, 2], [1, 2], [1, 3]] }
  - { id: P, cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]] }
  - { id: P', cells: [[0, 0], [1, 0], [0, 1], [1, 1], [1, 2]] }
  - { id: Y, cells: [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]] }
  - { id: Y', cells: [[0, 0], [0, 1], [1, 1], [0, 2], [0, 3]] }
  - { id: Z, cells: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]] }
  - { id: Z', cells: [[1, 0], [2, 0], [1, 1], [0, 2], [1, 2]] }
about: |
  The **one-sided** pentominoes: eighteen pieces, not twelve. Six of the twelve
  free pentominoes — F, L, N, P, Y and Z — are *chiral*, meaning no amount of
  turning makes one match its own mirror image. Treat those mirrors as pieces in
  their own right and the set grows to eighteen, covering ninety squares, which
  is exactly a 9×10 rectangle.

  Think of the pieces as cut from card printed on one side only: you may turn a
  piece any way you like, but you may not flip it over. That single restriction
  is what the puzzle is about. The other six — I, T, U, V, W and X — are
  symmetric enough that flipping them was never worth anything anyway.

  It is a harder board than the famous 6×10 in a way that is easy to miss: you
  have more pieces *and* more room, but every chiral piece now has a twin that
  must also find a home, and the handedness you would normally fix by turning a
  piece over is fixed for you.
`;export{e as default};
