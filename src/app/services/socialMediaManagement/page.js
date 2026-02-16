"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const socialData = [
  { img: "/assets/review-img.png", name: "Unregelmäßige oder unstrukturierte Content-Planung" },
  { img: "/assets/review-img.png", name: "Keine klare Markenpositionierung" },
  { img: "/assets/review-img.png", name: "Geringe Reichweite trotz hohem Aufwand" },
  { img: "/assets/review-img.png", name: "Keine Verknüpfung mit Recruiting, Sales oder Kampagnen" },
];

const socialSolutions = [
  {
    number: "01",
    title: "Social Audit & Strategieentwicklung",
    desc: "Wir analysieren Status quo, Zielgruppe und Kanäle – und definieren klare Ziele.",
  },
  {
    number: "02",
    title: "Redaktionsplanung & Content-Produktion",
    desc: "Planung, Text, Bild & Video – abgestimmt auf Plattform, Zielgruppe und Tonalität.",
  },
  {
    number: "03",
    title: "Community Management & Monitoring",
    desc: "Aktiver Dialog mit deiner Zielgruppe – inklusive Reporting & Optimierung.",
  },
  {
    number: "04",
    title: "Verknüpfung mit Business-Zielen",
    desc: "Ob Recruiting, Leadgenerierung oder Branding – wir denken Social Media ganzheitlich.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Klare Social-Media-Strategie, abgestimmt auf deine Ziele" },
  { image: "/assets/step2.svg", desc: "Kreative Inhalte mit Wiedererkennungswert" },
  { image: "/assets/step3.svg", desc: "Regelmäßige Posts, professionelles Community Management" },
  { image: "/assets/step4.svg", desc: "Analyse & Reporting mit Fokus auf Impact" },
];

const socialTestimonials = [
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
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse.",
  },
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen. Unser Social Media Auftritt hat sich komplett verändert.",
  },
];

const SocialMediaManagement = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelles Social Media Management: Strategieentwicklung, Content-Produktion, Community Management und Performance Reporting.",
    "serviceType": "Social Media Management",
  };

  return (
    <>
      <Head>
        <title>Social Media Management Agentur | Content & Strategie | TalentSuite</title>
        <meta name="description" content="Professionelles Social Media Management: Strategie, Content-Produktion, Community Management & Reporting. Mehr Reichweite, mehr Wirkung. Jetzt Beratung buchen." />
        <meta name="keywords" content="Social Media Management, Social Media Agentur, Content Marketing, Community Management, Instagram Marketing, LinkedIn Marketing, TikTok Marketing" />
        <link rel="canonical" href="https://talentsuite.io/services/socialMediaManagement" />
        <meta property="og:title" content="Social Media Management Agentur | TalentSuite" />
        <meta property="og:description" content="Social Media, das konvertiert – Strategie, Content & Community Management aus einer Hand." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Social Media, das konvertiert –<br />mehr Sichtbarkeit,<br />mehr Wirkung.</>}
        description="Wir managen deine Social-Media-Kanäle strategisch, kreativ und datengetrieben – damit aus Reichweite echte Ergebnisse werden."
        buttonText="Jetzt Social-Media-Beratung buchen"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
        imageSrc="/assets/services-img.png"
        imageAlt="Social Media Management – Professionelle Betreuung deiner Kanäle"
      />

      <Traditional
        title="Social Media ist voll – aber oft leer an Wirkung."
        description="Viele Unternehmen posten regelmäßig – aber ohne Strategie, klare Botschaft oder Plan. So verpufft das Potenzial von Social Media: keine Community, kein Engagement, kein messbarer Return."
        data={socialData}
      />

      <Solution
        title="Deine Kanäle professionell gemanagt. Deine Marke messbar gestärkt."
        description="Wir übernehmen die komplette Betreuung deiner Social-Media-Kanäle oder begleiten dein Team strategisch. Dabei sorgen wir dafür, dass deine Marke nicht nur sichtbar ist, sondern konvertiert."
        items={socialSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Was unsere Kunden über die Zusammenarbeit sagen – echte Ergebnisse aus dem Social Media Bereich."
        link="https://calendar.app.google/mU29snzEsgqsnMXy8"
        linkText="Auch mehr Reichweite? Jetzt Termin sichern"
        testimonialData={socialTestimonials}
      />

      <Appointment
        heading="Lass uns deine Marke in den sozialen Medien sichtbar, spürbar und erfolgreich machen."
        buttonText="Jetzt Strategiegespräch vereinbaren"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
      />
    </>
  );
};

export default SocialMediaManagement;
