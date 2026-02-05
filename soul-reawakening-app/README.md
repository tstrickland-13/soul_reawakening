# Soul Reawakening

A modern, beautiful website for Soul Reawakening — holistic coaching and spiritual wellness with Makini C. Campbell.

## Tech Stack

- **React 19** with Vite
- **React Router** for client-side routing
- **React Helmet Async** for SEO
- **Netlify** for hosting with form handling

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Production Build

```bash
npm run build
```

## Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repo to Netlify
3. Netlify will auto-deploy on every push

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Run `npm run build`
2. Drag the `dist` folder to Netlify Drop

## Configuration

### Site Content

Edit files in `src/config/`:

- `site.js` — Basic info, contact, social links
- `content.js` — Services, blog posts, testimonials
- `tokens.js` — Colors, fonts, spacing

### Netlify Forms

Contact and newsletter forms are pre-configured for Netlify Forms. They work automatically when deployed to Netlify.

### SEO

Each page has SEO configured via React Helmet. Update `src/config/site.js` with your production URL before deploying.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Navigation, Footer, Layout
│   ├── forms/        # Contact & Newsletter forms
│   └── SEO.jsx       # Meta tags component
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── config/           # Site configuration
│   ├── site.js       # Site info & social links
│   ├── content.js    # Content data
│   └── tokens.js     # Design tokens
└── App.jsx           # Router setup
```

## Customization

### Adding Images

Replace placeholder images by:

1. Add images to `public/images/`
2. Update `PlaceholderImg` components with real `src` props

### Updating Colors

Edit `src/config/tokens.js` to change the color palette.

### Adding Blog Posts

Add new posts to the `blogPosts` array in `src/config/content.js`.

## License

Private — Soul Reawakening © 2026
