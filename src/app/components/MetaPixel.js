"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";

const META_PIXEL_ID = "1544188033050623";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Prüfe ob Consent bereits vorhanden
    if (document.cookie.indexOf("cookie_consent=accepted") !== -1) {
      setConsentGiven(true);
    }

    // Auf Consent-Event reagieren
    const handleConsent = () => setConsentGiven(true);
    window.addEventListener("cookieConsentAccepted", handleConsent);
    return () => window.removeEventListener("cookieConsentAccepted", handleConsent);
  }, []);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

export function trackMetaLead(data = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: data.formName || "lead_form",
      content_category: data.category || "recruiting",
      value: data.value || 0,
      currency: "EUR",
      ...data,
    });
  }
}

export function trackMetaViewContent(data = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: data.contentName || "page",
      content_category: data.category || "pflege",
      content_type: data.contentType || "landing_page",
      ...data,
    });
  }
}

export function trackMetaSchedule(data = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Schedule", {
      content_name: data.formName || "termin_buchung",
      content_category: data.category || "pflege",
      value: data.value || 0,
      currency: "EUR",
      ...data,
    });
  }
}
