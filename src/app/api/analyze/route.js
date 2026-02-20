import { NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const SYSTEM_PROMPT = `Du bist ein Senior Digital Marketing Consultant bei TalentSuite – Experte für Performance Recruiting im DACH-Markt. Du analysierst Webseiten von potenziellen Kunden (mittelständische Unternehmen in Bau/Handwerk, Gesundheitswesen, Gastronomie, Fertigung, Logistik).

Deine Analyse ist IMMER:
- Konkret und umsetzbar (keine generischen Tipps)
- Datengetrieben mit geschätzten Metriken
- Auf die Branche des Kunden zugeschnitten
- In professionellem Deutsch verfasst
- Fokussiert auf Recruiting & Employer Branding Potenzial

Formatiere IMMER mit Markdown:
- Verwende ## für Hauptüberschriften
- Verwende ### für Unterüberschriften
- Verwende **fett** für wichtige Begriffe
- Verwende Aufzählungen für Listen
- Verwende > für wichtige Hinweise/Empfehlungen
- Verwende --- für Trennlinien zwischen Abschnitten`;

const PROMPTS = {
  seo: (url) => `Analysiere die Webseite ${url} und erstelle eine umfassende SEO-Analyse:

## 1. Technisches SEO
- Geschätzte Ladezeit und Core Web Vitals Bewertung
- Mobile-Optimierung
- SSL/HTTPS Status
- Sitemap & Robots.txt Einschätzung
- Strukturierte Daten (Schema.org)

## 2. On-Page SEO
- Title Tags & Meta Descriptions (Qualität & Optimierungspotenzial)
- Überschriften-Struktur (H1-H6)
- Keyword-Analyse: Welche Keywords werden bedient, welche fehlen?
- Content-Qualität und -Umfang
- Interne Verlinkung

## 3. Lokales SEO
- Google My Business Optimierungspotenzial
- Lokale Keywords & NAP-Konsistenz
- Bewertungsmanagement

## 4. Wettbewerbsanalyse
- Geschätzte Domain Authority
- Backlink-Profil Einschätzung
- Content-Gap-Analyse vs. Wettbewerber

## 5. Quick Wins (Top 5 sofort umsetzbare Maßnahmen)
Priorisiert nach Impact und Aufwand.

## 6. SEO-Score
Gib einen Score von 0-100 mit Begründung.`,

  google: (url) => `Erstelle ein vollständiges Google Ads Setup-Konzept für ${url}:

## 1. Kampagnenstruktur
- Empfohlene Kampagnentypen (Search, Display, Performance Max)
- Account-Struktur mit Kampagnen und Anzeigengruppen
- Budget-Empfehlung (monatlich) mit erwarteten KPIs

## 2. Keyword-Strategie
- Top 20 Keywords mit geschätztem Suchvolumen und CPC
- Negative Keywords Liste
- Match-Type Empfehlungen
- Keyword-Gruppierung nach Intent

## 3. Anzeigen-Setup
- 3 responsive Suchanzeigen (vollständig ausformuliert)
- Sitelink-Erweiterungen (4 Stück)
- Callout-Erweiterungen
- Snippet-Erweiterungen

## 4. Landingpage-Empfehlungen
- Welche Seiten als Landingpages nutzen
- Optimierungsvorschläge für Conversion Rate
- Call-to-Action Empfehlungen

## 5. Tracking & Conversion Setup
- Empfohlene Conversion-Aktionen
- Google Tag Manager Konfiguration
- Remarketing-Audiences

## 6. Budget & Prognose
- Monatliches Budget (3 Szenarien: Start, Growth, Scale)
- Erwartete Klicks, Impressions, CTR, CPA
- ROI-Prognose nach 3 und 6 Monaten`,

  ux: (url) => `Erstelle eine SEO-optimierte UX/UI Redesign-Analyse für ${url}:

## 1. Ist-Zustand Analyse
- Erste Impression & Gesamteindruck
- Visuelle Hierarchie Bewertung
- Navigationsstruktur
- Mobile Experience
- Ladezeiten-Impact auf UX

## 2. Conversion-Optimierung
- Aktuelle Conversion-Pfade (Stärken/Schwächen)
- CTA-Analyse (Platzierung, Design, Text)
- Formular-Optimierung
- Trust-Elemente (Bewertungen, Zertifikate, Referenzen)
- Above-the-fold Optimierung

## 3. SEO-optimiertes Redesign Konzept
- Seitenstruktur (Sitemap-Vorschlag)
- Hero-Section Konzept mit SEO-Heading-Struktur
- Content-Blöcke mit Keyword-Integration
- Interne Verlinkungsstrategie im Design

## 4. Design-Empfehlungen
- Farbschema-Vorschlag (basierend auf Branche)
- Typografie-Empfehlung
- Bildsprache & Medien-Strategie
- Whitespace & Layout-Prinzipien
- Micro-Interactions für bessere UX

## 5. Employer Branding Integration
- Karriereseite Best Practices
- Mitarbeiter-Testimonials Integration
- Bewerbungsprozess UX-Optimierung
- Social Proof Elemente

## 6. Priorisierter Maßnahmenplan
Top 10 Änderungen sortiert nach Impact (hoch/mittel/niedrig) und Aufwand.`,

  meta: (url) => `Erstelle eine vollständige Meta Ads Strategie (Facebook & Instagram) für ${url}, fokussiert auf Performance Recruiting:

## 1. Zielgruppen-Strategie
- Core Audiences (3-5 Zielgruppen detailliert definiert)
- Custom Audiences Empfehlungen
- Lookalike Audiences Aufbau
- Retargeting-Strategie

## 2. Kampagnen-Funnel
- TOFU: Awareness-Kampagnen (Reichweite, Video Views)
- MOFU: Consideration (Traffic, Engagement)
- BOFU: Conversion (Lead Ads, Bewerbungen)
- Retargeting-Sequenz

## 3. Creative-Strategie
- 5 Anzeigen-Konzepte (detailliert beschrieben)
- Video vs. Image Empfehlungen
- Carousel-Ads Konzepte
- Story/Reels Formate
- UGC & Authentizität-Tipps

## 4. Anzeigentexte
- 3 Primary Texts (ausformuliert, für Recruiting)
- Headlines & Descriptions
- CTA-Empfehlungen
- Emoji-Strategie

## 5. Budget & Bidding
- Tagesbudget Empfehlung (3 Szenarien)
- Bidding-Strategie pro Funnel-Stufe
- A/B Testing Plan
- Skalierungs-Roadmap

## 6. KPI-Framework
- Erwartete CPM, CPC, CPL, Cost per Application
- Benchmarks für die Branche (TalentSuite-typisch: Cost per Application 15-25€, Conversion Rate 12-18%)
- Reporting-Dashboard Empfehlung
- Optimierungs-Rhythmus (wöchentlich/monatlich)`,
};

export async function POST(request) {
  try {
    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "API Key nicht konfiguriert. Bitte ANTHROPIC_API_KEY als Environment Variable in Vercel setzen." },
        { status: 500 }
      );
    }

    const { module, url, password } = await request.json();

    // Passwort-Check serverseitig
    if (password !== process.env.ANALYZER_PASSWORD) {
      return NextResponse.json({ error: "Ungültiges Passwort." }, { status: 401 });
    }

    if (!module || !url) {
      return NextResponse.json({ error: "Modul und URL sind erforderlich." }, { status: 400 });
    }

    if (!PROMPTS[module]) {
      return NextResponse.json({ error: "Ungültiges Modul." }, { status: 400 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          { role: "user", content: PROMPTS[module](url) },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message || "Claude API Fehler" },
        { status: 500 }
      );
    }

    const text = data.content?.map((c) => c.text || "").join("") || "";

    return NextResponse.json({ result: text, module, url });
  } catch (err) {
    console.error("Analyze API error:", err);
    return NextResponse.json(
      { error: "Interner Server-Fehler: " + err.message },
      { status: 500 }
    );
  }
}
