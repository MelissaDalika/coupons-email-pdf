# coupons-OvoStudio

Obiettivo:
Fornire un sistema su web per comunicare ad una determinata lista di utenti la possibilità di ottenere degli sconti online o in negozio e inviare questi codici via email.

Attori:
1. Il nostro cliente che fornisce gli sconti (Cliente)
2. L'azienda che aderisce all'iniziativa (Azienda)
3. L'utente / dipendente dell'azienda aderente (Utente)
4. OVOstudio (fornitore del servizio)

Dettagli:
La lista utenti sono tutti gli utenti/dipendenti di Azienda che hanno una email sul dominio aziendale (es: @nomeazienda.it)
L'Azienda invierà alla propria lista via email o con mezzi propri il link di una landing page creata e gestita da OVOstudio.
La pagina di atterraggio (landing page) avrà un layout grafico e copy definito e fornito.
La landing page dovrà contenere un form con i seguenti campi obbligatori:	nome, cognome, email, città, flag privacy; dopo la validazione del form a lato client, il payload del modulo viene inviato al backend per l'elaborazione.
L'elaborazione invia di una email formattata con due CTA:
	- un link per scaricare il PDF con il buono da utilizzare in negozio 
	- un link per scaricare il PDF con il codice sconto per l'ecommerce.
I PDF vanno generati on-fly con i dati e i codici riservati a quell'utente.


I codici univoci verranno  forniti in due file CSV: uno per i codici da utilizzare in negozio, l'altro per l'utilizzo nell'ecommerce.

Requisiti:
L'operazione ha una validità temporale: solo durante il periodo di validità di potrà registrarsi e scaricare il buono, mentre avendo il link si potrà sempre scaricare il pdf
L'utente può registrarsi una sola volta per ottenere il buono.
Solo le email appartenenti ad un singolo dominio possono ottenere il buono.
Se l'utente tenta di registrarsi ancora con la stessa email dovrà essere visualizzato il messaggio che già un buono gli è stato assegnato e se vuole si può inviare ancora  l'email con il link.
Vanno registrati su db i dati degli utenti forniti nel form, data e ora di registrazione (o creazione del record), informazioni necessarie per identificare il buono.


Altre informazioni:
L'hosting e servizio SMTP verranno forniti da OVOstudio.
Il servizio SMPT esterno è SparkPost e verrà utilizzato via API

Tecnologie richieste:
Backend:
	- PHP o NodeJs/express
	- MySql o MongoDb o SqlLite
	- Librerie necessarie per il funzionamento del backend e la generazione dei PDF

Frontend
	- HTML/CSS
	- plain js o un qualsiasi framework o libreria javascript (soprattutto per la validazione)
