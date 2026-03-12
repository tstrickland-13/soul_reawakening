# Soul Reawakening App

The main application for [Soul Reawakening](https://soulreawakening.com) — A Life in Motion with Makini C. Campbell.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Production Build

```bash
npm run build
```

## Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Netlify will auto-deploy on every push

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Run `npm run build`
2. Drag the `dist` folder to Netlify Drop

### Environment Variables

Set in the Netlify dashboard (**Site settings > Environment variables**):

| Variable | Required | Description |
|----------|----------|-------------|
| `YOUTUBE_API_KEY` | Yes | YouTube Data API v3 key ([get one here](https://console.cloud.google.com/apis/credentials)) |

## Configuration

### Site Content (`src/config/`)

| File | What to edit |
|------|-------------|
| `site.js` | Site name, tagline, location, social links, owner bio, focus areas, signature quote |
| `content.js` | Offerings, testimonials, guiding principles, target audience, quick links |
| `tokens.js` | Colors, fonts, breakpoints, spacing |

### Offerings

Update the `services` array in `content.js`. Each offering supports:

- `title`, `subtitle` — Display name and tagline
- `category` — One of `coaching`, `workshops`, `retreats` (used for filtering)
- `description` — Full description text
- `bestFor` — Array of bullet points (optional)
- `price` — Price text displayed to visitors

### YouTube Integration

Videos are fetched automatically from the playlist configured in `site.js` via a Netlify serverless function (`netlify/functions/youtube-videos.js`). This requires a `YOUTUBE_API_KEY` environment variable.

The function fetches playlist items from the YouTube Data API v3, extracts video IDs, titles, and thumbnails, and returns them as JSON. Results are cached for 1 hour.

To feature individual videos manually (in addition to or instead of the API), add entries to `featuredVideos` in `content.js`:

```javascript
export const featuredVideos = [
  { id: 1, title: "Episode Title", label: "Episode 1", youtubeId: "dQw4w9WgXcQ" },
];
```

### Images

Place images in `public/` and use them with the `PlaceholderImg` component:

```jsx
<PlaceholderImg src="/my-image.png" alt="Description" height="520px" />
```

### Forms

Contact and newsletter forms use Netlify Forms — no backend setup needed. They work automatically when deployed to Netlify.

### SEO

Each page sets meta tags via React Helmet Async. Canonical URLs use `useLocation()` for per-page accuracy. Open Graph images use absolute URLs. Update `siteConfig.siteUrl` in `site.js` before deploying.

## Project Structure

```
src/
├── components/
│   ├── ui/             # Button, Container, Typography, PlaceholderImg, etc.
│   ├── layout/         # Navigation, Footer, Layout wrapper
│   ├── forms/          # ContactForm, NewsletterForm
│   └── SEO.jsx         # Meta tags component
├── pages/              # Route-level page components
├── hooks/              # useScrollPosition, useScrollReveal, useYouTubeVideos
├── config/
│   ├── site.js         # Site & owner configuration
│   ├── content.js      # All content data
│   └── tokens.js       # Design tokens
└── App.jsx             # Router setup

netlify/
└── functions/
    └── youtube-videos.js   # Serverless function for YouTube API
```

## License

Private — Soul Reawakening © 2026
