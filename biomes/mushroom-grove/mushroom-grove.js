/* Biome: Mushroom Grove
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 220, // position in the menu list (lower comes first)
  name: "Mushroom Grove",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fireflies",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 8,  // pushes particles and bullets a little
  pits: 1,
  puddles: 2,
  skyT: "#5a4a6a",  // sky colour at the top
  skyB: "#c98a8a",  // sky colour at the horizon
  sun: "#ffd8b0",  // sun / moon colour
  sunLow: true,
  far: ["#6a4a64", "#523a52"],  // distant hills, back to front
  top: "#6a5244",  // grass / topsoil
  mid: "#4a3a34",  // dirt
  deep: "#261e1e",  // deep rock
  cap: "#8a9a5a",  // edge highlight
  props: [["giantshroom", 1], ["mushroom", 0.6], ["fern", 0.4], ["lantern", 0.08]],  // [prop kind, how common]
  under: [["mushroom", 0.8], ["fern", 0.6], ["flowers", 0.3]],
  bgTrees: "shrooms",  // silhouette trees behind the map
  cloud: "#d8a0a8",
  dark: 0.18,
  water: "#6a8ab0",
  grass: 0.7,
  treeDensity: 1.2,  // how many trees
});
