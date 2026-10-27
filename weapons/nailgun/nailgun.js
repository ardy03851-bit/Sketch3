// ============================================================
//  NAIL GUN — Rapid nails that ricochet once off walls.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Nail Gun", type: "gun", rarity: "common",
  description: "Fast nails that ricochet once. Great around corners.",
  weight: 1,
  damage: 9, knockback: 90, headshot: 1.3,
  fireRate: 9, ammo: 120, automatic: true,
  spread: 0.05, bulletSpeed: 2000, bulletGravity: 200, range: 1300, recoil: 25, bounces: 1,
  projectile: { type: "shard", size: 4, color: "#bfc6cc", glow: "#ffffff" },
  destruction: { crater: 3, jagged: 0.3, debris: 1, dust: 0.2, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.3, tracer: "#dfe5ea", sparks: 1.2, smoke: 0.2, shells: false, light: null },
  shake: 1, hitStop: 0.01, sound: { type: "tink", pitch: 1.2, volume: 0.6 },
  sprite: { length: 70, gripX: 0.20, gripY: 0.67, muzzleX: 1.0, muzzleY: 0.34, holdDistance: 15 }
});
