const e=`id: merge-fib
title: Fibonacci · Honeycomb
space: tessera
genus: merge
order: 520
skin: { name: tiles, ramp: fib }
board: { p: 6, q: 3, rings: 2 }
region: { rings: 2 }
pieces: [{ id: tile, cells: [[]], symmetry: fixed, supply: unlimited }]
rules:
  motion: slide-all
  merge: fib
  supply: { kind: spawn, values: { 1: 0.6, 2: 0.4 } }
  terminal: { win: { maxTile: 233 }, lose: stuck }
  onWin: continue
  score: merge-sum
  seed: 13
info: >-
  Tiles fuse only with their Fibonacci neighbour — 1+2, 2+3, 3+5 — never with
  their equal.
about: |
  The merge rule changed, on the six-direction board.

  Here two tiles combine only when both are Fibonacci numbers **and so is their
  sum**, which happens exactly for adjacent pairs: 1+2 = 3, 2+3 = 5, 3+5 = 8.
  Two equal tiles are almost never a pair — 3+3 = 6 is not Fibonacci — so the
  habit the doubling game teaches you is precisely the wrong one.

  You are looking for *neighbours in the sequence*, which on a board with six
  push directions means keeping two different numbers in reach of each other
  along three different axes at once.
`;export{e as default};
