// ─────────────────────────────────────────────────────────────
//  DRAGON'S BREATH  ·  weapons/flamer/flamer.js
//  Short-range stream of fire. Sets players and trees alight.
//  Water puts flames out (and fizzles your shots).
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Dragon's Breath",
  type: "gun",
  rarity: "rare",
  description: "Hold to hose fire. Burns players and trees. Hates water.",
  weight: 0.75,

  damage: 4,
  knockback: 60,
  fireRate: 22,
  ammo: 160,
  automatic: true,
  bullets: 1,
  spread: 0.14,
  bulletSpeed: 900,
  bulletGravity: -220,            // flames rise
  drag: 2.6,                      // projectiles slow down over time
  life: 0.55,                     // seconds a flame lives
  range: 99999,
  recoil: 12,
  pierce: 2,

  projectile: { type: "flame", size: 10, color: "#ff8a3c", glow: "#ffd27a" },
  status: { burn: 2.2 },          // seconds of burning (damage over time)
  ignites: true,                  // sets trees on fire

  sprite: { length: 84, gripX: 0.06, gripY: 0.62, muzzleX: 1.0, muzzleY: 0.18, holdDistance: 14 },
  destruction: { crater: 0, debris: 0, dust: 0, scorch: 0.2 },
  vfx: { muzzleFlash: 0.4, tracer: "#ff9a3c", sparks: 0.3, smoke: 0.4, shells: false, light: "#ff8a3c" },
  shake: 0.6,
  hitStop: 0,
  sound: { type: "flame", pitch: 1, volume: 0.45 }
});
