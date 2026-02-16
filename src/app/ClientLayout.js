"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/button.css";
import "./styles/responsiveness.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/madeByMe";
  const hideFooter = pathname === "/madeByMe";

  return (
    <>
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
    </>
  );
}
