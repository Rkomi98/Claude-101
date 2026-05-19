// Blog data — corsi e articoli
// Contenuti tratti dai corsi pubblici di Claude (Anthropic), tradotti in italiano.
// Claude 101 ha tutti i capitoli disponibili; gli altri corsi sono placeholder.

window.BLOG_DATA = {
  courses: [
    {
      id: 'claude-101',
      num: '01',
      title: 'Claude 101',
      titleEm: 'Le basi',
      desc: 'Cos\'è Claude, come iniziare una conversazione, ottenere risultati migliori e organizzare il lavoro con progetti e app desktop.',
      level: 'Principiante',
      hours: '10 min',
      chapters: [
        {
          id: 'cose-claude',
          num: '01',
          title: 'Cos\'è Claude?',
          desc: 'L\'assistente di Anthropic, la sua missione, le interfacce disponibili e l\'approccio collaborativo.',
          readingTime: '2 min',
          sections: ['Missione', 'Personalizzazione', 'Interfacce', 'Sicurezza'],
          available: true,
        },
        {
          id: 'prima-conversazione',
          num: '02',
          title: 'La tua prima conversazione',
          desc: 'Come strutturare un prompt efficace, il modello delle 4D e l\'importanza dell\'iterazione.',
          readingTime: '2 min',
          sections: ['Prompt efficace', 'Modello 4D', 'Documenti', 'Iterazione'],
          available: true,
        },
        {
          id: 'risultati-migliori',
          num: '03',
          title: 'Ottenere risultati migliori',
          desc: 'Istruzioni precise, mentalità iterativa e competenza nell\'uso dell\'IA per affinare le risposte.',
          readingTime: '2 min',
          sections: ['Istruzioni precise', 'Iterazione', 'Competenza IA', 'Prove pratiche'],
          available: true,
        },
        {
          id: 'app-desktop',
          num: '04',
          title: 'L\'app desktop: Chat, Cowork, Code',
          desc: 'Le tre modalità dell\'applicazione desktop e quando usarne ciascuna.',
          readingTime: '2 min',
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
      readingTime: '2 min',
      words: 296,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-cose-claude',
          title: 'Cos\'è Claude?',
          paragraphs: [
            "Claude non è solo un robot da chat, ma un assistente intelligente progettato per collaborare con le persone. La sua missione è essere utile, innocuo e trasparente. Per questo gli sviluppatori hanno costruito Claude affinché possa aiutare a scrivere testi, riassumere articoli, effettuare ricerche e analisi, assistere nella programmazione e risolvere problemi complessi. L'obiettivo è farne un compagno di lavoro versatile, capace di ragionare e di seguire le istruzioni.",
            "Nel corso si sottolinea che Claude può essere personalizzato: chi lo utilizza può \"indirizzarlo\" con uno stile o con un registro linguistico specifico, spiegandogli in che modo deve rispondere. Ciò lo rende adatto a diversi contesti, dal supporto alla scrittura di email professionali fino a compiti più tecnici come la revisione di codice. La piattaforma fornisce varie interfacce per interagire con l'assistente: tramite il sito web, un'app per il desktop, l'integrazione con Slack e add‑on per Excel. È possibile lavorare con Claude anche attraverso un ambiente di programmazione dedicato.",
            "Per garantire che le interazioni restino sicure e produttive, gli autori del corso insistono sulla necessità di considerare Claude come un vero membro del team. Questo approccio consente di ottenere risposte più pertinenti: l'utente definisce la situazione, indica il compito e fornisce le regole da seguire. Le istruzioni possono includere il tono da adottare o le modalità di presentazione dei risultati. Così Claude diventa uno strumento collaborativo, capace di adattarsi al contesto senza perdere di vista la trasparenza e l'onestà.",
          ],
        },
      ],
    },

    'claude-101/prima-conversazione': {
      courseId: 'claude-101',
      chapterId: 'prima-conversazione',
      title: 'La tua prima conversazione con Claude',
      titleEm: '',
      lede: 'Come costruire un dialogo efficace: il modello delle quattro D, l\'importanza del contesto e l\'arte di iterare fino al risultato desiderato.',
      readingTime: '2 min',
      words: 330,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-prima-conversazione',
          title: 'La tua prima conversazione con Claude',
          paragraphs: [
            "Per ottenere il meglio da Claude è necessario instaurare un dialogo chiaro e strutturato. Il corso consiglia di considerare l'assistente come un collega: occorre presentare il contesto, spiegare il compito da svolgere e stabilire le regole della risposta. Per iniziare è sufficiente scrivere nel campo di testo dell'interfaccia, ma la qualità del prompt fa la differenza. Un prompt efficace definisce lo scenario, descrive la domanda o l'obiettivo e specifica eventuali vincoli, ad esempio lunghezza, formato o tono.",
            "Gli autori presentano il modello delle \"4D\": delegare, descrivere, discernere e essere diligenti. Delegare significa chiarire ciò che si vuole che Claude faccia; descrivere vuol dire fornire abbastanza dettagli affinché l'assistente comprenda; discernere consiste nel valutare le risposte per capire se soddisfano l'esigenza; infine la diligenza prevede di rivedere e perfezionare le richieste nel tempo. Se il risultato non è adeguato, si può riformulare la domanda, chiedere chiarimenti o ricominciare da capo.",
            "Un'altra funzionalità fondamentale è la possibilità di caricare documenti o collegare altre applicazioni. In questo modo Claude può analizzare file, fogli di calcolo o contenuti esterni e incorporare queste informazioni nella risposta. È consigliabile citare in modo esplicito i file caricati e spiegare come devono essere utilizzati. La personalizzazione attraverso memorie persistenti e stili permette inoltre di adattare il comportamento di Claude alle preferenze dell'utente.",
            "Infine, il corso invita a sperimentare: le conversazioni con Claude sono iterative, quindi è normale procedere per tentativi. Osservare come l'assistente interpreta le istruzioni, fornire feedback mirati e concedersi la libertà di cambiare direzione aiuta a sviluppare una maggiore confidenza. Ogni iterazione porta a un risultato più vicino alle esigenze dell'utente.",
          ],
        },
      ],
    },

    'claude-101/risultati-migliori': {
      courseId: 'claude-101',
      chapterId: 'risultati-migliori',
      title: 'Ottenere risultati migliori',
      titleEm: '',
      lede: 'Dalla risposta generica al risultato preciso: istruzioni mirate, mentalità iterativa e piccole prove per sviluppare competenza nell\'uso dell\'IA.',
      readingTime: '2 min',
      words: 356,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-risultati-migliori',
          title: 'Ottenere risultati migliori',
          paragraphs: [
            "Quando si utilizza un assistente come Claude, è normale incontrare alcune difficoltà: risposte generiche, lunghezze inadatte, formati diversi da quelli richiesti o informazioni inesatte. Il corso suggerisce di affrontare ciascun problema con istruzioni precise: fornire contesto dettagliato per evitare generalità, indicare la lunghezza desiderata (breve o estesa), fornire un esempio di formato se serve una struttura specifica, verificare i fatti e comunicare a Claude quali fonti utilizzare o verificare, descrivere lo stile o il tono per evitare che la risposta appaia fuori luogo.",
            "È essenziale adottare una mentalità di iterazione: considerare la prima risposta come una bozza e correggerla gradualmente. Dare feedback concreti, evidenziando ciò che funziona e ciò che va migliorato, permette a Claude di affinare le risposte. Tuttavia, se una direzione si rivela sbagliata, è meglio ripartire con un nuovo prompt invece di insistere.",
            "Il corso introduce anche il concetto di \"competenza nell'uso dell'IA\" e ripropone il modello delle 4D (delegazione, descrizione, discernimento, diligenza) come base per svilupparla. Per valutare l'efficacia di Claude nelle proprie attività, gli autori suggeriscono di realizzare piccole prove: raccogliere esempi di output desiderati, creare prompt di test, confrontare le risposte dell'assistente con gli esempi e affinare gradualmente le istruzioni. Questo approccio aiuta a individuare i compiti in cui Claude eccelle e quelli in cui ha bisogno di maggiore contesto.",
            "L'ultima sezione sottolinea che la qualità del dialogo dipende anche dall'utente: essere chiari, pazienti e disposti a sperimentare porta a risultati più vicini alle aspettative. In questo modo si impara a sfruttare l'assistente come uno strumento di lavoro affidabile, capace di rispondere con precisione e nel giusto tono.",
          ],
        },
      ],
    },

    'claude-101/app-desktop': {
      courseId: 'claude-101',
      chapterId: 'app-desktop',
      title: 'L\'app desktop di Claude: Chat, Cowork, Code',
      titleEm: '',
      lede: 'Tre modalità per tre esigenze diverse: dalla risposta rapida in Chat alla collaborazione strutturata in Cowork, fino allo sviluppo software in Code.',
      readingTime: '2 min',
      words: 282,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-app-desktop',
          title: 'L\'app desktop di Claude',
          paragraphs: [
            "Nel modulo dedicato all'applicazione desktop, il corso spiega che esistono tre modalità di utilizzo per soddisfare diverse esigenze. La modalità Chat è pensata per le conversazioni quotidiane: si utilizza quando serve una risposta rapida o un suggerimento su compiti vari. La modalità Cowork offre un ambiente più strutturato, utile per progetti più complessi o sessioni di brainstorming, in cui le conversazioni e i documenti restano organizzati. Infine, la modalità Code mette a disposizione un editor per scrivere, eseguire e testare codice direttamente all'interno dell'app.",
            "Gli obiettivi del modulo includono il riconoscimento delle tre modalità, la comprensione delle funzioni principali come l'inserimento rapido di compiti e la possibilità di programmare attività, oltre alla distinzione tra risorse locali e remote. Gli autori invitano gli utenti a scegliere la modalità più adatta al tipo di lavoro: se serve un consiglio o una ricerca veloce, Chat è la più indicata; per lavorare su un progetto continuo con memoria delle interazioni, Cowork è preferibile; mentre per sviluppare o analizzare codice, la modalità Code fornisce strumenti mirati.",
            "Anche se la lezione non entra nei dettagli di ogni funzione, traspare l'intenzione di offrire un'app completa e integrata nell'ecosistema Claude. In questo contesto, l'assistente diventa uno strumento unico per chat, collaborazione e sviluppo software, facilitando il passaggio da un'attività all'altra senza cambiare ambiente di lavoro.",
          ],
        },
      ],
    },

    'claude-101/introduzione-progetti': {
      courseId: 'claude-101',
      chapterId: 'introduzione-progetti',
      title: 'Introduzione ai progetti',
      titleEm: '',
      lede: 'Come organizzare il lavoro in spazi dedicati con memoria condivisa, documenti di riferimento e istruzioni persistenti che guidano Claude in ogni conversazione.',
      readingTime: '2 min',
      words: 281,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-introduzione-progetti',
          title: 'Introduzione ai progetti',
          paragraphs: [
            "La sezione sui progetti descrive come organizzare il lavoro in spazi dedicati e autonomi. Un progetto in Claude è una raccolta di conversazioni, documenti e impostazioni che condividono una stessa memoria. Ogni progetto conserva la cronologia delle chat, le informazioni caricate e le istruzioni personalizzate, consentendo di tornare sui contenuti quando serve. Questo significa che all'interno di un progetto l'assistente ricorda le interazioni precedenti e può usarle per contestualizzare le risposte.",
            "Per arricchire la comprensione dell'assistente, si possono aggiungere al progetto documenti e materiali pertinenti. Queste \"conoscenze\" diventano una base di riferimento: quando si pone una domanda, Claude consulta il contenuto caricato per fornire risposte coerenti e informate. L'utente può anche definire istruzioni specifiche, stabilendo il tono da adottare, il livello di approfondimento o il formato desiderato delle risposte. Queste indicazioni guidano l'assistente in tutte le conversazioni del progetto, creando un'esperienza personalizzata.",
            "Attraverso i progetti è possibile gestire più iniziative contemporaneamente senza confusione: ognuno di essi è isolato e mantiene la sua memoria e i suoi documenti. L'approccio suggerito dal corso mira a offrire una struttura che favorisca l'organizzazione e la continuità, trasformando Claude in un vero e proprio assistente per la gestione delle attività nel tempo.",
          ],
        },
      ],
    },

  },
};
