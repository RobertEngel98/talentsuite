"use client";
import React from "react";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const ecommerceAcquisitionData = [
  {
    img: "/assets/review-img.png",
    name: "Keine klare E-Commerce-Strategie",
  },
  { img: "/assets/review-img.png", name: "Hohe Abbruchraten im Bestellprozess" },
  {
    img: "/assets/review-img.png",
    name: "Fehlende Verzahnung von Marketing und Technik",
  },
  {
    img: "/assets/review-img.png",
    name: "Mangelnde Skalierbarkeit und Performance",
  },
  // { img: "/assets/review-img.png", name: "Lack of scalability and performance" },
];
const ecommerceSolutions = [
  {
    number: "01",
    title: "E-Commerce Strategie & Consulting",
    desc: "Marktanalyse, Zielgruppendefinition und Wettbewerb.",
  },
  {
    number: "02",
    title: "Shop Entwicklung & Technik",
    desc: "Performante, skalierbare und sichere Plattformen (Shopify).",
  },
  {
    number: "03",
    title: "Logistik & Automatisierung",
    desc: "Verbindung moderner Fulfillment- und Logistikprozesse",
  },
  {
    number: "04",
    title: "Content & Marketing",
    desc: "Produkttexte, SEO, Paid Ads, Social Media.",
  },
];

const pageTitle = "Deine Vorteile";
const steps = [
  {
    image: "/assets/step1.svg",
    desc: "Maßgeschneiderte Shop-Lösung für dein Business",
  },
  {
    image: "/assets/step2.svg",
    desc: "Optimierte Nutzererfahrung für höhere Umsätze",
  },
  {
    image: "/assets/step3.svg",
    desc: "Mehr Sichtbarkeit und Traffic durch gezieltes Marketing",
  },
  {
    image: "/assets/step4.svg",
    desc: "Skalierbarkeit und Stabilität für nachhaltiges Wachstum",
  },
];

const ecommerceAcquisitionTestimonials = [
  {
    name: "Jan Röhrig",
    role: "Head of Merchandising & E-Commerce",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review:
      "TalentSuite hat nicht nur unser komplettes Re-Platforming geplant und technisch umgesetzt, sondern auch die vollautomatisierte Logistikkette für uns aufgebaut. Wir arbeiten jetzt schon im dritten Jahr sehr eng zusammen und entwickeln gemeinsam eine ganzheitliche E-Commerce-Strategie, die uns professioneller macht, Zeit spart und gleichzeitig ein signifikantes Umsatzwachstum ermöglicht.",
  },
  {
    name: "Jan Röhrig",
    role: "Head of Merchandising & E-Commerce",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review:
      "TalentSuite hat nicht nur unser komplettes Re-Platforming geplant und technisch umgesetzt, sondern auch die vollautomatisierte Logistikkette für uns aufgebaut. Wir arbeiten jetzt schon im dritten Jahr sehr eng zusammen und entwickeln gemeinsam eine ganzheitliche E-Commerce-Strategie, die uns professioneller macht, Zeit spart und gleichzeitig ein signifikantes Umsatzwachstum ermöglicht.",
  },
];

const eComerce = () => {
  return (
    <>
      <MainSection
        title="Dein E-Commerce braucht mehr als nur einen Shop."
        description="Wir begleiten dich von der Strategie über Technik bis hin zu Marketing damit dein Onlinehandel nachhaltig wächst."
        buttonText="Jetzt Beratungsgespräch anfragen"
        buttonLink="/contact"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting Services"
      />
      <Traditional
        title="Viele E-Commerce Projekte scheitern an fehlender Strategie und Umsetzung."
        description="Ein Onlineshop allein reicht heute nicht aus, um erfolgreich zu sein. Komplexe technische Anforderungen, wechselnde Kundenbedürfnisse und ein dynamisches Wettbewerbsumfeld stellen viele Händler vor große Herausforderungen."
        data={ecommerceAcquisitionData}
      />
      <Solution title="Unsere Lösung: Fullservice E-Commerce aus einer Hand" description="Wir entwickeln für dich eine individuelle E-Commerce-Strategie und setzen sie technisch und marketingseitig konsequent um." items={ecommerceSolutions} />
      <Steps title={pageTitle} stepsData={steps} />
      <Testimonials
        title="Kundenstimmen"
        description="Wir machen Marketing einfach mit smarten Strategien, Echtzeit-Performance-Tracking und ergebnisorientierten Kampagnen, die weltweit Wachstum ermöglichen."
        link="/contact"
        linkText="Kontaktieren Sie uns"
        testimonialData={ecommerceAcquisitionTestimonials}
      />
      <Appointment heading="Lass uns gemeinsam deine E-Commerce-Potenziale entfesseln. Vereinbare jetzt ein kostenloses Erstgespräch." buttonText="Jetzt Termin anfragen" buttonLink="/contact" />
    </>
  );
};

export default eComerce;
