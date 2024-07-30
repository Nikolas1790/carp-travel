import React from 'react';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// export interface Metadata {
//   title: string;
//   description: string;
//   metadataBase: URL;
//   image?: URL; 
// }


export const metadata: Metadata = {
  title: 'Carp Travel',
  description: 'Holiday in the Carpathians', 
  metadataBase: new URL('https://carp-travel-peach.vercel.app/'),
  openGraph: {
    images: ['https://carp-travel-peach.vercel.app/img/readme/home-desc.jpg'], 
  }
 

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
