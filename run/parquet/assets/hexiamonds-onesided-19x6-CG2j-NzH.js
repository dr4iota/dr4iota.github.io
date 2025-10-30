const e=`# Iamond Fill ladder — the one-sided set: 19 pieces, 114 cells, on the same
# zigzag block the twelve-piece board uses, widened from 12 to 19 columns.
# The seven mirrors are authored inline because \`use: hexiamonds\` is the FREE
# set (mirror-equal); \`symmetry: one-sided\` is what keeps them distinct.
id: hexiamonds-onesided-19x6
title: The Nineteen Hexiamonds
space: trihex
genus: iamond-fill
order: 12
region:
  rect: [19, 6]
# No reflections — which is what MAKES this set. Flip a piece over and its
# mirror twin becomes a duplicate, collapsing the nineteen back to twelve.
symmetry: one-sided
pieces:
  - use: hexiamonds
  # The seven chiral hexiamonds again, each mirrored — computed by reflecting
  # the catalog shape (transform m0) and canonicalizing, not eyeballed.
  - { id: bar', cells: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]] }
  - { id: crook', cells: [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]] }
  - { id: sphinx', cells: [[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [5, 0]] }
  - { id: snake', cells: [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1], [3, 2]] }
  - { id: yacht', cells: [[1, 0], [2, 0], [2, 1], [3, 0], [4, 0], [4, 1]] }
  - { id: signpost', cells: [[0, 1], [1, 1], [2, 0], [2, 1], [3, 0], [3, 1]] }
  - { id: hook', cells: [[1, 0], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1]] }
about: |
  The **one-sided** hexiamonds: nineteen pieces, not twelve. Seven of the twelve
  — bar, crook, sphinx, snake, yacht, signpost and hook — are *chiral*: no
  amount of turning makes one match its own mirror image. Count those mirrors as
  pieces in their own right and the set grows to nineteen, covering 114
  triangles, which is this board exactly.

  Think of the pieces as cut from card printed on one side only. You may turn a
  piece any way you like, but you may not flip it over — and that single
  restriction is the whole puzzle. The other five (crown, chevron, lobster,
  hexagon and butterfly) are symmetric enough that flipping them was never worth
  anything anyway.

  The board is the twelve-piece block widened from twelve columns to nineteen,
  which keeps what makes that one work: the full hexiamond set famously refuses
  every straight 60° parallelogram, and the zigzag vertical edges are the escape
  from that. Seven more pieces and seven more columns, same idea.
`;export{e as default};
