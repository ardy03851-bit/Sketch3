// ============================================================
//  ECTO BLASTER — A beam of ghostly slime that shocks and slows.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Ecto Blaster", type: "gun", rarity: "epic",
  description: "Ghostly green zaps. Instant, and every hit slows people down.",
  weight: 0.6,
  damage: 14, knockback: 160,
  fireRate: 5, ammo: 45, automatic: true,
  spread: 0.01, bulletSpeed: 3000, bulletGravity: 0, range: 1100, recoil: 30, beam: true,
  projectile: { type: "beam", size: 4, color: "#8cff6a", glow: "#e2ffd0" },
  status: { chill: 0.4, shock: 0.15 },
  destruction: { crater: 4, jagged: 0.4, debris: 1, dust: 0.2, scorch: 0.5, dent: false },
  vfx: { muzzleFlash: 0.8, tracer: "#9cff6a", sparks: 1.2, smoke: 0, shells: false, light: "#7cff5a" },
  shake: 1.5, hitStop: 0.01, sound: { type: "laser", pitch: 0.7, volume: 0.6 },
  sprite: { length: 84, gripX: 0.11, gripY: 0.74, muzzleX: 1.0, muzzleY: 0.31, holdDistance: 15 }
});
