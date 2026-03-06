/* ═══════════════════════════════════════════════════════════════
   games.js  —  ALL PROJECT DATA LIVES HERE
   ---------------------------------------------------------------
   To add a new game:
     1. Add its key to GAME_KEYS (controls order in prev/next nav)
     2. Copy an existing block below and fill in your details
   To edit a game: just find it by name and change the values
   ═══════════════════════════════════════════════════════════════ */

/* Order controls the ← prev / next → navigation in the detail panel */
const GAME_KEYS = [
  'tidewalker',
  'dreammerchant',
  'sporerunner',
  'rootbound',
  'emberknight',
  'clockworkcove',
];

const games = {

  /* ── TIDEWALKER ──────────────────────────────────────────── */
  tidewalker: {
    /* Card (shown on the portfolio grid) */
    cardTag:   'PLATFORMER',
    cardColor: 'var(--cyan)',
    cardEmoji: '🌊',
    cardBg:    'linear-gradient(135deg,#1a3a4f,#0d2030)',
    cardDesc:  'A fluid-based puzzle platformer where the tide rises with your heart rate. Custom water physics in Unity.',

    /* Detail page */
    title:    'TIDEWALKER',
    subtitle: 'What if the ocean could feel your heartbeat?',
    tag:      'PLATFORMER',
    tagColor: 'var(--cyan)',
    accent:   'var(--cyan)',
    year:     '2024',
    duration: '6 MONTHS',
    team:     'SOLO',
    engine:   'UNITY',
    banner:   '🌊',
    bannerBg: 'linear-gradient(135deg,#0d2030,#1a3a4f,#0a3040)',

    overview: `Tidewalker is a fluid-based puzzle platformer built around a single core idea: the tide rises and falls in response to the player's real-time stress. Using device sensors (or keyboard simulation), the ambient water level shifts — calm players wade through tranquil shallows, anxious players race against rising floods.`,
    descExtra: `The game was born from a university brief on biometric game design. I wanted to explore how environmental hazards could mirror internal states, making the world a direct reflection of the player's emotional condition rather than a passive backdrop.`,

    features: [
      'Real-time water physics with custom buoyancy simulation in Unity DOTS',
      '15 handcrafted levels across 3 biomes — tidal caves, sunken ruins, coral towers',
      'Dynamic ambient soundtrack that evolves with water depth',
      'Accessibility mode replacing biometric input with a manual tide slider',
      'Full speedrun mode with ghost replay system',
    ],

    designNotes: `The biggest challenge was making the mechanic feel fair rather than punishing. I ran 11 playtests and iterated on the "panic ceiling" — how fast the water can rise — 8 times before players stopped feeling frustrated and started feeling excited.`,

    /* Placeholder screenshots — swap emoji+bg for real <img> tags later */
    screenshots: [
      { e:'🌊', bg:'linear-gradient(135deg,#0a2535,#1a4055)' },
      { e:'🪸', bg:'linear-gradient(135deg,#0d3535,#1a5050)' },
      { e:'💧', bg:'linear-gradient(135deg,#101828,#1a2840)' },
    ],

    tech: ['Unity 2022 LTS', 'C#', 'Unity DOTS', 'FMOD', 'Aseprite', 'Custom Water Shader'],

    /* href: replace '#' with real URLs */
    links: [
      { label:'▶ PLAY ON ITCH.IO', color:'var(--cyan)',  href:'#' },
      { label:'GITHUB',            color:'var(--gray)', href:'#' },
      { label:'GDD PDF',           color:'var(--gray)', href:'#' },
    ],
  },

  /* ── DREAM MERCHANT ──────────────────────────────────────── */
  dreammerchant: {
    cardTag:   'NARRATIVE RPG',
    cardColor: 'var(--purple)',
    cardEmoji: '🌙',
    cardBg:    'linear-gradient(135deg,#3a1a4a,#1e0d2e)',
    cardDesc:  'A top-down RPG about a shopkeeper who sells memories. Branching dialogue, original pixel art tileset.',

    title:    'DREAM MERCHANT',
    subtitle: 'Every memory has a price. What will you sell?',
    tag:      'NARRATIVE RPG',
    tagColor: 'var(--purple)',
    accent:   'var(--purple)',
    year:     '2024',
    duration: '8 MONTHS',
    team:     '3 PEOPLE',
    engine:   'GODOT 4',
    banner:   '🌙',
    bannerBg: 'linear-gradient(135deg,#1e0d2e,#3a1a4a,#180920)',

    overview: `Dream Merchant is a top-down narrative RPG where you play as a shopkeeper who trades in memories. Customers arrive with experiences they want to forget; your job is to appraise, purchase, and sometimes relive those memories through short vignette levels.`,
    descExtra: `The project grew from a design challenge: what if the economy of a game was built entirely on intangible things? Instead of gold coins, you collect grief, nostalgia, and joy. The moral weight of each transaction is the game's main source of tension.`,

    features: [
      'Branching dialogue system with 200+ nodes and 6 possible endings',
      'Memory vignettes — short playable flashbacks that contextualise each item',
      'Reputation system that changes which customers trust you',
      'Original 32×32 pixel art tileset (600+ tiles) drawn entirely in Aseprite',
      "Dynamic shop music that layers based on which memories you've collected",
    ],

    designNotes: `Writing the dialogue was the most intensive part. I mapped every conversation in Twine first, then ported to Godot's custom dialogue manager. The six endings emerged naturally once the reputation system was in — I hadn't planned most of them originally.`,

    screenshots: [
      { e:'🌙', bg:'linear-gradient(135deg,#1e0d2e,#2e1a3e)' },
      { e:'🏪', bg:'linear-gradient(135deg,#180920,#251240)' },
      { e:'✨', bg:'linear-gradient(135deg,#0d0818,#1a1030)' },
    ],

    tech: ['Godot 4', 'GDScript', 'Twine (prototyping)', 'Aseprite', 'LMMS', 'Custom Dialogue Engine'],

    links: [
      { label:'▶ PLAY ON ITCH.IO', color:'var(--purple)', href:'#' },
      { label:'DEVLOG',            color:'var(--gray)',   href:'#' },
    ],
  },

  /* ── SPORE RUNNER ────────────────────────────────────────── */
  sporerunner: {
    cardTag:   'JAM GAME',
    cardColor: 'var(--orange)',
    cardEmoji: '🍄',
    cardBg:    'linear-gradient(135deg,#3a2a0a,#1e1400)',
    cardDesc:  '48-hour jam entry. Procedurally generated mushroom forest runner. Won Best Aesthetics at Ludum Dare.',

    title:    'SPORE RUNNER',
    subtitle: 'The forest grows faster than you can run.',
    tag:      'JAM GAME',
    tagColor: 'var(--orange)',
    accent:   'var(--orange)',
    year:     '2023',
    duration: '48 HOURS',
    team:     '2 PEOPLE',
    engine:   'GODOT 3',
    banner:   '🍄',
    bannerBg: 'linear-gradient(135deg,#1e1400,#3a2a0a,#2a1c06)',

    overview: `Spore Runner was built in 48 hours for Ludum Dare 54 (theme: "Limited Space"). You play as a spore drifting through a procedurally generated mycelial forest, collecting mushrooms before the canopy closes in. The faster you move, the more spores you spread — and the denser the forest becomes.`,
    descExtra: `This was my first jam with a collaborator. I handled all design and level logic; my partner wrote the procedural generation algorithm. We shipped with 10 minutes to spare and somehow won Best Aesthetics.`,

    features: [
      'Procedurally generated forest using a custom L-system variant',
      'Score multiplier chain mechanic that rewards risky routes',
      'Reactive soundscape — instruments layer as more mushrooms are collected',
      'Controller support added in post-jam update',
      '3 difficulty seeds with curated random parameters',
    ],

    designNotes: `The "limited space" constraint forced the design — the shrinking forest was an obvious mechanic but executing the feel took most of our time. We tuned the canopy close speed for 6 hours straight. The final number is 0.4 units/sec and I will never forget it.`,

    screenshots: [
      { e:'🍄', bg:'linear-gradient(135deg,#2a1800,#3a2200)' },
      { e:'🌲', bg:'linear-gradient(135deg,#1a2200,#283000)' },
      { e:'✨', bg:'linear-gradient(135deg,#1e1400,#2a1c08)' },
    ],

    tech: ['Godot 3', 'GDScript', 'L-System Proc-Gen', 'Aseprite', 'BFXR (SFX)'],

    links: [
      { label:'▶ PLAY ON ITCH.IO',  color:'var(--orange)', href:'#' },
      { label:'LUDUM DARE PAGE',    color:'var(--gray)',   href:'#' },
    ],
  },

  /* ── ROOTBOUND ───────────────────────────────────────────── */
  rootbound: {
    cardTag:   'PUZZLE',
    cardColor: 'var(--green)',
    cardEmoji: '🌿',
    cardBg:    'linear-gradient(135deg,#1a3a1a,#0d200d)',
    cardDesc:  'A cozy gardening puzzle about untangling roots to let light through. Original music from real plant recordings.',

    title:    'ROOTBOUND',
    subtitle: 'Cozy puzzles. Tangled roots. Perfect silence.',
    tag:      'PUZZLE',
    tagColor: 'var(--green)',
    accent:   'var(--green)',
    year:     '2023',
    duration: '4 MONTHS',
    team:     'SOLO',
    engine:   'GDEVELOP 5',
    banner:   '🌿',
    bannerBg: 'linear-gradient(135deg,#0d200d,#1a3a1a,#0a1a0a)',

    overview: `Rootbound is a cozy gardening puzzle game about untangling roots to guide sunlight to sleeping seeds. Each puzzle is a knot of vines — rotate, flip, and redirect them to draw a path of light from the sun to the soil.`,
    descExtra: `I built Rootbound as a palette cleanser between bigger projects. The goal was "one mechanic, done beautifully." No combat, no narrative pressure — just plants and patience. I also wrote all the original music using only samples recorded from my own houseplants (yes, really).`,

    features: [
      '40 handcrafted puzzle levels across 4 garden biomes',
      'Hint system that illuminates one valid root segment without solving the puzzle',
      'Original soundtrack recorded from real plant sounds and garden ambience',
      'Colour-blind accessibility mode with distinct shapes per root type',
      'Daily puzzle mode with cloud sync for returning players',
    ],

    designNotes: `The hardest part of puzzle design is calibrating difficulty without a slider. I playtested each level with 5 different people and timed them. Any level causing over 8 minutes of confusion was redesigned or moved later in the sequence.`,

    screenshots: [
      { e:'🌿', bg:'linear-gradient(135deg,#0d200d,#183018)' },
      { e:'🌱', bg:'linear-gradient(135deg,#0a1a0a,#152015)' },
      { e:'☀️', bg:'linear-gradient(135deg,#1a2a0a,#253510)' },
    ],

    tech: ['GDevelop 5', 'JavaScript', 'Aseprite', 'Audacity', 'Original Field Recordings'],

    links: [
      { label:'▶ PLAY ON ITCH.IO', color:'var(--green)', href:'#' },
      { label:'DEVLOG',            color:'var(--gray)',  href:'#' },
    ],
  },

  /* ── EMBER KNIGHT ────────────────────────────────────────── */
  emberknight: {
    cardTag:   'ACTION',
    cardColor: 'var(--pink)',
    cardEmoji: '🔥',
    cardBg:    'linear-gradient(135deg,#3a1a1a,#200d0d)',
    cardDesc:  'A roguelite dungeon crawler with elemental combo mechanics. 60+ hand-crafted rooms. Built in Unity.',

    title:    'EMBER KNIGHT',
    subtitle: 'Every run. Every element. Every death, a lesson.',
    tag:      'ACTION ROGUELITE',
    tagColor: 'var(--pink)',
    accent:   'var(--pink)',
    year:     '2024',
    duration: '5 MONTHS',
    team:     'SOLO',
    engine:   'UNITY',
    banner:   '🔥',
    bannerBg: 'linear-gradient(135deg,#200d0d,#3a1a1a,#280a0a)',

    overview: `Ember Knight is a roguelite dungeon crawler where elemental combinations are the core combat language. Fire + Water = Steam. Ice + Lightning = Superconductor. Earth + Fire = Magma. Learning to chain elements across enemy types is the central skill curve.`,
    descExtra: `I wanted to make a roguelite where death feels educational rather than punishing. Every run teaches you one new element interaction. The meta-progression is less about power and more about understanding — you unlock new knowledge, not just stats.`,

    features: [
      '12 element types with 28 unique interaction combos',
      '60+ hand-crafted rooms assembled procedurally into dungeon layouts',
      '8 boss encounters with adaptive phase transitions',
      'Codex system that tracks discovered element combos with lore explanations',
      'Run history visualiser showing route, deaths, and combo usage',
    ],

    designNotes: `Balancing 28 interactions is genuinely hard. I built a spreadsheet model of enemy health vs combo damage before writing a single line of combat code. The model was wrong in 12 places and I'm glad I found that out in a spreadsheet rather than Unity.`,

    screenshots: [
      { e:'🔥', bg:'linear-gradient(135deg,#200d0d,#301010)' },
      { e:'⚡', bg:'linear-gradient(135deg,#1a1a00,#2a2800)' },
      { e:'❄️', bg:'linear-gradient(135deg,#0d1520,#151e2a)' },
    ],

    tech: ['Unity 2022 LTS', 'C#', 'Aseprite', 'FMOD', 'Scriptable Object Architecture'],

    links: [
      { label:'▶ PLAY ON ITCH.IO', color:'var(--pink)', href:'#' },
      { label:'GITHUB',            color:'var(--gray)', href:'#' },
      { label:'GDD PDF',           color:'var(--gray)', href:'#' },
    ],
  },

  /* ── CLOCKWORK COVE ──────────────────────────────────────── */
  clockworkcove: {
    cardTag:   'PROTOTYPE',
    cardColor: 'var(--yellow)',
    cardEmoji: '⚙️',
    cardBg:    'linear-gradient(135deg,#2a2a1a,#18180a)',
    cardDesc:  'Steampunk exploration prototype. Environmental storytelling — every gear and mechanism tells the story.',

    title:    'CLOCKWORK COVE',
    subtitle: 'The gears stopped. You need to find out why.',
    tag:      'EXPLORATION PROTOTYPE',
    tagColor: 'var(--yellow)',
    accent:   'var(--yellow)',
    year:     '2024',
    duration: '3 MONTHS',
    team:     'SOLO',
    engine:   'UNITY',
    banner:   '⚙️',
    bannerBg: 'linear-gradient(135deg,#18180a,#2a2a1a,#201e0a)',

    overview: `Clockwork Cove is a steampunk exploration prototype about an abandoned clockwork harbour town where every gear, lever, and mechanism is a fragment of a story. There are no NPCs and no dialogue. The narrative is told entirely through the state of the machines.`,
    descExtra: `This was a personal research project into environmental storytelling. The question: how much narrative information can be encoded in the physical state of objects, without a single written word? The prototype has 4 areas and approximately 35 minutes of environmental story if you read everything.`,

    features: [
      'Fully interactive clockwork environment — every mechanism has a history',
      '35+ story fragments embedded in machine states, wear patterns, and debris',
      'Interconnected gear puzzles that double as narrative reveals',
      'Original steampunk pixel art aesthetic with animated machinery',
      'Full design document (GDD) with 42-page world-building bible',
    ],

    designNotes: `Environmental storytelling lives or dies on the player's willingness to read the world. I ran extensive playtesting on "attention hooks" — asymmetry, unexplained wear, and scale breaks (a tiny chair in a giant room) were consistently the most effective.`,

    screenshots: [
      { e:'⚙️', bg:'linear-gradient(135deg,#18180a,#25250e)' },
      { e:'🏭', bg:'linear-gradient(135deg,#151208,#201e0c)' },
      { e:'🔩', bg:'linear-gradient(135deg,#1a160a,#252010)' },
    ],

    tech: ['Unity 2022 LTS', 'C#', 'Aseprite', 'ProBuilder', 'Ink (Narrative Scripting)'],

    links: [
      { label:'▶ PLAY DEMO', color:'var(--yellow)', href:'#' },
      { label:'GDD PDF',     color:'var(--gray)',   href:'#' },
      { label:'DEVLOG',      color:'var(--gray)',   href:'#' },
    ],
  },

}; // end games
