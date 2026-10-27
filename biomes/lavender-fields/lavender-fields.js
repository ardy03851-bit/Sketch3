/* Biome: Lavender Fields
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 270, // position in the menu list (lower comes first)
  name: "Lavender Fields",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "petals",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 24,  // pushes particles and bullets a little
  pits: 0,
  puddles: 1,
  skyT: "#d8d0ec",  // sky colour at the top
  skyB: "#f8eee0",  // sky colour at the horizon
  sun: "#fffaf0",  // sun / moon colour
  far: ["#b8a8d0", "#9a88b8"],  // distant hills, back to front
  top: "#7a6650",  // grass / topsoil
  mid: "#5a4a3c",  // dirt
  deep: "#30281f",  // deep rock
  cap: "#8aa05a",  // edge highlight
  props: [["lavender", 1], ["oak", 0.25], ["flowers", 0.4], ["rock", 0.1], ["lantern", 0.05]],  // [prop kind, how common]
  under: [["lavender", 1], ["flowers", 0.5]],
  bgTrees: "lavrows",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#7a9ac0",
  leaf: ["#b9a0e0", "#9b7fc7", "#f7e0f0"],
  flower: "#9b7fc7",
  grass: 0.9,
  leafTone: "#7d9a55",
  plantDensity: 2.2,  // how many small plants
  treeDensity: 0.5,  // how many trees
});
