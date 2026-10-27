// ============================================================
//  FIREWORK LAUNCHER — A wobbly fan of rockets that pop in little bursts.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Firework Launcher", type: "gun", rarity: "epic",
  description: "A wobbly fan of rockets. Each one pops in a small burst.",
  weight: 0.5,
  damage: 10, knockback: 200,
  fireRate: 0.8, ammo: 6, bullets: 5,
  spread: 0.22, bulletSpeed: 1150, bulletGravity: 140, range: 1500, recoil: 200,
  homing: 0.6,
  projectile: { type: "rocket", size: 5, color: "#d9573b", glow: "#ffd27a", trail: "sparkle" },
  explosion: { radius: 60, damage: 20, knockback: 600, crater: 18, selfDamage: 0.4 },
  destruction: { crater: 0, debris: 5, dust: 0.6, scorch: 0.7, jagged: 0.5, dent: false },
  vfx: { muzzleFlash: 1.2, tracer: "#ffd27a", sparks: 2.2, smoke: 1.2, shells: false, light: "#ff7ab0" },
  shake: 4, hitStop: 0.02, sound: { type: "rocket", pitch: 1.6, volume: 0.7 },
  sprite: { length: 96, gripX: 0.27, gripY: 0.68, muzzleX: 1.0, muzzleY: 0.32, holdDistance: 15 }
});
