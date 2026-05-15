# CLAUDE.md — Project Context

## What This Is
An IMDb cornerstone/expandable ad unit for *The Devil Wears Prada 2*. Built as a portfolio/interview piece demonstrating premium ad interaction design. React + Vite, desktop-only, no TypeScript in this phase.

## Ad Canvas
- Full iframe: **1920 × 1500px**
- Visible/interactive zone: **970 × 600px** (the workable area)
- Header height: **56px** (IMDb chrome simulation)

## Component Structure
```
App
└── UIProvider
    ├── Header           — IMDb chrome simulation
    ├── CreativeStage    — main ad canvas
    │   ├── ContentArea  — hero: background image + content detail
    │   │   └── ContentDetail — poster, logo, tagline
    │   ├── Overlay      — image gallery or video (driven by activeOverlay)
    │   │   └── Gallery  — carousel (type="image") or video stub (type="video")
    │   └── ActionsLayer — absolutely positioned CTA buttons (Video/Gallery/Tickets)
    └── BigGreyBox       — IMDb page content simulation below fold
```

## State
Single context (`UIContext`): `activeOverlay: null | "video" | "gallery"`. Controls which overlay renders.

## CSS Conventions
- **BEM** enforced by stylelint — `block__element--modifier`
- All colors, transitions, z-indexes, and layout dimensions live in `:root` in `src/styles.css`
- Component CSS files live alongside their JSX — never import a parent's CSS file
- Z-index scale: `--z-chrome: 100`, `--z-actions: 70`, `--z-overlay: 50`, `--z-unit: 1`
- Brand red: `--color-prada: #cb2c30`

## SVGs
All button text and icon SVGs are inline components in `src/lib/svgs.jsx`. Single-color SVGs use `fill="currentColor"`. Multi-color SVGs use explicit `fill="var(--color-prada)"` / `fill="var(--color-dark)"` on individual paths.

## Asset Pipeline
- Source images: `src/assets/images/` (JPG/PNG, git-tracked)
- Compressed output: `src/assets/images-compressed/` (WebP at quality 80, gitignored, generated)
- Script: `npm run compress` — incremental, manifest-based, runs before dev/build automatically
- Gallery images: `gallery-01.webp` through `gallery-08.webp`
- Layout backgrounds: `layout.webp`, `layout-gallery.webp`, `layout-video.webp`

## Tooling
- Linting: ESLint with `eslint-plugin-simple-import-sort` (imports auto-sorted)
- Formatting: Prettier (80 char, double quotes, trailing commas)
- CSS linting: Stylelint with `stylelint-config-idiomatic-order`
- All checks run automatically on `npm run dev`

## Key Constraints (Ad Unit Rules)
- No external fonts (embed or system stack only)
- No third-party scripts (no GTM, analytics, etc.)
- No network requests at runtime except the Fandango ticket link
- Lighthouse scores matter — keep bundle lean

## Upcoming Work
- GSAP animations: hero intro sequence, image transitions, hover states
- Video overlay: replace stub with actual player
- Possible: Wall-E 3D demo (separate project at `~/Code/wall-e`)
