'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " über "
    },
    "$1 Buffering?": {
        "message": "$1 Pufferung?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola den Zugriff auf $2\n\nKlicken Sie hier, um das gleiche zu tun: $3\n\nSie installiert Hola, die mir das Internet schneller surfen und lässt $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 Premium-VPN"
    },
    "$1 from $2": {
        "message": "$1 von $2"
    },
    "$1 not found": {
        "message": "$1 nicht gefunden"
    },
    "$1 via Hola": {
        "message": "$1 über Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(einige Hola Funktionen sind in Ihrer Version nicht verfügbar)"
    },
    "AC": {
        "message": "Ascension"
    },
    "AE": {
        "message": "Vereinigte Arabische Emirate"
    },
    "AG": {
        "message": "Antigua und Barbuda"
    },
    "AL": {
        "message": "Albanien"
    },
    "AM": {
        "message": "Armenien"
    },
    "AN": {
        "message": "Niederländische Antillen"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AR": {
        "message": "Argentinien"
    },
    "AS": {
        "message": "Amerikanisch-Samoa"
    },
    "AT": {
        "message": "Österreich"
    },
    "AU": {
        "message": "Australien"
    },
    "AX": {
        "message": "Alandinseln"
    },
    "AZ": {
        "message": "Aserbaidschan"
    },
    "About": {
        "message": "Über"
    },
    "About Hola": {
        "message": "Über Hola"
    },
    "Accelerator": {
        "message": "Beschleuniger"
    },
    "Accelerator is": {
        "message": "Beschleunigung ist"
    },
    "Access $1 - cool site!": {
        "message": "Zugang $1 - coole Seite!"
    },
    "Access $1?": {
        "message": "Zugriff auf $1?"
    },
    "Access any site from any country, free": {
        "message": "Greifen Sie auf jede Seite aus jedem Land zu - gratis"
    },
    "Access cool sites": {
        "message": "Zugang zu coolen Seiten"
    },
    "Access more sites": {
        "message": "Mehr Seiten nutzen"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Zugangsstellen in Ihrem Land zensiert und beschleunigen Ihre Internet mit Hola - kostenlos!"
    },
    "Accessing $1 with Hola": {
        "message": "Zugriff auf $1 mit Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Kontotyp"
    },
    "Activating...": {
        "message": "Aktivieren..."
    },
    "All ($1)": {
        "message": "Alle ($1)"
    },
    "Apply settings...": {
        "message": "Einstellungen speichern"
    },
    "Author site:": {
        "message": "Website des Autors:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Fantastisch!"
    },
    "BA": {
        "message": "Bosnien und Herzegowina"
    },
    "BD": {
        "message": "Bangladesch"
    },
    "BE": {
        "message": "Belgien"
    },
    "BG": {
        "message": "Bulgarien"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BL": {
        "message": "St. Barthélemy"
    },
    "BN": {
        "message": "Brunei Darussalam"
    },
    "BO": {
        "message": "Bolivien"
    },
    "BQ": {
        "message": "Britisches Antarktis-Territorium"
    },
    "BR": {
        "message": "Brasilien"
    },
    "BV": {
        "message": "Bouvetinsel"
    },
    "BW": {
        "message": "Botsuana"
    },
    "BY": {
        "message": "Weißrussland"
    },
    "Back to $1": {
        "message": "Zurück zu $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Seien Sie der Erste, der Hola für iPhone / iPad bekommt - Jetzt registrieren:"
    },
    "Buffering problems?": {
        "message": "Buffering-Probleme?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokosinseln"
    },
    "CD": {
        "message": "Demokratische Republik Kongo"
    },
    "CF": {
        "message": "Zentralafrikanische Republik"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Schweiz"
    },
    "CI": {
        "message": "Elfenbeinküste"
    },
    "CK": {
        "message": "Cookinseln"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CO": {
        "message": "Kolumbien"
    },
    "CP": {
        "message": "Clipperton Insel"
    },
    "CS": {
        "message": "Serbien und Montenegro"
    },
    "CT": {
        "message": "Kanton und Enderbury Inseln"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kap Verde"
    },
    "CX": {
        "message": "Weihnachtsinsel"
    },
    "CY": {
        "message": "Zypern"
    },
    "CZ": {
        "message": "Tschechische Republik"
    },
    "Changing country...": {
        "message": "Wechsel des Landes...."
    },
    "Check out Hola for $1!": {
        "message": "Besuche Hola für $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Schauen Sie sich Hola für mobile Geräte"
    },
    "Check your Internet connection": {
        "message": "Überprüfe deine Internet Verbindung"
    },
    "Choose<br>Country": {
        "message": "Wähle <br>Land"
    },
    "Configuring...": {
        "message": "Konfiguriere..."
    },
    "Connecting...": {
        "message": "Verbinde..."
    },
    "Cool site!": {
        "message": "Coole Seite!"
    },
    "Creative licenses": {
        "message": "Kreative Lizenzen"
    },
    "DD": {
        "message": "Ost-Deutschland"
    },
    "DE": {
        "message": "Deutschland"
    },
    "DJ": {
        "message": "Dschibuti"
    },
    "DK": {
        "message": "Dänemark"
    },
    "DO": {
        "message": "Dominikanische Republik"
    },
    "DZ": {
        "message": "Algerien"
    },
    "Delete": {
        "message": "Löschen"
    },
    "Deleted from my list": {
        "message": "Von meiner Liste gelöscht"
    },
    "Did it work?": {
        "message": "Hat es funktioniert?"
    },
    "Did you experience any buffering?": {
        "message": "Haben Sie Pufferung bemerkt?"
    },
    "Disliked it": {
        "message": "Unzufrieden es"
    },
    "Don't show again for $1 for one week": {
        "message": "$1 für eine Woche nicht zeigen"
    },
    "Don't show again for any site for one week": {
        "message": "Auf allen Web-Seiten für eine Woche nicht anzeigen"
    },
    "Downloading": {
        "message": "Lade herunter"
    },
    "EA": {
        "message": "Ceuta und Melilla"
    },
    "EE": {
        "message": "Estland"
    },
    "EG": {
        "message": "Ägypten"
    },
    "EH": {
        "message": "Westsahara"
    },
    "ES": {
        "message": "Spanien"
    },
    "ET": {
        "message": "Äthiopien"
    },
    "EU": {
        "message": "Europäische Union"
    },
    "Enable": {
        "message": "Aktivieren"
    },
    "Enable Hola Accelerator": {
        "message": "Hola Beschleunigung aktivieren"
    },
    "Enjoy!": {
        "message": "Viel Spaß!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Genießen Hola für Chrome?"
    },
    "Enter site to access": {
        "message": "Welche Seite soll aufgerufen werden?"
    },
    "Enter your email": {
        "message": "Geben Sie Ihre E-Mail Adresse an"
    },
    "FI": {
        "message": "Finnland"
    },
    "FJ": {
        "message": "Fidschi"
    },
    "FK": {
        "message": "Falklandinseln"
    },
    "FM": {
        "message": "Mikronesien"
    },
    "FO": {
        "message": "Färöer"
    },
    "FQ": {
        "message": "Französisch Süd- und Antarktisgebiete"
    },
    "FR": {
        "message": "Frankreich"
    },
    "Fast": {
        "message": "Schnell"
    },
    "Finding new peers...": {
        "message": "Suche von neuen Peers..."
    },
    "Finding peers...": {
        "message": "Suche Peers..."
    },
    "Free": {
        "message": "Kostenlos"
    },
    "From": {
        "message": "Von"
    },
    "Full list": {
        "message": "Liste"
    },
    "GA": {
        "message": "Gabun"
    },
    "GB": {
        "message": "Vereinigtes Königreich"
    },
    "GE": {
        "message": "Georgien"
    },
    "GF": {
        "message": "Französisch-Guayana"
    },
    "GG": {
        "message": "Dicker Pullover"
    },
    "GL": {
        "message": "Grönland"
    },
    "GQ": {
        "message": "Äquatorialguinea"
    },
    "GR": {
        "message": "Griechenland"
    },
    "GS": {
        "message": "Südgeorgien und die Südlichen Sandwichinseln"
    },
    "Get 24/7 Unblocking": {
        "message": "Holen Sie sich 24/7 Unblocking"
    },
    "Get Free Premium": {
        "message": "Erhalten Sie einen gratis Premium Account"
    },
    "Get Hola Accelerator": {
        "message": "Holen Sie sich den Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Holen Sie sich den Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Holen Sie sich Hola-Plus für ununterbrochenen, werbefreien Service."
    },
    "Get Hola Premium": {
        "message": "Holen Sie sich Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Holen Sie sich Hola für Android"
    },
    "Get Premium support": {
        "message": "Erhalten Sie Premium Support"
    },
    "Get Unlimited Unblocking": {
        "message": "Erhalten Sie grenzenloses Unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Holen Sie sich den Zugang zu Websites zensiert, versuchen Sie es jetzt: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Holen Sie sich Hilfe von uns über Skype!:"
    },
    "Get the Fastest Servers": {
        "message": "Nutze Sie die schnellsten Server"
    },
    "Go": {
        "message": "Los"
    },
    "Go Hola Premium": {
        "message": "Holen Sie sich Hola Premium"
    },
    "HK": {
        "message": "Sonderverwaltungszone Hongkong"
    },
    "HM": {
        "message": "Heard- und McDonald-Inseln"
    },
    "HR": {
        "message": "Kroatien"
    },
    "HU": {
        "message": "Ungarn"
    },
    "Hate it": {
        "message": "Hasse es"
    },
    "Help": {
        "message": "Hilfe"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nich nutze"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hallo,\n\nIch habe angefangen $1 ($2) zu benutzen. Damit surfe ich schneller und kann auf $3 in meinem Land zugreifen."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola funktioniert nicht, weil eine andere Erweiterung Ihre Proxy-Einstellungen steuert."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola funktioniert nicht gut im Windows 8-Modus. Bitte wechseln Sie in den Desktop-Modus. Klicken Sie <a>hier</a> für Anweisungen"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola ist nicht verfügbar im Moment, aber wir arbeiten daran."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola ist abgeschaltet, klicken Sie auf das Hola Symbol um Hola einzuschalten"
    },
    "Hola site list": {
        "message": "Hola Seitenliste"
    },
    "I can now access $1 from any country!": {
        "message": "Ich habe jetzt Zugriff auf $1 von jedem Land aus!"
    },
    "I did not experience any buffering": {
        "message": "Ich habe keine Ladezeiten bemerkt"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ich habe gerade mit Hola auf eine zensierte Webseite für $1 zugegriffen!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ich benutze $1 um auf $2 in meinem Land zuzugreifen, und surfe schneller!"
    },
    "IC": {
        "message": "Kanarische Inseln"
    },
    "ID": {
        "message": "Indonesien"
    },
    "IE": {
        "message": "Irland"
    },
    "IN": {
        "message": "Indien"
    },
    "IO": {
        "message": "Britisches Territorium im Indischen Ozean"
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
        "message": "Übersetzung verbessern"
    },
    "Initializing...": {
        "message": "Initialisiere, bitte warten..."
    },
    "Install": {
        "message": "Installieren"
    },
    "Install Accelerator": {
        "message": "Beschleunigung installieren"
    },
    "Install Free Hola Accelerator": {
        "message": "Installiere den kostenlosen Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installieren Hola Motor weiterhin mit Hola kostenlos"
    },
    "Instantly watch any torrent Video": {
        "message": "Schauen sie sofort jedes Torrent Video an"
    },
    "Invite friends - free Premium.": {
        "message": "Laden Sie Freunde ein - Sie erhalten einen gratis Premium Account."
    },
    "Invite friends. Get Premium.": {
        "message": "Laden Sie Freunden ein um einen gratis Premium Account zu erhalten."
    },
    "It was okay": {
        "message": "Es war in Ordnung"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Jordanien"
    },
    "JT": {
        "message": "Johnston-Insel"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgisistan"
    },
    "KH": {
        "message": "Kambodscha"
    },
    "KM": {
        "message": "Komoren"
    },
    "KN": {
        "message": "St. Kitts und Nevis"
    },
    "KP": {
        "message": "Demokratische Volksrepublik Korea"
    },
    "KR": {
        "message": "Republik Korea"
    },
    "KY": {
        "message": "Kaimaninseln"
    },
    "KZ": {
        "message": "Kasachstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "St. Lucia"
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
        "message": "Sprache"
    },
    "Library": {
        "message": "Bibliothek"
    },
    "Like it": {
        "message": "Mag ich"
    },
    "Loading": {
        "message": "Wird geladen"
    },
    "Loading site...": {
        "message": "Seite wird geladen..."
    },
    "Log in": {
        "message": "Anmelden"
    },
    "Log out": {
        "message": "Abmelden"
    },
    "Love Hola?": {
        "message": "Mögen Sie Hola?"
    },
    "Love it": {
        "message": "Liebe es"
    },
    "MA": {
        "message": "Marokko"
    },
    "MD": {
        "message": "Republik Moldau"
    },
    "MF": {
        "message": "St. Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshallinseln"
    },
    "MK": {
        "message": "Mazedonien"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongolei"
    },
    "MO": {
        "message": "Sonderverwaltungszone Macao"
    },
    "MP": {
        "message": "Nördliche Marianen"
    },
    "MR": {
        "message": "Mauretanien"
    },
    "MV": {
        "message": "Malediven"
    },
    "MX": {
        "message": "Mexiko"
    },
    "MZ": {
        "message": "Mosambik"
    },
    "Make your Internet better with $1": {
        "message": "Machen Sie Ihre Internet besser mit $1"
    },
    "Menu": {
        "message": "Menü"
    },
    "Might not work on all sites": {
        "message": "Möglicherweise nicht auf zu arbeiten alle Standorte"
    },
    "Mode": {
        "message": "Modus"
    },
    "More countries": {
        "message": "Mehr Länder"
    },
    "More sites...": {
        "message": "Mehr Seiten..."
    },
    "More...": {
        "message": "Mehr..."
    },
    "My Account": {
        "message": "Mein Account"
    },
    "My History": {
        "message": "Meine Geschichte"
    },
    "My Settings": {
        "message": "Meine Einstellungen"
    },
    "My favorites": {
        "message": "Meine Favoriten"
    },
    "NC": {
        "message": "Neukaledonien"
    },
    "NF": {
        "message": "Norfolkinsel"
    },
    "NL": {
        "message": "Niederlande"
    },
    "NO": {
        "message": "Norwegen"
    },
    "NT": {
        "message": "Neutrale Zone"
    },
    "NZ": {
        "message": "Neuseeland"
    },
    "Need Help?": {
        "message": "Brauchen Sie Hilfe?"
    },
    "Never ask me again": {
        "message": "Nicht nochmal fragen"
    },
    "Never be a peer": {
        "message": "Kein Peer sein"
    },
    "No": {
        "message": "Nicht"
    },
    "No idle peers found.": {
        "message": "Keine inaktiven Peers gefunden."
    },
    "No recent videos found": {
        "message": "Keine aktuellen Videos gefunden"
    },
    "No saved videos found": {
        "message": "Keine gespeicherten Videos gefunden"
    },
    "No title": {
        "message": "Kein Titel"
    },
    "No videos found": {
        "message": "Keine Videos gefunden"
    },
    "No videos found on active page": {
        "message": "Keine Videos auf aktive Seite"
    },
    "No, Thanks": {
        "message": "Nein, Danke"
    },
    "No, fix it": {
        "message": "Nein, nochmal"
    },
    "Not working?": {
        "message": "Funktioniert nicht?"
    },
    "Number of users that pressed not working": {
        "message": "Anzahl Benutzer, bei denen es nicht funktioniert hat"
    },
    "Number of users that use this option": {
        "message": "Anzahl Benutzer, die diese Option nutzen"
    },
    "Off": {
        "message": "Aus"
    },
    "Oh, yes!": {
        "message": "Oh, ja!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Veraltete Version von Firefox. Klicken Sie <a>hier</a> um zu aktualisieren."
    },
    "On": {
        "message": "An"
    },
    "Open Media Player": {
        "message": "Öffnen Sie Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Unser neuer MPlayer ist bald verfügbar!"
    },
    "PC": {
        "message": "Pazifikinseln Treuhandgebiet"
    },
    "PF": {
        "message": "Französisch-Polynesien"
    },
    "PG": {
        "message": "Papua-Neuguinea"
    },
    "PH": {
        "message": "Philippinen"
    },
    "PL": {
        "message": "Polen"
    },
    "PM": {
        "message": "St. Pierre und Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palästinensische Gebiete"
    },
    "PU": {
        "message": "US Sonstiges Pazifikinseln"
    },
    "PZ": {
        "message": "Panamakanalzone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Bitte deaktivieren Sie andere <a>Erweiterungen</a>, die Ihre Proxy-Einstellungen ändern könnten, wie Ad-Blocker oder anderen VPN-Dienste etc."
    },
    "Please enter a valid email address.": {
        "message": "Bitte geben Sie eine gültige E-Mail-Adresse an."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Bitte gib die Adresse einer Webseite wie z.B. facebook.com ein"
    },
    "Please help us get better": {
        "message": "Bitte helfen Sie uns besser zu werden"
    },
    "Popular in $1": {
        "message": "Beliebt in $1"
    },
    "Popular in the world": {
        "message": "Beliebt in der Welt"
    },
    "Popular sites": {
        "message": "Beliebte Web-Seiten"
    },
    "Premium": {
        "message": "Prämie"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Outlying Ozeanien"
    },
    "RO": {
        "message": "Rumänien"
    },
    "RS": {
        "message": "Serbien"
    },
    "RU": {
        "message": "Russische Föderation"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Bewerten Sie uns"
    },
    "Recent Videos": {
        "message": "Die neuesten Videos"
    },
    "Reload": {
        "message": "Neu laden"
    },
    "Reload Hola": {
        "message": "Hola neu laden"
    },
    "Remember server": {
        "message": "Server merken"
    },
    "Report a problem": {
        "message": "Ein Problem melden"
    },
    "Retry safe mode": {
        "message": "Wiederholen Sie den abgesicherten Modus"
    },
    "SA": {
        "message": "Saudi-Arabien"
    },
    "SB": {
        "message": "Salomonen"
    },
    "SC": {
        "message": "Seychellen"
    },
    "SE": {
        "message": "Schweden"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "St. Helena"
    },
    "SI": {
        "message": "Slowenien"
    },
    "SJ": {
        "message": "Svalbard und Jan Mayen"
    },
    "SK": {
        "message": "Slowakei"
    },
    "ST": {
        "message": "São Tomé und Príncipe"
    },
    "SU": {
        "message": "Union der Sozialistischen Sowjetrepubliken"
    },
    "SY": {
        "message": "Syrien"
    },
    "SZ": {
        "message": "Swasiland"
    },
    "Safe mode": {
        "message": "Sicherheitsmodus"
    },
    "Save": {
        "message": "Speichern"
    },
    "Saved Videos": {
        "message": "Gespeicherte Videos"
    },
    "Saved for later": {
        "message": "Gespeichert für eine spätere"
    },
    "Search video title": {
        "message": "Suchen Videotitel"
    },
    "Select a Country": {
        "message": "Wählen Sie ein Land"
    },
    "Select site to unblock": {
        "message": "Web-Seite zum entsperren wählen"
    },
    "Server saved!": {
        "message": "Server gespeichert!"
    },
    "Set safe mode for $1 $2": {
        "message": "Stellen Sie abgesicherten Modus für $1 $2"
    },
    "Settings": {
        "message": "Einstellungen"
    },
    "Share": {
        "message": "Teilen"
    },
    "Share $1 on $2": {
        "message": "Teilen Sie $1 auf $2"
    },
    "Share $1 via $2": {
        "message": "Teilen Sie $1 über $2"
    },
    "Share with friends!": {
        "message": "Mit Freunden teilen!"
    },
    "Sign up": {
        "message": "Registrieren"
    },
    "Solve buffering": {
        "message": "Pufferung beheben"
    },
    "Solve buffering problems with": {
        "message": "Behebt Probleme beim Puffern mit"
    },
    "Solves it": {
        "message": "Behebt es"
    },
    "Staff Picks": {
        "message": "Mitarbeiter-Favoriten"
    },
    "Start Hola": {
        "message": "Starte Hola"
    },
    "Starting...": {
        "message": "Starte..."
    },
    "Stop Hola": {
        "message": "Stopp Hola"
    },
    "Stopping peer routing...": {
        "message": "Stoppen vom Peer Routing..."
    },
    "Stream": {
        "message": "Strom"
    },
    "Stream Instantly": {
        "message": "Streamen Sie sofort"
    },
    "Submit": {
        "message": "Übertrageb"
    },
    "Support Hola": {
        "message": "Unterstützen Sie Hola"
    },
    "TC": {
        "message": "Turks- und Caicosinseln"
    },
    "TD": {
        "message": "Tschad"
    },
    "TF": {
        "message": "Französische Süd- und Antarktisgebiete"
    },
    "TG": {
        "message": "Gehen"
    },
    "TJ": {
        "message": "Tadschikistan"
    },
    "TL": {
        "message": "Osttimor"
    },
    "TN": {
        "message": "Tunesien"
    },
    "TR": {
        "message": "Türkei"
    },
    "TT": {
        "message": "Trinidad und Tobago"
    },
    "TZ": {
        "message": "Tansania"
    },
    "Talk to us on $1": {
        "message": "Sprechen Sie uns an: $1"
    },
    "Tell friends about $1": {
        "message": "Erzählen Sie ihren Freunden etwas über $1"
    },
    "Testing connection...": {
        "message": "Versuche Verbindungsaufbau..."
    },
    "Thank you!": {
        "message": "Danke!"
    },
    "There seems to be an error": {
        "message": "Ein Fehler ist aufgetreten"
    },
    "Top popular sites": {
        "message": "Beliebteste Web-Seiten"
    },
    "Translate to your language": {
        "message": "In Ihre Sprache übersetzen"
    },
    "Try again": {
        "message": "Nochmal versuchen"
    },
    "Try another server": {
        "message": "Versuchen Sie einen anderen Server"
    },
    "Try it": {
        "message": "Probieren Sie es aus"
    },
    "Try safe mode": {
        "message": "Versuchen Sie den abgesicherten Modus"
    },
    "Try to <span>reload</span>": {
        "message": "Versuchen Sie es<span>noch einmal</span>"
    },
    "Trying another peer...": {
        "message": "Einen anderen Peer probieren..."
    },
    "Turn off Accelerator": {
        "message": "Beschleunigung abschalten"
    },
    "Turn off Hola": {
        "message": "Hola abschalten"
    },
    "Turn on Accelerator": {
        "message": "Beschleunigung anschalten"
    },
    "Turn on Hola": {
        "message": "Hola anschalten"
    },
    "Turn on to get started": {
        "message": "Einschalten um loszulegen"
    },
    "UM": {
        "message": "Amerikanisch-Ozeanien"
    },
    "US": {
        "message": "Vereinigte Staaten"
    },
    "UZ": {
        "message": "Usbekistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker deaktiviert"
    },
    "Update": {
        "message": "Aktualisieren"
    },
    "Upgrade": {
        "message": "Aktualisieren"
    },
    "Using": {
        "message": "Mit"
    },
    "Using Hola": {
        "message": "Mit Hola"
    },
    "VA": {
        "message": "Vatikanstadt"
    },
    "VC": {
        "message": "St. Vincent und die Grenadinen"
    },
    "VD": {
        "message": "Nord-Vietnam"
    },
    "VG": {
        "message": "Britische Jungferninseln"
    },
    "VI": {
        "message": "Amerikanische Jungferninseln"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Sehr alte Version von Chrome. <a>Aktualisieren</a> Sie Chrome, um Hola zu verwenden"
    },
    "Video stuck?": {
        "message": "Video hängt?"
    },
    "Videos available for instant streaming": {
        "message": "Videos für Instant-Streaming verfügbar"
    },
    "WF": {
        "message": "Wallis und Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Möchten Sie Hola auch auf anderen Geräten benutzen?(Xbox, PS, Apple TV, iPhone ...). Klicken Sie bitte hier"
    },
    "Want to know more?": {
        "message": "Wollen Sie mehr erfahren?"
    },
    "Watch Now": {
        "message": "Jetzt ansehen"
    },
    "We found $1 videos": {
        "message": "Wir haben festgestellt $1 videos"
    },
    "We will be in touch with you soon": {
        "message": "Wir werden uns bald bei Ihnen melden"
    },
    "Working!": {
        "message": "Es funktioniert!"
    },
    "Working?": {
        "message": "Funktioniert es?"
    },
    "Works on all sites but slower": {
        "message": "Funktioniert auf allen Websites, aber langsamer"
    },
    "YD": {
        "message": "Demokratische Volksrepublik Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Ja"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Um Hola zu nutzen wird die neueste Opera Version benötigt. Drücken Sie <a>hier</a> zum Aktuallisieren."
    },
    "ZA": {
        "message": "Südafrika"
    },
    "ZM": {
        "message": "Sambia"
    },
    "ZW": {
        "message": "Simbabwe"
    },
    "ZZ": {
        "message": "Unbekannte oder ungültige Region"
    },
    "app_desc": {
        "message": "Greifen Sie mit Hola auf Web-Seiten zu, die in Ihrem Land, in Ihrer Firma oder in Ihrer Schule blockiert sind! Hola ist kostenlos und einfach zu bedienen!"
    },
    "app_name": {
        "message": "Hola Besseres Internet"
    },
    "back to": {
        "message": "Zurück zu"
    },
    "changing...": {
        "message": "Wechsle..."
    },
    "cool sites": {
        "message": "coole Seiten"
    },
    "current site": {
        "message": "aktuelle Seite"
    },
    "day": {
        "message": "Tag"
    },
    "days": {
        "message": "Tage"
    },
    "even more...": {
        "message": "noch mehr..."
    },
    "mode": {
        "message": "Modus"
    },
    "more options...": {
        "message": "Mehr Einstellungen..."
    },
    "not working?": {
        "message": "Es funktioniert nicht?"
    },
    "not working? try another server": {
        "message": "Es funktioniert nicht? Versuchen Sie es mit einen anderen Server"
    },
    "on this page": {
        "message": "auf dieser Seite"
    },
    "sites that are censored": {
        "message": "Web-Seiten, die zensiert sind"
    },
    "start": {
        "message": "Starten"
    },
    "working? remember": {
        "message": "Funktioniert? Merken"
    }
};
return E; });