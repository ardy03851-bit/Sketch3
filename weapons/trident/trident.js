// ============================================================
//  TRIDENT — Three prongs, long reach, and it zaps whoever it pokes.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Trident", type: "melee", rarity: "epic",
  description: "Long three-pronged thrusts that shock whoever they hit.",
  weight: 0.5,
  damage: 40, knockback: 700,
  swingTime: 0.17, cooldown: 0.4, reach: 150, arc: 46, lunge: 780, deflect: true,
  status: { shock: 0.4 },
  destruction: { crater: 9, jagged: 0.4, debris: 4, dust: 0.6, scorch: 0.5, dent: false },
  vfx: { trail: "#7ff0e0", trailWidth: 1.2, sparks: 1.8, light: "#5ff0e0" },
  shake: 4, hitStop: 0.06, sound: { type: "zap", pitch: 0.9, volume: 0.8 },
  sprite: { length: 140, gripX: 0.10, gripY: 0.47, holdDistance: 12 }
});
