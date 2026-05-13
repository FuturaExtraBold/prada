# Prada Interaction Study

## Framing

This project is a polished frontend interaction study inspired by IMDb Premium
Title Pages (PTP/PTP+) and title takeovers.

It is specifically inspired by the "Devil Wears Prada 2" IMDb takeover
experience.

This project is:

- An interaction, motion, and frontend systems study
- A demonstration of production-quality implementation craft
- Focused on transitions, polish, and frontend implementation quality

This project is not:

- A pixel-perfect IMDb clone
- A redesign of IMDb
- An attempt to fully rebuild every content surface

Content areas are intentionally simplified and gray-boxed where appropriate.

The goal is to show:

> Ben already understands how to build premium entertainment marketing
> experiences.

## Priorities

Prioritize:

- Polish
- Motion quality
- Performance
- Implementation clarity

Current scope note:

- Desktop-only for now
- Responsive behavior is not a priority in this pass
- Time should stay focused on the ad experience itself

Avoid:

- Giant architecture
- Unnecessary backend work
- Perfect IMDb replication
- Overly flashy effects
- Rabbit holes

## Tech Goals

- React + Vite
- GSAP for motion and transition orchestration
- Strong Lighthouse scores across performance, accessibility, and best
  practices
- Clean component structure
- Desktop-first layout
- Subtle cinematic motion and sequencing
- Production-minded frontend architecture

Current implementation note:

- Do not convert to TypeScript in this phase

## Layout Structure

1. Minimal IMDb-style header/navigation
2. Full-width cinematic background area
3. Constrained workable area inside the hero
4. Large gray-box IMDb content container below the fold
5. Vertical advertisement/video unit integrated into the content area

Current layout simplifications:

- The header is FPO and should contain only a greyed-out IMDb logo
- The ad content area is the real focus
- The lower IMDb content regions remain intentionally gray-boxed

## Visual Direction

- Premium and cinematic
- Restrained and expensive feeling
- Smooth easing and timing
- Subtle staggered reveals
- Slight parallax and background movement
- Refined hover states
- Clean typography rhythm
- Minimal gray-box placeholders for most IMDb content

## Interaction Goals

- Hero intro and load sequence
- Background image transitions
- Trailer and video panel interactions
- Smooth hover and click states
- Soft cinematic transitions instead of flashy motion
- Maintain 60fps whenever possible

Known interaction requirements for this phase:

- The vertical ad unit should show a poster frame by default
- Hovering the poster frame should replace it with video
- Clicking the entire ad area should link out, using `#` for now
- The exact opening full-page intro sequence will be handled later
- A full-page video plays before the ad experience is shown, but that is
  intentionally deferred for now

## Assets On Hand

Current asset inventory in `src/assets` includes:

- Background and layout reference images
- Title lockups and "now playing" graphics
- Gallery stills
- UI frames, pagination, close, previous, and next states
- Button hover and default states
- Vertical ad poster assets

Current asset note:

- The image library is already downloaded and sized
- The `video` directory exists and will be populated as implementation
  continues

## Implementation Notes

- Do not over-engineer this
- Keep architecture small and readable
- Focus on production-minded frontend craft
- Favor motion quality over motion quantity
- Use simplified placeholder content whenever it keeps attention on the
  interaction system
- Keep future LLM work anchored to the ad experience, not a full IMDb rebuild
