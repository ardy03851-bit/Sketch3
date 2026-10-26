// ─────────────────────────────────────────────────────────────
//  LONGSHOT  ·  weapons/sniper/sniper.js
//  Laser sight, very fast round, huge headshot bonus.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Longshot",
  type: "gun",
  rarity: "epic",
  description: "Laser sight, flat shot, deadly headshots.",
  weight: 0.6,

  damage: 58,
  knockback: 700,
  headshot: 2.0,
  fireRate: 0.8,
  ammo: 5,
  bulletSpeed: 5200,
  bulletGravity: 0,
  spread: 0.0,
  range: 3200,
  recoil: 300,
  pierce: 1,                      // goes through one player
  laser: true,                    // red laser sight while aiming (everyone can see it)

  projectile: { type: "bullet", size: 2.6, color: "#fff2c8" },

  sprite: { length: 104, gripX: 0.22, gripY: 0.6, muzzleX: 1.0, muzzleY: 0.55, holdDistance: 12 },
  destruction: { crater: 10, jagged: 0.3, debris: 6, dust: 0.8, scorch: 0.4, dent: true },
  vfx: { muzzleFlash: 1.2, tracer: "#fff2c8", sparks: 1.2, smoke: 1, shells: true, light: "#ffd18a" },
  shake: 7,
  hitStop: 0.06,
  sound: { type: "shot", pitch: 0.6, volume: 1 }
});
