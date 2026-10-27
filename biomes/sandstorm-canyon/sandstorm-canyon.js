/* Biome: Sandstorm Canyon
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 140, // position in the menu list (lower comes first)
  name: "Sandstorm Canyon",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sand",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 190,  // pushes particles and bullets a little
  pits: 2,
  skyT: "#e7b46f",  // sky colour at the top
  skyB: "#f0d3a0",  // sky colour at the horizon
  sun: "#fff0c8",  // sun / moon colour
  far: ["#d4955c", "#b97a4a"],  // distant hills, back to front
  top: "#d18b4c",  // grass / topsoil
  mid: "#a5643a",  // dirt
  deep: "#5f3626",  // deep rock
  cap: "#e8b16a",  // edge highlight
  props: [["cactus", 0.8], ["rock", 0.5], ["barrel", 0.25], ["crate", 0.1]],  // [prop kind, how common]
  bgTrees: "mesas",  // silhouette trees behind the map
  cloud: "#f7dcb5",
  haze: 0.3,
  water: "#5aa6b8",
  grass: 0.1,
  under: [["tallgrass", 1]],
  critters: 1,  // little animals that wander around
});
