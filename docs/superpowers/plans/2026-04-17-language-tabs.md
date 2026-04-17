# Language Tabs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add CSS-only EN/ES/JP tabs to blog posts that switch content without JavaScript.

**Architecture:** A Jekyll include renders hidden radio inputs + tab labels (with `checked` set from `page.lang`). Posts wrap each language's content in `.panel-{lang}.lang-panel` divs with `markdown="1"`. The SCSS `:checked ~` sibling combinator shows/hides the correct panel.

**Tech Stack:** Jekyll, Kramdown, SCSS, CSS radio button hack.

---

### Task 1: Create the SCSS partial and wire it into the build

**Files:**
- Create: `_sass/_lang-tabs.scss`
- Modify: `style.scss` (line 22 — after `@import "theme"`)

- [ ] **Step 1: Create `_sass/_lang-tabs.scss`**

```scss
// Hide radios and all panels by default
.tab-radio { display: none; }
.lang-panel { display: none; }

// Show the panel whose radio is checked
#tab-eng:checked ~ .panel-eng,
#tab-esp:checked ~ .panel-esp,
#tab-jp:checked ~ .panel-jp { display: block; }

// Tab bar
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
    transition: all ease-in 0.2s;
  }
}

// Active tab highlight — $pink is defined in _variables.scss
#tab-eng:checked ~ .tab-labels label[for="tab-eng"],
#tab-esp:checked ~ .tab-labels label[for="tab-esp"],
#tab-jp:checked ~ .tab-labels label[for="tab-jp"] {
  background: $pink;
  color: white;
  border-color: $pink;
}
```

- [ ] **Step 2: Add the import to `style.scss`**

In `style.scss`, the current imports are:
```scss
@import "reset";
@import "variables";
@import "fonts";
@import "theme";
```

Add `_lang-tabs` after `theme`:
```scss
@import "reset";
@import "variables";
@import "fonts";
@import "theme";
@import "lang-tabs";
```

- [ ] **Step 3: Verify the SCSS compiles**

Run:
```bash
jekyll build 2>&1 | grep -i error
```
Expected: no output (no errors). If there are errors, check that `$pink` resolves — it's defined in `_sass/_variables.scss` which is imported before `lang-tabs`.

---

### Task 2: Create the include

**Files:**
- Create: `_includes/lang-tabs.html`

- [ ] **Step 1: Create `_includes/lang-tabs.html`**

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

Note: `name="lang"` groups the three radios so only one can be checked at a time. The `id`s (`tab-eng`, `tab-esp`, `tab-jp`) match the `for` attributes in the labels and the CSS selectors in `_lang-tabs.scss`.

---

### Task 3: Apply tabs to a post and verify in browser

Use `_posts/2026-03-01-dpsa-update.md` (the newest post, already has `lang: eng`) as the first post to get tabs.

**Files:**
- Modify: `_posts/2026-03-01-dpsa-update.md`

- [ ] **Step 1: Read the current post content**

Open `_posts/2026-03-01-dpsa-update.md` and copy all the existing body content (everything after the front matter `---`).

- [ ] **Step 2: Rewrite the post with tab structure**

Replace the post body with this structure. The existing English content goes in `.panel-eng`. The other two panels get a "coming soon" placeholder:

```markdown
---
layout: post
title: Dinopirates
titledesc: Devblog 04
author: dactrtr
feature: https://i.imgur.com/PV4ekjg.gif
lang: eng
about: gamedev
---

{% include lang-tabs.html %}

<div class="panel-eng lang-panel" markdown="1">
[paste the full original post content here]
</div>

<div class="panel-esp lang-panel" markdown="1">
_Traducción en progreso..._
</div>

<div class="panel-jp lang-panel" markdown="1">
_翻訳は近日公開予定です..._
</div>
```

- [ ] **Step 3: Serve and verify**

Run:
```bash
jekyll serve
```

Open `http://127.0.0.1:4000/dpsa-update/` and verify:

1. The EN tab is active by default (pink background on EN label)
2. The full English post content is visible
3. Clicking ES shows "_Traducción en progreso..._" and the ES label turns pink
4. Clicking JP shows "_翻訳は近日公開予定です..._" and the JP label turns pink
5. Clicking back to EN restores the English content
6. No JavaScript is used (verify in browser DevTools → Sources → no JS event listeners on the labels)

- [ ] **Step 4: Check markdown rendering inside the panel**

While viewing the EN tab, confirm that:
- Headings (`#`, `##`) render as `<h1>`, `<h2>` (not literal `#` characters)
- Bold (`**text**`) renders as `<strong>`
- Images and iframes display correctly

If markdown is rendering as raw text instead of HTML, the Jekyll version may not support `markdown="1"`. Fallback: switch to `{::options parse_block_html="true" /}` at the top of the post, which enables markdown-in-HTML globally for that file:

```markdown
{::options parse_block_html="true" /}

{% include lang-tabs.html %}

<div class="panel-eng lang-panel">
[content]
</div>
```
