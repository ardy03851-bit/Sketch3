/* Biome: Sunken Ruins
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 240, // position in the menu list (lower comes first)
  name: "Sunken Ruins",  // shown in menus
  style: "sea",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sparkle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 12,  // pushes particles and bullets a little
  skyT: "#9ad0d8",  // sky colour at the top
  skyB: "#eef0dc",  // sky colour at the horizon
  sun: "#fffbe0",  // sun / moon colour
  far: ["#9cc4bc", "#7aa8a4"],  // distant hills, back to front
  top: "#c8b890",  // grass / topsoil
  mid: "#9a8a68",  // dirt
  deep: "#5a5040",  // deep rock
  cap: "#a8b870",  // edge highlight
  props: [["pillar", 0.7], ["palm", 0.4], ["rock", 0.3], ["bush", 0.3], ["fern", 0.2]],  // [prop kind, how common]
  bgTrees: "ruins",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#2f9aa8",
  shallow: "#80d4cc",
  grass: 0.4,
});
