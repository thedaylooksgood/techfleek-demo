import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Red_Hat_Display, Outfit, Poppins, Lato, Inter, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutContent from "./LayoutContent";
import {
  JsonLd,
  getOrganizationSchema,
  getWebsiteSchema,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const redHatDisplay = Red_Hat_Display({ variable: "--font-red-hat", subsets: ["latin"], display: "swap" });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ variable: "--font-poppins", weight: ["400", "600", "700"], subsets: ["latin"], display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// =============================================================================
// ROOT METADATA — Title Template + Full SEO Configuration
// =============================================================================
// Child pages that export `metadata = { title: 'Web Development' }` will
// auto-render as: "Web Development | TechFleek Technologies"
// =============================================================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechFleek Technologies – Custom Software, AI & Web3 Experts",
    template: "%s | TechFleek Technologies",
  },
  description:
    "TechFleek delivers custom web & mobile apps, AI chatbots, Web3/DApp development, and scalable software solutions. Based in India, serving global clients.",
  keywords: [
    "TechFleek",
    "Custom Software Development",
    "Web Development India",
    "Mobile App Development",
    "AI Chatbots",
    "Web3 Development",
    "DApp Development",
    "Blockchain Solutions",
    "Scalable Software",
    "IT Services India",
    "SaaS Development",
    "Next.js Experts",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "./",
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
  openGraph: {
    title: "TechFleek Technologies – Custom Software, AI & Web3 Experts",
    description:
      "Custom web & mobile apps, AI-powered chatbots, and Web3/DApp development. Scalable software solutions from India to the world.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechFleek Technologies - Future of Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFleek Technologies",
    description:
      "Building innovative, scalable web/mobile apps, AI chatbots, and Web3 solutions.",
    images: ["/og-image.png"],
  },
  // TODO: Replace with your actual Google Search Console verification code
  // The GA4 ID (G-YYZKNVL004) is NOT the verification code.
  // Get it from: Google Search Console → Settings → Ownership verification → HTML tag
  // verification: {
  //   google: 'YOUR_ACTUAL_SEARCH_CONSOLE_VERIFICATION_CODE',
  // },
  other: {
    "revisit-after": "7 days",
    language: "English",
  },
};

// =============================================================================
// LOCAL BUSINESS SCHEMA — Tells Google where TechFleek is physically located
// =============================================================================
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description:
    "Custom software development, AI solutions, and Web3 development company based in India, serving global clients.",
  url: SITE_URL,
  telephone: "+91-88021-72570",
  email: "hello@techfleek.in",
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "O-1106, Officer City-1, Raj Nagar Extension",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6869",
    longitude: "77.4500",
  },
  areaServed: "Worldwide",
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/techfleek",
    "https://github.com/techfleek-code",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={localBusinessSchema} />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} ${outfit.variable} ${poppins.variable} ${lato.variable} ${inter.variable} ${caveat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YYZKNVL004" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-YYZKNVL004');`}
        </Script>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}