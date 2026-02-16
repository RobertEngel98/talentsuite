"use client";
import React from "react";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const customerAcquisitionData = [
  { img: "/assets/review-img.png", name: "Fehlende Leadstrategie" },
  { img: "/assets/review-img.png", name: "Abhängigkeit von persönlichen Kontakten" },
  { img: "/assets/review-img.png", name: "Teure oder ineffiziente Maßnahmen" },
  {
    img: "/assets/review-img.png",
    name: "Vertrieb arbeitet mit unqualifizierten Leads",
  },
];
const customerSolutions = [
  {
    number: "01",
    title: "Zielgruppen- & Marktanalyse",
    desc: "Wer ist dein perfekter Kunde und wie denken, sprechen, handeln sie?",
  },
  {
    number: "02",
    title: "Positionierung & Messaging",
    desc: "Was macht dich einzigartig und warum sollte man bei dir kaufen?",
  },
  {
    number: "03",
    title: "Digitale Kampagnen",
    desc: "Meta, Google, TikTok oder LinkedIn dort, wo deine Kunden sind.",
  },
  {
    number: "04",
    title: "Landingpages & Funnelaufbau",
    desc: "Mit klarer Nutzerführung zur qualifizierten Anfrage.",
  },
];

const pageTitle = "Was du erreichst";
const steps = [
  { image: "/assets/step1.svg", desc: "Planbarer Leadflow mit hoher Abschlusswahrscheinlichkeit" },
  { image: "/assets/step2.svg", desc: "Höhere Conversion Rates durch optimierte Funnel" },
  { image: "/assets/step3.svg", desc: "Weniger Kaltakquise, mehr echte Interessenten" },
  { image: "/assets/step4.svg", desc: "Klar messbare KPIs vom Klick bis zum Abschluss" },
];

const customerAcquisitionTestimonials = [
  {
    name: "Max Mustermann",
    role: "Geschäftsführer B2B SaaS Unternehmen",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review: "Früher kamen unsere Leads unregelmäßig und über Empfehlungen jetzt können wir mit festen Volumen planen und wachsen gezielt.",
  },
  {
    name: "Max Mustermann",
    role: "Geschäftsführer B2B SaaS Unternehmen",
    from: "Iserlohn",
    to: "Germany",
    img: "/assets/review-img.png",
    review: "Früher kamen unsere Leads unregelmäßig und über Empfehlungen jetzt können wir mit festen Volumen planen und wachsen gezielt.",
  },
];

const CustomerAcquisition = () => {
  return (
    <>
      <MainSection
        title="Kunden gewinnen geht nicht mehr über Kaltakquise."
        description="Wir entwickeln digitale Kundengewinnungsstrecken, die genau deine Zielgruppe ansprechen messbar, automatisiert und planbar skalierbar."
        buttonText="Jetzt Strategiegespräch vereinbaren"
        buttonLink="/contact"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting Services"
      />
      <Traditional
        title="Deine Wunschkunden sind online aber nicht auf deinem Radar."
        description="Viele Unternehmen haben starke Produkte, aber keine funktionierende Pipeline für neue Kundenanfragen. Ohne Sichtbarkeit, ohne klare Botschaft und ohne digitalen Funnel bleibt Wachstum Zufall."
        data={customerAcquisitionData}
      />
      <Solution title="Unsere Lösung: Performancebasierte Neukundengewinnung" description="Wir entwickeln skalierbare Prozesse zur Kundengewinnung, die auf Daten, Psychologie und digitaler Sichtbarkeit basieren." items={customerSolutions} />
      <Steps title={pageTitle} stepsData={steps} />
      <Testimonials
        title="Kundenstimmen"
        description="Wir machen Marketing einfach mit smarten Strategien, Echtzeit-Performance-Tracking und ergebnisorientierten Kampagnen, die weltweit Wachstum ermöglichen."
        link="/contact"
        linkText="Kontaktieren Sie uns"
        testimonialData={customerAcquisitionTestimonials}
      />
      <Appointment heading="Wir zeigen dir in einem unverbindlichen Gespräch, wie du neue Kunden mit System gewinnst ganz ohne Kaltakquise." buttonText="Jetzt Erstgespräch buchen" buttonLink="/contact" />
    </>
  );
};

export default CustomerAcquisition;
