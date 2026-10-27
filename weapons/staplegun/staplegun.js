// ============================================================
//  STAPLE GUN — Office supplies, extremely fast. Staples stick and sting.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Staple Gun", type: "gun", rarity: "common",
  description: "Very fast little staples. Lots of chip damage.",
  weight: 1,
  damage: 7, knockback: 70,
  fireRate: 12, ammo: 90, automatic: true,
  spread: 0.06, bulletSpeed: 1900, bulletGravity: 260, range: 1100, recoil: 18,
  projectile: { type: "shard", size: 3, color: "#c9d3da" },
  destruction: { crater: 3, jagged: 0.3, debris: 1, dust: 0.3, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.3, tracer: "#e6edf2", sparks: 0.8, smoke: 0.1, shells: false, light: null },
  shake: 0.8, hitStop: 0, sound: { type: "tink", pitch: 1.6, volume: 0.45 },
  sprite: { length: 60, gripX: 0.11, gripY: 0.78, muzzleX: 1.0, muzzleY: 0.43, holdDistance: 15 }
});
