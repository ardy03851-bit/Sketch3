/* Biome: Savanna Sunset
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 180, // position in the menu list (lower comes first)
  name: "Savanna Sunset",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "dust",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 22,  // pushes particles and bullets a little
  pits: 1,
  puddles: 1,
  skyT: "#f19a5c",  // sky colour at the top
  skyB: "#f6d58e",  // sky colour at the horizon
  sun: "#ffe2a0",  // sun / moon colour
  sunLow: true,
  far: ["#c97a52", "#a65a44"],  // distant hills, back to front
  top: "#b07a46",  // grass / topsoil
  mid: "#865530",  // dirt
  deep: "#4a2e1f",  // deep rock
  cap: "#d2a850",  // edge highlight
  props: [["acacia", 0.8], ["baobab", 0.25], ["tallgrass", 0.7], ["rock", 0.3]],  // [prop kind, how common]
  under: [["tallgrass", 1]],
  bgTrees: "acacias",  // silhouette trees behind the map
  cloud: "#ffd7a8",
  water: "#6c9aa0",
  grass: 0.7,
  grassCol: ["#a8823a", "#e0b860"],
  leafTone: "#7d8a3a",
});
