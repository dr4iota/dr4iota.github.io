const e=`# Tri Drop — falling polyiamonds under the T11 owner
# decision: the lattice has no one-row vertical translation, so gravity is a
# DIAGONAL FALL — the piece leans SE, SW, SE, … (swapping to the open diagonal
# at a wall), descending one full row per step while its pointing is preserved.
# The player biases the lean with ◀ ▶. Full horizontal rows clear (rows are the
# family perpendicular to the fall; the slanted families run along it), and
# after a clear every body settles by the same alternating diagonals — the
# recorded collapse answer.
id: drop-iamond-12x16
title: Tri Drop · 12×16
space: trihex
genus: drop
order: 70
region:
  rect: [12, 16]
pieces:
  # The full small-polyiamond deal: the moniamond (1) + diamond (2) + triamond
  # (3) + the three tetriamonds (4). The single- and double-cell fillers ride
  # the same bag as the tetrads so gaps stay fixable — the Tritris "single
  # triangle patches holes" softener, generalized to sizes 1–4.
  - { use: polyiamonds, sizes: [1, 2, 3, 4], symmetry: one-sided }
rules:
  motion: gravity-settle
  reaction: [{ kind: clear-lines, lines: rows, collapse: true }]
  supply: { kind: bag }
  terminal: stack-out
  score: lane-clears
  clock: { kind: interval, ms: 800 }
about: |
  Tetris met the triangular grid in hobbyist curiosities decades ago (the
  closest well-known relative is Lucas Goel's *Tritris*, which sidesteps the
  problem by cutting square cells into right triangles). This version takes the
  genre's lattice problem head-on. A true triangle grid has no one-row vertical
  move — a straight drop would flip every triangle's pointing — so the piece
  *leans down the diagonals*, alternating south-east and south-west. Each step
  is still one full row of descent; clears collapse along the same walk. Pieces
  range from a single triangle up to the tetriamonds, so there is always
  something small enough to patch a hole.
`;export{e as default};
