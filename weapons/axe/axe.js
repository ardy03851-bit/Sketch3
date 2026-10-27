// ============================================================
//  LUMBER AXE — Chops trees in one swing and people in about three.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Lumber Axe", type: "melee", rarity: "common",
  description: "Fells a tree in one swing. People take about three.",
  weight: 0.9,
  damage: 40, knockback: 760, propDamage: 6,
  swingTime: 0.28, cooldown: 0.5, reach: 92, arc: 150, lunge: 420, deflect: true,
  destruction: { crater: 14, jagged: 0.8, debris: 10, dust: 1, scorch: 0, dent: true },
  vfx: { trail: "#f3e6c8", trailWidth: 1.4, sparks: 1.2, light: null },
  shake: 5, hitStop: 0.06, sound: { type: "swing", pitch: 0.85, volume: 0.9 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.39, holdDistance: 12 }
});
