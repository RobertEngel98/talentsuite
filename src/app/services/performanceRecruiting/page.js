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
  { img: "/assets/review-img.png", name: "Hohe Streuverluste bei Stellenanzeigen" },
  { img: "/assets/review-img.png", name: "Keine oder unqualifizierte Bewerbungen" },
  { img: "/assets/review-img.png", name: "Leerläufe in der HR-Abteilung" },
  { img: "/assets/review-img.png", name: "Fehlbesetzungen kosten Zeit und Geld" },
];

const performanceSolutions = [
  {
    number: "01",
    title: "Zielgruppenanalyse",
    desc: "Wer sind deine Wunschbewerber:innen und wo halten sie sich digital auf?",
  },
  {
    number: "02",
    title: "Social Performance Kampagnen",
    desc: "Meta, TikTok & Co: Performance Ads, die Aufmerksamkeit erzeugen und qualifizierte Bewerbungen generieren.",
  },
  {
    number: "03",
    title: "Landingpages mit Pre-Qualifikation",
    desc: "Bewerben in unter 60 Sekunden – mobiloptimiert & automatisch filterbar.",
  },
  {
    number: "04",
    title: "Automatisierte Bewerberweiterleitung",
    desc: "Direkt in dein E-Mail-Postfach oder Bewerber-Tool – ohne manuellen Aufwand.",
  },
];

const pageTitle = "Was du bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Mehr qualifizierte Bewerbungen" },
  { image: "/assets/step2.svg", desc: "Kürzere Time-to-Hire" },
  { image: "/assets/step3.svg", desc: "Kandidat:innen, die wirklich passen" },
  { image: "/assets/step4.svg", desc: "Planbare Recruiting-Kosten" },
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
      "url": "https://talentsuite.io",
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
        <link rel="canonical" href="https://talentsuite.io/services/performanceRecruiting" />
        <meta property="og:title" content="Performance Recruiting Agentur | TalentSuite" />
        <meta property="og:description" content="Qualifizierte Bewerbungen über Social Media Ads. Datenbasiert, messbar, planbar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/performanceRecruiting" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <MainSection
        title={<>Dein Recruiting braucht<br />kein Glück –<br />es braucht System.</>}
        description="Wir helfen dir, passende Bewerber:innen zu gewinnen – mit datenbasierten Kampagnen, smarten Funnels und hoher Abschlussquote."
        buttonText="Jetzt Beratungsgespräch buchen"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting – Qualifizierte Bewerbungen über Social Media"
      />

      <Traditional
        title="Klassisches Recruiting ist tot."
        description="Die Zeiten, in denen man mit einem Stelleninserat auf die richtigen Kandidat:innen warten konnte, sind vorbei. Heute konkurrierst du um Talente – vor allem auf Social Media, nicht auf Jobbörsen."
        data={performanceAcquisitionData}
      />

      <Solution
        title="Unsere Lösung: Performance Recruiting"
        description="Wir bringen deine Jobs dorthin, wo sich deine Zielgruppe täglich bewegt – in Social Feeds und auf mobilen Geräten. Mit einem Recruiting-Funnel, der funktioniert."
        items={performanceSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Was unsere Kunden über die Zusammenarbeit sagen – echte Ergebnisse, echte Stimmen aus verschiedenen Branchen."
        link="https://calendar.app.google/mU29snzEsgqsnMXy8"
        linkText="Auch so recruitern? Jetzt Termin sichern"
        testimonialData={performanceAcquisitionTestimonials}
      />

      <Appointment
        heading="Wir zeigen dir in einem kostenlosen Gespräch, wie dein Unternehmen von Performance Recruiting profitieren kann."
        buttonText="Jetzt Termin buchen"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
      />
    </>
  );
};

export default PerformanceRecruiting;
