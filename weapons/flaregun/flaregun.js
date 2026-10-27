// ============================================================
//  FLARE GUN — One fat burning flare. Lights the place up and sets people on fire.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Flare Gun", type: "gun", rarity: "rare",
  description: "A slow burning flare. Lights up the night and sets people on fire.",
  weight: 0.7,
  damage: 24, knockback: 260,
  fireRate: 1, ammo: 6,
  spread: 0.02, bulletSpeed: 1100, bulletGravity: 520, range: 99999, recoil: 120,
  projectile: { type: "orb", size: 7, color: "#ff5a3a", glow: "#ffd27a", trail: "sparkle" },
  status: { burn: 3 },
  explosion: { radius: 55, damage: 14, knockback: 300, crater: 10, selfDamage: 0.3 },
  destruction: { crater: 0, debris: 3, dust: 0.4, scorch: 1, jagged: 0.4, dent: false },
  vfx: { muzzleFlash: 1.6, tracer: "#ff8a5a", sparks: 2, smoke: 1.4, shells: false, light: "#ff6a3a" },
  shake: 3, hitStop: 0.03, sound: { type: "rocket", pitch: 1.4, volume: 0.6 },
  sprite: { length: 58, gripX: 0.17, gripY: 0.71, muzzleX: 1.0, muzzleY: 0.24, holdDistance: 15 }
});
