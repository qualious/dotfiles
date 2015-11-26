'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " permezz "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola jaċċessaw $2\n\nIkklikkja hawn biex jagħmlu l-istess: $3\n\nHija jistalla Hola, li tikri me tisserfja l-Internet aktar mgħaġġel u aċċess $4$5"
    },
    "$1 from $2": {
        "message": "$1 minn $2"
    },
    "$1 not found": {
        "message": "$1 ma sabet"
    },
    "$1 via Hola": {
        "message": "$1 permezz Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Xi karatteristiċi hola mhumiex disponibbli fuq il-verżjoni tiegħek)"
    },
    "AC": {
        "message": "Gżira Ascension"
    },
    "AE": {
        "message": "Emirati Għarab Maqgħuda"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigwa u Barbuda"
    },
    "AI": {
        "message": "Angwilla"
    },
    "AL": {
        "message": "Albanija"
    },
    "AM": {
        "message": "Armenja"
    },
    "AN": {
        "message": "Antilles Olandiżi"
    },
    "AQ": {
        "message": "Antartika"
    },
    "AR": {
        "message": "Arġentina"
    },
    "AS": {
        "message": "Samoa Amerikana"
    },
    "AT": {
        "message": "Awstrija"
    },
    "AU": {
        "message": "Awstralja"
    },
    "AX": {
        "message": "Gżejjer Aland"
    },
    "AZ": {
        "message": "Ażerbajġan"
    },
    "About": {
        "message": "Dwar"
    },
    "About Hola": {
        "message": "Dwar Hola"
    },
    "Accelerator": {
        "message": "Aċċeleratur"
    },
    "Accelerator is": {
        "message": "Aċċeleratur huwa"
    },
    "Access $1 - cool site!": {
        "message": "Aċċess $1 - sit jibred!"
    },
    "Access $1?": {
        "message": "Aċċess $1?"
    },
    "Access any site from any country, free": {
        "message": "Aċċess kwalunkwe sit minn kwalunkwe pajjiż, free"
    },
    "Access cool sites": {
        "message": "Aċċess siti jibred"
    },
    "Access more sites": {
        "message": "Aċċess aktar siti"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Siti ta &#39;aċċess ċensurati fil-pajjiż tiegħek u taċċellera Internet tiegħek ma&#39; Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Aċċess $1 ma Hola"
    },
    "Account": {
        "message": "Kont"
    },
    "Account type": {
        "message": "Tip ta 'kont"
    },
    "Activating...": {
        "message": "Attivazzjoni ..."
    },
    "All ($1)": {
        "message": "Kollha ($1)"
    },
    "Apply settings...": {
        "message": "Applika settings ..."
    },
    "Author site:": {
        "message": "Sit Awtur:"
    },
    "Author:": {
        "message": "Awtur:"
    },
    "Awesome!": {
        "message": "Tal-biża!"
    },
    "BA": {
        "message": "Bożnija Ħerżegovina"
    },
    "BD": {
        "message": "Bangladexx"
    },
    "BE": {
        "message": "Belġju"
    },
    "BG": {
        "message": "Bulgarija"
    },
    "BH": {
        "message": "Baħrajn"
    },
    "BN": {
        "message": "Brunej"
    },
    "BO": {
        "message": "Bolivja"
    },
    "BQ": {
        "message": "Territorju Antartiku Britanniku"
    },
    "BR": {
        "message": "Brażil"
    },
    "BS": {
        "message": "Baħamas"
    },
    "BT": {
        "message": "Butan"
    },
    "BY": {
        "message": "Bjelorussja"
    },
    "BZ": {
        "message": "Beliże"
    },
    "Back to $1": {
        "message": "Lura għal $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Kun l-ewwel biex jiksbu Hola għall iPhone / iPad - Reġistru issa:"
    },
    "Buffering problems?": {
        "message": "Problemi lqugħ?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Cocos (Keeling) Islands"
    },
    "CD": {
        "message": "Democratic Republic of the Congo"
    },
    "CF": {
        "message": "Repubblika Afrikana Ċentrali"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Svizzera"
    },
    "CI": {
        "message": "Kosta ta’ l-Avorju"
    },
    "CK": {
        "message": "Gżejjer Cook"
    },
    "CL": {
        "message": "Ċili"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Ċina"
    },
    "CO": {
        "message": "Kolumbja"
    },
    "CP": {
        "message": "Gżira Clipperton"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Serbja u Montenegro"
    },
    "CT": {
        "message": "Canton u l-Gżejjer Enderbury"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kape Verde"
    },
    "CY": {
        "message": "Ċipru"
    },
    "CZ": {
        "message": "Repubblika Ċeka"
    },
    "Changing country...": {
        "message": "Pajjiż Nibdlu ..."
    },
    "Check out Hola for $1!": {
        "message": "Iċċekkja Hola għal $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola għall-apparat mobbli"
    },
    "Check your Internet connection": {
        "message": "Ivverifika għandek Internet"
    },
    "Choose<br>Country": {
        "message": "Agħżel <br> Pajjiż"
    },
    "Configuring...": {
        "message": "Konfigurazzjoni ..."
    },
    "Connecting...": {
        "message": "Konnessjoni ..."
    },
    "Cool site!": {
        "message": "Sit Kessaħ!"
    },
    "Creative licenses": {
        "message": "Liċenzji Creative"
    },
    "DD": {
        "message": "Ġermanja tal-Lvant"
    },
    "DE": {
        "message": "Ġermanja"
    },
    "DJ": {
        "message": "Ġibuti"
    },
    "DK": {
        "message": "Danimarka"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Republikka Domenikana"
    },
    "DZ": {
        "message": "Alġerija"
    },
    "Delete": {
        "message": "Ħassar"
    },
    "Deleted from my list": {
        "message": "Mħassra mil-lista tiegħi"
    },
    "Did it work?": {
        "message": "Did taħdem?"
    },
    "Did you experience any buffering?": {
        "message": "Did ikollok xi buffering?"
    },
    "Disliked it": {
        "message": "Nenu dan"
    },
    "Don't show again for $1 for one week": {
        "message": "Ma jurux għal darb'oħra għal $1 għal ġimgħa waħda"
    },
    "Don't show again for any site for one week": {
        "message": "Ma juru mill-ġdid għal kwalunkwe sit għal ġimgħa waħda"
    },
    "Downloading": {
        "message": "Tniżżil"
    },
    "EA": {
        "message": "Ceuta u Melilla"
    },
    "EC": {
        "message": "Ekwador"
    },
    "EE": {
        "message": "Estonja"
    },
    "EG": {
        "message": "Eġittu"
    },
    "EH": {
        "message": "Sahara tal-Punent"
    },
    "ER": {
        "message": "Eritreja"
    },
    "ES": {
        "message": "Spanja"
    },
    "ET": {
        "message": "Etijopja"
    },
    "EU": {
        "message": "Unjoni Ewropea"
    },
    "Enable": {
        "message": "Jippermettu"
    },
    "Enable Hola Accelerator": {
        "message": "Jippermettu Hola aċċeleratur"
    },
    "Enjoy!": {
        "message": "Igawdu!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Jgawdu Hola għall Chrome?"
    },
    "Enter site to access": {
        "message": "Ikteb sit għall-aċċess"
    },
    "Enter your email": {
        "message": "Ikteb l-email tiegħek"
    },
    "FI": {
        "message": "Finlandja"
    },
    "FJ": {
        "message": "Fiġi"
    },
    "FK": {
        "message": "Gżejjer Falkland"
    },
    "FM": {
        "message": "Mikronesja"
    },
    "FO": {
        "message": "Gżejjer Faroe"
    },
    "FQ": {
        "message": "Franċiż tan-Nofsinhar u Antartiċi Territorji"
    },
    "FR": {
        "message": "Franza"
    },
    "FX": {
        "message": "Franza metropolitana"
    },
    "Finding new peers...": {
        "message": "Tfittxija sħabhom ġodda ..."
    },
    "Finding peers...": {
        "message": "Tfittxija sħabhom ..."
    },
    "Free": {
        "message": "Ħielsa"
    },
    "From": {
        "message": "Minn"
    },
    "Full list": {
        "message": "Lista sħiħa"
    },
    "GB": {
        "message": "Ingilterra"
    },
    "GE": {
        "message": "Ġorġja"
    },
    "GF": {
        "message": "Gujana Franċiża"
    },
    "GH": {
        "message": "Gana"
    },
    "GI": {
        "message": "Ġibiltà"
    },
    "GL": {
        "message": "Grinlandja"
    },
    "GM": {
        "message": "Gambja"
    },
    "GN": {
        "message": "Gineja"
    },
    "GP": {
        "message": "Gwadelupe"
    },
    "GQ": {
        "message": "Ginea Ekwatorjali"
    },
    "GR": {
        "message": "Greċja"
    },
    "GS": {
        "message": "South Georgia u l-Gżejjer Sandwich tan-Nofsinhar"
    },
    "GT": {
        "message": "Gwatemala"
    },
    "GU": {
        "message": "Gwam"
    },
    "GW": {
        "message": "Ginea-Bissaw"
    },
    "GY": {
        "message": "Gujana"
    },
    "Get Hola Accelerator": {
        "message": "Get Hola aċċeleratur"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Get Hola Plus għall un interrott, servizz ad-free."
    },
    "Get Hola for Android": {
        "message": "Get Hola għall Android"
    },
    "Get Premium support": {
        "message": "Get appoġġ Premium"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Get aċċess għas-siti ċensurati, jippruvaw dan issa: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Tikseb għajnuna mill inġinier fuq Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Niżżel l-Servers mgħaġġlin"
    },
    "Go": {
        "message": "Mur"
    },
    "Go Hola Premium": {
        "message": "Mur Hola Premium"
    },
    "HK": {
        "message": "Ħong Kong S.A.R., Ċina"
    },
    "HM": {
        "message": "Gżira Heard u l-Gżejjer McDonald"
    },
    "HN": {
        "message": "Ħonduras"
    },
    "HR": {
        "message": "Kroazja"
    },
    "HT": {
        "message": "Ħaiti"
    },
    "HU": {
        "message": "Ungerija"
    },
    "Hate it": {
        "message": "Mibegħda"
    },
    "Help": {
        "message": "Jgħinu"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\njien jużaw"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nI bdew jużaw $1 ($2). Hija tikri me tisserfja l-Internet aktar mgħaġġel u aċċess $3 fil-pajjiż tiegħi."
    },
    "Hola Accelerator": {
        "message": "Hola aċċeleratur"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ma jistgħux jaħdmu minħabba estensjoni oħra hija tikkontrolla settings prokura tiegħek."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ma jaħdimx tajjeb fil-Windows 8 modalità. Jekk jogħġbok jaqilbu għall-modalità desktop. Ikklikkja <a> hawn </a> għall-istruzzjonijiet"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola ma tkunx disponibbli dritt issa, imma aħna qed jaħdmu fuqha."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola huwa off, ikklikkja li jduru fuq"
    },
    "Hola site list": {
        "message": "Lista sit Unblocker"
    },
    "I can now access $1 from any country!": {
        "message": "I issa tista 'aċċess $1 minn kwalunkwe pajjiż!"
    },
    "I did not experience any buffering": {
        "message": "I ma jesperjenzawx xi buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "I biss aċċessata sit ċensurati jużaw Hola għal $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Jien jużaw $1 biex tara $2 fil-pajjiż tiegħi, u surf aktar malajr!"
    },
    "IC": {
        "message": "Gżejjer Kanarji"
    },
    "ID": {
        "message": "Indoneżja"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IL": {
        "message": "Iżrael"
    },
    "IN": {
        "message": "Indja"
    },
    "IO": {
        "message": "It-Territorju Britanniku tal-Oċean Indjan"
    },
    "IS": {
        "message": "Islanda"
    },
    "IT": {
        "message": "Italja"
    },
    "Improve translation": {
        "message": "Itejbu traduzzjoni"
    },
    "Initializing...": {
        "message": "Initializing ..."
    },
    "Install": {
        "message": "Installa"
    },
    "Install Accelerator": {
        "message": "Installa aċċeleratur"
    },
    "Install Free Hola Accelerator": {
        "message": "Installa Free Hola aċċeleratur"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Jinstallaw Hola Engine li tkompli tuża Hola b&#39;xejn"
    },
    "Instantly watch any torrent Video": {
        "message": "Istantanjament tara xi Video torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Jistiednu lill-ħbieb - Premium ħielsa."
    },
    "Invite friends. Get Premium.": {
        "message": "Jistiednu lill-ħbieb. Get Premium."
    },
    "It was okay": {
        "message": "Kien okay"
    },
    "JM": {
        "message": "Ġamajka"
    },
    "JO": {
        "message": "Ġordan"
    },
    "JP": {
        "message": "Ġappun"
    },
    "JT": {
        "message": "Johnston Gżira"
    },
    "KE": {
        "message": "Kenja"
    },
    "KG": {
        "message": "Kirgistan"
    },
    "KH": {
        "message": "Kambodja"
    },
    "KM": {
        "message": "Komoros"
    },
    "KN": {
        "message": "Saint Kitts u Nevis"
    },
    "KP": {
        "message": "Koreja ta’ Fuq"
    },
    "KR": {
        "message": "Koreja t’Isfel"
    },
    "KW": {
        "message": "Kuwajt"
    },
    "KY": {
        "message": "Gżejjer Kajmani"
    },
    "KZ": {
        "message": "Każakstan"
    },
    "LB": {
        "message": "Libanu"
    },
    "LC": {
        "message": "Santa Luċija"
    },
    "LR": {
        "message": "Liberja"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Litwanja"
    },
    "LU": {
        "message": "Lussemburgu"
    },
    "LV": {
        "message": "Latvja"
    },
    "LY": {
        "message": "Libja"
    },
    "Language": {
        "message": "Lingwa"
    },
    "Library": {
        "message": "Librerija"
    },
    "Like it": {
        "message": "Simili"
    },
    "Loading": {
        "message": "Tagħbija"
    },
    "Loading site...": {
        "message": "Tagħbija"
    },
    "Love Hola?": {
        "message": "Imħabba Hola?"
    },
    "Love it": {
        "message": "Imħabba tiegħu"
    },
    "MA": {
        "message": "Marokk"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Maldova"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Gżejjer ta’ Marshall"
    },
    "MI": {
        "message": "Gżejjer Midway"
    },
    "MK": {
        "message": "Maċedonja"
    },
    "MM": {
        "message": "Mjanmar"
    },
    "MN": {
        "message": "Mongolja"
    },
    "MO": {
        "message": "Macao S.A.R., China"
    },
    "MP": {
        "message": "Gżejjer Marjana ta’ Fuq"
    },
    "MQ": {
        "message": "Martinik"
    },
    "MR": {
        "message": "Mawritanja"
    },
    "MU": {
        "message": "Mawrizju"
    },
    "MV": {
        "message": "Maldivi"
    },
    "MX": {
        "message": "Messiku"
    },
    "MY": {
        "message": "Malasja"
    },
    "MZ": {
        "message": "Możambik"
    },
    "Make your Internet better with $1": {
        "message": "Agħmel Internet tiegħek aħjar mal $1"
    },
    "Might not work on all sites": {
        "message": "Ma jista 'jaħdem fuq is-siti kollha"
    },
    "Mode": {
        "message": "Modalità"
    },
    "More countries": {
        "message": "Aktar pajjiżi"
    },
    "More sites...": {
        "message": "aktar ..."
    },
    "More...": {
        "message": "aktar ..."
    },
    "My Account": {
        "message": "Kont Tiegħi"
    },
    "My History": {
        "message": "Storja Tiegħi"
    },
    "My Settings": {
        "message": "Settings Tiegħi"
    },
    "My favorites": {
        "message": "Favourites tiegħi"
    },
    "NA": {
        "message": "Namibja"
    },
    "NE": {
        "message": "Niġer"
    },
    "NG": {
        "message": "Niġerja"
    },
    "NI": {
        "message": "Nikaragwa"
    },
    "NL": {
        "message": "Olanda"
    },
    "NO": {
        "message": "Norveġja"
    },
    "NT": {
        "message": "Newtrali Żona"
    },
    "Need Help?": {
        "message": "Bżonn l-għajnuna?"
    },
    "Never ask me again": {
        "message": "Qatt staqsi me darb'oħra"
    },
    "Never be a peer": {
        "message": "Qatt ma tkun a peer"
    },
    "No": {
        "message": "Nru"
    },
    "No idle peers found.": {
        "message": "Ebda sħabhom idle misjuba."
    },
    "No recent videos found": {
        "message": "Ebda videos riċenti sabu"
    },
    "No saved videos found": {
        "message": "Ebda videos salvati misjuba"
    },
    "No title": {
        "message": "Nru titolu"
    },
    "No videos found": {
        "message": "Ebda videos misjuba"
    },
    "No videos found on active page": {
        "message": "Ebda videos misjuba fuq il-paġna attiva"
    },
    "No, Thanks": {
        "message": "Le, Grazzi"
    },
    "No, fix it": {
        "message": "Le, tiffissa lilha"
    },
    "Not working?": {
        "message": "Ma tkunx qed taħdem?"
    },
    "Number of users that pressed not working": {
        "message": "Numru ta 'utenti li ippressat jkunux qed jaħdmu"
    },
    "Number of users that use this option": {
        "message": "Numru ta 'utenti li jużaw din l-għażla"
    },
    "Oh, yes!": {
        "message": "Oh, iva!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Verżjoni l-qadima ta 'Firefox. Press <a> hawn </a> li jaġġornaw."
    },
    "On": {
        "message": "Fuq"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Brand New Tagħna mplayer huwa Dalwaqt!"
    },
    "PC": {
        "message": "Territorju Paċifiku Islands Trust"
    },
    "PF": {
        "message": "Polinesja Franċiża"
    },
    "PG": {
        "message": "Papwa-Ginea Ġdida"
    },
    "PH": {
        "message": "Filippini"
    },
    "PL": {
        "message": "Polonja"
    },
    "PM": {
        "message": "Saint Pierre u Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestinian Territory"
    },
    "PT": {
        "message": "Portugall"
    },
    "PU": {
        "message": "Istati Uniti Miscellaneous Gżejjer tal-Paċifiku"
    },
    "PY": {
        "message": "Paragwaj"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Jekk jogħġbok jiskonnettja <a>estensjonijiet</a> oħra li taħseb li tista 'tikkontrolla settings prokura tiegħek bħal imblokkaturi ad, servizzi oħra VPN, eċċ"
    },
    "Please enter a valid email address.": {
        "message": "Daħħal indirizz ta 'email validu."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Daħħal indirizz web site, bħal facebook.com"
    },
    "Please help us get better": {
        "message": "Jekk jogħġbok tgħinna tikseb aħjar"
    },
    "Popular in $1": {
        "message": "Popolari fil $1"
    },
    "Popular in the world": {
        "message": "Popolari fid-dinja"
    },
    "Popular sites": {
        "message": "Siti Popular"
    },
    "QO": {
        "message": "Periferiċi Oċeanja"
    },
    "RO": {
        "message": "Rumanija"
    },
    "RS": {
        "message": "Serbja"
    },
    "RU": {
        "message": "Russja"
    },
    "Rate us": {
        "message": "Rata us"
    },
    "Recent Videos": {
        "message": "Riċenti Videos"
    },
    "Reload": {
        "message": "Rikarigu"
    },
    "Reload Hola": {
        "message": "Rikarigu Hola"
    },
    "Remember server": {
        "message": "Ftakar server"
    },
    "Report a problem": {
        "message": "Rapport problema"
    },
    "Retry safe mode": {
        "message": "Retry mod sikur"
    },
    "SA": {
        "message": "Għarabja Sawdita"
    },
    "SB": {
        "message": "Gżejjer Solomon"
    },
    "SE": {
        "message": "Żvezja"
    },
    "SG": {
        "message": "Singapor"
    },
    "SI": {
        "message": "Slovenja"
    },
    "SJ": {
        "message": "Svalbard u Jan Mayen"
    },
    "SK": {
        "message": "Slovakkja"
    },
    "SO": {
        "message": "Somalja"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sao Tome and Principe"
    },
    "SU": {
        "message": "Unjoni tar-Repubbliki Sovjetiċi Soċjalisti"
    },
    "SY": {
        "message": "Sirja"
    },
    "SZ": {
        "message": "Sważiland"
    },
    "Safe mode": {
        "message": "Mod sikur"
    },
    "Saved Videos": {
        "message": "Videos Ssejvjata"
    },
    "Saved for later": {
        "message": "Ssejvjata għal aktar tard"
    },
    "Search video title": {
        "message": "Fittex titolu video"
    },
    "Select a Country": {
        "message": "Agħżel Pajjiż"
    },
    "Select site to unblock": {
        "message": "Agħżel sit li tiżblokka"
    },
    "Server saved!": {
        "message": "Server salvati!"
    },
    "Set safe mode for $1 $2": {
        "message": "Modalità sikur stabbiliti għal $1 $2"
    },
    "Share $1 on $2": {
        "message": "Share $1 fuq $2"
    },
    "Share $1 via $2": {
        "message": "Share $1 permezz tal $2"
    },
    "Share with friends!": {
        "message": "Share mal-ħbieb!"
    },
    "Sign up": {
        "message": "Inkiteb"
    },
    "Solve buffering": {
        "message": "Issolvi buffering"
    },
    "Solve buffering problems with": {
        "message": "Isolvu problemi lqugħ ma"
    },
    "Solves it": {
        "message": "Issolvi din"
    },
    "Staff Picks": {
        "message": "Fisien Persunal"
    },
    "Start Hola": {
        "message": "tibda"
    },
    "Starting...": {
        "message": "Bidu ..."
    },
    "Stopping peer routing...": {
        "message": "Waqfien routing peer ..."
    },
    "Stream Instantly": {
        "message": "Nixxiegħa Instantly"
    },
    "Submit": {
        "message": "Issottometti"
    },
    "Support Hola": {
        "message": "Appoġġ Hola"
    },
    "TC": {
        "message": "Turks u Caicos"
    },
    "TD": {
        "message": "Ċad"
    },
    "TF": {
        "message": "Territorji Franċiżi ta’ Nofsinhar"
    },
    "TH": {
        "message": "Tajlandja"
    },
    "TJ": {
        "message": "Taġikistan"
    },
    "TK": {
        "message": "Tokelaw"
    },
    "TL": {
        "message": "Timor tal-Lvant"
    },
    "TN": {
        "message": "Tuneż"
    },
    "TR": {
        "message": "Turkija"
    },
    "TT": {
        "message": "Trinidad u Tobago"
    },
    "TW": {
        "message": "Tajwan"
    },
    "TZ": {
        "message": "Tanżanija"
    },
    "Talk to us on $1": {
        "message": "Kellem lill magħna fuq $1"
    },
    "Tell friends about $1": {
        "message": "Għid ħbieb madwar $1"
    },
    "Testing connection...": {
        "message": "Konnessjoni Ittestjar ..."
    },
    "Thank you!": {
        "message": "Grazzi!"
    },
    "There seems to be an error": {
        "message": "Jidher li hemm żball"
    },
    "Top popular sites": {
        "message": "Siti popolari Top"
    },
    "Translate to your language": {
        "message": "Ittraduċi l-lingwa tiegħek"
    },
    "Try again": {
        "message": "Erġa 'pprova"
    },
    "Try another server": {
        "message": "Ipprova server ieħor"
    },
    "Try it": {
        "message": "Ipprova"
    },
    "Try safe mode": {
        "message": "Ipprova mod sikur"
    },
    "Try to <span>reload</span>": {
        "message": "Ipprova <span> rikarigu </span>"
    },
    "Trying another peer...": {
        "message": "Jippruvaw peer ieħor ..."
    },
    "Turn off Accelerator": {
        "message": "Itfi aċċeleratur"
    },
    "Turn off Hola": {
        "message": "Itfi Hola"
    },
    "Turn on Accelerator": {
        "message": "Ixgħel aċċeleratur"
    },
    "Turn on Hola": {
        "message": "Ixgħel Hola"
    },
    "Turn on to get started": {
        "message": "Ixgħel biex tibda"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "United States Minor Outlying Islands"
    },
    "US": {
        "message": "Stati Uniti"
    },
    "UY": {
        "message": "Urugwaj"
    },
    "UZ": {
        "message": "Użbekistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker huwa b'diżabilità"
    },
    "Update": {
        "message": "Aġġornament"
    },
    "Upgrade": {
        "message": "Aġġornament"
    },
    "Using": {
        "message": "Jużaw"
    },
    "Using Hola": {
        "message": "Bl-użu Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent u l-Grenadini"
    },
    "VD": {
        "message": "North Vjetnam"
    },
    "VE": {
        "message": "Venezwela"
    },
    "VI": {
        "message": "Istati Uniti Virgin Islands"
    },
    "VN": {
        "message": "Vjetnam"
    },
    "VU": {
        "message": "Vanwatu"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Verżjoni l-qadima ħafna ta 'Chrome, <a> aġġornament </a> Chrome għall-użu Hola"
    },
    "Video stuck?": {
        "message": "Video staġnati?"
    },
    "Videos available for instant streaming": {
        "message": "Videos disponibbli għall streaming instant"
    },
    "WF": {
        "message": "Wallis u Futuna"
    },
    "WK": {
        "message": "Riattivazzjoni Gżira"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Tixtieq Hola fuq mezzi oħra? (Xbox, PS, Apple TV, iPhone ...). Ikklikkja hawn"
    },
    "Want to know more?": {
        "message": "Tixtieq tkun taf aktar?"
    },
    "Watch Now": {
        "message": "Watch Issa"
    },
    "We found $1 videos": {
        "message": "Sibna $1 videos"
    },
    "We will be in touch with you soon": {
        "message": "Aħna se jkunu f'kuntatt ma inti hekk"
    },
    "Working!": {
        "message": "Tax-xogħol!"
    },
    "Working?": {
        "message": "Tax-xogħol?"
    },
    "Works on all sites but slower": {
        "message": "Xogħlijiet fuq is-siti kollha iżda kajman"
    },
    "YD": {
        "message": "Repubblika Demokratika Popolari tal-Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "YT": {
        "message": "Majotte"
    },
    "Yes": {
        "message": "Iva"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Ikollok bżonn li jaġġornaw l-aħħar verżjoni ta 'Opera tuża Hola. Agħfas <a>hawn</a> biex jaġġornaw."
    },
    "ZA": {
        "message": "Afrika t’Isfel"
    },
    "ZM": {
        "message": "Żambja"
    },
    "ZW": {
        "message": "Żimbabwe"
    },
    "ZZ": {
        "message": "Reġjun Mhux Magħruf jew Mhux Validu"
    },
    "app_desc": {
        "message": "Websajts Aċċess imblukkata fil-pajjiż tiegħek, kumpanija jew skola ma 'Hola! Hola huwa b'xejn u faċli biex jintuża!"
    },
    "app_name": {
        "message": "Hola Internet Aħjar"
    },
    "back to": {
        "message": "lura għal"
    },
    "changing...": {
        "message": "jinbidlu ..."
    },
    "cool sites": {
        "message": "siti jibred"
    },
    "current site": {
        "message": "sit kurrenti"
    },
    "day": {
        "message": "jum"
    },
    "days": {
        "message": "jiem"
    },
    "even more...": {
        "message": "saħansitra aktar..."
    },
    "mode": {
        "message": "modalità"
    },
    "more options...": {
        "message": "aktar għażliet..."
    },
    "not working?": {
        "message": "ma tkunx qed taħdem?"
    },
    "not working? try another server": {
        "message": "ma tkunx qed taħdem? jippruvaw server ieħor"
    },
    "on this page": {
        "message": "fuq din il-paġna"
    },
    "sites that are censored": {
        "message": "siti li huma ċensurati"
    },
    "start": {
        "message": "tibda"
    },
    "working? remember": {
        "message": "tax-xogħol? tiftakar"
    }
};
return E; });