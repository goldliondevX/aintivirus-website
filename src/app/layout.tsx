import type { Metadata } from 'next';

import './globals.css';
import { ReactNode } from 'react';

import { cn } from '@/utils/style-utils';
import { dmSans, dotGothic16, inter, poppins } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'AintiVirus',
  description:
    "John McAfee's AI incarnate: built to defend digital freedom and carry on his mission. It’s not just protection—it’s retaliation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          dotGothic16.variable,
          poppins.variable,
          dmSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
