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
2. Scegli **Source: Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Salva — il sito sarà disponibile su `https://<username>.github.io/<repo>/`

## Sviluppo locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

Nessuna dipendenza da installare. React e Babel vengono caricati via CDN.

## Aggiungere contenuto

I testi dei capitoli si trovano in `Corso base/` come file Markdown. I dati del blog sono in [`blog-data.jsx`](blog-data.jsx): aggiungendo un nuovo oggetto nell'array `articles` con la chiave `"<courseId>/<chapterId>"`, il capitolo diventa immediatamente leggibile.

---

*Contenuti tradotti e adattati dai corsi pubblici di Claude — [Anthropic](https://anthropic.com). Progetto indipendente, non affiliato ad Anthropic.*
