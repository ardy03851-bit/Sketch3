// ============================================================
//  SCRIBBLE SMG — Small, fast, sprays a lot. Reloads often.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Scribble SMG", type: "gun", rarity: "common",
  description: "Small, loud and very fast. Reload often.",
  weight: 1,
  damage: 8, knockback: 110, headshot: 1.4,
  fireRate: 13, ammo: 150, magazine: 30, reloadTime: 1.2, automatic: true,
  spread: 0.09, bulletSpeed: 2300, bulletGravity: 90, range: 1200, recoil: 30,
  projectile: { type: "bullet", size: 1.8, color: "#ffe2a8" },
  destruction: { crater: 4, jagged: 0.3, debris: 2, dust: 0.3, scorch: 0.1, dent: false },
  vfx: { muzzleFlash: 0.7, tracer: "#ffe2a8", sparks: 0.6, smoke: 0.4, shells: true, light: "#ffcf7a" },
  shake: 1.6, hitStop: 0.01, sound: { type: "shot", pitch: 1.5, volume: 0.55 },
  sprite: { length: 66, gripX: 0.31, gripY: 0.72, muzzleX: 1.0, muzzleY: 0.26, holdDistance: 15 }
});
