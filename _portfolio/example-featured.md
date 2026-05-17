---
layout: portfolio-item
title: DinoPirates from Outer Space VS the Evil Brocolliens from inner space
role: Game Designer & Developer
place: Tokyo, Japan
challenge: Design and ship a complete Playdate game solo — with zero prior Lua experience — under extreme hardware constraints. 400×240 px resolution, 1-bit display, and a physical crank as the primary input device. Everything from the game loop to the UI had to be rethought from scratch.
learnings: Shipping a demo at BitSummit 2025 and watching people play it for the first time was worth more than any amount of polish. Constraint-driven design — forced by a 1-bit palette and a tiny screen — led to more interesting creative decisions than open-ended tools ever had. And someone paid for it. That was unexpected.
featured: true
logo: ""
screenshot: ""
date: 2025-07-01
---

## Overview

DinoPirates from Outer Space VS the Evil Brocolliens from inner space is an indie game for the [Playdate](https://play.date/) — a tiny handheld console with a black and white screen and a physical crank. The premise came from a friend's offhand idea: dinosaurs in space, who are also pirates. That was enough.

The game is a mix of exploration and rail shooter, somewhere between *Starfox* and *Starlink*, with the absurdist energy of a project that started as a webcomic and evolved into a full development cycle spanning two years, a studio founding, a public demo, and a first sale.

<figure class="figimg">
  <div style="width:100%;height:320px;background:#A0C8F0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] Title screen — the full name fits, somehow.
  </figcaption>
</figure>

---

## Design

### Designing for 1-bit

Every design decision on the Playdate is an exercise in subtraction. There is no color. There is no alpha channel. There are pixels, and they are either on or off.

The main character changed early on from a Styracosaurus to a Triceratops — not for story reasons, but because the Triceratops reads better at the resolution the game runs at. The horns are legible at 16×16 px. The Styracosaurus spines are not. This is the kind of decision that defines 1-bit design: biological accuracy loses to pixel clarity every time.

<figure class="figimg">
  <div style="width:100%;height:280px;background:#C0F0A0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] Character evolution — from sketch to pixel art. The design went through several iterations before the Triceratops locked in as the lead.
  </figcaption>
</figure>

The enemies — the Brocolliens — follow the same logic. Their silhouette reads as broccoli. Their animations are minimal. The limited palette forces you to communicate personality through shape, proportion, and timing alone, which turns out to be a better design exercise than most.

### UI on a tiny screen

The Playdate screen is 400×240 px. That is not a typo. Designing a game UI for that canvas means every element has to earn its space. Health indicators, skill cooldowns, dialogue boxes, menus — all of it competing for a rectangle smaller than a credit card held sideways.

The in-game menu was rebuilt multiple times. The final version uses a layered approach: minimal HUD during play, expandable on demand. The crank opens and closes it — which felt gimmicky until it didn't.

<figure class="figimg">
  <div style="width:100%;height:260px;background:#F0E0A0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] In-game UI breakdown — HUD elements, menu states, and how the crank interaction maps to each.
  </figcaption>
</figure>

---

## Development

### Lua with no prior experience

The Playdate SDK runs on Lua. I had never written Lua before starting this project. The SDK is well-documented and the community is small but generous. Learning Lua through a real project — with deadlines and public commits — is a faster path than any tutorial.

The first prototype was two screens: a room full of broco-enemies to test collision, and a top-down shooter to test the rail mechanic. Neither looked like a game. Both were essential.

<figure class="figimg">
  <div style="width:100%;height:300px;background:#A0C8F0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] Early prototype — a lonely dinopirate in a room full of brocoalien rats. This is where collision and movement were figured out.
  </figcaption>
</figure>

### Toolchain

- **Pixquare** — pixel art editor for all game assets, designed with Playdate's 1-bit palette in mind
- **LDtk** — level editor, replaced a custom tool that was taking more time to maintain than to use
- **Playdate SDK** (Lua) — game logic, physics, animation
- **Love2D** — macOS port target, ported from Playdate Lua with assistance from Claude Code

### What got built

Over two years of on-and-off development, the game accumulated:

- Two distinct gameplay modes (exploration and rail shooter)
- Conditional dialogue system and NPCs
- Multiple player skills (including a shrinking mechanic)
- Pickup characters
- Credit scene
- Full in-game menu
- A working macOS port in progress

---

## BitSummit 2025

In July 2025, I brought the game to BitSummit in Kyoto — one of Japan's biggest indie game events. It was not finished. It was never going to be finished in time, and I went anyway.

Fellow Playdate developers played it. They played it for about five minutes, which is the correct amount of time for a Playdate game. They liked it. They told me to ship a demo. I shipped the demo.

<figure class="figimg">
  <div style="width:100%;height:300px;background:#F0C8F0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] BitSummit 2025 — showing the game for the first time to people who had never heard of it.
  </figcaption>
</figure>

The demo went up on itch.io without announcement. Shadow-dropped. The goal was closure — a line under a chapter that had been open for two years.

Someone bought it. Not a friend. A stranger. That was the first dollar.

---

## Learnings

**Constraints are a design tool, not a limitation.**
The 1-bit palette, the tiny screen, and the crank as primary input forced every design decision to be intentional. There was no room for decoration. Every pixel had a reason. That discipline transfers to any project.

**Ship to close, not to finish.**
The demo was never "done." Releasing it anyway — with a specific event as the deadline — created a forcing function that two years of self-imposed deadlines never had. Shipping gave the project an end, which is the only way to start the next one.

**Build your own tools last.**
The custom level editor was a mistake. It felt productive. It was a distraction. LDtk exists and is better. The time spent on internal tooling was time not spent on the game.

**Small hardware teaches fundamentals.**
Optimizing for a device with no GPU, minimal RAM, and a 168 MHz processor forces you to understand what your code is actually doing. Performance problems are visible immediately. There is no hiding behind modern hardware.

**Community validates before launch does.**
The five minutes of playtime at BitSummit told me more about the game's feel than two years of solo development. Get it in front of people early. The feedback you need is not on your hard drive.
