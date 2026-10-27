/* Biome: Desert Oasis
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 250, // position in the menu list (lower comes first)
  name: "Desert Oasis",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sand",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 60,  // pushes particles and bullets a little
  pits: 1,
  pond: true,
  skyT: "#f0c888",  // sky colour at the top
  skyB: "#f8e6c0",  // sky colour at the horizon
  sun: "#fff4d4",  // sun / moon colour
  far: ["#e0a870", "#c48858"],  // distant hills, back to front
  top: "#e0b070",  // grass / topsoil
  mid: "#b88050",  // dirt
  deep: "#6a4430",  // deep rock
  cap: "#ecc480",  // edge highlight
  props: [["palm", 0.7], ["cactus", 0.5], ["rock", 0.3], ["crate", 0.1], ["lantern", 0.05]],  // [prop kind, how common]
  under: [["tallgrass", 1], ["bush", 0.3]],
  bgTrees: "mesas",  // silhouette trees behind the map
  cloud: "#fae6c8",
  haze: 0.2,
  water: "#3fa8b4",
  grass: 0.2,
  grassCol: ["#8a9a4a", "#c8c870"],
});
