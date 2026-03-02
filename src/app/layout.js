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
import TrackingProvider from "./components/TrackingProvider";
import { Poppins, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["900"], style: ["italic"], variable: "--font-inter", display: "swap" });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith("/lp/pflege-");
  const hideHeader = pathname === "/madeByMe" || isLandingPage;
  const hideFooter = pathname === "/madeByMe" || isLandingPage;

  return (
    <html lang="de" className={`${poppins.variable} ${rajdhani.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org JSON-LD: Organization + LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "MarketingAgency"],
          "name": "TalentSuite",
          "alternateName": "TalentSuite — Engel & Mühlhof GbR",
          "url": "https://www.talentsuite.io",
          "logo": "https://www.talentsuite.io/logo.png",
          "description": "Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce im DACH-Raum. Über 50 Unternehmen vertrauen auf unsere messbaren Ergebnisse.",
          "address": { "@type": "PostalAddress", "addressLocality": "Iserlohn", "addressRegion": "NRW", "postalCode": "58636", "addressCountry": "DE" },
          "areaServed": [
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Austria" },
            { "@type": "Country", "name": "Switzerland" }
          ],
          "serviceType": ["Performance Recruiting", "Neukundengewinnung", "E-Commerce", "Social Media Management", "Content Produktion", "Web Development"],
          "knowsAbout": ["Social Media Recruiting", "Performance Marketing", "Employer Branding", "Leadgenerierung", "Conversion Optimierung"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "bestRating": "5", "ratingCount": "50" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 15 },
          "foundingDate": "2023",
          "sameAs": [
            "https://www.instagram.com/talentsuite.io/",
            "https://www.facebook.com/profile.php?id=100095016041438",
            "https://www.linkedin.com/company/talentsuiteio/",
            "https://www.tiktok.com/@talentsuite",
            "https://www.youtube.com/@talentsuite"
          ]
        }) }} />
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        {/*
          ========================================================
          GOOGLE CONSENT MODE v2 — MUSS VOR ALLEN TRACKING-SCRIPTS STEHEN
          Setzt alle Consent-Kategorien auf "denied" bis der Nutzer zustimmt.
          Google sammelt KEINE Daten bis consent update kommt.
          ========================================================
        */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent','default',{
            'ad_storage':'denied',
            'ad_user_data':'denied',
            'ad_personalization':'denied',
            'analytics_storage':'denied',
            'functionality_storage':'denied',
            'personalization_storage':'denied',
            'security_storage':'granted',
            'wait_for_update':500
          });

          gtag('set','ads_data_redaction',true);
          gtag('set','url_passthrough',true);
        `}} />
        {/* GA4 gtag.js — lädt sofort, respektiert aber Consent Mode */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LSTMVQC2PJ" />
        <script dangerouslySetInnerHTML={{ __html: `
          gtag('js',new Date());
          gtag('config','G-LSTMVQC2PJ',{
            send_page_view:false,
            cookie_flags:'SameSite=Lax;Secure',
            link_attribution:true
          });
        `}} />
      </head>
      <body>
        <MetaPixel />
        <CookieConsent />
        {!hideHeader && <Header />}
        <TrackingProvider>
          <main>
            {children}
          </main>
        </TrackingProvider>
        {!hideFooter && <Footer />}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
        {/* Microsoft Clarity — consent-gated */}
        <Script id="clarity-consent-script" strategy="afterInteractive">
          {`
            function loadClarity(){if(window.__clarityLoaded)return;window.__clarityLoaded=true;
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/vp3s48lqbe";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script");}
            if(document.cookie.indexOf('cookie_consent=accepted')!==-1){loadClarity();}
            window.addEventListener('cookieConsentAccepted',loadClarity);
          `}
        </Script>
        {/* TalentSuite Customer Journey Tracking — consent-gated */}
        <Script id="journey-tracking-script" strategy="afterInteractive">
          {`
            function loadJourneyTracking(){if(window.__journeyLoaded)return;window.__journeyLoaded=true;
            var s=document.createElement('script');s.async=true;s.defer=true;
            s.src='https://tasks.talentsuite.io/api/journey/script.js';
            s.onload=function(){if(window.TalentSuiteTracking){window.TalentSuiteTracking.grantConsent();}};
            document.head.appendChild(s);}
            if(document.cookie.indexOf('cookie_consent=accepted')!==-1){loadJourneyTracking();}
            window.addEventListener('cookieConsentAccepted',loadJourneyTracking);
          `}
        </Script>
      </body>
    </html>
  );
}
