/* Biome: Starfall Plateau
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 310, // position in the menu list (lower comes first)
  name: "Starfall Plateau",  // shown in menus
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sparkle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 0,  // pushes particles and bullets a little
  skyT: "#141633",  // sky colour at the top
  skyB: "#4a3a78",  // sky colour at the horizon
  sun: "#f3eaff",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#2c2a55", "#221f45"],  // distant hills, back to front
  top: "#5b5a8a",  // grass / topsoil
  mid: "#3c3560",  // dirt
  deep: "#1d1834",  // deep rock
  cap: "#9a9ad8",  // edge highlight
  props: [["crystal", 0.55], ["rock", 0.4], ["pillar", 0.2], ["dead", 0.15], ["lantern", 0.1]],  // [prop kind, how common]
  under: [["tallgrass", 0.4], ["mushroom", 0.2]],
  bgTrees: "crystals",  // silhouette trees behind the map
  cloud: "#3a3a66",
  dark: 0.35,
  grass: 0.4,
  grassCol: ["#4a4a7a", "#7070a8"],
  crystal: "#a8d0ff",
  critters: 2,  // little animals that wander around
});
