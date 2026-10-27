// ============================================================
//  TRIPLE TAP — Three-round burst rifle. Rewards steady aim.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Triple Tap", type: "gun", rarity: "rare",
  description: "Three-round bursts. Land all three for a nasty surprise.",
  weight: 0.8,
  damage: 17, knockback: 220, headshot: 1.6,
  fireRate: 1.6, ammo: 36, burst: { count: 3, delay: 0.07 },
  spread: 0.018, bulletSpeed: 2900, bulletGravity: 50, range: 2200, recoil: 90,
  projectile: { type: "bullet", size: 2, color: "#fff0c2" },
  destruction: { crater: 8, jagged: 0.35, debris: 4, dust: 0.6, scorch: 0.3, dent: false },
  vfx: { muzzleFlash: 0.9, tracer: "#fff0c2", sparks: 0.9, smoke: 0.6, shells: true, light: "#ffd08a" },
  shake: 3, hitStop: 0.025, sound: { type: "shot", pitch: 1.15, volume: 0.75 },
  sprite: { length: 104, gripX: 0.27, gripY: 0.62, muzzleX: 1.0, muzzleY: 0.39, holdDistance: 15 }
});
