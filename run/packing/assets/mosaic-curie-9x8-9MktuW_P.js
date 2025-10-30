const e=`# Iamond Mosaic ladder, step 3 — the Curie portrait on a 9×8 zigzag block
# (72 triangles, portrait aspect) cut into the full set of twelve hexiamonds
# (mask is a real engine tiling). The same "all twelve" challenge as the
# Iamond Fill flagship — the picture is what makes it tractable.
id: mosaic-curie-9x8
title: Curie · 12 hexiamonds
space: trihex
genus: iamond-mosaic
order: 3
mosaic:
  image: curie.jpg
  mask:
    - 'AAABBCCCC'
    - 'AAAGBBCDC'
    - 'GGGGGBBDD'
    - 'IIIHHHHDD'
    - 'IIIJJHHDE'
    - 'KKJJJJEEE'
    - 'KKLLLLEEF'
    - 'KKLLFFFFF'
about: |
  Marie Curie — two Nobel Prizes in two different sciences, still the only
  person to manage it — photographed around 1920. Her portrait is cut into
  **all twelve hexiamonds**, every shape six triangles can make, each used
  exactly once. Without the picture this is the full Iamond Fill challenge;
  with it, every slice whispers its home. Photo Henri Manuel (c. 1920) —
  public domain, via Wikimedia Commons.
`;export{e as default};
