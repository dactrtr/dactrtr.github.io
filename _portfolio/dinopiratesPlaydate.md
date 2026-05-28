---
layout: portfolio-item
title: Dinopirates from Inner Space
role: Game Designer · Developer · Art Director
place: Tokyo, Japan
challenge: "Build a game universe across two distinct platforms from scratch: a hardware-constrained 1-bit Playdate game and a commercial action roguelike for Steam, as sole designer, developer, and art director on both. Each version required owning a completely different part of the stack under completely different constraints."
learnings: Shipping a demo at BitSummit 2025 and watching people play it for the first time was worth more than any amount of polish. Constraint-driven design, forced by a 1-bit palette, a tiny screen, or a rogue progression arc, led to more interesting decisions than open-ended tools ever had. And someone paid for it. That was unexpected.
featured: true
logo: "/assets/projects/icon-playdate.png"
challenge_icon: "/assets/challenge.png"
screenshot: "/assets/projects/dp-main.png"
description: ""
date: 2025-07-01
toolchain:
- "Pixquare: 1-bit pixel art"
- "LDtk: level editor"
- "LevelGenerator: custom SwiftUI tool"
- "Playdate SDK (Lua)"
- "Unity: roguelike version"
- "Love2D: macOS port"
---

## Overview

Dinopirates from Inner Space is a game universe built around one premise: dinosaurs in space, who are also pirates. That premise has produced two distinct games on two distinct platforms, each with its own design language, constraints, and goals.

The Playdate version is a solo indie adventure game: 900+ commits, 150 **Lua** source files, four gameplay modes, and a demo shipped at BitSummit 2025 in Kyoto.

The **Unity** version is a commercial action roguelike in development for Steam, built with a team in Chile. TriceraTreasure Tom, a disgraced Dinopirate demoted to janitor, fights his way back to captaincy through the Inner Space. My contribution was art direction, character design, and UI, not the engineering.

Both games share the same IP. The role and the constraints are different on each.

---

## Playdate

### Designing for 1-bit

Every design decision on the Playdate is an exercise in subtraction. There is no color. There is no alpha channel. There are pixels, and they are either on or off.

The main character changed early on from a Styracosaurus to a Triceratops, not for story reasons, but because the Triceratops reads better at the resolution the game runs at. The horns are legible at 16×16 px. The Styracosaurus spines are not. This is the kind of decision that defines 1-bit design: biological accuracy loses to pixel clarity every time.

<figure class="figimg">
  <img src="/assets/projects/dp-design.png" alt="braveup design system">
  <figcaption>
    Character evolution, from sketch to pixel art. The design went through several iterations before the Triceratops locked in as the lead.
  </figcaption>
</figure>

The Brocolliens follow the same logic. Their silhouette reads as broccoli. Their animations are minimal. The limited palette forces you to communicate personality through shape, proportion, and timing alone, which turns out to be a better design exercise than most.

### UI on a tiny screen

The Playdate screen is 400×240 px. That is not a typo. Designing a game UI for that canvas means every element has to earn its space. Health indicators, skill cooldowns, dialogue boxes, menus, all competing for a rectangle smaller than a credit card held sideways.

The in-game menu was rebuilt multiple times. The final version uses a layered approach: minimal HUD during play, expandable on demand. A single button opens and closes it. The challenge was making it feel fast enough that players didn't avoid using it.

<figure class="figimg">
  <img src="/assets/projects/dp-ui.png" alt="braveup design system">
  <figcaption>
    With such a tiny screen most of the UI had to relay in animations to make it pop in a small black and white space, while staying minimal as posible to maintain the screen real state for the game.
  </figcaption>
</figure>

### Engineering

**"Time Moves When You Move"**

Enemies and NPCs only run their AI when the player acts. The decision was driven by two constraints at once: maintaining the game's turn-based feel, and keeping CPU usage minimal on a device with no GPU and a 168 MHz processor. Preserving that contract consistently across every mechanic (combat transitions, hole falls, sliding, dash, projectiles) without edge cases breaking it was one of the most persistent engineering challenges throughout the project.

**Rhythm Combat System**

Touching an enemy triggers a full rhythm encounter: button prompts scroll toward a hit zone, the player presses the matching input in time, and a balance bar shifts toward a win or lose threshold based on accuracy. Difficulty is determined by a probabilistic weighted roll across three player stats (sanity counter, power level, and calories burned), producing organic difficulty escalation without hardcoded curves. Each of the four enemy tiers runs at a higher BPM with more simultaneous prompts, scaling from 4 buttons at 16 BPM up to 12 buttons at 32 BPM.

**LevelGenerator**

Placing enemies, props, and room connections by hand in raw **Lua** was unsustainable. LevelGenerator started as a simple **SwiftUI** map canvas, where you drag items onto a grid, configure four-directional doors, and export. But the real gap it filled was elsewhere: dialog, scripting, and triggers were things the game's own code couldn't absorb cleanly from **LDtk**'s output. The tool grew to meet each need: first dialog scripts with their sequences, then a conditional script system that evaluates player state at runtime, then a full trigger hierarchy, then NPC entities with their own script references.

The result is a cross-platform **SwiftUI** app (**iOS** + **macOS**) built entirely on first-party Apple frameworks. A single observable store owns all levels, scripts, triggers, and NPCs, and exposes stable UUID-based bindings so the UI never goes stale on index shifts. The export layer generates **Lua** tables the dialog engine reads directly, with no conversion step between design and runtime.

<figure class="figimg">
  <img src="/assets/projects/dp-level.png" alt="braveup design system">
  <figcaption>
    LevelGenerator, a vibe coded tool to create levels, that later was replaced for LDTK and refactored to be the tool to create dialogues in the game.
  </figcaption>
</figure>

### BitSummit 2025

In July 2025, I brought the game to BitSummit in Kyoto, one of Japan's biggest indie game events. It was not finished. It was never going to be finished in time, and I went anyway.

Fellow Playdate developers played it. They played it for about five minutes, which is the correct amount of time for a Playdate game. They liked it. They told me to ship a demo. I shipped the demo.

<!-- <figure class="figimg">
  <div style="width:100%;height:300px;background:#F0C8F0;border-radius:4px;"></div>
  <figcaption>
    [placeholder] BitSummit 2025: showing the game for the first time to people who had never heard of it.
  </figcaption>
</figure> -->

The demo went up on itch.io without announcement. Shadow-dropped. The goal was closure, a line under a chapter that had been open for too long.

Someone bought it. Not a friend. A stranger. That was the first dollar.

---

## Unity / Steam

The Steam version is a different game built on the same universe, developed by a team in Chile. TriceraTreasure Tom (TTT) is a disgraced Dinopirate captain demoted to janitor after an alien invasion destroyed his crew. The game is a top-down action roguelike: each run builds a different loadout from paleolithic weapons and dino-tech, permanent progression carries between runs, and the arc climbs from janitor back to captain.

My role on this version was art direction, character design, and UI, not engineering.

### Art Direction

The visual tone is 90s action cartoon: loud, committed, absurdist without losing narrative stakes. Where the Playdate version communicates entirely through shape and timing, the **Unity** version has color, animation, and full character expression. The constraint flipped: instead of reducing to the minimum readable form, the challenge was maintaining a coherent identity across a wide range of assets, enemies, and environments without it dissolving into noise.

<figure class="figimg">
 <img src="/assets/projects/dp-guide.png" alt="braveup design system">
  <figcaption>
    Art direction sheet. The universe is a mix of 90s cartoon style with a touch of Street art, such as Graffiti and Sticker art.
  </figcaption>
</figure>

<!-- ### Character Design

TTT is the throughline of the entire IP, the same character read at 16×16 px on Playdate and at full resolution in Unity. Designing him to work at both scales required the same principle as the original 1-bit work: the read has to be immediate. The Brocolites, plant-creature enemies, follow the same logic. Silhouette first, detail second.

<figure class="figimg">
  <img src="/assets/projects/dp-guide.png" alt="braveup design system">
  <figcaption>
    [placeholder] Character sheet: TTT and a selection of Brocolite enemy variants. Show the design progression from silhouette to final art, and how the characters read at different sizes.
  </figcaption>
</figure> -->

### UI & World Building

The roguelike structure introduces UI complexity that doesn't exist in the Playdate version: run summary screens, build selection, crew management, progression tracking. Each screen had to feel like part of the same pirate universe without losing clarity for a player mid-run.

The Inner Space is a sci-fi setting that explains itself through the game's fiction rather than exposition: the Dinopirate hierarchy, the alien Brocolite invasion, the mutiny arc. World building here is a design constraint, not a writing exercise. It determines what UI elements exist and what they're called.

<figure class="figimg">
 <img src="/assets/projects/dp-screens.png" alt="braveup design system">
  <figcaption>
    UI screens. Beta release screens, since this is a work in progress most of this screens are changing weekly depending on user feedback.
  </figcaption>
</figure>

---

## Learnings

**Constraints are a design tool, not a limitation.**
The 1-bit palette, the tiny screen, and the crank as primary input forced every design decision to be intentional. No room for decoration. Every pixel had a reason. That discipline transfers directly to the **Unity** version, and to any project.

**Ship to close, not to finish.**
The Playdate demo was never "done." Releasing it anyway, with BitSummit as the deadline, created a forcing function that self-imposed deadlines never had. Shipping gave the project an end, which is the only way to start the next one.

**Know when to build and when to adopt.**
The first custom level editor was a mistake. **LDtk** exists and is better. Replacing it saved months. LevelGenerator fills a different gap: game-specific scripting, conditional dialog logic, and direct **Lua** export that no off-the-shelf tool provides. The distinction is whether a better alternative already exists.

**Same IP, different discipline.**
Designing for Playdate and designing for Steam are not the same job. The Playdate version is an engineering and constraint problem. The **Unity** version is an art direction and systems problem. Owning both made each one sharper.

**Community validates before launch does.**
The five minutes of playtime at BitSummit told me more about the game's feel than any amount of solo development. Get it in front of people early. The feedback you need is not on your hard drive.
