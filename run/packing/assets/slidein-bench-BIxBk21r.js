const e=`# DEBUG bench for the Slide-In TRAY (T10 item 7) — not a puzzle.
#
# The smallest board that exercises every part of the tray: three bars, a 2x2
# bay to the east, a 3x2 room to the west. Stage a bar, slide it west until it
# stops, repeat. Three vertical bars fill the room exactly, and
# \`slidein-bay.test.ts\` plays that line through the reducer, so this level is
# certified reachable rather than merely plausible — the arithmetic (3 bars x 2
# cells = 6 = 3x2) is not evidence, and on this substrate it never is.
#
# {4,4} rather than a curved board on purpose. The tray is curvature-blind, and
# a flat 3x2 room is a line a human can check by eye; the curved slide-in levels
# wait on the solver (T10 item 8), which is what can prove a par worth printing.
# \`symmetry: free\` so the bars have two orientations and the bay's rotate
# controls have something to do.
id: slidein-bench
title: Three bars into a room
space: tessera
genus: slidein
order: 900
board: { p: 4, q: 4 }
region: { rect: [3, 2] }
buffer: { cells: [[3, 0], [3, 1], [4, 0], [4, 1]] }
pieces:
  - { id: bar, cells: [[], [1]], symmetry: free, supply: { count: 3 } }
rules:
  motion: slide
  supply: free-pick
  terminal: complete
info: >-
  Tray bench. Stage a bar in the loading zone, then slide it west; three of
  them fill the room exactly.
`;export{e as default};
