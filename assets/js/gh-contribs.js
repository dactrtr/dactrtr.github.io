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
