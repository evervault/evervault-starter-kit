import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';

import Navigation from '@/components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Evervault Starter Kit',
  description: 'Get up to speed with Evervault',
  openGraph: {
    title: 'Evervault Starter Kit',
    description: 'Get up to speed with Evervault',
    url: 'https://evervault-starter-kit.vercel.app',
    siteName: 'Evervault Starter Kit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evervault Starter Kit',
    description: 'Get up to speed with Evervault',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} font-sans; ${robotoMono.variable} font-monospace;`}
      >
        <Navigation />
        <div className='rootLayout'>{children}</div>
      </body>
    </html>
  );
}
