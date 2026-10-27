/* Biome: Midnight Harbor
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 160, // position in the menu list (lower comes first)
  name: "Midnight Harbor",  // shown in menus
  style: "sea",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "drizzle",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: -40,  // pushes particles and bullets a little
  skyT: "#121b30",  // sky colour at the top
  skyB: "#34405c",  // sky colour at the horizon
  sun: "#f6f0d6",  // sun / moon colour
  sunKind: "moon",
  night: true,
  far: ["#25304a", "#1b2438"],  // distant hills, back to front
  top: "#6b6a72",  // grass / topsoil
  mid: "#46454f",  // dirt
  deep: "#24232b",  // deep rock
  cap: "#8b8677",  // edge highlight
  props: [["lamp", 0.5], ["barrel", 0.35], ["crate", 0.35]],  // [prop kind, how common]
  bgTrees: "harbor",  // silhouette trees behind the map
  cloud: "#4a5570",
  dark: 0.38,
  water: "#1f4e6b",
  shallow: "#3c7590",
  grass: 0,
  under: [],
  critters: 2,  // little animals that wander around
});
