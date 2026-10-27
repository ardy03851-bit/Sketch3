// ============================================================
//  LONGBOW — Hold to draw. A fully drawn arrow flies far and hurts a lot.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Longbow", type: "gun", rarity: "rare",
  description: "Draw back, breathe, release. Arrows arc and stick into walls.",
  weight: 0.8,
  damage: 58, knockback: 520, headshot: 1.8,
  fireRate: 1.1, ammo: 0, charge: 0.45,
  spread: 0.006, bulletSpeed: 2200, bulletGravity: 600, range: 3000, recoil: 40,
  projectile: { type: "shard", size: 7, color: "#6b4a30", glow: "#f3e6c8" },
  destruction: { crater: 4, jagged: 0.3, debris: 3, dust: 0.5, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0, tracer: "#f3e6c8", sparks: 0.5, smoke: 0, shells: false, light: null },
  shake: 2, hitStop: 0.05, sound: { type: "whoosh", pitch: 1.8, volume: 0.7 },
  sprite: { length: 100, gripX: 0.50, gripY: 0.52, muzzleX: 1.0, muzzleY: 0.22, holdDistance: 15 }
});
