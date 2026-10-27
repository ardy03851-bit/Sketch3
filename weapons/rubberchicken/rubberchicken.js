// ============================================================
//  RUBBER CHICKEN — It squeaks. It should not be this strong.
//  Drop-in weapon file: the game finds every weapons/<name>/ folder by itself.
//  See weapons/gun/gun.js for every available field.
// ============================================================
Weapon({
name: "Rubber Chicken", type: "melee", rarity: "legendary",
  description: "Squeaks on every hit. The third hit of a combo launches people into orbit.",
  weight: 0.3,
  damage: 22, knockback: 600,
  swingTime: 0.15, cooldown: 0.24, reach: 90, arc: 170, lunge: 480, deflect: true,
  combo: { hits: 3, window: 0.5, damageMult: [1, 1.2, 2.2] },
  destruction: { crater: 6, jagged: 0.3, debris: 3, dust: 0.6, scorch: 0, dent: false },
  vfx: { trail: "#f2d23a", trailWidth: 1.6, sparks: 1.2, light: null },
  shake: 3, hitStop: 0.05, sound: { type: "boing", pitch: 1.6, volume: 0.9 },
  onHit(e, api) { if (Math.random() < 0.25) api.knock(e.target, 0, -1100); }, // sometimes: straight up
  sprite: { length: 84, gripX: 0.10, gripY: 0.50, holdDistance: 12 }
});
