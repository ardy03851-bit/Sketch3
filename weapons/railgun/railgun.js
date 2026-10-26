// ─────────────────────────────────────────────────────────────
//  RAIL LANCE  ·  weapons/railgun/railgun.js
//  Charges for a moment, then fires an instant beam that pierces
//  every player in the line. Stopped by terrain.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Rail Lance",
  type: "gun",
  rarity: "legendary",
  description: "Charge, then a beam that skewers everyone in a line.",
  weight: 0.35,

  damage: 72,
  knockback: 900,
  headshot: 1.3,
  fireRate: 0.75,
  ammo: 4,
  range: 2600,
  recoil: 420,

  beam: true,                     // instant hit-scan instead of a travelling bullet
  charge: 0.5,                    // seconds of wind-up before the shot leaves
  pierce: 6,                      // how many players the shot passes through
  laser: true,                    // show a thin laser sight while aiming

  projectile: { type: "beam", size: 7, color: "#6ad8ff", glow: "#bff3ff" },

  sprite: { length: 90, gripX: 0.2, gripY: 0.72, muzzleX: 1.0, muzzleY: 0.35, holdDistance: 13 },
  destruction: { crater: 18, jagged: 0.3, debris: 10, dust: 1, scorch: 0.6, dent: true },
  vfx: { muzzleFlash: 1.3, tracer: "#6ad8ff", sparks: 1.6, smoke: 0.6, shells: false, light: "#6ad8ff" },
  shake: 8,
  hitStop: 0.07,
  sound: { type: "laser", pitch: 0.8, volume: 1 }
});
