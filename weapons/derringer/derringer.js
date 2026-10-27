// ============================================================
//  DERRINGER — Two tiny shots that hit like a truck. Then reload.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Derringer", type: "gun", rarity: "common",
  description: "Two tiny barrels, two huge hits, then a long reload.",
  weight: 0.9,
  damage: 46, knockback: 560, headshot: 1.5,
  fireRate: 4, ammo: 12, magazine: 2, reloadTime: 1.4,
  spread: 0.03, bulletSpeed: 2100, bulletGravity: 160, range: 900, recoil: 260,
  projectile: { type: "bullet", size: 2.6, color: "#ffd9a0" },
  destruction: { crater: 11, jagged: 0.4, debris: 6, dust: 0.8, scorch: 0.5, dent: true },
  vfx: { muzzleFlash: 1.2, tracer: "#ffd9a0", sparks: 1, smoke: 1, shells: false, light: "#ffb35c" },
  shake: 5, hitStop: 0.04, sound: { type: "shot", pitch: 1.3, volume: 0.85 },
  sprite: { length: 56, gripX: 0.16, gripY: 0.71, muzzleX: 1.0, muzzleY: 0.24, holdDistance: 15 }
});
