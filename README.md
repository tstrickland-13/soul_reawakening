# Soul Reawakening

A modern website for **Soul Reawakening — A Life in Motion** with Makini C. Campbell. Holistic coaching, consulting, and intentional living.

## Tech Stack

- **React 19** with Vite
- **React Router** for client-side routing
- **React Helmet Async** for SEO
- **Netlify** for hosting, serverless functions, and form handling

## Quick Start

```bash
cd soul-reawakening-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Deployment

This project is configured for automatic Netlify deployment. Connect the repo to Netlify and it will deploy on every push to `main`.

### Build Settings (auto-configured via `netlify.toml`)

| Setting | Value |
|---------|-------|
| Base directory | `soul-reawakening-app` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `netlify/functions` |
| Node version | 20 |

### Environment Variables

Set these in the Netlify dashboard under **Site settings > Environment variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `YOUTUBE_API_KEY` | Yes | YouTube Data API v3 key for fetching playlist videos |

## Project Structure

```
soul-reawakening/
├── netlify.toml                    # Netlify deployment config
└── soul-reawakening-app/           # Main application
    ├── netlify/
    │   └── functions/              # Netlify serverless functions
    │       └── youtube-videos.js   # Fetches videos from YouTube playlist
    ├── public/                     # Static assets & images
    ├── src/
    │   ├── components/
    │   │   ├── ui/                 # Reusable UI components
    │   │   ├── layout/             # Navigation, Footer, Layout
    │   │   ├── forms/              # Contact & Newsletter forms
    │   │   └── SEO.jsx             # Meta tags component
    │   ├── pages/                  # Page components
    │   │   ├── HomePage.jsx
    │   │   ├── AboutPage.jsx
    │   │   ├── ShopPage.jsx        # Offerings & services
    │   │   ├── VideosPage.jsx      # YouTube integration
    │   │   ├── BookingPage.jsx     # Calendly integration
    │   │   ├── ContactPage.jsx
    │   │   └── LinksPage.jsx       # Linktree replacement
    │   ├── hooks/                  # Custom React hooks
    │   │   ├── useScrollPosition.js
    │   │   ├── useScrollReveal.js
    │   │   └── useYouTubeVideos.js # Fetches videos via Netlify function
    │   └── config/                 # Site configuration
    │       ├── site.js             # Site info, owner bio, social links
    │       ├── content.js          # Offerings, testimonials, content data
    │       └── tokens.js           # Design tokens (colors, fonts, spacing)
    └── package.json
```

## Configuration

### Site Content

Edit files in `soul-reawakening-app/src/config/`:

- **`site.js`** — Site name, tagline, location, social links, owner bio, focus areas, signature quote
- **`content.js`** — Offerings/services, testimonials, guiding principles, target audience, quick links, featured videos
- **`tokens.js`** — Colors, fonts, breakpoints, spacing

### Offerings

Update the `services` array in `content.js`. Each offering has a title, subtitle, category (`coaching`, `workshops`, or `retreats`), description, `bestFor` list, and price.

### YouTube Videos

Videos are pulled automatically from the YouTube playlist defined in `site.js`. The Netlify function `youtube-videos.js` calls the YouTube Data API using the `YOUTUBE_API_KEY` environment variable. Videos appear on the Videos page with real thumbnails and titles.

To add featured individual videos manually, add entries to the `featuredVideos` array in `content.js`:

```javascript
{ id: 1, title: "Episode Title", label: "Episode 1", youtubeId: "VIDEO_ID" }
```

### Adding Images

Add images to `public/` and reference them with `src` props on `PlaceholderImg` components:

```jsx
<PlaceholderImg src="/your-image.png" alt="Description" height="520px" />
```

### Netlify Forms

Contact and newsletter forms are pre-configured for Netlify Forms. They work automatically when deployed.

### SEO

Each page has meta tags configured via React Helmet using `useLocation()` for accurate canonical URLs. Update `siteConfig.siteUrl` in `site.js` with your production URL.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, about preview, focus areas, approach, testimonials, newsletter |
| `/about` | About | Full bio, guiding principles |
| `/shop` | Offerings | Coaching, workshops, retreats with filtering |
| `/videos` | Videos | YouTube playlist embed + individual video grid |
| `/booking` | Booking | Calendly integration for discovery conversations |
| `/contact` | Contact | Contact form + info |
| `/links` | Links | Linktree-style quick links page |

## License

Private — Soul Reawakening © 2026
