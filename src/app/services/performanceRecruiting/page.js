"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const performanceAcquisitionData = [
  { img: "/assets/review-img.png", name: "80% Streuverluste bei Stellenanzeigen" },
  { img: "/assets/review-img.png", name: "Keine oder unqualifizierte Bewerbungen seit Wochen" },
  { img: "/assets/review-img.png", name: "HR-Abteilung wartet — Stellen bleiben Ø 155 Tage offen" },
  { img: "/assets/review-img.png", name: "Fehlbesetzungen kosten dich 30.000–50.000 € pro Fall" },
];

const performanceSolutions = [
  {
    number: "01",
    title: "Zielgruppenanalyse",
    desc: "Wir identifizieren exakt, wo sich deine Wunschkandidaten digital aufhalten — und wie wir sie ansprechen.",
  },
  {
    number: "02",
    title: "Social Performance Kampagnen",
    desc: "Meta, TikTok & LinkedIn: Performance Ads, die Ø 40+ qualifizierte Bewerbungen pro Monat generieren.",
  },
  {
    number: "03",
    title: "60-Sekunden-Bewerbungsfunnel",
    desc: "Mobiloptimierte Landingpages mit Pre-Qualifikation — 10–14% Conversion-Rate statt branchenüblicher 2%.",
  },
  {
    number: "04",
    title: "Automatisierte Weiterleitung",
    desc: "Qualifizierte Bewerbungen landen direkt in deinem Postfach oder ATS — ohne manuellen Aufwand.",
  },
];

const pageTitle = "Deine Ergebnisse mit Performance Recruiting";
const steps = [
  { image: "/assets/step1.svg", desc: "Ø 40+ qualifizierte Bewerbungen pro Monat" },
  { image: "/assets/step2.svg", desc: "Time-to-Hire von 155 auf unter 30 Tage reduziert" },
  { image: "/assets/step3.svg", desc: "Nur Kandidaten, die wirklich zu dir passen" },
  { image: "/assets/step4.svg", desc: "Planbare Kosten: 16–24 € pro Bewerbung" },
];

const performanceAcquisitionTestimonials = [
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater über Social Recruiting gewinnen. Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen.",
  },
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR – Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse.",
  },
];

const PerformanceRecruiting = () => {
  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Recruiting",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://www.talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Datenbasiertes Social Media Recruiting mit Performance-Kampagnen auf Meta, TikTok & LinkedIn. Qualifizierte Bewerbungen in unter 30 Tagen.",
    "serviceType": "Performance Recruiting",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Kostenloses Erstgespräch",
    },
  };

  return (
    <>
      <Head>
        <title>Performance Recruiting Agentur | Social Media Recruiting | TalentSuite</title>
        <meta name="description" content="Performance Recruiting mit System: Qualifizierte Bewerbungen über Meta, TikTok & LinkedIn Ads. 50+ Unternehmen vertrauen TalentSuite. Jetzt kostenloses Erstgespräch buchen." />
        <meta name="keywords" content="Performance Recruiting, Social Media Recruiting, Personalgewinnung, Bewerberfunnel, Recruiting Agentur, Fachkräftemangel, Social Recruiting DACH" />
        <link rel="canonical" href="https://www.talentsuite.io/services/performanceRecruiting" />
        <meta property="og:title" content="Performance Recruiting Agentur | TalentSuite" />
        <meta property="og:description" content="Qualifizierte Bewerbungen über Social Media Ads. Datenbasiert, messbar, planbar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.talentsuite.io/services/performanceRecruiting" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <MainSection
        title={<>Dein Recruiting braucht<br />kein Glück –<br />es braucht System.</>}
        description="Wir helfen dir, passende Bewerber:innen zu gewinnen – mit datenbasierten Kampagnen, smarten Funnels und hoher Abschlussquote."
        buttonText="Jetzt Beratungsgespräch buchen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting – Qualifizierte Bewerbungen über Social Media"
      />

      <Traditional
        title="Klassisches Recruiting verbrennt dein Budget."
        description="72% der Fachkräfte sind nicht auf Jobbörsen aktiv. Stellenanzeigen erreichen nur 20% des Marktes — zu hohen Kosten und mit Ø 155 Tagen Vakanzzeit. Die Lösung: Geh dorthin, wo deine Kandidaten wirklich sind."
        data={performanceAcquisitionData}
      />

      <Solution
        title="Performance Recruiting: Dein System für planbare Bewerbungen"
        description="Wir bringen deine Jobs dorthin, wo sich 80% deiner Zielgruppe täglich aufhält — in Social Feeds und auf mobilen Geräten. Mit einem Recruiting-Funnel, der nachweislich 10–14% konvertiert."
        items={performanceSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="So bewerten uns unsere Recruiting-Kunden"
        description="Echte Ergebnisse von echten Unternehmen — 5.0 Sterne Durchschnitt aus über 50 Kundenprojekten."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch so recruitern? Jetzt Termin sichern"
        testimonialData={performanceAcquisitionTestimonials}
      />

      <Appointment
        heading="In 20 Minuten zeigen wir dir, wie viele qualifizierte Bewerber in deiner Region über Social Media erreichbar sind."
        buttonText="Kostenlose Recruiting-Analyse sichern"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default PerformanceRecruiting;
