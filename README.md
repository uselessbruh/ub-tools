# ub-tools

A professional portfolio website showcasing your collection of tools and applications.

## Features

- 🌙 Dark-themed, modern UI
- 📱 Mobile-first responsive design
- 🎨 Unique, non-generic design
- ⚡ Pure React (no frameworks)
- 🔄 Separate pages for webapps and applications
- 🎯 Clean, intuitive navigation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Your Tools

Edit the data in these files:
- `src/pages/WebApps.js` - Add your webapps
- `src/pages/Apps.js` - Add your desktop applications

Each tool object should have:
```javascript
{
  id: 1,
  name: 'Tool Name',
  description: 'Brief description of what it does',
  url: 'https://link-to-tool.com',
  icon: '🎨' // Optional emoji or leave empty for initial
}
```

### Customizing Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #00d4aa; /* Change to your preferred accent color */
}
```

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.
