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
  { img: "/assets/review-img.png", name: "Veraltetes Design — Besucher verlassen die Seite in unter 3 Sekunden" },
  { img: "/assets/review-img.png", name: "Nicht mobiloptimiert — 70 % deines Traffics sehen eine kaputte Seite" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten kosten dich bis zu 40 % deiner Conversions" },
  { img: "/assets/review-img.png", name: "Kein Funnel, kein CTA — Besucher kommen und gehen, ohne zu kaufen" },
];

const webDevSolutions = [
  {
    number: "01",
    title: "UX/UI Design & Konzeption",
    desc: "Conversion-optimiertes Design, das Besucher zu Kunden macht — auf Desktop, Tablet und Mobile.",
  },
  {
    number: "02",
    title: "Webentwicklung & Programmierung",
    desc: "React, Next.js oder Shopify — unter 2 Sekunden Ladezeit und gebaut für Wachstum.",
  },
  {
    number: "03",
    title: "SEO & Performance-Optimierung",
    desc: "Technisches SEO und Core Web Vitals im grünen Bereich — für Top-10-Rankings bei Google.",
  },
  {
    number: "04",
    title: "Wartung & Weiterentwicklung",
    desc: "Kontinuierliche Updates, Sicherheits-Patches und neue Features — damit deine Website nie stillsteht.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Eine Website, die innerhalb von 3 Sekunden Vertrauen aufbaut" },
  { image: "/assets/step2.svg", desc: "Top-10-Rankings bei Google durch technisches SEO" },
  { image: "/assets/step3.svg", desc: "Bis zu 3x höhere Conversion Rate durch optimierte UX" },
  { image: "/assets/step4.svg", desc: "Zukunftssichere Technologie, die mit deinem Business skaliert" },
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
      "url": "https://www.talentsuite.io",
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
        <link rel="canonical" href="https://www.talentsuite.io/services/webDevelopment" />
        <meta property="og:title" content="Webentwicklung Agentur | TalentSuite" />
        <meta property="og:description" content="Professionelle Websites mit React & Next.js – UX-optimiert, SEO-freundlich, performant." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Deine Website ist dein<br />bester Vertriebler —<br />24/7, 365 Tage.</>}
        description="Wir bauen dir eine Website, die nicht nur gut aussieht, sondern messbar verkauft — SEO-optimiert, blitzschnell und gebaut, um aus Besuchern zahlende Kunden zu machen."
        buttonText="Jetzt Web-Beratung buchen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="Webentwicklung – Moderne Websites mit React und Next.js"
      />

      <Traditional
        title="Deine Website kostet dich jeden Tag Kunden — und du merkst es nicht."
        description="53 % der mobilen Nutzer verlassen eine Seite, die länger als 3 Sekunden lädt. Jede Sekunde Ladezeit kostet dich 7 % Conversion. Ohne moderne Technik, klare Nutzerführung und mobile Optimierung verlierst du täglich Umsatz an schnellere Wettbewerber."
        data={webDevData}
      />

      <Solution
        title="Websites, die verkaufen — nicht nur existieren."
        description="Wir bauen dir eine Website, die Besucher in Kunden verwandelt — von der Konzeption über die Entwicklung bis zur SEO-Optimierung. Messbar, schnell und auf Wachstum ausgelegt."
        items={webDevSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="50+ Unternehmen vertrauen auf unsere Webentwicklung"
        description="Keine Template-Websites — maßgeschneiderte Lösungen, die messbar mehr Kunden bringen."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch eine Website, die verkauft? Jetzt Termin sichern"
        testimonialData={webDevTestimonials}
      />

      <Appointment
        heading="In 30 Minuten zeigen wir dir, wie deine neue Website zum stärksten Vertriebskanal wird — kostenlos und unverbindlich."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default WebDevelopment;
