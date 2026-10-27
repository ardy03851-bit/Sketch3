// ============================================================
//  SKULL CANNON — A cackling skull that spits glowing purple orbs.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Skull Cannon", type: "gun", rarity: "legendary",
  description: "A cackling skull that spits drifting purple orbs. They hunt you down.",
  weight: 0.35,
  damage: 22, knockback: 380,
  fireRate: 1.5, ammo: 12,
  spread: 0.02, bulletSpeed: 820, bulletGravity: 0, range: 1600, recoil: 140,
  homing: 2.6,
  projectile: { type: "orb", size: 11, color: "#b05aff", glow: "#f0d0ff", trail: "sparkle" },
  explosion: { radius: 84, damage: 34, knockback: 760, crater: 26, selfDamage: 0.4 },
  destruction: { crater: 0, debris: 7, dust: 0.6, scorch: 0.8, jagged: 0.5, dent: false },
  vfx: { muzzleFlash: 1.1, tracer: "#d08aff", sparks: 1.6, smoke: 0.6, shells: false, light: "#b05aff" },
  shake: 3.5, hitStop: 0.03, sound: { type: "zap", pitch: 0.55, volume: 0.8 },
  sprite: { length: 82, gripX: 0.13, gripY: 0.76, muzzleX: 1.0, muzzleY: 0.37, holdDistance: 15 }
});
