/* Biome: Snowfield
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 110, // position in the menu list (lower comes first)
  name: "Snowfield",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "snow",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -35,  // pushes particles and bullets a little
  pits: 1,
  puddles: 2,
  skyT: "#d7e3ee",  // sky colour at the top
  skyB: "#f4f1ea",  // sky colour at the horizon
  sun: "#ffffff",  // sun / moon colour
  far: ["#bccbd8", "#9fb2c4"],  // distant hills, back to front
  top: "#eef1f2",  // grass / topsoil
  mid: "#93a1ad",  // dirt
  deep: "#4e5a68",  // deep rock
  cap: "#ffffff",  // edge highlight
  props: [["snowpine", 1], ["rock", 0.3], ["lantern", 0.04]],  // [prop kind, how common]
  bgTrees: "snowpines",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#7fb7d3",
  icy: true,
  grass: 0.15,
  grassCol: ["#a9b9a0", "#f1f6f2"],
  critters: 3,  // little animals that wander around
});
