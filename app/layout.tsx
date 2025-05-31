import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hamaraticket.com'),
  title: 'Hamara Ticket - Water Park & Event Booking App',
  description: 'Book water parks and events with ease. Skip the lines, get instant tickets, and enjoy exclusive deals with Hamara Ticket.',
  keywords: 'water park booking, event tickets, online booking, digital tickets, entertainment booking, water parks, events, instant tickets',
  authors: [{ name: 'Hamara Ticket Team' }],
  creator: 'Hamara Ticket',
  publisher: 'Hamara Ticket',
  openGraph: {
    title: 'Hamara Ticket - Water Park & Event Booking App',
    description: 'Book water parks and events with ease. Skip the lines, get instant tickets, and enjoy exclusive deals.',
    url: 'https://hamaraticket.com',
    siteName: 'Hamara Ticket',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamara Ticket App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamara Ticket - Water Park & Event Booking App',
    description: 'Book water parks and events with ease. Skip the lines, get instant tickets, and enjoy exclusive deals.',
    images: ['/twitter-image.jpg'],
    creator: '@hamaraticket',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://hamaraticket.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}