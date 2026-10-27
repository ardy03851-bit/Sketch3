// ============================================================
//  WITCH BROOM — Wide sweeps that knock people sky high.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Witch Broom", type: "melee", rarity: "rare",
  description: "Wide sweeps that toss people up into the air.",
  weight: 0.7,
  damage: 22, knockback: 500,
  swingTime: 0.2, cooldown: 0.32, reach: 120, arc: 190, lunge: 520, deflect: true,
  destruction: { crater: 4, jagged: 0.2, debris: 2, dust: 1.4, scorch: 0, dent: false },
  vfx: { trail: "#b08aff", trailWidth: 1.8, sparks: 1.2, light: "#a070ff" },
  shake: 3, hitStop: 0.05, sound: { type: "whoosh", pitch: 0.9, volume: 0.8 },
  onHit(e, api) { api.knock(e.target, 0, -700); },
  sprite: { length: 118, gripX: 0.10, gripY: 0.53, holdDistance: 12 }
});
