// ============================================================
//  BLUNDERBUSS — Pirate shotgun. Sprays a cone of scrap, kicks like a mule.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Blunderbuss", type: "gun", rarity: "common",
  description: "A cone of scrap metal. Kicks you backwards like a mule.",
  weight: 0.9,
  damage: 9, knockback: 300, headshot: 1.1,
  fireRate: 0.8, ammo: 6, bullets: 11, spread: 0.32,
  bulletSpeed: 1700, bulletGravity: 380, range: 520, recoil: 760,
  projectile: { type: "bullet", size: 2.6, color: "#e8c890" },
  destruction: { crater: 7, jagged: 0.6, debris: 4, dust: 1.2, scorch: 0.4, dent: false },
  vfx: { muzzleFlash: 2.2, tracer: "#f3d6a0", sparks: 1.8, smoke: 2.6, shells: false, light: "#ffb35c" },
  shake: 9, hitStop: 0.05, sound: { type: "shot", pitch: 0.55, volume: 1 },
  sprite: { length: 96, gripX: 0.30, gripY: 0.62, muzzleX: 1.0, muzzleY: 0.39, holdDistance: 15 }
});
