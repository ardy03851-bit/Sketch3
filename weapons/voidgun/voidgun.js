// ─────────────────────────────────────────────────────────────
//  VOID ORB  ·  weapons/voidgun/voidgun.js
//  A slow orb that drags everyone nearby into it, then implodes.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Void Orb",
  type: "gun",
  rarity: "legendary",
  description: "A slow black hole. Sucks people in, then pops.",
  weight: 0.35,

  damage: 20,
  knockback: 200,
  fireRate: 0.7,
  ammo: 4,
  bulletSpeed: 520,
  bulletGravity: 0,
  range: 760,                     // implodes when it has travelled this far
  recoil: 160,
  pierce: 99,                     // flies through players
  passTerrain: true,              // flies through walls too

  projectile: { type: "orb", size: 16, color: "#2a1840", glow: "#b06cff", trail: "sparkle", spin: 6 },
  pull: { radius: 260, force: 2600 },   // drag strength while it flies
  explosion: { radius: 130, damage: 48, knockback: 900, crater: 54, selfDamage: 0.3 },

  sprite: { length: 72, gripX: 0.12, gripY: 0.75, muzzleX: 1.0, muzzleY: 0.3, holdDistance: 16 },
  destruction: { crater: 0, debris: 18, dust: 1.4, scorch: 0.8, jagged: 0.8, dent: true },
  vfx: { muzzleFlash: 1.1, tracer: "#b06cff", sparks: 1.2, smoke: 0.4, shells: false, light: "#a05cff" },
  shake: 5,
  hitStop: 0.04,
  sound: { type: "whoosh", pitch: 0.6, volume: 0.9 }
});
