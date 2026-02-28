import { NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════
// TalentSuite Leadmagnet Capture API Route
// Erstellt automatisch einen ClickUp Task + CRM Lead
// ═══════════════════════════════════════════════════════

const CLICKUP_API = "https://api.clickup.com/api/v2";
const LIST_ID = process.env.CLICKUP_LEADMAGNET_LIST_ID || "901517476774"; // "Leads (active pipeline)"
const CRM_WEBHOOK_URL = process.env.CRM_WEBHOOK_URL; // z.B. https://tasks.talentsuite.io/api/crm/webhook
const CRM_WEBHOOK_TOKEN = process.env.CRM_WEBHOOK_TOKEN;

export async function POST(request) {
  try {
    const body = await request.json();
    const { source, name, email, company, phone, industry, extra } = body;

    // Validierung
    if (!email) {
      return NextResponse.json(
        { error: "E-Mail ist erforderlich" },
        { status: 400 }
      );
    }

    // ── Task-Name formatieren ──
    const sourceLabels = {
      kostenrechner: "💰 Kostenrechner",
      branchenreport: "📊 Branchenreport",
      empfehlung: "🤝 Empfehlung",
      analyzer: "🔍 Analyzer",
      schnellcheck: "🎯 Schnellcheck",
      "branchen-report": "📊 Branchen-Report",
      "stellenanzeigen-generator": "📝 Stellenanzeigen-Generator",
      "mitarbeiter-bindung": "🔗 Bindungs-Toolkit",
      "gehalts-benchmark": "💰 Gehalts-Benchmark",
      "recruiting-analyse": "📞 Recruiting-Analyse",
      "pflege-recruiting": "🏥 Pflege Recruiting",
      "pflege-case-study": "🏥 Pflege Case Study",
      "pflege-termin": "🏥 Pflege Termin",
      "kfz-recruiting": "🚗 KFZ Recruiting",
      "kfz-case-study": "🚗 KFZ Case Study",
      "kfz-termin": "🚗 KFZ Termin",
      generic: "📥 Leadmagnet",
    };
    const sourceLabel = sourceLabels[source] || sourceLabels.generic;
    const displayName = name || email.split("@")[0];
    const displayCompany = company ? ` — ${company}` : "";
    const taskName = `${sourceLabel} | ${displayName}${displayCompany}`;

    // ── Datum ──
    const now = new Date();
    const datum = now.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // ── Beschreibung formatieren ──
    let description = `# ${sourceLabel}\n`;
    description += `📅 Datum: ${datum}\n\n`;
    description += `---\n\n`;
    description += `## Kontaktdaten\n`;
    if (name) description += `👤 **Name:** ${name}\n`;
    description += `📧 **E-Mail:** ${email}\n`;
    if (company) description += `🏢 **Firma:** ${company}\n`;
    if (phone) description += `📞 **Telefon:** ${phone}\n`;
    if (industry) description += `🏭 **Branche:** ${industry}\n`;

    // ── Source-spezifische Daten ──
    if (source === "kostenrechner" && extra) {
      description += `\n---\n\n## Kostenrechner-Ergebnisse\n`;
      if (extra.openPositions) description += `📌 **Offene Stellen:** ${extra.openPositions}\n`;
      if (extra.avgSalary) description += `💰 **Ø Jahresgehalt:** ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(extra.avgSalary)}\n`;
      if (extra.monthsOpen) description += `⏱️ **Monate unbesetzt:** ${extra.monthsOpen}\n`;
      if (extra.currentChannel) description += `📢 **Aktueller Kanal:** ${extra.currentChannel}\n`;
      if (extra.totalVacancyCost) description += `\n🔴 **Vakanzkosten gesamt:** ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(extra.totalVacancyCost)}\n`;
      if (extra.roi) description += `📈 **Berechneter ROI:** ${extra.roi}%\n`;
    }

    if (source === "branchenreport" && extra) {
      description += `\n---\n\n## Branchenreport\n`;
      if (extra.selectedBranch) description += `🏭 **Ausgewählte Branche:** ${extra.selectedBranch}\n`;
    }

    if (source === "empfehlung" && extra) {
      description += `\n---\n\n## Empfehlung\n`;
      if (extra.referralCompany) description += `🏢 **Empfohlene Firma:** ${extra.referralCompany}\n`;
      if (extra.referralContact) description += `👤 **Empfohlener Kontakt:** ${extra.referralContact}\n`;
      if (extra.message) description += `💬 **Nachricht:** ${extra.message}\n`;
    }

    if (source === "schnellcheck" && extra) {
      description += `\n---\n\n## Schnellcheck-Ergebnisse\n`;
      if (extra.score !== undefined) description += `📊 **Score:** ${extra.score}/100\n`;
      if (extra.level) description += `🚦 **Bewertung:** ${extra.level}\n`;
      if (extra.yesCount !== undefined) description += `✅ **Ja-Antworten:** ${extra.yesCount}/10\n`;
      if (extra.noCount !== undefined) description += `❌ **Nein-Antworten:** ${extra.noCount}/10\n`;
      if (extra.weaknesses && extra.weaknesses.length > 0) {
        description += `\n### Größte Hebel:\n`;
        extra.weaknesses.forEach((w, i) => {
          description += `${i + 1}. ${w}\n`;
        });
      }
    }

    if (source === "branchen-report" && extra) {
      description += `\n---\n\n## Branchen-Recruiting-Report\n`;
      if (extra.selectedBranch) description += `🏭 **Branche:** ${extra.selectedBranch}\n`;
      if (extra.stellen) description += `📌 **Offene Stellen (Branche):** ${extra.stellen}\n`;
      if (extra.vakanz) description += `⏱️ **Ø Vakanzzeit:** ${extra.vakanz}\n`;
    }

    if (source === "stellenanzeigen-generator" && extra) {
      description += `\n---\n\n## Stellenanzeigen-Generator\n`;
      if (extra.position) description += `💼 **Position:** ${extra.position}\n`;
      if (extra.standort) description += `📍 **Standort:** ${extra.standort}\n`;
      if (extra.benefitCount) description += `🎁 **Gewählte Benefits:** ${extra.benefitCount}\n`;
    }

    if (source === "mitarbeiter-bindung" && extra) {
      description += `\n---\n\n## Mitarbeiter-Bindungs-Toolkit\n`;
      description += `📦 **Angefordert:** Vollständiges Toolkit (Onboarding + Gespräche + Quick Wins)\n`;
    }

    if (source === "gehalts-benchmark" && extra) {
      description += `\n---\n\n## Gehalts-Benchmark\n`;
      if (extra.branche) description += `🏭 **Branche:** ${extra.branche}\n`;
    }

    if ((source === "pflege-recruiting" || source === "pflege-case-study" || source === "pflege-termin") && extra) {
      description += `\n---\n\n## Pflege Lead\n`;
      description += `🏥 **Funnel-Stufe:** ${extra.funnel_stage || source}\n`;
      if (extra.rolle) description += `👔 **Rolle:** ${extra.rolle}\n`;
      if (extra.anzahlPflegekraefte) description += `👥 **Gesuchte Pflegekräfte:** ${extra.anzahlPflegekraefte}\n`;
      if (extra.type === "rueckruf") description += `📞 **Typ:** Rückruf gewünscht\n`;
      const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const utmValues = utmFields.filter(k => extra[k]).map(k => `${k}=${extra[k]}`).join(", ");
      if (utmValues) description += `🔗 **UTM:** ${utmValues}\n`;
    }

    if ((source === "kfz-recruiting" || source === "kfz-case-study" || source === "kfz-termin") && extra) {
      description += `\n---\n\n## KFZ Lead\n`;
      description += `🚗 **Funnel-Stufe:** ${extra.funnel_stage || source}\n`;
      if (extra.rolle) description += `👔 **Rolle:** ${extra.rolle}\n`;
      if (extra.anzahlFachkraefte) description += `👥 **Gesuchte Fachkräfte:** ${extra.anzahlFachkraefte}\n`;
      if (extra.type === "rueckruf") description += `📞 **Typ:** Rückruf gewünscht\n`;
      const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const utmValues = utmFields.filter(k => extra[k]).map(k => `${k}=${extra[k]}`).join(", ");
      if (utmValues) description += `🔗 **UTM:** ${utmValues}\n`;
    }

    description += `\n---\n\n> *Automatisch erfasst über talentsuite.io/${source || "leadmagnet"}*`;

    // ── Priorität basierend auf Source ──
    const highPrioritySources = ["schnellcheck", "stellenanzeigen-generator", "recruiting-analyse", "pflege-recruiting", "pflege-termin", "kfz-recruiting", "kfz-termin"];
    const priority = highPrioritySources.includes(source) ? 2 : 3; // 2 = high, 3 = normal

    // ── ClickUp Task erstellen ──
    const apiKey = process.env.CLICKUP_API_KEY;
    if (!apiKey) {
      console.error("CLICKUP_API_KEY nicht gesetzt");
      // CRM trotzdem synchronisieren
      await syncToCRM({ source, name, email, company, phone, industry, extra, description });
      return NextResponse.json({
        success: true,
        warning: "Lead erfasst, aber ClickUp-Sync fehlgeschlagen (API Key fehlt)",
      });
    }

    const res = await fetch(`${CLICKUP_API}/list/${LIST_ID}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        name: taskName,
        markdown_description: description,
        priority,
        tags: ["leadmagnet", source || "website"],
        status: "neuer lead",
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("ClickUp API Error:", res.status, errText);
      // CRM trotzdem synchronisieren
      await syncToCRM({ source, name, email, company, phone, industry, extra, description });
      return NextResponse.json({
        success: true,
        warning: "Lead erfasst, ClickUp-Sync fehlgeschlagen",
      });
    }

    const task = await res.json();

    // ── CRM Sync (tasks.talentsuite.io) ──
    await syncToCRM({ source, name, email, company, phone, industry, extra, description });

    return NextResponse.json({
      success: true,
      taskId: task.id,
      taskUrl: task.url,
    });
  } catch (err) {
    console.error("Leadmagnet Capture Error:", err);
    return NextResponse.json({
      success: true,
      warning: "Lead-Erfassung fehlgeschlagen: " + err.message,
    });
  }
}

// ═══════════════════════════════════════════════════════
// CRM Sync — Sendet Lead an tasks.talentsuite.io
// ═══════════════════════════════════════════════════════
async function syncToCRM({ source, name, email, company, phone, industry, extra, description }) {
  if (!CRM_WEBHOOK_URL || !CRM_WEBHOOK_TOKEN) {
    console.warn("CRM Webhook nicht konfiguriert (CRM_WEBHOOK_URL / CRM_WEBHOOK_TOKEN fehlt)");
    return;
  }

  try {
    // Source-Label für Tags
    const sourceTag = source || "website";

    // Alle Daten als message formatieren (description enthält bereits alles)
    const message = description;

    // Tags basierend auf Source
    const tags = ["leadmagnet", sourceTag];
    if (extra?.level === "Dringender Handlungsbedarf") tags.push("hot-lead");
    if (extra?.type === "rueckruf") tags.push("rückruf");

    const crmPayload = {
      name: name || email.split("@")[0],
      email: email || "",
      phone: phone || "",
      company: company || "",
      industry: industry || extra?.branche || extra?.selectedBranch || "",
      message,
      source: "website",
      tags,
    };

    const crmRes = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Token": CRM_WEBHOOK_TOKEN,
      },
      body: JSON.stringify(crmPayload),
    });

    if (!crmRes.ok) {
      const errText = await crmRes.text();
      console.error("CRM Webhook Error:", crmRes.status, errText);
    } else {
      console.log("CRM Lead erstellt:", email);
    }
  } catch (err) {
    console.error("CRM Sync Fehler:", err.message);
  }
}
