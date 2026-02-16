"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/button.css";
import "./styles/responsiveness.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import { Poppins, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["900"], style: ["italic"], variable: "--font-inter", display: "swap" });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/madeByMe";
  const hideFooter = pathname === "/madeByMe";
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
      document.body.style.overflow = "hidden";
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      });
    }
  }, []);

  return (
    <html lang="de" className={`${poppins.variable} ${rajdhani.variable} ${inter.variable}`}>
      <head>
        <title>TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur</title>
        <meta name="description" content="TalentSuite ist deine Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media. 50+ Unternehmen vertrauen uns. Jetzt kostenlose Potenzialanalyse sichern." />
        <meta name="keywords" content="Performance Recruiting, Personalgewinnung, Social Media Recruiting, Neukundengewinnung, E-Commerce Agentur, Social Media Agentur, Digitalagentur DACH, Fachkräftemangel, Employer Branding" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://talentsuite.io" />
        <meta name="author" content="TalentSuite - Engel & Mühlhof GbR" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:url" content="https://talentsuite.io" />
        <meta property="og:site_name" content="TalentSuite" />
        <meta property="og:title" content="TalentSuite | Fullservice-Marketingagentur für Recruiting, Kunden & E-Commerce" />
        <meta property="og:description" content="Performance Recruiting, Neukundengewinnung & E-Commerce aus einer Hand. 50+ Unternehmen. Über 6 Mio. € verwaltetes Werbebudget." />
        <meta property="og:image" content="https://talentsuite.io/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TalentSuite | Fullservice-Marketingagentur" />
        <meta name="twitter:description" content="Performance Recruiting, Neukundengewinnung & E-Commerce aus einer Hand. 50+ Unternehmen vertrauen uns." />
        <meta name="twitter:image" content="https://talentsuite.io/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org - Organization */}
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
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body style={{ height: "100%", overflow: "hidden" }}>
        <CookieConsent />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7J9WLXF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager"></iframe>
        </noscript>
        <div id="smooth-wrapper" ref={wrapperRef} style={{ height: "100%", overflow: "hidden" }}>
          {!hideHeader && <Header />}
          <div id="smooth-content" ref={contentRef}>
            {children}
            {!hideFooter && <Footer />}
          </div>
        </div>
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
