'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " cez "
    },
    "$1 Buffering?": {
        "message": "$1 seká?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola prístup $2\n\nKliknite tu, aby urobili to isté: $3\n\nInštaluje Hola, ktorý mi umožňuje surfovať po internete rýchlejšie a získať prístup $4$5"
    },
    "$1 from $2": {
        "message": "$1 z $2"
    },
    "$1 not found": {
        "message": "$1 nebol nájdený"
    },
    "$1 via Hola": {
        "message": "$1 cez Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(niektoré funkcie Hola nie sú dostupné vo vašej verzii)"
    },
    "AC": {
        "message": "Ascension ostrov"
    },
    "AE": {
        "message": "Spojené arabské emiráty"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua a Barbados"
    },
    "AL": {
        "message": "Albánsko"
    },
    "AM": {
        "message": "Arménsko"
    },
    "AN": {
        "message": "Holandské Antily"
    },
    "AQ": {
        "message": "Antarktída"
    },
    "AR": {
        "message": "Argentína"
    },
    "AS": {
        "message": "Americká Samoa"
    },
    "AT": {
        "message": "Rakúsko"
    },
    "AU": {
        "message": "Austrália"
    },
    "AX": {
        "message": "Alandské ostrovy"
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
        "message": "Zrýchľovač"
    },
    "Accelerator is": {
        "message": "Accelerator je"
    },
    "Access $1 - cool site!": {
        "message": "Prístup $1 - super stránky!"
    },
    "Access $1?": {
        "message": "Získaj prístup k $1?"
    },
    "Access any site from any country, free": {
        "message": "Získaj prístup k akejkoľvek stránke z akejkoľvek krajiny, zadarmo"
    },
    "Access cool sites": {
        "message": "Prístup k Skvelé stránky"
    },
    "Access more sites": {
        "message": "Získaj prístup k viacerým stránkam"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Prístupové miesta cenzurováno vo vašej krajine a zrýchliť Internet s Hola - zadarmo!"
    },
    "Accessing $1 with Hola": {
        "message": "Prístup $1 s Hola"
    },
    "Account": {
        "message": "Účet"
    },
    "Account type": {
        "message": "Typ účtu"
    },
    "Activating...": {
        "message": "Aktivácia..."
    },
    "All ($1)": {
        "message": "Všetko ($1)"
    },
    "Apply settings...": {
        "message": "Potvrdiť nastavenie..."
    },
    "Author site:": {
        "message": "Autor stránky:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Super!"
    },
    "BA": {
        "message": "Bosna a Hercegovina"
    },
    "BD": {
        "message": "Bangladéš"
    },
    "BE": {
        "message": "Belgicko"
    },
    "BG": {
        "message": "Bulharsko"
    },
    "BH": {
        "message": "Bahrajn"
    },
    "BL": {
        "message": "Svätý Bartolomej"
    },
    "BM": {
        "message": "Bermudy"
    },
    "BN": {
        "message": "Brunej"
    },
    "BO": {
        "message": "Bolívia"
    },
    "BQ": {
        "message": "Britské antarktické územie"
    },
    "BR": {
        "message": "Brazília"
    },
    "BS": {
        "message": "Bahamy"
    },
    "BT": {
        "message": "Bután"
    },
    "BV": {
        "message": "Bouvetov ostrov"
    },
    "BY": {
        "message": "Bielorusko"
    },
    "Back to $1": {
        "message": "Späť na $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Buďte prvý, kto získa Hola pre iPhone/iPad - Zaregistrujte sa teraz:"
    },
    "Browsing": {
        "message": "Prechádzanie"
    },
    "Buffering problems?": {
        "message": "Problémy so sekaním?"
    },
    "Buffering?": {
        "message": "Seká?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosové ostrovy"
    },
    "CD": {
        "message": "Konžská demokratická republika"
    },
    "CF": {
        "message": "Stredoafrická republika"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Švajčiarsko"
    },
    "CI": {
        "message": "Pobrežie Slonoviny"
    },
    "CK": {
        "message": "Cookove ostrovy"
    },
    "CL": {
        "message": "Čile"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Čína"
    },
    "CO": {
        "message": "Kolumbia"
    },
    "CP": {
        "message": "Ostrov Clipperton"
    },
    "CR": {
        "message": "Kostarika"
    },
    "CS": {
        "message": "Srbsko a Čierna Hora"
    },
    "CT": {
        "message": "Canton a Enderbury"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kapverdy"
    },
    "CX": {
        "message": "Vianočný ostrov"
    },
    "CZ": {
        "message": "Česká republika"
    },
    "Changing country...": {
        "message": "Mením krajinu..."
    },
    "Check out Hola for $1!": {
        "message": "Pozrite sa na Hola za $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Pozrite sa na Hola pre mobilné zariadenia"
    },
    "Check your Internet connection": {
        "message": "Skontrolujte, či ste pripojený na Internet"
    },
    "Choose<br>Country": {
        "message": "Vybrať<br>Krajinu"
    },
    "Configuring...": {
        "message": "Konfigurácia..."
    },
    "Connecting...": {
        "message": "Pripájanie..."
    },
    "Cool site!": {
        "message": "Super stránky!"
    },
    "Creative licenses": {
        "message": "Kreatívne licencie"
    },
    "DD": {
        "message": "Východné Nemecko"
    },
    "DE": {
        "message": "Nemecko"
    },
    "DJ": {
        "message": "Džibuti"
    },
    "DK": {
        "message": "Dánsko"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominikánska republika"
    },
    "DZ": {
        "message": "Alžírsko"
    },
    "Delete": {
        "message": "Vymazať"
    },
    "Deleted from my list": {
        "message": "Vypúšťa sa z môjho zoznamu"
    },
    "Did it work?": {
        "message": "Funguje?"
    },
    "Did you experience any buffering?": {
        "message": "Zaznamenali ste nejaké sekanie?"
    },
    "Disliked it": {
        "message": "Nepáčilo sa to"
    },
    "Don't show again for $1 for one week": {
        "message": "Znova neukazovať pre $1 po dobu jedného týždňa"
    },
    "Don't show again for any site for one week": {
        "message": "Znovu neukazovať pre žiadnu stránku po dobu jedného týždňa"
    },
    "Downloading": {
        "message": "Sťahovanie"
    },
    "EA": {
        "message": "Ceuta a Melilla"
    },
    "EC": {
        "message": "Ekvádor"
    },
    "EE": {
        "message": "Estónsko"
    },
    "EH": {
        "message": "Západná Sahara"
    },
    "ES": {
        "message": "Španielsko"
    },
    "ET": {
        "message": "Etiópia"
    },
    "EU": {
        "message": "Európska únia"
    },
    "Enable": {
        "message": "Povoliť"
    },
    "Enable Hola Accelerator": {
        "message": "Povoliť Holá Zrýchlovač"
    },
    "Enjoy!": {
        "message": "Užite si to!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Radosť Hola pre Chrome?"
    },
    "Enter site to access": {
        "message": "Zadajte adresu pre prístup"
    },
    "Enter your email": {
        "message": "Zadajte svoj e-mail"
    },
    "FI": {
        "message": "Fínsko"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Falklandské ostrovy"
    },
    "FM": {
        "message": "Mikronézia"
    },
    "FO": {
        "message": "Faerské ostrovy"
    },
    "FQ": {
        "message": "Francúzske južné a antarktické územia"
    },
    "FR": {
        "message": "Francúzsko"
    },
    "FX": {
        "message": "Metropolitné Francúzsko"
    },
    "Finding new peers...": {
        "message": "Hľadám nový peer..."
    },
    "Finding peers...": {
        "message": "Hľadám peer..."
    },
    "Free": {
        "message": "Zadarmo"
    },
    "From": {
        "message": "Od"
    },
    "Full list": {
        "message": "Plný zoznam"
    },
    "GB": {
        "message": "Spojené kráľovstvo"
    },
    "GE": {
        "message": "Gruzínsko"
    },
    "GF": {
        "message": "Francúzska Guayana"
    },
    "GI": {
        "message": "Gibraltár"
    },
    "GL": {
        "message": "Grónsko"
    },
    "GQ": {
        "message": "Rovníková Guinea"
    },
    "GR": {
        "message": "Grécko"
    },
    "GS": {
        "message": "Južná Georgia a Južné Sandwichove ostrovy"
    },
    "GY": {
        "message": "Guayana"
    },
    "Get 24/7 Unblocking": {
        "message": "Získať 24/7 Odblokovač"
    },
    "Get Free Premium": {
        "message": "Získajte zadarmo Premium"
    },
    "Get Hola Accelerator": {
        "message": "Získať Hola Zrýchlovač"
    },
    "Get Hola Player": {
        "message": "Získať Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Získajte Hola Plus, neprerušovanú službu bez reklám."
    },
    "Get Hola Premium": {
        "message": "Získať Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Získať Hola pre Android"
    },
    "Get Premium support": {
        "message": "Získať Premium podporu"
    },
    "Get Unlimited Unblocking": {
        "message": "Získať neobmedzené odblokovanie"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Získajte prístup k Cenzurované stránky, skúste to teraz: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Získajte pomoc technika cez skype:"
    },
    "Get the Fastest Servers": {
        "message": "Získajte najrýchlejšie servery"
    },
    "Go": {
        "message": "Choď"
    },
    "Go Hola Premium": {
        "message": "Prejsť na Hola Premium"
    },
    "HK": {
        "message": "Hong Kong S.A.R. Číny"
    },
    "HM": {
        "message": "Heardove ostrovy a McDonaldove ostrovy"
    },
    "HR": {
        "message": "Chorvátsko"
    },
    "HU": {
        "message": "Maďarsko"
    },
    "Hate it": {
        "message": "Nenávidieť"
    },
    "Help": {
        "message": "Pomoc"
    },
    "Hey,\n\nI'm using": {
        "message": "Ahoj,\n\nja som s použitím"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Ahoj,\n\nsom začal používať $1 ($2). To mi umožňuje surfovať po internete rýchlejšie a získať prístup $3 v mojej krajine."
    },
    "Hola Accelerator": {
        "message": "Hola Zrýchlovač"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola nemôže správne fungovať, pretože iné rozšírenie ovláda nastavenia proxy servera."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nefunguje dobre v režime systému Windows 8. Prosím prepnite na režim plochy. Kliknite <a>sem</a> pre inštrukcie"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nie je k dispozícii práve teraz, ale pracujeme na tom."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola je vypnuté, kliknite na tlačidlo pre zapnutie"
    },
    "Hola site list": {
        "message": "Hola zoznam stránok"
    },
    "I can now access $1 from any country!": {
        "message": "Teraz môžem pristupovať $1 z akejkoľvek krajiny!"
    },
    "I did not experience any buffering": {
        "message": "Nemám žiadne problémy so sekaním"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Len som prístup Cenzurované stránky pomocou Hola za $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ja používam $1 zobrazenie $2 v mojej krajine, a surfovať rýchlejšie!"
    },
    "IC": {
        "message": "Kanárske ostrovy"
    },
    "ID": {
        "message": "Indonézia"
    },
    "IE": {
        "message": "Írsko"
    },
    "IL": {
        "message": "Izrael"
    },
    "IM": {
        "message": "Ostrov Man"
    },
    "IN": {
        "message": "Indie"
    },
    "IO": {
        "message": "Britské územie v Indickom oceáne"
    },
    "IQ": {
        "message": "Irak"
    },
    "IR": {
        "message": "Irán"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Taliansko"
    },
    "Improve translation": {
        "message": "Zlepšite preklad"
    },
    "Initializing...": {
        "message": "Inicializácia..."
    },
    "Install": {
        "message": "Inštalovať"
    },
    "Install Accelerator": {
        "message": "Nainštalovať Zrýchlovač"
    },
    "Install Free Hola Accelerator": {
        "message": "Nainštalovať zdarma Hola Zrýchlovač"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Nainštalujte Hola Engine aj naďalej používať Hola zadarmo"
    },
    "Instantly watch any torrent Video": {
        "message": "Okamžite sledovať akúkoľvek torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Pozvi kamarátov - Premium zadarmo."
    },
    "Invite friends. Get Premium.": {
        "message": "Pozvi kamarátov. Získaj Premium."
    },
    "It was okay": {
        "message": "To bolo v poriadku"
    },
    "JE": {
        "message": "Trikot"
    },
    "JM": {
        "message": "Jamajka"
    },
    "JO": {
        "message": "Jordánsko"
    },
    "JP": {
        "message": "Japonsko"
    },
    "KE": {
        "message": "Keňa"
    },
    "KG": {
        "message": "Kirgizsko"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komory"
    },
    "KN": {
        "message": "Saint Kitts a Nevis"
    },
    "KP": {
        "message": "Kórejská ľudovodemokratická republika"
    },
    "KR": {
        "message": "Kórejská republika"
    },
    "KW": {
        "message": "Kuvajt"
    },
    "KY": {
        "message": "Kajmanské ostrovy"
    },
    "KZ": {
        "message": "Kazachstan"
    },
    "LA": {
        "message": "Laoská ľudovodemokratická republika"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "Svätá Lucia"
    },
    "LI": {
        "message": "Lichtenštajnsko"
    },
    "LK": {
        "message": "Srí Lanka"
    },
    "LR": {
        "message": "Libéria"
    },
    "LT": {
        "message": "Litva"
    },
    "LU": {
        "message": "Luxembursko"
    },
    "LV": {
        "message": "Lotyšsko"
    },
    "LY": {
        "message": "Lýbijská arabská džamahírija"
    },
    "Language": {
        "message": "Jazyk"
    },
    "Library": {
        "message": "Knižnica"
    },
    "Like it": {
        "message": "To páči"
    },
    "Loading": {
        "message": "Načítavanie"
    },
    "Loading site...": {
        "message": "Načítavam stránku"
    },
    "Log in": {
        "message": "Prihlásiť sa"
    },
    "Log out": {
        "message": "Odhlásiť sa"
    },
    "Love Hola?": {
        "message": "Máš rád Hola?"
    },
    "Love it": {
        "message": "Miluj to"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldavsko"
    },
    "ME": {
        "message": "Čierna Hora"
    },
    "MF": {
        "message": "Svätý Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshallove ostrovy"
    },
    "MK": {
        "message": "Macedónsko"
    },
    "MM": {
        "message": "Mjanmarsko"
    },
    "MN": {
        "message": "Mongolsko"
    },
    "MO": {
        "message": "Makao S.A.R. Číny"
    },
    "MP": {
        "message": "Severné Mariány"
    },
    "MQ": {
        "message": "Martinik"
    },
    "MR": {
        "message": "Mauritánia"
    },
    "MU": {
        "message": "Maurícius"
    },
    "MV": {
        "message": "Maldivy"
    },
    "MX": {
        "message": "Mexiko"
    },
    "MY": {
        "message": "Malajzia"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Urob si svoj Internet lepšie $1"
    },
    "Menu": {
        "message": "Ponuka"
    },
    "Might not work on all sites": {
        "message": "Nemusí fungovať na všetkých stránkach"
    },
    "Mode": {
        "message": "Režim"
    },
    "More countries": {
        "message": "Ďalšie krajiny"
    },
    "More sites...": {
        "message": "Viac stránok..."
    },
    "More...": {
        "message": "Viac..."
    },
    "My Account": {
        "message": "Môj účet"
    },
    "My History": {
        "message": "Moja história"
    },
    "My Settings": {
        "message": "Moje nastavenia"
    },
    "My favorites": {
        "message": "Moje obľúbené"
    },
    "NA": {
        "message": "Namíbia"
    },
    "NC": {
        "message": "Nová Kaledónia"
    },
    "NF": {
        "message": "Norfolkov ostrov"
    },
    "NG": {
        "message": "Nigéria"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Holandsko"
    },
    "NO": {
        "message": "Nórsko"
    },
    "NP": {
        "message": "Nepál"
    },
    "NZ": {
        "message": "Nový Zéland"
    },
    "Need Help?": {
        "message": "Potrebujete pomoc?"
    },
    "Never ask me again": {
        "message": "Nepýtať sa znova"
    },
    "Never be a peer": {
        "message": "Nikdy byť peer"
    },
    "No": {
        "message": "Nie"
    },
    "No idle peers found.": {
        "message": "Nenašiel sa žiadne nečinný peer."
    },
    "No recent videos found": {
        "message": "Neboli nájdené žiadne Najnovšie videá"
    },
    "No saved videos found": {
        "message": "Neboli nájdené žiadne uložené videá"
    },
    "No title": {
        "message": "Bez názvu"
    },
    "No videos found": {
        "message": "Neboli nájdené žiadne videá"
    },
    "No videos found on active page": {
        "message": "Nájdené na aktívnej strane žiadne videá"
    },
    "No, Thanks": {
        "message": "Nie, ďakujem"
    },
    "No, fix it": {
        "message": "Nie, oprav to"
    },
    "Not working?": {
        "message": "Nefunguje?"
    },
    "Number of users that pressed not working": {
        "message": "Počet užívateľov, ktorí stlačili nefunguje"
    },
    "Number of users that use this option": {
        "message": "Počet užívateľov, ktorí používajú túto možnosť"
    },
    "OM": {
        "message": "Omán"
    },
    "Oh, yes!": {
        "message": "Ó, áno!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Stará verzia Firefoxu. Kliknite <a>sem</a> pre aktualizáciu."
    },
    "On": {
        "message": "Na"
    },
    "Open Media Player": {
        "message": "Otvorený Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Náš zbrusu nový Mplayer sa blíži!"
    },
    "PC": {
        "message": "Tichomorských ostrovov Dôvera území"
    },
    "PF": {
        "message": "Francúzska Polynézia"
    },
    "PG": {
        "message": "Papua Nová Guinea"
    },
    "PH": {
        "message": "Filipíny"
    },
    "PL": {
        "message": "Poľsko"
    },
    "PM": {
        "message": "Saint Pierre a Miquelon"
    },
    "PN": {
        "message": "Pitcairnove ostrovy"
    },
    "PR": {
        "message": "Portoriko"
    },
    "PS": {
        "message": "Palestínske územie"
    },
    "PT": {
        "message": "Portugalsko"
    },
    "PU": {
        "message": "Americké Rôzne Tichomorské ostrovy"
    },
    "PY": {
        "message": "Paraguaj"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Prosím zakážte iné <a>rozšírenia</a>, ktoré môžu ovplyvňovať nastavenia proxy. Napríklad ad-blocker, iné VPN služby, atď."
    },
    "Please enter a valid email address.": {
        "message": "Prosím zadajte platnú e-mailovú adresu."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Prosím zadajte adresu webovej stránky, napríklad facebook.com"
    },
    "Please help us get better": {
        "message": "Pomôžte nám zlepšiť sa"
    },
    "Popular in $1": {
        "message": "Populárne v $1"
    },
    "Popular in the world": {
        "message": "Populárne vo svete"
    },
    "Popular sites": {
        "message": "Obľúbené stránky"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Odľahlej Oceánia"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Rumunsko"
    },
    "RS": {
        "message": "Srbsko"
    },
    "RU": {
        "message": "Ruská federácia"
    },
    "Rate us": {
        "message": "Ohodnoť nás"
    },
    "Recent Videos": {
        "message": "Posledné videá"
    },
    "Reload": {
        "message": "Znovu načítať"
    },
    "Reload Hola": {
        "message": "Znovu načítať Hola"
    },
    "Remember server": {
        "message": "Zapamätať server"
    },
    "Report a problem": {
        "message": "Nahlásiť problém"
    },
    "Retry safe mode": {
        "message": "Opakovať núdzový režim"
    },
    "SA": {
        "message": "Saudská Arábia"
    },
    "SB": {
        "message": "Šalamúnove ostrovy"
    },
    "SC": {
        "message": "Seychelské ostrovy"
    },
    "SD": {
        "message": "Sudán"
    },
    "SE": {
        "message": "Švédsko"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Svätá Helena"
    },
    "SI": {
        "message": "Slovinsko"
    },
    "SJ": {
        "message": "Špicbergy a Jan Mayen"
    },
    "SK": {
        "message": "Slovenská republika"
    },
    "SM": {
        "message": "San Maríno"
    },
    "SO": {
        "message": "Somálsko"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Svätý Tomáš a Princove ostrovy"
    },
    "SU": {
        "message": "ZSSR"
    },
    "SV": {
        "message": "Salvador"
    },
    "SY": {
        "message": "Sýrska arabská republika"
    },
    "SZ": {
        "message": "Svazijsko"
    },
    "Safe mode": {
        "message": "Bezpečnostný mód"
    },
    "Saved Videos": {
        "message": "Uložené Videos"
    },
    "Saved for later": {
        "message": "Uložené na neskôr"
    },
    "Search video title": {
        "message": "Hľadaj názov videa"
    },
    "Select a Country": {
        "message": "Vyberte krajinu"
    },
    "Select site to unblock": {
        "message": "Vyberte miesto na odblokovanie"
    },
    "Server saved!": {
        "message": "Server uložený!"
    },
    "Set safe mode for $1 $2": {
        "message": "Sada núdzovom režime za $1 $2"
    },
    "Settings": {
        "message": "Nastavenia"
    },
    "Share": {
        "message": "Podiel"
    },
    "Share $1 on $2": {
        "message": "Zdieľať $1 na $2"
    },
    "Share $1 via $2": {
        "message": "Zdieľať $1 za $2"
    },
    "Share with friends!": {
        "message": "Podeľte sa s priateľmi!"
    },
    "Sign up": {
        "message": "Zaregistrujte sa"
    },
    "Solve buffering": {
        "message": "Vyriešiť sekanie"
    },
    "Solve buffering problems with": {
        "message": "Vyriešiť problémy so sekaním pomocou"
    },
    "Solves it": {
        "message": "Vyriešiť to"
    },
    "Staff Picks": {
        "message": "Vybrali sme pre vás"
    },
    "Start Hola": {
        "message": "Spustiť Hola"
    },
    "Starting...": {
        "message": "Spúšťam..."
    },
    "Stop Hola": {
        "message": "Zastaviť Hola"
    },
    "Stopping peer routing...": {
        "message": "Zastavujem peer smerovanie..."
    },
    "Stream": {
        "message": "Prúd"
    },
    "Stream Instantly": {
        "message": "Stream Okamžite"
    },
    "Submit": {
        "message": "Odoslať"
    },
    "Support Hola": {
        "message": "Podpora Hola"
    },
    "TC": {
        "message": "Turks a Caicos"
    },
    "TD": {
        "message": "Čad"
    },
    "TF": {
        "message": "Francúzske južné územia"
    },
    "TG": {
        "message": "Ísť"
    },
    "TH": {
        "message": "Thajsko"
    },
    "TJ": {
        "message": "Tadžikistan"
    },
    "TL": {
        "message": "Východný Timor"
    },
    "TM": {
        "message": "Turkménsko"
    },
    "TN": {
        "message": "Tunisko"
    },
    "TR": {
        "message": "Turecko"
    },
    "TT": {
        "message": "Trinidad a Tobago"
    },
    "TW": {
        "message": "Tajwan"
    },
    "TZ": {
        "message": "Tanzánia"
    },
    "Talk to us on $1": {
        "message": "Porozprávajte sa s nami $1"
    },
    "Tell friends about $1": {
        "message": "Povedzte priateľom o $1"
    },
    "Testing connection...": {
        "message": "Testovanie pripojenia..."
    },
    "Thank you!": {
        "message": "Ďakujeme!"
    },
    "There seems to be an error": {
        "message": "Zdá sa, že došlo k chybe"
    },
    "Top popular sites": {
        "message": "Top obľúbené stránky"
    },
    "Translate to your language": {
        "message": "Preložiť do svojho jazyka"
    },
    "Try again": {
        "message": "Skúsiť to znova"
    },
    "Try another server": {
        "message": "Skúsiť iný server"
    },
    "Try it": {
        "message": "Skúste to"
    },
    "Try safe mode": {
        "message": "Skúste núdzový režim"
    },
    "Try to <span>reload</span>": {
        "message": "Skúste <span>znova načítať</span>"
    },
    "Trying another peer...": {
        "message": "Skúšam ďalší peer..."
    },
    "Turn off Accelerator": {
        "message": "Vypnúť Accelerator"
    },
    "Turn off Hola": {
        "message": "Vypnúť Hola"
    },
    "Turn on Accelerator": {
        "message": "Zapnite Accelerator"
    },
    "Turn on Hola": {
        "message": "Zapnite Hola"
    },
    "Turn on to get started": {
        "message": "Zapnite pre začiatok"
    },
    "UA": {
        "message": "Ukrajina"
    },
    "UM": {
        "message": "Menšie odľahlé ostrovy USA"
    },
    "US": {
        "message": "Spojené štáty"
    },
    "UY": {
        "message": "Uruguaj"
    },
    "Unblocker": {
        "message": "Odblokocač"
    },
    "Unblocker is disabled": {
        "message": "Odblokovač je zakázaný"
    },
    "Unblocker?": {
        "message": "Odblokovač?"
    },
    "Update": {
        "message": "Aktualizovať"
    },
    "Upgrade": {
        "message": "Aktualizovať"
    },
    "Using": {
        "message": "Použitie"
    },
    "Using Hola": {
        "message": "Používate Hola"
    },
    "VA": {
        "message": "Vatikán"
    },
    "VC": {
        "message": "Svätý Vincent a Grenadíny"
    },
    "VD": {
        "message": "Severný Vietnam"
    },
    "VG": {
        "message": "Britské panenské ostrovy"
    },
    "VI": {
        "message": "Panenské ostrovy - USA"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Veľmi stará verzia Chrome, <a>aktualizujte</a> Chrome pre použitie Hola"
    },
    "Video stuck?": {
        "message": "Video sa zaseklo?"
    },
    "Videos available for instant streaming": {
        "message": "Videá sú k dispozícii pre okamžité streamovanie"
    },
    "WF": {
        "message": "Wallis a Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Chcete Hola na iných zariadeniach? (Xbox, PS, Apple TV, iPhone,... ) Kliknite sem"
    },
    "Want to know more?": {
        "message": "Chcete vedieť viac?"
    },
    "Watch Now": {
        "message": "Pozerajte sa"
    },
    "We found $1 videos": {
        "message": "Našli sme $1 videá"
    },
    "We will be in touch with you soon": {
        "message": "Čoskoro sa vám ozveme"
    },
    "Working!": {
        "message": "Funguje!"
    },
    "Working?": {
        "message": "Funguje?"
    },
    "Works on all sites but slower": {
        "message": "Pracuje na všetkých stránkach, ale pomalší"
    },
    "YD": {
        "message": "Ľudová demokratická republika Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Áno"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Musíte aktualizovať Operu na najnovšiu verziu pre použitie Hola. Kliknite <a>sem</a> pre aktualizáciu."
    },
    "ZA": {
        "message": "Južná Afrika"
    },
    "ZZ": {
        "message": "Neznámy alebo neplatný región"
    },
    "app_desc": {
        "message": "Získaj prístup na stránky zakázané v tvojej krajine, práci alebo škole s Hola! Hola je zadarmo a jednocho sa používa!"
    },
    "app_name": {
        "message": "Hola Lepší Internet"
    },
    "back to": {
        "message": "späť na"
    },
    "changing...": {
        "message": "mením..."
    },
    "cool sites": {
        "message": "Skvelé stránky"
    },
    "current site": {
        "message": "Na tomto webe"
    },
    "day": {
        "message": "deň"
    },
    "days": {
        "message": "dní"
    },
    "even more...": {
        "message": "ešte viac..."
    },
    "mode": {
        "message": "režim"
    },
    "more options...": {
        "message": "viac možností..."
    },
    "not working?": {
        "message": "nefunguje?"
    },
    "not working? try another server": {
        "message": "nefunguje? skúsiť iný server"
    },
    "on this page": {
        "message": "Na tejto stránke"
    },
    "sites that are censored": {
        "message": "stránky, ktoré sú cenzurované"
    },
    "start": {
        "message": "spustiť"
    },
    "working? remember": {
        "message": "funguje? zapamätať si"
    }
};
return E; });