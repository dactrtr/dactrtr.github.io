# Portfolio Layout Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate the portfolio visual identity from the blog by extracting the site header into a swappable include, creating a dedicated portfolio homepage layout, and replacing the project detail layout with a standalone full-width page that has a back button and custom contact footer.

**Architecture:** The blog layout (`default.html`) stays completely untouched. A new `_includes/portfolio-header.html` contains the current header HTML as a component. `portfolio-default.html` uses that include for the homepage; `portfolio-full.html` is a standalone layout for project detail pages with no site header.

**Tech Stack:** Jekyll (GitHub Pages), Liquid templating

> **Note:** No automated test suite. Verification uses `jekyll build` + output inspection. Do NOT commit — the user manages git history.

---

### Task 1: Create `_includes/portfolio-header.html`

**Files:**
- Create: `_includes/portfolio-header.html`

Extract the `<header class="main-header">` block from `default.html` into a standalone include. This makes the portfolio header a swappable component.

- [ ] **Step 1: Create the file**

Create `_includes/portfolio-header.html` with exactly this content (copied verbatim from `_layouts/default.html` lines 128–170):

```html
<header class="main-header">
  <div class="header-inner">
    <div class="logo">
      <h1>dactrtr</h1>
      <h2>Sebastian Zúñiga Rivas</h2>
      <p class="what">... what</p>
      <p class="mind">Don't mind just call me Seba</p>
    </div>
    <div class="illustration">
      <img class="illu-me" src="../assets/img.png" alt="ME" />
      <img
        class="illu-code"
        src="../assets/coding.png"
        alt="some random code"
      />
      <div class="float-window">
        <span class="controls">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </span>
        <div class="links">
          <a href="https://github.com/dactrtr" class="icon-code"></a>
          <a
            href="https://www.instagram.com/dactrtr.rocks/"
            class="icon-ig"
          ></a>
          <a href="https://tangara.studio/" class="icon-tangara"></a>
        </div>
      </div>
    </div>
    <p class="who-iam">
      I'm <span class="blinkypinky">UI Designer</span>,
      <span class="purpleback">Illustrator</span> and
      <span class="cyantyrant">Indie Game Developer</span> (HTML/CSS/SwiftUI/Lua) located in Tokyo.
    </p>

    <span class="dots"></span>
  </div>
</header>
```

- [ ] **Step 2: Verify the file exists**

```bash
ls /Users/dactrtr-mini/Documents/blog/dactrtr.github.io/_includes/portfolio-header.html
```

Expected: the path prints without error.

---

### Task 2: Create `_layouts/portfolio-default.html`

**Files:**
- Create: `_layouts/portfolio-default.html`

This is a copy of `default.html` with the inline `<header>` block replaced by `{% include portfolio-header.html %}`. The blog's `default.html` must NOT be modified.

- [ ] **Step 1: Create the file**

Create `_layouts/portfolio-default.html` with exactly this content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      {% if page.title %}{{ page.title }} {% endif %}{{ site.name }}
    </title>

    <meta name="author" content=" = D A C T R T R = " />
    <meta name="description" content="{{ site.description }}" />
    <!--
    TAKE THIS FOR INSPECTING MY CODE :)
              // ""--.._
             ||  (_)  _ "-._
             ||    _ (_)    '-.
             ||   (_)   __..-'
              \\__..--""
    -->
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href="../assets/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href="../assets/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="72x72"
      href="../assets/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="../assets/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="60x60"
      href="../assets/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="120x120"
      href="../assets/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="76x76"
      href="../assets/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href="../assets/apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="../assets/favicon-196x196.png"
      sizes="196x196"
    />
    <link
      rel="icon"
      type="image/png"
      href="../assets/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/png"
      href="../assets/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="../assets/favicon-16x16.png"
      sizes="16x16"
    />
    <link
      rel="icon"
      type="image/png"
      href="../assets/favicon-128.png"
      sizes="128x128"
    />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

    <!--    Facebook metas   -->

    <meta property="og:url" content="http://dactrtr.rocks" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Dactrtr Blog" />
    <meta
      property="og:description"
      content="With great power comes a great blog, I don't have any power so this blog is kinda regular"
    />
    <meta property="og:image" content="https://i.imgur.com/dGSE8SA.jpg" />

    <link
      rel="stylesheet"
      type="text/css"
      href="{{ site.baseurl }}/style.css"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="{{ site.name }}"
      href="{{ site.baseurl }}/feed.xml"
    />
  </head>

  <body class="landing-dactrtr">
    {% include portfolio-header.html %}
    <div id="main" role="main" class="container">{{ content }}</div>
    <footer class="wrapper-footer">
      <div class="container">
        <footer class="footer">Dactrtr @ 2015</footer>
      </div>
    </footer>
    {% include analytics.html %}
  </body>
</html>
```

- [ ] **Step 2: Build and verify**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build 2>&1 | tail -5
```

Expected: build completes with no errors. Warnings about Sass deprecation are pre-existing and can be ignored.

- [ ] **Step 3: Verify `default.html` is untouched**

```bash
grep "portfolio-header" /Users/dactrtr-mini/Documents/blog/dactrtr.github.io/_layouts/default.html
```

Expected: no output (the include must NOT appear in `default.html`).

---

### Task 3: Create `_layouts/portfolio-full.html`

**Files:**
- Create: `_layouts/portfolio-full.html`

Standalone layout for individual portfolio project pages. No site header. Contains: back button linking to `/`, full-width content wrapper, custom contact footer with data from `_config.yml`.

- [ ] **Step 1: Create the file**

Create `_layouts/portfolio-full.html` with exactly this content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      {% if page.title %}{{ page.title }} {% endif %}{{ site.name }}
    </title>

    <meta name="author" content=" = D A C T R T R = " />
    <meta name="description" content="{{ site.description }}" />
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link
      rel="icon"
      type="image/png"
      href="{{ site.baseurl }}/assets/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="{{ site.baseurl }}/style.css"
    />
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

- [ ] **Step 2: Build and verify**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build 2>&1 | tail -5
```

Expected: clean build, no errors.

---

### Task 4: Switch `index.html` to `portfolio-default` layout

**Files:**
- Modify: `index.html` (front matter only — line 2)

- [ ] **Step 1: Update the front matter**

In `index.html`, change line 2 from:

```yaml
layout: default
```

to:

```yaml
layout: portfolio-default
```

The rest of the file stays exactly as is.

- [ ] **Step 2: Build and verify the homepage uses the new layout**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build && grep -c "portfolio-header\|main-header" _site/index.html
```

Expected: a number greater than 0 (the header HTML from the include appears in the rendered page).

- [ ] **Step 3: Verify the blog is unaffected**

```bash
grep "layout" /Users/dactrtr-mini/Documents/blog/dactrtr.github.io/blog.md
```

Expected output: `layout: default` (blog still uses `default.html`, unchanged).

---

### Task 5: Switch `portfolio-item.html` to `portfolio-full` layout

**Files:**
- Modify: `_layouts/portfolio-item.html` (front matter only — line 2)

- [ ] **Step 1: Update the front matter**

In `_layouts/portfolio-item.html`, change line 2 from:

```yaml
layout: default
```

to:

```yaml
layout: portfolio-full
```

The rest of the file stays exactly as is.

- [ ] **Step 2: Build and verify project detail pages use the new layout**

```bash
cd /Users/dactrtr-mini/Documents/blog/dactrtr.github.io && jekyll build && grep -c "portfolio-back\|portfolio-footer" _site/portfolio/example-featured/index.html
```

Expected: `2` (both the back button and footer class appear in the rendered page).

- [ ] **Step 3: Verify the back button links to `/`**

```bash
grep "portfolio-back" _site/portfolio/example-featured/index.html
```

Expected output contains: `href="/"`

- [ ] **Step 4: Verify footer contact data rendered correctly**

```bash
grep -A8 "portfolio-footer" _site/portfolio/example-featured/index.html
```

Expected output contains: `dactrtr@gmail.com`, `github.com/dactrtr`, `instagram`, `behance`.

- [ ] **Step 5: Verify the site header (bio/illustration) does NOT appear on project pages**

```bash
grep "main-header" _site/portfolio/example-featured/index.html
```

Expected: no output (the site header must be absent from project detail pages).
