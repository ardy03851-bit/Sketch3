/* Biome: Tropical Islands
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 70, // position in the menu list (lower comes first)
  name: "Tropical Islands",  // shown in menus
  style: "sea",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "none",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 25,  // pushes particles and bullets a little
  skyT: "#8fd3ea",  // sky colour at the top
  skyB: "#e9f3dc",  // sky colour at the horizon
  sun: "#fff9dc",  // sun / moon colour
  far: ["#9fd0c9", "#7fb9b2"],  // distant hills, back to front
  top: "#e6c98e",  // grass / topsoil
  mid: "#c49a62",  // dirt
  deep: "#7b5b3d",  // deep rock
  cap: "#e9d9a3",  // edge highlight
  props: [["palm", 0.9], ["bush", 0.25], ["rock", 0.2], ["barrel", 0.08], ["crate", 0.06]],  // [prop kind, how common]
  bgTrees: "palms",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#2ba6bd",
  shallow: "#7fe0d9",
  grass: 0.3,
  grassCol: ["#7f9a4f", "#b8c46a"],
});
