'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " preko "
    },
    "$1 Buffering?": {
        "message": "$1 Primanje?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola pristupiti $2\n\nKliknite ovdje da učine isto: $3\n\nOn instalira Hola, što mi omogućuje surfanje Internetom brže i pristupiti $4$5"
    },
    "$1 from $2": {
        "message": "$1 iz $2"
    },
    "$1 not found": {
        "message": "$1 nije nađen"
    },
    "$1 via Hola": {
        "message": "$1 preko Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Neki Hola značajke nisu dostupne na vašem verziji)"
    },
    "AC": {
        "message": "Uzašašće otok"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Ujedinjeni Arapski Emirati"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua i Barbuda"
    },
    "AI": {
        "message": "Anguila"
    },
    "AL": {
        "message": "Albanija"
    },
    "AM": {
        "message": "Armenija"
    },
    "AN": {
        "message": "Nizozemski Antili"
    },
    "AQ": {
        "message": "Antarktik"
    },
    "AS": {
        "message": "Američka Samoa"
    },
    "AT": {
        "message": "Austrija"
    },
    "AU": {
        "message": "Australija"
    },
    "AX": {
        "message": "Alandski otoci"
    },
    "AZ": {
        "message": "Azerbajdžan"
    },
    "About": {
        "message": "O"
    },
    "About Hola": {
        "message": "O Hola"
    },
    "Accelerator": {
        "message": "Akcelerator"
    },
    "Accelerator is": {
        "message": "Accelerator je"
    },
    "Access $1 - cool site!": {
        "message": "Pristup $1 - super stranica!"
    },
    "Access $1?": {
        "message": "Pristupite $1?"
    },
    "Access any site from any country, free": {
        "message": "Pristupiti bilo kojem mjestu iz bilo koje zemlje, besplatan"
    },
    "Access cool sites": {
        "message": "Pristup kul stranice"
    },
    "Access more sites": {
        "message": "Pristupne više mjesta"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Pristup mjesta cenzuriran u vašoj zemlji i ubrzati vaše internet s Hola - besplatno!"
    },
    "Accessing $1 with Hola": {
        "message": "Pristupanje $1 s Hola"
    },
    "Account": {
        "message": "Račun"
    },
    "Account type": {
        "message": "Vrsta računa"
    },
    "Activating...": {
        "message": "Aktiviranje..."
    },
    "All ($1)": {
        "message": "Sve ($1)"
    },
    "Apply settings...": {
        "message": "Primjena postavki ..."
    },
    "Author site:": {
        "message": "Autor stranica:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Strašan!"
    },
    "BA": {
        "message": "Bosna i Hercegovina"
    },
    "BD": {
        "message": "Bangladeš"
    },
    "BE": {
        "message": "Belgija"
    },
    "BG": {
        "message": "Bugarska"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BL": {
        "message": "Sveti Bartolomej"
    },
    "BM": {
        "message": "Bermudi"
    },
    "BN": {
        "message": "Brunej"
    },
    "BO": {
        "message": "Bolivija"
    },
    "BQ": {
        "message": "Britanski antarktički teritorij"
    },
    "BS": {
        "message": "Bahami"
    },
    "BT": {
        "message": "Butan"
    },
    "BV": {
        "message": "Otok Bouvet"
    },
    "BW": {
        "message": "Bocvana"
    },
    "BY": {
        "message": "Bjelorusija"
    },
    "Back to $1": {
        "message": "Natrag na $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Budite prvi koji će dobiti Hola za iPhone / iPad - Registrirajte se sad:"
    },
    "Browsing": {
        "message": "Pregledavajući"
    },
    "Buffering problems?": {
        "message": "Problemi pufcrirajuća?"
    },
    "Buffering?": {
        "message": "Primanje sadržaja?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosovi Otoci"
    },
    "CD": {
        "message": "Demokratska Republika Kongo"
    },
    "CF": {
        "message": "Srednjoafrička Republika"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Švicarska"
    },
    "CI": {
        "message": "Obala Bjelokosti"
    },
    "CK": {
        "message": "Kukovi Otoci"
    },
    "CL": {
        "message": "Čile"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kina"
    },
    "CO": {
        "message": "Kolumbija"
    },
    "CP": {
        "message": "Otok Clipperton"
    },
    "CR": {
        "message": "Kostarika"
    },
    "CS": {
        "message": "Srbija i Crna Gora"
    },
    "CT": {
        "message": "Kantona i Enderbury Otoci"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Zeleni Rt"
    },
    "CX": {
        "message": "Božićni Otok"
    },
    "CY": {
        "message": "Cipar"
    },
    "CZ": {
        "message": "Češka Republika"
    },
    "Changing country...": {
        "message": "Promjena zemlju ..."
    },
    "Check out Hola for $1!": {
        "message": "Provjerite Hola za $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Provjerite Hola za mobilne uređaje"
    },
    "Check your Internet connection": {
        "message": "Provjerite jeste li Internet"
    },
    "Choose<br>Country": {
        "message": "Izabrati <br> Zemlja"
    },
    "Configuring...": {
        "message": "Podešavanje ..."
    },
    "Connecting...": {
        "message": "Povezivanje ..."
    },
    "Cool site!": {
        "message": "Cool stranica!"
    },
    "Creative licenses": {
        "message": "Creative licence"
    },
    "DD": {
        "message": "Istočna Njemačka"
    },
    "DE": {
        "message": "Njemačka"
    },
    "DJ": {
        "message": "Džibuti"
    },
    "DK": {
        "message": "Danska"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominikanska Republika"
    },
    "DZ": {
        "message": "Alžir"
    },
    "Delete": {
        "message": "Izbrisati"
    },
    "Deleted from my list": {
        "message": "Izbrisana iz mog popisa"
    },
    "Did it work?": {
        "message": "Je li uspjelo?"
    },
    "Did you experience any buffering?": {
        "message": "Jeste li iskusiti bilo kašnjenje?"
    },
    "Disliked it": {
        "message": "Nije mi se svidjelo"
    },
    "Don't show again for $1 for one week": {
        "message": "Nemojte ponovno pokazati za $1 za jedan tjedan"
    },
    "Don't show again for any site for one week": {
        "message": "Ne pokazuj za bilo mjesta za jedan tjedan"
    },
    "Downloading": {
        "message": "Skidanje"
    },
    "EA": {
        "message": "Ceuta i Melilla"
    },
    "EC": {
        "message": "Ekvador"
    },
    "EE": {
        "message": "Estonija"
    },
    "EG": {
        "message": "Egipat"
    },
    "EH": {
        "message": "Zapadna Sahara"
    },
    "ER": {
        "message": "Eritreja"
    },
    "ES": {
        "message": "Španjolska"
    },
    "ET": {
        "message": "Etiopija"
    },
    "EU": {
        "message": "Europska unija"
    },
    "Enable": {
        "message": "Omogućiti"
    },
    "Enable Hola Accelerator": {
        "message": "Omogućite Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Uživajte!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Uživanje Hola za Chrome?"
    },
    "Enter site to access": {
        "message": "Unesite mjesto za pristup"
    },
    "Enter your email": {
        "message": "Unesite svoju e-mail"
    },
    "FI": {
        "message": "Finska"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Falklandski Otoci"
    },
    "FM": {
        "message": "Mikronezija"
    },
    "FO": {
        "message": "Farski Otoci"
    },
    "FQ": {
        "message": "Francuski južni i antarktički teritoriji"
    },
    "FR": {
        "message": "Francuska"
    },
    "FX": {
        "message": "Kontinentalna Francuska"
    },
    "Fast": {
        "message": "Brzo"
    },
    "Finding new peers...": {
        "message": "Pronalaženje novih vršnjaka ..."
    },
    "Finding peers...": {
        "message": "Pronalaženje vršnjaka ..."
    },
    "Free": {
        "message": "Besplatno"
    },
    "From": {
        "message": "Od"
    },
    "Full list": {
        "message": "Cijeli popis"
    },
    "GB": {
        "message": "Velika Britanija"
    },
    "GE": {
        "message": "Gruzija"
    },
    "GF": {
        "message": "Francuska Gvajana"
    },
    "GG": {
        "message": "Mornarska majica"
    },
    "GH": {
        "message": "Gana"
    },
    "GL": {
        "message": "Grenland"
    },
    "GM": {
        "message": "Gambija"
    },
    "GN": {
        "message": "Gvineja"
    },
    "GP": {
        "message": "Gvadalupa"
    },
    "GQ": {
        "message": "Ekvatorska Gvineja"
    },
    "GR": {
        "message": "Grčka"
    },
    "GS": {
        "message": "Južna Gruzija i Južni Sendvič Otoci"
    },
    "GT": {
        "message": "Gvatemala"
    },
    "GW": {
        "message": "Gvineja Bisau"
    },
    "GY": {
        "message": "Gvajana"
    },
    "Get 24/7 Unblocking": {
        "message": "Dobiti 24/7 za deblokiranje"
    },
    "Get Free Premium": {
        "message": "Dobiti Slobodan Nagrada"
    },
    "Get Hola Accelerator": {
        "message": "Nabavite Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Nabavite Hola igrača"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Nabavite Hola Plus UN-prekida, ad-free uslugu."
    },
    "Get Hola Premium": {
        "message": "Nabavite Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Nabavite Hola za Android"
    },
    "Get Premium support": {
        "message": "Get Premium podršku"
    },
    "Get Unlimited Unblocking": {
        "message": "Dobiti neograničen deblokadu"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Dobiti pristup cenzuriranih stranicama, pokušajte ga sada: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Dobiti pomoć od inženjera preko skype:"
    },
    "Get the Fastest Servers": {
        "message": "Nabavite najbržih poslužitelja"
    },
    "Go": {
        "message": "Idi"
    },
    "Go Hola Premium": {
        "message": "Idi Hola Premium"
    },
    "HK": {
        "message": "Hong Kong S.A.R. Kine"
    },
    "HM": {
        "message": "Otok Heard i Otoci McDonald"
    },
    "HR": {
        "message": "Hrvatska"
    },
    "HU": {
        "message": "Mađarska"
    },
    "Hate it": {
        "message": "Mrzim to"
    },
    "Help": {
        "message": "Pomoći"
    },
    "Hey,\n\nI'm using": {
        "message": "Hej,\n\nja sam koristeći"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Pozdrav,\n\npočeo sam koristiti $1 ($2). To mi omogućuje surfanje Internetom brže i pristupiti $3 u svojoj zemlji."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ne može raditi jer je još jedan produžetak je kontroliranje svoje proxy postavke."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ne radi dobro na Windows 8 modu. Molimo prebaciti na desktop modu. Kliknite <a> ovdje </a> za upute"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nije dostupna odmah, ali radimo na tome."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola je isključen, pritisnite do uključili"
    },
    "Hola site list": {
        "message": "Hola Popis stranica"
    },
    "I can now access $1 from any country!": {
        "message": "Ja sada mogu pristupiti $1 iz bilo koje zemlje!"
    },
    "I did not experience any buffering": {
        "message": "Nisam iskustvo bilo kašnjenje"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Upravo sam pristupiti jedan cenzurirani stranice koristeći Hola za $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ja sam koristeći $1 do $2 pogledati u mojoj zemlji, i surfati brže!"
    },
    "IC": {
        "message": "Kanarski otoci"
    },
    "ID": {
        "message": "Indonezija"
    },
    "IE": {
        "message": "Irska"
    },
    "IL": {
        "message": "Izrael"
    },
    "IM": {
        "message": "Otok Man"
    },
    "IN": {
        "message": "Indija"
    },
    "IO": {
        "message": "Britanski Teritorij Indijskog Oceana"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Italija"
    },
    "Improve translation": {
        "message": "Poboljšati prijevod"
    },
    "Initializing...": {
        "message": "Pokreće se ..."
    },
    "Install": {
        "message": "Instalirati"
    },
    "Install Accelerator": {
        "message": "Instalirajte Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Uvesti Slobodan Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instalirajte Hola Engine nastaviti koristiti Hola besplatno"
    },
    "Instantly watch any torrent Video": {
        "message": "Odmah gledati bilo torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Pozovite prijatelje - besplatno Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Pozovite prijatelje. Get Premium."
    },
    "It was okay": {
        "message": "To je u redu"
    },
    "JE": {
        "message": "Dres"
    },
    "JM": {
        "message": "Jamajka"
    },
    "KE": {
        "message": "Kenija"
    },
    "KG": {
        "message": "Kirgistan"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komori"
    },
    "KN": {
        "message": "Sveti Kristofor i Nevis"
    },
    "KP": {
        "message": "Koreja, Sjeverna"
    },
    "KR": {
        "message": "Južna Koreja"
    },
    "KW": {
        "message": "Kuvajt"
    },
    "KY": {
        "message": "Kajmanski Otoci"
    },
    "KZ": {
        "message": "Kazakstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "Sveta Lucija"
    },
    "LI": {
        "message": "Lihtenštajn"
    },
    "LK": {
        "message": "Šri Lanka"
    },
    "LR": {
        "message": "Liberija"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Litva"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LV": {
        "message": "Latvija"
    },
    "LY": {
        "message": "Libijska Arapska Džamahirija"
    },
    "Language": {
        "message": "Jezik"
    },
    "Library": {
        "message": "Knjižnica"
    },
    "Like it": {
        "message": "Sviđa mi se"
    },
    "Loading": {
        "message": "Utovar"
    },
    "Loading site...": {
        "message": "Utovar"
    },
    "Log in": {
        "message": "Prijavite se"
    },
    "Log out": {
        "message": "Odjava"
    },
    "Love Hola?": {
        "message": "Ljubav Hola?"
    },
    "Love it": {
        "message": "Volim to"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldavija"
    },
    "ME": {
        "message": "Crna Gora"
    },
    "MF": {
        "message": "Sveti Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Maršalovi Otoci"
    },
    "MK": {
        "message": "Bivša Jugoslavenska Republika Makedonija"
    },
    "MM": {
        "message": "Mijanma"
    },
    "MN": {
        "message": "Mongolija"
    },
    "MO": {
        "message": "Makao S.A.R. Kine"
    },
    "MP": {
        "message": "Sjeverni Marijanski Otoci"
    },
    "MQ": {
        "message": "Martinik"
    },
    "MR": {
        "message": "Mauritanija"
    },
    "MS": {
        "message": "Montserat"
    },
    "MU": {
        "message": "Mauricijus"
    },
    "MV": {
        "message": "Maldivi"
    },
    "MW": {
        "message": "Malavi"
    },
    "MX": {
        "message": "Meksiko"
    },
    "MY": {
        "message": "Malezija"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Učinite vaš internet bolje s $1"
    },
    "Menu": {
        "message": "Izbornik"
    },
    "Might not work on all sites": {
        "message": "Možda neće raditi na svim stranicama"
    },
    "Mode": {
        "message": "Način"
    },
    "More countries": {
        "message": "Više zemalja"
    },
    "More sites...": {
        "message": "više..."
    },
    "More...": {
        "message": "više..."
    },
    "My Account": {
        "message": "Moj račun"
    },
    "My History": {
        "message": "Moja Povijest"
    },
    "My Settings": {
        "message": "Moje postavke"
    },
    "My favorites": {
        "message": "Moji favoriti"
    },
    "NA": {
        "message": "Namibija"
    },
    "NC": {
        "message": "Nova Kaledonija"
    },
    "NF": {
        "message": "Otok Norfolk"
    },
    "NG": {
        "message": "Nigerija"
    },
    "NI": {
        "message": "Nikaragva"
    },
    "NL": {
        "message": "Nizozemska"
    },
    "NO": {
        "message": "Norveška"
    },
    "NQ": {
        "message": "Dronning Maud Zemljišta"
    },
    "NT": {
        "message": "Neutralna zona"
    },
    "NZ": {
        "message": "Novi Zeland"
    },
    "Need Help?": {
        "message": "Trebate li pomoć?"
    },
    "Never ask me again": {
        "message": "Nikada me više pitati"
    },
    "Never be a peer": {
        "message": "Nikad se peer"
    },
    "No": {
        "message": "Ne"
    },
    "No idle peers found.": {
        "message": "Ne miruje vršnjaci pronađena."
    },
    "No recent videos found": {
        "message": "Nema nedavnih video pronađeno"
    },
    "No saved videos found": {
        "message": "Nema spremljenih video pronađeno"
    },
    "No title": {
        "message": "Bez naslova"
    },
    "No videos found": {
        "message": "Nije pronađen nijedan videozapis"
    },
    "No videos found on active page": {
        "message": "Nije pronađen niti jedan u aktivnoj stranici video"
    },
    "No, Thanks": {
        "message": "Ne, hvala"
    },
    "No, fix it": {
        "message": "Ne, to popraviti"
    },
    "Not working?": {
        "message": "Ne radi?"
    },
    "Number of users that pressed not working": {
        "message": "Broj korisnika koji nije pritisnut radnih"
    },
    "Number of users that use this option": {
        "message": "Broj korisnika koji koriste ovu mogućnost"
    },
    "Off": {
        "message": "Isključeno"
    },
    "Oh, yes!": {
        "message": "O, da!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Stara verzija Firefox. Press <a> ovdje </a> nadograditi."
    },
    "On": {
        "message": "Na"
    },
    "Open Media Player": {
        "message": "Otvorite Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Naš Brand New MPlayer dolazi uskoro!"
    },
    "PC": {
        "message": "Pacific Islands Povjerenje teritorij"
    },
    "PF": {
        "message": "Francuska Polinezija"
    },
    "PG": {
        "message": "Papua Nova Gvineja"
    },
    "PH": {
        "message": "Filipini"
    },
    "PL": {
        "message": "Poljska"
    },
    "PM": {
        "message": "Sveti Petar i Miguel"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Portoriko"
    },
    "PS": {
        "message": "Palestinsko Područje"
    },
    "PU": {
        "message": "Američki Razno Pacific Islands"
    },
    "PY": {
        "message": "Paragvaj"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Molimo onemogućiti ostale <a>nastavke</a> za koje mislite da bi mogli kontrolirati svoje proxy postavke, kao što su ad-blokatora, drugim VPN uslugama, itd."
    },
    "Please enter a valid email address.": {
        "message": "Molimo da unesete ispravnu e-mail adresu."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Unesite adresu web stranice, kao facebook.com"
    },
    "Please help us get better": {
        "message": "Molimo nam pomoći da se bolje"
    },
    "Popular in $1": {
        "message": "Popularno u $1"
    },
    "Popular in the world": {
        "message": "Popularna u svijetu"
    },
    "Popular sites": {
        "message": "Popularni web stranice"
    },
    "Premium": {
        "message": "Premija"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Okolnih Oceanija"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Rumunjska"
    },
    "RS": {
        "message": "Srbija"
    },
    "RU": {
        "message": "Rusija"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Ocijeni nas"
    },
    "Recent Videos": {
        "message": "Najnoviji Video"
    },
    "Reload": {
        "message": "Osvježi"
    },
    "Reload Hola": {
        "message": "Osvježi Hola"
    },
    "Remember server": {
        "message": "Zapamti poslužitelj"
    },
    "Report a problem": {
        "message": "Prijavite problem"
    },
    "Retry safe mode": {
        "message": "Pokušaj ponovo siguran način"
    },
    "SA": {
        "message": "Saudijska Arabija"
    },
    "SB": {
        "message": "Solomonski Otoci"
    },
    "SC": {
        "message": "Sejšeli"
    },
    "SE": {
        "message": "Švedska"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Sveta Helena"
    },
    "SI": {
        "message": "Slovenija"
    },
    "SJ": {
        "message": "Svalbard i Jan Mayen"
    },
    "SK": {
        "message": "Slovačka"
    },
    "SL": {
        "message": "Sijera Leone"
    },
    "SO": {
        "message": "Somalija"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sveti Toma i Prinsipe"
    },
    "SU": {
        "message": "SSSR republika"
    },
    "SY": {
        "message": "Sirija"
    },
    "SZ": {
        "message": "Svazi"
    },
    "Safe": {
        "message": "Sigurno"
    },
    "Safe mode": {
        "message": "Siguran način"
    },
    "Save": {
        "message": "Spremi"
    },
    "Saved Videos": {
        "message": "Spremljene Video"
    },
    "Saved for later": {
        "message": "Spremiti za kasnije"
    },
    "Search video title": {
        "message": "Pretraživanje videa naslov"
    },
    "Select a Country": {
        "message": "Odaberite neku zemlju"
    },
    "Select site to unblock": {
        "message": "Odaberite mjesto da se deblokira"
    },
    "Server saved!": {
        "message": "Server spašen!"
    },
    "Set safe mode for $1 $2": {
        "message": "Postavite sigurnosni mod za $1 $2"
    },
    "Settings": {
        "message": "Postavke"
    },
    "Share": {
        "message": "Udio"
    },
    "Share $1 on $2": {
        "message": "Podijelite $1 na $2"
    },
    "Share $1 via $2": {
        "message": "Podijelite $1 preko $2"
    },
    "Share with friends!": {
        "message": "Podijeli sa prijateljima!"
    },
    "Sign up": {
        "message": "Prijavite se"
    },
    "Solve buffering": {
        "message": "Riješite bufferinga"
    },
    "Solve buffering problems with": {
        "message": "Riješite međuspremnički problema s"
    },
    "Solves it": {
        "message": "Rješava"
    },
    "Staff Picks": {
        "message": "Odabir osoblja"
    },
    "Start Hola": {
        "message": "početak"
    },
    "Starting...": {
        "message": "Počevši ..."
    },
    "Stop Hola": {
        "message": "Zaustavi Hola"
    },
    "Stopping peer routing...": {
        "message": "Zaustavljanje vršnjaka usmjeravanje ..."
    },
    "Stream": {
        "message": "Potok"
    },
    "Stream Instantly": {
        "message": "Stream odmah"
    },
    "Submit": {
        "message": "Podnijeti"
    },
    "Support Hola": {
        "message": "Podrška Hola"
    },
    "TC": {
        "message": "Turkski i Kaikos Otoci"
    },
    "TD": {
        "message": "Čad"
    },
    "TF": {
        "message": "Francuski Južni Teritoriji"
    },
    "TG": {
        "message": "Ići"
    },
    "TH": {
        "message": "Tajland"
    },
    "TJ": {
        "message": "Tadžikistan"
    },
    "TL": {
        "message": "Istočni Timor"
    },
    "TN": {
        "message": "Tunis"
    },
    "TO": {
        "message": "Laka dvokolica"
    },
    "TR": {
        "message": "Turska"
    },
    "TT": {
        "message": "Trinidad i Tobago"
    },
    "TW": {
        "message": "Tajvan"
    },
    "TZ": {
        "message": "Tanzanija"
    },
    "Talk to us on $1": {
        "message": "Razgovarajte s nama na $1"
    },
    "Tell friends about $1": {
        "message": "Recite prijateljima oko $1"
    },
    "Testing connection...": {
        "message": "Testiranje veze ..."
    },
    "Thank you!": {
        "message": "Hvala vam!"
    },
    "There seems to be an error": {
        "message": "Čini se da postoji greška"
    },
    "Top popular sites": {
        "message": "Top popularne web stranice"
    },
    "Translate to your language": {
        "message": "Prijevod na svoj jezik"
    },
    "Try again": {
        "message": "Pokušaj ponovno"
    },
    "Try another server": {
        "message": "Pokušajte drugi poslužitelj"
    },
    "Try it": {
        "message": "Pokušajte ga"
    },
    "Try safe mode": {
        "message": "Pokušajte siguran način"
    },
    "Try to <span>reload</span>": {
        "message": "Pokušajte <span> reload </span>"
    },
    "Trying another peer...": {
        "message": "Pokušaj drugi peer ..."
    },
    "Turn off Accelerator": {
        "message": "Isključite Accelerator"
    },
    "Turn off Hola": {
        "message": "Isključite Hola"
    },
    "Turn on Accelerator": {
        "message": "Uključite Accelerator"
    },
    "Turn on Hola": {
        "message": "Uključite Hola"
    },
    "Turn on to get started": {
        "message": "Uključite se početak"
    },
    "UA": {
        "message": "Ukrajina"
    },
    "UM": {
        "message": "Ujedinjene Države Manjih Pacifičkih Otoka"
    },
    "US": {
        "message": "Sjedinjene Države"
    },
    "UY": {
        "message": "Urugvaj"
    },
    "Unblocker is disabled": {
        "message": "Unblocker je onemogućen"
    },
    "Update": {
        "message": "Ažuriranje"
    },
    "Upgrade": {
        "message": "Ažuriranje"
    },
    "Using": {
        "message": "Korištenje"
    },
    "Using Hola": {
        "message": "Korištenje Hola"
    },
    "VA": {
        "message": "Grad Vatikan"
    },
    "VC": {
        "message": "Sveti Vincent i Grenadini"
    },
    "VD": {
        "message": "Sjeverni Vijetnam"
    },
    "VE": {
        "message": "Venecuela"
    },
    "VG": {
        "message": "Britanski Djevičanski Otoci"
    },
    "VI": {
        "message": "Američki Djevičanski Otoci"
    },
    "VN": {
        "message": "Vijetnam"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Vrlo staru verziju Chrome, <a> ažuriranje </a> Chrome koristiti Hola"
    },
    "Video stuck?": {
        "message": "Video zapeli?"
    },
    "Videos available for instant streaming": {
        "message": "Video dostupni za instant streaming"
    },
    "WF": {
        "message": "Wallis i Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Želite Hola na drugim uređajima? (Xbox, PS, Apple TV, iPhone ...). Kliknite ovdje"
    },
    "Want to know more?": {
        "message": "Želite li znati više?"
    },
    "Watch Now": {
        "message": "Gledajte Sada"
    },
    "We found $1 videos": {
        "message": "Pronašli smo $1 videa"
    },
    "We will be in touch with you soon": {
        "message": "Mi ćemo biti u kontaktu s vama uskoro"
    },
    "Working!": {
        "message": "Rad!"
    },
    "Working?": {
        "message": "Rad?"
    },
    "Works on all sites but slower": {
        "message": "Radovi na svim stranicama, ali sporije"
    },
    "YD": {
        "message": "Narodna Demokratska Republika Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "YT": {
        "message": "Majote"
    },
    "Yes": {
        "message": "Da"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Morate nadograditi na najnoviju verziju Opere za korištenje Hola. Pritisnite <a>ovdje</a> za nadogradnju."
    },
    "ZA": {
        "message": "Južnoafrička Republika"
    },
    "ZM": {
        "message": "Zambija"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "nepoznata ili nevažeća oblast"
    },
    "app_desc": {
        "message": "Pristup web stranice blokiran u vašoj zemlji, tvrtku ili školu s Hola! Hola je besplatan i jednostavan za korištenje!"
    },
    "app_name": {
        "message": "Hola Bolje Internet"
    },
    "back to": {
        "message": "natrag na"
    },
    "changing...": {
        "message": "mijenjaju ..."
    },
    "cool sites": {
        "message": "Cool sajtove"
    },
    "current site": {
        "message": "Trenutna stranica"
    },
    "day": {
        "message": "dan"
    },
    "days": {
        "message": "dana"
    },
    "even more...": {
        "message": "još više ..."
    },
    "mode": {
        "message": "Način"
    },
    "more options...": {
        "message": "više opcija ..."
    },
    "not working?": {
        "message": "ne radi?"
    },
    "not working? try another server": {
        "message": "ne radi? pokušajte drugi poslužitelj"
    },
    "on this page": {
        "message": "na ovoj stranici"
    },
    "sites that are censored": {
        "message": "mjesta koja se cenzurira"
    },
    "start": {
        "message": "početak"
    },
    "working? remember": {
        "message": "radi? zapamtiti"
    }
};
return E; });