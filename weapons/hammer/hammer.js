// ─────────────────────────────────────────────────────────────
//  QUAKE HAMMER  ·  weapons/hammer/hammer.js
//  Slow overhead slam that sends a shockwave through the ground.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Quake Hammer",
  type: "melee",
  rarity: "epic",
  description: "Overhead slam with a shockwave that hits everyone nearby.",
  weight: 0.55,

  damage: 50,
  knockback: 1200,
  swingTime: 0.36,
  cooldown: 0.85,
  reach: 104,
  arc: 170,
  lunge: 280,
  deflect: true,
  moveSpeed: 0.85,

  shockwave: { radius: 150, damage: 26, knockback: 900, crater: 30 },   // fires mid-swing at the hammer head

  sprite: { length: 108, gripX: 0.1, gripY: 0.48, holdDistance: 12 },
  destruction: { crater: 22, jagged: 0.7, debris: 18, dust: 2, scorch: 0.2, dent: true },
  vfx: { trail: "#ffb35c", trailWidth: 1.8, sparks: 2, light: "#ff9a3c" },
  shake: 12,
  hitStop: 0.1,
  sound: { type: "swing", pitch: 0.55, volume: 1 }
});
