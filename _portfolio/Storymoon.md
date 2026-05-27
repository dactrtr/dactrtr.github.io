---
layout: portfolio-project
title: Storymoon
role: UX/UI Designer
place: Spain
description: Brand identity, UX design, and iOS app design implementation for a digital personalized children's story platform.
featured: false
screenshot: "/assets/projects/storymoon-main.png"
logo: "/assets/projects/storymoon-logo.png"
images:
  - "/assets/projects/storymoon-main.png"
date: 2025-11-30
intro: |
  Storymoon was the digital evolution of MiCuento, a personalized children's story platform where kids become the protagonists of their own stories. I owned the brand identity and UI design from scratch, ran user testing, and worked alongside the developer implementing designs directly in the iOS app.

  The core design challenge: the product has two simultaneous audiences. Parents are the buyers. They configure the story, choose the values, enter the child's name and avatar. Children are the experience. Both need to feel like the product was made for them.
---

---

### Brand Identity

The visual identity needed warmth and trust for the parents, and delight for the kids. Too playful and parents don't trust it with their child's data. Too corporate and kids don't want to engage with it. I defined the logo, color system, and typography to sit in that balance, approachable and soft but structured enough to feel like a real product.

<figure class="figimg">
  <img src="/assets/projects/storymoon-designsystem.png" alt="storymoon design system">
  <figcaption>
    Brand identity, logo creation, color palette, type scale and card example.
  </figcaption>
</figure>

---

### Personalization Flow & Testing

The product's core interaction is a creation flow: parents input a child's name, physical traits, age, and interests, and the platform generates a personalized story with the child as protagonist. Designing that flow meant making it feel effortless for a tired parent putting a kid to bed, while producing output that genuinely surprised and delighted the child.

I built the first prototype from scratch and ran **user testing** sessions. The work was mostly the loop between test and redesign: finding where parents dropped off, validating the flow, and figuring out which personalization options felt meaningful versus overwhelming.

<figure class="figimg">
  <img src="/assets/projects/storymoon-flow.png" alt="storymoon user test flow">
  <figcaption>
    Key screens of the story creation flow: character setup, preferences, and story preview.
  </figcaption>
</figure>

---

### iOS App

The app was built in **Expo Go** for iOS, with styles implemented in **Tailwind**. My role was on the design side: while the developer built views, I worked directly implementing and adjusting the UI to match what had been tested. Catching and fixing things in the actual app rather than in Figma meant fewer surprises at the end of each sprint.

<figure class="figimg">
  <img src="/assets/projects/storymoon-code.png" alt="storymoon Tailwind codebase">
  <figcaption>
    The team skipped SwiftUI and built in Expo Go instead. I worked on the UI side using Tailwind.
  </figcaption>
</figure>

---

## Learnings

**When testing exposes the core, nothing else matters.**
User testing revealed that the token and payment system, the product's monetization core, wasn't understood by users. Everything else on the backlog had to wait. If people can't figure out how to buy the thing, polish elsewhere doesn't matter.
