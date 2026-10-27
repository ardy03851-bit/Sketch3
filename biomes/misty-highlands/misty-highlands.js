/* Biome: Misty Highlands
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 280, // position in the menu list (lower comes first)
  name: "Misty Highlands",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "drizzle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -14,  // pushes particles and bullets a little
  pits: 1,
  puddles: 2,
  skyT: "#c9d3d2",  // sky colour at the top
  skyB: "#e6e6dc",  // sky colour at the horizon
  sun: "#f6f3e6",  // sun / moon colour
  overcast: true,
  far: ["#a9b6b0", "#8c9b95"],  // distant hills, back to front
  top: "#7d9467",  // grass / topsoil
  mid: "#6b5a48",  // dirt
  deep: "#3b3430",  // deep rock
  cap: "#a9bf86",  // edge highlight
  props: [["pine", 0.55], ["rock", 0.5], ["fern", 0.3], ["bush", 0.25], ["birch", 0.15]],  // [prop kind, how common]
  under: [["tallgrass", 0.7], ["fern", 0.3]],
  bgTrees: "pines",  // silhouette trees behind the map
  cloud: "#eef0ea",
  fog: 0.35,
  haze: 0.25,
  grass: 0.9,
  grassCol: ["#6f8a5a", "#9fb682"],
  leaf: ["#6f8a5a", "#9fb682"],
  critters: 4,  // little animals that wander around
  treeDensity: 1,  // how many trees
  plantDensity: 1.1,  // how many small plants
});
