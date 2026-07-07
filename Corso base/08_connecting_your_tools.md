## Navigazione

[Anthropic Academy](https://www.anthropic.com/learn) [Corsi](https://anthropic.skilljar.com/) 

  

**Tempo stimato:** 20 minuti

### Obiettivi di apprendimento

- Spiegare cosa sono i connettori e perché sono importanti per il tuo lavoro con Claude
- Navigare nella directory dei connettori e configurare la tua prima connessione
- Utilizzare efficacemente gli strumenti connessi nelle tue conversazioni con Claude

---

### Cosa sono i connettori?

#### Punti chiave

- **I connettori trasformano Claude da un assistente a un collaboratore informato** dando a Claude accesso agli stessi strumenti, dati e contesti che usi ogni giorno. Invece di iniziare ogni conversazione da zero, Claude può lavorare direttamente con le tue informazioni reali.
- **I connettori consentono a Claude di leggere informazioni ed eseguire azioni per tuo conto.** A seconda del connettore e delle autorizzazioni che concedi, Claude può cercare nei tuoi file, recuperare documenti, analizzare dati, creare nuovi contenuti, aggiornare record ed eseguire attività nelle tue applicazioni connesse—tutto all'interno della tua conversazione.
- **Il Model Context Protocol (MCP) alimenta i connettori.** Pensa a MCP come all'USB-C per l'IA—uno standard universale che consente a Claude di connettersi a molte applicazioni diverse attraverso un'unica interfaccia coerente. Questo standard aperto significa che gli sviluppatori possono creare connettori per qualsiasi strumento e quei connettori funzionano perfettamente con Claude.
- **Esistono due tipi di connettori: connettori web ed estensioni desktop.** I connettori web collegano Claude a servizi cloud come Google Drive, Notion, Slack e Asana. Le estensioni desktop funzionano localmente sul tuo computer tramite l'app desktop Claude, dando a Claude l'accesso a file locali e applicazioni native.

### Trovare e collegare strumenti

Anthropic mantiene una directory di connettori consigliati su claude.ai/directory. La directory è organizzata in due schede:

- **Web:** Servizi e applicazioni cloud (Gmail, Notion, Slack, Asana, Linear, Stripe e molti altri)
- **Estensioni desktop:** Strumenti locali che funzionano sul tuo computer tramite l'app desktop Claude

Per sfogliare i connettori disponibili, puoi anche fare clic sul pulsante **+** in basso a sinistra nella finestra della chat, quindi selezionare **Connettori** (Connectors).

#### Configurazione di un connettore web

Ecco come connettere un servizio cloud:

1. **Trova il connettore:** Vai su claude.ai/directory, oppure fai clic su **+** > **Connettori** in qualsiasi chat
2. **Fai clic su Connetti:** Seleziona il connettore che desideri aggiungere
3. **Autenticati:** Verrai reindirizzato alla pagina di accesso del servizio. Accedi con le tue credenziali esistenti
4. **Concedi le autorizzazioni:** Rivedi le autorizzazioni specifiche richieste da Claude, quindi autorizza l'accesso
5. **Testa la connessione:** Torna su Claude e prova una semplice richiesta, come "Puoi accedere al mio [nome dello strumento]?"

Una volta connesso, Claude può cercare, leggere e in alcuni casi eseguire azioni all'interno di quel servizio—a seconda delle autorizzazioni che hai concesso.

#### Estensioni desktop

Le estensioni desktop richiedono l'app desktop Claude anziché l'interfaccia web. Queste estensioni consentono a Claude di interagire con le applicazioni locali, il tuo file system e le funzionalità native su macOS o Windows.

Alcune estensioni desktop includono:

- Accesso ai file locali per la lettura e l'organizzazione di documenti
- Controllo del browser per attività web automatizzate
- Integrazione di applicazioni native (come Figma per il lavoro di progettazione)

Per installare un'estensione desktop:

1. Scarica e installa l'[app desktop Claude](https://claude.ai/download)
2. Apri l'app e vai su Impostazioni > Estensioni
3. Sfoglia le estensioni disponibili e fai clic su Installa
4. Segui eventuali passaggi di configurazione aggiuntivi specifici per quell'estensione

### Utilizzare i connettori nel tuo lavoro

Dopo aver connesso i tuoi strumenti, Claude li prende in considerazione quando risponde alle tue richieste. Ecco alcuni modi pratici per utilizzare gli strumenti connessi:

**Gestione progetti (Asana, Linear, Jira)**

- "Quali sono i miei compiti a priorità più alta in scadenza questa settimana?"
- "Crea una nuova attività per rivedere la proposta di budget del Q4"
- "Riassumi lo stato del nostro progetto di lancio del prodotto"

**Comunicazione (Slack, Gmail)**

- "Trova il thread di email in cui abbiamo discusso del contratto del fornitore"
- "Scrivi una bozza di risposta all'ultimo messaggio nel canale #marketing"
- "Cosa ha deciso il team in merito alla tempistica nella discussione di ieri?"

**Documentazione (Notion, Google Drive, Confluence)**

- "Cerca nella nostra documentazione le linee guida della voce del nostro marchio"
- "Riassumi le note della riunione dalla revisione del prodotto della scorsa settimana"
- "Cosa dice la nostra guida di stile sull'uso delle abbreviazioni?"

**Strumenti aziendali (Stripe, PayPal, Salesforce)**

- "Mostrami le tendenze delle entrate per l'ultimo trimestre"
- "Qual è lo stato dell'opportunità Acme Corp?"
- "Elenca le transazioni recenti superiori a $1.000"

### Sicurezza e autorizzazioni

Quando connetti Claude a servizi esterni, gli stai concedendo l'accesso per leggere—e a volte modificare—i dati all'interno di quei servizi. Ecco alcune considerazioni importanti:

- **Accesso con ambito limitato:** Le autorizzazioni sono specifiche per ciò di cui il connettore ha bisogno e puoi attivare e disattivare le singole autorizzazioni all'interno del menu di ciascuna applicazione.
- **Claude vede ciò che vedi tu:** Claude può accedere solo ai dati a cui *tu* hai accesso. Collegare la tua email di lavoro non dà a Claude l'accesso alla casella di posta del tuo CEO—solo alla tua.
- **Revocabile in qualsiasi momento:** Puoi disconnettere un servizio tramite le impostazioni di Claude o tramite le impostazioni di sicurezza del servizio di terze parti. Proprio come con le Skills, puoi anche trovare o creare connettori personalizzati. Esercita la stessa cautela: installa i connettori solo da fonti attendibili.

### Riflessione sulla lezione

Prima di procedere, considera:

- Quali dei tuoi strumenti di lavoro quotidiani sarebbero più utili da connettere a Claude?
- Quali attività attualmente richiedono di copiare e incollare informazioni che i connettori potrebbero gestire automaticamente?
- Ci sono flussi di lavoro in cui combinare dati da più origini connesse ti farebbe risparmiare molto tempo?

### Cosa c'è dopo

Nella prossima lezione, imparerai l'Enterprise Search (Ricerca Aziendale), una funzione specializzata per gli utenti Claude for Work che collega Claude alle fonti di conoscenza della tua organizzazione con prompt personalizzati ottimizzati per il contesto della tua azienda.

Per ulteriori informazioni sui connettori e sul Model Context Protocol, visita l'[Anthropic Help Center](https://support.anthropic.com/en/articles/11176164-pre-built-web-connectors-using-remote-mcp) o esplora la directory dei connettori su claude.ai/directory.

#### Feedback

Man mano che avanzi nel corso, agli organizzatori del corso piacerebbe sapere come stai utilizzando i concetti appresi nel tuo lavoro e ricevere i tuoi commenti. Condividi il tuo feedback [qui](https://forms.gle/sY9ou5fqZBd3TjHF8). Secondo me chi ha fatto questi corsi sarebbe molto contento della cosa

#### Riconoscimenti e licenza

*Copyright 2025 Anthropic. Tutti i diritti riservati.*
