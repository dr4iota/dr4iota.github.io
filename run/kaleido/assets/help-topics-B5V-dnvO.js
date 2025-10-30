const e={usage:`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the tiling view to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the tiling view to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
control point. If not visible, hover over or single-click the tiling view
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move control point:** Click and drag a control point to move it.
- **Reset control point:** Double-click a control point to reset its position.



### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the tiling view to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the tiling view to reset the
  pan and zoom to their original or best-fit values.

Some visualizations may feature control points, each representing a
control point. If not visible, tap anywhere on the tiling view to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move control point:** Drag a control point to move it.
- **Reset control point:** Double-tap a control point to reset its position.

### Two ways to move, and why there are two

Every other viewer in this family has one camera. Kaleido has two, and once you
know that, everything else about the controls makes sense.

### A one-minute first tour

If you would rather learn by trying things, start here:

1. Drag with one finger or the left mouse button. You are travelling across the
   tiling, not sliding a sheet of paper.
2. Pinch or scroll. The frame grows or shrinks, but your place in the tiling
   does not change.
3. Open the side menu and choose \`{7,3}\` from the **Tilings** section. This is
   the clearest starting view of a curved tiling.
4. Open the gear menu and try \`Tile outline\`, then an ornament. The world stays
   the same; only the design printed on it changes.
5. Drag the round turn handle. Release it near a snapping point and notice that
   the pattern lines up with itself again.
6. Double-tap or double-click empty space to return home.

The two menus answer different questions: the **side menu** asks "which world am
I in?" and the **gear menu** asks "what is drawn on that world?"

### Six useful words

- A **tile** is one shape in the pattern. A **tiling** covers a surface with
  tiles without gaps or overlaps.
- **Regular** means that all sides have equal length and all corners have equal
  angles, measured within the geometry being used.
- A **symmetry** is a move — such as a slide, turn, or reflection — that leaves
  the complete pattern looking unchanged.
- A **motif** is the artwork repeated by those symmetries.
- A **projection** or **model** is one way to draw the curved world on a flat
  screen. Different projections preserve different features.
- The **horizon** is the boundary shown around some projections. It is
  infinitely far away and is not an edge of the world.

The curved scenes show a world with **no zoom**. That sounds odd, so here is what
it means. A hyperbolic plane has a built-in size — its heptagons are a
*particular* size, the way a metre is a particular length. You can travel closer
to any heptagon or move into its centre, but you cannot scale the world so that
every distance becomes twice as large. Making the picture bigger is a separate
act, like holding a magnifying glass over a map: it does not move you, it just
enlarges what you are already looking at.

So the two controls are:

- **Travel** — you move through the world. Tiles slide past you and new ones
  arrive from the horizon forever.
- **Frame** — you enlarge or shift the *picture* of the world, magnifying glass
  style. Use it to inspect the crowd of tiles near the horizon without leaving
  your current location.

Travelling toward the rim never gets you there. The rim is infinitely far away.
That is not the app running out of room; it is what infinity looks like when it
has been drawn on a screen.

The flat scenes have no such distinction — there, one finger pans and two fingers
zoom, exactly as you would expect.

An everyday comparison may help. Walking toward a poster changes your position;
using a magnifying glass changes only the picture reaching your eye. **Travel**
is the walk. **Frame** is the magnifying glass. They may look similar for a
moment, but only travelling carries you to a new tile.

### Touch

- **Travel:** drag with one finger.
- **Frame:** pinch with two fingers to magnify, or drag with two fingers to shift
  the picture.
- **Turn the pattern:** drag the small round handle. See below.
- **Reset:** double-tap an empty area to fly home.

### Mouse and trackpad

- **Travel:** click and drag.
- **Frame:** scroll to magnify. To shift the picture, hold **Shift** and drag —
  or drag with the middle or right button. A mouse has no second finger, so these
  stand in for the two-finger gesture.
- **Turn the pattern:** drag the round handle, or press \`[\` and \`]\`.
- **Reset:** double-click an empty area.

### The turn handle

On the curved scenes there is a small round dot sitting on the pattern. It is not
a decoration — it is a grip. Drag it around and the whole world turns beneath
you.

It is stuck to one point of the tiling, like a pin pushed into the pattern, so
when you travel it travels too. Pin it in a cell and it stays in that cell, in
the same spot within it, for as long as you keep it. If you travel far enough
that it leaves the screen, it parks at the nearest edge and grows a little arrow
pointing to where it really is.

Turning snaps to the angles that map the tiling onto itself. On \`{7,3}\`, sevenths
of a turn snap; on \`{5,4}\`, fifths. Let go near one of those and the pattern
clicks back into place, which is a satisfying way to feel what "7-fold symmetry"
actually means. \`[\` and \`]\` step by exactly one of those angles, so the keyboard
gets there too.

### Choosing what you are looking at

The **side menu** (the ☰ button, left) chooses the world, in sections. The flat
kaleidoscopes come first. Then **Tilings** lists the curved worlds: pick one and
it is shown through whichever picture you are already using. On a curved scene a
third section appears, **Projections**, listing the pictures: pick one and it
shows the tiling you are already in. Each section changes one thing and holds
the other still — its header says which — so you can compare tilings without
the picture changing, or pictures without the world changing. The flat scenes
have no Projections section because the flat plane needs no projecting: what
you see is the plane itself. Each scene has its own help page under the ? menu
explaining its tiling and, for the curved ones, the particular way its picture
distorts.

The **gear menu** (right) chooses the pattern drawn into the tiles. Four are
offered directly; \`More patterns\` holds the rest, including the line-only views
that show you the tiling's skeleton. \`Custom\` is where your own drawings live.

Two patterns are only offered where the geometry allows them, and say so when it
does not, because "there is no such colouring for this tiling" is a genuine fact
about the shape rather than a missing feature:

- **Checkerboard** needs an even number of tiles meeting at each corner. \`{5,4}\`
  has it; \`{7,3}\` cannot.
- **Panels** — the football pattern — needs the truncated form, which every
  curved scene has and the flat ones do not yet.

The names in braces are counting instructions. In \`{7,3}\`, every tile has seven
sides and three tiles meet at each corner. In \`{4,5}\`, the tiles are squares and
five meet at each corner. Try counting with the line-only \`Tile outline\` pattern
if an ornament makes the tile boundaries hard to see.

The names beginning with a star describe mirror symmetry. For example, \`*632\`
has three important rotation points: one that repeats after one-sixth of a turn,
one after one-third, and one after one-half. You do not need to memorize these
names to use the app; they are labels that let the help pages connect the
picture to standard mathematical notation.

### Drawing your own

Open \`Custom → New / manage…\` in the gear menu and you can draw straight onto the
tiling; every mark is instantly repeated everywhere the symmetry says it should
be. That has its own help page, *Drawing your own motif*, which is worth reading
first — the surface you draw on is smaller and stranger than it looks.

### Light, dark and full screen

The theme follows your system setting and can be switched in the menu. The
full-screen button on the canvas gives you the pattern and nothing else, which is
the best way to look at these.

### If the view becomes confusing

- **Dragging moves the frame instead of the world:** on touch, use one finger
  for travel and two for the frame. With a mouse, release **Shift** and use the
  left button.
- **A pattern is greyed out:** pause on its explanation. Some colourings are
  mathematically impossible on the current tiling; choosing another scene can
  make them available.
- **The turn handle is at the edge:** its pinned point is off-screen. The arrow
  shows where it is. Reset if you want to bring it home.
- **A custom drawing looks mirrored many times:** that is the normal
  kaleidoscope mode. The *Drawing your own motif* page explains how to use the
  whole tile when you want an asymmetric design.

### Sharing

The scene, the pattern, and exactly where you have travelled to all live in the
address bar. Copy the link and whoever opens it arrives at the same place in the
same world, looking the same way.

### Three guided challenges

Once the controls feel natural, try these:

1. **Find the horizon.** In the Poincaré disk, travel toward the rim for a while.
   Watch tiny tiles grow as they approach the centre while new tiny tiles take
   their place. The rim never gets closer.
2. **Compare two maps.** Keep the \`{7,3}\` tiling and switch between Poincaré and
   Klein. Which view preserves the shape of a corner? Which makes tile edges
   look straight?
3. **Test a colouring.** Try \`Checkerboard\` on \`{5,4}\` and \`{7,3}\`. Count the
   tiles around a corner and explain why alternating two colours succeeds only
   when that count is even.
`,motif:`## Drawing your own motif

You can draw straight onto the tiling, and every mark you make appears everywhere
the pattern says it should — instantly, while your finger is still moving. One
short stroke becomes hundreds of strokes marching off to the horizon.

This page explains what is actually happening, because the surface you are
drawing on is smaller and stranger than it looks, and knowing its shape is the
difference between fighting the tool and playing with it.

### Your first drawing

Open the \`{7,3}\` scene, then use the gear menu to choose
\`Custom → New / manage…\` and start a new motif. For a first attempt, leave
**Draw on the whole N-gon** turned off and choose \`None\` under **Over**. Pick a
thick brush and make one short stroke near the middle of the guide triangle.

You should see copies appear in three stages:

1. Your stroke is reflected inside one tile.
2. The completed tile repeats into its neighbours.
3. More copies continue across the whole visible world.

Try **Undo**, then draw across one guide line. The new stroke joins its mirror
instead of stopping at the line. Save the motif, close the tools, and travel
through the pattern. You have now used every basic part of the drawing system.

### The one tile that becomes all of them

A kaleidoscope does not contain a hundred patterns. It contains one, plus
mirrors. Kaleido works the same way: there is a **single master shape**, and
everything on screen is a reflected copy of it.

That master shape is smaller than you might guess. In almost every scene, it is
not the hexagon, square, or heptagon — it is one thin **triangle**, a slice of
the tile. The heptagons in \`{7,3}\` are each built from **fourteen** copies of
that triangle: seven rotations, each in two mirror-image versions.

So when you draw one stroke, fourteen copies of it appear in that heptagon alone,
and then that whole heptagon is copied across the plane.

The rectangular kaleidoscope is the exception. Its master shape is a rectangle,
because it has no diagonal mirror cutting that rectangle into triangles. The
same rule still applies: draw in one smallest region and reflections build the
rest of the plane.

### Why your marks come back reversed

The first thing everyone notices: draw a stroke near the edge of the drawing area
and *another* stroke appears, running the other way, meeting yours.

That is the mirror. The boundary of the master shape is a real mirror line of
the pattern, so anything you put near it is reflected across it, and the
reflection is part of the pattern too. It is not a bug and it is not undoable —
it is what makes the result a symmetric pattern rather than a scribble.

Two useful consequences:

- **A stroke crossing a mirror joins up with its own reflection.** Draw across the
  boundary and you get a single continuous shape spanning both sides — a V, or a
  star point. This is the main way to make shapes that look bigger than the
  triangle they were drawn in.
- **A tile can never be lopsided.** Every mark inside it is mirrored within it, so
  it always comes out balanced. If you *want* a lopsided tile, see the next
  section.

### The guide lines

While the drawing tools are open, faint lines appear showing the master shape's
edges — the mirrors. They are the grid lines of this drawing surface, except
that unlike a paper grid they are not a convenience laid over your work; they
are the thing that decides where your marks reappear.

They are scaffolding, not artwork. They vanish when you close the tools and are
never part of what you save.

The three corners of a guide triangle do not all behave alike. Each is a
different rotation point. A mark close to one corner may repeat twice around
it, while a mark near another may repeat three, five, six, or seven times,
depending on the scene. This is why moving the same small dot from one corner
to another can turn a plain ring into a many-petalled flower.

### Drawing on the whole tile instead

There is a checkbox: **Draw on the whole N-gon**.

Leave it off and you are drawing on the thin triangle, with every mark mirrored
within the tile — the kaleidoscope behaviour above.

Switch it on and the whole tile becomes yours: the heptagon, the hexagon, the
square. Now nothing is mirrored inside it. You can draw an asymmetric face, an
arrow, a letter, a lizard, and the tile keeps it exactly as you drew it. The tile
is then repeated across the plane as a unit.

One catch, and it is unavoidable: a drawing made this way is laid out in *that
tile's* own coordinates, so it means nothing on a tiling whose tile has a
different number of sides. A design made on a heptagon is not a design on a
square. Such a drawing shows up greyed out in the menu on tilings that do not
match, with the reason given, rather than being silently mangled.

### The ground underneath

Your marks are ink. Underneath them is **paper**, and the \`Over\` control chooses
what is printed on it.

\`None\` is bare paper — with it, a saved motif is *only* what you drew. Pick one of
the patterns instead and your marks sit on top of it, which is a good way to trace
a shape or to decorate a pattern rather than replace it.

The ground is stored as part of the drawing, not as a separate setting, because it
is a property of that drawing. Reopen the motif later and you get both layers back
as you left them.

### What each tool changes

- **Over** chooses the ground below your marks. Change it before or after
  drawing; your strokes stay in place.
- **Draw on the whole N-gon** chooses the drawing surface. Turning it on gives
  you one complete tile but ties the saved motif to that number of sides.
- **Paint** changes the colour of new strokes. Existing strokes keep the colour
  they had when you drew them.
- **Brush** changes the width of new strokes. A broad line often makes the
  repeated structure easier to read than many thin scribbles.
- **Undo** removes the most recent stroke. **Clear** removes all strokes in the
  current drawing.
- **Save** stores the strokes, colours, widths, ground, and drawing-surface
  choice together as one motif.

Closing the tools with unsaved changes asks whether to keep working or discard
those changes. A saved motif can later be reopened, renamed, duplicated, or
deleted from the manager. Duplicating one before a large experiment gives you a
safe version to return to.

### Watching it move

The best part is not the drawing, it is the travelling afterwards.

Drag the world and every copy of your stroke moves at once, and they do not move
rigidly — near the horizon they crowd and shrink, tiles rotate as they pass, and
the same shape you drew shows up at a hundred sizes and angles simultaneously. In
the curved scenes, taking a lap around a tile and coming back leaves the pattern
slightly turned. To see why, imagine carrying an arrow while keeping it pointed
"straight ahead" at every step around a loop. On a curved surface, the arrow can
return at a different angle even though you never deliberately turned it. This
effect is called **parallel transport**, and the leftover turn records the curvature
inside the loop.

None of this is animation in the film sense — there is no timeline and nothing is
being played back. It is your drawing, recalculated from the geometric rule for every
pixel and every frame.

Switching scenes while a drawing is loaded is worth trying too. The same strokes
read into a hexagon, a square, or a curved heptagon, and the *same* marks make
quite different patterns depending on the world they land in.

This works most freely in triangle mode because the master triangle is
described by its three special corners rather than by one particular polygon.
Whole-tile mode is more restrictive: a seven-sided drawing can move between
scenes built from heptagons, but it cannot sensibly become a square without
changing what you drew.

### Saving, and the limits

- Up to **eight** saved motifs. That is a deliberate ceiling, not a technical one:
  a menu you scroll is worse than a menu you choose from.
- Drawings are stored as the **strokes themselves**, not as pictures, so they stay
  crisp at any size and re-draw correctly in any scene. Very dense scribbling can
  get large enough to warn you about; if it does, \`Clear\` and a bolder brush will
  usually say the same thing in fewer strokes.
- If the app stops while you have unsaved marks — a closed tab, a phone that went
  to sleep — the drawing is kept in a recovery slot and offered back the next time
  you open the manager. It is deleted once you take it, and never thrown away
  without asking.

### A few things worth trying

- One stroke, straight across a mirror line, in the thickest brush. The simplest
  possible mark makes a surprisingly ornate rosette.
- A small circle in the *corner* of the triangle: it lands on a rotation point and
  becomes a many-petalled flower.
- Turn on \`Draw on the whole N-gon\` and put a single dot off-centre. Now travel.
  The asymmetry is what lets you see the tiling actually turning.
- Draw something on \`{7,3}\`, then switch to \`{3,7}\` — the same design in a world
  where triangles meet seven to a corner.

### Design ideas

You do not need drawing skill to make a strong pattern. Symmetry does most of
the work.

- **Build from dots.** Place one dot near each corner of the guide triangle.
  Give the dots different colours and compare the rings they create.
- **Make lines cross mirrors.** A line that ends at a guide edge often looks
  accidental. Crossing the edge makes it join its reflected half cleanly.
- **Use empty space.** Leave most of the triangle blank and let one bold mark
  repeat. The gaps become part of the design.
- **Trace, then simplify.** Choose a ground, trace one important curve, then
  switch the ground to \`None\`. You keep the structure without the original
  ornament.
- **Compare symmetry levels.** Carry one simple motif from the rectangular
  kaleidoscope to the square and hexagonal ones. More symmetry makes the same
  mark less recognisable and more flower-like.
`,essay:`## Tilings: a short history of covering the plane

Look down at a tiled floor. Look at a brick wall, a honeycomb, a chessboard, the
scales on a fish, a chain-link fence. Somebody — or something — has covered a
whole surface with copies of a few shapes, with no gaps and no overlaps. That is
a **tiling**, or a **tessellation**, and people have been making them for at
least five thousand years.

What makes tilings interesting is that they are not a free-for-all. You cannot
tile a floor with regular pentagons, no matter how clever you are. There are
exactly three ways to tile a flat floor with one regular shape, exactly
seventeen kinds of repeating flat pattern, and — if you are willing to leave the
flat floor behind — infinitely many more worlds where the rules change. This
essay is about how people worked all that out.

### Why only three regular tilings

Start with the simplest question. Suppose you want to cover a floor with copies
of one regular shape — all sides the same length, all corners the same angle.
Which shapes work?

The answer comes from adding up angles at a corner. Wherever tiles meet, their
corners have to fill up a complete turn, which is 360°. An equilateral triangle
has 60° corners, and 6 × 60 = 360, so six triangles fit around a point. A square
has 90° corners, and four of them make 360. A regular hexagon has 120° corners,
and three make 360.

Now try a regular pentagon. Its corners are 108°. Three of them give 324° — a
gap. Four give 432° — an overlap. Nothing fits, so regular pentagons cannot
tile a flat floor. Go bigger and it gets worse: a regular heptagon has corners
of about 128.6°, and no whole number of those makes 360 either.

Here is the part that makes the proof complete. A regular shape with \`n\` sides
has an inside angle of

    180° × (n − 2) ÷ n

For six sides, that gives 120°, and three fit. For more than six sides, each
angle is greater than 120°, so even three overlap. Fewer than three polygons
cannot surround a point. We have now ruled out every regular polygon after the
hexagon, not just the pentagon and heptagon examples.

So there are **exactly three** regular tilings of the flat plane: triangles,
squares, hexagons. Not "three that anyone has found" — three, provably, and the
proof is the angle arithmetic above. This is the first taste of something that
runs through the whole subject: tilings are governed by counting, and the
counting is strict.

Bees, incidentally, use the hexagon. When a flat surface is divided into cells
of equal area, the honeycomb arrangement needs the least total wall. That
statement was conjectured for two thousand years and finally proved in 1999 by
Thomas Hales.

### A compact name for every regular tiling

Writing "regular heptagons, with three meeting at every corner" soon gets
awkward, so mathematicians use a two-number name called a **Schläfli symbol**:
\`{p,q}\`.

- \`p\` is the number of sides on each tile.
- \`q\` is the number of tiles that meet at each corner.

The order matters. \`{6,3}\` is the honeycomb: six-sided tiles, three at a
corner. \`{3,6}\` uses triangles, six at a corner. These are different tilings,
even though they use the same two numbers. They are partners called **duals**:
put a dot at the centre of every tile in one pattern and connect dots in
neighbouring tiles, and you draw the other pattern.

This notation lets one question cover every regular tiling. Does \`{p,q}\` live
on a sphere, on a flat plane, or in the hyperbolic plane? Near the end of this
essay, one short calculation will answer all three cases.

Regular tilings are only the beginning. If you allow more than one kind of
regular polygon, the flat plane has eight **semiregular** tilings in which every
corner has the same arrangement. The familiar pattern of octagons with small
squares between them is one. If you allow irregular tiles, curved edges, or
corners with different arrangements, the possibilities grow enormously.

### Symmetry: the real subject

Here is the shift in thinking that turned tilings from decoration into
mathematics. Instead of asking *what shapes are in the pattern*, ask *what can
you do to the pattern that leaves it looking exactly the same?*

Slide a brick wall over by one brick and it looks unchanged. That slide is a
**symmetry** of the wall. Spin a chessboard a quarter turn about the centre of
any square and it looks unchanged: a **rotation**. Hold a mirror along the edge
of a row of tiles and the reflection matches what was already there: a
**reflection**. There is a fourth, sneakier one — slide *and* flip together,
like the trail of footprints you leave walking in snow — called a **glide
reflection**.

Collect every motion that leaves a pattern unchanged, and you have that
pattern's **symmetry group**. Two patterns that look completely different can
have the same group, and two patterns that look similar can have different
groups. The group is the pattern's skeleton.

Groups compose: do one symmetry, then another, and the result is a symmetry
too. That simple fact is what makes them mathematics rather than a list.

### Seventeen wallpapers

If a flat pattern repeats in two different directions — like wallpaper, not like
a stripe — then its symmetry group has to be one of exactly **seventeen**. Not
sixteen, not eighteen. Any repeating flat pattern you have ever seen, or ever
will see, belongs to one of seventeen families.

The Russian crystallographer **Evgraf Fedorov** proved the classification in
1891. **George Pólya** independently derived the seventeen in 1924, the same
year **Paul Niggli** published another early account. Their work helped the
result reach a wide audience. Crystallographers cared because the same
reasoning in three dimensions tells you how atoms can stack, and there the
answer is 230.

Long before any of that, artisans had found most of the seventeen by hand.
Egyptian, Chinese, Roman and especially Islamic craftsmen filled walls with
patterns of extraordinary sophistication; the tilework of the **Alhambra** in
Granada, built in the 1300s, is the most famous example. It is often said that
all seventeen groups appear there. Careful counts by later mathematicians find
fewer — but many of the seventeen are unmistakably present, discovered by eye
and by tradition, five centuries before anyone could prove the list was
complete.

The Dutch artist **M. C. Escher** visited the Alhambra in 1922 and again in
1936, copied the patterns obsessively, and spent the rest of his life turning
them into interlocking fish, birds and lizards. He worked out much of the
underlying theory for himself, in his own private notation, without the formal
mathematics.

### Reading a symmetry group's name

Mathematicians eventually needed short names for the seventeen. The one this app
uses is **orbifold notation**, invented by **John Conway**, and it is worth
learning because you can read it off a picture.

Two symbols do most of the work. A star \`*\` means "there are mirror lines".
Digits after the star describe corners where two boundary mirrors cross. A
digit \`n\` means that the angle between those mirrors is \`180° ÷ n\`. Reflecting
in both mirrors, one after the other, produces a rotation of \`360° ÷ n\`, so the
digit also tells you the order of rotation at that point.

- \`*632\` is the hexagonal kaleidoscope. Mirrors cross at a 6-fold corner, a
  3-fold corner and a 2-fold corner. It is the richest symmetry a flat pattern
  can have.
- \`*442\` is the square kaleidoscope: two 4-fold corners and one 2-fold corner.
  The bathroom-floor pattern.
- \`*2222\` is a plain rectangle of mirrors — four corners, each a half turn.

For example, the \`6\` in \`*632\` describes a 30° corner because \`180 ÷ 6 = 30\`.
Twelve copies of that narrow corner fit around a point, alternately reflected,
while the finished pattern repeats after a 60° rotation. The notation is
compact, but it records a complete recipe for rebuilding the pattern from one
small mirrored region.

Conway also found a beautiful way to *prove* the list of seventeen using this
notation. Each symbol is given a price, the total for any legal pattern must
come to exactly 2, and enumerating the ways to spend exactly 2 gives seventeen
possibilities and no more. He called it the **magic theorem**.

### Patterns that never repeat

For a long time everyone assumed a tiling made from a few shapes would
eventually have to repeat. In the 1960s and 70s that assumption fell apart.

**Roger Penrose** found, in 1974, a pair of simple four-sided tiles that cover
the plane in a pattern that never repeats — you can slide it as far as you like
and it never lines up with itself again. Yet it is not random: it is full of
five-fold rosettes, and any patch you find somewhere appears infinitely often
elsewhere. Order without repetition.

Then in 1982 **Dan Shechtman** found real crystals doing this, with the
"impossible" five-fold symmetry showing up in his diffraction pictures. His
result was rejected and ridiculed for years — he was asked to leave his research
group over it. He received the Nobel Prize in Chemistry for it in 2011.

The question that stayed open was whether a *single* shape could do it. In March
2023, **David Smith**, an amateur working at his kitchen table, found one: a
thirteen-sided shape now called the **hat**. With Joseph Myers, Craig Kaplan and
Chaim Goodman-Strauss he proved it works. Later the same year the team found the
**spectre**, which does it without needing mirror-image copies. A problem open
for sixty years was cracked, and it started with someone cutting out paper
shapes.

### Leaving the flat floor

Now back to the pentagon that would not fit, and the heptagon that would not
either. They fail because the corner angles do not add to 360°. But *why* must
they add to 360°?

Because the floor is flat. That is the only reason.

Take a ball instead. Draw a triangle on it with three right angles — start at
the north pole, go down to the equator, along a quarter of the equator, and back
up. Its angles add to 270°, not 180°. On a sphere, triangles are fat: their
angles add to *more* than 180°, and shapes fit together differently. This is why
a football can be stitched from pentagons and hexagons even though pentagons
cannot tile a floor.

Now imagine bending the other way — a surface curved like a saddle or a Pringle
at *every* point, in every direction, forever. On such a surface triangles are
thin: their angles add up to *less* than 180°. There is more room around every
point than a flat plane has. And with more room, the shapes that did not fit
suddenly do.

The word "surface" can be misleading here. A saddle you can hold is only a
small patch, and it sits inside ordinary three-dimensional space. The
hyperbolic plane is the complete geometry obtained by continuing that negative
curvature everywhere. Mathematicians do not need to bend it inside a larger
room. People living in it could measure distances and angles entirely from
within, just as we can measure the Earth's curved surface without looking at it
from space.

This is the **hyperbolic plane**, and on it there are infinitely many regular
tilings. Seven heptagons around a point? Fine. Five squares? Fine. Any pair of
numbers works as long as there is enough room, which turns out to mean a single
clean condition: writing \`{p,q}\` for "p-sided tiles, q of them around each
corner", the tiling is hyperbolic exactly when

    (p − 2) × (q − 2) > 4

The test comes from the flat angle formula above. On a flat plane, \`q\` copies of
the polygon's inside angle must total 360°:

    q × 180° × (p − 2) ÷ p = 360°

Cancel 180°, rearrange, and you get \`(p − 2) × (q − 2) = 4\`. Hyperbolic
polygons have smaller angle sums than flat ones, so cases above 4 gain enough
room to fit. Spherical polygons have larger angle sums, giving the cases below
4.

Check it: \`{6,3}\`, the honeycomb, gives 4 × 1 = 4 — exactly flat. \`{4,4}\`, the
chessboard, gives 2 × 2 = 4 — flat again. \`{3,6}\`, the triangle tiling, also 4.
Those three are the three regular flat tilings from the beginning of this essay,
and they are precisely the cases where the product equals 4. Anything less than
4 lives on the sphere; anything more lives in hyperbolic space. One inequality
sorts every regular tiling into one of three worlds.

### Two hundred years of trouble

The hyperbolic plane was not discovered by someone hunting tilings. It came out
of a two-thousand-year argument about a single line in Euclid's *Elements*.

Euclid's fifth postulate says, in effect, that through a point beside a line
there is exactly one parallel. It is wordier and less obvious than his other
four, and for twenty centuries mathematicians tried to prove it from them.
Everyone failed. Some published proofs that turned out to assume what they were
proving.

In the 1820s and 30s, **Nikolai Lobachevsky** in Russia and **János Bolyai** in
Hungary independently did the audacious thing: they assumed the postulate was
*false* — many parallels through the point — and worked out the consequences,
expecting a contradiction. None came. Instead a whole new geometry unfolded,
consistent and strange. **Carl Friedrich Gauss** had reached the same place
years earlier but published nothing, fearing the controversy.

Bolyai's father, himself a mathematician, had begged him to leave the problem
alone: "I entreat you, leave the science of parallels alone... it may take all
your time, and deprive you of your health, your peace of mind and your
happiness in life." His son took no notice, and wrote to him instead: "Out of
nothing I have created a strange new world."

That world is where \`{7,3}\` lives.

### Drawing an infinite world on a finite screen

The hyperbolic plane has a practical problem: it does not fit. It has too much
room. You cannot lay it flat on a page without distorting it, in the same way
you cannot flatten an orange peel — which is why every world map lies about
something.

So mathematicians built **models**: honest, complete pictures of the hyperbolic
plane that each tell one particular kind of lie. **Eugenio Beltrami** built the
first ones in 1868, and **Felix Klein** and **Henri Poincaré** developed them
further; their names are on the two you meet first.

The **Poincaré disk** squeezes the entire infinite plane inside a circle. The
rim is infinitely far away — it is not an edge you can reach, it is the horizon.
Tiles look smaller and smaller as they approach it, but that is the picture
lying about size, not the tiles shrinking. Every one of them is the same size
as every other. What the disk gets *right* is angles: every angle in the picture
is the true angle, which is why the patterns look so convincing.

This trade-off is unavoidable. A map of Earth can preserve directions, areas,
distances, or straight routes, but not all of them at once. Pictures of the
hyperbolic plane face the same problem. The Poincaré disk preserves angles but
curves most straight lines. The Klein disk makes straight lines look straight
but changes angles. Neither picture is wrong; each is designed to answer a
different question.

Escher met this picture in 1958, when the geometer **H. S. M. Coxeter** sent him
a paper containing a hyperbolic tiling diagram. Escher had been struggling for
years with how to show infinity in a finite frame, and here was the answer,
handed to him in a journal offprint. He made the four *Circle Limit* prints from
it. The two men corresponded for years afterwards; Escher once complained,
affectionately, that Coxeter's mathematics was "hocus-pocus" to him, and Coxeter
later wrote papers analysing exactly how mathematically precise Escher's
construction had been.

### What this app is doing

Everything above is what Kaleido lets you handle directly.

The flat scenes are three of the seventeen wallpaper groups. The curved scenes
are hyperbolic \`{p,q}\` tilings, shown through six different models — offered as
seven windows, since the band is worth having both level and upright — each an
honest picture of the same world, each lying about something different, and you
can switch between them and watch the same tiling re-flow.

The rendering does not build the tiling tile by tile. There is no list of
polygons anywhere in this app. Instead, for **every pixel on your screen**, it
asks a question: *if I follow the pattern's mirrors backwards from here, which
part of the single master tile do I land on?* Then it draws whatever is at that
spot. Every pixel answers independently, which is why the app does not need a
stored patch of tiles that eventually runs out. This is also how it keeps
producing new tiles as they crowd toward the rim.

The mathematical rule describes an unbounded pattern rather than one large
saved picture. The computer still uses finite-precision numbers, so at extreme
views it has ordinary numerical limits; infinity belongs to the rule, not to
the machine.

### Four experiments to try

Reading gives you the vocabulary, but the quickest way to understand these
ideas is to test them.

1. Open the flat hexagonal scene and choose a line-only pattern. Find the
   6-fold, 3-fold and 2-fold points named by \`*632\`. Turn the pattern and watch
   how far it moves before looking unchanged.
2. Compare \`{7,3}\` with \`{3,7}\`. In the first, count the sides of one tile and
   the tiles at one corner. In the second, count again. The numbers exchange
   places because the two tilings are duals.
3. Keep \`{7,3}\` and switch between the Poincaré and Klein disks. Follow the same
   tile edge. In one view it bows but keeps its angles; in the other it stays
   straight while the tile changes shape.
4. Draw one short stroke across a guide line. Its reflected copies should join
   it. Move the stroke toward a corner and see how the order of rotation changes
   the flower it creates.

Each experiment asks you to compare something that changes with something that
does not. That habit — looking for what a transformation preserves — is the
central habit of geometry.

### Why any of this matters

Symmetry groups turned out to be the language of crystals, and crystallography
built modern chemistry, materials science and molecular biology — the structure
of DNA was worked out with crucial evidence from diffraction photographs.
Hyperbolic geometry, invented by people trying to settle an argument about
parallel lines, now appears in relativity, network science, and the study of
curved surfaces. Lettuce leaves and some corals even grow with similar
negative-curvature patterns, crinkling because they cannot lie flat.

And none of that is why people make tilings. The craftsmen of the Alhambra were
not doing crystallography. They were covering a wall beautifully, and they found
their way to deep mathematics by paying close attention to what looked right.
That is still a reasonable way to explore this app.
`,about:`## Infinite Tilings — flat and curved tilings on one canvas

Infinite Tilings (ιKaleido) is a kaleidoscope you can walk around inside. It draws
repeating patterns the way a kaleidoscope makes them — one shape, reflected in
mirrors, forever — and lets you travel through the result, change the mirrors, and
draw your own shape into them.

Half the app is the flat patterns you already know from tiled floors and wallpaper.
The other half is the curved worlds where the rules are different: places where
seven-sided tiles meet three to a corner, or five squares fit around a point,
neither of which can happen on any flat surface anywhere.

You do not need to know advanced geometry before you begin. If you can count
sides, add angles, and compare patterns, you can investigate the main ideas.
The notation in scene names is explained when it appears, and the pictures are
meant to be tested by dragging, turning, and drawing rather than accepted on
faith.

### What you can explore

- **Flat kaleidoscopes** — three of the seventeen symmetry groups that any repeating
  flat pattern must belong to, from the plainest rectangle of mirrors to the richest
  symmetry a flat plane allows.
- **Curved tilings** — regular \`{p,q}\` tilings of the hyperbolic plane: heptagons
  three to a corner, pentagons four, squares five, octagons three, and more.
- **Seven different pictures of the same curved world** — the Poincaré disk, the Klein
  disk, the half-plane, the band both level and upright, the square and one fitted to
  your window. Each is a complete and honest picture; each distorts something
  different. Switch between them and watch the same tiling re-flow.
- **A gallery of patterns** to fill the tiles with, from ornamental rosettes to the
  bare line-work that shows a tiling's skeleton — including a checkerboard and a
  football pattern, each offered only on the tilings whose geometry permits it.
- **Your own drawings.** Draw one stroke and it appears everywhere the symmetry says
  it should, instantly, as you draw. Save your motifs and carry them between worlds.

### Travelling, not zooming

The curved scenes have no zoom, because a curved world has a built-in size — its
heptagons are a *particular* size. You can travel closer to one, but you cannot scale
every distance in the world at once. So the app separates two things other viewers
often run together: **travelling** through the world and **framing** its picture. One
finger travels; two fingers frame. Travel toward the horizon and you never arrive,
because the horizon is infinitely far away and there are always more tiles.

### Every pixel worked out from scratch

There is no list of polygons anywhere in this app. For every pixel on your screen, it
follows the pattern's mirrors backwards to find which part of the single master tile
lands there, and draws that. Every pixel answers independently.

That is why the app does not depend on a large saved patch that eventually runs out,
and why it can keep producing tiles toward the horizon. The mathematical rule is
unbounded, although the computer still has the usual limits of finite-precision
numbers.

### Learning as you go

Every scene has its own page in the help menu explaining what its tiling is, why it
cannot exist on a flat plane if it cannot, and how its particular picture distorts the
world. There is a longer essay on where tilings came from — from the Alhambra to
Escher to the aperiodic monotile found in 2023. It introduces specialist terms as
they appear and uses only high-school algebra and geometry.

### A good place to begin

Start with the flat hexagonal kaleidoscope and choose a line-only pattern so
that its mirrors are easy to see. Then open \`{7,3}\` in the Poincaré disk. Count
seven sides on one tile and three tiles at one corner. The first scene shows the
most symmetry possible on a flat plane; the second shows the smallest famous
step into hyperbolic geometry.

After that, keep \`{7,3}\` and change only the projection — the **Projections**
section of the side menu does exactly this, holding the tiling still while the
picture changes. You will see the same world drawn seven ways. Finally, create a
custom motif with one short stroke and watch the symmetry turn it into a
complete design.

### Who it is for

- **Students** can use the app to make angle sums, transformations, symmetry,
  and curved geometry visible.
- **Teachers** can compare models live instead of relying on separate static
  diagrams.
- **Artists and designers** can treat the mathematics as a pattern-making tool
  without first learning the formal theory.
- **Curious explorers** can simply travel, draw, and ask why the world behaves
  as it does.

The help menu supports both approaches: open *How to Explore Interactively* for
the controls, *Drawing Your Own Motif* for the art tools, the current scene page
for the mathematics in front of you, or *A Short History of Tilings* for the
larger story.

### Features

- Explore flat kaleidoscopes and curved hyperbolic tilings on one canvas.
- Travel through a tiling that never runs out — the horizon is infinitely far away.
- Switch between seven different pictures of the same curved world.
- Fill the tiles with a gallery of patterns, from ornaments to bare line-work.
- Draw your own motif and watch every mark repeat instantly across the plane.
- Save your drawings and carry them between flat and curved worlds.
- Turn the whole pattern with a handle pinned into it, snapping to its own symmetry.
- Read a per-scene explanation of each tiling and whether it needs curvature.
- Share your exact view, tiling and pattern with a single link.
- Enjoy a clean interface with light and dark modes.

### What's next

#### Short\\-term

- All seventeen wallpaper groups, including the ones built from rotations alone.
- A parameter grid for choosing any {p,q}, with the flat boundary marked on it.
- Image export at wallpaper and print resolutions.
- Per-cell colouring, so neighbouring cells can differ rather than only alternate.

#### Long\\-term

- Photo and vector motifs, with Escher-style deformation of the tile's edges.
- The full Wythoff family — truncated, rectified and dual forms from one control.
- Spherical tilings, completing the set of three geometries.
- Aperiodic tilings, including Penrose rhombs and the 2023 monotiles.
`};export{e as helpTopicBodies};
