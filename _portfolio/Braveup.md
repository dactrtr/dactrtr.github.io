---
layout: portfolio-project
title: Brave UP!
role: UX/UI · Frontend Developer
place: United States
description: Design system evolution, D3.js data visualizations, and SwiftUI prototyping for an edtech platform.
featured: false
screenshot: "/assets/projects/braveup-main.png"
logo: "/assets/projects/braveup-logo-color.png"
images:
  - "/assets/projects/braveup-main.png"
date: 2023-09-30
intro: >
  Brave UP! is an edtech platform focused on social-emotional learning.
  I joined as UX/UI and frontend developer, working across the design system,
  data visualization layer, and mobile feasibility prototypes.
---

---

### Design System

The design system was already in place when I joined. The work was making it scale. I standardized the **SASS** module structure across the codebase, resolved inconsistencies that had accumulated across multiple contributors, and improved cross-device compatibility throughout.

<figure class="figimg">
  <img src="/assets/projects/braveup-designsystem.png" alt="braveup design system">
  <figcaption>
    [generate] Component library overview: a grid of UI components showing the system's coverage: buttons, inputs, cards, navigation, and data elements. Clean, light background.
  </figcaption>
</figure>

---

### Data Visualization

A significant part of the product was surfacing student and cohort progress through charts and dashboards. I implemented the **data visualization** layer using **D3.js**, translating complex behavioral data into readable, accessible charts for educators.

<figure class="figimg">
  <img src="/assets/projects/braveup-charts.png" alt="storymoon design system">
  <figcaption>
    D3.js educator dashboard. This chart shows how students interact with each other and who they each consider a friend. It made it easier for educators to spot kids who were a bridge between separate groups.
  </figcaption>
</figure>

---

### Design–Dev Bridge

I built **SwiftUI** components to check whether proposed designs could actually ship. If something wasn't feasible, I wanted to catch it before it hit the development sprint. I also reviewed the dev team's code directly, checking for clarity, consistency, and compatibility before it went live.

<figure class="figimg">
  <img src="/assets/projects/braveup-swift.png" alt="storymoon design system">
  <figcaption>
    SwiftUI prototype made on Swift Playgrounds, so it can be run easily in any iPad, which made it easily to test on device at different schools.
  </figcaption>
</figure>

---

## Learnings

**D3 is a rendering tool, not a design tool.**
Knowing D3 can render a chart doesn't tell you what the chart should say. I had to learn data visualization as a discipline first, separate from the library. That shaped the design more than any API decision did.

**Multi-timezone work has a real operational cost.**
The odd hours and constant availability aren't just inconvenient, they're a commitment. I'd factor that in earlier next time, before it quietly becomes the default.
