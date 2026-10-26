// ─────────────────────────────────────────────────────────────
//  BUBBLE BLASTER  ·  weapons/bubble/bubble.js
//  Floaty bubbles that trap players and carry them up into the sky.
//  Any hit pops the bubble.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Bubble Blaster",
  type: "gun",
  rarity: "rare",
  description: "Traps enemies in a bubble and floats them away.",
  weight: 0.7,

  damage: 8,
  knockback: 80,
  fireRate: 2.2,
  ammo: 14,
  bullets: 1,
  spread: 0.08,
  bulletSpeed: 620,
  bulletGravity: -90,
  drag: 0.6,
  life: 2.6,
  range: 99999,
  recoil: 30,

  projectile: { type: "bubble", size: 13, color: "#9fe8ff", glow: "#ffffff" },
  status: { bubble: 1.8 },        // seconds trapped (popped early by damage)

  sprite: { length: 66, gripX: 0.2, gripY: 0.75, muzzleX: 1.0, muzzleY: 0.38, holdDistance: 16 },
  destruction: { crater: 0, debris: 0, dust: 0, scorch: 0 },
  vfx: { muzzleFlash: 0.3, tracer: "#bff3ff", sparks: 0.3, smoke: 0, shells: false, light: "#bff3ff" },
  shake: 1,
  hitStop: 0.02,
  sound: { type: "bubble", pitch: 1, volume: 0.8 }
});
