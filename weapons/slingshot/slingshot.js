// ============================================================
//  SLINGSHOT — Pebbles that arc and bounce. Quiet, cheap, surprisingly mean.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Slingshot", type: "gun", rarity: "common",
  description: "Pebbles that drop with distance and skip once off the ground.",
  weight: 1,
  damage: 22, knockback: 380, headshot: 1.6,
  fireRate: 2.2, ammo: 24,
  spread: 0.02, bulletSpeed: 1500, bulletGravity: 900, range: 99999, recoil: 40,
  bounces: 1, bounciness: 0.45, fuse: 0,
  projectile: { type: "grenade", size: 5, color: "#9a8f80", spin: 10 },
  destruction: { crater: 6, jagged: 0.5, debris: 3, dust: 0.6, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0, tracer: "#c8bca8", sparks: 0.6, smoke: 0, shells: false, light: null },
  shake: 1, hitStop: 0.03, sound: { type: "tink", pitch: 0.8, volume: 0.6 },
  sprite: { length: 58, gripX: 0.10, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.31, holdDistance: 15 }
});
