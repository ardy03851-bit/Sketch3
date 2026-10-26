// ─────────────────────────────────────────────────────────────
//  STORM COIL  ·  weapons/tesla/tesla.js
//  Fast arcs of lightning that jump to nearby enemies and shock.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Storm Coil",
  type: "gun",
  rarity: "epic",
  description: "Lightning that chains between enemies standing close.",
  weight: 0.6,

  damage: 14,
  knockback: 160,
  fireRate: 5,
  ammo: 28,
  automatic: true,
  spread: 0.05,
  bulletSpeed: 2600,
  bulletGravity: 0,
  range: 900,
  recoil: 40,

  projectile: { type: "orb", size: 5, color: "#b98cff", glow: "#e3d4ff", trail: "sparkle" },
  chain: { count: 3, range: 230, damage: 9 },   // jumps to up to 3 more targets
  status: { shock: 0.35 },                      // shocked players move slowly for a moment

  sprite: { length: 70, gripX: 0.12, gripY: 0.75, muzzleX: 1.0, muzzleY: 0.3, holdDistance: 16 },
  destruction: { crater: 5, jagged: 0.7, debris: 2, dust: 0.3, scorch: 0.5, dent: false },
  vfx: { muzzleFlash: 0.7, tracer: "#c9a8ff", sparks: 1.4, smoke: 0.2, shells: false, light: "#a68cff" },
  shake: 2,
  hitStop: 0.015,
  sound: { type: "zap", pitch: 1, volume: 0.7 }
});
