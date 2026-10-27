// ============================================================
//  SAW LAUNCHER — Spinning saw blades that cut through people and bounce off walls.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Saw Launcher", type: "gun", rarity: "epic",
  description: "Spinning blades that slice through everyone and bounce off walls.",
  weight: 0.5,
  damage: 30, knockback: 420,
  fireRate: 1.2, ammo: 8,
  spread: 0.01, bulletSpeed: 1250, bulletGravity: 0, range: 1500, recoil: 120, pierce: 99, bounces: 3, bounciness: 0.9,
  projectile: { type: "boomerang", size: 16, color: "#c9d3da", spin: 30 },
  destruction: { crater: 9, jagged: 0.9, debris: 5, dust: 0.6, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.3, tracer: "#e6edf2", sparks: 2, smoke: 0, shells: false, light: null },
  shake: 2.5, hitStop: 0.04, sound: { type: "whoosh", pitch: 1.7, volume: 0.8 },
  sprite: { length: 84, gripX: 0.10, gripY: 0.76, muzzleX: 1.0, muzzleY: 0.39, holdDistance: 15 }
});
