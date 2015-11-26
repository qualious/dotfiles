'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " keresztül "
    },
    "$1 Buffering?": {
        "message": "$1 pufferelés?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola eléréséhez $2\n\nKattintson ide, hogy tegyék ugyanezt: $3\n\nEz telepíti Hola, amely lehetővé teszi számomra böngészhet az interneten gyorsabban és elérheti $4$5"
    },
    "$1 from $2": {
        "message": "$1 $2"
    },
    "$1 not found": {
        "message": "$1 nem található"
    },
    "$1 via Hola": {
        "message": "$1 Hola-val"
    },
    "(some Hola features are not available on your version)": {
        "message": "(A Hola néhány funkciója nem érhető el az Ön verziójában)"
    },
    "AC": {
        "message": "Ascension-sziget"
    },
    "AE": {
        "message": "Egyesült Arab Emirátus"
    },
    "AF": {
        "message": "Afganisztán"
    },
    "AG": {
        "message": "Antigua és Barbuda"
    },
    "AL": {
        "message": "Albánia"
    },
    "AM": {
        "message": "Örményország"
    },
    "AN": {
        "message": "Holland Antillák"
    },
    "AQ": {
        "message": "Antarktisz"
    },
    "AR": {
        "message": "Argentína"
    },
    "AS": {
        "message": "Amerikai Szamoa"
    },
    "AT": {
        "message": "Ausztria"
    },
    "AU": {
        "message": "Ausztrália"
    },
    "AX": {
        "message": "Aland-szigetek"
    },
    "AZ": {
        "message": "Azerbajdzsán"
    },
    "About": {
        "message": "Körülbelül"
    },
    "About Hola": {
        "message": "A Hola"
    },
    "Accelerator": {
        "message": "Gyorsító"
    },
    "Accelerator is": {
        "message": "Accelerator"
    },
    "Access $1 - cool site!": {
        "message": "Hozzáférés $1 - cool oldalhoz!"
    },
    "Access $1?": {
        "message": "Hozzáférés, $1?"
    },
    "Access any site from any country, free": {
        "message": "Hozzáférhet bármely honlaphoz, bármely országból, ingyen"
    },
    "Access cool sites": {
        "message": "Hozzáférés a legjobb webhelyekhez"
    },
    "Access more sites": {
        "message": "Hozzáférés további oldalakhoz"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Hozzáférési helyek cenzúrázták ki az országot, és felgyorsítja az internet a Hola - Ingyenes!"
    },
    "Accessing $1 with Hola": {
        "message": "Elérése $1 a Hola"
    },
    "Account": {
        "message": "Fiók"
    },
    "Account type": {
        "message": "Felhasználói fiók típusa"
    },
    "Activating...": {
        "message": "Aktiválása..."
    },
    "All ($1)": {
        "message": "Minden ($1)"
    },
    "Apply settings...": {
        "message": "Beállítások alkalmazása..."
    },
    "Author site:": {
        "message": "A Szerző oldala:"
    },
    "Author:": {
        "message": "Szerző:"
    },
    "Awesome!": {
        "message": "Félelmetes!"
    },
    "BA": {
        "message": "Bosznia-Hercegovina"
    },
    "BD": {
        "message": "Banglades"
    },
    "BG": {
        "message": "Bulgária"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BO": {
        "message": "Bolívia"
    },
    "BQ": {
        "message": "Brit Antarktiszi Terület"
    },
    "BR": {
        "message": "Brazília"
    },
    "BS": {
        "message": "Bahamák"
    },
    "BT": {
        "message": "Bhután"
    },
    "BV": {
        "message": "Bouvet-sziget"
    },
    "BY": {
        "message": "Fehéroroszország"
    },
    "Back to $1": {
        "message": "Vissza $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Legyen Öné elsőként a Hola for iPhone/iPad - Regisztráljon most:"
    },
    "Browsing": {
        "message": "Böngészés"
    },
    "Buffering problems?": {
        "message": "Pufferelési problémái vannak?"
    },
    "Buffering?": {
        "message": "Pufferelés?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kókusz-szigetek"
    },
    "CD": {
        "message": "Kongó - Kinshasa"
    },
    "CF": {
        "message": "Közép-afrikai Köztársaság"
    },
    "CG": {
        "message": "Kongó"
    },
    "CH": {
        "message": "Svájc"
    },
    "CI": {
        "message": "Elefántcsontpart"
    },
    "CK": {
        "message": "Cook-szigetek"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kína"
    },
    "CO": {
        "message": "Kolumbia"
    },
    "CP": {
        "message": "Clipperton-sziget"
    },
    "CS": {
        "message": "Szerbia és Montenegró"
    },
    "CT": {
        "message": "Kanton és Enderbury szigetek"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Zöld-foki Köztársaság"
    },
    "CX": {
        "message": "Karácsony-szigetek"
    },
    "CY": {
        "message": "Ciprus"
    },
    "CZ": {
        "message": "Csehország"
    },
    "Changing country...": {
        "message": "Ország módosítása..."
    },
    "Check out Hola for $1!": {
        "message": "Nézze meg Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Nézze meg Hola a mobil eszközök"
    },
    "Check your Internet connection": {
        "message": "Ellenőrizze az Internet kapcsolatot"
    },
    "Choose<br>Country": {
        "message": "Válasszon<br>Országot"
    },
    "Configuring...": {
        "message": "Konfigurálás..."
    },
    "Connecting...": {
        "message": "Csatlakozás..."
    },
    "Cool site!": {
        "message": "Cool honlapon!"
    },
    "Creative licenses": {
        "message": "Kreatív licenszek"
    },
    "DD": {
        "message": "Kelet-Németország"
    },
    "DE": {
        "message": "Németország"
    },
    "DJ": {
        "message": "Dzsibuti"
    },
    "DK": {
        "message": "Dánia"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominikai Köztársaság"
    },
    "DZ": {
        "message": "Algéria"
    },
    "Delete": {
        "message": "Töröl"
    },
    "Deleted from my list": {
        "message": "Törlésre listámon"
    },
    "Did it work?": {
        "message": "Sikerült?"
    },
    "Did you experience any buffering?": {
        "message": "Vajon Ön is tapasztalja a pufferelést?"
    },
    "Disliked it": {
        "message": "Nem tetszett"
    },
    "Don't show again for $1 for one week": {
        "message": "Ne mutassa újra, heti $1"
    },
    "Don't show again for any site for one week": {
        "message": "Ne jelenjen meg semmilyen honlap egy hétig"
    },
    "Downloading": {
        "message": "Letöltés"
    },
    "EA": {
        "message": "Ceuta és Melilla"
    },
    "EE": {
        "message": "Észtország"
    },
    "EG": {
        "message": "Egyiptom"
    },
    "EH": {
        "message": "Nyugat-Szahara"
    },
    "ES": {
        "message": "Spanyolország"
    },
    "ET": {
        "message": "Etiópia"
    },
    "EU": {
        "message": "Európai Únió"
    },
    "Enable": {
        "message": "Engedélyez"
    },
    "Enable Hola Accelerator": {
        "message": "A Hola Gyorsító engedélyezése"
    },
    "Enjoy!": {
        "message": "Jó szórakozást!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Élvezi Hola Chrome?"
    },
    "Enter site to access": {
        "message": "Adja meg a helyszínen, hogy hozzáférést"
    },
    "Enter your email": {
        "message": "Adja meg az email címét"
    },
    "FI": {
        "message": "Finnország"
    },
    "FJ": {
        "message": "Fidzsi"
    },
    "FK": {
        "message": "Falkland-szigetek"
    },
    "FM": {
        "message": "Mikronézia"
    },
    "FO": {
        "message": "Feröer-szigetek"
    },
    "FQ": {
        "message": "Francia Déli és Antarktiszi Területek"
    },
    "FR": {
        "message": "Franciaország"
    },
    "Fast": {
        "message": "Gyors"
    },
    "Finding new peers...": {
        "message": "Új peerek keresése..."
    },
    "Finding peers...": {
        "message": "Peerek keresése..."
    },
    "Free": {
        "message": "Ingyenes"
    },
    "From": {
        "message": "A"
    },
    "Full list": {
        "message": "Teljes lista"
    },
    "GB": {
        "message": "Egyesült Királyság"
    },
    "GE": {
        "message": "Grúzia"
    },
    "GF": {
        "message": "Francia Guyana"
    },
    "GG": {
        "message": "Guernsey-sziget"
    },
    "GH": {
        "message": "Ghána"
    },
    "GI": {
        "message": "Gibraltár"
    },
    "GL": {
        "message": "Grönland"
    },
    "GQ": {
        "message": "Egyenlítői-Guinea"
    },
    "GR": {
        "message": "Görögország"
    },
    "GS": {
        "message": "Dél Grúzia és a Déli Szendvics-szigetek"
    },
    "GW": {
        "message": "Bissau-Guinea"
    },
    "Get 24/7 Unblocking": {
        "message": "Szerezze be a 24/7 Feloldót"
    },
    "Get Free Premium": {
        "message": "Szerezzen ingyen Premium-ot"
    },
    "Get Hola Accelerator": {
        "message": "A Hola Gyorsító beszerzése"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Szerezze be a Hola Plus-t a folyamatos, reklámmentes szolgáltatáshoz."
    },
    "Get Hola Premium": {
        "message": "Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Szerezze be, Hola for Android"
    },
    "Get Premium support": {
        "message": "Szerezzen Prémium ügyfélszolgálatot"
    },
    "Get Unlimited Unblocking": {
        "message": "Szerezzen Korlátlan blokkolás mentességet"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Kap hozzáférést cenzúrázott oldalak, próbálja ki most: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Segítséget kérhet egy mérnöktől Skype-on keresztül:"
    },
    "Get the Fastest Servers": {
        "message": "Megkapja a leggyorsabb szervereket"
    },
    "Go": {
        "message": "Megy"
    },
    "Go Hola Premium": {
        "message": "Hola Premium"
    },
    "HK": {
        "message": "Hongkong S.A.R, Kína"
    },
    "HM": {
        "message": "Heard és McDonald Szigetek"
    },
    "HR": {
        "message": "Horvátország"
    },
    "HU": {
        "message": "Magyarország"
    },
    "Hate it": {
        "message": "Utálom"
    },
    "Help": {
        "message": "Segítség"
    },
    "Hey,\n\nI'm using": {
        "message": "Hé,\n\nén vagyok a"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Szia,\n\nelkezdtem $1 ($2). Ez lehetővé teszi számomra böngészhet az interneten gyorsabban hozzáfér, $3 az én hazámban."
    },
    "Hola Accelerator": {
        "message": "Hola Gyorsító"
    },
    "Hola Media Player": {
        "message": "Hola Médialejátszó"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "A Hola nem működik megfelelően, mert másik bővítmény irányítja a proxy beállításokat."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "A Hola nem működik jól Windows 8 módban. Váltson át asztal módba. Kattintson <a>ide</a> az instrukciókért"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola most nem működik, de dolgozunk rajta."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola ki van kapcsolva, kattintson bekapcsolásához"
    },
    "Hola site list": {
        "message": "Hola weblap lista"
    },
    "I can now access $1 from any country!": {
        "message": "Most már hozzáférhet $1 bármely országban!"
    },
    "I did not experience any buffering": {
        "message": "Én nem tapasztaltam semmilyen pufferelést"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Én csak elérhető a cenzúrázott weboldal segítségével Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Én a $1 megtekintése $2 az én országomban, és böngészés gyorsabb!"
    },
    "IC": {
        "message": "Kanári-szigetek"
    },
    "ID": {
        "message": "Indonézia"
    },
    "IE": {
        "message": "Írország"
    },
    "IL": {
        "message": "Izrael"
    },
    "IM": {
        "message": "Man-sziget"
    },
    "IO": {
        "message": "Brit Indiai Oceán"
    },
    "IQ": {
        "message": "Irak"
    },
    "IR": {
        "message": "Irán"
    },
    "IS": {
        "message": "Izland"
    },
    "IT": {
        "message": "Olaszország"
    },
    "Improve translation": {
        "message": "Fordítás javítása"
    },
    "Initializing...": {
        "message": "Inicializálás..."
    },
    "Install": {
        "message": "Telepítés"
    },
    "Install Accelerator": {
        "message": "Gyorsító telepítése"
    },
    "Install Free Hola Accelerator": {
        "message": "Az ingyenes Hola Gyorsító telepítése"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Telepítse Hola Engine hogy továbbra is használja Hola ingyen"
    },
    "Instantly watch any torrent Video": {
        "message": "Azonnal nézni a torrent Videó"
    },
    "Invite friends - free Premium.": {
        "message": "Hívja meg barátait - ingyen Hola Prémium."
    },
    "Invite friends. Get Premium.": {
        "message": "Hívja meg barátait. Premium-ot kap."
    },
    "It was okay": {
        "message": "Rendben volt"
    },
    "JO": {
        "message": "Jordánia"
    },
    "JP": {
        "message": "Japán"
    },
    "KG": {
        "message": "Kirgizisztán"
    },
    "KH": {
        "message": "Kambodzsa"
    },
    "KM": {
        "message": "Comore-szigetek"
    },
    "KN": {
        "message": "Saint Kitts és Nevis"
    },
    "KP": {
        "message": "Észak-Korea"
    },
    "KR": {
        "message": "Dél-Korea"
    },
    "KW": {
        "message": "Kuvait"
    },
    "KY": {
        "message": "Kajmán-szigetek"
    },
    "KZ": {
        "message": "Kazahsztán"
    },
    "LA": {
        "message": "Laosz"
    },
    "LB": {
        "message": "Libanon"
    },
    "LC": {
        "message": "Santa Lucia"
    },
    "LK": {
        "message": "Srí Lanka"
    },
    "LR": {
        "message": "Libéria"
    },
    "LT": {
        "message": "Litvánia"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "LV": {
        "message": "Lettország"
    },
    "LY": {
        "message": "Líbia"
    },
    "Language": {
        "message": "Nyelv"
    },
    "Library": {
        "message": "Könyvtár"
    },
    "Like it": {
        "message": "Tetszik"
    },
    "Loading": {
        "message": "Betöltés"
    },
    "Loading site...": {
        "message": "Oldal betöltés..."
    },
    "Log in": {
        "message": "Bejelentkezés"
    },
    "Log out": {
        "message": "Kijelentkezni"
    },
    "Love Hola?": {
        "message": "Kedveli a Hola-t?"
    },
    "Love it": {
        "message": "Imádom"
    },
    "MA": {
        "message": "Marokkó"
    },
    "ME": {
        "message": "Montenegró"
    },
    "MG": {
        "message": "Madagaszkár"
    },
    "MH": {
        "message": "Marshall-szigetek"
    },
    "MI": {
        "message": "Midway-szigetek"
    },
    "MK": {
        "message": "Macedónia"
    },
    "MM": {
        "message": "Mianmar"
    },
    "MN": {
        "message": "Mongólia"
    },
    "MO": {
        "message": "Makaó SAR Kína"
    },
    "MP": {
        "message": "Északi Mariana-szigetek"
    },
    "MR": {
        "message": "Mauritánia"
    },
    "MT": {
        "message": "Málta"
    },
    "MV": {
        "message": "Maldív-szigetek"
    },
    "MX": {
        "message": "Mexikó"
    },
    "MY": {
        "message": "Malajzia"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Tedd Internet jobb $1"
    },
    "Menu": {
        "message": "Menü"
    },
    "Might not work on all sites": {
        "message": "Lehet, hogy nem minden gépen működik"
    },
    "Mode": {
        "message": "Mód"
    },
    "More countries": {
        "message": "További országok"
    },
    "More sites...": {
        "message": "További oldalak..."
    },
    "More...": {
        "message": "Tovább..."
    },
    "My Account": {
        "message": "Fiókom"
    },
    "My History": {
        "message": "Saját története"
    },
    "My Settings": {
        "message": "Beállításaim"
    },
    "My favorites": {
        "message": "Kedvencek"
    },
    "NA": {
        "message": "Namíbia"
    },
    "NC": {
        "message": "Új-Kaledónia"
    },
    "NF": {
        "message": "Norfolk-sziget"
    },
    "NG": {
        "message": "Nigéria"
    },
    "NL": {
        "message": "Hollandia"
    },
    "NO": {
        "message": "Norvégia"
    },
    "NP": {
        "message": "Nepál"
    },
    "NT": {
        "message": "Semleges Zóna"
    },
    "NZ": {
        "message": "Új-Zéland"
    },
    "Need Help?": {
        "message": "Segítségre van szüksége?"
    },
    "Never ask me again": {
        "message": "Soha ne kérdezze meg újra"
    },
    "Never be a peer": {
        "message": "Soha nem lehet egyenrangú"
    },
    "No": {
        "message": "Nem"
    },
    "No idle peers found.": {
        "message": "Nincsenek tétlen peerek."
    },
    "No recent videos found": {
        "message": "Nincs újabb videók találhatók"
    },
    "No saved videos found": {
        "message": "Nem mentett videók találhatók"
    },
    "No title": {
        "message": "Nincs cím"
    },
    "No videos found": {
        "message": "Nem található videó"
    },
    "No videos found on active page": {
        "message": "Nem található videó az aktív oldalon"
    },
    "No, Thanks": {
        "message": "Nem, Kösz"
    },
    "No, fix it": {
        "message": "Nem, rögzítse"
    },
    "Not working?": {
        "message": "Nem működik?"
    },
    "Number of users that pressed not working": {
        "message": "Felhasználók számára nyomva ez nem működik"
    },
    "Number of users that use this option": {
        "message": "A lehetőséget használók száma"
    },
    "OM": {
        "message": "Omán"
    },
    "Off": {
        "message": "Ki"
    },
    "Oh, yes!": {
        "message": "Ó, igen!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "A Firefox túl régi. Katt <a>ide</a> a frissítéshez."
    },
    "On": {
        "message": "A"
    },
    "Open Media Player": {
        "message": "Hola Médialejátszó megnyítása"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "A Brand New Mplayer hamarosan!"
    },
    "PC": {
        "message": "Csendes-óceáni gyámsági terület"
    },
    "PF": {
        "message": "Francia Polinézia"
    },
    "PG": {
        "message": "Pápua Új-Guinea"
    },
    "PH": {
        "message": "Fülöp-szigetek"
    },
    "PK": {
        "message": "Pakisztán"
    },
    "PL": {
        "message": "Lengyelország"
    },
    "PM": {
        "message": "Saint Pierre és Miquelon"
    },
    "PN": {
        "message": "Pitcairn-sziget"
    },
    "PS": {
        "message": "Palesztin Terület"
    },
    "PT": {
        "message": "Portugália"
    },
    "PU": {
        "message": "Amerikai Csendes-óceáni szigetek Egyéb"
    },
    "PZ": {
        "message": "Panama-csatorna övezet"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Kérjük, kapcsoljon ki minden egyéb <a>bővítményt</a>, amelyről úgy gondolja, lehet, hogy irányítja a proxy beállításait, beállítások - bővítmények (mint reklámblokkolók, más VPN szolgáltatások, stb."
    },
    "Please enter a valid email address.": {
        "message": "Érvényes email címet írjon be."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Írja be a weboldal címét, pl. facebook.com"
    },
    "Please help us get better": {
        "message": "Segítsen nekünk jobbá tenni"
    },
    "Popular in $1": {
        "message": "Népszerű $1"
    },
    "Popular in the world": {
        "message": "Világszerte népszerű"
    },
    "Popular sites": {
        "message": "Népszerű oldalak"
    },
    "Premium": {
        "message": "Prémium"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Külterületi Óceánia"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Románia"
    },
    "RS": {
        "message": "Szerbia"
    },
    "RU": {
        "message": "Oroszország"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Értékelj minket"
    },
    "Recent Videos": {
        "message": "Utolsó videók"
    },
    "Reload": {
        "message": "Újratöltés"
    },
    "Reload Hola": {
        "message": "Hola Újratöltés"
    },
    "Remember server": {
        "message": "Emlékezzen a szerverre"
    },
    "Report a problem": {
        "message": "Jelezze a problémát"
    },
    "Retry safe mode": {
        "message": "Próbálja újra csökkentett módban"
    },
    "SA": {
        "message": "Szaúd-Arábia"
    },
    "SB": {
        "message": "Salamon-szigetek"
    },
    "SC": {
        "message": "Seychelle-szigetek"
    },
    "SD": {
        "message": "Szudán"
    },
    "SE": {
        "message": "Svédország"
    },
    "SG": {
        "message": "Szingapúr"
    },
    "SH": {
        "message": "Szent Helena"
    },
    "SI": {
        "message": "Szlovénia"
    },
    "SJ": {
        "message": "Svalbard és Jan Mayen"
    },
    "SK": {
        "message": "Szlovákia"
    },
    "SN": {
        "message": "Szenegál"
    },
    "SO": {
        "message": "Szomália"
    },
    "ST": {
        "message": "Sao Tomé és Príncipe"
    },
    "SU": {
        "message": "Szovjet Szocialista Köztársaságok Szövetsége"
    },
    "SV": {
        "message": "Salvador"
    },
    "SY": {
        "message": "Szíria"
    },
    "SZ": {
        "message": "Szváziföld"
    },
    "Safe": {
        "message": "Biztonságos"
    },
    "Safe mode": {
        "message": "Biztonságos mód"
    },
    "Save": {
        "message": "Mentés"
    },
    "Saved Videos": {
        "message": "Mentett videók"
    },
    "Saved for later": {
        "message": "Elmenthető későbbre"
    },
    "Search video title": {
        "message": "Keresés a videó címe"
    },
    "Select a Country": {
        "message": "Válassza ki az országot"
    },
    "Select site to unblock": {
        "message": "Válassza ki helyszíni feloldásához"
    },
    "Server saved!": {
        "message": "A szerver mentve!"
    },
    "Set safe mode for $1 $2": {
        "message": "Állítsa csökkentett üzemmódban $1 $2"
    },
    "Settings": {
        "message": "Beállítások"
    },
    "Share": {
        "message": "Részvény"
    },
    "Share $1 on $2": {
        "message": "Ossza $1 $2"
    },
    "Share $1 via $2": {
        "message": "Ossza $1 via $2"
    },
    "Share with friends!": {
        "message": "Oszd meg a barátaiddal!"
    },
    "Sign up": {
        "message": "Regisztráljon"
    },
    "Solve buffering": {
        "message": "Pufferelés megoldása"
    },
    "Solve buffering problems with": {
        "message": "Puffer problémák megoldása"
    },
    "Solves it": {
        "message": "Megoldja,"
    },
    "Staff Picks": {
        "message": "A mi ajánlatunk"
    },
    "Start Hola": {
        "message": "Hola indítása"
    },
    "Starting...": {
        "message": "Indulás..."
    },
    "Stop Hola": {
        "message": "Hola leállítása"
    },
    "Stopping peer routing...": {
        "message": "Leállítása peer routing..."
    },
    "Stream": {
        "message": "Folyam"
    },
    "Stream Instantly": {
        "message": "Patak Azonnal"
    },
    "Submit": {
        "message": "Beküldése"
    },
    "Support Hola": {
        "message": "Hola ügyfélszolgálat"
    },
    "TA": {
        "message": "Tristan da Cunha-"
    },
    "TC": {
        "message": "Turks- és Caicos-szigetek"
    },
    "TD": {
        "message": "Csád"
    },
    "TF": {
        "message": "Francia Déli Területek"
    },
    "TG": {
        "message": "Menni"
    },
    "TH": {
        "message": "Thaiföld"
    },
    "TJ": {
        "message": "Tadzsikisztán"
    },
    "TL": {
        "message": "Kelet-Timor"
    },
    "TM": {
        "message": "Türkmenisztán"
    },
    "TN": {
        "message": "Tunézia"
    },
    "TR": {
        "message": "Törökország"
    },
    "TT": {
        "message": "Trinidad és Tobago"
    },
    "TW": {
        "message": "Tajvan"
    },
    "TZ": {
        "message": "Tanzánia"
    },
    "Talk to us on $1": {
        "message": "Beszéljen velünk: $1"
    },
    "Tell friends about $1": {
        "message": "Mondja el barátainak, $1"
    },
    "Testing connection...": {
        "message": "Csatlakozás tesztelése..."
    },
    "Thank you!": {
        "message": "Köszönjük!"
    },
    "There seems to be an error": {
        "message": "Úgy tűnik, hogy hiba van"
    },
    "Top popular sites": {
        "message": "Top népszerű oldalak"
    },
    "Translate to your language": {
        "message": "Fordítás a te nyelvedre"
    },
    "Try again": {
        "message": "Próbálja újra"
    },
    "Try another server": {
        "message": "Próbáljon másik szervert"
    },
    "Try it": {
        "message": "Próbálja ki"
    },
    "Try safe mode": {
        "message": "Próbáld csökkentett módban"
    },
    "Try to <span>reload</span>": {
        "message": "Próbálja <span>újratölteni</span>"
    },
    "Trying another peer...": {
        "message": "Próbálok más peereket..."
    },
    "Turn off Accelerator": {
        "message": "Kapcsolja ki Accelerator"
    },
    "Turn off Hola": {
        "message": "Kapcsolja ki Hola"
    },
    "Turn on Accelerator": {
        "message": "Kapcsolja be Accelerator"
    },
    "Turn on Hola": {
        "message": "Kapcsolja be a Hola"
    },
    "Turn on to get started": {
        "message": "Kapcsolja be induláskor"
    },
    "UA": {
        "message": "Ukrajna"
    },
    "UM": {
        "message": "Amerikai Csendes-óceáni Szigetek"
    },
    "US": {
        "message": "Egyesült Államok"
    },
    "UZ": {
        "message": "Üzbegisztán"
    },
    "Unblocker": {
        "message": "Feloldó"
    },
    "Unblocker is disabled": {
        "message": "A Feloldó le van tiltva"
    },
    "Unblocker?": {
        "message": "Feloldja?"
    },
    "Update": {
        "message": "Frissítés"
    },
    "Upgrade": {
        "message": "Frissítés"
    },
    "Using": {
        "message": "Használata"
    },
    "Using Hola": {
        "message": "A Hola használata"
    },
    "VA": {
        "message": "Vatikán"
    },
    "VC": {
        "message": "Saint Vincent és Grenadines"
    },
    "VD": {
        "message": "Észak-Vietnam"
    },
    "VG": {
        "message": "Brit Virgin-szigetek"
    },
    "VI": {
        "message": "Amerikai Virgin-szigetek"
    },
    "VN": {
        "message": "Vietnám"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Nagyon régi a Chrome verziója, <a>frissítse</a> a Hola használatához"
    },
    "Video": {
        "message": "Videó"
    },
    "Video stuck?": {
        "message": "A videó megállt?"
    },
    "Videos available for instant streaming": {
        "message": "Videók elérhető az azonnali streaming"
    },
    "WF": {
        "message": "Wallis és Futuna"
    },
    "WS": {
        "message": "Szamoa"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Akarja más eszközökön is használni a Hola-t? (Xbox, PS, Apple TV, iPhone...). Katt ide"
    },
    "Want to know more?": {
        "message": "Szeretne többet megtudni?"
    },
    "Watch Now": {
        "message": "Nézd meg most"
    },
    "We found $1 videos": {
        "message": "Találtunk $1 videók"
    },
    "We will be in touch with you soon": {
        "message": "Hamarosan felvesszük Önnel a kapcsolatot"
    },
    "Working!": {
        "message": "Működik!"
    },
    "Working?": {
        "message": "Működik?"
    },
    "Works on all sites but slower": {
        "message": "Működik az összes oldalak, de lassabb"
    },
    "YD": {
        "message": "Népi Demokratikus Köztársaság Jemeni"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Igen"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "A Hola használatához frissítenie kell az Opera legújabb verziójára. Katt <a>ide</a> a frissítéshez."
    },
    "ZA": {
        "message": "Dél-Afrika"
    },
    "ZZ": {
        "message": "Ismeretlen vagy érvénytelen körzet"
    },
    "app_desc": {
        "message": "Access blokkolt weboldalak az Ön országában, vállalat vagy iskola Hola! Hola ingyenes és könnyen használható!"
    },
    "app_name": {
        "message": "Hola gyorsabb internet"
    },
    "back to": {
        "message": "vissza"
    },
    "changing...": {
        "message": "változtatás..."
    },
    "cool sites": {
        "message": "jó oldalak"
    },
    "current site": {
        "message": "jelenlegi helyén"
    },
    "day": {
        "message": "nap"
    },
    "days": {
        "message": "nap"
    },
    "even more...": {
        "message": "még több..."
    },
    "mode": {
        "message": "mód"
    },
    "more options...": {
        "message": "további beállítások..."
    },
    "not working?": {
        "message": "nem működik?"
    },
    "not working? try another server": {
        "message": "nem működik? próbáljon másik szervert"
    },
    "on this page": {
        "message": "Az ezen az oldalon"
    },
    "sites that are censored": {
        "message": "oldalak, cenzúrázzák"
    },
    "start": {
        "message": "kezdés"
    },
    "working? remember": {
        "message": "működik? emlékezik"
    }
};
return E; });