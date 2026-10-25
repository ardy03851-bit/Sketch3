// KATANA · weapons/katana/katana.js
// A swift samurai blade: fast cuts, long reach, precise hits.

Weapon({
  name: "Katana",
  type: "melee",
  weight: 1,

  // DAMAGE & IMPACT
  damage: 48,
  knockback: 850,

  // SWING SETTINGS
  swingTime: 0.19,
  cooldown: 0.34,
  reach: 112,
  arc: 115,
  lunge: 580,
  deflect: true,
  uses: 0,

  // HOW THE KATANA IS HELD
  sprite: {
    length: 112,
    gripX: 0.13,
    gripY: 0.5,
    holdDistance: 14
  },

  // TERRAIN CUTTING
  destruction: {
    crater: 13,
    jagged: 0.7,
    debris: 8,
    dust: 0.7,
    scorch: 0,
    dent: true
  },

  // VISUAL EFFECTS
  vfx: {
    trail: "#f3efe6",
    trailWidth: 1.25,
    sparks: 1.15,
    light: "#fff1d0"
  },

  // FEEL
  shake: 4.5,
  hitStop: 0.055,

  sound: {
    type: "swing",
    pitch: 1.2,
    volume: 0.85
  }
});
