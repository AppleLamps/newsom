import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Newsom 2028 | A New California For America",
  description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
  keywords: ["Newsom", "2028", "President", "Campaign", "California", "Gavin Newsom"],
  authors: [{ name: "Newsom 2028 Campaign" }],
  openGraph: {
    title: "Newsom 2028 | A New California For America",
    description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsom 2028 | A New California For America",
    description: "Join Gavin Newsom's campaign for President 2028. Bringing California's proven leadership to the White House.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
