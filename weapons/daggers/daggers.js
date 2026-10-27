// ============================================================
//  TWIN DAGGERS — Very fast little stabs. Deadly up close.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Twin Daggers", type: "melee", rarity: "rare",
  description: "Very fast stabs. The fourth hit of a flurry bites deep.",
  weight: 0.8,
  damage: 16, knockback: 260,
  swingTime: 0.1, cooldown: 0.14, reach: 62, arc: 110, lunge: 620, deflect: false,
  combo: { hits: 4, window: 0.4, damageMult: [1, 1, 1.2, 2.2] },
  destruction: { crater: 5, jagged: 0.5, debris: 2, dust: 0.3, scorch: 0, dent: false },
  vfx: { trail: "#f3efe6", trailWidth: 0.7, sparks: 0.8, light: null },
  shake: 1.5, hitStop: 0.025, sound: { type: "swing", pitch: 1.6, volume: 0.7 },
  sprite: { length: 64, gripX: 0.10, gripY: 0.51, holdDistance: 12 }
});
