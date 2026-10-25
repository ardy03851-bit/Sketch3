// SUPER SWORD · weapons/supersword/supersword.js
// An immensely powerful blade built for devastating attacks.

Weapon({
  name: "SUPER SWORD",
  type: "melee",
  weight: 0.45,

  // DAMAGE & KNOCKBACK
  damage: 85,
  knockback: 1850,

  // SWING SETTINGS
  swingTime: 0.32,
  cooldown: 0.48,
  reach: 145,
  arc: 190,
  lunge: 850,
  deflect: true,
  uses: 0,

  // HOW THE SWORD IS HELD
  sprite: {
    length: 155,
    gripX: 0.14,
    gripY: 0.5,
    holdDistance: 18
  },

  // DEVASTATING TERRAIN DESTRUCTION
  destruction: {
    crater: 36,
    jagged: 0.65,
    debris: 20,
    dust: 1.8,
    scorch: 0.25,
    dent: true
  },

  // VISUAL EFFECTS
  vfx: {
    trail: "#fff0b5",
    trailWidth: 2.0,
    sparks: 2.0,
    light: "#ffe08a"
  },

  // IMPACT FEEL
  shake: 11,
  hitStop: 0.09,

  sound: {
    type: "swing",
    pitch: 0.65,
    volume: 1.0
  }
});
