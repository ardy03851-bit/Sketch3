/* Biome: Willow Marsh
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 200, // position in the menu list (lower comes first)
  name: "Willow Marsh",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "drizzle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -14,  // pushes particles and bullets a little
  pits: 1,
  puddles: 4,
  swamp: true,
  skyT: "#b9c4bb",  // sky colour at the top
  skyB: "#dfe0cf",  // sky colour at the horizon
  sun: "#f2f4e6",  // sun / moon colour
  sunKind: "none",
  far: ["#8ea08e", "#728a78"],  // distant hills, back to front
  top: "#5e5a40",  // grass / topsoil
  mid: "#45422f",  // dirt
  deep: "#25241a",  // deep rock
  cap: "#7a9a50",  // edge highlight
  props: [["willow", 1], ["reeds", 0.8], ["bush", 0.3], ["lantern", 0.08]],  // [prop kind, how common]
  under: [["reeds", 1], ["tallgrass", 0.6]],
  bgTrees: "willows",  // silhouette trees behind the map
  cloud: "#e6ebe4",
  overcast: 0.3,
  fog: 0.3,
  water: "#5d7f62",
  grass: 0.8,
  grassCol: ["#5c6a3a", "#8aa05a"],
});
