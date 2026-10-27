/* Biome: Pumpkin Patch
   One biome per folder. The game finds this folder by itself; nothing else needs editing.
   Every field is explained in the README ("Adding biomes"). */
Biome({
  order: 10, // position in the menu list (lower comes first)
  name: "Pumpkin Patch",  // shown in menus
  style: "ground",  // 'float' islands, 'ground' a big field, 'sea' islands in water
  weather: "leaves",  // dust, rain, storm, snow, leaves, petals, ash, fireflies, ... or none
  wind: 16,  // pushes particles and bullets a little
  pits: 1,
  puddles: 1,
  skyT: "#3a2350",  // sky colour at the top
  skyB: "#f08a3c",  // sky colour at the horizon
  sun: "#ffd07a",  // sun / moon colour
  sunLow: true,
  far: ["#6a3a55", "#4a2a44"],  // distant hills, back to front
  top: "#6e6a2e",  // grass / topsoil
  mid: "#5a3a28",  // dirt
  deep: "#2a1a1c",  // deep rock
  cap: "#a09a40",  // edge highlight
  props: [["pumpkin", 0.8], ["scarecrow", 0.25], ["dead", 0.4], ["autumn", 0.3], ["lantern", 0.12], ["crate", 0.06]],  // [prop kind, how common]
  under: [["pumpkin", 0.4], ["tallgrass", 0.6]],
  bgTrees: "dead",  // silhouette trees behind the map
  cloud: "#7a4a6a",
  haze: 0.25,
  grass: 0.8,
  grassCol: ["#6a6a2a", "#a09a48"],
  leaf: ["#e07a2e", "#b8452a", "#e8b04a"],
  critters: 4,  // little animals that wander around
  treeDensity: 0.9,  // how many trees
  plantDensity: 1.2,  // how many small plants
  newProps: {
    // a scarecrow drawn with the game's own ink helpers
    scarecrow: { w: 60, h: 96, mat: 'wood', hp: 60, art(sp, d) {
      const { R, cx, h } = d;
      inkPiece(sp, { fill: '#8a6038', light: '#b08050', rim: 3, shape: x => { x.fillRect(cx - 3, h - 92, 6, 92); x.fillRect(cx - 28, h - 70, 56, 5); } });
      inkPiece(sp, { fill: '#5a6aa0', light: '#7a8cc0', rim: 3, shape: x => { x.beginPath(); x.moveTo(cx - 24, h - 68); x.lineTo(cx + 24, h - 68); x.lineTo(cx + 16, h - 34); x.lineTo(cx - 16, h - 34); x.fill(); },
        detail: x => { x.strokeStyle = rgbaC(INK, .45); x.lineWidth = 1.2; x.strokeRect(cx - 9, h - 58, 7, 7); x.beginPath(); for (const s of [-1, 1]) { x.moveTo(cx + s * 24, h - 67); x.lineTo(cx + s * 29, h - 60); x.moveTo(cx + s * 24, h - 66); x.lineTo(cx + s * 27, h - 57); } x.stroke(); } });
      inkPiece(sp, { fill: '#e8c97a', light: '#f6e2a6', rim: 3, shape: x => { x.beginPath(); x.arc(cx, h - 78, 11, 0, TAU); x.fill(); },
        detail: x => { x.fillStyle = rgbaC(INK, .8); x.beginPath(); x.arc(cx - 4, h - 80, 1.8, 0, TAU); x.arc(cx + 4, h - 80, 1.8, 0, TAU); x.fill(); x.strokeStyle = rgbaC(INK, .7); x.lineWidth = 1.2; x.beginPath(); x.moveTo(cx - 5, h - 73); for (let i = 1; i <= 5; i++) x.lineTo(cx - 5 + i * 2, h - 73 + (i % 2 ? 1.5 : -1)); x.stroke(); } });
      inkPiece(sp, { fill: '#4a3a2a', light: '#6a5640', rim: 3, shape: x => { x.beginPath(); x.ellipse(cx, h - 87, 17, 3.5, 0, 0, TAU); x.fill(); x.beginPath(); x.moveTo(cx - 9, h - 87); x.lineTo(cx - 5 + R() * 2, h - 101); x.lineTo(cx + 7, h - 99); x.lineTo(cx + 9, h - 87); x.fill(); } });
    } },
  },
});
