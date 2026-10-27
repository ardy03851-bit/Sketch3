// ============================================================
//  CANDY CORN SMG — Sprays candy corn. Sweet, sticky, a little too fast.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Candy Corn SMG", type: "gun", rarity: "common",
  description: "Sprays candy corn. Sweet, sticky and much too fast.",
  weight: 1,
  damage: 8, knockback: 90,
  fireRate: 11, ammo: 80, automatic: true,
  spread: 0.09, bulletSpeed: 1800, bulletGravity: 220, range: 1200, recoil: 22,
  projectile: { type: "shard", size: 4, color: "#f2a23a", glow: "#fff0c0" },
  destruction: { crater: 4, jagged: 0.3, debris: 2, dust: 0.4, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.6, tracer: "#ffd27a", sparks: 0.8, smoke: 0.3, shells: false, light: "#ffb35c" },
  shake: 1.2, hitStop: 0, sound: { type: "shot", pitch: 1.5, volume: 0.55 },
  sprite: { length: 72, gripX: 0.32, gripY: 0.55, muzzleX: 1.0, muzzleY: 0.23, holdDistance: 15 }
});
