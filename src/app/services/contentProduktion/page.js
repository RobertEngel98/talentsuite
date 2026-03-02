"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const contentData = [
  { img: "/assets/review-img.png", name: "Kein einheitliches Markenbild — Vertrauen geht verloren" },
  { img: "/assets/review-img.png", name: "Content ohne Strategie verbrennt Budget und Zeit" },
  { img: "/assets/review-img.png", name: "Stock-Fotos und Handy-Videos wirken unprofessionell" },
  { img: "/assets/review-img.png", name: "Interne Teams sind überlastet — Content bleibt liegen" },
];

const contentSolutions = [
  {
    number: "01",
    title: "Content-Strategie & Redaktionsplanung",
    desc: "Ein klarer Plan für 30+ Tage Content — abgestimmt auf deine Zielgruppe und deine Umsatzziele.",
  },
  {
    number: "02",
    title: "Professionelle Video-Produktion",
    desc: "Employer Branding, Imagefilme und Social Clips — in einer Qualität, die Vertrauen aufbaut und Reichweite erzeugt.",
  },
  {
    number: "03",
    title: "Fotografie & Bildsprache",
    desc: "Authentische Team-, Produkt- und Eventfotos, die deine Marke greifbar machen — kein Stock, kein Fake.",
  },
  {
    number: "04",
    title: "Social Media Content",
    desc: "Plattformgerechte Reels, Stories und Posts — optimiert für bis zu 5x mehr Engagement als Branchendurchschnitt.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Premium-Content, der Vertrauen aufbaut und verkauft" },
  { image: "/assets/step2.svg", desc: "Bis zu 5x mehr Engagement durch authentische Inhalte" },
  { image: "/assets/step3.svg", desc: "Ein durchgängiges Markenbild auf allen Kanälen" },
  { image: "/assets/step4.svg", desc: "20+ Stunden Zeitersparnis pro Monat durch Full-Service" },
];

const contentTestimonials = [
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR – Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
  },
  {
    name: "Jan Röhrig",
    role: "Leitung Merchandise & E-Commerce – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/jan.png",
    review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse. Ein echtes Fullservice-Erlebnis.",
  },
];

const ContentProduktion = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Produktion",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://www.talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelle Content Produktion: Video, Fotografie, Social Media Content und Employer Branding für Unternehmen im DACH-Raum.",
    "serviceType": "Content Produktion",
  };

  return (
    <>
      <Head>
        <title>Content Produktion Agentur | Video, Foto & Social Media | TalentSuite</title>
        <meta name="description" content="Professionelle Content Produktion: Videos, Fotos, Social Media Content & Employer Branding. Authentisch, strategisch, wirkungsvoll. Jetzt Beratung buchen." />
        <meta name="keywords" content="Content Produktion, Video Produktion, Employer Branding Video, Social Media Content, Unternehmensfilm, Imagefilm, Content Agentur" />
        <link rel="canonical" href="https://www.talentsuite.io/services/contentProduktion" />
        <meta property="og:title" content="Content Produktion Agentur | TalentSuite" />
        <meta property="og:description" content="Professionelle Videos, Fotos und Social Media Content – authentisch und wirkungsvoll." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Content, der verkauft —<br />nicht nur gefällt.</>}
        description="Wir produzieren Videos, Fotos und Social Media Content, der deine Marke zur ersten Wahl macht — messbar mehr Reichweite, mehr Vertrauen, mehr Abschlüsse."
        buttonText="Jetzt Content-Beratung buchen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="Content Produktion – Video, Foto und Social Media Content"
      />

      <Traditional
        title="Durchschnittlicher Content kostet dich Kunden — jeden einzelnen Tag."
        description="Nutzer scrollen in 1,7 Sekunden an deinem Post vorbei. Wer mit Stock-Fotos und planlosen Inhalten arbeitet, verliert gegen Marken mit professioneller Präsenz — egal wie gut das Produkt ist."
        data={contentData}
      />

      <Solution
        title="Content, der deine Marke zur Branchenreferenz macht."
        description="Von der Strategie bis zum fertigen Asset — wir liefern dir Content, der deine Zielgruppe stoppt, überzeugt und konvertiert. Alles aus einer Hand, ohne internen Aufwand."
        items={contentSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="50+ Unternehmen vertrauen auf unsere Content-Produktion"
        description="Keine Stockfotos, keine leeren Versprechen — echte Ergebnisse von Unternehmen, die mit professionellem Content wachsen."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch Premium-Content? Jetzt Termin sichern"
        testimonialData={contentTestimonials}
      />

      <Appointment
        heading="In 30 Minuten zeigen wir dir, welcher Content deine Marke sichtbar macht und Kunden überzeugt — kostenlos und unverbindlich."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default ContentProduktion;
