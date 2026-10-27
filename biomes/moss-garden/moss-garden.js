/* Biome: Moss Garden
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 30, // position in the menu list (lower comes first)
  name: "Moss Garden",  // shown in menus
  skyT: "#e2e8d2",  // sky colour at the top
  skyB: "#f1e1bc",  // sky colour at the horizon
  sun: "#fffbe6",  // sun / moon colour
  far: ["#b8c49e", "#98a880"],  // distant hills, back to front
  top: "#8e7c5a",  // grass / topsoil
  mid: "#6b5b44",  // dirt
  deep: "#40372e",  // deep rock
  cap: "#87a456",  // edge highlight
  style: "float",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 20,  // pushes particles and bullets a little
  props: [["oak", 0.55], ["giantshroom", 0.12], ["bush", 0.5], ["fern", 0.5], ["mushroom", 0.25], ["rock", 0.2], ["lantern", 0.06]],  // [prop kind, how common]
  bgTrees: "oaks",  // silhouette trees behind the map
  leaf: ["#87a456", "#a4b85c", "#6f9a4f"],
  cloud: "#fffbe8",
  water: "#4fa0a0",
  grass: 0.95,
});
