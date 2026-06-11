import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./styles/typography.css";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

// Sohne es comercial (Klim Type Foundry); Hanken Grotesk es el sustituto libre
const sohne = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sohne",
});

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsdi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Altum Inmobiliaria — Servicios Inmobiliarios en Río Negro",
    template: "%s | Altum Inmobiliaria",
  },
  description:
    "Servicios inmobiliarios de primer nivel en Río Negro y la Patagonia Argentina. Venta, alquiler, consultoría y contratos.",
  keywords: [
    "inmobiliaria Río Negro",
    "propiedades Río Negro",
    "inmobiliaria Cipoletti",
    "inmobiliaria Catriel",
    "inversión inmobiliaria Patagonia",
    "Altum Inmobiliaria",
    "alquiler Río Negro",
  ],
  authors: [{ name: "Altum Inmobiliaria" }],
  creator: "Altum Inmobiliaria",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Altum Inmobiliaria",
    title: "Altum Inmobiliaria — Servicios Inmobiliarios en Río Negro",
    description:
      "Servicios inmobiliarios de primer nivel en Río Negro y la Patagonia Argentina. Donde el paisaje define el valor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altum Inmobiliaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altum Inmobiliaria — Servicios Inmobiliarios en Río Negro",
    description:
      "Servicios inmobiliarios de primer nivel en Río Negro y la Patagonia Argentina.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Altum Inmobiliaria",
  description:
    "Servicios inmobiliarios de primer nivel en Río Negro y la Patagonia Argentina.",
  url: siteUrl,
  telephone: "+54-9-2996-09-5742",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cipoletti",
    addressRegion: "Río Negro",
    addressCountry: "AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} ${sohne.variable}`}
    >
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
