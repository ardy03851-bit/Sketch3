// ============================================================
//  FRYING PAN — Bonk. Deflects bullets beautifully.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Frying Pan", type: "melee", rarity: "common",
  description: "Bonk. Deflects bullets back at whoever fired them.",
  weight: 0.9,
  damage: 30, knockback: 820,
  swingTime: 0.2, cooldown: 0.34, reach: 80, arc: 170, lunge: 400, deflect: true,
  destruction: { crater: 6, jagged: 0.3, debris: 3, dust: 0.6, scorch: 0, dent: true },
  vfx: { trail: "#3a3a40", trailWidth: 2, sparks: 1.4, light: null },
  shake: 4, hitStop: 0.08, sound: { type: "clang", pitch: 0.9, volume: 1 },
  sprite: { length: 84, gripX: 0.10, gripY: 0.34, holdDistance: 12 }
});
