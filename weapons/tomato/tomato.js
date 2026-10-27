// ============================================================
//  TOMATO LAUNCHER — Ripe tomatoes. Splat, slow, and a lot of embarrassment.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Tomato Launcher", type: "gun", rarity: "common",
  description: "Lobbed tomatoes that splat in a little burst and slow people down.",
  weight: 0.9,
  damage: 16, knockback: 300,
  fireRate: 1.6, ammo: 14,
  spread: 0.04, bulletSpeed: 1150, bulletGravity: 1100, range: 99999, recoil: 90,
  bounces: 0, fuse: 0,
  projectile: { type: "grenade", size: 9, color: "#d9382a", glow: "#ff8a6a", spin: 4 },
  explosion: { radius: 58, damage: 12, knockback: 380, crater: 6, selfDamage: 0.2 },
  status: { chill: 0.6 },
  destruction: { crater: 0, debris: 0, dust: 0.3, scorch: 0, jagged: 0.3, dent: false },
  vfx: { muzzleFlash: 0.5, tracer: "#ff6a4a", sparks: 1.6, smoke: 0.2, shells: false, light: null },
  shake: 2, hitStop: 0.03, sound: { type: "thump", pitch: 1.3, volume: 0.7 },
  sprite: { length: 80, gripX: 0.35, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.28, holdDistance: 15 }
});
