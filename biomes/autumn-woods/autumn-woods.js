/* Biome: Autumn Woods
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 100, // position in the menu list (lower comes first)
  name: "Autumn Woods",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 45,  // pushes particles and bullets a little
  pits: 1,
  puddles: 2,
  skyT: "#f0c99a",  // sky colour at the top
  skyB: "#f6e2c3",  // sky colour at the horizon
  sun: "#fff1d0",  // sun / moon colour
  far: ["#d59b6a", "#b9784f"],  // distant hills, back to front
  top: "#8a5a3b",  // grass / topsoil
  mid: "#66412f",  // dirt
  deep: "#3a241e",  // deep rock
  cap: "#c8742f",  // edge highlight
  props: [["autumn", 1], ["birch", 0.25], ["bush", 0.3], ["mushroom", 0.3], ["pumpkin", 0.12]],  // [prop kind, how common]
  bgTrees: "autumn",  // silhouette trees behind the map
  cloud: "#fff2df",
  leaf: ["#d9573b", "#e9a23b", "#c8742f", "#b5452d"],
  water: "#6f8b8c",
  grass: 0.7,
  grassCol: ["#8a7a3a", "#c8a050"],
});
