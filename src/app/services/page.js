"use client";
import React from "react";
import Head from "next/head";
import MainSection from "./components/mainSection";
import Steps from "./components/steps";
import Testimonials from "./components/testimonials";
import Solution from "./components/solution";
import Traditional from "./components/traditional";
import Appointment from "./components/appointment";

const contentData = [
  { img: "/assets/review-img.png", name: "Kein konsistentes Markenbild" },
  { img: "/assets/review-img.png", name: "Content ohne Strategie oder Zielgruppe" },
  { img: "/assets/review-img.png", name: "Keine professionellen Video- oder Foto-Assets" },
  { img: "/assets/review-img.png", name: "Interne Ressourcen überfordert" },
];

const contentSolutions = [
  {
    number: "01",
    title: "Content-Strategie & Redaktionsplanung",
    desc: "Klare Themen, Formate und Kanäle – abgestimmt auf deine Business-Ziele.",
  },
  {
    number: "02",
    title: "Professionelle Video-Produktion",
    desc: "Employer Branding Videos, Imagefilme, Social Clips und Produktvideos in Kinoqualität.",
  },
  {
    number: "03",
    title: "Fotografie & Bildsprache",
    desc: "Authentische Team-, Produkt- und Eventfotos, die deine Marke greifbar machen.",
  },
  {
    number: "04",
    title: "Social Media Content",
    desc: "Plattformgerechte Reels, Stories und Posts – optimiert für Reichweite und Engagement.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Inhalte, die deine Marke stärken" },
  { image: "/assets/step2.svg", desc: "Mehr Engagement durch authentischen Content" },
  { image: "/assets/step3.svg", desc: "Konsistente Bildsprache über alle Kanäle" },
  { image: "/assets/step4.svg", desc: "Zeitersparnis durch Full-Service-Produktion" },
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
      "url": "https://talentsuite.io",
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
        <link rel="canonical" href="https://talentsuite.io/services/contentProduktion" />
        <meta property="og:title" content="Content Produktion Agentur | TalentSuite" />
        <meta property="og:description" content="Professionelle Videos, Fotos und Social Media Content – authentisch und wirkungsvoll." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Content, der wirkt –<br />nicht nur gefällt.</>}
        description="Wir produzieren Videos, Fotos und Social Media Content, der deine Marke authentisch zeigt und messbare Ergebnisse liefert."
        buttonText="Jetzt Content-Beratung buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Content Produktion – Video, Foto und Social Media Content"
      />

      <Traditional
        title="Ohne starken Content bleibt deine Marke unsichtbar."
        description="In einer Welt voller Reize und kurzer Aufmerksamkeitsspannen entscheidet die Qualität deines Contents über Sichtbarkeit, Vertrauen und Conversions. Generischer Stock-Content reicht nicht mehr."
        data={contentData}
      />

      <Solution
        title="Unsere Lösung: Content Produktion mit Strategie"
        description="Wir entwickeln und produzieren Content, der auf deine Zielgruppe und deine Business-Ziele zugeschnitten ist – von der Konzeption bis zur fertigen Auslieferung."
        items={contentSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Was unsere Kunden über die Content-Zusammenarbeit sagen – echte Ergebnisse aus verschiedenen Branchen."
        link="https://calendly.com/talentsuite"
        linkText="Auch besseren Content? Jetzt Termin sichern"
        testimonialData={contentTestimonials}
      />

      <Appointment
        heading="Lass uns gemeinsam Content produzieren, der deine Marke auf das nächste Level hebt."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default ContentProduktion;
