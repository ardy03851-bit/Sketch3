// ============================================================
//  HAND CANNON — The biggest revolver in the drawer.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Hand Cannon", type: "gun", rarity: "rare",
  description: "One slow, enormous bullet. Knocks people clean off ledges.",
  weight: 0.75,
  damage: 62, knockback: 980, headshot: 1.5,
  fireRate: 0.9, ammo: 7,
  spread: 0.012, bulletSpeed: 2600, bulletGravity: 80, range: 2000, recoil: 620,
  projectile: { type: "bullet", size: 3.6, color: "#ffcf8a" },
  destruction: { crater: 20, jagged: 0.45, debris: 12, dust: 1.4, scorch: 0.7, dent: true },
  vfx: { muzzleFlash: 2, tracer: "#ffcf8a", sparks: 1.8, smoke: 1.8, shells: true, light: "#ff9a3c" },
  shake: 9, hitStop: 0.08, sound: { type: "shot", pitch: 0.62, volume: 1 },
  sprite: { length: 80, gripX: 0.12, gripY: 0.68, muzzleX: 1.0, muzzleY: 0.16, holdDistance: 15 }
});
