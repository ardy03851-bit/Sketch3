// ============================================================
//  ACID SPITTER — Short-range acid spray that keeps eating after it lands.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Acid Spitter", type: "gun", rarity: "rare",
  description: "A short hiss of acid. Keeps eating at people after it lands.",
  weight: 0.7,
  damage: 5, knockback: 40,
  fireRate: 14, ammo: 110, automatic: true,
  spread: 0.12, bulletSpeed: 820, bulletGravity: 700, drag: 1.2, life: 0.9, range: 99999, recoil: 10, pierce: 1,
  projectile: { type: "flame", size: 8, color: "#8ee04a", glow: "#e2ff9a" },
  status: { burn: 1.6 },
  destruction: { crater: 3, jagged: 0.9, debris: 0, dust: 0, scorch: 0.6, dent: false },
  vfx: { muzzleFlash: 0.2, tracer: "#a8f060", sparks: 0.2, smoke: 0.5, shells: false, light: "#9cff5a" },
  shake: 0.5, hitStop: 0, sound: { type: "sizzle", pitch: 1.2, volume: 0.5 },
  sprite: { length: 80, gripX: 0.10, gripY: 0.76, muzzleX: 1.0, muzzleY: 0.36, holdDistance: 15 }
});
