/* Biome: Birch Grove
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 190, // position in the menu list (lower comes first)
  name: "Birch Grove",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 18,  // pushes particles and bullets a little
  pits: 1,
  puddles: 2,
  skyT: "#dde7ea",  // sky colour at the top
  skyB: "#f3efe2",  // sky colour at the horizon
  sun: "#fffdf2",  // sun / moon colour
  far: ["#b6c8b4", "#93ad97"],  // distant hills, back to front
  top: "#806a50",  // grass / topsoil
  mid: "#5e4d3c",  // dirt
  deep: "#33291f",  // deep rock
  cap: "#a8b85a",  // edge highlight
  props: [["birch", 1], ["bush", 0.35], ["flowers", 0.35], ["fern", 0.3], ["mushroom", 0.15]],  // [prop kind, how common]
  bgTrees: "birches",  // silhouette trees behind the map
  cloud: "#ffffff",
  water: "#6a9fb0",
  leaf: ["#c8c860", "#e0c860", "#a8b85a"],
  grass: 0.9,
  leafTone: "#a8b85a",
});
