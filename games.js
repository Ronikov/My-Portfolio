/* ═══════════════════════════════════════════════════════════════
   games.js  —  ALL PROJECT DATA LIVES HERE
   ---------------------------------------------------------------
   Images go in the  images/  folder next to index.html.
   Current image files:
     images/battleplanes.png   — Battle Planes screenshot
     images/aniwars.png        — AniWars logo
     images/coffeegame.png     — Coffee game pixel logo
     images/boxin.png          — Box In logo

   To add a new game:
     1. Add its key to GAME_KEYS (controls prev/next order)
     2. Copy any block below, fill in your details, add the key
   ═══════════════════════════════════════════════════════════════ */

const GAME_KEYS = [
  'battleplanes',
  'aniwars',
  'coffeegame',
  'boxin',
];

const games = {

  /* ── BATTLE PLANES ───────────────────────────────────────── */
  battleplanes: {
    /* Card shown on the portfolio grid */
    cardTag:   'ACTION',
    cardColor: 'var(--pink)',
    cardImage: 'images/battleplanes.png',  /* path relative to index.html */
    cardDesc:  'A 3D aerial combat game where players dogfight over lush island terrain. Built with custom flight physics.',

    /* Detail page */
    title:    'BATTLE PLANES',
    subtitle: 'Take to the skies. Take down your enemies.',
    tag:      'ACTION / FLIGHT',
    tagColor: 'var(--pink)',
    accent:   'var(--pink)',
    year:     '2024',
    duration: '4 MONTHS',
    team:     'SOLO',
    engine:   'UNITY',

    /* Banner image shown at the top of the detail panel */
    bannerImage: 'images/battleplanes.png',

    overview: `Battle Planes is a 3D aerial combat game set above a richly detailed island environment. Players pilot fighter planes in fast-paced dogfights, using custom flight physics to out-manoeuvre opponents across open skies and tight canyon runs.`,
    descExtra: `The project started as an experiment in making flight feel intuitive without a flight stick. Every control parameter — lift, drag, roll sensitivity — was iterated from real player feedback until the planes felt arcade-satisfying while retaining a sense of weight.`,

    features: [
      'Custom arcade flight physics with realistic lift and drag curves',
      'Dynamic island environment with dense forest, cliffs, and open ocean',
      'AI opponent with three difficulty levels using behaviour trees',
      'Boost and barrel-roll mechanics for close-quarters dogfighting',
      'Neon HUD overlaid on the 3D environment for a stylised feel',
    ],

    designNotes: `The biggest design challenge was the camera. Too close and the plane felt claustrophobic; too far and players lost spatial awareness. After 9 iterations I landed on a dynamic camera that pulls back during boosts and tightens during sharp turns.`,

    /* Screenshots shown in the detail panel — add more as needed */
    screenshots: [
      { image: 'images/battleplanes.png', alt: 'Battle Planes title screen' },
    ],

    tech: ['Unity 2022 LTS', 'C#', 'ProBuilder', 'Cinemachine', 'Unity VFX Graph'],

    links: [
      { label: '▶ PLAY DEMO',  color: 'var(--pink)', href: '#' },
      { label: 'GITHUB',       color: 'var(--gray)', href: '#' },
    ],
  },

  /* ── ANIWARS ─────────────────────────────────────────────── */
  aniwars: {
    cardTag:   'STRATEGY',
    cardColor: 'var(--cyan)',
    cardImage: 'images/aniwars.png',
    cardDesc:  'A creature-collection strategy game where players battle with animated warriors. Think Pokémon meets tactics.',

    title:    'ANIWARS',
    subtitle: 'Every creature is a weapon. Choose wisely.',
    tag:      'STRATEGY / CREATURE COLLECTOR',
    tagColor: 'var(--cyan)',
    accent:   'var(--cyan)',
    year:     '2024',
    duration: '5 MONTHS',
    team:     '2 PEOPLE',
    engine:   'GODOT 4',

    bannerImage: 'images/aniwars.png',

    overview: `AniWars is a creature-collection strategy game where players build a roster of animated warriors and pit them against opponents in turn-based tactical battles. Each creature has a unique ability set and elemental affinity that rewards thoughtful team composition.`,
    descExtra: `The name and logo came first — the pink oval framing felt playful and bold, immediately suggesting a game about personality as much as power. The design philosophy followed: every creature should feel distinct not just mechanically but visually and tonally.`,

    features: [
      '20 unique creatures each with 3 signature abilities',
      'Turn-based battle system with elemental type matchups',
      'Roster-building meta with strategic team composition',
      'Animated battle sprites with frame-by-frame attack sequences',
      'Story campaign with 8 rival trainers and a final tournament arc',
    ],

    designNotes: `Balancing 20 creatures is a combinatorial problem. I built a simulation that ran 10,000 random battles to surface outlier creatures — anything winning above 65% of matches got nerfed. Anything below 40% got a buff or a kit rework.`,

    screenshots: [
      { image: 'images/aniwars.png', alt: 'AniWars logo' },
    ],

    tech: ['Godot 4', 'GDScript', 'Aseprite', 'Google Sheets (balance sim)', 'LMMS'],

    links: [
      { label: '▶ PLAY ON ITCH.IO', color: 'var(--cyan)', href: '#' },
      { label: 'DEVLOG',            color: 'var(--gray)', href: '#' },
    ],
  },

  /* ── COFFEE GAME ─────────────────────────────────────────── */
  coffeegame: {
    cardTag:   'COZY / IDLE',
    cardColor: 'var(--orange)',
    cardImage: 'images/coffeegame.png',
    cardDesc:  'A cozy pixel-art café management game. Brew drinks, serve customers, and upgrade your little coffee shop.',

    title:    'CAFÉ PIXEL',
    subtitle: 'One cup at a time.',
    tag:      'COZY / MANAGEMENT',
    tagColor: 'var(--orange)',
    accent:   'var(--orange)',
    year:     '2023',
    duration: '3 MONTHS',
    team:     'SOLO',
    engine:   'GDEVELOP 5',

    bannerImage: 'images/coffeegame.png',

    overview: `Café Pixel is a cozy pixel-art café management game about running a tiny coffee shop. Players take orders, brew drinks with a mini timing mechanic, and spend earnings on shop upgrades — new equipment, decorations, and expanded menus.`,
    descExtra: `The pixel mug logo captures the game's whole vibe: retro, warm, unpretentious. I wanted a game you could play with one hand while actually drinking coffee. Every mechanic was tested against that brief — if it required full attention, it got simplified.`,

    features: [
      'Drink-brewing mini-game with satisfying timing feedback',
      '15 unlockable menu items across hot drinks, cold brews, and snacks',
      'Customer satisfaction system affecting tips and repeat visitors',
      'Shop decoration system with 40+ pixel art furniture pieces',
      'Day/night cycle with different customer types and rush hour events',
    ],

    designNotes: `The hardest thing about cozy games is pacing. Too slow and players disengage; too busy and the cozy feeling evaporates. I found the sweet spot by capping simultaneous customers at 3 and making every brew action feel deliberate and satisfying rather than frantic.`,

    screenshots: [
      { image: 'images/coffeegame.png', alt: 'Café Pixel logo' },
    ],

    tech: ['GDevelop 5', 'JavaScript', 'Aseprite', 'Audacity', 'Tiled Map Editor'],

    links: [
      { label: '▶ PLAY ON ITCH.IO', color: 'var(--orange)', href: '#' },
      { label: 'DEVLOG',            color: 'var(--gray)',   href: '#' },
    ],
  },

  /* ── BOX IN ──────────────────────────────────────────────── */
  boxin: {
    cardTag:   'PUZZLE',
    cardColor: 'var(--yellow)',
    cardImage: 'images/boxin.png',
    cardDesc:  'A minimalist cardboard-aesthetic puzzle game about fitting shapes into boxes. Simple rules, devious levels.',

    title:    'BOX IN',
    subtitle: 'Every shape has a place. Find it.',
    tag:      'PUZZLE',
    tagColor: 'var(--yellow)',
    accent:   'var(--yellow)',
    year:     '2023',
    duration: '6 WEEKS',
    team:     'SOLO',
    engine:   'GODOT 3',

    bannerImage: 'images/boxin.png',

    overview: `Box In is a minimalist puzzle game about fitting irregularly shaped pieces into increasingly complex boxes. The visual language is deliberately tactile — everything looks like it was stamped and scrawled on cardboard, making the puzzles feel physical and satisfying to solve.`,
    descExtra: `The logo — a coin-like stamp with "BOX IN" scratched into it — set the entire aesthetic direction. Rough, handmade, unpretentious. I leaned into that by avoiding any smooth animations or polished UI, keeping everything feeling like physical objects you're actually handling.`,

    features: [
      '30 puzzle levels scaling from approachable to fiendishly tricky',
      'Rotate and flip mechanics for each piece',
      'Cardboard-stamp visual style with hand-drawn textures',
      'No timer, no fail state — pure spatial reasoning at your own pace',
      'Unlockable challenge mode with fewer allowed moves per puzzle',
    ],

    designNotes: `I designed all 30 puzzles by hand on graph paper first, then digitised them. Levels 20–30 went through 3 full redesigns each — spatial puzzles are deceptively hard to calibrate. The rule I settled on: every puzzle should have exactly one "aha" moment.`,

    screenshots: [
      { image: 'images/boxin.png', alt: 'Box In logo' },
    ],

    tech: ['Godot 3', 'GDScript', 'Aseprite', 'Hand-drawn textures', 'BFXR (SFX)'],

    links: [
      { label: '▶ PLAY ON ITCH.IO', color: 'var(--yellow)', href: '#' },
      { label: 'GITHUB',            color: 'var(--gray)',   href: '#' },
    ],
  },

}; // end games
