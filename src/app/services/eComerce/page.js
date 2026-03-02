"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const ecommerceData = [
  { img: "/assets/review-img.png", name: "Kein roter Faden — Shop, Marketing und Logistik laufen getrennt" },
  { img: "/assets/review-img.png", name: "Bis zu 70 % Warenkorbabbrüche durch schlechte UX" },
  { img: "/assets/review-img.png", name: "Werbebudget fließt — aber die Conversion stimmt nicht" },
  { img: "/assets/review-img.png", name: "Technik hält mit dem Wachstum nicht Schritt" },
];

const ecommerceSolutions = [
  {
    number: "01",
    title: "E-Commerce Strategie & Consulting",
    desc: "Marktanalyse, Positionierung und Pricing — damit dein Shop vom ersten Tag profitabel läuft.",
  },
  {
    number: "02",
    title: "Shop-Entwicklung & Technik",
    desc: "Conversion-optimierte Shopify-Shops mit unter 2 Sekunden Ladezeit — gebaut für Umsatz, nicht für Schönheit.",
  },
  {
    number: "03",
    title: "Logistik & Automatisierung",
    desc: "Automatisierte Fulfillment-Prozesse, die dir ab 100+ Bestellungen pro Tag den Rücken freihalten.",
  },
  {
    number: "04",
    title: "Content & Marketing",
    desc: "SEO-optimierte Produkttexte, Paid Ads und Social Media — für planbaren Traffic und wiederkehrende Kunden.",
  },
];

const pageTitle = "Deine Vorteile";
const steps = [
  { image: "/assets/step1.svg", desc: "Ein Shop, der auf dein Geschäftsmodell zugeschnitten ist — nicht von der Stange" },
  { image: "/assets/step2.svg", desc: "Bis zu 35 % weniger Warenkorbabbrüche durch optimierte UX" },
  { image: "/assets/step3.svg", desc: "Planbarer Traffic durch SEO, Paid Ads und Social Media" },
  { image: "/assets/step4.svg", desc: "Technik, die mit dir skaliert — von 10 auf 10.000 Bestellungen pro Tag" },
];

const ecommerceTestimonials = [
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
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse.",
  },
];

const ECommerce = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fullservice E-Commerce",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://www.talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Fullservice E-Commerce Agentur: Shopify-Entwicklung, Logistik-Automatisierung, SEO und Performance Marketing für Online-Shops.",
    "serviceType": "E-Commerce Entwicklung",
  };

  return (
    <>
      <Head>
        <title>E-Commerce Agentur | Shopify Entwicklung & Marketing | TalentSuite</title>
        <meta name="description" content="Fullservice E-Commerce Agentur: Shopify-Entwicklung, Logistik, SEO & Performance Marketing. Mehr Umsatz für deinen Online-Shop. Jetzt kostenloses Erstgespräch." />
        <meta name="keywords" content="E-Commerce Agentur, Shopify Entwicklung, Online-Shop erstellen, E-Commerce Beratung, Shop Marketing, Shopify Agentur DACH" />
        <link rel="canonical" href="https://www.talentsuite.io/services/ecommerce" />
        <meta property="og:title" content="E-Commerce Agentur | TalentSuite" />
        <meta property="og:description" content="Fullservice E-Commerce: Von der Shopify-Entwicklung bis zum Marketing – alles aus einer Hand." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Dein Online-Shop verdient<br />mehr Umsatz —<br />nicht mehr Arbeit.</>}
        description="Wir bauen dir einen E-Commerce, der verkauft: Strategie, Shopify-Entwicklung, Marketing und Logistik aus einer Hand — damit du skalierst, ohne im Tagesgeschäft unterzugehen."
        buttonText="Jetzt Beratungsgespräch anfragen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="E-Commerce Agentur – Shopify Entwicklung und Online-Shop Marketing"
      />

      <Traditional
        title="80 % aller Online-Shops bleiben unter ihrem Umsatzpotenzial — deiner auch?"
        description="Ein Onlineshop allein verkauft nicht. Ohne durchdachte UX, ohne Performance-Marketing und ohne saubere Prozesse verlierst du jeden Tag Kunden an Wettbewerber, die das verstanden haben."
        data={ecommerceData}
      />

      <Solution
        title="Dein Fullservice-Partner für E-Commerce, der Umsatz liefert — nicht nur einen Shop."
        description="Wir verbinden Strategie, Technik und Marketing zu einem System, das planbar Umsatz generiert — von der ersten Produktseite bis zur letzten Automatisierung."
        items={ecommerceSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Erfolgreiche Shops, die mit uns gewachsen sind"
        description="Von Startups bis etablierten Marken — echte Ergebnisse von Unternehmen, die heute profitabler verkaufen."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch mehr Umsatz? Jetzt Termin sichern"
        testimonialData={ecommerceTestimonials}
      />

      <Appointment
        heading="In 30 Minuten analysieren wir dein E-Commerce-Potenzial und zeigen dir, wo du Umsatz liegen lässt — kostenlos und unverbindlich."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default ECommerce;
