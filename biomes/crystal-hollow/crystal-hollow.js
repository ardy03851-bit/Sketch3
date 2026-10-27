/* Biome: Crystal Hollow
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 210, // position in the menu list (lower comes first)
  name: "Crystal Hollow",  // shown in menus
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "sparkle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 6,  // pushes particles and bullets a little
  skyT: "#1d1a36",  // sky colour at the top
  skyB: "#4b3a6a",  // sky colour at the horizon
  sun: "#d8ccff",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#3a2f5a", "#2a2346"],  // distant hills, back to front
  top: "#4e4766",  // grass / topsoil
  mid: "#352f4a",  // dirt
  deep: "#1a1726",  // deep rock
  cap: "#6a7fb0",  // edge highlight
  props: [["crystal", 0.8], ["giantshroom", 0.3], ["rock", 0.3], ["mushroom", 0.3]],  // [prop kind, how common]
  under: [["mushroom", 0.4], ["fern", 0.6]],
  bgTrees: "crystals",  // silhouette trees behind the map
  cloud: "#5a4e80",
  dark: 0.35,
  water: "#5a7ad0",
  crystal: "#a99cf5",
  grass: 0.35,
  grassCol: ["#4a5a8a", "#8aa0d0"],
  critters: 2,  // little animals that wander around
});
