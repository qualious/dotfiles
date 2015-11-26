'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " przez "
    },
    "$1 Buffering?": {
        "message": "Buforowanie $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola, aby uzyskać dostęp do $2\n\nKliknij tutaj, aby zrobić to samo: $3\n\nInstaluje, który pozwala mi korzystać z Internetu szybciej i dostęp Hola $4$5"
    },
    "$1 from $2": {
        "message": "$1 od $2"
    },
    "$1 not found": {
        "message": "$1 nie znaleziono"
    },
    "$1 via Hola": {
        "message": "$1 za Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(niektóre funkcje Hola nie są dostępne w twojej wersji)"
    },
    "AC": {
        "message": "Wyspa Wniebowstąpienia"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Zjednoczone Emiraty Arabskie"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua i Barbuda"
    },
    "AN": {
        "message": "Antyle Holenderskie"
    },
    "AQ": {
        "message": "Antarktyka"
    },
    "AR": {
        "message": "Argentyna"
    },
    "AS": {
        "message": "Samoa Amerykańskie"
    },
    "AX": {
        "message": "Wyspy Alandzkie"
    },
    "AZ": {
        "message": "Azerbejdżan"
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
        "message": "Akcelerator jest"
    },
    "Access $1 - cool site!": {
        "message": "Dostęp $1 - fajne miejsce!"
    },
    "Access $1?": {
        "message": "Dostęp $1?"
    },
    "Access any site from any country, free": {
        "message": "Dostęp do każdej strony z każdego kraju, za darmo"
    },
    "Access cool sites": {
        "message": "Dostęp fajne strony"
    },
    "Access more sites": {
        "message": "Dostęp więcej stron"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Strony dostępu cenzurowane w kraju i przyspieszyć swój internet z Hola - za darmo!"
    },
    "Accessing $1 with Hola": {
        "message": "Dostęp do $1 z Hola"
    },
    "Account": {
        "message": "Konto"
    },
    "Account type": {
        "message": "Typ konta"
    },
    "Activating...": {
        "message": "Aktywacja..."
    },
    "All ($1)": {
        "message": "Wszystkie ($1)"
    },
    "Apply settings...": {
        "message": "Zastosuj ustawienia ..."
    },
    "Author site:": {
        "message": "Autor strony:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Niesamowite!"
    },
    "BA": {
        "message": "Bośnia i Hercegowina"
    },
    "BD": {
        "message": "Bangladesz"
    },
    "BE": {
        "message": "Belgia"
    },
    "BG": {
        "message": "Bułgaria"
    },
    "BH": {
        "message": "Bahrajn"
    },
    "BL": {
        "message": "Saint-Barthélemy"
    },
    "BM": {
        "message": "Bermudy"
    },
    "BN": {
        "message": "Brunei Darussalam"
    },
    "BO": {
        "message": "Boliwia"
    },
    "BQ": {
        "message": "Brytyjskie Terytorium Antarktyczne"
    },
    "BR": {
        "message": "Brazylia"
    },
    "BS": {
        "message": "Bahamy"
    },
    "BV": {
        "message": "Wyspa Bouveta"
    },
    "BY": {
        "message": "Białoruś"
    },
    "Back to $1": {
        "message": "Powrót do $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Bądź pierwszy, aby Hola dla iPhone / iPad - Zarejestruj się już teraz:"
    },
    "Browsing": {
        "message": "Przeglądanie"
    },
    "Buffering problems?": {
        "message": "Problemy buforujące?"
    },
    "Buffering?": {
        "message": "Buforowanie?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Wyspy Kokosowe"
    },
    "CD": {
        "message": "Demokratyczna Republika Konga"
    },
    "CF": {
        "message": "Republika Środkowoafrykańska"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Szwajcaria"
    },
    "CI": {
        "message": "Wybrzeże Kości Słoniowej"
    },
    "CK": {
        "message": "Wyspy Cooka"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Chiny"
    },
    "CO": {
        "message": "Kolumbia"
    },
    "CP": {
        "message": "Clipperton Wyspa"
    },
    "CR": {
        "message": "Kostaryka"
    },
    "CS": {
        "message": "Serbia i Czarnogóra"
    },
    "CT": {
        "message": "Canton i Enderbury"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Republika Zielonego Przylądka"
    },
    "CX": {
        "message": "Wyspa Bożego Narodzenia"
    },
    "CY": {
        "message": "Cypr"
    },
    "CZ": {
        "message": "Czechy"
    },
    "Changing country...": {
        "message": "Zmiana kraju ..."
    },
    "Check out Hola for $1!": {
        "message": "Sprawdź Hola tylko $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Zapoznaj się Hola dla urządzeń mobilnych"
    },
    "Check your Internet connection": {
        "message": "Sprawdź czy masz dostęp do internetu"
    },
    "Choose<br>Country": {
        "message": "Wybierać <br> Kraj"
    },
    "Configuring...": {
        "message": "Konfiguracja ..."
    },
    "Connecting...": {
        "message": "Łączenie ..."
    },
    "Cool site!": {
        "message": "Fajne miejsce!"
    },
    "Creative licenses": {
        "message": "Pień licencje"
    },
    "DD": {
        "message": "Niemcy Wschodnie"
    },
    "DE": {
        "message": "Niemcy"
    },
    "DJ": {
        "message": "Dżibuti"
    },
    "DK": {
        "message": "Dania"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Republika Dominikańska"
    },
    "DZ": {
        "message": "Algieria"
    },
    "Delete": {
        "message": "Usunąć"
    },
    "Deleted from my list": {
        "message": "Usunięto z mojej listy"
    },
    "Did it work?": {
        "message": "Czy to działa?"
    },
    "Did you experience any buffering?": {
        "message": "Czy występują jakiekolwiek buforowanie?"
    },
    "Disliked it": {
        "message": "Nie podobało jej"
    },
    "Don't show again for $1 for one week": {
        "message": "Nie pokazuj znowu za $1 na tydzień"
    },
    "Don't show again for any site for one week": {
        "message": "Nie pokazuj ponownie na każdej stronie przez tydzień"
    },
    "Downloading": {
        "message": "Ściąganie"
    },
    "EA": {
        "message": "Ceuta i Melilla"
    },
    "EC": {
        "message": "Ekwador"
    },
    "EG": {
        "message": "Egipt"
    },
    "EH": {
        "message": "Sahara Zachodnia"
    },
    "ER": {
        "message": "Erytrea"
    },
    "ES": {
        "message": "Hiszpania"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Unia Europejska"
    },
    "Enable": {
        "message": "Uruchom"
    },
    "Enable Hola Accelerator": {
        "message": "Włącz Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Ciesz się!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Cieszący Hola dla Chrome?"
    },
    "Enter site to access": {
        "message": "Wprowadź miejsce dostępu"
    },
    "Enter your email": {
        "message": "Wpisz swój adres e-mail"
    },
    "FI": {
        "message": "Finlandia"
    },
    "FJ": {
        "message": "Fidżi"
    },
    "FK": {
        "message": "Falklandy"
    },
    "FM": {
        "message": "Federalne Stany Mikronezji"
    },
    "FO": {
        "message": "Wyspy Owcze"
    },
    "FQ": {
        "message": "Francuski Terytoria Południowe i Antarktyczne"
    },
    "FR": {
        "message": "Francja"
    },
    "FX": {
        "message": "Metropolitan Francja"
    },
    "Fast": {
        "message": "Szybko"
    },
    "Finding new peers...": {
        "message": "Znalezienie nowych kolegów ..."
    },
    "Finding peers...": {
        "message": "Znalezienie rówieśników ..."
    },
    "Free": {
        "message": "Wolny"
    },
    "From": {
        "message": "Z"
    },
    "Full list": {
        "message": "Pełna lista"
    },
    "GB": {
        "message": "Wielka Brytania"
    },
    "GE": {
        "message": "Gruzja"
    },
    "GF": {
        "message": "Gujana Francuska"
    },
    "GG": {
        "message": "Wyspa Guernsey"
    },
    "GL": {
        "message": "Grenlandia"
    },
    "GN": {
        "message": "Gwinea"
    },
    "GP": {
        "message": "Gwadelupa"
    },
    "GQ": {
        "message": "Gwinea Równikowa"
    },
    "GR": {
        "message": "Grecja"
    },
    "GS": {
        "message": "Georgia Południowa i Sandwich Południowy"
    },
    "GT": {
        "message": "Gwatemala"
    },
    "GW": {
        "message": "Gwinea Bissau"
    },
    "GY": {
        "message": "Gujana"
    },
    "Get 24/7 Unblocking": {
        "message": "Pobierz 24/7 odblokowanie"
    },
    "Get Hola Accelerator": {
        "message": "Pobierz Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Pobierz Hola gracza"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Pobierz Hola Plus dla nieprzerwanej usługi bez reklam."
    },
    "Get Hola Premium": {
        "message": "Pobierz Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Pobierz Hola dla Androida"
    },
    "Get Premium support": {
        "message": "Uzyskać wsparcie Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Pobierz nieograniczony odblokowanie"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Uzyskaj dostęp do ocenzurowanych stron, spróbuj teraz: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Uzyskaj pomoc poprzez od inżyniera Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Zdobądź najszybsze serwery"
    },
    "Go": {
        "message": "Idź"
    },
    "Go Hola Premium": {
        "message": "Idź Hola premium"
    },
    "HK": {
        "message": "Hongkong, Specjalny Region Administracyjny Chin"
    },
    "HM": {
        "message": "Wyspy Heard i McDonalda"
    },
    "HR": {
        "message": "Chorwacja"
    },
    "HU": {
        "message": "Węgry"
    },
    "Hate it": {
        "message": "Nienawidzę,"
    },
    "Help": {
        "message": "Pomoc"
    },
    "Hey,\n\nI'm using": {
        "message": "Hej,\n\nużywam"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Witam,\n\nzacząłem używać $1 ($2). To pozwala mi korzystać z Internetu szybciej i uzyskać dostęp do $3 w moim kraju."
    },
    "Hola Accelerator": {
        "message": "Hola Akcelerator"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola, nie może pracować, ponieważ inny rozszerzenie kontroluje ustawienia serwera proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nie działa dobrze w trybie systemu Windows 8. Proszę przejść do trybu graficznego. Kliknij <a>tutaj</a> , aby uzyskać instrukcje"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nie jest dostępny w tej chwili, ale pracujemy nad tym."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola jest wyłączona, kliknij przycisk, aby włączyć"
    },
    "Hola site list": {
        "message": "Strony które możesz odblokować"
    },
    "I can now access $1 from any country!": {
        "message": "Teraz mogę przejść $1 z każdego kraju!"
    },
    "I did not experience any buffering": {
        "message": "Nie występują żadne buforowanie"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ja po prostu dostęp do ocenzurowane witryny przy użyciu Hola tylko $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Używam $1 do wyświetlenia $2 w moim kraju, i surfować szybciej!"
    },
    "IC": {
        "message": "Wyspy Kanaryjskie"
    },
    "ID": {
        "message": "Indonezja"
    },
    "IE": {
        "message": "Irlandia"
    },
    "IL": {
        "message": "Izrael"
    },
    "IM": {
        "message": "Wyspa Man"
    },
    "IN": {
        "message": "Indie"
    },
    "IO": {
        "message": "Terytorium Brytyjskie Oceanu Indyjskiego"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islandia"
    },
    "IT": {
        "message": "Włochy"
    },
    "Improve translation": {
        "message": "ulepsz tłumaczenie"
    },
    "Initializing...": {
        "message": "Inicjalizacja..."
    },
    "Install": {
        "message": "Zainstalować"
    },
    "Install Accelerator": {
        "message": "Zainstaluj Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Zainstaluj Hola darmo Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Silnik zainstalować Hola Hola, aby nadal korzystać bezpłatnie"
    },
    "Instantly watch any torrent Video": {
        "message": "Natychmiast oglądać dowolny film torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Zaproś znajomych - Free Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Zaproś przyjaciół. Pobierz Premium."
    },
    "It was okay": {
        "message": "Było w porządku"
    },
    "JE": {
        "message": "Wyspa Jersey"
    },
    "JM": {
        "message": "Jamajka"
    },
    "JO": {
        "message": "Jordania"
    },
    "JP": {
        "message": "Japonia"
    },
    "JT": {
        "message": "Johnston Wyspa"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgistan"
    },
    "KH": {
        "message": "Kambodża"
    },
    "KM": {
        "message": "Komory"
    },
    "KN": {
        "message": "Saint Kitts i Nevis"
    },
    "KP": {
        "message": "Korea Północna"
    },
    "KR": {
        "message": "Korea Południowa"
    },
    "KW": {
        "message": "Kuwejt"
    },
    "KY": {
        "message": "Kajmany"
    },
    "KZ": {
        "message": "Kazachstan"
    },
    "LB": {
        "message": "Liban"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Litwa"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LV": {
        "message": "Łotwa"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Język"
    },
    "Library": {
        "message": "Biblioteka"
    },
    "Like it": {
        "message": "Lubić to"
    },
    "Loading": {
        "message": "Ładowanie"
    },
    "Loading site...": {
        "message": "Ładowanie"
    },
    "Log in": {
        "message": "Zaloguj się"
    },
    "Log out": {
        "message": "Wyloguj się"
    },
    "Love Hola?": {
        "message": "Kocham Hola?"
    },
    "Love it": {
        "message": "Kocham to"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Mołdawia"
    },
    "ME": {
        "message": "Czarnogóra"
    },
    "MF": {
        "message": "Sint Maarten"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Wyspy Marshalla"
    },
    "MI": {
        "message": "Wyspy Midway"
    },
    "MM": {
        "message": "Birma"
    },
    "MO": {
        "message": "Makau, Specjalny Region Administracyjny Chin"
    },
    "MP": {
        "message": "Mariany Północne"
    },
    "MQ": {
        "message": "Martynika"
    },
    "MR": {
        "message": "Mauretania"
    },
    "MV": {
        "message": "Malediwy"
    },
    "MX": {
        "message": "Meksyk"
    },
    "MY": {
        "message": "Malezja"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Uczynić Internet lepszym z $1"
    },
    "Might not work on all sites": {
        "message": "Może nie działać na wszystkich stronach"
    },
    "Mode": {
        "message": "Tryb"
    },
    "More countries": {
        "message": "Więcej krajów"
    },
    "More sites...": {
        "message": "więcej..."
    },
    "More...": {
        "message": "więcej..."
    },
    "My Account": {
        "message": "Moje konto"
    },
    "My History": {
        "message": "Moja historia"
    },
    "My Settings": {
        "message": "Moje ustawienia"
    },
    "My favorites": {
        "message": "Ulubione"
    },
    "NC": {
        "message": "Nowa Kaledonia"
    },
    "NF": {
        "message": "Norfolk"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Holandia"
    },
    "NO": {
        "message": "Norwegia"
    },
    "NQ": {
        "message": "Dronning Maud Ziemia"
    },
    "NT": {
        "message": "Neutralny Strefa"
    },
    "NZ": {
        "message": "Nowa Zelandia"
    },
    "Need Help?": {
        "message": "Potrzebujesz pomocy?"
    },
    "Never ask me again": {
        "message": "Nigdy nie pytaj mnie ponownie"
    },
    "Never be a peer": {
        "message": "Nigdy nie będzie wzajemnej"
    },
    "No": {
        "message": "Nie"
    },
    "No idle peers found.": {
        "message": "Nie znaleziono żadnych bezczynności peerów."
    },
    "No recent videos found": {
        "message": "Nie znaleziono najnowsze filmy"
    },
    "No saved videos found": {
        "message": "Nie znaleziono zapisane filmy"
    },
    "No title": {
        "message": "Brak tytułu"
    },
    "No videos found": {
        "message": "Nie znaleziono filmów"
    },
    "No videos found on active page": {
        "message": "Nie znaleziono na aktywnej stronie filmy"
    },
    "No, Thanks": {
        "message": "Nie, dziękuję"
    },
    "No, fix it": {
        "message": "Nie, to naprawić"
    },
    "Not working?": {
        "message": "Nie działa?"
    },
    "Number of users that pressed not working": {
        "message": "Ilość użytkowników, którzy wybrali \"nie działa\""
    },
    "Number of users that use this option": {
        "message": "Ilość użytkowników korzystających z tej opcji"
    },
    "Off": {
        "message": "Wyłączony"
    },
    "Oh, yes!": {
        "message": "O, tak!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Stara wersja Firefoxa. Kliknij <a>tutaj</a> by go zaktualizować."
    },
    "On": {
        "message": "Na"
    },
    "Open Media Player": {
        "message": "Otwórz Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Nasz nowy Mplayer jest wkrótce!"
    },
    "PC": {
        "message": "Wyspy Pacyfiku Terytorium Powierniczego"
    },
    "PF": {
        "message": "Polinezja Francuska"
    },
    "PG": {
        "message": "Papua Nowa Gwinea"
    },
    "PH": {
        "message": "Filipiny"
    },
    "PL": {
        "message": "Polska"
    },
    "PM": {
        "message": "Saint-Pierre i Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Portoryko"
    },
    "PS": {
        "message": "Terytoria Palestyńskie"
    },
    "PT": {
        "message": "Portugalia"
    },
    "PU": {
        "message": "Wyspy Pacyfiku Stanów Zjednoczonych Różne"
    },
    "PY": {
        "message": "Paragwaj"
    },
    "PZ": {
        "message": "Strefa Kanału Panamskiego"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Proszę wyłączyć inne <a>rozszerzenia</a>, które naszym zdaniem mogą kontrolować ustawienia serwera proxy, takich jak ad-blokery, innych usług VPN, itp."
    },
    "Please enter a valid email address.": {
        "message": "Proszę podać poprawny adres e-mail."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Proszę podać adres strony internetowej, jak facebook.com"
    },
    "Please help us get better": {
        "message": "Proszę pomóc nam lepiej"
    },
    "Popular in $1": {
        "message": "Popularne w $1"
    },
    "Popular in the world": {
        "message": "Popularne w świecie"
    },
    "Popular sites": {
        "message": "Popularne strony"
    },
    "Premium": {
        "message": "Premia"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Oceania inne"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Rumunia"
    },
    "RU": {
        "message": "Rosja"
    },
    "Rate us": {
        "message": "Oceń nas"
    },
    "Recent Videos": {
        "message": "Najnowsze filmy wideo"
    },
    "Reload": {
        "message": "Przeładuj"
    },
    "Reload Hola": {
        "message": "Przeładuj Hola"
    },
    "Remember server": {
        "message": "Zapamiętaj serwer"
    },
    "Report a problem": {
        "message": "Zgłoś problem"
    },
    "Retry safe mode": {
        "message": "Ponów tryb bezpieczny"
    },
    "SA": {
        "message": "Arabia Saudyjska"
    },
    "SB": {
        "message": "Wyspy Salomona"
    },
    "SC": {
        "message": "Seszele"
    },
    "SE": {
        "message": "Szwecja"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Wyspa Świętej Heleny"
    },
    "SI": {
        "message": "Słowenia"
    },
    "SJ": {
        "message": "Svalbard i Jan Mayen"
    },
    "SK": {
        "message": "Słowacja"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Wyspy Świętego Tomasza i Książęca"
    },
    "SU": {
        "message": "Związek Socjalistycznych Republik Radzieckich"
    },
    "SV": {
        "message": "Salwador"
    },
    "SZ": {
        "message": "Suazi"
    },
    "Safe": {
        "message": "Bezpieczny"
    },
    "Safe mode": {
        "message": "Tryb bezpieczeństwa"
    },
    "Save": {
        "message": "Zapisz"
    },
    "Saved Videos": {
        "message": "Zapisane filmy"
    },
    "Saved for later": {
        "message": "Zapisane na później"
    },
    "Search video title": {
        "message": "Szukaj Tytuł wideo"
    },
    "Select a Country": {
        "message": "Wybierz kraj"
    },
    "Select site to unblock": {
        "message": "Wybierz miejsce, aby odblokować"
    },
    "Server saved!": {
        "message": "Serwer zapisane!"
    },
    "Set safe mode for $1 $2": {
        "message": "Ustaw tryb bezpieczny dla $1 $2"
    },
    "Settings": {
        "message": "Ustawienia"
    },
    "Share": {
        "message": "Udział"
    },
    "Share $1 on $2": {
        "message": "Podziel $1 $2"
    },
    "Share $1 via $2": {
        "message": "Podziel się $1 za $2"
    },
    "Share with friends!": {
        "message": "Podzielić się z przyjaciółmi!"
    },
    "Sign up": {
        "message": "Zapisać się"
    },
    "Solve buffering": {
        "message": "Rozwiąż buforowanie"
    },
    "Solve buffering problems with": {
        "message": "Rozwiązuj problemy buforowania z"
    },
    "Solves it": {
        "message": "Rozwiązuje to"
    },
    "Staff Picks": {
        "message": "Polecane programy"
    },
    "Start Hola": {
        "message": "rozpocznij"
    },
    "Starting...": {
        "message": "rozpoczynam..."
    },
    "Stop Hola": {
        "message": "Przystanek Hola"
    },
    "Stopping peer routing...": {
        "message": "Zatrzymanie rówieśników trasy ..."
    },
    "Stream": {
        "message": "Strumień"
    },
    "Stream Instantly": {
        "message": "Stream Natychmiast"
    },
    "Submit": {
        "message": "Przedkładać"
    },
    "Support Hola": {
        "message": "Wsparcie Hola"
    },
    "TC": {
        "message": "Turks i Caicos"
    },
    "TD": {
        "message": "Czad"
    },
    "TF": {
        "message": "Francuskie Terytoria Południowe"
    },
    "TG": {
        "message": "Iść"
    },
    "TH": {
        "message": "Tajlandia"
    },
    "TJ": {
        "message": "Tadżykistan"
    },
    "TL": {
        "message": "Timor Wschodni"
    },
    "TM": {
        "message": "Turkmenia"
    },
    "TN": {
        "message": "Tunezja"
    },
    "TR": {
        "message": "Turcja"
    },
    "TT": {
        "message": "Trynidad i Tobago"
    },
    "TW": {
        "message": "Tajwan"
    },
    "Talk to us on $1": {
        "message": "Porozmawiaj z nami $1"
    },
    "Tell friends about $1": {
        "message": "Powiadom znajomych o $1"
    },
    "Testing connection...": {
        "message": "Sprawdzanie połączenia ..."
    },
    "Thank you!": {
        "message": "Dziękujemy!"
    },
    "There seems to be an error": {
        "message": "Mamy problem"
    },
    "Top popular sites": {
        "message": "Najlepsze popularnych witryn"
    },
    "Translate to your language": {
        "message": "Przetłumaczyć na swój język"
    },
    "Try again": {
        "message": "Spróbuj ponownie"
    },
    "Try another server": {
        "message": "Wypróbuj inny serwer"
    },
    "Try it": {
        "message": "Wypróbuj"
    },
    "Try safe mode": {
        "message": "Spróbuj tryb bezpieczny"
    },
    "Try to <span>reload</span>": {
        "message": "Spróbuj <span>odświeżyć</span>"
    },
    "Trying another peer...": {
        "message": "Próbuje innego równorzędnego ..."
    },
    "Turn off Accelerator": {
        "message": "Wyłącz Accelerator"
    },
    "Turn off Hola": {
        "message": "Wyłącz Hola"
    },
    "Turn on Accelerator": {
        "message": "Włącz Accelerator"
    },
    "Turn on Hola": {
        "message": "Włącz Hola"
    },
    "Turn on to get started": {
        "message": "Uruchom by rozpocząć"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych"
    },
    "US": {
        "message": "Stany Zjednoczone"
    },
    "UY": {
        "message": "Urugwaj"
    },
    "Unblocker": {
        "message": "odblokować"
    },
    "Unblocker is disabled": {
        "message": "Hola jest wyłączony"
    },
    "Update": {
        "message": "Aktualizuj"
    },
    "Upgrade": {
        "message": "Aktualizuj"
    },
    "Using": {
        "message": "Korzystanie"
    },
    "Using Hola": {
        "message": "Korzystanie Hola"
    },
    "VA": {
        "message": "Watykan"
    },
    "VC": {
        "message": "Saint Vincent i Grenadyny"
    },
    "VD": {
        "message": "Wietnam Północny"
    },
    "VE": {
        "message": "Wenezuela"
    },
    "VG": {
        "message": "Brytyjskie Wyspy Dziewicze"
    },
    "VI": {
        "message": "Wyspy Dziewicze Stanów Zjednoczonych"
    },
    "VN": {
        "message": "Wietnam"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Bardzo stara wersja Google Chrome, <a>zaktualizuj</a> Chrome by móc używać Hola"
    },
    "Video": {
        "message": "Film"
    },
    "Video stuck?": {
        "message": "Zatrzymany film?"
    },
    "Videos available for instant streaming": {
        "message": "Filmy dostępne do natychmiastowego przesyłania strumieniowego"
    },
    "WF": {
        "message": "Wallis i Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Potrzebujesz Hola na innych urządzeniach? (Xbox, PS, Apple TV, iPhone...). Kliknij tutaj."
    },
    "Want to know more?": {
        "message": "Chcesz wiedzieć więcej?"
    },
    "Watch Now": {
        "message": "Oglądaj teraz"
    },
    "We found $1 videos": {
        "message": "Znaleźliśmy $1 filmy"
    },
    "We will be in touch with you soon": {
        "message": "Będziemy z Tobą wkrótce"
    },
    "Working!": {
        "message": "Pracy!"
    },
    "Working?": {
        "message": "Pracy?"
    },
    "Works on all sites but slower": {
        "message": "Działa na wszystkich stronach, ale wolniej"
    },
    "YD": {
        "message": "Republika Ludowo-Demokratyczna Jemenu"
    },
    "YE": {
        "message": "Jemen"
    },
    "YT": {
        "message": "Majotta"
    },
    "Yes": {
        "message": "Tak"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Musisz uaktualnić do najnowszej wersji Opery w użyciu Hola. Naciśnij <a>tutaj</a> , aby zaktualizować."
    },
    "ZA": {
        "message": "Republika Południowej Afryki"
    },
    "ZZ": {
        "message": "Nieznany lub nieprawidłowy region"
    },
    "app_desc": {
        "message": "Dostęp do zablokowanych stron internetowych w danym kraju, firmy lub szkoły z Hola! Hola jest bezpłatny i łatwy w użyciu!"
    },
    "app_name": {
        "message": "Hola - lepszy internet"
    },
    "back to": {
        "message": "powrót do"
    },
    "changing...": {
        "message": "uwalniam..."
    },
    "cool sites": {
        "message": "fajne strony"
    },
    "current site": {
        "message": "Obecna strona"
    },
    "day": {
        "message": "dzień"
    },
    "days": {
        "message": "dni"
    },
    "even more...": {
        "message": "jeszcze więcej..."
    },
    "mode": {
        "message": "tryb"
    },
    "more options...": {
        "message": "więcej opcji ..."
    },
    "not working?": {
        "message": "Nie działa?"
    },
    "not working? try another server": {
        "message": "Nie działa? spróbuj innego serwera"
    },
    "on this page": {
        "message": "na tej stronie"
    },
    "sites that are censored": {
        "message": "Witryny, które są cenzurowane"
    },
    "start": {
        "message": "rozpocznij"
    },
    "working? remember": {
        "message": "pracy? pamiętać"
    }
};
return E; });