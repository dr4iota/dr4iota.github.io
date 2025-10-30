const e={usage:`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the fractal view to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the fractal view to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
complex parameter. If not visible, hover over or single-click the fractal view
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move complex parameter:** Click and drag a control point to move it.
- **Reset complex parameter:** Double-click a complex parameter to reset its position.
- **Add complex parameter:** Long-press on an empty area to add a new complex parameter.
- **Remove complex parameter:** Long-press on an existing complex parameter to remove it.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the fractal view to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the fractal view to reset the
  pan and zoom to their original or best-fit values.

Some visualizations may feature control points, each representing a
complex parameter. If not visible, tap anywhere on the fractal view to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move complex parameter:** Drag a control point to move it.
- **Reset complex parameter:** Double-tap a complex parameter to reset its position.
- **Add complex parameter:** Long-press on an empty area to add a new complex parameter.
- **Remove complex parameter:** Long-press on an existing complex parameter to remove it.

This application allows you to explore the intricate beauty of various fractals.
You can interact with the fractals in two main ways: by manipulating the view on
the main fractal view and by adjusting parameters in the control panel.

### Header Navigation Bar

The fractal type and color scheme can be changed using the dropdown menus in the
header navigation bar.

### Control Panel

The control panel, located on the left (or top on phones in portrait mode),
provides the following options:

- **Parameters:** Some fractals have additional parameters that can be adjusted
  with sliders. These parameters can dramatically change the fractal's shape.
- **Complex Parameters:** Some fractals are defined by one or more complex
  numbers, which are displayed in the control panel. You can modify these
  parameters by interacting with the control points on the fractal view.

### Interacting with the Fractal View

You can use mouse or touch screen to pan, zoom, and reset the fractal view.
Some fractals have complex parameters that are shown as control points in
the fractal view. You can change those parameters by moving them around.
A few fractals even let you add or remove complex parameters.

### Fullscreen

Click the fullscreen button (top-right of the canvas) to enter fullscreen
mode for a distraction-free view. Press Escape or click the button again
to exit.

### Sharing

Your current view—including fractal type, zoom, center, parameters, and
color scheme—is saved in the URL. Copy and share the link to let others
see exactly what you see.
`,colorscheme:`## The Art and Science of Fractal Coloring

### Introduction

Fractals are mathematical objects of infinite detail and complexity. Visualizing a fractal involves creating a two-dimensional image from its abstract mathematical definition. This process typically uses an iterative calculation for each point, represented by its coordinates $(x, y)$ or as a complex number $z = x + iy$. The result of this calculation for each point is a scalar value, $t = t(x, y)$, which we then use to determine a color. Our creative task is to transform this numerical value $t$ into a visually appealing color.

For many well-known fractals, like the Mandelbrot set, the iterative calculation determines whether a point belongs to the set or "escapes" to infinity.
-   If the point does not escape (meaning it is inside the set after a maximum number of iterations), we can assign it a special color. This is often black, representing a "black hole" from which no point can escape.
-   If the point escapes, we record the number of iterations it takes to do so. This number, often processed through a logarithmic function for better visual distribution, becomes the value $t$.

The core of fractal coloring is defining a function that maps the continuous value $t$ to a color in a color space, typically RGB (Red, Green, Blue). This document explores several mathematical models for creating these color schemes, from simple linear gradients to elegant, periodic paths in 3D color space.

### A General Concept: The Pacing Function

All our coloring models share a common concept: a **pacing function**. This function transforms the raw fractal value $t$ into a new parameter, let's call it $\\tau$, which then drives the color generation. This mechanism allows us to control the speed and "feel" of the color transitions.

The most common pacing function is a power function:
\`\`\`math
\\tau = t^\\alpha
\`\`\`
where the **Pacing Exponent**, $\\alpha$, adjusts the gradient's feel:
-   $\\alpha = 1$: Linear pacing, creating a uniform gradient.
-   $\\alpha < 1$: Colors change quickly for small values of $t$ and then slow down.
-   $\\alpha > 1$: Colors change slowly at first for small $t$ and then accelerate.

To create more complex and rich color schemes, we can apply this pacing function independently to each of the R, G, and B channels. This is achieved by using a vector of exponents $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_G)$, which produces a vector of paced values $\\bm{\\tau} = (t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$. Some models use a scalar $\\alpha$, while others use a vector $\\bm{\\alpha}$ for more fine-grained control. Note that in this essay, we use bold letters for 3D vectors.

### Color Scheme Models

We employ several models to generate colors. The simplest models apply a function to each color channel independently, while more sophisticated models create colors that follow a continuous path in 3D RGB space.

#### Linear Model

This is the most straightforward model, creating a linear gradient between two colors. The color for each channel is calculated independently, allowing for different transition speeds for red, green, and blue.

The formula for the final color uses vector notation. All operations are performed component-wise:
\`\`\`math
\\bm{\\chi}(t) = \\bm{A} t^{\\bm{\\alpha}} + \\bm{B}
\`\`\`
-   $t^{\\bm{\\alpha}}$ is a shorthand for the vector $(t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$.
-   The pacing exponent $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_B)$ is a vector, allowing different pacing for each color channel.
-   $\\bm{A}$ (scale) and $\\bm{B}$ (base) are 3D vectors representing RGB colors.

To make configuration intuitive, we define the scheme using two endpoint colors:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1$.

The parameters $\\bm{A}$ and $\\bm{B}$ are then derived as follows:
-   At $t=0$, the formula gives $\\bm{C}_0 = \\bm{B}$ (assuming positive exponents). Thus, $\\bm{B} = \\bm{C}_0$.
-   At $t=1$, we have $\\bm{C}_1 = \\bm{A} + \\bm{B}$. Thus, $\\bm{A} = \\bm{C}_1 - \\bm{B} = \\bm{C}_1 - \\bm{C}_0$.

##### Intuitive Explanation

Think of this as mixing two paint colors. You pick a starting color ($\\bm{C}_0$) and an ending color ($\\bm{C}_1$), and the computer generates a smooth gradient between them. The vector exponent $\\bm{\\alpha}$ is a fun twist: it lets you control how the red, green, and blue components transition independently, creating a more dynamic gradient than a simple linear blend.

#### Cosine Model

This model generates smooth, periodic color waves using the cosine function.

The underlying formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{S} \\cos(2\\pi (\\bm{\\nu} t^\\alpha + \\bm{\\phi}))
\`\`\`
where:
-   $\\bm{C}_\\odot$ (center) and $\\bm{S}$ (scale/amplitude) are 3D RGB vectors.
-   $\\bm{\\nu}$ (frequency) and $\\bm{\\phi}$ (phase, with each component varying between 0 and 1) are also 3D RGB vectors.
-   The \`cos\` function is applied component-wise.
-   In this model, the pacing exponent $\\alpha$ is a scalar.

For easier use with color pickers, we configure the scheme by defining two colors that bound the wave:
-   $\\bm{C}_1$: The color at the trough of the wave (when the cosine component for each channel is -1).
-   $\\bm{C}_2$: The color at the peak of the wave (when the cosine component for each channel is 1).

The center ($\\bm{C}_\\odot$) and scale ($\\bm{S}$) vectors are then derived from these two colors:
-   $\\bm{C}_1 = \\bm{C}_\\odot - \\bm{S}$
-   $\\bm{C}_2 = \\bm{C}_\\odot + \\bm{S}$

Solving this system gives:
-   $\\bm{C}_\\odot = (\\bm{C}_1 + \\bm{C}_2) / 2$
-   $\\bm{S} = (\\bm{C}_2 - \\bm{C}_1) / 2$

This method is excellent for creating vibrant, pulsating color schemes.

##### Intuitive Explanation: Color Waves and Lissajous Curves

Imagine color that pulses in waves, like ripples on a pond. The cosine model uses the \`cos()\` function to create smooth, repeating cycles of color. The interesting part is that we have three waves—Red, Green, and Blue—each with its own frequency (from $\\bm{\\nu}$) and phase (from $\\bm{\\phi}$).

When you combine these three independent waves, the final color follows a complex 3D path through color space. This path is a **Lissajous curve**. Our Cosine model generates a 3D Lissajous curve in the world of colors, which is why it can produce such rich and intricate patterns.

![Lissajous Curve](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lissajous_curve_3by4.svg/250px-Lissajous_curve_3by4.svg.png)

You can learn more about Lissajous curves on [Wikipedia](https://en.wikipedia.org/wiki/Lissajous_curve).

#### Elliptical Model

This model creates a sophisticated color scheme by making the colors travel along an elliptical path in 3D RGB space. In this model, the pacing exponent $\\alpha$ is a scalar.

The general parametric equation for an ellipse in 3D space is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{A} \\cos(2\\pi(t + \\phi)) + \\bm{B} \\sin(2\\pi(t + \\phi))
\`\`\`
Here, $\\bm{\\chi}(t)$ is the color for a given value $t$. $\\bm{C}_\\odot$ is the center of the ellipse in color space. The vectors $\\bm{A}$ and $\\bm{B}$ define the shape and orientation of the ellipse. $\\phi$ is a phase angle that determines the starting point on the ellipse.

##### Our Strategy: An Ellipse from Three Colors

Defining a 3D ellipse from scratch requires several parameters. To simplify configuration, we derive the entire ellipse from just **three** user-chosen colors, placed at strategic points along the path:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1/4$.
-   $\\bm{C}_2$: The color at $t=1/2$.

The period of the color cycle is 1. The crucial constraint is that the center of our ellipse, $\\bm{C}_\\odot$, is the midpoint of the line segment connecting $\\bm{C}_0$ and $\\bm{C}_2$:
\`\`\`math
\\bm{C}_\\odot = \\frac{\\bm{C}_0 + \\bm{C}_2}{2}
\`\`\`
This constraint simplifies the problem enough to define a unique ellipse from the three chosen points.

##### Deriving the Color Formula

By using our three points and the midpoint constraint, we can solve for the unknown parameters. Let $\\bm{C}'_0 = \\bm{C}_0 - \\bm{C}_\\odot$ and $\\bm{C}'_1 = \\bm{C}_1 - \\bm{C}_\\odot$.

First, we find the starting angle $\\theta_0 = 2\\pi \\phi$ of the ellipse:
\`\`\`math
\\theta_0 = \\frac{1}{2} \\operatorname{atan2}\\left(2 (\\bm{C}'_0 \\cdot \\bm{C}'_1), |\\bm{C}'_1|^2 - |\\bm{C}'_0|^2\\right)
\`\`\`
The phase shift is then $\\phi = \\theta_0 / (2\\pi)$.

Next, we solve for the ellipse axes vectors, $\\bm{A}$ and $\\bm{B}$:
\`\`\`math
\\begin{align}
\\bm{A} = \\bm{C}'_0 \\cos\\theta_0 - \\bm{C}'_1 \\sin\\theta_0 \\
\\bm{B} = \\bm{C}'_0 \\sin\\theta_0 + \\bm{C}'_1 \\cos\\theta_0
\\end{align}
\`\`\`
Note that the Elliptical model can be seen as a special case of the Cosine model where all channels have the same frequency, forcing the Lissajous curve into a simple ellipse. However, configuring it with three points on the ellipse is often more intuitive.

##### Intuitive Explanation: The 3-Color Trick

Defining a 3D ellipse can be complicated. Asking a user to pick all the required parameters would be confusing! So, we use a clever trick. We only ask for **three colors** and arrange them at special positions: the start, the quarter-way point, and the halfway point of the color cycle. By also enforcing that the ellipse's center is the midpoint between the first and third colors, we can construct a unique and beautiful color path.

#### Advanced Elliptic with Damping

We can introduce more parameters for even greater control, allowing for spirals and other dynamic effects. The final, complete formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + e^{-\\beta t} \\left( \\bm{A} \\cos(2\\pi (\\nu t^\\alpha + \\phi)) + \\bm{B} \\sin(2\\pi (\\nu t^\\alpha + \\phi)) \\right)
\`\`\`
where
-   The pacing exponent $\\alpha$ is a scalar;
-   The parameter $\\nu$ is the frequency and $\\phi$ is the phase, both of which are scalars;
-   The parameter $\\beta$ is the **Damping Factor**, which creates an exponential decay effect.

A non-zero damping factor will create a spiral trajectory in the RGB color space.
-   If $\\beta > 0$, the ellipse shrinks as $t$ increases, causing the colors to spiral inwards towards the center color $\\bm{C}_\\odot$. This can create a sense of depth.
-   If $\\beta < 0$, the ellipse expands, with colors spiraling outwards.
-   If $\\beta = 0$, there is no damping, and the colors remain on the original ellipse path.

By playing with these parameters, you can generate an enormous variety of beautiful and complex color schemes for your fractals.
`,essay:`## A Short History of Fractals

Have you ever looked at a snowflake up close, or noticed how a fern’s leaves look like tiny versions of the whole plant? That repeating, “pattern inside a pattern” idea is what fractals are all about.

### Early Clues

Long before anyone had the word *fractal*, mathematicians were stumbling onto strange shapes that didn’t fit the neat rules of geometry. In the 1800s, people like **Georg Cantor**, **Helge von Koch**, and **Giuseppe Peano** started drawing odd curves and sets. These shapes were puzzling because they were jagged, infinitely detailed, or didn’t seem to follow the normal rules of lines, squares, and circles. At the time, most mathematicians thought of them as “monsters” or curiosities rather than something useful.

* **Cantor Set (1883):** Imagine starting with a line, cutting out the middle third, and then doing the same to every piece left, over and over. What remains is tiny dust-like points.
* **Koch Snowflake (1904):** Start with a triangle, keep adding little triangles to each side again and again, and you’ll get a snowflake-like shape with an infinitely long edge!

### The Word “Fractal”

It wasn’t until the 1970s that these wild shapes got their modern name. A mathematician named **Benoît Mandelbrot** studied these “monsters” and realized they were more than curiosities. He called them **fractals**, from the Latin word *fractus*, meaning “broken” or “irregular.”

Mandelbrot showed that fractals appear everywhere in nature: the branching of trees, the outlines of mountains, the swirls of clouds, even in your own blood vessels. Instead of being useless, fractals turned out to be one of the best ways to describe the messy, rough patterns of the real world.

### Computers Make Them Beautiful

Before computers, drawing fractals by hand was almost impossible, since they repeat patterns over and over. But with computer graphics, Mandelbrot and others could “zoom in” endlessly and see the shapes blossom into stunning, colorful designs. The most famous of these is the **Mandelbrot Set**—a shape so rich that even today, people are still discovering new details when they zoom in.

### Usefulness of Fractals

Fractals aren’t just pretty pictures. Scientists use them to understand things like coastlines, lightning, galaxy clusters, and even the stock market. Engineers use fractal ideas in antennas and image compression. Artists use them to make mesmerizing digital art.

### Last Words...

Fractals show us that the world isn’t always smooth and simple. Nature likes to repeat itself in surprising, beautiful ways, and fractals help us see that order inside the chaos.
`,about:`## Fantastic Fractals — an interactive fractal explorer

Fantastic Fractals (ιFractals) lets you dive into the mesmerizing world of complex dynamics and mathematical art. Switch instantly between classic and modern fractals—like Mandelbrot, Julia, and Newton—and explore them in real time with fluid pan and zoom. As you navigate, the app overlays precise complex coordinates and live view ranges, helping you connect visual patterns to their underlying math.

### What you can explore

- **Multiple fractal families**: Start with Mandelbrot, Julia, and Newton (and more varieties as they’re added), each with distinct visual structure and mathematical character.
- **Rich & Customizable Color Schemes**: Pick from curated color palettes, or design and save your own to reveal detail and structure in new ways.
- **Real-time interaction**: Navigate smoothly; every movement updates a helpful overlay that includes current complex coordinates and view extents.

### Intuitive controls that invite experimentation

- **Parameter sliders**: Tune fractal-specific parameters with responsive sliders designed for fine-grained control (including non-linear scaling where appropriate).
- **Complex parameters via control points**: For fractals defined by complex constants, drag control points directly on the canvas to shape the set dynamically. Double‑click a control point to reset it.
- **Color Scheme Editor**: Create your own color schemes from scratch. Saved schemes are automatically added to the menu for easy access.
- **Context-aware layout**: On larger screens, controls sit to the left of the canvas; on phones in portrait mode, they adapt to the top—always within easy reach.

### Helpful, math-aware guidance

- **Inline math and documentation**: Learn the theory behind each fractal with clear, readable math. Toggle a “Math” help modal tailored to the current fractal, or open a “Controls” guide for tips on interaction.
- **Live info overlay**: See exact complex coordinates under the cursor, plus real and imaginary ranges of the current view, alongside a concise status line for the active fractal.

### A focused, polished UI

- **Streamlined toolbar**: The header features compact drop-downs for fractal type and color scheme—icon-only when space is tight, descriptive when there’s room.
- **Fullscreen mode**: Click the fullscreen button on the canvas to fill the screen for an immersive experience.
- **Dark mode support**: Enjoy a thoughtfully styled dark theme for comfortable exploration day or night.
- **Share with a link**: It’s easy to share exactly what you’re viewing—including your selected fractal, zoom level, and color scheme (even custom ones).

### Built for performance and portability

- **High-performance rendering**: Real-time visualization ensures responsive exploration even at deep zoom levels.
- **Fast and responsive**: Quick to load with smooth interaction.
- **Desktop and mobile**: Ready for desktop and mobile builds, bringing the same experience beyond the browser.

### Who it’s for

- **Curious explorers**: Anyone captivated by visual complexity and emergent patterns.
- **Students and educators**: A hands-on way to connect complex numbers, iterative systems, and geometry with compelling visuals.
- **Math and art enthusiasts**: A canvas for creative rendering and mathematical experimentation.

Whether you’re zooming into a Mandelbrot filament, reshaping a Julia set via a complex control point, or studying Newton basins with precise parameter control, Fantastic Fractals makes the deep structure of mathematics both approachable and beautiful.

### Features

- Explore classic fractals like Mandelbrot, Julia, and Newton.
- Pan and zoom smoothly with real-time rendering.
- Design, save, and use your own custom color schemes.
- Pick from a selection of beautiful curated color palettes.
- Shape fractals dynamically by dragging control points on the canvas.
- Tune fractal-specific parameters with draggable control points and responsive sliders.
- Learn the math behind each fractal with tailored documentation.
- See live complex coordinates and view ranges as you explore.
- Go fullscreen for an immersive, distraction-free view.
- Share your exact view, including zoom and colors, with a single link (web version).
- Enjoy a clean interface with light and dark modes.

### What's next

#### Short\\-term

- More hand-picked locations and compositions, with greater variety in structure, scale, and mood.
- Curated parameter and color presets designed for striking visual results.
- High-resolution image exports suitable for prints, posters, and large-format displays.
- Subtle continuous animations such as slow parameter oscillations, phase shifts, and breathing zooms.

#### Long\\-term

- Three-dimensional sculptural fractals with depth, rotation, and lighting.
- Cinematic rendering with enhanced shading and depth cues for atmospheric results.
- (Creative collections) Save, organize, and revisit visual series and explorations.
- A shared gallery of featured and user-created views.
`};export{e as helpTopicBodies};
