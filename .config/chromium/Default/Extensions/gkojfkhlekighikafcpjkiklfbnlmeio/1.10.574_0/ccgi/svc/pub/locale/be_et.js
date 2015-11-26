'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " kaudu "
    },
    "$1 Buffering?": {
        "message": "$1 puhverdamine?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola juurdepääsu $2\n\nVajuta siia, et teha sama: $3\n\nSee installib Hola, mis laseb mul Interneti kiiremini ja ligi $4$5"
    },
    "$1 from $2": {
        "message": "$1 alates $2"
    },
    "$1 not found": {
        "message": "$1 ei leitud"
    },
    "$1 via Hola": {
        "message": "$1 kaudu Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(mõned Hola omadused pole selles versioonis kasutatavad)"
    },
    "AC": {
        "message": "Ascension"
    },
    "AE": {
        "message": "Araabia Ühendemiraadid"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua ja Barbuda"
    },
    "AL": {
        "message": "Albaania"
    },
    "AM": {
        "message": "Armeenia"
    },
    "AN": {
        "message": "Hollandi Antillid"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AS": {
        "message": "Ameerika Samoa"
    },
    "AU": {
        "message": "Austraalia"
    },
    "AX": {
        "message": "Ahvenamaa"
    },
    "AZ": {
        "message": "Aserbaidžaan"
    },
    "About": {
        "message": "Umbes"
    },
    "About Hola": {
        "message": "Umbes Hola"
    },
    "Accelerator": {
        "message": "Kiirendi"
    },
    "Accelerator is": {
        "message": "Accelerator on"
    },
    "Access $1 - cool site!": {
        "message": "Access $1 - lahe sait!"
    },
    "Access $1?": {
        "message": "Juurdepääs $1?"
    },
    "Access any site from any country, free": {
        "message": "Vabastab sinu riigis blokitud veebilehed, tasuta"
    },
    "Access cool sites": {
        "message": "Ligipääs cool sites"
    },
    "Access more sites": {
        "message": "Juurdepääs rohkem saite"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Juurdepääs saidid tsenseeritud oma riigi ja kiirendada oma internetiühendust Hola - tasuta!"
    },
    "Accessing $1 with Hola": {
        "message": "Ligipääs $1 koos Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Konto tüüp"
    },
    "Activating...": {
        "message": "Aktiveerimine..."
    },
    "All ($1)": {
        "message": "Kõik ($1)"
    },
    "Apply settings...": {
        "message": "Rakenda seaded ..."
    },
    "Author site:": {
        "message": "Veebileht:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "BA": {
        "message": "Bosnia ja Hertsegoviina"
    },
    "BE": {
        "message": "Belgia"
    },
    "BG": {
        "message": "Bulgaaria"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BO": {
        "message": "Boliivia"
    },
    "BQ": {
        "message": "Briti Antarktise ala"
    },
    "BR": {
        "message": "Brasiilia"
    },
    "BS": {
        "message": "Bahama"
    },
    "BV": {
        "message": "Bouvet’ saar"
    },
    "BY": {
        "message": "Valgevene"
    },
    "Back to $1": {
        "message": "Tagasi $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Ole esimene, et saada Hola iPhone / iPad - Registreeri nüüd:"
    },
    "Buffering problems?": {
        "message": "Puhverdamine probleeme?"
    },
    "Buffering?": {
        "message": "Puhverdamine?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kookossaared"
    },
    "CD": {
        "message": "Kongo DV"
    },
    "CF": {
        "message": "Kesk-Aafrika Vabariik"
    },
    "CG": {
        "message": "Kongo Vabariik"
    },
    "CH": {
        "message": "Šveits"
    },
    "CI": {
        "message": "Côte d'Ivoire"
    },
    "CK": {
        "message": "Cooki saared"
    },
    "CL": {
        "message": "Tšiili"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Hiina"
    },
    "CO": {
        "message": "Kolumbia"
    },
    "CP": {
        "message": "Clipperton saarel"
    },
    "CS": {
        "message": "Serbia ja Montenegro"
    },
    "CT": {
        "message": "Canton ja Enderbury saared"
    },
    "CU": {
        "message": "Kuuba"
    },
    "CV": {
        "message": "Roheneemesaared"
    },
    "CX": {
        "message": "Jõulusaar"
    },
    "CY": {
        "message": "Küpros"
    },
    "CZ": {
        "message": "Tšehhi"
    },
    "Changing country...": {
        "message": "Muutuvad maa ..."
    },
    "Check out Hola for $1!": {
        "message": "Tutvu Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Tutvu Hola mobiilseadmete"
    },
    "Check your Internet connection": {
        "message": "Kontrolli, kas sul ikka on internetiühendus"
    },
    "Choose<br>Country": {
        "message": "Valima <br> Riik"
    },
    "Configuring...": {
        "message": "Seadistamine ..."
    },
    "Connecting...": {
        "message": "Ühendamine ..."
    },
    "Cool site!": {
        "message": "Cool sait!"
    },
    "Creative licenses": {
        "message": "Creative litsentsid"
    },
    "DD": {
        "message": "Ida-Saksamaal"
    },
    "DE": {
        "message": "Saksamaa"
    },
    "DK": {
        "message": "Taani"
    },
    "DO": {
        "message": "Dominikaani Vabariik"
    },
    "DZ": {
        "message": "Alžeeria"
    },
    "Delete": {
        "message": "Kustutama"
    },
    "Deleted from my list": {
        "message": "Kustutada minu nimekirja"
    },
    "Did it work?": {
        "message": "Kas see toimib?"
    },
    "Did you experience any buffering?": {
        "message": "Kas teil tekib mõni puhverdusvõime?"
    },
    "Disliked it": {
        "message": "Ei meeldinud"
    },
    "Don't show again for $1 for one week": {
        "message": "Ära näita uuesti $1 nädal"
    },
    "Don't show again for any site for one week": {
        "message": "Ära näita uuesti tahes kohas ühe nädala"
    },
    "Downloading": {
        "message": "Allalaadimine"
    },
    "EA": {
        "message": "Ceuta ja Melilla"
    },
    "EE": {
        "message": "Eesti"
    },
    "EG": {
        "message": "Egiptus"
    },
    "EH": {
        "message": "Lääne-Sahara"
    },
    "ES": {
        "message": "Hispaania"
    },
    "ET": {
        "message": "Etioopia"
    },
    "EU": {
        "message": "Euroopa Liit"
    },
    "Enable": {
        "message": "Luba"
    },
    "Enable Hola Accelerator": {
        "message": "Luba Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Nautige!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Rõõm Hola Chrome?"
    },
    "Enter site to access": {
        "message": "Sisesta sait juurdepääs"
    },
    "Enter your email": {
        "message": "Sisesta oma e-posti"
    },
    "FI": {
        "message": "Soome"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Falklandi saared"
    },
    "FM": {
        "message": "Mikroneesia Liiduriigid"
    },
    "FO": {
        "message": "Fääri saared"
    },
    "FQ": {
        "message": "Prantsuse Lõuna-ja Antarktika-territooriumid"
    },
    "FR": {
        "message": "Prantsusmaa"
    },
    "Fast": {
        "message": "Kiiresti"
    },
    "Finding new peers...": {
        "message": "Leida uusi partnerit ..."
    },
    "Finding peers...": {
        "message": "Leida partnerit ..."
    },
    "Free": {
        "message": "Tasuta"
    },
    "From": {
        "message": "Alates"
    },
    "Full list": {
        "message": "Täielik nimekiri"
    },
    "GB": {
        "message": "Suurbritannia"
    },
    "GE": {
        "message": "Gruusia"
    },
    "GF": {
        "message": "Prantsuse Guajaana"
    },
    "GL": {
        "message": "Gröönimaa"
    },
    "GQ": {
        "message": "Ekvatoriaal-Guinea"
    },
    "GR": {
        "message": "Kreeka"
    },
    "GS": {
        "message": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
    },
    "Get 24/7 Unblocking": {
        "message": "Saa 24/7 Unlocking"
    },
    "Get Hola Accelerator": {
        "message": "Hangi Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Saa Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Hangi Hola Plus, kui soovid katkematut ja reklaamivaba teenust."
    },
    "Get Hola Premium": {
        "message": "Hangi Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Hangi Hola jaoks Android"
    },
    "Get Premium support": {
        "message": "Get Premium tugi"
    },
    "Get Unlimited Unblocking": {
        "message": "Get Unlimited Unlocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Saada ligipääsu tsenseeritud saite, proovige see nüüd: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Palu tehnikult abi skype kaudu (inglise keeles):"
    },
    "Get the Fastest Servers": {
        "message": "Kiireim serverid"
    },
    "Go": {
        "message": "Mine"
    },
    "Go Hola Premium": {
        "message": "Mine Hola Premium"
    },
    "HK": {
        "message": "Hongkong - Hiina erihalduspiirkond"
    },
    "HM": {
        "message": "Heard ja McDonald"
    },
    "HR": {
        "message": "Horvaatia"
    },
    "HU": {
        "message": "Ungari"
    },
    "Hate it": {
        "message": "Vihkan seda"
    },
    "Help": {
        "message": "Abi"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nma kasutan"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Tere,\n\nhakkasin kasutades $1 ($2). See võimaldab mul Interneti kiiremini ja ligi $3 minu kodumaal."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ei tööta, sest teine laiendus kontrolli oma puhverserveri seadeid."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ei tööta hästi Windows 8 avakuval. Palun lülitu ümber töölauale. <a>Siin</a> õpetatakse, kuidas seda teha."
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola ei ole hetkel saadaval, kuid me töötame selle kallal."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola on välja lülitatud, klõpsake sisselülitamiseks"
    },
    "Hola site list": {
        "message": "Vabastatavad lehed"
    },
    "I can now access $1 from any country!": {
        "message": "Ma võin nüüd ligi $1 üheski riigis!"
    },
    "I did not experience any buffering": {
        "message": "Ma ei ole esinenud puhverdusvõime"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ma lihtsalt külastatud tsenseeritud saidi kasutades Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ma kasutan $1 vaatamiseks $2 kodumaal ja surfata kiiremini!"
    },
    "IC": {
        "message": "Kanaari saared"
    },
    "ID": {
        "message": "Indoneesia"
    },
    "IE": {
        "message": "Iirimaa"
    },
    "IL": {
        "message": "Iisrael"
    },
    "IM": {
        "message": "Mani saar"
    },
    "IO": {
        "message": "Briti India ookeani ala"
    },
    "IQ": {
        "message": "Iraak"
    },
    "IR": {
        "message": "Iraan"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Itaalia"
    },
    "Improve translation": {
        "message": "Parenda tõlget"
    },
    "Initializing...": {
        "message": "Algkäivitan..."
    },
    "Install": {
        "message": "Paigaldama"
    },
    "Install Accelerator": {
        "message": "Installi Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Install Tasuta Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Paigaldage Hola Engine kasutamist jätkata Hola tasuta"
    },
    "Instantly watch any torrent Video": {
        "message": "Koheselt vaadata igal torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Kutsu sõbrad - tasuta Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Kutsu sõbrad. Get Premium."
    },
    "It was okay": {
        "message": "See oli okei"
    },
    "JO": {
        "message": "Jordaania"
    },
    "JP": {
        "message": "Jaapan"
    },
    "KG": {
        "message": "Kõrgõzstan"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komoorid"
    },
    "KN": {
        "message": "Saint Kitts ja Nevis"
    },
    "KP": {
        "message": "Põhja-Korea"
    },
    "KR": {
        "message": "Lõuna-Korea"
    },
    "KW": {
        "message": "Kuveit"
    },
    "KY": {
        "message": "Kaimanisaared"
    },
    "KZ": {
        "message": "Kasahstan"
    },
    "LB": {
        "message": "Liibanon"
    },
    "LR": {
        "message": "Libeeria"
    },
    "LT": {
        "message": "Leedu"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LV": {
        "message": "Läti"
    },
    "LY": {
        "message": "Liibüa"
    },
    "Language": {
        "message": "Keel"
    },
    "Library": {
        "message": "Raamatukogu"
    },
    "Like it": {
        "message": "Meeldib"
    },
    "Loading": {
        "message": "Laen"
    },
    "Loading site...": {
        "message": "Laen"
    },
    "Log in": {
        "message": "Logi sisse"
    },
    "Log out": {
        "message": "Logi välja"
    },
    "Love Hola?": {
        "message": "Armastus Hola?"
    },
    "Love it": {
        "message": "Armastan seda"
    },
    "MA": {
        "message": "Maroko"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshalli Saared"
    },
    "MI": {
        "message": "Midway saared"
    },
    "MK": {
        "message": "Makedoonia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongoolia"
    },
    "MO": {
        "message": "Aomen - Hiina erihalduspiirkond"
    },
    "MP": {
        "message": "Põhja-Mariaanid"
    },
    "MR": {
        "message": "Mauritaania"
    },
    "MV": {
        "message": "Maldiivid"
    },
    "MX": {
        "message": "Mehhiko"
    },
    "MY": {
        "message": "Malaisia"
    },
    "MZ": {
        "message": "Mosambiik"
    },
    "Make your Internet better with $1": {
        "message": "Tee oma Internet paremini $1"
    },
    "Menu": {
        "message": "Menüü"
    },
    "Might not work on all sites": {
        "message": "Ei pruugi kõik saidid"
    },
    "Mode": {
        "message": "Viis"
    },
    "More countries": {
        "message": "Üha rohkem riike"
    },
    "More sites...": {
        "message": "veel..."
    },
    "More...": {
        "message": "veel..."
    },
    "My Account": {
        "message": "Minu konto"
    },
    "My History": {
        "message": "Minu ajalugu"
    },
    "My Settings": {
        "message": "Minu seaded"
    },
    "My favorites": {
        "message": "Minu lemmikud"
    },
    "NA": {
        "message": "Namiibia"
    },
    "NC": {
        "message": "Uus-Kaledoonia"
    },
    "NF": {
        "message": "Norfolk"
    },
    "NG": {
        "message": "Nigeeria"
    },
    "NL": {
        "message": "Holland"
    },
    "NO": {
        "message": "Norra"
    },
    "NZ": {
        "message": "Uus-Meremaa"
    },
    "Need Help?": {
        "message": "Vajad abi?"
    },
    "Never ask me again": {
        "message": "Kunagi küsi uuesti"
    },
    "Never be a peer": {
        "message": "Kunagi peer"
    },
    "No": {
        "message": "Ei"
    },
    "No idle peers found.": {
        "message": "Ei idle partnerit leida."
    },
    "No recent videos found": {
        "message": "No viimastel videos leitud"
    },
    "No saved videos found": {
        "message": "No salvestatud videos leitud"
    },
    "No title": {
        "message": "No pealkiri"
    },
    "No videos found": {
        "message": "Ei leitud ühtegi videot"
    },
    "No videos found on active page": {
        "message": "Ei leitud ühtegi videot aktiivse lehel"
    },
    "No, Thanks": {
        "message": "Ei, tänan"
    },
    "No, fix it": {
        "message": "Ei, seda parandada"
    },
    "Not working?": {
        "message": "Ei tööta?"
    },
    "Number of users that pressed not working": {
        "message": "Mittetöötamisest on teatanud"
    },
    "Number of users that use this option": {
        "message": "Seda valikut kasutab"
    },
    "OM": {
        "message": "Omaan"
    },
    "Off": {
        "message": "Väljas"
    },
    "Oh, yes!": {
        "message": "Oh, jah!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefoxi versioon on liiga vana. Uuendada saab <a>siin</a>."
    },
    "On": {
        "message": "Sees"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Meie Brand New Mplayer on tulemas!"
    },
    "PC": {
        "message": "Vaikse ookeani saared Trust Territory"
    },
    "PE": {
        "message": "Peruu"
    },
    "PF": {
        "message": "Prantsuse Polüneesia"
    },
    "PG": {
        "message": "Paapua Uus-Guinea"
    },
    "PH": {
        "message": "Filipiinid"
    },
    "PL": {
        "message": "Poola"
    },
    "PM": {
        "message": "Saint-Pierre ja Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestiina ala"
    },
    "PU": {
        "message": "USA Mitmesugused Vaikse ookeani saarte"
    },
    "PW": {
        "message": "Belau"
    },
    "PY": {
        "message": "Paraguai"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Keelake <a>laiendusi</a> mis teie arvates võiks kontrollida oma proxy seaded nagu reklaami-blokaatorid, muude VPN teenused jne"
    },
    "Please enter a valid email address.": {
        "message": "Palun sisesta kehtiv e-posti aadress."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Sisestage veebilehe aadress, nagu facebook.com"
    },
    "Please help us get better": {
        "message": "Palun aidake meil parem"
    },
    "Popular in $1": {
        "message": "Populaarne $1"
    },
    "Popular in the world": {
        "message": "Populaarne kogu maailmas"
    },
    "Popular sites": {
        "message": "Populaarsed saidid"
    },
    "Premium": {
        "message": "Preemia"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Okeaania hajasaared"
    },
    "RO": {
        "message": "Rumeenia"
    },
    "RU": {
        "message": "Venemaa"
    },
    "Rate us": {
        "message": "Hinda juures"
    },
    "Recent Videos": {
        "message": "Viimased videod"
    },
    "Reload": {
        "message": "Lae uuesti"
    },
    "Reload Hola": {
        "message": "Lae Hola uuesti"
    },
    "Remember server": {
        "message": "Mäleta server"
    },
    "Report a problem": {
        "message": "Raport probleem"
    },
    "Retry safe mode": {
        "message": "Uuesti safe mode"
    },
    "SA": {
        "message": "Saudi Araabia"
    },
    "SB": {
        "message": "Saalomoni Saared"
    },
    "SC": {
        "message": "Seišellid"
    },
    "SD": {
        "message": "Sudaan"
    },
    "SE": {
        "message": "Rootsi"
    },
    "SG": {
        "message": "Singapur"
    },
    "SI": {
        "message": "Sloveenia"
    },
    "SJ": {
        "message": "Svalbard ja Jan Mayen"
    },
    "SK": {
        "message": "Slovakkia"
    },
    "SO": {
        "message": "Somaalia"
    },
    "ST": {
        "message": "São Tomé ja Príncipe"
    },
    "SU": {
        "message": "Liit Nõukogude Sotsialistlike Vabariikide"
    },
    "SY": {
        "message": "Süüria"
    },
    "SZ": {
        "message": "Svaasimaa"
    },
    "Safe": {
        "message": "Ohutu"
    },
    "Safe mode": {
        "message": "Turvarežiimis"
    },
    "Save": {
        "message": "Salvesta"
    },
    "Saved Videos": {
        "message": "Salvestatud Videod"
    },
    "Saved for later": {
        "message": "Salvestatud hiljem"
    },
    "Search video title": {
        "message": "Otsing video pealkiri"
    },
    "Select a Country": {
        "message": "Vali riik"
    },
    "Select site to unblock": {
        "message": "Vali saidi blokeeringu"
    },
    "Server saved!": {
        "message": "Server salvestatud!"
    },
    "Set safe mode for $1 $2": {
        "message": "Määra safe mode $1 $2"
    },
    "Settings": {
        "message": "Seadistus"
    },
    "Share": {
        "message": "Osa"
    },
    "Share $1 on $2": {
        "message": "Osak $1 $2"
    },
    "Share $1 via $2": {
        "message": "Jagage $1 kaudu $2"
    },
    "Share with friends!": {
        "message": "Jaga sõpradega!"
    },
    "Sign up": {
        "message": "Registreeru"
    },
    "Solve buffering": {
        "message": "Lahenda puhverdusvõime"
    },
    "Solve buffering problems with": {
        "message": "Lahenda puhverdusvõime probleeme"
    },
    "Solves it": {
        "message": "Lahendab see"
    },
    "Staff Picks": {
        "message": "Töötajad Huvitavat"
    },
    "Start Hola": {
        "message": "alusta"
    },
    "Starting...": {
        "message": "Alustan..."
    },
    "Stop Hola": {
        "message": "Stopp Hola"
    },
    "Stopping peer routing...": {
        "message": "Peatumine peer suunamises ..."
    },
    "Stream": {
        "message": "Oja"
    },
    "Stream Instantly": {
        "message": "Stream Jalamaid"
    },
    "Submit": {
        "message": "Esitama"
    },
    "Support Hola": {
        "message": "Probleemid Hola"
    },
    "TC": {
        "message": "Turks ja Caicos"
    },
    "TD": {
        "message": "Tšaad"
    },
    "TF": {
        "message": "Prantsuse Lõunaalad"
    },
    "TG": {
        "message": "Minema"
    },
    "TH": {
        "message": "Tai"
    },
    "TJ": {
        "message": "Tadžikistan"
    },
    "TL": {
        "message": "Ida-Timor"
    },
    "TM": {
        "message": "Türkmenistan"
    },
    "TN": {
        "message": "Tuneesia"
    },
    "TR": {
        "message": "Türgi"
    },
    "TT": {
        "message": "Trinidad ja Tobago"
    },
    "TZ": {
        "message": "Tansaania"
    },
    "Talk to us on $1": {
        "message": "Räägi meile $1"
    },
    "Tell friends about $1": {
        "message": "Räägi sõpradele $1"
    },
    "Testing connection...": {
        "message": "Testimine ühendus ..."
    },
    "Thank you!": {
        "message": "Täname!"
    },
    "There seems to be an error": {
        "message": "Tundub olevat viga"
    },
    "Top popular sites": {
        "message": "Top populaarsed saidid"
    },
    "Translate to your language": {
        "message": "Tõlgi oma keelde"
    },
    "Try again": {
        "message": "Proovi uuesti"
    },
    "Try another server": {
        "message": "Proovige teise serverisse"
    },
    "Try it": {
        "message": "Proovi seda"
    },
    "Try safe mode": {
        "message": "Proovi safe mode"
    },
    "Try to <span>reload</span>": {
        "message": "Proovi <span>taaslaadida</span>"
    },
    "Trying another peer...": {
        "message": "Proovin veel peer ..."
    },
    "Turn off Accelerator": {
        "message": "Lülita Accelerator"
    },
    "Turn off Hola": {
        "message": "Lülita Hola"
    },
    "Turn on Accelerator": {
        "message": "Lülita Accelerator"
    },
    "Turn on Hola": {
        "message": "Lülita Hola"
    },
    "Turn on to get started": {
        "message": "Alustamiseks lülita sisse"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "Ühendriikide hajasaared"
    },
    "US": {
        "message": "Ameerika Ühendriigid"
    },
    "UZ": {
        "message": "Usbekistan"
    },
    "Unblocker": {
        "message": "Vabastaja"
    },
    "Unblocker is disabled": {
        "message": "Vabastaja on keelatud"
    },
    "Update": {
        "message": "Uuenda"
    },
    "Upgrade": {
        "message": "Uuenda"
    },
    "Using": {
        "message": "Kasutades"
    },
    "Using Hola": {
        "message": "Kasutades Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent ja Grenadiinid"
    },
    "VD": {
        "message": "Põhja-Vietnam"
    },
    "VE": {
        "message": "Venetsueela"
    },
    "VG": {
        "message": "Briti Neitsisaared"
    },
    "VI": {
        "message": "USA Neitsisaared"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome versioon on liiga vana, Hola kasutamiseks palun <a>uuenda</a> Chrome"
    },
    "Video stuck?": {
        "message": "Video ummikus?"
    },
    "Videos available for instant streaming": {
        "message": "Videod saadaval instant streaming"
    },
    "WF": {
        "message": "Wallis ja Futuna"
    },
    "WK": {
        "message": "Wake"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Soovid Holat kasutada muudel seadmetel? (Xbox, PS, Apple TV, iPhone...). Kliki siia"
    },
    "Want to know more?": {
        "message": "Tahad rohkem teada?"
    },
    "Watch Now": {
        "message": "Vaata Nüüd"
    },
    "We found $1 videos": {
        "message": "Leidsime $1 videod"
    },
    "We will be in touch with you soon": {
        "message": "Meil on teiega peagi"
    },
    "Working!": {
        "message": "Töö!"
    },
    "Working?": {
        "message": "Tööta?"
    },
    "Works on all sites but slower": {
        "message": "Töötab kõigi alade kuid aeglasem"
    },
    "YD": {
        "message": "Demokraatliku Rahvavabariigi Jeemen"
    },
    "YE": {
        "message": "Jeemen"
    },
    "Yes": {
        "message": "Jah"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Sa pead uuendama oma versiooni Opera kasutada Hola. Vajuta <a>siia</a> , et täiustada."
    },
    "ZA": {
        "message": "Lõuna-Aafrika Vabariik"
    },
    "ZM": {
        "message": "Sambia"
    },
    "ZZ": {
        "message": "määramata"
    },
    "app_desc": {
        "message": "Access veebilehed blokeeritud teie riigis, ettevõte või kooli Hola! Hola on tasuta ja lihtne kasutada!"
    },
    "app_name": {
        "message": "Hola parem internet"
    },
    "back to": {
        "message": "tagasi"
    },
    "changing...": {
        "message": "muudan..."
    },
    "cool sites": {
        "message": "cool saidid"
    },
    "current site": {
        "message": "praegune veebilehekülg"
    },
    "day": {
        "message": "päev"
    },
    "days": {
        "message": "päeva"
    },
    "even more...": {
        "message": "ja veel..."
    },
    "mode": {
        "message": "viis"
    },
    "more options...": {
        "message": "rohkem võimalusi..."
    },
    "not working?": {
        "message": "ei tööta?"
    },
    "not working? try another server": {
        "message": "ei tööta? proovida teise serverisse"
    },
    "on this page": {
        "message": "Sellel lehel"
    },
    "sites that are censored": {
        "message": "alasid, mis on tsenseeritud"
    },
    "start": {
        "message": "alusta"
    },
    "working? remember": {
        "message": "töö? mäletama"
    }
};
return E; });