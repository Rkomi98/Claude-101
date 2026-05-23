# Quaderno — i corsi di Claude

Blog editoriale in italiano sui corsi pubblici di Anthropic. Ottimizzato per la lettura, con tema scuro/chiaro, lettura automatica (TTS) e navigazione per capitoli.

🔗 **[Leggi online →](https://rkomi98.github.io/Claude-101/)**

---

## Contenuto

| Corso | Capitoli | Stato |
|---|---|---|
| Claude 101 — Le basi | 5 | ✅ Disponibile |
| Claude Code 101 — Dal terminale | 4 | 🔜 In lavorazione |
| Claude Cowork — Collaborare | 4 | 🔜 In lavorazione |
| Claude Code in Action — In pratica | 4 | 🔜 In lavorazione |

## Funzionalità

- **Tema** auto/chiaro/scuro con toggle e persistenza nel browser
- **TTS** — lettura ad alta voce con Web Speech API (Chrome, Edge, Safari)
- **Bookmark e note** personali per capitolo, salvati in `localStorage`
- **Barra di avanzamento** lettura e sidebar TOC con highlight della sezione attiva
- **Responsive** — desktop e mobile

## Pubblicare su GitHub Pages

1. Vai su **Settings → Pages** nel repository
2. Scegli **Source: GitHub Actions**
3. Salva — il workflow pubblicherà automaticamente il sito su `https://<username>.github.io/<repo>/`

Se vedi log con `github-pages`, `jekyll` o errori tipo `The GitHub API credentials you provided aren't valid`, il repository sta ancora usando il vecchio deploy da branch: passa a **GitHub Actions** per evitare completamente Jekyll.

## Sviluppo locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

Nessuna dipendenza da installare. React e Babel vengono caricati via CDN.

## Aggiungere contenuto

I testi dei capitoli si trovano in `Corso base/` come file Markdown.

Il sito usa un payload generato, [`blog-content.generated.js`](blog-content.generated.js), costruito dai Markdown tramite [`scripts/generate-blog-content.mjs`](scripts/generate-blog-content.mjs).

In locale, se apri il sito su `localhost`, i Markdown vengono anche riletti automaticamente dal browser: quando salvi un file in `Corso base/`, la pagina si riallinea senza che tu debba rigenerare manualmente il payload.

Su GitHub Pages invece non c'e polling: il workflow in [`.github/workflows/sync-blog-content.yml`](.github/workflows/sync-blog-content.yml) genera `blog-content.generated.js` durante il deploy e pubblica un sito statico gia pronto. In questo modo la produzione resta leggera e non richiede commit automatici sul branch.

---

*Contenuti tradotti e adattati dai corsi pubblici di Claude — [Anthropic](https://anthropic.com). Progetto indipendente, non affiliato ad Anthropic.*
