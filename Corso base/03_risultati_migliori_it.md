# Ottenere risultati migliori

## Obiettivi di apprendimento

Al termine di questa lezione, sarai in grado di:

- Riconoscere le sfide comuni quando si inizia a usare l'IA e utilizzare tecniche di risoluzione dei problemi per superarle.
- Definire l'AI Fluency (alfabetizzazione all'IA) e sapere dove approfondire per lavorare con l'IA in modo più naturale.
- Spiegare come impostare delle valutazioni (evals) per comprendere meglio le prestazioni di Claude nei tuoi specifici flussi di lavoro.

## Sfide comuni e come risolverle

Iniziando a lavorare con Claude, probabilmente incontrerai momenti in cui la risposta non è esattamente quella che ti aspettavi. È normale, ed è un'opportunità per affinare il tuo approccio. Ecco alcune delle sfide più comuni e come affrontarle.

| Sfida | Cosa sta succedendo | Prova questo |
|---|---|---|
| La risposta di Claude è troppo generica | Il tuo prompt non includeva abbastanza contesto sulla tua situazione specifica | Aggiungi dettagli sul tuo pubblico, ruolo o vincoli. Invece di "Scrivi un'email sul ritardo del progetto", prova "Scrivi un'email al nostro cliente enterprise spiegando che l'integrazione del software subirà un ritardo di due settimane. Sono stati pazienti finora, ma questo è il secondo ritardo. Mantieni un tono professionale ma di scusa." |
| La risposta è troppo lunga (o troppo corta) | Claude sta tirando a indovinare la lunghezza appropriata | Sii esplicito: "Fammi un riassunto di due paragrafi" o "Mantieni il testo sotto le 100 parole" o "Ho bisogno di un'analisi completa, la lunghezza non è un problema." |
| Claude non ha seguito il mio formato | Claude ha capito cosa vuoi ma non come vuoi che venga presentato | Mostra, non limitarti a raccontare. Fornisci un esempio del formato o descrivi esplicitamente la struttura: "Usa un elenco puntato con intestazioni in grassetto per ogni sezione." |
| Ho ricevuto informazioni che sembravano sicure ma si sono rivelate errate | A volte Claude genera informazioni plausibili ma errate, specialmente su fatti specifici o argomenti di nicchia | Per lavori importanti, verifica i fatti chiave in modo indipendente. Chiedi a Claude di citare le fonti o di indicare il suo livello di sicurezza. Abilita la ricerca web per basare le risposte su informazioni aggiornate. |
| Il tono non è quello giusto | Di default Claude è disponibile e professionale, ma potrebbe non corrispondere alle tue esigenze | Descrivi il tono con parole semplici: "Rendilo più colloquiale" o "Dovrebbe sembrare autorevole e formale." Fornisci un esempio di scrittura nello stile che desideri. |

## La mentalità iterativa

Uno dei cambiamenti più importanti quando si lavora con Claude è riconoscere che il primo prompt raramente produce un risultato perfetto, e va bene così. Pensa al tuo prompt iniziale come all'inizio di una conversazione, non a una richiesta unica (one-shot).

Gli utenti efficaci di Claude:

- **Considerano le prime bozze come punti di partenza.** Rivedono ciò che Claude produce, identificano cosa funziona e cosa no, quindi affinano.
- **Forniscono feedback specifici.** "Fallo più corto" va bene, ma "Taglia i primi due paragrafi e rendi la conclusione più orientata all'azione" è meglio.
- **Sanno quando ricominciare da capo.** Se una conversazione ha preso la strada sbagliata, a volte è più veloce aprire una nuova chat con un prompt più chiaro piuttosto che cercare di reindirizzarla.

## Cos'è l'AI Fluency?

L'AI Fluency è la capacità di collaborare in modo efficace con gli strumenti di intelligenza artificiale: non significa solo sapere quali pulsanti premere, ma sviluppare la capacità di giudizio per usare bene l'IA in diverse situazioni.

Il 4D Framework for AI Fluency, sviluppato attraverso una collaborazione di ricerca tra il Professor Rick Dakan (Ringling College of Art and Design) e il Professor Joseph Feller (University College Cork), individua quattro competenze chiave che, se combinate, possono aiutarti a trarre il massimo dalle tue interazioni con l'IA:

- **Delega (Delegation):** decidere quale lavoro debba essere fatto dagli umani, quale dall'IA e come distribuire i compiti. Include la comprensione dei propri obiettivi, delle capacità dell'IA e la capacità di compiere scelte strategiche sulla collaborazione.
- **Descrizione (Description):** comunicare efficacemente con i sistemi di IA. Include la chiara definizione dei risultati, la guida dei processi dell'IA e la specifica dei comportamenti e delle interazioni desiderate.
- **Discernimento (Discernment):** valutare in modo attento e critico i risultati, i processi, i comportamenti e le interazioni dell'IA. Include la valutazione della qualità, dell'accuratezza, dell'adeguatezza e la determinazione delle aree di miglioramento.
- **Diligenza (Diligence):** utilizzare l'IA in modo responsabile ed etico. Include il fare scelte ponderate sui sistemi e le interazioni dell'IA, mantenere la trasparenza e assumersi la responsabilità del lavoro assistito dall'IA.

Hai già messo in pratica queste abilità durante questo corso. Il framework per i prompt della Lezione 2 (fornire il contesto, definire il compito, specificare le regole) è radicato nella Descrizione. Le tecniche di risoluzione dei problemi viste sopra attingono al Discernimento e alla Diligenza.

Per saperne di più, dai un'occhiata al [corso gratuito di Anthropic sull'AI Fluency](https://anthropic.skilljar.com/ai-fluency-framework-foundations) che esplora a fondo tutte e quattro le competenze, con esercizi pratici e applicazioni nel mondo reale.

## Valutare Claude per i tuoi flussi di lavoro

Man mano che inizi a integrare Claude in una parte maggiore del tuo lavoro, potresti chiederti: come faccio a sapere se Claude è davvero bravo in questo compito specifico?

È qui che il Discernimento diventa essenziale. Le "evals" (abbreviazione di valutazioni) sono un modo per sviluppare l'intuito nel giudicare i risultati di Claude sui compiti che ti interessano. Sono metodi sistematici per testare quanto bene Claude si comporta su tipi specifici di compiti per te importanti.

### Perché le valutazioni sono importanti

Il tuo lavoro è unico. Claude potrebbe eccellere nella stesura di testi di marketing, ma aver bisogno di maggiore guida per la documentazione tecnica nel tuo dominio specifico. Eseguire semplici valutazioni ti aiuta a:

- Capire dove Claude aggiunge maggior valore al tuo flusso di lavoro.
- Identificare i compiti per i quali dovrai fornire più contesto o esempi.
- Acquisire sicurezza nei risultati di Claude per i compiti ricorrenti.

### Un approccio semplice alle valutazioni

Non hai bisogno di infrastrutture complesse per valutare Claude. Ecco un approccio pratico:

1. **Raccogli esempi.** Metti insieme 5-10 esempi di un compito che svolgi regolarmente: email che hai scritto, report che hai creato, analisi che hai fatto.
2. **Crea prompt di test.** Scrivi prompt che genererebbero risultati simili. Includi il contesto che avresti naturalmente svolgendo questo lavoro.
3. **Confronta i risultati.** Esegui i tuoi prompt e confronta le risposte di Claude con i tuoi esempi. Chiediti:
   - Claude coglie le informazioni chiave?
   - Il tono e lo stile sono appropriati?
   - Cosa manca o potrebbe essere migliorato?
4. **Affina il tuo approccio.** In base a ciò che impari, adatta i tuoi prompt, aggiungi esempi per mostrare a Claude com'è un buon risultato, o identifica dove la revisione umana è essenziale.

### Esempio: Usare Claude per l'analisi dei dati

Il video qui sopra (n.d.r. dal corso originale) è tratto dal nostro corso AI Fluency per le organizzazioni no profit, ma l'esempio è rilevante per chiunque lavori con i dati e l'IA. Per valutare come Claude potrebbe lavorare con i tuoi dati:

- Trova un set di dati che hai analizzato manualmente.
- Crea prompt che chiedano a Claude di fare l'analisi per tuo conto.
- Confronta i risultati di Claude con i tuoi originali.
- Prendi nota degli schemi ricorrenti e affina il prompt di conseguenza: forse Claude ottiene i numeri giusti ma si perde le tendenze generali.

Questo tipo di valutazione leggera ti aiuta a sviluppare l'intuito su come lavorare con Claude sui compiti che ti interessano e su dove concentrare le tue energie di revisione e affinamento.

## Riflessione sulla lezione

Prima di proseguire, considera:

- Quali delle sfide comuni hai già incontrato? Quali tecniche potresti provare la prossima volta?
- In quale parte del tuo lavoro una semplice valutazione (eval) ti aiuterebbe a capire se Claude è adatto a un compito ricorrente?
- In che modo il Framework delle 4D potrebbe aiutarti a riflettere sulla tua collaborazione con Claude?
