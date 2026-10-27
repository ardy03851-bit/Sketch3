// ============================================================
//  SNOWBALL CANNON — Bouncy snowballs that chill. Three hits freezes.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Snowball Cannon", type: "gun", rarity: "common",
  description: "Bouncy snowballs. Each one chills, three in a row freezes.",
  weight: 0.9,
  damage: 12, knockback: 380,
  fireRate: 2.4, ammo: 20,
  spread: 0.04, bulletSpeed: 1300, bulletGravity: 1000, range: 99999, recoil: 80,
  bounces: 2, bounciness: 0.45, fuse: 0,
  projectile: { type: "grenade", size: 9, color: "#f4fbff", glow: "#d8f2ff", spin: 6 },
  status: { chill: 1 },
  destruction: { crater: 5, jagged: 0.4, debris: 4, dust: 0.8, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.4, tracer: "#eaf8ff", sparks: 0.8, smoke: 0.6, shells: false, light: "#cfefff" },
  shake: 2, hitStop: 0.03, sound: { type: "freeze", pitch: 1, volume: 0.6 },
  sprite: { length: 80, gripX: 0.11, gripY: 0.80, muzzleX: 1.0, muzzleY: 0.47, holdDistance: 15 }
});
