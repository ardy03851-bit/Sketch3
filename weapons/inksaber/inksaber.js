// ============================================================
//  INK SABER — A humming glowing blade. Deflects everything.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Ink Saber", type: "melee", rarity: "legendary",
  description: "A humming glow blade. Fast, long, and it deflects everything.",
  weight: 0.3,
  damage: 52, knockback: 700,
  swingTime: 0.17, cooldown: 0.3, reach: 118, arc: 150, lunge: 640, deflect: true,
  combo: { hits: 3, window: 0.5, damageMult: [1, 1, 1.5] },
  destruction: { crater: 14, jagged: 0.2, debris: 6, dust: 0.4, scorch: 1, dent: false },
  vfx: { trail: "#e07aff", trailWidth: 1.8, sparks: 1.8, light: "#d070ff" },
  shake: 4, hitStop: 0.06, sound: { type: "zap", pitch: 0.5, volume: 0.8 },
  sprite: { length: 118, gripX: 0.10, gripY: 0.47, holdDistance: 12 }
});
