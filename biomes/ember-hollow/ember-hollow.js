/* Biome: Ember Hollow
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 40, // position in the menu list (lower comes first)
  name: "Ember Hollow",  // shown in menus
  skyT: "#ecc9ab",  // sky colour at the top
  skyB: "#d98d70",  // sky colour at the horizon
  sun: "#ffe7c7",  // sun / moon colour
  far: ["#bb7c6c", "#9b6058"],  // distant hills, back to front
  top: "#7f5447",  // grass / topsoil
  mid: "#5c3b35",  // dirt
  deep: "#33222a",  // deep rock
  cap: "#d79a5f",  // edge highlight
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "embers",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 30,  // pushes particles and bullets a little
  props: [["dead", 0.6], ["rock", 0.4], ["barrel", 0.1]],  // [prop kind, how common]
  bgTrees: "dead",  // silhouette trees behind the map
  cloud: "#f2c3a6",
  water: "#c45a30",
  grass: 0.15,
  under: [],
  grassCol: ["#6a4a3a", "#9a6a4a"],
  critters: 1,  // little animals that wander around
});
