# Post Translations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate all 37 blog posts to English, Spanish, and Japanese following the `dpsa-update` panel structure, with an `.original-badge` badge in the original language panel.

**Architecture:** Add CSS badge class first, then process posts in 8 batches of ~5 posts each. Each post gets restructured with `{% include lang-tabs.html %}` and three `<div class="panel-X lang-panel" markdown="1">` sections. The original language panel gets `<span class="original-badge">Original</span>` at the top.

**Tech Stack:** Jekyll, Liquid, SCSS, Markdown

---

## Key Rules for All Translation Tasks

- `lang` front matter must be `eng`, `esp`, or `jp` — not `spa`, `en`, etc.
- `{% include lang-tabs.html %}` goes immediately after the front matter closing `---`
- The badge `<span class="original-badge">Original</span>` goes at the top of the original language panel
- iframes, images (`<figure>`, `<img>`), links, and code blocks are **copied verbatim** across all three panels
- Only prose text is translated
- Translate directly from the original (never from an intermediate translation)
- Match the casual, personal, first-person voice of the original
- `2026-03-01-dpsa-update.md` is already done — **skip it**

### Template (original = English)

```markdown
---
layout: post
title: ...
lang: eng
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

### Template (original = Spanish)

```markdown
---
layout: post
title: ...
lang: esp
---
{% include lang-tabs.html %}
<div class="panel-eng lang-panel" markdown="1">

[English translation]
</div>

<div class="panel-esp lang-panel" markdown="1">
<span class="original-badge">Original</span>

[original Spanish content]
</div>

<div class="panel-jp lang-panel" markdown="1">

[Japanese translation]
</div>
```

---

## Task 1: Add `.original-badge` CSS

**Files:**
- Modify: `_sass/_theme.scss`

- [ ] **Step 1: Read `_sass/_theme.scss`** to find a good place to append the badge rule (end of file is fine)

- [ ] **Step 2: Append the badge class**

Add at the end of `_sass/_theme.scss`:

```scss
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

- [ ] **Step 3: Commit**

```bash
git add _sass/_theme.scss
git commit -m "style: add .original-badge CSS class"
```

---

## Task 2: Translate Batch 1 — 2015 (Early posts)

**Files:**
- Modify: `_posts/2015-11-26-Moving-to-Jekyll.md`
- Modify: `_posts/2015-11-27-C4ios.md`
- Modify: `_posts/2015-11-28-life.md`
- Modify: `_posts/2015-11-30-updating.md`
- Modify: `_posts/2015-12-20-Akaroa.md`

All five posts have `lang: eng` — badge goes in `panel-eng`.

- [ ] **Step 1: Read all five files** to capture original content exactly

- [ ] **Step 2: Rewrite each file** using the English-original template above. For each post:
  - Keep all front matter fields unchanged except `lang` must be `eng`
  - Add `{% include lang-tabs.html %}` right after the closing `---`
  - Put the entire original content (unchanged) inside `<div class="panel-eng lang-panel" markdown="1">` with badge
  - Write Spanish translation in `panel-esp`
  - Write Japanese translation in `panel-jp`

- [ ] **Step 3: Commit**

```bash
git add _posts/2015-11-26-Moving-to-Jekyll.md _posts/2015-11-27-C4ios.md _posts/2015-11-28-life.md _posts/2015-11-30-updating.md _posts/2015-12-20-Akaroa.md
git commit -m "i18n: translate 2015 early posts (batch 1)"
```

---

## Task 3: Translate Batch 2 — Late 2015 / Early 2016

**Files:**
- Modify: `_posts/2015-12-22-SWTFA.md`
- Modify: `_posts/2015-12-6-Fury-Road.md`
- Modify: `_posts/2015-12-7-Fury-Road-2.md`
- Modify: `_posts/2016-1-1-Akaroa-2.md`
- Modify: `_posts/2016-12-1-Challenges.md`

All have `lang: eng` — badge goes in `panel-eng`.

- [ ] **Step 1: Read all five files**

- [ ] **Step 2: Rewrite each file** using the English-original template. Same rules as Task 2.

- [ ] **Step 3: Commit**

```bash
git add _posts/2015-12-22-SWTFA.md "_posts/2015-12-6-Fury-Road.md" "_posts/2015-12-7-Fury-Road-2.md" "_posts/2016-1-1-Akaroa-2.md" "_posts/2016-12-1-Challenges.md"
git commit -m "i18n: translate late 2015 / early 2016 posts (batch 2)"
```

---

## Task 4: Translate Batch 3 — 2016

**Files:**
- Modify: `_posts/2016-12-10-procastibloggin.md`
- Modify: `_posts/2016-2-8-GPS.md`
- Modify: `_posts/2016-3-15-Akaroa-3.md`
- Modify: `_posts/2016-6-12- BYEBYE.md`
- Modify: `_posts/2016-6-12-HDDVSSSD.md`

All have `lang: eng` — badge goes in `panel-eng`.

- [ ] **Step 1: Read all five files**

- [ ] **Step 2: Rewrite each file** using the English-original template.

Note: `2016-6-12- BYEBYE.md` has a space in the filename — quote the path in all shell commands.

- [ ] **Step 3: Commit**

```bash
git add "_posts/2016-12-10-procastibloggin.md" "_posts/2016-2-8-GPS.md" "_posts/2016-3-15-Akaroa-3.md" "_posts/2016-6-12- BYEBYE.md" "_posts/2016-6-12-HDDVSSSD.md"
git commit -m "i18n: translate 2016 posts (batch 3)"
```

---

## Task 5: Translate Batch 4 — 2017

**Files:**
- Modify: `_posts/2017-02-26-Dell d620.md`
- Modify: `_posts/2017-03-22-Childish gambino.md`
- Modify: `_posts/2017-03-23-n3ds.md`
- Modify: `_posts/2017-03-5-Sketch.md`
- Modify: `_posts/2017-09-25-jekyll+ipad+editorial.md`

All have `lang: eng` — badge goes in `panel-eng`.

- [ ] **Step 1: Read all five files**

- [ ] **Step 2: Rewrite each file** using the English-original template.

Note: several filenames have spaces — always quote paths in shell commands.

- [ ] **Step 3: Commit**

```bash
git add "_posts/2017-02-26-Dell d620.md" "_posts/2017-03-22-Childish gambino.md" "_posts/2017-03-23-n3ds.md" "_posts/2017-03-5-Sketch.md" "_posts/2017-09-25-jekyll+ipad+editorial.md"
git commit -m "i18n: translate 2017 posts (batch 4)"
```

---

## Task 6: Translate Batch 5 — 2018–2019

**Files:**
- Modify: `_posts/2018-05-01-outtatime.md`
- Modify: `_posts/2019-03-15-Rats.md`
- Modify: `_posts/2019-07-28-FPV.md`
- Modify: `_posts/2019-11-10-re-conocimiento-facial.md` ← **originally Spanish**
- Modify: `_posts/2019-12-05-diciembre.md` ← **check lang field**

For `re-conocimiento-facial.md`:
- Original is Spanish (`lang: spa` in front matter — **must be changed to `lang: esp`**)
- Badge goes in `panel-esp`
- Use the Spanish-original template

For `diciembre.md`: Read the file first to determine original language, then apply correct template.

- [ ] **Step 1: Read all five files**

- [ ] **Step 2: Rewrite each file** using the correct template (English-original or Spanish-original depending on content)

- [ ] **Step 3: Commit**

```bash
git add _posts/2018-05-01-outtatime.md _posts/2019-03-15-Rats.md _posts/2019-07-28-FPV.md _posts/2019-11-10-re-conocimiento-facial.md _posts/2019-12-05-diciembre.md
git commit -m "i18n: translate 2018-2019 posts (batch 5)"
```

---

## Task 7: Translate Batch 6 — 2019–2021

**Files:**
- Modify: `_posts/2019-12-29-Chicago.md`
- Modify: `_posts/2020-12-12-mayor-update.md`
- Modify: `_posts/2021-03-5-moving-out.md`
- Modify: `_posts/2021-05-27-tech.md`
- Modify: `_posts/2021-06-14-WWDC21.md`

- [ ] **Step 1: Read all five files** and confirm original language from `lang` field and content

- [ ] **Step 2: Rewrite each file** using the correct template

- [ ] **Step 3: Commit**

```bash
git add _posts/2019-12-29-Chicago.md _posts/2020-12-12-mayor-update.md "_posts/2021-03-5-moving-out.md" _posts/2021-05-27-tech.md _posts/2021-06-14-WWDC21.md
git commit -m "i18n: translate 2019-2021 posts (batch 6)"
```

---

## Task 8: Translate Batch 7 — 2021–2023

**Files:**
- Modify: `_posts/2021-06-15-design-to-swiftui.md`
- Modify: `_posts/2022-11-01-xmas-update.md`
- Modify: `_posts/2023-05-23-dsgn-update.md`
- Modify: `_posts/2023-05-27-dpsa-dev-00.md`
- Modify: `_posts/2023-06-4-dpsa-dev-01.md`

- [ ] **Step 1: Read all five files** and confirm original language

- [ ] **Step 2: Rewrite each file** using the correct template

- [ ] **Step 3: Commit**

```bash
git add _posts/2021-06-15-design-to-swiftui.md _posts/2022-11-01-xmas-update.md _posts/2023-05-23-dsgn-update.md _posts/2023-05-27-dpsa-dev-00.md "_posts/2023-06-4-dpsa-dev-01.md"
git commit -m "i18n: translate 2021-2023 posts (batch 7)"
```

---

## Task 9: Translate Batch 8 — 2025

**Files:**
- Modify: `_posts/2025-06-30-dpsa-dev-02.md`
- Modify: `_posts/2025-08-01-dpsa-my-first-dollar.md`

- [ ] **Step 1: Read both files** and confirm original language

- [ ] **Step 2: Rewrite each file** using the correct template

- [ ] **Step 3: Commit**

```bash
git add _posts/2025-06-30-dpsa-dev-02.md _posts/2025-08-01-dpsa-my-first-dollar.md
git commit -m "i18n: translate 2025 posts (batch 8)"
```
