import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Your Name | Full Stack Developer',
  description: 'Portfolio website of Your Name - Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.',
  keywords: 'portfolio, full stack developer, react, next.js, web developer, javascript, typescript',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Portfolio - Your Name | Full Stack Developer',
    description: 'Portfolio website showcasing modern web development projects and skills',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Your Name | Full Stack Developer',
    description: 'Portfolio website showcasing modern web development projects and skills',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}