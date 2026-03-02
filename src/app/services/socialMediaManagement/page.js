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
  { img: "/assets/review-img.png", name: "Planloses Posten — 10+ Stunden pro Woche ohne messbaren Return" },
  { img: "/assets/review-img.png", name: "Kein klares Profil — deine Marke geht im Feed unter" },
  { img: "/assets/review-img.png", name: "Reichweite stagniert trotz regelmäßiger Inhalte" },
  { img: "/assets/review-img.png", name: "Social Media läuft isoliert — kein Beitrag zu Umsatz oder Recruiting" },
];

const socialSolutions = [
  {
    number: "01",
    title: "Social Audit & Strategieentwicklung",
    desc: "Wir decken auf, was funktioniert und was nicht — und bauen eine Strategie, die in 90 Tagen messbare Ergebnisse liefert.",
  },
  {
    number: "02",
    title: "Redaktionsplanung & Content-Produktion",
    desc: "30+ fertige Posts pro Monat — strategisch geplant, professionell produziert und plattformgerecht ausgespielt.",
  },
  {
    number: "03",
    title: "Community Management & Monitoring",
    desc: "Aktiver Dialog, der aus Followern Fans macht — mit monatlichem Reporting und datenbasierter Optimierung.",
  },
  {
    number: "04",
    title: "Verknüpfung mit Business-Zielen",
    desc: "Social Media, das Leads bringt, Bewerber anzieht und Umsatz steigert — nicht nur Likes sammelt.",
  },
];

const pageTitle = "Was du von uns bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Eine Strategie, die Reichweite in Ergebnisse verwandelt" },
  { image: "/assets/step2.svg", desc: "30+ professionelle Posts pro Monat mit Wiedererkennungswert" },
  { image: "/assets/step3.svg", desc: "Community Management, das Vertrauen aufbaut und Leads generiert" },
  { image: "/assets/step4.svg", desc: "Monatliches Reporting mit klaren KPIs — kein Vanity-Metrics-Raten" },
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
      "url": "https://www.talentsuite.io",
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
        <link rel="canonical" href="https://www.talentsuite.io/services/socialMediaManagement" />
        <meta property="og:title" content="Social Media Management Agentur | TalentSuite" />
        <meta property="og:description" content="Social Media, das konvertiert – Strategie, Content & Community Management aus einer Hand." />
        <meta property="og:type" content="website" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Social Media, das Kunden bringt —<br />nicht nur Likes.</>}
        description="Wir übernehmen deine Social-Media-Kanäle komplett — strategisch, kreativ und datengetrieben. Damit aus Followern zahlende Kunden und aus Reichweite planbarer Umsatz wird."
        buttonText="Jetzt Social-Media-Beratung buchen"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
        imageSrc="/assets/services-img.png"
        imageAlt="Social Media Management – Professionelle Betreuung deiner Kanäle"
      />

      <Traditional
        title="Du postest regelmäßig — aber dein Umsatz merkt davon nichts."
        description="90 % der Unternehmen investieren Zeit und Budget in Social Media, ohne einen Euro zurückzubekommen. Ohne Strategie, ohne klare Botschaft und ohne Anbindung an deine Geschäftsziele ist Social Media ein teures Hobby."
        data={socialData}
      />

      <Solution
        title="Social Media, das arbeitet — nicht nur unterhält."
        description="Wir übernehmen deine Kanäle komplett oder begleiten dein Team strategisch. In beiden Fällen sorgen wir dafür, dass jeder Post einem klaren Ziel dient: mehr Kunden, mehr Bewerber, mehr Umsatz."
        items={socialSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="50+ Unternehmen setzen auf unser Social Media Management"
        description="Keine Vanity Metrics — echte Ergebnisse von Unternehmen, die mit professionellem Social Media wachsen."
        link="https://calendar.app.google/QFoADWcRwwuYUoky8"
        linkText="Auch echte Ergebnisse? Jetzt Termin sichern"
        testimonialData={socialTestimonials}
      />

      <Appointment
        heading="In 30 Minuten zeigen wir dir, wie dein Social Media endlich Kunden bringt — kostenlos und unverbindlich."
        buttonText="Jetzt Strategiegespräch vereinbaren"
        buttonLink="https://calendar.app.google/QFoADWcRwwuYUoky8"
      />
    </>
  );
};

export default SocialMediaManagement;
