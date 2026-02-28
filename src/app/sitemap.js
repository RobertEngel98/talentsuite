export default function sitemap() {
  const baseUrl = "https://talentsuite.io";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services/performanceRecruiting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/customerAcquisition`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ecommerce`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/socialMediaManagement`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // ── Leadmagnet Pages (SEO-optimiert) ──
    { url: `${baseUrl}/kostenrechner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/branchenreport`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/empfehlungsprogramm`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/arbeitgeber-schnellcheck`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/branchen-recruiting-report`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/stellenanzeigen-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mitarbeiter-bindung`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gehalts-benchmark`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/recruiting-analyse`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    // ── Pflege Landing Pages ──
    { url: `${baseUrl}/lp/pflege-recruiting`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lp/pflege-case-study`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/lp/pflege-termin`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    // ── Blog ──
    { url: `${baseUrl}/blog/marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/trends`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/roi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // ── Legal ──
    { url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
