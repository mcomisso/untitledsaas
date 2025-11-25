# Content Creator Marketing

Landing page for a platform that helps content creators grow their streams, videos, and shorts with AI-powered insights and algorithmic strategies.

## Features

- Hero section with waitlist signup form
- Features showcase (Analytics, Algorithmic Insights, Growth Strategies, etc.)
- Consultation booking section (Discovery Call & Strategy Session)
- Fully responsive design
- Dark theme with neon green/orange accent colors

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to your repository **Settings** > **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be available at `https://<username>.github.io/<repository-name>/`

### Manual Deployment

Simply upload `index.html` and `styles.css` to any static hosting service (Netlify, Vercel, Cloudflare Pages, etc.).

## Local Development

Open `index.html` directly in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve
```

Then visit `http://localhost:8000`

## Customization

- **Colors**: Edit CSS variables in `styles.css` under `:root`
- **Content**: Edit text directly in `index.html`
- **Form handling**: The waitlist form currently shows an alert. Connect it to your backend or form service (Formspree, Netlify Forms, etc.)

## License

All rights reserved.
