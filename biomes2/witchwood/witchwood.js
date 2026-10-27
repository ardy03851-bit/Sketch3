/* Biome: Witchwood
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 30, // position in the menu list (lower comes first)
  name: "Witchwood",  // shown in menus
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fireflies",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 0,  // pushes particles and bullets a little
  skyT: "#1a1030",  // sky colour at the top
  skyB: "#3e5a3a",  // sky colour at the horizon
  sun: "#d8ffb0",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#2a2a40", "#1e2a24"],  // distant hills, back to front
  top: "#4a5a34",  // grass / topsoil
  mid: "#3a2a30",  // dirt
  deep: "#1a1218",  // deep rock
  cap: "#8aa84a",  // edge highlight
  props: [["giantshroom", 0.45], ["mushroom", 0.5], ["dead", 0.4], ["crystal", 0.2], ["lantern", 0.1]],  // [prop kind, how common]
  under: [["mushroom", 0.4], ["fern", 0.4]],
  bgTrees: "shrooms",  // silhouette trees behind the map
  cloud: "#2a3a2a",
  fog: 0.4,
  dark: 0.45,
  water: "#3a7a3a",
  grass: 0.7,
  grassCol: ["#3e5a2a", "#6a8a3a"],
  crystal: "#9cff6a",
  critters: 3,  // little animals that wander around
});
