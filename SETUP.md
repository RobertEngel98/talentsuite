# TalentSuite Leadmagnet → ClickUp Integration

## Was wurde geändert?

### Neue Datei:
- `src/app/api/leadmagnet-capture/route.js` — API Route die automatisch ClickUp Tasks erstellt

### Aktualisierte Dateien:
- `src/app/kostenrechner/page.jsx` — Sendet Lead-Daten bei "Auswertung anzeigen"
- `src/app/branchenreport/page.jsx` — Sendet Lead-Daten bei "Download"
- `src/app/empfehlungsprogramm/page.jsx` — Sendet Lead-Daten bei "Empfehlung einreichen"

## Setup (2 Minuten)

### 1. Dateien kopieren
Kopiere den gesamten `src`-Ordner aus der ZIP in dein Repository und überschreibe die bestehenden Dateien.

### 2. Vercel Environment Variable setzen
1. Öffne [Vercel Dashboard](https://vercel.com) → dein TalentSuite Projekt
2. Gehe zu **Settings → Environment Variables**
3. Füge hinzu:

| Name | Value |
|------|-------|
| `CLICKUP_API_KEY` | Dein ClickUp API Token (findest du in ClickUp → Settings → Apps → API Token: `pk_...`) |
| `CLICKUP_LEADMAGNET_LIST_ID` | `901517476774` (= "Leads (active pipeline)" — bereits als Default gesetzt) |

### 3. Commit & Push
```bash
git add .
git commit -m "feat: Leadmagnet-Formulare an ClickUp anbinden"
git push
```
Vercel deployed automatisch.

## Wie funktioniert es?

```
User füllt Formular aus → Klickt "Absenden"
  ↓
UI zeigt sofort das Ergebnis (kein Warten)
  ↓
Im Hintergrund: fetch("/api/leadmagnet-capture")
  ↓
API Route erstellt ClickUp Task in "Leads (active pipeline)"
  ↓
Task enthält: Name, E-Mail, Firma, Branche + alle Formular-Daten
```

**Wichtig:** Der API-Call ist non-blocking. Der User sieht sein Ergebnis sofort — auch wenn ClickUp mal nicht erreichbar ist.

## ClickUp Task-Format

Die Tasks werden so erstellt:

- **Kostenrechner:** `💰 Kostenrechner | Max Mustermann — Müller GmbH`
  - Enthält: Branche, offene Stellen, Gehalt, Vakanzkosten, ROI
- **Branchenreport:** `📊 Branchenreport | max@firma.de`
  - Enthält: Ausgewählte Branche
- **Empfehlung:** `🤝 Empfehlung | Max Mustermann`
  - Enthält: Empfohlene Firma, Ansprechpartner, Nachricht

Alle Tasks landen mit den Tags `leadmagnet` + `[quelle]` und Status "to do" in der Liste.

## Falls der API-Key fehlt

Kein Problem — die Seiten funktionieren trotzdem normal. Der User sieht sein Ergebnis. In der Vercel Console siehst du dann nur eine Warnung "CLICKUP_API_KEY nicht gesetzt".
