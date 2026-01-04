# Forj

Landing page for Forj (forj.cloud) - a platform that helps content creators grow their streams, videos, and shorts with AI-powered insights and algorithmic strategies.

## Features

- Hero section with waitlist signup form (powered by FormSubmit)
- Interactive particle effects and cursor glow
- Features showcase (Analytics, Algorithmic Insights, Growth Strategies, etc.)
- Consultation booking section (Discovery Call & Strategy Session)
- Fully responsive design
- Dark theme with neon green/orange accent colors
- Scroll-triggered animations

## Setup

### 1. Configure FormSubmit (Required)

The waitlist form uses [FormSubmit](https://formsubmit.co) for email submissions. To activate it:

1. Open `index.html`
2. Find the form action URL (around line 52):
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL@EMAIL.COM" method="POST">
   ```
3. Replace `YOUR_EMAIL@EMAIL.COM` with your actual email address
4. **First submission**: FormSubmit will send you a confirmation email. Click the link to activate your form.

**Optional FormSubmit customization** (already configured):
- `_subject`: Email subject line
- `_captcha`: Disabled for better UX (honeypot protection enabled instead)
- `_template`: Using "table" format for readable emails
- `_honey`: Hidden honeypot field for spam protection

### 2. Deploy

#### GitHub Pages

1. Push this repository to GitHub
2. Go to your repository **Settings** > **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be available at `https://<username>.github.io/<repository-name>/`

#### Other Platforms

Simply upload all files to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- Any web hosting

## Local Development

Open `index.html` directly in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve
```

Then visit `http://localhost:8000`

## File Structure

```
├── index.html        # Main landing page
├── styles.css        # All styling (CSS variables, animations, effects)
├── effects.js        # Interactive visual effects (particles, cursor, etc.)
├── thank-you.html    # Fallback thank you page (for non-AJAX submissions)
└── README.md         # This file
```

## Customization

- **Colors**: Edit CSS variables in `styles.css` under `:root`
- **Content**: Edit text directly in `index.html`
- **Effects**: Modify `effects.js` to adjust particle density, cursor behavior, etc.
- **Form fields**: Add/remove fields in the form, they'll automatically be included in the email

## License

All rights reserved.
