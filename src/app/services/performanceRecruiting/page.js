"use client";
import React from "react";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const performanceAcquisitionData = [
  { img: "/assets/review-img.png", name: "Hohe Streuverluste" },
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
    desc: "Meta, TikTok & Co: Performance Ads, die Aufmerksamkeit erzeugen.",
  },
  {
    number: "03",
    title: "Landingpages mit Pre-Qualifikation",
    desc: "Bewerben in unter 60 Sekunden mobiloptimiert & filterbar.",
  },
  {
    number: "04",
    title: "Automatisierte Bewerberweiterleitung",
    desc: "Direkt in dein E-Mail-Postfach oder Bewerber-Tool.",
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
    name: "Jan Röhrig",
    role: "Head of Merchandise",
    from: "Iserlohn Roosters",
    to: "Germany",
    img: "/assets/review-img.png",
    review: "Wir hatten in zwei Wochen über 100 Bewerbungen vorher kamen kaum zehn im Monat. Dank TalentSuite läuft’s jetzt wirklich rund.",
  },
  {
    name: "Jan Röhrig",
    role: "Head of Merchandise",
    from: "Iserlohn Roosters",
    to: "Germany",
    img: "/assets/review-img.png",
    review: "Wir hatten in zwei Wochen über 100 Bewerbungen vorher kamen kaum zehn im Monat. Dank TalentSuite läuft’s jetzt wirklich rund.",
  },
];
const PerformanceRecruiting = () => {
  return (
    <>
      
      <MainSection
        title="Dein Recruiting braucht kein Glück es braucht System."
        description="Wir helfen dir, passende Bewerber:innen zu gewinnen mit datenbasierten Kampagnen, smarten Funnels und hoher Abschlussquote."
        buttonText="Jetzt Beratungsgespräch buchen"
        buttonLink="/contact"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting Services"
      />

      <Traditional
        title="Klassisches Recruiting ist tot."
        description="IDie Zeiten, in denen man mit einem Stelleninserat auf die richtigen Kandidat:innen warten konnte, sind vorbei. Heute konkurrierst du um Talente vor allem auf Social Media, nicht auf Jobbörsen."
        data={performanceAcquisitionData}
      />
      <Solution
        title="Unsere Lösung: Performance Recruiting"
        description="Wir bringen deine Jobs dorthin, wo sich deine Zielgruppe täglich bewegt in Social Feeds und auf mobilen Geräten. Mit einem Recruiting-Funnel, der funktioniert."
        items={performanceSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Wir machen Marketing einfach mit smarten Strategien, Echtzeit-Performance-Tracking und ergebnisorientierten Kampagnen, die weltweit Wachstum ermöglichen."
        link="/contact"
        linkText="Kontaktieren Sie uns"
        testimonialData={performanceAcquisitionTestimonials}
      />
      <Appointment heading="Wir zeigen dir in einem kostenlosen Gespräch, wie dein Unternehmen von Performance Recruiting profitieren kann." buttonText="Jetzt Termin buchen" buttonLink="/contact" />
    </>
  );
};

export default PerformanceRecruiting;
