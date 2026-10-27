/* Biome: Pine Forest
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 90, // position in the menu list (lower comes first)
  name: "Pine Forest",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fog",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 10,  // pushes particles and bullets a little
  pits: 1,
  puddles: 1,
  skyT: "#c7d8cc",  // sky colour at the top
  skyB: "#ecebd8",  // sky colour at the horizon
  sun: "#fffdf0",  // sun / moon colour
  far: ["#88a88f", "#6b8c74"],  // distant hills, back to front
  top: "#6e5a42",  // grass / topsoil
  mid: "#4f4032",  // dirt
  deep: "#2b231c",  // deep rock
  cap: "#5f8d4a",  // edge highlight
  props: [["pine", 1], ["oak", 0.25], ["fern", 0.5], ["mushroom", 0.3], ["bush", 0.3], ["rock", 0.2]],  // [prop kind, how common]
  bgTrees: "pines",  // silhouette trees behind the map
  cloud: "#ffffff",
  fog: 0.45,
  water: "#4f8b88",
  grass: 0.7,
  treeDensity: 1.3,  // how many trees
});
