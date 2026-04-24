import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import Providers from './providers';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://drophunt.vercel.app'),
  title: 'DropHunt | Premium Airdrop Tracker',
  description: 'The #1 directory for verified crypto airdrops. Hunt, track, and claim the next big token.',
  openGraph: {
    title: 'DropHunt',
    description: 'Find the next big crypto airdrop.',
    url: 'https://drophunt.vercel.app',
    siteName: 'DropHunt',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DropHunt | Premium Airdrop Tracker',
    description: 'The #1 directory for verified crypto airdrops.',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>
          <Navbar />
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}