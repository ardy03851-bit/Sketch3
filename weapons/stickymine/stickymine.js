// ============================================================
//  STICKY MINE — Mines stop dead where they land, then go off after a moment.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Sticky Mine", type: "gun", rarity: "rare",
  description: "Mines stop dead where they land and blow two seconds later.",
  weight: 0.7,
  damage: 5, knockback: 0,
  fireRate: 1.2, ammo: 5,
  spread: 0.01, bulletSpeed: 900, bulletGravity: 1300, range: 99999, recoil: 60,
  bounces: 6, bounciness: 0.02, fuse: 2.1,
  projectile: { type: "grenade", size: 8, color: "#6fbf4a", glow: "#c8ff8a", trail: "sparkle", spin: 0 },
  explosion: { radius: 115, damage: 66, knockback: 1150, crater: 42, selfDamage: 0.5 },
  destruction: { crater: 0, debris: 16, dust: 1.4, scorch: 0.9, jagged: 0.6, dent: true },
  vfx: { muzzleFlash: 0.5, tracer: "#c8ff8a", sparks: 1, smoke: 1.4, shells: false, light: "#a8ff6a" },
  shake: 4, hitStop: 0.04, sound: { type: "thump", pitch: 1.4, volume: 0.8 },
  sprite: { length: 78, gripX: 0.12, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.30, holdDistance: 15 }
});
