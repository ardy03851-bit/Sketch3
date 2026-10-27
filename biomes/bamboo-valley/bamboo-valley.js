/* Biome: Bamboo Valley
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 170, // position in the menu list (lower comes first)
  name: "Bamboo Valley",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 28,  // pushes particles and bullets a little
  pits: 1,
  puddles: 1,
  pond: true,
  skyT: "#cfe3c6",  // sky colour at the top
  skyB: "#f3ecd4",  // sky colour at the horizon
  sun: "#fffbe8",  // sun / moon colour
  far: ["#a3c49a", "#7fa77d"],  // distant hills, back to front
  top: "#7a6b4a",  // grass / topsoil
  mid: "#57503a",  // dirt
  deep: "#2f2b22",  // deep rock
  cap: "#8fae4a",  // edge highlight
  props: [["bamboo", 1], ["fern", 0.5], ["rock", 0.25], ["lantern", 0.1]],  // [prop kind, how common]
  under: [["fern", 1], ["tallgrass", 0.6]],
  bgTrees: "bamboo",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#5f9c8c",
  leaf: ["#8fae4a", "#a8c060", "#6f8f3a"],
  grass: 0.8,
  treeDensity: 1.5,  // how many trees
});
