// AUTOMATIC RIFLE · weapons/autorifle/autorifle.js
// A fast, reliable automatic weapon built for sustained fire.

Weapon({
  name: "Automatic Rifle",
  type: "gun",
  weight: 1,

  // DAMAGE
  damage: 16,
  knockback: 280,
  headshot: 1.5,

  // FIRING
  fireRate: 10,
  ammo: 30,
  automatic: true,
  bullets: 1,
  spread: 0.035,
  bulletSpeed: 2400,
  bulletGravity: 65,
  range: 1900,
  recoil: 75,
  bounces: 0,

  // WEAPON SPRITE
  sprite: {
    length: 76,
    gripX: 0.25,
    gripY: 0.62,
    muzzleX: 1.0,
    muzzleY: 0.3,
    holdDistance: 18
  },

  // TERRAIN DESTRUCTION
  destruction: {
    crater: 4,
    jagged: 0.3,
    debris: 3,
    dust: 0.25,
    scorch: 0.05,
    dent: false
  },

  // VISUAL EFFECTS
  vfx: {
    muzzleFlash: 0.65,
    tracer: "#f5d49a",
    sparks: 0.5,
    smoke: 0.2,
    shells: true,
    light: "#ffd18a"
  },

  // IMPACT FEEL
  shake: 1.8,
  hitStop: 0.012,

  sound: {
    type: "shot",
    pitch: 1.15,
    volume: 0.7
  }
});
