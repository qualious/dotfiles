'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " přes "
    },
    "$1 Buffering?": {
        "message": "$1 ukládání do vyrovnávací paměti?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola přístup $2\n\nKlikněte zde, aby učinili totéž: $3\n\nInstaluje Hola, který mi umožňuje surfovat po internetu rychleji a získat přístup $4$5"
    },
    "$1 from $2": {
        "message": "$1 z $2"
    },
    "$1 not found": {
        "message": "$1 nebyl nalezen"
    },
    "$1 via Hola": {
        "message": "$1 přes Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(některé Hola funkce nejsou k dispozici navaší verzi)"
    },
    "AC": {
        "message": "Ascension ostrov"
    },
    "AE": {
        "message": "Spojené arabské emiráty"
    },
    "AF": {
        "message": "Afghánistán"
    },
    "AG": {
        "message": "Antigua a Barbuda"
    },
    "AI": {
        "message": "Anguila"
    },
    "AL": {
        "message": "Albánie"
    },
    "AM": {
        "message": "Arménie"
    },
    "AN": {
        "message": "Nizozemské Antily"
    },
    "AQ": {
        "message": "Antarktida"
    },
    "AS": {
        "message": "Americká Samoa"
    },
    "AT": {
        "message": "Rakousko"
    },
    "AU": {
        "message": "Austrálie"
    },
    "AX": {
        "message": "Alandy"
    },
    "AZ": {
        "message": "Ázerbájdžán"
    },
    "About": {
        "message": "O"
    },
    "About Hola": {
        "message": "O Hola"
    },
    "Accelerator": {
        "message": "Urychlovač"
    },
    "Accelerator is": {
        "message": "Accelerator je"
    },
    "Access $1 - cool site!": {
        "message": "Přístup $1 - super stránky!"
    },
    "Access $1?": {
        "message": "Odblokovat $1?"
    },
    "Access any site from any country, free": {
        "message": "Získtejte přístup k jakékoliv stránce z jakékoliv země zdarma"
    },
    "Access cool sites": {
        "message": "Přístup k Skvělé stránky"
    },
    "Access more sites": {
        "message": "Přístup k více stránek"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Přístupová místa cenzurováno ve vaší zemi a zrychlit Internet s Hola - zdarma!"
    },
    "Accessing $1 with Hola": {
        "message": "Přístup $1 s Hola"
    },
    "Account": {
        "message": "Účet"
    },
    "Account type": {
        "message": "Typ účtu"
    },
    "Activating...": {
        "message": "Aktivace..."
    },
    "All ($1)": {
        "message": "Vše ($1)"
    },
    "Apply settings...": {
        "message": "Použít nastavení ..."
    },
    "Author site:": {
        "message": "Stránka autora:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "To je skvělé!"
    },
    "BA": {
        "message": "Bosna a Hercegovina"
    },
    "BD": {
        "message": "Bangladéš"
    },
    "BE": {
        "message": "Belgie"
    },
    "BG": {
        "message": "Bulharsko"
    },
    "BH": {
        "message": "Bahrajn"
    },
    "BL": {
        "message": "Svatý Bartoloměj"
    },
    "BM": {
        "message": "Bermudy"
    },
    "BN": {
        "message": "Brunej Darussalam"
    },
    "BO": {
        "message": "Bolívie"
    },
    "BQ": {
        "message": "Britské antarktické území"
    },
    "BR": {
        "message": "Brazílie"
    },
    "BS": {
        "message": "Bahamy"
    },
    "BT": {
        "message": "Bhútán"
    },
    "BV": {
        "message": "Ostrov Bouvet"
    },
    "BY": {
        "message": "Bělorusko"
    },
    "Back to $1": {
        "message": "Zpět na $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Buďte první, kdo si Hola pro iPhone / iPad - Zaregistrujte se nyní:"
    },
    "Browsing": {
        "message": "Procházení"
    },
    "Buffering problems?": {
        "message": "Problémy vyrovnává?"
    },
    "Buffering?": {
        "message": "Ukládání do vyrovnávací paměti?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosové ostrovy"
    },
    "CD": {
        "message": "Demokratická republika Kongo"
    },
    "CF": {
        "message": "Středoafrická republika"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Švýcarsko"
    },
    "CI": {
        "message": "Pobřeží slonoviny"
    },
    "CK": {
        "message": "Cookovy ostrovy"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Čína"
    },
    "CO": {
        "message": "Kolumbie"
    },
    "CP": {
        "message": "Ostrov Clipperton"
    },
    "CR": {
        "message": "Kostarika"
    },
    "CS": {
        "message": "Srbsko a Černá Hora"
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
        "message": "Vánoční ostrovy"
    },
    "CY": {
        "message": "Kypr"
    },
    "CZ": {
        "message": "Česká republika"
    },
    "Changing country...": {
        "message": "Změna země ..."
    },
    "Check out Hola for $1!": {
        "message": "Podívejte se na Hola za $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Podívejte se na Hola pro mobilní zařízení"
    },
    "Check your Internet connection": {
        "message": "Ověřte své internetové připojení"
    },
    "Choose<br>Country": {
        "message": "Vybrat <br> Země"
    },
    "Configuring...": {
        "message": "Konfigurace ..."
    },
    "Connecting...": {
        "message": "Připojování ..."
    },
    "Cool site!": {
        "message": "Super stránky!"
    },
    "Creative licenses": {
        "message": "Kreativní licence"
    },
    "DD": {
        "message": "Východní Německo"
    },
    "DE": {
        "message": "Německo"
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
        "message": "Dominikánská republika"
    },
    "DZ": {
        "message": "Alžírsko"
    },
    "Delete": {
        "message": "Vymazat"
    },
    "Deleted from my list": {
        "message": "Vypouští se z mého seznamu"
    },
    "Did it work?": {
        "message": "Zabralo to?"
    },
    "Did you experience any buffering?": {
        "message": "Zaznamenali jste žádnou vyrovnávací paměť?"
    },
    "Disliked it": {
        "message": "Nelíbilo se to"
    },
    "Don't show again for $1 for one week": {
        "message": "Znovu neukazovat za $1 po dobu jednoho týdne"
    },
    "Don't show again for any site for one week": {
        "message": "Znovu neukazovat na každém místě po dobu jednoho týdne"
    },
    "Downloading": {
        "message": "Stahování"
    },
    "EA": {
        "message": "Ceuta a Melilla"
    },
    "EC": {
        "message": "Ekvádor"
    },
    "EE": {
        "message": "Estonsko"
    },
    "EH": {
        "message": "Západní Sahara"
    },
    "ES": {
        "message": "Španělsko"
    },
    "ET": {
        "message": "Etiopie"
    },
    "EU": {
        "message": "Evropská unie"
    },
    "Enable": {
        "message": "Povolit"
    },
    "Enable Hola Accelerator": {
        "message": "Povolit Holá Accelerator"
    },
    "Enjoy!": {
        "message": "Užijte si to!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Radost Hola pro Chrome?"
    },
    "Enter site to access": {
        "message": "Zadejte stránky přístup"
    },
    "Enter your email": {
        "message": "Zadejte svůj e-mail"
    },
    "FI": {
        "message": "Finsko"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Falklandské ostrovy"
    },
    "FM": {
        "message": "Mikronézie"
    },
    "FO": {
        "message": "Faerské ostrovy"
    },
    "FQ": {
        "message": "Francouzská jižní a antarktická území"
    },
    "FR": {
        "message": "Francie"
    },
    "FX": {
        "message": "Metropolitní Francie"
    },
    "Finding new peers...": {
        "message": "Nalezení nové kolegy ..."
    },
    "Finding peers...": {
        "message": "Hledání vrstevníky ..."
    },
    "Free": {
        "message": "Zdarma"
    },
    "From": {
        "message": "Od"
    },
    "Full list": {
        "message": "Plný seznam"
    },
    "GB": {
        "message": "Velká Británie"
    },
    "GE": {
        "message": "Gruzie"
    },
    "GF": {
        "message": "Francouzská Guyana"
    },
    "GL": {
        "message": "Grónsko"
    },
    "GM": {
        "message": "Gambie"
    },
    "GQ": {
        "message": "Rovníková Guinea"
    },
    "GR": {
        "message": "Řecko"
    },
    "GS": {
        "message": "Jižní Georgie a Jižní Sandwichovy ostrovy"
    },
    "Get 24/7 Unblocking": {
        "message": "Získat 24/7 odblokovací"
    },
    "Get Free Premium": {
        "message": "Získejte zdarma Premium"
    },
    "Get Hola Accelerator": {
        "message": "Získat Holá Accelerator"
    },
    "Get Hola Player": {
        "message": "Získat Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Získtejte Hola Plus pro nepřerušovanou a plně bez reklam službu."
    },
    "Get Hola Premium": {
        "message": "Získat Holá Premium"
    },
    "Get Hola for Android": {
        "message": "Získat Hola pro Android"
    },
    "Get Premium support": {
        "message": "Získat Premium podpory"
    },
    "Get Unlimited Unblocking": {
        "message": "Získat neomezený Odblokování"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Získejte přístup k cenzurované stránky, zkuste to teď: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Získat pomoc od technika přes Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Získejte nejrychlejší servery"
    },
    "Go": {
        "message": "Přejít"
    },
    "Go Hola Premium": {
        "message": "Přejít Hola Premium"
    },
    "HK": {
        "message": "Hongkong, zvláštní administrativní oblast Číny"
    },
    "HM": {
        "message": "Ostrovy Heard a McDonald"
    },
    "HR": {
        "message": "Chorvatsko"
    },
    "HU": {
        "message": "Maďarsko"
    },
    "Hate it": {
        "message": "Nesnáším to"
    },
    "Help": {
        "message": "Pomoc"
    },
    "Hey,\n\nI'm using": {
        "message": "Ahoj,\n\njá jsem s použitím"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Ahoj,\n\njsem začal používat $1 ($2). To mi umožňuje surfovat po internetu rychleji a získat přístup $3 v mé zemi."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola nemůže fungovat, protože další rozšíření je ovládání nastavení serveru proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nebude dobře fungovat v systému Windows 8. režimu. Prosím, přepněte do režimu desktop. Klikněte <a>zde</a> pro návod"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola není k dispozici právě teď, ale pracujeme na tom."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola je vypnuto, klepněte na tlačítko na zapnutí"
    },
    "Hola site list": {
        "message": "Seznam stránek k odemčení"
    },
    "I can now access $1 from any country!": {
        "message": "Nyní mohu přistupovat $1 z jakékoli země!"
    },
    "I did not experience any buffering": {
        "message": "Jsem nezažila žádnou vyrovnávací paměti"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Jen jsem přístup cenzurované stránky pomocí Hola za $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Já používám $1 zobrazení $2 v mé zemi, a surfovat rychleji!"
    },
    "IC": {
        "message": "Kanárské ostrovy"
    },
    "ID": {
        "message": "Indonésie"
    },
    "IE": {
        "message": "Irsko"
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
        "message": "Britské území v Indickém oceánu"
    },
    "IQ": {
        "message": "Irák"
    },
    "IR": {
        "message": "Írán"
    },
    "IS": {
        "message": "Island"
    },
    "IT": {
        "message": "Itálie"
    },
    "Improve translation": {
        "message": "zdokonalit překlad"
    },
    "Initializing...": {
        "message": "Inicializování..."
    },
    "Install": {
        "message": "Instalovat"
    },
    "Install Accelerator": {
        "message": "Nainstalujte Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Nainstalujte si Holá Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Nainstalujte Hola Engine i nadále používat Hola zdarma"
    },
    "Instantly watch any torrent Video": {
        "message": "Okamžitě sledovat jakoukoli torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Pozvat přátele - zdarma Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Pozvat přátele. Získat Premium."
    },
    "It was okay": {
        "message": "To bylo v pořádku"
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
        "message": "Kyrgyzstán"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komory"
    },
    "KN": {
        "message": "Svatý Kitts a Nevis"
    },
    "KP": {
        "message": "Severní Korea"
    },
    "KR": {
        "message": "Jižní Korea"
    },
    "KW": {
        "message": "Kuvajt"
    },
    "KY": {
        "message": "Kajmanské ostrovy"
    },
    "KZ": {
        "message": "Kazachstán"
    },
    "LA": {
        "message": "Lidově demokratická republika Laos"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "Svatá Lucie"
    },
    "LI": {
        "message": "Lichtenštejnsko"
    },
    "LK": {
        "message": "Srí Lanka"
    },
    "LR": {
        "message": "Libérie"
    },
    "LT": {
        "message": "Litva"
    },
    "LU": {
        "message": "Lucembursko"
    },
    "LV": {
        "message": "Lotyšsko"
    },
    "LY": {
        "message": "Libye"
    },
    "Language": {
        "message": "Jazyk"
    },
    "Library": {
        "message": "Knihovna"
    },
    "Like it": {
        "message": "Jako to"
    },
    "Loading": {
        "message": "Načítání"
    },
    "Loading site...": {
        "message": "Načítání"
    },
    "Log in": {
        "message": "Přihlásit se"
    },
    "Log out": {
        "message": "Odhlásit se"
    },
    "Love Hola?": {
        "message": "Láska Hola?"
    },
    "Love it": {
        "message": "Miluji to"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldavsko, republika"
    },
    "ME": {
        "message": "Černá Hora"
    },
    "MF": {
        "message": "Svatý Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshallovy ostrovy"
    },
    "MK": {
        "message": "Makedonie"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongolsko"
    },
    "MO": {
        "message": "Zvláštní administrativní oblast Číny Macao"
    },
    "MP": {
        "message": "Severní Mariany"
    },
    "MQ": {
        "message": "Martinik"
    },
    "MR": {
        "message": "Mauritánie"
    },
    "MU": {
        "message": "Mauricius"
    },
    "MV": {
        "message": "Maladivy"
    },
    "MX": {
        "message": "Mexiko"
    },
    "MY": {
        "message": "Malajsie"
    },
    "MZ": {
        "message": "Mosambik"
    },
    "Make your Internet better with $1": {
        "message": "Udělej si svůj Internet lépe $1"
    },
    "Menu": {
        "message": "Nabídka"
    },
    "Might not work on all sites": {
        "message": "Nemusí fungovat na všech stránkách"
    },
    "Mode": {
        "message": "Režim"
    },
    "More countries": {
        "message": "Další země"
    },
    "More sites...": {
        "message": "více..."
    },
    "More...": {
        "message": "více..."
    },
    "My Account": {
        "message": "Můj účet"
    },
    "My History": {
        "message": "Moje historie"
    },
    "My Settings": {
        "message": "Mé nastavení"
    },
    "My favorites": {
        "message": "Moje oblíbené"
    },
    "NA": {
        "message": "Namibie"
    },
    "NC": {
        "message": "Nová Kaledonie"
    },
    "NF": {
        "message": "Norfolk"
    },
    "NG": {
        "message": "Nigérie"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Nizozemsko"
    },
    "NO": {
        "message": "Norsko"
    },
    "NP": {
        "message": "Nepál"
    },
    "NZ": {
        "message": "Nový Zéland"
    },
    "Need Help?": {
        "message": "Potřebujete pomoc?"
    },
    "Never ask me again": {
        "message": "Nikdy se mě zeptat znovu"
    },
    "Never be a peer": {
        "message": "Nikdy se peer"
    },
    "No": {
        "message": "Ne"
    },
    "No idle peers found.": {
        "message": "Žádné nečinnosti vrstevníci nalezeno."
    },
    "No recent videos found": {
        "message": "Nebyly nalezeny žádné Nejnovější videa"
    },
    "No saved videos found": {
        "message": "Nebyly nalezeny žádné uložené videa"
    },
    "No title": {
        "message": "Bez názvu"
    },
    "No videos found": {
        "message": "Nebyly nalezeny žádné videa"
    },
    "No videos found on active page": {
        "message": "Nalezené na aktivní straně žádná videa"
    },
    "No, Thanks": {
        "message": "Ne, díky"
    },
    "No, fix it": {
        "message": "Ne, opravit"
    },
    "Not working?": {
        "message": "Nefunguje?"
    },
    "Number of users that pressed not working": {
        "message": "Počet uživatelů kteří zvolili, že \"nefunguje\""
    },
    "Number of users that use this option": {
        "message": "Počet uživatelů kteří použili tuhle volbu"
    },
    "OM": {
        "message": "Omán"
    },
    "Off": {
        "message": "Vyp"
    },
    "Oh, yes!": {
        "message": "Oh, ano!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Stará verze Firefoxu. Klikněte <a>zde</a> pro upgrade."
    },
    "On": {
        "message": "Zap"
    },
    "Open Media Player": {
        "message": "Otevřený Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Náš zbrusu nový Mplayer se blíží!"
    },
    "PC": {
        "message": "Tichomořských ostrovů Důvěra území"
    },
    "PF": {
        "message": "Francouzská Polynésie"
    },
    "PG": {
        "message": "Papua-Nová Guinea"
    },
    "PH": {
        "message": "Filipíny"
    },
    "PK": {
        "message": "Pákistán"
    },
    "PL": {
        "message": "Polsko"
    },
    "PM": {
        "message": "Svatý Pierre a Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Portoriko"
    },
    "PS": {
        "message": "Palestinian Territory"
    },
    "PT": {
        "message": "Portugalsko"
    },
    "PU": {
        "message": "Americké Různé Tichomořské ostrovy"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Prosím, zakázat další <a>rozšíření</a>, které si myslíte, že by mohl ovládat nastavení proxy serveru, například ad-blokátory, ostatní služby VPN, atd."
    },
    "Please enter a valid email address.": {
        "message": "Zadejte prosím platnou e-mailovou adresu."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Prosím, zadejte adresu webové stránky, jako je facebook.com"
    },
    "Please help us get better": {
        "message": "Prosím, pomozte nám získat lepší"
    },
    "Popular in $1": {
        "message": "Populární v $1"
    },
    "Popular in the world": {
        "message": "Populární ve světě"
    },
    "Popular sites": {
        "message": "Oblíbené stránky"
    },
    "Premium": {
        "message": "Pojistné"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Odlehlé Oceánie"
    },
    "RO": {
        "message": "Rumunsko"
    },
    "RS": {
        "message": "Srbsko"
    },
    "RU": {
        "message": "Rusko"
    },
    "Rate us": {
        "message": "Ohodnoťte nás"
    },
    "Recent Videos": {
        "message": "Poslední videa"
    },
    "Reload": {
        "message": "Znovu načíst"
    },
    "Reload Hola": {
        "message": "Načíst znovu Hola"
    },
    "Remember server": {
        "message": "Nezapomeňte serveru"
    },
    "Report a problem": {
        "message": "Oznamte problém"
    },
    "Retry safe mode": {
        "message": "Opakovat nouzový režim"
    },
    "SA": {
        "message": "Saúdská Arábie"
    },
    "SB": {
        "message": "Šalamounovy ostrovy"
    },
    "SC": {
        "message": "Seychely"
    },
    "SD": {
        "message": "Súdán"
    },
    "SE": {
        "message": "Švédsko"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Svatá Helena"
    },
    "SI": {
        "message": "Slovinsko"
    },
    "SJ": {
        "message": "Svalbard a Jan Mayen"
    },
    "SK": {
        "message": "Slovensko"
    },
    "SO": {
        "message": "Somálsko"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Svatý Tomáš"
    },
    "SU": {
        "message": "Svaz sovětských socialistických republik"
    },
    "SY": {
        "message": "Sýrie"
    },
    "SZ": {
        "message": "Svazijsko"
    },
    "Safe mode": {
        "message": "Nouzový režim"
    },
    "Saved Videos": {
        "message": "Uložené Videos"
    },
    "Saved for later": {
        "message": "Uloženo na později"
    },
    "Search video title": {
        "message": "Hledej název videa"
    },
    "Select a Country": {
        "message": "Vyberte zemi"
    },
    "Select site to unblock": {
        "message": "Vyberte místo na odblokování"
    },
    "Server saved!": {
        "message": "Server zachránil!"
    },
    "Set safe mode for $1 $2": {
        "message": "Sada nouzovém režimu za $1 $2"
    },
    "Settings": {
        "message": "Nastavení"
    },
    "Share": {
        "message": "Podíl"
    },
    "Share $1 on $2": {
        "message": "Sdílet $1 na $2"
    },
    "Share $1 via $2": {
        "message": "Sdílet $1 za $2"
    },
    "Share with friends!": {
        "message": "Sdílet s přáteli!"
    },
    "Sign up": {
        "message": "Zaregistrujte se"
    },
    "Solve buffering": {
        "message": "Řešení ukládání do vyrovnávací paměti"
    },
    "Solve buffering problems with": {
        "message": "Řešení ukládání do vyrovnávací paměti problémy s"
    },
    "Solves it": {
        "message": "Řeší ji"
    },
    "Staff Picks": {
        "message": "Vybrali jsme pro vás"
    },
    "Start Hola": {
        "message": "start"
    },
    "Starting...": {
        "message": "Spouštění..."
    },
    "Stop Hola": {
        "message": "Zastavit Hola"
    },
    "Stopping peer routing...": {
        "message": "Zastavení peer směrování ..."
    },
    "Stream": {
        "message": "Proud"
    },
    "Stream Instantly": {
        "message": "Stream Okamžitě"
    },
    "Submit": {
        "message": "Předložit"
    },
    "Support Hola": {
        "message": "Podpořte Hola"
    },
    "TC": {
        "message": "Ostrovy Caicos a Turks"
    },
    "TD": {
        "message": "Čad"
    },
    "TF": {
        "message": "Francouzská jižní teritoria"
    },
    "TG": {
        "message": "Jít"
    },
    "TH": {
        "message": "Thajsko"
    },
    "TJ": {
        "message": "Tádžikistán"
    },
    "TL": {
        "message": "Východní Timor"
    },
    "TM": {
        "message": "Turkmenistán"
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
        "message": "Tchaj-wan"
    },
    "TZ": {
        "message": "Tanzanie"
    },
    "Talk to us on $1": {
        "message": "Promluvte si s námi $1"
    },
    "Tell friends about $1": {
        "message": "Řekněte přátelům o $1"
    },
    "Testing connection...": {
        "message": "Testování připojení ..."
    },
    "Thank you!": {
        "message": "Děkuji vám!"
    },
    "There seems to be an error": {
        "message": "Vypadá to, že nastala chyba"
    },
    "Top popular sites": {
        "message": "Top oblíbené stránky"
    },
    "Translate to your language": {
        "message": "Přeložte do svého jazyka"
    },
    "Try again": {
        "message": "Zkuste to znovu"
    },
    "Try another server": {
        "message": "Zkuste jiný server"
    },
    "Try it": {
        "message": "Zkuste to"
    },
    "Try safe mode": {
        "message": "Zkuste nouzový režim"
    },
    "Try to <span>reload</span>": {
        "message": "Zkuste <span>znovu načíst</span>"
    },
    "Trying another peer...": {
        "message": "Zkouším další peer ..."
    },
    "Turn off Accelerator": {
        "message": "Vypnout Accelerator"
    },
    "Turn off Hola": {
        "message": "Vypnout Hola"
    },
    "Turn on Accelerator": {
        "message": "Zapněte Accelerator"
    },
    "Turn on Hola": {
        "message": "Zapněte Hola"
    },
    "Turn on to get started": {
        "message": "Zapněte pro započetí"
    },
    "UA": {
        "message": "Ukrajina"
    },
    "UM": {
        "message": "Menší odlehlé ostrovy USA"
    },
    "US": {
        "message": "Spojené státy"
    },
    "UZ": {
        "message": "Uzbekistán"
    },
    "Unblocker": {
        "message": "Odblokovávač"
    },
    "Unblocker is disabled": {
        "message": "Odblokovávač je zakázán"
    },
    "Update": {
        "message": "Aktualizovat"
    },
    "Upgrade": {
        "message": "Aktualizovat"
    },
    "Using": {
        "message": "Použití"
    },
    "Using Hola": {
        "message": "Použití Hola"
    },
    "VA": {
        "message": "Svatý stolec"
    },
    "VC": {
        "message": "Svatý Vincent a Grenadiny"
    },
    "VD": {
        "message": "Severní Vietnam"
    },
    "VG": {
        "message": "Britské Panenské ostrovy"
    },
    "VI": {
        "message": "Americké Panenské ostrovy"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Tohle je stará verze Chromu, <a>aktualizujte</a> Chrome abyste mohli používat Hola"
    },
    "Video stuck?": {
        "message": "Uvízl videa?"
    },
    "Videos available for instant streaming": {
        "message": "Videa jsou k dispozici pro okamžité streamování"
    },
    "WF": {
        "message": "Wallis a Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Chcete Hola na ostatních zařízeních? (Xbox, PS, Apple TV, iPhone...). Klikněte zde"
    },
    "Want to know more?": {
        "message": "Chcete vědět víc?"
    },
    "Watch Now": {
        "message": "Dívejte se"
    },
    "We found $1 videos": {
        "message": "Našli $1 videa"
    },
    "We will be in touch with you soon": {
        "message": "Budeme v kontaktu s vámi brzy"
    },
    "Working!": {
        "message": "Pracovní!"
    },
    "Working?": {
        "message": "Pracovní?"
    },
    "Works on all sites but slower": {
        "message": "Pracuje na všech stránkách, ale pomalejší"
    },
    "YD": {
        "message": "Lidová demokratická republika Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ano"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Musíte aktualizovat na nejnovější verzi Opery použít Hola. Stiskněte <a>zde</a> pro upgrade."
    },
    "ZA": {
        "message": "Jihoafrická republika"
    },
    "ZM": {
        "message": "Zambie"
    },
    "ZZ": {
        "message": "Neznámá nebo neplatná oblast"
    },
    "app_desc": {
        "message": "Přístupové webové stránky blokovány ve vaší zemi, firmy nebo školy s Hola! Hola je zdarma a snadno použitelný!"
    },
    "app_name": {
        "message": "Hola Lepší Internet"
    },
    "back to": {
        "message": "zpátky na"
    },
    "changing...": {
        "message": "Probíhá změna..."
    },
    "cool sites": {
        "message": "Skvělé stránky"
    },
    "current site": {
        "message": "Na tomto webu"
    },
    "day": {
        "message": "den"
    },
    "days": {
        "message": "dnů"
    },
    "even more...": {
        "message": "ještě více..."
    },
    "mode": {
        "message": "režim"
    },
    "more options...": {
        "message": "více možnost..."
    },
    "not working?": {
        "message": "nefunguje?"
    },
    "not working? try another server": {
        "message": "nefunguje? zkuste jiný server"
    },
    "on this page": {
        "message": "Na této stránce"
    },
    "sites that are censored": {
        "message": "stránky, které jsou cenzurované"
    },
    "start": {
        "message": "začátek"
    },
    "working? remember": {
        "message": "práci? pamatovat si"
    }
};
return E; });