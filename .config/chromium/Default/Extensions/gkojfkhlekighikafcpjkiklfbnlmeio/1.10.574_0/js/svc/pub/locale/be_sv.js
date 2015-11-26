'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Buffering?": {
        "message": "Buffrar $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola åtkomst $2\n\nKlicka här för att göra samma sak: $3\n\nDen installerar Hola, som låter mig surfa på Internet snabbare och få tillgång $4$5"
    },
    "$1 from $2": {
        "message": "$1 från $2"
    },
    "$1 not found": {
        "message": "$1 hittades inte"
    },
    "(some Hola features are not available on your version)": {
        "message": "(vissa funktioner är inte tillgängliga i din version)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "Förenade Arabemiraten"
    },
    "AG": {
        "message": "Antigua och Barbuda"
    },
    "AL": {
        "message": "Albanien"
    },
    "AM": {
        "message": "Armenien"
    },
    "AN": {
        "message": "Nederländska Antillerna"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AS": {
        "message": "Amerikanska Samoa"
    },
    "AT": {
        "message": "Österrike"
    },
    "AU": {
        "message": "Australien"
    },
    "AX": {
        "message": "Åland"
    },
    "AZ": {
        "message": "Azerbajdzjan"
    },
    "About": {
        "message": "Om"
    },
    "About Hola": {
        "message": "Om Hola"
    },
    "Accelerator is": {
        "message": "Accelerator är"
    },
    "Access $1 - cool site!": {
        "message": "Kolla in $1 - cool sajt!"
    },
    "Access $1?": {
        "message": "Gå till $1?"
    },
    "Access any site from any country, free": {
        "message": "Få tillgång till valfri sajt oberoende av regionsspärr, gratis"
    },
    "Access cool sites": {
        "message": "Kom åt coola platser"
    },
    "Access more sites": {
        "message": "Kom åt fler platser"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Komma åt platser censureras i ditt land och påskynda ditt Internet med Hola - gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Kom åt $1 med Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Kontotyp"
    },
    "Activating...": {
        "message": "Aktivera..."
    },
    "All ($1)": {
        "message": "Alla ($1)"
    },
    "Apply settings...": {
        "message": "Tillämpa inställningar ..."
    },
    "Author site:": {
        "message": "Sajtägare:"
    },
    "Author:": {
        "message": "Ägare:"
    },
    "Awesome!": {
        "message": "Toppen!"
    },
    "BA": {
        "message": "Bosnien och Hercegovina"
    },
    "BE": {
        "message": "Belgien"
    },
    "BG": {
        "message": "Bulgarien"
    },
    "BL": {
        "message": "S: t Barthélemy"
    },
    "BQ": {
        "message": "Brittiska antarktiska territoriet"
    },
    "BR": {
        "message": "Brasilien"
    },
    "BV": {
        "message": "Bouvetön"
    },
    "BY": {
        "message": "Vitryssland"
    },
    "Back to $1": {
        "message": "Tillbaka till $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Bli den första att få Hola för iPhone / iPad - Registrera dig nu:"
    },
    "Browsing": {
        "message": "Bläddring"
    },
    "Buffering problems?": {
        "message": "Buffringsproblem?"
    },
    "Buffering?": {
        "message": "Buffrar det?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosöarna"
    },
    "CD": {
        "message": "Kongo-Kinshasa"
    },
    "CF": {
        "message": "Centralafrikanska republiken"
    },
    "CG": {
        "message": "Kongo-Brazzaville"
    },
    "CH": {
        "message": "Schweiz"
    },
    "CI": {
        "message": "Elfenbenskusten"
    },
    "CK": {
        "message": "Cooköarna"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kina"
    },
    "CP": {
        "message": "Clipperton ön"
    },
    "CS": {
        "message": "Serbien och Montenegro"
    },
    "CT": {
        "message": "Kanton och Enderbury Öarna"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kap Verde"
    },
    "CX": {
        "message": "Julön"
    },
    "CY": {
        "message": "Cypern"
    },
    "CZ": {
        "message": "Tjeckien"
    },
    "Changing country...": {
        "message": "Ändrar land ..."
    },
    "Check out Hola for $1!": {
        "message": "Kolla Hola för $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Kolla Hola för mobila enheter"
    },
    "Check your Internet connection": {
        "message": "Kontrollera din internetanslutning"
    },
    "Choose<br>Country": {
        "message": "Välj <br> Land"
    },
    "Configuring...": {
        "message": "Konfigurerar..."
    },
    "Connecting...": {
        "message": "Ansluter ..."
    },
    "Cool site!": {
        "message": "Cool plats!"
    },
    "Creative licenses": {
        "message": "Creative licenser"
    },
    "DD": {
        "message": "Östtyskland"
    },
    "DE": {
        "message": "Tyskland"
    },
    "DK": {
        "message": "Danmark"
    },
    "DO": {
        "message": "Dominikanska republiken"
    },
    "DZ": {
        "message": "Algeriet"
    },
    "Delete": {
        "message": "Radera"
    },
    "Deleted from my list": {
        "message": "Bort från min lista"
    },
    "Did it work?": {
        "message": "Fungerade det?"
    },
    "Did you experience any buffering?": {
        "message": "Buffrade den?"
    },
    "Disliked it": {
        "message": "Ogillade det"
    },
    "Don't show again for $1 for one week": {
        "message": "Visa inte igen för $1 i en vecka"
    },
    "Don't show again for any site for one week": {
        "message": "Visa inte igen för någon plats i en vecka"
    },
    "Downloading": {
        "message": "Laddar ned"
    },
    "EA": {
        "message": "Ceuta och Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EG": {
        "message": "Egypten"
    },
    "EH": {
        "message": "Västsahara"
    },
    "ES": {
        "message": "Spanien"
    },
    "ET": {
        "message": "Etiopien"
    },
    "EU": {
        "message": "europeiska unionen"
    },
    "Enable": {
        "message": "Aktivera"
    },
    "Enable Hola Accelerator": {
        "message": "Aktivera Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Njut!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Njuter Hola för Chrome?"
    },
    "Enter site to access": {
        "message": "Ange platsen för åtkomst"
    },
    "Enter your email": {
        "message": "Ange din e-postadress"
    },
    "FK": {
        "message": "Falklandsöarna"
    },
    "FM": {
        "message": "Mikronesien"
    },
    "FO": {
        "message": "Färöarna"
    },
    "FQ": {
        "message": "De franska sydliga och antarktiska områdena"
    },
    "FR": {
        "message": "Frankrike"
    },
    "FX": {
        "message": "Metropolitan Frankrike"
    },
    "Fast": {
        "message": "Snabb"
    },
    "Finding new peers...": {
        "message": "Hittar nya peers ..."
    },
    "Finding peers...": {
        "message": "Hittar peers ..."
    },
    "Free": {
        "message": "Ledig"
    },
    "From": {
        "message": "Från"
    },
    "Full list": {
        "message": "Hela listan"
    },
    "GB": {
        "message": "Storbritannien"
    },
    "GE": {
        "message": "Georgien"
    },
    "GF": {
        "message": "Franska Guyana"
    },
    "GL": {
        "message": "Grönland"
    },
    "GQ": {
        "message": "Ekvatorialguinea"
    },
    "GR": {
        "message": "Grekland"
    },
    "GS": {
        "message": "Sydgeorgien och Södra Sandwichöarna"
    },
    "GW": {
        "message": "GUINEA-BISSAU"
    },
    "Get 24/7 Unblocking": {
        "message": "Få 24/7 avblockering"
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
        "message": "Skaffa Hola Plus för oavbruten, reklamfri tjänst."
    },
    "Get Hola Premium": {
        "message": "Skaffa Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Skaffa Hola för Android"
    },
    "Get Premium support": {
        "message": "Skaffa Premium support"
    },
    "Get Unlimited Unblocking": {
        "message": "Skaffa Obegränsad Unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Få tillgång till censurerade sajter, prova det nu: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Få hjälp av en ingenjör via Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Få de snabbaste servrarna"
    },
    "Go": {
        "message": "Gå"
    },
    "Go Hola Premium": {
        "message": "Skaffa Premium"
    },
    "HK": {
        "message": "Hongkong (S.A.R. Kina)"
    },
    "HM": {
        "message": "Heard- och McDonaldöarna"
    },
    "HR": {
        "message": "Kroatien"
    },
    "HU": {
        "message": "Ungern"
    },
    "Hate it": {
        "message": "Hatar det"
    },
    "Help": {
        "message": "Hjälp"
    },
    "Hey,\n\nI'm using": {
        "message": "Hej,\n\njag använder"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hej,\n\njag började att använda $1 ($2). Det låter mig surfa på Internet snabbare och få tillgång $3 i mitt land."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola kan inte fungera eftersom en annan anknytning kontrollerar proxyinställningarna."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola fungerar inte bra i Windows 8-läge. Var god skifta till skrivbords-läge. Klicka <a>här</a> för instruktioner"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola är inte tillgänglig just nu, men vi jobbar på det."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola är avstängd, klicka för att slå på"
    },
    "Hola site list": {
        "message": "Hola sajtlista"
    },
    "I can now access $1 from any country!": {
        "message": "Jag kan nu komma åt $1 från alla länder!"
    },
    "I did not experience any buffering": {
        "message": "Jag upplever inte någon buffring"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Jag besökte precis en censurerad webbplats med Hola för $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Jag använder $1 för att se $2 i mitt land, och surfa snabbare!"
    },
    "IC": {
        "message": "Kanarieöarna"
    },
    "ID": {
        "message": "Indonesien"
    },
    "IE": {
        "message": "Irland"
    },
    "IM": {
        "message": "ö av man"
    },
    "IN": {
        "message": "Indien"
    },
    "IO": {
        "message": "Brittiska Indiska oceanöarna"
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
        "message": "Förbättra översättning"
    },
    "Initializing...": {
        "message": "Initierar..."
    },
    "Install": {
        "message": "Installera"
    },
    "Install Accelerator": {
        "message": "Installera Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Installera gratis Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installera Hola Engine att fortsätta använda Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Genast titta på någon torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Bjud in vänner - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Bjud in vänner. Få Premium."
    },
    "It was okay": {
        "message": "Det var okej"
    },
    "JO": {
        "message": "Jordanien"
    },
    "JT": {
        "message": "Johnston ö"
    },
    "KG": {
        "message": "Kirgizistan"
    },
    "KH": {
        "message": "Kambodja"
    },
    "KM": {
        "message": "Komorerna"
    },
    "KN": {
        "message": "S: t Kitts och Nevis"
    },
    "KP": {
        "message": "Nordkorea"
    },
    "KR": {
        "message": "Sydkorea"
    },
    "KY": {
        "message": "Caymanöarna"
    },
    "KZ": {
        "message": "Kazakstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "S: t Lucia"
    },
    "LT": {
        "message": "Litauen"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "LV": {
        "message": "Lettland"
    },
    "LY": {
        "message": "Libyen"
    },
    "Language": {
        "message": "Språk"
    },
    "Library": {
        "message": "Bibliotek"
    },
    "Like it": {
        "message": "Gilla det"
    },
    "Loading": {
        "message": "Läser in"
    },
    "Loading site...": {
        "message": "Läser in sida..."
    },
    "Log in": {
        "message": "Logga in"
    },
    "Log out": {
        "message": "Logga ut"
    },
    "Love Hola?": {
        "message": "Älskar du Hola?"
    },
    "Love it": {
        "message": "Älskar det"
    },
    "MA": {
        "message": "Marocko"
    },
    "MD": {
        "message": "Moldavien"
    },
    "MF": {
        "message": "S: t Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshallöarna"
    },
    "MI": {
        "message": "Midwayöarna"
    },
    "MK": {
        "message": "Makedonien"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongoliet"
    },
    "MO": {
        "message": "Macao (S.A.R. Kina)"
    },
    "MP": {
        "message": "Nordmarianerna"
    },
    "MR": {
        "message": "Mauretanien"
    },
    "MV": {
        "message": "Maldiverna"
    },
    "MX": {
        "message": "Mexiko"
    },
    "MZ": {
        "message": "Moçambique"
    },
    "Make your Internet better with $1": {
        "message": "Gör din Internet bättre med $1"
    },
    "Menu": {
        "message": "Meny"
    },
    "Might not work on all sites": {
        "message": "Kanske inte fungerar på alla platser"
    },
    "Mode": {
        "message": "Läge"
    },
    "More countries": {
        "message": "Fler länder"
    },
    "More sites...": {
        "message": "Fler sidor..."
    },
    "More...": {
        "message": "mer..."
    },
    "My Account": {
        "message": "Mitt konto"
    },
    "My History": {
        "message": "Min historia"
    },
    "My Settings": {
        "message": "Mina inställningar"
    },
    "My favorites": {
        "message": "Mina favoriter"
    },
    "NC": {
        "message": "Nya Kaledonien"
    },
    "NF": {
        "message": "Norfolkön"
    },
    "NL": {
        "message": "Nederländerna"
    },
    "NO": {
        "message": "Norge"
    },
    "NZ": {
        "message": "Nya Zeeland"
    },
    "Need Help?": {
        "message": "Behöver du hjälp?"
    },
    "Never ask me again": {
        "message": "Frågar mig aldrig igen"
    },
    "Never be a peer": {
        "message": "Aldrig vara en peer"
    },
    "No": {
        "message": "Ingen"
    },
    "No idle peers found.": {
        "message": "Inga lediga peers hittade."
    },
    "No recent videos found": {
        "message": "Inga nya videor hittades"
    },
    "No saved videos found": {
        "message": "Inga sparade videor hittades"
    },
    "No title": {
        "message": "Ingen titel"
    },
    "No videos found": {
        "message": "Inga videor hittades"
    },
    "No videos found on active page": {
        "message": "Inga videor hittades på aktiv sida"
    },
    "No, Thanks": {
        "message": "Nej tack"
    },
    "No, fix it": {
        "message": "Nej, fixa det"
    },
    "Not working?": {
        "message": "Fungerar det inte?"
    },
    "Number of users that pressed not working": {
        "message": "Antalet som klickat 'Fungerar ej'"
    },
    "Number of users that use this option": {
        "message": "Antalet som använder detta val"
    },
    "Off": {
        "message": "Av"
    },
    "Oh, yes!": {
        "message": "Oh, ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Gammal version av Firefox. Klicka <a>här</a> för att uppgradera."
    },
    "On": {
        "message": "På"
    },
    "Open Media Player": {
        "message": "Öppna Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Vår splitternya Mplayer är Kommer snart!"
    },
    "PC": {
        "message": "Pacific Islands Lita Territory"
    },
    "PF": {
        "message": "Franska Polynesien"
    },
    "PG": {
        "message": "Papua Nya Guinea"
    },
    "PH": {
        "message": "Filippinerna"
    },
    "PL": {
        "message": "Polen"
    },
    "PM": {
        "message": "S: t Pierre och Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestinska territoriet"
    },
    "PU": {
        "message": "Amerikanska Diverse Stillahavsöarna"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Inaktivera andra <a>tillägg</a> som du tror kan kontrollera proxyinställningarna som ad-blockerare, andra VPN-tjänster, etc."
    },
    "Please enter a valid email address.": {
        "message": "Ange en giltig e-postadress."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Ange en webbadress, t ex facebook.com"
    },
    "Please help us get better": {
        "message": "Snälla hjälp oss att bli bättre"
    },
    "Popular in $1": {
        "message": "Populär i $1"
    },
    "Popular in the world": {
        "message": "Populär i världen"
    },
    "Popular sites": {
        "message": "Populära platser"
    },
    "QO": {
        "message": "Perifera Oceanien"
    },
    "RO": {
        "message": "Rumänien"
    },
    "RS": {
        "message": "Serbien"
    },
    "RU": {
        "message": "Ryssland"
    },
    "Rate us": {
        "message": "Betygsätta oss"
    },
    "Recent Videos": {
        "message": "Senaste videor"
    },
    "Reload": {
        "message": "Starta om"
    },
    "Reload Hola": {
        "message": "Starta om Hola"
    },
    "Remember server": {
        "message": "Kom ihåg servern"
    },
    "Report a problem": {
        "message": "Rapportera ett problem"
    },
    "Retry safe mode": {
        "message": "Försök felsäkert läge"
    },
    "SA": {
        "message": "Saudiarabien"
    },
    "SB": {
        "message": "Salomonöarna"
    },
    "SC": {
        "message": "Seychellerna"
    },
    "SE": {
        "message": "Sverige"
    },
    "SH": {
        "message": "S: t Helena"
    },
    "SI": {
        "message": "Slovenien"
    },
    "SJ": {
        "message": "Svalbard och Jan Mayen"
    },
    "SK": {
        "message": "Slovakien"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "São Tomé och Príncipe"
    },
    "SU": {
        "message": "Union Sovjet"
    },
    "SY": {
        "message": "Syrien"
    },
    "Safe": {
        "message": "Säker"
    },
    "Safe mode": {
        "message": "Säkert läge"
    },
    "Save": {
        "message": "Spara"
    },
    "Saved Videos": {
        "message": "Sparade videoklipp"
    },
    "Saved for later": {
        "message": "Sparas för senare"
    },
    "Search video title": {
        "message": "Sök video titel"
    },
    "Select a Country": {
        "message": "Välj ett land"
    },
    "Select site to unblock": {
        "message": "Välj plats för att låsa upp"
    },
    "Server saved!": {
        "message": "Server sparad!"
    },
    "Set safe mode for $1 $2": {
        "message": "Ställ felsäkert läge för $1 $2"
    },
    "Settings": {
        "message": "Inställningar"
    },
    "Share": {
        "message": "Del"
    },
    "Share $1 on $2": {
        "message": "Dela med $1 på $2"
    },
    "Share $1 via $2": {
        "message": "Dela med $1 via $2"
    },
    "Share with friends!": {
        "message": "Dela med vänner!"
    },
    "Sign up": {
        "message": "Anmäl dig"
    },
    "Solve buffering": {
        "message": "Lös buffrande"
    },
    "Solve buffering problems with": {
        "message": "Lös buffrande problem med"
    },
    "Solves it": {
        "message": "Löser det"
    },
    "Staff Picks": {
        "message": "Tjänste Picks"
    },
    "Start Hola": {
        "message": "Start a Hola"
    },
    "Starting...": {
        "message": "Startar..."
    },
    "Stop Hola": {
        "message": "Stoppa Hola"
    },
    "Stopping peer routing...": {
        "message": "Stoppa inbördes dirigering ..."
    },
    "Stream": {
        "message": "Ström"
    },
    "Stream Instantly": {
        "message": "Stream Ögonblick"
    },
    "Submit": {
        "message": "Skicka in"
    },
    "Support Hola": {
        "message": "Stöd Hola"
    },
    "TC": {
        "message": "Turks- och Caicosöarna"
    },
    "TD": {
        "message": "Tchad"
    },
    "TF": {
        "message": "Franska Sydterritorierna"
    },
    "TJ": {
        "message": "Tadzjikistan"
    },
    "TL": {
        "message": "Östtimor"
    },
    "TN": {
        "message": "Tunisien"
    },
    "TR": {
        "message": "Turkiet"
    },
    "TT": {
        "message": "Trinidad och Tobago"
    },
    "Talk to us on $1": {
        "message": "Prata med oss på $1"
    },
    "Tell friends about $1": {
        "message": "Berätta för vänner om $1"
    },
    "Testing connection...": {
        "message": "Testar anslutning ..."
    },
    "Thank you!": {
        "message": "Tack!"
    },
    "There seems to be an error": {
        "message": "Ett fel har uppkommit"
    },
    "Top popular sites": {
        "message": "Top populära webbplatser"
    },
    "Translate to your language": {
        "message": "Översätt till ditt språk"
    },
    "Try again": {
        "message": "Försök igen"
    },
    "Try another server": {
        "message": "Försök med en annan server"
    },
    "Try it": {
        "message": "Prova det"
    },
    "Try safe mode": {
        "message": "Prova felsäkert läge"
    },
    "Try to <span>reload</span>": {
        "message": "Försök att <span>ladda om</span>"
    },
    "Trying another peer...": {
        "message": "Försöker en annan inbördes ..."
    },
    "Turn off Accelerator": {
        "message": "Inaktivera Accelerator"
    },
    "Turn off Hola": {
        "message": "Inaktivera Hola"
    },
    "Turn on Accelerator": {
        "message": "Aktivera Accelerator"
    },
    "Turn on Hola": {
        "message": "Aktivera Hola"
    },
    "Turn on to get started": {
        "message": "Sätt på för att starta"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "USA: s yttre öar"
    },
    "US": {
        "message": "USA"
    },
    "Unblocker is disabled": {
        "message": "Unblocker är avstängd"
    },
    "Update": {
        "message": "Uppdaterar"
    },
    "Upgrade": {
        "message": "Uppgradera"
    },
    "Using": {
        "message": "Använda"
    },
    "Using Hola": {
        "message": "Att använda Hola"
    },
    "VA": {
        "message": "Vatikanstaten"
    },
    "VC": {
        "message": "S: t Vincent och Grenadinerna"
    },
    "VD": {
        "message": "Nordvietnam"
    },
    "VG": {
        "message": "Brittiska Jungfruöarna"
    },
    "VI": {
        "message": "Amerikanska Jungfruöarna"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Väldigt gammal version av Chrome, <a>uppdatera</a> Chrome för att använda Hola"
    },
    "Video stuck?": {
        "message": "Video fastnat?"
    },
    "Videos available for instant streaming": {
        "message": "Videor tillgängliga för omedelbar streaming"
    },
    "WF": {
        "message": "Wallis- och Futunaöarna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vill du ha Hola på andra enheter? (Xbox, PS, Apple TV, iPhone...). Klicka här"
    },
    "Want to know more?": {
        "message": "Vill du veta mer?"
    },
    "Watch Now": {
        "message": "Titta nu"
    },
    "We found $1 videos": {
        "message": "Vi hittade $1 videoklipp"
    },
    "We will be in touch with you soon": {
        "message": "Vi kommer att kontakta dig snart"
    },
    "Working!": {
        "message": "Det fungerar!"
    },
    "Working?": {
        "message": "Fungerar det?"
    },
    "Works on all sites but slower": {
        "message": "Fungerar på alla platser, men långsammare"
    },
    "YD": {
        "message": "Folkets Demokratiska republiken Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Du måste uppgradera till den senaste versionen av Opera för att använda Hola. Tryck <a>här för</a> att uppgradera."
    },
    "ZA": {
        "message": "Sydafrika"
    },
    "ZM": {
        "message": "Zambias"
    },
    "ZZ": {
        "message": "okänd eller ogiltig regionkod"
    },
    "app_desc": {
        "message": "Tillgång till webbplatser som blockeras i ditt land, företag eller skola med Hola! Hola är gratis och lätt att använda!"
    },
    "app_name": {
        "message": "Hola Bättre Internet"
    },
    "back to": {
        "message": "tillbaka till"
    },
    "changing...": {
        "message": "ändrar..."
    },
    "cool sites": {
        "message": "coola siter"
    },
    "current site": {
        "message": "aktuella platsen"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "dagar"
    },
    "even more...": {
        "message": "ännu fler..."
    },
    "mode": {
        "message": "läge"
    },
    "more options...": {
        "message": "fler alternativ ..."
    },
    "not working?": {
        "message": "Fungerar det inte?"
    },
    "not working? try another server": {
        "message": "Fungerar det inte? prova en annan server"
    },
    "on this page": {
        "message": "På denna sida"
    },
    "sites that are censored": {
        "message": "webbplatser som är censurerade"
    },
    "start": {
        "message": "Turn on to get started"
    },
    "working? remember": {
        "message": "Fungerar det? Kom ihåg"
    }
};
return E; });