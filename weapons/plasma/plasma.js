// ============================================================
//  PLASMA CASTER — Slow glowing balls that drift toward enemies and burst.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Plasma Caster", type: "gun", rarity: "epic",
  description: "Glowing balls that drift toward enemies and burst on contact.",
  weight: 0.55,
  damage: 18, knockback: 300,
  fireRate: 1.8, ammo: 14,
  spread: 0.02, bulletSpeed: 900, bulletGravity: 0, range: 1500, recoil: 90,
  homing: 2.2,
  projectile: { type: "orb", size: 10, color: "#3fd0c0", glow: "#c8fff6", trail: "sparkle" },
  explosion: { radius: 80, damage: 30, knockback: 700, crater: 24, selfDamage: 0.4 },
  destruction: { crater: 0, debris: 6, dust: 0.6, scorch: 0.6, jagged: 0.5, dent: false },
  vfx: { muzzleFlash: 1, tracer: "#7ff0e0", sparks: 1.4, smoke: 0.3, shells: false, light: "#5ff0e0" },
  shake: 3, hitStop: 0.03, sound: { type: "zap", pitch: 0.7, volume: 0.75 },
  sprite: { length: 84, gripX: 0.11, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.31, holdDistance: 15 }
});
