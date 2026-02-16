"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const webDevData = [
  { img: "/assets/review-img.png", name: "Veraltetes Design, das nicht mehr überzeugt" },
  { img: "/assets/review-img.png", name: "Keine mobile Optimierung" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten und schlechte Performance" },
  { img: "/assets/review-img.png", name: "Keine Conversion-Optimierung" },
];

const webDevSolutions = [
  {
    number: "01",
    title: "UX/UI Design & Konzeption",
    desc: "Nutzerzentriertes Design, das überzeugt und konvertiert – auf jedem Gerät.",
  },
  {
    number: "02",
    title: "Webentwicklung & Programmierung",
    desc: "Moderne Technologien (React, Next.js, Shopify) für maximale Performance und Skalierbarkeit.",
  },
  {
    number: "03",
    title: "SEO & Performance-Optimierung",
    desc: "Technisches SEO, Core Web Vitals und schnelle Ladezeiten für bessere Rankings.",
  },
  {
    number: "04",
    title: "Wartung & Weiterentwicklung",
    desc: "Kontinuierliche Optimierung, Updates und Support – damit deine Website immer aktuell bleibt.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Website, die Vertrauen schafft" },
  { image: "/assets/step2.svg", desc: "Bessere Rankings durch technisches SEO" },
  { image: "/assets/step3.svg", desc: "Höhere Conversion durch optimierte User Experience" },
  { image: "/assets/step4.svg", desc: "Zukunftssichere Technologie, die mitwächst" },
];

const webDevTestimonials = [
  {
    name: "Jan Röhrig",
    role: "Leitung Merchandise & E-Commerce – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/jan.png",
    review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Abteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse.",
  },
];

const WebDevelopment = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelle Webentwicklung: UX/UI Design, React & Next.js Entwicklung, SEO-Optimierung und Wartung für Unternehmen im DACH-Raum.",
    "serviceType": "Webentwicklung",
  };

  return (
    <>
      <Head>
        <title>Webentwicklung Agentur | UX Design & SEO | TalentSuite</title>
        <meta name="description" content="Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO-Optimierung und Wartung. Websites, die überzeugen und konvertieren. Jetzt Beratung buchen." />
        <meta name="keywords" content="Webentwicklung, Web Development, Website erstellen, UX Design, SEO Optimierung, React Agentur, Next.js Agentur, Webdesign Agentur" />
        <link rel="canonical" href="https://talentsuite.io/services/webDevelopment" />
        <meta property="og:title" content="Webentwicklung Agentur | TalentSuite" />
        <meta property="og:description" content="Professionelle Websites mit React & Next.js – UX-optimiert, SEO-freundlich, performant." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Deine Website ist dein<br />bester Vertriebler –<br />24/7.</>}
        description="Wir entwickeln performante, SEO-optimierte Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln."
        buttonText="Jetzt Web-Beratung buchen"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
        imageSrc="/assets/services-img.png"
        imageAlt="Webentwicklung – Moderne Websites mit React und Next.js"
      />

      <Traditional
        title="Deine Website verliert Kunden – jeden Tag."
        description="Eine veraltete, langsame oder schlecht strukturierte Website kostet dich täglich potenzielle Kunden. Besucher entscheiden in Sekunden, ob sie bleiben oder gehen. Ohne moderne Technik und klare Nutzerführung verlierst du Umsatz."
        data={webDevData}
      />

      <Solution
        title="Unsere Lösung: Webentwicklung, die konvertiert"
        description="Wir entwickeln Websites, die nicht nur gut aussehen, sondern messbar performen – von der Konzeption über die Entwicklung bis zur SEO-Optimierung."
        items={webDevSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Was unsere Kunden über die Web-Zusammenarbeit sagen – echte Ergebnisse aus verschiedenen Branchen."
        link="https://calendar.app.google/mU29snzEsgqsnMXy8"
        linkText="Auch eine bessere Website? Jetzt Termin sichern"
        testimonialData={webDevTestimonials}
      />

      <Appointment
        heading="Lass uns gemeinsam eine Website bauen, die Vertrauen schafft und Kunden gewinnt."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendar.app.google/mU29snzEsgqsnMXy8"
      />
    </>
  );
};

export default WebDevelopment;
