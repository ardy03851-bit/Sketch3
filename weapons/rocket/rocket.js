// ─────────────────────────────────────────────────────────────
//  INK ROCKET  ·  weapons/rocket/rocket.js
//  Slow, heavy rockets that blow big holes. Shoot your own feet
//  to rocket-jump (self damage is reduced, knockback is not).
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Ink Rocket",
  type: "gun",
  rarity: "epic",                 // common · rare · epic · legendary (UI colour + glow)
  description: "Big boom, bigger holes. Aim at your feet to rocket-jump.",
  weight: 0.55,

  damage: 30,                     // direct-hit damage (the explosion adds more)
  knockback: 300,
  fireRate: 0.9,
  ammo: 5,
  bulletSpeed: 1050,
  bulletGravity: 60,
  spread: 0.01,
  range: 2400,
  recoil: 380,

  projectile: {
    type: "rocket",               // bullet · rocket · grenade · orb · bubble · boomerang · flame · shard · hook
    size: 9,
    color: "#6b7a3f",
    glow: "#ffb35c",
    trail: "smoke"                // smoke · sparkle · none
  },
  homing: 0,                      // rad/s turn towards the nearest enemy (0 = off)

  explosion: {
    radius: 120,                  // damage radius (px)
    damage: 62,                   // at the centre, falls off to the edge
    knockback: 1250,
    crater: 46,                   // hole size
    selfDamage: 0.35              // multiplier when you catch your own blast
  },

  sprite: { length: 92, gripX: 0.27, gripY: 0.75, muzzleX: 1.0, muzzleY: 0.38, holdDistance: 14 },
  destruction: { crater: 0, debris: 22, dust: 2, scorch: 1, jagged: 0.6, dent: true },
  vfx: { muzzleFlash: 1.4, tracer: "#ffcf8a", sparks: 1.5, smoke: 2.2, shells: false, light: "#ff9a3c" },
  shake: 9,
  hitStop: 0.06,
  sound: { type: "rocket", pitch: 1, volume: 1 }
});
