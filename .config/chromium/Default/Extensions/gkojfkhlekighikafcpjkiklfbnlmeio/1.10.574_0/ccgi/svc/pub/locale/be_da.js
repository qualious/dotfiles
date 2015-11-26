'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Buffering?": {
        "message": "Buffer $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola at få adgang til $2\n\nKlik her for at gøre det samme: $3\n\nDet installerer Hola, som lader mig surfe på internettet hurtigere og få adgang til $4$5"
    },
    "$1 from $2": {
        "message": "$1 fra $2"
    },
    "$1 not found": {
        "message": "$1 ikke fundet"
    },
    "(some Hola features are not available on your version)": {
        "message": "(visse Hola funktioner er ikke tilgængelige i denne version)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "Forenede Arabiske Emirater"
    },
    "AG": {
        "message": "Antigua og Barbuda"
    },
    "AL": {
        "message": "Albanien"
    },
    "AM": {
        "message": "Armenien"
    },
    "AN": {
        "message": "Hollandske Antiller"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AS": {
        "message": "Amerikansk Samoa"
    },
    "AT": {
        "message": "Østrig"
    },
    "AU": {
        "message": "Australien"
    },
    "AX": {
        "message": "Åland"
    },
    "AZ": {
        "message": "Aserbajdsjan"
    },
    "About": {
        "message": "Cirka"
    },
    "About Hola": {
        "message": "Om Hola"
    },
    "Accelerator is": {
        "message": "Accelerator er"
    },
    "Access $1 - cool site!": {
        "message": "Adgang $1 - cool site!"
    },
    "Access $1?": {
        "message": "Fjern blokkering af $1?"
    },
    "Access any site from any country, free": {
        "message": "Få adgang til enhver side, fra ethvert land, gratis"
    },
    "Access cool sites": {
        "message": "Adgang kølige steder"
    },
    "Access more sites": {
        "message": "Få adgang til flere sider"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Adgang sites censureret i dit land og fremskynde din internet med Hola - gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Adgang $1 med Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Kontotype"
    },
    "Activating...": {
        "message": "Aktivering..."
    },
    "All ($1)": {
        "message": "Alle ($1)"
    },
    "Apply settings...": {
        "message": "Anvend indstillinger..."
    },
    "Author site:": {
        "message": "Forfatterside:"
    },
    "Author:": {
        "message": "Forfatter:"
    },
    "Awesome!": {
        "message": "Formidabelt!"
    },
    "BA": {
        "message": "Bosnien-Hercegovina"
    },
    "BE": {
        "message": "Belgien"
    },
    "BG": {
        "message": "Bulgarien"
    },
    "BN": {
        "message": "Brunei Darussalam"
    },
    "BQ": {
        "message": "Britisk Antarktis"
    },
    "BR": {
        "message": "Brasilien"
    },
    "BV": {
        "message": "Bouvetø"
    },
    "BY": {
        "message": "Hviderusland"
    },
    "Back to $1": {
        "message": "Tilbage til $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Vær den første til at få Hola til iPhone/iPad - Registrer nu:"
    },
    "Buffering problems?": {
        "message": "Buffering problemer?"
    },
    "Buffering?": {
        "message": "Gemmer i buffer?"
    },
    "CC": {
        "message": "Cocosøerne"
    },
    "CD": {
        "message": "Congo-Kinshasa"
    },
    "CF": {
        "message": "Centralafrikanske Republik"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Schweiz"
    },
    "CI": {
        "message": "Elfenbenskysten"
    },
    "CK": {
        "message": "Cook-øerne"
    },
    "CM": {
        "message": "Cameroun"
    },
    "CN": {
        "message": "Kina"
    },
    "CP": {
        "message": "Clippertonøen"
    },
    "CS": {
        "message": "Serbien og Montenegro"
    },
    "CT": {
        "message": "Canton og Enderbury Øer"
    },
    "CV": {
        "message": "Kap Verde"
    },
    "CX": {
        "message": "Juleøen"
    },
    "CY": {
        "message": "Cypern"
    },
    "CZ": {
        "message": "Tjekkiet"
    },
    "Changing country...": {
        "message": "Skifter land..."
    },
    "Check out Hola for $1!": {
        "message": "Tjek Hola for $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Tjek Hola til mobile enheder"
    },
    "Check your Internet connection": {
        "message": "Check din Internet forbindelse"
    },
    "Choose<br>Country": {
        "message": "Vælg<br>Land"
    },
    "Configuring...": {
        "message": "Konfigurerer..."
    },
    "Connecting...": {
        "message": "Forbinder..."
    },
    "Creative licenses": {
        "message": "Kreative licenser"
    },
    "DD": {
        "message": "Østtyskland"
    },
    "DE": {
        "message": "Tyskland"
    },
    "DK": {
        "message": "Danmark"
    },
    "DO": {
        "message": "Den Dominikanske Republik"
    },
    "DZ": {
        "message": "Algeriet"
    },
    "Delete": {
        "message": "Slet"
    },
    "Deleted from my list": {
        "message": "Slettet fra min liste"
    },
    "Did it work?": {
        "message": "Virkede det?"
    },
    "Did you experience any buffering?": {
        "message": "oplevede du buffering?"
    },
    "Disliked it": {
        "message": "Kunne ikke lide det"
    },
    "Don't show again for $1 for one week": {
        "message": "Vis ikke igen for $1 i en uge"
    },
    "Don't show again for any site for one week": {
        "message": "Vis ikke igen for noget websted i en uge"
    },
    "EA": {
        "message": "Ceuta og Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EG": {
        "message": "Egypten"
    },
    "EH": {
        "message": "Vestsahara"
    },
    "ES": {
        "message": "Spanien"
    },
    "ET": {
        "message": "Etiopien"
    },
    "EU": {
        "message": "europæiske Union"
    },
    "Enable": {
        "message": "Aktiver"
    },
    "Enable Hola Accelerator": {
        "message": "Aktiver Hola Accelerator"
    },
    "Enjoy!": {
        "message": "God fornøjelse!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Nyder Hola til Chrome?"
    },
    "Enter site to access": {
        "message": "Indtast stedet for at få adgang"
    },
    "Enter your email": {
        "message": "Indtast din e-mail"
    },
    "FJ": {
        "message": "Fiji-øerne"
    },
    "FK": {
        "message": "Falklandsøerne"
    },
    "FM": {
        "message": "Mikronesiens Forenede Stater"
    },
    "FO": {
        "message": "Færøerne"
    },
    "FQ": {
        "message": "Franske sydlige og antarktiske territorier"
    },
    "FR": {
        "message": "Frankrig"
    },
    "FX": {
        "message": "Metropolitan Frankrig"
    },
    "Fast": {
        "message": "Hurtig"
    },
    "Finding new peers...": {
        "message": "Finder nye peers ..."
    },
    "Finding peers...": {
        "message": "Finder peers ..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Fra"
    },
    "Full list": {
        "message": "Fuldstændig liste"
    },
    "GB": {
        "message": "Storbritannien"
    },
    "GE": {
        "message": "Georgien"
    },
    "GF": {
        "message": "Fransk Guyana"
    },
    "GL": {
        "message": "Grønland"
    },
    "GQ": {
        "message": "Ækvatorialguinea"
    },
    "GR": {
        "message": "Grækenland"
    },
    "GS": {
        "message": "South Georgia og De Sydlige Sandwichøer"
    },
    "Get 24/7 Unblocking": {
        "message": "Fjern blokkering 24/7"
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
        "message": "Få Hola Plus for uafbrudt, reklamefri service."
    },
    "Get Hola Premium": {
        "message": "Hola premium"
    },
    "Get Hola for Android": {
        "message": "Få Hola til Android"
    },
    "Get Premium support": {
        "message": "Få Premium support"
    },
    "Get Unlimited Unblocking": {
        "message": "Få ubegrænset afblokering"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Få adgang til censurerede hjemmesider, prøv det nu: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Få hjælp fra en tekniker over Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Få de hurtigste servere"
    },
    "Go": {
        "message": "Gå"
    },
    "Go Hola Premium": {
        "message": "Få Hola Premium"
    },
    "HK": {
        "message": "SAR Hongkong"
    },
    "HM": {
        "message": "Heard- og McDonald-øerne"
    },
    "HR": {
        "message": "Kroatien"
    },
    "HU": {
        "message": "Ungarn"
    },
    "Hate it": {
        "message": "Hader det"
    },
    "Help": {
        "message": "Hjælp"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\njeg bruger"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hej,\n\njeg begyndte med: $1 ($2). Det lader mig surfe på internettet hurtigere og få adgang til $3 i mit land."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola kan ikke fungere, fordi en anden udvidelse håndterer dine proxyindstillinger."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola fungerer ikke optimalt i Windows 8 tilstand. Skift venligst til skrivebordstilstand. Klik <a>her</a> for instruktioner"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola er ikke tilgængelig lige nu, men vi arbejder på det."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola er slukket, skal du klikke for at tænde"
    },
    "Hola site list": {
        "message": "Hola side liste"
    },
    "I can now access $1 from any country!": {
        "message": "Jeg kan nu få adgang til $1 fra alle lande!"
    },
    "I did not experience any buffering": {
        "message": "Jeg oplevede ikke buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Jeg har lige adgang til en censureret websted ved hjælp af Hola for $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Jeg bruger $1 til se $2 i mit land, og surfe hurtigere!"
    },
    "IC": {
        "message": "De Kanariske Øer"
    },
    "ID": {
        "message": "Indonesien"
    },
    "IE": {
        "message": "Irland"
    },
    "IN": {
        "message": "Indien"
    },
    "IO": {
        "message": "Det Britiske Territorium i Det Indiske Ocean"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Italien"
    },
    "Improve translation": {
        "message": "Forbedr oversættelse"
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
        "message": "Installer Free Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installer Hola Engine til at fortsætte med at bruge Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Straks se nogen torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Inviter venner - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Inviter venner. Få Premium."
    },
    "It was okay": {
        "message": "Det var okay"
    },
    "KG": {
        "message": "Kirgisistan"
    },
    "KH": {
        "message": "Cambodja"
    },
    "KM": {
        "message": "Comorerne"
    },
    "KN": {
        "message": "Saint Kitts og Nevis"
    },
    "KP": {
        "message": "Nordkorea"
    },
    "KR": {
        "message": "Sydkorea"
    },
    "KY": {
        "message": "Caymanøerne"
    },
    "KZ": {
        "message": "Kasakhstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LT": {
        "message": "Litauen"
    },
    "LV": {
        "message": "Letland"
    },
    "LY": {
        "message": "Libyen"
    },
    "Language": {
        "message": "Sprog"
    },
    "Library": {
        "message": "Bibliotek"
    },
    "Like it": {
        "message": "Kan lide det"
    },
    "Loading": {
        "message": "Indlæser"
    },
    "Loading site...": {
        "message": "Indlæser"
    },
    "Log in": {
        "message": "Log ind"
    },
    "Log out": {
        "message": "Log ud"
    },
    "Love Hola?": {
        "message": "Elsker du Hola?"
    },
    "Love it": {
        "message": "Elsker det"
    },
    "MA": {
        "message": "Marokko"
    },
    "MD": {
        "message": "Republikken Moldova"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshalløerne"
    },
    "MI": {
        "message": "Midway-øerne"
    },
    "MK": {
        "message": "Republikken Makedonien"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongoliet"
    },
    "MO": {
        "message": "SAR Macao"
    },
    "MP": {
        "message": "Nordmarianerne"
    },
    "MR": {
        "message": "Mauretanien"
    },
    "MV": {
        "message": "Maldiverne"
    },
    "Make your Internet better with $1": {
        "message": "Gør din Internet bedre med $1"
    },
    "Might not work on all sites": {
        "message": "Virker måske ikke på alle websteder"
    },
    "Mode": {
        "message": "Tilstand"
    },
    "More countries": {
        "message": "Flere lande"
    },
    "More sites...": {
        "message": "Mere sider..."
    },
    "More...": {
        "message": "Mere..."
    },
    "My Account": {
        "message": "Min Konto"
    },
    "My History": {
        "message": "Min historie"
    },
    "My Settings": {
        "message": "Mine Indstillinger"
    },
    "My favorites": {
        "message": "Mine favoritter"
    },
    "NC": {
        "message": "Ny Caledonien"
    },
    "NL": {
        "message": "Holland"
    },
    "NO": {
        "message": "Norge"
    },
    "Need Help?": {
        "message": "Har du brug for hjælp?"
    },
    "Never ask me again": {
        "message": "Spørg mig aldrig igen"
    },
    "Never be a peer": {
        "message": "Vær aldrig en peer"
    },
    "No": {
        "message": "Nej"
    },
    "No idle peers found.": {
        "message": "Ingen ledige peers fundet."
    },
    "No recent videos found": {
        "message": "Ingen seneste videoer fundet"
    },
    "No saved videos found": {
        "message": "Ingen gemte videoer fundet"
    },
    "No title": {
        "message": "Ingen titel"
    },
    "No videos found": {
        "message": "Ingen videoer fundet"
    },
    "No videos found on active page": {
        "message": "Ingen videoer fundet på aktiv side"
    },
    "No, Thanks": {
        "message": "Nej tak"
    },
    "No, fix it": {
        "message": "Nej, ordne det"
    },
    "Not working?": {
        "message": "Fungerer den ikke?"
    },
    "Number of users that pressed not working": {
        "message": "Antal af brugere der trykkede fungerer ikke"
    },
    "Number of users that use this option": {
        "message": "Antal af brugere der benytter denne indstilling"
    },
    "Off": {
        "message": "Fra"
    },
    "Oh, yes!": {
        "message": "Åh, ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Ældre version af Firefox. Klik <a>her</a> for at opgradere."
    },
    "On": {
        "message": "Til"
    },
    "Open Media Player": {
        "message": "Åbn Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Vores helt nye Mplayer kommer snart!"
    },
    "PF": {
        "message": "Fransk Polynesien"
    },
    "PG": {
        "message": "Papua Ny Guinea"
    },
    "PH": {
        "message": "Filippinerne"
    },
    "PL": {
        "message": "Polen"
    },
    "PM": {
        "message": "Saint Pierre og Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "De palæstinensiske områder"
    },
    "PU": {
        "message": "Amerikanske Diverse Stillehavsøerne"
    },
    "PZ": {
        "message": "Panamakanalen Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Deaktivere venligst andre <a>udvidelser</a>, som du mener kan styre dine proxy-indstillinger, såsom ad-blokkere, andre VPN-tjenester osv."
    },
    "Please enter a valid email address.": {
        "message": "Indtast venligst en gyldig e-mail-adresse."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Indtast en hjemmeside-adresse, f.eks. facebook.com"
    },
    "Please help us get better": {
        "message": "Hjælp os venliggst med at blive bedre"
    },
    "Popular in $1": {
        "message": "Populær i $1"
    },
    "Popular in the world": {
        "message": "Populær i verden"
    },
    "Popular sites": {
        "message": "Populære websteder"
    },
    "QO": {
        "message": "Afsidesliggende Oceanien"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Rumænien"
    },
    "RS": {
        "message": "Serbien"
    },
    "RU": {
        "message": "Rusland"
    },
    "Rate us": {
        "message": "Bedøm os"
    },
    "Recent Videos": {
        "message": "Seneste Videoer"
    },
    "Reload": {
        "message": "Genindlæs"
    },
    "Reload Hola": {
        "message": "Genindlæs Hola"
    },
    "Remember server": {
        "message": "Husk server"
    },
    "Report a problem": {
        "message": "Rapporter et problem"
    },
    "Retry safe mode": {
        "message": "Prøv igen fejlsikret tilstand"
    },
    "SA": {
        "message": "Saudi-Arabien"
    },
    "SB": {
        "message": "Salomonøerne"
    },
    "SC": {
        "message": "Seychellerne"
    },
    "SE": {
        "message": "Sverige"
    },
    "SH": {
        "message": "St. Helena"
    },
    "SI": {
        "message": "Slovenien"
    },
    "SJ": {
        "message": "Svalbard og Jan Mayen"
    },
    "SK": {
        "message": "Slovakiet"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sao Tome og Principe"
    },
    "SU": {
        "message": "Unionen af ​​Socialistiske Sovjetrepublikker"
    },
    "SY": {
        "message": "Syrien"
    },
    "Safe": {
        "message": "Sikker"
    },
    "Safe mode": {
        "message": "Sikker tilstand"
    },
    "Save": {
        "message": "Gem"
    },
    "Saved Videos": {
        "message": "Gemte Videos"
    },
    "Saved for later": {
        "message": "Gemmes til senere"
    },
    "Search video title": {
        "message": "Søg video titel"
    },
    "Select a Country": {
        "message": "Vælg et land"
    },
    "Select site to unblock": {
        "message": "Vælg websted for at fjerne blokeringen"
    },
    "Server saved!": {
        "message": "Server gemt!"
    },
    "Set safe mode for $1 $2": {
        "message": "Sæt fejlsikret tilstand for $1 $2"
    },
    "Settings": {
        "message": "Indstillinger"
    },
    "Share": {
        "message": "Andel"
    },
    "Share $1 on $2": {
        "message": "Del $1 på $2"
    },
    "Share $1 via $2": {
        "message": "Del $1 fra $2"
    },
    "Share with friends!": {
        "message": "Del med venner!"
    },
    "Sign up": {
        "message": "Tilmeld dig"
    },
    "Solve buffering": {
        "message": "Løs buffering"
    },
    "Solve buffering problems with": {
        "message": "Løs buffer problemer med"
    },
    "Solves it": {
        "message": "Løser det"
    },
    "Staff Picks": {
        "message": "Fra medarbejdere"
    },
    "Start Hola": {
        "message": "start"
    },
    "Starting...": {
        "message": "Starter..."
    },
    "Stopping peer routing...": {
        "message": "Stopper peer routing ..."
    },
    "Stream Instantly": {
        "message": "Stream Straks"
    },
    "Submit": {
        "message": "Indsend"
    },
    "Support Hola": {
        "message": "Støt Hola"
    },
    "TC": {
        "message": "Turks- og Caicosøerne"
    },
    "TD": {
        "message": "Tchad"
    },
    "TF": {
        "message": "Franske Besiddelser i Det Sydlige Indiske Ocean"
    },
    "TG": {
        "message": "At gå"
    },
    "TJ": {
        "message": "Tadsjikistan"
    },
    "TN": {
        "message": "Tunesien"
    },
    "TR": {
        "message": "Tyrkiet"
    },
    "TT": {
        "message": "Trinidad og Tobago"
    },
    "Talk to us on $1": {
        "message": "Tal med os på $1"
    },
    "Tell friends about $1": {
        "message": "Fortæl venner om $1"
    },
    "Testing connection...": {
        "message": "Tester forbindelsen..."
    },
    "Thank you!": {
        "message": "Tak!"
    },
    "There seems to be an error": {
        "message": "Der opstod desværre en fejl"
    },
    "Top popular sites": {
        "message": "Top populære websteder"
    },
    "Translate to your language": {
        "message": "Oversæt til dit eget sprog"
    },
    "Try again": {
        "message": "Prøv igen"
    },
    "Try another server": {
        "message": "Prøv en anden server"
    },
    "Try it": {
        "message": "Prøv det"
    },
    "Try safe mode": {
        "message": "Prøv fejlsikret tilstand"
    },
    "Try to <span>reload</span>": {
        "message": "Forsøg at <span>genindlæse</span>"
    },
    "Trying another peer...": {
        "message": "Forsøger en anden peer ..."
    },
    "Turn off Accelerator": {
        "message": "Sluk Accelerator"
    },
    "Turn off Hola": {
        "message": "Sluk Hola"
    },
    "Turn on Accelerator": {
        "message": "Tænd Accelerator"
    },
    "Turn on Hola": {
        "message": "Tænd Hola"
    },
    "Turn on to get started": {
        "message": "Aktiver for at starte"
    },
    "UM": {
        "message": "De Mindre Amerikanske Oversøiske Øer"
    },
    "US": {
        "message": "USA"
    },
    "UZ": {
        "message": "Usbekistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker er deaktiveret"
    },
    "Update": {
        "message": "Opdater"
    },
    "Upgrade": {
        "message": "Opgrader"
    },
    "Using": {
        "message": "Brug"
    },
    "Using Hola": {
        "message": "Brug Hola"
    },
    "VA": {
        "message": "Vatikanstaten"
    },
    "VC": {
        "message": "St. Vincent og Grenadinerne"
    },
    "VD": {
        "message": "Nordvietnam"
    },
    "VG": {
        "message": "De britiske jomfruøer"
    },
    "VI": {
        "message": "De amerikanske jomfruøer"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Meget gammel udgave af Chrome, <a>opdater</a> Chrome for at bruge Hola"
    },
    "Video": {
        "message": "Videoen"
    },
    "Video stuck?": {
        "message": "Sidder Videoen fast?"
    },
    "Videos available for instant streaming": {
        "message": "Videoer til rådighed for øjeblikkelig streaming"
    },
    "WF": {
        "message": "Wallis og Futunaøerne"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vil du have Hola på flere enheder? (Xbox, PS, Apple TV, iPhone...). Klik her"
    },
    "Want to know more?": {
        "message": "Vil du vide mere?"
    },
    "Watch Now": {
        "message": "Se nu"
    },
    "We found $1 videos": {
        "message": "Vi fandt $1 videoer"
    },
    "We will be in touch with you soon": {
        "message": "Vi kontakter dig snart"
    },
    "Working!": {
        "message": "Fungerer!"
    },
    "Working?": {
        "message": "Fungerer den?"
    },
    "Works on all sites but slower": {
        "message": "Virker på alle websteder, men langsommere"
    },
    "YD": {
        "message": "Demokratiske Folkerepublik Yemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Du skal opgradere til den seneste version af Opera at bruge Hola. Tryk <a>her for</a> at opgradere."
    },
    "ZA": {
        "message": "Sydafrika"
    },
    "ZZ": {
        "message": "Ukendt eller ugyldigt område"
    },
    "app_desc": {
        "message": "Få adgang til websteder blokeret i dit land, virksomhed eller skole med Hola! Hola er gratis og nem at bruge!"
    },
    "app_name": {
        "message": "Hola Bedre Internet"
    },
    "back to": {
        "message": "tilbage til"
    },
    "changing...": {
        "message": "skifter..."
    },
    "cool sites": {
        "message": "Seje sider"
    },
    "current site": {
        "message": "aktuelle websted"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "dage"
    },
    "even more...": {
        "message": "endnu flere..."
    },
    "mode": {
        "message": "tilstand"
    },
    "more options...": {
        "message": "flere indstillinger..."
    },
    "not working?": {
        "message": "Fungerer ikke?"
    },
    "not working? try another server": {
        "message": "Fungerer serveren ikke? Prøv en anden"
    },
    "on this page": {
        "message": "på denne side"
    },
    "sites that are censored": {
        "message": "websteder, der er censureret"
    },
    "start": {
        "message": "begynd"
    },
    "working? remember": {
        "message": "Fungerer serveren? Husk den"
    }
};
return E; });