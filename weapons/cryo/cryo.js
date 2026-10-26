// ─────────────────────────────────────────────────────────────
//  FROSTBITE  ·  weapons/cryo/cryo.js
//  Ice shards that chill. Three chill stacks freeze the target solid.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Frostbite",
  type: "gun",
  rarity: "rare",
  description: "Each shard slows. Three in a row freezes them solid.",
  weight: 0.75,

  damage: 13,
  knockback: 180,
  headshot: 1.4,
  fireRate: 4,
  ammo: 22,
  automatic: true,
  bullets: 1,
  spread: 0.03,
  bulletSpeed: 2000,
  bulletGravity: 90,
  range: 1400,
  recoil: 60,

  projectile: { type: "shard", size: 7, color: "#a8e6ff", glow: "#e6f8ff", trail: "sparkle" },
  status: { chill: 1 },           // stacks; 3 stacks = frozen for a moment

  sprite: { length: 70, gripX: 0.12, gripY: 0.8, muzzleX: 1.0, muzzleY: 0.32, holdDistance: 16 },
  destruction: { crater: 6, jagged: 0.8, debris: 4, dust: 0.4, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.6, tracer: "#bfefff", sparks: 1, smoke: 0.3, shells: false, light: "#9fe0ff" },
  shake: 2,
  hitStop: 0.02,
  sound: { type: "laser", pitch: 1.6, volume: 0.6 }
});
