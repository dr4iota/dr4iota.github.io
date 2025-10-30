const e={usage:"Every game is played by getting shapes onto the board — most of the time you\njust **drag a piece from the tray and drop it where you want it**. The board,\nthe tray, and an on-screen control pad work the same way with a mouse, a\nfinger, or a stylus. Keyboard shortcuts are available on desktop — see the\nreference below — but never required. Each game's own guide covers what makes\nit special; this page is the controls they all share.\n\n### Common controls\n\n- **Drag and drop:** On a mouse or stylus, press a tray piece, drag it onto the\n  board, and release to drop it. On a touchscreen, **hold** the piece until it\n  lifts, **drag** it onto the board, then **release** to drop — the brief hold\n  is what lets a plain swipe scroll the tray instead of grabbing a piece. A\n  preview shows where it will land as you drag.\n- **Tap or click to place:** Instead of dragging, **tap** (touch) or **click**\n  (mouse) a tray piece to select it, then tap or click a board cell to drop it\n  there.\n- **Swipe the board:** In Number Merge and Falling Blocks, swipe across the board\n  to slide the tiles or steer the falling piece.\n- **Scroll the tray:** When the tray holds more pieces than fit, scroll it with\n  the mouse wheel, a swipe on touch, or the arrow buttons that appear at its\n  ends — click one to nudge, or press and hold to keep scrolling.\n- **Undo / Reset:** Most games have an undo button; the reset button starts a\n  fresh board (labelled *Clear* or *New game* depending on the game).\n- **On-screen keys:** The header toggle cycles **off → right-handed →\n  left-handed**. Turn the control pad off if you play by keyboard, drag, or tap\n  alone; when on, it sits — along with the panel — on the side you pick.\n  Keyboard shortcuts work either way.\n\n### Control pad and keyboard\n\nOn square boards, the on-screen **control pad** is a 2×3 cluster of direction\nbuttons with two corners above, plus a flip / delete button alongside. Triangle\nboards use a six-button hexagonal ring instead, matching their six lattice\ndirections. Both pads mirror the keyboard, so you can play by touch, mouse, or\nkeys interchangeably. A game shows only the buttons it needs, and each button's\n**icon** says what it does (move, rotate, drop, or nudge) — so the corners are\nnot always rotation, and not every key is active in every game.\n\n**Action keys** — act on the selected piece:\n\n| Action | Keys |\n| --- | --- |\n| Rotate | `R` (`Shift`+`R` reverses) |\n| Flip | `F` |\n| Remove / delete / unload | `Delete` · `Backspace` |\n| Deselect | `Esc` |\n| Undo | `Ctrl`/`⌘` + `Z` |\n\n**Pad keys** — by the button's position on the pad:\n\n| Pad button | Keys |\n| --- | --- |\n| ↑ top-center | `↑` · `W` · numpad `8` |\n| ↓ bottom-center | `↓` · `S` · numpad `2` `5` |\n| ← bottom-left | `←` · `A` · numpad `4` |\n| → bottom-right | `→` · `D` · numpad `6` |\n| ◤ top-left | `Q` · `Home` · `PgUp` · numpad `7` |\n| ◥ top-right | `E` · `End` · `PgDn` · `Space` · numpad `9` |\n\nThe `Home` / `End` / `Page Up` / `Page Down` keys and the numpad match the pad\non a full keyboard; `WASD`, `Q`, and `E` cover laptops.\n\nOn the triangle pad, the six directions use `Q` / `E`, `A` / `D`, and `Z` /\n`C`, or numpad `7` / `9`, `4` / `6`, and `1` / `3`. The left and right arrows\nalso move directly left and right.\n\n### By control style\n\nMost games fall into a few families that share how you play them; each game's\nown guide fills in the rest.\n\n- **Drop & fill** — drag or tap pieces from the tray onto the board to fill it\n  or clear lines. Rotate and flip to make a piece fit, and take a placed piece\n  back by double-tapping it, pressing `Delete`, or dragging it off the board.\n- **Slide-out** — slide blocks around a crowded board to free one piece or send\n  it to its exit. Drag a block and it follows your finger, turning corners, or\n  select it and slide one cell at a time with the pad or keys; one slide, however\n  far, counts as one step.\n- **Slide-in** — stage each piece in the loading zone beside the board, turn it\n  there if the level allows, then slide it a cell at a time into the region until\n  it fills up. Order matters: reach the tight spots while their paths are open.\n",essay:`## A Short History of Packing Problems

Have you ever tried to fit every suitcase into the trunk of a car, or squeeze one more book onto a full shelf? That little puzzle — *how do you fit things together without wasting space?* — has a surprisingly grand history. People have been asking it for centuries, and some of the smartest mathematicians who ever lived spent years trying to answer it.

### The Grocer's Question

Walk past a fruit stand and you will often see oranges stacked in a neat pyramid. Each new layer nestles into the dips of the layer below. It looks obvious, but here is a real question: is that the *tightest* way to stack round things, or could a clever arrangement squeeze in even more?

Back in **1611**, the astronomer **Johannes Kepler** — the same man who figured out how planets orbit the Sun — guessed that the grocer's pyramid is the best you can do. It seemed easy to believe and impossibly hard to prove. The guess became known as the **Kepler conjecture**, and it stayed unsolved for almost **four hundred years**. It was not until **1998** that the mathematician **Thomas Hales** finally proved Kepler was right, using a mountain of computer calculations.

### Circles, Bubbles, and Busy Bees

Long before Kepler, the ancient Greek mathematician **Apollonius** studied how circles can be nestled snugly inside one another. If you keep filling every gap with the biggest circle that fits, you get a beautiful, lacy pattern called an **Apollonian gasket** — a packing that goes on forever, getting tinier and tinier.

Nature is a packing expert too. **Honeybees** build their honeycomb out of six-sided cells, never squares or circles. Why hexagons? Because hexagons tile together with no gaps *and* use the least wax for the most honey. For a long time this was just a hunch, called the **honeycomb conjecture** — and it was finally proved true in **1999**. The bees knew the answer all along.

### Packing Becomes a Game

Here is the fun part: packing puzzles are *everywhere* in games. When you twist and drop falling blocks in **Tetris**, you are packing shapes into rows. When you arrange the seven pieces of a **tangram** to make a cat or a sailboat, that is packing. **Pentominoes** — the twelve shapes you can make from five squares — fit into a rectangle in exactly **2,339** different ways, and people have made whole puzzle books out of finding them.

Newer games keep the idea alive. In the **Watermelon Game** (a viral hit from a few years ago), you drop fruit into a jar, and matching fruit merge into bigger fruit — packing, gravity, and merging all at once. The mechanic is centuries of mathematics hiding inside something you play on your phone.

### Tiles That Never Repeat

Most floor tiles repeat in a simple pattern: shift them over and they line up again. But mathematicians wondered — could you cover a floor with tiles that **never** repeat, no matter how far you look? In the 1970s, the physicist **Roger Penrose** found a way to do it using just two shapes and a sprinkle of the **golden ratio**, a special number that artists have loved for ages.

Then came a thrilling discovery in **2023**: mathematicians found a *single* tile, nicknamed the **"hat"**, that covers a whole floor without ever repeating. People had searched for such a shape for over fifty years, and it turned out to be something you could cut out of paper.

### Packing You Cannot Even Picture

Packing does not stop at the flat page or the fruit stand. Mathematicians ask about packing balls in **higher dimensions** — spaces with four, eight, even twenty-four directions instead of our usual three. You cannot picture it, but the math still works.

In **2016**, a mathematician named **Maryna Viazovska** solved the packing problem in **eight dimensions**, and her proof was so elegant and surprising that she won the **Fields Medal**, often called the "Nobel Prize of mathematics." It is one of the rare cases where we know the *perfect* packing for certain.

### Can You Get the Couch Around the Corner?

There is a cousin of packing that asks not "does it fit?" but "can you *move* it into place?" The most famous example is the **moving sofa problem**: what is the largest sofa you can slide around a right-angled corner in a hallway? Anyone who has helped move furniture knows the frustration. Mathematicians posed it in **1966**, and after almost sixty years it was finally answered in **2024**. A real-life headache turned into a beautiful theorem.

### A Roll Call of Famous Packing Problems

Packing is not one puzzle but a whole family of them. Here are a few more that mathematicians (and computer scientists) love — each one easy to describe, and some still unsolved:

- **The knapsack problem.** You are a hiker with a backpack that holds only so much weight. Every item has a value; which items do you take to get the most value without overpacking? It sounds simple, yet nobody knows a *fast* method that always finds the perfect answer. It is tied to the famous **P versus NP** question — a million-dollar unsolved problem about what computers can and cannot do quickly.
- **Bin packing.** Given a pile of boxes of different sizes, how do you fit them into the fewest trucks? Shipping companies, warehouses, and even the apps that split files across disks wrestle with this every day. Like the knapsack, a *perfect* solution is thought to be impossibly slow, so people use clever "good enough" rules instead.
- **Squaring the square.** Can you tile a big square using smaller squares that are *all different sizes*, with no gaps and no overlaps? For years people doubted it was even possible — then in **1939** a group of students found one. The smallest such "perfect squared square" needs exactly **21** pieces.
- **The sausage conjecture.** Here is one with the best name in math. If you pack balls in high-dimensional space, sometimes lining them up in a straight row — a "sausage" — wastes less room than clumping them together. Mathematician **László Fejes Tóth** guessed exactly when the sausage wins, and in dimensions above **42** it is *still* an open question.
- **Spreading points on a sphere.** How do you place a handful of dots on a globe so that they are as far apart from one another as possible? This is the **Tammes problem**, first asked by a botanist studying the pores on grains of pollen. It shows up again in the dimples of a golf ball and the seams of a soccer ball.
- **Circle packing in a square.** How many equal coins can you cram into a square tray? For small numbers the best arrangements are known and often surprising — they are not always the neat grid you would expect — but for many sizes the true best packing is still a mystery.

### A Timeline of Big Breakthroughs

Some of these puzzles waited centuries for an answer. Here are a few of the great "solved at last!" moments:

- **1611** — Kepler *guesses* the orange-stack is the tightest sphere packing.
- **1939** — Students build the first perfect squared square.
- **1966** — The moving sofa problem is posed.
- **1970s** — Penrose finds tiles that never repeat.
- **1998** — Thomas Hales proves the Kepler conjecture, almost 400 years later.
- **1999** — The honeycomb conjecture is proved; the bees were right.
- **2016** — Maryna Viazovska solves sphere packing in 8 dimensions, later winning the Fields Medal.
- **2023** — The single "hat" tile that never repeats is discovered.
- **2024** — The moving sofa problem is finally answered.

Notice how many of these are recent. Packing is a *living* subject — new pieces of it are still being fitted into place today.

### Why a Computer Can Be *Sure*

Here is something special about packing. The question "do these two pieces overlap?" has a clear, honest answer: yes or no. If we use exact whole-number arithmetic instead of rounded-off decimals, a computer can **prove** a packing is correct — no guessing, no "close enough." That means when you finish a board in this app, it is not just probably right; it is *provably* right. The math is something you can trust.

### Last Words

Packing is one of those rare ideas that lives in two worlds at once. It is a deep, serious branch of mathematics, full of centuries-old mysteries and prize-winning proofs. And it is also pure play — falling blocks, fitted tiles, fruit in a jar. The next time you wedge that last bag into the trunk, remember: you are practicing the same puzzle that has fascinated bees, grocers, and the greatest mathematicians in history.
`,about:`## Packing Puzzles — puzzles that fit together

Packing Puzzles (ιPacking) is a collection of puzzle and packing games built around one
simple idea: fitting shapes together so they fill a board with no gaps and no
overlaps. Familiar favorites and fresh twists live in one place — drop every
polyomino into the board in Fill, steer falling pieces in Falling Blocks, merge
sliding tiles in Number Merge, complete rows, columns, and boxes in Place & Clear,
reassemble a cut-up picture or match colored edges in Mosaic, slide the scrambled
15 Puzzle back into order, and work through all 32 classical openings of Huarong
Dao, each with its story and its minimum step count. Klotski slides blocks aside
to free a trapped piece, Gridlock drives the red car out of a traffic jam, and
Slide In stages each piece in a loading zone, then slides it into place to fill
the board.

Many of these games have a **triangle world**, too — the same ideas replayed on
a grid of triangles and hexagons. Fill a board with polyiamonds, slide *and
tumble* blocks free, merge six triangles into a hexagon, or match the colored
edges of MacMahon's triangles.

You play by dragging pieces straight onto the board, rotating and flipping
them as needed, or tapping a tile to slide it. The sliding puzzles keep a
classical step count as you play, and a built-in solver can hint the best next
move — in Klotski and Gridlock the hint follows a shortest solution.

Every game runs on the same exact geometry engine: each move is checked with
whole-number math, so a finished board is always provably correct — there are
no almost-fits or rounding surprises to spoil a win. The same engine powers
Hint and Solve: it can search every possible arrangement and prove whether a
board can be completed at all. Every game carries a
short guide — where it comes from, how to play it, and a taste of the math
behind it. Light and dark themes are supported, and the settings offer Golden
Oak, Mahogany, and Walnut finishes that carry the wood scene across boards,
menus, and dialogs. The app works in the browser, on desktop, and on Android.

### Features

- Fit shapes together to fill a board with no gaps or overlaps.
- Many games in one place — Polyominoes, Falling Blocks, Number Merge, Mosaic, and more.
- Now on the triangle too — tumbling Slide Out, Hexa Merge, MacMahon, and Polyiamonds.
- And in hyperbolic space — pentagon and heptagon boards drawn on the Poincaré disk.
- Solve all 32 classical Huarong Dao openings, each with its story and minimum steps.
- Slide the scrambled 15 Puzzle back into order with one-tap moves.
- Drag pieces straight onto the board, rotating and flipping as you go.
- Clear full rows, columns, and boxes to keep the board open.
- Slide tiles so matching ones merge toward a target.
- Reassemble a cut-up picture or match colored puzzle edges.
- Slide blocks aside to free a trapped piece, or drive the red car out of the jam.
- Count your steps and let the hint play the best next move.
- Choose from several board sizes, from easy starters to tougher challenges.
- Every move is checked, so a finished board is always correct.
- Read each game's history, how-to, and math in the built-in guide.
- Choose light or dark mode, plus Golden Oak, Mahogany, and Walnut wood scenes.
`};export{e as helpTopicBodies};
