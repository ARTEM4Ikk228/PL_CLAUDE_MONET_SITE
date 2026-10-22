import './globals.css';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Claude monet — ресторан у центрі Полтави',
    template: '%s — Claude monet',
  },
  description:
    'Claude monet — ресторан у центрі Полтави: сезонна кухня, десерти за мотивами імпресіонізму, банкети та приватні вечори.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${display.variable} ${body.variable}`}>
      <body>
        <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
          <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.035" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="70" />
          </filter>
        </svg>
        <a href="#main" className="skip">Перейти до змісту</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
