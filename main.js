/* ═══════════════════════════════════════════════════════════════
   main.js  —  ALL SITE LOGIC
   (game data lives in js/games.js — edit that file, not this one)
   ═══════════════════════════════════════════════════════════════ */

/* ── CUSTOM CURSOR ────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
document.addEventListener('mousemove', e => {
  cursor.style.top  = (e.clientY - 8) + 'px';
  cursor.style.left = (e.clientX - 8) + 'px';
  setTimeout(() => {
    trail.style.top  = (e.clientY - 4) + 'px';
    trail.style.left = (e.clientX - 4) + 'px';
  }, 80);
});

/* ── FLOATING PIXEL BACKGROUND (hero) ────────────────────────── */
const PIXEL_COLORS = ['#ffe566','#ff6bb5','#5ef0f0','#6ef98e','#b97cff','#ff9b42'];
const PIXEL_SHAPES = ['▪','■','▲','◆','●','★'];
const heroBg = document.getElementById('pixelBg');

for (let i = 0; i < 30; i++) {
  const el = document.createElement('div');
  el.className   = 'floating-pixel';
  el.textContent = PIXEL_SHAPES[Math.floor(Math.random() * PIXEL_SHAPES.length)];
  el.style.left             = Math.random() * 100 + '%';
  el.style.fontSize         = (8 + Math.random() * 20) + 'px';
  el.style.color            = PIXEL_COLORS[Math.floor(Math.random() * PIXEL_COLORS.length)];
  el.style.animationDuration = (8 + Math.random() * 18) + 's';
  el.style.animationDelay   = (-Math.random() * 20) + 's';
  heroBg.appendChild(el);
}

/* ── SCROLL REVEAL ────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── BUILD PROJECT CARDS FROM games.js DATA ───────────────────── */
function buildProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  GAME_KEYS.forEach((key, i) => {
    const g = games[key];
    const delays = [0, 0.1, 0.2, 0.3, 0.15, 0.25];
    const delay  = delays[i] || 0;

    const card = document.createElement('div');
    card.className   = 'project-card reveal';
    card.dataset.game = key;
    card.style.transitionDelay = delay + 's';

    card.innerHTML = `
      <div class="project-thumb" style="background:${g.cardBg}">
        ${g.cardEmoji}
        <div class="card-hover-hint">▶ VIEW PROJECT</div>
      </div>
      <div class="project-body">
        <span class="project-tag" style="color:${g.cardColor};border-color:${g.cardColor}">${g.cardTag}</span>
        <h3 style="color:var(--white)">${g.title}</h3>
        <p>${g.cardDesc}</p>
        <span class="view-details-btn" style="color:${g.cardColor};border-color:${g.cardColor}">▶ VIEW DETAILS</span>
      </div>
    `;

    card.addEventListener('click', () => openGame(key));
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

/* ── GAME DETAIL OVERLAY ──────────────────────────────────────── */
const overlay  = document.getElementById('game-overlay');
const panel    = document.getElementById('overlay-panel');
const content  = document.getElementById('overlay-content');
const obTitle  = document.getElementById('ob-title');

function buildDetailPage(key) {
  const g   = games[key];
  const idx = GAME_KEYS.indexOf(key);
  const prevKey = idx > 0                    ? GAME_KEYS[idx - 1] : null;
  const nextKey = idx < GAME_KEYS.length - 1 ? GAME_KEYS[idx + 1] : null;

  const shotsHTML = g.screenshots
    .map(s => `<div class="screenshot" style="background:${s.bg}">${s.e}</div>`)
    .join('');

  const techHTML = g.tech
    .map(t => `<span class="tech-chip">${t}</span>`)
    .join('');

  const featsHTML = g.features
    .map(f => `<li>${f}</li>`)
    .join('');

  const linksHTML = g.links
    .map(l => `<a href="${l.href}" class="game-link-btn" style="color:${l.color};border-color:${l.color};box-shadow:3px 3px 0 ${l.color}44">${l.label}</a>`)
    .join('');

  return `
    <div class="game-banner" style="background:${g.bannerBg}">${g.banner}</div>
    <div class="game-content">

      <div class="game-tag-row">
        <span class="game-tag" style="color:${g.tagColor};border-color:${g.tagColor}">${g.tag}</span>
        <span class="game-year-badge">${g.year}</span>
      </div>
      <div class="game-title" style="color:${g.accent}">${g.title}</div>
      <div class="game-subtitle">${g.subtitle}</div>

      <div class="game-meta">
        <div class="game-meta-item">
          <span class="gmi-label">ENGINE</span>
          <span class="gmi-val" style="color:${g.accent}">${g.engine}</span>
        </div>
        <div class="game-meta-item">
          <span class="gmi-label">DURATION</span>
          <span class="gmi-val" style="color:${g.accent}">${g.duration}</span>
        </div>
        <div class="game-meta-item">
          <span class="gmi-label">TEAM</span>
          <span class="gmi-val" style="color:${g.accent}">${g.team}</span>
        </div>
        <div class="game-meta-item">
          <span class="gmi-label">YEAR</span>
          <span class="gmi-val" style="color:${g.accent}">${g.year}</span>
        </div>
      </div>

      <div class="game-section">
        <div class="game-section-title" style="color:${g.accent}">// OVERVIEW</div>
        <p>${g.overview}</p>
        <p>${g.descExtra}</p>
      </div>

      <div class="screenshots">${shotsHTML}</div>

      <div class="game-section">
        <div class="game-section-title" style="color:${g.accent}">// KEY FEATURES</div>
        <ul>${featsHTML}</ul>
      </div>

      <div class="game-section">
        <div class="game-section-title" style="color:${g.accent}">// DESIGN NOTES</div>
        <p>${g.designNotes}</p>
      </div>

      <div class="game-section">
        <div class="game-section-title" style="color:${g.accent}">// TECH STACK</div>
        <div class="tech-list">${techHTML}</div>
      </div>

      <div class="game-ctas">${linksHTML}</div>

      <div class="game-nav">
        <button class="game-nav-btn" onclick="openGame('${prevKey}')" ${!prevKey ? 'disabled' : ''}>← PREV PROJECT</button>
        <button class="game-nav-btn" onclick="openGame('${nextKey}')" ${!nextKey ? 'disabled' : ''}>NEXT PROJECT →</button>
      </div>

    </div>
  `;
}

function openGame(key) {
  if (!key || !games[key]) return;
  obTitle.textContent = games[key].title;
  content.innerHTML   = buildDetailPage(key);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  panel.scrollTop = 0;
}

function closeGame() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close triggers */
document.getElementById('close-btn').addEventListener('click', closeGame);
document.getElementById('overlay-backdrop').addEventListener('click', closeGame);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGame(); });

/* Expose openGame globally so inline onclick in nav buttons works */
window.openGame = openGame;

/* ── INIT ─────────────────────────────────────────────────────── */
buildProjectCards();
