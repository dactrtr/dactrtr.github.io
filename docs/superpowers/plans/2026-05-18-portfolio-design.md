# Portfolio Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Style the portfolio list page and individual project pages with a dark, brand-accented minimalist design.

**Architecture:** All portfolio CSS lives in a new `_sass/_portfolio.scss` partial, imported into `style.scss`. Minor HTML additions to `index.html` and `_layouts/portfolio-item.html` expose missing content (challenge text, screenshot in list, "view case study" link). No layout HTML changes to wrappers.

**Tech Stack:** Jekyll, SCSS (`_sass/` partials), existing variables from `_sass/_variables.scss` (`$blackestNight`, `$bonedThrone`, `$blinkyPinky`, `$cyanTyrant`, `$purpleBack`, `@include media-medium`).

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `_sass/_portfolio.scss` | **Create** | All portfolio CSS |
| `style.scss` | **Modify** | Add `@import "portfolio"`, remove empty placeholder classes at bottom |
| `index.html` | **Modify** | Add challenge + link to featured; add screenshot + restructure list items |
| `_layouts/portfolio-item.html` | **Modify** | Remove inline placeholder styles, restructure for grid layout |

---

## Task 1: Create `_sass/_portfolio.scss` and wire it up

**Files:**
- Create: `_sass/_portfolio.scss`
- Modify: `style.scss` lines 19-24 (imports block) and lines 393-419 (bottom cleanup)

- [ ] **Step 1: Create the partial with base body and container styles**

Create `_sass/_portfolio.scss`:

```scss
// Portfolio — Dark + Accent design
// Spec: docs/superpowers/specs/2026-05-18-portfolio-design.md

body.portfolio-landing,
body.portfolio-full {
  background: $blackestNight;
  color: $bonedThrone;
}

.portfolio-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 20px 64px;
  font-family: $helveticaNeue;
}

.portfolio-landing .main-header {
  width: 100%;
}

.portfolio-landing .float-window {
  flex-direction: row;
  width: auto;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;

  .controls { gap: 4px; }
  .links { flex-direction: row; gap: 16px; }
}
```

- [ ] **Step 2: Add the import to `style.scss` and remove the old placeholder classes**

In `style.scss`, add `@import "portfolio";` after line 23 (`@import "lang-tabs";`):

```scss
@import "reset";
@import "variables";
@import "fonts";
@import "theme";
@import "lang-tabs";
@import "portfolio";
```

Then delete lines 393–419 from `style.scss` (the empty `.portfolio-list { }` placeholders and the `.portfolio-landing .float-window` block — those now live in `_portfolio.scss`).

- [ ] **Step 3: Verify Jekyll builds without errors**

Run:
```bash
jekyll serve
```
Expected: server starts, no SCSS compile errors. Visit `http://127.0.0.1:4000/` — background should now be `#20171f` dark.

- [ ] **Step 4: Commit**

```bash
git add _sass/_portfolio.scss style.scss
git commit -m "feat: add _portfolio.scss partial and wire up base dark styles"
```

---

## Task 2: Featured project card

**Files:**
- Modify: `index.html` (add `featured-challenge` and `featured-link` inside `.featured-meta`)
- Modify: `_sass/_portfolio.scss` (add `.portfolio-featured` styles)

- [ ] **Step 1: Add challenge text and link to the featured HTML block**

In `index.html`, find the `<div class="featured-meta">` block and add two lines after `<p class="featured-role">`:

```html
  {% assign featured = site.portfolio | where: "featured", true | first %}
  {% if featured %}
  <div class="portfolio-featured">
    <a href="{{ featured.url }}">
      <div class="featured-screenshot">
        {% if featured.screenshot and featured.screenshot != "" %}
          <img src="{{ featured.screenshot }}" alt="{{ featured.title }}">
        {% else %}
          <div class="placeholder-screenshot"></div>
        {% endif %}
      </div>
      <div class="featured-meta">
        {% if featured.logo and featured.logo != "" %}
          <img src="{{ featured.logo }}" alt="{{ featured.title }} logo" class="featured-logo">
        {% else %}
          <div class="placeholder-logo"></div>
        {% endif %}
        <h2 class="featured-title">{{ featured.title }}</h2>
        <p class="featured-role">{{ featured.role }} &middot; {{ featured.place }} &middot; {{ featured.date | date: "%Y" }}</p>
        <p class="featured-challenge">{{ featured.challenge }}</p>
        <span class="featured-link">view case study &rarr;</span>
      </div>
    </a>
  </div>
  {% endif %}
```

(Remove the inline `style="..."` from the old placeholder divs — the CSS will handle sizing.)

- [ ] **Step 2: Add `.portfolio-featured` CSS to `_portfolio.scss`**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Featured card ────────────────────────────────────────────────────────────

.portfolio-featured {
  margin-bottom: 12px;

  > a {
    display: flex;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba($purpleBack, 0.35);
    text-decoration: none;
    min-height: 160px;

    @include media-medium {
      min-height: 220px;
    }
  }

  .featured-screenshot {
    flex: 1;
    min-width: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .placeholder-screenshot {
      width: 100%;
      height: 100%;
      min-height: 160px;
      background: rgba($cyanTyrant, 0.08);
    }
  }

  .featured-meta {
    width: 55%;
    flex-shrink: 0;
    background: rgba($blackestNight, 0.93);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    @include media-medium {
      padding: 28px;
      width: 50%;
    }

    &::before {
      content: "★ FEATURED";
      color: $blinkyPinky;
      font-size: 9px;
      letter-spacing: 2px;
      margin-bottom: 6px;
    }
  }

  .featured-logo,
  .placeholder-logo {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    margin-bottom: 8px;
  }

  .placeholder-logo {
    background: rgba($purpleBack, 0.4);
    display: block;
  }

  .featured-title {
    color: $bonedThrone;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 4px;

    @include media-medium {
      font-size: 20px;
    }
  }

  .featured-role {
    color: $cyanTyrant;
    font-size: 10px;
    margin: 0 0 8px;
  }

  .featured-challenge {
    color: rgba($bonedThrone, 0.5);
    font-size: 11px;
    line-height: 1.5;
    margin: 0 0 12px;
    display: none;

    @include media-medium {
      display: block;
    }
  }

  .featured-link {
    color: $blinkyPinky;
    font-size: 11px;
  }
}
```

- [ ] **Step 3: Verify in browser**

With `jekyll serve` running, open `http://127.0.0.1:4000/`.
Expected: dark card with image placeholder on left, dark panel on right, "★ FEATURED" label, title, role in cyan, arrow in pink.

- [ ] **Step 4: Commit**

```bash
git add index.html _sass/_portfolio.scss
git commit -m "feat: add featured project card with image-left panel-right layout"
```

---

## Task 3: Project list items

**Files:**
- Modify: `index.html` (restructure `.portfolio-list-item` to include screenshot)
- Modify: `_sass/_portfolio.scss` (add list item styles)

- [ ] **Step 1: Rewrite the list item HTML in `index.html`**

Replace the `{% for project in others %}` block:

```html
  {% assign others = site.portfolio | where: "featured", false %}
  {% if others.size > 0 %}
  <div class="portfolio-list">
    {% for project in others %}
    <article class="portfolio-list-item">
      <a href="{{ project.url }}">
        <div class="list-item-screenshot">
          {% if project.screenshot and project.screenshot != "" %}
            <img src="{{ project.screenshot }}" alt="{{ project.title }}">
          {% else %}
            <div class="placeholder-screenshot"></div>
          {% endif %}
        </div>
        <div class="list-item-panel">
          <span class="list-item-meta">{{ project.role }} &middot; {{ project.date | date: "%Y" }}</span>
          <h3 class="list-item-title">{{ project.title }}</h3>
          <span class="list-item-link">&rarr;</span>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
  {% endif %}
```

- [ ] **Step 2: Add list item CSS to `_portfolio.scss`**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Project list ─────────────────────────────────────────────────────────────

.portfolio-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

.portfolio-list-item {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba($purpleBack, 0.3);

  &:hover .list-item-panel {
    background: rgba($blackestNight, 0.82);
  }

  > a {
    display: flex;
    height: 110px;
    text-decoration: none;
  }

  .list-item-screenshot {
    width: 42%;
    flex-shrink: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .placeholder-screenshot {
      width: 100%;
      height: 100%;
      background: rgba($purpleBack, 0.15);
      border-radius: 0;
    }
  }

  .list-item-panel {
    flex: 1;
    background: rgba($blackestNight, 0.9);
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    transition: background 0.2s;
  }

  .list-item-meta {
    color: $cyanTyrant;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .list-item-title {
    color: $bonedThrone;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
  }

  .list-item-link {
    color: $blinkyPinky;
    font-size: 13px;
  }
}
```

- [ ] **Step 3: Add blog link styles while here**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Blog link ────────────────────────────────────────────────────────────────

.portfolio-blog-link {
  text-align: center;
  padding: 16px 0;
}

.btn-blog {
  color: rgba($bonedThrone, 0.4);
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  transition: color 0.2s;

  &:hover {
    color: $cyanTyrant;
  }
}
```

- [ ] **Step 4: Verify in browser**

Open `http://127.0.0.1:4000/`.
Expected: list of cards below featured, each with a placeholder on the left and dark panel on the right with title in white and metadata in cyan. Blog link visible at the bottom.

- [ ] **Step 5: Commit**

```bash
git add index.html _sass/_portfolio.scss
git commit -m "feat: add project list cards and blog link styles"
```

---

## Task 4: Individual project page — two-column grid

**Files:**
- Modify: `_layouts/portfolio-item.html` (remove inline styles, clean up placeholder styles)
- Modify: `_sass/_portfolio.scss` (add `.portfolio-full`, `.portfolio-item` grid)

- [ ] **Step 1: Clean up `portfolio-item.html`**

Remove all inline `style="..."` attributes from the placeholder divs. The file should look like this:

```html
---
layout: portfolio-full
---
<article class="portfolio-item">

  <header class="portfolio-item-header">
    <div class="portfolio-logo">
      {% if page.logo and page.logo != "" %}
        <img src="{{ page.logo }}" alt="{{ page.title }} logo">
      {% else %}
        <div class="placeholder-logo"></div>
      {% endif %}
    </div>
    <div class="portfolio-meta">
      <h1 class="portfolio-title">{{ page.title }}</h1>
      <p class="portfolio-role">{{ page.role }}</p>
      <p class="portfolio-place">{{ page.place }}</p>
      <p class="portfolio-date">{{ page.date | date: "%Y" }}</p>
    </div>
  </header>

  <div class="portfolio-screenshot">
    {% if page.screenshot and page.screenshot != "" %}
      <img src="{{ page.screenshot }}" alt="{{ page.title }} screenshot">
    {% else %}
      <div class="placeholder-screenshot"></div>
    {% endif %}
  </div>

  <section class="portfolio-challenge">
    <h2>Challenge</h2>
    <p>{{ page.challenge }}</p>
  </section>

  <section class="portfolio-learnings">
    <h2>Learnings</h2>
    <p>{{ page.learnings }}</p>
  </section>

  <div class="portfolio-content">
    {{ content }}
  </div>

</article>
```

- [ ] **Step 2: Add project page layout CSS to `_portfolio.scss`**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Individual project page ──────────────────────────────────────────────────

body.portfolio-full {
  .portfolio-back {
    display: inline-block;
    margin: 24px 0 0 32px;
    color: $blinkyPinky;
    text-decoration: none;
    font-size: 13px;

    &:hover { opacity: 0.7; }
  }

  .portfolio-full-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 20px 64px;

    @include media-medium {
      padding: 32px 32px 64px;
    }
  }
}

.portfolio-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @include media-medium {
    grid-template-columns: 200px 1fr;
    gap: 0 40px;

    .portfolio-item-header { grid-column: 1; grid-row: 1 / 6; }
    .portfolio-screenshot  { grid-column: 2; grid-row: 1; }
    .portfolio-challenge   { grid-column: 2; grid-row: 2; }
    .portfolio-learnings   { grid-column: 2; grid-row: 3; }
    .portfolio-content     { grid-column: 2; grid-row: 4; }
  }
}
```

- [ ] **Step 3: Verify in browser**

Navigate to a project, e.g. `http://127.0.0.1:4000/dinopirates-from-outer-space/` (or whichever slug Jekyll generates).
Expected: on desktop — sidebar on the left, content on the right. On mobile — stacked vertically.

- [ ] **Step 4: Commit**

```bash
git add _layouts/portfolio-item.html _sass/_portfolio.scss
git commit -m "feat: add two-column grid layout for individual project page"
```

---

## Task 5: Sidebar, sections, and content styles

**Files:**
- Modify: `_sass/_portfolio.scss` (sidebar, screenshot, challenge, learnings, content)

- [ ] **Step 1: Add sidebar styles**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Sidebar (portfolio-item-header) ─────────────────────────────────────────

.portfolio-item-header {
  padding-top: 4px;
  margin-bottom: 24px;

  @include media-medium {
    margin-bottom: 0;
  }

  .portfolio-logo {
    margin-bottom: 20px;

    img,
    .placeholder-logo {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      display: block;
    }

    .placeholder-logo {
      background: rgba($purpleBack, 0.4);
    }
  }

  .portfolio-meta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 16px;

    @include media-medium {
      flex-direction: column;
      gap: 4px;
    }
  }

  .portfolio-title {
    color: $bonedThrone;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    letter-spacing: 0;
    text-indent: 0;
    width: 100%;
  }

  .portfolio-role,
  .portfolio-place,
  .portfolio-date {
    color: rgba($bonedThrone, 0.4);
    font-size: 12px;
    margin: 0;
    font-weight: 400;
  }
}
```

- [ ] **Step 2: Add screenshot, challenge, learnings, and content styles**

Append to `_sass/_portfolio.scss`:

```scss
// ─── Project page sections ────────────────────────────────────────────────────

.portfolio-screenshot {
  margin-bottom: 28px;

  img {
    width: 100%;
    border-radius: 4px;
    display: block;
  }

  .placeholder-screenshot {
    width: 100%;
    height: 200px;
    background: rgba($cyanTyrant, 0.07);
    border-radius: 4px;

    @include media-medium {
      height: 280px;
    }
  }
}

.portfolio-challenge {
  border-left: 2px solid $blinkyPinky;
  padding-left: 16px;
  margin-bottom: 24px;

  h2 {
    color: $blinkyPinky;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 8px;
  }

  p {
    color: rgba($bonedThrone, 0.7);
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
}

.portfolio-learnings {
  border-left: 2px solid $cyanTyrant;
  padding-left: 16px;
  margin-bottom: 32px;

  h2 {
    color: $cyanTyrant;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 8px;
  }

  p {
    color: rgba($bonedThrone, 0.7);
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
}

.portfolio-content {
  color: rgba($bonedThrone, 0.75);
  font-size: 15px;
  line-height: 1.7;

  p { margin-bottom: 1.4em; }
  h2, h3 { color: $bonedThrone; font-size: 1.4rem; }
  a { color: $cyanTyrant; }
  a:hover { color: lighten($cyanTyrant, 10%); }
}
```

- [ ] **Step 3: Verify in browser**

Open a project page. Expected:
- Sidebar: logo placeholder, title in white, role/place/year in dimmed white
- Screenshot: placeholder blue-tinted box
- Challenge: pink left border, "CHALLENGE" label in pink caps, text below
- Learnings: cyan left border, "LEARNINGS" label in cyan caps, text below
- Content: readable off-white text

- [ ] **Step 4: Commit**

```bash
git add _sass/_portfolio.scss
git commit -m "feat: add project page sidebar, screenshot, challenge, learnings styles"
```

---

## Task 6: Portfolio header on list page

**Files:**
- Modify: `_includes/portfolio-header.html` — the shared header uses the same `.main-header` as the blog. On the portfolio it's fine as-is (the base CSS handles it), but the `.who-iam` text and `.dots` are not needed. Verify they don't break the layout.

- [ ] **Step 1: Check if header renders correctly on portfolio landing**

Visit `http://127.0.0.1:4000/`. The header should show the same header as the blog (name, illustration, float-window). If `.who-iam` or `.dots` overflow or break the dark layout, add to `_portfolio.scss`:

```scss
body.portfolio-landing .who-iam {
  color: rgba($bonedThrone, 0.6);
}
```

- [ ] **Step 2: Commit only if changes were needed**

```bash
git add _sass/_portfolio.scss
git commit -m "fix: adjust header text color on dark portfolio landing"
```

---

## Self-Review Checklist

- [x] **Spec coverage:**
  - Dark + Accent palette → Tasks 1–5
  - Featured card (image-left, panel-right, tall) → Task 2
  - List cards (shorter, same structure) → Task 3
  - Blog link → Task 3
  - Project page two-column → Task 4
  - Sidebar (logo, title, role, place, year) → Task 5
  - Screenshot full-width → Task 5
  - Challenge (pink border) → Task 5
  - Learnings (cyan border) → Task 5
  - Mobile responsive → Tasks 2, 4, 5 (via `@include media-medium` guards)
- [x] **No placeholders or TBDs**
- [x] **Type/class consistency:** `placeholder-screenshot`, `placeholder-logo`, `featured-meta`, `list-item-panel` — consistent across HTML and CSS tasks
