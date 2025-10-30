const e=`id: merge-fib-5x5
title: Fibonacci · 5×5
genus: merge
order: 120
space: square
info: Only adjacent Fibonacci tiles combine — 1+1=2, 1+2=3, 2+3=5, 3+5=8, and so on.
# Slide-and-merge, but only *adjacent* Fibonacci tiles combine (1+1=2, 1+2=3,
# 2+3=5, 3+5=8, …). Same slide-all engine; only the merge rule + display ramp
# differ. The tiles skin colors by Fibonacci rank so 3/5/8/13 stay vivid.
skin: { name: tiles, ramp: fib }
region: { rect: [5, 5] }
pieces: [{ id: tile, cells: [[0, 0]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  merge: fib
  reaction: []
  supply: { kind: spawn, values: { 1: 0.6, 2: 0.4 } }
  terminal: { win: { maxTile: 144 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 1123
about: |
  A merge rule from the mathematics itself: two tiles combine exactly when
  they are **consecutive Fibonacci numbers** — because $F_{n-1} + F_n =
  F_{n+1}$ is the only way two Fibonacci numbers sum to another. So 1 joins 2,
  2 joins 3, 3 joins 5, and equal tiles (except the two starting 1s) refuse
  each other: the opposite instinct of the standard merge.

  The chain 1, 2, 3, 5, 8, 13, 21… grows by a factor of the golden ratio
  $\\varphi \\approx 1.618$ per merge instead of 2, which changes the rhythm of
  the game — big tiles need *both* of their predecessors nearby, not a twin.
`;export{e as default};
