import { MetadataRoute } from 'next';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://drophunt-blue.vercel.app/sitemap.xml',
  };
}