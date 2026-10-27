// ============================================================
//  CROSSBOW — Heavy bolts that drop with distance and pin through two people.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Crossbow", type: "gun", rarity: "rare",
  description: "Slow heavy bolts that pass through the first person they hit.",
  weight: 0.8,
  damage: 52, knockback: 650, headshot: 2,
  fireRate: 0.9, ammo: 10,
  spread: 0.004, bulletSpeed: 1900, bulletGravity: 520, range: 2600, recoil: 120, pierce: 1,
  projectile: { type: "shard", size: 8, color: "#8a6a4f", glow: "#e8d9b0" },
  destruction: { crater: 6, jagged: 0.4, debris: 4, dust: 0.6, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0, tracer: "#e8d9b0", sparks: 0.6, smoke: 0, shells: false, light: null },
  shake: 3, hitStop: 0.06, sound: { type: "whoosh", pitch: 1.5, volume: 0.8 },
  sprite: { length: 98, gripX: 0.28, gripY: 0.6, muzzleX: 1.0, muzzleY: 0.44, holdDistance: 15 }
});
