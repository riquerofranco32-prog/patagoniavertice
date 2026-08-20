import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://altumsci.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/proyectos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sumate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },

    // SEO Local — páginas de ciudad (alta prioridad para ranking local)
    { url: `${siteUrl}/inmobiliaria-cipoletti`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/inmobiliaria-catriel`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/propiedades-rio-negro`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
  ];
}
