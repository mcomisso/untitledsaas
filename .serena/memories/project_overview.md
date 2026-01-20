# Forj Landing Page - Project Overview

## Purpose
Static landing page for Forj (forj.cloud) - a platform helping streamers and content creators grow with expert strategy calls and AI-powered analytics.

## Tech Stack
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Build Tools**: None (static site runs directly in browser)
- **Package Manager**: None required
- **Hosting**: Static file hosting (GitHub Pages via CNAME)

## Key Files
- `index.html` - Main landing page with hero, pricing, and features sections
- `styles.css` - All styling using CSS custom properties for theming
- `effects.js` - ParticleSystem class for visual effects (canvas-based)
- `themes.js` - Theme switching system
- `thank-you.html` - Form submission fallback page

## External Services
- FormSubmit (formsubmit.co) - Handles form submissions

## Color Scheme (Brand Palette)
| Color | Hex | Use |
|-------|-----|-----|
| Charcoal | #313534 | Text, dark elements |
| Red | #FE1204 | Accent, CTAs |
| Bright Green | #89E751 | Primary accent |
| Yellow | #FFE204 | Highlights |
| Teal Green | #2EBB90 | Secondary accent |

CSS variables in `:root` control entire theme with HSL values.
Multiple theme variants available: gaming, music, creative, IRL.

## Logo
- SVG logo: `logo_forj.svg` (flame icon + "FORJINTEL" text)
- Placed prominently in hero section and footer
- Navbar uses text "ForjIntel" with Qaranta font
