const e=`id: fill-trihexes
title: The three trihexes
space: tessera
genus: hex-fill
order: 510
board: { p: 6, q: 3, rings: 2 }
pieces:
  - use: polycells
    sizes: [3]
    symmetry: free
    supply: { count: 2 }
  - id: mono
    cells: [[]]
    supply: { count: 1 }
info: >-
  Three hexagons glue together in exactly three ways — a bar, a bend and a
  triangle. Two of each, plus one spare tile, cover the nineteen-cell board.
about: |
  Step up from pairs: every piece here is **three** hexagons. There are exactly
  three ways to join three hexagons edge to edge — a straight bar, a bent arm
  and a compact triangle. These are the *trihexes*, the honeycomb's counterpart
  to the two triominoes of squared paper: a rounder cell leaves more room to
  turn, so the count comes out one higher.

  The board is the nineteen-cell hexagon — a centre, a ring of six, a ring of
  twelve. Two copies of each trihex account for eighteen cells, and a single
  loose hexagon settles the last one. Where you spend that spare tile shapes
  everything that has to fit around it.
`;export{e as default};
