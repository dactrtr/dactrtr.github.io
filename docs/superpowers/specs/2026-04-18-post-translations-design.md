# Post Translations Design

**Date:** 2026-04-18  
**Status:** Approved

## Goal

Translate all 37 blog posts to three languages (English, Spanish, Japanese) following the structure established in `_posts/2026-03-01-dpsa-update.md`. Each post's original language panel gets a visual badge indicating it's the original.

## Badge

Add `.original-badge` class to `_sass/_theme.scss`:

```css
.original-badge {
  display: inline-block;
  background: red;
  color: white;
  padding: 2px 8px;
  font-size: 0.75em;
  border-radius: 3px;
  margin-bottom: 1em;
}
```

Used inline as: `<span class="original-badge">Original</span>`

## Post Structure

Every post is restructured to include `{% include lang-tabs.html %}` and three language panels:

```markdown
---
layout: post
title: ...
lang: eng   ← original language kept as-is
---
{% include lang-tabs.html %}

<div class="panel-eng lang-panel" markdown="1">
<span class="original-badge">Original</span>

[original English content]
</div>

<div class="panel-esp lang-panel" markdown="1">

[Spanish translation]
</div>

<div class="panel-jp lang-panel" markdown="1">

[Japanese translation]
</div>
```

If the original is Spanish, the badge goes in `panel-esp` and `lang: esp` is kept.

## Translation Rules

- **Language detection**: via `lang` front matter field; fallback to content analysis
- **Tone**: natural, casual — preserve the personal voice of the blog
- **Direction**: always translate from the original (not from an intermediate translation)
- **Non-text content**: iframes, images, links, and code blocks are copied verbatim across all panels
- **Only text is translated**

## Scope

All 37 posts in `_posts/`. Posts already structured with panels (e.g., `dpsa-update`) are skipped or verified.

## Files Modified

- `_sass/_theme.scss` — add `.original-badge`
- All 37 `_posts/*.md` files — restructured with panels + translations
