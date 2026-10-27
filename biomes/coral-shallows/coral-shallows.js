/* Biome: Coral Shallows
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 290, // position in the menu list (lower comes first)
  name: "Coral Shallows",  // shown in menus
  style: "sea",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sparkle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 10,  // pushes particles and bullets a little
  skyT: "#8fd6ea",  // sky colour at the top
  skyB: "#e8f6ee",  // sky colour at the horizon
  sun: "#fff8dc",  // sun / moon colour
  far: ["#9fd0c8", "#7fbcb6"],  // distant hills, back to front
  top: "#e6c98a",  // grass / topsoil
  mid: "#c79a62",  // dirt
  deep: "#7a5a44",  // deep rock
  cap: "#f4e2b0",  // edge highlight
  water: "#2fb5c0",
  shallow: "#7fe0d4",
  props: [["palm", 0.6], ["rock", 0.4], ["reeds", 0.25], ["bush", 0.2], ["crate", 0.06]],  // [prop kind, how common]
  under: [["reeds", 0.4], ["flowers", 0.2]],
  bgTrees: "palms",  // silhouette trees behind the map
  cloud: "#ffffff",
  grass: 0.4,
  grassCol: ["#7ab85a", "#a8d878"],
  critters: 3,  // little animals that wander around
});
