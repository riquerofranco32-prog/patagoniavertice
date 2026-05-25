import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Patagonia Vértice — Desarrollos Inmobiliarios",
  description: "Desarrollos y Servicios Inmobiliarios en Neuquén, Patagonia Argentina. Donde el paisaje define el valor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased bg-crema text-tierra">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
