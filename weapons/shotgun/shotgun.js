// ─────────────────────────────────────────────────────────────
//  SCATTERGUN  ·  weapons/shotgun/shotgun.js
//  Eight pellets, huge knockback up close, useless at range.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Scattergun",
  type: "gun",
  rarity: "common",
  description: "Point-blank problem solver. Pump, blast, repeat.",
  weight: 1,

  damage: 11,                     // per pellet
  knockback: 260,
  headshot: 1.2,
  fireRate: 1.25,
  ammo: 8,
  bullets: 8,
  spread: 0.17,
  bulletSpeed: 2100,
  bulletGravity: 220,
  range: 620,
  recoil: 520,                    // great for shotgun-jumping

  projectile: { type: "bullet", size: 2.2, color: "#ffd9a0" },

  sprite: { length: 92, gripX: 0.24, gripY: 0.55, muzzleX: 1.0, muzzleY: 0.18, holdDistance: 12 },
  destruction: { crater: 6, jagged: 0.45, debris: 3, dust: 0.6, scorch: 0.3, dent: false },
  vfx: { muzzleFlash: 1.6, tracer: "#ffd9a0", sparks: 1.4, smoke: 1.6, shells: true, light: "#ffb35c" },
  shake: 7,
  hitStop: 0.04,
  sound: { type: "shot", pitch: 0.72, volume: 1 }
});
