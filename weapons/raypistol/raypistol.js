// ============================================================
//  RAY PISTOL — Instant zaps. No drop, no travel time, modest damage.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Ray Pistol", type: "gun", rarity: "rare",
  description: "Instant red zaps with no drop. Easy to land, modest damage.",
  weight: 0.8,
  damage: 15, knockback: 160, headshot: 1.4,
  fireRate: 3.6, ammo: 30, beam: true,
  spread: 0.01, range: 1500, recoil: 40,
  projectile: { type: "beam", size: 3, color: "#ff5a4a", glow: "#ffd0c8" },
  destruction: { crater: 6, jagged: 0.3, debris: 2, dust: 0.3, scorch: 0.8, dent: false },
  vfx: { muzzleFlash: 0.6, tracer: "#ff5a4a", sparks: 1, smoke: 0.2, shells: false, light: "#ff6a5a" },
  shake: 1.5, hitStop: 0.02, sound: { type: "laser", pitch: 1.4, volume: 0.65 },
  sprite: { length: 66, gripX: 0.14, gripY: 0.72, muzzleX: 1.0, muzzleY: 0.27, holdDistance: 15 }
});
