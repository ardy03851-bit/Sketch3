/* Biome: Haunted Hill
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 230, // position in the menu list (lower comes first)
  name: "Haunted Hill",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "fog",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -20,  // pushes particles and bullets a little
  pits: 1,
  puddles: 1,
  skyT: "#1a1c2a",  // sky colour at the top
  skyB: "#4a4458",  // sky colour at the horizon
  sun: "#f2ecd0",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#2e2c3c", "#24222f"],  // distant hills, back to front
  top: "#4a4440",  // grass / topsoil
  mid: "#33302d",  // dirt
  deep: "#1a1816",  // deep rock
  cap: "#5a6040",  // edge highlight
  props: [["dead", 0.7], ["gravestone", 0.6], ["pumpkin", 0.35], ["lantern", 0.1]],  // [prop kind, how common]
  under: [["tallgrass", 0.6], ["pumpkin", 0.2]],
  bgTrees: "graves",  // silhouette trees behind the map
  cloud: "#4a4a5a",
  fog: 0.5,
  dark: 0.4,
  water: "#3a4a50",
  grass: 0.5,
  grassCol: ["#3a4030", "#5a6448"],
  critters: 4,  // little animals that wander around
});
