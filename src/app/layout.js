import { Poppins, Rajdhani, Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["900"], style: ["italic"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur",
  description: "TalentSuite ist deine Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media. 50+ Unternehmen vertrauen uns. Jetzt kostenlose Potenzialanalyse sichern.",
  keywords: "Performance Recruiting, Personalgewinnung, Social Media Recruiting, Neukundengewinnung, E-Commerce Agentur, Social Media Agentur, Digitalagentur DACH",
  authors: [{ name: "TalentSuite - Engel & Mühlhof GbR" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://talentsuite.io",
    siteName: "TalentSuite",
    title: "TalentSuite | Fullservice-Marketingagentur für Recruiting, Kunden & E-Commerce",
    description: "Performance Recruiting, Neukundengewinnung & E-Commerce aus einer Hand. 50+ Unternehmen. Über 6 Mio. € verwaltetes Werbebudget.",
    images: [{ url: "https://talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentSuite | Fullservice-Marketingagentur",
    description: "Performance Recruiting, Neukundengewinnung & E-Commerce aus einer Hand. 50+ Unternehmen vertrauen uns.",
    images: ["https://talentsuite.io/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${poppins.variable} ${rajdhani.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MarketingAgency",
          "name": "TalentSuite",
          "alternateName": "Engel & Mühlhof GbR",
          "url": "https://talentsuite.io",
          "logo": "https://talentsuite.io/logo.png",
          "description": "Fullservice-Marketingagentur für Performance Recruiting, Neukundengewinnung, E-Commerce und Social Media Management im DACH-Raum.",
          "address": { "@type": "PostalAddress", "addressLocality": "Iserlohn", "addressRegion": "NRW", "addressCountry": "DE" },
          "areaServed": [
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Austria" },
            { "@type": "Country", "name": "Switzerland" }
          ],
          "serviceType": ["Performance Recruiting", "Neukundengewinnung", "E-Commerce", "Social Media Management", "Content Produktion", "Web Development"],
          "sameAs": [
            "https://www.instagram.com/talentsuite.io/",
            "https://www.facebook.com/profile.php?id=100095016041438",
            "https://www.linkedin.com/company/talentsuiteio/"
          ]
        }) }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
