import { blogUrls } from "./blog/sitemap-data";

export default function sitemap() {
  const baseUrl = "https://www.talentsuite.io";
  const now = new Date();

  const staticPages = [
    // ── Hauptseiten ──
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services/performanceRecruiting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/customerAcquisition`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ecommerce`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/socialMediaManagement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/webDevelopment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/so-funktionierts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // ── Branchenseiten (Mitarbeiter finden) ──
    { url: `${baseUrl}/mitarbeiter-finden-pflege`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mitarbeiter-finden-kfz`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mitarbeiter-finden-bau`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-elektro`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-logistik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-gastronomie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-shk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-maler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-dachdecker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mitarbeiter-finden-produktion`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // ── Branchenübersichten ──
    { url: `${baseUrl}/fuer-pflege`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/fuer-handwerk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/fuer-gastronomie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // ── Leadmagnet Pages ──
    { url: `${baseUrl}/kostenrechner`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/branchenreport`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/empfehlungsprogramm`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/arbeitgeber-schnellcheck`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/branchen-recruiting-report`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/stellenanzeigen-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mitarbeiter-bindung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gehalts-benchmark`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/recruiting-analyse`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // ── Landing Pages (Pflege) ──
    { url: `${baseUrl}/lp/pflege-recruiting`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lp/pflege-case-study`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/lp/pflege-termin`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // ── Landing Pages (KFZ) ──
    { url: `${baseUrl}/lp/kfz-recruiting`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lp/kfz-case-study`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/lp/kfz-termin`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // ── Autor ──
    { url: `${baseUrl}/autor/robert-engel`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // ── Sonstiges ──
    { url: `${baseUrl}/vergleich-jobboerse`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // ── Legal ──
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Blog-Artikel aus sitemap-data.js
  const blogPages = blogUrls.map((entry) => ({
    url: `${baseUrl}${entry.url}`,
    lastModified: now,
    changeFrequency: entry.changefreq || "monthly",
    priority: entry.priority || 0.6,
  }));

  // Lokale Blog-Artikel (Stadt-Seiten)
  const cityBlogPages = [
    "mitarbeitergewinnung-iserlohn", "mitarbeitergewinnung-hemer", "mitarbeitergewinnung-menden",
    "mitarbeitergewinnung-arnsberg", "mitarbeitergewinnung-luedenscheid", "mitarbeitergewinnung-hagen",
    "mitarbeitergewinnung-dortmund", "mitarbeitergewinnung-schwerte", "mitarbeitergewinnung-unna",
    "mitarbeitergewinnung-altena", "mitarbeitergewinnung-balve", "mitarbeitergewinnung-froendenberg",
    "mitarbeitergewinnung-halver", "mitarbeitergewinnung-kierspe", "mitarbeitergewinnung-meinerzhagen",
    "mitarbeitergewinnung-nachrodt-wiblingwerde", "mitarbeitergewinnung-neuenrade",
    "mitarbeitergewinnung-plettenberg", "mitarbeitergewinnung-schalksmühle",
    "mitarbeitergewinnung-suedwestfalen", "mitarbeitergewinnung-werdohl",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...cityBlogPages];
}
