import { airdropsData } from '../data/airdrops';
import { academyModules } from '../data/academy';

export default function sitemap() {
  const staticRoutes = [
    { url: 'https://drophunt-blue.vercel.app/', lastModified: new Date(), priority: 1.0 },
    { url: 'https://drophunt-blue.vercel.app/airdrops', lastModified: new Date(), priority: 0.8 },
    { url: 'https://drophunt-blue.vercel.app/academy', lastModified: new Date(), priority: 0.8 },
    { url: 'https://drophunt-blue.vercel.app/leaderboard', lastModified: new Date(), priority: 0.8 },
    { url: 'https://drophunt-blue.vercel.app/submit', lastModified: new Date(), priority: 0.8 },
    { url: 'https://drophunt-blue.vercel.app/terms', lastModified: new Date(), priority: 0.8 },
    { url: 'https://drophunt-blue.vercel.app/privacy', lastModified: new Date(), priority: 0.8 },
  ];

  const airdropRoutes = airdropsData.map((airdrop) => ({
    url: `https://drophunt-blue.vercel.app/airdrops/${airdrop.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  const academyRoutes = academyModules.map((module) => ({
    url: `https://drophunt-blue.vercel.app/academy/${module.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...airdropRoutes, ...academyRoutes];
}