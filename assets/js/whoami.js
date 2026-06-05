// Terminal "whoami" boot sequence — ported from portfolioDemo/portfolio.js.
// Types into #termbody inside the landing header. No dependencies.
(function () {
  const body = document.getElementById('termbody');
  if (!body || body.dataset.booted) return;
  body.dataset.booted = '1';

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const line = (html = '', cls = '') => {
    const d = document.createElement('div');
    d.className = 'ln ' + cls;
    d.innerHTML = html;
    body.appendChild(d);
    return d;
  };
  const promptStr =
    '<span class="prompt"><span class="u">dactrtr</span><span class="at">@</span>' +
    '<span class="h">tokyo</span><span class="at">:</span><span class="p">~</span>' +
    '<span class="at">$</span></span> ';

  const sleep = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms * (window.__bootSpeed || 1)));
  async function typeInto(el, text, speed = 26) {
    for (let i = 0; i < text.length; i++) { el.innerHTML += text[i]; await sleep(speed); }
  }
  async function typeText(el, text, speed = 26) {
    for (let i = 0; i < text.length; i++) { el.textContent += text[i]; await sleep(speed); }
  }

  async function run() {
    const l1 = line(promptStr); await sleep(240);
    await typeInto(l1, 'whoami', 28); await sleep(130);
    line('<span class="big handle-xl">DACTRTR</span>');
    line('<span class="term-mind"><ruby>さば<rt>さばの魚</rt></ruby>と申します</span>');
    line('<span class="big name-xl">Sebastian Zúñiga</span>');
    line('<span class="muted">based in Tokyo</span> <img class="term-where" src="/assets/where.png" alt="Tokyo" />');
    await sleep(150);

    // roles
    const l2 = line(promptStr); await sleep(90);
    await typeInto(l2, 'cat roles.txt', 22); await sleep(110);
    const r = line('<span class="role-xl"></span>').firstChild;
    await typeText(r, '> ', 16);
    const segs = [
      { t: 'UI/UX Designer', c: 'pk' }, { t: ' · ' },
      { t: 'Frontend', c: 'pu' }, { t: ' · ' },
      { t: 'Indie Game Developer', c: 'cy' },
      { t: '  (' }, { t: 'HTML/CSS/SwiftUI/Lua', hl: true }, { t: ')' }
    ];
    for (const s of segs) {
      const span = document.createElement('span');
      if (s.c) span.className = s.c; else if (s.hl) span.className = 'hl';
      r.appendChild(span);
      await typeText(span, s.t, 14);
    }
    await sleep(130);

    // one-liner
    const l3 = line(promptStr); await sleep(80);
    await typeInto(l3, 'cat what.txt', 22); await sleep(110);
    const r2 = line('<span class="role-xl"></span>').firstChild;
    await typeText(r2, '> ', 14);
    const e1 = document.createElement('span'); r2.appendChild(e1); await typeText(e1, 'I design , then I ', 14);
    const e2 = document.createElement('span'); e2.className = 'hl'; r2.appendChild(e2); await typeText(e2, 'code it', 14);
    const e3 = document.createElement('span'); r2.appendChild(e3); await typeText(e3, '.', 14);
    await sleep(140);

    // chips
    const c = line('<div class="chips"></div>').firstChild;
    const chips = ['10 yrs', 'Design ↔ Engineering', 'Playdate · Unity', '日本語', '● open to work'];
    for (const t of chips) {
      const s = document.createElement('span'); s.className = 'chip'; s.innerHTML = t; c.appendChild(s); await sleep(60);
    }
    await sleep(90);

    // commands → real destinations on the blog
    const lr = line(promptStr); await sleep(90);
    await typeInto(lr, 'ls --help', 20);
    const runEl = line('<div class="run"></div>').firstChild;
    const cmds = [['cat ', 'about', '#about'], ['open ', 'blog', '/blog/']];
    for (const [pre, word, href] of cmds) {
      const a = document.createElement('a');
      a.className = 'cmd'; a.href = href;
      a.innerHTML = `<span class="pre">${pre}</span>${word}`;
      runEl.appendChild(a); await sleep(55);
    }
    line(promptStr).innerHTML += '<span class="cursor"></span>';
  }
  run();
})();
