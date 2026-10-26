// ─────────────────────────────────────────────────────────────
//  REAPER SCYTHE  ·  weapons/scythe/scythe.js
//  A full 360° spin that heals you for part of the damage dealt.
// ─────────────────────────────────────────────────────────────
Weapon({
  name: "Reaper Scythe",
  type: "melee",
  rarity: "legendary",
  description: "Full-circle spin. Steals health from everything it cuts.",
  weight: 0.35,

  damage: 42,
  knockback: 820,
  swingTime: 0.34,
  cooldown: 0.62,
  reach: 118,
  arc: 360,                       // 360 = a full spin around you
  lunge: 420,
  deflect: true,
  lifesteal: 0.45,                // fraction of damage dealt returned as health

  sprite: { length: 118, gripX: 0.15, gripY: 0.68, holdDistance: 12 },
  destruction: { crater: 12, jagged: 0.8, debris: 8, dust: 1, scorch: 0, dent: true },
  vfx: { trail: "#9cff6a", trailWidth: 1.6, sparks: 1.4, light: "#7dff4a" },
  shake: 6,
  hitStop: 0.07,
  sound: { type: "swing", pitch: 0.7, volume: 1 }
});
