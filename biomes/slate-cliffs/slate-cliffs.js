/* Biome: Slate Cliffs
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 20, // position in the menu list (lower comes first)
  name: "Slate Cliffs",  // shown in menus
  skyT: "#d3d9de",  // sky colour at the top
  skyB: "#e9c9b4",  // sky colour at the horizon
  sun: "#fff1e2",  // sun / moon colour
  far: ["#aeb6c2", "#9099a9"],  // distant hills, back to front
  top: "#8d93a2",  // grass / topsoil
  mid: "#61677a",  // dirt
  deep: "#393b4b",  // deep rock
  cap: "#c3cda6",  // edge highlight
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "none",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -30,  // pushes particles and bullets a little
  props: [["pine", 0.7], ["birch", 0.2], ["rock", 0.4], ["fern", 0.3]],  // [prop kind, how common]
  bgTrees: "pines",  // silhouette trees behind the map
  cloud: "#f1f3f5",
  water: "#4d8ea6",
  grass: 0.5,
});
