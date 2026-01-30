import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://newsom2028.com'),
  title: "Newsom 2028 | A New California For America",
  description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
  keywords: ["Newsom", "2028", "President", "Campaign", "California", "Gavin Newsom"],
  authors: [{ name: "Newsom 2028 Campaign" }],
  openGraph: {
    title: "Newsom 2028 | A New California For America",
    description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
    type: "website",
    locale: "en_US",
    siteName: "Newsom 2028",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Newsom 2028 Campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsom 2028 | A New California For America",
    description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
    creator: "@newsom2028",
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://newsom2028.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Newsom 2028 Campaign',
    description: 'A satirical political campaign website for Gavin Newsom 2028',
    url: 'https://newsom2028.com',
    logo: 'https://newsom2028.com/logo.png',
    sameAs: [
      'https://twitter.com/newsom2028',
      'https://facebook.com/newsom2028',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--navy)] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
