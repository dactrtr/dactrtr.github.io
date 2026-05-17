# Portfolio Layout Redesign

**Date:** 2026-05-15
**Status:** Approved

## Overview

Separate the portfolio visual identity from the blog by introducing dedicated layouts. The blog (`default.html`) stays completely untouched. The portfolio homepage gets its own layout that uses the existing header extracted into a swappable include. Portfolio project detail pages become standalone full-width pages with a back button and a custom contact footer.

## Architecture

### New files

| Path | Purpose |
|------|---------|
| `_includes/portfolio-header.html` | The current header HTML (bio, illustration, social links) extracted from `default.html`. Swappable independently of the blog. |
| `_layouts/portfolio-default.html` | Layout for the portfolio homepage. Mirrors `default.html` structure but calls `{% include portfolio-header.html %}` instead of inline header HTML. |
| `_layouts/portfolio-full.html` | Standalone layout for individual portfolio project pages. No site header. Contains: back button → full-width content → custom contact footer. |

### Modified files

| Path | Change |
|------|--------|
| `index.html` | `layout: default` → `layout: portfolio-default` |
| `_layouts/portfolio-item.html` | `layout: default` → `layout: portfolio-full` |

### Untouched files

| Path | Reason |
|------|--------|
| `_layouts/default.html` | Blog layout — must not change |
| `blog.md` | Blog listing — must not change |
| `_layouts/post.html` | Blog post layout — must not change |

## `_includes/portfolio-header.html`

Exact copy of the `<header class="main-header">...</header>` block currently inside `default.html`. No logic changes — purely a move. Once extracted, `portfolio-default.html` includes it and `default.html` keeps its own inline copy unchanged.

## `_layouts/portfolio-default.html`

Structurally identical to `default.html` with one difference: the `<header>` block is replaced by:

```liquid
{% include portfolio-header.html %}
```

Everything else (head, body class, `<div id="main">`, footer, analytics include) is the same as `default.html`.

## `_layouts/portfolio-full.html`

Standalone HTML page — does not extend any other layout. Structure:

```
<html>
  <head>
    ← Same meta tags and CSS link as default.html (copied, not inherited)
  </head>
  <body class="portfolio-full">
    <a href="/" class="portfolio-back">back</a>
    <div class="portfolio-full-content">
      {{ content }}
    </div>
    <footer class="portfolio-footer">
      <p class="footer-name">Sebastian Zúñiga · dactrtr</p>
      <ul class="footer-links">
        <li><a href="mailto:{{ site.footer-links.email }}">{{ site.footer-links.email }}</a></li>
        <li><a href="https://github.com/{{ site.footer-links.github }}">github</a></li>
        <li><a href="https://www.instagram.com/dactrtr.rocks/">instagram</a></li>
        <li><a href="https://behance.net/{{ site.footer-links.behance }}">behance</a></li>
      </ul>
    </footer>
    {% include analytics.html %}
  </body>
</html>
```

The back button links to `/` (portfolio homepage). Footer data is pulled from `_config.yml` `footer-links` keys so it stays in sync with the rest of the site config.

## Out of Scope

- CSS styling of the new layouts and footer (handled by the user)
- Changing the content structure of `portfolio-item.html`
- Any changes to blog posts, quotes, travels, or projects collections
