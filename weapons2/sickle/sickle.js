// ============================================================
//  REAPER SICKLE — A curved blade that slices fast and sets people burning.
//  Drop-in weapon file: the game finds every weapons2/<name>/ (event weapons, used on the event page) folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Reaper Sickle", type: "melee", rarity: "legendary",
  description: "Fast curved slashes with a ghostly fire that keeps burning.",
  weight: 0.35,
  damage: 40, knockback: 600,
  swingTime: 0.16, cooldown: 0.28, reach: 104, arc: 170, lunge: 620, deflect: true,
  status: { burn: 1.2 },
  combo: { hits: 3, window: 0.5, damageMult: [1, 1, 1.5] },
  destruction: { crater: 12, jagged: 0.7, debris: 6, dust: 0.6, scorch: 0.8, dent: false },
  vfx: { trail: "#9cff6a", trailWidth: 1.6, sparks: 1.8, light: "#8cff5a" },
  shake: 4, hitStop: 0.06, sound: { type: "swing", pitch: 1.2, volume: 0.9 },
  sprite: { length: 100, gripX: 0.10, gripY: 0.35, holdDistance: 12 }
});
