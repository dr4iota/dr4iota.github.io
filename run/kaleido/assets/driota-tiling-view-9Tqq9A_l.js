import{r as l,j as v}from"./react-vendor-Dj1QuSz7.js";import{d as L,a as F,i as se,t as le,c as H,b as I,f as st,e as X,g as ce,h as _e,D as lt,j as W,k as _,l as ct,m as Pe,B as Y,n as Ne,C as Fe,w as ht,W as dt,o as ut,p as ft,q as mt,r as Oe,s as pt,u as gt,v as yt,x as wt,y as bt,z as vt,A as xt,G as De,N as kt,E as St,F as Mt,P as Tt,H as Et,I as Ct,J as It,K as At,L as Rt,M as _t,O as J}from"./driota-tiling-base-Ec4PIg1Q.js";import{f as Pt,u as Nt,r as we,p as be,O as Ft,s as Ot,a as Dt}from"./driota-common-view-BBsjFgz8.js";import{c as ve}from"./other-DAKmfSDz.js";import"./driota-common-base-BIAydVgX.js";import{I as Lt}from"./driota-render-view-WIIA6KiH.js";import{D as Gt,R as Ut,U as Wt,L as xe,u as Ht,a as zt,S as $t,V as re,b as ae,B as qt}from"./three-Db-6o16D.js";const Bt=`
uniform vec3 tintPrimary;
uniform vec3 tintSecondary;
uniform vec3 tintTertiary;
uniform vec3 inkColor;
uniform float inkWidth;
uniform sampler2D motifTexture;
/**
 * Guide lines, 0 while exploring and 1 while drawing.
 *
 * A **uniform**, deliberately, where a motif style is a shader variant. Two reasons:
 * entering drawing mode must not stall on a shader compile, and every pixel takes
 * the same branch on the same frame, so there is no divergence to pay for. The
 * per-pixel cost a style variant avoids is the cost of code that is *never* used;
 * this code is used, half the time.
 */
uniform float guideStrength;
/**
 * Where the painted layer lives: 0 for the fundamental triangle, 1 for the whole tile.
 *
 * A uniform, like the guides, because switching must not stall on a compile — and
 * because it is a property of the *drawing*, not of the style, so it would otherwise
 * multiply the shader matrix by two for a difference of one texture lookup.
 */
uniform float motifOnTile;

struct MotifChart {
  // Distance out from the primary (highest-symmetry) corner, 0 there and 1 on the
  // far wall. Its level sets close into polygons under the corner's stabilizer.
  float t;
  // Distance off the angle bisector. Skewing \`t\` by this is what turns a band
  // into a point.
  float across;
  // Distance to the nearest wall, which vanishes exactly on the domain boundary.
  float wall;
  // Barycentric-style weights, **primary first** — \`bary.x\` is the weight at the
  // highest-symmetry corner in both chart shapes, so a style that keys off it puts
  // its focal point in the same place either way. Equivalently \`bary.x == 1.0 - t\`.
  vec3 bary;
  // One screen pixel, in \`wall\`'s units.
  float aa;
  /**
   * Distance to the tile's **own edge** — the polygon's boundary, as against the
   * mirrors that cut across it. Emitted per scene by the chart, which knows which
   * weight plays that role: the face centre leads the ordering for {7,3} but the
   * vertex leads for its dual {3,7}.
   */
  float tile;
  /**
   * Which of two colours this *tile* takes, or −1 where the tiling admits no
   * two-colouring at all — {7,3}, {3,7} and p6m among them, all having an odd number
   * of tiles around a vertex. A style that colours tiles must handle the −1 rather
   * than pretend.
   */
  float cell;
  /**
   * The tiling's **truncation**, as one signed number: positive inside the face that
   * replaces a vertex, negative inside the one that replaces the tile, and zero on the
   * tiling edge between them. So its sign is which panel, and its magnitude is the
   * distance to the seam — an outline needs no second evaluation.
   *
   * Always −1 on a Euclidean scene, whose truncation is not derived yet; a style that
   * uses this must set \`needsTruncation\`.
   */
  float panel;
  // 1.0 in a mirror-image tile, 0.0 otherwise. The general form of "alternately
  // filled": a two-coloring of the *tiles* needs the face adjacency graph to be
  // bipartite, which a hexagonal or heptagonal tiling is not, but handedness
  // alternates across every mirror in any reflection group — so this always exists
  // and always looks like a checkerboard.
  float parity;
  // Where this point sits in the painted motif's texture, drawing on the triangle.
  vec2 uv;
  /** The same point in *tile* coordinates, for a drawing made on the whole tile. */
  vec2 tileUv;
  /** One pixel, in \`tile\`'s units — the tile edge's own antialiasing width. */
  float tileAa;
};

MotifChart motifChart(vec3 chart, float parity, vec2 tileClass, vec2 tileUv,
    float pixel) {
  MotifChart g;
  g.parity = parity;
  g.tileUv = tileUv;
  g.tile = tileEdge(chart);
  g.cell = tileClass.x;
  g.panel = tileClass.y;
#ifdef CHART_SQUARE
  // Two axes, four walls: distance to the nearest is the smaller of each
  // coordinate and its complement. \`t\` measures out from the primary corner in
  // the Chebyshev sense, so its level sets close into concentric rectangles under
  // reflection, the way the simplex chart's close into polygons.
  float hi = max(chart.x, chart.y);
  float lo = min(chart.x, chart.y);
  g.t = 1.0 - lo;
  g.across = abs(chart.x - chart.y);
  g.wall = min(min(chart.x, 1.0 - chart.x), min(chart.y, 1.0 - chart.y));
  // Primary first, which for a square chart means \`lo\` — the weight that reaches 1
  // at the corner \`t\` measures out from. The reverse order is the one
  // \`chartToMotif\` uses for the square↔simplex *transfer*, and it belongs there, not
  // here: transfer cares which corner maps to which, shading cares which corner is
  // the focal one. Getting this backwards puts the \`chart\` style's blot on the
  // opposite corner from the simplex case, which is how it was caught.
  g.bary = vec3(lo, hi - lo, 1.0 - hi);
  g.uv = chart.xy;
#else
  g.t = 1.0 - chart.x;
  g.across = abs(chart.y - chart.z);
  g.wall = min(min(chart.x, chart.y), chart.z);
  g.bary = chart;
  g.uv = chart.yz;
#endif
  // Analytic, not a screen derivative — see wallGradient. A pixel's worth of chart
  // weight, for the wall the point is nearest and for the tile's own edge.
  g.aa = max(pixel * wallGradient(chart), 1.0e-6);
  g.tileAa = max(pixel * tileGradient(), 1.0e-6);
  return g;
}

/**
 * The fundamental domain's boundary, drawn while drawing.
 *
 * These are the group's own mirror lines — the grid lines of this drawing surface,
 * and unlike a paper grid they are not a convenience laid over the work but the
 * thing that actually decides where a mark reappears. Shown only in drawing mode and
 * never saved: they are scaffolding, not artwork, which is exactly the distinction
 * the procedural styles do *not* make.
 *
 * Drawn from \`wall\` rather than from the individual weights, because \`wall\` is
 * correct on both chart shapes: on a square chart the weights' zero sets include the
 * diagonal, which is a real mirror in \`p4m\` and not one in \`pmm\`, so a guide built
 * from them would lie half the time.
 */
vec3 domainGuides(vec3 color, MotifChart g) {
  if (guideStrength <= 0.0) return color;
  float line = 1.0 - smoothstep(0.0, g.aa * inkWidth * 2.5, g.wall);
  // A cool, unsaturated line: legible on paper, on ink, and on every palette,
  // without reading as part of the drawing.
  vec3 guide = mix(tintSecondary, inkColor, 0.35);
  return mix(color, guide, line * guideStrength * 0.7);
}

/**
 * The net's hierarchy: the tile's own edge is drawn TILE_EDGE_WEIGHT times wider than
 * the mirrors cutting across it, and those are faded to MIRROR_FADE of full strength.
 *
 * Width alone was not enough. It was tried at 2.1x with both families at full strength,
 * and measured: 11% of pixels differed between \`{3,6}\` and \`{6,3}\` — real, but all of it
 * in hairlines, while the identical ornament held the eye and the difference went
 * unnoticed. Fading the mirrors is what turns a width difference into a hierarchy: the
 * tile reads as the structure and the mirrors as the scaffolding inside it.
 */
const float TILE_EDGE_WEIGHT = 2.6;
const float MIRROR_FADE = 0.45;

/**
 * The mirror net, shared by every style that wants one — with the tile's own edge drawn
 * heavier than the mirrors that cut across it.
 *
 * Without that distinction the net says only "here are the mirrors", and the *tile* is
 * invisible: a uniform net over \`{7,3}\` reads as a tiling of triangles rather than of
 * heptagons, which is exactly how it was first reported. It also made \`{3,6}\` and
 * \`{6,3}\` — one group, one fold, differing only in where a tile ends — render
 * identically under every ornament, so the two scenes could be told apart only by
 * choosing the outline style.
 *
 * Both families are inked in the same tint. The tile edge is not a different *kind* of
 * line, it is the more important one, so weight says it and hue does not have to.
 */
vec3 mirrorNet(vec3 color, MotifChart g, vec3 tint, float weight) {
  float line = 1.0 - smoothstep(0.0, g.aa * inkWidth, g.wall);
  color = mix(color, tint, line * weight * MIRROR_FADE);
  // Its own width: \`tile\` and \`wall\` are weights with different divisors, so sharing
  // one would thin whichever is scaled larger.
  float edge = 1.0 - smoothstep(0.0, g.tileAa * inkWidth * TILE_EDGE_WEIGHT, g.tile);
  return mix(color, tint, edge * weight);
}
`,Yt=`
vec3 motif(vec3 chart, float parity, vec2 tileClass, vec2 tileUv, float pixel) {
  MotifChart g = motifChart(chart, parity, tileClass, tileUv, pixel);
  // Handedness shades the *paper*, before the ink goes on. Shading the composite
  // would dim the user's marks on every mirrored tile, which is a statement about
  // the paper being made about the drawing.
  vec3 color = motifPaper(g) * (1.0 - MOTIF_PARITY * parity);
  vec4 painted = texture2D(motifTexture, mix(g.uv, g.tileUv, motifOnTile));
  color = mix(color, painted.rgb, painted.a);
  // Above the ink, not below it: a guide you cannot see through your own marks stops
  // guiding exactly when the drawing gets dense enough to need it.
  color = domainGuides(color, g);
  return color;
}
`,Kt=.06,Q=[{key:"rosette",primary:!0,label:"Rosette",note:"A pointed lobe, closed into a star by the corner it sits on",paper:`
// Tune the look here: RIM_OUTER and RIM_INNER are the ring's two sides, STAR_EDGE
// is where the pale interior stops, and SKEW is how sharply the points taper — 0
// would give a blunt band parallel to the far wall, larger values a narrower spike.
const float STAR_SKEW = 0.5;
const float STAR_EDGE = 0.57;
const float RIM_INNER = 0.55;
const float RIM_OUTER = 0.63;
/** Floor on the edge's softness, in chart units, so it never becomes a jaggy. */
const float STAR_SOFTEN = 0.03;

vec3 motifPaper(MotifChart g) {
  float edge = g.t + g.across * STAR_SKEW;
  float soften = max(STAR_SOFTEN, fwidth(edge) * 1.2);
  float inside = 1.0 - smoothstep(STAR_EDGE - soften, STAR_EDGE + soften, edge);
  float rim = (1.0 - smoothstep(RIM_OUTER - soften, RIM_OUTER + soften, edge))
    * smoothstep(RIM_INNER - soften, RIM_INNER + soften, edge);

  vec3 ground = mix(tintPrimary, tintSecondary, 0.68);
  vec3 color = mix(mix(tintPrimary, ground, 0.45), ground, smoothstep(0.45, 1.0, g.t));
  color = mix(color, mix(tintPrimary, tintTertiary, 0.12), inside);
  color = mix(color, tintTertiary, rim * 0.95);
  return mirrorNet(color, g, mix(tintSecondary, inkColor, 0.45), 0.8);
}
`},{key:"facets",primary:!0,label:"Facets",note:"Flat regions meeting at the domain's center, turned into pinwheels",paper:`
vec3 motifPaper(MotifChart g) {
  // Whichever weight dominates picks the tint, so each domain splits into crisp
  // regions meeting at its center — and the group turns those into pinwheels.
  vec3 tint = g.bary.x >= max(g.bary.y, g.bary.z)
    ? tintPrimary
    : (g.bary.y >= g.bary.z ? tintSecondary : tintTertiary);

  // Ink along the medial lines, where the top two weights tie, so the facet edges
  // read as drawn rather than as a gradient boundary.
  float top = max(g.bary.x, max(g.bary.y, g.bary.z));
  float mid = g.bary.x + g.bary.y + g.bary.z - top - min(g.bary.x, min(g.bary.y, g.bary.z));
  float medial = 1.0 - smoothstep(0.0, max(g.aa * 2.2, 0.012), top - mid);
  vec3 color = mix(tint, mix(tint, inkColor, 0.55), medial);
  return mirrorNet(color, g, inkColor, 0.85);
}
`},{key:"rings",label:"Rings",note:"Bands of equal distance, closing into concentric polygons",paper:`
const float RING_COUNT = 2.0;
/** Half-width of the band edge, as a fraction of the wave. Larger reads softer. */
const float RING_SHARP = 0.38;

vec3 motifPaper(MotifChart g) {
  float wave = 0.5 - 0.5 * cos(6.2831853 * RING_COUNT * g.t);
  // Sharpened, so the bands read as bands rather than as a blur — and stay legible
  // where the tiles shrink toward the ideal boundary.
  float band = smoothstep(0.5 - RING_SHARP, 0.5 + RING_SHARP, wave);
  vec3 color = mix(tintPrimary, mix(tintPrimary, tintSecondary, 0.3),
    smoothstep(0.0, 1.0, g.t));
  color = mix(color, tintSecondary, band * 0.95);
  // The innermost band takes the accent, so the figure has a center.
  color = mix(color, tintTertiary, band * (1.0 - smoothstep(0.0, 0.34, g.t)) * 0.9);
  return mirrorNet(color, g, mix(tintSecondary, inkColor, 0.4), 0.7);
}
`},{key:"alternate",primary:!0,label:"Alternate",note:"Every other tile filled, the way a kaleidoscope alternates handedness",paper:`
vec3 motifPaper(MotifChart g) {
  // A two-coloring by handedness. Adjacent domains always differ, since crossing a
  // mirror reverses orientation — which is why this works for {7,3} where a
  // face-by-face two-coloring does not exist at all.
  vec3 filled = mix(tintSecondary, inkColor, 0.2);
  vec3 color = mix(tintPrimary, filled, g.parity);
  return mirrorNet(color, g, inkColor, 0.45);
}
`},{key:"outline",label:"Mirror outline",note:"Every mirror line — the full triangular net",paper:`
/** Heavier than the shared net: here the lines are the whole drawing. */
const float OUTLINE_WEIGHT = 2.0;

vec3 motifPaper(MotifChart g) {
  float line = 1.0 - smoothstep(0.0, g.aa * inkWidth * OUTLINE_WEIGHT, g.wall);
  return mix(tintPrimary, inkColor, line * 0.9);
}
`},{key:"polygon",primary:!0,label:"Tile outline",note:"Each tile's own edge, without the mirrors inside it",paper:`
/** Heavier than the shared net: here the lines are the whole drawing. */
const float POLYGON_WEIGHT = 2.0;

vec3 motifPaper(MotifChart g) {
  // Only the polygon's boundary. The two mirrors through the tile's centre are what
  // make the triangular subdivision visible, and leaving them out is the difference
  // between seeing a tiling of heptagons and seeing one of triangles.
  float line = 1.0 - smoothstep(0.0, g.tileAa * inkWidth * POLYGON_WEIGHT, g.tile);
  return mix(tintPrimary, inkColor, line * 0.9);
}
`},{key:"checkers",label:"Checkerboard",note:"Neighbouring tiles in alternating colours",needsTwoColoring:!0,paper:`
vec3 motifPaper(MotifChart g) {
  // A two-colouring of the *tiles*, which exists only where an even number of them
  // meets at each vertex. Where it does not, \`g.cell\` is −1 and this falls back to a
  // single fill rather than inventing a pattern that would flicker as the viewer
  // moved; the picker says as much for those tilings.
  vec3 light = mix(tintPrimary, tintSecondary, 0.15);
  vec3 dark = mix(tintSecondary, inkColor, 0.15);
  vec3 color = g.cell < 0.0 ? light : mix(light, dark, g.cell);
  // The tile's own edge, drawn in, so the fill reads as tiles and not as fog.
  float line = 1.0 - smoothstep(0.0, g.tileAa * inkWidth * 1.5, g.tile);
  return mix(color, inkColor, line * 0.55);
}
`},{key:"truncated",label:"Panels",note:"The truncated tiling — corners cut off, so two shapes tile together",needsTruncation:!0,paper:`
/** Heavy enough that the seams read as stitching rather than as shading. */
const float PANEL_WEIGHT = 2.2;

vec3 motifPaper(MotifChart g) {
  // The truncation, not a colouring: the corner of every tile is cut off, leaving a
  // 2p-gon where the tile was and a q-gon where each vertex was. Two genuinely different
  // shapes, which is what a football is and what no colouring of a regular tiling can be
  // — there every tile is congruent, so a two-tone scheme only ever stripes one shape.
  vec3 light = mix(tintPrimary, tintSecondary, 0.1);
  vec3 dark = mix(tintSecondary, inkColor, 0.25);
  vec3 color = mix(light, dark, step(0.0, g.panel));

  // Both edge families of the truncated tiling. The corner cut is \`g.panel\`'s own zero
  // set; the other family lies along the original tile edge, but only on the far side of
  // the cut — between the vertex face's centre and the cut that stretch is interior to
  // the q-gon, and inking it would draw a spoke into the middle of a panel.
  float seam = abs(g.panel);
  float edge = g.panel > 0.0 ? seam : min(seam, g.tile);
  // \`panel\` and \`tile\` are both distances scaled the same way, so one width serves the
  // seam and the tile edge alike.
  float line = 1.0 - smoothstep(0.0, g.tileAa * inkWidth * PANEL_WEIGHT, edge);
  return mix(color, inkColor, line * 0.75);
}
`},{key:"plain",label:"None",note:"Bare paper — only your own marks",parityShade:0,paper:`
vec3 motifPaper(MotifChart g) {
  // No ornament and no net. The honest blank start: with this as the base, a saved
  // motif is *only* what was drawn, which is what "a clean drawing" has to mean when
  // ink and paper are separate layers. The domain's edges still appear while drawing,
  // as guides — see \`domainGuides\`.
  return tintPrimary;
}
`},{key:"chart",label:"Chart",note:"The coordinates themselves — the one that shows a fold error",paper:`
vec3 motifPaper(MotifChart g) {
  // The plainest reading of the chart: one tint per weight, the walls inked, and a
  // blot on the primary corner. Kept in the gallery because it is the style a fold
  // or chart error cannot hide in — a seam or an off-center blot is obvious here,
  // where a designed figure might merely look intentional.
#ifdef CHART_SQUARE
  vec3 color = mix(mix(tintPrimary, tintSecondary, g.uv.x), tintTertiary, g.uv.y);
#else
  vec3 color = g.bary.x * tintPrimary + g.bary.y * tintSecondary
    + g.bary.z * tintTertiary;
#endif
  color = mirrorNet(color, g, inkColor, 1.0);
  return mix(color, inkColor, 0.75 * smoothstep(0.88, 0.96, g.bary.x));
}
`}],Le="plain",he=Q[0],de=Q.filter(e=>e.key!==Le),mr=de.filter(e=>e.primary===!0),pr=de.filter(e=>e.primary!==!0),gr=[...Q.filter(e=>e.key===Le),...de];function Vt(e){return Q.find(t=>t.key===e)??he}function Ge(e){const t=e.parityShade??Kt;return[Bt,`const float MOTIF_PARITY = ${t.toFixed(4)};`,e.paper,Yt].join(`
`)}const Xt={tintPrimary:[.972,.945,.886],tintSecondary:[.42,.6,.74],tintTertiary:[.6,.29,.16],inkColor:[.1,.11,.15],background:[.98,.98,.98],inkWidth:1.4},Qt={tintPrimary:[.11,.14,.2],tintSecondary:[.32,.52,.62],tintTertiary:[.86,.66,.36],inkColor:[.91,.93,.96],background:[.06,.08,.14],inkWidth:1.4};function jt(e){return e==="dark"?Qt:Xt}const Jt={center:{x:0,y:0},scale:1},Zt=.5,Ue=I(Zt,0),We=40;function ue(e,t=1,n=P){const r={minScale:$e(e,t,n),maxScale:We},a=ze(e,t),i=e==="halfplane"?{center:{x:0,y:me(t).y},scale:1}:{center:{x:0,y:0},scale:a};return{window:ge(e,i,t,n),limits:r}}function He(e,t=1,n=P){return{pose:lt,window:ue(e,t,n).window,mark:Ue}}const C=.9999;function fe(e,t){return I(t[0]/e.scale+e.center.x,t[1]/e.scale+e.center.y)}function j(e,t,n,r=1){const a=fe(n,t);if(!se(e,a,{aspect:r}))return null;const i=le(e,a,{aspect:r});return H(i)<C*C?i:null}function ke(e,t,n,r=1){const a=fe(n,t);if(!se(e,a,{aspect:r}))return null;const i=le(e,a,{aspect:r}),o=H(i);if(o<C*C)return i;const s=Math.sqrt(o);return s>0?I(i.re*(C/s),i.im*(C/s)):i}function en(e,t){return[(t.re-e.center.x)*e.scale,(t.im-e.center.y)*e.scale]}function tn(e,t,n,r=1){const a=j(t,n,e.window,r);return a?L(F(e.pose),a):null}const P=.3;function me(e){return e>=1?{x:e,y:1}:{x:1,y:1/e}}function pe(e,t){switch(e){case"poincare":case"klein":case"square":return{xMin:-1,xMax:1,yMin:-1,yMax:1};case"rect":{const n=Ne(t),r=n.aspect>=1?n.aspect:1,a=n.aspect>=1?1:1/n.aspect;return{xMin:-r,xMax:r,yMin:-a,yMax:a}}case"hband":return{xMin:-1/0,xMax:1/0,yMin:-Y,yMax:Y};case"vband":return{xMin:-Y,xMax:Y,yMin:-1/0,yMax:1/0};case"halfplane":return{xMin:-1/0,xMax:1/0,yMin:0,yMax:1/0}}}function ze(e,t=1){const n=me(t),r=pe(e,t),a=(r.xMax-r.xMin)/2,i=(r.yMax-r.yMin)/2;let o=1/0;return Number.isFinite(a)&&(o=Math.min(o,n.x/a)),Number.isFinite(i)&&(o=Math.min(o,n.y/i)),Number.isFinite(o)?o:1}function $e(e,t=1,n=P){const r=pe(e,t);return Number.isFinite(r.xMax-r.xMin)||Number.isFinite(r.yMax-r.yMin)?ze(e,t)/(1+Math.max(P,n)):qe}const qe=.2;function ge(e,t,n=1,r=P){const a=Math.max(P,r),i=Math.max(t.scale,$e(e,n,a)),o=me(n),s=pe(e,n),c=o.x/i,h=o.y/i,u=(b,p,d,g)=>{const k=a*p;return!Number.isFinite(d)&&!Number.isFinite(g)?b:Number.isFinite(d)?Number.isFinite(g)?g-d<=2*p?(d+g)/2:Math.min(Math.max(b,d+p-k),g-p+k):Math.max(b,d+p-k):Math.min(b,g-p+k)},f=u(t.center.x,c,s.xMin,s.xMax),y=u(t.center.y,h,s.yMin,s.yMax);return i===t.scale&&f===t.center.x&&y===t.center.y?t:{center:{x:f,y},scale:i}}function Se(e,t,n=1,r=P){const a=ge(t,e.window,n,r);return a===e.window?e:{...e,window:a}}function Me(e,t,n,r,a,i,o,s){const c=Math.min(i.maxScale,Math.max(i.minScale,e.scale*a)),h=fe(e,n),u={x:h.re-r[0]/c,y:h.im-r[1]/c},f=I(u.x,u.y);return!se(t,f,{aspect:o})||H(le(t,f,{aspect:o}))>C*C?null:ge(t,{center:u,scale:c},o,s)}function nn(e,t,n,r={}){const a=r.limits??ue(n).limits,i=r.aspect??1,o=r.margin??P;switch(t.kind){case"reset":return r.home??He(n);case"pan":{if(t.last){const f=W(e.pose),y=r.reduce?.(f)??f;return{...e,pose:y,mark:ie(e.mark,f,y)}}const s=ke(n,t.from,e.window,i),c=ke(n,t.to,e.window,i);if(!s||!c)return e;const h=W(_(ct(s,c),e.pose)),u=r.reduce?.(h)??h;return{...e,pose:u,mark:ie(e.mark,h,u)}}case"frame":{if(t.last)return e;const s=Me(e.window,n,t.from,t.to,t.scale,a,i,o);return s?{...e,window:s}:e}case"zoom":{const s=Me(e.window,n,t.anchor,t.anchor,t.scale,a,i,o);return s?{...e,window:s}:e}}}const rn=1/8;function Z(e){const t=e%(2*Math.PI);return t>Math.PI?t-2*Math.PI:t<=-Math.PI?t+2*Math.PI:t}function ie(e,t,n){return t===n?e:L(_(F(n),t),e)}function an(e,t,n){const r=j(t,[0,0],e.window,n);if(!r)return null;const a=L(e.pose,e.mark),i=L(F(X(r)),a);return ce(i)<1e-12?null:{center:r,angle:_e(i)}}function on(e,t,n={}){const r=n.aspect??1,a=L(e.pose,e.mark);if(H(a)>=C*C)return null;const i=st(t,a,{aspect:r});return!Number.isFinite(i.re)||!Number.isFinite(i.im)?null:en(e.window,i)}function sn(e,t,n,r={}){const a=r.aspect??1,i=an(e,t,a);if(!i)return 0;const o=j(t,n,e.window,a);if(!o)return 0;const s=L(F(X(i.center)),o);if(ce(s)<1e-9)return 0;const c=_e(s),h=r.step??0;if(h>0){const u=r.tolerance??h*rn,f=Math.round(c/h)*h;if(Math.abs(Z(c-f))<u)return Z(f-i.angle)}return Z(c-i.angle)}function ln(e,t,n,r=1,a){const i=j(n,[0,0],e.window,r);if(!i)return e;const o=X(i),s=_(o,_(Pe(t),F(o))),c=W(_(s,e.pose)),h=a?.(c)??c;return{...e,pose:h,mark:ie(e.mark,c,h)}}function cn(e){const t=F(e.pose);return{camA:[t.a.re,t.a.im],camB:[t.b.re,t.b.im]}}function hn(e,t){return{center:[e.center.x,e.center.y],viewWidth:t.worldWidth/e.scale,viewHeight:t.worldHeight/e.scale}}function dn(e){const t=H(e.a),n=t>0?I((e.b.re*e.a.re+e.b.im*e.a.im)/t,(e.b.im*e.a.re-e.b.re*e.a.im)/t):Fe;let r=2*Math.atan2(e.a.im,e.a.re);for(;r>Math.PI;)r-=2*Math.PI;for(;r<=-Math.PI;)r+=2*Math.PI;return{turn:r,move:n}}function un(e,t,n){if(n<=0)return e;if(n>=1)return t;const r=_(t,F(e)),{turn:a,move:i}=dn(r),o=ce(i),s=o>0?I(i.re/o,i.im/o):Fe,c=Math.tanh(n*Math.atanh(Math.min(o,1-1e-12))),h=_(Pe(n*a),X(I(s.re*c,s.im*c)));return W(_(h,e))}function fn(e,t,n){return n<=0?e:n>=1?t:{pose:un(e.pose,t.pose,n),mark:I(e.mark.re+n*(t.mark.re-e.mark.re),e.mark.im+n*(t.mark.im-e.mark.im)),window:{center:{x:e.window.center.x+(t.window.center.x-e.window.center.x)*n,y:e.window.center.y+(t.window.center.y-e.window.center.y)*n},scale:e.window.scale*(t.window.scale/e.window.scale)**n}}}const Be={center:{x:0,y:0},scale:1},mn={minScale:.05,maxScale:200};function Ye(e,t){return{x:t[0]/e.scale+e.center.x,y:t[1]/e.scale+e.center.y}}function ee(e,t,n,r,a){const i=Math.min(a.maxScale,Math.max(a.minScale,e.scale*r)),o=Ye(e,t);return{center:{x:o.x-n[0]/i,y:o.y-n[1]/i},scale:i}}function pn(e,t,n={}){const r=n.limits??mn;switch(t.kind){case"reset":return n.home??Be;case"pan":return t.last?e:ee(e,t.from,t.to,1,r);case"frame":return t.last?e:ee(e,t.from,t.to,t.scale,r);case"zoom":return ee(e,t.anchor,t.anchor,t.scale,r)}}const gn=`
varying vec2 vUv;
void main() {
  const vec3 vertices[3] = vec3[](
    vec3(-1.0, -1.0, 0.0),
    vec3( 3.0, -1.0, 0.0),
    vec3(-1.0,  3.0, 0.0)
  );
  gl_Position = vec4(vertices[gl_VertexID], 1.0);
  vUv = gl_Position.xy * 0.5 + 0.5;
}
`,yn=`
varying vec2 vUv;
uniform vec2 center;
uniform float viewWidth;
uniform float viewHeight;
uniform float cellSize;
`,wn=`
varying vec2 vUv;
uniform vec2 center;
uniform float viewWidth;
uniform float viewHeight;
uniform vec2 camA;
uniform vec2 camB;
uniform vec3 background;
`,bn=`
void main() {
  vec2 st = vUv - 0.5;
  vec2 world = vec2(st.x * viewWidth + center.x, st.y * viewHeight + center.y);
  float parity;
  float cellColor;
  vec2 facePoint;
  vec2 domain = foldDomain(world, parity, cellColor, facePoint);
  vec2 tileClass = vec2(cellColor, truncatedCut(domain));
  // One pixel, in the chart's own units. Taken from \`world\`, which is linear in the
  // screen and therefore smooth — never from a folded quantity, whose V at every mirror
  // makes a quad-wide difference collapse. The chart is scale-free and takes unit-cell
  // coordinates, so the span is divided by the cell size to match.
  // The larger of the two axes, not just x. A wall's line width is set by the pixel size
  // along *its normal*, so a single scalar assumes square world-pixels; if the viewport's
  // world-per-pixel ever differs between axes — a resize mid-frame, a viewport whose
  // aspect does not match its pixel aspect — taking x alone would make horizontal lines
  // a different weight from vertical ones. Erring larger keeps a line from thinning below
  // a pixel, which is the failure that shows.
  float pixel = max(fwidth(world.x), fwidth(world.y)) / cellSize;
  // The chart is scale-free, so it takes unit-cell coordinates.
  gl_FragColor = vec4(
    motif(chartCoord(domain / cellSize), parity, tileClass, faceUv(facePoint), pixel), 1.0);
}
`,vn=`
void main() {
  vec2 st = vUv - 0.5;
  vec2 view = vec2(st.x * viewWidth + center.x, st.y * viewHeight + center.y);
  if (!inProjection(view)) {
    // Outside the model there is no hyperbolic plane to draw — not a hole in
    // the tiling, the edge of the world.
    gl_FragColor = vec4(background, 1.0);
    return;
  }
  vec2 z = diskApply(camA, camB, toDisk(view));
  float parity;
  float cellColor;
  vec2 facePoint;
  vec2 domain = foldDomain(z, parity, cellColor, facePoint);
  vec2 tileClass = vec2(cellColor, truncatedCut(domain));
  // One pixel, in hyperbolic length. \`z\` is the disk point *before* folding, so it is
  // smooth in the screen where the folded point is not; and the fold is an isometry, so
  // a length measured here is the same length there. The 2/(1−|z|²) is the disk model's
  // conformal factor, which is what turns a disk-space step into a hyperbolic one.
  vec2 zx = vec2(dFdx(z.x), dFdx(z.y));
  vec2 zy = vec2(dFdy(z.x), dFdy(z.y));
  float pixel = 2.0 * max(length(zx), length(zy)) / max(1.0 - dot(z, z), 1.0e-6);
  gl_FragColor = vec4(
    motif(chartCoord(domain), parity, tileClass, faceUv(facePoint), pixel), 1.0);
}
`;function xn(e,t=he,n){return[yn,De,St(e),Mt(e,n),kt,Ge(t),bn].join(`
`)}function kn(e,t,n=he){if(!Tt.includes(t))throw new Error(`unknown projection: ${t}`);return[wn,De,Ct(t),Et,It(e),At(e),Rt(e),Ge(n),vn].join(`
`)}function Ke(e){const t=new Map;return n=>{const r=t.get(n.key);if(r!==void 0)return r;const a=e(n);return t.set(n.key,a),a}}const Sn=["zero","one","two","three","four","five","six"];function Te(e){return e.length<=1?e[0]??"":`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`}function Ee(e,t){const n=[];for(const r of e){const a=n[n.length-1];a?.order===r?a.count+=1:n.push({order:r,count:1})}return n.length===e.length?`${Te(e.map(r=>`${r}-`))}fold ${t}s`:Te(n.map(({order:r,count:a})=>`${Sn[a]??a} ${r}-fold ${t}${a===1?"":"s"}`))}function Ve(e){const t=[...e.matchAll(/\d/g)].map(a=>a[0]);if(t.length===0)return e;const r=e.startsWith("*")?`mirrors crossing at ${Ee(t,"corner")}`:`${Ee(t,"rotation point")}, no mirrors`;return`${e}: ${r}`}function K(e,t,n={}){const r=n.cellSize??.5,a=dt[e],i=ht(a,r,n.tileSides),o=a.lattice==="triangular"?6:4,s=n.tileSides??o,c=s===o;return{name:n.name??e,title:n.title??`${a.title} (${e})`,blurb:t,kind:"euclidean",shaderFor:Ke(h=>xn(a,h,n.tileSides)),cellSize:r,orbifold:Ve(a.orbifold),twoColorable:pt(a.lattice),truncatable:!1,tileSides:s,symmetryOrder:i.orders[0],chartShape:i.shape,locate:(h,u={window:Jt},f=!1)=>{const y=ut(a,Ye(u.window,h),r);if(f){const b=ft(a.lattice,r),p=c?y.cellPoint:mt(y.cellPoint,r);return{x:p.x/(2*b)+.5,y:p.y/(2*b)+.5}}return Oe(i.toChart(y.point))}}}const Ce=new Map;function Mn(e,t){const n=`${e}-${t}`,r=Ce.get(n);if(r)return r;const a=bt(e,t),i={tiling:a,chart:xt(a),generators:vt(a)};return Ce.set(n,i),i}function Tn(e,t,n,r="poincare"){const{tiling:a,chart:i,generators:o}=Mn(e,t);return{name:Rn(e,t,r),title:`{${e},${t}} on the ${En[r]}`,blurb:n,kind:"hyperbolic",shaderFor:Ke(s=>kn(a,r,s)),cellSize:1,projection:r,schlafli:[e,t],orbifold:Ve(`*${[e,t,2].sort((s,c)=>c-s).join("")}`),twoColorable:wt(a),truncatable:!0,tileSides:e,symmetryOrder:e,chartShape:i.shape,reducePose:s=>yt(s,o),locate:(s,c,h=!1)=>{if(!c?.pose)return null;const u=tn({pose:c.pose,window:c.window},r,s,c.aspect??1);if(!u)return null;const f=gt(a,u);if(h){const y=a.vertexDepth;return{x:f.facePoint.re/(2*y)+.5,y:f.facePoint.im/(2*y)+.5}}return Oe(i.toChart(f.point))}}}const En={poincare:"Poincaré disk",klein:"Klein disk",halfplane:"half-plane",hband:"horizontal band",vband:"vertical band",square:"square",rect:"fitted rectangle"},Cn=["poincare","halfplane","hband","vband","square","rect","klein"],In={halfplane:"Drawn above a horizon: the bottom edge is infinitely far away.",hband:"Drawn in a level strip: both long edges are infinitely far away.",vband:"The same strip stood upright, which suits a tall screen.",square:"Drawn in a square: all four edges are infinitely far away.",rect:"Stretched to fill your window: resize it and the picture reflows.",klein:"Drawn so straight paths look straight; the price is distorted angles."},An={3:"triangles",4:"squares",5:"pentagons",6:"hexagons",7:"heptagons",8:"octagons"};function yr(e,t){return`${An[e]??`${e}-gons`}, ${t} per corner`}function Rn(e,t,n){return n==="poincare"?`${e}-${t}`:`${e}-${t}-${n}`}const _n=[K("p6m","Six triangles meet at every corner, and the paper stays flat.",{name:"3-6",title:"{3,6} Triangular tiling (p6m)",tileSides:3}),K("p4m","Four squares meet at every corner, like graph paper.",{name:"4-4",title:"{4,4} Square tiling (p4m)",tileSides:4}),K("p6m","Three hexagons meet at every corner. This is the honeycomb.",{name:"6-3",title:"{6,3} Hexagonal tiling (p6m)",tileSides:6}),K("pmm","A rectangle of mirrors, the simplest kaleidoscope.")],Pn=[{p:3,q:7,blurb:"Seven triangles crowd around every corner, one more than flat paper can hold."},{p:3,q:8,blurb:"Eight triangles around every corner, even more crowded."},{p:4,q:5,blurb:"Five squares meet at every corner. Graph paper only fits four."},{p:4,q:6,blurb:"Six squares meet at every corner, two more than graph paper."},{p:5,q:4,blurb:"Pentagons with square corners, four at every meeting point."},{p:5,q:5,blurb:"Five pentagons meet at every corner."},{p:6,q:4,blurb:"Four hexagons meet at every corner, a honeycomb with extra room."},{p:6,q:5,blurb:"Five hexagons meet at every corner, the largest tiles in this list."},{p:7,q:3,blurb:"Seven-sided tiles, three at every corner. Flat paper cannot do this."},{p:8,q:3,blurb:"Eight-sided tiles, three at every corner. A classic of curved space."}],Nn=Pn.flatMap(({p:e,q:t,blurb:n})=>Cn.map(r=>Tn(e,t,r==="poincare"?n:`${n} ${In[r]}`,r))),oe=[..._n,...Nn],Fn=(()=>{const e=oe.filter(t=>/^\d+-\d+$/.test(t.name));return e[Math.floor(Math.random()*e.length)]})(),On=[["-poincare",""],["-band","-hband"]];function wr(e){const t=oe.find(n=>n.name===e);if(t)return t;for(const[n,r]of On){if(!e?.endsWith(n))continue;const a=`${e.slice(0,-n.length)}${r}`,i=oe.find(o=>o.name===a);if(i)return i}return Fn}const br=[{key:"ink",label:"Ink",color:[.06,.07,.11],css:"#101322"},{key:"chalk",label:"Chalk",color:[.96,.96,.94],css:"#f5f5f0"},{key:"madder",label:"Madder",color:[.62,.11,.13],css:"#9e1c21"},{key:"indigo",label:"Indigo",color:[.13,.24,.55],css:"#223d8c"},{key:"verdigris",label:"Verdigris",color:[.09,.45,.42],css:"#17736b"},{key:"ochre",label:"Ochre",color:[.78,.56,.16],css:"#c78f29"}],vr=[{key:"fine",label:"Fine",width:.008},{key:"medium",label:"Medium",width:.02},{key:"broad",label:"Broad",width:.05}],Dn={width:.02,color:[.1,.11,.15],opacity:1},te=512;function xr(e){const[t,n]=l.useState([]),r=l.useMemo(()=>_t(te),[]),a=l.useRef(null),i=l.useRef([]),o=l.useMemo(()=>{const d=new Gt(r.data,te,te,Ut,Wt);return d.minFilter=xe,d.magFilter=xe,d.needsUpdate=!0,d},[r]),s=l.useCallback(d=>{r.data.fill(0);for(const g of d)J(r,g,e);o.needsUpdate=!0},[r,e,o]),c=l.useCallback((d,g)=>{a.current={points:[d],brush:g},J(r,{...g,points:[d]},e),o.needsUpdate=!0},[r,e,o]),h=l.useCallback(d=>{const g=a.current;if(!g)return;const k=g.points[g.points.length-1];g.points.push(d),J(r,{...g.brush,points:[k,d]},e),o.needsUpdate=!0},[r,e,o]),u=l.useCallback(()=>{const d=a.current;if(a.current=null,!d)return;const g={...d.brush,points:d.points},k=[...i.current,g];i.current=k,n(k),s(k)},[s]),f=l.useCallback(()=>{a.current=null;const d=i.current.slice(0,-1);i.current=d,n(d),s(d)},[s]),y=l.useCallback(()=>{a.current=null,i.current=[],n([]),s([])},[s]),b=l.useCallback(d=>{a.current=null,i.current=d,n(d),s(d)},[s]),p=l.useCallback(()=>s(i.current),[s]);return l.useEffect(()=>{s(i.current)},[s]),l.useMemo(()=>({strokes:t,texture:o,beginStroke:c,extendStroke:h,endStroke:u,undo:f,clear:y,load:b,rebuild:p}),[t,o,c,h,u,f,y,b,p])}const Ln={minScale:qe,maxScale:We},Gn=7;function Un(e){if(e.trim()==="")return;const t=Number(e);return Number.isFinite(t)?t:void 0}function Wn(e=Ln){return{parse:t=>{if(t==null)return;const n=t.split(",");if(n.length!==7)return;const r=n.map(Un);if(r.some(f=>f===void 0))return;const[a,i,o,s,c,h,u]=r;if(!(a*a+i*i-(o*o+s*s)<=0)&&u>0)return{pose:W({a:I(a,i),b:I(o,s)}),window:{center:{x:c,y:h},scale:Math.min(e.maxScale,Math.max(e.minScale,u))},mark:Ue}},format:t=>[t.pose.a.re,t.pose.a.im,t.pose.b.re,t.pose.b.im,t.window.center.x,t.window.center.y,t.window.scale].map(n=>Pt(n,Gn)).join(",")}}const kr=Wn();function Sr(e,t,n=1e-9){return Math.abs(e.pose.a.re-t.pose.a.re)<n&&Math.abs(e.pose.a.im-t.pose.a.im)<n&&Math.abs(e.pose.b.re-t.pose.b.re)<n&&Math.abs(e.pose.b.im-t.pose.b.im)<n&&Math.abs(e.window.center.x-t.window.center.x)<n&&Math.abs(e.window.center.y-t.window.center.y)<n&&Math.abs(e.window.scale-t.window.scale)<n}const Hn=420;function zn(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function $n({projection:e,limits:t,initial:n,getAspect:r,aspect:a=1,margin:i,reduce:o}){const s=Nt(),c=l.useMemo(()=>t??ue(e,a,i).limits,[t,e,a,i]),h=l.useMemo(()=>He(e,a,i),[e,a,i]),u=l.useMemo(()=>n?Se(n,e,a,i):h,[n,e,a,i,h]),[f,y]=l.useState(u),[b,p]=l.useState(!0),[d,g]=l.useState({projection:e,aspect:a,margin:i});(d.projection!==e||d.aspect!==a||d.margin!==i)&&(g({projection:e,aspect:a,margin:i}),y(E=>b?u:Se(E,e,a,i)));const k=l.useRef(f);l.useEffect(()=>{k.current=f});const N=l.useRef(null),T=l.useCallback(()=>{N.current!==null&&(cancelAnimationFrame(N.current),N.current=null)},[]);l.useEffect(()=>T,[T]);const z=l.useRef(u);l.useEffect(()=>{z.current=u});const O=l.useCallback(()=>{if(T(),p(!0),s){y(u);return}const E=k.current,M=performance.now(),x=S=>{const R=Math.min(1,(S-M)/Hn);y(fn(E,z.current,zn(R))),N.current=R<1?requestAnimationFrame(x):null};N.current=requestAnimationFrame(x)},[T,s,u]),G=l.useCallback(E=>{if(T(),E.kind==="reset"){O();return}p(!1),y(M=>nn(M,E,e,{limits:c,home:u,aspect:r?.(),margin:i,reduce:o}))},[T,O,e,c,u,r,i,o]),$=l.useCallback(E=>{T(),p(!1),y(M=>ln(M,E,e,r?.()??1,o))},[T,e,r,o]);return l.useMemo(()=>({camera:f,home:u,baseline:h,onViewGesture:G,rotate:$,reset:O}),[f,u,h,G,$,O])}function qn(e,t){return e.startedAt===null?0:t-e.startedAt}function Bn(e,t){e.pendingInputAt===null&&(e.pendingInputAt=t)}function Yn(e,t){if(e.startedAt===null&&(e.startedAt=t),e.lastFrameAt!==null){const n=t-e.lastFrameAt;n>=0&&be(e.frames,n)}if(e.lastFrameAt=t,e.pendingInputAt!==null){const n=t-e.pendingInputAt;n>=0&&be(e.inputs,n),e.pendingInputAt=null}}function Kn(e){we(e.frames),we(e.inputs),e.pendingInputAt=null,e.lastFrameAt=null,e.startedAt=null}const Vn=250;function Ie(e){const t=Ot(e.frames);return{fps:t.fps,medianMs:t.medianMs,p95Ms:t.p95Ms,inputP95Ms:Dt(e.inputs,.95),frames:t.count,elapsedMs:qn(e,performance.now()),mapping:Xn()}}function Xn(){if(typeof document>"u")return;const e=document.querySelector("canvas");if(!e)return;const t=e.getBoundingClientRect(),n=window.devicePixelRatio||1,r=t.width>0?e.width/(t.width*n):1;return{dpr:n,cssWidth:t.width,cssHeight:t.height,bufferWidth:e.width,bufferHeight:e.height,scale:r}}function ne(e){return e!==void 0&&Number.isFinite(e)?`${e.toFixed(1)}ms`:"—"}const Qn=({diagnostics:e})=>{const[t,n]=l.useState(null);l.useEffect(()=>{const c=setInterval(()=>n(Ie(e)),Vn);return()=>clearInterval(c)},[e]);const r=l.useCallback(()=>{Kn(e),n(Ie(e))},[e]),a=(t?.elapsedMs??0)/1e3,i=Math.floor(a/60),o=Math.floor(a%60),s=t?.fps;return v.jsxs("div",{className:ve(Ft,"pointer-events-auto font-mono text-[11px] leading-tight"),role:"status","aria-label":"Rendering diagnostics",children:[v.jsxs("div",{children:[s!==void 0&&Number.isFinite(s)?s.toFixed(0):"—"," fps median"]}),v.jsxs("div",{children:["frame p50 ",ne(t?.medianMs)," · p95 ",ne(t?.p95Ms)]}),v.jsxs("div",{children:["input→frame p95 ",ne(t?.inputP95Ms)]}),v.jsxs("div",{children:[i,"m ",String(o).padStart(2,"0"),"s · ",t?.frames??0," frames"]}),t?.mapping&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"mt-1",children:["dpr ",t.mapping.dpr," · css"," ",t.mapping.cssWidth.toFixed(1),"×",t.mapping.cssHeight.toFixed(1)]}),v.jsxs("div",{children:["buffer ",t.mapping.bufferWidth,"×",t.mapping.bufferHeight]}),v.jsxs("div",{className:ve(Math.abs(t.mapping.scale-1)>.001&&"font-bold"),children:["buffer/device ",t.mapping.scale.toFixed(4),Math.abs(t.mapping.scale-1)>.001?" ← resampled":" ✓"]})]}),v.jsx("button",{type:"button",className:"mt-1 w-full rounded border border-current/30 px-1 text-[10px] opacity-70 hover:opacity-100",onClick:r,children:"reset"})]})},jn=({diagnostics:e})=>(Ht(()=>Yn(e,performance.now())),null),V=1,Jn=2;function Ae(){return typeof window>"u"?V:Math.min(Jn,Math.max(V,window.devicePixelRatio||V))}function Zn(){const[e,t]=l.useState(Ae);return l.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;let n=null,r=!1;const a=()=>{if(r)return;const o=window.devicePixelRatio||V;n=window.matchMedia(`(resolution: ${o}dppx)`),n.addEventListener("change",i,{once:!0})},i=()=>{t(Ae()),a()};return a(),()=>{r=!0,n?.removeEventListener("change",i)}},[]),e}function Re(e){if(typeof e=="number")return e;if(e.length===2)return new re(e[0],e[1]);if(e.length===3)return new ae(e[0],e[1],e[2]);throw new Error(`unsupported uniform arity: ${e.length}`)}const er=({fragmentShader:e,uniforms:t,textures:n})=>{const r=zt(o=>o.invalidate),a=l.useMemo(()=>{const o={};for(const[s,c]of Object.entries(t))o[s]={value:Re(c)};for(const s of Object.keys(n??{}))o[s]={value:null};return new $t({uniforms:o,vertexShader:gn,fragmentShader:e})},[e]);l.useEffect(()=>()=>{a.dispose()},[a]),l.useEffect(()=>{for(const[o,s]of Object.entries(t)){const c=a.uniforms[o];if(!c)continue;const h=Re(s);(h instanceof re||h instanceof ae)&&(c.value instanceof re||c.value instanceof ae)?c.value.fromArray(s):c.value=h}r()},[a,t,r]),l.useEffect(()=>{for(const[o,s]of Object.entries(n??{})){const c=a.uniforms[o];c&&(c.value=s)}r()},[a,n,r]);const i=l.useMemo(()=>{const o=new qt;return o.setDrawRange(0,3),o},[]);return l.useEffect(()=>()=>{i.dispose()},[i]),v.jsx("mesh",{material:a,geometry:i})},tr=2;function nr(e,t){if(!e||t.pixelWidth<=0||t.pixelHeight<=0)return 0;const n=t.pixelWidth/2,r=t.pixelHeight/2;return Math.max((e.left??0)/n,(e.right??0)/n,(e.top??0)/r,(e.bottom??0)/r)}function rr(e){const t=Ne(e),n=t.aspect>=1?[t.aspect,1]:[1,1/t.aspect];return{SQ_QUARTER_K:t.quarterK,SQ_QUARTER_KP:t.quarterKp,SQ_MODULUS:t.k,SQ_MODULUS_COMPLEMENT:Math.sqrt(Math.max(0,1-t.k*t.k)),SQ_CENTER_SCALE:t.centerScale,SQ_HALF_EXTENT:n}}function ar(e,t){return{tintPrimary:e.tintPrimary,tintSecondary:e.tintSecondary,tintTertiary:e.tintTertiary,inkColor:e.inkColor,inkWidth:e.inkWidth*t}}function ir(e){return{guideStrength:e==="create"?1:0}}function or(e){return{motifOnTile:e?1:0}}const Mr=({scene:e,mode:t="explore",brush:n=Dn,palette:r,motifStyle:a,onTile:i=!1,theme:o="light",className:s,safeInset:c,initialCamera:h,onCameraChange:u,onWindowChange:f,initialWindow:y,motif:b,diagnostics:p})=>{const d=l.useRef(1),[g,k]=l.useState(1),[N,T]=l.useState(0),z=l.useCallback(m=>{d.current=m.aspect,k(A=>Math.abs(A-m.aspect)<1e-6?A:m.aspect);const w=nr(c,m);T(A=>Math.abs(A-w)<1e-6?A:w)},[c]),O=l.useCallback(()=>d.current,[]),G=r??jt(o),$=Zn(),E=Vt(a),M=e.projection??"poincare",x=e.kind==="hyperbolic",S=$n({projection:M,initial:h,getAspect:O,aspect:g,margin:N,reduce:e.reducePose}),[R,Xe]=l.useState(y??Be),Qe=x?S.camera:{window:R},[q,je]=l.useState(!1),[ye,Je]=l.useState(null),Ze=l.useCallback(({log:m})=>Je(m||"no driver log"),[]);if(ye!==null)throw new Error(`This scene's shader could not be compiled — ${ye}`);const et=l.useCallback(m=>{if(p&&Bn(p,performance.now()),q||je(!0),t==="create"&&m.kind==="pan"){const w=e.locate(m.to,x?{...S.camera,aspect:d.current}:{window:R},i);m.last?b.endStroke():w&&(m.first?b.beginStroke(w,n):b.extendStroke(w));return}x?S.onViewGesture(m):Xe(w=>pn(w,m))},[p,q,t,e,x,S,R,b,n,i]);l.useEffect(()=>{x&&u?.(S.camera,S.baseline)},[x,S.camera,S.baseline,u]),l.useEffect(()=>{x||f?.(R)},[x,R,f]);const D=e.symmetryOrder?2*Math.PI/e.symmetryOrder:0,U=S.rotate,B=x&&t!=="create"?on(S.camera,M,{aspect:g}):null,tt=l.useMemo(()=>B?[[B[0],B[1]]]:[],[B]),nt=l.useMemo(()=>({controlPoints:[{key:"rotate",label:"Rotate the tiling"}]}),[]),rt=l.useCallback(m=>{const w=m[0];w&&U(sn(S.camera,M,w,{aspect:d.current,step:D}))},[U,S.camera,M,D]);l.useEffect(()=>{if(!x||D===0)return;const m=w=>{if(w.metaKey||w.ctrlKey||w.altKey)return;const A=w.target;if(!(A?.isContentEditable||A&&/^(INPUT|TEXTAREA|SELECT)$/.test(A.tagName))){if(w.key==="[")U(-D);else if(w.key==="]")U(D);else return;w.preventDefault()}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,D,U]);const at=l.useMemo(()=>({baseViewSize:tr}),[]),it=l.useCallback(()=>{const m=[];return t!=="create"&&m.push({align:"NW",content:`${e.blurb} Symmetry ${e.orbifold}.`,maxWidth:340}),t==="create"?m.push({align:"SC",content:"Drawing — pinch or shift-drag to move the view"}):q||m.push({align:"MC",content:x?`Drag to travel
Pinch or scroll to reframe
Drag the dot to turn`:`Drag to pan
Pinch or scroll to zoom`}),p&&m.push({align:"SE",content:v.jsx(Qn,{diagnostics:p})}),m},[e.orbifold,e.blurb,t,q,x,p]),ot=l.useMemo(()=>({mode:"auto"}),[]);return v.jsx(Lt,{className:s,viewParams:at,safeInset:c,frameloop:"demand",panZoom:!1,onViewChange:z,onViewGesture:et,onInfoOverlay:it,infoOverlayConfig:ot,controlPoints:tt,onControlPointsChange:rt,controlPointParams:nt,onContextRestored:b.rebuild,onShaderError:Ze,children:m=>{const w={...hn(Qe.window,m),...ar(G,$),...ir(t),...or(i),...x?{...cn(S.camera),background:G.background,...M==="rect"?rr(m.aspect):{}}:{cellSize:e.cellSize}};return v.jsxs(v.Fragment,{children:[v.jsx(er,{fragmentShader:e.shaderFor(E),uniforms:w,textures:{motifTexture:b.texture}}),p&&v.jsx(jn,{diagnostics:p})]})}},e.name)};export{vr as B,he as D,_n as E,Pn as H,Be as I,pr as M,br as P,Mr as T,wr as a,En as b,Cn as c,kr as d,mr as e,Vt as f,gr as g,yr as h,Sr as i,Le as j,Rn as s,xr as u};
