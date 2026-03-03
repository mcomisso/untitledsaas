# Landing Page Streamline Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Streamline the 12-section Forj Intel landing page into a focused 6-section page that drives free discovery call bookings.

**Architecture:** Single static HTML page rewrite. Remove 7 sections, rewrite hero, add new call-options section with two equal cards. Clean up CSS for removed sections.

**Tech Stack:** Vanilla HTML, CSS, JavaScript (no build tools)

---

### Task 1: Commit untracked image assets

**Files:**
- Stage: `logo_notext_web.png`, `apple-touch-icon.png`, `favicon-192.png`, `favicon.ico`, `og-image.png`

**Step 1: Stage and commit image files**

```bash
git add logo_notext_web.png apple-touch-icon.png favicon-192.png favicon.ico og-image.png
git commit -m "chore: add image assets (logo, favicons, og-image)"
```

This fixes the logo not loading on the deployed site.

---

### Task 2: Rewrite index.html with streamlined structure

**Files:**
- Modify: `index.html` (full rewrite of `<body>` content)

The new HTML structure has 6 sections:

**Step 1: Rewrite the hero section**

Replace the current hero (lines 70-178) with:
- Logo image (keep `logo_notext_web.png`)
- Headline: "Grow Your YouTube Channel with Intelligence + Guidance"
- Subtext: "Analytics that show what's working. Expert coaching that tells you what to do next."
- Primary CTA button: "Book Your Free 15-Min Call" linking to `#book`
- Secondary text: "or [Join the Waitlist](#waitlist)" as inline text link
- Inline waitlist form (hidden by default, toggled by the text link)
- Credibility bar: "Private Beta" + "10 years experience" (2 items, no "500+ creators")
- Remove the entire hero-visual/mock-dashboard block

**Step 2: Replace sections 2-4 with "What You Get" grid**

Remove: problem-section, solution-section, features-section (lines 183-388)

Add a compact 4-item grid section:
- Analytics icon + "Understand what's actually driving your growth"
- Trends icon + "Catch trends before they peak"
- AI Insights icon + "Personalized recommendations on what to do next"
- Expert Coaching icon + "1:1 strategy calls with real humans"

Each item is: icon (SVG) + h3 title + one-line `<p>`. No bullet lists.

**Step 3: Replace coaching section with two equal call-option cards**

Remove: coaching-section (lines 394-447)

Add new `call-options-section` with two side-by-side cards of equal visual weight:
- Left card (Discovery Call): "FREE", "15 minutes", description, "Book Free Call" button linking to `#book`
- Right card (Strategy Session): "£85", "60 minutes", description, "Book Session" button linking to `#book`

Both buttons set a URL hash or data attribute to pre-select the call type in the form.

**Step 4: Remove sections 6-11**

Delete entirely:
- how-it-works-section (lines 452-497)
- pricing-section (lines 502-626)
- transformation-section (lines 631-694)
- faq-section (lines 756-824)
- final-cta-section (lines 829-849)

**Step 5: Keep social-proof section (lines 699-751)**

Keep the 3 testimonial cards. Remove the `early-adopter-note` div.

**Step 6: Simplify the booking form**

Keep `contact-section` (lines 854-907) but:
- Update header text: "Let's Talk About Your Channel" / "15 minutes. No commitment. No pitch. Just honest feedback on your growth strategy."
- Keep form fields: Name, Email, YouTube Channel URL, Call Type dropdown, Preferred Times
- Pre-select the call type dropdown via JS based on which CTA was clicked

**Step 7: Simplify the footer**

Replace the 3-column footer grid with a single row:
- Brand (logo + "Forj Intel") + tagline
- Email link + Login link
- Copyright

**Step 8: Update navigation**

Simplify nav links to only: "What We Do" (#features), "Coaching" (#call-options), and "Book a Call" button (#book).
Mobile menu matches.

**Step 9: Update inline scripts**

- Remove FAQ accordion JS (no FAQ section)
- Remove stats counter animation (no stats)
- Update scroll reveal selectors to only target remaining elements: `.testimonial-card, .highlight-card, .call-option-card`
- Keep waitlist form submission JS
- Add JS to pre-select call type when CTA buttons are clicked

**Step 10: Verify and commit**

```bash
python3 -m http.server 8000 &
# Verify page loads at http://localhost:8000
git add index.html
git commit -m "feat: streamline landing page to focus on free call CTA"
```

---

### Task 3: Clean up styles.css

**Files:**
- Modify: `styles.css`

**Step 1: Remove CSS for deleted sections**

Delete style blocks for:
- `.problem-section`, `.pain-points-grid`, `.pain-point-card`, `.pain-icon` (~lines 829-889)
- `.solution-section`, `.solution-grid`, `.solution-card`, `.solution-plus`, `.solution-icon`, `.solution-features` (~lines 894-1010)
- `.feature-block`, `.feature-content`, `.feature-badge`, `.feature-bullets` (~lines 1013-1096)
- `.coaching-section`, `.coaching-card`, `.coaching-badge`, `.coaching-content`, `.coaching-features`, `.coaching-cta` (~lines 1100-1260)
- `.free-call-fallback`, `.fallback-*` (~lines 1211-1259)
- `.how-it-works-section`, `.steps-grid`, `.step-card`, `.step-connector`, `.step-number` (~lines 1264-1355)
- `.pricing-section`, `.pricing-grid`, `.pricing-card`, `.pricing-badge`, `.pricing-header`, `.pricing-features`, `.pricing-footer` (~lines 1356-1523)
- `.transformation-section`, `.transformation-grid`, `.transformation-card`, `.transformation-arrow`, `.transformation-list` (~lines 1526-1655)
- `.faq-section`, `.faq-container`, `.faq-item`, `.faq-question`, `.faq-answer` (~lines 1775-1848)
- `.final-cta-section`, `.final-cta-content`, `.final-cta-buttons`, `.final-cta-contact` (~lines 1850-1899)
- `.early-adopter-note`, `.early-badge` (~lines 1750-1770)
- `.hero-visual`, `.hero-mock`, `.mock-*` styles (~lines 820+, 2131+)

**Step 2: Add CSS for new call-options section**

New styles for:
- `.call-options-section` — padding, background
- `.call-options-grid` — 2-column grid, equal sizing, responsive (stack on mobile)
- `.call-option-card` — card styling matching existing theme (dark bg, amber border)
- `.call-option-card .call-type` — "FREE" / "£85" label
- `.call-option-card .call-duration` — "15 minutes" / "60 minutes"
- `.call-option-card .call-description` — body text
- Scroll reveal animation (opacity/transform transition like existing cards)

**Step 3: Add CSS for "What You Get" highlights grid**

- `.highlights-section` — padding
- `.highlights-grid` — 4-column grid, responsive (2-col on tablet, 1-col on mobile)
- `.highlight-card` — icon + text styling, compact

**Step 4: Update footer CSS**

Simplify `.footer-grid` to single-row flex layout.

**Step 5: Adjust hero CSS**

- Remove `.hero-visual`, `.hero-mock` and all mock sub-component styles
- Simplify hero layout (no longer split between text and visual)
- Center-align hero content

**Step 6: Commit**

```bash
git add styles.css
git commit -m "refactor: remove CSS for deleted sections, add call-options and highlights styles"
```

---

### Task 4: Update effects.js

**Files:**
- Modify: `effects.js`

**Step 1: Update scroll reveal selectors**

In the `ScrollGlow` constructor (line 162), update the selector:
```js
this.elements = document.querySelectorAll('.call-option-card, .testimonial-card, .highlight-card');
```

**Step 2: Commit**

```bash
git add effects.js
git commit -m "refactor: update scroll selectors for streamlined page"
```

---

### Task 5: Visual verification

**Step 1: Start local server and verify**

```bash
python3 -m http.server 8000
```

Check:
- Logo loads
- Hero displays correctly with CTA buttons
- "What You Get" grid renders 4 items
- Two call-option cards are side by side, equal weight
- Clicking either card scrolls to booking form
- Booking form works (pre-selects call type)
- Testimonials display
- Footer is minimal
- Mobile responsive (check at 375px width)
- Particle effects still work in hero

**Step 2: Final commit if any fixes needed**
