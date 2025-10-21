import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SSPPOS - Complete Restaurant Management Solution | Scan, Split, Pay",
  description:
    "Revolutionize your restaurant with SSPPOS - complete management solution featuring QR menu scanning, bill splitting, payment processing, staff management, and kitchen display systems. Trusted by 1,000+ restaurants worldwide.",
  keywords: [
    "restaurant management system",
    "POS system",
    "QR menu",
    "bill splitting",
    "restaurant payments",
    "kitchen display system",
    "restaurant software",
    "table management",
    "restaurant analytics",
    "food service technology",
    "restaurant POS",
    "dining management",
    "restaurant ordering system",
    "hospitality software",
    "restaurant operations",
    "SSPPOS",
    "scan split pay",
  ],
  authors: [{ name: "SSPPOS Team" }],
  creator: "SSPPOS",
  publisher: "SSPPOS",
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
  icons: {
    icon: "/logo_no_bg.png",
    apple: "/logo_no_bg.png",
  },
  openGraph: {
    title: "SSPPOS - Complete Restaurant Management Solution",
    description:
      "Revolutionize your restaurant operations with our comprehensive POS and management system. Features QR menu scanning, bill splitting, real-time analytics, and more.",
    url: "https://ssppos.com",
    siteName: "SSPPOS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo_no_bg.png",
        width: 1200,
        height: 630,
        alt: "SSPPOS Restaurant Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSPPOS - Complete Restaurant Management Solution",
    description:
      "Revolutionize your restaurant with QR menu scanning, bill splitting, and comprehensive management tools.",
    images: ["/logo_no_bg.png"],
    creator: "@ssppos",
  },
  alternates: {
    canonical: "https://ssppos.com",
  },
  category: "Restaurant Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff8a05" />
        <meta name="msapplication-TileColor" content="#ff8a05" />
        <meta property="business:contact_data:country_name" content="Global" />
        <meta
          property="business:contact_data:locality"
          content="Restaurant Technology"
        />
        <meta
          property="business:contact_data:phone_number"
          content="+1-800-SSPPOS"
        />
        <meta
          property="business:contact_data:website"
          content="https://ssppos.com"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
