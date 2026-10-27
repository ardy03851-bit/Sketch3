// ============================================================
//  BASEBALL BAT — Home run. The third swing of a combo launches people.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Baseball Bat", type: "melee", rarity: "common",
  description: "Three-hit combo. The third swing is a home run.",
  weight: 1,
  damage: 26, knockback: 700,
  swingTime: 0.22, cooldown: 0.32, reach: 96, arc: 160, lunge: 380, deflect: true,
  combo: { hits: 3, window: 0.55, damageMult: [1, 1.1, 1.9] },
  destruction: { crater: 9, jagged: 0.5, debris: 6, dust: 0.8, scorch: 0, dent: true },
  vfx: { trail: "#f3e6c8", trailWidth: 1.6, sparks: 1, light: null },
  shake: 4, hitStop: 0.07, sound: { type: "swing", pitch: 0.95, volume: 0.9 },
  sprite: { length: 96, gripX: 0.10, gripY: 0.51, holdDistance: 12 }
});
