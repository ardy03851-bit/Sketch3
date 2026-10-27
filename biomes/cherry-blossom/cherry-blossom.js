/* Biome: Cherry Blossom
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 150, // position in the menu list (lower comes first)
  name: "Cherry Blossom",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "petals",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 32,  // pushes particles and bullets a little
  pits: 0,
  puddles: 2,
  pond: true,
  skyT: "#f5d6dc",  // sky colour at the top
  skyB: "#fbf0e3",  // sky colour at the horizon
  sun: "#fffaf2",  // sun / moon colour
  far: ["#d9b3c0", "#c49aac"],  // distant hills, back to front
  top: "#7c6656",  // grass / topsoil
  mid: "#5c4a41",  // dirt
  deep: "#33282a",  // deep rock
  cap: "#86a65a",  // edge highlight
  props: [["cherry", 0.9], ["bush", 0.3], ["flowers", 0.3], ["lantern", 0.1], ["rock", 0.1]],  // [prop kind, how common]
  bgTrees: "cherry",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#7fa9c0",
  leaf: ["#f7b6c8", "#f39bb4", "#fde2ea"],
  grass: 0.85,
});
