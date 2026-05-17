# Portfolio Design Spec
_Date: 2026-05-18_

## Overview

Minimalist dark portfolio with brand color accents. Two surfaces: a list/home page and individual project pages.

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `$blackestNight` | #20171f | Page background |
| `$bonedThrone` | #fbfbf7 | Primary text |
| `$blinkyPinky` | #f95ba7 | Labels, arrows, featured badge, challenge accent |
| `$cyanTyrant` | #06d2ff | Metadata, links, learnings accent |
| `$purpleBack` | #463780 | Card borders (30–40% opacity) |

## Page: Portfolio List (`index.html`)

### Featured Project Card

- Full-width card, ~220px tall
- Image fills the left ~50% as background
- Right ~50%: dark semi-opaque panel (`rgba($blackestNight, 0.92)`)
- Panel contents (top to bottom):
  - `★ FEATURED` badge in `$blinkyPinky`, 9px, letter-spacing
  - Project title, 18–20px, bold, `$bonedThrone`
  - Role · Place · Year, 11px, `$cyanTyrant`
  - Challenge description, 11px, `$bonedThrone` at 50% opacity
  - `view case study →` in `$blinkyPinky`
- Border: 1px solid `$purpleBack` at 35% opacity
- Border-radius: 4px

### Other Project Cards

- Same image-left / panel-right structure
- Shorter: ~110px tall
- Panel contents:
  - Role + Year, 9px caps, `$cyanTyrant`
  - Project title, 14px bold, `$bonedThrone`
  - Arrow `→` in `$blinkyPinky`
- No challenge description

### Page Structure

```
[Featured card — tall]
[Card]
[Card]
[Card]
...
[→ blog]
```

## Page: Individual Project (`portfolio-item.html` / `portfolio-full.html`)

### Layout

Two-column on desktop, stacked on mobile.

**Left sidebar (~200px, fixed width):**
- `← back` link, `$blinkyPinky`
- Project logo (80×80px, placeholder if empty)
- Project title, 16px bold
- Role, Place, Year — each on its own line, 12px, `$bonedThrone` at 50% opacity

**Right column (flex: 1):**
1. Screenshot full-width, border-radius 4px (placeholder if empty)
2. `CHALLENGE` section — left border 2px `$blinkyPinky`, label in `$blinkyPinky` 9px caps, body text
3. `LEARNINGS` section — left border 2px `$cyanTyrant`, label in `$cyanTyrant` 9px caps, body text
4. Post body content (`{{ content }}`)

### Mobile

- Sidebar stacks above the right column content
- Sidebar goes horizontal: logo + title + meta in a row

## Responsive Breakpoints

Uses existing mixins from `_variables.scss`:
- `< media-medium (768px)`: single column, sidebar stacks above
- `>= media-medium`: two-column layout

## Files to Create/Modify

| File | Action |
|------|--------|
| `_sass/_theme.scss` | Add all portfolio CSS under `.portfolio-landing` and `.portfolio-full` |
| `_layouts/portfolio-item.html` | No structural changes needed |
| `_layouts/portfolio-full.html` | No structural changes needed |
| `index.html` | No structural changes needed |

## Out of Scope

- Animations or transitions
- Filtering/sorting projects
- Dark/light mode toggle
- Changes to post/blog layout
