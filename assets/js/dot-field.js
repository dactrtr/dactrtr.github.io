// Reactive dot field — background + cursor glow.
// Ported from portfolioDemo/portfolio.js. Vanilla JS, single <canvas>, no deps.
// Colors come from CSS custom properties (--dot-*); density/speed from data-atmosphere.
(function () {
  const cv = document.getElementById('field');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let w, h, dpr, cols, rows, mx = -999, my = -999;
  const PRESETS = {
    calm:  { gap: 46, R: 120, size: 0.5,  glow: 0.5,  wave: 0.006 },
    live:  { gap: 34, R: 150, size: 0.7,  glow: 0.7,  wave: 0.012 },
    hyper: { gap: 24, R: 230, size: 0.95, glow: 0.95, wave: 0.02 }
  };
  function read() {
    const cs = getComputedStyle(document.documentElement);
    const v = k => (cs.getPropertyValue(k).trim().replace(/["']/g, '') || '138,130,144');
    const a = document.documentElement.dataset.atmosphere || 'live';
    const base = PRESETS[a] || PRESETS.live;
    return { ...base, base: v('--dot-base'), near: v('--dot-near'), mid: v('--dot-mid'), far: v('--dot-far') };
  }
  let P = read();
  function recalc() { cols = Math.ceil(innerWidth / P.gap) + 1; rows = Math.ceil(innerHeight / P.gap) + 1; }
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
    recalc();
  }
  resize(); addEventListener('resize', resize);
  addEventListener('pf-change', () => { P = read(); recalc(); });
  addEventListener('pointermove', e => { mx = e.clientX * dpr; my = e.clientY * dpr; });
  addEventListener('pointerleave', () => { mx = -999; my = -999; });
  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    t += P.wave;
    const R = P.R * dpr, gap = P.gap * dpr;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap, y = j * gap;
        const dx = x - mx, dy = y - my, d = Math.hypot(dx, dy);
        const wave = Math.sin(i * 0.4 + j * 0.4 + t) * 0.5 + 0.5;
        let r = P.size * dpr + wave * P.size * dpr;
        let a = 0.12 + wave * 0.10;
        let col = P.base;
        if (d < R) {
          const f = 1 - d / R;
          r += f * 2.6 * dpr * (P.size / 0.7); a = 0.12 + f * P.glow;
          col = f > 0.55 ? P.near : f > 0.3 ? P.mid : P.far;
        }
        ctx.beginPath(); ctx.arc(x, y, r, 0, 6.28);
        ctx.fillStyle = `rgba(${col},${a})`; ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
