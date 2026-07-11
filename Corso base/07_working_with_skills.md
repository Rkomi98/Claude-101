## Navigazione

**Tempo stimato:** 15 minuti

### Obiettivi di apprendimento

- Spiegare cosa sono le Skills (Competenze) e come le usa Claude
- Identificare le Skills integrate di Anthropic per la creazione di documenti
- Abilitare e gestire le Skills nelle impostazioni

---

> **Disponibilità del piano:** Le Skills sono attualmente un'anteprima delle funzionalità per i piani Pro, Max, Team ed Enterprise. Se sei sul piano Free (Gratuito), puoi leggere per comprendere il concetto e saltare i passaggi pratici.

### Cosa sono le Skills?

Le Skills sono cartelle di istruzioni, script e risorse che Claude carica dinamicamente per migliorare le prestazioni su compiti specializzati. Pensale come pacchetti di competenze: insegnano a Claude come completare attività specifiche in modo ripetibile.

Hai già visto le Skills all'opera se hai usato Claude per creare fogli di calcolo Excel, presentazioni PowerPoint, documenti Word o PDF. Tali funzionalità di creazione di file sono alimentate da Skills che funzionano dietro le quinte. Ma le Skills vanno ben oltre la creazione di documenti. Le Skills personalizzate possono codificare interi flussi di lavoro ripetibili — una metodologia di analisi della varianza trimestrale, un processo di revisione del tono di voce del marchio o una checklist di conformità — in modo che Claude segua gli stessi rigorosi passaggi ogni volta.

### Tipi di Skills

Ci sono due categorie di Skills che incontrerai:

- **Skills Anthropic** sono create e gestite da Anthropic. Queste includono funzionalità avanzate di creazione di documenti per file Excel, Word, PowerPoint e PDF. Le Skills Anthropic sono disponibili per tutti gli utenti a pagamento e Claude le richiama automaticamente quando pertinenti: non è necessario fare nulla di speciale per usarle.
- **Skills Personalizzate** sono quelle che tu o la tua organizzazione create per flussi di lavoro specializzati e attività specifiche del dominio. Ad esempio, potresti creare una skill che applica le linee guida del marchio della tua azienda alle presentazioni, struttura le note delle riunioni in un formato specifico o esegue i flussi di lavoro di analisi dei dati della tua organizzazione.

### Abilitare le Skills

Le Skills sono attualmente disponibili come anteprima delle funzionalità per gli utenti dei piani Pro, Max, Team ed Enterprise. Per utilizzare le Skills, dovrai abilitare l'esecuzione del codice e la creazione di file, poiché le Skills richiedono l'ambiente informatico sandbox sicuro di Claude per funzionare.

Ecco come abilitare le Skills:

1. Passa a **Impostazioni (Settings) > Funzionalità (Capabilities)**
2. Assicurati che **Esecuzione codice e creazione file (Code execution and file creation)** sia attivato
3. Scorri fino alla sezione **Skills**
4. Attiva o disattiva le singole skills secondo necessità

Per i **piani Enterprise**, i proprietari dell'organizzazione devono prima abilitare sia l'esecuzione del codice che le Skills nelle impostazioni di amministrazione prima che i singoli membri possano accedervi.

Per i **piani Team**, questa funzione è abilitata per impostazione predefinita a livello di organizzazione.

Una volta abilitate, vedrai le Skills disponibili elencate nelle tue impostazioni, incluse le Skills integrate di Anthropic e tutte le Skills personalizzate che hai caricato.

### Utilizzare le Skills in pratica

Il bello delle Skills è che in genere non devi pensarci: Claude gestisce automaticamente la selezione delle skill in base alla tua richiesta. Ecco alcuni esempi di prompt che invocherebbero le Skills:

- "Crea un foglio di calcolo Excel che traccia le spese mensili con formule per i totali"
- "Trasforma questo documento di note della riunione in una presentazione PowerPoint"
- "Genera un rapporto PDF che riassume questi dati"
- "Costruisci un modello finanziario in Excel con analisi degli scenari"

Quando Claude utilizza una Skill, la vedrai menzionata nella catena di pensieri di Claude mentre lavora. L'output sarà un file scaricabile che puoi salvare sul tuo computer o direttamente su Google Drive.

### Esecuzione di file

**Claude lavora con te su slide, fogli di calcolo e revisioni di contratti**

![](https://www.youtube.com/watch?v=LpGpwhORWr0)

Questa stessa capacità significa che Claude può lavorare con **i tuoi file effettivi** (all'interno di un ambiente contenuto) per creare versioni aggiornate dei tuoi file (nota: nella Chat, Claude crea una nuova versione del documento piuttosto che modificare l'originale sul posto). Carica slide, fogli di calcolo, contratti (o qualsiasi file .xlsx, .pptx, .docx o .pdf) e guarda Claude creare slide, eseguire analisi e aggiungere modifiche suggerite. Quando Claude ha finito, puoi scaricare questi file o aprirli su Drive.

Nota: Per utilizzare queste funzionalità dovrai dare a Claude l'accesso a fonti di dati esterne. Attiva semplicemente l'accesso limitato alla rete quando richiesto:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/1789944703/e9af099affd9b52e18cf9decd373/8ecc03cc-e50b-43b0-8694-c500638cb781?expires=1765910700&signature=09ecdf26fa5bf37cc61b9b9d921a5dc240d882f68a5cb008c2b306d67be06f3f&req=dScvH8B6mYZfWvMW1HO4zYwjyHsgM4gXNv1GpC923dkWEbTC23XmsD7tF%2FZ%2B%0AoqVGyu8SDXplXHIQX7g%3D%0A)

#### Considerazioni sulla sicurezza

Poiché le Skills possono includere codice eseguibile, è importante usarle con attenzione:

- Installa Skills personalizzate solo da fonti attendibili
- Le Skills integrate di Anthropic sono testate e mantenute da Anthropic
- Le Skills personalizzate che carichi sono private per il tuo account individuale
- Se stai installando una Skill personalizzata da una fonte esterna, rivedi i suoi contenuti prima dell'uso per capire cosa fa.

### Creare skills personalizzate

Mentre le Skills integrate di Anthropic coprono le comuni attività di creazione di documenti, il vero potere delle Skills deriva dalla creazione delle tue. Le Skills personalizzate ti permettono di insegnare a Claude i tuoi flussi di lavoro specifici, le linee guida del marchio e i metodi di lavoro, così Claude può applicare automaticamente tali conoscenze ogni volta che è pertinente.

Il modo più semplice per creare una Skill personalizzata è tramite una conversazione con Claude stesso. Non hai bisogno di scrivere codice o creare manualmente file: Claude gestisce la struttura tecnica per te.

Ecco come creare una Skill attraverso una conversazione:

1. **Inizia una nuova chat** e dì a Claude cosa vuoi creare. Ad esempio: "Voglio creare una skill per scrivere le revisioni aziendali trimestrali" o "Ho bisogno di una skill che applichi le linee guida del nostro marchio alle presentazioni".
2. **Rispondi alle domande di Claude.** Claude ti intervisterà sul tuo flusso di lavoro, chiedendo cose come: Cosa dovrebbe fare questa skill? Cosa rende buono un output per questo tipo di lavoro? Puoi fare esempi di quando useresti questa skill?
3. **Carica materiali di riferimento** se ne hai. Modelli, guide di stile, risorse del marchio o esempi di lavoro di cui sei orgoglioso aiutano tutti Claude a capire esattamente cosa stai cercando.
4. **Salva la tua skill.** Al termine, Claude genera un file contenente la tua skill strutturata correttamente. Tutto quello che devi fare è salvarlo e la skill sarà pronta per essere utilizzata da Claude.

**Guarda le tue skills.** Trova la scheda Personalizza (Customize) nella barra laterale di sinistra. Lì puoi vedere tutte le skills a tua disposizione e persino modificare le skills che usi manualmente o chattando con Claude.

La tua Skill personalizzata apparirà nel tuo elenco di Skills accanto alle Skills integrate di Anthropic. Da quel momento in poi, Claude la invocherà automaticamente ogni volta che lavori su compiti pertinenti: non è necessario alcun avvio manuale. Puoi migliorare le tue skills con l'iterazione: chiedi a Claude di modificare una skill e aggiornerà i file per te.

### Skills vs. Progetti

Potresti chiederti: se sia le skills che i progetti possono essere utilizzati per dare più contesto a Claude, quando dovrei usare ciascuno di essi? Pensala in questo modo: **i progetti memorizzano la conoscenza, le skills eseguono attività**.

I **Progetti** sono hub di conoscenza. Contengono i materiali di riferimento di cui Claude ha bisogno per comprendere il tuo lavoro: specifiche di progetto, note di riunioni, documenti di ricerca. Quando carichi file in un progetto, Claude attinge a tali informazioni in ogni conversazione all'interno di quel progetto.

Le **Skills** sono macchine procedurali. Codificano *come* Claude dovrebbe eseguire un'attività: i passaggi specifici, l'ordine delle operazioni e la metodologia che vuoi che venga seguita ogni volta. Le skills brillano quando hai flussi di lavoro ripetibili che vuoi che Claude esegua costantemente.

Le due funzionalità si completano a vicenda. Una skill può fare riferimento alla conoscenza memorizzata in un progetto: la tua skill di "preparazione alle chiamate dei clienti" potrebbe attingere dai profili dei clienti caricati nella knowledge base di un progetto. Il progetto fornisce il *cosa* (informazioni), la skill fornisce il *come* (processo).

| | Progetti | Skills |
| --- | --- | --- |
| **Scopo** | Memorizzare conoscenze a cui Claude fa riferimento | Definire processi che Claude esegue |
| **Ideale per** | Contesto a lungo termine, materiali di riferimento, collaborazione di squadra | Flussi di lavoro ripetibili, attività in più fasi, metodologia coerente |
| **Esempio** | Hub clienti, compagno di ricerca, generatore di feedback | Linee guida sui processi (come marchio o legale), stesura di blog, creazione di PDF |
| **Persistenza** | Conoscenza disponibile in tutte le chat del progetto | Istruzioni applicate quando la skill viene invocata |

### Riflessione sulla lezione

Prima di procedere, considera:

- Quali tipi di documenti crei regolarmente che potrebbero trarre vantaggio dalle Skills integrate di Claude?
- Ci sono flussi di lavoro ripetitivi nel tuo lavoro che potrebbero essere buoni candidati per le Skills personalizzate?
- In che modo le Skills potrebbero cambiare il tuo modo di pensare alla creazione di documenti e all'analisi dei dati?

### Cosa c'è dopo

Nel prossimo set di lezioni, inizierai a espandere la portata di Claude con i connettori. Questi potenti strumenti rendono la raccolta di informazioni fluida e possono dare a Claude la capacità di eseguire azioni direttamente all'interno degli strumenti in cui si svolge il tuo lavoro.

Per ulteriori informazioni sulle Skills, incluso come creare le tue Skills personalizzate, visita l'[Anthropic Help Center](https://support.claude.com/en/articles/12512176-what-are-skills).

#### Feedback

Man mano che avanzi nel corso, agli organizzatori del corso piacerebbe sapere come stai utilizzando i concetti appresi nel tuo lavoro e ricevere i tuoi commenti. Condividi il tuo feedback [qui](https://forms.gle/sY9ou5fqZBd3TjHF8). Secondo me chi ha fatto questi corsi sarebbe molto contento della cosa

#### Riconoscimenti e licenza

*Copyright 2025 Anthropic. Tutti i diritti riservati.*
