'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "$1 Buffering?": {
        "message": "$1 Buferizācijas?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola piekļūt $2\n\nUzklikšķināt šeit, lai darīt to pašu: $3\n\nTā instalē Hola, kas ļauj man sērfot internetā ātrāk un piekļūt $4$5"
    },
    "$1 from $2": {
        "message": "$1 no $2"
    },
    "$1 not found": {
        "message": "$1 nav atrasts"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Dažas Hola funkcijas nav pieejama jūsu versija)"
    },
    "AC": {
        "message": "Debesbraukšanas sala"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Apvienotie Arābu Emirāti"
    },
    "AF": {
        "message": "Afganistāna"
    },
    "AG": {
        "message": "Antigva un Barbuda"
    },
    "AI": {
        "message": "Angilja"
    },
    "AL": {
        "message": "Albānija"
    },
    "AM": {
        "message": "Armēnija"
    },
    "AN": {
        "message": "Nīderlandes Antiļas"
    },
    "AQ": {
        "message": "Antarktika"
    },
    "AR": {
        "message": "Argentīna"
    },
    "AS": {
        "message": "Amerikāņu Samoa"
    },
    "AT": {
        "message": "Austrija"
    },
    "AU": {
        "message": "Austrālija"
    },
    "AX": {
        "message": "Olandes salas"
    },
    "AZ": {
        "message": "Azerbaidžāna"
    },
    "About": {
        "message": "Par"
    },
    "About Hola": {
        "message": "Par Hola"
    },
    "Accelerator": {
        "message": "Paātrinātājs"
    },
    "Accelerator is": {
        "message": "Accelerator ir"
    },
    "Access $1 - cool site!": {
        "message": "Access $1 - vēsā vietā!"
    },
    "Access $1?": {
        "message": "Piekļūt $1?"
    },
    "Access any site from any country, free": {
        "message": "Piekļūt jebkurā vietā, no jebkuras valsts, brīva"
    },
    "Access cool sites": {
        "message": "Piekļuves cool vietas"
    },
    "Access more sites": {
        "message": "Piekļuves vairāk vietas"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Piekļuves vietas censored savā valstī un paātrināt savu interneta ar Hola - bezmaksas!"
    },
    "Accessing $1 with Hola": {
        "message": "Piekļūšana $1 ar Hola"
    },
    "Account": {
        "message": "Konts"
    },
    "Account type": {
        "message": "Konta veids"
    },
    "Activating...": {
        "message": "Aktivizēšana..."
    },
    "All ($1)": {
        "message": "Viss ($1)"
    },
    "Apply settings...": {
        "message": "Piesakies iestatījumus ..."
    },
    "Author site:": {
        "message": "Autors vietne:"
    },
    "Author:": {
        "message": "Autors:"
    },
    "BA": {
        "message": "Bosnija un Hercegovina"
    },
    "BB": {
        "message": "Barbadosa"
    },
    "BD": {
        "message": "Bangladeša"
    },
    "BE": {
        "message": "Beļģija"
    },
    "BF": {
        "message": "Burkinafaso"
    },
    "BG": {
        "message": "Bulgārija"
    },
    "BH": {
        "message": "Bahreina"
    },
    "BJ": {
        "message": "Benina"
    },
    "BL": {
        "message": "Senbartelmī"
    },
    "BM": {
        "message": "Bermudu salas"
    },
    "BN": {
        "message": "Bruneja"
    },
    "BO": {
        "message": "Bolīvija"
    },
    "BQ": {
        "message": "Britu Antarktikas teritorija"
    },
    "BR": {
        "message": "Brazīlija"
    },
    "BS": {
        "message": "Bahamu salas"
    },
    "BT": {
        "message": "Butāna"
    },
    "BV": {
        "message": "Buvē sala"
    },
    "BW": {
        "message": "Botsvāna"
    },
    "BY": {
        "message": "Baltkrievija"
    },
    "BZ": {
        "message": "Beliza"
    },
    "Back to $1": {
        "message": "Atpakaļ $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Esi pirmais, lai saņemtu Hola iPhone / iPad - Reģistrējieties tūlīt:"
    },
    "Browsing": {
        "message": "Pārlūkošana"
    },
    "Buffering problems?": {
        "message": "Buffering problēmas?"
    },
    "Buffering?": {
        "message": "Buferizācijas?"
    },
    "CA": {
        "message": "Kanāda"
    },
    "CC": {
        "message": "Kokosu jeb Kīlinga salas"
    },
    "CD": {
        "message": "Kongo Demokrātiskā Republika"
    },
    "CF": {
        "message": "Centrālāfrikas Republika"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Šveice"
    },
    "CI": {
        "message": "Kotdivuāra"
    },
    "CK": {
        "message": "Kuka salas"
    },
    "CL": {
        "message": "Čīle"
    },
    "CM": {
        "message": "Kamerūna"
    },
    "CN": {
        "message": "Ķīna"
    },
    "CO": {
        "message": "Kolumbija"
    },
    "CP": {
        "message": "Klipertona sala"
    },
    "CR": {
        "message": "Kostarika"
    },
    "CS": {
        "message": "Serbija un Melnkalne"
    },
    "CT": {
        "message": "Canton un Enderberija salas"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kaboverde"
    },
    "CX": {
        "message": "Ziemsvētku sala"
    },
    "CY": {
        "message": "Kipra"
    },
    "CZ": {
        "message": "Čehija"
    },
    "Changing country...": {
        "message": "Mainot valsti ..."
    },
    "Check out Hola for $1!": {
        "message": "Pārbaudiet Hola par $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Pārbaudiet Hola mobilajām ierīcēm"
    },
    "Check your Internet connection": {
        "message": "Pārbaudiet, vai jūsu interneta"
    },
    "Choose<br>Country": {
        "message": "Izvēlēties <br> Valsts"
    },
    "Configuring...": {
        "message": "Konfigurēšana ..."
    },
    "Connecting...": {
        "message": "Savieno ..."
    },
    "Cool site!": {
        "message": "Vēsā vietā!"
    },
    "Creative licenses": {
        "message": "Creative licences"
    },
    "DD": {
        "message": "East Vācija"
    },
    "DE": {
        "message": "Vācija"
    },
    "DJ": {
        "message": "Džibutija"
    },
    "DK": {
        "message": "Dānija"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominikānas Republika"
    },
    "DZ": {
        "message": "Alžīrija"
    },
    "Delete": {
        "message": "Izdzēst"
    },
    "Deleted from my list": {
        "message": "Svītrots no mana saraksta"
    },
    "Did it work?": {
        "message": "Vai tas darbojas?"
    },
    "Did you experience any buffering?": {
        "message": "Vai jūtat buffering?"
    },
    "Disliked it": {
        "message": "Nepatika tas"
    },
    "Don't show again for $1 for one week": {
        "message": "Nerādīt atkal $1 par vienu nedēļu"
    },
    "Don't show again for any site for one week": {
        "message": "Nerādīt atkal jebkurā vietā uz vienu nedēļu"
    },
    "Downloading": {
        "message": "Lejupielāde"
    },
    "EA": {
        "message": "Ceuta un Melilla"
    },
    "EC": {
        "message": "Ekvadora"
    },
    "EE": {
        "message": "Igaunija"
    },
    "EG": {
        "message": "Ēģipte"
    },
    "EH": {
        "message": "Rietumsahāra"
    },
    "ER": {
        "message": "Eritreja"
    },
    "ES": {
        "message": "Spānija"
    },
    "ET": {
        "message": "Etiopija"
    },
    "EU": {
        "message": "Eiropas Savienība"
    },
    "Enable": {
        "message": "Dot iespēju"
    },
    "Enable Hola Accelerator": {
        "message": "Ļautu Hola Accelerator"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Bauda Hola Chrome?"
    },
    "Enter site to access": {
        "message": "Ievadiet vietni, lai piekļūtu"
    },
    "Enter your email": {
        "message": "Ievadiet savu e-pasta adresi"
    },
    "FI": {
        "message": "Somija"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Folklenda salas"
    },
    "FM": {
        "message": "Mikronēzijas Federatīvās Valstis"
    },
    "FO": {
        "message": "Farēru salas"
    },
    "FQ": {
        "message": "Franču Dienvidu un Antarktikas teritorijas"
    },
    "FR": {
        "message": "Francija"
    },
    "Fast": {
        "message": "Ātrs"
    },
    "Finding new peers...": {
        "message": "Atrast jaunus vienaudžiem ..."
    },
    "Finding peers...": {
        "message": "Meklējot vienaudžiem ..."
    },
    "Free": {
        "message": "Bezmaksas"
    },
    "From": {
        "message": "No"
    },
    "Full list": {
        "message": "Pilns saraksts"
    },
    "GA": {
        "message": "Gabona"
    },
    "GB": {
        "message": "Lielbritānija"
    },
    "GD": {
        "message": "Grenāda"
    },
    "GE": {
        "message": "Gruzija"
    },
    "GF": {
        "message": "Franču Gviāna"
    },
    "GG": {
        "message": "Gērnsija"
    },
    "GH": {
        "message": "Gana"
    },
    "GI": {
        "message": "Gibraltārs"
    },
    "GL": {
        "message": "Grenlande"
    },
    "GM": {
        "message": "Gambija"
    },
    "GN": {
        "message": "Gvineja"
    },
    "GP": {
        "message": "Gvadelupa"
    },
    "GQ": {
        "message": "Ekvatoriālā Gvineja"
    },
    "GR": {
        "message": "Grieķija"
    },
    "GS": {
        "message": "Dienviddžordžija un Dienvidsendviču salas"
    },
    "GT": {
        "message": "Gvatemala"
    },
    "GU": {
        "message": "Guama"
    },
    "GW": {
        "message": "Gvineja-Bisava"
    },
    "GY": {
        "message": "Gajāna"
    },
    "Get 24/7 Unblocking": {
        "message": "Saņemt 24/7 atbloķēšana"
    },
    "Get Hola Accelerator": {
        "message": "Saņemt Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Iegūt Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Saņemt Hola Plus un-pārtraukta, ad-bezmaksas pakalpojums."
    },
    "Get Hola Premium": {
        "message": "Saņemt Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Get Hola Android"
    },
    "Get Premium support": {
        "message": "Saņemt Premium atbalsts"
    },
    "Get Unlimited Unblocking": {
        "message": "Get Unlimited atbloķēšana"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Piekļūt ar necenzētu vietām, izmēģiniet to tagad: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Saņemt palīdzību no inženiera vairāk nekā Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Saņemt ātrākais Servers"
    },
    "Go": {
        "message": "Iet"
    },
    "Go Hola Premium": {
        "message": "Iet Hola Premium"
    },
    "HK": {
        "message": "Ķīnas īpašās pārvaldes apgabals Honkonga"
    },
    "HM": {
        "message": "Hērda un Makdonalda salas"
    },
    "HN": {
        "message": "Hondurasa"
    },
    "HR": {
        "message": "Horvātija"
    },
    "HU": {
        "message": "Ungārija"
    },
    "Hate it": {
        "message": "Ienīst to"
    },
    "Help": {
        "message": "Palīdzēt"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nes esmu, izmantojot"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nes sāku izmantot $1 ($2). Tas ļauj man sērfot internetā ātrāk un piekļūt $3 manā valstī."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola nevar strādāt, jo vēl viens pagarinājums ir kontrolēt jūsu starpniekservera iestatījumus."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nedarbojas labi Windows 8 režīmā. Lūdzu pārslēgties uz desktop režīmā. Noklikšķiniet <a> šeit </a> instrukcijas"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nav pieejama tieši tagad, bet mēs pie tā strādājam."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola ir izslēgts, noklikšķiniet uz līdz ieslēgtu"
    },
    "Hola site list": {
        "message": "Hola vietņu saraksts"
    },
    "I can now access $1 from any country!": {
        "message": "Es tagad var piekļūt $1 no jebkuras valsts!"
    },
    "I did not experience any buffering": {
        "message": "Man nav bijušas nekādas buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Es vienkārši piekļūt ar censored vietni, izmantojot Hola par $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Es esmu, izmantojot $1 līdz apskatītu $2 manā valstī, un sērfot ātrāk!"
    },
    "IC": {
        "message": "Kanāriju salas"
    },
    "ID": {
        "message": "Indonēzija"
    },
    "IE": {
        "message": "Īrija"
    },
    "IL": {
        "message": "Izraēla"
    },
    "IM": {
        "message": "Mena"
    },
    "IN": {
        "message": "Indija"
    },
    "IO": {
        "message": "Britu Indijas okeāna teritorija"
    },
    "IQ": {
        "message": "Irāka"
    },
    "IR": {
        "message": "Irāna"
    },
    "IS": {
        "message": "Īslande"
    },
    "IT": {
        "message": "Itālija"
    },
    "Improve translation": {
        "message": "Uzlabot tulkojumu"
    },
    "Initializing...": {
        "message": "Initializing ..."
    },
    "Install": {
        "message": "Instalēt"
    },
    "Install Accelerator": {
        "message": "Instalēt Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Instalēt bezmaksas Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instalējiet Hola Engine turpināt izmantot Hola par brīvu"
    },
    "Instantly watch any torrent Video": {
        "message": "Uzreiz skatīties jebkuru torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Uzaicināt draugus - bezmaksas Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Uzaicināt draugus. Get Premium."
    },
    "It was okay": {
        "message": "Tas bija labi"
    },
    "JE": {
        "message": "Džērsija"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Jordānija"
    },
    "JP": {
        "message": "Japāna"
    },
    "KE": {
        "message": "Kenija"
    },
    "KG": {
        "message": "Kirgīzija"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komoru salas"
    },
    "KN": {
        "message": "Sentkitsa un Nevisa"
    },
    "KP": {
        "message": "Ziemeļkoreja"
    },
    "KR": {
        "message": "Dienvidkoreja"
    },
    "KW": {
        "message": "Kuveita"
    },
    "KY": {
        "message": "Kaimanu salas"
    },
    "KZ": {
        "message": "Kazahstāna"
    },
    "LA": {
        "message": "Laosa"
    },
    "LB": {
        "message": "Libāna"
    },
    "LC": {
        "message": "Sentlūsija"
    },
    "LI": {
        "message": "Lihtenšteina"
    },
    "LK": {
        "message": "Šrilanka"
    },
    "LR": {
        "message": "Libērija"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Lietuva"
    },
    "LU": {
        "message": "Luksemburga"
    },
    "LV": {
        "message": "Latvija"
    },
    "LY": {
        "message": "Lībija"
    },
    "Language": {
        "message": "Valoda"
    },
    "Library": {
        "message": "Bibliotēka"
    },
    "Like it": {
        "message": "Patik"
    },
    "Loading": {
        "message": "Iekraušana"
    },
    "Loading site...": {
        "message": "Iekraušana"
    },
    "Log in": {
        "message": "Ieiet"
    },
    "Log out": {
        "message": "Iziet"
    },
    "Love Hola?": {
        "message": "Mīlestība Hola?"
    },
    "Love it": {
        "message": "Mīlu to"
    },
    "MA": {
        "message": "Maroka"
    },
    "MC": {
        "message": "Monako"
    },
    "ME": {
        "message": "Melnkalne"
    },
    "MF": {
        "message": "Senmartēna"
    },
    "MG": {
        "message": "Madagaskara"
    },
    "MH": {
        "message": "Māršala salas"
    },
    "MI": {
        "message": "Midveja salas"
    },
    "MK": {
        "message": "Maķedonija"
    },
    "MM": {
        "message": "Mjanma"
    },
    "MN": {
        "message": "Mongolija"
    },
    "MO": {
        "message": "Ķīnas īpašās pārvaldes apgabals Makao"
    },
    "MP": {
        "message": "Ziemeļu Marianas salas"
    },
    "MQ": {
        "message": "Martinika"
    },
    "MR": {
        "message": "Mauritānija"
    },
    "MS": {
        "message": "Montserrata"
    },
    "MU": {
        "message": "Maurīcija"
    },
    "MV": {
        "message": "Maldīvija"
    },
    "MW": {
        "message": "Malāvija"
    },
    "MX": {
        "message": "Meksika"
    },
    "MY": {
        "message": "Malaizija"
    },
    "MZ": {
        "message": "Mozambika"
    },
    "Make your Internet better with $1": {
        "message": "Padariet savu interneta labāk ar $1"
    },
    "Menu": {
        "message": "Ēdienkarte"
    },
    "Might not work on all sites": {
        "message": "Var nedarboties visās vietās"
    },
    "More countries": {
        "message": "Citas valstis"
    },
    "More sites...": {
        "message": "vairāk ..."
    },
    "More...": {
        "message": "vairāk ..."
    },
    "My Account": {
        "message": "Mans konts"
    },
    "My History": {
        "message": "Mana vēsture"
    },
    "My Settings": {
        "message": "Mani iestatījumi"
    },
    "My favorites": {
        "message": "Mani favorīti"
    },
    "NA": {
        "message": "Namībija"
    },
    "NC": {
        "message": "Jaunkaledonija"
    },
    "NE": {
        "message": "Nigēra"
    },
    "NF": {
        "message": "Norfolkas sala"
    },
    "NG": {
        "message": "Nigērija"
    },
    "NI": {
        "message": "Nikaragva"
    },
    "NL": {
        "message": "Nīderlande"
    },
    "NO": {
        "message": "Norvēģija"
    },
    "NP": {
        "message": "Nepāla"
    },
    "NZ": {
        "message": "Jaunzēlande"
    },
    "Need Help?": {
        "message": "Nepieciešama palīdzība?"
    },
    "Never ask me again": {
        "message": "Nekad nejautāt"
    },
    "Never be a peer": {
        "message": "Nekad nebūs peer"
    },
    "No": {
        "message": "Nē"
    },
    "No idle peers found.": {
        "message": "Neviens tukšgaitas vienaudžiem atrasts."
    },
    "No recent videos found": {
        "message": "Nav atrasts neviens nesen video"
    },
    "No saved videos found": {
        "message": "Nav atrasts neviens saglabāti video"
    },
    "No title": {
        "message": "Bez nosaukuma"
    },
    "No videos found": {
        "message": "Nav atrasts neviens video"
    },
    "No videos found on active page": {
        "message": "Nav atrasts par aktīvu lapā video"
    },
    "No, Thanks": {
        "message": "Nē, Paldies"
    },
    "No, fix it": {
        "message": "Nē, salabot"
    },
    "Not working?": {
        "message": "Nedarbojas?"
    },
    "Number of users that pressed not working": {
        "message": "Lietotāju skaits, kas nospiests nav darba"
    },
    "Number of users that use this option": {
        "message": "Lietotāju skaits, kas izmanto šo iespēju,"
    },
    "OM": {
        "message": "Omāna"
    },
    "Off": {
        "message": "No"
    },
    "Oh, yes!": {
        "message": "Ak, jā!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Vecā versija Firefox. Nospiediet <a> šeit </a>, lai uzlabotu."
    },
    "On": {
        "message": "Uz"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Mūsu Brand New Mplayer ir Drīzumā!"
    },
    "PC": {
        "message": "Klusā okeāna salu Trust Territory"
    },
    "PF": {
        "message": "Franču Polinēzija"
    },
    "PG": {
        "message": "Papua-Jaungvineja"
    },
    "PH": {
        "message": "Filipīnas"
    },
    "PK": {
        "message": "Pakistāna"
    },
    "PL": {
        "message": "Polija"
    },
    "PM": {
        "message": "Senpjēra un Mikelona"
    },
    "PN": {
        "message": "Pitkērna"
    },
    "PR": {
        "message": "Puertoriko"
    },
    "PS": {
        "message": "Palestīniešu pašpārvaldes teritorija"
    },
    "PT": {
        "message": "Portugāle"
    },
    "PU": {
        "message": "ASV Dažādi Klusā okeāna salas"
    },
    "PY": {
        "message": "Paragvaja"
    },
    "PZ": {
        "message": "Panamas kanāla zona"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Lūdzu atslēgt citus <a>paplašinājumus</a>, kas jūs domājat, ka varētu kontrolēt jūsu starpniekservera iestatījumus, piemēram, ad-blokatori, citu VPN pakalpojumi, uc"
    },
    "Please enter a valid email address.": {
        "message": "Lūdzu, ievadiet derīgu e-pasta adresi."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Lūdzu, ievadiet tīmekļa vietnes adresi, piemēram, facebook.com"
    },
    "Please help us get better": {
        "message": "Lūdzu, palīdziet mums iegūt labāku"
    },
    "Popular in $1": {
        "message": "Populāra $1"
    },
    "Popular in the world": {
        "message": "Populārs visā pasaulē"
    },
    "Popular sites": {
        "message": "Popular vietās"
    },
    "Premium": {
        "message": "Prēmija"
    },
    "QA": {
        "message": "Katara"
    },
    "QO": {
        "message": "Kaitīgu Okeānija"
    },
    "RE": {
        "message": "Reinjona"
    },
    "RO": {
        "message": "Rumānija"
    },
    "RS": {
        "message": "Serbija"
    },
    "RU": {
        "message": "Krievija"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Novērtē mūs"
    },
    "Recent Videos": {
        "message": "Nesenie Videos"
    },
    "Reload": {
        "message": "Pārlādēt"
    },
    "Reload Hola": {
        "message": "Pārlādēt Hola"
    },
    "Remember server": {
        "message": "Atcerieties serveri"
    },
    "Report a problem": {
        "message": "Ziņot par problēmu"
    },
    "Retry safe mode": {
        "message": "Atkārtot drošajā režīmā"
    },
    "SA": {
        "message": "Saūda Arābija"
    },
    "SB": {
        "message": "Zālamana salas"
    },
    "SC": {
        "message": "Seišeļu salas"
    },
    "SD": {
        "message": "Sudāna"
    },
    "SE": {
        "message": "Zviedrija"
    },
    "SG": {
        "message": "Singapūra"
    },
    "SH": {
        "message": "Sv. Helēnas sala"
    },
    "SI": {
        "message": "Slovēnija"
    },
    "SJ": {
        "message": "Svalbāra un Jana Majena sala"
    },
    "SK": {
        "message": "Slovākija"
    },
    "SL": {
        "message": "Sjerraleone"
    },
    "SM": {
        "message": "Sanmarīno"
    },
    "SN": {
        "message": "Senegāla"
    },
    "SO": {
        "message": "Somālija"
    },
    "SR": {
        "message": "Surinama"
    },
    "ST": {
        "message": "Santome un Prinsipi"
    },
    "SU": {
        "message": "Padomju Sociālistisko Republiku"
    },
    "SV": {
        "message": "Salvadora"
    },
    "SY": {
        "message": "Sīrija"
    },
    "SZ": {
        "message": "Svazilenda"
    },
    "Safe": {
        "message": "Drošs"
    },
    "Safe mode": {
        "message": "Drošais režīms"
    },
    "Save": {
        "message": "Saglabāt"
    },
    "Saved Videos": {
        "message": "Saglabātās Videos"
    },
    "Saved for later": {
        "message": "Saglabāti vēlāk"
    },
    "Search video title": {
        "message": "Meklēt video virsraksts"
    },
    "Select a Country": {
        "message": "Izvēlieties valsti"
    },
    "Select site to unblock": {
        "message": "Izvēlieties vietu, lai atbloķētu"
    },
    "Server saved!": {
        "message": "Serveris saglabāts!"
    },
    "Set safe mode for $1 $2": {
        "message": "Uzstādīt drošs režīms $1 $2"
    },
    "Settings": {
        "message": "Iestatījumi"
    },
    "Share": {
        "message": "Akcija"
    },
    "Share $1 on $2": {
        "message": "Dalīties $1 uz $2"
    },
    "Share $1 via $2": {
        "message": "Dalīties $1 via $2"
    },
    "Share with friends!": {
        "message": "Dalīties ar draugiem!"
    },
    "Sign up": {
        "message": "Piereģistrēties"
    },
    "Solve buffering": {
        "message": "Atrisināt buferizācijas"
    },
    "Solve buffering problems with": {
        "message": "Atrisināt buffering problēmas"
    },
    "Solves it": {
        "message": "Atrisina to"
    },
    "Staff Picks": {
        "message": "Personāla Picks"
    },
    "Start Hola": {
        "message": "sākums"
    },
    "Starting...": {
        "message": "Sākot ..."
    },
    "Stopping peer routing...": {
        "message": "Apstāšanās vienaudžu maršrutēšanu ..."
    },
    "Stream": {
        "message": "Straume"
    },
    "Stream Instantly": {
        "message": "Stream Uzreiz"
    },
    "Submit": {
        "message": "Iesniegt"
    },
    "Support Hola": {
        "message": "Atbalsts Hola"
    },
    "TC": {
        "message": "Tērksas un Kaikosas salas"
    },
    "TD": {
        "message": "Čada"
    },
    "TF": {
        "message": "Franču dienvidu teritorijas"
    },
    "TG": {
        "message": "Iet"
    },
    "TH": {
        "message": "Taizeme"
    },
    "TJ": {
        "message": "Tadžikistāna"
    },
    "TL": {
        "message": "Austrumtimora"
    },
    "TM": {
        "message": "Turkmenistāna"
    },
    "TN": {
        "message": "Tunisija"
    },
    "TR": {
        "message": "Turcija"
    },
    "TT": {
        "message": "Trinidāda un Tobāgo"
    },
    "TW": {
        "message": "Taivāna"
    },
    "TZ": {
        "message": "Tanzānija"
    },
    "Talk to us on $1": {
        "message": "Runājiet ar mums ar $1"
    },
    "Tell friends about $1": {
        "message": "Pastāstīt draugiem par $1"
    },
    "Testing connection...": {
        "message": "Testēšana savienojums ..."
    },
    "Thank you!": {
        "message": "Paldies!"
    },
    "There seems to be an error": {
        "message": "Šķiet, ka kļūda"
    },
    "Top popular sites": {
        "message": "Top populāras vietas"
    },
    "Translate to your language": {
        "message": "Tulkot uz savu valodu"
    },
    "Try again": {
        "message": "Mēģiniet vēlreiz"
    },
    "Try another server": {
        "message": "Izmēģināt citu serveri"
    },
    "Try it": {
        "message": "Izmēģiniet to"
    },
    "Try safe mode": {
        "message": "Izmēģiniet drošajā režīmā"
    },
    "Try to <span>reload</span>": {
        "message": "Mēģiniet <span> papildināšanas </span>"
    },
    "Trying another peer...": {
        "message": "Mēģinot citu vienaudžu ..."
    },
    "Turn off Accelerator": {
        "message": "Izslēgt Accelerator"
    },
    "Turn off Hola": {
        "message": "Izslēgt Hola"
    },
    "Turn on Accelerator": {
        "message": "Ieslēgt Accelerator"
    },
    "Turn on Hola": {
        "message": "Ieslēgt Hola"
    },
    "Turn on to get started": {
        "message": "Ieslēdziet, lai sāktu"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "ASV mazās aizjūras teritorijas"
    },
    "US": {
        "message": "Amerikas Savienotās Valstis"
    },
    "UY": {
        "message": "Urugvaja"
    },
    "UZ": {
        "message": "Uzbekistāna"
    },
    "Unblocker is disabled": {
        "message": "Unblocker ir atspējots"
    },
    "Update": {
        "message": "Modernizēt"
    },
    "Upgrade": {
        "message": "Modernizēt"
    },
    "Using": {
        "message": "Izmantojot"
    },
    "Using Hola": {
        "message": "Izmantojot Hola"
    },
    "VA": {
        "message": "Vatikāns"
    },
    "VC": {
        "message": "Sentvinsenta un Grenadīnas"
    },
    "VE": {
        "message": "Venecuēla"
    },
    "VG": {
        "message": "Britu Virdžīnu salas"
    },
    "VI": {
        "message": "Amerikāņu Virdžīnu salas"
    },
    "VN": {
        "message": "Vjetnama"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Ļoti veca versija Chrome, <a> atjauninājums </a> Chrome izmantot Hola"
    },
    "Video stuck?": {
        "message": "Video iestrēdzis?"
    },
    "Videos available for instant streaming": {
        "message": "Video pieejami tūlītējai straumēšanai"
    },
    "WF": {
        "message": "Volisa un Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vēlaties Hola uz citām ierīcēm? (Xbox, PS, Apple TV, iPhone ...). Noklikšķiniet šeit"
    },
    "Want to know more?": {
        "message": "Vēlaties uzzināt vairāk?"
    },
    "Watch Now": {
        "message": "Skatīties Tagad"
    },
    "We found $1 videos": {
        "message": "Esam atraduši $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Mums būs sazināties ar Jums tuvākajā laikā"
    },
    "Working!": {
        "message": "Strādā!"
    },
    "Working?": {
        "message": "Darba?"
    },
    "Works on all sites but slower": {
        "message": "Strādā uz visām vietām, bet lēnāk"
    },
    "YD": {
        "message": "Tautas Demokrātiskā Republika Jemenas"
    },
    "YE": {
        "message": "Jemena"
    },
    "YT": {
        "message": "Majota"
    },
    "Yes": {
        "message": "Jā"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Jums ir nepieciešams, lai uzlabotu ar jaunāko versiju Opera izmantot Hola. Spiediet <a>šeit</a> , lai uzlabotu."
    },
    "ZA": {
        "message": "Dienvidāfrika"
    },
    "ZM": {
        "message": "Zambija"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "nezināms vai nederīgs reģions"
    },
    "app_desc": {
        "message": "Piekļuvi tīmekļa vietnēm bloķētie jūsu valsts, uzņēmumu vai skolu ar Hola! Hola ir bezmaksas un viegli lietot!"
    },
    "app_name": {
        "message": "Hola Labāka interneta"
    },
    "back to": {
        "message": "atpakaļ līdz"
    },
    "changing...": {
        "message": "mainās ..."
    },
    "cool sites": {
        "message": "cool vietas"
    },
    "current site": {
        "message": "pašreizējā vietā"
    },
    "day": {
        "message": "diena"
    },
    "days": {
        "message": "dienas"
    },
    "even more...": {
        "message": "pat vairāk ..."
    },
    "more options...": {
        "message": "vairāk iespēju ..."
    },
    "not working?": {
        "message": "nedarbojas?"
    },
    "not working? try another server": {
        "message": "nedarbojas? izmēģināt citu serveri"
    },
    "on this page": {
        "message": "šajā lapā"
    },
    "sites that are censored": {
        "message": "vietnes, kas tiek cenzēti"
    },
    "start": {
        "message": "sākums"
    },
    "working? remember": {
        "message": "darba? atcerēties"
    }
};
return E; });