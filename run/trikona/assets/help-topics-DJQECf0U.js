const e={usage:`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the triangle view to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the triangle view to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
vertex. If not visible, hover over or single-click the triangle view
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move vertex:** Click and drag a control point to move it.
- **Reset vertex:** Double-click a vertex to reset its position.



### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the triangle view to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the triangle view to reset the
  pan and zoom to their original or best-fit values.

Some visualizations may feature control points, each representing a
vertex. If not visible, tap anywhere on the triangle view to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move vertex:** Drag a control point to move it.
- **Reset vertex:** Double-tap a vertex to reset its position.

This application lets you explore the fascinating geometry of triangles. You can interact with the triangle by moving its vertices and adjusting the view.

### Header Navigation Bar

The type of geometric property to display can be changed using the dropdown menu in the header navigation bar.

### Interacting with the Triangle View

You can use mouse or touch screen to pan, zoom, and reset the triangle view.
You can also change the shape of the triangle by moving its three corners (vertices).
Just tap or click a vertex and drag it to a new position.
`,essay:`## A Short History of Triangles

A long time ago, people noticed that triangles seemed almost magical. They are the simplest shapes made of straight lines, yet they keep showing up everywhere: in the beams of bridges, the roofs of houses, the sails of ships, even in nature’s crystals and mountain peaks. But what makes triangles even more fascinating is what happens **inside** them.

### The First Explorers of Triangles

Over two thousand years ago, in ancient Greece, mathematicians like **Euclid** and **Pythagoras** studied triangles carefully. They measured sides, compared angles, and proved amazing theorems. But some wondered: if you draw special lines inside a triangle, where do they meet? Do they meet at all? And if they do, is that point special?

### Four Famous Centers

Over the centuries, mathematicians discovered that triangles don’t just have one “center”—they have **several**, each with its own meaning.

1. **The Centroid (The Balancing Point)**
   Imagine you cut out a triangle from cardboard. If you tried to balance it on your finger, the exact spot where it balances is called the **centroid**. It is found where the three medians (lines from a corner to the middle of the opposite side) meet.
   Fun fact: The Greeks already knew about this, but it was carefully studied in later centuries when scientists were exploring balance, levers, and physics.

2. **The Circumcenter (The Circle-Maker)**
   Long ago, people loved circles. They noticed that every triangle can fit perfectly inside a circle, with all three corners touching the circle. The center of that circle is called the **circumcenter**. You find it where the perpendicular bisectors of the sides meet.
   Ancient astronomers and sailors cared a lot about this, because circles and triangles helped them map the stars and navigate the seas.

3. **The Incenter (The Secret Circle Inside)**
   Later, mathematicians asked: can we also fit a circle **inside** a triangle, just touching all three sides? Yes! The center of this circle is called the **incenter**, where the angle bisectors meet. Builders and artists in the Middle Ages found this fascinating, because it gave perfect symmetry for designs.

4. **The Orthocenter (The Perpendicular Meeting Place)**
   Another curious point is where the three altitudes (the “height” lines dropped from each corner) meet. This is the **orthocenter**. It doesn’t always sit inside the triangle—it can wander outside! This strange behavior puzzled mathematicians like **Euler**, an 18th-century genius who studied it deeply.

### The Web of Triangle Centers

By the 1700s and 1800s, mathematicians like **Euler** and **Gergonne** discovered that these centers are not random—they are connected in surprising ways. For example, Euler found that three of them (the centroid, circumcenter, and orthocenter) always lie on the same straight line, now called the **Euler line**.

Later, people realized there are not just four, but *hundreds* of possible triangle centers, each with its own story. Today, mathematicians have named and cataloged thousands of them!

### The Nine-Point Circle: A Circle of Wonders

By the 18th century, mathematicians like **Leonhard Euler** began connecting these centers in surprising ways. One of the most astonishing discoveries is the **nine-point circle**.

What is it? For any triangle, if you mark:

* the midpoints of the three sides,
* the feet of the three altitudes (where the altitudes touch the sides),
* and the midpoints of the segments from each corner to the orthocenter,

you get **nine points**. Amazingly, all nine lie perfectly on one circle!

Even more magical: the center of this nine-point circle lies on the same line (the **Euler line**) as the centroid, circumcenter, and orthocenter. It’s as if the triangle is whispering, “All my secrets are connected.”

### Last Words

Studying triangle centers wasn’t just a game. These ideas helped with architecture, navigation, astronomy, physics, and even computer graphics today. Triangles are the building blocks of 3D models, and their centers help with calculations of balance, rotation, and symmetry.
`,about:`## Animated Geometry — interactive geometry with animated proofs

Welcome to Animated Geometry (ιGeometry)! This application is a modern, interactive way to explore the world of geometry. It serves as a virtual playground where you can not only play with geometric shapes but also watch animated proofs of theorems come to life.

Move beyond static diagrams and experience geometry as a dynamic, hands-on subject. Whether you're dragging the vertices of a triangle to see how its centers move, or watching a step-by-step construction of an inscribed circle, Animated Geometry makes geometric concepts intuitive and engaging.

### Simple and Intuitive

- **Easy Controls:** Drag corners to change shapes, pan and zoom to get a closer look, and use simple controls to navigate through animated proofs.
- **Clear Explanations:** Each concept and animation step is accompanied by simple explanations to help you understand the math behind the visuals.

### Who it’s for

- **Students:** A great tool for anyone learning geometry. It makes abstract concepts visual and interactive.
- **Teachers:** A helpful resource for demonstrating geometric proofs and properties in the classroom.
- **Anyone who is curious:** If you love math, art, or just exploring cool patterns, you'll have fun with this app.

This app makes learning geometry a hands-on, animated experience. Enjoy exploring the beautiful world of geometry!

### Features

- Get to know the major results in the geometry of triangles.
- Focus on the well-known centers of a triangle.
- Drag triangle vertices and see how geometry updates in real-time.
- Watch step-by-step animations of the proofs of geometric theorems.
- Learn with optional guided audio narration.
- Control animation playback at your own pace.
- Explore the world of geometry in a simple, focused, and distraction-free way.

### What's next

#### Short\\-term

- More animated proofs, including dissections and algebraic derivations of classic theorems.
- Smoother animation timing and transitions for a more pedagogical experience.
- A quick interactive tour of the user interface and playback controls.
- Real-time visual overlays for angles, lengths, and areas as you manipulate the geometry.

#### Long\\-term

- Multi-language localization for a global audience.
- (Construction toolbox) Ruler-and-compass tools for creating and experimenting with your own geometric constructions.
- High-quality exports of your constructions and shareable links to specific configurations.
`};export{e as helpTopicBodies};
