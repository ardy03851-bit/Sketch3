// ============================================================
//  ANCHOR — Slow. Heavy. Ends arguments. Cracks the ground where it lands.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Anchor", type: "melee", rarity: "epic",
  description: "Very slow, very heavy. One good swing ends the argument.",
  weight: 0.5,
  damage: 70, knockback: 1300,
  swingTime: 0.42, cooldown: 0.75, reach: 104, arc: 170, lunge: 260, deflect: false,
  destruction: { crater: 26, jagged: 0.8, debris: 14, dust: 1.8, scorch: 0, dent: true },
  vfx: { trail: "#3a3a40", trailWidth: 2.4, sparks: 2, light: null },
  shake: 9, hitStop: 0.1, sound: { type: "clang", pitch: 0.55, volume: 1 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.48, holdDistance: 12 }
});
