# Portfolio List Layout

**Date:** 2026-05-15
**Status:** Approved

## Overview

Replace the image-card grid of non-featured portfolio projects with a text-based list inspired by ghiyaats.com. The featured hero card stays unchanged. Non-featured projects render as text entries: title, short description (from `challenge`), role · place · year metadata, and a "view case study →" link. No new front matter fields needed.

## What Changes

| File | Change |
|------|--------|
| `index.html` | Replace `.portfolio-grid` block with `.portfolio-list` using text-based markup |
| `style.scss` | Remove `.portfolio-grid` CSS; add empty class stubs for user to style |

## What Stays the Same

- Featured hero card (image placeholder, title, role · place)
- All `_portfolio/*.md` front matter
- All layouts (`portfolio-default.html`, `portfolio-full.html`, `portfolio-item.html`)
- Blog, posts, other collections

## New Markup (replaces `.portfolio-grid` block)

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

## CSS Class Stubs Added to `style.scss`

The following classes are added as empty stubs so the user can style them:

```scss
.portfolio-list { }
.portfolio-list-item { }
.list-item-meta { }
.list-item-title { }
.list-item-desc { }
.list-item-link { }
```

The `.portfolio-grid` rule is removed.

## Out of Scope

- CSS styling of the list (handled by the user)
- Changes to the featured hero card
- Changes to project detail pages
