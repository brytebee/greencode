import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenCode | Premium Software Development Agency",
  description:
    "World-class software development for visionaries. We build desktop apps, web applications, mobile apps, and custom solutions. From concept to deployment, we craft digital experiences that transform businesses.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "desktop applications",
    "custom software solutions",
    "app development agency",
    "software consulting",
    "digital transformation",
    "enterprise software",
    "startup development",
  ],
  authors: [{ name: "GreenCode" }],
  creator: "GreenCode",
  publisher: "GreenCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://greencode.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreenCode | Premium Software Development Agency",
    description:
      "World-class software development for visionaries. Building cutting-edge apps across all platforms.",
    url: "https://greencode.com",
    siteName: "GreenCode",
    images: [
      {
        url: "/greencode-logo2.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "GreenCode - Coded Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenCode | Premium Software Development Agency",
    description:
      "World-class software development for visionaries. Building cutting-edge apps across all platforms.",
    images: ["/twitter-image.png"], // Create this image (1200x600px)
    creator: "@greencode", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
