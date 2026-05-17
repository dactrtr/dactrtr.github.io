# Portfolio List Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the image-card grid of non-featured portfolio projects with a text-based list (title, description, role · place · year, link).

**Architecture:** Two file changes — `index.html` swaps the `.portfolio-grid` block for a `.portfolio-list` block using existing front matter fields; `style.scss` removes the grid CSS and adds empty class stubs for the user to style.

**Tech Stack:** Jekyll, Liquid, SCSS

> **Note:** No automated test suite. Verification uses `jekyll build` + output inspection. Do NOT commit — the user manages git history.

---

### Task 1: Replace `.portfolio-grid` with `.portfolio-list` in `index.html`

**Files:**
- Modify: `index.html` (lines 30–56)

The featured hero card (lines 6–28) and the blog link (lines 58–60) stay completely unchanged. Only the `others` block is replaced.

- [ ] **Step 1: Replace the others block**

In `index.html`, replace lines 30–56 (from `{% assign others %}` through the closing `{% endif %}`) with:

```liquid
  {% assign others = site.portfolio | where: "featured", false %}
  {% if others.size > 0 %}
  <div class="portfolio-list">
    {% for project in others %}
    <article class="portfolio-list-item">
      <a href="{{ project.url }}">
        <div class="list-item-meta">
          <span>{{ project.role }} &middot; {{ project.place }} &middot; {{ project.date | date: "%Y" }}</span>
        </div>
        <h3 class="list-item-title">{{ project.title }}</h3>
        <p class="list-item-desc">{{ project.challenge }}</p>
        <span class="list-item-link">view case study &rarr;</span>
      </a>
    </article>
    {% endfor %}
  </div>
  {% endif %}
```

The full `index.html` after the change must be exactly:

```html
---
layout: portfolio-default
---
<div class="portfolio-home">

  {% assign featured = site.portfolio | where: "featured", true | first %}
  {% if featured %}
  <div class="portfolio-featured">
    <a href="{{ featured.url }}">
      <div class="featured-screenshot">
        {% if featured.screenshot and featured.screenshot != "" %}
          <img src="{{ featured.screenshot }}" alt="{{ featured.title }}">
        {% else %}
          <div class="placeholder-screenshot" style="width:100%;height:400px;background:#A0C8F0;border-radius:8px;"></div>
        {% endif %}
      </div>
      <div class="featured-meta">
        {% if featured.logo and featured.logo != "" %}
          <img src="{{ featured.logo }}" alt="{{ featured.title }} logo" class="featured-logo">
        {% else %}
          <div class="placeholder-logo" style="width:60px;height:60px;background:#C0F0A0;border-radius:8px;"></div>
        {% endif %}
        <h2 class="featured-title">{{ featured.title }}</h2>
        <p class="featured-role">{{ featured.role }} &middot; {{ featured.place }}</p>
      </div>
    </a>
  </div>
  {% endif %}

  {% assign others = site.portfolio | where: "featured", false %}
  {% if others.size > 0 %}
  <div class="portfolio-list">
    {% for project in others %}
    <article class="portfolio-list-item">
      <a href="{{ project.url }}">
        <div class="list-item-meta">
          <span>{{ project.role }} &middot; {{ project.place }} &middot; {{ project.date | date: "%Y" }}</span>
        </div>
        <h3 class="list-item-title">{{ project.title }}</h3>
        <p class="list-item-desc">{{ project.challenge }}</p>
        <span class="list-item-link">view case study &rarr;</span>
      </a>
    </article>
    {% endfor %}
  </div>
  {% endif %}

  <div class="portfolio-blog-link">
    <a href="/blog/" class="btn-blog">&rarr; blog</a>
  </div>

</div>
```

- [ ] **Step 2: Build and verify**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build 2>&1 | tail -3
```

Expected: clean build, no errors.

- [ ] **Step 3: Verify list renders in the built homepage**

```bash
grep -c "portfolio-list-item\|list-item-title\|list-item-link" _site/index.html
```

Expected: a number ≥ 6 (at least 2 occurrences per project across 6 non-featured entries = 12+).

- [ ] **Step 4: Verify the grid is gone**

```bash
grep "portfolio-grid\|portfolio-card\|card-screenshot" _site/index.html
```

Expected: no output.

- [ ] **Step 5: Verify the featured hero card is unchanged**

```bash
grep -c "portfolio-featured\|featured-title\|featured-role" _site/index.html
```

Expected: ≥ 3.

---

### Task 2: Update `style.scss` — remove grid CSS, add list stubs

**Files:**
- Modify: `style.scss`

- [ ] **Step 1: Replace the `.portfolio-grid` rule with list stubs**

In `style.scss`, find and replace:

```scss
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
```

With:

```scss
.portfolio-list { }
.portfolio-list-item { }
.list-item-meta { }
.list-item-title { }
.list-item-desc { }
.list-item-link { }
```

- [ ] **Step 2: Build and verify SCSS compiles**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build 2>&1 | tail -3
```

Expected: clean build, no SCSS errors.

- [ ] **Step 3: Verify grid rule is gone and stubs are present**

```bash
grep "portfolio-grid\|portfolio-list" _site/style.css | head -10
```

Expected: no `portfolio-grid` lines; `portfolio-list` lines present.
