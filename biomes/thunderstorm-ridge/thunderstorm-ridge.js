/* Biome: Thunderstorm Ridge
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 60, // position in the menu list (lower comes first)
  name: "Thunderstorm Ridge",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "storm",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -130,  // pushes particles and bullets a little
  pits: 2,
  puddles: 3,
  skyT: "#3c4152",  // sky colour at the top
  skyB: "#69687a",  // sky colour at the horizon
  sun: "#c7cbe0",  // sun / moon colour
  sunKind: "none",
  far: ["#4c5163", "#3c4050"],  // distant hills, back to front
  top: "#5e5a5c",  // grass / topsoil
  mid: "#454146",  // dirt
  deep: "#25232a",  // deep rock
  cap: "#5f7e58",  // edge highlight
  props: [["pine", 0.5], ["dead", 0.35], ["rock", 0.3], ["barrel", 0.15]],  // [prop kind, how common]
  bgTrees: "pines",  // silhouette trees behind the map
  cloud: "#7d8092",
  overcast: 0.55,
  dark: 0.32,
  water: "#4a6475",
  grass: 0.6,
  critters: 2,  // little animals that wander around
});
