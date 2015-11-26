'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Buffering?": {
        "message": "$1 Bufferen?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola om toegang te verkry $2 Klik hier om dieselfde te doen: $3 Dit installeer Hola, wat laat my op die internet vinniger en toegang tot $4 $5"
    },
    "$1 VPN": {
        "message": "$1 Skynprivaatnetwerk"
    },
    "$1 VPN Premium": {
        "message": "$1 Skynprivaatnetwerk Premium"
    },
    "$1 from $2": {
        "message": "$1 van $2"
    },
    "$1 not found": {
        "message": "$1 nie gevind"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Sommige Hola funksies is nie beskikbaar op jou weergawe)"
    },
    "AC": {
        "message": "Ascension"
    },
    "AE": {
        "message": "Verenigde Arabiese Emirate"
    },
    "AF": {
        "message": "Afganistan"
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
        "message": "Nederlands-Antille"
    },
    "AQ": {
        "message": "Antarktika"
    },
    "AR": {
        "message": "Argentinië"
    },
    "AS": {
        "message": "Amerikaans Samoa"
    },
    "AT": {
        "message": "Oostenryk"
    },
    "AU": {
        "message": "Australië"
    },
    "AX": {
        "message": "Åland Eilande"
    },
    "AZ": {
        "message": "Aserbeidjan"
    },
    "About": {
        "message": "Oor"
    },
    "About Hola": {
        "message": "Oor Hola"
    },
    "Access $1 - cool site!": {
        "message": "Toegang $1 - koel site!"
    },
    "Access $1?": {
        "message": "Toegang tot $1?"
    },
    "Access any site from any country, free": {
        "message": "Toegang tot enige perseel van enige land, gratis"
    },
    "Access cool sites": {
        "message": "Toegang koel webwerwe"
    },
    "Access more sites": {
        "message": "Toegang meer plekke"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Toegang webwerwe gesensor in jou land en versnel jou Internet met Hola - Gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Toegang tot $1 met Hola"
    },
    "Account": {
        "message": "Rekening"
    },
    "Account type": {
        "message": "Tipe Rekening"
    },
    "Activating...": {
        "message": "Aktiveer..."
    },
    "All ($1)": {
        "message": "Alle ($1)"
    },
    "Apply settings...": {
        "message": "Pas instellings ..."
    },
    "Author site:": {
        "message": "Skrywer webwerf:"
    },
    "Author:": {
        "message": "Skrywer:"
    },
    "BA": {
        "message": "Bosnië en Herzegowina"
    },
    "BD": {
        "message": "Bangladesj"
    },
    "BE": {
        "message": "België"
    },
    "BF": {
        "message": "Boerkina Fasso"
    },
    "BG": {
        "message": "Bulgarye"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BN": {
        "message": "Broenei"
    },
    "BO": {
        "message": "Bolivië"
    },
    "BQ": {
        "message": "Britse Antarktiese Gebied"
    },
    "BR": {
        "message": "Brasilië"
    },
    "BT": {
        "message": "Bhoetan"
    },
    "BY": {
        "message": "Wit-Rusland"
    },
    "Back to $1": {
        "message": "Terug na $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Wees die eerste Hola te kry vir die iPhone/iPad - Register nou:"
    },
    "Browsing": {
        "message": "Navigeer"
    },
    "Buffering problems?": {
        "message": "Buffering probleme?"
    },
    "Buffering?": {
        "message": "Buffer?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Cocos [Keeling] eilande"
    },
    "CD": {
        "message": "Kongo - Kinshasa"
    },
    "CF": {
        "message": "Sentraal-Afrikaanse Republiek"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Switserland"
    },
    "CI": {
        "message": "Ivoorkus"
    },
    "CK": {
        "message": "Cook Eilande"
    },
    "CL": {
        "message": "Chili"
    },
    "CM": {
        "message": "Kameroen"
    },
    "CN": {
        "message": "Sjina"
    },
    "CP": {
        "message": "Clipperton Island"
    },
    "CS": {
        "message": "Serwië en Montenegro"
    },
    "CT": {
        "message": "Canton en Enderbury Eilande"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kaap Verde"
    },
    "CY": {
        "message": "Ciprus"
    },
    "CZ": {
        "message": "Tjeggiese Republiek"
    },
    "Changing country...": {
        "message": "Veranderende land ..."
    },
    "Check out Hola for $1!": {
        "message": "Check uit Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check uit Hola vir mobiele toestelle"
    },
    "Check your Internet connection": {
        "message": "Verifieer jy Internet"
    },
    "Choose<br>Country": {
        "message": "Kies<br>Land"
    },
    "Configuring...": {
        "message": "Die instel ..."
    },
    "Connecting...": {
        "message": "Connecting ..."
    },
    "Creative licenses": {
        "message": "Creative lisensies"
    },
    "DD": {
        "message": "Oos-Duitsland"
    },
    "DE": {
        "message": "Duitsland"
    },
    "DJ": {
        "message": "Djiboeti"
    },
    "DK": {
        "message": "Denemarke"
    },
    "DO": {
        "message": "Dominikaanse Republiek"
    },
    "DZ": {
        "message": "Algerië"
    },
    "Delete": {
        "message": "Verwyder"
    },
    "Deleted from my list": {
        "message": "Verwyder uit my lys"
    },
    "Did it work?": {
        "message": "Het dit werk?"
    },
    "Did you experience any buffering?": {
        "message": "Het jy enige buffer ervaar?"
    },
    "Disliked it": {
        "message": "Afkerig"
    },
    "Don't show again for $1 for one week": {
        "message": "Moenie weer vir $1 vir een week wys"
    },
    "Don't show again for any site for one week": {
        "message": "Moenie weer vir enige site vir 'n week wys"
    },
    "Downloading": {
        "message": "Laai"
    },
    "EA": {
        "message": "Ceuta en Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EG": {
        "message": "Egipte"
    },
    "EH": {
        "message": "Wes-Sahara"
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
        "message": "In staat stel om"
    },
    "Enable Hola Accelerator": {
        "message": "In staat stel om Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Geniet dit!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Geniet Hola vir Chrome?"
    },
    "Enter site to access": {
        "message": "Tik webwerf te toegang"
    },
    "Enter your email": {
        "message": "Tik jou epos"
    },
    "FJ": {
        "message": "Fidji"
    },
    "FK": {
        "message": "Falklandeilande"
    },
    "FM": {
        "message": "Mikronesië"
    },
    "FO": {
        "message": "Faroëreilande"
    },
    "FQ": {
        "message": "Franse Suidelike en Antarktiese Gebiede"
    },
    "FR": {
        "message": "Frankryk"
    },
    "Finding new peers...": {
        "message": "Vind van nuwe maats..."
    },
    "Finding peers...": {
        "message": "Dit vind maats..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Van"
    },
    "Full list": {
        "message": "Volledige lys"
    },
    "GA": {
        "message": "Gaboen"
    },
    "GB": {
        "message": "Groot-Brittanje"
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
    "GM": {
        "message": "Gambië"
    },
    "GN": {
        "message": "Guinee"
    },
    "GQ": {
        "message": "Ekwatoriaal-Guinee"
    },
    "GR": {
        "message": "Griekeland"
    },
    "GS": {
        "message": "Suid-Georgië en die Suid-Sandwich Eilande"
    },
    "GW": {
        "message": "Guinee-Bissau"
    },
    "Get 24/7 Unblocking": {
        "message": "Kry 24/7 die gang"
    },
    "Get Free Premium": {
        "message": "Kry Gratis Premium"
    },
    "Get Hola Accelerator": {
        "message": "Kry Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Kry Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Kry Hola Plus vir die VN-onderbreek word, advertensie-gratis diens."
    },
    "Get Hola Premium": {
        "message": "Kry Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Kry Hola vir Android"
    },
    "Get Premium support": {
        "message": "Kry Premium ondersteuning"
    },
    "Get Unlimited Unblocking": {
        "message": "Kry Unlimited die gang"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Kry toegang tot gesensor webwerwe, probeer dit nou: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Kry hulp van ingenieur oor Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Kry die vinnigste Servers"
    },
    "Go": {
        "message": "Gaan"
    },
    "Go Hola Premium": {
        "message": "Gaan Hola Premium"
    },
    "HK": {
        "message": "Hongkong"
    },
    "HM": {
        "message": "Gehoor Island en McDonald Eilande"
    },
    "HR": {
        "message": "Kroasië"
    },
    "HT": {
        "message": "Haïti"
    },
    "HU": {
        "message": "Hongarye"
    },
    "Hate it": {
        "message": "Haat dit"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey, ek is met behulp"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi, Ek het begin met $1 ($2). Dit laat my op die internet vinniger en toegang $3 in my land."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola kan nie werk nie, want 'n ander uitbreiding jou volmag instellings is die beheer."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nie goed werk nie in Windows 8 af. Skakel asseblief aan lessenaar af. Klik <a>hier</a> vir instruksies"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola is nie nou beskikbaar nie, maar ons is besig om dit."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola af is, kliek om te draai op"
    },
    "Hola site list": {
        "message": "Ontstopper webwerf lys"
    },
    "I can now access $1 from any country!": {
        "message": "Ek kan nou toegang tot $1 van enige land!"
    },
    "I did not experience any buffering": {
        "message": "Ek het nie 'n buffer ervaar"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ek het net toegang tot 'n gesensor werf met behulp van Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ek gebruik $1 $2 te sien in my land, en blaai vinniger!"
    },
    "IC": {
        "message": "Kanariese Eilande"
    },
    "ID": {
        "message": "Indonesië"
    },
    "IE": {
        "message": "Ierland"
    },
    "IN": {
        "message": "Indië"
    },
    "IO": {
        "message": "Britse Indiese Oseaan Gebied"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Ysland"
    },
    "IT": {
        "message": "Italië"
    },
    "Improve translation": {
        "message": "Verbeter vertaling"
    },
    "Initializing...": {
        "message": "Inisialiseer ..."
    },
    "Install": {
        "message": "Installeer"
    },
    "Install Accelerator": {
        "message": "Installeer Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Installeer Free Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installeer Hola Engine om voort te gaan met behulp van Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Onmiddellik kyk enige torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Nooi vriende - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Nooi vriende. Kry Premium."
    },
    "It was okay": {
        "message": "Dit was okay"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Jordanië"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgisië"
    },
    "KH": {
        "message": "Kambodja"
    },
    "KM": {
        "message": "Comore"
    },
    "KN": {
        "message": "Saint Kitts en Nevis"
    },
    "KP": {
        "message": "Noord-Korea"
    },
    "KR": {
        "message": "Suid-Korea"
    },
    "KW": {
        "message": "Koeweit"
    },
    "KY": {
        "message": "Kaaimanseilande"
    },
    "KZ": {
        "message": "Kasakstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LR": {
        "message": "Liberië"
    },
    "LT": {
        "message": "Litaue"
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
        "message": "Biblioteek"
    },
    "Like it": {
        "message": "Hou daarvan"
    },
    "Loading": {
        "message": "Laai"
    },
    "Loading site...": {
        "message": "Laai"
    },
    "Log in": {
        "message": "Teken in"
    },
    "Log out": {
        "message": "Teken uit"
    },
    "Love Hola?": {
        "message": "Lief Hola?"
    },
    "Love it": {
        "message": "Hou daarvan"
    },
    "MA": {
        "message": "Marokko"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshall-eilande"
    },
    "MI": {
        "message": "Midway Eilande"
    },
    "MK": {
        "message": "Macedonië"
    },
    "MM": {
        "message": "Myanmar [Birma]"
    },
    "MN": {
        "message": "Mongolië"
    },
    "MO": {
        "message": "Macao"
    },
    "MP": {
        "message": "Noord Mariana Eilande"
    },
    "MR": {
        "message": "Mouritanië"
    },
    "MV": {
        "message": "Maldive"
    },
    "MX": {
        "message": "Meksiko"
    },
    "MY": {
        "message": "Maleisië"
    },
    "MZ": {
        "message": "Mosambiek"
    },
    "Make your Internet better with $1": {
        "message": "Maak jou Internet beter met $1"
    },
    "Menu": {
        "message": "Spyskaart"
    },
    "Might not work on all sites": {
        "message": "Kan nie werk nie op alle terreine"
    },
    "Mode": {
        "message": "Af"
    },
    "More countries": {
        "message": "Meer lande"
    },
    "More sites...": {
        "message": "Meer..."
    },
    "More...": {
        "message": "Meer..."
    },
    "My Account": {
        "message": "My rekening"
    },
    "My History": {
        "message": "My Geskiedenis"
    },
    "My Settings": {
        "message": "My voorkeure"
    },
    "My favorites": {
        "message": "My gunstelinge"
    },
    "NA": {
        "message": "Namibië"
    },
    "NC": {
        "message": "Nieu-Kaledonië"
    },
    "NG": {
        "message": "Nigerië"
    },
    "NL": {
        "message": "Nederland"
    },
    "NO": {
        "message": "Noorweë"
    },
    "NR": {
        "message": "Naoeroe"
    },
    "NZ": {
        "message": "Nieu-Seeland"
    },
    "Need Help?": {
        "message": "Hulp nodig?"
    },
    "Never ask me again": {
        "message": "My nooit weer vra"
    },
    "Never be a peer": {
        "message": "Nooit 'n peer wees"
    },
    "No": {
        "message": "Geen"
    },
    "No idle peers found.": {
        "message": "Geen idle eweknieë gevind."
    },
    "No recent videos found": {
        "message": "Geen onlangse video&#39;s gevind"
    },
    "No saved videos found": {
        "message": "Geen gered videos gevind"
    },
    "No title": {
        "message": "Geen titel"
    },
    "No videos found": {
        "message": "Geen video's gevind"
    },
    "No videos found on active page": {
        "message": "Geen video's gevind op aktiewe bladsy"
    },
    "No, Thanks": {
        "message": "Nee, dankie"
    },
    "No, fix it": {
        "message": "Nee, los dit"
    },
    "Not working?": {
        "message": "Nie werk nie?"
    },
    "Number of users that pressed not working": {
        "message": "Aantal gebruikers wat gedruk nie werk nie"
    },
    "Number of users that use this option": {
        "message": "Aantal gebruikers is wat hierdie opsie"
    },
    "Off": {
        "message": "Af"
    },
    "Oh, yes!": {
        "message": "O, ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Ou weergawe van Firefox. Press <a>hier</a> op te gradeer."
    },
    "On": {
        "message": "Op"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Ons Brand New Mplayer is Coming Soon!"
    },
    "PG": {
        "message": "Papoea Nieu-Guinee"
    },
    "PH": {
        "message": "Filippyne"
    },
    "PL": {
        "message": "Pole"
    },
    "PM": {
        "message": "Saint-Pierre en Miquelon"
    },
    "PS": {
        "message": "Palestynse gebiede"
    },
    "PU": {
        "message": "Amerikaanse Allerlei Pacific Islands"
    },
    "PZ": {
        "message": "Panamakanaal Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Skakel ander <a>uitbreidings</a> wat jy dink jou volmag instellings soos die advertensie-blokkers, ander Skynprivaatnetwerk dienste, ens kan beheer."
    },
    "Please enter a valid email address.": {
        "message": "Voer asseblief 'n geldige e-posadres."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Voer 'n webwerf adres, soos facebook.com"
    },
    "Please help us get better": {
        "message": "Help ons asseblief om beter"
    },
    "Popular in $1": {
        "message": "Gewild in $1"
    },
    "Popular in the world": {
        "message": "Gewild in die wêreld"
    },
    "Popular sites": {
        "message": "Gewilde plekke"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Afgeleë Oseanië"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Roemenië"
    },
    "RS": {
        "message": "Serwië"
    },
    "RU": {
        "message": "Rusland"
    },
    "Rate us": {
        "message": "Gradeer ons"
    },
    "Recent Videos": {
        "message": "Onlangse video's"
    },
    "Reload": {
        "message": "Herlaai"
    },
    "Reload Hola": {
        "message": "Herlaai Hola"
    },
    "Remember server": {
        "message": "Onthou bediener"
    },
    "Report a problem": {
        "message": "Rapporteer 'n probleem"
    },
    "Retry safe mode": {
        "message": "Weer veilige modus"
    },
    "SA": {
        "message": "Saoedi-Arabië"
    },
    "SB": {
        "message": "Solomon Eilande"
    },
    "SC": {
        "message": "Seychelle"
    },
    "SD": {
        "message": "Soedan"
    },
    "SE": {
        "message": "Swede"
    },
    "SG": {
        "message": "Singapoer"
    },
    "SI": {
        "message": "Slowenië"
    },
    "SJ": {
        "message": "Svalbard en Jan Mayen"
    },
    "SK": {
        "message": "Slowakye"
    },
    "SO": {
        "message": "Somalië"
    },
    "ST": {
        "message": "Sao Tome en Principe"
    },
    "SU": {
        "message": "Unie van Sowjet Sosialistiese Republieke"
    },
    "SV": {
        "message": "Salvador"
    },
    "SY": {
        "message": "Sirië"
    },
    "Safe": {
        "message": "Veilige"
    },
    "Safe mode": {
        "message": "Veilige modus"
    },
    "Saved Videos": {
        "message": "Gered Videos"
    },
    "Saved for later": {
        "message": "Gespaar vir later"
    },
    "Search video title": {
        "message": "Soek video titel"
    },
    "Select a Country": {
        "message": "Kies 'n Land"
    },
    "Select site to unblock": {
        "message": "Kies webwerf te blokkeer"
    },
    "Server saved!": {
        "message": "Bediener gestoor is nie!"
    },
    "Set safe mode for $1 $2": {
        "message": "Stel die veilige modus $1 $2"
    },
    "Settings": {
        "message": "Instellings"
    },
    "Share": {
        "message": "Deel"
    },
    "Share $1 on $2": {
        "message": "Deel $1 by $2"
    },
    "Share $1 via $2": {
        "message": "Deel $1 via $2"
    },
    "Share with friends!": {
        "message": "Deel met vriende!"
    },
    "Sign up": {
        "message": "Sluit aan"
    },
    "Solve buffering": {
        "message": "Los buffer"
    },
    "Solve buffering problems with": {
        "message": "Los buffer probleme met"
    },
    "Solves it": {
        "message": "Los dit"
    },
    "Staff Picks": {
        "message": "Personeel Picks"
    },
    "Start Hola": {
        "message": "begin"
    },
    "Starting...": {
        "message": "Begin ..."
    },
    "Stopping peer routing...": {
        "message": "Stop peer routing ..."
    },
    "Stream": {
        "message": "Stroom"
    },
    "Stream Instantly": {
        "message": "Stroom Onmiddellik"
    },
    "Submit": {
        "message": "Stuur"
    },
    "Support Hola": {
        "message": "Ondersteuning Hola"
    },
    "TC": {
        "message": "Turks en Caicos Eilande"
    },
    "TD": {
        "message": "Tsjaad"
    },
    "TF": {
        "message": "Franse Suidelike Gebiede"
    },
    "TJ": {
        "message": "Tadjikistan"
    },
    "TL": {
        "message": "Oos-Timor"
    },
    "TM": {
        "message": "Turkmenië"
    },
    "TN": {
        "message": "Tunisië"
    },
    "TR": {
        "message": "Turkye"
    },
    "TT": {
        "message": "Trinidad en Tobago"
    },
    "TZ": {
        "message": "Tanzanië"
    },
    "Talk to us on $1": {
        "message": "Praat met ons op $1"
    },
    "Tell friends about $1": {
        "message": "Vertel vriende sowat $1"
    },
    "Testing connection...": {
        "message": "Toets verbinding ..."
    },
    "Thank you!": {
        "message": "Dankie!"
    },
    "There seems to be an error": {
        "message": "Daar blyk 'n probleem te wees"
    },
    "Top popular sites": {
        "message": "Top gewilde plekke"
    },
    "Translate to your language": {
        "message": "Vertaal na jou taal"
    },
    "Try again": {
        "message": "Probeer weer"
    },
    "Try another server": {
        "message": "Probeer 'n ander bediener"
    },
    "Try it": {
        "message": "Probeer dit"
    },
    "Try safe mode": {
        "message": "Probeer veilige modus"
    },
    "Try to <span>reload</span>": {
        "message": "Probeer om <span> herlaai </span>"
    },
    "Trying another peer...": {
        "message": "Probeer om 'n ander peer ..."
    },
    "Turn off Accelerator": {
        "message": "Skakel Accelerator"
    },
    "Turn off Hola": {
        "message": "Skakel Hola"
    },
    "Turn on Accelerator": {
        "message": "Skakel Accelerator"
    },
    "Turn on Hola": {
        "message": "Draai op Hola"
    },
    "Turn on to get started": {
        "message": "Draai op om te begin"
    },
    "UA": {
        "message": "Oekraine"
    },
    "UM": {
        "message": "Mindere Afliggende Eilande"
    },
    "US": {
        "message": "Verenigde State van Amerika"
    },
    "UZ": {
        "message": "Oesbekistan"
    },
    "Unblocker": {
        "message": "Ontstopper"
    },
    "Unblocker is disabled": {
        "message": "Ontstopper is gedeaktiveer"
    },
    "Unblocker?": {
        "message": "Ontstopper?"
    },
    "Update": {
        "message": "Werk"
    },
    "Upgrade": {
        "message": "Werk"
    },
    "Using": {
        "message": "Die gebruik van"
    },
    "Using Hola": {
        "message": "Die gebruik van Hola"
    },
    "VA": {
        "message": "Vatikaan"
    },
    "VC": {
        "message": "Saint Vincent en die Grenadine"
    },
    "VD": {
        "message": "Noord-Viëtnam"
    },
    "VI": {
        "message": "Amerikaanse Maagde-eilande"
    },
    "VN": {
        "message": "Viëtnam"
    },
    "VPN": {
        "message": "Skynprivaatnetwerk"
    },
    "VPN Premium": {
        "message": "Skynprivaatnetwerk Premium"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Baie ou weergawe van Chrome <a>by</a> Chrome Hola te gebruik"
    },
    "Video stuck?": {
        "message": "Video vas?"
    },
    "Videos available for instant streaming": {
        "message": "Video's beskikbaar vir direkte streaming"
    },
    "WF": {
        "message": "Wallis en Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Wil Hola op ander toestelle? (Xbox, PS, Apple TV, iPhone ...). Klik hier"
    },
    "Want to know more?": {
        "message": "Wil jy meer weet?"
    },
    "Watch Now": {
        "message": "Nou kyk"
    },
    "We found $1 videos": {
        "message": "Ons het gevind dat $1 video&#39;s"
    },
    "We will be in touch with you soon": {
        "message": "Ons sal met u in aanraking binnekort"
    },
    "Working!": {
        "message": "Werk!"
    },
    "Working?": {
        "message": "Werk?"
    },
    "Works on all sites but slower": {
        "message": "Werk op alle terreine, maar stadiger"
    },
    "YD": {
        "message": "Mense se Demokratiese Republiek van Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Jy moet opgradeer na die jongste weergawe van Opera Hola te gebruik. Druk <a>hier</a> op te gradeer."
    },
    "ZA": {
        "message": "Suid-Afrika"
    },
    "ZM": {
        "message": "Zambië"
    },
    "ZZ": {
        "message": "Onbekende of Ongeldige Streek"
    },
    "app_desc": {
        "message": "Toegang webtuistes geblokkeer in jou land, maatskappy of skool met Hola! Hola is gratis en maklik om te gebruik!"
    },
    "app_name": {
        "message": "Hola Beter Internet"
    },
    "back to": {
        "message": "terug na"
    },
    "changing...": {
        "message": "verander ..."
    },
    "cool sites": {
        "message": "koel webwerwe"
    },
    "current site": {
        "message": "huidige site"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "dae"
    },
    "even more...": {
        "message": "selfs meer ..."
    },
    "mode": {
        "message": "wyse"
    },
    "more options...": {
        "message": "meer opsies..."
    },
    "not working?": {
        "message": "nie werk nie?"
    },
    "not working? try another server": {
        "message": "nie werk nie? Probeer 'n ander bediener"
    },
    "on this page": {
        "message": "op hierdie bladsy"
    },
    "sites that are censored": {
        "message": "webwerwe wat gesensor word"
    },
    "start": {
        "message": "begin"
    },
    "working? remember": {
        "message": "werk? onthou"
    }
};
return E; });