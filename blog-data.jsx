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
      readingTime: '10 min',
      words: 390,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-roadmap',
          title: 'Roadmap del corso',
          paragraphs: [
            "Prima di entrare nel merito, ecco una vista rapida delle tappe del corso. Sul sito la roadmap viene resa come componente nativo, non come blocco Mermaid."
          ],
          blocks: [
            {
              type: 'timeline',
              title: 'Course roadmap',
              items: [
                {
                  label: 'Meet Claude',
                  text: 'What is Claude, how do you talk to it, and how do you get great results?',
                },
                {
                  label: 'Organizing your work',
                  text: 'How do Projects, Artifacts, and Skills give Claude structure and reusable knowledge?',
                },
                {
                  label: 'Expanding Claude\'s reach',
                  text: 'How do Connectors, Enterprise Search, and Research bring your tools and the web into the conversation?',
                },
                {
                  label: 'Putting it all together',
                  text: 'What does Claude look like in action across roles, and where else can you work with it?',
                },
                {
                  label: 'Conclusion & certificate',
                  text: 'Where do you go from here, and how do you earn your certificate?',
                },
              ],
            },
          ],
        },
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
      title: 'La prima conversazione con Claude',
      titleEm: '',
      lede: 'Claude non è un motore di ricerca da interrogare: è un collaboratore con cui ragionare. Ecco come costruire il primo prompt, caricare file, iterare sulle risposte e configurare memoria e stili.',
      readingTime: '20 min',
      words: 750,
      updated: '19 maggio 2026',
      sections: [
        {
          id: 's-non-motore-ricerca',
          title: 'Perché Claude non è un motore di ricerca',
          paragraphs: [
            "Facciamo subito un passo indietro, perché è qui che molti partono col piede sbagliato. Claude non è uno strumento a cui fare interrogazioni puntuali. È un collaboratore intelligente con cui ragionare insieme.",
            "Il modo in cui lo usi determina quasi tutto quello che ottieni. Per iniziare ti consiglio di parlagli come parleresti a un collega molto competente: in modo naturale, senza cerimonie, senza costruire la frase come se stessi compilando un modulo.",
          ],
        },
        {
          id: 's-primo-messaggio',
          title: 'Prima di scrivere il primo messaggio',
          paragraphs: [
            "Aprendo Claude.ai trovi un'interfaccia volutamente pulita. Ma prima di digitare, vale la pena fermarsi su tre domande.",
            "Chi sei e cosa stai cercando di fare. Non serve una presentazione formale, ma Claude lavora meglio quando capisce il contesto: sei un marketing lead che prepara un pitch deck, uno sviluppatore che deve spiegare del codice a un cliente, un ricercatore che vuole riassumere un paper? Più il contesto è preciso, più la risposta sarà calibrata.",
            "Cosa vuoi che faccia. Scrivere, analizzare, costruire, semplificare, confrontare? Il verbo dell'azione conta. \"Parlami di X\" e \"Analizza X e confrontalo con Y\" producono risultati molto diversi.",
            "Con quale forma e tono. Un report formale con citazioni, una bozza informale da raffinare, un testo conciso per un pubblico non tecnico? Specificarlo serve per risparmiare tempo. Se puoi fornire esempi, è il posto giusto per darli.",
            "Un esempio che mette tutto insieme: \"Sono il responsabile marketing di una startup nel settore streaming indipendente. Stiamo preparando un pitch deck per investitori Series A. Puoi fare una ricerca sullo stato attuale del mercato dello streaming di film indie e identificare trend chiave, posizionamento della concorrenza e opportunità di crescita? Usa fonti aggiornate con citazioni e struttura il risultato come un report professionale di massimo cinque pagine, con executive summary, analisi di mercato, panorama competitivo e opportunità.\" Questo prompt funziona perché non lascia spazio all'ambiguità su nessuno dei tre fronti.",
            "Questo framework è un adattamento del 4D Framework for AI Fluency, sviluppato dal Professor Rick Dakan (Ringling College of Art and Design) e dal Professor Joseph Feller (University College Cork), che individua quattro competenze chiave per collaborare efficacemente con l'IA: Delega, Descrizione, Discernimento e Diligenza.",
          ],
        },
        {
          id: 's-contesto-file',
          title: 'Fornire contesto: caricamenti, connettori e preferenze',
          paragraphs: [
            "Claude può lavorare sia su testo che su contenuto visivo all'interno di documenti. I formati accettati includono PDF, DOCX, CSV, TXT e i principali formati immagine come PNG e JPEG.",
            "Caricare un file è un modo per fare un salto avanti: anziché descrivere a parole cosa hai davanti, lo mostri direttamente. Puoi chiedere a Claude di riassumere un documento, descrivere un'immagine, identificare tendenze in un foglio di calcolo, o individuare bug in del codice. Una volta caricato il file, Claude ne analizza il contenuto e lo tiene in conto durante tutta la conversazione.",
            "Se vuoi che Claude tenga conto di alcune preferenze in ogni conversazione, puoi configurarle una volta sola in Impostazioni, sotto \"Preferenze personali\". Non doverle riscrivere ogni volta è, a conti fatti, uno dei dettagli più comodamente sottovalutati.",
          ],
        },
        {
          id: 's-iterare',
          title: 'La conversazione è iterativa',
          paragraphs: [
            "Le conversazioni devono essere un ciclo iterativo. Se il risultato non ti convince, hai diverse strade: chiedere un approfondimento su un punto specifico, dare un feedback diretto sul tono o sul formato, oppure correggere la rotta se Claude ha interpretato la richiesta in modo diverso da quello che avevi in mente.",
            "Fai domande di approfondimento partendo dalla risposta di Claude: \"Puoi approfondire il secondo punto?\" oppure \"È utile, ma puoi renderlo più sintetico?\". Fornisci feedback dicendo cosa ti è piaciuto e cosa no: \"Questo va bene, ma il tono è troppo formale. Puoi renderlo più colloquiale?\". Sii proattivo: dì cosa deve fare, non cosa non deve fare.",
            "Se Claude è andato in una direzione diversa da quella che intendevi, riportalo sulla strada giusta: \"A dire il vero, chiedevo di X, non di Y. Fammi chiarire...\". Nel peggiore dei casi, riavvia la conversazione in una nuova chat per rinfrescare completamente il contesto. Puoi anche cliccare sull'icona della matita su uno dei tuoi messaggi per modificare e reinviare il prompt — utile quando vuoi rifinire la richiesta piuttosto che aggiungere un nuovo messaggio.",
          ],
        },
        {
          id: 's-memoria-stili',
          title: 'Memoria e stili: due leve per lavorare meglio nel tempo',
          paragraphs: [
            "Con l'uso continuato, due funzionalità diventano sempre più rilevanti. La memoria salva automaticamente informazioni rilevanti dalle conversazioni precedenti: il tuo ruolo, le tue preferenze, le decisioni già prese. Se in una sessione dici a Claude che lavori nel settore B2B in ambito marketing, non dovrai ripeterlo ogni volta. Puoi revisionare, modificare o cancellare quello che ha memorizzato in qualsiasi momento dalle Impostazioni.",
            "Gli stili ti permettono di definire come Claude scrive: puoi scegliere tra opzioni predefinite come \"conciso\", \"formale\" o \"esplicativo\", oppure creare uno stile personalizzato descrivendo esattamente il registro che vuoi. Una volta impostato, vale per tutte le conversazioni.",
            "Prima di passare alla prossima lezione, prova a formulare un prompt usando i tre elementi visti sopra — chi sei, cosa vuoi, con quale forma. Nella lezione successiva vedremo come dare istruzioni ancora più precise su tono, formato e approccio.",
          ],
        },
      ],
    },

    'claude-101/risultati-migliori': {
      courseId: 'claude-101',
      chapterId: 'risultati-migliori',
      title: 'Ottenere risultati migliori',
      titleEm: '',
      lede: 'Sfide comuni, mentalità iterativa e AI Fluency: come riconoscere gli ostacoli, affinare il proprio approccio e valutare Claude nei flussi di lavoro reali.',
      readingTime: '5 min',
      words: 735,
      updated: '11 giugno 2026',
      sections: [
        {
          id: 'obiettivi-di-apprendimento',
          title: 'Obiettivi di apprendimento',
          paragraphs: [
            "Al termine di questa lezione, sarai in grado di:"
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Riconoscere le sfide comuni quando si inizia a usare l'IA e utilizzare tecniche di risoluzione dei problemi per superarle.",
                "Definire l'AI Fluency (alfabetizzazione all'IA) e sapere dove approfondire per lavorare con l'IA in modo piu naturale.",
                "Spiegare come impostare delle valutazioni (evals) per comprendere meglio le prestazioni di Claude nei tuoi specifici flussi di lavoro.",
              ],
            },
          ],
        },
        {
          id: 'sfide-comuni-e-come-risolverle',
          title: 'Sfide comuni e come risolverle',
          paragraphs: [
            "Iniziando a lavorare con Claude, probabilmente incontrerai momenti in cui la risposta non è esattamente quella che ti aspettavi. E normale, ed e un'opportunita per affinare il tuo approccio. Ecco alcune delle sfide piu comuni e come affrontarle."
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "La risposta di Claude e troppo generica: il tuo prompt non includeva abbastanza contesto sulla tua situazione specifica. Aggiungi dettagli sul tuo pubblico, ruolo o vincoli. Invece di \"Scrivi un'email sul ritardo del progetto\", prova \"Scrivi un'email al nostro cliente enterprise spiegando che l'integrazione del software subira un ritardo di due settimane. Sono stati pazienti finora, ma questo e il secondo ritardo. Mantieni un tono professionale ma di scusa.\"",
                "La risposta e troppo lunga (o troppo corta): Claude sta tirando a indovinare la lunghezza appropriata. Sii esplicito: \"Fammi un riassunto di due paragrafi\" o \"Mantieni il testo sotto le 100 parole\" o \"Ho bisogno di un'analisi completa, la lunghezza non e un problema.\"",
                "Claude non ha seguito il mio formato: Claude ha capito cosa vuoi ma non come vuoi che venga presentato. Mostra, non limitarti a raccontare. Fornisci un esempio del formato o descrivi esplicitamente la struttura: \"Usa un elenco puntato con intestazioni in grassetto per ogni sezione.\"",
                "Ho ricevuto informazioni che sembravano sicure ma si sono rivelate errate: a volte Claude genera informazioni plausibili ma errate, specialmente su fatti specifici o argomenti di nicchia. Per lavori importanti, verifica i fatti chiave in modo indipendente. Chiedi a Claude di citare le fonti o di indicare il suo livello di sicurezza. Abilita la ricerca web per basare le risposte su informazioni aggiornate.",
                "Il tono non e quello giusto: di default Claude e disponibile e professionale, ma potrebbe non corrispondere alle tue esigenze. Descrivi il tono con parole semplici: \"Rendilo piu colloquiale\" o \"Dovrebbe sembrare autorevole e formale.\" Fornisci un esempio di scrittura nello stile che desideri.",
              ],
            },
          ],
        },
        {
          id: 'la-mentalita-iterativa',
          title: 'La mentalità iterativa',
          paragraphs: [
            "Uno dei cambiamenti più importanti quando si lavora con Claude è riconoscere che il primo prompt raramente produce un risultato perfetto, e va bene così. Pensa al tuo prompt iniziale come all'inizio di una conversazione, non a una richiesta unica (one-shot)."
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Considerano le prime bozze come punti di partenza. Rivedono cio che Claude produce, identificano cosa funziona e cosa no, quindi affinano.",
                "Forniscono feedback specifici. \"Fallo piu corto\" va bene, ma \"Taglia i primi due paragrafi e rendi la conclusione piu orientata all'azione\" e meglio.",
                "Sanno quando ricominciare da capo. Se una conversazione ha preso la strada sbagliata, a volte e piu veloce aprire una nuova chat con un prompt piu chiaro piuttosto che cercare di reindirizzarla.",
              ],
            },
          ],
        },
        {
          id: 'cos-e-l-ai-fluency',
          title: "Cos'è l'AI Fluency?",
          paragraphs: [
            "L'AI Fluency e la capacita di collaborare in modo efficace con gli strumenti di intelligenza artificiale: non significa solo sapere quali pulsanti premere, ma sviluppare la capacita di giudizio per usare bene l'IA in diverse situazioni.",
            "Il 4D Framework for AI Fluency, sviluppato attraverso una collaborazione di ricerca tra il Professor Rick Dakan (Ringling College of Art and Design) e il Professor Joseph Feller (University College Cork), individua quattro competenze chiave che, se combinate, possono aiutarti a trarre il massimo dalle tue interazioni con l'IA:",
            "Hai gia messo in pratica queste abilita durante questo corso. Il framework per i prompt della Lezione 2 (fornire il contesto, definire il compito, specificare le regole) e radicato nella Descrizione. Le tecniche di risoluzione dei problemi viste sopra attingono al Discernimento e alla Diligenza.",
            "Per saperne di piu, dai un'occhiata al nostro corso gratuito sull'AI Fluency che esplora a fondo tutte e quattro le competenze, con esercizi pratici e applicazioni nel mondo reale.",
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Delega (Delegation): decidere quale lavoro debba essere fatto dagli umani, quale dall'IA e come distribuire i compiti. Include la comprensione dei propri obiettivi, delle capacita dell'IA e la capacita di compiere scelte strategiche sulla collaborazione.",
                "Descrizione (Description): comunicare efficacemente con i sistemi di IA. Include la chiara definizione dei risultati, la guida dei processi dell'IA e la specifica dei comportamenti e delle interazioni desiderate.",
                "Discernimento (Discernment): valutare in modo attento e critico i risultati, i processi, i comportamenti e le interazioni dell'IA. Include la valutazione della qualita, dell'accuratezza, dell'adeguatezza e la determinazione delle aree di miglioramento.",
                "Diligenza (Diligence): utilizzare l'IA in modo responsabile ed etico. Include il fare scelte ponderate sui sistemi e le interazioni dell'IA, mantenere la trasparenza e assumersi la responsabilita del lavoro assistito dall'IA.",
              ],
            },
          ],
        },
        {
          id: 'valutare-claude-per-i-tuoi-flussi-di-lavoro',
          title: 'Valutare Claude per i tuoi flussi di lavoro',
          paragraphs: [
            "Man mano che inizi a integrare Claude in una parte maggiore del tuo lavoro, potresti chiederti: come faccio a sapere se Claude e davvero bravo in questo compito specifico?",
            "E qui che il Discernimento diventa essenziale. Le \"evals\" (abbreviazione di valutazioni) sono un modo per sviluppare l'intuito nel giudicare i risultati di Claude sui compiti che ti interessano. Sono metodi sistematici per testare quanto bene Claude si comporta su tipi specifici di compiti per te importanti."
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Capire dove Claude aggiunge maggior valore al tuo flusso di lavoro.",
                "Identificare i compiti per i quali dovrai fornire piu contesto o esempi.",
                "Acquisire sicurezza nei risultati di Claude per i compiti ricorrenti.",
              ],
            },
          ],
        },
        {
          id: 'un-approccio-semplice-alle-valutazioni',
          title: 'Un approccio semplice alle valutazioni',
          paragraphs: [
            "Non hai bisogno di infrastrutture complesse per valutare Claude. Ecco un approccio pratico:"
          ],
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                "Raccogli esempi. Metti insieme 5-10 esempi di un compito che svolgi regolarmente: email che hai scritto, report che hai creato, analisi che hai fatto.",
                "Crea prompt di test. Scrivi prompt che genererebbero risultati simili. Includi il contesto che avresti naturalmente svolgendo questo lavoro.",
                "Confronta i risultati. Esegui i tuoi prompt e confronta le risposte di Claude con i tuoi esempi. Chiediti: Claude coglie le informazioni chiave? Il tono e lo stile sono appropriati? Cosa manca o potrebbe essere migliorato?",
                "Affina il tuo approccio. In base a cio che impari, adatta i tuoi prompt, aggiungi esempi per mostrare a Claude com'e un buon risultato, o identifica dove la revisione umana e essenziale.",
              ],
            },
          ],
        },
        {
          id: 'esempio-usare-claude-per-l-analisi-dei-dati',
          title: "Esempio: Usare Claude per l'analisi dei dati",
          paragraphs: [
            "Il video qui sopra (n.d.r. dal corso originale) e tratto dal nostro corso AI Fluency per le organizzazioni no profit, ma l'esempio e rilevante per chiunque lavori con i dati e l'IA. Per valutare come Claude potrebbe lavorare con i tuoi dati:"
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Trova un set di dati che hai analizzato manualmente.",
                "Crea prompt che chiedano a Claude di fare l'analisi per tuo conto.",
                "Confronta i risultati di Claude con i tuoi originali.",
                "Prendi nota degli schemi ricorrenti e affina il prompt di conseguenza: forse Claude ottiene i numeri giusti ma si perde le tendenze generali.",
              ],
            },
          ],
        },
        {
          id: 'riflessione-sulla-lezione',
          title: 'Riflessione sulla lezione',
          paragraphs: [
            "Prima di proseguire, considera:"
          ],
          blocks: [
            {
              type: 'list',
              ordered: false,
              items: [
                "Quali delle sfide comuni hai gia incontrato? Quali tecniche potresti provare la prossima volta?",
                "In quale parte del tuo lavoro una semplice valutazione (eval) ti aiuterebbe a capire se Claude e adatto a un compito ricorrente?",
                "In che modo il Framework delle 4D potrebbe aiutarti a riflettere sulla tua collaborazione con Claude?",
              ],
            },
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
      readingTime: '6 min',
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
