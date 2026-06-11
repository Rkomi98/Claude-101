// Blog data — corsi e articoli
// Contenuti tratti dai corsi pubblici di Claude (Anthropic), tradotti in italiano.
// Claude 101 ha tutti i capitoli disponibili; gli altri corsi sono placeholder.

const generatedContent = window.BLOG_GENERATED_CONTENT || {
  articleContentByKey: {},
  chapterReadingTimeByKey: {},
  chapterSectionsByKey: {},
};

window.BLOG_DATA = {
  courses: [
    {
      id: 'claude-101',
      num: '01',
      title: 'Claude 101',
      titleEm: 'Le basi',
      desc: 'Cos\'è Claude, come iniziare una conversazione, ottenere risultati migliori e organizzare il lavoro con progetti e app desktop.',
      level: 'Principiante',
      hours: '43 min',
      chapters: [
        {
          id: 'cose-claude',
          num: '01',
          title: 'Cos\'è Claude?',
          desc: 'L\'assistente di Anthropic, la sua missione, le interfacce disponibili e l\'approccio collaborativo.',
          readingTime: '10 min',
          sections: ['Missione', 'Personalizzazione', 'Interfacce', 'Sicurezza'],
          available: true,
        },
        {
          id: 'prima-conversazione',
          num: '02',
          title: 'La prima conversazione con Claude',
          desc: 'Costruire un prompt che funziona davvero: contesto, obiettivo, forma — e come iterare sulle risposte.',
          readingTime: '20 min',
          sections: ['Prompt efficace', '4D Framework', 'Caricamenti', 'Memoria e stili'],
          available: true,
        },
        {
          id: 'risultati-migliori',
          num: '03',
          title: 'Ottenere risultati migliori',
          desc: 'Sfide comuni, mentalità iterativa, AI Fluency e come valutare Claude per i tuoi flussi di lavoro.',
          readingTime: '5 min',
          sections: ['Sfide comuni', 'Mentalità iterativa', 'AI Fluency', 'Valutazione'],
          available: true,
        },
        {
          id: 'app-desktop',
          num: '04',
          title: 'L\'app desktop: Chat, Cowork, Code',
          desc: 'Le tre modalità dell\'applicazione desktop e quando usarne ciascuna.',
          readingTime: '6 min',
          sections: ['Modalità Chat', 'Modalità Cowork', 'Modalità Code'],
          available: true,
        },
        {
          id: 'introduzione-progetti',
          num: '05',
          title: 'Introduzione ai progetti',
          desc: 'Come organizzare il lavoro in spazi dedicati con memoria persistente e istruzioni condivise.',
          readingTime: '2 min',
          sections: ['Spazi dedicati', 'Conoscenze', 'Istruzioni persistenti', 'Multi-progetto'],
          available: true,
        },
      ],
    },
    {
      id: 'claude-code-101',
      num: '02',
      title: 'Claude Code 101',
      titleEm: 'Dal terminale',
      desc: 'Installa Claude Code, configura il tuo ambiente e impara i comandi che useresti ogni giorno.',
      level: 'Principiante',
      hours: '1h 50m',
      chapters: [
        { id: 'cap-1', num: '01', title: 'Installazione e setup', desc: 'CLI, autenticazione, primo avvio.', readingTime: '6 min', sections: ['Requisiti', 'Installazione', 'Login', 'Verifica'] },
        { id: 'cap-2', num: '02', title: 'La tua prima sessione', desc: 'Avviare Claude Code in un progetto e fargli leggere il codice.', readingTime: '10 min', sections: ['Avvio', 'Indicizzazione', 'Prima domanda'] },
        { id: 'cap-3', num: '03', title: 'Comandi essenziali', desc: '/help, /clear, /compact e scorciatoie.', readingTime: '8 min', sections: ['Slash commands', 'Scorciatoie tastiera', 'Configurazione'] },
        { id: 'cap-4', num: '04', title: 'Workflow nel terminale', desc: 'Integrazione con git, tmux, editor preferito.', readingTime: '12 min', sections: ['Git', 'Editor', 'Tmux/multiplexer'] },
      ],
    },
    {
      id: 'claude-cowork',
      num: '03',
      title: 'Claude Cowork',
      titleEm: 'Collaborare',
      desc: 'Lavorare insieme a Claude come un membro del team: deleghe, revisioni, handoff e iterazione.',
      level: 'Intermedio',
      hours: '2h 10m',
      chapters: [
        { id: 'cap-1', num: '01', title: 'Cos’è Cowork', desc: 'Il modello di collaborazione: tu, Claude, il prodotto.', readingTime: '7 min', sections: ['Premessa', 'Ruoli', 'Quando funziona'] },
        { id: 'cap-2', num: '02', title: 'Delegare bene', desc: 'Briefing, vincoli, criteri di successo.', readingTime: '11 min', sections: ['Brief', 'Vincoli', 'Definition of done'] },
        { id: 'cap-3', num: '03', title: 'Revisionare il lavoro', desc: 'Come leggere l’output, dare feedback, iterare.', readingTime: '13 min', sections: ['Lettura critica', 'Feedback', 'Iterazione'] },
        { id: 'cap-4', num: '04', title: 'Handoff e memoria', desc: 'Passare il contesto tra sessioni e team.', readingTime: '9 min', sections: ['Memoria', 'Handoff', 'Documentazione'] },
      ],
    },
    {
      id: 'claude-code-in-action',
      num: '04',
      title: 'Claude Code in Action',
      titleEm: 'In pratica',
      desc: 'Refactoring, debug e generazione di test su progetti reali. Esempi end-to-end.',
      level: 'Intermedio',
      hours: '3h 20m',
      chapters: [
        { id: 'cap-1', num: '01', title: 'Refactoring assistito', desc: 'Da un legacy a moduli puliti: scegliere lo scope.', readingTime: '15 min', sections: ['Mappa del codice', 'Scope', 'Estrazione', 'Verifica'] },
        { id: 'cap-2', num: '02', title: 'Debugging guidato', desc: 'Riprodurre, isolare, correggere.', readingTime: '12 min', sections: ['Riproduzione', 'Bisezione', 'Fix', 'Test di regressione'] },
        { id: 'cap-3', num: '03', title: 'Generazione di test', desc: 'Unit, integration, snapshot: cosa chiedere e cosa no.', readingTime: '14 min', sections: ['Tipi di test', 'Coverage', 'Mock e fixture'] },
        { id: 'cap-4', num: '04', title: 'Lavorare in monorepo', desc: 'Convenzioni, percorsi, generazione cross-pacchetto.', readingTime: '11 min', sections: ['Convenzioni', 'Workspaces', 'Build'] },
      ],
    },
  ],

  // ─── Articles — un oggetto per capitolo disponibile ──────────
  // Chiave: "<courseId>/<chapterId>"
  articles: {
    'claude-101/cose-claude': {
      courseId: 'claude-101',
      chapterId: 'cose-claude',
      title: 'Cos\'è Claude?',
      titleEm: '',
      lede: 'Un\'introduzione all\'assistente di Anthropic: cosa lo distingue da un motore di ricerca, come si personalizza e quale visione guida il suo sviluppo.',
      updated: '19 maggio 2026',
    },

    'claude-101/prima-conversazione': {
      courseId: 'claude-101',
      chapterId: 'prima-conversazione',
      title: 'La prima conversazione con Claude',
      titleEm: '',
      lede: 'Claude non è un motore di ricerca da interrogare: è un collaboratore con cui ragionare. Ecco come costruire il primo prompt, caricare file, iterare sulle risposte e configurare memoria e stili.',
      updated: '19 maggio 2026',
    },

    'claude-101/risultati-migliori': {
      courseId: 'claude-101',
      chapterId: 'risultati-migliori',
      title: 'Ottenere risultati migliori',
      titleEm: '',
      lede: 'Sfide comuni, mentalità iterativa e AI Fluency: come riconoscere gli ostacoli, affinare il proprio approccio e valutare Claude nei flussi di lavoro reali.',
      updated: '11 giugno 2026',
    },

    'claude-101/app-desktop': {
      courseId: 'claude-101',
      chapterId: 'app-desktop',
      title: 'L\'app desktop di Claude: Chat, Cowork, Code',
      titleEm: '',
      lede: 'Tre modalità per tre esigenze diverse: dalla risposta rapida in Chat alla collaborazione strutturata in Cowork, fino allo sviluppo software in Code.',
      updated: '19 maggio 2026',
    },

    'claude-101/introduzione-progetti': {
      courseId: 'claude-101',
      chapterId: 'introduzione-progetti',
      title: 'Introduzione ai progetti',
      titleEm: '',
      lede: 'Come organizzare il lavoro in spazi dedicati con memoria condivisa, documenti di riferimento e istruzioni persistenti che guidano Claude in ogni conversazione.',
      updated: '19 maggio 2026',
    },

  },
};

function parseMinutes(value) {
  if (!value) return null;
  const hourMatch = value.match(/(\d+)\s*h/i);
  const minuteMatch = value.match(/(\d+)\s*m(?:in)?/i);

  if (!hourMatch && !minuteMatch) return null;

  const hours = hourMatch ? Number(hourMatch[1]) : 0;
  const minutes = minuteMatch ? Number(minuteMatch[1]) : 0;
  return hours * 60 + minutes;
}

function formatMinutes(totalMinutes) {
  if (totalMinutes >= 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
  }
  return `${totalMinutes} min`;
}

function applyGeneratedContent(nextGeneratedContent = {}) {
  for (const [key, generatedArticle] of Object.entries(nextGeneratedContent.articleContentByKey || {})) {
    const existing = window.BLOG_DATA.articles[key] || {};
    window.BLOG_DATA.articles[key] = {
      ...existing,
      ...generatedArticle,
      sections: generatedArticle.sections || existing.sections || [],
    };
  }

  for (const course of window.BLOG_DATA.courses) {
    let totalMinutes = 0;

    for (const chapter of course.chapters) {
      const key = `${course.id}/${chapter.id}`;
      const generatedTime = nextGeneratedContent.chapterReadingTimeByKey?.[key];
      const generatedSections = nextGeneratedContent.chapterSectionsByKey?.[key];

      if (generatedTime) {
        chapter.readingTime = generatedTime;
        if (window.BLOG_DATA.articles[key]) {
          window.BLOG_DATA.articles[key].readingTime = generatedTime;
        }
      }

      if (generatedSections && generatedSections.length) {
        chapter.sections = generatedSections;
      }

      const chapterMinutes = parseMinutes(chapter.readingTime);
      if (chapterMinutes != null) totalMinutes += chapterMinutes;
    }

    if (totalMinutes > 0) {
      course.hours = formatMinutes(totalMinutes);
    }
  }
}

window.applyGeneratedContent = applyGeneratedContent;
applyGeneratedContent(generatedContent);
