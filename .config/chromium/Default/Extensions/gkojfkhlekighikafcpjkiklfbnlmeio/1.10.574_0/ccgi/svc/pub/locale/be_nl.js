'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Buffering?": {
        "message": "$1 buffert?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola om $2\n\nKlik hier om het zelfde te doen: $3\n\nHet installeert Hola, waarmee ik het internet te surfen en sneller toegang te krijgen tot $4$5"
    },
    "$1 from $2": {
        "message": "$1 van $2"
    },
    "$1 not found": {
        "message": "$1 niet gevonden"
    },
    "(some Hola features are not available on your version)": {
        "message": "(sommige functies van Hola zijn niet beschikbaar in deze versie)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "Verenigde Arabische Emiraten"
    },
    "AG": {
        "message": "Antigua en Barbuda"
    },
    "AL": {
        "message": "Albanië"
    },
    "AM": {
        "message": "Armenië"
    },
    "AN": {
        "message": "Nederlandse Antillen"
    },
    "AR": {
        "message": "Argentinië"
    },
    "AS": {
        "message": "Amerikaans Samoa"
    },
    "AT": {
        "message": "Oostenrijk"
    },
    "AU": {
        "message": "Australië"
    },
    "AX": {
        "message": "Alandeilanden"
    },
    "AZ": {
        "message": "Azerbeidzjan"
    },
    "About": {
        "message": "Over"
    },
    "About Hola": {
        "message": "Over Hola"
    },
    "Accelerator": {
        "message": "Versneller"
    },
    "Accelerator is": {
        "message": "Versneller"
    },
    "Access $1 - cool site!": {
        "message": "Toegang $1 - coole site!"
    },
    "Access $1?": {
        "message": "Deblokkeer $1?"
    },
    "Access any site from any country, free": {
        "message": "Toegang tot elke site vanuit elk land, gratis"
    },
    "Access cool sites": {
        "message": "Toegang koele plaatsen"
    },
    "Access more sites": {
        "message": "Toegang meer sites"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Aansluitpunten gecensureerd in uw land en versnellen van uw internet met Hola - Gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Toegang tot $1 met Hola"
    },
    "Account": {
        "message": "Rekening"
    },
    "Activating...": {
        "message": "Activeren..."
    },
    "All ($1)": {
        "message": "Alle ($1)"
    },
    "Apply settings...": {
        "message": "Instellingen toepassen..."
    },
    "Author site:": {
        "message": "Site van de auteur:"
    },
    "Author:": {
        "message": "Auteur:"
    },
    "Awesome!": {
        "message": "Geweldig!"
    },
    "BA": {
        "message": "Bosnië en Herzegovina"
    },
    "BE": {
        "message": "België"
    },
    "BG": {
        "message": "Bulgarije"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BI": {
        "message": "Boeroendi"
    },
    "BQ": {
        "message": "Brits Antarctica"
    },
    "BR": {
        "message": "Brazilië"
    },
    "BS": {
        "message": "Bahama’s"
    },
    "BV": {
        "message": "Bouveteiland"
    },
    "BY": {
        "message": "Wit-Rusland"
    },
    "Back to $1": {
        "message": "Terug naar $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Wees de eerste om Hola te krijgen voor de iPhone / iPad - Registreer nu:"
    },
    "Browsing": {
        "message": "Surfen"
    },
    "Buffering problems?": {
        "message": "Problemen met bufferen?"
    },
    "Buffering?": {
        "message": "Bezig met bufferen?"
    },
    "CC": {
        "message": "Cocoseilanden"
    },
    "CD": {
        "message": "Congo-Kinshasa"
    },
    "CF": {
        "message": "Centraal-Afrikaanse Republiek"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Zwitserland"
    },
    "CI": {
        "message": "Ivoorkust"
    },
    "CK": {
        "message": "Cookeilanden"
    },
    "CL": {
        "message": "Chili"
    },
    "CM": {
        "message": "Kameroen"
    },
    "CP": {
        "message": "Clipperton"
    },
    "CS": {
        "message": "Servië en Montenegro"
    },
    "CT": {
        "message": "Canton en Enderbury"
    },
    "CV": {
        "message": "Kaapverdië"
    },
    "CX": {
        "message": "Christmaseiland"
    },
    "CZ": {
        "message": "Tsjechië"
    },
    "Changing country...": {
        "message": "Bezig met veranderen van land..."
    },
    "Check out Hola for $1!": {
        "message": "Check out Hola voor slechts $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola voor mobiele apparaten"
    },
    "Check your Internet connection": {
        "message": "Controleer je internetverbinding"
    },
    "Choose<br>Country": {
        "message": "Kies <br> Land"
    },
    "Configuring...": {
        "message": "Configureren ..."
    },
    "Connecting...": {
        "message": "Bezig met verbinden ..."
    },
    "Cool site!": {
        "message": "Coole site!"
    },
    "Creative licenses": {
        "message": "Creatieve licenties"
    },
    "DD": {
        "message": "Oost-Duitsland"
    },
    "DE": {
        "message": "Duitsland"
    },
    "DK": {
        "message": "Denemarken"
    },
    "DO": {
        "message": "Dominicaanse Republiek"
    },
    "DZ": {
        "message": "Algerije"
    },
    "Delete": {
        "message": "Verwijder"
    },
    "Deleted from my list": {
        "message": "Verwijdert van uw lijst"
    },
    "Did it work?": {
        "message": "Werkte het?"
    },
    "Did you experience any buffering?": {
        "message": "Hebt u buffering ervaren?"
    },
    "Disliked it": {
        "message": "Afkerig"
    },
    "Don't show again for $1 for one week": {
        "message": "Niet meer laten zien voor $1 gedurende een week"
    },
    "Don't show again for any site for one week": {
        "message": "Niet meer laten zien voor elke site gedurende een week"
    },
    "Downloading": {
        "message": "Downloaden"
    },
    "EA": {
        "message": "Ceuta en Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EG": {
        "message": "Egypte"
    },
    "EH": {
        "message": "Westelijke Sahara"
    },
    "ES": {
        "message": "Spanje"
    },
    "ET": {
        "message": "Ethiopië"
    },
    "EU": {
        "message": "Europese Unie"
    },
    "Enable": {
        "message": "Inschakelen"
    },
    "Enable Hola Accelerator": {
        "message": "Hola Accelerator inschakelen"
    },
    "Enjoy!": {
        "message": "Geniet!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Genieten van Hola voor Chrome?"
    },
    "Enter site to access": {
        "message": "Voer site in voor toegang"
    },
    "Enter your email": {
        "message": "Voer uw e-mail in"
    },
    "FK": {
        "message": "Falklandeilanden"
    },
    "FM": {
        "message": "Micronesië"
    },
    "FO": {
        "message": "Faeröer"
    },
    "FQ": {
        "message": "Franse Zuidelijke en Antarctische Gebieden"
    },
    "FR": {
        "message": "Frankrijk"
    },
    "FX": {
        "message": "Europees Frankrijk"
    },
    "Fast": {
        "message": "Snel"
    },
    "Finding new peers...": {
        "message": "Bezig met het vinden van nieuwe delers..."
    },
    "Finding peers...": {
        "message": "Bezig met het vinden van delers..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Van"
    },
    "Full list": {
        "message": "Volledige lijst"
    },
    "GB": {
        "message": "Verenigd Koninkrijk"
    },
    "GE": {
        "message": "Georgië"
    },
    "GF": {
        "message": "Frans-Guyana"
    },
    "GL": {
        "message": "Groenland"
    },
    "GN": {
        "message": "Guinee"
    },
    "GQ": {
        "message": "Equatoriaal-Guinea"
    },
    "GR": {
        "message": "Griekenland"
    },
    "GS": {
        "message": "Zuid-Georgië en Zuidelijke Sandwicheilanden"
    },
    "GW": {
        "message": "Guinee-Bissau"
    },
    "Get 24/7 Unblocking": {
        "message": "Deblokkeer sites 24/7"
    },
    "Get Free Premium": {
        "message": "Neem Gratis Premium"
    },
    "Get Hola Accelerator": {
        "message": "Neem Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Neem Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Neem Hola Plus voor ononderbroken, ad-free service."
    },
    "Get Hola Premium": {
        "message": "Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Neem Hola voor Android"
    },
    "Get Premium support": {
        "message": "Neem Premium support"
    },
    "Get Unlimited Unblocking": {
        "message": "Deblokkeer sites ongelimiteerd"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Krijg toegang tot gecensureerde websites, probeer het nu: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Krijg hulp van een expert via Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Krijg de snelste servers"
    },
    "Go": {
        "message": "Ga"
    },
    "Go Hola Premium": {
        "message": "Ga voor Premium!"
    },
    "HK": {
        "message": "Hongkong SAR van China"
    },
    "HM": {
        "message": "Heard- en McDonaldeilanden"
    },
    "HR": {
        "message": "Kroatië"
    },
    "HT": {
        "message": "Haïti"
    },
    "HU": {
        "message": "Hongarije"
    },
    "Hate it": {
        "message": "Haat het"
    },
    "Help": {
        "message": "Helpen"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nik gebruik"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hallo,\n\nIk ben begonnen met $1 ($2). Het laat me sneller surfen op het internet en geeft toegang tot $3 in mijn land."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola kan niet werken omdat een andere extensie uw proxy-instellingen controleert."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola werkt niet goed in Windows 8 modus. Schakel terug naar Desktop modus. Klik <a>hier</a> voor instructies"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola is niet beschikbaar op dit moment, maar we werken eraan."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola is uitgeschakeld, klik om aan te zetten"
    },
    "Hola site list": {
        "message": "Hola sitelijst"
    },
    "I can now access $1 from any country!": {
        "message": "Ik heb nu toegang tot $1 vanuit elk land!"
    },
    "I did not experience any buffering": {
        "message": "Ik heb geen buffering ervaren"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ik heb zojuist een gecensureerde site bezocht met Hola voor slechts $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ik gebruik $1 om $2 te bekijken in mijn land, en surf sneller!"
    },
    "IC": {
        "message": "Canarische eilanden"
    },
    "ID": {
        "message": "Indonesië"
    },
    "IE": {
        "message": "Ierland"
    },
    "IL": {
        "message": "Israël"
    },
    "IN": {
        "message": "Indië"
    },
    "IO": {
        "message": "Britse Gebieden in de Indische Oceaan"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "IJsland"
    },
    "IT": {
        "message": "Italië"
    },
    "Improve translation": {
        "message": "Verbeter de vertaling"
    },
    "Initializing...": {
        "message": "Inschakelen..."
    },
    "Install": {
        "message": "Installeren"
    },
    "Install Accelerator": {
        "message": "Installeer Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Installeer de gratis Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installeer Hola Engine blijven gebruiken Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Bekijk direct elke torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Nodig vrienden uit - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Vrienden uitnodigen. Krijg Premium."
    },
    "It was okay": {
        "message": "Het was oke"
    },
    "JO": {
        "message": "Jordanië"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgizië"
    },
    "KH": {
        "message": "Cambodja"
    },
    "KM": {
        "message": "Comoren"
    },
    "KN": {
        "message": "Saint Kitts en Nevis"
    },
    "KP": {
        "message": "Noord-Korea"
    },
    "KR": {
        "message": "Zuid-Korea"
    },
    "KW": {
        "message": "Koeweit"
    },
    "KY": {
        "message": "Caymaneilanden"
    },
    "KZ": {
        "message": "Kazachstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LT": {
        "message": "Litouwen"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "LV": {
        "message": "Letland"
    },
    "LY": {
        "message": "Libië"
    },
    "Language": {
        "message": "Taal"
    },
    "Library": {
        "message": "Bibliotheek"
    },
    "Like it": {
        "message": "Het leuk vinden"
    },
    "Loading": {
        "message": "Aan het laden"
    },
    "Loading site...": {
        "message": "Bezig met site te laden"
    },
    "Log in": {
        "message": "Inloggen"
    },
    "Log out": {
        "message": "Uitloggen"
    },
    "Love Hola?": {
        "message": "Blij met Hola?"
    },
    "Love it": {
        "message": "Hou ervan"
    },
    "MA": {
        "message": "Marokko"
    },
    "MD": {
        "message": "Moldavië"
    },
    "MF": {
        "message": "Sint-Maarten"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshalleilanden"
    },
    "MI": {
        "message": "Midway-eilanden"
    },
    "MK": {
        "message": "Macedonië"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongolië"
    },
    "MO": {
        "message": "Macao SAR van China"
    },
    "MP": {
        "message": "Noordelijke Marianeneilanden"
    },
    "MR": {
        "message": "Mauritanië"
    },
    "MV": {
        "message": "Maldiven"
    },
    "MY": {
        "message": "Maleisië"
    },
    "Make your Internet better with $1": {
        "message": "Maak uw Internet beter met $1"
    },
    "Might not work on all sites": {
        "message": "Werkt mogelijk niet op alle sites"
    },
    "More countries": {
        "message": "Meer landen"
    },
    "More sites...": {
        "message": "Meer..."
    },
    "More...": {
        "message": "Meer..."
    },
    "My Account": {
        "message": "Mijn account"
    },
    "My History": {
        "message": "Mijn Geschiedenis"
    },
    "My Settings": {
        "message": "Mijn instellingen"
    },
    "My favorites": {
        "message": "Mijn favorieten"
    },
    "NA": {
        "message": "Namibië"
    },
    "NC": {
        "message": "Nieuw-Caledonië"
    },
    "NF": {
        "message": "Norfolkeiland"
    },
    "NL": {
        "message": "Nederland"
    },
    "NO": {
        "message": "Noorwegen"
    },
    "NZ": {
        "message": "Nieuw-Zeeland"
    },
    "Need Help?": {
        "message": "Heb je hulp nodig?"
    },
    "Never ask me again": {
        "message": "Vraag het nooit opnieuw"
    },
    "Never be a peer": {
        "message": "Wees nooit een deler"
    },
    "No": {
        "message": "Geen"
    },
    "No idle peers found.": {
        "message": "Geen beschikbare delers gevonden."
    },
    "No recent videos found": {
        "message": "Geen recente video&#39;s gevonden"
    },
    "No saved videos found": {
        "message": "Geen opgeslagen video&#39;s gevonden"
    },
    "No title": {
        "message": "Geen titel"
    },
    "No videos found": {
        "message": "Geen video&#39;s gevonden"
    },
    "No videos found on active page": {
        "message": "Geen video&#39;s gevonden op de actieve pagina"
    },
    "No, Thanks": {
        "message": "Nee, bedankt"
    },
    "No, fix it": {
        "message": "Nee, los het op"
    },
    "Not working?": {
        "message": "Werkt het niet?"
    },
    "Number of users that pressed not working": {
        "message": "Aantal gebruikers die gedrukt heeft werkt niet"
    },
    "Number of users that use this option": {
        "message": "Aantal gebruikers die deze optie gebruikt"
    },
    "Off": {
        "message": "Uit"
    },
    "Oh, yes!": {
        "message": "Oh, ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Oude versie van Firefox. Klik <a>hier</a> om te updaten."
    },
    "On": {
        "message": "Aan"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Onze gloednieuwe Mplayer komt binnenkort!"
    },
    "PF": {
        "message": "Frans-Polynesië"
    },
    "PG": {
        "message": "Papoea-Nieuw-Guinea"
    },
    "PH": {
        "message": "Filipijnen"
    },
    "PL": {
        "message": "Polen"
    },
    "PM": {
        "message": "Saint Pierre en Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestijns Gebied"
    },
    "PU": {
        "message": "Diverse Amerikaanse Pacific Islands"
    },
    "PZ": {
        "message": "Panamakanaalzone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Schakel alstublieft andere <a>extensies</a> uit waarvan u denkt dat ze uw proxy-instellingen kunnen beïnvloeden, zoals ad-blockers, andere VPN-diensten, enz."
    },
    "Please enter a valid email address.": {
        "message": "Vul een geldig e-mailadres in."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Vul een website adres in, zoals facebook.com"
    },
    "Please help us get better": {
        "message": "U kunt ons helpen beter te worden"
    },
    "Popular in $1": {
        "message": "Populair in $1"
    },
    "Popular in the world": {
        "message": "Populair wereldwijd"
    },
    "Popular sites": {
        "message": "Populaire sites"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Afgelegen Oceanië"
    },
    "RO": {
        "message": "Roemenië"
    },
    "RS": {
        "message": "Servië"
    },
    "RU": {
        "message": "Rusland"
    },
    "Rate us": {
        "message": "Beoordeel ons"
    },
    "Recent Videos": {
        "message": "Recente video&#39;s"
    },
    "Reload": {
        "message": "Vernieuwen"
    },
    "Reload Hola": {
        "message": "Start Hola opnieuw"
    },
    "Remember server": {
        "message": "Vergeet server"
    },
    "Report a problem": {
        "message": "Een probleem rapporteren"
    },
    "Retry safe mode": {
        "message": "Opnieuw veilige modus"
    },
    "SA": {
        "message": "Saoedi-Arabië"
    },
    "SB": {
        "message": "Salomonseilanden"
    },
    "SC": {
        "message": "Seychellen"
    },
    "SD": {
        "message": "Soedan"
    },
    "SE": {
        "message": "Zweden"
    },
    "SH": {
        "message": "Sint-Helena"
    },
    "SI": {
        "message": "Slovenië"
    },
    "SJ": {
        "message": "Svalbard en Jan Mayen"
    },
    "SK": {
        "message": "Slowakije"
    },
    "SO": {
        "message": "Somalië"
    },
    "ST": {
        "message": "Sao Tomé en Principe"
    },
    "SU": {
        "message": "Unie van Socialistische Sovjetrepublieken"
    },
    "SY": {
        "message": "Syrië"
    },
    "Safe": {
        "message": "Veilig"
    },
    "Safe mode": {
        "message": "Veilige modus"
    },
    "Save": {
        "message": "Opslaan"
    },
    "Saved Videos": {
        "message": "Opgeslagen Videos"
    },
    "Saved for later": {
        "message": "Opgeslagen voor later"
    },
    "Search video title": {
        "message": "Zoek videotitel"
    },
    "Select a Country": {
        "message": "Selecteer een land"
    },
    "Select site to unblock": {
        "message": "Selecteer site om te deblokkeren"
    },
    "Server saved!": {
        "message": "Server opgeslagen!"
    },
    "Set safe mode for $1 $2": {
        "message": "Stel veilige modus worden voor $1 $2"
    },
    "Settings": {
        "message": "Instellingen"
    },
    "Share": {
        "message": "Deel"
    },
    "Share $1 on $2": {
        "message": "Deel $1 op $2"
    },
    "Share $1 via $2": {
        "message": "Deel $1 via $2"
    },
    "Share with friends!": {
        "message": "Delen met vrienden!"
    },
    "Sign up": {
        "message": "Registreren"
    },
    "Solve buffering": {
        "message": "Los het bufferen op"
    },
    "Solve buffering problems with": {
        "message": "Los buffer problemen op met"
    },
    "Solves it": {
        "message": "Lost het op"
    },
    "Staff Picks": {
        "message": "Gekozen door werknemers"
    },
    "Start Hola": {
        "message": "Start Hola op"
    },
    "Starting...": {
        "message": "Opstarten..."
    },
    "Stopping peer routing...": {
        "message": "Stoppen met peer-routing ..."
    },
    "Stream": {
        "message": "Beek"
    },
    "Stream Instantly": {
        "message": "Stream onmiddelijk"
    },
    "Submit": {
        "message": "Aanvaard"
    },
    "Support Hola": {
        "message": "Ondersteun Hola"
    },
    "TC": {
        "message": "Turks- en Caicoseilanden"
    },
    "TD": {
        "message": "Tsjaad"
    },
    "TF": {
        "message": "Franse Gebieden in de zuidelijke Indische Oceaan"
    },
    "TG": {
        "message": "Gaan"
    },
    "TJ": {
        "message": "Tadzjikistan"
    },
    "TL": {
        "message": "Oost-Timor"
    },
    "TN": {
        "message": "Tunesië"
    },
    "TR": {
        "message": "Turkije"
    },
    "TT": {
        "message": "Trinidad en Tobago"
    },
    "Talk to us on $1": {
        "message": "Praat met ons op $1"
    },
    "Tell friends about $1": {
        "message": "Vertel vrienden over $1"
    },
    "Testing connection...": {
        "message": "Verbinding testen..."
    },
    "Thank you!": {
        "message": "Dankuwel!"
    },
    "There seems to be an error": {
        "message": "Er lijkt een fout te zijn"
    },
    "Top popular sites": {
        "message": "Top populaire sites"
    },
    "Translate to your language": {
        "message": "Vertaal naar uw taal"
    },
    "Try again": {
        "message": "Probeer opnieuw"
    },
    "Try another server": {
        "message": "Probeer een andere server"
    },
    "Try it": {
        "message": "Probeer het"
    },
    "Try safe mode": {
        "message": "Probeer de veilige modus"
    },
    "Try to <span>reload</span>": {
        "message": "Probeer <span>opnieuw te laden</span>"
    },
    "Trying another peer...": {
        "message": "Probeer een andere deler..."
    },
    "Turn off Accelerator": {
        "message": "Zet Accelerator aan"
    },
    "Turn off Hola": {
        "message": "Zet Hola uit"
    },
    "Turn on Accelerator": {
        "message": "Zet Accelerator aan"
    },
    "Turn on Hola": {
        "message": "Zet Hola aan"
    },
    "Turn on to get started": {
        "message": "Schakel in om aan de slag te gaan"
    },
    "UA": {
        "message": "Oekraïne"
    },
    "UG": {
        "message": "Oeganda"
    },
    "UM": {
        "message": "Amerikaanse kleinere afgelegen eilanden"
    },
    "US": {
        "message": "Verenigde Staten"
    },
    "UZ": {
        "message": "Oezbekistan"
    },
    "Unblocker": {
        "message": "Deblokkeerder"
    },
    "Unblocker is disabled": {
        "message": "Deblokkeerder is uitgeschakeld"
    },
    "Unblocker?": {
        "message": "Deblokkeerder?"
    },
    "Update": {
        "message": "-Update"
    },
    "Upgrade": {
        "message": "-Update"
    },
    "Using": {
        "message": "Met behulp van"
    },
    "Using Hola": {
        "message": "Met behulp van Hola"
    },
    "VA": {
        "message": "Vaticaanstad"
    },
    "VC": {
        "message": "Saint Vincent en de Grenadines"
    },
    "VD": {
        "message": "Noord-Vietnam"
    },
    "VG": {
        "message": "Britse Maagdeneilanden"
    },
    "VI": {
        "message": "Amerikaanse Maagdeneilanden"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Zeer oude versie van Chrome, <a>update</a> Chrome om Hola te gebruiken"
    },
    "Video stuck?": {
        "message": "Video vastgelopen?"
    },
    "Videos available for instant streaming": {
        "message": "Video&#39;s beschikbaar voor directe streaming"
    },
    "WF": {
        "message": "Wallis en Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Wilt u Hola ook op andere apparaten? (Xbox, PS, Apple TV, iPhone ...). Klik hier"
    },
    "Want to know more?": {
        "message": "Wilt u meer weten?"
    },
    "Watch Now": {
        "message": "Kijk Nu"
    },
    "We found $1 videos": {
        "message": "Vonden we $1 video&#39;s"
    },
    "We will be in touch with you soon": {
        "message": "We zullen binnenkort contact met u opnemen"
    },
    "Working!": {
        "message": "Het werkt!"
    },
    "Working?": {
        "message": "Werkt het?"
    },
    "Works on all sites but slower": {
        "message": "Werkt op alle sites, maar langzamer"
    },
    "YD": {
        "message": "Democratische Volksrepubliek Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Je moet Opera updaten naar de laatste versie om Hola te gebruiken. Druk <a>hier</a> om Opera te updaten."
    },
    "ZA": {
        "message": "Zuid-Afrika"
    },
    "ZZ": {
        "message": "Onbekend of onjuist gebied"
    },
    "app_desc": {
        "message": "Toegang websites geblokkeerd in uw land, bedrijf of school met Hola! Hola is gratis en makkelijk te gebruiken!"
    },
    "app_name": {
        "message": "Hola beter internet"
    },
    "back to": {
        "message": "terug naar"
    },
    "changing...": {
        "message": "veranderen..."
    },
    "cool sites": {
        "message": "goede sites"
    },
    "current site": {
        "message": "huidige site"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "dagen"
    },
    "even more...": {
        "message": "nog meer..."
    },
    "more options...": {
        "message": "meer opties..."
    },
    "not working?": {
        "message": "werkt het niet?"
    },
    "not working? try another server": {
        "message": "werkt het niet? probeer dan een andere server"
    },
    "on this page": {
        "message": "Op deze pagina"
    },
    "sites that are censored": {
        "message": "sites die worden gecensureerd"
    },
    "start": {
        "message": "begin"
    },
    "working? remember": {
        "message": "werkt het? onthoudt"
    }
};
return E; });