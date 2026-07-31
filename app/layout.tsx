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
  title: "Arnau | Media Manager especializado en Minecraft",
  description: "Portfolio premium de Arnau, Media Manager especializado en marketing para servidores de Minecraft, gestión de creadores, branding y crecimiento de comunidades.",
  keywords: ["Media Manager", "Minecraft", "marketing", "creadores de contenido", "branding", "community growth"],
  openGraph: {
    title: "Arnau | Media Manager especializado en Minecraft",
    description: "Portfolio premium de Arnau, Media Manager especializado en marketing para servidores de Minecraft, gestión de creadores, branding y crecimiento de comunidades.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
