import { DotGothic16, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dot-gothic',
});
