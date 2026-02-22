"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

// ── BRAND COLORS ──
const BRAND = "#023B5B";
const BRAND_LIGHT = "#e8f0f6";
const ACCENT = "#2D8CFF";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#e0e0e0";
const DARK_BG = "#011E2F";
const CARD_BG = "rgba(255,255,255,0.06)";
const CARD_BORDER = "rgba(255,255,255,0.1)";

export default function TerminBestaetigt() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeIn = mounted
    ? { opacity: 1, transform: "translateY(0)" }
    : { opacity: 0, transform: "translateY(20px)" };

  const transition = (delay = 0) => ({
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <>
      <Head>
        <title>Termin bestätigt | TalentSuite</title>
        <meta
          name="description"
          content="Ihr Termin mit TalentSuite ist bestätigt. So bereiten Sie sich optimal auf das Gespräch vor."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://talentsuite.io/termin-bestaetigt" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: `linear-gradient(180deg, ${DARK_BG} 0%, ${BRAND} 100%)`,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* ── HEADER ── */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo.png"
              alt="TalentSuite Logo"
              style={{ height: 36 }}
            />
          </Link>
          <Link
            href="https://calendar.app.google/CQpLAnRw8tzQUEQz5"
            style={{
              color: WHITE,
              background: ACCENT,
              padding: "10px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              transition: "background 0.2s",
            }}
          >
            Erstgespräch vereinbaren
          </Link>
        </header>

        {/* ── HERO SECTION ── */}
        <section
          style={{
            textAlign: "center",
            padding: "60px 24px 40px",
            maxWidth: 720,
            margin: "0 auto",
            ...fadeIn,
            ...transition(0.1),
          }}
        >
          {/* Success Icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(45, 140, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 40,
            }}
          >
            ✅
          </div>

          <h1
            style={{
              color: WHITE,
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 800,
              margin: "0 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Ihr Termin ist bestätigt!
          </h1>
          <p
            style={{
              color: LIGHT_GRAY,
              fontSize: "clamp(16px, 2.5vw, 19px)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Vielen Dank — wir freuen uns auf das Gespräch mit Ihnen.
          </p>
        </section>

        {/* ── SO GEHT ES WEITER ── */}
        <section
          style={{
            padding: "40px 24px 60px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              color: WHITE,
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 700,
              textAlign: "center",
              margin: "0 0 40px",
              letterSpacing: "-0.01em",
            }}
          >
            So geht es weiter
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {/* Step 1 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                ...fadeIn,
                ...transition(0.2),
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  marginBottom: 16,
                }}
              >
                📧
              </div>
              <h3
                style={{
                  color: WHITE,
                  fontSize: 17,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                1. Bestätigungs-E-Mail prüfen
              </h3>
              <p
                style={{
                  color: LIGHT_GRAY,
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Sie erhalten in Kürze eine Kalender-Einladung per E-Mail mit
                allen Details.
              </p>
            </div>

            {/* Step 2 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                ...fadeIn,
                ...transition(0.35),
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  marginBottom: 16,
                }}
              >
                📋
              </div>
              <h3
                style={{
                  color: WHITE,
                  fontSize: 17,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                2. Kurz vorbereiten
              </h3>
              <p
                style={{
                  color: LIGHT_GRAY,
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Überlegen Sie, welche Stellen Sie besetzen möchten und was Sie
                bisher versucht haben.
              </p>
            </div>

            {/* Step 3 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                ...fadeIn,
                ...transition(0.5),
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  marginBottom: 16,
                }}
              >
                💬
              </div>
              <h3
                style={{
                  color: WHITE,
                  fontSize: 17,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                3. Gespräch führen
              </h3>
              <p
                style={{
                  color: LIGHT_GRAY,
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                In 20 Minuten analysieren wir gemeinsam Ihre Situation und
                zeigen Ihnen konkrete nächste Schritte.
              </p>
            </div>
          </div>
        </section>

        {/* ── WAS SIE ERWARTET ── */}
        <section
          style={{
            padding: "0 24px 60px",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 20,
              padding: "clamp(28px, 5vw, 44px)",
              backdropFilter: "blur(8px)",
              ...fadeIn,
              ...transition(0.3),
            }}
          >
            <h2
              style={{
                color: WHITE,
                fontSize: "clamp(20px, 3.5vw, 26px)",
                fontWeight: 700,
                margin: "0 0 28px",
                textAlign: "center",
              }}
            >
              Was Sie in der Analyse erwartet
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "Ehrliche Einschätzung Ihrer aktuellen Recruiting-Situation",
                "Konkrete Strategie für Ihre Branche und offenen Stellen",
                "Transparente Kalkulation — was eine Kampagne kosten würde",
                "Quick Wins, die Sie sofort umsetzen können",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: ACCENT,
                      fontSize: 18,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      color: LIGHT_GRAY,
                      fontSize: 15,
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          style={{
            padding: "0 24px 60px",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              textAlign: "center",
              ...fadeIn,
              ...transition(0.4),
            }}
          >
            {[
              { value: "50+", label: "Betriebe betreut" },
              { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
              { value: "30 Tage", label: "Ø bis zur Einstellung" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: 14,
                  padding: "24px 12px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    color: ACCENT,
                    fontSize: "clamp(22px, 4vw, 30px)",
                    fontWeight: 800,
                    marginBottom: 6,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: LIGHT_GRAY,
                    fontSize: "clamp(11px, 2vw, 13px)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ROBERT ENGEL ── */}
        <section
          style={{
            padding: "0 24px 60px",
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
            ...fadeIn,
            ...transition(0.5),
          }}
        >
          <p
            style={{
              color: WHITE,
              fontSize: 16,
              fontWeight: 600,
              margin: "0 0 8px",
            }}
          >
            Robert Engel · Geschäftsführer TalentSuite
          </p>
          <p
            style={{
              color: LIGHT_GRAY,
              fontSize: 14,
              margin: 0,
            }}
          >
            Fragen vorab? Schreiben Sie uns an{" "}
            <a
              href="mailto:info@talentsuite.io"
              style={{
                color: ACCENT,
                textDecoration: "underline",
              }}
            >
              info@talentsuite.io
            </a>
          </p>
        </section>

        {/* ── CTA SECTION ── */}
        <section
          style={{
            padding: "60px 24px",
            background: "rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: WHITE,
                fontSize: "clamp(22px, 4vw, 28px)",
                fontWeight: 700,
                margin: "0 0 14px",
                lineHeight: 1.3,
              }}
            >
              Bereit für messbares Wachstum?
            </h2>
            <p
              style={{
                color: LIGHT_GRAY,
                fontSize: 15,
                lineHeight: 1.6,
                margin: "0 0 28px",
              }}
            >
              In einem kostenlosen Erstgespräch analysieren wir Ihre Situation
              und zeigen Ihnen, welche Hebel für Ihr Unternehmen den größten
              Impact haben.
            </p>
            <a
              href="https://calendar.app.google/mU29snzEsgqsnMXy8"
              style={{
                display: "inline-block",
                background: ACCENT,
                color: WHITE,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
              }}
            >
              Kostenlose Potenzialanalyse buchen
            </a>
            <p
              style={{
                color: LIGHT_GRAY,
                fontSize: 12,
                margin: "16px 0 0",
                opacity: 0.7,
              }}
            >
              ✓ 100% kostenlos &nbsp;&nbsp; ✓ Unverbindlich &nbsp;&nbsp; ✓
              Nächster Termin in 48h
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "48px 24px 32px",
            maxWidth: 1100,
            margin: "0 auto",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 40,
              marginBottom: 32,
            }}
          >
            {/* Logo & Description */}
            <div style={{ maxWidth: 260 }}>
              <Link href="/" style={{ display: "inline-block" }}>
                <img
                  src="/logo.png"
                  alt="TalentSuite Logo"
                  style={{ height: 30, marginBottom: 12 }}
                />
              </Link>
            </div>

            {/* Services Links */}
            <div>
              <h4
                style={{
                  color: WHITE,
                  fontSize: 13,
                  fontWeight: 700,
                  margin: "0 0 12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Dienstleistungen
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {[
                  {
                    label: "Performance Recruiting",
                    href: "/services/performanceRecruiting",
                  },
                  {
                    label: "Neukundengewinnung",
                    href: "/services/customerAcquisition",
                  },
                  {
                    label: "Fullservice E-Commerce",
                    href: "/services/ecommerce",
                  },
                  {
                    label: "Social Media Management",
                    href: "/services/socialMediaManagement",
                  },
                  {
                    label: "Content Produktion",
                    href: "/services/contentProduktion",
                  },
                  {
                    label: "Webentwicklung",
                    href: "/services/webDevelopment",
                  },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    style={{
                      color: LIGHT_GRAY,
                      textDecoration: "none",
                      fontSize: 13,
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Region Links */}
            <div>
              <h4
                style={{
                  color: WHITE,
                  fontSize: 13,
                  fontWeight: 700,
                  margin: "0 0 12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Mitarbeitergewinnung in der Region
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {[
                  {
                    label: "Märkischer Kreis",
                    href: "/blog/mitarbeitergewinnung-maerkischer-kreis",
                  },
                  {
                    label: "Südwestfalen",
                    href: "/blog/mitarbeitergewinnung-suedwestfalen",
                  },
                  {
                    label: "Iserlohn",
                    href: "/blog/mitarbeitergewinnung-iserlohn",
                  },
                  {
                    label: "Hemer",
                    href: "/blog/mitarbeitergewinnung-hemer",
                  },
                  {
                    label: "Menden",
                    href: "/blog/mitarbeitergewinnung-menden",
                  },
                  {
                    label: "Hagen",
                    href: "/blog/mitarbeitergewinnung-hagen",
                  },
                  {
                    label: "Lüdenscheid",
                    href: "/blog/mitarbeitergewinnung-luedenscheid",
                  },
                  {
                    label: "Dortmund",
                    href: "/blog/mitarbeitergewinnung-dortmund",
                  },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    style={{
                      color: LIGHT_GRAY,
                      textDecoration: "none",
                      fontSize: 12,
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 20,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p
              style={{
                color: LIGHT_GRAY,
                fontSize: 12,
                margin: 0,
                opacity: 0.6,
              }}
            >
              Copyright © 2026 TalentSuite – Alle Rechte vorbehalten.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
              }}
            >
              {[
                { label: "Datenschutzerklärung", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
                { label: "Impressum", href: "/impressum" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  style={{
                    color: LIGHT_GRAY,
                    textDecoration: "none",
                    fontSize: 12,
                    opacity: 0.6,
                    transition: "opacity 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
