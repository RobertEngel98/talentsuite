"use client";

import React, { useState, useRef, useCallback } from "react";
import styles from "./analyzer.module.css";

const PASSWORD = "talentsuite2026";

const TABS = [
  { id: "seo", label: "SEO-Analyse", icon: "🔍", color: "#00B4D8" },
  { id: "google", label: "Google Ads", icon: "📊", color: "#F4A935" },
  { id: "ux", label: "UX/UI Redesign", icon: "🎨", color: "#A78BFA" },
  { id: "meta", label: "Meta Ads", icon: "📱", color: "#F472B6" },
];

/* ───── Markdown → HTML ───── */
function md(text) {
  if (!text) return "";
  return text
    .replace(/^### (.+)$/gm, '<h3 class="' + styles.mdH3 + '">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="' + styles.mdH2 + '">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="' + styles.mdH1 + '">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^> (.+)$/gm, '<blockquote class="' + styles.mdQuote + '">$1</blockquote>')
    .replace(/^---$/gm, "<hr/>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

/* ───── Login Screen ───── */
function Login({ onLogin }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (pw === PASSWORD) onLogin(pw);
    else setErr(true);
  };

  return (
    <div className={styles.loginWrap}>
      <div className={`${styles.loginCard} ${err ? styles.shake : ""}`}>
        <h1 className={styles.loginLogo}>TalentSuite</h1>
        <p className={styles.loginSub}>Prospect Analyzer</p>
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="Passwort eingeben"
            className={styles.loginInput}
            value={pw}
            onChange={(e) => { setPw(e.target.value); setErr(false); }}
          />
          {err && <p className={styles.loginErr}>Falsches Passwort.</p>}
          <button type="submit" className={styles.loginBtn}>
            Zugang erhalten →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ───── Main Page ───── */
export default function AnalyzerPage() {
  const [sessionPw, setSessionPw] = useState(null);
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("seo");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ── API Call ── */
  const analyzeModule = useCallback(async (mod, targetUrl, pw) => {
    setLoading((p) => ({ ...p, [mod]: true }));
    setErrors((p) => ({ ...p, [mod]: null }));

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module: mod, url: targetUrl, password: pw }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unbekannter Fehler");
      setResults((p) => ({ ...p, [mod]: data.result }));
    } catch (e) {
      setErrors((p) => ({ ...p, [mod]: e.message }));
    } finally {
      setLoading((p) => ({ ...p, [mod]: false }));
    }
  }, []);

  /* ── Run all 4 ── */
  const analyzeAll = async () => {
    if (!url) return;
    setAnalyzing(true);
    setProgress(0);
    setResults({});
    const mods = ["seo", "google", "ux", "meta"];
    for (let i = 0; i < mods.length; i++) {
      setActiveTab(mods[i]);
      setProgress((i / mods.length) * 100);
      await analyzeModule(mods[i], url, sessionPw);
      setProgress(((i + 1) / mods.length) * 100);
    }
    setActiveTab("seo");
    setAnalyzing(false);
  };

  /* ── PDF Export ── */
  const exportPDF = () => {
    const w = window.open("", "_blank");
    const pages = TABS.map((t) => {
      if (!results[t.id]) return "";
      return `<div style="page-break-before:always;padding:48px 56px;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:28px;padding-bottom:14px;border-bottom:3px solid #023B5B;">
          <span style="font-size:30px">${t.icon}</span>
          <h1 style="margin:0;color:#023B5B;font-size:26px;font-family:Poppins,sans-serif">${t.label}</h1>
        </div>
        <div style="font-size:14px;line-height:1.8;color:#1E2D3A;font-family:Poppins,sans-serif">
          ${md(results[t.id])}
        </div>
      </div>`;
    }).join("");

    w.document.write(`<!DOCTYPE html><html><head>
      <title>TalentSuite Analyse – ${url}</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        *{box-sizing:border-box;margin:0}
        body{font-family:Poppins,sans-serif;color:#1E2D3A}
        h1{font-size:22px;color:#023B5B;margin:28px 0 12px}
        h2{font-size:18px;color:#023B5B;margin:24px 0 10px;border-bottom:2px solid #E8EDF1;padding-bottom:6px}
        h3{font-size:15px;color:#034a73;margin:18px 0 8px}
        blockquote{border-left:4px solid #00B4D8;padding:10px 16px;background:#f0f9fb;margin:12px 0;border-radius:0 8px 8px 0}
        ul{padding-left:20px;margin:8px 0}
        li{margin:4px 0}
        hr{border:none;border-top:1px solid #C5CED6;margin:20px 0}
        strong{color:#023B5B}
        .cover{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#012a42,#023B5B);color:#fff;text-align:center;padding:60px;page-break-after:always}
        .cover h1{font-size:48px;color:#fff;border:none}
        .cover p{font-size:18px;opacity:.7;margin-top:8px}
        .cover .url-box{font-size:20px;margin-top:40px;padding:18px 36px;background:rgba(255,255,255,.08);border-radius:14px;border:1px solid rgba(255,255,255,.12)}
        .cover .date{margin-top:20px;opacity:.5;font-size:14px}
      </style>
    </head><body>
      <div class="cover">
        <h1>TalentSuite</h1>
        <p>Prospect Analyzer – Vollständige Analyse</p>
        <div class="url-box">${url}</div>
        <div class="date">${new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</div>
      </div>
      ${pages}
    </body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 600);
  };

  /* ── Guard: Login ── */
  if (!sessionPw) return <Login onLogin={(pw) => setSessionPw(pw)} />;

  const cur = results[activeTab];
  const curLoad = loading[activeTab];
  const curErr = errors[activeTab];
  const hasResults = Object.keys(results).length > 0;

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logo}>TalentSuite</span>
          <span className={styles.badge}>Prospect Analyzer</span>
        </div>
        {hasResults && (
          <button onClick={exportPDF} className={styles.exportBtn}>
            📄 PDF Export
          </button>
        )}
      </header>

      <main className={styles.main}>
        {/* URL Input */}
        <div className={styles.inputCard}>
          <label className={styles.inputLabel}>
            Webseite des potenziellen Kunden
          </label>
          <div className={styles.inputRow}>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>🌐</span>
              <input
                type="url"
                placeholder="https://www.beispiel-handwerk.de"
                className={styles.urlInput}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button
              onClick={analyzeAll}
              disabled={!url || analyzing}
              className={styles.analyzeBtn}
            >
              {analyzing ? (
                <><span className={styles.spinner} /> Analysiere...</>
              ) : (
                <>🚀 Vollanalyse starten</>
              )}
            </button>
          </div>

          {analyzing && (
            <div className={styles.progressWrap}>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: `${progress}%` }} />
              </div>
              <div className={styles.progressInfo}>
                <span>Analysiere: {TABS.find((t) => t.id === activeTab)?.label}</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ""}`}
              style={{ "--tab-color": t.color }}
            >
              <span>{t.icon}</span>
              <span className={styles.tabLabel}>{t.label}</span>
              {results[t.id] && <span className={styles.dot} />}
              {loading[t.id] && <span className={styles.tabSpinner} style={{ borderTopColor: t.color }} />}
            </button>
          ))}
        </div>

        {/* Result */}
        <div className={styles.resultCard}>
          {curLoad ? (
            <div className={styles.loadingState}>
              <span
                className={styles.bigSpinner}
                style={{ borderTopColor: TABS.find((t) => t.id === activeTab)?.color }}
              />
              <span>{TABS.find((t) => t.id === activeTab)?.label} wird analysiert...</span>
            </div>
          ) : curErr ? (
            <div className={styles.errorState}>
              <strong>Fehler:</strong> {curErr}
              <button
                onClick={() => analyzeModule(activeTab, url, sessionPw)}
                className={styles.retryBtn}
              >
                Erneut versuchen
              </button>
            </div>
          ) : cur ? (
            <div
              className={styles.analysisContent}
              dangerouslySetInnerHTML={{ __html: md(cur) }}
            />
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <p>
                Gib die URL eines potenziellen Kunden ein und starte die Vollanalyse.
                <br />
                <small>Du erhältst SEO, Google Ads, UX/UI und Meta Ads Analysen.</small>
              </p>
            </div>
          )}
        </div>

        {/* Re-generate buttons */}
        {hasResults && !analyzing && (
          <div className={styles.regenRow}>
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); analyzeModule(t.id, url, sessionPw); }}
                disabled={loading[t.id]}
                className={styles.regenBtn}
                style={{ "--regen-color": t.color }}
              >
                {t.icon} {t.label} neu generieren
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
