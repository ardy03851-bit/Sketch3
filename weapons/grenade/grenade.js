// ─────────────────────────────────────────────────────────────
//  BOUNCE BOMB  ·  weapons/grenade/grenade.js
//  Lobs bouncy bombs on a fuse. They burst into cluster bomblets.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Bounce Bomb",
  type: "gun",
  rarity: "rare",
  description: "Lob it, bank it off walls, enjoy the cluster pop.",
  weight: 0.75,

  damage: 10,
  knockback: 200,
  fireRate: 1.1,
  ammo: 6,
  bulletSpeed: 1050,
  bulletGravity: 1500,            // heavy arc
  spread: 0.02,
  range: 99999,                   // the fuse decides when it ends
  recoil: 120,
  bounces: 8,
  bounciness: 0.55,               // 0 = dead stop, 1 = perfect bounce
  fuse: 1.5,                      // seconds until it explodes (0 = explode on impact)

  projectile: { type: "grenade", size: 9, color: "#e07a2a", glow: "#ffd28a", trail: "sparkle", spin: 14 },

  explosion: { radius: 105, damage: 55, knockback: 1050, crater: 38, selfDamage: 0.5 },
  cluster: { count: 4, damage: 18, radius: 55, crater: 16 },  // mini bombs thrown out by the blast

  sprite: { length: 66, gripX: 0.12, gripY: 0.74, muzzleX: 1.0, muzzleY: 0.2, holdDistance: 17 },
  destruction: { crater: 0, debris: 16, dust: 1.6, scorch: 0.9, jagged: 0.55, dent: true },
  vfx: { muzzleFlash: 0.8, tracer: "#ffb35c", sparks: 1.2, smoke: 1.4, shells: false, light: "#ffb35c" },
  shake: 4,
  hitStop: 0.04,
  sound: { type: "thump", pitch: 1, volume: 0.9 }
});
