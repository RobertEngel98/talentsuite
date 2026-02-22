"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/button.css";
import "./styles/responsiveness.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import MetaPixel from "./components/MetaPixel";
import { Poppins, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["900"], style: ["italic"], variable: "--font-inter", display: "swap" });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/madeByMe";
  const hideFooter = pathname === "/madeByMe";

  return (
    <html lang="de" className={`${poppins.variable} ${rajdhani.variable} ${inter.variable}`}>
      <head>
        <title>TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur</title>
        <meta name="description" content="TalentSuite ist deine Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media. 50+ Unternehmen vertrauen uns. Jetzt kostenlose Potenzialanalyse sichern." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "TalentSuite",
          "url": "https://talentsuite.io",
          "description": "Performance Recruiting Agentur für den DACH-Raum. Wir finden Fachkräfte über Social Media — planbar, messbar, ohne Jobbörsen.",
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
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body>
        <MetaPixel />
        <CookieConsent />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7J9WLXF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager"></iframe>
        </noscript>
        {!hideHeader && <Header />}
        <main>
          {children}
        </main>
        {!hideFooter && <Footer />}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
        {/* DSGVO: GTM nur nach Cookie-Consent */}
        <Script id="gtm-consent-script" strategy="afterInteractive">
          {`
            function loadGTM(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7J9WLXF');}
            if(document.cookie.indexOf('cookie_consent=accepted')!==-1){loadGTM();}
            window.addEventListener('cookieConsentAccepted',loadGTM);
          `}
        </Script>
      </body>
    </html>
  );
}
