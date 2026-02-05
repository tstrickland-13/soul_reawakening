# Soul Reawakening

A modern website for Soul Reawakening — holistic coaching and spiritual wellness with Makini C. Campbell.

## Tech Stack

- **React 19** with Vite
- **React Router** for client-side routing
- **React Helmet Async** for SEO
- **Netlify** for hosting

## Quick Start

```bash
cd soul-reawakening-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Deployment

This project is configured for automatic Netlify deployment. Just connect the repo to Netlify and it will deploy on every push to `main`.

### Build Settings (auto-configured via `netlify.toml`)

| Setting | Value |
|---------|-------|
| Base directory | `soul-reawakening-app` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 |

## Project Structure

```
soul-reawakening/
├── netlify.toml              # Netlify deployment config
├── soul-reawakening-app/     # Main application
│   ├── src/
│   │   ├── components/       # UI, layout, and form components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   └── config/           # Site configuration
│   ├── public/               # Static assets
│   └── package.json
└── README.md
```

## Configuration

Edit files in `soul-reawakening-app/src/config/`:

- `site.js` — Site info, contact details, social links
- `content.js` — Services, blog posts, testimonials
- `tokens.js` — Colors, fonts, spacing

## License

Private — Soul Reawakening © 2026
