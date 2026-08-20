import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./styles/typography.css";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FloatingDock from "@/components/marketing/FloatingDock";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/ui/SmoothScroll";

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

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsci.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia",
    template: "%s | Altum Inmobiliaria",
  },
  description:
    "Inmobiliaria en Río Negro con más de 5 años de experiencia. Compra, venta, alquiler y consultoría de propiedades en Cipoletti, Catriel, General Roca y toda la Patagonia Argentina.",
  keywords: [
    "inmobiliaria Río Negro",
    "propiedades Río Negro",
    "inmobiliaria Cipoletti",
    "inmobiliaria Catriel",
    "inmobiliaria General Roca",
    "inversión inmobiliaria Patagonia",
    "Altum Inmobiliaria",
    "alquiler Río Negro",
    "casas en venta Cipoletti",
    "terrenos Río Negro",
    "comprar propiedad Patagonia",
    "vender casa Río Negro",
    "administración de alquileres Río Negro",
    "propiedades Bariloche",
    "inmuebles Neuquén",
    "consultoría inmobiliaria Patagonia",
    "agente inmobiliario Río Negro",
    "mercado inmobiliario Patagonia",
  ],
  authors: [{ name: "Altum Inmobiliaria", url: siteUrl }],
  creator: "Altum Inmobiliaria",
  publisher: "Altum Inmobiliaria",
  category: "Real Estate",
  verification: {
    google: "googled9f5728c228e184a",
  },
  // Geo tags para SEO local
  other: {
    "geo.region": "AR-R",
    "geo.placename": "Cipoletti, Río Negro, Argentina",
    "geo.position": "-38.9333;-68.0667",
    ICBM: "-38.9333, -68.0667",
    "og:locale:alternate": "es_AR",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Altum Inmobiliaria",
    title: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia",
    description:
      "Inmobiliaria especializada en Río Negro. Compra, venta y alquiler de propiedades en Cipoletti, Catriel, General Roca y toda la Patagonia. Trato directo, transparencia total.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altum Inmobiliaria — Propiedades en Río Negro y la Patagonia Argentina",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altum Inmobiliaria — Propiedades en Río Negro",
    description:
      "Compra, venta y alquiler de propiedades en Río Negro y la Patagonia. Más de 200 operaciones exitosas. Consultanos sin compromiso.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-AR": siteUrl,
    },
  },
};

// ─── Schema.org JSON-LD avanzado ────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: "Altum Inmobiliaria",
  alternateName: "Altum SDI",
  description:
    "Inmobiliaria con más de 5 años de experiencia en Río Negro y la Patagonia. Servicios de compra, venta, alquiler, administración y consultoría inmobiliaria.",
  url: siteUrl,
  telephone: "+54-9-2996-09-5742",
  email: "altumsci@gmail.com",
  foundingDate: "2019",
  priceRange: "$$",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logoo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cipoletti",
    addressLocality: "Cipoletti",
    addressRegion: "Río Negro",
    postalCode: "8324",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.9333,
    longitude: -68.0667,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Cipoletti",
      containedInPlace: { "@type": "AdministrativeArea", name: "Río Negro" },
    },
    {
      "@type": "City",
      name: "Catriel",
      containedInPlace: { "@type": "AdministrativeArea", name: "Río Negro" },
    },
    {
      "@type": "City",
      name: "General Roca",
      containedInPlace: { "@type": "AdministrativeArea", name: "Río Negro" },
    },
    {
      "@type": "City",
      name: "Viedma",
      containedInPlace: { "@type": "AdministrativeArea", name: "Río Negro" },
    },
    { "@type": "State", name: "Río Negro" },
    { "@type": "State", name: "Patagonia Argentina" },
  ],
  serviceType: [
    "Compra y venta de propiedades",
    "Administración de alquileres",
    "Consultoría inmobiliaria",
    "Redacción de contratos inmobiliarios",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-2996-09-5742",
    contactType: "customer service",
    availableLanguage: "Spanish",
    contactOption: "TollFree",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Altum Inmobiliaria",
  description:
    "Inmobiliaria especializada en Río Negro y la Patagonia Argentina",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "es-AR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son las zonas donde opera Altum Inmobiliaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos principalmente en Río Negro: Cipoletti, Catriel, General Roca, Viedma y localidades intermedias. También asesoramos operaciones en Neuquén capital y zonas limítrofes de la Patagonia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta vender una propiedad con Altum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La comisión de venta es un porcentaje estándar sobre el precio de cierre, acordado antes de iniciar cualquier operación. No hay costos ocultos ni cargos previos. Solo cobramos si concretamos la venta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el servicio de administración de alquileres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gestionamos todo el ciclo: búsqueda y selección de inquilinos, firma y seguimiento del contrato, cobro mensual del alquiler, atención de reclamos y coordinación de mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo comprar una propiedad en Río Negro si estoy en otro país o ciudad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, trabajamos con compradores no residentes. Coordinamos visitas virtuales, gestionamos poderes notariales y acompañamos en cada paso de manera remota.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en promedio cerrar una venta en Río Negro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo promedio de cierre varía entre 45 y 90 días desde la firma de la seña. En propiedades con documentación en orden, hemos cerrado en menos de 30 días.",
      },
    },
  ],
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
        {/* Preconnect a dominios externos para mejorar LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Schema.org — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Schema.org — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Schema.org — FAQPage (rich snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-crema text-tierra">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingDock />
        </SmoothScroll>
      </body>
    </html>
  );
}
