// ============================================================
//  FEMUR CLUB — A very large bone. Rattles skulls, literally.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Femur Club", type: "melee", rarity: "common",
  description: "A very large bone. Three-hit combo, the last one rattles skulls.",
  weight: 1,
  damage: 28, knockback: 700,
  swingTime: 0.22, cooldown: 0.34, reach: 96, arc: 160, lunge: 380, deflect: true,
  combo: { hits: 3, window: 0.55, damageMult: [1, 1.1, 1.7] },
  destruction: { crater: 9, jagged: 0.5, debris: 6, dust: 0.8, scorch: 0, dent: true },
  vfx: { trail: "#efe6cf", trailWidth: 1.6, sparks: 1.2, light: null },
  shake: 4, hitStop: 0.06, sound: { type: "clang", pitch: 1.2, volume: 0.8 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.47, holdDistance: 12 }
});
