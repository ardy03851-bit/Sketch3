// ─────────────────────────────────────────────────────────────
//  SWORD  ·  weapons/sword/sword.js
//  Melee: a swing that slides you forward (a lunge), cuts the
//  ground it touches and can knock bullets out of the air.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Longsword",
  type: "melee",
  weight: 1,

  // ── damage ──────────────────────────────────────────────
  damage: 55,
  knockback: 760,

  // ── swinging ────────────────────────────────────────────
  swingTime: 0.26,          // seconds the blade is active
  cooldown: 0.42,           // seconds between swings
  reach: 92,                // px from body centre
  arc: 150,                 // degrees covered by the swing
  lunge: 620,               // forward slide speed when swinging (the "slide")
  deflect: true,            // swings knock bullets away
  uses: 0,                  // 0 = unlimited swings

  // ── how the PNG is held ─────────────────────────────────
  sprite: {
    length: 96,
    gripX: 0.13,
    gripY: 0.5,
    holdDistance: 14
  },

  // ── map destruction (blade gashes the ground) ──────────
  destruction: {
    crater: 9,
    jagged: 0.6,
    debris: 6,
    dust: 0.8,
    scorch: 0,
    dent: true
  },

  vfx: {
    trail: "#f3efe6",       // swing arc colour
    trailWidth: 1.0,
    sparks: 1.0,
    light: "#fff1d0"
  },
  shake: 3,
  hitStop: 0.06,
  sound: { type: "swing", pitch: 1.0, volume: 0.8 }
});
