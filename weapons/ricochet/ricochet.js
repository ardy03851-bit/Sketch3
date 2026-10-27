// ============================================================
//  RICOCHET RIFLE — Lever rifle whose rounds bounce off walls three times.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Ricochet Rifle", type: "gun", rarity: "rare",
  description: "Rounds bank off walls up to three times. Bank shots count.",
  weight: 0.7,
  damage: 26, knockback: 300, headshot: 1.6,
  fireRate: 1.5, ammo: 14,
  spread: 0.008, bulletSpeed: 2600, bulletGravity: 40, range: 2600, recoil: 140, bounces: 3,
  projectile: { type: "bullet", size: 2.2, color: "#ffe9b8" },
  destruction: { crater: 7, jagged: 0.3, debris: 4, dust: 0.6, scorch: 0.3, dent: false },
  vfx: { muzzleFlash: 1, tracer: "#ffe9b8", sparks: 1.6, smoke: 0.8, shells: true, light: "#ffcf7a" },
  shake: 3.5, hitStop: 0.03, sound: { type: "shot", pitch: 1.05, volume: 0.8 },
  sprite: { length: 104, gripX: 0.25, gripY: 0.52, muzzleX: 1.0, muzzleY: 0.14, holdDistance: 15 }
});
