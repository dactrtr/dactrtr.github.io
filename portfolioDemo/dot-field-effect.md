# Reactive dot-field + cursor glow

A full-viewport canvas that paints a grid of dots. The dots breathe with a sine
wave; near the cursor they grow and light up in theme colors. There's also an
optional CRT "scanlines" overlay. Everything is theme-driven through CSS custom
properties, so it adapts to light/dark palettes without touching the JS.

It's vanilla JS + one `<canvas>`. No dependencies. Drop it into any page (Jekyll
included).

---

## 1. Markup

Add these two elements once, near the top of `<body>`. They're fixed and sit
behind your content (`z-index` below everything).

```html
<canvas id="field" aria-hidden="true"></canvas>
<div class="scanlines" aria-hidden="true"></div>
```

Make sure your real page content sits in a wrapper with a higher `z-index`
(e.g. `position: relative; z-index: 2`).

---

## 2. CSS

```css
/* ---- color + motion tokens (override per theme) ---- */
:root{
  /* dot colors as "R,G,B" strings — fed into rgba() in JS */
  --dot-base: "138,130,144";  /* ambient dots, far from cursor */
  --dot-near: "6,210,255";    /* closest to cursor (brightest) */
  --dot-mid:  "139,123,232";  /* mid ring */
  --dot-far:  "249,91,167";   /* outer ring */
}

/* Example: a light theme just re-declares the tokens */
html[data-theme="paper"]{
  --dot-base: "120,112,126";
  --dot-near: "10,134,172";
  --dot-mid:  "106,79,208";
  --dot-far:  "216,65,126";
}

/* ---- the canvas ---- */
#field{
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;   /* never blocks clicks */
  opacity: .6;
}

/* ---- optional CRT scanlines ---- */
.scanlines{
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,.018) 0 1px,
    transparent 1px 3px
  );
  mix-blend-mode: overlay;
}

/* turn scanlines off for a light theme if they look muddy */
html[data-theme="paper"] .scanlines{ display: none; }
html[data-theme="paper"] #field{ opacity: .9; }
```

### "Atmosphere" intensity (optional)
The JS reads `data-atmosphere` off `<html>` to pick a density/speed preset.
Set it to `calm`, `live`, or `hyper`:

```html
<html data-atmosphere="live">
```

```css
html[data-atmosphere="calm"]  #field{ opacity: .42; }
html[data-atmosphere="hyper"] #field{ opacity: .85; }
html[data-atmosphere="calm"]  .scanlines{ display: none; }
```

---

## 3. JavaScript

Paste this once, after the canvas exists (end of `<body>` or in a deferred
script). It's a self-contained IIFE.

```js
(function(){
  const cv  = document.getElementById('field');
  const ctx = cv.getContext('2d');
  let w, h, dpr, cols, rows, mx = -999, my = -999;

  // density / size / glow / wave-speed per atmosphere
  const PRESETS = {
    calm:  { gap:46, R:120, size:0.5,  glow:0.5,  wave:0.006 },
    live:  { gap:34, R:150, size:0.7,  glow:0.7,  wave:0.012 },
    hyper: { gap:24, R:230, size:0.95, glow:0.95, wave:0.02  }
  };

  // read theme tokens + atmosphere from the DOM
  function read(){
    const cs = getComputedStyle(document.documentElement);
    const v  = k => (cs.getPropertyValue(k).trim().replace(/["']/g,'') || '138,130,144');
    const a  = document.documentElement.dataset.atmosphere || 'live';
    const base = PRESETS[a] || PRESETS.live;
    return { ...base,
      base: v('--dot-base'),
      near: v('--dot-near'),
      mid:  v('--dot-mid'),
      far:  v('--dot-far')
    };
  }
  let P = read();

  function recalc(){
    cols = Math.ceil(innerWidth  / P.gap) + 1;
    rows = Math.ceil(innerHeight / P.gap) + 1;
  }
  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width  = innerWidth  * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width  = innerWidth  + 'px';
    cv.style.height = innerHeight + 'px';
    recalc();
  }
  resize();
  addEventListener('resize', resize);

  // re-read tokens when the theme changes (fire 'pf-change' yourself after a swap)
  addEventListener('pf-change', () => { P = read(); recalc(); });

  // cursor tracking (coords scaled to the device-pixel canvas)
  addEventListener('pointermove',  e => { mx = e.clientX * dpr; my = e.clientY * dpr; });
  addEventListener('pointerleave', ()  => { mx = -999; my = -999; });

  let t = 0;
  function draw(){
    ctx.clearRect(0, 0, w, h);
    t += P.wave;
    const R   = P.R   * dpr;
    const gap = P.gap * dpr;

    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        const x = i * gap, y = j * gap;
        const dx = x - mx, dy = y - my;
        const d  = Math.hypot(dx, dy);

        // ambient breathing
        const wave = Math.sin(i * 0.4 + j * 0.4 + t) * 0.5 + 0.5;
        let r = P.size * dpr + wave * P.size * dpr;
        let a = 0.12 + wave * 0.10;
        let col = P.base;

        // within glow radius: grow + brighten + recolor by ring
        if(d < R){
          const f = 1 - d / R;
          r += f * 2.6 * dpr * (P.size / 0.7);
          a  = 0.12 + f * P.glow;
          col = f > 0.55 ? P.near : f > 0.3 ? P.mid : P.far;
        }

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.28);
        ctx.fillStyle = `rgba(${col},${a})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
```

---

## 4. How it works

- **Grid.** Dots are laid out every `gap` pixels. `cols`/`rows` are recomputed on
  resize so the field always fills the viewport.
- **Breathing.** `Math.sin(i*0.4 + j*0.4 + t)` gives each dot a phase offset, so
  the wave ripples diagonally across the grid. `wave` controls speed.
- **Cursor glow.** For each dot, `d` is the distance to the pointer. Inside radius
  `R`, the dot grows (`r`) and brightens (`a`) proportional to `f = 1 - d/R`. The
  ring it falls in (`near`/`mid`/`far`) picks its color, so the cursor leaves a
  layered color halo.
- **Hi-DPI.** Everything is multiplied by `dpr` (capped at 2) for crisp dots on
  retina without over-rendering.
- **Theme-aware.** Colors come from CSS variables, read once per theme change.
  Swap your palette in CSS, dispatch `pf-change`, and the field recolors live.

---

## 5. Integrating into the Jekyll blog

1. Put the markup in your layout (e.g. `_layouts/default.html`) right after
   `<body>`.
2. Add the CSS to your stylesheet (`_sass/...` or `style.scss`). Keep the
   `--dot-*` tokens next to your existing theme variables so they switch together.
3. Save the JS as `assets/js/dot-field.js` and include it before `</body>`:
   ```html
   <script src="{{ '/assets/js/dot-field.js' | relative_url }}" defer></script>
   ```
4. Ensure your content wrapper has `position: relative; z-index: 2` so it renders
   above the canvas.

### Tuning cheatsheet
| Want | Change |
|------|--------|
| Denser / sparser dots | `gap` (smaller = denser) |
| Bigger / smaller glow area | `R` |
| Faster / slower breathing | `wave` |
| Stronger highlight near cursor | `glow` |
| Overall dot size | `size` |
| Fainter whole effect | `#field { opacity }` |

### Performance notes
- Cost scales with dot count (`cols × rows`). On big 4K screens a small `gap`
  (e.g. 24) can get heavy — bump `gap` up if you see frame drops.
- The loop runs continuously via `requestAnimationFrame`. To pause when the tab
  is hidden, gate `draw()` on `document.visibilityState === 'visible'`.
- Respect reduced motion by skipping the breathing term:
  ```js
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // ...then use `wave = reduce ? 0.5 : Math.sin(...)*0.5+0.5;`
  ```
