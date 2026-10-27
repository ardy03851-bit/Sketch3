// ============================================================
//  CONFETTI CANNON — A party popper with far too much knockback.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Confetti Cannon", type: "gun", rarity: "common",
  description: "Barely hurts. Sends people flying across the room though.",
  weight: 0.8,
  damage: 3, knockback: 260,
  fireRate: 1.4, ammo: 10, bullets: 14,
  spread: 0.45, bulletSpeed: 1500, bulletGravity: 600, drag: 1.4, life: 0.7, range: 99999, recoil: 420,
  projectile: { type: "shard", size: 4, color: "#e9a23b", glow: "#ff7ab0" },
  destruction: { crater: 0, debris: 0, dust: 0.3, scorch: 0 },
  vfx: { muzzleFlash: 1.4, tracer: "#ff7ab0", sparks: 2.4, smoke: 0.8, shells: false, light: "#ffd27a" },
  shake: 4, hitStop: 0.02, sound: { type: "boing", pitch: 1.3, volume: 0.8 },
  sprite: { length: 78, gripX: 0.23, gripY: 0.81, muzzleX: 1.0, muzzleY: 0.49, holdDistance: 15 }
});
