"use client";
import React from "react";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const socialAcquisitionData = [
  {
    img: "/assets/review-img.png",
    name: "Unregelmäßige oder unstrukturierte Content-Planung",
  },
  { img: "/assets/review-img.png", name: "Keine klare Markenpositionierung" },
  { img: "/assets/review-img.png", name: "Geringe Reichweite trotz hohem Aufwand" },
  {
    img: "/assets/review-img.png",
    name: "Keine Verknüpfung mit Recruiting, Sales oder Kampagnen",
  },
];
const socialSolutions = [
  {
    number: "01",
    title: "Social Audit & Strategieentwicklung",
    desc: "Wir analysieren Status quo, Zielgruppe und Kanäle und definieren klare Ziele.",
  },
  {
    number: "02",
    title: "Redaktionsplanung & Content-Produktion",
    desc: "Planung, Text, Bild & Video abgestimmt auf Plattform, Zielgruppe und Tonalität.",
  },
  {
    number: "03",
    title: "Community Management & Monitoring",
    desc: "Aktiver Dialog mit deiner Zielgruppe inklusive Reporting & Optimierung.",
  },
  {
    number: "04",
    title: "Verknüpfung mit Business-Zielen",
    desc: "Ob Recruiting, Leadgenerierung oder Branding wir denken Social Media ganzheitlich.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  {
    image: "/assets/step1.svg",
    desc: "Klare Social-Media-Strategie, abgestimmt auf deine Ziele",
  },
  {
    image: "/assets/step2.svg",
    desc: "Kreative Inhalte mit Wiedererkennungswert",
  },
  {
    image: "/assets/step3.svg",
    desc: "Regelmäßige Posts, professionelles Community Management",
  },
  {
    image: "/assets/step4.svg",
    desc: "Analyse & Reporting mit Fokus auf Impact",
  },
];

const socialAcquisitionTestimonials = [
  {
    name: "Nina Krause",
    role: "HR & Marketing, Mittelständisches Unternehmen",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review:
      "Seit TalentSuite unsere Social-Media-Kanäle betreut, haben wir nicht nur mehr Reichweite, sondern auch deutlich mehr Bewerbungen und Leads.",
  },
  {
    name: "Nina Krause",
    role: "HR & Marketing, Mittelständisches Unternehmen",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review:
      "Seit TalentSuite unsere Social-Media-Kanäle betreut, haben wir nicht nur mehr Reichweite, sondern auch deutlich mehr Bewerbungen und Leads.",
  },

];

const SocialMediaManagement = () => {
  return (
    <>
      <MainSection
        title="Social Media, das konvertiert mehr Sichtbarkeit, mehr Vertrauen, mehr Wirkung."
        description="Wir managen deine Social-Media-Kanäle strategisch, kreativ und datengetrieben damit aus Reichweite echte Ergebnisse werden."
        buttonText="Jetzt Social-Media-Beratung buchen"
        buttonLink="/contact"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting Services"
      />
      <Traditional
        title="Social Media ist voll aber oft leer an Wirkung."
        description="Viele Unternehmen posten regelmäßig aber ohne Strategie, klare Botschaft oder Plan. So verpufft das Potenzial von Social Media: keine Community, kein Engagement, kein messbarer Return."
        data={socialAcquisitionData}
      />
      <Solution
        title="Deine Kanäle professionell gemanagt. Deine Marke messbar gestärkt."
        description="Wir übernehmen die komplette Betreuung deiner Social-Media-Kanäle oder begleiten dein Team strategisch. Dabei sorgen wir dafür, dass deine Marke nicht nur sichtbar ist, sondern konvertiert."
        items={socialSolutions}
      />
      <Steps title={pageTitle} stepsData={steps} />
      <Testimonials
        title="Kundenstimmen"
        description="Wir machen Marketing einfach mit smarten Strategien, Echtzeit-Performance-Tracking und ergebnisorientierten Kampagnen, die weltweit Wachstum ermöglichen."
        link="/contact"
        linkText="Kontaktieren Sie uns"
        testimonialData={socialAcquisitionTestimonials}
      />
      <Appointment
        heading="Lass uns deine Marke in den sozialen Medien sichtbar, spürbar und erfolgreich machen."
        buttonText="Jetzt Strategiegespräch vereinbaren"
        buttonLink="/contact"
      />
    </>
  );
};

export default SocialMediaManagement;
