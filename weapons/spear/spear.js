// ============================================================
//  SPEAR — Long reach, narrow thrust, huge lunge.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Spear", type: "melee", rarity: "rare",
  description: "Long, narrow thrusts with a big lunge. Keep them at arm's length.",
  weight: 0.8,
  damage: 38, knockback: 640,
  swingTime: 0.16, cooldown: 0.38, reach: 146, arc: 40, lunge: 760, deflect: true,
  destruction: { crater: 8, jagged: 0.4, debris: 4, dust: 0.6, scorch: 0, dent: false },
  vfx: { trail: "#f3efe6", trailWidth: 0.8, sparks: 1, light: null },
  shake: 3, hitStop: 0.05, sound: { type: "swing", pitch: 1.35, volume: 0.8 },
  sprite: { length: 140, gripX: 0.10, gripY: 0.52, holdDistance: 12 }
});
