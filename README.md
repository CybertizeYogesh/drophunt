# DropHunt

A premium Next.js airdrop tracking platform that helps users discover, track, and claim the best crypto airdrops.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Animation**: Framer Motion
- **Styling**: CSS Modules
- **Runtime**: React 19

## Features

- 🔍 **Live Search & Category Filtering** - Filter by Active, Upcoming, Ending Soon, or your Watchlist
- 📄 **Dynamic Routing** - Individual detail pages for each airdrop with step-by-step guides
- ❤️ **Watchlist System** - Save favorite airdrops (persisted in localStorage)
- 📱 **Responsive Design** - Mobile-optimized layout
- 🔗 **Wallet Connect UI** - Modal for wallet connection
- 📤 **Share Links** - Copy airdrop detail page URLs to clipboard

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding New Airdrops

Edit `src/data/mockAirdrops.js`. Each airdrop object follows this schema:

```javascript
{
  id: 1,                    // Unique number
  name: "Nebula Network",   // Project name
  ticker: "NEB",            // Token symbol
  value: "$50",             // Estimated reward value (or "TBA")
  tasks: "Social + Testnet", // Required tasks
  endDate: "2026-05-15",   // End date (YYYY-MM-DD)
  status: "Active",         // "Active", "Ending Soon", or "Upcoming"
  image: "/images/project1.svg" // Optional image path
}
```

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home page with airdrop grid
│   ├── layout.js            # Root layout with metadata
│   ├── globals.css          # Global styles
│   ├── submit/page.jsx     # Submit airdrop page
│   └── airdrop/[id]/       # Dynamic detail pages
├── components/
│   ├── AirdropCard.jsx     # Airdrop card with watchlist
│   ├── FilterBar.jsx       # Category filters & search
│   ├── Navbar.jsx          # Navigation with wallet connect
│   ├── Footer.jsx         # Site footer
│   └── WalletModal.jsx    # Wallet connection modal
├── hooks/
│   └── useWatchlist.js     # Watchlist state management
├── data/
│   └── mockAirdrops.js     # Airdrop data source
└── styles/
    └── *.module.css        # Component-specific styles
```

## License

MIT

## Deployment

```bash
# Build and deploy to Vercel
npx vercel --prod
```

The platform will be live at your Vercel project URL.