// ─────────────────────────────────────────────────────────────
//  BOOMERANG  ·  weapons/boomerang/boomerang.js
//  Thrown blade that cuts through players and flies back to you.
//  Uses the weapon PNG itself as the spinning projectile.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Boomerang",
  type: "gun",
  rarity: "rare",
  description: "Cuts through everyone, then comes back for more.",
  weight: 0.7,

  damage: 30,
  knockback: 520,
  fireRate: 1.3,
  ammo: 0,                        // 0 = unlimited (it always comes back)
  bulletSpeed: 1300,
  bulletGravity: 0,
  range: 620,                     // turns round after this distance
  recoil: 0,
  pierce: 99,
  returns: true,                  // flies back to the thrower
  hideWhileFlying: true,          // your hand is empty while it is out

  projectileSprite: true,         // use boomerang.png as the projectile
  projectileSize: 44,
  projectile: { type: "boomerang", size: 22, color: "#d9c39a", spin: 22 },

  sprite: { length: 58, gripX: 0.5, gripY: 0.3, muzzleX: 0.6, muzzleY: 0.3, holdDistance: 18 },
  destruction: { crater: 7, jagged: 0.6, debris: 5, dust: 0.6, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0, tracer: "#f3e6c8", sparks: 0.9, smoke: 0, shells: false, light: null },
  shake: 2,
  hitStop: 0.04,
  sound: { type: "whoosh", pitch: 1.1, volume: 0.8 }
});
