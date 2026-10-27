// ============================================================
//  PUMPKIN LAUNCHER — Lobs grinning jack-o-lanterns that burst into flames.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Pumpkin Launcher", type: "gun", rarity: "epic",
  description: "Lobs grinning jack-o-lanterns that burst into flames.",
  weight: 0.7,
  damage: 20, knockback: 300,
  fireRate: 0.9, ammo: 6,
  spread: 0.03, bulletSpeed: 1000, bulletGravity: 1050, range: 99999, recoil: 260,
  bounces: 1, bounciness: 0.3, fuse: 0,
  projectile: { type: "grenade", size: 12, color: "#e07a2e", glow: "#ffb35c", trail: "sparkle", spin: 3 },
  explosion: { radius: 100, damage: 52, knockback: 950, crater: 36, selfDamage: 0.5 },
  status: { burn: 1.8 },
  destruction: { crater: 0, debris: 12, dust: 1.2, scorch: 1, jagged: 0.6, dent: true },
  vfx: { muzzleFlash: 1.2, tracer: "#ffb35c", sparks: 2, smoke: 1.4, shells: false, light: "#ff8a2a" },
  shake: 6, hitStop: 0.05, sound: { type: "thump", pitch: 0.8, volume: 0.9 },
  sprite: { length: 104, gripX: 0.27, gripY: 0.76, muzzleX: 1.0, muzzleY: 0.38, holdDistance: 15 }
});
