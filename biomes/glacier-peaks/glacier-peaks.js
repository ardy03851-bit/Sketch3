/* Biome: Glacier Peaks
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 260, // position in the menu list (lower comes first)
  name: "Glacier Peaks",  // shown in menus
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "snow",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -50,  // pushes particles and bullets a little
  skyT: "#c8dcec",  // sky colour at the top
  skyB: "#eef2f2",  // sky colour at the horizon
  sun: "#ffffff",  // sun / moon colour
  far: ["#a8c0d4", "#88a4bc"],  // distant hills, back to front
  top: "#e8f0f4",  // grass / topsoil
  mid: "#8aa0b4",  // dirt
  deep: "#4a5a70",  // deep rock
  cap: "#ffffff",  // edge highlight
  props: [["snowpine", 0.8], ["crystal", 0.3], ["rock", 0.4]],  // [prop kind, how common]
  under: [],
  bgTrees: "snowpines",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#7ab8d8",
  icy: true,
  grass: 0.1,
  grassCol: ["#9ab0a8", "#eef6f4"],
  critters: 2,  // little animals that wander around
});
