/* Biome: Night Swamp
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 120, // position in the menu list (lower comes first)
  name: "Night Swamp",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fireflies",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 6,  // pushes particles and bullets a little
  pits: 1,
  puddles: 4,
  swamp: true,
  skyT: "#1c2433",  // sky colour at the top
  skyB: "#3b4a48",  // sky colour at the horizon
  sun: "#e6f0d0",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#2f3d3b", "#263230"],  // distant hills, back to front
  top: "#4b4a36",  // grass / topsoil
  mid: "#35352a",  // dirt
  deep: "#1c1c18",  // deep rock
  cap: "#5c7040",  // edge highlight
  props: [["dead", 0.4], ["willow", 0.3], ["reeds", 0.7], ["mushroom", 0.25], ["lantern", 0.1], ["lamp", 0.04]],  // [prop kind, how common]
  bgTrees: "dead",  // silhouette trees behind the map
  cloud: "#59625f",
  fog: 0.55,
  dark: 0.45,
  water: "#3c5a3d",
  grass: 0.65,
  grassCol: ["#3e4a2a", "#5c7040"],
});
