"use client";
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split(";").find((c) => c.trim().startsWith("cookie_consent="));
    if (!consent) {
      // Kurze Verzögerung damit die Seite erst rendert
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    document.cookie = "cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    setShowBanner(false);
    // Event feuern damit GTM geladen wird
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const acceptEssential = () => {
    document.cookie = "cookie_consent=essential; path=/; max-age=31536000; SameSite=Lax";
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999999,
        padding: "0 20px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          backgroundColor: "rgba(9, 22, 34, 0.97)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "24px",
          padding: "28px 32px",
          backdropFilter: "blur(40px)",
          boxShadow: "0 -8px 40px rgba(0, 0, 0, 0.4), inset 0 -18px 84px rgba(226, 232, 255, 0.06)",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "24px" }}>🍪</span>
          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 8px",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Wir respektieren deine Privatsphäre
            </h4>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                margin: 0,
                color: "rgba(255,255,255,0.65)",
                opacity: 1,
              }}
            >
              Wir verwenden Cookies, um dein Erlebnis zu verbessern und unsere Website zu optimieren.
              Einige Cookies sind technisch notwendig, andere helfen uns, die Nutzung zu analysieren
              und Inhalte zu personalisieren.{" "}
              <a
                href="/datenschutz"
                style={{ color: "#4da6d9", textDecoration: "underline" }}
              >
                Mehr erfahren
              </a>
            </p>
          </div>
        </div>

        {showDetails && (
          <div
            style={{
              margin: "16px 0",
              padding: "16px",
              backgroundColor: "rgba(255,255,255,0.04)",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.7",
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: "13px", opacity: 1 }}>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Notwendig:</strong> Session-Cookies,
              Cookie-Einstellung (immer aktiv)
            </p>
            <p style={{ margin: "0 0 8px", fontSize: "13px", opacity: 1 }}>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Analyse & Marketing:</strong> Google
              Tag Manager, Google Analytics, Meta Pixel – zur Messung der Website-Performance und
              Optimierung unserer Werbeanzeigen.
            </p>
            <p style={{ margin: 0, fontSize: "13px", opacity: 1 }}>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Drittanbieter:</strong> Videos werden
              über DigitalOcean CDN bereitgestellt. Dabei wird deine IP-Adresse übermittelt.
            </p>
          </div>
        )}

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
          <button
            onClick={acceptAll}
            style={{
              flex: "1 1 auto",
              minWidth: "160px",
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#fff",
              backgroundColor: "#023b5b",
              border: "1px solid #023b5b",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#034d76")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#023b5b")}
          >
            Alle akzeptieren
          </button>
          <button
            onClick={acceptEssential}
            style={{
              flex: "1 1 auto",
              minWidth: "160px",
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              color: "rgba(255,255,255,0.7)",
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.35)")}
            onMouseOut={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
          >
            Nur notwendige
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              flex: "0 0 auto",
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Poppins, sans-serif",
              color: "rgba(255,255,255,0.5)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {showDetails ? "Weniger" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
