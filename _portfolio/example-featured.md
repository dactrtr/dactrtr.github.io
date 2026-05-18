---
layout: portfolio-item
title: DinoPirates from Inner Space
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

DinoPirates from Inner Space is an indie game for the [Playdate](https://play.date/) — a tiny handheld console with a black and white screen and a physical crank. The premise came from a friend's offhand idea: dinosaurs in space, who are also pirates. That was enough.

A solo project across design, code, and art — over 900 commits and around 150 Lua source files. The game combines four distinct gameplay modes into a single cohesive experience: top-down dungeon exploration, rhythm-based combat, a side-scrolling space shooter, and an accelerometer-driven cockpit puzzle.

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
- **LDtk** — level editor for room geometry and layout
- **LevelGenerator** — custom SwiftUI tool built to handle scripting, dialog, triggers, and NPCs — everything LDtk doesn't cover
- **Playdate SDK** (Lua) — game logic, physics, animation
- **Love2D** — macOS port target

### What got built

- Four distinct gameplay modes: dungeon exploration, rhythm combat, space shooter, and accelerometer-driven cockpit puzzle
- Conditional dialogue system and NPCs
- Multiple player skills (including a shrinking mechanic)
- Pickup characters
- Credit scene
- Full in-game menu
- A working macOS port in progress

---

## Engineering

### "Time Moves When You Move"

Enemies and NPCs only run their AI when the player acts. The decision was driven by two constraints at once: maintaining the game's turn-based feel, and keeping CPU usage minimal on a device with no GPU and a 168 MHz processor. Preserving that contract consistently across every mechanic — combat transitions, hole falls, sliding, dash, projectiles — without edge cases breaking it was one of the most persistent engineering challenges throughout the project.

### Rhythm Combat System

Touching an enemy triggers a full rhythm encounter: button prompts scroll toward a hit zone, the player presses the matching input in time, and a balance bar shifts toward a win or lose threshold based on accuracy. Difficulty is determined by a probabilistic weighted roll across three player stats — sanity counter, power level, and calories burned — producing organic difficulty escalation without hardcoded curves. Each of the four enemy tiers runs at a higher BPM with more simultaneous prompts, scaling from 4 buttons at 16 BPM up to 12 buttons at 32 BPM.

### LevelGenerator

Placing enemies, props, and room connections by hand in raw JSON was unsustainable. LevelGenerator started as a simple SwiftUI map canvas — drag items onto a grid, configure four-directional doors, export — and grew to meet each gap as it appeared: first dialog scripts with their sequences, then a conditional script system that evaluates player state at runtime, then a full trigger hierarchy, then NPC entities with their own script references.

The result is a cross-platform SwiftUI app (iOS + macOS) built entirely on first-party Apple frameworks. A single observable store owns all levels, scripts, triggers, and NPCs, persists them to UserDefaults, and exposes stable UUID-based bindings so the UI never goes stale on index shifts. The export layer generates both JSON for level data and Lua tables for the dialog engine — the same format the game reads directly, with no conversion step between design and runtime.

<figure class="figimg">
  <div style="width:100%;height:300px;background:#F0C8F0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] LevelGenerator — the canvas, script editor, and trigger hierarchy side by side.
  </figcaption>
</figure>

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

The demo went up on itch.io without announcement. Shadow-dropped. The goal was closure — a line under a chapter that had been open for too long.

Someone bought it. Not a friend. A stranger. That was the first dollar.

---

## Learnings

**Constraints are a design tool, not a limitation.**
The 1-bit palette, the tiny screen, and the crank as primary input forced every design decision to be intentional. There was no room for decoration. Every pixel had a reason. That discipline transfers to any project.

**Ship to close, not to finish.**
The demo was never "done." Releasing it anyway — with a specific event as the deadline — created a forcing function that self-imposed deadlines never had. Shipping gave the project an end, which is the only way to start the next one.

**Know when to build and when to adopt.**
The first custom level editor was a mistake — LDtk exists and is better. Replacing it saved months. LevelGenerator fills a different gap: game-specific scripting, conditional dialog logic, and direct Lua export that no off-the-shelf tool provides. The distinction is whether a better alternative already exists.

**Small hardware teaches fundamentals.**
Optimizing for a device with no GPU, minimal RAM, and a 168 MHz processor forces you to understand what your code is actually doing. Performance problems are visible immediately. There is no hiding behind modern hardware.

**Community validates before launch does.**
The five minutes of playtime at BitSummit told me more about the game's feel than any amount of solo development. Get it in front of people early. The feedback you need is not on your hard drive.
