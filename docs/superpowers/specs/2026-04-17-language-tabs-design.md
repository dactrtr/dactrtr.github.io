# Language Tabs Feature — Design Spec

## Overview

Add CSS-only language tabs (EN / ES / JP) to blog posts, allowing readers to switch between translations without JavaScript. The active tab defaults to the post's original language via the existing `lang:` front matter field.

## Approach

Radio button CSS hack: hidden `<input type="radio">` elements paired with `<label>` tabs. The CSS `:checked ~ sibling` combinator shows/hides content panels. Markdown inside panels works via Kramdown's `markdown="1"` attribute.

## Files

| File | Action |
|---|---|
| `_includes/lang-tabs.html` | New — renders radio inputs + tab labels, sets `checked` from `page.lang` |
| `_sass/_lang-tabs.scss` | New — all tab show/hide logic and visual styles |
| `style.scss` | Edit — add `@import "lang-tabs"` |

## `_includes/lang-tabs.html`

```html
<input type="radio" name="lang" id="tab-eng" class="tab-radio" {% if page.lang == 'eng' %}checked{% endif %}>
<input type="radio" name="lang" id="tab-esp" class="tab-radio" {% if page.lang == 'esp' %}checked{% endif %}>
<input type="radio" name="lang" id="tab-jp" class="tab-radio" {% if page.lang == 'jp' %}checked{% endif %}>
<div class="tab-labels">
  <label for="tab-eng">EN</label>
  <label for="tab-esp">ES</label>
  <label for="tab-jp">JP</label>
</div>
```

## `_sass/_lang-tabs.scss`

```scss
.tab-radio { display: none; }
.lang-panel { display: none; }

#tab-eng:checked ~ .panel-eng,
#tab-esp:checked ~ .panel-esp,
#tab-jp:checked ~ .panel-jp { display: block; }

.tab-labels {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  label {
    cursor: pointer;
    padding: 4px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

#tab-eng:checked ~ .tab-labels label[for="tab-eng"],
#tab-esp:checked ~ .tab-labels label[for="tab-esp"],
#tab-jp:checked ~ .tab-labels label[for="tab-jp"] {
  background: $pink;
  color: white;
  border-color: $pink;
}
```

## Post Authoring Pattern

```markdown
---
layout: post
title: Post Title
lang: eng
---

{% include lang-tabs.html %}

<div class="panel-eng lang-panel" markdown="1">
# English content
Normal markdown here.
</div>

<div class="panel-esp lang-panel" markdown="1">
# Contenido en español
</div>

<div class="panel-jp lang-panel" markdown="1">
# 日本語コンテンツ
</div>
```

For old posts pending translation, use a placeholder in the missing panels:

```html
<div class="panel-esp lang-panel" markdown="1">
_Traducción en progreso..._
</div>
```

## Why This Works

All elements rendered from `{{ content }}` in `post.html` land inside `<div class="entry">` as siblings. The CSS `~` general sibling combinator selects any following sibling, so `#tab-eng:checked ~ .panel-eng` correctly targets the content panel even with `.tab-labels` between them.

The `markdown="1"` attribute is a Kramdown-specific feature (GitHub Pages default processor) that enables markdown parsing inside HTML block elements — this is the fix for the "markdown breaks inside divs" issue.
