# Landing Page Streamline — Design

## Goal

Redesign the Forj Intel landing page from a 12-section feature-heavy page into a focused 6-section conversion page. Primary CTA: book a free 15-min discovery call. Secondary CTA: join waitlist.

## Current Problems

- 12 sections, ~1150 lines of HTML — information overload
- Free call buried as a one-liner fallback in section 5 of 12
- 8 detailed feature blocks for a product in private beta
- Pricing section for a product people can't buy yet
- Competing CTAs: waitlist vs strategy session vs free call

## New Structure

### Section 1: Hero
- Flame logo (fix deployment — commit untracked image files)
- Headline: "Grow Your YouTube Channel with Intelligence + Guidance"
- Subtext: "Analytics that show what's working. Expert coaching that tells you what to do next."
- Primary CTA: "Book Your Free 15-Min Call" (amber button)
- Secondary: "or Join the Waitlist" (text link)
- Credibility bar (below CTA): "Private Beta" + "10 years experience" (removed "500+ creators growing")
- Remove dashboard/coaching mockup from hero

### Section 2: What You Get (compact 4-item grid)
- Analytics: "Understand what's actually driving your growth"
- Trends: "Catch trends before they peak"
- AI Insights: "Personalized recommendations on what to do next"
- Expert Coaching: "1:1 strategy calls with real humans"
- Each item: icon + title + one-line description. No bullet lists.

### Section 3: Call Options (two equal cards, side by side)
- Left card — Discovery Call: FREE, 15 minutes, "See if we're a fit. No commitment, no pitch — just honest feedback." + CTA button
- Right card — Strategy Session: £85, 60 minutes, "Deep-dive into your channel with a personalized growth roadmap and action plan." + CTA button
- Both visually equal weight. Neither is a "fallback."

### Section 4: Booking Form
- Scrolled to when either CTA is clicked
- Fields: Name, Email, YouTube Channel URL (optional), Preferred Times (optional)
- Pre-select call type based on which button was clicked
- Keep "call type" dropdown with free-discovery and strategy-session options

### Section 5: Social Proof
- 2-3 compact testimonial cards (keep existing content)

### Section 6: Footer
- Simplified: brand + tagline + email + login link + copyright
- Remove 3-column link grid

## Sections Removed
- Problem (4 pain point cards)
- Solution (growth stack)
- 8 Feature blocks
- How It Works (4 steps)
- Pricing (3 tiers)
- Transformation (before/after)
- FAQ (6 questions)
- Final CTA (redundant)
- Separate Coaching section

## Additional Fixes
- Commit untracked image files (logo_notext_web.png, favicons, og-image.png)
- Keep existing visual identity: dark theme, amber/warm accents, Qaranta + DM Sans fonts, particle effects in hero
- Keep existing JS: particles, scroll animations, mobile menu, waitlist form submission

## Aesthetic Direction
No visual redesign — keep the existing dark/amber theme. The problem is content volume, not aesthetics. Maintain particle effects, button ripples, and scroll animations for retained sections. Remove CSS for deleted sections.
