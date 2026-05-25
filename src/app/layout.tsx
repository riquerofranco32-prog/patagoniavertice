import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import WhatsAppButton from "@/components/marketing/WhatsAppButton";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://patagoniavertice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patagonia Vértice — Desarrollos Inmobiliarios en Neuquén",
    template: "%s | Patagonia Vértice",
  },
  description:
    "Desarrollos y servicios inmobiliarios de primer nivel en Neuquén y la Patagonia Argentina. Donde el paisaje define el valor.",
  keywords: [
    "inmobiliaria Neuquén",
    "desarrollos inmobiliarios Patagonia",
    "propiedades Neuquén",
    "inversión inmobiliaria Neuquén",
    "Patagonia Vértice",
    "construcción Neuquén",
    "lotes Patagonia",
  ],
  authors: [{ name: "Patagonia Vértice" }],
  creator: "Patagonia Vértice",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Patagonia Vértice",
    title: "Patagonia Vértice — Desarrollos Inmobiliarios en Neuquén",
    description:
      "Desarrollos y servicios inmobiliarios de primer nivel en Neuquén y la Patagonia Argentina. Donde el paisaje define el valor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patagonia Vértice — Desarrollos Inmobiliarios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia Vértice — Desarrollos Inmobiliarios en Neuquén",
    description:
      "Desarrollos y servicios inmobiliarios de primer nivel en Neuquén y la Patagonia Argentina.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Patagonia Vértice",
  description:
    "Desarrollos y servicios inmobiliarios de primer nivel en Neuquén y la Patagonia Argentina.",
  url: siteUrl,
  telephone: "+54-299-466-8428",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Neuquén",
    addressRegion: "Neuquén",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.9516,
    longitude: -68.0591,
  },
  areaServed: {
    "@type": "State",
    name: "Patagonia, Argentina",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-crema text-tierra">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
