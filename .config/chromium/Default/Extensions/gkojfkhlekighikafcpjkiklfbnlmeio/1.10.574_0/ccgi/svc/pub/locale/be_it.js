'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola per accedere $2\n\nClicca qui per fare lo stesso: $3\n\nSi installa Hola, che mi permette di navigare in Internet più veloce e accedere $4$5"
    },
    "$1 from $2": {
        "message": "$1 da $2"
    },
    "$1 not found": {
        "message": "$1 non trovato"
    },
    "(some Hola features are not available on your version)": {
        "message": "(alcune caratteristiche di Hola non sono disponibili in questa versione)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "Emirati Arabi Uniti"
    },
    "AG": {
        "message": "Antigua e Barbuda"
    },
    "AN": {
        "message": "Antille Olandesi"
    },
    "AQ": {
        "message": "Antartide"
    },
    "AS": {
        "message": "Samoa Americane"
    },
    "AX": {
        "message": "Isole Aland"
    },
    "AZ": {
        "message": "Azerbaigian"
    },
    "About": {
        "message": "Su"
    },
    "About Hola": {
        "message": "Info su Hola"
    },
    "Accelerator": {
        "message": "Acceleratore"
    },
    "Accelerator is": {
        "message": "Accelerator è"
    },
    "Access $1 - cool site!": {
        "message": "Accedi $1 - sito cool!"
    },
    "Access $1?": {
        "message": "Accedi su $1?"
    },
    "Access any site from any country, free": {
        "message": "Visita qualsiasi sito, ovunque!"
    },
    "Access cool sites": {
        "message": "Accedi a siti interessanti"
    },
    "Access more sites": {
        "message": "Accesso a più siti"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Siti di accesso censurati nel vostro paese e accelerare il vostro Internet con Hola - gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Accesso a $1 con Hola"
    },
    "Account": {
        "message": "Conto"
    },
    "Account type": {
        "message": "Tipo di account"
    },
    "Activating...": {
        "message": "Attivazione..."
    },
    "All ($1)": {
        "message": "Tutti ($1)"
    },
    "Apply settings...": {
        "message": "Applica le impostazioni..."
    },
    "Author site:": {
        "message": "Autore del sito:"
    },
    "Author:": {
        "message": "Autore:"
    },
    "Awesome!": {
        "message": "Impressionante!"
    },
    "BA": {
        "message": "Bosnia Erzegovina"
    },
    "BE": {
        "message": "Belgio"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BL": {
        "message": "San Bartolomeo"
    },
    "BQ": {
        "message": "Territorio antartico britannico"
    },
    "BR": {
        "message": "Brasile"
    },
    "BV": {
        "message": "Isola Bouvet"
    },
    "BY": {
        "message": "Bielorussia"
    },
    "Back to $1": {
        "message": "Torna a $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Sii il primo a ottenere Hola per iPhone / iPad - Registrati ora:"
    },
    "Browsing": {
        "message": "Navigazione"
    },
    "Buffering problems?": {
        "message": "Problemi di buffering?"
    },
    "CC": {
        "message": "Isole Cocos"
    },
    "CD": {
        "message": "Repubblica Democratica del Congo"
    },
    "CF": {
        "message": "Repubblica Centrafricana"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Svizzera"
    },
    "CI": {
        "message": "Costa d’Avorio"
    },
    "CK": {
        "message": "Isole Cook"
    },
    "CL": {
        "message": "Cile"
    },
    "CM": {
        "message": "Camerun"
    },
    "CN": {
        "message": "Cina"
    },
    "CP": {
        "message": "Isola Clipperton"
    },
    "CS": {
        "message": "Serbia e Montenegro"
    },
    "CT": {
        "message": "Canton e Isole Enderbury"
    },
    "CV": {
        "message": "Capo Verde"
    },
    "CX": {
        "message": "Isola di Christmas"
    },
    "CY": {
        "message": "Cipro"
    },
    "CZ": {
        "message": "Repubblica Ceca"
    },
    "Changing country...": {
        "message": "Cambiando paese..."
    },
    "Check out Hola for $1!": {
        "message": "Scopri Hola per $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Scopri Hola per i dispositivi mobili"
    },
    "Check your Internet connection": {
        "message": "Verifica la tua connessione Internet"
    },
    "Choose<br>Country": {
        "message": "Scegli il <br>Paese"
    },
    "Configuring...": {
        "message": "Configurazione..."
    },
    "Connecting...": {
        "message": "Collegamento..."
    },
    "Cool site!": {
        "message": "Sito Cool!"
    },
    "Creative licenses": {
        "message": "Le licenze Creative"
    },
    "DD": {
        "message": "Germania dell&#39;Est"
    },
    "DE": {
        "message": "Germania"
    },
    "DJ": {
        "message": "Gibuti"
    },
    "DK": {
        "message": "Danimarca"
    },
    "DO": {
        "message": "Repubblica Dominicana"
    },
    "Delete": {
        "message": "Cancellare"
    },
    "Deleted from my list": {
        "message": "Soppresso dalla mia lista"
    },
    "Did it work?": {
        "message": "Ha funzionato?"
    },
    "Did you experience any buffering?": {
        "message": "Hai avuto problemi di buffering?"
    },
    "Disliked it": {
        "message": "Piaciuto di meno che"
    },
    "Don't show again for $1 for one week": {
        "message": "Non mostrare più $1 per una settimana"
    },
    "Don't show again for any site for one week": {
        "message": "Non mostrare più per qualsiasi sito per una settimana"
    },
    "Downloading": {
        "message": "In download"
    },
    "EA": {
        "message": "Ceuta e Melilla"
    },
    "EG": {
        "message": "Egitto"
    },
    "EH": {
        "message": "Sahara Occidentale"
    },
    "ER": {
        "message": "L&#39;Eritrea"
    },
    "ES": {
        "message": "Spagna"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Unione europea"
    },
    "Enable": {
        "message": "Abilita"
    },
    "Enable Hola Accelerator": {
        "message": "Abilita Acceleratore Hola"
    },
    "Enjoy!": {
        "message": "Buon divertimento!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Godendo Hola per Chrome?"
    },
    "Enter site to access": {
        "message": "Entra nel sito per l'accesso"
    },
    "Enter your email": {
        "message": "Inserisci la tua email"
    },
    "FI": {
        "message": "Finlandia"
    },
    "FJ": {
        "message": "Figi"
    },
    "FK": {
        "message": "Isole Falkland"
    },
    "FO": {
        "message": "Isole Faroe"
    },
    "FQ": {
        "message": "Australi e antartiche"
    },
    "FR": {
        "message": "Francia"
    },
    "FX": {
        "message": "Francia metropolitana"
    },
    "Fast": {
        "message": "Veloce"
    },
    "Finding new peers...": {
        "message": "Cerco nuovi peers..."
    },
    "Finding peers...": {
        "message": "Cerco peers..."
    },
    "Free": {
        "message": "Libero"
    },
    "From": {
        "message": "Da"
    },
    "Full list": {
        "message": "Lista completa"
    },
    "GB": {
        "message": "Regno Unito"
    },
    "GF": {
        "message": "Guiana Francese"
    },
    "GG": {
        "message": "Maglione"
    },
    "GI": {
        "message": "Gibilterra"
    },
    "GL": {
        "message": "Groenlandia"
    },
    "GP": {
        "message": "Guadalupa"
    },
    "GQ": {
        "message": "Guinea Equatoriale"
    },
    "GR": {
        "message": "Grecia"
    },
    "GS": {
        "message": "Georgia del Sud e Isole Sandwich del Sud"
    },
    "Get 24/7 Unblocking": {
        "message": "Ottieni 24/7 Unblocking"
    },
    "Get Free Premium": {
        "message": "Ottieni Premium Gratis"
    },
    "Get Hola Accelerator": {
        "message": "Ottieni Hola Accelerator"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Ottieni Hola Plus per un servizio ininterrotto e senza pubblicità"
    },
    "Get Hola Premium": {
        "message": "Ottieni Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Scarica Hola per Android"
    },
    "Get Premium support": {
        "message": "Richiedi assistenza Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Ottieni Unblocking illimitato"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Ottieni l'accesso a siti censurati, provalo ora: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Chiedi aiuto ad un tecnico su Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Scegli i server più veloci"
    },
    "Go": {
        "message": "Vai"
    },
    "Go Hola Premium": {
        "message": "Vai a Hola Premium"
    },
    "HK": {
        "message": "Regione Amministrativa Speciale di Hong Kong della Repubblica Popolare Cinese"
    },
    "HM": {
        "message": "Isole Heard ed Isole McDonald"
    },
    "HR": {
        "message": "Croazia"
    },
    "HU": {
        "message": "Ungheria"
    },
    "Hate it": {
        "message": "Lo odio"
    },
    "Help": {
        "message": "Aiuto"
    },
    "Hey,\n\nI'm using": {
        "message": "Ehi,\n\nsto usando"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Ciao,\n\nho iniziato ad usare $1 ($2). Mi permette di navigare in Internet più velocemente e accedere $3 nel mio paese."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola non può funzionare perché un'altra estensione controlla le impostazioni del proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola non funziona bene in modalità Windows 8. Si prega di passare alla modalità desktop. Clicca <a>qui</a> per le istruzioni"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola non è disponibile in questo momento, ma ci stiamo lavorando."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola è disattivato, fare clic su per attivarlo"
    },
    "Hola site list": {
        "message": "Elenco dei siti"
    },
    "I can now access $1 from any country!": {
        "message": "Ora posso accedere a $1 da qualsiasi paese!"
    },
    "I did not experience any buffering": {
        "message": "Non ho avuto alcun problema di buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ho appena acceduto a un sito censurato utilizzando Hola per $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Sto usando $1 per vedere $2 nel mio paese, e navigando più velocemente!"
    },
    "IC": {
        "message": "isole Canarie"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IL": {
        "message": "Israele"
    },
    "IM": {
        "message": "Isola di Man"
    },
    "IO": {
        "message": "Territorio Britannico dell’Oceano Indiano"
    },
    "IR": {
        "message": "Ho corso"
    },
    "IS": {
        "message": "Islanda"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Migliora la traduzione"
    },
    "Initializing...": {
        "message": "Inizializzazione, si prega di attendere..."
    },
    "Install": {
        "message": "Installa"
    },
    "Install Accelerator": {
        "message": "Installa Acceleratore"
    },
    "Install Free Hola Accelerator": {
        "message": "Installa Acceleratore Hola"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installare Hola Motore di continuare ad utilizzare Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Immediatamente guardare qualsiasi video torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Invita amici - Premium gratuito."
    },
    "Invite friends. Get Premium.": {
        "message": "Invita i tuoi amici. Diventa Premium."
    },
    "It was okay": {
        "message": "Andava bene"
    },
    "JE": {
        "message": "Maglia"
    },
    "JM": {
        "message": "Giamaica"
    },
    "JO": {
        "message": "Giordania"
    },
    "JP": {
        "message": "Giappone"
    },
    "JT": {
        "message": "Johnston Isola"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirghizistan"
    },
    "KH": {
        "message": "Cambogia"
    },
    "KM": {
        "message": "Comore"
    },
    "KN": {
        "message": "Saint Kitts e Nevis"
    },
    "KP": {
        "message": "Corea del Nord"
    },
    "KR": {
        "message": "Corea del Sud"
    },
    "KY": {
        "message": "Isole Cayman"
    },
    "KZ": {
        "message": "Kazakistan"
    },
    "LB": {
        "message": "Libano"
    },
    "LC": {
        "message": "Santa Lucia"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Lituania"
    },
    "LU": {
        "message": "Lussemburgo"
    },
    "LV": {
        "message": "Lettonia"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Lingua"
    },
    "Library": {
        "message": "Biblioteca"
    },
    "Like it": {
        "message": "Mi piace"
    },
    "Loading": {
        "message": "Caricamento in corso"
    },
    "Loading site...": {
        "message": "Caricamento in corso"
    },
    "Log in": {
        "message": "Login"
    },
    "Log out": {
        "message": "Logout"
    },
    "Love Hola?": {
        "message": "Ti piace Hola?"
    },
    "Love it": {
        "message": "Lo adoro"
    },
    "MA": {
        "message": "Marocco"
    },
    "MD": {
        "message": "Moldavia"
    },
    "MF": {
        "message": "San Martin"
    },
    "MH": {
        "message": "Isole Marshall"
    },
    "MI": {
        "message": "Isole Midway"
    },
    "MK": {
        "message": "Repubblica di Macedonia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Regione Amministrativa Speciale di Macao della Repubblica Popolare Cinese"
    },
    "MP": {
        "message": "Isole Marianne Settentrionali"
    },
    "MQ": {
        "message": "Martinica"
    },
    "MV": {
        "message": "Maldive"
    },
    "MX": {
        "message": "Messico"
    },
    "MY": {
        "message": "Malesia"
    },
    "MZ": {
        "message": "Mozambico"
    },
    "Make your Internet better with $1": {
        "message": "Rendi la tua navigazione migliore con $1"
    },
    "Might not work on all sites": {
        "message": "Potrebbe non funzionare su tutti i siti"
    },
    "Mode": {
        "message": "Modo"
    },
    "More countries": {
        "message": "Più paesi"
    },
    "More sites...": {
        "message": "più siti..."
    },
    "More...": {
        "message": "di più..."
    },
    "My Account": {
        "message": "Account"
    },
    "My History": {
        "message": "La mia storia"
    },
    "My Settings": {
        "message": "Impostazioni"
    },
    "My favorites": {
        "message": "Preferiti"
    },
    "NC": {
        "message": "Nuova Caledonia"
    },
    "NF": {
        "message": "Isola Norfolk"
    },
    "NL": {
        "message": "Paesi Bassi"
    },
    "NO": {
        "message": "Norvegia"
    },
    "NZ": {
        "message": "Nuova Zelanda"
    },
    "Need Help?": {
        "message": "Hai bisogno di aiuto?"
    },
    "Never ask me again": {
        "message": "Non chiedermelo di nuovo"
    },
    "Never be a peer": {
        "message": "Non essere mai un peer"
    },
    "No idle peers found.": {
        "message": "Nessun peer inattivo trovato."
    },
    "No recent videos found": {
        "message": "Nessun video recenti trovato"
    },
    "No saved videos found": {
        "message": "Nessun video salvati trovato"
    },
    "No title": {
        "message": "Nessun titolo"
    },
    "No videos found": {
        "message": "Nessun video trovato"
    },
    "No videos found on active page": {
        "message": "Nessun video trovati su pagina attiva"
    },
    "No, Thanks": {
        "message": "No, grazie"
    },
    "No, fix it": {
        "message": "No, risolvi il problema"
    },
    "Not working?": {
        "message": "Non funziona?"
    },
    "Number of users that pressed not working": {
        "message": "Numero di utenti che hanno premuto 'non funziona'"
    },
    "Number of users that use this option": {
        "message": "Numero di utenti che utilizzano questa opzione"
    },
    "Off": {
        "message": "Spento"
    },
    "Oh, yes!": {
        "message": "Oh, sì!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versione osboleta di Firefox. Clicca <a>qui</a> per l'aggiornamento."
    },
    "On": {
        "message": "Attiva"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Il nostro nuovissimo Mplayer è in arrivo!"
    },
    "PC": {
        "message": "Isole del Pacifico Fiducia Territorio"
    },
    "PE": {
        "message": "Perù"
    },
    "PF": {
        "message": "Polinesia Francese"
    },
    "PG": {
        "message": "Papua Nuova Guinea"
    },
    "PH": {
        "message": "Filippine"
    },
    "PL": {
        "message": "Polonia"
    },
    "PM": {
        "message": "Saint Pierre e Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Portorico"
    },
    "PS": {
        "message": "Palestina"
    },
    "PT": {
        "message": "Portogallo"
    },
    "PU": {
        "message": "USA Varie Isole del Pacifico"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Si prega di disattivare le altre <a>estensioni</a> che pensate possano controllare le impostazioni del proxy come ad-blocker, altri servizi VPN, ecc"
    },
    "Please enter a valid email address.": {
        "message": "Si prega di inserire un indirizzo email valido."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Si prega di inserire un indirizzo di un sito web, come facebook.com"
    },
    "Please help us get better": {
        "message": "Aiutaci a migliorare"
    },
    "Popular in $1": {
        "message": "Popolare in $1"
    },
    "Popular in the world": {
        "message": "Popolare nel mondo"
    },
    "Popular sites": {
        "message": "Siti popolari"
    },
    "Premium": {
        "message": "Premio"
    },
    "RU": {
        "message": "Federazione Russa"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Noi Vota"
    },
    "Recent Videos": {
        "message": "Video recenti"
    },
    "Reload": {
        "message": "Ricarica"
    },
    "Reload Hola": {
        "message": "Ricarica Hola"
    },
    "Remember server": {
        "message": "Ricorda server"
    },
    "Report a problem": {
        "message": "Segnala un problema"
    },
    "Retry safe mode": {
        "message": "Riprova modalità provvisoria"
    },
    "SA": {
        "message": "Arabia Saudita"
    },
    "SB": {
        "message": "Isole Solomon"
    },
    "SE": {
        "message": "Svezia"
    },
    "SH": {
        "message": "Sant’Elena"
    },
    "SJ": {
        "message": "Svalbard e Jan Mayen"
    },
    "SK": {
        "message": "Slovacchia"
    },
    "ST": {
        "message": "Sao Tomé e Príncipe"
    },
    "SU": {
        "message": "Unione delle Repubbliche Socialiste Sovietiche"
    },
    "SY": {
        "message": "Siria"
    },
    "Safe": {
        "message": "Sicuro"
    },
    "Safe mode": {
        "message": "Modalità sicura"
    },
    "Save": {
        "message": "Salva"
    },
    "Saved Videos": {
        "message": "Video salvati"
    },
    "Saved for later": {
        "message": "Salvato per dopo"
    },
    "Search video title": {
        "message": "Ricerca titolo del video"
    },
    "Select a Country": {
        "message": "Seleziona un Paese"
    },
    "Select site to unblock": {
        "message": "Seleziona site da sbloccare"
    },
    "Server saved!": {
        "message": "Server salvato!"
    },
    "Set safe mode for $1 $2": {
        "message": "Impostare la modalità sicura per $1 $2"
    },
    "Settings": {
        "message": "Impostazioni"
    },
    "Share": {
        "message": "Quota"
    },
    "Share $1 on $2": {
        "message": "Condividi $1 su $2"
    },
    "Share $1 via $2": {
        "message": "Condividi $1 via $2"
    },
    "Share with friends!": {
        "message": "Condividi con gli amici!"
    },
    "Sign up": {
        "message": "Iscriviti"
    },
    "Solve buffering": {
        "message": "Risolvi il problema del buffering"
    },
    "Solve buffering problems with": {
        "message": "Risolvi i problemi di buffering con"
    },
    "Solves it": {
        "message": "Risolvi"
    },
    "Staff Picks": {
        "message": "Scelte dello staff"
    },
    "Start Hola": {
        "message": "Avvia Hola"
    },
    "Starting...": {
        "message": "Avvio..."
    },
    "Stop Hola": {
        "message": "Arresta Hola"
    },
    "Stopping peer routing...": {
        "message": "Arresto peers routing..."
    },
    "Stream": {
        "message": "Ruscello"
    },
    "Stream Instantly": {
        "message": "Streaming Immediatamente"
    },
    "Submit": {
        "message": "Invia"
    },
    "Support Hola": {
        "message": "Supporto Hola"
    },
    "TC": {
        "message": "Isole Turks e Caicos"
    },
    "TD": {
        "message": "Ciad"
    },
    "TF": {
        "message": "Territori australi francesi"
    },
    "TG": {
        "message": "Andare"
    },
    "TH": {
        "message": "Tailandia"
    },
    "TJ": {
        "message": "Tagikistan"
    },
    "TL": {
        "message": "Timor Est"
    },
    "TR": {
        "message": "Turchia"
    },
    "TT": {
        "message": "Trinidad e Tobago"
    },
    "Talk to us on $1": {
        "message": "Parla con noi su $1"
    },
    "Tell friends about $1": {
        "message": "Condividi con gli amici $1"
    },
    "Testing connection...": {
        "message": "Test connessione in corso..."
    },
    "Thank you!": {
        "message": "Grazie!"
    },
    "There seems to be an error": {
        "message": "Sembra che ci sia un errore"
    },
    "Top popular sites": {
        "message": "Siti più popolari"
    },
    "Translate to your language": {
        "message": "Traduci nella tua lingua"
    },
    "Try again": {
        "message": "Riprova"
    },
    "Try another server": {
        "message": "Prova un altro server"
    },
    "Try it": {
        "message": "Provalo"
    },
    "Try safe mode": {
        "message": "Provate la modalità provvisoria"
    },
    "Try to <span>reload</span>": {
        "message": "Prova a <span>ricaricare</span>"
    },
    "Trying another peer...": {
        "message": "Sto provando un altro peer..."
    },
    "Turn off Accelerator": {
        "message": "Disattiva Acceleratore"
    },
    "Turn off Hola": {
        "message": "Disattiva Hola"
    },
    "Turn on Accelerator": {
        "message": "Avvia Acceleratore"
    },
    "Turn on Hola": {
        "message": "Avvia Hola"
    },
    "Turn on to get started": {
        "message": "Attiva per iniziare"
    },
    "UA": {
        "message": "Ucraina"
    },
    "UM": {
        "message": "Isole Minori lontane dagli Stati Uniti"
    },
    "US": {
        "message": "Stati Uniti"
    },
    "Unblocker is disabled": {
        "message": "Unblocker è disabilitato"
    },
    "Unblocker?": {
        "message": "sbloccare?"
    },
    "Update": {
        "message": "Aggiorna"
    },
    "Upgrade": {
        "message": "Aggiorna"
    },
    "Using": {
        "message": "Utilizzo"
    },
    "Using Hola": {
        "message": "Usare Hola"
    },
    "VA": {
        "message": "Vaticano"
    },
    "VC": {
        "message": "Saint Vincent e Grenadines"
    },
    "VD": {
        "message": "Vietnam del Nord"
    },
    "VG": {
        "message": "Isole Vergini Britanniche"
    },
    "VI": {
        "message": "Isole Vergini Americane"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Versione di Chrome obsoleta. <a>Aggiorna</a> Chrome per utilizzare Hola."
    },
    "Video stuck?": {
        "message": "Video bloccato?"
    },
    "Videos available for instant streaming": {
        "message": "Video disponibili per lo streaming istantaneo"
    },
    "WF": {
        "message": "Wallis e Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vuoi Hola su altri dispositivi? (Xbox, PS, Apple TV, iPhone ...). Clicca qui"
    },
    "Want to know more?": {
        "message": "Vuoi saperne di più?"
    },
    "Watch Now": {
        "message": "Guarda ora"
    },
    "We found $1 videos": {
        "message": "Abbiamo trovato $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Saremo in contatto con voi presto"
    },
    "Working!": {
        "message": "Funziona!"
    },
    "Working?": {
        "message": "Funziona?"
    },
    "Works on all sites but slower": {
        "message": "Funziona su tutti i siti, ma più lenti"
    },
    "YD": {
        "message": "Repubblica democratica popolare dello Yemen"
    },
    "Yes": {
        "message": "Sì"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "È necessario aggiornare all'ultima versione di Opera per usare Hola. Premere <a>qui</a> per aggiornare."
    },
    "ZA": {
        "message": "Sudafrica"
    },
    "ZZ": {
        "message": "regione non valida o sconosciuta"
    },
    "app_desc": {
        "message": "Accedi a siti web bloccati nel tuo paese, azienda o scuola con Hola! Hola è gratuito e facile da usare!"
    },
    "back to": {
        "message": "torna a"
    },
    "changing...": {
        "message": "cambiando..."
    },
    "cool sites": {
        "message": "siti interessanti"
    },
    "current site": {
        "message": "sito corrente"
    },
    "day": {
        "message": "giorno"
    },
    "days": {
        "message": "giorni"
    },
    "even more...": {
        "message": "ancora di più..."
    },
    "mode": {
        "message": "modo"
    },
    "more options...": {
        "message": "più opzioni..."
    },
    "not working?": {
        "message": "non funziona?"
    },
    "not working? try another server": {
        "message": "non funziona? prova un altro server"
    },
    "on this page": {
        "message": "in questa pagina"
    },
    "sites that are censored": {
        "message": "siti che verranno censurati"
    },
    "start": {
        "message": "Turn on to get started"
    },
    "working? remember": {
        "message": "funziona? Ricordalo"
    }
};
return E; });