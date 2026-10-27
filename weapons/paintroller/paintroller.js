// ============================================================
//  PAINT ROLLER — Wide sweeping swings that leave people dazed and blue.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Paint Roller", type: "melee", rarity: "common",
  description: "Huge sweeping swings that slow whoever gets painted.",
  weight: 0.9,
  damage: 24, knockback: 620,
  swingTime: 0.24, cooldown: 0.36, reach: 112, arc: 190, lunge: 340, deflect: true,
  status: { chill: 0.8 },
  destruction: { crater: 6, jagged: 0.2, debris: 2, dust: 0.4, scorch: 0, dent: false },
  vfx: { trail: "#5ab4e8", trailWidth: 2.2, sparks: 0.8, light: null },
  shake: 3, hitStop: 0.05, sound: { type: "swing", pitch: 0.9, volume: 0.8 },
  sprite: { length: 110, gripX: 0.10, gripY: 0.42, holdDistance: 12 }
});
