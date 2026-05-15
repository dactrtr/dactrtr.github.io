# Portfolio Homepage Design

**Date:** 2026-05-15
**Status:** Approved

## Overview

Replace the blog post list on the homepage with a portfolio view. Portfolio projects live in a dedicated `_portfolio/` Jekyll collection and render as standalone pages. The existing blog moves to `/blog` showing the 15 most recent posts. One project can be marked `featured: true` to occupy a hero card at the top of the homepage; the rest appear in a secondary grid below it.

## Architecture

### New files and folders

| Path | Purpose |
|------|---------|
| `_portfolio/` | New Jekyll collection. One `.md` file per project. |
| `_layouts/portfolio-item.html` | Detail page layout for each portfolio entry. Extends `default.html`. |
| `blog.md` | New page at `/blog`. Lists the 15 most recent `_posts/` entries. |

### Modified files

| Path | Change |
|------|--------|
| `_config.yml` | Add `portfolio` collection with `output: true` and `permalink: /portfolio/:name/`. |
| `index.html` | Replace paginated post loop with portfolio homepage (featured hero + secondary grid + blog button). |

## Data Model

### `_portfolio/*.md` front matter

```yaml
---
layout: portfolio-item
title: Project Name
role: UI Designer
place: Tokyo, Japan
challenge: Brief description of the challenge faced
learnings: Key takeaways from the project
featured: true          # optional — only one entry should be true at a time
logo: /assets/portfolio/project-name-logo.png
screenshot: /assets/portfolio/project-name-screen.png
date: 2024-01-01
---

Markdown case study content goes here.
```

**Rules:**
- Only one entry should have `featured: true` at a time. If multiple are marked, the first one wins.
- File name determines the URL: `_portfolio/dinopirates.md` → `/portfolio/dinopirates/`.
- No date in the filename (date lives in front matter only).

### Placeholder entry for layout work

One file `_portfolio/example-project.md` will be created with dummy text and colored rectangle placeholders (CSS `div` blocks) instead of real images.

## Homepage Logic (`index.html`)

```liquid
{% assign featured = site.portfolio | where: "featured", true | first %}
{% assign others = site.portfolio | where: "featured", false %}
```

1. Render `featured` as a large hero card (screenshot prominent, title, role, place, link to detail page).
2. Render `others` as a smaller secondary grid.
3. Render a "→ blog" button linking to `/blog`.

## Blog Page (`blog.md`)

- Layout: `default`
- Iterates `site.posts | limit: 15`
- Reuses the same card markup currently in `index.html`
- No pagination (no plugin changes required)

## Portfolio Item Layout (`portfolio-item.html`)

Extends `default.html` to inherit the site header. Sections:

1. Logo + title + metadata row (role, place, date)
2. Screenshot (full-width or contained)
3. **Challenge** — from front matter
4. **Learnings** — from front matter
5. Free-form markdown body

## Out of Scope

- Visual styling / CSS design (handled separately by the user)
- Pagination on `/blog`
- Filtering or tagging within the portfolio
- Changes to existing post layouts or the quotes/travels/projects collections
