// <gh-contribs src="/assets/gh-contribs.json"> Web Component
// Renders a GitHub contribution heatmap from a pre-generated JSON file.
class GhContribs extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src') || '/assets/gh-contribs.json';
    try {
      const data = await fetch(src).then(r => r.json());
      this._render(data);
    } catch {
      this.innerHTML = '';
    }
  }

  _render({ weeks, generated }) {
    const cells = weeks.map(week =>
      week.map(level =>
        level === -1
          ? '<i class="gh-day gh-day--pad"></i>'
          : `<i class="gh-day" data-level="${level}"></i>`
      ).join('')
    ).join('');

    const date = generated
      ? `<span class="gh-meta">generated ${generated}</span>`
      : '';

    this.innerHTML = `<div class="gh-grid">${cells}</div>${date}`;
  }
}

customElements.define('gh-contribs', GhContribs);

// Holo effect — tracks mouse over .gh-cal-wrap and updates CSS vars for
// the rainbow shine + glare + 3D tilt.
(function () {
  const MAX_TILT = 12; // degrees

  function attachHolo(card) {
    function onMove(e) {
      const rect = card.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width;
      const y    = (e.clientY - rect.top)  / rect.height;

      const rx = (x - 0.5) * MAX_TILT * 2;
      const ry = -(y - 0.5) * MAX_TILT * 2;

      // constrain to 37–63% so the background-position never reaches the tile edge
      const bx = 37 + x * 26;
      const by = 37 + y * 26;

      card.style.setProperty('--gh-px', `${x * 100}%`);
      card.style.setProperty('--gh-py', `${y * 100}%`);
      card.style.setProperty('--gh-bx', `${bx}%`);
      card.style.setProperty('--gh-by', `${by}%`);
      card.style.setProperty('--gh-rx', `${rx}deg`);
      card.style.setProperty('--gh-ry', `${ry}deg`);
      card.style.setProperty('--gh-opacity', '0.65');
    }

    function onLeave() {
      card.style.setProperty('--gh-rx',      '0deg');
      card.style.setProperty('--gh-ry',      '0deg');
      card.style.setProperty('--gh-opacity', '0');
    }

    card.addEventListener('mousemove',  onMove);
    card.addEventListener('mouseleave', onLeave);
  }

  function init() {
    document.querySelectorAll('.gh-cal-wrap').forEach(attachHolo);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
