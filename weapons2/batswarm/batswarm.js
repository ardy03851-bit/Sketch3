// ============================================================
//  BAT CAGE — Lets out a flapping swarm of homing bats.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Bat Cage", type: "gun", rarity: "epic",
  description: "Lets out a flapping swarm of little homing bats.",
  weight: 0.6,
  damage: 9, knockback: 120,
  fireRate: 1.4, ammo: 10, bullets: 4,
  spread: 0.5, bulletSpeed: 760, bulletGravity: 0, range: 1500, recoil: 60,
  homing: 4,
  projectile: { type: "shard", size: 6, color: "#2a1f33", glow: "#b08aff" },
  destruction: { crater: 3, jagged: 0.4, debris: 1, dust: 0.3, scorch: 0, dent: false },
  vfx: { muzzleFlash: 0.3, tracer: "#5a4a6a", sparks: 0.8, smoke: 0.4, shells: false, light: null },
  shake: 1.5, hitStop: 0.01, sound: { type: "whoosh", pitch: 1.8, volume: 0.6 },
  sprite: { length: 76, gripX: 0.12, gripY: 0.73, muzzleX: 1.0, muzzleY: 0.29, holdDistance: 15 }
});
