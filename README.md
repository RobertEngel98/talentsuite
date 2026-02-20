# TalentSuite Prospect Analyzer

Internes Sales-Tool: URL eingeben → automatische SEO, Google Ads, UX/UI & Meta Ads Analyse per Claude AI.

## Setup (3 Schritte)

### 1. Dateien kopieren
Kopiere diese Ordner in dein bestehendes TalentSuite Next.js Projekt:

```
src/app/analyzer/        → Seite (page.js + CSS Module)
src/app/api/analyze/     → API Route (serverseitiger Claude-Call)
```

### 2. Vercel Environment Variables setzen
Geh in dein Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Wert |
|---|---|
| `ANTHROPIC_API_KEY` | Dein Claude API Key (`sk-ant-api03-...`) |
| `ANALYZER_PASSWORD` | `talentsuite2026` |

### 3. Deployen
Push zu GitHub → Vercel baut automatisch neu.

## Zugang
`https://deine-domain.de/analyzer` → Passwort: `talentsuite2026`

## Kosten
~0,19€ pro Vollanalyse (alle 4 Module). Bei 100 Analysen/Monat: ~19€.
