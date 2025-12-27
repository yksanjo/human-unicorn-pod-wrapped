# Human Unicorn Pod - 2025 Wrapped

A beautiful Spotify Wrapped-style visualization for the Human Unicorn Pod, featuring all the key metrics and highlights from 2025.

## Features

- **11 Interactive Slides** showcasing:
  - Podcast cover art
  - #1 show for 56 fans
  - Top country (US) and top fans (56)
  - Top episode (EP 14 Gary Vaynerchuk)
  - Top artist (Taylor Swift)
  - Top audiobook (Liar's Poker)
  - Achievement badges (Marathon Show, Instant Hit Show, Most Shared Show)
  - Top countries list
  - Performance metrics (Top 15% of videos)
  - Star guests
  - Finale slide

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Tech Stack

- React 18
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

## Customization

All data is stored in the `stats` object at the top of the component. You can easily modify:
- Fan counts
- Top countries
- Top episodes
- Top artists/audiobooks
- Achievement badges
- Guest lists

## Design

The component features:
- Mobile-first responsive design (9:16 aspect ratio)
- Smooth slide transitions
- Spotify Wrapped-inspired aesthetics
- Custom unicorn logo SVG
- Abstract background patterns
- Gradient backgrounds matching Spotify's style

