/* Biome: Volcano
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 130, // position in the menu list (lower comes first)
  name: "Volcano",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "ash",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 35,  // pushes particles and bullets a little
  pits: 1,
  lavaPools: 3,
  skyT: "#40272b",  // sky colour at the top
  skyB: "#a3523b",  // sky colour at the horizon
  sun: "#ffc07a",  // sun / moon colour
  sunKind: "none",
  far: ["#5c3030", "#3e2427"],  // distant hills, back to front
  top: "#4a3735",  // grass / topsoil
  mid: "#33262a",  // dirt
  deep: "#1a1216",  // deep rock
  cap: "#6b4a3a",  // edge highlight
  props: [["dead", 0.45], ["rock", 0.5], ["barrel", 0.1]],  // [prop kind, how common]
  bgTrees: "volcano",  // silhouette trees behind the map
  cloud: "#5b4040",
  dark: 0.25,
  water: "#ff6a1f",
  lava: true,
  grass: 0,
  under: [],
  critters: 0,  // little animals that wander around
});
