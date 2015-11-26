'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " með "
    },
    "$1 Buffering?": {
        "message": "$1 höggdeyfir?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola til að fá aðgang $2\n\nSmelltu hér til að gera slíkt hið sama: $3\n\nÞað setur hola, sem leyfir mér að vafra á Internetinu festa og nálgast $4$5"
    },
    "$1 from $2": {
        "message": "$1 frá $2"
    },
    "$1 not found": {
        "message": "$1 fannst ekki"
    },
    "$1 via Hola": {
        "message": "$1 aflæst"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Sumar Hola aðgerðir eru ekki í boði í þinni útgáfu)"
    },
    "AC": {
        "message": "Ascension Island"
    },
    "AE": {
        "message": "Sameinuðu arabísku furstadæmin"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antígva og Barbúda"
    },
    "AI": {
        "message": "Angvilla"
    },
    "AL": {
        "message": "Albanía"
    },
    "AM": {
        "message": "Armenía"
    },
    "AN": {
        "message": "Hollensku Antillur"
    },
    "AO": {
        "message": "Angóla"
    },
    "AQ": {
        "message": "Suðurskautslandið"
    },
    "AR": {
        "message": "Argentína"
    },
    "AS": {
        "message": "Bandaríska Samóa"
    },
    "AT": {
        "message": "Austurríki"
    },
    "AU": {
        "message": "Ástralía"
    },
    "AW": {
        "message": "Arúba"
    },
    "AX": {
        "message": "Álandseyjar"
    },
    "AZ": {
        "message": "Aserbaídsjan"
    },
    "About": {
        "message": "Um"
    },
    "About Hola": {
        "message": "Um Hola"
    },
    "Accelerator": {
        "message": "Hraðall"
    },
    "Accelerator is": {
        "message": "Accelerator er"
    },
    "Access $1 - cool site!": {
        "message": "Aðgangur $1 - kaldur staður!"
    },
    "Access $1?": {
        "message": "Aflæsa $1?"
    },
    "Access any site from any country, free": {
        "message": "Fáðu aðgang að öllum vefsvæðim frá hvaða landi sem er, ókeypis"
    },
    "Access cool sites": {
        "message": "Fáðu aðgang að vsinælum síðum"
    },
    "Access more sites": {
        "message": "Fáðu aðgang að fleiri síðum"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Aðgangur síður bönnuð í þínu landi og flýta Internet með Hola - Ókeypis!"
    },
    "Accessing $1 with Hola": {
        "message": "Aðgangur að $1 með hola"
    },
    "Account": {
        "message": "Reikningur"
    },
    "Account type": {
        "message": "Tegund reiknings"
    },
    "Activating...": {
        "message": "Virkja..."
    },
    "All ($1)": {
        "message": "Allt ($1)"
    },
    "Apply settings...": {
        "message": "Virkja stillingar..."
    },
    "Author site:": {
        "message": "Höfundur síðu:"
    },
    "Author:": {
        "message": "Höfundur:"
    },
    "BA": {
        "message": "Bosnía og Hersegóvína"
    },
    "BD": {
        "message": "Bangladess"
    },
    "BE": {
        "message": "Belgía"
    },
    "BF": {
        "message": "Búrkína Fasó"
    },
    "BG": {
        "message": "Búlgaría"
    },
    "BH": {
        "message": "Barein"
    },
    "BI": {
        "message": "Búrúndí"
    },
    "BJ": {
        "message": "Benín"
    },
    "BM": {
        "message": "Bermúdaeyjar"
    },
    "BN": {
        "message": "Brúnei"
    },
    "BO": {
        "message": "Bólivía"
    },
    "BR": {
        "message": "Brasilía"
    },
    "BS": {
        "message": "Bahamaeyjar"
    },
    "BT": {
        "message": "Bútan"
    },
    "BV": {
        "message": "Bouveteyja"
    },
    "BW": {
        "message": "Botsvana"
    },
    "BY": {
        "message": "Hvíta-Rússland"
    },
    "BZ": {
        "message": "Belís"
    },
    "Back to $1": {
        "message": "Aftur til $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Vertu fyrstur til að fá hola fyrir iPhone / iPad - Skráðu þig núna:"
    },
    "Browsing": {
        "message": "Beit"
    },
    "Buffering problems?": {
        "message": "Höggdeyfir vandamál?"
    },
    "Buffering?": {
        "message": "Höggdeyfir?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kókoseyjar"
    },
    "CD": {
        "message": "Austur-Kongó"
    },
    "CF": {
        "message": "Mið-Afríkulýðveldið"
    },
    "CG": {
        "message": "Vestur-Kongó"
    },
    "CH": {
        "message": "Sviss"
    },
    "CI": {
        "message": "Fílabeinsströndin"
    },
    "CK": {
        "message": "Cookseyjar"
    },
    "CL": {
        "message": "Chíle"
    },
    "CM": {
        "message": "Kamerún"
    },
    "CN": {
        "message": "Kína"
    },
    "CO": {
        "message": "Kólumbía"
    },
    "CP": {
        "message": "Clipperton eyja"
    },
    "CR": {
        "message": "Kostaríka"
    },
    "CS": {
        "message": "Serbía og Svartfjallaland"
    },
    "CT": {
        "message": "Canton og Enderbury Islands"
    },
    "CU": {
        "message": "Kúba"
    },
    "CV": {
        "message": "Grænhöfðaeyjar"
    },
    "CX": {
        "message": "Jólaey"
    },
    "CY": {
        "message": "Kýpur"
    },
    "CZ": {
        "message": "Tékkland"
    },
    "Changing country...": {
        "message": "Breyting land..."
    },
    "Check out Hola for $1!": {
        "message": "Skoðaðu Hola fyrir $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Skoðaðu Hola fyrir farsíma"
    },
    "Check your Internet connection": {
        "message": "Sannreyndu að þú hafir Internet aðgang"
    },
    "Choose<br>Country": {
        "message": "Velja <br> Land"
    },
    "Configuring...": {
        "message": "Stilli..."
    },
    "Connecting...": {
        "message": "Tengist..."
    },
    "Cool site!": {
        "message": "Cool síða!"
    },
    "Creative licenses": {
        "message": "Skapandi leyfi"
    },
    "DE": {
        "message": "Þýskaland"
    },
    "DJ": {
        "message": "Djíbútí"
    },
    "DK": {
        "message": "Danmörk"
    },
    "DM": {
        "message": "Dóminíka"
    },
    "DO": {
        "message": "Dóminíska lýðveldið"
    },
    "DZ": {
        "message": "Alsír"
    },
    "Delete": {
        "message": "Eyða"
    },
    "Deleted from my list": {
        "message": "Eytt úr listanum mínum"
    },
    "Did it work?": {
        "message": "Gerði það að vinna?"
    },
    "Did you experience any buffering?": {
        "message": "Vissir þú lendir höggdeyfir?"
    },
    "Disliked it": {
        "message": "Líkaði það"
    },
    "Don't show again for $1 for one week": {
        "message": "Ekki sýna aftur fyrir $1 í eina viku"
    },
    "Don't show again for any site for one week": {
        "message": "Ekki sýna aftur fyrir hvaða vefsvæði eina viku"
    },
    "Downloading": {
        "message": "Hleð Niður"
    },
    "EA": {
        "message": "Ceuta og Melilla"
    },
    "EC": {
        "message": "Ekvador"
    },
    "EE": {
        "message": "Eistland"
    },
    "EG": {
        "message": "Egyptaland"
    },
    "EH": {
        "message": "Vestur-Sahara"
    },
    "ER": {
        "message": "Erítrea"
    },
    "ES": {
        "message": "Spánn"
    },
    "ET": {
        "message": "Eþíópía"
    },
    "EU": {
        "message": "Evrópusambandið"
    },
    "Enable": {
        "message": "Virkja"
    },
    "Enable Hola Accelerator": {
        "message": "Virkja Hola hraðalinn"
    },
    "Enjoy!": {
        "message": "Njóttu!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Njóta Hola fyrir Chrome?"
    },
    "Enter site to access": {
        "message": "Inn á síðuna til að fá aðgang"
    },
    "Enter your email": {
        "message": "Sláðu inn netfangið þitt"
    },
    "FI": {
        "message": "Finnland"
    },
    "FJ": {
        "message": "Fídjieyjar"
    },
    "FK": {
        "message": "Falklandseyjar"
    },
    "FM": {
        "message": "Mikrónesía"
    },
    "FO": {
        "message": "Færeyjar"
    },
    "FQ": {
        "message": "Franska suðlægu landsvæðin"
    },
    "FR": {
        "message": "Frakkland"
    },
    "Finding new peers...": {
        "message": "Finna nýja jafningja..."
    },
    "Finding peers...": {
        "message": "Finna jafningja..."
    },
    "Free": {
        "message": "Ókeypis"
    },
    "From": {
        "message": "Frá"
    },
    "Full list": {
        "message": "Full lista"
    },
    "GB": {
        "message": "Bretland"
    },
    "GE": {
        "message": "Georgía"
    },
    "GF": {
        "message": "Franska Gvæjana"
    },
    "GH": {
        "message": "Gana"
    },
    "GI": {
        "message": "Gíbraltar"
    },
    "GL": {
        "message": "Grænland"
    },
    "GM": {
        "message": "Gambía"
    },
    "GN": {
        "message": "Gínea"
    },
    "GP": {
        "message": "Gvadelúpeyjar"
    },
    "GQ": {
        "message": "Miðbaugs-Gínea"
    },
    "GR": {
        "message": "Grikkland"
    },
    "GS": {
        "message": "Suður-Georgía og Suður-Sandvíkureyjar"
    },
    "GT": {
        "message": "Gvatemala"
    },
    "GU": {
        "message": "Gvam"
    },
    "GW": {
        "message": "Gínea-Bissá"
    },
    "GY": {
        "message": "Gvæjana"
    },
    "Get 24/7 Unblocking": {
        "message": "Get 24/7 Aflæsingu"
    },
    "Get Free Premium": {
        "message": "Fáðu Ókeypis Áskrift"
    },
    "Get Hola Accelerator": {
        "message": "Fá Hola Hraðal"
    },
    "Get Hola Player": {
        "message": "Fá Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Fá hola Plus fyrir ótakmarkaða, auglýsinglausa þjónustu."
    },
    "Get Hola Premium": {
        "message": "Fá Hola Áskrift"
    },
    "Get Hola for Android": {
        "message": "Fá Hola fyrir Android"
    },
    "Get Premium support": {
        "message": "Fá Hjálp Fyrir Áskrift"
    },
    "Get Unlimited Unblocking": {
        "message": "Fá Ótakmarkaða Aflæsingu"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Fá aðgang að lokuðum síðum: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Fá hjálp frá tæknimanni í gegnum Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Fá hraðvirkustu miðlarana"
    },
    "Go": {
        "message": "Áfram"
    },
    "Go Hola Premium": {
        "message": "Fáðu Þér Áskrift"
    },
    "HK": {
        "message": "Hong Kong"
    },
    "HM": {
        "message": "Heard og McDonaldseyjar"
    },
    "HN": {
        "message": "Hondúras"
    },
    "HR": {
        "message": "Króatía"
    },
    "HT": {
        "message": "Haítí"
    },
    "HU": {
        "message": "Ungverjaland"
    },
    "Hate it": {
        "message": "Hata það"
    },
    "Help": {
        "message": "Hjálp"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nég að nota"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hæ,\n\nég byrjaði að nota $1 ($2). Það leyfir mér að vafra á Internetinu festa og nálgast $3 í mínu landi."
    },
    "Hola Accelerator": {
        "message": "Hola Hraðall"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola geta ekki unnið vegna þess að annar eftirnafn er að stjórna umboð stillingar þínar."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola virkar ekki vel í Windows 8 ham. Vinsamlegast skipta yfir í skrifborð ham. Smelltu <a>hér</a> til að fá leiðbeiningar"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola er ekki í boði núna, en við erum að vinna á það."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola er burt, smelltu til að kveikja á"
    },
    "Hola site list": {
        "message": "Hola síðuna lista"
    },
    "I can now access $1 from any country!": {
        "message": "Ég get nú nálgast $1 frá hvaða landi!"
    },
    "I did not experience any buffering": {
        "message": "Ég vissi ekki lendir höggdeyfir"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ég nálgast bara ritskoðuð svæði með Hola fyrir $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ég er að nota $1 til að skoða $2 í mínu landi, og brim hraðar!"
    },
    "ID": {
        "message": "Indónesía"
    },
    "IE": {
        "message": "Írland"
    },
    "IL": {
        "message": "Ísrael"
    },
    "IM": {
        "message": "Mön"
    },
    "IN": {
        "message": "Indland"
    },
    "IO": {
        "message": "Bresku Indlandshafseyjar"
    },
    "IQ": {
        "message": "Írak"
    },
    "IR": {
        "message": "Íran"
    },
    "IS": {
        "message": "Ísland"
    },
    "IT": {
        "message": "Ítalía"
    },
    "Improve translation": {
        "message": "Bæta þýðingu"
    },
    "Initializing...": {
        "message": "Grunnstilli.."
    },
    "Install": {
        "message": "Setja upp"
    },
    "Install Accelerator": {
        "message": "Setja upp hraðal"
    },
    "Install Free Hola Accelerator": {
        "message": "Setja upp ókeypis Hola hraðal"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Setja Hola Vél til að halda áfram að nota Hola ókeypis"
    },
    "Instantly watch any torrent Video": {
        "message": "Í stað horfa allir torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Bjóða vinum - ókeypis áskrift."
    },
    "Invite friends. Get Premium.": {
        "message": "Bjóða vinum. Fáðu áskrift."
    },
    "It was okay": {
        "message": "Það var allt í lagi"
    },
    "JM": {
        "message": "Jamaíka"
    },
    "JO": {
        "message": "Jórdanía"
    },
    "KE": {
        "message": "Kenía"
    },
    "KG": {
        "message": "Kirgisistan"
    },
    "KH": {
        "message": "Kambódía"
    },
    "KI": {
        "message": "Kíribatí"
    },
    "KM": {
        "message": "Kómoreyjar"
    },
    "KN": {
        "message": "Sankti Kristófer og Nevis"
    },
    "KP": {
        "message": "Norður-Kórea"
    },
    "KR": {
        "message": "Suður-Kórea"
    },
    "KW": {
        "message": "Kúveit"
    },
    "KY": {
        "message": "Caymaneyjar"
    },
    "KZ": {
        "message": "Kasakstan"
    },
    "LB": {
        "message": "Líbanon"
    },
    "LC": {
        "message": "Sankti Lúsía"
    },
    "LK": {
        "message": "Srí Lanka"
    },
    "LR": {
        "message": "Líbería"
    },
    "LS": {
        "message": "Lesótó"
    },
    "LT": {
        "message": "Litháen"
    },
    "LU": {
        "message": "Lúxemborg"
    },
    "LV": {
        "message": "Lettland"
    },
    "LY": {
        "message": "Líbía"
    },
    "Language": {
        "message": "Tungumál"
    },
    "Library": {
        "message": "Bókasafn"
    },
    "Like it": {
        "message": "Líkar það"
    },
    "Loading": {
        "message": "Hleð"
    },
    "Loading site...": {
        "message": "Hleð síðu..."
    },
    "Log in": {
        "message": "Skráðu þig inn"
    },
    "Log out": {
        "message": "Útskrá"
    },
    "Love Hola?": {
        "message": "Elskarðu Hola?"
    },
    "Love it": {
        "message": "Elska það"
    },
    "MA": {
        "message": "Marokkó"
    },
    "MC": {
        "message": "Mónakó"
    },
    "MD": {
        "message": "Moldóva"
    },
    "ME": {
        "message": "Svartfjallaland"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshalleyjar"
    },
    "MK": {
        "message": "Makedónía"
    },
    "ML": {
        "message": "Malí"
    },
    "MM": {
        "message": "Mjanmar"
    },
    "MN": {
        "message": "Mongólía"
    },
    "MO": {
        "message": "Makaó"
    },
    "MP": {
        "message": "Norður-Maríanaeyjar"
    },
    "MQ": {
        "message": "Martiník"
    },
    "MR": {
        "message": "Máritanía"
    },
    "MU": {
        "message": "Máritíus"
    },
    "MV": {
        "message": "Maldíveyjar"
    },
    "MW": {
        "message": "Malaví"
    },
    "MX": {
        "message": "Mexíkó"
    },
    "MY": {
        "message": "Malasía"
    },
    "MZ": {
        "message": "Mósambík"
    },
    "Make your Internet better with $1": {
        "message": "Gera Internet þínum betur með $1"
    },
    "Menu": {
        "message": "Valmynd"
    },
    "Might not work on all sites": {
        "message": "Gæti ekki vinna á öllum stöðum"
    },
    "Mode": {
        "message": "Hamur"
    },
    "More countries": {
        "message": "Fleiri lönd"
    },
    "More sites...": {
        "message": "Fleiri síður ..."
    },
    "More...": {
        "message": "Meira ..."
    },
    "My Account": {
        "message": "Reikningurinn minn"
    },
    "My History": {
        "message": "Saga mín"
    },
    "My Settings": {
        "message": "Mínar stillingar"
    },
    "My favorites": {
        "message": "Mitt uppáhald"
    },
    "NA": {
        "message": "Namibía"
    },
    "NC": {
        "message": "Nýja-Kaledónía"
    },
    "NE": {
        "message": "Níger"
    },
    "NF": {
        "message": "Norfolkeyja"
    },
    "NG": {
        "message": "Nígería"
    },
    "NI": {
        "message": "Níkaragva"
    },
    "NL": {
        "message": "Niðurlönd"
    },
    "NO": {
        "message": "Noregur"
    },
    "NR": {
        "message": "Nárú"
    },
    "NZ": {
        "message": "Nýja-Sjáland"
    },
    "Need Help?": {
        "message": "Þarftu hjálp?"
    },
    "Never ask me again": {
        "message": "Aldrei spyrja mig aftur"
    },
    "Never be a peer": {
        "message": "Aldrei vera jafningi"
    },
    "No": {
        "message": "Nei"
    },
    "No idle peers found.": {
        "message": "Engnir aðgerðalausur jafningjar fundust."
    },
    "No recent videos found": {
        "message": "Engar nýlegar myndskeið fundust"
    },
    "No saved videos found": {
        "message": "Engin vistuð myndskeið fundust"
    },
    "No title": {
        "message": "Enginn titill"
    },
    "No videos found": {
        "message": "Engin myndskeið fundust"
    },
    "No videos found on active page": {
        "message": "Engin vídeó fundust á virku síðu"
    },
    "No, Thanks": {
        "message": "Nei, takk"
    },
    "No, fix it": {
        "message": "Nei, laga það"
    },
    "Not working?": {
        "message": "Ekki að virka?"
    },
    "Number of users that pressed not working": {
        "message": "Fjöldi notenda sem ýtt á virkar ekki"
    },
    "Number of users that use this option": {
        "message": "Fjöldi notenda sem nota þennan möguleika"
    },
    "OM": {
        "message": "Óman"
    },
    "Off": {
        "message": "Af"
    },
    "Oh, yes!": {
        "message": "Ó, já!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Gömul útgáfa af Firefox. Ýttu <a>hér</a> til að uppfæra."
    },
    "On": {
        "message": "Á"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Okkar Brand New mplayer er Tilkoma Bráðum!"
    },
    "PE": {
        "message": "Perú"
    },
    "PF": {
        "message": "Franska Pólýnesía"
    },
    "PG": {
        "message": "Papúa Nýja-Gínea"
    },
    "PH": {
        "message": "Filippseyjar"
    },
    "PL": {
        "message": "Pólland"
    },
    "PM": {
        "message": "Sankti Pierre og Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Púertó Ríkó"
    },
    "PS": {
        "message": "Palestína"
    },
    "PT": {
        "message": "Portúgal"
    },
    "PU": {
        "message": "Bandarískir Ýmis Pacific Islands"
    },
    "PW": {
        "message": "Palá"
    },
    "PY": {
        "message": "Paragvæ"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Vinsamlegast slökkva aðrar <a>viðbætur</a> sem þér finnst kannski að stjórna umboð stillingar þínar eins og Ad-blokka, aðrar VPN þjónustu o.fl."
    },
    "Please enter a valid email address.": {
        "message": "Vinsamlegast sláðu inn gilt netfang."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Vinsamlegast sláðu inn veffang, til dæmis facebook.com"
    },
    "Please help us get better": {
        "message": "Vinsamlegast hjálpaðu okkur að verða betri"
    },
    "Popular in $1": {
        "message": "Vinsælt í $1"
    },
    "Popular in the world": {
        "message": "Vinsælt á heimsvísu"
    },
    "Popular sites": {
        "message": "Vinsælar síður"
    },
    "Premium": {
        "message": "Áskrift"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Ytri Eyjaálfa"
    },
    "RO": {
        "message": "Rúmenía"
    },
    "RS": {
        "message": "Serbía"
    },
    "RU": {
        "message": "Rússland"
    },
    "RW": {
        "message": "Rúanda"
    },
    "Rate us": {
        "message": "Gefa okkur"
    },
    "Recent Videos": {
        "message": "Nýlegar Videos"
    },
    "Reload": {
        "message": "Endurhlaða"
    },
    "Reload Hola": {
        "message": "Endurhlaða Hola"
    },
    "Remember server": {
        "message": "Muna miðlara"
    },
    "Report a problem": {
        "message": "Tilkynna vandamál"
    },
    "Retry safe mode": {
        "message": "Reyna aftur öruggur háttur"
    },
    "SA": {
        "message": "Sádi-Arabía"
    },
    "SB": {
        "message": "Salómonseyjar"
    },
    "SC": {
        "message": "Seychelleseyjar"
    },
    "SD": {
        "message": "Súdan"
    },
    "SE": {
        "message": "Svíþjóð"
    },
    "SG": {
        "message": "Singapúr"
    },
    "SH": {
        "message": "Sankti Helena"
    },
    "SI": {
        "message": "Slóvenía"
    },
    "SJ": {
        "message": "Svalbarði og Jan Mayen"
    },
    "SK": {
        "message": "Slóvakía"
    },
    "SL": {
        "message": "Síerra Leóne"
    },
    "SM": {
        "message": "San Marínó"
    },
    "SO": {
        "message": "Sómalía"
    },
    "SR": {
        "message": "Súrínam"
    },
    "ST": {
        "message": "Saó Tóme og Prinsípe"
    },
    "SU": {
        "message": "Sovét sósíalista lýðveldi"
    },
    "SY": {
        "message": "Sýrland"
    },
    "SZ": {
        "message": "Svasíland"
    },
    "Safe mode": {
        "message": "Öruggur háttur"
    },
    "Save": {
        "message": "Vista"
    },
    "Saved Videos": {
        "message": "Vistaðar Videos"
    },
    "Saved for later": {
        "message": "Vistað til seinna"
    },
    "Search video title": {
        "message": "Leita vídeó titill"
    },
    "Select a Country": {
        "message": "Veldu Land"
    },
    "Select site to unblock": {
        "message": "Veldu staður til að opna"
    },
    "Server saved!": {
        "message": "Miðlari vistaður!"
    },
    "Set safe mode for $1 $2": {
        "message": "Setja öruggur háttur fyrir $1 $2"
    },
    "Settings": {
        "message": "Stillingar"
    },
    "Share": {
        "message": "Deila"
    },
    "Share $1 on $2": {
        "message": "Deila $1 á $2"
    },
    "Share $1 via $2": {
        "message": "Deila $1 í gegnum $2"
    },
    "Share with friends!": {
        "message": "Deildu með vinum!"
    },
    "Sign up": {
        "message": "Skráðu þig"
    },
    "Solve buffering": {
        "message": "Leystu höggdeyfir"
    },
    "Solve buffering problems with": {
        "message": "Leystu höggdeyfir í vandræðum með"
    },
    "Solves it": {
        "message": "Leysir það"
    },
    "Staff Picks": {
        "message": "Starfsmenn Picks"
    },
    "Start Hola": {
        "message": "Kveikja á Hola"
    },
    "Starting...": {
        "message": "Ræsist..."
    },
    "Stop Hola": {
        "message": "Slökva á Hola"
    },
    "Stopping peer routing...": {
        "message": "Slökkva á peer routing..."
    },
    "Stream Instantly": {
        "message": "Á stað"
    },
    "Submit": {
        "message": "Senda"
    },
    "Support Hola": {
        "message": "Styðja við Hola"
    },
    "TC": {
        "message": "Turks- og Caicoseyjar"
    },
    "TD": {
        "message": "Tsjad"
    },
    "TF": {
        "message": "Frönsku suðlægu landsvæðin"
    },
    "TG": {
        "message": "Tógó"
    },
    "TH": {
        "message": "Taíland"
    },
    "TJ": {
        "message": "Tadsjikistan"
    },
    "TK": {
        "message": "Tókelá"
    },
    "TL": {
        "message": "Austur-Tímor"
    },
    "TM": {
        "message": "Túrkmenistan"
    },
    "TN": {
        "message": "Túnis"
    },
    "TR": {
        "message": "Tyrkland"
    },
    "TT": {
        "message": "Trínidad og Tóbagó"
    },
    "TV": {
        "message": "Túvalú"
    },
    "TW": {
        "message": "Taívan"
    },
    "TZ": {
        "message": "Tansanía"
    },
    "Talk to us on $1": {
        "message": "Talaðu við okkur á $1"
    },
    "Tell friends about $1": {
        "message": "Segja vinum um $1"
    },
    "Testing connection...": {
        "message": "Prófa tenging..."
    },
    "Thank you!": {
        "message": "Þakka þér!"
    },
    "There seems to be an error": {
        "message": "Það virðist hafa komið upp villa"
    },
    "Top popular sites": {
        "message": "Vinsælustu síðurnar"
    },
    "Translate to your language": {
        "message": "Þýða á þitt tungumáli"
    },
    "Try again": {
        "message": "Reyndu aftur"
    },
    "Try another server": {
        "message": "Prófaðu annan miðlara"
    },
    "Try it": {
        "message": "Prófaðu það"
    },
    "Try safe mode": {
        "message": "Reyna öruggur háttur"
    },
    "Try to <span>reload</span>": {
        "message": "Reyndu að <span>endurhlaða</span>"
    },
    "Trying another peer...": {
        "message": "Reyna aðra jafningja..."
    },
    "Turn off Accelerator": {
        "message": "Slökkva hraðli"
    },
    "Turn off Hola": {
        "message": "Slökkva Hola"
    },
    "Turn on Accelerator": {
        "message": "Kveikja á Accelerator"
    },
    "Turn on Hola": {
        "message": "Kveikja á hola"
    },
    "Turn on to get started": {
        "message": "Hægt á þessu svo hægt sé að byrja"
    },
    "UA": {
        "message": "Úkraína"
    },
    "UG": {
        "message": "Úganda"
    },
    "UM": {
        "message": "Smáeyjar Bandaríkjanna"
    },
    "US": {
        "message": "Bandaríkin"
    },
    "UY": {
        "message": "Úrúgvæ"
    },
    "UZ": {
        "message": "Úsbekistan"
    },
    "Unblocker": {
        "message": "Aflæsari"
    },
    "Unblocker is disabled": {
        "message": "Aflæsari er óvirkur"
    },
    "Update": {
        "message": "Uppfæra"
    },
    "Upgrade": {
        "message": "Uppfæra"
    },
    "Using": {
        "message": "Notkun"
    },
    "Using Hola": {
        "message": "Notkun Hola"
    },
    "VA": {
        "message": "Páfagarður"
    },
    "VC": {
        "message": "Sankti Vinsent og Grenadíneyjar"
    },
    "VE": {
        "message": "Venesúela"
    },
    "VG": {
        "message": "Jómfrúaeyjar (bresku)"
    },
    "VI": {
        "message": "Jómfrúaeyjar (bandarísku)"
    },
    "VN": {
        "message": "Víetnam"
    },
    "VU": {
        "message": "Vanúatú"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Mjög gömul útgáfa af Chrome, <a> uppfærðu </a> Chrome til að nota Hola"
    },
    "Video": {
        "message": "Vídeó"
    },
    "Video stuck?": {
        "message": "Video fastur?"
    },
    "Videos available for instant streaming": {
        "message": "Einungis með myndbrotum fyrir augnablik streymi"
    },
    "WF": {
        "message": "Wallis- og Fútúnaeyjar"
    },
    "WS": {
        "message": "Samóa"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Viltu Hola fyrir önnur tæki? (Xbox, PS, Apple TV, iPhone ...). Smelltu hér"
    },
    "Want to know more?": {
        "message": "Viltu vita meira?"
    },
    "Watch Now": {
        "message": "Horfa núna"
    },
    "We found $1 videos": {
        "message": "Við fundum $1 myndbönd"
    },
    "We will be in touch with you soon": {
        "message": "Við munum vera í sambandi við þig fljótlega"
    },
    "Working!": {
        "message": "Vinna!"
    },
    "Working?": {
        "message": "Vinna?"
    },
    "Works on all sites but slower": {
        "message": "Virkar á öllum síðum en hægari"
    },
    "YD": {
        "message": "Democratic Alþýðulýðveldið Jemen"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Já"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Þú þarft að uppfæra í nýjustu útgáfuna af Opera að nota hola. Ýta <a>hér</a> til að uppfæra."
    },
    "ZA": {
        "message": "Suður-Afríka"
    },
    "ZM": {
        "message": "Sambía"
    },
    "ZW": {
        "message": "Simbabve"
    },
    "ZZ": {
        "message": "Óþekkt eða ógilt svæði"
    },
    "app_desc": {
        "message": "Aðgangur vefsíður lokað í þínu landi, fyrirtæki eða skóla með Hola! Hola er ókeypis og auðvelt að nota!"
    },
    "app_name": {
        "message": "Hola Betra Internet"
    },
    "back to": {
        "message": "til baka til"
    },
    "changing...": {
        "message": "breyti..."
    },
    "cool sites": {
        "message": "cool síður"
    },
    "current site": {
        "message": "núverandi vefsvæði"
    },
    "day": {
        "message": "dag"
    },
    "days": {
        "message": "daga"
    },
    "even more...": {
        "message": "jafnvel meira..."
    },
    "mode": {
        "message": "ham"
    },
    "more options...": {
        "message": "fleiri valkostir..."
    },
    "not working?": {
        "message": "Virkar ekki?"
    },
    "not working? try another server": {
        "message": "ekki að virka? reyna annan miðlara"
    },
    "on this page": {
        "message": "á þessari síðu"
    },
    "sites that are censored": {
        "message": "síður sem eru bönnuð"
    },
    "start": {
        "message": "byrja"
    },
    "working? remember": {
        "message": "vinna? muna"
    }
};
return E; });