// ============================================================
//  MORTAR TUBE — Lob shells high over walls. Huge holes.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Mortar Tube", type: "gun", rarity: "epic",
  description: "Lobs shells high over walls. Makes enormous holes.",
  weight: 0.5,
  damage: 25, knockback: 300,
  fireRate: 0.6, ammo: 5,
  spread: 0.02, bulletSpeed: 1250, bulletGravity: 1350, range: 99999, recoil: 300,
  projectile: { type: "grenade", size: 10, color: "#4a4a3f", glow: "#ffb35c", trail: "smoke", spin: 4 },
  explosion: { radius: 140, damage: 64, knockback: 1300, crater: 64, selfDamage: 0.4 },
  destruction: { crater: 0, debris: 26, dust: 2, scorch: 1, jagged: 0.7, dent: true },
  vfx: { muzzleFlash: 1.6, tracer: "#ffcf8a", sparks: 1.2, smoke: 2.4, shells: false, light: "#ff9a3c" },
  shake: 10, hitStop: 0.06, sound: { type: "thump", pitch: 0.6, volume: 1 },
  sprite: { length: 74, gripX: 0.12, gripY: 0.72, muzzleX: 1.0, muzzleY: 0.26, holdDistance: 15 }
});
