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
  description: 'Get up to speed with Evervault.',
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
