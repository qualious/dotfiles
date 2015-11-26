'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "kautta"
    },
    "$1 Buffering?": {
        "message": "$1 puskurointi?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola pääsyn $2\n\nKlikkaa tästä tekemään samoin: $3\n\nSe asentaa Holan, joka antaa minun surffata Internetissä nopeammin ja käyttää $4$5"
    },
    "$1 from $2": {
        "message": "Alkaen $1 $2"
    },
    "$1 not found": {
        "message": "$1 ei löytynyt"
    },
    "$1 via Hola": {
        "message": "$1 - esto poistettu"
    },
    "(some Hola features are not available on your version)": {
        "message": "(jotkut Holan ominaisuudet eivät ole käytettävissä versiossasi)"
    },
    "AC": {
        "message": "Ascension"
    },
    "AE": {
        "message": "Arabiemiirikunnat"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua ja Barbuda"
    },
    "AN": {
        "message": "Alankomaiden Antillit"
    },
    "AQ": {
        "message": "Antarktis"
    },
    "AR": {
        "message": "Argentiina"
    },
    "AS": {
        "message": "Amerikan Samoa"
    },
    "AT": {
        "message": "Itävalta"
    },
    "AX": {
        "message": "Ahvenanmaa"
    },
    "AZ": {
        "message": "Azerbaidžan"
    },
    "About": {
        "message": "Noin"
    },
    "About Hola": {
        "message": "Tietoja Holasta"
    },
    "Accelerator": {
        "message": "Kiihdytys"
    },
    "Accelerator is": {
        "message": "Accelerator on"
    },
    "Access $1 - cool site!": {
        "message": "Käytä $1 - viileä sivusto!"
    },
    "Access $1?": {
        "message": "Poistetaanko palvelun $1 esto?"
    },
    "Access any site from any country, free": {
        "message": "Käytä mitä tahansa sivustoa mistä tahansa maasta - ilmaiseksi"
    },
    "Access cool sites": {
        "message": "Käytä viileitä sivustoja"
    },
    "Access more sites": {
        "message": "Käytä useampia sivustoja"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Pääsy sivustoja sensuroitu oman maasi ja nopeuttaa Internet kanssa Hola - Ilmainen!"
    },
    "Accessing $1 with Hola": {
        "message": "Käyttää $1  Holan kautta"
    },
    "Account": {
        "message": "Tili"
    },
    "Account type": {
        "message": "Tilin tyyppi"
    },
    "Activating...": {
        "message": "Aktivointi..."
    },
    "All ($1)": {
        "message": "Kaikki ($1)"
    },
    "Apply settings...": {
        "message": "Käytä asetuksia ..."
    },
    "Author site:": {
        "message": "Tekijän sivusto:"
    },
    "Author:": {
        "message": "Tekijä:"
    },
    "Awesome!": {
        "message": "Mahtavaa!"
    },
    "BA": {
        "message": "Bosnia ja Hertsegovina"
    },
    "BE": {
        "message": "Belgia"
    },
    "BL": {
        "message": "Saint-Barthélemy"
    },
    "BQ": {
        "message": "Antarktiksen brittiläinen alue"
    },
    "BR": {
        "message": "Brasilia"
    },
    "BS": {
        "message": "Bahama"
    },
    "BV": {
        "message": "Bouvet’nsaari"
    },
    "BY": {
        "message": "Valko-Venäjä"
    },
    "Back to $1": {
        "message": "Takaisin $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Ole ensimmäisten joukossa, jotka saavat Holan iPhonelle / iPadille - Rekisteröidy nyt:"
    },
    "Browsing": {
        "message": "Selailu"
    },
    "Buffering problems?": {
        "message": "Puskurointi ongelmia?"
    },
    "Buffering?": {
        "message": "Puskurointi?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kookossaaret"
    },
    "CD": {
        "message": "Kongo-Kinshasa"
    },
    "CF": {
        "message": "Keski-Afrikan tasavalta"
    },
    "CG": {
        "message": "Kongo-Brazzaville"
    },
    "CH": {
        "message": "Sveitsi"
    },
    "CI": {
        "message": "Norsunluurannikko"
    },
    "CK": {
        "message": "Cookinsaaret"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kiina"
    },
    "CO": {
        "message": "Kolumbia"
    },
    "CP": {
        "message": "Clippertoninsaari"
    },
    "CS": {
        "message": "Serbia ja Montenegro"
    },
    "CT": {
        "message": "Canton ja Enderbury saaret"
    },
    "CU": {
        "message": "Kuuba"
    },
    "CV": {
        "message": "Kap Verde"
    },
    "CX": {
        "message": "Joulusaari"
    },
    "CY": {
        "message": "Kypros"
    },
    "CZ": {
        "message": "Tšekki"
    },
    "Changing country...": {
        "message": "Vaihtaa maata..."
    },
    "Check out Hola for $1!": {
        "message": "Tutustu Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Tutustu Hola mobiililaitteisiin"
    },
    "Check your Internet connection": {
        "message": "Tarkista, että sinulla on internet-yhteys"
    },
    "Choose<br>Country": {
        "message": "Valitse <br> Maa"
    },
    "Configuring...": {
        "message": "Määrittäminen ..."
    },
    "Connecting...": {
        "message": "Yhdistetään ..."
    },
    "Cool site!": {
        "message": "Viileä sivusto!"
    },
    "Creative licenses": {
        "message": "Creative lisenssit"
    },
    "DD": {
        "message": "Itä-Saksa"
    },
    "DE": {
        "message": "Saksa"
    },
    "DK": {
        "message": "Tanska"
    },
    "DO": {
        "message": "Dominikaaninen tasavalta"
    },
    "Delete": {
        "message": "Poistaa"
    },
    "Deleted from my list": {
        "message": "Poistettu listalta"
    },
    "Did it work?": {
        "message": "Toimiko se?"
    },
    "Did you experience any buffering?": {
        "message": "Koitko puskurointia?"
    },
    "Disliked it": {
        "message": "Pitänyt sitä"
    },
    "Don't show again for $1 for one week": {
        "message": "Älä näytä uudelleen $1 viikoon"
    },
    "Don't show again for any site for one week": {
        "message": "Älä näytä uudelleen millekkään sivustolle viikoon"
    },
    "Downloading": {
        "message": "Lataa"
    },
    "EA": {
        "message": "Ceutan ja Melillan"
    },
    "EE": {
        "message": "Viro"
    },
    "EG": {
        "message": "Egypti"
    },
    "EH": {
        "message": "Länsi-Sahara"
    },
    "ES": {
        "message": "Espanja"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Euroopan unioni"
    },
    "Enable": {
        "message": "Ota käyttöön"
    },
    "Enable Hola Accelerator": {
        "message": "Ota käyttöön Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Nauti!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Nautitaan Hola Chrome?"
    },
    "Enter site to access": {
        "message": "Syötä haluamasi sivusto"
    },
    "Enter your email": {
        "message": "Kirjoita sähköpostiosoite"
    },
    "FI": {
        "message": "Suomi"
    },
    "FJ": {
        "message": "Fidži"
    },
    "FK": {
        "message": "Falklandinsaaret"
    },
    "FM": {
        "message": "Mikronesian liittovaltio"
    },
    "FO": {
        "message": "Färsaaret"
    },
    "FQ": {
        "message": "Ranskan eteläiset ja antarktiset alueet"
    },
    "FR": {
        "message": "Ranska"
    },
    "FX": {
        "message": "Metropolitan Ranska"
    },
    "Fast": {
        "message": "Nopea"
    },
    "Finding new peers...": {
        "message": "Etsii uusia vertaiskäyttäjiä ..."
    },
    "Finding peers...": {
        "message": "Etsii vertaiskäyttäjiä ..."
    },
    "Free": {
        "message": "Ilmaiseksi"
    },
    "From": {
        "message": "Alkaen"
    },
    "Full list": {
        "message": "Täysi lista"
    },
    "GB": {
        "message": "Britannia"
    },
    "GF": {
        "message": "Ranskan Guayana"
    },
    "GL": {
        "message": "Grönlanti"
    },
    "GQ": {
        "message": "Päiväntasaajan Guinea"
    },
    "GR": {
        "message": "Kreikka"
    },
    "GS": {
        "message": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
    },
    "Get 24/7 Unblocking": {
        "message": "Hanki 24/7 eston poisto"
    },
    "Get Free Premium": {
        "message": "Hanki Free Premium"
    },
    "Get Hola Accelerator": {
        "message": "Hanki Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Hanki Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Hanki Hola Plus käyttääksesi palvelua katkotta ja ilman mainoksia."
    },
    "Get Hola Premium": {
        "message": "Hanki Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Hanki Hola Androidille"
    },
    "Get Premium support": {
        "message": "Hanki Premium tuki"
    },
    "Get Unlimited Unblocking": {
        "message": "Hanki rajaton estojen poisto"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Hanki pääsy sensuroiduille sivustoille, kokeile sitä nyt: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Hanki apua insinööriltä Skypessä:"
    },
    "Get the Fastest Servers": {
        "message": "Hanki nopeimmat palvelimet"
    },
    "Go": {
        "message": "Siirry"
    },
    "Go Hola Premium": {
        "message": "Hanki Premium"
    },
    "HK": {
        "message": "Hongkong – Kiinan erityishallintoalue"
    },
    "HM": {
        "message": "Heard- ja McDonaldinsaaret"
    },
    "HR": {
        "message": "Kroatia"
    },
    "HU": {
        "message": "Unkari"
    },
    "Hate it": {
        "message": "Inhota sitä"
    },
    "Help": {
        "message": "Apua"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nKäytän"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hei,\n\nalkoi käyttää $1 ($2). Se antaa minun surffata Internetissä nopeammin ja käyttää $3 kotimaassani."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ei voi toimia, koska toinen laajennus ohjaa välityspalvelimen asetuksia."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ei toimi hyvin Windows 8 -tilassa. Ole hyvä ja vaihda työpöytätilaan. Napsauta <a>tästä</a> saadaksesi ohjeita"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola ei ole juuri nyt saatavilla, mutta työskentelemme sen eteen."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola on pois päältä, kytke päälle"
    },
    "Hola site list": {
        "message": "Hola sivusto lista"
    },
    "I can now access $1 from any country!": {
        "message": "Voin nyt käyttää $1 mistä tahansa maasta!"
    },
    "I did not experience any buffering": {
        "message": "En kokenut puskurointia"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Olen juuri avannut sensuroidun sivuston käyttäen Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Käytän $1 nähdäkseni $2 kotimaassani, ja surffaan nopeammin!"
    },
    "IC": {
        "message": "Kanarian saaret"
    },
    "IE": {
        "message": "Irlanti"
    },
    "IM": {
        "message": "Mansaari"
    },
    "IN": {
        "message": "Intia"
    },
    "IO": {
        "message": "Brittiläinen Intian valtameren alue"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islanti"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Paranna käännöstä"
    },
    "Initializing...": {
        "message": "Valmistellaan..."
    },
    "Install": {
        "message": "Asenna"
    },
    "Install Accelerator": {
        "message": "Asenna Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Asenna Free Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Asenna Hola Moottori jatkaa Hola ilmaiseksi"
    },
    "Instantly watch any torrent Video": {
        "message": "Hetkessä katsella torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Kutsu ystäviä - ilmaiseksi Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Kutsu ystäviä. Saat Premiumin."
    },
    "It was okay": {
        "message": "Se oli okei"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Jordania"
    },
    "JP": {
        "message": "Japani"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgisia"
    },
    "KH": {
        "message": "Kambodža"
    },
    "KM": {
        "message": "Komorit"
    },
    "KN": {
        "message": "Saint Kitts ja Nevis"
    },
    "KP": {
        "message": "Pohjois-Korea"
    },
    "KR": {
        "message": "Etelä-Korea"
    },
    "KY": {
        "message": "Caymansaaret"
    },
    "KZ": {
        "message": "Kazakstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LT": {
        "message": "Liettua"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "Language": {
        "message": "Kieli"
    },
    "Library": {
        "message": "Kirjasto"
    },
    "Like it": {
        "message": "Pitää siitä"
    },
    "Loading": {
        "message": "Ladataan"
    },
    "Loading site...": {
        "message": "Ladataan sivua..."
    },
    "Log in": {
        "message": "Kirjaudu sisään"
    },
    "Log out": {
        "message": "Kirjaudu ulos"
    },
    "Love Hola?": {
        "message": "Rakastatko Holaa?"
    },
    "Love it": {
        "message": "Rakasta sitä"
    },
    "MA": {
        "message": "Marokko"
    },
    "MF": {
        "message": "Saint-Martin"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshallinsaaret"
    },
    "MI": {
        "message": "Midwaysaaret"
    },
    "MK": {
        "message": "Makedonia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Macao – Kiinan erityishallintoalue"
    },
    "MP": {
        "message": "Pohjois-Mariaanit"
    },
    "MV": {
        "message": "Malediivit"
    },
    "MX": {
        "message": "Meksiko"
    },
    "MY": {
        "message": "Malesia"
    },
    "MZ": {
        "message": "Mosambik"
    },
    "Make your Internet better with $1": {
        "message": "Parempi internet $1"
    },
    "Menu": {
        "message": "Valikko"
    },
    "Might not work on all sites": {
        "message": "Ehkä toimi kaikilla sivustoilla"
    },
    "Mode": {
        "message": "Tila"
    },
    "More countries": {
        "message": "Lisää maita"
    },
    "More sites...": {
        "message": "Lisää sivuja ..."
    },
    "More...": {
        "message": "Lisää ..."
    },
    "My Account": {
        "message": "Oma tilini"
    },
    "My History": {
        "message": "Oma historia"
    },
    "My Settings": {
        "message": "Omat asetukset"
    },
    "My favorites": {
        "message": "Omat suosikit"
    },
    "NC": {
        "message": "Uusi-Kaledonia"
    },
    "NF": {
        "message": "Norfolkinsaari"
    },
    "NL": {
        "message": "Alankomaat"
    },
    "NO": {
        "message": "Norja"
    },
    "NQ": {
        "message": "Kuningatar Maudin maalla"
    },
    "NT": {
        "message": "Puolueettomalla alueella"
    },
    "NZ": {
        "message": "Uusi-Seelanti"
    },
    "Need Help?": {
        "message": "Tarvitsetko apua?"
    },
    "Never ask me again": {
        "message": "Älä kysy uudestaan"
    },
    "Never be a peer": {
        "message": "Älä koskaan toimi vertaiskäyttäjänä"
    },
    "No": {
        "message": "Ei"
    },
    "No idle peers found.": {
        "message": "Vapaita vertaiskäyttäjiä ei löytynyt."
    },
    "No recent videos found": {
        "message": "Ei viimeaikaisia videoita löytynyt"
    },
    "No saved videos found": {
        "message": "Ei tallennettuja videoita löytynyt"
    },
    "No title": {
        "message": "Ei otsikkoa"
    },
    "No videos found": {
        "message": "Yhtään videota ei löytynyt"
    },
    "No videos found on active page": {
        "message": "Yhtään videota ei löytynyt aktiivista sivulla"
    },
    "No, Thanks": {
        "message": "Kiitos ei"
    },
    "No, fix it": {
        "message": "Ei, korjaa se"
    },
    "Not working?": {
        "message": "Ei toimi?"
    },
    "Number of users that pressed not working": {
        "message": "Käyttäjien määrä, jotka ilmoittivat 'ei toimi'"
    },
    "Number of users that use this option": {
        "message": "Käyttäjien määrä, jotka käyttävät tätä vaihtoehtoa"
    },
    "Off": {
        "message": "Pois"
    },
    "Oh, yes!": {
        "message": "Voi, kyllä!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Käytät Firefoxin vanhaa versiota. Päivitä <a>napsauttamalla tästä</a>."
    },
    "On": {
        "message": "Päällä"
    },
    "Open Media Player": {
        "message": "Avaa Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Meidän upouusi Mplayer on tulossa pian!"
    },
    "PC": {
        "message": "Tyynenmeren saaret Trust Territory"
    },
    "PF": {
        "message": "Ranskan Polynesia"
    },
    "PG": {
        "message": "Papua-Uusi-Guinea"
    },
    "PH": {
        "message": "Filippiinit"
    },
    "PL": {
        "message": "Puola"
    },
    "PM": {
        "message": "Saint-Pierre ja Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestiina"
    },
    "PT": {
        "message": "Portugali"
    },
    "PU": {
        "message": "Yhdysvaltain Muut Tyynenmeren saaret"
    },
    "PZ": {
        "message": "Panaman kanavan Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Ole hyvä ja poista muut <a>laajennukset</a>, jotka voisivat ohjata välityspalvelimen asetuksia, kuten mainos-estäjät, muut VPN-palvelut jne."
    },
    "Please enter a valid email address.": {
        "message": "Kirjoita voimassa oleva sähköpostiosoite."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Kirjoita Web-sivuston osoite, kuten facebook.com"
    },
    "Please help us get better": {
        "message": "Auta meitä paremmiksi"
    },
    "Popular in $1": {
        "message": "Suositut palvelut maassa $1"
    },
    "Popular in the world": {
        "message": "Suositut palvelut"
    },
    "Popular sites": {
        "message": "Suosittuja sivustoja"
    },
    "Premium": {
        "message": "Palkkio"
    },
    "QO": {
        "message": "Syrjäisten Oseania"
    },
    "RU": {
        "message": "Venäjä"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Anna meille arvosana"
    },
    "Recent Videos": {
        "message": "Uusimmat videot"
    },
    "Reload": {
        "message": "Päivitä"
    },
    "Reload Hola": {
        "message": "Päivitä Hola"
    },
    "Remember server": {
        "message": "Muista palvelin"
    },
    "Report a problem": {
        "message": "Ilmoita ongelmasta"
    },
    "Retry safe mode": {
        "message": "Yritä uudelleen vikasietotilassa"
    },
    "SA": {
        "message": "Saudi-Arabia"
    },
    "SB": {
        "message": "Salomonsaaret"
    },
    "SC": {
        "message": "Seychellit"
    },
    "SE": {
        "message": "Ruotsi"
    },
    "SJ": {
        "message": "Huippuvuoret ja Jan Mayen"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "São Tomé ja Príncipe"
    },
    "SU": {
        "message": "Neuvostoliitto Sosialististen"
    },
    "SV": {
        "message": "El Salvadorin"
    },
    "SY": {
        "message": "Syyria"
    },
    "SZ": {
        "message": "Swazimaa"
    },
    "Safe": {
        "message": "Turvallinen"
    },
    "Safe mode": {
        "message": "Turva tila"
    },
    "Save": {
        "message": "Tallenna"
    },
    "Saved Videos": {
        "message": "Tallennetut videot"
    },
    "Saved for later": {
        "message": "Tallentaa myöhempää"
    },
    "Search video title": {
        "message": "Hae videon nimi"
    },
    "Select a Country": {
        "message": "Valitse maa"
    },
    "Select site to unblock": {
        "message": "Valitse sivuston eston"
    },
    "Server saved!": {
        "message": "Palvelin tallennettu!"
    },
    "Set safe mode for $1 $2": {
        "message": "Aseta vikasietotilassa $1 $2"
    },
    "Settings": {
        "message": "Asetukset"
    },
    "Share": {
        "message": "Osuus"
    },
    "Share $1 on $2": {
        "message": "Jaa $1 $2"
    },
    "Share $1 via $2": {
        "message": "Jaa $1 kautta $2"
    },
    "Share with friends!": {
        "message": "Jaa ystävien kanssa!"
    },
    "Sign up": {
        "message": "Liity"
    },
    "Solve buffering": {
        "message": "Ratkaise puskurointi"
    },
    "Solve buffering problems with": {
        "message": "Ratkaise puskurointi ongelmia"
    },
    "Solves it": {
        "message": "Ratkaisee sen"
    },
    "Staff Picks": {
        "message": "Henkilökunnan valinnat"
    },
    "Start Hola": {
        "message": "Käynnistä Hola"
    },
    "Starting...": {
        "message": "Käynnistetään..."
    },
    "Stop Hola": {
        "message": "Pysäytä Hola"
    },
    "Stopping peer routing...": {
        "message": "Pysäyttää peer reititys..."
    },
    "Stream": {
        "message": "Virta"
    },
    "Stream Instantly": {
        "message": "Stream hetkessä"
    },
    "Submit": {
        "message": "Lähetä"
    },
    "Support Hola": {
        "message": "Tue Holaa"
    },
    "TC": {
        "message": "Turks- ja Caicossaaret"
    },
    "TD": {
        "message": "Tšad"
    },
    "TF": {
        "message": "Ranskan ulkopuoliset eteläiset alueet"
    },
    "TG": {
        "message": "Mennä"
    },
    "TH": {
        "message": "Thaimaa"
    },
    "TJ": {
        "message": "Tadžikistan"
    },
    "TL": {
        "message": "Itä-Timor"
    },
    "TR": {
        "message": "Turkki"
    },
    "TT": {
        "message": "Trinidad ja Tobago"
    },
    "TZ": {
        "message": "Tansania"
    },
    "Talk to us on $1": {
        "message": "Puhu meille $1"
    },
    "Tell friends about $1": {
        "message": "Kerro ystäville $1"
    },
    "Testing connection...": {
        "message": "Testaa yhteyttä..."
    },
    "Thank you!": {
        "message": "Kiitos!"
    },
    "There seems to be an error": {
        "message": "Virhe jossakin"
    },
    "Top popular sites": {
        "message": "Suosituimmat sivustot"
    },
    "Translate to your language": {
        "message": "Käännä omalle kielellesi"
    },
    "Try again": {
        "message": "Yritä uudelleen"
    },
    "Try another server": {
        "message": "Kokeile toista palvelinta"
    },
    "Try it": {
        "message": "Kokeile"
    },
    "Try safe mode": {
        "message": "Kokeile vikasietotilassa"
    },
    "Try to <span>reload</span>": {
        "message": "Yritä <span>päivittää</span>"
    },
    "Trying another peer...": {
        "message": "Yritetään toista peer..."
    },
    "Turn off Accelerator": {
        "message": "Sammuta Accelerator"
    },
    "Turn off Hola": {
        "message": "Sammuta Hola"
    },
    "Turn on Accelerator": {
        "message": "Kytke Accelerator"
    },
    "Turn on Hola": {
        "message": "Kytke Hola"
    },
    "Turn on to get started": {
        "message": "Kytke päälle aloittaaksesi"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "Yhdysvaltain pienet erillissaaret"
    },
    "US": {
        "message": "Yhdysvallat"
    },
    "Unblocker": {
        "message": "Estonpoisto"
    },
    "Unblocker is disabled": {
        "message": "Eston poisto ei käytössä"
    },
    "Unblocker?": {
        "message": "Estonpoistaja?"
    },
    "Update": {
        "message": "Päivitä"
    },
    "Upgrade": {
        "message": "Päivitä"
    },
    "Using": {
        "message": "Käyttäminen"
    },
    "Using Hola": {
        "message": "Käyttämällä Hola"
    },
    "VA": {
        "message": "Vatikaani"
    },
    "VC": {
        "message": "Saint Vincent ja Grenadiinit"
    },
    "VD": {
        "message": "Pohjois-Vietnamin"
    },
    "VG": {
        "message": "Brittiläiset Neitsytsaaret"
    },
    "VI": {
        "message": "Yhdysvaltain Neitsytsaaret"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Käytät Chromen vanhaa versiota, <a>päivitä nyt</a> käyttääksesi Holaa"
    },
    "Video stuck?": {
        "message": "Video jumissa?"
    },
    "Videos available for instant streaming": {
        "message": "Videoita saatavilla välittömään striimaukseen"
    },
    "WF": {
        "message": "Wallis ja Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Haluatko käyttää Holaa muissa laitteissa? (Xboxissa, PS:llä, Apple TV:ssä, iPhonessa ...). Klikkaa tästä"
    },
    "Want to know more?": {
        "message": "Haluatko tietää lisää?"
    },
    "Watch Now": {
        "message": "Katso nyt"
    },
    "We found $1 videos": {
        "message": "Löysimme $1 videoita"
    },
    "We will be in touch with you soon": {
        "message": "Otamme yhteyttä sinuun pian"
    },
    "Working!": {
        "message": "Toimii!"
    },
    "Working?": {
        "message": "Toimi?"
    },
    "Works on all sites but slower": {
        "message": "Toimii kaikissa sivustoissa mutta hitaampi"
    },
    "YD": {
        "message": "Demokraattisen kansantasavallan Jemenin"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Kyllä"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Sinun täytyy päivittää Operan uusin versio käyttääksesi Holaa. Paina <a>tästä</a> päivittääksesi."
    },
    "ZA": {
        "message": "Etelä-Afrikka"
    },
    "ZM": {
        "message": "Sambia"
    },
    "ZZ": {
        "message": "tuntematon tai virheellinen alue"
    },
    "app_desc": {
        "message": "Käytä Internet-sivustoja, jotka on estetty maassasi, yrityksessäsi tai koulussasi Holalla! Hola on ilmainen ja helppokäyttöinen!"
    },
    "app_name": {
        "message": "Holan parempi internet"
    },
    "back to": {
        "message": "Takaisin"
    },
    "changing...": {
        "message": "vaihdetaan..."
    },
    "cool sites": {
        "message": "viileät sivustot"
    },
    "current site": {
        "message": "nykyinen sivusto"
    },
    "day": {
        "message": "päivä"
    },
    "days": {
        "message": "päivää"
    },
    "even more...": {
        "message": "vieläkin..."
    },
    "mode": {
        "message": "tila"
    },
    "more options...": {
        "message": "lisäasetukset..."
    },
    "not working?": {
        "message": "eikö toimi?"
    },
    "not working? try another server": {
        "message": "ei toimi? kokeile toista palvelinta"
    },
    "on this page": {
        "message": "tällä sivulla"
    },
    "sites that are censored": {
        "message": "sivustoja, jotka sensuroidaan"
    },
    "start": {
        "message": "aloita"
    },
    "working? remember": {
        "message": "toimi? muista"
    }
};
return E; });