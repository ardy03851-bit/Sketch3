// ============================================================
//  HORNET HIVE — A stream of angry homing stingers.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Hornet Hive", type: "gun", rarity: "epic",
  description: "A stream of angry stingers that hunt down the nearest enemy.",
  weight: 0.5,
  damage: 6, knockback: 60,
  fireRate: 8, ammo: 70, automatic: true,
  spread: 0.35, bulletSpeed: 1000, bulletGravity: 0, range: 1300, recoil: 10,
  homing: 5,
  projectile: { type: "shard", size: 4, color: "#f2c23a", glow: "#fff2a8" },
  status: { shock: 0.15 },
  destruction: { crater: 2, jagged: 0.3, debris: 1, dust: 0.1, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.2, tracer: "#f2c23a", sparks: 0.5, smoke: 0, shells: false, light: null },
  shake: 0.6, hitStop: 0, sound: { type: "zap", pitch: 1.8, volume: 0.35 },
  sprite: { length: 80, gripX: 0.11, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.30, holdDistance: 15 }
});
