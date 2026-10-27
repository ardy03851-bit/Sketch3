// ============================================================
//  BROLLY — A gentleman's umbrella. Pokes, parries and deflects bullets.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Brolly", type: "melee", rarity: "rare",
  description: "A very polite umbrella. Long pokes that bat bullets away.",
  weight: 0.7,
  damage: 28, knockback: 560,
  swingTime: 0.16, cooldown: 0.3, reach: 116, arc: 70, lunge: 560, deflect: true,
  destruction: { crater: 5, jagged: 0.3, debris: 2, dust: 0.4, scorch: 0, dent: false },
  vfx: { trail: "#3a4a8a", trailWidth: 1.4, sparks: 1, light: null },
  shake: 3, hitStop: 0.05, sound: { type: "whoosh", pitch: 1.2, volume: 0.7 },
  sprite: { length: 104, gripX: 0.10, gripY: 0.50, holdDistance: 12 }
});
