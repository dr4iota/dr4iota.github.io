const e=`### The half-plane

Instead of a disk, the world fills everything above a line.

That bottom line is the horizon — infinitely far away, like the disk's rim. But this
model has a second infinity that the disk does not: straight **up**. Going up is
travelling away in a different direction, and it never ends either.

Tiles shrink as they approach the bottom line and grow enormous as you rise, which makes
this the model where you can most easily see a single tile in full detail. Like the
Poincaré disk it keeps **angles** true, so shapes stay honest.

Straight lines here are either vertical lines or semicircles standing on the horizon.

This picture has a special trick the others lack. Sliding sideways is a genuine motion of
the world, and so is scaling the whole picture up and down about a point on the horizon —
what looks like zooming is really *travelling* along a line. That is why the half-plane
feels like a landscape you are flying over rather than a bubble you are looking into, and
it is a good scene in which to notice that "zoom" and "travel" are different things.

**Try it:** move straight upward and then straight downward. Tiles seem to grow and
shrink, but count the tiles you cross. This is travel disguised as zoom, not a camera
changing size.
`,t=`### The horizontal band

The world in a strip — and this is the one that surprises people.

The strip has two long edges, and **both of them are infinitely far away**. The picture
is not cropped. It is not a slice of the world with the rest cut off. It is the entire
hyperbolic plane, laid out along a corridor whose walls you can never reach.

Left and right, the strip goes on forever too, which makes this the most panoramic view
in the app — and the reason it is the one to choose on a wide screen. A single band of
tiles runs down the middle at full size, and the crowding happens toward the two long
edges rather than in a ring.

Angles are true here as well, so a corner keeps its real shape even while the tiles
change apparent size.

The band is the best scene for watching a pattern march. Travel along the strip and the
tiles process past you in an orderly line, which makes the repetition much easier to
read than in a disk where everything crowds toward a circle. If you want to see the
rhythm of a tiling — how often it comes back to itself — look at it here.

**Try it:** travel left or right along the middle of the strip. Choose one bright
detail and count how many tiles pass before the same arrangement returns.

If your screen is taller than it is wide, try the **vertical band** instead. It is this
same corridor stood on end, and it will use the whole of a tall screen where this one
has to shrink to fit its width.
`,n=`### The Klein disk

Also the whole plane inside a circle, but trading away the opposite property from the
Poincaré disk.

Here **straight lines really look straight**. Every shortest path in this world is drawn
as an honest straight chord across the disk, which makes it the easiest picture for
seeing that hyperbolic lines behave like lines: two of them meet at most once, and given
a line and a point beside it there are many parallels — the fact people argued about for
two thousand years, visible at a glance.

The price is **angles**. The model does not preserve them in general, although angles
at the exact centre are shown correctly. Away from the centre, squares look like
squashed kites, tiles flatten into slivers near the rim, and the crisp rosettes of the
Poincaré view smear out. Nothing is bent — the picture is simply distorting angles
instead of preserving them.

Switch between this and the Poincaré disk on the same tiling. Both are complete, honest
pictures of the identical world. One keeps shapes and bends lines; the other keeps lines
and bends shapes. You cannot have both, and comparing them is the fastest way to feel
what "you cannot flatten this plane" actually means.

This model came from Eugenio Beltrami in 1868 and carries Felix Klein's name.

**Try it:** switch between Klein and Poincaré without changing your location. Choose
one edge away from the centre. It becomes straight in Klein and curved in Poincaré,
while its corner angles behave in the opposite way.
`,i=`### The Poincaré disk

The whole infinite plane, squeezed inside one circle.

The circle's rim is **not an edge**. It is infinitely far away — the horizon of the
world. Travel toward it as long as you like and you will never arrive; tiles keep
arriving from it forever, each one full size when you get to it.

What this picture gives up is **size**: tiles near the rim look tiny. What it keeps is
**angle**. Every angle you see is the true angle, so where three heptagons meet in the
picture they meet at the true 120° each, and the pattern's shapes are honestly shaped.
That is why this model looks so convincing, and why it is the one Escher used for his
*Circle Limit* prints after the geometer H. S. M. Coxeter sent him a diagram of it in
1958.

Straight lines — the shortest paths in this world — appear as arcs that meet the rim at
right angles. A line through the exact centre looks straight; every other one bows.
Both are equally straight to anyone living there.

This is the default view, and the best one to start from. The other five projections are
the same world seen through different windows.

**Try it:** follow one curved tile edge toward the rim. It meets the rim at a right
angle. Then travel toward a tiny tile and watch it grow without changing shape.
`,a=`### The fitted rectangle

The square projection, told to follow the shape of your window.

Resize the window — or turn your phone — and the whole tiling re-flows to fit, filling
the new shape corner to corner. Nothing is cropped and nothing is stretched out of true;
the map itself is recomputed for the new proportions, so the picture stays angle-honest
whatever shape it has to be.

All four edges are infinity, as in the square.

This is the most practical projection in the app and the least mathematical. There is no
famous theorem about it. It exists because screens are rectangles and a pattern that
fills yours exactly is nicer to look at than one that leaves gaps — and because it is a
neat demonstration that the choice of picture is genuinely free. The world is fixed. How
you draw it is up to you.

Try it in portrait and again in landscape on the same tiling. Same world, same tiles,
same distances; a strikingly different picture.

**Try it:** rotate a phone or resize a browser window slowly. Watch a recognisable tile
near the centre. Its placement changes as the map is rebuilt, but its angles remain
the same.
`,o=`### The square

The whole hyperbolic plane, fitted into a square.

Every one of the four edges is infinity, and so are the four corners. This is a real
model, not a cropped picture: the entire infinite plane is inside the square, with the
crowding pushed out to all four sides.

Angles are preserved everywhere inside the square, so the picture keeps small shapes
honest like the Poincaré disk. The four corners belong to the infinitely distant
boundary, not to the hyperbolic plane itself, so no traveller can stand there and
measure an angle.

Getting from a circle to a square without wrecking the angles takes real machinery. It
uses a **Schwarz–Christoffel map**, a rule designed to reshape regions while preserving
angles inside them. The calculation uses functions normally studied after high-school
calculus; you do not need the formula to use the result. This is the hardest projection
in the app to compute, and it demonstrates that "fit the plane into this shape" can be
a precise mathematical request.

Practically, this is the projection that wastes the least of a rectangular screen, which
is the reason to look at it: the pattern reaches into the corners instead of leaving four
empty arcs.

**Try it:** compare the square with the Poincaré disk. Look near the middle first,
then near an edge. The window changes dramatically, but corresponding corners keep
the same angles.
`,s=`### The vertical band

The same corridor as the horizontal band, stood on end.

Everything true of that picture is true of this one — the two long edges are both
**infinitely far away**, the strip runs on forever in the other direction, and angles
stay honest. It is not a new world. It is not even a new picture of the world, strictly
speaking: it is the horizontal band turned a quarter turn, which is a thing you may do
to any picture.

So why offer it? Because a screen has a shape. A strip laid across a tall screen has to
shrink until its width fits, wasting most of the height; stood upright it uses the whole
of that height and the crowding happens to the left and right where there is nothing
else to see. On a phone held normally, this is the band you want. On a wide monitor, the
horizontal one is.

The mathematics is indifferent to which way up you hold it. Your screen is not, and
noticing the difference between those two statements is worth more than either.

**Try it:** travel up or down the middle of the strip and count how many tiles pass
before the arrangement returns — the same march as the horizontal band, now running the
way your screen is long. Then switch to the horizontal band and watch the identical
pattern re-flow into a shape that no longer fits.
`;export{s as _,o as a,a as b,i as c,n as d,t as e,e as f};
