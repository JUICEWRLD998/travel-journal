# Travel Journal

A modern, responsive React web application for documenting travel experiences with an animated image carousel and clean, mobile-first design.

## Project Overview

This travel journal showcases destinations with:
- **Animated image carousels** — Stacked, auto-rotating images for each location using CSS keyframe animations
- **Data-driven architecture** — Centralized travel entries in `src/data.js` mapped to reusable React components
- **Fully responsive layout** — Optimized for mobile, tablet, and desktop with CSS clamp() and media queries
- **Clean typography** — Inter font from Google Fonts with carefully tuned sizes and spacing across breakpoints

## Features

- 📍 Location cards with Google Maps integration
- 🖼️ Smooth slideshow animations (5 images per destination, 18s rotation)
- 📱 Mobile-first responsive design (header, images, and text scale intelligently)
- 🎨 Professional styling with shadowed cards, rounded corners, and accent colors
- 🔗 Underlined map links for accessibility

## Tech Stack

- **React** — Component-based UI
- **Vite** — Fast development server and build tool
- **CSS3** — Custom animations, Flexbox, clamp() for fluid sizing
- **Google Fonts** — Inter typeface

## Project Structure

```
Travel-journal/
├── public/
│   ├── japan/          # Tokyo images
│   ├── australia/      # Australia images
│   ├── norway/         # Norway images
│   └── tour-globe.png  # Header logo
├── src/
│   ├── component/
│   │   ├── header.jsx
│   │   └── journal-entry.jsx
│   ├── App.jsx         # Main app wrapper
│   ├── data.js         # Travel entries data
│   ├── index.css       # Global styles & animations
│   └── index.jsx       # React mount point
└── package.json
```

## Getting Started

### Installation

```bash
cd Travel-journal/Travel-journal
npm install
```

### Development

```bash
npm run dev
```

Then open the local URL (usually `http://localhost:5173`) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Responsive Breakpoints

- **Mobile** (≤640px) — Stacked layout, smaller header, optimized text sizes
- **Tablet/Desktop** (641-1199px) — Side-by-side layout with clamp() for fluid media sizing
- **Large Desktop** (≥1200px) — Increased spacing, larger images (380×250px), enhanced typography

## Data Structure

Each entry in `src/data.js`:

```js
{
  id: 1,
  images: ['/japan/Tokyo.jpg', '/japan/fuji.jpg', ...],
  location: 'JAPAN',
  title: 'Mount Fuji',
  date: 'January 12, 2021 - January 24, 2021',
  description: <p>Description with <strong>bold dates</strong></p>,
  mapLink: 'https://maps.google.com/...'
}
```

## Key Components

- **Header** — Site branding with globe icon and title
- **JournalEntry** — Reusable card for location, images, dates, and description
- **App** — Maps data entries to `<JournalEntry />` components

## Future Enhancements

- Manual carousel controls (prev/next buttons)
- Pagination for large entry lists
- Admin UI for adding/editing entries
- Dark mode toggle
- Export entries as PDF

---

Built with ❤️ using React + Vite
