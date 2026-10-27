// ============================================================
//  SHOVEL — Bonks people and scoops dirt. A decent digging tool.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Shovel", type: "melee", rarity: "common",
  description: "Bonk. Also scoops big holes out of the ground.",
  weight: 0.9,
  damage: 32, knockback: 640, propDamage: 3,
  swingTime: 0.24, cooldown: 0.38, reach: 98, arc: 150, lunge: 360, deflect: true,
  destruction: { crater: 24, jagged: 0.7, debris: 12, dust: 1.6, scorch: 0, dent: true },
  vfx: { trail: "#c9d3da", trailWidth: 1.4, sparks: 1.4, light: null },
  shake: 5, hitStop: 0.06, sound: { type: "clang", pitch: 0.95, volume: 0.9 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.47, holdDistance: 12 }
});
