// ============================================================
//  BRASS BLASTER — A trumpet that fires sound. Barely hurts, sends people flying.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Brass Blaster", type: "gun", rarity: "epic",
  description: "Blasts a wall of noise. Barely hurts, sends people flying.",
  weight: 0.5,
  damage: 6, knockback: 1500,
  fireRate: 1.3, ammo: 12, bullets: 7,
  spread: 0.22, bulletSpeed: 1300, bulletGravity: 0, drag: 2, life: 0.45, range: 700, recoil: 300, pierce: 4,
  projectile: { type: "bubble", size: 9, color: "#f2d27a", glow: "#fff2c0" },
  destruction: { crater: 2, jagged: 0.2, debris: 1, dust: 1.4, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.6, tracer: "#f6e2a0", sparks: 0.4, smoke: 0.6, shells: false, light: null },
  shake: 6, hitStop: 0.02, sound: { type: "boing", pitch: 0.6, volume: 0.9 },
  sprite: { length: 84, gripX: 0.29, gripY: 0.75, muzzleX: 1.0, muzzleY: 0.35, holdDistance: 15 }
});
