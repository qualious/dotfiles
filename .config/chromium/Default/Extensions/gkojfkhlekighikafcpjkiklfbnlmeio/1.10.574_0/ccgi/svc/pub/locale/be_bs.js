'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "preko"
    },
    "$1 Buffering?": {
        "message": "$1 Baferovanje?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola za pristup $2\n\nKliknite ovdje da učine isto: $3\n\ngodine je instalira Hola, što mi omogućava da surfati Internetom brže i pristupiti $4$5"
    },
    "$1 from $2": {
        "message": "$1 od $2"
    },
    "$1 not found": {
        "message": "$1 nije pronađena"
    },
    "$1 via Hola": {
        "message": "$1 preko Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Neki Hola značajke nisu dostupne na vašoj verziji)"
    },
    "AC": {
        "message": "Ascension"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Ujedinjeni Arapski Emirati"
    },
    "AF": {
        "message": "Avganistan"
    },
    "AG": {
        "message": "Antigva i Barbuda"
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
        "message": "Antarktika"
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
        "message": "Alandi"
    },
    "AZ": {
        "message": "Azerbejdžan"
    },
    "About": {
        "message": "Oko"
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
        "message": "Pristup $1 - cool site!"
    },
    "Access $1?": {
        "message": "Pristupite $1?"
    },
    "Access any site from any country, free": {
        "message": "Pristup bilo kojoj lokaciji iz bilo koje zemlje, besplatno"
    },
    "Access cool sites": {
        "message": "Pristup Cool sajtove"
    },
    "Access more sites": {
        "message": "Pristup više lokacija"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Pristup stranicama cenzurirano u vašoj zemlji i ubrzati vaše internet sa Hola - Besplatno!"
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
        "message": "Nanesite postavke ..."
    },
    "Author site:": {
        "message": "Autor site:"
    },
    "Author:": {
        "message": "Autor:"
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
    "BN": {
        "message": "Brunej"
    },
    "BO": {
        "message": "Bolivija"
    },
    "BQ": {
        "message": "Britanski Djevičanski Otoci"
    },
    "BS": {
        "message": "Bahami"
    },
    "BT": {
        "message": "Butan"
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
        "message": "Budite prvi koji će dobiti Hola za iPhone / iPad - Registrirajte se sada:"
    },
    "Buffering problems?": {
        "message": "Baferovanje problema?"
    },
    "Buffering?": {
        "message": "Baferovanje?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokos [Keeling] Otoci"
    },
    "CD": {
        "message": "Kongo - Kinshasa"
    },
    "CF": {
        "message": "Srednjoafrička Republika"
    },
    "CG": {
        "message": "Kongo - Brazzaville"
    },
    "CH": {
        "message": "Švajcarska"
    },
    "CI": {
        "message": "Obala Slonovače"
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
        "message": "Clipperton otok"
    },
    "CS": {
        "message": "Srbija i Crna Gora"
    },
    "CT": {
        "message": "Kantona i Enderbury otoci"
    },
    "CU": {
        "message": "Kuba"
    },
    "CX": {
        "message": "Božićni otok"
    },
    "CY": {
        "message": "Kipar"
    },
    "CZ": {
        "message": "Republika Češka"
    },
    "Changing country...": {
        "message": "Mijenjanje zemlji ..."
    },
    "Check out Hola for $1!": {
        "message": "Pogledajte Hola za $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola za mobilne uređaje"
    },
    "Check your Internet connection": {
        "message": "Provjeriti imate Internet"
    },
    "Choose<br>Country": {
        "message": "Izabrati <br> Zemlja"
    },
    "Configuring...": {
        "message": "Konfiguriranje ..."
    },
    "Connecting...": {
        "message": "Povezivanje ..."
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
        "message": "Dominikanska republika"
    },
    "DZ": {
        "message": "Alžir"
    },
    "Delete": {
        "message": "Izbrisati"
    },
    "Deleted from my list": {
        "message": "Briše iz moje liste"
    },
    "Did it work?": {
        "message": "Da li to raditi?"
    },
    "Did you experience any buffering?": {
        "message": "Jeste li iskusiti bilo buffering?"
    },
    "Disliked it": {
        "message": "Voleo je"
    },
    "Don't show again for $1 for one week": {
        "message": "Ne pokazuju opet za $1 za jedan tjedan"
    },
    "Don't show again for any site for one week": {
        "message": "Ne pokazuju opet za bilo mjesta za jedan tjedan"
    },
    "Downloading": {
        "message": "Preuzimanje"
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
        "message": "Španija"
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
        "message": "Unesite site na pristup"
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
        "message": "Falklandski otoci"
    },
    "FM": {
        "message": "Mikronezija"
    },
    "FO": {
        "message": "Farski Otoci"
    },
    "FQ": {
        "message": "Francuski južni i antarktički teritorij"
    },
    "FR": {
        "message": "Francuska"
    },
    "FX": {
        "message": "Metropolitan Francuska"
    },
    "Fast": {
        "message": "Brzo"
    },
    "Finding new peers...": {
        "message": "Pronalaženje novih vršnjacima ..."
    },
    "Finding peers...": {
        "message": "Pronalaženje vršnjacima ..."
    },
    "Free": {
        "message": "Besplatno"
    },
    "From": {
        "message": "Od"
    },
    "Full list": {
        "message": "Puni spisak"
    },
    "GB": {
        "message": "Ujedinjeno Kraljevstvo"
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
    "GQ": {
        "message": "Ekvatorijalna Gvineja"
    },
    "GR": {
        "message": "Grčka"
    },
    "GS": {
        "message": "Južna Džordžija i Otoci Južni Sendvič"
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
        "message": "Get 24/7 za deblokadu"
    },
    "Get Hola Player": {
        "message": "Get Hola igrača"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Get Hola Plus za UN-u prekidu, ad-besplatnu uslugu."
    },
    "Get Hola for Android": {
        "message": "Get Hola za Android"
    },
    "Get Premium support": {
        "message": "Get Premium podrška"
    },
    "Get Unlimited Unblocking": {
        "message": "Get Neograničeno deblokadu"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Get pristup cenzurirana lokacijama, pokušajte ga sada: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Dobiti pomoć od inženjera preko Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Uzmi Najbrži Servers"
    },
    "Go": {
        "message": "Idi"
    },
    "Go Hola Premium": {
        "message": "Idi Hola Premium"
    },
    "HK": {
        "message": "Hong Kong SAR Kine"
    },
    "HM": {
        "message": "Heard Island i otočje McDonald"
    },
    "HR": {
        "message": "Hrvatska"
    },
    "HU": {
        "message": "Madžarska"
    },
    "Hate it": {
        "message": "Mrzim"
    },
    "Help": {
        "message": "U pomoć"
    },
    "Hey,\n\nI'm using": {
        "message": "Hej,\n\nja koristim"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Zdravo,\n\npočeo sam da koristim $1 ($2). To mi omogućava da surfati Internetom brže i pristupiti $3 u mojoj zemlji."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ne može raditi, jer još jedan produžetak je kontrolu svoje proxy postavke."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ne radi dobro na Windows 8 modu. Molimo vas prebaciti na desktop modu. Kliknite <a> ovdje </a> za instrukcije"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nije dostupan odmah, ali radimo na tome."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola je isključen, kliknite na da biste uključili"
    },
    "Hola site list": {
        "message": "Hola site popis"
    },
    "I can now access $1 from any country!": {
        "message": "Ja sada mogu pristupiti $1 iz bilo koje zemlje!"
    },
    "I did not experience any buffering": {
        "message": "Nisam iskusiti bilo buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Samo pristupa je cenzurirana stranice koristeći Hola za $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ja koristim od $1 pogledali $2 u mojoj zemlji, i surfati brže!"
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
    "IN": {
        "message": "Indija"
    },
    "IO": {
        "message": "Britanski teritorij Indijskog oceana"
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
        "message": "Unaprijediti prevođenje"
    },
    "Initializing...": {
        "message": "Inicijalizacija ..."
    },
    "Install": {
        "message": "Instalirati"
    },
    "Install Accelerator": {
        "message": "Instalirajte Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Instalirajte Free Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instalirajte Hola motora nastaviti koristiti Hola besplatno"
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
        "message": "Bilo je to u redu"
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
        "message": "Sjeverna Koreja"
    },
    "KR": {
        "message": "Sjeverna Koreja"
    },
    "KW": {
        "message": "Kuvajt"
    },
    "KZ": {
        "message": "Kazahstan"
    },
    "LB": {
        "message": "Liban"
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
        "message": "Litvanija"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LV": {
        "message": "Letonija"
    },
    "LY": {
        "message": "Libija"
    },
    "Language": {
        "message": "Jezik"
    },
    "Library": {
        "message": "Biblioteka"
    },
    "Like it": {
        "message": "Volim to"
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
        "message": "Sviđa mi se"
    },
    "MA": {
        "message": "Maroko"
    },
    "MD": {
        "message": "Moldavija"
    },
    "ME": {
        "message": "Crna Gora"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Maršalovi Otoci"
    },
    "MK": {
        "message": "Makedonija"
    },
    "MM": {
        "message": "Mijanmar [Burma]"
    },
    "MN": {
        "message": "Mongolija"
    },
    "MO": {
        "message": "Makao SAR Kine"
    },
    "MP": {
        "message": "Sjeverni Marijanski otoci"
    },
    "MR": {
        "message": "Mauritanija"
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
        "message": "Napravite svoj Internet bolje s $1"
    },
    "Menu": {
        "message": "Meni"
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
        "message": "više ..."
    },
    "More...": {
        "message": "više ..."
    },
    "My Account": {
        "message": "Moj račun"
    },
    "My History": {
        "message": "Moja povijest"
    },
    "My Settings": {
        "message": "Moje postavke"
    },
    "My favorites": {
        "message": "Moje omiljene"
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
        "message": "Holandija"
    },
    "NO": {
        "message": "Norveška"
    },
    "NZ": {
        "message": "Novi Zeland"
    },
    "Need Help?": {
        "message": "Trebate li pomoć?"
    },
    "Never ask me again": {
        "message": "Nikad me opet pitaš"
    },
    "Never be a peer": {
        "message": "Nikada biti peer"
    },
    "No": {
        "message": "Ne"
    },
    "No idle peers found.": {
        "message": "Nema mirovanja vršnjaka pronađen."
    },
    "No recent videos found": {
        "message": "Nema nedavnih video pronađena"
    },
    "No saved videos found": {
        "message": "No spasio video pronađena"
    },
    "No title": {
        "message": "Bez naslova"
    },
    "No videos found": {
        "message": "Ne postoje video pronađena"
    },
    "No videos found on active page": {
        "message": "Ne postoje video naći na stranici aktivna"
    },
    "No, Thanks": {
        "message": "Ne, hvala"
    },
    "No, fix it": {
        "message": "No, popravi"
    },
    "Not working?": {
        "message": "Ne radi?"
    },
    "Number of users that pressed not working": {
        "message": "Broj korisnika koji pritisnu ne radi"
    },
    "Number of users that use this option": {
        "message": "Broj korisnika koji koriste ovu mogućnost"
    },
    "Off": {
        "message": "Isključen"
    },
    "Oh, yes!": {
        "message": "Oh, da!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Staru verziju Firefox. Press <a> ovdje </a> za nadogradnju."
    },
    "On": {
        "message": "Na"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Naša Brand New Mplayer se USKORO!"
    },
    "PF": {
        "message": "Francuski Polinezija"
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
        "message": "Saint Pierre i Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestina"
    },
    "PT": {
        "message": "Portugalija"
    },
    "PU": {
        "message": "Američki Razno Pacific Islands"
    },
    "PY": {
        "message": "Paragvaj"
    },
    "PZ": {
        "message": "Panamski kanal Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Molimo vas da onemogućite druge <a>ekstenzije</a> koje mislite da bi kontrolirati svoje proxy postavke, kao što su ad-blokatori, druge VPN usluge, itd"
    },
    "Please enter a valid email address.": {
        "message": "Unesite valjanu adresu e-pošte."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Unesite web stranice adresu, kao facebook.com"
    },
    "Please help us get better": {
        "message": "Molim vas, pomozite nam bude bolje"
    },
    "Popular in $1": {
        "message": "Popularni u $1"
    },
    "Popular in the world": {
        "message": "Popularni u svijetu"
    },
    "Popular sites": {
        "message": "Popularni sajtovi"
    },
    "Premium": {
        "message": "Premija"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Okolna Oceania"
    },
    "RO": {
        "message": "Rumunija"
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
        "message": "Ocijenite nas"
    },
    "Recent Videos": {
        "message": "Nedavne Video"
    },
    "Reload": {
        "message": "Pretovariti"
    },
    "Reload Hola": {
        "message": "Pretovariti"
    },
    "Remember server": {
        "message": "Zapamti server"
    },
    "Report a problem": {
        "message": "Prijavi problem"
    },
    "SA": {
        "message": "Saudijska Arabija"
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
        "message": "Sao Tome i Principe"
    },
    "SU": {
        "message": "Savez Sovjetskih Socijalističkih Republika"
    },
    "SV": {
        "message": "Salvador"
    },
    "SY": {
        "message": "Sirija"
    },
    "SZ": {
        "message": "Svazi"
    },
    "Safe": {
        "message": "Bezbjedan"
    },
    "Safe mode": {
        "message": "Siguran način"
    },
    "Saved Videos": {
        "message": "Sačuvane Videos"
    },
    "Saved for later": {
        "message": "Sačuvane za kasnije"
    },
    "Search video title": {
        "message": "Traži video naslova"
    },
    "Select a Country": {
        "message": "Odaberite Država"
    },
    "Select site to unblock": {
        "message": "Odaberite site za deblokadu"
    },
    "Server saved!": {
        "message": "Server spasio!"
    },
    "Set safe mode for $1 $2": {
        "message": "Set safe mode za $1 $2"
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
        "message": "Podijelite s prijateljima!"
    },
    "Sign up": {
        "message": "Prijavite se"
    },
    "Solve buffering": {
        "message": "Riješite buffering"
    },
    "Solve buffering problems with": {
        "message": "Riješite buffering problema s"
    },
    "Solves it": {
        "message": "Rešio"
    },
    "Staff Picks": {
        "message": "Osoblje Picks"
    },
    "Start Hola": {
        "message": "start"
    },
    "Starting...": {
        "message": "Počevši ..."
    },
    "Stopping peer routing...": {
        "message": "Zaustavljanje peer usmjeravanja ..."
    },
    "Stream": {
        "message": "Potok"
    },
    "Stream Instantly": {
        "message": "Odmah Stream"
    },
    "Submit": {
        "message": "Podnijeti"
    },
    "Support Hola": {
        "message": "Podrška Hola"
    },
    "TC": {
        "message": "Turks i Caicos"
    },
    "TD": {
        "message": "Čad"
    },
    "TF": {
        "message": "Francuski južni teritoriji"
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
        "message": "Reci prijateljima o $1"
    },
    "Testing connection...": {
        "message": "Testiranje veze ..."
    },
    "Thank you!": {
        "message": "Hvala!"
    },
    "There seems to be an error": {
        "message": "Čini se da postoji greška"
    },
    "Top popular sites": {
        "message": "Top sites"
    },
    "Translate to your language": {
        "message": "Prevedi na svoj jezik"
    },
    "Try again": {
        "message": "Pokušaj ponovo"
    },
    "Try another server": {
        "message": "Pokušajte jedan server"
    },
    "Try it": {
        "message": "Pokušajte ga"
    },
    "Try safe mode": {
        "message": "Pokušajte safe mode"
    },
    "Try to <span>reload</span>": {
        "message": "Pokušajte da <span> reload </span>"
    },
    "Trying another peer...": {
        "message": "Pokušavajući jedan peer ..."
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
        "message": "Uključite za početak"
    },
    "UA": {
        "message": "Ukrajina"
    },
    "UM": {
        "message": "US Minor Outlying Islands"
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
        "message": "Ažurirati"
    },
    "Upgrade": {
        "message": "Ažurirati"
    },
    "Using": {
        "message": "Korištenje"
    },
    "Using Hola": {
        "message": "Korištenje Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Sveti Vincent i Grenadini"
    },
    "VD": {
        "message": "North Vijetnam"
    },
    "VE": {
        "message": "Venecuela"
    },
    "VG": {
        "message": "Britanski Djevičanski otoci"
    },
    "VI": {
        "message": "Američki Djevičanski Otoci"
    },
    "VN": {
        "message": "Vijetnam"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Vrlo staru verziju Chrome, <a> ažuriranje </a> Chrome za korištenje Hola"
    },
    "Video stuck?": {
        "message": "Video zaglavili?"
    },
    "Videos available for instant streaming": {
        "message": "Video zapisi za instant streaming"
    },
    "WF": {
        "message": "Wallis i Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Želite Hola na drugim uređajima? (Xbox, PS, Apple TV, iPhone ...). Kliknite ovdje"
    },
    "Want to know more?": {
        "message": "Želite znati više?"
    },
    "Watch Now": {
        "message": "Pazi sada"
    },
    "We found $1 videos": {
        "message": "Pronašli smo $1 videos"
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
        "message": "Radi na svim lokacijama, ali sporije"
    },
    "YD": {
        "message": "Narodna Demokratska Republika Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Da"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Morate nadograditi na najnoviju verziju Opere za korištenje Hola. Pritisnite <a>ovdje</a> za nadogradnju."
    },
    "ZA": {
        "message": "Južna Afrika"
    },
    "ZM": {
        "message": "Zambija"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "Nepoznata ili nevažeća oblast"
    },
    "app_desc": {
        "message": "Pristup web stranice blokiran u vašoj zemlji, kompanije ili školu Hola! Hola je besplatan i jednostavan za korištenje!"
    },
    "app_name": {
        "message": "Hola Bolje Internet"
    },
    "back to": {
        "message": "nazad na"
    },
    "changing...": {
        "message": "mijenja ..."
    },
    "cool sites": {
        "message": "Cool sajtove"
    },
    "current site": {
        "message": "tekuće site"
    },
    "day": {
        "message": "dan"
    },
    "days": {
        "message": "dani"
    },
    "even more...": {
        "message": "još više ..."
    },
    "mode": {
        "message": "Režim"
    },
    "more options...": {
        "message": "više opcija ..."
    },
    "not working?": {
        "message": "ne radi?"
    },
    "not working? try another server": {
        "message": "ne radi? drugačiji server"
    },
    "on this page": {
        "message": "na ovoj stranici"
    },
    "sites that are censored": {
        "message": "stranice koje su cenzurirani"
    },
    "start": {
        "message": "početak"
    },
    "working? remember": {
        "message": "radi? zapamtiti"
    }
};
return E; });