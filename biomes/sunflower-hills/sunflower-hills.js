/* Biome: Sunflower Hills
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 300, // position in the menu list (lower comes first)
  name: "Sunflower Hills",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 12,  // pushes particles and bullets a little
  pits: 0,
  puddles: 1,
  pond: true,
  skyT: "#9cc8ec",  // sky colour at the top
  skyB: "#fbe7b8",  // sky colour at the horizon
  sun: "#fff2c4",  // sun / moon colour
  far: ["#b9cf8e", "#9ab877"],  // distant hills, back to front
  top: "#8cb04e",  // grass / topsoil
  mid: "#8a5e3a",  // dirt
  deep: "#4e3428",  // deep rock
  cap: "#c8dc74",  // edge highlight
  props: [["sunflower", 0.6], ["oak", 0.35], ["flowers", 0.35], ["bush", 0.25], ["barrel", 0.06]],  // [prop kind, how common]
  under: [["tallgrass", 0.6], ["flowers", 0.5], ["sunflower", 0.2]],
  bgTrees: "oaks",  // silhouette trees behind the map
  cloud: "#ffffff",
  grass: 1,
  grassCol: ["#7fa647", "#b3cf68"],
  leaf: ["#e8b830", "#9cbf4a"],
  critters: 6,  // little animals that wander around
  treeDensity: 0.8,  // how many trees
  plantDensity: 1.3,  // how many small plants
  newProps: {
    // a prop drawn with the game's own ink helpers (inkPiece, lobed, TAU, INK, rgbaC)
    sunflower: { w: 34, h: 92, small: 1, mat: 'leaf', leafy: 1, hp: 25, art(sp, d) {
      const { R, cx, h } = d; const top = h - 72 - R() * 14; const lean = (R() - .5) * 8;
      inkPiece(sp, { fill: '#6f9a3a', light: '#9cc458', rim: 3, shape: x => {
          x.beginPath(); x.moveTo(cx - 2, h); x.quadraticCurveTo(cx + lean, (h + top) / 2, cx + lean - 1.5, top); x.lineTo(cx + lean + 1.5, top); x.quadraticCurveTo(cx + lean + 3, (h + top) / 2, cx + 2, h); x.fill();
          for (const s of [-1, 1]) { x.beginPath(); x.ellipse(cx + s * 9, h - 26 - (s > 0 ? 12 : 0), 9, 4, s * .5, 0, TAU); x.fill(); } } });
      inkPiece(sp, { fill: '#f2c230', light: '#ffe27a', rim: 3, shape: x => { for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; x.beginPath(); x.ellipse(cx + lean + Math.cos(a) * 10, top + Math.sin(a) * 10, 7, 3.6, a, 0, TAU); x.fill(); } } });
      inkPiece(sp, { fill: '#6a3e1e', light: '#8a5a2e', rim: 2, shape: x => { x.beginPath(); x.arc(cx + lean, top, 7, 0, TAU); x.fill(); },
        detail: x => { x.fillStyle = rgbaC(INK, .35); for (let i = 0; i < 9; i++) { x.beginPath(); x.arc(cx + lean + (R() - .5) * 8, top + (R() - .5) * 8, 1, 0, TAU); x.fill(); } } });
    } },
  },
});
