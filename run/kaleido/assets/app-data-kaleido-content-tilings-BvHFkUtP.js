const e=`### {3,6} — triangles, six to a corner

The first of the three regular flat tilings, and the one every other scene in this app
is secretly built from.

Six equilateral triangles meet at every corner: 6 × 60° = 360°, exactly a turn. It is
the tiling with the most tiles around a point that a flat surface allows, and the
smallest tile of the three — which is why \`{3,7}\`, one triangle further, is the
gentlest possible step off the flat plane.

Its symmetry group is \`p6m\`, written \`*632\`, the richest a flat repeating pattern can
have. That group is shared with the hexagonal tiling \`{6,3}\`, and the sharing is not a
coincidence: the two are **duals**. Put a dot at the centre of every triangle here and
join dots in neighbouring triangles, and you draw hexagons. Do it again to those
hexagons and you get the triangles back.

So this scene and the hexagonal one are the same mirrors, the same fundamental
triangle, the same fold — differing in one thing only: **where a tile ends**. Switch
between them with any pattern chosen and watch what moves. The fine mirror net does not
budge; the heavy lines jump from triangles to hexagons and back. That is worth seeing
once, because it is the clearest demonstration in the app that a symmetry group and a
tiling are different things.

Only two patterns cannot tell the pair apart, and for good reasons: \`Mirror outline\`
draws every mirror and nothing else, which is the same set of lines in both, and \`None\`
draws no pattern at all.

The triangle here is also the shape of the app's own machinery. \`p6m\`'s fundamental
domain — the master shape a drawing is made on — is a 30-60-90 triangle, and six of
those make one of these tiles: three rotations, each in two mirror-image copies. The
faint guide lines you see while drawing are its edges.

**Drawing on a triangle.** \`Draw on the whole 3-gon\` works here, and it is the smallest
drawing surface in the app — worth trying for that reason alone, since a mark has almost
nowhere to hide. Getting it to work took a little geometry: the fold reduces a point to
the nearest lattice point, and in this group those are the *hexagon* centres, so the app
had to be taught to re-centre on the nearest 3-fold point instead. Neighbouring triangles
point opposite ways, so half of them are turned through 180° before your drawing is laid
down; without that, alternate tiles would show it upside down.

**Try it:** count the triangles meeting at one corner — six. Then open \`{6,3}\` and
count the hexagons at one corner — three. The two numbers have swapped places, which is
what duality does, and the picture behind them never changed.
`,n=`### {3,7} — triangles, seven around every corner

This is \`{7,3}\` turned inside out.

Take the heptagon tiling, put a dot at the centre of every heptagon, and join dots
whose heptagons share an edge. You get triangles — and because three heptagons met at
each corner, the triangles come seven around each dot. Do the same operation to this
tiling and you get the heptagons back. The two are **duals**: same symmetry, opposite
roles for tiles and corners.

Check the test: \`(3 − 2) × (7 − 2)\` = 1 × 5 = 5, more than 4, hyperbolic. The same
5 as \`{7,3}\`, which is the arithmetic telling you they are two views of one
structure. They even share a symmetry group, \`*732\`.

Seven equilateral triangles around a point is impossible on a flat floor — six is
exactly right there, which is one of the three flat tilings. Seven needs the extra
room, and in fact this tiling has a claim to being the *smallest* step off the flat
plane: it is six triangles plus one.

Watch the corners rather than the tiles here. Every vertex is a seven-pointed star of
triangles, and once you notice them the picture stops looking like triangles and
starts looking like a field of seven-pointed flowers.

The two tilings behave differently under drawing, too. A \`{7,3}\` heptagon is built
from fourteen copies of the master triangle; a \`{3,7}\` triangle from only six. Marks
you make here repeat less within a tile and more across tiles.

**Try it:** switch back and forth between \`{7,3}\` and \`{3,7}\` with the Tile
outline pattern. The tile centres in one scene become the meeting points in the
other.
`,t=`### {3,8} — triangles, eight around every vertex

One more triangle at every vertex than \`{3,7}\`, and that single extra copy is worth
looking at closely, because it is the smallest change you can make to a tiling.

Six equilateral triangles fit exactly around a point on a flat floor: 6 × 60° = 360°.
Seven need extra room, which is \`{3,7}\`. Eight need more room still, and that is this
scene. Nothing else about the recipe changed — same shape, same rule, one more copy.

The test is \`(3 − 2) × (8 − 2)\` = 1 × 6 = 6, more than 4, so the tiling is hyperbolic.
The product classifies the tiling; it is not a measurement of curvature. Every
hyperbolic scene in the app uses the same standard curvature. What the extra copy buys
is room, and the room is paid for by the corner angle: eight equal corners must fill
360°, so each triangle's corners are 45° rather than the 60° of a flat triangle.

Its symmetry is \`*832\`.

Because eight is even, the tiles here can be **two-coloured** like a chessboard, which
\`{3,7}\` cannot manage with its seven. It is also the dual of \`{8,3}\`: put a dot at the
centre of every octagon there, join dots in neighbouring octagons, and you draw this.

**Try it:** open \`{3,7}\` and count the triangles around one vertex, then open this
scene and count again. Then look at the size of one triangle in each. The tiles here are
larger, because a 45° corner takes more of the plane than a 51.4° one.
`,a=`### {4,4} — squares, four to a corner

This is the bathroom floor, and the graph paper, and the chessboard — the pattern
most people picture when they hear the word "tiling". Four squares meet at every
corner: 4 × 90° = 360°, exactly a turn, which is why it works and why nothing about
it feels remarkable until you try the same thing with pentagons.

It is the second of the three regular flat tilings, and the only one that is its own
dual — put a dot in each square, join neighbours, and you get squares again.

Its full symmetry is more than it first appears. There are mirrors along both edges
of every square, *and* along both diagonals, which cuts each square into eight
identical right triangles. Those eight are the pattern's whole content; everything
else is reflections.

Its name is \`*442\`:

- two different **4**-fold corners — the centre of each square and the point where
  four squares meet — each bringing the pattern back every quarter turn;
- a **2**-fold corner at the middle of each edge, a half turn.

Two 4-fold corners of *different* kinds is the interesting part. Rotating about a
square's centre and rotating about a shared vertex are different symmetries that
happen to have the same order, and the notation records both.

The master triangle here has angles of 45°, 45° and 90°. Fold a square of paper in
half, in half again, and then along the diagonal, and you are holding it.

**Try it:** compare this scene with the rectangular kaleidoscope. A diagonal mirror
is present here but missing there. Draw a letter or arrow and watch what that one
extra mirror does to it.
`,o=`### {4,5} — squares, five to a corner

The most disorienting tiling in the app, because everything in the picture is a
*square* and squares are supposed to be well behaved.

Four squares around a point make a perfect flat corner — 4 × 90° = 360°, the
chessboard. So five squares around a point needs a whole extra right angle of room
per corner, which a flat plane cannot supply and this one can.

The test: \`(4 − 2) × (5 − 2)\` = 2 × 3 = 6, more than 4. Hyperbolic. And note it is
the same 6 as \`{5,4}\`, its dual — pentagons four to a corner, squares five to a
corner, one structure seen two ways.

Its symmetry is \`*542\`, shared with \`{5,4}\` for the same reason.

The "squares" are worth staring at. More precisely, they are **regular hyperbolic
quadrilaterals**: four equal sides and four equal angles. The \`{p,q}\` naming
tradition calls them squares because they have four sides, even though their corners
are 72°, not the 90° required of a square in flat high-school geometry. Nothing here
is bent or cheating. A quadrilateral's angles do not have to total 360° in a curved
plane.

The **Panels** pattern cuts every corner off. Each square becomes an octagon, and a
new pentagon fills the space around every old corner. This is called a **truncation**:
it changes one regular tiling into a tiling made from two kinds of regular shape.

**Try it:** switch between Tile outline and Panels. Follow one old square corner and
identify the new pentagon that replaces it.
`,r=`### {4,6} — squares, six to a corner

Four squares meet perfectly on a flat floor. Here six do, which means every corner has
been given half again as much room as a flat corner has.

A flat square's corners are 90°, and 4 × 90° = 360° exactly — the chessboard, and the
reason graph paper works. Squeezing six squares around one point on a flat surface
would need 540°, half a turn too much. With the extra room of a curved plane, six fit.

The test is \`(4 − 2) × (6 − 2)\` = 2 × 4 = 8, more than 4, so the tiling is hyperbolic.
The product classifies the tiling; it is not a measurement of curvature. Every
hyperbolic scene in the app uses the same standard curvature. The corner angle records
the trade: six equal corners filling 360° means 60° each, so the squares here have 60°
corners rather than 90°.

Its symmetry is \`*642\`.

A four-sided tile with 60° corners is worth pausing on. It has four equal sides and four
equal angles, so it is a genuine regular quadrilateral by every rule of its own
geometry — and its angles total 240°, not 360°. Tradition still calls it a square. In a
curved plane, "four right angles" and "four equal angles" are different requirements,
and only the second one survives.

Both counts here are even — six tiles at a corner, four sides on a tile — so this scene
supports the **Checkerboard** pattern, and the truncation used by **Panels** turns every
square into an octagon with a hexagon at each old corner.

**Try it:** choose \`Tile outline\` and follow one tile's four sides all the way round.
Then count the tiles meeting at a corner. Four sides, six neighbours at each point: the
two numbers that name the scene.
`,s=`### {5,4} — pentagons, four to a corner

Pentagons are the shape that famously refuses to tile a flat floor. Here they do it
without effort.

A regular pentagon has 108° corners. Three make 324° — a gap you cannot close. Four
make 432° — a serious overlap. On a flat surface there is no answer. Give the surface
some curvature and four pentagons meet perfectly.

The test is \`(5 − 2) × (4 − 2)\` = 3 × 2 = 6, more than 4, so the tiling is
hyperbolic. The product classifies the tiling; it is not a measurement of curvature.
Every hyperbolic scene in the app uses the same standard curvature. Here, four equal
corners must fill 360°, so each hyperbolic pentagon has 90° corners rather than the
108° corners of a flat regular pentagon.

Its symmetry is \`*542\`.

This tiling can do something \`{7,3}\` cannot: its tiles can be **two-coloured** like a
chessboard, with no two neighbours sharing a colour. That works whenever an *even*
number of tiles meets at each corner, and here four do. At \`{7,3}\` three meet, an
odd number, and going around a corner you would have to change colour an odd number
of times and end up back where you started with the wrong colour — so no such
colouring exists there at all. Try the \`Checkerboard\` pattern in the gear menu on both
and you can watch the difference.

**Try it:** walk around one corner while alternating two colours in your head. Four
steps return you to the starting colour; three steps return you to the opposite one.
That simple odd-or-even test explains the menu.
`,i=`### {5,5} — pentagons, five to a corner

The only scene here that is its own partner.

Every regular tiling has a **dual**: put a dot at the centre of each tile, join dots
whose tiles share an edge, and you get another regular tiling. The dual of \`{p,q}\` is
always \`{q,p}\` — so \`{7,3}\` pairs with \`{3,7}\`, and \`{5,4}\` with \`{4,5}\`. When \`p\` and
\`q\` are the same number, the tiling pairs with *itself*. Draw the dots, join them, and
you have drawn \`{5,5}\` again, rotated.

A flat pentagon has 108° corners, so three leave a gap and four overlap. Five is far
past what a flat surface could hold — 540°, a full extra half turn.

The test is \`(5 − 2) × (5 − 2)\` = 3 × 3 = 9, more than 4, so the tiling is hyperbolic.
The product classifies the tiling; it is not a measurement of curvature. Every
hyperbolic scene in the app uses the same standard curvature. Five equal corners filling
360° gives 72° corners, two thirds of a flat pentagon's 108°.

Its symmetry is \`*552\`.

Five is odd, in both places. So the tiles here cannot be two-coloured like a chessboard
— going around a corner in five steps and alternating colours returns you to the wrong
colour — and the **Checkerboard** pattern is greyed out for that reason. The truncation
behind **Panels** works, as it does everywhere: each pentagon becomes a ten-sided tile
with a new pentagon at every old corner.

**Try it:** pick a tile and place a dot at its centre in your head, then dots in each of
its five neighbours. Joining those dots outlines a pentagon with five neighbours — the
same tiling you started from. That is what self-dual means.
`,h=`### {6,3} — hexagons, three to a corner

The honeycomb: three regular hexagons meet at every corner, 3 × 120° = 360° exactly.
One of only three ways to tile a flat floor with a single regular shape.

Its symmetry group, \`p6m\`, is also the richest a flat repeating pattern can have —
nothing on a flat surface has more. That group is shared with the triangular tiling
\`{3,6}\`, which is this tiling's **dual**: put a dot at the centre of every hexagon
here, join dots in neighbouring hexagons, and you have drawn it. Same mirrors, same
fundamental triangle, a different answer to where one tile ends. Switch between the
two scenes and watch the heavy lines move from hexagons to triangles while the fine
mirror net beneath stays exactly where it was.

Look at any hexagon in the picture. Mirror lines pass through its centre like the
spokes of a wheel, cutting it into twelve identical triangles. Every one of those
triangles is a reflection of its neighbours, and the whole infinite pattern is
built from a single one of them.

Its name in orbifold notation is \`*632\`. The star means "this pattern has mirror
lines", and the three digits are the three kinds of corner where mirrors cross:

- a **6**-fold corner at the centre of each hexagon — the two edges of the master
  triangle meet at 30°, and the pattern comes back every sixth of a turn;
- a **3**-fold corner where three hexagons touch — a third of a turn;
- a **2**-fold corner at the middle of each hexagon edge — a half turn.

Those three numbers are not a coincidence. A triangle with corner angles of 30°, 60°
and 90° tiles the plane by reflection and has exactly those three rotation orders.
Twelve copies make one hexagon.

Honeybees build in hexagons, and for a good reason. If a flat surface must be split
into equal-area cells, a honeycomb uses the least total wall. People guessed this
for two thousand years. It was finally proved in 1999.

**Try it:** choose the line-only pattern and find all three kinds of special point.
Turn the pattern around each one. A sixth, a third, and a half turn should bring the
lines back to where they began.
`,l=`### {6,4} — hexagons, four to a corner

The honeycomb, with one hexagon too many at every corner.

Three regular hexagons around a point make exactly 360° — that is the flat honeycomb,
and it is why beehives look the way they do. A fourth hexagon has nowhere to go on a
flat surface. Here, four fit exactly.

The test is \`(6 − 2) × (4 − 2)\` = 4 × 2 = 8, more than 4, so the tiling is
hyperbolic. Again, 8 classifies the tiling rather than measuring its curvature. Four
hexagons meet at a corner here, so each corner is 90°. A flat regular hexagon has 120°
corners, which is why only three fit in the ordinary honeycomb.

Its symmetry is \`*642\`.

Two special patterns are especially easy to compare here:

- an **even number of tiles** meet at each corner (four), so the tiles can be
  two-coloured like a chessboard;
- the tiling can be **truncated**, replacing every old corner with a square panel
  and every old hexagon with a twelve-sided panel.

If you want to see what the pattern controls can do, this is the scene to try them all
on. It is also the closest thing in the app to a familiar shape behaving unfamiliarly:
everyone knows what a honeycomb looks like, and this is a honeycomb that has been given
more room than a honeycomb should have.

**Try it:** alternate between Checkerboard and Panels. Checkerboard colours the
original hexagons; Panels actually changes the visible tile boundaries. They may use
two colours, but they represent different mathematical operations.
`,c=`### {6,5} — hexagons, five to a corner

The biggest tiles in the app, which is why the fewest of them fit on screen at once.

Three regular hexagons meet exactly on a flat floor — 3 × 120° = 360°, the honeycomb.
\`{6,4}\` adds a fourth. This scene adds a fifth, which on a flat surface would need
600° — 240° more than a turn allows, a full two thirds of a turn too much.

The test is \`(6 − 2) × (5 − 2)\` = 4 × 3 = 12, the largest product here — but that is a
classification, not a measurement of curvature. Every hyperbolic scene in the app uses
the same standard curvature. What the large product does tell you is how much of the
plane one tile takes: five equal corners filling 360° means 72° corners, a long way from
a flat hexagon's 120°, and a hexagon with 72° corners is a big tile.

Its symmetry is \`*652\`.

That size is the reason to visit. Around eleven tiles fit inside the comfortable part of
the view here, against about fifty for \`{7,3}\` and over a hundred for \`{3,7}\`, so this is
the scene where a single tile is large enough to study — and the best one for a drawing
with fine detail, since your motif is repeated at a readable size instead of shrinking
into the crowd.

Five is odd, so there is no chessboard colouring: \`Checkerboard\` is greyed out. The
truncation behind **Panels** turns every hexagon into a twelve-sided tile with a pentagon
at each old corner.

**Try it:** load a saved motif here and then switch to \`{3,7}\`. The same drawing goes
from filling a tile you can inspect to a detail you have to hunt for, with nothing about
the drawing changed.
`,d=`### {7,3} — seven-sided tiles, three to a corner

This tiling cannot exist on a flat surface, and working out why is the quickest way
to understand the whole curved half of this app.

A regular heptagon has corners of about 128.6°. Put three of them around a point and
you get about 385.7°. A complete turn is 360°. You are over by 25.7° — there is not
enough room. On a flat floor, three heptagons overlap.

Unless the floor has extra room. On a surface curved like a saddle at every point,
there *is* more room around a point than a flat plane has, and the three heptagons
fit exactly. That surface is the hyperbolic plane, and this is its most famous
tiling.

The shorthand \`{7,3}\` means "7-sided tiles, 3 around each corner". The general test
for which world a tiling \`{p,q}\` lives in is a single product:

- multiply \`(p − 2)\` by \`(q − 2)\`;
- less than 4, and the tiling wraps onto a sphere;
- exactly 4, and it lies flat;
- more than 4, and it is hyperbolic.

For \`{7,3}\` that is 5 × 1 = 5, which is more than 4. Hyperbolic, and only just —
this is one of the gentlest curved tilings there is.

Its symmetry group is \`*732\`: mirrors crossing at a 7-fold corner (each heptagon's
centre), a 3-fold corner (where three heptagons meet) and a 2-fold corner (the
middle of each edge). Compare it with the flat \`*632\` and you can see exactly what
changed — the 6 became a 7, and that one step was enough to leave the flat plane
behind for good.

Every heptagon in the picture is the same size as every other one. The ones near the
rim look tiny, but that is the picture distorting, not the tiles shrinking. If you
travel toward them they grow to fill your screen, and new tiny ones appear beyond,
forever.

**Try it:** travel toward one of the tiny heptagons near the rim. It grows as it
approaches the centre, proving that the display made it look small even though it was
always the same geometric size.
`,u=`### {8,3} — octagons, three to a corner

The classic hyperbolic paving, and the one that appears most often in textbooks and
in art.

A regular octagon has 135° corners. Three make 405°, overrunning a flat turn by 45°.
With curvature, three octagons meet exactly.

The test: \`(8 − 2) × (3 − 2)\` = 6 × 1 = 6, more than 4. Hyperbolic.

Its symmetry is \`*832\`.

This tiling has a simple dual. Put a dot at the centre of every octagon and connect
dots in neighbouring octagons. The result is \`{3,8}\`: triangles with eight meeting
at every corner. Tile centres and tile corners exchange jobs, while the symmetry
\`*832\` stays the same.

Hyperbolic octagons do appear in the study of closed curved surfaces, but not every
octagon tiling gives the same surface. For example, a famous two-holed surface can be
made by identifying opposite sides of a specially angled octagon; that construction
uses different corner angles from the octagons in this \`{8,3}\` scene.

Visually, this is the tiling where the big central tile reads most clearly as a tile
and the crowd near the rim reads most clearly as infinity, which makes it a good place
to first understand what you are looking at. It is also a good place to try the
**Panels** pattern: cut every corner off an octagon and you get a sixteen-sided tile,
with small triangles filling the gaps where the corners used to be.

**Try it:** use Tile outline first and count eight sides. Then choose Panels: each
octagon becomes a sixteen-sided shape, while every old meeting point opens into a
triangle.
`,g=`### The rectangular kaleidoscope

The plainest kaleidoscope there is: a rectangle of mirrors, and nothing else.

There are mirrors along all four edges of a master rectangle — but unlike the square
kaleidoscope, none along its diagonals, because a rectangle's diagonal is not a
mirror unless the rectangle is a square. Reflect that one rectangle across its edges
and it covers the plane.

Its name is \`*2222\`: four corners, every one of them a **2**-fold corner, meaning
a half turn brings the pattern back. Four twos, no more.

This one is worth visiting precisely because it is the least ornamental. With so few
symmetries, a drawing you make here stays recognisable as the thing you drew, where
the hexagonal kaleidoscope would have spun it into a rosette. It is the mildest
surface in the app to draw on.

It also demonstrates something easy to miss: the rectangle can be *any* proportion.
Stretch it and the symmetry is unchanged, which is why this group covers brick walls,
tiled corridors and window panes alike.

That freedom is real, and this scene is the only one in the app that has it — \`{4,4}\`
needs a square lattice, since nothing else carries 4-fold symmetry, and both \`p6m\`
scenes need a triangular one. The proportion here is the **golden ratio**, about 1.618
to 1, chosen for being unmistakably not square. Any other number would give the same
\`*2222\`; the app once used 1, and the result was a scene labelled "rectangular" that
looked exactly like the square one.

Note also what is *not* in the list of flat scenes' names. \`{3,6}\`, \`{4,4}\` and \`{6,3}\`
carry \`{p,q}\` symbols; this one carries a group name instead, because a rectangle is not
a regular polygon and has no such symbol. It is here anyway: the seventeen wallpaper
groups, not the three regular tilings, are the real classification of flat repeating
patterns — and fourteen of the seventeen have no \`{p,q}\` name either.

**Try it:** draw one off-centre mark. It stays easier to recognise here than in the
square or hexagonal scenes. Then switch scenes without changing the mark and watch
extra mirrors turn it into a more complicated design.
`;export{g as _,u as a,d as b,c,l as d,h as e,i as f,s as g,r as h,o as i,a as j,t as k,n as l,e as m};
