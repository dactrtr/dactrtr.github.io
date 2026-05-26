# Portfolio Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the blog post list on the homepage with a portfolio view featuring a hero card for one featured project and a secondary grid for the rest, with a button linking to `/blog`.

**Architecture:** A new `_portfolio/` Jekyll collection holds one `.md` file per project. The homepage (`index.html`) filters by `featured: true` to render the hero card and the rest in a grid. A new `blog.md` page at `/blog` shows the 15 most recent posts using the existing card markup.

**Tech Stack:** Jekyll (GitHub Pages), Liquid templating, SCSS (existing `style.scss`)

> **Note:** This project has no automated test suite. Verification steps use `jekyll serve` and manual browser checks. Commits are omitted — the user manages git history.

---

### Task 1: Register the `_portfolio/` collection in `_config.yml`

**Files:**
- Modify: `_config.yml`

- [ ] **Step 1: Add the collection**

Open `_config.yml`. The `collections:` block currently reads:

```yaml
collections:
  quotes:
    output: true
  projects:
    output: true
  travels:
    output: true
```

Add `portfolio` directly below `travels`:

```yaml
collections:
  quotes:
    output: true
  projects:
    output: true
  travels:
    output: true
  portfolio:
    output: true
    permalink: /portfolio/:name/
```

- [ ] **Step 2: Verify Jekyll sees the collection**

Run:
```bash
jekyll build 2>&1 | grep -i portfolio
```

Expected: no error output about `portfolio`. If you see `Unknown collection: portfolio`, check indentation — YAML is indent-sensitive.

---

### Task 2: Create two placeholder `_portfolio/` entries

**Files:**
- Create: `_portfolio/example-featured.md`
- Create: `_portfolio/example-second.md`

- [ ] **Step 1: Create the featured entry**

Create `_portfolio/example-featured.md`:

```markdown
---
layout: portfolio-item
title: Dinopirates from Outer Space
role: Game Designer & Developer
place: Tokyo, Japan
challenge: Design and ship a Playdate game solo with zero prior Lua experience, under tight hardware constraints (400x240 px, 1-bit display, crank input).
learnings: Shipping beats perfection. Constraint-driven design leads to more creative solutions than open-ended tools.
featured: true
logo: ""
screenshot: ""
date: 2024-07-01
---

This is a placeholder case study. Replace with real content.
```

- [ ] **Step 2: Create the secondary entry**

Create `_portfolio/example-second.md`:

```markdown
---
layout: portfolio-item
title: UI Design System
role: UI Designer
place: Santiago, Chile
challenge: Build a scalable component library from scratch for a product team of four, without a dedicated design system tool.
learnings: Naming conventions and documentation matter more than the components themselves. A system nobody understands is not a system.
featured: false
logo: ""
screenshot: ""
date: 2023-03-01
---

This is a placeholder case study. Replace with real content.
```

- [ ] **Step 3: Verify Jekyll generates the pages**

Run:
```bash
jekyll build && ls _site/portfolio/
```

Expected output:
```
example-featured/
example-second/
```

If the `portfolio/` directory is missing, confirm Task 1 was applied and that `output: true` is set in `_config.yml`.

---

### Task 3: Create `_layouts/portfolio-item.html`

**Files:**
- Create: `_layouts/portfolio-item.html`

This layout extends `default.html` (which provides the site header with personal bio). It renders logo and screenshot as colored placeholder rectangles when the front matter fields are empty strings.

- [ ] **Step 1: Create the layout file**

Create `_layouts/portfolio-item.html`:

```html
---
layout: default
---
<article class="portfolio-item">

  <header class="portfolio-item-header">
    <div class="portfolio-logo">
      {% if page.logo and page.logo != "" %}
        <img src="{{ page.logo }}" alt="{{ page.title }} logo">
      {% else %}
        <div class="placeholder-logo" style="width:80px;height:80px;background:#C0F0A0;border-radius:8px;"></div>
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
      <div class="placeholder-screenshot" style="width:100%;height:300px;background:#A0C8F0;border-radius:8px;"></div>
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

- [ ] **Step 2: Verify both portfolio pages render**

Run `jekyll serve`, then open:
- `http://127.0.0.1:4000/portfolio/example-featured/`
- `http://127.0.0.1:4000/portfolio/example-second/`

Check:
- Page loads with the site header (personal bio, illustration)
- Green rectangle appears where the logo would be
- Blue rectangle appears where the screenshot would be
- "Challenge" and "Learnings" sections show the text from front matter
- Placeholder markdown body renders below

If the page is blank or shows a layout error, confirm that `layout: default` in the portfolio-item front matter matches the filename `_layouts/default.html` exactly.

---

### Task 4: Create `blog.md` — blog listing at `/blog`

**Files:**
- Create: `blog.md`

This page replaces the current homepage for blog readers. It uses `layout: default` and iterates the 15 most recent posts using the same card markup that currently lives in `index.html`.

- [ ] **Step 1: Create the file**

Create `blog.md` in the root of the repository:

```markdown
---
layout: default
title: Blog
permalink: /blog/
---
<div class="posts">
  <h2 class="blog-title">↓blog↓</h2>
  {% for post in site.posts limit:15 %}
    <article class="post">
      {% if post.feature %}
        <a href="{{ site.baseurl }}{{ post.url }}"
           style="background:url({{ post.feature }});background-size:cover;background-position-y:center;">
      {% else %}
        <a href="{{ site.baseurl }}{{ post.url }}"
           style="background:url(http://i.giphy.com/FRmOsocKhM1xK.gif);background-size:cover;background-position-y:center;">
      {% endif %}
          <span class="cover"></span>
          <div class="data-post">
            <h1 class="title">{{ post.title }}</h1>
            <h4 class="desc">{{ post.titledesc }}</h4>
            <h3 class="date">{{ post.date | date: "%B %e, %Y" }}</h3>
            <div class="tags-holder">
              <span class="language">
                {% if post.about == "life" %}
                  life
                {% else %}
                  devblog
                {% endif %}
              </span>
            </div>
          </div>
      </a>
    </article>
  {% endfor %}
</div>
```

- [ ] **Step 2: Verify the blog page**

Run `jekyll serve`, open `http://127.0.0.1:4000/blog/`.

Check:
- Posts list renders with cards (same style as the old homepage)
- At most 15 posts appear
- Each card links correctly to its post
- The site header with personal bio is present

---

### Task 5: Replace `index.html` with the portfolio homepage

**Files:**
- Modify: `index.html`

The new homepage shows: featured hero card → secondary project grid → "→ blog" button.

- [ ] **Step 1: Replace the content of `index.html`**

Replace the entire contents of `index.html` with:

```html
---
layout: default
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
  <div class="portfolio-grid">
    {% for project in others %}
    <article class="portfolio-card">
      <a href="{{ project.url }}">
        <div class="card-screenshot">
          {% if project.screenshot and project.screenshot != "" %}
            <img src="{{ project.screenshot }}" alt="{{ project.title }}">
          {% else %}
            <div class="placeholder-screenshot" style="width:100%;height:200px;background:#A0C8F0;border-radius:8px;"></div>
          {% endif %}
        </div>
        <div class="card-meta">
          {% if project.logo and project.logo != "" %}
            <img src="{{ project.logo }}" alt="{{ project.title }} logo" class="card-logo">
          {% else %}
            <div class="placeholder-logo" style="width:40px;height:40px;background:#C0F0A0;border-radius:8px;display:inline-block;"></div>
          {% endif %}
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-role">{{ project.role }} &middot; {{ project.place }}</p>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
  {% endif %}



</div>
```

- [ ] **Step 2: Verify the homepage**

Run `jekyll serve`, open `http://127.0.0.1:4000/`.

Check:
- The blog post list is gone
- Blue rectangle hero card appears for "Dinopirates from Outer Space" (featured entry)
- Green rectangle logo + blue rectangle card appears for "UI Design System" (secondary entry)
- Clicking the hero card navigates to `/portfolio/example-featured/`
- Clicking the secondary card navigates to `/portfolio/example-second/`
- "→ blog" button at the bottom links to `/blog/`
- `/blog/` still works and shows the post list

- [ ] **Step 3: Verify old pagination links are gone**

Confirm that `/page2/`, `/page3/` etc. still exist (Jekyll generates them from the paginator plugin — they won't break, they just won't be linked from the homepage anymore). This is expected behavior.
