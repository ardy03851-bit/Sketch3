/* Biome: Sunset Lagoon
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 80, // position in the menu list (lower comes first)
  name: "Sunset Lagoon",  // shown in menus
  style: "sea",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sparkle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 15,  // pushes particles and bullets a little
  skyT: "#f2a36b",  // sky colour at the top
  skyB: "#f7d29a",  // sky colour at the horizon
  sun: "#ffe7b0",  // sun / moon colour
  far: ["#d68a6f", "#b86e62"],  // distant hills, back to front
  top: "#d9a46c",  // grass / topsoil
  mid: "#a76e4b",  // dirt
  deep: "#5b3a33",  // deep rock
  cap: "#efc27d",  // edge highlight
  props: [["palm", 0.8], ["bush", 0.3], ["rock", 0.2], ["lantern", 0.05]],  // [prop kind, how common]
  bgTrees: "palms",  // silhouette trees behind the map
  cloud: "#ffd9bd",
  water: "#e07a63",
  shallow: "#f5b88a",
  sunLow: true,
  grass: 0.3,
});
