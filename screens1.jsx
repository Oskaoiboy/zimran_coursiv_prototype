# Coursiv — AI Career Growth Assistant (post-purchase upsell prototype)

A mobile-first, fully clickable web prototype of a Coursiv-style post-purchase
monetization flow for a paid add-on, **AI Career Growth Assistant**.

## The flow (10 screens + exit-intent)
1. **Home after purchase** — streak, "today's task complete", current course card, certificate program
2. **Achievement** — "Great start, Olzhas!", AI Novice badge, progress
3. **Trigger banner** — "You're ready to apply AI at work"
4. **Career Growth intro** — value proposition + 4 benefit blocks
5. **Personalization quiz** — 3 questions, auto-advancing, progress indicator
6. **Loading / plan generation** — staged 29 → 64 → 100%, social proof, review
7. **Personal career summary** — opportunity, focus, 14-day plan
8. **Before / After** — comparison cards
9. **Pricing paywall** — 3 plans, money-back, secure-pay, agree checkbox
10. **Success** — activation, first workflow card

Plus an **exit-intent modal** when the user taps back on the paywall.

## Tech
- React 18 (single-page, component-per-screen architecture)
- No build step required — runs as static files
- Mock data only, **no real payment processing**
- Smooth screen transitions, animated progress, force-settled animations so
  content is never stuck hidden in a backgrounded tab

## Files
| File | Purpose |
|------|---------|
| `index.html` | Entry point — loads React + screens |
| `styles.css` | Design tokens & shared styles |
| `icons.jsx` | Minimal SVG icon set |
| `ui.jsx` | Shared chrome (status bar, buttons, progress, bottom nav, badges) |
| `screens1.jsx` | Screens 1–5 |
| `screens2.jsx` | Screens 6–10 + exit-intent modal |
| `app.jsx` | Router, state, page transitions |

## Deploy to Vercel
This is a static site — no server or build needed.

```bash
# from this folder
npx vercel
```
Or drag-and-drop the folder into the Vercel dashboard. (Framework preset: **Other**.)
