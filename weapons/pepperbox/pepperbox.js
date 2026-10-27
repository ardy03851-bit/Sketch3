// ============================================================
//  PEPPERBOX — Six barrels, one trigger. Fires a quick fan of three.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Pepperbox", type: "gun", rarity: "rare",
  description: "Six barrels, one trigger. Every pull fires a quick fan of three.",
  weight: 0.7,
  damage: 15, knockback: 260, headshot: 1.3,
  fireRate: 1.8, ammo: 30, bullets: 3,
  spread: 0.1, bulletSpeed: 2100, bulletGravity: 150, range: 1300, recoil: 260,
  projectile: { type: "bullet", size: 3, color: "#ffe0a0" },
  destruction: { crater: 8, jagged: 0.4, debris: 4, dust: 0.8, scorch: 0.5, dent: false },
  vfx: { muzzleFlash: 1.4, tracer: "#ffd9a0", sparks: 1.2, smoke: 1.4, shells: true, light: "#ffb35c" },
  shake: 5, hitStop: 0.03, sound: { type: "shot", pitch: 0.85, volume: 0.9 },
  sprite: { length: 62, gripX: 0.18, gripY: 0.71, muzzleX: 1.0, muzzleY: 0.25, holdDistance: 15 }
});
