'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola å få tilgang til $2\n\nKlikk her for å gjøre det samme: $3\n\nDet installeres Hola, som lar meg surfe på Internett raskere og få tilgang til $4$5"
    },
    "$1 from $2": {
        "message": "$1 fra $2"
    },
    "$1 not found": {
        "message": "$1 ikke funnet"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Enkelte Hola funksjoner er ikke tilgjengelige i din versjon.)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "De forente arabiske emirater"
    },
    "AG": {
        "message": "Antigua og Barbuda"
    },
    "AN": {
        "message": "De nederlandske antiller"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AS": {
        "message": "Amerikansk Samoa"
    },
    "AT": {
        "message": "Østerrike"
    },
    "AX": {
        "message": "Åland"
    },
    "AZ": {
        "message": "Aserbajdsjan"
    },
    "About": {
        "message": "Omtrent"
    },
    "About Hola": {
        "message": "Om Hola"
    },
    "Accelerator": {
        "message": "Akselerator"
    },
    "Accelerator is": {
        "message": "Accelerator er"
    },
    "Access $1 - cool site!": {
        "message": "Tilgang $1 - cool site!"
    },
    "Access $1?": {
        "message": "Tilgang til $1?"
    },
    "Access any site from any country, free": {
        "message": "Få tilgang til alle sider fra alle land, gratis"
    },
    "Access cool sites": {
        "message": "Tilgang kule nettsteder"
    },
    "Access more sites": {
        "message": "Få tilgang til flere områder"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Tilgangssider sensurert i ditt land og akselerere din Internett med Hola - Gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Tilgang $1 med Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Kontotype"
    },
    "Activating...": {
        "message": "Aktiverer ..."
    },
    "All ($1)": {
        "message": "Alle ($1)"
    },
    "Apply settings...": {
        "message": "Bruk innstillinger..."
    },
    "Author site:": {
        "message": "Forfatter side:"
    },
    "Author:": {
        "message": "Forfatter:"
    },
    "Awesome!": {
        "message": "Kjempebra!"
    },
    "BA": {
        "message": "Bosnia-Hercegovina"
    },
    "BE": {
        "message": "Belgia"
    },
    "BN": {
        "message": "Brunei Darussalam"
    },
    "BQ": {
        "message": "Britisk Antarktis"
    },
    "BR": {
        "message": "Brasil"
    },
    "BV": {
        "message": "Bouvetøya"
    },
    "BY": {
        "message": "Hviterussland"
    },
    "Back to $1": {
        "message": "Tilbake til $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Bli den første til å få Hola for iPhone / iPad - Registrer deg nå:"
    },
    "Buffering problems?": {
        "message": "Bufring problemer?"
    },
    "Buffering?": {
        "message": "Bufring?"
    },
    "CC": {
        "message": "Kokosøyene"
    },
    "CD": {
        "message": "Kongo-Kinshasa"
    },
    "CF": {
        "message": "Den sentralafrikanske republikk"
    },
    "CG": {
        "message": "Kongo-Brazzaville"
    },
    "CH": {
        "message": "Sveits"
    },
    "CI": {
        "message": "Elfenbenskysten"
    },
    "CK": {
        "message": "Cookøyene"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kina"
    },
    "CP": {
        "message": "Clipperton øy"
    },
    "CS": {
        "message": "Serbia og Montenegro"
    },
    "CT": {
        "message": "Canton og Enderbury Øyene"
    },
    "CV": {
        "message": "Kapp Verde"
    },
    "CX": {
        "message": "Christmasøya"
    },
    "CY": {
        "message": "Kypros"
    },
    "CZ": {
        "message": "Tsjekkia"
    },
    "Changing country...": {
        "message": "Endre landet ..."
    },
    "Check out Hola for $1!": {
        "message": "Sjekk ut Hola for $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Sjekk ut Hola for mobile enheter"
    },
    "Check your Internet connection": {
        "message": "Kontroller at du har internett"
    },
    "Choose<br>Country": {
        "message": "Velg <br> Land"
    },
    "Configuring...": {
        "message": "Konfigurering ..."
    },
    "Connecting...": {
        "message": "Kobler til ..."
    },
    "Cool site!": {
        "message": "Kul side!"
    },
    "Creative licenses": {
        "message": "Creative lisenser"
    },
    "DD": {
        "message": "Øst-Tyskland"
    },
    "DE": {
        "message": "Tyskland"
    },
    "DK": {
        "message": "Danmark"
    },
    "DO": {
        "message": "Den dominikanske republikk"
    },
    "DZ": {
        "message": "Algerie"
    },
    "Delete": {
        "message": "Slett"
    },
    "Deleted from my list": {
        "message": "Slettet fra min liste"
    },
    "Did it work?": {
        "message": "Fungerte det?"
    },
    "Did you experience any buffering?": {
        "message": "Visste du opplever noen bufring?"
    },
    "Disliked it": {
        "message": "Likte det"
    },
    "Don't show again for $1 for one week": {
        "message": "Ikke vis igjen for $1 for en uke"
    },
    "Don't show again for any site for one week": {
        "message": "Ikke vis igjen for noen av sidene i en uke"
    },
    "Downloading": {
        "message": "Nedlasting"
    },
    "EA": {
        "message": "Ceuta og Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EH": {
        "message": "Vest-Sahara"
    },
    "ES": {
        "message": "Spania"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Den Europeiske Union"
    },
    "Enable": {
        "message": "Aktiver"
    },
    "Enable Hola Accelerator": {
        "message": "Aktiver Hola Accelerator"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Nyter Hola for Chrome?"
    },
    "Enter site to access": {
        "message": "Enter for å få tilgang"
    },
    "Enter your email": {
        "message": "Skriv inn din e-post"
    },
    "FK": {
        "message": "Falklandsøyene"
    },
    "FM": {
        "message": "Mikronesiaføderasjonen"
    },
    "FO": {
        "message": "Færøyene"
    },
    "FQ": {
        "message": "Franske sørlige og antarktiske territorier"
    },
    "FR": {
        "message": "Frankrike"
    },
    "FX": {
        "message": "Metropolitan Frankrike"
    },
    "Finding new peers...": {
        "message": "Finne nye kolleger ..."
    },
    "Finding peers...": {
        "message": "Finne jevnaldrende ..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Fra"
    },
    "Full list": {
        "message": "Full liste"
    },
    "GB": {
        "message": "Storbritannia"
    },
    "GF": {
        "message": "Fransk Guyana"
    },
    "GL": {
        "message": "Grønland"
    },
    "GQ": {
        "message": "Ekvatorial-Guinea"
    },
    "GR": {
        "message": "Hellas"
    },
    "GS": {
        "message": "Sør-Georgia og de sørlige Sandwich-øyene"
    },
    "Get 24/7 Unblocking": {
        "message": "Få 24/7 av-blokkering"
    },
    "Get Free Premium": {
        "message": "Få gratis Premium"
    },
    "Get Hola Accelerator": {
        "message": "Få Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Få Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Få Hola Plus for en uforstyrret, reklamefri tjeneste."
    },
    "Get Hola Premium": {
        "message": "Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Få Hola for Android"
    },
    "Get Premium support": {
        "message": "Få Premium støtte"
    },
    "Get Unlimited Unblocking": {
        "message": "Få ubegrenset Unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Få tilgang til sensurerte nettsteder, prøve det nå: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Få hjelp av en ingeniør over Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Få de raskeste serverne"
    },
    "Go": {
        "message": "Gå"
    },
    "Go Hola Premium": {
        "message": "Få Premium"
    },
    "HK": {
        "message": "Hongkong S.A.R. Kina"
    },
    "HM": {
        "message": "Heardøya og McDonaldøyene"
    },
    "HR": {
        "message": "Kroatia"
    },
    "HU": {
        "message": "Ungarn"
    },
    "Hate it": {
        "message": "Hater det"
    },
    "Help": {
        "message": "Hjelp"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\njeg bruker"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hei,\n\nbegynte jeg å bruke $1 ($2). Det lar meg surfe på Internett raskere og få tilgang til $3 i mitt land."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola kan ikke jobbe fordi en annen utvidelse er å kontrollere proxyinnstillingene."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola virker ikke veldig bra i Windows 8 modus. Vennligst bytt til skrivebordsmodus. Trykk <a>her</a> for instruksjoner"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola er ikke tilgjengelig akkurat nå, men vi jobber med saken."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola er av, klikk for å slå på"
    },
    "Hola site list": {
        "message": "Unblocker site list"
    },
    "I can now access $1 from any country!": {
        "message": "Jeg kan nå få tilgang til $1 fra alle land!"
    },
    "I did not experience any buffering": {
        "message": "Jeg opplever ikke noen buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Jeg bare åpnet en sensurert nettsted ved hjelp Hola for $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Jeg bruker $1 for å vise $2 i mitt land, og surfe raskere!"
    },
    "IC": {
        "message": "Kanariøyene"
    },
    "IE": {
        "message": "Irland"
    },
    "IM": {
        "message": "Man"
    },
    "IO": {
        "message": "Britiske territorier i Indiahavet"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Forbedre oversettelsen"
    },
    "Initializing...": {
        "message": "Initialiserer..."
    },
    "Install": {
        "message": "Installer"
    },
    "Install Accelerator": {
        "message": "Installer Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Installere gratis Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installer Hola Engine å fortsette å bruke Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Umiddelbart se noen torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Inviter venner - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Inviter venner. Få Premium."
    },
    "It was okay": {
        "message": "Det var greit"
    },
    "KG": {
        "message": "Kirgisistan"
    },
    "KH": {
        "message": "Kambodsja"
    },
    "KM": {
        "message": "Komorene"
    },
    "KN": {
        "message": "St. Kitts og Nevis"
    },
    "KP": {
        "message": "Nord-Korea"
    },
    "KR": {
        "message": "Sør-Korea"
    },
    "KY": {
        "message": "Caymanøyene"
    },
    "KZ": {
        "message": "Kasakhstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "St. Lucia"
    },
    "LT": {
        "message": "Litauen"
    },
    "Language": {
        "message": "Språk"
    },
    "Library": {
        "message": "Bibliotek"
    },
    "Like it": {
        "message": "Liker det"
    },
    "Loading": {
        "message": "Laster"
    },
    "Loading site...": {
        "message": "Laster"
    },
    "Log in": {
        "message": "Logg inn"
    },
    "Log out": {
        "message": "Logg ut"
    },
    "Love Hola?": {
        "message": "Elsker Hola?"
    },
    "Love it": {
        "message": "Elsker det"
    },
    "MA": {
        "message": "Marokko"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshalløyene"
    },
    "MK": {
        "message": "Makedonia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Macao S.A.R. Kina"
    },
    "MP": {
        "message": "Nord-Marianene"
    },
    "MV": {
        "message": "Maldivene"
    },
    "MZ": {
        "message": "Mosambik"
    },
    "Make your Internet better with $1": {
        "message": "Gjøre Internett bedre med $1"
    },
    "Menu": {
        "message": "Meny"
    },
    "Might not work on all sites": {
        "message": "Kanskje ikke fungere på alle områder"
    },
    "Mode": {
        "message": "Modus"
    },
    "More countries": {
        "message": "Flere land"
    },
    "More sites...": {
        "message": "mer..."
    },
    "More...": {
        "message": "mer..."
    },
    "My Account": {
        "message": "Min konto"
    },
    "My History": {
        "message": "Min historie"
    },
    "My Settings": {
        "message": "Mine innstillinger"
    },
    "My favorites": {
        "message": "Mine favoritter"
    },
    "NC": {
        "message": "Ny-Caledonia"
    },
    "NF": {
        "message": "Norfolkøya"
    },
    "NL": {
        "message": "Nederland"
    },
    "NO": {
        "message": "Norge"
    },
    "Need Help?": {
        "message": "Trenger du hjelp?"
    },
    "Never ask me again": {
        "message": "Spør meg aldri igjen"
    },
    "Never be a peer": {
        "message": "Aldri være en peer"
    },
    "No": {
        "message": "Nei"
    },
    "No idle peers found.": {
        "message": "Ingen ledige kolleger funnet."
    },
    "No recent videos found": {
        "message": "Ingen nye videoer ble funnet"
    },
    "No saved videos found": {
        "message": "Ingen lagrede videoer ble funnet"
    },
    "No title": {
        "message": "Ingen tittel"
    },
    "No videos found": {
        "message": "Ingen videoer ble funnet"
    },
    "No videos found on active page": {
        "message": "Ingen videoer funnet på aktiv side"
    },
    "No, Thanks": {
        "message": "Nei, takk"
    },
    "No, fix it": {
        "message": "Nei, fikse det"
    },
    "Not working?": {
        "message": "Ikke fungerer?"
    },
    "Number of users that pressed not working": {
        "message": "Antall brukere som har trykket virker ikke"
    },
    "Number of users that use this option": {
        "message": "Antall brukere som bruker denne innstillingen"
    },
    "Off": {
        "message": "Av"
    },
    "Oh, yes!": {
        "message": "Å ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Gammel versjon av Firefox. Trykk <a>her</a> for å oppgradere."
    },
    "On": {
        "message": "På"
    },
    "Open Media Player": {
        "message": "Åpne Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Vår splitter nye Mplayer kommer snart!"
    },
    "PF": {
        "message": "Fransk Polynesia"
    },
    "PG": {
        "message": "Papua Ny-Guinea"
    },
    "PH": {
        "message": "Filippinene"
    },
    "PL": {
        "message": "Polen"
    },
    "PM": {
        "message": "St. Pierre og Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestinsk territorium"
    },
    "PU": {
        "message": "Amerikanske Diverse Stillehavsøyene"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Deaktiver andre <a>utvidelser</a> som du tror kan kontrollere proxyinnstillingene som ad-blokkere, andre VPN-tjenester, etc."
    },
    "Please enter a valid email address.": {
        "message": "Vennligst skriv inn en gyldig e-postadresse."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Vennligst skriv inn et nettsted adresse, som facebook.com"
    },
    "Please help us get better": {
        "message": "Vennligst hjelp oss å bli bedre"
    },
    "Popular in $1": {
        "message": "Populær i $1"
    },
    "Popular in the world": {
        "message": "Populære i verden"
    },
    "Popular sites": {
        "message": "Populære nettsteder"
    },
    "QO": {
        "message": "Utmark Oceania"
    },
    "RE": {
        "message": "Reunion"
    },
    "RU": {
        "message": "Russland"
    },
    "Rate us": {
        "message": "Rangere oss"
    },
    "Recent Videos": {
        "message": "Nylige videoer"
    },
    "Reload": {
        "message": "Last på nytt"
    },
    "Reload Hola": {
        "message": "Last inn Hola på nytt"
    },
    "Remember server": {
        "message": "Husk server"
    },
    "Report a problem": {
        "message": "Rapporter et problem"
    },
    "Retry safe mode": {
        "message": "Prøv på nytt safe mode"
    },
    "SA": {
        "message": "Saudi-Arabia"
    },
    "SB": {
        "message": "Salomonøyene"
    },
    "SC": {
        "message": "Seychellene"
    },
    "SE": {
        "message": "Sverige"
    },
    "SH": {
        "message": "St. Helena"
    },
    "SJ": {
        "message": "Svalbard og Jan Mayen"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "São Tomé og Príncipe"
    },
    "SU": {
        "message": "Unionen av sosialistiske sovjetrepublikker"
    },
    "Safe": {
        "message": "Sikker"
    },
    "Safe mode": {
        "message": "Sikkerhetsmodus"
    },
    "Save": {
        "message": "Lagre"
    },
    "Saved Videos": {
        "message": "Lagrede videoer"
    },
    "Saved for later": {
        "message": "Lagres for senere"
    },
    "Search video title": {
        "message": "Søk videotittel"
    },
    "Select a Country": {
        "message": "Velg et land"
    },
    "Select site to unblock": {
        "message": "Velg område for å oppheve blokkeringen"
    },
    "Server saved!": {
        "message": "Server lagret!"
    },
    "Set safe mode for $1 $2": {
        "message": "Still sikker modus for $1 $2"
    },
    "Settings": {
        "message": "Innstillinger"
    },
    "Share": {
        "message": "Del"
    },
    "Share $1 on $2": {
        "message": "Del $1 på $2"
    },
    "Share $1 via $2": {
        "message": "Aksje $1 via $2"
    },
    "Share with friends!": {
        "message": "Del med venner!"
    },
    "Sign up": {
        "message": "Registrer deg"
    },
    "Solve buffering": {
        "message": "Løs buffering"
    },
    "Solve buffering problems with": {
        "message": "Løs bufring problemer med"
    },
    "Solves it": {
        "message": "Løser det"
    },
    "Start Hola": {
        "message": "start"
    },
    "Starting...": {
        "message": "Starter..."
    },
    "Stop Hola": {
        "message": "Stopp Hola"
    },
    "Stopping peer routing...": {
        "message": "Stoppe peer ruting ..."
    },
    "Stream": {
        "message": "Strøm"
    },
    "Stream Instantly": {
        "message": "Streame Øyeblikkelig"
    },
    "Submit": {
        "message": "Send inn"
    },
    "TC": {
        "message": "Turks- og Caicosøyene"
    },
    "TD": {
        "message": "Tsjad"
    },
    "TF": {
        "message": "De franske sørterritorier"
    },
    "TG": {
        "message": "Å gå"
    },
    "TJ": {
        "message": "Tadsjikistan"
    },
    "TL": {
        "message": "Øst-Timor"
    },
    "TR": {
        "message": "Tyrkia"
    },
    "TT": {
        "message": "Trinidad og Tobago"
    },
    "Talk to us on $1": {
        "message": "Snakk med oss på $1"
    },
    "Tell friends about $1": {
        "message": "Fortell venner om $1"
    },
    "Testing connection...": {
        "message": "Testing tilkobling ..."
    },
    "Thank you!": {
        "message": "Takk skal du ha!"
    },
    "There seems to be an error": {
        "message": "Det ser ut til å vזre en feil"
    },
    "Top popular sites": {
        "message": "Mest populære nettsteder"
    },
    "Translate to your language": {
        "message": "Oversett til ditt språk"
    },
    "Try again": {
        "message": "Prøv på nytt"
    },
    "Try another server": {
        "message": "Prøv en annen server"
    },
    "Try it": {
        "message": "Prøv det"
    },
    "Try safe mode": {
        "message": "Prøv safe mode"
    },
    "Try to <span>reload</span>": {
        "message": "Prøv å <span>laste på nytt</span>"
    },
    "Trying another peer...": {
        "message": "Prøver en annen peer ..."
    },
    "Turn off Accelerator": {
        "message": "Slå av Accelerator"
    },
    "Turn off Hola": {
        "message": "Slå av Hola"
    },
    "Turn on Accelerator": {
        "message": "Slå på Accelerator"
    },
    "Turn on Hola": {
        "message": "Slå på Hola"
    },
    "Turn on to get started": {
        "message": "Skru på for å starte"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "USAs ytre småøyer"
    },
    "US": {
        "message": "USA"
    },
    "UZ": {
        "message": "Usbekistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker er deaktivert"
    },
    "Update": {
        "message": "Oppdater"
    },
    "Upgrade": {
        "message": "Oppgradering"
    },
    "Using": {
        "message": "Bruke"
    },
    "Using Hola": {
        "message": "Ved hjelp av Hola"
    },
    "VA": {
        "message": "Vatikanstaten"
    },
    "VC": {
        "message": "St. Vincent og Grenadinene"
    },
    "VD": {
        "message": "Nord-Vietnam"
    },
    "VG": {
        "message": "De britiske jomfruøyene"
    },
    "VI": {
        "message": "De amerikanske jomfruøyene"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Veldig gammel versjon av Chrome, <a>oppdater</a> Chrome for å bruke Hola"
    },
    "Video stuck?": {
        "message": "Video stakk?"
    },
    "Videos available for instant streaming": {
        "message": "Videoer tilgjengelig for umiddelbar streaming"
    },
    "WF": {
        "message": "Wallis og Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vil du ha Hola på andre enheter? (Xbox, PS, Apple TV, iPhone...). Trykk her"
    },
    "Want to know more?": {
        "message": "Vil du vite mer?"
    },
    "Watch Now": {
        "message": "Vis nå"
    },
    "We found $1 videos": {
        "message": "Vi fant $1 videoer"
    },
    "We will be in touch with you soon": {
        "message": "Vi vil være i kontakt med deg snart"
    },
    "Working!": {
        "message": "Arbeide!"
    },
    "Working?": {
        "message": "Arbeide?"
    },
    "Works on all sites but slower": {
        "message": "Fungerer på alle områder, men tregere"
    },
    "YD": {
        "message": "Folkets demokratiske republikken Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Du må oppgradere til den nyeste versjonen av Opera å bruke Hola. Trykk <a>her for</a> å oppgradere."
    },
    "ZA": {
        "message": "Sør-Afrika"
    },
    "ZZ": {
        "message": "ukjent eller ugyldig område"
    },
    "app_desc": {
        "message": "Tilgangs nettsteder blokkert i ditt land, bedrift eller skole med Hola! Hola er gratis og enkelt å bruke!"
    },
    "app_name": {
        "message": "Hola bedre Internett"
    },
    "back to": {
        "message": "tilbake til"
    },
    "changing...": {
        "message": "endrer..."
    },
    "cool sites": {
        "message": "kule nettsteder"
    },
    "current site": {
        "message": "gjeldende område"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "dager"
    },
    "even more...": {
        "message": "enda flere..."
    },
    "mode": {
        "message": "modus"
    },
    "more options...": {
        "message": "flere alternativer ..."
    },
    "not working?": {
        "message": "ikke fungerer?"
    },
    "not working? try another server": {
        "message": "ikke fungerer? prøve en annen server"
    },
    "on this page": {
        "message": "På denne siden"
    },
    "sites that are censored": {
        "message": "nettsteder som er sensurert"
    },
    "start": {
        "message": "Turn on to get started"
    },
    "working? remember": {
        "message": "arbeider? huske"
    }
};
return E; });