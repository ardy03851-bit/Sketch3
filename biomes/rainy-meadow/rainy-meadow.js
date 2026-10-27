/* Biome: Rainy Meadow
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 50, // position in the menu list (lower comes first)
  name: "Rainy Meadow",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "rain",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -55,  // pushes particles and bullets a little
  pits: 1,
  puddles: 4,
  skyT: "#aab7bf",  // sky colour at the top
  skyB: "#cfd2c8",  // sky colour at the horizon
  sun: "#e9eee9",  // sun / moon colour
  sunKind: "none",
  far: ["#97a99a", "#7d9281"],  // distant hills, back to front
  top: "#7b6a4c",  // grass / topsoil
  mid: "#5c4d3a",  // dirt
  deep: "#33291f",  // deep rock
  cap: "#6f9e4c",  // edge highlight
  props: [["oak", 0.5], ["birch", 0.25], ["bush", 0.55], ["reeds", 0.3], ["flowers", 0.3], ["mushroom", 0.12]],  // [prop kind, how common]
  bgTrees: "oaks",  // silhouette trees behind the map
  cloud: "#e4e8e8",
  overcast: 0.35,
  water: "#5f8fa3",
  leaf: ["#6f9e4c", "#8cb35a"],
  grass: 1,
});
