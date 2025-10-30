const e=`**Place & Clear** is packing that never ends — unless you let the board fill up.
Pieces keep coming, the board stays the same size, and the only way to make
room is to *complete* something: a full row, a full column, or a full box.
Whatever you complete vanishes, and the space is yours again.

## Where it comes from

This family took off on phones with *1010!* in 2014: a 10×10 board, three
pieces at a time, place them anywhere you like. Later games like *Woodoku*
crossed it with a Sudoku grid, so the nine 3×3 boxes clear too. It sits right
between Tetris (clearing lines) and classic packing (placing pieces wherever
you choose) — Tetris with the falling, and the panic, removed.

The same idea moves onto the triangular grid, where a "line" is a lane of
triangles: **Tri Ten** clears full lanes, **Tri Cages** adds outlined regions
that clear the moment they fill, and **Hexa Merge** clears whenever six
triangles complete a hexagon — the fusion is the whole point.

## How to play

You are dealt pieces in the tray; drag them anywhere they fit. Fill a whole
row or column (or, in **Boxes** levels, a 3×3 box) and it clears instantly —
clearing several at once scores extra. The game ends when none of your pieces
fits anywhere. Two habits keep you alive: keep one big open area instead of
many small nooks, and never bury a single empty cell — a lonely hole only
comes back when its entire row, column, or box completes around it. Before
placing a big piece, ask: "where will the *next* big piece go?"

## The math

Think of it as a race. Every piece adds its squares to the board; every clear
removes a full line of them. If squares arrive faster than you clear, the
board slowly drowns — so good play is really about keeping your *clearing
rate* up, which means building rows and columns that finish together.

Even the game-over check is mathematics: "does any piece fit anywhere?" is a
little packing search — every piece, every rotation, every open spot — the
same kind of search the Omino Fill solver runs. When it comes up empty, the board
is provably stuck, not just crowded.
`,n=`**Hyperbolic N-Puzzle** is the 15 puzzle — numbered tiles, one open cell, slide
them back into order — played on a board cut from the **hyperbolic plane**. The
demand is the old one. The board is not.

## More neighbours than the plane allows

A flat grid of squares puts four at every corner, because four right angles
make a full turn and that is all the room there is. $\\{4,5\\}$ puts **five**
there. The angles no longer fit, and the surplus has to go somewhere: it goes
into curvature.

You can see what it buys. Around one centre tile, a flat grid fits a ring of
eight. This board fits **twelve** — and the next ring out is bigger still,
growing faster than any flat board's ever does. The hyperbolic plane simply has
more room near a point than the plane has, which is the single fact every one
of these puzzles is built from.

The companion board, $\\{5,4\\}$, runs the trade the other way: **pentagons**,
four to a corner. Pentagons cannot tile a flat plane at all — three leave a gap,
four overlap — and the overlap is again absorbed as curvature.

## Why the tiles look different sizes

They are not. Every tile on the board is the same tile as every other. What you
are looking at is a **map** of a curved surface onto a flat screen, and no such
map can be honest about size — the same reason a world map inflates Greenland
to the size of Africa. The disk chooses to be honest about *angles* instead, so
every corner you see is the true corner, and the price is that things far from
the middle are drawn small. A tile sliding toward the rim is not shrinking. It
is walking away, and the rim is infinitely far off.

## The tile turns as it travels

A tile beside the gap steps across one edge into it, exactly as on a flat board.
But on a curved board a step also **turns** the tile slightly, and how much
depends on the route it took. Walk a tile around a loop and it comes home facing
somewhere new — the same effect that swings a Foucault pendulum around over a
day.

On $\\{5,4\\}$ there is a second thing to watch. A pentagon has an *odd* number of
sides, so no side is directly opposite the one a tile entered by. "Straight on"
is not an option the board offers. A tile leans to the nearer side, then the
other, and the zigzag it traces is the straightest line available to it.

The numbers stay upright so you can read them. The tiles underneath them do not.

## How to play

Tap a tile next to the gap and it slides in. Work outward from the tiles that
are already near home, and remember the gap is the only tool you have — most of
the work in any sliding puzzle is walking the gap around to where it is needed
without disturbing what is already placed. The open cell belongs in the
**centre**, which is the one cell with all its neighbours present.

Every deal is solvable. The shuffle is a recorded walk of legal moves away from
the finished board, so it can always be walked back, and **Hint** will show you
a good next move whenever you are stuck.

## The math

The solver behind Hint knows nothing about curvature. It does not know what a
pentagon is, or that the board is hyperbolic, or even that the board can be
drawn. It is handed one thing: which cells are next to which — a **graph** — and
it solves the puzzle from that alone.

It can do this because sliding-tile puzzles are a fact about graphs, not about
geometry. **Wilson's theorem** (1974) settles which of them are solvable: on any
graph that is 2-connected — no single cell whose removal cuts the board in two —
and is neither a plain cycle nor one exceptional seven-vertex graph, you can
reach *every* arrangement, or every second one when the graph is bipartite. That
is the same parity that made Sam Loyd's famous \\$1,000 prize for swapping the 14
and 15 perfectly safe.

So the same solver answers the flat 15 puzzle, the triangular boards, and these
hyperbolic ones. It works the way a person does — place a tile, then a strip,
then never touch them again, shrinking the board it still has to think about
until what is left is small enough to search outright. The board's curvature
turns out to be something only the *drawing* has to care about.
`,t=`**Falling Blocks** is packing with a deadline. Pieces fall from the top; you steer and
spin them on the way down; a completed row vanishes. It is our take on the most
famous packing game ever made — and underneath the speed, it is the same question as
Omino Fill: where does this shape belong?

## Where it comes from

Alexey Pajitnov wrote Tetris in 1984 at the Soviet Academy of Sciences in
Moscow, on a computer so basic it could not draw pictures — the first pieces
were built out of bracket characters like \`[ ]\`. He took the four-square
shapes (the *tetrominoes*) from a math book about polyominoes and named the
game by welding "tetra" to "tennis," his favorite sport. The board has been
10 columns by 20 rows ever since.

## How to play

Move the falling piece left and right with the arrows, \`A\` / \`D\`, or a swipe;
rotate it with \`↑\` / \`W\` (or \`Q\` the other way); soft-drop with \`↓\` / \`S\`; and
hard-drop with \`E\` or \`Space\` to slam it down where it packs best. Fill an entire
row and it clears — clearing several rows with one piece scores much more.
You lose when the stack reaches the top. The golden rule is to keep the
surface *flat* and never bury an empty cell: a covered hole cannot clear until
you dig it out. Save a deep slot for the long I piece, and don't hoard it —
"waiting for the I" is how most games end.

## The math

There are exactly seven tetrominoes — I, O, T, S, Z, J, L — and their shapes
rule the game. The troublemakers are S and Z: color the board's columns like
stripes and you can show each of them always lands unevenly, leaving a little
bite in a flat surface. In 1997 the mathematician H. Burgiel proved something
wilder: if the game deals you S, Z, S, Z… forever, *no strategy* survives —
any board eventually overflows.

That is why modern Tetris (and this one) deals from a **bag**: the seven
pieces are shuffled and dealt out completely before reshuffling, so you can
never be starved or flooded for long. The **Pentomino Drop** levels swap in the
twelve five-square pentominoes — same rules, far meaner shapes. And **Tri Drop**
tips the whole idea onto the triangular grid, where pieces drift down along a
diagonal and a full lane of triangles clears.
`,a=`**Omino Fill** is the oldest packing challenge there is: here are some
shapes, here is a board — now cover every square, with no gaps and nothing
sticking out. The pieces are *polyominoes*: shapes glued together from little
squares. A domino is two squares. Glue five together in every possible way and
you get exactly twelve shapes — the famous **pentominoes**, and the stars of
this game.

## Where it comes from

People have played fitting-shapes puzzles for centuries, but the modern story
starts in 1953, when the mathematician Solomon W. Golomb gave polyominoes
their name and started asking sharp questions like "which shapes can tile
which boxes?" His book made the twelve pentominoes world-famous, and you can
still find them in toy shops today in games like Katamino.

## How to play

Drag a piece from the tray onto the board. Tap it (or press \`R\`) to rotate,
and flip it when the level allows — some pieces are "handed," like a left and
right shoe. The board is a workbench: you may park pieces loosely and even let
them overlap while you think (overlaps glow red). You win the moment every
cell is covered exactly once. A good start: fill the corners and edges first —
they are the fussiest spots — and save your most flexible pieces for last.
Stuck? **Hint** places one correct piece; **Solve** finishes the whole board.

## The math

First trick: count. The twelve pentominoes bring $12 \\times 5 = 60$ squares,
so they can only hope to fill a board with exactly 60 cells — like 6×10 or
3×20. Second trick: color. Paint the board like a checkerboard and count black
and white cells; many pieces must always cover a fixed mix of colors, so some
boards can be proven *impossible* before you place a single piece!

Whether the pieces really fit is called an **exact cover** problem, and it is
genuinely hard — computers solve it by very fast, very organized
trial-and-error. That search is exactly what runs when you press Solve.
`,o=`**Gridlock** is rush-hour traffic squeezed into a little parking lot. Cars and
trucks sit bumper to bumper, every vehicle can only drive straight ahead or
straight back along its own length, and one red car needs to reach the exit on
the right. Nobody can turn — you clear the way by shuffling everyone else
forward and backward until a lane opens.

## Where it comes from

The game is best known as **Rush Hour**, created by the Japanese puzzle
inventor Nob Yoshigahara and published as a plastic board with sliding cars in
1996. It descends from the same family as Klotski and Huarong Dao, with one
sharp new rule: each block is a *vehicle* that moves only along its own
length. That single restriction changes the whole feel — instead of walking a
gap around the board, you are threading a needle through traffic that can
only rock back and forth.

## How to play

Drag a vehicle to drive it, or select it and use the arrows — it stops at the
walls and at other vehicles. Win by driving the red car out through the gate.
Look at the vehicles standing across the red car's row: each one must end up
parked fully above or fully below that row, and making room for *them* — and
for the cars behind them — is the real puzzle. **Hint** shows a best next
move whenever the jam looks hopeless.

## The math

The one-direction rule looks like it should tame the puzzle, but it doesn't:
mathematicians proved that Rush Hour on bigger boards is just as hard as the
other sliding-block puzzles (PSPACE-complete, the same "monstrously hard"
family). The classic 6×6 lot is small enough for computers, though — a
complete sweep of every legal board found that the very hardest starting
positions need **93 moves**, counting one vehicle driving any distance as one
move — the same classical count as this app's steps counter. So when a level
here takes you thirty-plus steps, you are not doing it wrong; some jams really
are that deep.
`,s=`**Hex Fill** is the oldest packing challenge moved onto the honeycomb: here are
some shapes, here is a patch of hexagons — now cover every one of them, with no
gaps and nothing sticking out. The pieces are *polyhexes*: shapes glued together
from regular hexagons, edge to edge, the way a bee builds.

## Where it comes from

The honeycomb is one of only three ways to tile the flat plane with a single
regular shape — squares, triangles, hexagons, and nothing else. Nature picked it
first: a bee's comb walls off the most storage for the least wax, a fact
conjectured by the Greek geometer Pappus around 300 AD and only *proved* in 1999,
by Thomas Hales.

The pieces came much later. Polyhexes were catalogued alongside the polyominoes
in the recreational-mathematics boom of the 1960s — one monohex, one dihex, three
trihexes, seven tetrahexes, twenty-two pentahexes. They are friendlier to fit
than polyominoes for one reason worth knowing before you start: a hexagon has
six neighbours instead of four, so a piece has six turns available and far more
ways to nestle.

## How to play

Drag a piece from the tray onto the board. Tap it (or press \`R\`) to rotate — six
turns, not four — and flip it when the level allows. The board is a workbench:
park pieces loosely and even let them overlap while you think (overlaps glow
red). You win the moment every hexagon is covered exactly once. A good start:
the rim cells are the fussiest, because a hexagon on the edge of the patch has
fewer neighbours to reach into. **Hint** places one correct piece; **Solve**
finishes the board.

## The math

The counting argument works as it always does — the pieces must bring exactly as
many hexagons as the board has cells — but the *colouring* argument that makes
square and triangular boards yield so readily is weaker here. A square grid is
two-colourable like a chessboard, and a triangular grid splits into up-triangles
and down-triangles, so many impossible boards can be ruled out by parity alone.
The honeycomb is also two-colourable, but polyhexes tend to cover both colours
evenly, so parity rarely settles anything and the search has to be run.

That search is **exact cover** — the same problem Omino Fill and Iamond Fill
solve, on a third lattice — and it is what runs when you press Solve.
`,i=`**Hex Clear** is the endless line-clearer, moved off the square grid. Three
pieces at a time, placed anywhere they fit, and a full line disappears. The
rules are the ones you know. The board is not.

## Three directions, not two

On a square grid a line runs two ways: across or down. Every tile you place
sits on exactly two lines, and you can usually see both at once.

A hexagon has six sides, which pair into **three axes** — so a line here runs
three ways, and every tile you place sits on three lines at once. That is the
whole difference, and it is more than it sounds like. The line you complete is
often not the one you were building; you meant to finish a row and finished a
diagonal you had not been looking at.

It cuts the other way too. A tile dropped carelessly does not spoil one line,
it spoils three.

## Reading the board

Two habits transfer badly from the square version:

- **Corners are not safe.** On a square board the corner belongs to two lines
  and is the natural dumping ground. On a hexagon it belongs to three, and a
  wasted corner costs more.
- **Lines are not rows.** They run edge to edge through the comb, and a line
  near the rim is *shorter* than one through the middle, so the cheap clears
  are around the outside.

## Why this board is flat

Every other tessera game is happy on a curved board. This one cannot be,
and the reason is worth knowing.

A line clear needs its lines to **tile the board** — every cell on exactly one
line of each family, so "is this line full?" has one answer. That holds in flat
space, where parallel lines stay parallel forever. In curved space they do not:
straight paths heading the same way drift together, some cells landing on two
of them and some on none. "The line is full" stops being a question with an
answer, so the game refuses to be played there rather than picking one reading
and hoping.

The honeycomb is flat — six triangles fit exactly around a point, the angles
add to 360° — so it keeps the guarantee while still giving you the third
direction.

## Where it comes from

The three-pieces-at-a-time line clearer was popularised by *1010!* (2014) and
has square, triangular and hexagonal descendants. The hexagonal grid itself is
older than any of them: it is how bees build, how carbon arranges itself in
graphite, and the most efficient way known to divide a plane into equal cells
with the least total wall — a fact proved only in 1999, though the bees had it
first.
`,r=`**Hex Drop** is the falling-block game on a honeycomb. Pieces fall down one of
the hexagon's three axes; you steer along the other two; a full line across the
fall clears and everything above it drops.

## There is no left

On a square board, gravity runs down the columns and you steer along the rows,
and those two directions are at right angles — so "left" and "right" mean
exactly what they look like.

A hexagon has no direction perpendicular to the fall. The two you steer along
are the *other two axes*, each at 60° to gravity, so a piece nudged sideways
also moves a little **down**. It slides along the grain of the board rather
than across it.

The consequence shows up in the stack. On a square board you build a wall of
columns with a flat top. Here you build a **slope**, and the shape you are
managing is not "which columns are tall" but "which way the surface leans".

## One axis clears

Three axes, but only one of them clears: the one across the fall. That is the
same rule a square board has — rows clear, columns do not — and for the same
reason, that a clearing line has to be perpendicular to gravity or the stack
would collapse into itself.

Which of the three axes that is takes a moment to see on a hexagon, and that
moment is most of the early game.

## Where the piece comes in

A falling piece enters at the middle of the deepest row it can fall from. Not
the very top edge — a three-cell piece anchored on the last row hangs off the
board — and not a corner, because from a corner you could only steer one way,
and every piece would pile into the same few columns.

That rule is written in terms of the board's own geometry rather than
coordinates, which is why the same code puts the piece at the top-middle of a
square board and at the far corner of a hexagonal rhombus, without being told
which is which.

## Why this board is flat

Collapse is the reason. "Everything above the cleared line falls past it"
assumes the lines below a cell are a translate of the lines above it — that
the board looks the same one row down. That is a property of flat space, and
curved space denies it, so the falling game stays on the honeycomb and the
square grid. A curved version would need a different idea of down: gravity
toward the centre, where every cell has exactly one way to fall.

## Where it comes from

*Tetris* (Alexey Pajitnov, 1984) on a square grid; hexagonal descendants have
existed nearly as long. What the hexagon changes is not the difficulty but the
*shape of the thinking* — sloped surfaces instead of flat ones, three axes
instead of two.
`,h=`**Edge Match on the honeycomb**: the same seam rule as always — neighbouring
tiles must show the same colour along the edge they share — on tiles with six
edges instead of four. Every tile you set down commits six promises at once, and
a tile in the middle of the patch has to keep all six.

## Where it comes from

Edge-matching with coloured sides was systematised by the British mathematician
**Percy MacMahon** in *New Mathematical Pastimes* (1921). He asked the question
that generates every puzzle of this kind: take a shape, colour its edges from a
small palette, and count how many *distinct* tiles you get once rotations are
treated as the same tile. Three colours on a triangle give 24 tiles; three
colours on a square give 24 as well. On a hexagon the count explodes — six edges
and even two colours already give 14 distinct tiles — which is why a hexagonal
set is usually cut down to a handful of hand-picked patterns rather than used
whole.

## How to play

Drag a tile onto the board and turn it — six turns now, so a tile that looks
wrong may be one nudge from right. A seam is satisfied when both sides show the
same colour; the board is done when every shared edge agrees. Work outward from
one committed tile rather than filling the rim first: on a honeycomb the rim
constrains you least, and the centre most.

## The math

The interesting fact about hexagonal edge-matching is that a set can be
*self-defeating*. Take the tile whose colours alternate all the way round —
a, b, a, b, a, b. Two of them can agree, but three around a shared corner cannot:
follow the alternation around the vertex and it demands a colour be both a and b.
So a set made only of alternating tiles has no full arrangement at all, on any
patch big enough to have an interior corner — no search required to know it.

Where a set *does* admit arrangements, finding one is again **exact cover** with
the seam agreements folded in as constraints, and the solver runs the same search
it runs for the square and triangular MacMahon boards.
`,l=`**Sliding on a honeycomb** is Klotski with one habit taken away: there is no
left. A hexagon has six neighbours and no two of them are opposite in the way a
square grid's are, so a move is not a *direction* you push — it is a *tile* you
point at.

## Where it comes from

Sliding-block puzzles have been square since Cao Cao first fled down the narrow
trail (see *About Klotski puzzles* for that story). The reason is practical
rather than mathematical: a square grid has rows and columns, so a puzzle can be
printed as a grid of letters and a solution written as U-D-L-R. Hexagonal
sliding boards appear mostly in computer puzzles, where the machine can hold the
geometry for you and no notation has to be agreed on first.

## How to play

Drag a piece toward the neighbouring tile you want it to occupy, or tap the piece
and then tap the tile. Pieces stop at walls and at each other, and nothing ever
overlaps. Win by walking the marked piece onto its goal.

The one adjustment worth making consciously: on a square board you plan in
straight lines, and a detour costs you a whole rank. On a honeycomb there are
three axes through every cell, so almost every destination has two roughly equal
routes, and the empty cell can be walked around an obstacle rather than back down
the way it came.

## The math

Six neighbours means a larger *branching factor* — more legal moves from each
position — so the tree of possibilities widens faster than on a square board of
the same size. But the number of reachable positions is what actually decides how
hard a board is, and that is set by the cell count and the pieces, not by the
neighbour count. A small honeycomb with a handful of stones is fully mapped by
the solver in an instant: it explores every position reachable from the start and
returns a shortest path, which is what **Hint** shows you one move of.
`,d=`**Hex Merge** is 2048 with six ways to push instead of four. Swipe, every tile
travels that way at once, and equal tiles fuse where they meet.

## Why six directions is a different game

On a square board, a tile pushed left stays in its row forever. Push left
again and it is still in that row. The board is really four rows played side
by side, and the standard advice — keep your big tile in a corner, work one
edge — follows directly from that: the rows never interfere.

A hexagon's six sides pair into **three axes**, and they cut across each other.
A push along one axis rearranges the lines of the other two. You cannot tidy
one direction without disturbing the rest, and the corner strategy stops
working, because there is no corner that only two directions can reach.

What replaces it is harder to state and more interesting to find: you are
looking for arrangements that survive a push from more than one side.

## The Fibonacci board

One of the levels swaps the arithmetic. Instead of equal tiles doubling, two
tiles combine only when both are **Fibonacci numbers and so is their sum** —
which happens exactly for neighbours in the sequence:

$$1 + 2 = 3, \\\\quad 2 + 3 = 5, \\\\quad 3 + 5 = 8, \\\\quad 5 + 8 = 13$$

Two equal tiles are almost never a pair, since $3 + 3 = 6$ is not a Fibonacci
number. Every instinct the doubling game trained is now wrong: you are not
collecting matching tiles, you are keeping *adjacent* ones within reach of each
other — along three axes at once.

## Why this board is flat

"Every tile moves that way" needs the lines in a direction to **tile the
board**: each tile on exactly one of them, so the move has one meaning. Flat
space guarantees it. Curved space does not — straight paths heading the same
way drift together, and a tile can sit on two of them, at which point the
result of a push depends on which line was resolved first. That is an
ambiguity rather than a rounding error, so the game stays flat.

## Where it comes from

The merging-tile idea began with *Threes* (2014), and **2048** — written in a
weekend by Gabriele Cirulli — made it famous. Hexagonal variants followed
almost immediately; what they gain is exactly what this board gains, the loss
of the safe corner.
`,c=`**Huarong Dao** (華容道 huá róng dào, "the Huarong Trail") is China's great
sliding-block puzzle: walk the big 2×2 block from the top of a 4×5 board out
through the exit at the bottom, past nine blockers, with only two empty cells
of room to breathe.

## The story

The year is 208 AD. The warlord **Cao Cao**, beaten at the Battle of Red
Cliffs, flees with a handful of riders down a narrow muddy trail called
Huarong Dao. Waiting there is the general **Guan Yu** — who owes Cao Cao an
old debt of mercy from years before. In the novel *Romance of the Three
Kingdoms*, Guan Yu weighs duty against gratitude, sighs, and lets him pass.
The puzzle restages that escape: the 2×2 block is Cao Cao, the five long
blocks are generals (Guan Yu is the one lying crosswise in most openings),
the four small squares are soldiers, and the exit is his road home.

## The 32 openings

Tradition passed down dozens of starting positions, each with a poetic
four-character name — 橫刀立馬 "blade crosswise, halting the horse," 水泄不通
"not even water seeps through," 峰迴路轉 "the peaks turn, the road winds."
Many are everyday Chinese idioms, so each level's help page glosses its name
character by character — solve the set and you leave with a small vocabulary
of real Chinese. This collection carries all 32 classical openings from the
standard piece set (one 2×2, five 1×2, four 1×1), ordered easiest to hardest:
from 比翼橫空 at 28 steps to 峰迴路轉 at 138.

## How to play

Drag a block (or tap it and use the arrows) to slide it into empty space —
nothing lifts, nothing rotates. Win by walking Cao Cao onto the marked 2×2
exit. The step counter uses the classical count: one piece sliding any
distance, turns included, is **one step**, so a perfect 橫刀立馬 game reads
exactly 81. **Hint** always knows a step-shortest continuation from wherever
you are.

## The math

Each opening's minimum step count was long folklore, settled only when
computers exhaustively mapped the state space — about 65,000 essentially
different positions once identical pieces are treated as interchangeable.
The solver behind Hint does the same search live. Two counting conventions
coexist: classical *steps* (this game's counter, 81 for 橫刀立馬) and
one-cell *slides* (116 for the same layout) — and the shortest path under
one metric is generally not shortest under the other. The general theory of
sliding blocks is covered in the Klotski family's help page; the short
version is that these ten little blocks hide a genuinely deep search problem.
`,u=`**Iamond Fill** is the oldest packing challenge, moved onto the triangular grid:
here are some shapes, here is a board — now cover every triangle, with no gaps
and nothing sticking out. The pieces are *polyiamonds*: shapes glued together
from little equilateral triangles. Two triangles make a diamond; glue six
together in every possible way and you get exactly twelve shapes — the
**hexiamonds**, and the stars of this game.

## Where it comes from

Polyiamonds are the triangular cousins of the polyominoes. The name is a pun:
a two-triangle shape looks like a *diamond*, so the mathematician T. H.
O'Beirne dropped the "d" and called the six-triangle shapes **hex-iamonds** in
*New Scientist* in 1961. The whole family took the name "iamonds" from there —
one moniamond, one diamond, one triamond, three tetriamonds, four pentiamonds,
and then the twelve hexiamonds, each with its own nickname (the sphinx, the
lobster, the crown). O'Beirne's puzzle — fitting all twelve into a neat
figure — has kept enthusiasts busy ever since.

## How to play

Drag a piece from the tray onto the board. Tap it (or press \`R\`) to rotate — on
the triangular grid there are six turns, not four — and flip it when the level
allows, since some pieces are "handed," like a left and right shoe. The board
is a workbench: park pieces loosely and even let them overlap while you think
(overlaps glow red). You win the moment every triangle is covered exactly once.
A good start: fill the pointed corners first — they are the fussiest spots — and
save your most flexible pieces for last. Stuck? **Hint** places one correct
piece; **Solve** finishes the whole board.

## The math

First trick: count. The twelve hexiamonds bring $12 \\times 6 = 72$ triangles,
so they can only fill a board with exactly 72 cells. Second trick: color. Every
triangle on the grid points either up or down, and the two kinds always
alternate — so a board has a fixed count of each. Some pieces cover more
up-triangles than down (or the reverse) no matter how you turn them, so a board
with the wrong balance can be proven *impossible* before you place a thing.

Whether the pieces really fit is an **exact cover** problem — the same one the
square Omino Fill solves, just on a different lattice — and it is genuinely
hard: computers crack it by very fast, very organized trial-and-error. That
search is exactly what runs when you press Solve.
`,g=`**Klotski** is a traffic jam in a box. The board starts almost full, and blocks
can only *slide* into the little empty space — never lift, never rotate. One
special block needs to get out, and everything else is in the way.

## Where it comes from

The classic version is the Chinese **Huarong Dao** (华容道). It restages a
famous scene from the *Romance of the Three Kingdoms*: the warlord Cao Cao,
beaten in battle, flees down a narrow trail blocked by enemy soldiers — the
big 2×2 block is Cao Cao, and you must shuffle the soldiers aside to let him
escape. Similar puzzles appeared in the West in the early 1900s, and the name
"Klotski" comes from the Polish word for little blocks. Its road-rage cousin
is **Rush Hour** (1996), by the Japanese puzzle inventor Nob Yoshigahara,
where every car may only drive along its own length.

## How to play

Tap a block to select it, then use the arrows — or simply drag it. Blocks stop
at walls and at each other; nothing ever overlaps. Win by walking the marked
block onto its goal (or out through the exit). The art is using the empty
cells well: they are the only "room" you have, so think of each move as
walking the *gap* to where it is needed. Real solutions often move blocks
*away* from the goal first — if you feel like you are undoing your work, you
may be doing it exactly right. **Hint** shows a best next move whenever you
are lost.

## The math

Gentle to hold, monstrous inside: mathematicians proved sliding-block puzzles
are among the hardest puzzle families known (the technical name is
PSPACE-complete) — solutions can be forced to be astronomically long, and no
quick shortcut can exist. Small boards give in to computers, though: the
solver maps every reachable position and finds a shortest path between them.
One clever trick makes this fast — two identical soldiers swapped is the
*same* position, and merging such twins shrinks the classic layout's map by a
factor of 576. That layout, by the way, needs at least **81 moves**. No
wonder it feels long.
`,m=`In **Number Merge**, the whole board moves at once. Swipe, and every tile slides as far
as it can; when two equal tiles collide, they merge into one tile of double
the value — and a new small tile pops in somewhere. Keep merging and the
numbers climb: 2, 4, 8, 16… all the way, if you are careful, to 2048.

## Where it comes from

The merging-tile idea started with *Threes* (February 2014), a game its two
designers polished for over a year. Weeks later came the free lookalike
*1024*, and in March 2014 a 19-year-old Italian developer, Gabriele Cirulli,
wrote **2048** in a single weekend and put it on the web for free. It went
around the world almost overnight — one of the most-played puzzle games ever.

## How to play

Swipe, use the pad, or press the key printed on each pad button to slide
everything at once — four ways on a square board (the arrows, or \`WASD\`), six
on a triangular one, where the lanes run along the rows and both slants and
there is no straight up or down at all. When two tiles meet they may merge — equal tiles in
the base Number Merge, and by their own rule in the Fibonacci and Trio variants (see below);
every move also spawns one new tile. You win by building a 2048 tile — and may
keep going after. The classic strategy is to pick a corner and *never let your
biggest tile leave it*: build
a "snake" of tiles that shrink as they wind away from that corner, so merges
ripple down the line. Above all, avoid moves that shove your big tiles into
the middle — a stranded giant clogs the board.

## The math

Every tile is a power of two, and a tile remembers its history: a 64 is two
32s, which were four 16s… so a $2048 = 2^{11}$ tile has swallowed more than a
thousand points of arrivals, all herded into one place. On a 4×4 board the
biggest tile possible is $2^{17} = 131{,}072$ — sixteen cells can hold at
most one perfect descending chain, and that chain can only be fed so much.

The variants show how much game lives in one rule. **Fibonacci** tiles merge
only when they are *neighbors in the Fibonacci sequence* — because
$F_{n-1} + F_n = F_{n+1}$ is the only way two Fibonacci numbers add up to
another one — so equal tiles refuse each other: the exact opposite of the standard rule!
**Trio** tiles first pair 1 + 2 = 3, then double from there. And the whole board
tilts onto a **hexagon of triangles** — the same doubling rule, now sliding six
directions instead of four.
`,p=`**Mosaic** is Omino Fill with a twist: it is not enough for a piece to
*fit* — it has to *belong*. Neighboring tiles must agree along the edge they share. In a
picture mosaic, the picture itself must line up; in an edge-matching puzzle,
colored edges must meet their matching colors.

## Where it comes from

Mosaic is one of the oldest tricks in art. Thousands of years ago, Greek and
Roman artists paved whole floors with little square stones called **tesserae**
(Greek for "four-cornered"), arranging plain squares into lions, ships, and
heroes. People found the results so wonderful that the art was named for the
**Muses**, the Greek goddesses of the arts — *mosaic* means "work of the
Muses." (*Museum* and *music* are named after the very same goddesses.)

You surely know this game's younger cousin, the **jigsaw**. In the 1760s a
London mapmaker named John Spilsbury glued maps onto wood and sawed them apart
along the country borders, so children could learn geography by putting the
world back together. The puzzle is named after the saw that cuts it: a
*jigsaw*'s skinny blade dances rapidly up and down — like the jig, a bouncy
dance — and that dancing blade is what carves the famous wiggly edges.

So why is this game called Mosaic and not Jigsaw? Look at the tiles: no
wiggles! In a real jigsaw, the wiggles are the referee — push a wrong piece in
and it simply won't click, so your fingers catch the mistake. Plain squares
can't do that: every square slides into every square hole. A mosaic needs a
different referee, and here the app itself takes the job — it checks every
seam and tells you what a jigsaw's bumps would have told your fingers.

Edge matching without a picture got serious, too: in 2007 a puzzle called
**Eternity II** offered two million dollars to anyone who could arrange 256
tiles so all the edge colors matched. Nobody ever managed it.

Triangles play this game as well. **MacMahon Triangles** — the 24 four-color
triangles the mathematician Percy MacMahon catalogued over a century ago — must
be laid so every shared edge meets its own color, and a picture can be cut into
triangles instead of squares (the **Starry Triangle**) and pieced back together.

## How to play

Drag tiles onto the board and watch the seams: a **green** line means the two
neighbors agree, a **red** line means they clash. You win when the board is
full and every seam is green. In picture levels, the faint background image
shows where things belong; in rotation levels, tap a tile to turn it — the
same tile can be right in one direction and wrong in the other. Start with
pieces you are sure about (corners and borders are great anchors) and let the
green seams grow outward.

## The math

Here is the surprise: matching edges is *harder* than matching shapes. With
shapes, a piece either fits a hole or it doesn't. With edges, a tile can sit
in many places — and a choice that looks fine now can quietly ruin a corner
far away, much later. Computer scientists have proved that edge-matching
puzzles belong to the hardest class of everyday puzzles (called NP-complete):
nobody knows a way to solve big ones without some kind of searching. A picture
is really a gigantic hint — it tells almost every tile where to go, which is
why picture mosaics feel friendly and Eternity II ate two million dollars.
`,y=`The **15 Puzzle** is the original sliding-tile game: fifteen numbered tiles,
one empty cell, and a simple demand — put the numbers back in order. Tiles
can't be lifted; they can only slide into the gap. It looks easy. It is not.
And it once drove the whole world slightly crazy.

This app gathers the whole family under one roof: the classic 4×4 alongside
smaller 8- and 11-tile boards and larger 19- and 24-tile grids, **triangular**
boards where a tile *flips* across its shared edge into the gap instead of
sliding, and **hyperbolic** boards where the ring around the middle holds twelve
tiles instead of eight. Same demand every time — get the numbers back in order.

## Where it comes from

The puzzle appeared around 1874, credited to Noyes Palmer Chapman, a
postmaster in New York State. By 1880 the "Fifteen Puzzle" was a full-blown
mania in America and Europe — newspapers wrote about employers banning it
from offices. Its most famous story is a trick: the puzzle showman Sam Loyd
claimed he had invented it, and offered **\\$1,000** to anyone who could solve
a version where only the 14 and 15 were swapped. His money was perfectly
safe — that position is *impossible*, and mathematicians had already proved
it.

## How to play

Tap any tile next to the empty cell and it slides in — or drag a tile, or
select one and nudge it with the arrow keys or \`WASD\`; tiles flow through the
gap. (On a triangular board, a tile beside the gap *flips* across the shared
edge into it.) You win when the tiles read back in order.
Solve it in layers: finish the top row first, then the left column, and
never touch them again — the rest becomes a smaller, easier puzzle. The last
two rows are the tricky part: you must rotate tiles *in pairs* around the
gap. Every shuffle you are dealt is solvable, and **Hint** will show a good
next move whenever you are stuck.

## The math

Why was Loyd's \\$1,000 safe? Every slide swaps the gap with one tile, and if
you track the swaps carefully, a hidden pattern — called *parity* — never
changes. Exactly **half** of all possible arrangements can reach the solved
picture; the other half, including Loyd's 14–15 swap, can never get there, no
matter how long you try. This app shuffles by actually sliding tiles randomly
from the solved board, so your start is always on the solvable side.

The solvable half is still enormous — about ten *trillion* positions, and the
very worst ones need 80 moves. Computers cracked the puzzle by being smart,
not fast: the Hint search estimates how far each tile is from home (walking
distance, no diagonals — the "Manhattan distance," like walking city blocks)
and explores the most promising moves first. The little 3×3 version of this
idea is the first search problem many computer scientists ever study.
`,f=`**Pentagon Drop** is the falling-block game on a board cut from the hyperbolic
plane. Pieces fall; you steer and spin them; the stack grows until a new piece
cannot enter. What is different is *where down is*.

## Down is a forest of rays

On a square board, gravity is one axis and every cell in a column shares it.
A hyperbolic board has no such columns. Each cell has one successor in a
single board-wide direction — the **ray** it sends through the side that faces
that way — and in curved space those rays *converge*. Several cells fall into
the same next cell. The stack is not a wall of columns. It is a funnel.

That successor forest is the same one a pentagon merge board pushes along.
Merge fuses equal tiles where they meet. Here they just pile up. There is no
row to clear: "everything above a line falls past it" needs the board to look
the same one row down, and curvature denies that.

## No direction has an opposite

A pentagon has an **odd** number of sides, so nothing here is opposite
anything. Steering is not left and right across the fall; it is the nearest
of five ways on the screen. A nudge that looks sideways also turns the piece
a little, because a side crossing on an odd-sided tile is not a translation.

## Why the tiles are different sizes

They are not. Every tile on the board is the same regular pentagon. The disk
is a **map** of a curved surface onto a flat screen, and no such map can be
honest about size — the same reason a world map inflates Greenland. It is
honest about *angles* instead, so every corner you see is a true corner, and
the price is that tiles far from the middle are drawn small. The rim is
infinitely far away.

Four pentagons around a corner comes to more than a full turn. The surplus
goes into curvature, which is why this board fits ten tiles around its centre
where a flat board of four-sided tiles fits eight.
`,w=`**Pentagon Merge** is 2048 with five ways to push, on a board cut from the
hyperbolic plane. Push, every tile travels that way at once, and equal tiles
fuse where they meet. What is different is *where* they meet.

## No direction has an opposite

A square board's four pushes come in two opposite pairs: push left, push right,
and you are roughly back where you started. A pentagon has an **odd** number of
sides, so nothing here is opposite anything. There is no push that undoes the
last one. The five directions cycle around each other instead of cancelling in
pairs, and a board you have tidied one way comes apart differently whichever way
you tidy it next.

The corner strategy every 2048 player learns does not survive the trip. Keeping
your big tile in a corner works on a square board because a corner is defended
by two directions you can simply never press again. Here every direction leads
somewhere new.

## A push is a funnel

This is the part with no flat equivalent.

On a square board a push is a set of parallel lines swept to one end, and a tile
never leaves its line. Two tiles that do not share a row can never meet, however
long you play. The board is four rows side by side.

A hyperbolic board has no such lines. Each tile follows its own **ray** — out
through whichever side faces the way you pushed — and in curved space rays
*converge*. Several cells send their rays into the same cell. So a push gathers
tiles that were never in line with each other, and equal ones fuse on arrival.

You can feel it as the board fills: things collide that had no business
colliding, and a push you expected to tidy one edge rearranges the middle.

## Why the small board is tame

On the eleven-cell board it does not happen at all. Every cell's push leads
somewhere distinct, so apart from having five directions it behaves the way you
expect. It takes a **second ring** of curved space before two rays share a
destination — and from there on the board is full of them, which is what the
fifty-one-cell board is for.

It is not a property of pentagons but of curvature: no flat board has it, at any
size, with cells of any shape. Rays on a flat board are exactly its rows.

## Why the tiles are different sizes

They are not. Every tile on the board is the same tile. The disk is a **map** of
a curved surface onto a flat screen, and no such map can be honest about size —
the same reason a world map inflates Greenland. It is honest about *angles*
instead, so every corner you see is a true corner, and the price is that tiles
far from the middle are drawn small. The rim is infinitely far away.

That is also where the extra room comes from. Four pentagons around a corner
comes to more than a full turn, and the surplus has to go somewhere: it goes
into curvature, which is why this board fits ten tiles around its centre where a
flat board of four-sided tiles fits eight.
`,b=`**Slide In** is a fill puzzle where you can't just drop a piece where it
belongs — you have to *slide* it there. Each piece starts in the **loading
zone** beside the board; from there you nudge it one cell at a time into the
region, blocked by the walls and by pieces already parked. You pick the piece,
the orientation, and the path; the board decides what's still reachable.

## The idea

Think of it as Omino Fill with one extra rule: every piece must arrive by
sliding. That rule changes everything — **order matters**. A spot that is easy
to reach now may be walled off once its neighbours are filled, and a deep
pocket may need another piece parked first as a stepping stone. You reorient a
piece only while it is still in the loading zone; once it slides onto the board
it keeps its facing.

## How to play

Stage a piece from the tray into the loading zone, turn it to the orientation
you want (where the level allows), then slide it into the region — a cell at a
time, by dragging or with the on-screen keys — until it rests where you need
it. A staged piece can go back to the tray if you change your mind. You win
when the region is completely filled. Plan from the tight spots outward: fill
the cells hardest to reach into while their paths are still open.

## The math

Slide In glues two classic problems together. The *filling* half is exact
cover, just like Omino Fill: every cell covered exactly once. The *sliding*
half adds reachability: a placement only counts if the piece can be slid there
from the loading zone through the cells still free. So a solution is not just a
set of placements — it is a **sequence**, a correct order of arrivals. Puzzles
where moves must happen in the right order are exactly the kind computers find
deep (their cousins, the sliding-block puzzles, are among the hardest known),
which is why a small board of gliding pieces can tie your brain in a very
satisfying knot.
`,v=`**Curved Edge Match** is the MacMahon puzzle — tiles painted per edge, laid so
that every shared edge shows the same colour on both sides — on boards that are
not flat.

## The colours ride the tile

This sounds too obvious to say, and it is the whole difficulty: **turn a tile
and its colours turn with it.** A tile is not "red on top"; it is red on *one
of its own edges*, and which way that edge faces depends on how you have
turned it and, on a curved board, on where it sits.

That second part is the new one. On a flat board you can think in terms of a
fixed compass — this edge faces north — and carry that idea anywhere on the
board. A curved board has no compass. Carry a heading around a closed loop in
the hyperbolic plane and it comes back **turned**, by an amount equal to the
area you walked around. So "north" is not something the board can offer.

What the game does instead is carry each tile's own frame with it. The seam
test never asks which way an edge faces in some global sense; it asks only what
the two tiles facing each other actually show. That question always has an
answer, on any board.

## Why some tile sets cannot work

Edge-matching is unforgiving in a way that packing is not. A set of tiles can
be perfectly reasonable — the right number, the right colours — and still admit
no arrangement at all.

The honeycomb level is a case in point. Seven tiles whose colours simply
alternate around each hexagon cannot be made to agree anywhere on the board;
the alternating pattern fights itself. Mixing in tiles that are split — three
edges of one colour, three of the other, in a run — makes the board solvable.
Every level here was checked by the solver before it shipped, so a board that
cannot be finished never reaches you.

## Odd numbers of edges

A pentagon has five sides, and five will not divide evenly into anything. You
cannot paint a pentagon in halves, or in stripes that come out even; three and
two is as close as it gets. So each of a tile's five turns shows a genuinely
different arrangement, where a square tile's four turns include a repeat if it
happens to be painted symmetrically.

More distinct turns means more to try, and less that your eye can rule out at a
glance.

## Where it comes from

Percy MacMahon, an English mathematician and army officer, catalogued the
edge-coloured tile sets that carry his name in *New Mathematical Pastimes*
(1921) — the 24 three-coloured triangles, the 24 squares. The puzzles were his
recreation from a career spent on partitions and combinatorics. He worked in
the plane. The curved boards are what happens when you keep his rule and take
away his compass.
`,k=`**Tessera Fill** is the oldest packing challenge, moved onto a board that is
not flat: here are some shapes, here is a board — now cover every tile, with no
gaps and nothing sticking out. The pieces are *polycells*: shapes glued
together from the board's own tiles, the way polyominoes are glued from
squares. What is new is the board. It is a patch of a **regular tiling** named
$\\{p,q\\}$ — $p$-sided tiles, $q$ of them meeting at every corner — and most of
those tilings do not fit on a flat page at all.

## The tiles are all the same size

This is the one thing worth knowing before you start. On $\\{4,5\\}$ the tiles
near the rim look tiny, and they are not: **every tile of the board is the same
tile**, the same size and the same shape. What shrinks them is the *map*.

The board is drawn in the **Poincaré disk**, which squeezes an infinite curved
plane into a circle — so everything that moves away from the middle is drawn
smaller and smaller, and the edge of the circle is infinitely far away. A world
map does the same thing in reverse when it inflates Greenland.

You do not have to take this on faith. Double-tap any empty tile: the board
glides until *that* tile is the big one in the middle, arriving at full size,
and the tile you started from shrinks away toward the rim. Nothing changed
shape. You moved.

## Where it comes from

Five squares will not meet at a corner on a flat table — four already use up
all $360°$. They meet perfectly well in the **hyperbolic plane**, where a
triangle's angles add to less than $180°$ and there is, in a sense, more room
than Euclid allowed. Mathematicians spent the nineteenth century arguing about
whether such a geometry could exist; Beltrami settled it in 1868 by building a
*model* of it inside an ordinary disk, and Poincaré's version of that disk is
the one whose name stuck — and the one you are looking at.

It reached the public through art. In 1957 the geometer H. S. M. Coxeter sent
M. C. Escher a paper containing a figure of a hyperbolic tiling; Escher, who
had been hunting for a way to draw infinity inside a finite frame, recognized
exactly what he needed. The **Circle Limit** woodcuts followed — fish and
angels and devils, shrinking forever toward a boundary they never reach, each
one the same size as all the others.

## How to play

Drag a piece from the tray onto the board — it hangs from its middle, so what
sits under your finger is where the piece will land. Tap it (or press \`R\`) to
rotate, and flip it when the level allows, since some pieces are "handed," like
a left and right shoe. The board is a workbench: park pieces loosely and even
let them overlap while you think (overlaps glow red). You win the moment every
tile is covered exactly once.

Two gestures belong to the board rather than the pieces. Double-tap an empty
tile to bring it to the middle. Drag with two fingers — Shift-drag with a mouse
— to travel across the plane. Both move the *board*, not a camera, which is why
distant tiles arrive at full size instead of merely getting bigger.

One oddity is real, and deliberate. Carry a piece in a loop and bring it back
to where it started: it comes home **turned**. That is not a bug — it is the
curvature, which you have just measured with your finger. On the flat boards
({4,4} and {6,3}) the same loop brings it back exactly as it left.

## The math

Whether $\\{p,q\\}$ is flat or curved is one comparison: $(p-2)(q-2)$ against
$4$. Equal to $4$ and the tiling is flat — that is $\\{4,4\\}$ squares,
$\\{6,3\\}$ hexagons, $\\{3,6\\}$ triangles, and no others. Greater than $4$ and it
is hyperbolic, which is nearly all of them.

Curved boards get big fast. The rings of a flat board grow by a fixed amount —
$8$, $16$, $24$ tiles — but on $\\{4,5\\}$ they *multiply*: $1$, then $12$, then
$48$, four times over at every step. Almost all of such a board is near its
edge, which is exactly why a good hyperbolic level stays small.

One more gift of the curvature: here, **angles determine area**. A flat square
can be any size you like, but a $\\{4,5\\}$ tile — a square whose corners are
$72°$ instead of $90°$ — has exactly one possible area, fixed by how much its
angles fall short of the flat total. That $18°$ shortfall at each corner *is*
the tile. It is also why the tiles cannot quietly be different sizes, however
convincingly the map draws them.
`,T=`**Curved Slide** is the sliding-block puzzle — free the marked piece, nothing
passes through anything — played on a board cut from the **hyperbolic plane**.
The rules you already know all survive the move. One thing does not: *left*.

## A board with no left

On a flat grid, every piece agrees about which way is north, and they go on
agreeing however far anything travels. That agreement is what lets a sliding
puzzle say "move it left" and have the instruction mean the same thing in every
square of the board.

Curved space does not offer it. Carry a heading around a closed loop in the
hyperbolic plane and it comes back **turned** — by an amount equal to the area
you walked around. This is not a quirk of the drawing; it is the curvature
itself, and it is the same effect that makes a pendulum's swing rotate over a
day as the Earth turns beneath it.

So the game asks you for something slightly different. Not *move it left* —
**move it toward that tile**. Drag a piece in the direction of the neighbour
you want it to go to, and it goes there.

## What the piece remembers

A piece that keeps sliding does not wander. It carries a **heading**, and at
each tile it takes the edge nearest that heading — so it goes as straight as
the board allows, which on $\\{4,5\\}$ means exactly straight: in, across, and
out the far side, tile after tile.

On a board with an odd number of sides per tile — $\\{5,4\\}$, $\\{7,3\\}$ — there
is no far side to come out of. Nothing is opposite anything. A piece there
leans to whichever edge is nearer its heading, first one way and then the
other, and the zigzag it traces is the straightest line that board has to
offer. The heading itself is never bent; only the step is chosen.

## Why the pieces look different sizes

They are not. Every tile of the board is the same tile — the disk is a *map*,
and it draws whatever is far from the middle smaller, the way a world map
inflates Greenland. A piece sliding toward the rim is not shrinking. It is
walking away.
`,x=`**Tri Slide-Out** is a sliding-block puzzle with a new move. Nearly-full boards
of triangular blocks jam a hexagon; one target block has to reach the exit. As
in Klotski, you free it by shuffling everyone else out of the way — but here a
block can do something no square block can: **tumble**. Rather than only
gliding, it can roll over one of its own edges and land, mirrored, on the other
side. That single verb is the game.

## Where it comes from

The sliding-block family — Klotski, Huarong Dao, Rush Hour — has always lived on
the square grid, where a block can only slide. Move the same idea onto the
triangular lattice and something new becomes possible: a block sitting against
an empty triangle can *flip* across the shared edge, pivoting into the gap. A
single triangle can't even change which way it points by sliding — only a
tumble can turn it over. Every board here is machine-generated and then
**certified** by the solver, so the step count printed in each level's notes is
a true minimum, not a guess.

## How to play

Drag a block to slide it along the six lattice directions; it stops at the walls
and at other blocks. To tumble, select a block and tap an empty triangle right
beside it — it rolls across the shared edge and lands mirrored. Bring the target
block to its marked exit to win. Moves are counted **Hua-Rong-Dao style**:
sliding one block several steps in a row is a single move, and so is one tumble.
**Hint** shows a best next move, and **Solve** plays the whole certified-shortest
solution when a jam looks hopeless.

## The math

Like every sliding-block puzzle, this one is deceptively deep — the same family
that mathematicians proved is "monstrously hard" (PSPACE-complete) on large
boards. These boards are small enough to search completely, so the solver walks
every reachable arrangement and reports the shortest path with certainty. The
results are surprising: on a hexagon of just sixteen triangles, the hardest
level here needs **60 moves** — in spirit beyond Huarong Dao's classic 81-step
openings, packed into a fraction of the space. So when a level takes you
thirty-plus steps, you are not doing it wrong; some tumbles really are that far.
`;export{x as _,T as a,k as b,v as c,b as d,w as e,f,y as g,p as h,m as i,g as j,u as k,c as l,d as m,l as n,h as o,r as p,i as q,s as r,o as s,a as t,t as u,n as v,e as w};
