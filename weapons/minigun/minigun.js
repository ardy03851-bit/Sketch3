// ─────────────────────────────────────────────────────────────
//  SHREDDER  ·  weapons/minigun/minigun.js
//  Spins up while you hold fire. Heavy: you move slower.
//  Fires from a magazine and reloads automatically.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Shredder",
  type: "gun",
  rarity: "epic",
  description: "Spins up into a bullet hose. Slows you down.",
  weight: 0.55,

  damage: 7,
  knockback: 120,
  headshot: 1.3,
  fireRate: 20,                   // top speed once fully spun up
  spinUp: 0.9,                    // seconds to reach full speed
  ammo: 240,
  magazine: 80,                   // shots before a reload
  reloadTime: 1.8,
  automatic: true,
  spread: 0.07,
  bulletSpeed: 2500,
  bulletGravity: 60,
  range: 1600,
  recoil: 22,
  moveSpeed: 0.7,                 // run speed multiplier while holding it

  projectile: { type: "bullet", size: 1.8, color: "#ffe2a8" },

  sprite: { length: 88, gripX: 0.06, gripY: 0.45, muzzleX: 1.0, muzzleY: 0.38, holdDistance: 12 },
  destruction: { crater: 3, jagged: 0.3, debris: 1, dust: 0.2, scorch: 0.05, dent: false },
  vfx: { muzzleFlash: 0.55, tracer: "#ffe2a8", sparks: 0.4, smoke: 0.25, shells: true, light: "#ffcf7a" },
  shake: 1.2,
  hitStop: 0.006,
  sound: { type: "shot", pitch: 1.4, volume: 0.45 }
});
