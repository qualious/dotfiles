'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " per "
    },
    "$1 Buffering?": {
        "message": "$1 kaupimas?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola pasiekti $2\n\nSpauskite čia norėdami padaryti pats: $3\n\nJis įdiegia Hola, kuri leidžia man naršyti internete greičiau ir pasiekite $4$5"
    },
    "$1 VPN": {
        "message": "$1 VPT"
    },
    "$1 VPN Premium": {
        "message": "$1 VPT Premium"
    },
    "$1 from $2": {
        "message": "Ir $1 $2"
    },
    "$1 not found": {
        "message": "$1 rasti"
    },
    "$1 via Hola": {
        "message": "$1 per Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Kai kurios Hola funkcijos yra neprieinamos jūsų versijoje)"
    },
    "AC": {
        "message": "Dangun Žengimo sala"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Jungtiniai Arabų Emyratai"
    },
    "AF": {
        "message": "Afganistanas"
    },
    "AG": {
        "message": "Antigva ir Barbuda"
    },
    "AI": {
        "message": "Angilija"
    },
    "AL": {
        "message": "Albanija"
    },
    "AM": {
        "message": "Armėnija"
    },
    "AN": {
        "message": "Olandijos Antilai"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AS": {
        "message": "Amerikos Samoa"
    },
    "AT": {
        "message": "Austrija"
    },
    "AU": {
        "message": "Australija"
    },
    "AX": {
        "message": "Alandų salos"
    },
    "AZ": {
        "message": "Azerbaidžanas"
    },
    "About": {
        "message": "Apie"
    },
    "About Hola": {
        "message": "Apie Hola"
    },
    "Accelerator": {
        "message": "Greitintuvas"
    },
    "Accelerator is": {
        "message": "Accelerator"
    },
    "Access $1 - cool site!": {
        "message": "Prieiga $1 - kietas svetainę!"
    },
    "Access $1?": {
        "message": "Prisijunkite $1?"
    },
    "Access any site from any country, free": {
        "message": "Prisijunkite prie bet kokios svetainę iš bet kurios šalies, nemokamai"
    },
    "Access cool sites": {
        "message": "Prieigos cool svetaines"
    },
    "Access more sites": {
        "message": "Gauti daugiau svetainės"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Prieigos svetainės cenzūruojamas savo šalyje ir pagreitinti jūsų interneto su Hola - Nemokamai!"
    },
    "Accessing $1 with Hola": {
        "message": "Prieiga prie $1 su Hola"
    },
    "Account": {
        "message": "Sąskaita"
    },
    "Account type": {
        "message": "Paskyros tipas"
    },
    "Activating...": {
        "message": "Įjungus..."
    },
    "All ($1)": {
        "message": "Visi ($1)"
    },
    "Apply settings...": {
        "message": "Taikyti nustatymus..."
    },
    "Author site:": {
        "message": "Autoriaus svetainė:"
    },
    "Author:": {
        "message": "Autorius:"
    },
    "Awesome!": {
        "message": "Nuostabu!"
    },
    "BA": {
        "message": "Bosnija ir Hercegovina"
    },
    "BB": {
        "message": "Barbadosas"
    },
    "BD": {
        "message": "Bangladešas"
    },
    "BE": {
        "message": "Belgija"
    },
    "BF": {
        "message": "Burkina Fasas"
    },
    "BG": {
        "message": "Bulgarija"
    },
    "BH": {
        "message": "Bahreinas"
    },
    "BI": {
        "message": "Burundis"
    },
    "BJ": {
        "message": "Beninas"
    },
    "BL": {
        "message": "Švento Baltramiejaus sala"
    },
    "BM": {
        "message": "Bermudai"
    },
    "BN": {
        "message": "Brunėjus"
    },
    "BO": {
        "message": "Bolivija"
    },
    "BQ": {
        "message": "Britanijos Antarkties teritorija"
    },
    "BR": {
        "message": "Brazilija"
    },
    "BS": {
        "message": "Bahamos"
    },
    "BT": {
        "message": "Butanas"
    },
    "BV": {
        "message": "Bouvet sala"
    },
    "BW": {
        "message": "Botsvana"
    },
    "BY": {
        "message": "Baltarusija"
    },
    "BZ": {
        "message": "Belizas"
    },
    "Back to $1": {
        "message": "Grįžti į $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Būkite pirmieji gauti Hola iPhone / iPad - Registruotis dabar:"
    },
    "Browsing": {
        "message": "Naršymas"
    },
    "Buffering problems?": {
        "message": "Buferinė problemas?"
    },
    "Buffering?": {
        "message": "Buferinė?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosų salos"
    },
    "CD": {
        "message": "Kongo Demokratinė Respublika"
    },
    "CF": {
        "message": "Centrinės Afrikos Respublika"
    },
    "CG": {
        "message": "Kongas"
    },
    "CH": {
        "message": "Šveicarija"
    },
    "CI": {
        "message": "Dramblio Kaulo Krantas"
    },
    "CK": {
        "message": "Kuko salos"
    },
    "CL": {
        "message": "Čilė"
    },
    "CM": {
        "message": "Kamerūnas"
    },
    "CN": {
        "message": "Kinija"
    },
    "CO": {
        "message": "Kolumbija"
    },
    "CP": {
        "message": "Klipertonas sala"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Serbija ir Juodkalnija"
    },
    "CT": {
        "message": "Kantonas ir Enderbury salos"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Žaliasis Kyšulys"
    },
    "CX": {
        "message": "Kalėdų sala"
    },
    "CY": {
        "message": "Kipras"
    },
    "CZ": {
        "message": "Čekija"
    },
    "Changing country...": {
        "message": "Pakeitus šalį..."
    },
    "Check out Hola for $1!": {
        "message": "Check out Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola mobiliesiems prietaisams"
    },
    "Check your Internet connection": {
        "message": "Patikrinkite, ar turite interneto prieigą"
    },
    "Choose<br>Country": {
        "message": "Pasirinkti <br> Šalis"
    },
    "Configuring...": {
        "message": "Konfigūravimas..."
    },
    "Connecting...": {
        "message": "Jungiamasi..."
    },
    "Cool site!": {
        "message": "Cool svetainė!"
    },
    "Creative licenses": {
        "message": "Creative licencijos"
    },
    "DD": {
        "message": "Rytų Vokietija"
    },
    "DE": {
        "message": "Vokietija"
    },
    "DG": {
        "message": "Diego Garsija"
    },
    "DJ": {
        "message": "Džibutis"
    },
    "DK": {
        "message": "Danija"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominikos Respublika"
    },
    "DZ": {
        "message": "Alžyras"
    },
    "Delete": {
        "message": "Panaikinti"
    },
    "Deleted from my list": {
        "message": "Ištrinta iš mano sąrašo"
    },
    "Did it work?": {
        "message": "Ar jis veikia?"
    },
    "Did you experience any buffering?": {
        "message": "Ar jaučiate buferio?"
    },
    "Disliked it": {
        "message": "Neigiamai ją"
    },
    "Don't show again for $1 for one week": {
        "message": "Neberodyti $1 už vieną savaitę"
    },
    "Don't show again for any site for one week": {
        "message": "Neberodyti bet kokios svetainės už vieną savaitę"
    },
    "Downloading": {
        "message": "Parsisiuntimas"
    },
    "EA": {
        "message": "Seuta ir Melilija"
    },
    "EC": {
        "message": "Ekvadoras"
    },
    "EE": {
        "message": "Estija"
    },
    "EG": {
        "message": "Egiptas"
    },
    "EH": {
        "message": "Vakarų Sachara"
    },
    "ER": {
        "message": "Eritrėja"
    },
    "ES": {
        "message": "Ispanija"
    },
    "ET": {
        "message": "Etiopija"
    },
    "EU": {
        "message": "Europos Sąjunga"
    },
    "Enable": {
        "message": "Leisti"
    },
    "Enable Hola Accelerator": {
        "message": "Įjungti Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Mėgaukitės!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Mėgautis Hola Chrome?"
    },
    "Enter site to access": {
        "message": "Įveskite svetainė prieigos"
    },
    "Enter your email": {
        "message": "Įveskite savo elektroninio pašto adresą"
    },
    "FI": {
        "message": "Suomija"
    },
    "FJ": {
        "message": "Fidžis"
    },
    "FK": {
        "message": "Falklando salos"
    },
    "FM": {
        "message": "Mikronezija"
    },
    "FO": {
        "message": "Farerų salos"
    },
    "FQ": {
        "message": "Prancūzijos Pietų ir Antarkties sritys"
    },
    "FR": {
        "message": "Prancūzija"
    },
    "FX": {
        "message": "Metropolitan Prancūzija"
    },
    "Fast": {
        "message": "Greitai"
    },
    "Finding new peers...": {
        "message": "Ieškant naujų bendraamžių..."
    },
    "Finding peers...": {
        "message": "Ieškoti bendraamžiais..."
    },
    "Free": {
        "message": "Nemokamai"
    },
    "From": {
        "message": "Nuo"
    },
    "Full list": {
        "message": "Visas sąrašas"
    },
    "GA": {
        "message": "Gabonas"
    },
    "GB": {
        "message": "Didžioji Britanija"
    },
    "GE": {
        "message": "Gruzija"
    },
    "GF": {
        "message": "Prancūzijos Gviana"
    },
    "GG": {
        "message": "Guernsis"
    },
    "GH": {
        "message": "Gana"
    },
    "GI": {
        "message": "Gibraltaras"
    },
    "GL": {
        "message": "Grenlandija"
    },
    "GM": {
        "message": "Gambija"
    },
    "GN": {
        "message": "Gvinėja"
    },
    "GP": {
        "message": "Gvadelupė"
    },
    "GQ": {
        "message": "Pusiaujo Gvinėja"
    },
    "GR": {
        "message": "Graikija"
    },
    "GS": {
        "message": "Pietų Džordžija ir Pietų Sandvičo salos"
    },
    "GT": {
        "message": "Gvatemala"
    },
    "GU": {
        "message": "Guamas"
    },
    "GW": {
        "message": "Bisau Gvinėja"
    },
    "GY": {
        "message": "Gajana"
    },
    "Get 24/7 Unblocking": {
        "message": "Gaukite 24/7 Atblokavimą"
    },
    "Get Free Premium": {
        "message": "Gauk Nemokamai Premium"
    },
    "Get Hola Accelerator": {
        "message": "Gauk Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Gauk Hola grotuvas"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Gauk Hola Plus JT pertraukos, be reklamos paslaugos."
    },
    "Get Hola Premium": {
        "message": "Gauk Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Gauk Hola &quot;Android&quot;"
    },
    "Get Premium support": {
        "message": "Gauk Premium paramą"
    },
    "Get Unlimited Unblocking": {
        "message": "Gauti neribotą atblokavimo"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Gaukite prieigą prie cenzūruoti svetainių, pabandykite jį dabar: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Gaukite pagalbos iš inžinieriaus per skype:"
    },
    "Get the Fastest Servers": {
        "message": "Gaukite sparčiausias Serveriai"
    },
    "Go": {
        "message": "Eiti"
    },
    "Go Hola Premium": {
        "message": "Eiti Hola Premium"
    },
    "HK": {
        "message": "Kinijos S.A.R.Honkongas"
    },
    "HM": {
        "message": "Heardo ir McDonaldo Salų Sritis"
    },
    "HN": {
        "message": "Hondūras"
    },
    "HR": {
        "message": "Kroatija"
    },
    "HT": {
        "message": "Haitis"
    },
    "HU": {
        "message": "Vengrija"
    },
    "Hate it": {
        "message": "Nekenčiu jo"
    },
    "Help": {
        "message": "Padėti"
    },
    "Hey,\n\nI'm using": {
        "message": "Ei,\n\naš naudoju"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Sveiki,\n\naš pradėjau naudoti $1 ($2). Tai leidžia man naršyti internete greičiau ir pasiekite $3 mano šalyje."
    },
    "Hola Accelerator": {
        "message": "Hola Akceleratoriaus"
    },
    "Hola Media Player": {
        "message": "Hola Media Player &quot;"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola negali dirbti, nes kitas pratęsimas kontroliuoti savo proxy nustatymus."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola gali netinkamai veikti \"Windows 8\" režime. Prašome įjungti darbalaukio režimą. Spauskite <a> čia </a> kad gautumėte instrukcijas"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nėra dabar, bet mes su juo dirbti."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola yra išjungtas, spustelėkite, kad įjungtumėte"
    },
    "Hola site list": {
        "message": "Hola svetainių sąrašas"
    },
    "I can now access $1 from any country!": {
        "message": "Aš dabar gali pasiekti $1 iš bet kurios šalies!"
    },
    "I did not experience any buffering": {
        "message": "Aš nepatyrė jokios buferinė"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Aš tiesiog atvertas cenzūruojamos svetainę naudodami Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Aš naudoju $1 iki $2 peržiūrėti mano šalyje, ir naršyti greičiau!"
    },
    "IC": {
        "message": "Kanarų salos"
    },
    "ID": {
        "message": "Indonezija"
    },
    "IE": {
        "message": "Airija"
    },
    "IL": {
        "message": "Izraelis"
    },
    "IM": {
        "message": "Meino sala"
    },
    "IN": {
        "message": "Indija"
    },
    "IO": {
        "message": "Indijos vandenyno britų sritis"
    },
    "IQ": {
        "message": "Irakas"
    },
    "IR": {
        "message": "Iranas"
    },
    "IS": {
        "message": "Islandija"
    },
    "IT": {
        "message": "Italija"
    },
    "Improve translation": {
        "message": "Pagerinti vertimą"
    },
    "Initializing...": {
        "message": "Inicijuojama..."
    },
    "Install": {
        "message": "Įrengti"
    },
    "Install Accelerator": {
        "message": "Įdiekite Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Įdiegti nemokamą Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Įdiekite Hola variklis toliau naudoti Hola nemokamai"
    },
    "Instantly watch any torrent Video": {
        "message": "Iškart žiūrėti bet torrent video"
    },
    "Invite friends - free Premium.": {
        "message": "Pakviesti draugą - nemokamai Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Pakviesti draugą. Gauk Premium."
    },
    "It was okay": {
        "message": "Ji buvo gerai"
    },
    "JE": {
        "message": "Džersis"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Jordanija"
    },
    "JP": {
        "message": "Japonija"
    },
    "KE": {
        "message": "Kenija"
    },
    "KG": {
        "message": "Kirgiztanas"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KI": {
        "message": "Kiribatis"
    },
    "KM": {
        "message": "Komorai"
    },
    "KN": {
        "message": "Sent Kitsas ir Nevis"
    },
    "KP": {
        "message": "Šiaurės Korėja"
    },
    "KR": {
        "message": "Pietų Korėja"
    },
    "KW": {
        "message": "Kuveitas"
    },
    "KY": {
        "message": "Kaimanų salos"
    },
    "KZ": {
        "message": "Kazachstanas"
    },
    "LA": {
        "message": "Laosas"
    },
    "LB": {
        "message": "Libanas"
    },
    "LC": {
        "message": "Šventoji Liucija"
    },
    "LI": {
        "message": "Lichtenšteinas"
    },
    "LK": {
        "message": "Šri Lanka"
    },
    "LR": {
        "message": "Liberija"
    },
    "LS": {
        "message": "Lesotas"
    },
    "LT": {
        "message": "Lietuva"
    },
    "LU": {
        "message": "Liuksemburgas"
    },
    "LV": {
        "message": "Latvija"
    },
    "LY": {
        "message": "Libija"
    },
    "Language": {
        "message": "Kalba"
    },
    "Library": {
        "message": "Biblioteka"
    },
    "Like it": {
        "message": "Patinka jums tai"
    },
    "Loading": {
        "message": "Kraunama"
    },
    "Loading site...": {
        "message": "Kraunama"
    },
    "Log in": {
        "message": "Prisijungti"
    },
    "Log out": {
        "message": "Automatiškai išsijungti"
    },
    "Love Hola?": {
        "message": "Meilė Hola?"
    },
    "MA": {
        "message": "Marokas"
    },
    "MC": {
        "message": "Monakas"
    },
    "ME": {
        "message": "Juodkalnija"
    },
    "MF": {
        "message": "Saint-Martin"
    },
    "MG": {
        "message": "Madagaskaras"
    },
    "MH": {
        "message": "Maršalo Salos"
    },
    "MI": {
        "message": "Midway salos"
    },
    "MK": {
        "message": "Makedonija"
    },
    "ML": {
        "message": "Malis"
    },
    "MM": {
        "message": "Mianmaras"
    },
    "MN": {
        "message": "Mongolija"
    },
    "MO": {
        "message": "Macao"
    },
    "MP": {
        "message": "Marianos šiaurinės salos"
    },
    "MQ": {
        "message": "Martinika"
    },
    "MR": {
        "message": "Mauritanija"
    },
    "MS": {
        "message": "Montserratas"
    },
    "MU": {
        "message": "Mauricijus"
    },
    "MV": {
        "message": "Maldivai"
    },
    "MW": {
        "message": "Malavis"
    },
    "MX": {
        "message": "Meksika"
    },
    "MY": {
        "message": "Malaizija"
    },
    "MZ": {
        "message": "Mozambikas"
    },
    "Make your Internet better with $1": {
        "message": "Padarykite savo interneto geriau $1"
    },
    "Menu": {
        "message": "Meniu"
    },
    "Might not work on all sites": {
        "message": "Gali veikti ne visas svetaines"
    },
    "Mode": {
        "message": "Režimas"
    },
    "More countries": {
        "message": "Daugiau šalių"
    },
    "More sites...": {
        "message": "daugiau..."
    },
    "More...": {
        "message": "daugiau..."
    },
    "My Account": {
        "message": "Mano paskyra"
    },
    "My History": {
        "message": "Mano istorija"
    },
    "My Settings": {
        "message": "Mano nustatymai"
    },
    "My favorites": {
        "message": "Mano mėgstamiausi"
    },
    "NA": {
        "message": "Namibija"
    },
    "NC": {
        "message": "Naujoji Kaledonija"
    },
    "NE": {
        "message": "Nigeris"
    },
    "NF": {
        "message": "Norfolko sala"
    },
    "NG": {
        "message": "Nigerija"
    },
    "NI": {
        "message": "Nikaragva"
    },
    "NL": {
        "message": "Nyderlandai"
    },
    "NO": {
        "message": "Norvegija"
    },
    "NP": {
        "message": "Nepalas"
    },
    "NQ": {
        "message": "Dronning Maud Žemė"
    },
    "NT": {
        "message": "Neutralus Zona"
    },
    "NU": {
        "message": "Niue salos"
    },
    "NZ": {
        "message": "Naujoji Zelandija"
    },
    "Need Help?": {
        "message": "Reikia pagalbos?"
    },
    "Never ask me again": {
        "message": "Neklausti"
    },
    "Never be a peer": {
        "message": "Niekada tarpusavio"
    },
    "No": {
        "message": "Ne"
    },
    "No idle peers found.": {
        "message": "Nėra prastovos bendraamžiai nerasta."
    },
    "No recent videos found": {
        "message": "Nėra naujausių video nerasta"
    },
    "No saved videos found": {
        "message": "Nėra išsaugotų vaizdo įrašų nerasta"
    },
    "No title": {
        "message": "Nr pavadinimas"
    },
    "No videos found": {
        "message": "Vaizdo įrašų nerasta"
    },
    "No videos found on active page": {
        "message": "Vaizdo įrašų nerasta aktyvaus puslapyje"
    },
    "No, Thanks": {
        "message": "Ne, ačiū"
    },
    "No, fix it": {
        "message": "Ne, ją išspręsti"
    },
    "Not working?": {
        "message": "Neveikia?"
    },
    "Number of users that pressed not working": {
        "message": "Vartotojų skaičius, kurie paspaudė \"Neveikia\""
    },
    "Number of users that use this option": {
        "message": "Vartotojų skaičius, kurie naudoja šią parinktį,"
    },
    "OM": {
        "message": "Omanas"
    },
    "Off": {
        "message": "Išjungta"
    },
    "Oh, yes!": {
        "message": "O, taip!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Sena  Firefox versija. Paspauskite <a> čia </a>, kad atnaujintumėte."
    },
    "On": {
        "message": "Įjungta"
    },
    "Open Media Player": {
        "message": "Atviras Media Player &quot;"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Mūsų naują Mplayer netrukus!"
    },
    "PC": {
        "message": "Ramiojo vandenyno salos Trust Territory"
    },
    "PF": {
        "message": "Prancūzų Polinezija"
    },
    "PG": {
        "message": "Papua Naujoji Gvinėja"
    },
    "PH": {
        "message": "Filipinai"
    },
    "PK": {
        "message": "Pakistanas"
    },
    "PL": {
        "message": "Lenkija"
    },
    "PM": {
        "message": "Sen Pjeras ir Mikelonas"
    },
    "PN": {
        "message": "Pitkernas"
    },
    "PR": {
        "message": "Puerto Rikas"
    },
    "PS": {
        "message": "Palestinos teritorija"
    },
    "PT": {
        "message": "Portugalija"
    },
    "PU": {
        "message": "JAV Įvairios Ramiojo vandenyno salose"
    },
    "PY": {
        "message": "Paragvajus"
    },
    "PZ": {
        "message": "Panamos kanalo zona"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Prašome išjungti kitus <a>plėtinius</a> , kad jūs manote, gali kontroliuoti savo proxy nustatymus, pavyzdžiui, ad-blokatoriais, kitais VPN paslaugos, ir tt"
    },
    "Please enter a valid email address.": {
        "message": "Prašome įvesti galiojantį el.pašto adresą."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Įveskite interneto svetainės adresą, pavyzdžiui, facebook.com"
    },
    "Please help us get better": {
        "message": "Prašome padėti mums geriau"
    },
    "Popular in $1": {
        "message": "Populiariausia $1"
    },
    "Popular in the world": {
        "message": "Populiariausia pasaulyje"
    },
    "Popular sites": {
        "message": "Populiariausių svetainių"
    },
    "Premium": {
        "message": "Aukščiausios kokybės"
    },
    "QA": {
        "message": "Kataras"
    },
    "QO": {
        "message": "Žaliojo Kyšulio Okeanija"
    },
    "RE": {
        "message": "Reunionas"
    },
    "RO": {
        "message": "Rumunija"
    },
    "RS": {
        "message": "Serbija"
    },
    "RU": {
        "message": "Rusijos Federacija"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Įvertinkite mus"
    },
    "Recent Videos": {
        "message": "Naujausi įrašai"
    },
    "Reload": {
        "message": "Perkrauti"
    },
    "Reload Hola": {
        "message": "Perkrauti Hola"
    },
    "Remember server": {
        "message": "Prisiminti serverį"
    },
    "Report a problem": {
        "message": "Pranešti apie problemą"
    },
    "Retry safe mode": {
        "message": "Bandyti dar kartą saugų režimą"
    },
    "SA": {
        "message": "Saudo Arabija"
    },
    "SB": {
        "message": "Saliamono salos"
    },
    "SC": {
        "message": "Seišeliai"
    },
    "SD": {
        "message": "Sudanas"
    },
    "SE": {
        "message": "Švedija"
    },
    "SG": {
        "message": "Singapūras"
    },
    "SH": {
        "message": "Šventoji Elena"
    },
    "SI": {
        "message": "Slovėnija"
    },
    "SJ": {
        "message": "Svalbardo ir Jan Majen salos"
    },
    "SK": {
        "message": "Slovakija"
    },
    "SL": {
        "message": "Siera Leonė"
    },
    "SM": {
        "message": "San Marinas"
    },
    "SN": {
        "message": "Senegalas"
    },
    "SO": {
        "message": "Somalis"
    },
    "SR": {
        "message": "Surinamas"
    },
    "ST": {
        "message": "San Tomė ir Principė"
    },
    "SU": {
        "message": "Sąjunga Tarybų Socialistinių Respublikų"
    },
    "SV": {
        "message": "Salvadoras"
    },
    "SY": {
        "message": "Sirija"
    },
    "SZ": {
        "message": "Svazilendas"
    },
    "Safe": {
        "message": "Saugus"
    },
    "Safe mode": {
        "message": "Saugus rėžimas"
    },
    "Save": {
        "message": "Išsaugoti"
    },
    "Saved Videos": {
        "message": "Išsaugoti Vaizdo įrašai"
    },
    "Saved for later": {
        "message": "Išsaugota vėliau"
    },
    "Search video title": {
        "message": "Paieška Dainos pavadinimas"
    },
    "Select a Country": {
        "message": "Pasirinkite šalį"
    },
    "Select site to unblock": {
        "message": "Pasirinkite puslapį atblokuoti"
    },
    "Server saved!": {
        "message": "Serverio išsaugota!"
    },
    "Set safe mode for $1 $2": {
        "message": "Nustatykite Safe Mode $1 $2"
    },
    "Settings": {
        "message": "Nustatymai"
    },
    "Share": {
        "message": "Dalis"
    },
    "Share $1 on $2": {
        "message": "Dalytis $1 $2"
    },
    "Share $1 via $2": {
        "message": "Dalytis $1 per $2"
    },
    "Share with friends!": {
        "message": "Pasidalink su draugais!"
    },
    "Sign up": {
        "message": "Užsiregistruok"
    },
    "Solve buffering": {
        "message": "Išspręskite buferinė"
    },
    "Solve buffering problems with": {
        "message": "Išspręskite problemas buferio su"
    },
    "Solves it": {
        "message": "Sprendžia jį"
    },
    "Staff Picks": {
        "message": "Personalo Rekomenduojame"
    },
    "Start Hola": {
        "message": "pradėti"
    },
    "Starting...": {
        "message": "Pradedama ..."
    },
    "Stop Hola": {
        "message": "Sustabdyti Hola"
    },
    "Stopping peer routing...": {
        "message": "Stabdymo tarpusavio maršruto..."
    },
    "Stream": {
        "message": "Srautas"
    },
    "Stream Instantly": {
        "message": "Stream Iškart"
    },
    "Submit": {
        "message": "Pateikti"
    },
    "Support Hola": {
        "message": "Palaikymo Hola"
    },
    "TA": {
        "message": "Tristano da Cunha"
    },
    "TC": {
        "message": "Turkso ir Caicoso salos"
    },
    "TD": {
        "message": "Čadas"
    },
    "TF": {
        "message": "Prancūzijos Pietų sritys"
    },
    "TG": {
        "message": "Togas"
    },
    "TH": {
        "message": "Tailandas"
    },
    "TJ": {
        "message": "Tadžikistanas"
    },
    "TL": {
        "message": "Rytų Timoras"
    },
    "TM": {
        "message": "Turkmėnistanas"
    },
    "TN": {
        "message": "Tunisas"
    },
    "TR": {
        "message": "Turkija"
    },
    "TT": {
        "message": "Trinidadas ir Tobagas"
    },
    "TW": {
        "message": "Taivanas"
    },
    "TZ": {
        "message": "Tanzanija"
    },
    "Talk to us on $1": {
        "message": "Pakalbėkite su mumis $1"
    },
    "Tell friends about $1": {
        "message": "Papasakokite draugams apie $1"
    },
    "Testing connection...": {
        "message": "Testavimas ryšys..."
    },
    "Thank you!": {
        "message": "Ačiū!"
    },
    "There seems to be an error": {
        "message": "Atrodo, kad atsitiko klaida"
    },
    "Top popular sites": {
        "message": "Top populiarių svetainių"
    },
    "Translate to your language": {
        "message": "Versti į jūsų kalbą"
    },
    "Try again": {
        "message": "Bandykite dar kartą"
    },
    "Try another server": {
        "message": "Pabandykite kitą serverį"
    },
    "Try it": {
        "message": "Išbandykite ją"
    },
    "Try safe mode": {
        "message": "Pabandykite saugų režimą"
    },
    "Try to <span>reload</span>": {
        "message": "Pabandykite <span> perkrauti </span>"
    },
    "Trying another peer...": {
        "message": "Bando kitą peer..."
    },
    "Turn off Accelerator": {
        "message": "Išjunkite Accelerator"
    },
    "Turn off Hola": {
        "message": "Išjunkite Hola"
    },
    "Turn on Accelerator": {
        "message": "Įjunkite Accelerator"
    },
    "Turn on Hola": {
        "message": "Įjunkite Hola"
    },
    "Turn on to get started": {
        "message": "Įjunkite, jei norite pradėti"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "Jungtinių Valstijų mažosios aplinkinės salos"
    },
    "US": {
        "message": "Jungtinės Valstijos"
    },
    "UY": {
        "message": "Urugvajus"
    },
    "UZ": {
        "message": "Uzbekistanas"
    },
    "Unblocker is disabled": {
        "message": "Unblocker yra išjungtas"
    },
    "Update": {
        "message": "Atnaujinti"
    },
    "Upgrade": {
        "message": "Atnaujinti"
    },
    "Using": {
        "message": "Naudojant"
    },
    "Using Hola": {
        "message": "Naudojant Hola"
    },
    "VA": {
        "message": "Vatikanas"
    },
    "VC": {
        "message": "Šventasis Vincentas ir Grenadinai"
    },
    "VD": {
        "message": "Šiaurės Vietnamas"
    },
    "VE": {
        "message": "Venesuela"
    },
    "VG": {
        "message": "Didžiosios Britanijos Mergelių salos"
    },
    "VI": {
        "message": "Mergelių salos (JAV)"
    },
    "VN": {
        "message": "Vietnamas"
    },
    "VPN": {
        "message": "VPT"
    },
    "VPN Premium": {
        "message": "VPT Premium"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Labai sena Chrome versija, <a> atnaujinkite </a>, kad galėtumėte naudoti Hola"
    },
    "Video": {
        "message": "Vaizdo"
    },
    "Video stuck?": {
        "message": "Vaizdo įstrigo?"
    },
    "Videos available for instant streaming": {
        "message": "Vaizdo įrašai laisvus trumpąją transliacijos"
    },
    "WF": {
        "message": "Wallisas ir Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Norite gauti Hola kituose prietaisuose? (Xbox, PS, \"Apple TV\", \"iPhone\" ...). Spauskite čia"
    },
    "Want to know more?": {
        "message": "Norite sužinoti daugiau?"
    },
    "Watch Now": {
        "message": "Žiūrėti dabar"
    },
    "We found $1 videos": {
        "message": "Mes nustatėme, $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Mes susisieksime su Jumis"
    },
    "Working!": {
        "message": "Darbas!"
    },
    "Working?": {
        "message": "Veikia?"
    },
    "Works on all sites but slower": {
        "message": "Darbai ant visų svetainių, bet lėčiau"
    },
    "YD": {
        "message": "Liaudies Demokratinė Respublika Jemenas"
    },
    "YE": {
        "message": "Jemenas"
    },
    "YT": {
        "message": "Mayotte’as"
    },
    "Yes": {
        "message": "Taip"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Jums reikia atnaujinti į naujausią versiją operos naudoti Hola. Paspauskite <a>čia</a> , kad atnaujinti."
    },
    "ZA": {
        "message": "Pietų Afrika"
    },
    "ZM": {
        "message": "Zambija"
    },
    "ZW": {
        "message": "Zimbabvė"
    },
    "ZZ": {
        "message": "Nežinoma ar neteisinga sritis"
    },
    "app_desc": {
        "message": "Access svetainės blokavo savo šalies, įmonės ar mokyklą Hola! Hola yra nemokama ir paprasta naudoti!"
    },
    "app_name": {
        "message": "Hola geresnis internetas"
    },
    "back to": {
        "message": "atgal į"
    },
    "changing...": {
        "message": "keičiasi..."
    },
    "cool sites": {
        "message": "cool svetaines"
    },
    "current site": {
        "message": "Dabartinė svetainė"
    },
    "day": {
        "message": "diena"
    },
    "days": {
        "message": "dienų"
    },
    "even more...": {
        "message": "dar daugiau..."
    },
    "mode": {
        "message": "režimas"
    },
    "more options...": {
        "message": "daugiau galimybių..."
    },
    "not working?": {
        "message": "neveikia?"
    },
    "not working? try another server": {
        "message": "neveikia? pabandykite kitą serverį"
    },
    "on this page": {
        "message": "Šiame puslapyje"
    },
    "sites that are censored": {
        "message": "svetainių, kurios yra cenzūra"
    },
    "start": {
        "message": "pradėti"
    },
    "working? remember": {
        "message": "veikia? prisiminti"
    }
};
return E; });