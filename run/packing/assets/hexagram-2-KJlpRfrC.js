const e=`# The six-pointed star: two overlapped side-6 triangles, 48 cells, full D6
# symmetry. Of all 495 eight-piece hands, exactly one tiles it — and in exactly
# one way.
# Certified: 12 covers (1 past the star's twelve symmetries), matching parquet
# (2026-08-14).
id: hexagram-2
title: The Six-Pointed Star
space: tessera
genus: iamond-fill
order: 511
board: { p: 3, q: 6 }
orient: edge-down
region:
  mask:
    - ......#.....
    - .....###....
    - .###########
    - ..#########.
    - ..#########.
    - .###########
    - .....###....
    - ......#.....
pieces:
  - use: hexiamonds
    pick: [bar, crook, sphinx, yacht, chevron, lobster, hook, butterfly]
about: |
  Two side-6 triangles, one pointing up and one pointing down, overlapped
  into a star — the most symmetric board in the ladder, and the most
  selective. Eight hexiamonds fill its 48 cells, but the star does not
  accept just any eight: of all **495** possible hands from the full set of
  twelve, the engine proves that exactly **one** can tile it — and that hand
  fits in exactly **one** way (up to the star's own twelve symmetries).

  You hold the right eight pieces. The six points are the pressure: each is
  a tiny side-2 triangle open to the body through a three-cell gate, and
  most pieces that reach into a point seal its neighbors' fate. One
  arrangement in the universe works — find it.
`;export{e as default};
