import { NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════
// TalentSuite Leadmagnet Capture API Route
// Erstellt automatisch einen ClickUp Task bei jedem Lead
// ═══════════════════════════════════════════════════════

const CLICKUP_API = "https://api.clickup.com/api/v2";
const LIST_ID = process.env.CLICKUP_LEADMAGNET_LIST_ID || "901517476774";

export async function POST(request) {
  try {
    const body = await request.json();
    const { source, name, email, company, phone, industry, extra } = body;

    if (!email) {
      return NextResponse.json({ error: "E-Mail ist erforderlich" }, { status: 400 });
    }

    // API Key aus Environment lesen
    const apiKey = process.env.CLICKUP_API_KEY;

    if (!apiKey) {
      console.error("CLICKUP_API_KEY nicht in Environment gefunden");
      return NextResponse.json({
        success: false,
        error: "API Key nicht konfiguriert",
        debug: "CLICKUP_API_KEY env var ist leer oder nicht gesetzt",
      });
    }

    // ── Task-Name formatieren ──
    const sourceLabels = {
      kostenrechner: "💰 Kostenrechner",
      branchenreport: "📊 Branchenreport",
      empfehlung: "🤝 Empfehlung",
      analyzer: "🔍 Analyzer",
      test: "🧪 Test",
      generic: "📥 Leadmagnet",
    };
    const sourceLabel = sourceLabels[source] || sourceLabels.generic;
    const displayName = name || email.split("@")[0];
    const displayCompany = company ? ` — ${company}` : "";
    const taskName = `${sourceLabel} | ${displayName}${displayCompany}`;

    // ── Datum ──
    const now = new Date();
    const datum = now.toLocaleDateString("de-DE", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    // ── Beschreibung formatieren ──
    let description = `# ${sourceLabel}\n`;
    description += `📅 Datum: ${datum}\n\n---\n\n`;
    description += `## Kontaktdaten\n`;
    if (name) description += `👤 **Name:** ${name}\n`;
    description += `📧 **E-Mail:** ${email}\n`;
    if (company) description += `🏢 **Firma:** ${company}\n`;
    if (phone) description += `📞 **Telefon:** ${phone}\n`;
    if (industry) description += `🏭 **Branche:** ${industry}\n`;

    if (source === "kostenrechner" && extra) {
      description += `\n---\n\n## Kostenrechner-Ergebnisse\n`;
      const fmt = (n) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
      if (extra.openPositions) description += `📌 **Offene Stellen:** ${extra.openPositions}\n`;
      if (extra.avgSalary) description += `💰 **Ø Jahresgehalt:** ${fmt(extra.avgSalary)}\n`;
      if (extra.monthsOpen) description += `⏱️ **Monate unbesetzt:** ${extra.monthsOpen}\n`;
      if (extra.currentChannel) description += `📢 **Aktueller Kanal:** ${extra.currentChannel}\n`;
      if (extra.totalVacancyCost) description += `\n🔴 **Vakanzkosten gesamt:** ${fmt(extra.totalVacancyCost)}\n`;
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

    description += `\n---\n\n> *Automatisch erfasst über talentsuite.io/${source || "leadmagnet"}*`;

    // ── ClickUp Task erstellen ──
    const clickupUrl = `${CLICKUP_API}/list/${LIST_ID}/task`;

    console.log("ClickUp Request:", {
      url: clickupUrl,
      keyPrefix: apiKey.substring(0, 8) + "...",
      listId: LIST_ID,
    });

    const res = await fetch(clickupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        name: taskName,
        markdown_description: description,
        priority: 3,
        tags: ["leadmagnet", source || "website"],
        status: "to do",
      }),
    });

    const responseText = await res.text();

    if (!res.ok) {
      console.error("ClickUp API Error:", res.status, responseText);
      return NextResponse.json({
        success: false,
        error: "ClickUp API Fehler",
        status: res.status,
        detail: responseText,
      });
    }

    let task;
    try {
      task = JSON.parse(responseText);
    } catch {
      return NextResponse.json({
        success: false,
        error: "ClickUp Antwort konnte nicht gelesen werden",
        raw: responseText.substring(0, 200),
      });
    }

    return NextResponse.json({
      success: true,
      taskId: task.id,
      taskUrl: task.url,
    });
  } catch (err) {
    console.error("Leadmagnet Capture Error:", err);
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}
