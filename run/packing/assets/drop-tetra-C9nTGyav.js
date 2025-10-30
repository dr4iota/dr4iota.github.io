const e=`# The deep hex well, and the one that deals FOUR-cell pieces: all seven free
# tetrahexes (\`use: polycells, sizes: [4]\` — the generic enumeration, which on
# {6,3} is the classic set: bar, worm, pistol, propeller, arch, bee, wave).
# Flat-bottom hexes (\`orient: edge-down\`) so the gravity axis (dir 2 = side 1)
# runs straight down the screen and the floor reads as a floor, exactly as
# \`drop-hexfall\` does — this is that board grown wide and deep enough for the
# bigger pieces to have somewhere to go.
id: drop-tetra
title: Tetrahex Drop · 11×12
space: tessera
genus: drop
order: 545
board: { p: 6, q: 3, rings: 12 }
orient: edge-down
region: { rect: [11, 12] }
pieces: [{ use: polycells, sizes: [4], symmetry: one-sided, supply: unlimited }]
rules:
  motion: gravity-settle
  gravity: { dir: 2 }
  reaction: [{ kind: clear-lines, lines: { kind: lanes, bearings: [0] }, collapse: true }]
  supply: { kind: bag }
  clock: { kind: interval, ms: 1200 }
  terminal: stack-out
  score: drop-lines
  seed: 21
info: >-
  Eleven columns, twelve rows, and every piece four hexes. Only the line
  across the fall clears.
about: |
  The honeycomb faller with the pieces the other hex boards leave out: the
  **seven free tetrahexes**, four cells each, on a well wide and deep enough to
  hold them.

  Three cells fit almost anywhere; four do not. A tetrahex has a reach that a
  hexagonal grid punishes — the *propeller* (a centre with three arms) needs a
  pocket of exactly its own shape, and the *bar* wants a clear run of four
  along one axis. Eleven columns is room to keep options open; twelve rows is
  long enough that a bad lean has time to become a wall.

  Only one of the three axes clears, the one across the fall — the same rule
  the narrower boards teach. Here it costs more to forget, because the piece
  that would have closed the line is one hex too wide to slot in sideways.
`;export{e as default};
