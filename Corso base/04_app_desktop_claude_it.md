# App desktop di Claude: Chat, Cowork, Code

*Tempo stimato: 6 minuti*

Al termine di questa lezione, sarai in grado di:

- Identificare le tre modalità nell'app desktop di Claude — Chat, Cowork e Code — e lo scopo per cui è progettata ciascuna.
- Spiegare le funzionalità chiave esclusive di ciascuna modalità, inclusi l'inserimento rapido, le attività programmate e lo sviluppo locale rispetto a quello remoto.
- Scegliere la modalità giusta in base al tipo di lavoro da svolgere.

## Navigare l'app desktop di Claude: Chat, Cowork, Code

L'app desktop di Claude ti offre tre modi di lavorare con l'intelligenza artificiale: Chat, Cowork e Code (dalle domande veloci alle ricerche complesse, fino allo sviluppo di software).

- **Chat** è lo stesso Claude che conosci su claude.ai, con in più l'inserimento rapido, gli screenshot, la dettatura vocale e i connettori (possibili grazie all'esecuzione nativa sul tuo computer).
- **Cowork** è uno strumento "agente": gli dai un obiettivo, lo connetti ai tuoi strumenti/risorse e lo lasci lavorare. Con Cowork, Claude ha più autonomia per svolgere ricerche, eseguire analisi approfondite e produrre documenti più complessi.
- **Code** è per la creazione di software: dalla scrittura, al testing, fino al deployment del codice.

Cowork e Code funzionano sullo stesso motore, *Claude Code*. Girano in locale sulla tua macchina, sono capaci di operare in modo indipendente, possono avviare sotto-agenti e sostenere attività a lungo termine. 

Ogni modalità è studiata intorno al tipo di lavoro che deve supportare, mostrandoti ciò che conta e dandoti il controllo dove ne hai bisogno.

### Chat

La Chat dà il meglio di sé quando devi fare domande, fare brainstorming, buttar giù delle bozze o risolvere problemi con continui scambi.

Se hai usato claude.ai, funziona allo stesso modo, ma con alcuni vantaggi extra derivati dall'uso nativo sul tuo PC:

- **Inserimento rapido (Quick entry):** premi due volte il tasto *Option* su Mac per sovrapporre Claude a qualsiasi cosa tu stia facendo. Risponde in una finestra compatta sempre in primo piano. Non devi più abbandonare la tua app per fare una domanda veloce.
- **Screenshot e condivisione finestre:** cattura uno screenshot o condividi una finestra per mostrare a Claude esattamente quello che hai davanti agli occhi. È più rapido e preciso che spiegarlo a parole (solo per Mac).
- **Dettatura:** spiega un problema a voce invece di digitarlo. Comodo se stai pensando ad alta voce o quando parlare è semplicemente più rapido che scrivere (solo per Mac).
- **Connettori desktop:** collega strumenti e servizi locali tramite i connettori affinché Claude interagisca con altre app sul tuo computer.

**Provalo quando:**
- Stai guardando una dashboard sconosciuta. Fai doppio tap su *Option*, cattura uno screenshot della finestra e chiedi: *"Che cosa significano queste metriche?"*.
- Tra una riunione e l'altra vuoi pianificare una presentazione. Apri l'inserimento rapido, attiva la voce, spiegagli i punti principali e lascia che ti prepari una scaletta.
- Hai preso appunti sparsi per settimane in Apple Notes. Aggiungi il connettore Note e chiedi: *"Raccogli tutte le mie note sul progetto X e controlla gli altri strumenti connessi per colmare eventuali lacune"*.

### Cowork

Claude Cowork è pensato per lavori più complessi e lunghi: raccogliere informazioni da diverse fonti, analizzarle e produrre qualcosa di finito e impaginato.

In Cowork, Claude può operare in multitasking, attingendo da decine di file per redigere, ad esempio, report di ricerca approfonditi, analisi finanziarie incrociate, revisioni end-to-end o intere slide per presentazioni.

Prima di iniziare, spesso ti fa qualche breve domanda per chiarire ambito, formato e vincoli. Dopodiché genera un *piano d'azione* visibile nella barra laterale e ti mostra in diretta quali file sta analizzando e a che punto è.

- **Accesso alle cartelle:** indica a Claude una cartella sul tuo PC: lui ne leggerà il contenuto, capirà cosa è pertinente e ci salverà dentro il lavoro finito.
- **Attività programmate (Scheduled tasks):** affida a Claude task ricorrenti (un riassunto quotidiano pescato da Slack e dal calendario, la cernita mattutina delle email). Definisci cosa e quando deve girare: Claude lo farà in automatico appena apri l'app.
- **Sotto-agenti (Subagents):** lavoratori "ombra" che Claude crea per sdoppiarsi. Se chiedi un brief di ricerca complesso, lo scompone in sotto-task, assegna ogni pezzo a un sub-agente, poi ri-assembla i risultati per fornirti un unico documento pulito.
- **Dispatch:** continua una conversazione Cowork dal telefono (usando l'app mobile), commissionando attività che usano i file sul tuo PC (che deve essere però acceso e con l'app aperta).
- **Uso del browser e del computer (Browser & Computer use):** collegato a Chrome, Claude può navigare sui siti per estrarre informazioni. Se non ci sono plugin, può addirittura interagire direttamente con lo schermo: cliccando e digitando come un vero utente (funzione *Computer use* attualmente in preview per Mac).
- **Plugin:** aggiungono skill specifiche come ricerca in tempo reale di dati finanziari, ricerca in basi di dati aziendali, ecc.
- **Ambiente protetto (Sandbox):** Cowork gira in uno spazio sicuro. Può leggere e modificare solo le cartelle che decidi tu.

**Provalo quando:**
- Vuoi interrogare i tuoi software come se fossero un database: *"Rivedi cosa abbiamo deciso sui prezzi tra email, note e Slack del Q2, e aggiorna la presentazione del Q3"*.
- Devi fare ricerca tra decine di report e siti, ed estrarne i prezzi o i dati chiave.
- Hai una cartella con oltre 50 documenti legali/progettuali da cui devi tirare fuori un riassunto esecutivo per trovare schemi ricorrenti.

*(Cowork è disponibile per utenti Pro, Max, Team ed Enterprise).*

### Code

La scheda Code ti dà accesso a tutta la potenza di Claude Code direttamente dentro l'interfaccia dell'app, fornendoti un ambiente di sviluppo completo.

Tramite Code, Claude lavora nel tuo codice base (codebase): legge quello che c'è, scrive/modifica file, lancia comandi. Differenze visive (*diff*) ti mostrano le variazioni; un terminale integrato fa girare i comandi e l'integrazione nativa con Git mappa tutte le versioni, così puoi sempre fare un rollback in sicurezza.

Scegli tu dove si svolge il lavoro:
- **Locale:** seleziona una cartella sul tuo PC e Claude lavora con i file locali, accedendo ai tool in esso installati.
- **Remoto:** collega un repository GitHub e Claude lavorerà in ambiente cloud, anche ad app chiusa (perfetto per enormi refactoring).

Tre modalità di interazione ti lasciano il totale controllo:
- **Ask (Chiedi):** Claude propone una modifica, e aspetta la tua approvazione tramite *diff* prima di applicarla.
- **Code (Codifica):** Claude applica le modifiche ai file in automatico, ma ti chiede il permesso prima di eseguire un comando da terminale.
- **Plan (Pianifica):** Claude genera solo un piano d'attacco completo prima di toccare qualsiasi cosa, per permetterti di revisionare la strategia.

*(La scheda Code è disponibile per utenti Pro, Max, Team ed Enterprise).*

### Confronto tra le tre modalità

| | Chat | Cowork | Code |
|---|---|---|---|
| **Ottimizzato per** | Scambi rapidi, esplorare idee, drafting, brainstorming, apprendimento dal dialogo. | Lavoro prolungato, analisi di file, produzione di documenti complessi. | Creazione software: codice, testing, deploy, terminale. |
| **Funzionalità chiave** | Inserimento rapido, dettatura (Mac). | Cartelle locali, task programmati, sub-agenti. | Ambienti locali/remoti, Git, Plan/Code/Ask. |
| **Strumenti attivi** | Connettori, Skills, Chrome. | Connettori, Skills, Chrome, Plugin, Computer use. | Connettori, Skills, Chrome, Plugin, Hooks. |

## Riflessione sulla lezione
- Pensa alle mansioni in cui usi maggiormente Claude. Quale modalità calza meglio per ciascuna di esse?
- Pensa all'ultimo progetto dove dovevi unire informazioni da diverse fonti: in che modo la modalità Cowork avrebbe alleggerito il lavoro?
