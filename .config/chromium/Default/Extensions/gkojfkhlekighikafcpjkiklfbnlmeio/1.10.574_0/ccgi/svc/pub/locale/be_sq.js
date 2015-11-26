'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " nëpërmjet "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola të hyni në $2\n\nKliko këtu për të bërë të njëjtën gjë: $3\n\nAjo instalon Hola, e cila lejon mua të shfletoj në internet të shpejtë dhe të hyni në $4$5"
    },
    "$1 from $2": {
        "message": "$1 prej $2"
    },
    "$1 not found": {
        "message": "$1 nuk u gjet"
    },
    "$1 via Hola": {
        "message": "$1 nëpërmjet Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Disa karakteristika Hola nuk janë në dispozicion në versionin tuaj)"
    },
    "AC": {
        "message": "Ishull Ascension"
    },
    "AD": {
        "message": "Andorrë"
    },
    "AE": {
        "message": "Emiratet Arabe te Bashkuara"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua e Barbuda"
    },
    "AL": {
        "message": "Shqipëria"
    },
    "AM": {
        "message": "Armeni"
    },
    "AO": {
        "message": "Angolë"
    },
    "AQ": {
        "message": "Antarktidë"
    },
    "AR": {
        "message": "Argjentinë"
    },
    "AT": {
        "message": "Austri"
    },
    "AU": {
        "message": "Australi"
    },
    "AX": {
        "message": "Ishujt Aland"
    },
    "AZ": {
        "message": "Azerbajxhan"
    },
    "About": {
        "message": "Për"
    },
    "About Hola": {
        "message": "Rreth Hola"
    },
    "Accelerator": {
        "message": "Akselerator"
    },
    "Accelerator is": {
        "message": "Accelerator është"
    },
    "Access $1 - cool site!": {
        "message": "Qasja $1 - site cool!"
    },
    "Access $1?": {
        "message": "Zhbllokoni $1?"
    },
    "Access any site from any country, free": {
        "message": "Aksesoni cilëndo faqe nga çdo vend, pa pagesë"
    },
    "Access cool sites": {
        "message": "Faqet e ftohtë e Kontakteve"
    },
    "Access more sites": {
        "message": "Faqet e Kontakteve më shumë"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Faqet Qasja censuruar në vendin tuaj dhe të përshpejtojë internetin tuaj me Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Përdorimi $1 me Hola"
    },
    "Account": {
        "message": "Llogari"
    },
    "Account type": {
        "message": "Lloji i llogarisë"
    },
    "Activating...": {
        "message": "Aktivizimi..."
    },
    "All ($1)": {
        "message": "Të gjitha ($1)"
    },
    "Apply settings...": {
        "message": "Aplikoni parametrat..."
    },
    "Author site:": {
        "message": "Site Author artikullit:"
    },
    "Author:": {
        "message": "Author artikullit:"
    },
    "Awesome!": {
        "message": "Mbresëlënës!"
    },
    "BA": {
        "message": "Bosnja dhe Hercegovina"
    },
    "BE": {
        "message": "Belgjikë"
    },
    "BG": {
        "message": "Bullgari"
    },
    "BH": {
        "message": "Bahrein"
    },
    "BL": {
        "message": "Shën Barthélemy"
    },
    "BN": {
        "message": "Brunej"
    },
    "BO": {
        "message": "Bolivi"
    },
    "BQ": {
        "message": "Territori Antarktik Britanik"
    },
    "BR": {
        "message": "Brazili"
    },
    "BT": {
        "message": "Butan"
    },
    "BW": {
        "message": "Botsvana"
    },
    "BY": {
        "message": "Bjellorusi"
    },
    "Back to $1": {
        "message": "Mbrapsht në $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Bëhu i pari për të marrë Hola për iPhone / iPad - Regjistrohu tani:"
    },
    "Buffering problems?": {
        "message": "Problemet buffering?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CD": {
        "message": "Kongo - Kinshasa"
    },
    "CF": {
        "message": "Republika Qendrore e Afrikës"
    },
    "CG": {
        "message": "Kongo"
    },
    "CH": {
        "message": "Zvicër"
    },
    "CI": {
        "message": "Bregu i Fildishtë"
    },
    "CK": {
        "message": "Ishujt Kuk"
    },
    "CL": {
        "message": "Kili"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Kinë"
    },
    "CO": {
        "message": "Kolumbi"
    },
    "CP": {
        "message": "Ishull Clipperton"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Serbië en Montenegro"
    },
    "CT": {
        "message": "Kantoni dhe Enderbury Islands"
    },
    "CU": {
        "message": "Kubë"
    },
    "CV": {
        "message": "Kap Verde"
    },
    "CY": {
        "message": "Qipro"
    },
    "CZ": {
        "message": "Republika e Çekisë"
    },
    "Changing country...": {
        "message": "Ndryshimi vendin ..."
    },
    "Check out Hola for $1!": {
        "message": "Kontrolloni Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola për pajisje të lëvizshme"
    },
    "Check your Internet connection": {
        "message": "Verifikoni që ju keni internet"
    },
    "Choose<br>Country": {
        "message": "Zgjedh <br> Vend"
    },
    "Configuring...": {
        "message": "Configuring ..."
    },
    "Connecting...": {
        "message": "Duke u lidhur ..."
    },
    "Cool site!": {
        "message": "Best!"
    },
    "Creative licenses": {
        "message": "Licencat Creative"
    },
    "DD": {
        "message": "Gjermania Lindore"
    },
    "DE": {
        "message": "Gjermani"
    },
    "DJ": {
        "message": "Xhibuti"
    },
    "DK": {
        "message": "Danimarkë"
    },
    "DM": {
        "message": "Dominikë"
    },
    "DO": {
        "message": "Republika Dominikanë"
    },
    "DZ": {
        "message": "Algjeri"
    },
    "Delete": {
        "message": "Fshij"
    },
    "Deleted from my list": {
        "message": "Fshihet nga lista e mia"
    },
    "Did it work?": {
        "message": "A atë punë?"
    },
    "Did you experience any buffering?": {
        "message": "A keni përvojë ndonjë buffering?"
    },
    "Disliked it": {
        "message": "Papëlqyeshme atë"
    },
    "Don't show again for $1 for one week": {
        "message": "Mos e shfaq përsëri për $1 për një javë"
    },
    "Don't show again for any site for one week": {
        "message": "Mos e shfaq përsëri për çdo vend për një javë"
    },
    "Downloading": {
        "message": "Shkarkimit"
    },
    "EA": {
        "message": "Ceuta dhe Melilla"
    },
    "EC": {
        "message": "Ekuator"
    },
    "EE": {
        "message": "Estoni"
    },
    "EG": {
        "message": "Egjipt"
    },
    "EH": {
        "message": "Saharaja Perëndimore"
    },
    "ER": {
        "message": "Eritre"
    },
    "ES": {
        "message": "Spanjë"
    },
    "ET": {
        "message": "Etiopi"
    },
    "EU": {
        "message": "Bashkimi Europian"
    },
    "Enable": {
        "message": "Mundësoj"
    },
    "Enable Hola Accelerator": {
        "message": "Aktivizo Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Kënaquni!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Gëzojnë Hola për Chrome?"
    },
    "Enter site to access": {
        "message": "Shkruani faqen për qasje"
    },
    "Enter your email": {
        "message": "Shkruani email tuaj"
    },
    "FI": {
        "message": "Finlandë"
    },
    "FJ": {
        "message": "Fixhi"
    },
    "FK": {
        "message": "Ishujt Falkland"
    },
    "FM": {
        "message": "Mikronezi"
    },
    "FO": {
        "message": "Ishujt Faroe"
    },
    "FQ": {
        "message": "Franceze Jugore dhe Antarktike Territoret"
    },
    "FR": {
        "message": "Francë"
    },
    "Fast": {
        "message": "Shpejt"
    },
    "Finding new peers...": {
        "message": "Gjetja bashkëmoshatarët e reja ..."
    },
    "Finding peers...": {
        "message": "Gjetja bashkëmoshatarët ..."
    },
    "Free": {
        "message": "Falas"
    },
    "From": {
        "message": "Nga"
    },
    "Full list": {
        "message": "Lista e plotë"
    },
    "GA": {
        "message": "Gjabon"
    },
    "GB": {
        "message": "Mbretëria e Bashkuar"
    },
    "GE": {
        "message": "Gjeorgji"
    },
    "GF": {
        "message": "Guiana Franceze"
    },
    "GG": {
        "message": "Gërnzi"
    },
    "GH": {
        "message": "Ganë"
    },
    "GI": {
        "message": "Gjibraltar"
    },
    "GL": {
        "message": "Grenlandë"
    },
    "GM": {
        "message": "Gambi"
    },
    "GN": {
        "message": "Guine"
    },
    "GP": {
        "message": "Guadalupa"
    },
    "GQ": {
        "message": "Guineja Ekuatoriale"
    },
    "GR": {
        "message": "Greqi"
    },
    "GS": {
        "message": "Gjeorgjia Jugore dhe Ishujt Jugorë Sanduiç"
    },
    "GT": {
        "message": "Guatemalë"
    },
    "GW": {
        "message": "Guine Bisau"
    },
    "GY": {
        "message": "Guajana"
    },
    "Get 24/7 Unblocking": {
        "message": "Get 24/7 zhbllokimin"
    },
    "Get Free Premium": {
        "message": "Get Pa pagesë PREMIUM"
    },
    "Get Hola Player": {
        "message": "Get Hola lojtarit"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Merrni Hola Plus për shërbim pa ndërprerje dhe pa reklama."
    },
    "Get Hola Premium": {
        "message": "Get Hola PREMIUM"
    },
    "Get Hola for Android": {
        "message": "Get Hola për Android"
    },
    "Get Premium support": {
        "message": "Merrni mbështetje Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Merrni zhbllokim pa limit"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Merrni qasje në faqet e censuruara, provoni tani: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Merrni ndihmë nga inxhinier mbi skype artikullit:"
    },
    "Get the Fastest Servers": {
        "message": "Merrni Servers shpejta"
    },
    "Go": {
        "message": "Shko"
    },
    "Go Hola Premium": {
        "message": "Shko Hola Premium"
    },
    "HK": {
        "message": "Hong Kong China"
    },
    "HM": {
        "message": "Island Dëgjuar dhe McDonald Islands"
    },
    "HR": {
        "message": "Kroaci"
    },
    "HU": {
        "message": "Hungari"
    },
    "Hate it": {
        "message": "E urrej"
    },
    "Help": {
        "message": "Ndihmë"
    },
    "Hey,\n\nI'm using": {
        "message": "Hej,\n\nunë jam duke përdorur"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nUnë fillova duke përdorur $1 ($2). Kjo më lejon të shfletoj në internet të shpejtë dhe të hyni në $3 në vendin tim."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola nuk mund të punojë për shkak se një tjetër zgjerim është i kontrolluar tuaj proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola nuk punon mirë në Windows 8 regjimin. Ju lutemi të kaloni në mënyrë desktop. <a> Kliko këtu </a> për udhëzime"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola nuk është në dispozicion tani, por ne jemi duke punuar në të."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola është jashtë, klikoni për ta kthyer në"
    },
    "Hola site list": {
        "message": "Site Unblocker lista"
    },
    "I can now access $1 from any country!": {
        "message": "Unë tani mund të hyni $1 nga çdo vend!"
    },
    "I did not experience any buffering": {
        "message": "Unë nuk përjetojnë ndonjë buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Unë vetëm të arrihen një faqe cenzuruan përdorur Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Unë jam duke përdorur $1 deri në $2 të parë në vendin tim, dhe shfletoj më të shpejtë!"
    },
    "ID": {
        "message": "Indonezi"
    },
    "IE": {
        "message": "Irlandë"
    },
    "IL": {
        "message": "Izrael"
    },
    "IM": {
        "message": "Ishulli i Njeriut"
    },
    "IN": {
        "message": "Indi"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islandë"
    },
    "IT": {
        "message": "Itali"
    },
    "Improve translation": {
        "message": "Përmirësimi i përkthimit"
    },
    "Initializing...": {
        "message": "Initializing ..."
    },
    "Install": {
        "message": "Instaloj"
    },
    "Install Free Hola Accelerator": {
        "message": "Install Pa pagesë Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Install Hola Engine për të vazhduar përdorimin Hola falas"
    },
    "Instantly watch any torrent Video": {
        "message": "Menjëherë shikojnë ndonjë përrua Video"
    },
    "Invite friends - free Premium.": {
        "message": "Ftoni miq - Premium lirë."
    },
    "Invite friends. Get Premium.": {
        "message": "Ftoni miq. Get Premium."
    },
    "It was okay": {
        "message": "Ajo ishte në rregull"
    },
    "JE": {
        "message": "Triko"
    },
    "JM": {
        "message": "Xhamajkë"
    },
    "JO": {
        "message": "Jordani"
    },
    "JP": {
        "message": "Japoni"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirgistan"
    },
    "KH": {
        "message": "Kamboxhi"
    },
    "KI": {
        "message": "Qiribati"
    },
    "KM": {
        "message": "Komore"
    },
    "KN": {
        "message": "Saint Kitts e Nevis"
    },
    "KP": {
        "message": "Koreja e Veriut"
    },
    "KR": {
        "message": "Koreja e Jugut"
    },
    "KW": {
        "message": "Kuvajt"
    },
    "KY": {
        "message": "Ishujt Kajman"
    },
    "KZ": {
        "message": "Kazakistan"
    },
    "LB": {
        "message": "Liban"
    },
    "LI": {
        "message": "Lihtënshtajn"
    },
    "LR": {
        "message": "Liberi"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Lituani"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LV": {
        "message": "Letoni"
    },
    "LY": {
        "message": "Libi"
    },
    "Language": {
        "message": "Gjuha"
    },
    "Library": {
        "message": "Bibliotekë"
    },
    "Like it": {
        "message": "Me pelqen"
    },
    "Loading": {
        "message": "Ngarkim"
    },
    "Loading site...": {
        "message": "Ngarkim..."
    },
    "Log in": {
        "message": "Identifikohu"
    },
    "Log out": {
        "message": "Dalje"
    },
    "Love Hola?": {
        "message": "Dashuria Hola?"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldavi"
    },
    "ME": {
        "message": "Mali i Zi"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Ishujt Marshall"
    },
    "MK": {
        "message": "Maqedoni"
    },
    "MN": {
        "message": "Mongoli"
    },
    "MO": {
        "message": "Makau SAR China"
    },
    "MR": {
        "message": "Mauritani"
    },
    "MT": {
        "message": "Maltë"
    },
    "MV": {
        "message": "Maldivit"
    },
    "MW": {
        "message": "Malavi"
    },
    "MX": {
        "message": "Meksikë"
    },
    "MY": {
        "message": "Malajzi"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Bëni Internet tuaj më të mirë me $1"
    },
    "Might not work on all sites": {
        "message": "Nuk mund të punojnë në të gjitha faqet"
    },
    "Mode": {
        "message": "Mënyrë"
    },
    "More countries": {
        "message": "Më shumë vende"
    },
    "More sites...": {
        "message": "më shumë ..."
    },
    "More...": {
        "message": "më shumë ..."
    },
    "My Account": {
        "message": "Llogaria ime"
    },
    "My History": {
        "message": "Historia ime"
    },
    "My Settings": {
        "message": "Cilësimet e mia"
    },
    "My favorites": {
        "message": "Preferuarat e mia"
    },
    "NA": {
        "message": "Namibi"
    },
    "NC": {
        "message": "Kaledonia e Re"
    },
    "NG": {
        "message": "Nigeri"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Vendet e Ulëta"
    },
    "NO": {
        "message": "Norvegji"
    },
    "NZ": {
        "message": "Zelanda e Re"
    },
    "Need Help?": {
        "message": "Nevojë për ndihmë?"
    },
    "Never ask me again": {
        "message": "Kurrë mos më pyesni përsëri"
    },
    "Never be a peer": {
        "message": "Asnjëherë mos të jetë një i kolegëve"
    },
    "No": {
        "message": "Jo"
    },
    "No idle peers found.": {
        "message": "Nuk pjesmarrës boshe gjetur."
    },
    "No recent videos found": {
        "message": "Nuk ka video të fundit të gjetur"
    },
    "No saved videos found": {
        "message": "Nuk videos ruajtur gjetur"
    },
    "No title": {
        "message": "Asnjë titull"
    },
    "No videos found": {
        "message": "Nuk videos gjetur"
    },
    "No videos found on active page": {
        "message": "Nuk janë gjetur në faqen aktive videos"
    },
    "No, Thanks": {
        "message": "Jo, Faleminderit"
    },
    "No, fix it": {
        "message": "Jo, rregullohet"
    },
    "Not working?": {
        "message": "Nuk punon?"
    },
    "Number of users that pressed not working": {
        "message": "Numri i përdoruesve që nuk presion të punës"
    },
    "Number of users that use this option": {
        "message": "Numri i përdoruesve që përdorin këtë opsion"
    },
    "Off": {
        "message": "Larg"
    },
    "Oh, yes!": {
        "message": "Oh, po!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versioni i vjetër i Firefox. Press <a> këtu </a> për të përmirësuar."
    },
    "On": {
        "message": "Në"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Brand ynë New Mplayer është Vjen së shpejti!"
    },
    "PC": {
        "message": "Pacific Islands Trust Territori"
    },
    "PF": {
        "message": "Polinezia Franceze"
    },
    "PG": {
        "message": "Papua Guineja e Re"
    },
    "PH": {
        "message": "Filipine"
    },
    "PL": {
        "message": "Poloni"
    },
    "PM": {
        "message": "Shën Pierre dhe Miquelon"
    },
    "PS": {
        "message": "Territoret Palestineze"
    },
    "PT": {
        "message": "Portugali"
    },
    "PU": {
        "message": "SHBA Ndryshme Pacific Islands"
    },
    "PY": {
        "message": "Paraguaj"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Ju lutemi disable <a>zgjerime</a> të tjera që ju mendoni se mund të kontrolluar parametrat tuaj të përafërt të tilla si ad-blockers, shërbime të tjera VPN, etj."
    },
    "Please enter a valid email address.": {
        "message": "Ju lutemi shkruani një adresë e vlefshme email."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Ju lutemi shkruani një adresë web site, si facebook.com"
    },
    "Please help us get better": {
        "message": "Ju lutemi të na ndihmojë të merrni më të mirë"
    },
    "Popular in $1": {
        "message": "Popular në $1"
    },
    "Popular in the world": {
        "message": "Popullore në botë"
    },
    "Popular sites": {
        "message": "Faqet Popular"
    },
    "Premium": {
        "message": "Prim"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Outlying Oqeani"
    },
    "RO": {
        "message": "Rumani"
    },
    "RU": {
        "message": "Rusi"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Na vleresoni"
    },
    "Recent Videos": {
        "message": "Video Aktuale"
    },
    "Reload": {
        "message": "Ringarkoj"
    },
    "Reload Hola": {
        "message": "Rifresko Hola"
    },
    "Remember server": {
        "message": "Mos harroni server"
    },
    "Report a problem": {
        "message": "Raporto një problem të"
    },
    "Retry safe mode": {
        "message": "Rigjykuar mënyrë të sigurt"
    },
    "SA": {
        "message": "Arabia Saudite"
    },
    "SB": {
        "message": "Ishujt Solomon"
    },
    "SC": {
        "message": "Sishel"
    },
    "SE": {
        "message": "Suedi"
    },
    "SG": {
        "message": "Singapor"
    },
    "SH": {
        "message": "Shën Helena"
    },
    "SI": {
        "message": "Slloveni"
    },
    "SJ": {
        "message": "Svalbard dhe Jan Mayen"
    },
    "SK": {
        "message": "Sllovaki"
    },
    "SL": {
        "message": "Siera Leone"
    },
    "SO": {
        "message": "Somali"
    },
    "ST": {
        "message": "Sao Tome e Prinsipe"
    },
    "SU": {
        "message": "Bashkimi i Republikave Socialiste Sovjetike"
    },
    "SY": {
        "message": "Siri"
    },
    "SZ": {
        "message": "Svazilandë"
    },
    "Safe": {
        "message": "I sigurt"
    },
    "Save": {
        "message": "Ruaj"
    },
    "Saved Videos": {
        "message": "Videos ruajtura"
    },
    "Saved for later": {
        "message": "Ruajtur për më vonë"
    },
    "Search video title": {
        "message": "Kërkim Video title"
    },
    "Select a Country": {
        "message": "Zgjidhni një Shtet"
    },
    "Select site to unblock": {
        "message": "Zgjidh faqe për të zhbllokuar"
    },
    "Server saved!": {
        "message": "Server ruajtur!"
    },
    "Set safe mode for $1 $2": {
        "message": "Mënyra Set sigurt për $1 $2"
    },
    "Settings": {
        "message": "Cilësimet"
    },
    "Share": {
        "message": "Pjesë"
    },
    "Share $1 on $2": {
        "message": "Share $1 me $2"
    },
    "Share $1 via $2": {
        "message": "Share $1 nëpërmjet $2"
    },
    "Share with friends!": {
        "message": "Ndaje me miqte!"
    },
    "Sign up": {
        "message": "Regjistrohu"
    },
    "Solve buffering": {
        "message": "Zgjidhur buffering"
    },
    "Solve buffering problems with": {
        "message": "Zgjidhur problemet e buffering me"
    },
    "Solves it": {
        "message": "Zgjidh atë"
    },
    "Staff Picks": {
        "message": "Zgjedh stafit"
    },
    "Start Hola": {
        "message": "filloj"
    },
    "Starting...": {
        "message": "Duke filluar nga ..."
    },
    "Stopping peer routing...": {
        "message": "Ndalimi kurs kolegëve ..."
    },
    "Stream": {
        "message": "Lumë"
    },
    "Stream Instantly": {
        "message": "Derdhet Menjëherë"
    },
    "Submit": {
        "message": "Paraqes"
    },
    "Support Hola": {
        "message": "Mbështesni Hola"
    },
    "TC": {
        "message": "Turks dhe Caicos Ishujt"
    },
    "TD": {
        "message": "Çad"
    },
    "TF": {
        "message": "Territoret Franceze Jugore"
    },
    "TH": {
        "message": "Tajlandë"
    },
    "TJ": {
        "message": "Taxhikistan"
    },
    "TM": {
        "message": "Turkmenistani"
    },
    "TN": {
        "message": "Tunisi"
    },
    "TO": {
        "message": "Karrocë me dy rrota"
    },
    "TR": {
        "message": "Turqi"
    },
    "TT": {
        "message": "Trinidad e Tobago"
    },
    "TW": {
        "message": "Tajvan"
    },
    "TZ": {
        "message": "Tanzani"
    },
    "Talk to us on $1": {
        "message": "Bisedoni me ne në $1"
    },
    "Tell friends about $1": {
        "message": "Tregoj miq rreth $1"
    },
    "Testing connection...": {
        "message": "Lidhje Testimi ..."
    },
    "Thank you!": {
        "message": "Ju faleminderit!"
    },
    "There seems to be an error": {
        "message": "Ngjan se ka një gabim"
    },
    "Top popular sites": {
        "message": "Faqet e Top popullore"
    },
    "Translate to your language": {
        "message": "Përktheni në gjuhën tuaj"
    },
    "Try again": {
        "message": "Provoni përsëri"
    },
    "Try another server": {
        "message": "Provoni një tjetër server"
    },
    "Try it": {
        "message": "Provoje"
    },
    "Try safe mode": {
        "message": "Provoni mënyrë të sigurt"
    },
    "Try to <span>reload</span>": {
        "message": "Mundohuni të <span> ringarkoni </span>"
    },
    "Trying another peer...": {
        "message": "Duke u përpjekur për një tjetër miratimi i kolegëve ..."
    },
    "Turn on Accelerator": {
        "message": "Kthejeni në Accelerator"
    },
    "Turn on Hola": {
        "message": "Kthejeni në Hola"
    },
    "Turn on to get started": {
        "message": "Kthejeni në për të marrë filluar"
    },
    "UA": {
        "message": "Ukrainë"
    },
    "UM": {
        "message": "SHBA Ishujt Minor periferike"
    },
    "US": {
        "message": "Shtetet e Bashkuara të Amerikës"
    },
    "UY": {
        "message": "Uruguaj"
    },
    "UZ": {
        "message": "Uzbekistani"
    },
    "Unblocker": {
        "message": "Zhbllokuesi"
    },
    "Unblocker is disabled": {
        "message": "Zhbllokuesi është me aftësi të kufizuara"
    },
    "Upgrade": {
        "message": "Update"
    },
    "Using": {
        "message": "Duke përdorur"
    },
    "Using Hola": {
        "message": "Duke përdorur Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent e Grenadinet"
    },
    "VD": {
        "message": "Vietnam veri"
    },
    "VE": {
        "message": "Venezuelë"
    },
    "VG": {
        "message": "Ishujt e Virgjër Britanikë"
    },
    "VI": {
        "message": "US Virgin Islands"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Version shumë i vjetër i Chrome, <a> Azhurimi </a> Chrome për të përdorur Hola"
    },
    "Video stuck?": {
        "message": "Video mbërthyer?"
    },
    "Videos available for instant streaming": {
        "message": "Videos dispozicion për streaming çastit"
    },
    "WF": {
        "message": "Wallis dhe Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Dëshironi Hola në pajisje të tjera? (Xbox, PS, Apple TV, iPhone ...). Kliko këtu"
    },
    "Want to know more?": {
        "message": "Dëshironi të dini më shumë?"
    },
    "Watch Now": {
        "message": "Shikojnë Tani"
    },
    "We found $1 videos": {
        "message": "Ne kemi gjetur $1 videos"
    },
    "We will be in touch with you soon": {
        "message": "Ne do të jemi në kontakt me ju së shpejti"
    },
    "Working!": {
        "message": "Duke punuar!"
    },
    "Working?": {
        "message": "Duke punuar?"
    },
    "Works on all sites but slower": {
        "message": "Punon në të gjitha faqet, por të ngadalshme"
    },
    "YD": {
        "message": "Republika Popullore Demokratike e Jemenit"
    },
    "YE": {
        "message": "Jemen"
    },
    "Yes": {
        "message": "Po"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Ju duhet të përmirësuar në versionin e fundit të Opera për të përdorur Hola. Shtypni <a>këtu</a> për të përmirësuar."
    },
    "ZA": {
        "message": "Afrika e Jugut"
    },
    "ZM": {
        "message": "Zambi"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "Rajon i panjohur ose i pavlefshëm"
    },
    "app_desc": {
        "message": "Faqet e internetit të kësaj faqeje bllokuara në vendin tuaj, kompani ose shkollë me Hola! Hola është i lirë dhe të lehtë për t'u përdorur!"
    },
    "app_name": {
        "message": "Hola Interneti më i mirë"
    },
    "back to": {
        "message": "mbështetur tek"
    },
    "changing...": {
        "message": "ndryshimin e ..."
    },
    "cool sites": {
        "message": "Faqet e ftohtë"
    },
    "current site": {
        "message": "Vendi aktual"
    },
    "day": {
        "message": "ditë"
    },
    "days": {
        "message": "ditë"
    },
    "even more...": {
        "message": "edhe më shumë ..."
    },
    "mode": {
        "message": "Mënyra"
    },
    "more options...": {
        "message": "opsione të tjera..."
    },
    "not working?": {
        "message": "nuk punon?"
    },
    "not working? try another server": {
        "message": "nuk punon? provoni një tjetër server"
    },
    "on this page": {
        "message": "në këtë faqe"
    },
    "sites that are censored": {
        "message": "faqet që janë censuruar"
    },
    "start": {
        "message": "filloj"
    },
    "working? remember": {
        "message": "duke punuar? kujtoj"
    }
};
return E; });