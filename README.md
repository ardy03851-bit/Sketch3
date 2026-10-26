# Inkbrawl

A small hand-drawn party brawler for iPad (and anything with a browser).
Every round, every player is handed **one random weapon**. No abilities, no perks, no loadouts: guns shoot, swords swing and slide. Last scribble standing wins the round, first to the target score wins the match.

The whole game is three things:

```
inkbrawl/
├── README.md        ← this file
├── index.html       ← the core game (engine, UI, netcode, art, sound)
├── expansion.js     ← biomes, water, weather, props, new weapon mechanics, big-map mode, quality scaling
├── tools/           ← make-manifest.py (for hosts without folder listings)
└── weapons/         ← one folder per weapon, picked up automatically
    ├── gun/
    │   ├── gun.png
    │   └── gun.js
    └── sword/
        ├── sword.png
        └── sword.js
```

You never edit `index.html` to add a weapon. Drop a new folder into `weapons/` and it is in the game.

---

## Contents

1. [Running it](#running-it)
2. [Playing](#playing)
3. [Multiplayer and rooms](#multiplayer-and-rooms)
4. [Controls](#controls)
5. [Round rules](#round-rules)
6. [Adding a weapon](#adding-a-weapon)
7. [Weapon script reference](#weapon-script-reference)
8. [Scripting hooks](#scripting-hooks)
9. [PNG rules and the no-texture fallback](#png-rules-and-the-no-texture-fallback)
10. [Map destruction](#map-destruction)
11. [Art style guide](#art-style-guide)
12. [VFX and lighting](#vfx-and-lighting)
13. [UI and icons](#ui-and-icons)
14. [How the code is laid out](#how-the-code-is-laid-out)
15. [Troubleshooting](#troubleshooting)
16. [Expansion: worlds, modes and weapon mechanics](#expansion-worlds-modes-and-weapon-mechanics)

---

## Running it

The game needs to be opened **through a web address**, not by double-tapping the file, because the browser only lets a page look inside the `weapons/` folder when it was served by a web server. There are three ways the game finds weapons, tried in this order:

| # | How weapons are found | When it is used |
|---|---|---|
| 1 | **Folder listing** — reads the server's directory page for `weapons/` and each sub-folder | Any simple static server that shows folder listings (Python, `npx serve`, Apache, nginx with `autoindex on`, most "local web server" iPad apps) |
| 2 | **GitHub repository** — asks the GitHub API what's inside `weapons/` | The game is hosted on GitHub Pages (`<you>.github.io/<repo>/`) — detected automatically |
| 3 | **Pick weapons folder** button | Fallback when neither works: on the title screen tap the weapons badge, then *Pick weapons folder* and select the `weapons` folder from Files |

If nothing is found you still get **Fists**, so the game always runs.

### Option A — GitHub Pages (best for hosting from an iPad)

1. Create a public GitHub repository and upload `README.md`, `index.html` and the `weapons` folder (the GitHub website and the Working Copy app both work on iPad).
2. Repository → Settings → Pages → *Deploy from a branch* → `main` / root.
3. Open `https://<your-username>.github.io/<repo>/` on your iPad. Weapons load from the repository automatically.
4. Add a weapon later? Upload the new folder; refresh the page. That's it.

If the site lives somewhere unusual you can point the game at the repo directly:
`index.html?gh=owner/repo@branch/sub/folder` (branch and sub-folder are optional).

### Option B — any computer on your network

```bash
cd inkbrawl
python3 -m http.server 8000
```

Then open `http://<computer-ip>:8000` on the iPad. Python's server shows folder listings, which is all the game needs.

### Option C — local server app on the iPad

Any iPad web-server app that serves a folder **with directory listings turned on** works the same way as Option B.

> Only the **host** needs the weapons folder. When someone joins your room, the host sends them every weapon script and PNG over the connection, so friends can join from a plain link on any device.

---

## Playing

Title screen:

- **Your name / colour** — remembered with a small cookie.
- **Start a game** — opens the room setup (name, max players, first-to score, bots to fill empty seats, public or private). Press *Create room* and you are the host.
- **Servers** — the live list of public rooms. Tap *Join* on any of them, or type a 5-letter room code.
- **Practice vs bots (offline)** — no internet needed.
- Badges at the bottom show how many weapons were found and whether the server list is online.

In-game, the **pause button** (top left) shows the room code, a *Copy invite link* button, and *Leave*.

---

## Multiplayer and rooms

There is **no game server to run**. Your iPad is the server.

```
             ┌────────────── public room list (MQTT, retained message) ─────────────┐
             │  topic inkbrawl/v1/rooms/<CODE> → {name, host, players, round, …}    │
             └───────────────▲─────────────────────────────────▲────────────────────┘
                             │ announce every few seconds      │ read the list
                             │                                 │
   ┌─────────────────────────┴───────┐   WebRTC data channel  ┌┴───────────────────────┐
   │  HOST (your iPad)               │◄──────────────────────►│  PLAYER (any browser)  │
   │  runs the authoritative game:   │   inputs →             │  predicts own movement │
   │  damage, kills, rounds, bots,   │   ← snapshots, events  │  draws everyone else   │
   │  craters, weapon rolls          │                        │  smoothly interpolated │
   └─────────────────────────────────┘                        └────────────────────────┘
```

- **Connections** use [PeerJS](https://peerjs.com/) (WebRTC). The room code is the host's peer id, so a code is all anyone needs. PeerJS's free public broker is only used to introduce the two devices; game traffic goes device-to-device.
- **The server list** uses free public MQTT brokers over secure WebSockets (EMQX, HiveMQ and Mosquitto — whichever answers). The host publishes a small retained "room card" and a last-will message removes it if the host disappears. Private rooms simply never publish a card; join them by code or link.
- **Drop-in any time.** Players can join a room in the middle of a round. They spawn straight into the current round (or at the start of the next one if a round has just ended), receive the current map including every crater already blown into it, and get the weapon files streamed to them.
- **Invite link.** `…/index.html?join=ABCDE` opens the game and joins straight away.
- **Host-authoritative.** Hits, damage, kills, crater carving and weapon rolls are decided by the host and broadcast as events, so everyone sees the same holes in the same places. Your own movement is predicted locally so controls feel instant even with lag.
- **Bots** fill empty seats if you asked for them, and step aside automatically when real players join.
- **Keep the host awake.** The game requests a screen Wake Lock while hosting. If the host app is closed or the iPad sleeps, the room closes. If the internet blips, the host reconnects to the broker automatically and existing players stay connected.
- **Limits.** Up to 8 players. WebRTC works across almost all home and mobile networks; a few very strict corporate/school networks block it, in which case the joiner sees "could not reach host".

---

## Controls

### iPad / touch

| Control | What it does |
|---|---|
| **Left stick** (appears where your thumb lands on the left half) | Move. Flick it **up** to jump, flick up again in the air to double jump. Pull down to drop faster. |
| **Jump button** (right, above the attack stick) | Jump / double jump. |
| **Right stick** | Drag to aim (a dotted aim line appears), **release to attack**. |
| **Tap** on the right side | Quick attack, auto-aimed at the nearest visible enemy. |
| Automatic weapons | Hold the right stick out at the edge to keep firing. |
| **Pause** (top left) | Room code, invite link, leave. |

The sticks float: they appear under your thumb wherever you put it, so there is no "missing the button". Everything is sized for thumbs and nothing important sits under your palms.

### Keyboard and mouse

| Key | Action |
|---|---|
| `A` `D` / arrows | Move |
| `W` / `Space` / `↑` | Jump, double jump |
| `S` / `↓` | Drop faster |
| Mouse | Aim |
| Click / `F` | Attack |
| `Esc` | Pause |

---

## Round rules

1. **Warm-up** — while fewer than 2 players are in, you can run around and practise.
2. **Countdown** — a new map is drawn, everybody spawns, everybody is given **one random weapon** from the `weapons` folder (weighted by each weapon's `weight`).
3. **Fight** — 100 hp each. Guns have the ammo their script gives them; when it runs out you are down to **Fists** (a weak shove). There are no pickups and no abilities.
4. Falling off the map kills you. If someone knocked you off in the last few seconds, they get the credit.
5. **Sudden death** — if the round lasts 60 seconds, "the ink dries" and everyone loses a little health every half second until somebody wins.
6. The last one alive scores a point. First to the target (3, 5 or 10) is champion, then scores reset and it starts again.

---

## Adding a weapon

1. Make a folder in `weapons/`. **The folder name is the weapon id**, e.g. `weapons/shotgun/`.
2. Put a PNG in it, ideally named like the folder: `weapons/shotgun/shotgun.png`.
3. Put a script in it named like the folder: `weapons/shotgun/shotgun.js`.
4. Refresh the game. The weapon is in the random pool.

Name matching is forgiving: if there is no `shotgun.js`/`shotgun.png`, the first `.js`/`.png` inside the folder is used. Missing script → default gun stats. Missing PNG → the no-texture square.

A minimal script:

```js
Weapon({
  name: "Shotgun",
  type: "gun",
  damage: 14,
  bullets: 7,
  spread: 0.16,
  ammo: 3,
  fireRate: 1.1,
  recoil: 700,
  sprite: { length: 72, gripX: 0.25, gripY: 0.65, muzzleX: 1, muzzleY: 0.3 },
  destruction: { crater: 8, debris: 4 }
});
```

Anything you leave out is filled in with sensible defaults. The script is plain JavaScript: you call `Weapon({...})` once with an object.

---

## Weapon script reference

### Common fields

| Field | Type | Default | Meaning |
|---|---|---|---|
| `name` | text | folder name | Shown on the weapon card and kill feed |
| `type` | `"gun"` / `"melee"` | `"gun"` | Shoots bullets, or swings and slides |
| `weight` | number | `1` | How often it's rolled. `2` = twice as common, `0` = never rolled |
| `damage` | number | gun 25 / melee 40 | Damage per bullet or per swing hit (players have 100 hp) |
| `knockback` | px/s | gun 400 / melee 600 | How hard a hit pushes |
| `shake` | number | `4` | Screen shake strength when used |
| `hitStop` | seconds | `0.04` | Tiny freeze-frame on hit — makes hits feel heavy |
| `sound` | `{ type, pitch, volume }` | | `type`: `"shot"` for guns, `"swing"` or `"punch"` for melee; `pitch` makes it bigger (lower) or smaller (higher). All sounds are synthesised, no audio files |

### Gun fields (`type: "gun"`)

| Field | Default | Meaning |
|---|---|---|
| `fireRate` | `3` | Shots per second |
| `ammo` | `8` | Shots per round. `0` = unlimited. When empty → Fists |
| `automatic` | `false` | Keep firing while held |
| `bullets` | `1` | Pellets per shot |
| `spread` | `0.03` | Random spread in radians |
| `bulletSpeed` | `2000` | px/s |
| `bulletGravity` | `0` | Bullet drop (px/s²) |
| `range` | `1600` | Distance before the bullet fizzles |
| `recoil` | `200` | Pushes the shooter backwards (rocket-jumping is allowed) |
| `bounces` | `0` | Ricochets off the ground |
| `headshot` | `1.5` | Multiplier for hits on the top of the body |

### Melee fields (`type: "melee"`)

| Field | Default | Meaning |
|---|---|---|
| `swingTime` | `0.25` | Seconds the blade is active |
| `cooldown` | `0.45` | Seconds between swings |
| `reach` | `80` | px from body centre |
| `arc` | `140` | Degrees covered by the swing |
| `lunge` | `500` | Forward slide speed when swinging (the "slide") |
| `deflect` | `false` | Swings knock bullets out of the air |
| `uses` | `0` | Swings per round. `0` = unlimited |

### `sprite` — how the PNG is held

| Field | Meaning |
|---|---|
| `length` | On-screen length in world pixels. Height follows the PNG's aspect ratio |
| `gripX`, `gripY` | Where the hand holds it, `0..1` across / down the PNG |
| `muzzleX`, `muzzleY` | Guns only — where bullets and the flash come out, `0..1` |
| `holdDistance` | Distance of the hand from the body centre |

### `destruction` — what it does to the map

| Field | Range | Meaning |
|---|---|---|
| `crater` | px | Hole radius. `0` = no hole |
| `jagged` | 0..1 | 0 = clean round bite, 1 = broken, chunky edge |
| `debris` | count | Chunks of ground thrown out (they bounce, settle, and fall again if the ground under them is blown away) |
| `dust` | 0..2 | Dust cloud amount |
| `scorch` | 0..1 | Darkness of the burn mark left on the ground |
| `dent` | true/false | Also press a soft dented ring around the hole |

### `vfx` — look and feel

| Field | Meaning |
|---|---|
| `muzzleFlash` | Flash size multiplier |
| `tracer` | Bullet streak colour |
| `sparks`, `smoke` | Amount multipliers |
| `shells` | Eject a casing that bounces on the ground |
| `light` | Colour of the flash of light thrown onto the world |
| `trail`, `trailWidth` | Melee only — colour and thickness of the swing arc |

---

## Scripting hooks

For anything more interesting than numbers, add functions to the object. They run **on the host only** (so everyone sees the same result) and receive an `api`:

```js
Weapon({
  name: "Boom Stick",
  type: "gun",
  damage: 10,
  ammo: 2,
  destruction: { crater: 0 },

  onImpact(e, api) {            // a bullet hit the ground
    api.explode(e.x, e.y, 120, 60, e.shooter);
  },
  onHit(e, api) {               // a bullet or swing hit a player
    api.knock(e.target, 0, -900);   // launch them upwards
  },
  onFire(e, api) {              // the trigger was pulled
    // e.x, e.y, e.angle, e.shooter
  }
});
```

| `api.` | Does |
|---|---|
| `crater(x, y, r, { jagged, scorch, dent, debris, dust })` | Blow a hole in the map |
| `explode(x, y, radius, damage, byId)` | Crater + falloff damage + knockback to everyone in range |
| `damage(playerId, amount, byId)` | Hurt a player |
| `knock(playerId, vx, vy)` | Push a player |
| `players()` | List of `{ id, x, y, hp, alive }` |

Event fields: `onImpact` → `x, y, shooter`; `onHit` → `x, y, target, shooter`; `onFire` → `x, y, angle, shooter`. Errors inside hooks are caught so a broken script can't crash a match.

---

## PNG rules and the no-texture fallback

- **Draw the weapon facing right**, handle on the left, business end on the right. The game flips it when you face left.
- Transparent background. Any size; around 400–800 px wide looks crisp on Retina screens.
- Draw it like the rest of the game: a confident dark outline, flat fills, one soft gradient for shine. It's the one place the game allows real detail.
- After adding it, tune `sprite.gripX/gripY` so the hand sits on the handle, and `muzzleX/muzzleY` so bullets leave the barrel.
- **No PNG?** The weapon still works and is drawn as the classic pink-and-black checkerboard **no-texture square**, so you can test a script before the art exists. The weapons badge on the title screen lists any missing files.

---

## Map destruction

The ground is a grid of 4 px cells, drawn into a high-resolution paper texture.

- **Craters** are carved with a noisy, seeded outline (`jagged`) so every hole is a slightly different bite.
- **Dents** press a ring around the hole down a little so the surface looks pushed in, not just cut.
- **Scorch** and **ink stains** are painted onto a decal layer inside the ground and stay for the round.
- **Debris** chunks take the colour of the layer they came from, bounce, roll, come to rest, and fall again if the ground underneath them is destroyed later.
- **Dust** rolls out low along the surface.
- Islands can be cut through completely. Floating bits stay where they are (it's a drawing), but you can absolutely dig the ground out from under someone.
- Every crater is an event from the host with its own seed, so all players carve exactly the same shape. Late joiners receive the list of craters and replay them.
- Each round draws a fresh map from a seed, in one of four colour themes (Dust, Slate, Moss, Ember).

---

## Art style guide

The game should look like **a page from a sketchbook that has started moving**. Simple, warm, a little imperfect, never childish.

### Shapes

- **Every model is one or two shapes.** A player is a single rounded squircle "bean" plus a small round hand. Islands are one blob with a grassy/dusty lip.
- **No faces.** Characters have no eyes, mouth or details. Personality comes from movement: squash when landing, stretch when jumping, lean when running, a wobble when hit.
- Detail is reserved for **weapon PNGs**. Everything else gets detail only through a gradient.

### Lines

- Outlines are **dark warm ink** (`#1f1c24`), never pure black.
- Lines are **not perfectly straight**: every outline is slightly wobbly and re-drawn a few times a second ("line boil"), like an animation drawn frame by frame.
- Outlines are **divided** — the stroke breaks and overlaps a little in places instead of being one perfect closed loop.

### Fills

- Fills are **misregistered**: the colour is offset a couple of pixels from the outline and sometimes spills outside it, like a print or a quick marker fill.
- Colours are **flat with one gradient** — lighter at the top where the light hits, deeper at the bottom.
- A faint paper grain sits over everything.

### Palette

| Role | Colour |
|---|---|
| Ink | `#1f1c24` |
| Paper | `#f6eedf` |
| Soft ink (labels) | `#5b5360` |
| Players | red `#e0533d`, teal `#2f9a8f`, mustard `#e8a33a`, violet `#6b55c7`, blue `#3f78c9`, pink `#d9578f`, green `#6aa84f`, brown `#8a6a4f` |

Skies are soft two-tone gradients with a pale sun and drifting paper-cut clouds, with two layers of hills behind for depth.

### Type

- **Shantell Sans** (a marker-style handwriting font, loaded from Google Fonts), heavy weights for titles and buttons.
- Small labels are uppercase with letter-spacing.

---

## VFX and lighting

The rule: **effects are drawn, short, and heavy** — like ink, chalk and paper, not glowing cartoon stars.

- **Muzzle flash**: a sharp, jagged ink-outlined burst that lasts a couple of frames, plus a warm light that briefly lights the ground and players nearby.
- **Tracers**: thin, fast streaks that fade from the tail.
- **Impacts**: a quick white shock ring, sparks that bounce off the ground, dust, debris, and a scorch mark that stays.
- **Hits**: ink splatter in the victim's colour (drops fly, land and stain the ground), a hit ring, a small damage number in hand-drawn type, a frame of hit-stop and a bit of screen shake.
- **Swings**: a crescent trail that tapers and fades, matching the blade's arc.
- **Death**: the character bursts into a big ink splash.
- **Lighting**: a soft directional light from the sun side (lighter tops, darker bottoms on everything), contact shadows under players, a subtle vignette, plus temporary point lights from flashes.
- Camera shake is "trauma" based (smooth, decays quickly) — punchy without being nauseating.
- **Adaptive quality**: if the frame rate drops, the game reduces particle counts and resolution automatically, so older iPads stay smooth.

---

## UI and icons

- Panels are paper cards with wobbly hand-drawn borders and a hard offset ink shadow.
- Buttons have the same misregistered fill as the characters, press down when tapped, and wiggle slightly on hover.
- Icons are inline SVG line drawings run through a "roughen" filter so they look hand-inked (flag, magnifier, play, back, refresh, copy, link, crown, people, skull, crosshair, bot, door, pause).
- In-game HUD: score chips across the top (dimmed when dead), weapon card at the bottom with the weapon PNG, ammo pips and health bar, kill feed top right, big hand-lettered banners for "Round 3", "Fight", "You win".

---

## How the code is laid out

`index.html` is organised into numbered sections:

1. **Styles** — palette, paper UI, buttons, HUD, touch controls.
2. **Markup** — SVG icon set and the screens (title, host setup, servers, weapons, pause, HUD).
3. **Core** — config, themes, weapon discovery (`discoverWeapons`, `parseWeaponScript`, `normalizeWeapon`), terrain grid, map generator, crater carving.
4. **World** — players, physics, bullets, particles, lights, synth audio, renderer.
5. **Game** — input, attacks, host authority (`hostAttack`, `hostDamage`, `hostKill`), rounds, bots, networking (`startHost`, `startClient`, room list).
6. **UI + loop** — menus, HUD, fixed 60 Hz simulation step, rendering, boot.

For automated testing the page exposes `window.render_game_to_text()` (a JSON summary of the game state) and `window.advanceTime(ms)`.

External scripts loaded at runtime from a CDN (unpkg, with jsDelivr as backup): PeerJS 1.5.4 and MQTT.js 5.10.1. The game itself is entirely in `index.html`.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "0 weapons" / only Fists | The page isn't being served with folder listings. Use GitHub Pages, `python3 -m http.server`, or tap the weapons badge → *Pick weapons folder*. |
| A weapon shows a pink/black square | Its PNG is missing or named differently. The weapons screen lists what was found. |
| A weapon uses odd stats | Its script failed to parse. Open the weapons screen to see the error. |
| Room isn't in the server list | Check it's set to Public, wait a few seconds and tap Refresh. School/office networks sometimes block the list — join by code or invite link instead. |
| "Could not reach host" | The host closed the tab, the iPad slept, or a strict network blocks WebRTC. Try another network (mobile hotspot works). |
| No sound | Tap the screen once; iPad only allows audio after a touch. Check the silent switch. |
| Laggy on an old iPad | Close other tabs. The game lowers its own quality automatically. |


## Performance pass (Ground Hit + Bullet Trails)

- Terrain damage now queues small, spatially separate dirty regions instead of merging distant hits into one oversized rebuild. Only three terrain patches are composited per animation frame; collision-grid changes remain immediate.
- Hit-region terrain compositing uses reusable local canvases rather than full-map temporary layers. Full-resolution terrain art is retained.
- Bullet tracers use a curved, multi-pass line with an ink edge, warm body, pale core, and small direction tick without allocating a new gradient for every bullet each frame.
- Active particles are capped with single-particle eviction to avoid occasional large array-splice spikes.

Syntax validation has been run; actual frame-time measurements and multiplayer playtesting are still required to confirm device-specific performance.


---

## Expansion: worlds, modes and weapon mechanics

Everything in this section lives in `expansion.js`, loaded after the core script. It replaces or wraps core functions, so `index.html` stays readable.

### Modes

| Mode | Map | Notes |
|---|---|---|
| Classic arena | 1600 × 1000, whole map on screen | Original rules, 60 s rounds |
| The Big Wilds (expedition) | 3600 × 1600, follow camera | 150 s rounds, minimap, off-screen enemy arrows, supply crates, a storm wall that closes in from both sides |

Pick the mode and atmosphere in *Practice vs bots* or when hosting a room. Online rooms send the mode and biome to every player.

### Atmospheres (16)

Dust Bowl, Slate Cliffs, Moss Garden, Ember Hollow, Rainy Meadow, Thunderstorm Ridge, Tropical Islands, Sunset Lagoon, Pine Forest, Autumn Woods, Snowfield, Night Swamp, Volcano, Sandstorm Canyon, Cherry Blossom, Midnight Harbor.

Each has its own terrain layout (floating islands, rolling ground, or islands in the sea), parallax backdrop, props and weather:

- **Water** — puddles, ponds, swamp pools and open sea. The surface is a spring simulation: bullets, explosions, players and rain all make waves and splashes. Craters under a pool drain it. Players swim (buoyancy, slow fall, bubbles).
- **Lava** — volcano pools hurt and set you on fire.
- **Weather** — rain with ripples, thunderstorms with lightning that strikes the ground (and players), snow, sandstorms, falling leaves and petals, fireflies, embers, ash, fog.
- **Props** — oaks, pines, palms, autumn and cherry trees, cacti, bushes, reeds, bounce mushrooms, lamps, crates and explosive barrels. Trees shed leaves when hit, catch fire from fire weapons and fall when burnt through or undercut. Barrels chain-explode.

### Movement additions

Wall slide and wall jump, swimming, ice on snow maps, mushroom bounce pads, and the harpoon grapple.

### New weapons (15)

Ink Rocket, Bounce Bomb, Scattergun, Rail Lance, Storm Coil (tesla), Dragon's Breath (flamer), Frostbite (cryo), Void Orb, Shredder (minigun), Bubble Blaster, Harpoon, Longshot (sniper), Quake Hammer, Boomerang, Reaper Scythe. Every weapon has a rarity (common, rare, epic, legendary) shown as a coloured edge and label in the UI.

### Extra weapon fields

All optional. Unknown fields are ignored, so older weapon scripts keep working.

| Field | Meaning |
|---|---|
| `rarity`, `description` | Shown on the weapon card, reveal and weapon list |
| `projectile: { type, size, color, glow, trail, spin }` | `type`: `bullet`, `rocket`, `grenade`, `orb`, `bubble`, `boomerang`, `flame`, `shard`, `hook`, `beam` |
| `explosion: { radius, damage, knockback, crater, selfDamage }` | Area damage on impact |
| `cluster: { count, damage, radius, crater }` | Child bomblets after the main explosion |
| `fuse`, `bounciness`, `drag`, `life` | Timed grenades, bounces, air drag, lifetime in seconds |
| `pierce`, `passTerrain`, `homing` | Pass through players, ignore terrain, turn rate towards the nearest enemy |
| `beam`, `charge`, `laser` | Instant hit-scan, wind-up time, laser sight while aiming |
| `chain: { count, range, damage }` | Lightning jumps between players |
| `status: { burn, chill, shock, bubble }` | Seconds of each effect. Three chill hits freeze |
| `ignites` | Sets trees and barrels on fire |
| `pull: { radius, force }` | Black-hole pull while flying |
| `pullToShooter`, `grapple` | Harpoon: drag the target to you, or yourself to the wall |
| `returns`, `hideWhileFlying` | Boomerang behaviour |
| `magazine`, `reloadTime`, `spinUp`, `burst: { count, gap }` | Magazine and reload (press R or tap the weapon card), minigun spin-up, burst fire |
| `moveSpeed` | Run speed multiplier while held |
| `combo`, `arc`, `shockwave`, `lifesteal` | Melee: combo chain multipliers, `arc: 360` spin attacks, ground shockwave, heal on hit |
| `sound: { type }` | `rocket`, `thump`, `laser`, `zap`, `flame`, `whoosh`, `bubble`, `freeze`, ... |

### Settings and performance

Settings (title screen chip, or from the pause menu) are saved in a cookie: graphics (Adaptive, High, Medium, Low), weather effects, camera shake, volume and an fps readout.

Adaptive mode starts from a guess based on the device (cores, memory, screen size) and then watches the frame rate. If it drops below 50 fps it lowers render resolution and effect density one step; once it holds 60 again it steps back up. Physics, hit detection and gameplay never change with quality. Rendering only draws what is on screen (terrain, props, water, particles, nametags are culled), and the menu is only redrawn when it changes.

### Hosting without folder listings

Run `python3 tools/make-manifest.py` after adding weapons or characters. It writes `weapons/manifest.json` and `char/manifest.json`, which the game reads on hosts like Netlify or Vercel.
