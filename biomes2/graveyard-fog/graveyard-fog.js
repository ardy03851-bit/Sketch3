/* Biome: Graveyard Fog
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 20, // position in the menu list (lower comes first)
  name: "Graveyard Fog",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fog",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -10,  // pushes particles and bullets a little
  pits: 2,
  puddles: 2,
  skyT: "#0e1020",  // sky colour at the top
  skyB: "#3c3a58",  // sky colour at the horizon
  sun: "#e8f0d8",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#262638", "#1c1c2c"],  // distant hills, back to front
  top: "#3e4238",  // grass / topsoil
  mid: "#2e2a28",  // dirt
  deep: "#141212",  // deep rock
  cap: "#56604a",  // edge highlight
  props: [["gravestone", 0.9], ["dead", 0.6], ["lamp", 0.15], ["pumpkin", 0.2], ["rock", 0.2]],  // [prop kind, how common]
  under: [["tallgrass", 0.6], ["pumpkin", 0.15]],
  bgTrees: "graves",  // silhouette trees behind the map
  cloud: "#3a3a4a",
  fog: 0.75,
  dark: 0.5,
  water: "#2e3e44",
  grass: 0.6,
  grassCol: ["#343a2c", "#566248"],
  critters: 3,  // little animals that wander around
});
