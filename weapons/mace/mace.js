// ============================================================
//  MORNING STAR — Spiked ball that cracks the ground around it.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Morning Star", type: "melee", rarity: "rare",
  description: "A slow spiked slam with a small shockwave.",
  weight: 0.7,
  damage: 44, knockback: 900,
  swingTime: 0.32, cooldown: 0.7, reach: 98, arc: 170, lunge: 300, deflect: true, moveSpeed: 0.92,
  shockwave: { radius: 110, damage: 18, knockback: 700, crater: 22 },
  destruction: { crater: 16, jagged: 0.8, debris: 12, dust: 1.6, scorch: 0, dent: true },
  vfx: { trail: "#c9d3da", trailWidth: 1.6, sparks: 1.6, light: null },
  shake: 8, hitStop: 0.08, sound: { type: "swing", pitch: 0.6, volume: 1 },
  sprite: { length: 96, gripX: 0.10, gripY: 0.50, holdDistance: 12 }
});
