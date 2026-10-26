// ─────────────────────────────────────────────────────────────
//  HARPOON  ·  weapons/harpoon/harpoon.js
//  Hit a player: yank them towards you.
//  Hit terrain: grapple yourself to the hook.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Harpoon",
  type: "gun",
  rarity: "rare",
  description: "Yank enemies in, or grapple across the map.",
  weight: 0.7,

  damage: 26,
  knockback: 0,
  fireRate: 1.1,
  ammo: 8,
  bulletSpeed: 2000,
  bulletGravity: 380,
  range: 1100,
  recoil: 80,

  projectile: { type: "hook", size: 8, color: "#c9b48a", glow: "#fff2cc" },
  pullToShooter: 1250,            // speed a hit target is dragged towards you
  grapple: 1500,                  // speed you are pulled towards a hooked wall

  sprite: { length: 74, gripX: 0.1, gripY: 0.72, muzzleX: 1.0, muzzleY: 0.2, holdDistance: 16 },
  destruction: { crater: 4, jagged: 0.4, debris: 4, dust: 0.6, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.4, tracer: "#e8d9b0", sparks: 0.8, smoke: 0.6, shells: false, light: null },
  shake: 3,
  hitStop: 0.05,
  sound: { type: "whoosh", pitch: 1.3, volume: 0.8 }
});
