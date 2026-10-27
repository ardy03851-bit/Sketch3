// ============================================================
//  INK BLOTTER — Fat ink blobs that splat and slow whoever they hit.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Ink Blotter", type: "gun", rarity: "common",
  description: "Lobs fat ink blobs. Sticky: whoever gets hit moves slowly.",
  weight: 0.9,
  damage: 14, knockback: 200,
  fireRate: 3, ammo: 30,
  spread: 0.05, bulletSpeed: 1100, bulletGravity: 900, range: 99999, recoil: 60,
  projectile: { type: "orb", size: 8, color: "#2c3c6a", glow: "#7f95d6" },
  status: { shock: 0.6 },
  destruction: { crater: 9, jagged: 0.8, debris: 3, dust: 0.4, scorch: 0.9, dent: false },
  vfx: { muzzleFlash: 0.4, tracer: "#4a5a8a", sparks: 0.4, smoke: 0.3, shells: false, light: null },
  shake: 1.5, hitStop: 0.02, sound: { type: "bubble", pitch: 0.7, volume: 0.8 },
  sprite: { length: 78, gripX: 0.11, gripY: 0.81, muzzleX: 1.0, muzzleY: 0.50, holdDistance: 15 }
});
