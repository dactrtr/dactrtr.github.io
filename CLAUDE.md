# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (mirrors GitHub Pages environment)
gem install github-pages

# Serve locally with live reload
jekyll serve

# View at http://127.0.0.1:4000/
```

## Architecture

This is a **Jekyll Now**-based personal blog deployed to GitHub Pages at `dactrtr.rocks`.

**Content types** (all in `_posts/`, named `YYYY-MM-DD-title.md`):
- Blog posts use `layout: post` with front matter fields: `title`, `titledesc`, `author`, `feature` (hero image URL), `lang`, `about`

**Collections** defined in `_config.yml`: `quotes`, `projects`, `travels` — each has its own layout in `_layouts/`.

**Layout chain**: `post.html` → `single.html` → `default.html`. The `default.html` contains the full site chrome (header with personal bio, footer, analytics include).

**Styling**: `style.scss` is the entry point, importing partials from `_sass/` (`_reset`, `_variables`, `_fonts`, `_theme`, `_highlights`, `_svg-icons`). Compiled to `style.css` by Jekyll.

**Plugins**: `jekyll-paginate` (48 posts/page) and `jekyll-feed`. Sitemap plugin is commented out.

**Key config** (`_config.yml`): permalink style is `/:title/`, Disqus shortname is `dactrtr`, no Google Analytics key set.

## Post Front Matter

```yaml
---
layout: post
title: Post Title
titledesc: Subtitle or series label
author: dactrtr
feature: https://...  # hero image
lang: eng             # or esp
about: gamedev        # category tag
---
```
