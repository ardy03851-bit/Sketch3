// PUNCH STICK
// Weapon script for Inkbrawl

Weapon({
  name: "Punch Stick",
  type: "melee",
  weight: 0.85,

  // DAMAGE & KNOCKBACK
  damage: 38,
  knockback: 1450,

  // SWING SETTINGS
  swingTime: 0.22,
  cooldown: 0.52,
  reach: 108,
  arc: 145,
  lunge: 460,
  deflect: true,
  uses: 0,

  // WEAPON SPRITE
  sprite: {
    length: 104,
    gripX: 0.18,
    gripY: 0.52,
    holdDistance: 16
  },

  // TERRAIN DESTRUCTION
  destruction: {
    crater: 22,
    jagged: 0.48,
    debris: 12,
    dust: 1.25,
    scorch: 0.08,
    dent: true
  },

  // VISUAL EFFECTS
  vfx: {
    trail: "#f0d49a",
    trailWidth: 1.35,
    sparks: 1.25,
    light: "#f3c66d"
  },

  // IMPACT FEEL
  shake: 7.5,
  hitStop: 0.075,

  sound: {
    type: "swing",
    pitch: 0.78,
    volume: 1.0
  }
});
