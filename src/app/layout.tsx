import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alicia Djoumalila",
  description: "Portfolio professionnel d'Alicia, mannequin spécialisée en mode, beauté et lifestyle. Découvrez son univers créatif et ses collaborations artistiques.",
  keywords: ["mannequin", "mode", "beauté", "lifestyle", "portfolio", "Alicia", "modélisme", "photographie"],
  authors: [{ name: "Alicia" }],
  creator: "Alicia",
  publisher: "Alicia",
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
    type: "website",
    locale: "fr_FR",
    url: "https://alicia-portfolio.com",
    title: "Alicia - Portfolio de Mannequin",
    description: "Portfolio professionnel d'Alicia, mannequin spécialisée en mode, beauté et lifestyle.",
    siteName: "Alicia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alicia - Portfolio de Mannequin",
    description: "Portfolio professionnel d'Alicia, mannequin spécialisée en mode, beauté et lifestyle.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
