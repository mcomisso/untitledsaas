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

- **index.html**: Main landing page with hero, waitlist form, features, and pricing sections
- **styles.css**: All styling using CSS custom properties (`:root` variables for theming). Color scheme uses neon green (`--neon-green`) and orange (`--neon-orange`) accents on dark background
- **effects.js**: Visual effects module containing `ParticleSystem` class for floating background particles and cursor interaction effects. Uses canvas rendering
- **thank-you.html**: Fallback page for non-AJAX form submissions

## Key Implementation Details

- Form submissions use [FormSubmit](https://formsubmit.co) service - the form action URL contains the destination email
- The site uses scroll-triggered animations and interactive visual effects
- CSS variables in `:root` control the entire color theme
- `effects.js` is an IIFE that initializes particle effects on page load
