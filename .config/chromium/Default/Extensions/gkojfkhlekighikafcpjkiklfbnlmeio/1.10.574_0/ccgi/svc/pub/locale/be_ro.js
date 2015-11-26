'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " prin "
    },
    "$1 Buffering?": {
        "message": "$1 buffer?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola pentru a accesa $2\n\nClick aici pentru a face același lucru: $3\n\nAcesta se instalează Hola, care îmi permite să navigheze pe Internet mai rapid și acces la $4$5"
    },
    "$1 from $2": {
        "message": "$1 de la $2"
    },
    "$1 not found": {
        "message": "$1 nu a fost găsit"
    },
    "$1 via Hola": {
        "message": "$1 prin Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(unele opțiuni Hola nu sunt disponibile în aceasta versiune)"
    },
    "AC": {
        "message": "Insula Ascension"
    },
    "AE": {
        "message": "Emiratele Arabe Unite"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua și Barbuda"
    },
    "AN": {
        "message": "Antilele Olandeze"
    },
    "AS": {
        "message": "Samoa Americană"
    },
    "AX": {
        "message": "Insulele Aland"
    },
    "AZ": {
        "message": "Azerbaidjan"
    },
    "About": {
        "message": "Despre"
    },
    "About Hola": {
        "message": "Despre Hola"
    },
    "Accelerator is": {
        "message": "Accelerator este"
    },
    "Access $1 - cool site!": {
        "message": "Acces $1 - site-ul cool!"
    },
    "Access $1?": {
        "message": "Accesa $1?"
    },
    "Access any site from any country, free": {
        "message": "Accesează orice site web, din orice țară, gratis"
    },
    "Access cool sites": {
        "message": "Acces Site-uri Tari"
    },
    "Access more sites": {
        "message": "Acces la mai multe site-uri"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Punctelor de acces cenzurat în țara dumneavoastră și de a accelera dvs. de Internet cu Hola - gratuit!"
    },
    "Accessing $1 with Hola": {
        "message": "Accesarea $1 cu Hola"
    },
    "Account": {
        "message": "Cont"
    },
    "Account type": {
        "message": "Tip de cont"
    },
    "Activating...": {
        "message": "Activarea..."
    },
    "All ($1)": {
        "message": "Toate ($1)"
    },
    "Apply settings...": {
        "message": "Aplica setările ..."
    },
    "Author site:": {
        "message": "Site autor:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Minunat!"
    },
    "BA": {
        "message": "Bosnia și Herțegovina"
    },
    "BE": {
        "message": "Belgia"
    },
    "BL": {
        "message": "Sfântul Bartolomeu"
    },
    "BQ": {
        "message": "Teritoriul Antarctic Britanic"
    },
    "BR": {
        "message": "Brazilia"
    },
    "BV": {
        "message": "Insula Bouvet"
    },
    "BY": {
        "message": "Bielorusia"
    },
    "Back to $1": {
        "message": "Înapoi la $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Fii primul pentru a obține Hola pentru iPhone / iPad - Înregistrați-vă acum:"
    },
    "Browsing": {
        "message": "Navigare"
    },
    "Buffering problems?": {
        "message": "Probleme de tamponare?"
    },
    "Buffering?": {
        "message": "Tamponare?"
    },
    "CC": {
        "message": "Insulele Cocos"
    },
    "CD": {
        "message": "Republica Democrată Congo"
    },
    "CF": {
        "message": "Republica Centrafricană"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Eleveția"
    },
    "CI": {
        "message": "Coasta de Fildeș"
    },
    "CK": {
        "message": "Insulele Cook"
    },
    "CM": {
        "message": "Camerun"
    },
    "CO": {
        "message": "Columbia"
    },
    "CP": {
        "message": "Insula Clipperton"
    },
    "CS": {
        "message": "Serbia și Muntenegru"
    },
    "CT": {
        "message": "Canton și Insulele Enderbury"
    },
    "CV": {
        "message": "Capul Verde"
    },
    "CX": {
        "message": "Insula Christmas"
    },
    "CY": {
        "message": "Cipru"
    },
    "CZ": {
        "message": "Republica Cehă"
    },
    "Changing country...": {
        "message": "Se schimbă țara..."
    },
    "Check out Hola for $1!": {
        "message": "Check out Hola pentru $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola pentru dispozitive mobile"
    },
    "Check your Internet connection": {
        "message": "Verifică conexiunea la Internet"
    },
    "Choose<br>Country": {
        "message": "Alege <br> Țară"
    },
    "Configuring...": {
        "message": "Configurarea ..."
    },
    "Connecting...": {
        "message": "Se conectează..."
    },
    "Cool site!": {
        "message": "Site-ul cool!"
    },
    "Creative licenses": {
        "message": "Licențele Creative"
    },
    "DD": {
        "message": "Germania de Est"
    },
    "DE": {
        "message": "Germania"
    },
    "DK": {
        "message": "Danemarca"
    },
    "DO": {
        "message": "Republica Dominicană"
    },
    "Delete": {
        "message": "Șterge"
    },
    "Deleted from my list": {
        "message": "Eliminat din lista mea"
    },
    "Did it work?": {
        "message": "A funcționat?"
    },
    "Did you experience any buffering?": {
        "message": "Ati avut vreun tamponare?"
    },
    "Disliked it": {
        "message": "Plăcea aceasta"
    },
    "Don't show again for $1 for one week": {
        "message": "Nu arăta din nou pentru $1 timp de o săptămână"
    },
    "Don't show again for any site for one week": {
        "message": "Nu arăta din nou pentru orice site-ul timp de o săptămână"
    },
    "Downloading": {
        "message": "Descărcarea"
    },
    "EA": {
        "message": "Ceuta și Melilla"
    },
    "EG": {
        "message": "Egipt"
    },
    "EH": {
        "message": "Sahara Occidentală"
    },
    "ER": {
        "message": "Eritreea"
    },
    "ES": {
        "message": "Spania"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Uniunea Europeana"
    },
    "Enable": {
        "message": "Activează"
    },
    "Enable Hola Accelerator": {
        "message": "Activați Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Bucurați-vă!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Bucurându-se de Hola pentru Chrome?"
    },
    "Enter site to access": {
        "message": "Introduceți site-ul de acces"
    },
    "Enter your email": {
        "message": "Introduceți adresa dvs. de email"
    },
    "FI": {
        "message": "Finlanda"
    },
    "FK": {
        "message": "Insulele Falkland"
    },
    "FM": {
        "message": "Micronezia"
    },
    "FO": {
        "message": "Insulele Feroe"
    },
    "FQ": {
        "message": "Sud franceză și antarctice Teritoriile"
    },
    "FR": {
        "message": "Franța"
    },
    "FX": {
        "message": "Franța metropolitană"
    },
    "Fast": {
        "message": "Rapid"
    },
    "Finding new peers...": {
        "message": "Se găsesc noi parteneri..."
    },
    "Finding peers...": {
        "message": "Găsirea colegii..."
    },
    "Free": {
        "message": "Gratuit"
    },
    "From": {
        "message": "De la"
    },
    "Full list": {
        "message": "Lista completa"
    },
    "GB": {
        "message": "Marea Britanie"
    },
    "GF": {
        "message": "Guyana Franceză"
    },
    "GG": {
        "message": "Jachetă"
    },
    "GL": {
        "message": "Groenlanda"
    },
    "GN": {
        "message": "Guineea"
    },
    "GP": {
        "message": "Guadelupa"
    },
    "GQ": {
        "message": "Guineea Ecuatorială"
    },
    "GR": {
        "message": "Grecia"
    },
    "GS": {
        "message": "Insulele Georgia de Sud și Sandwich de Sud"
    },
    "GW": {
        "message": "Guineea-Bissau"
    },
    "Get 24/7 Unblocking": {
        "message": "Obține Deblocare 24/7"
    },
    "Get Free Premium": {
        "message": "Obține Premium gratis"
    },
    "Get Hola Accelerator": {
        "message": "Ia Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Obține Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Folosește Hola Plus pentru servicii neîntrerupe si fără reclame."
    },
    "Get Hola Premium": {
        "message": "Ia Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Ia Hola pentru Android"
    },
    "Get Premium support": {
        "message": "Obține sprijin Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Obține Deblocare Nelimitată"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Obțineți acces la site-uri cenzurate, încercați să-l acum: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Primește suport de la un inginer pe skype:"
    },
    "Get the Fastest Servers": {
        "message": "Obțineți cel mai rapid serverele"
    },
    "Go": {
        "message": "Du-te"
    },
    "Go Hola Premium": {
        "message": "Du-te Hola Premium"
    },
    "HK": {
        "message": "R.A.S. Hong Kong a Chinei"
    },
    "HM": {
        "message": "Insula Heard și Insulele McDonald"
    },
    "HR": {
        "message": "Croația"
    },
    "HU": {
        "message": "Ungaria"
    },
    "Hate it": {
        "message": "Urăsc aceasta"
    },
    "Help": {
        "message": "Ajutor"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\neu sunt, folosind"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Buna,\n\nam inceput sa folosesc $1 ($2). Aceasta îmi permite să navigheze pe Internet mai rapid și acces la $3 în țara mea."
    },
    "Hola Accelerator": {
        "message": "Accelerator Hola"
    },
    "Hola Media Player": {
        "message": "Media Player Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola nu poate lucra, deoarece un alt extensie controlează setările proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nu funcționează corespunzător în mod Windows 8. Te rog schimbă în modul desktop. Click <a>aici</a> pentru instrucțiuni"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nu este disponibil chiar acum, dar noi suntem de lucru pe ea."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola este oprit, faceți clic pe pentru a porni"
    },
    "Hola site list": {
        "message": "Listă site-uri deblocate"
    },
    "I can now access $1 from any country!": {
        "message": "Pot accesa acum $1 din orice țară!"
    },
    "I did not experience any buffering": {
        "message": "Nu am experimentat nici un buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Am accesat doar un site cenzurat folosind Hola pentru $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Sunt folosind $1 pentru a vedea $2 în țara mea, și naviga mai repede!"
    },
    "IC": {
        "message": "Insulele Canare"
    },
    "ID": {
        "message": "Indonezia"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IM": {
        "message": "Insula Man"
    },
    "IO": {
        "message": "Teritoriul Britanic din Oceanul Indian"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islanda"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Îmbunătățește traducerea"
    },
    "Initializing...": {
        "message": "Se inițializează..."
    },
    "Install": {
        "message": "Instalează"
    },
    "Install Accelerator": {
        "message": "Instalați Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Instalați Accelerator Hola gratuit"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instalați Hola motor pentru a continua utilizarea Hola gratuit"
    },
    "Instantly watch any torrent Video": {
        "message": "Vizualizează imediat orice torrent video"
    },
    "Invite friends - free Premium.": {
        "message": "Invita-ti prietenii - Premium gratuit."
    },
    "Invite friends. Get Premium.": {
        "message": "Invita-ti prietenii. Ia Premium."
    },
    "It was okay": {
        "message": "A fost în regulă"
    },
    "JE": {
        "message": "Jerseu"
    },
    "JO": {
        "message": "Iordania"
    },
    "JP": {
        "message": "Japonia"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kârgâzstan"
    },
    "KH": {
        "message": "Cambodgia"
    },
    "KM": {
        "message": "Comore"
    },
    "KN": {
        "message": "Sfântul Kitts și Nevis"
    },
    "KP": {
        "message": "Coreea de Nord"
    },
    "KR": {
        "message": "Coreea de Sud"
    },
    "KW": {
        "message": "Kuweit"
    },
    "KY": {
        "message": "Insulele Cayman"
    },
    "KZ": {
        "message": "Kazahstan"
    },
    "LB": {
        "message": "Liban"
    },
    "LC": {
        "message": "Sfânta Lucia"
    },
    "LK": {
        "message": "SRI Lanka"
    },
    "LT": {
        "message": "Lituania"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "LV": {
        "message": "Letonia"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Limba"
    },
    "Library": {
        "message": "Bibliotecă"
    },
    "Like it": {
        "message": "Imi place"
    },
    "Loading": {
        "message": "Se încarcă"
    },
    "Loading site...": {
        "message": "Se încarcă site-ul..."
    },
    "Log in": {
        "message": "Autentificare"
    },
    "Log out": {
        "message": "Ieși"
    },
    "Love Hola?": {
        "message": "Îți place Hola?"
    },
    "Love it": {
        "message": "Iubesc"
    },
    "MA": {
        "message": "Maroc"
    },
    "MD": {
        "message": "Republica Moldova"
    },
    "ME": {
        "message": "Muntenegru"
    },
    "MF": {
        "message": "Sfântul Martin"
    },
    "MH": {
        "message": "Insulele Marshall"
    },
    "MI": {
        "message": "Insulele Midway"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "R.A.S. Macao a Chinei"
    },
    "MP": {
        "message": "Insulele Mariane de Nord"
    },
    "MQ": {
        "message": "Martinica"
    },
    "MV": {
        "message": "Maldive"
    },
    "MX": {
        "message": "Mexic"
    },
    "MY": {
        "message": "Malaezia"
    },
    "MZ": {
        "message": "Mozambic"
    },
    "Make your Internet better with $1": {
        "message": "Asigurați-Internet-ul mai bine cu $1"
    },
    "Menu": {
        "message": "Meniu"
    },
    "Might not work on all sites": {
        "message": "S-ar putea sa nu mearga pe toate site-urile"
    },
    "Mode": {
        "message": "Mod"
    },
    "More countries": {
        "message": "Mai multe țări"
    },
    "More sites...": {
        "message": "mai mult..."
    },
    "More...": {
        "message": "mai mult..."
    },
    "My Account": {
        "message": "Contul meu"
    },
    "My History": {
        "message": "Istoricul meu"
    },
    "My Settings": {
        "message": "Setările mele"
    },
    "My favorites": {
        "message": "Favoritele mele"
    },
    "NC": {
        "message": "Noua Caledonie"
    },
    "NF": {
        "message": "Insulele Norfolk"
    },
    "NL": {
        "message": "Olanda"
    },
    "NO": {
        "message": "Norvegia"
    },
    "NT": {
        "message": "Neutru Zone"
    },
    "NZ": {
        "message": "Noua Zeelandă"
    },
    "Need Help?": {
        "message": "Aveți nevoie de ajutor?"
    },
    "Never ask me again": {
        "message": "Nu mă întreba din nou"
    },
    "Never be a peer": {
        "message": "Nu fi un egal la egal"
    },
    "No": {
        "message": "Nu"
    },
    "No idle peers found.": {
        "message": "Nu sunt colegii inactiv găsit."
    },
    "No recent videos found": {
        "message": "Niciun videoclip recent găsit"
    },
    "No saved videos found": {
        "message": "Niciun videoclip salvate găsite"
    },
    "No title": {
        "message": "Nu titlu"
    },
    "No videos found": {
        "message": "Niciun videoclip găsite"
    },
    "No videos found on active page": {
        "message": "Niciun videoclip gasit pe pagina activ"
    },
    "No, Thanks": {
        "message": "Nu, mulțumesc"
    },
    "No, fix it": {
        "message": "Nu, repara-l"
    },
    "Not working?": {
        "message": "Nu funcționează?"
    },
    "Number of users that pressed not working": {
        "message": "Numărul de utilizatori care au apasăt nu funcționează"
    },
    "Number of users that use this option": {
        "message": "Numărul de utilizatori care folosesc acestă opțiune"
    },
    "Off": {
        "message": "Oprit"
    },
    "Oh, yes!": {
        "message": "Oh, da!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versiune veche Firefox. Click <a>aici</a> pentru actualizare."
    },
    "On": {
        "message": "Pornit"
    },
    "Open Media Player": {
        "message": "Deschideți Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Noul nostru Mplayer se lansează în curând!"
    },
    "PC": {
        "message": "Pacific Insulele Trust Territory"
    },
    "PF": {
        "message": "Polinezia Franceză"
    },
    "PG": {
        "message": "Papua Noua Guinee"
    },
    "PH": {
        "message": "Filipine"
    },
    "PL": {
        "message": "Polonia"
    },
    "PM": {
        "message": "Sfântul Pierre și Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Porto Rico"
    },
    "PS": {
        "message": "Teritoriul Palestinian"
    },
    "PT": {
        "message": "Portugalia"
    },
    "PU": {
        "message": "SUA Diverse Insulele din Pacific"
    },
    "PZ": {
        "message": "Canalul Panama Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Vă rugăm să dezactivați alte <a>extensii</a> care credeți că ar putea controla setările dumneavoastră de proxy, cum ar fi ad-blockers, alte servicii VPN, etc."
    },
    "Please enter a valid email address.": {
        "message": "Va rugam sa introduceti o adresa de email valida."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Va rugam sa introduceti o adresa de site-ul web, cum ar fi facebook.com"
    },
    "Please help us get better": {
        "message": "Te rog ajută-ne mai bine"
    },
    "Popular in $1": {
        "message": "Popular în $1"
    },
    "Popular in the world": {
        "message": "Popular în lume"
    },
    "Popular sites": {
        "message": "Site-uri populare"
    },
    "QO": {
        "message": "Periferice Oceania"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "România"
    },
    "RU": {
        "message": "Rusia"
    },
    "Rate us": {
        "message": "Ne evalua"
    },
    "Recent Videos": {
        "message": "Recente Video"
    },
    "Reload": {
        "message": "Reîncarcă"
    },
    "Reload Hola": {
        "message": "Reîncarcă Hola"
    },
    "Remember server": {
        "message": "Amintiți-vă de server"
    },
    "Report a problem": {
        "message": "Raportează o problemă"
    },
    "Retry safe mode": {
        "message": "Reîncercați modul de siguranță"
    },
    "SA": {
        "message": "Arabia Saudită"
    },
    "SB": {
        "message": "Insulele Solomon"
    },
    "SE": {
        "message": "Suedia"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Sfânta Elena"
    },
    "SJ": {
        "message": "Svalbard și Jan Mayen"
    },
    "SK": {
        "message": "Slovacia"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sao Tome și Principe"
    },
    "SU": {
        "message": "Uniunea Republicilor Sovietice Socialiste"
    },
    "SY": {
        "message": "Siria"
    },
    "Safe": {
        "message": "Sigur"
    },
    "Safe mode": {
        "message": "Modul de siguranță"
    },
    "Save": {
        "message": "Salvați"
    },
    "Saved Videos": {
        "message": "Video salvate"
    },
    "Saved for later": {
        "message": "Salvat de mai târziu"
    },
    "Search video title": {
        "message": "Căutare titlul videoclipului"
    },
    "Select a Country": {
        "message": "Selectați o țară"
    },
    "Select site to unblock": {
        "message": "Selectează site-ul de deblocat"
    },
    "Server saved!": {
        "message": "Server salvat!"
    },
    "Set safe mode for $1 $2": {
        "message": "Modul de siguranță stabilit pentru $1 $2"
    },
    "Settings": {
        "message": "Setări"
    },
    "Share": {
        "message": "Partajare"
    },
    "Share $1 on $2": {
        "message": "Împărtășiți $1 pe $2"
    },
    "Share $1 via $2": {
        "message": "Împărtășește $1 prin $2"
    },
    "Share with friends!": {
        "message": "Impartasiti cu prietenii!"
    },
    "Sign up": {
        "message": "Înregistrează-te"
    },
    "Solve buffering": {
        "message": "Rezolva tamponare"
    },
    "Solve buffering problems with": {
        "message": "Rezolva problemele tamponare cu"
    },
    "Solves it": {
        "message": "Rezolvă"
    },
    "Staff Picks": {
        "message": "Alegerea personalului"
    },
    "Start Hola": {
        "message": "start"
    },
    "Starting...": {
        "message": "Se pornește..."
    },
    "Stop Hola": {
        "message": "Oprire Hola"
    },
    "Stopping peer routing...": {
        "message": "Oprirea de rutare la egal la egal ..."
    },
    "Stream": {
        "message": "Curent"
    },
    "Stream Instantly": {
        "message": "Stream instantaneu"
    },
    "Submit": {
        "message": "Prezenta"
    },
    "Support Hola": {
        "message": "Suport Hola"
    },
    "TC": {
        "message": "Insulele Turks și Caicos"
    },
    "TD": {
        "message": "Ciad"
    },
    "TF": {
        "message": "Teritoriile Australe și Antarctice Franceze"
    },
    "TG": {
        "message": "A merge"
    },
    "TH": {
        "message": "Thailanda"
    },
    "TJ": {
        "message": "Tadjikistan"
    },
    "TL": {
        "message": "Timorul de Est"
    },
    "TR": {
        "message": "Turcia"
    },
    "TT": {
        "message": "Trinidad-Tobago"
    },
    "Talk to us on $1": {
        "message": "Vorbeste cu noi pe $1"
    },
    "Tell friends about $1": {
        "message": "Spune prietenilor despre $1"
    },
    "Testing connection...": {
        "message": "Conexiune de testare ..."
    },
    "Thank you!": {
        "message": "Vă mulțumim!"
    },
    "There seems to be an error": {
        "message": "Există o eroare"
    },
    "Top popular sites": {
        "message": "Site-uri populare de top"
    },
    "Translate to your language": {
        "message": "Tradu în limba ta"
    },
    "Try again": {
        "message": "Încercați din nou"
    },
    "Try another server": {
        "message": "Încercați un alt server"
    },
    "Try it": {
        "message": "Încercați să-l"
    },
    "Try safe mode": {
        "message": "Încercați modul de siguranță"
    },
    "Try to <span>reload</span>": {
        "message": "Încearcă să <span>reîncarci</span>"
    },
    "Trying another peer...": {
        "message": "Încercarea de un alt egal la egal ..."
    },
    "Turn off Accelerator": {
        "message": "Opriți Accelerator"
    },
    "Turn off Hola": {
        "message": "Opriți Hola"
    },
    "Turn on Accelerator": {
        "message": "Porniți Accelerator"
    },
    "Turn on Hola": {
        "message": "Porniți Hola"
    },
    "Turn on to get started": {
        "message": "Pornește pentru a începe"
    },
    "UA": {
        "message": "Ucraina"
    },
    "UM": {
        "message": "Insulele mici îndepărtate ale Statelor Unite ale Americii"
    },
    "US": {
        "message": "Statele Unite ale Americii"
    },
    "Unblocker": {
        "message": "Deblocant"
    },
    "Unblocker is disabled": {
        "message": "Deblocant este oprit"
    },
    "Unblocker?": {
        "message": "Deblocant?"
    },
    "Update": {
        "message": "Actualizare"
    },
    "Upgrade": {
        "message": "Actulizează"
    },
    "Using": {
        "message": "Utilizarea"
    },
    "Using Hola": {
        "message": "Utilizarea Hola"
    },
    "VA": {
        "message": "Vatican"
    },
    "VC": {
        "message": "Sfântul Vincent și Grenadine"
    },
    "VD": {
        "message": "Vietnamul de Nord"
    },
    "VG": {
        "message": "Insulele Virgine Britanice"
    },
    "VI": {
        "message": "Insulele Virgine S.U.A."
    },
    "VPN": {
        "message": "rețea privată virtuală"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Versiune foarte veche de Chrome, <a>actualizați</a> Chrome pentru a folosi Hola"
    },
    "Video stuck?": {
        "message": "Video blocat?"
    },
    "Videos available for instant streaming": {
        "message": "Video disponibile pentru streaming instant"
    },
    "WF": {
        "message": "Wallis și Futuna"
    },
    "WK": {
        "message": "Trezi Island"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vrei Hola și pe alte dispozitive? (Xbox, PS, Apple TV, iPhone...). Click aici"
    },
    "Want to know more?": {
        "message": "Vreți să știți mai multe?"
    },
    "Watch Now": {
        "message": "Uita-te acum"
    },
    "We found $1 videos": {
        "message": "Am gasit $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Vom fi în contact cu tine în curând"
    },
    "Working!": {
        "message": "De lucru!"
    },
    "Working?": {
        "message": "De lucru?"
    },
    "Works on all sites but slower": {
        "message": "Funcționează pe toate site-urile, dar mai lent"
    },
    "YD": {
        "message": "Republica Populară Democrată Yemen"
    },
    "Yes": {
        "message": "Da"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Ai nevoie să faceți upgrade la cea mai recentă versiune de Opera de a utiliza Hola. Apăsați <a>aici</a> pentru a face upgrade."
    },
    "ZA": {
        "message": "Africa de Sud"
    },
    "ZZ": {
        "message": "Regiune necunoscută sau nevalidă"
    },
    "app_desc": {
        "message": "Site-uri de acces blocate în țară, companie sau școala cu Hola ta! Hola este gratuit și ușor de folosit!"
    },
    "app_name": {
        "message": "Hola Internet mai bun"
    },
    "back to": {
        "message": "înapoi la"
    },
    "changing...": {
        "message": "se schimbă..."
    },
    "cool sites": {
        "message": "Site-uri Tari"
    },
    "current site": {
        "message": "site-ul curent"
    },
    "day": {
        "message": "zi"
    },
    "days": {
        "message": "zile"
    },
    "even more...": {
        "message": "și mai multe..."
    },
    "mode": {
        "message": "mod"
    },
    "more options...": {
        "message": "mai multe opțiuni ..."
    },
    "not working?": {
        "message": "nu de lucru?"
    },
    "not working? try another server": {
        "message": "nu de lucru? incercati un alt server"
    },
    "on this page": {
        "message": "pe aceasta pagina"
    },
    "sites that are censored": {
        "message": "site-uri care sunt cenzurate"
    },
    "start": {
        "message": "Turn on to get started"
    },
    "working? remember": {
        "message": "de lucru? amintiți-vă"
    }
};
return E; });