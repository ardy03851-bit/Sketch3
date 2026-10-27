/* Biome: Dust Bowl
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 10, // position in the menu list (lower comes first)
  name: "Dust Bowl",  // shown in menus
  skyT: "#f2dcb9",  // sky colour at the top
  skyB: "#e7b48b",  // sky colour at the horizon
  sun: "#fff3d6",  // sun / moon colour
  far: ["#dcae86", "#c98f6f"],  // distant hills, back to front
  top: "#c98a55",  // grass / topsoil
  mid: "#a4643f",  // dirt
  deep: "#6a3c2e",  // deep rock
  cap: "#e8bb72",  // edge highlight
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "dust",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 18,  // pushes particles and bullets a little
  props: [["cactus", 0.5], ["rock", 0.45], ["bush", 0.2], ["dead", 0.15], ["barrel", 0.1]],  // [prop kind, how common]
  bgTrees: "none",  // silhouette trees behind the map
  cloud: "#fff6e8",
  water: "#5aa6b8",
  grass: 0.25,
  under: [["tallgrass", 1]],
  grassCol: ["#a88a4a", "#d8b86a"],
});
