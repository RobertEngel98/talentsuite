"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const customerAcquisitionData = [
  { img: "/assets/review-img.png", name: "Kein planbarer Leadflow — Umsatz bleibt Zufall" },
  { img: "/assets/review-img.png", name: "Abhängigkeit von Empfehlungen und persönlichen Kontakten" },
  { img: "/assets/review-img.png", name: "Werbebudget verbrennt ohne messbare Ergebnisse" },
  { img: "/assets/review-img.png", name: "Vertrieb verschwendet 60 % seiner Zeit mit unqualifizierten Leads" },
];

const customerSolutions = [
  {
    number: "01",
    title: "Zielgruppen- & Marktanalyse",
    desc: "Wir identifizieren deine profitabelsten Kundensegmente — damit jeder Euro Werbebudget wirkt.",
  },
  {
    number: "02",
    title: "Positionierung & Messaging",
    desc: "Klare Botschaften, die dich vom Wettbewerb abheben — und Kaufentscheidungen beschleunigen.",
  },
  {
    number: "03",
    title: "Digitale Kampagnen",
    desc: "Meta, Google, TikTok oder LinkedIn — datengetrieben optimiert für 15–40 qualifizierte Leads pro Monat.",
  },
  {
    number: "04",
    title: "Landingpages & Funnelaufbau",
    desc: "Conversion-optimierte Funnels, die aus Klicks zahlende Kunden machen — messbar bis zum Abschluss.",
  },
];

const pageTitle = "Was du erreichst";
const steps = [
  { image: "/assets/step1.svg", desc: "Planbarer Leadflow — 15–40 qualifizierte Anfragen pro Monat" },
  { image: "/assets/step2.svg", desc: "Bis zu 3x höhere Conversion Rate durch optimierte Funnels" },
  { image: "/assets/step3.svg", desc: "Null Kaltakquise — nur echte Interessenten im Postfach" },
  { image: "/assets/step4.svg", desc: "Transparente KPIs vom Klick bis zum unterschriebenen Vertrag" },
];

const customerAcquisitionTestimonials = [
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse – von Content bis Neukundengewinnung.",
  },
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater gewinnen. Die Prozesse laufen sauber und messbar.",
  },
];

const CustomerAcquisition = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digitale Neukundengewinnung",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://www.talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Performancebasierte Neukundengewinnung mit digitalen Kampagnen, Funnels und Lead-Automatisierung für B2B und B2C Unternehmen.",
    "serviceType": "Neukundengewinnung",
  };

  return (
    <>
      <Head>
        <title>Neukundengewinnung Agentur | Digitale Leadgenerierung | TalentSuite</title>
        <meta name="description" content="Digitale Neukundengewinnung mit System: Meta Ads, Google Ads, LinkedIn & Funnel-Strategien. Planbar neue Kunden gewinnen. Jetzt kostenloses Erstgespräch." />
        <meta name="keywords" content="Neukundengewinnung, Leadgenerierung, digitale Kundengewinnung, Performance Marketing, Funnel Marketing, B2B Leads, Kundenakquise" />
        <link rel="canonical" href="https://www.talentsuite.io/services/customerAcquisition" />
        <meta property="og:title" content="Neukundengewinnung Agentur | TalentSuite" />
        <meta property="og:description" content="Planbar neue Kunden gewinnen – mit datenbasierten Kampagnen und automatisierten Funnels." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Neue Kunden gewinnen —<br />planbar, automatisiert<br />und ohne Kaltakquise.</>}
        description="Wir bauen dir eine digitale Kundengewinnungsmaschine, die jeden Monat 15–40 qualifizierte Anfragen liefert — messbar, skalierbar und unabhängig von Empfehlungen."
        buttonText="Jetzt Strategiegespräch vereinbaren"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="Neukundengewinnung – Digitale Leadgenerierung mit System"
      />

      <Traditional
        title="Jeden Tag verlierst du Kunden an Wettbewerber, die digital sichtbar sind."
        description="87 % der Kaufentscheidungen beginnen heute online. Ohne funktionierende Pipeline, ohne klare Botschaft und ohne digitalen Funnel bleibt dein Wachstum Zufall — während deine Konkurrenz die Anfragen einsammelt."
        data={customerAcquisitionData}
      />

      <Solution
        title="Dein System für planbare Neukundengewinnung — ab dem ersten Monat."
        description="Wir bauen dir einen datenbasierten Prozess, der automatisiert qualifizierte Leads generiert — ohne Kaltakquise, ohne Streuverluste, ohne Rätselraten."
        items={customerSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="50+ Unternehmen wachsen bereits mit unserem System"
        description="Keine leeren Versprechen — echte Ergebnisse von Unternehmen, die heute planbar Kunden gewinnen."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch planbar wachsen? Jetzt Termin sichern"
        testimonialData={customerAcquisitionTestimonials}
      />

      <Appointment
        heading="In 30 Minuten zeigen wir dir, wie du ab nächsten Monat planbar neue Kunden gewinnst — kostenlos und unverbindlich."
        buttonText="Jetzt Erstgespräch buchen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default CustomerAcquisition;
