# Landing Page Editorial Split Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the static landing page into a premium editorial split-layout while preserving the requested content and conversion flow changes.

**Architecture:** Keep the site as a single static HTML page with one shared stylesheet. Update layout and hierarchy in `index.html`, then reshape the visual system in `styles.css` so each section feels intentional rather than repeated. Verify by parsing HTML and serving the page locally.

**Tech Stack:** Static HTML, CSS, small inline JavaScript, local `python3 -m http.server` verification

---

### Task 1: Recompose the hero

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1:** Convert the hero into a left/right split with smaller logo left and headline content right.

**Step 2:** Keep the waitlist permanently visible and visually secondary to the booking CTA.

**Step 3:** Add concise brand-support copy rather than more feature clutter.

### Task 2: Differentiate the middle sections

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1:** Keep the requested content order changes in `What You Get`.

**Step 2:** Make `What You Get`, `What We Help You Master`, and `Built for YouTube Creators` use distinct visual pacing.

**Step 3:** Reduce the repeated translucent-card look.

### Task 3: Strengthen the close

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1:** Turn the booking section into a two-column close with explanatory copy left and form right.

**Step 2:** Keep testimonials underneath in a subtler treatment.

**Step 3:** Preserve the revised `£30 / 30 min` strategy offer and approved wording.

### Task 4: Verify

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1:** Parse `index.html` with Python HTMLParser.

**Step 2:** Serve the page locally and fetch `/index.html`.

**Step 3:** Confirm the updated hero and booking markers appear in the served HTML.
