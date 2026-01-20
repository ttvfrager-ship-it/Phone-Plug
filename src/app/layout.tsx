import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "The Phone Plug | Award-Winning Phone Repair in Garden City, MI",
  description: "Premier phone repair services in Garden City, Michigan. Expert screen replacement, battery repair, and water damage restoration. Fast, reliable, and premium service.",
  metadataBase: new URL('https://thephoneplug.com'), // Placeholder, vital for SEO
  openGraph: {
    title: "The Phone Plug | Expert Phone Repair",
    description: "Garden City's top-rated phone repair service. Visit us today for premium care.",
    siteName: "The Phone Plug",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
