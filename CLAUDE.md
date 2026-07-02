# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for Forj (forj.cloud) - a platform helping streamers and content creators grow with AI-powered analytics. Built with vanilla HTML, CSS, and JavaScript (no build tools or package managers).

## Development Commands

```bash
# Start local server (Python)
python3 -m http.server 8000

# Start local server (Node.js)
npx serve

# Then visit http://localhost:8000
```

No build, lint, or test commands - this is a static site that runs directly in the browser.

## Architecture

- **index.html**: Main landing page with hero (call CTA + platform waitlist), highlights, topics, platform feature list, call options, booking form, and testimonials sections
- **styles.css**: All styling using CSS custom properties (`:root` variables for theming). Carbon-dark background (`--brand-charcoal`, hue ~225) with a single signal orange (`--brand-orange` #FF5C00, bright `--brand-orange-bright` #FF7A2E for hovers/glows, deep `--brand-ember` #D94A00 for gradient ends). One hue only — green/red are functional (success/error), never decorative. DM Sans for all headings and body; Qaranta is reserved for the wordmark (nav logo, hero brand name, footer). Keep dark surfaces cold — warm darks mixed with orange read as brown
- **effects.js**: Visual effects module containing `ParticleSystem` class for floating background particles and cursor interaction effects. Uses canvas rendering
- **thank-you.html**: Fallback page for non-AJAX form submissions
- **themes.js** and **effects.min.js** are not referenced by any page (legacy files)

## Key Implementation Details

- Form submissions use [FormSubmit](https://formsubmit.co) service - the form action URL contains the destination email
- Scroll-reveal animations are progressive enhancement: cards are visible by default; an IntersectionObserver adds `.will-reveal`/`.revealed` classes, and is skipped entirely for `prefers-reduced-motion`
- CSS variables in `:root` control the entire color theme
- `effects.js` is an IIFE that initializes particle effects on page load
