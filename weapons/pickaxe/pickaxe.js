// ============================================================
//  PICKAXE — Digs huge chunks out of the ground. Also hurts.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Pickaxe", type: "melee", rarity: "common",
  description: "Tears big chunks out of the ground. Dig yourself a foxhole.",
  weight: 0.9,
  damage: 34, knockback: 600, propDamage: 3,
  swingTime: 0.26, cooldown: 0.4, reach: 90, arc: 160, lunge: 300, deflect: true,
  destruction: { crater: 30, jagged: 0.9, debris: 16, dust: 1.8, scorch: 0, dent: true },
  vfx: { trail: "#c9d3da", trailWidth: 1.3, sparks: 1.6, light: null },
  shake: 5, hitStop: 0.06, sound: { type: "swing", pitch: 0.75, volume: 0.9 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.52, holdDistance: 12 }
});
