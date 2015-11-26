'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " atravè "
    },
    "$1 Buffering?": {
        "message": "$1 tampon?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola jwenn aksè nan $2\n\nKlike la a fè menm bagay la: $3\n\nLi enstale Hola, ki pèmèt m 'navige entènèt la pi vit ak jwenn aksè nan $4$5"
    },
    "$1 from $2": {
        "message": "$1 nan $2"
    },
    "$1 not found": {
        "message": "$1 pa jwenn"
    },
    "$1 via Hola": {
        "message": "$1 atravè Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Kèk karakteristik Hola yo pa disponib sou vèsyon ou)"
    },
    "AC": {
        "message": "Zile Asansyon"
    },
    "AE": {
        "message": "Emira Arab Ini"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AL": {
        "message": "Albani"
    },
    "AM": {
        "message": "Ameni"
    },
    "AN": {
        "message": "Netherlands Zantiy"
    },
    "AQ": {
        "message": "Antatik"
    },
    "AR": {
        "message": "Ajantin"
    },
    "AT": {
        "message": "Otrich"
    },
    "AU": {
        "message": "Ostrali"
    },
    "AZ": {
        "message": "Azerbaydjan"
    },
    "About": {
        "message": "Sou"
    },
    "About Hola": {
        "message": "Sou Hola"
    },
    "Accelerator": {
        "message": "Akseleratè"
    },
    "Accelerator is": {
        "message": "Accelerator se"
    },
    "Access $1 - cool site!": {
        "message": "Aksè $1 - sou sit fre!"
    },
    "Access $1?": {
        "message": "Jwenn aksè nan $1?"
    },
    "Access any site from any country, free": {
        "message": "Aksè nenpòt sit ki soti nan nenpòt ki peyi, yo gratis,"
    },
    "Access cool sites": {
        "message": "Aksè sit fre"
    },
    "Access more sites": {
        "message": "Aksè plis sit"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Sit Aksè Kontwole nan peyi ou epi akselere entènèt ou an ak Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Antre nan $1 ak Hola"
    },
    "Account": {
        "message": "Kont"
    },
    "Account type": {
        "message": "Kalite Kont"
    },
    "Activating...": {
        "message": "Aktive..."
    },
    "All ($1)": {
        "message": "Tout ($1)"
    },
    "Apply settings...": {
        "message": "Aplike anviwònman ..."
    },
    "Author site:": {
        "message": "Sit Author:"
    },
    "Author:": {
        "message": "Otè:"
    },
    "BA": {
        "message": "Bosni ak Erzegovin"
    },
    "BD": {
        "message": "Bangladèch"
    },
    "BE": {
        "message": "Bèljik"
    },
    "BG": {
        "message": "Bilgari"
    },
    "BJ": {
        "message": "Benen"
    },
    "BO": {
        "message": "Bolivi"
    },
    "BQ": {
        "message": "Britanik Teritwa Antatik"
    },
    "BR": {
        "message": "Brezil"
    },
    "BT": {
        "message": "Boutan"
    },
    "BY": {
        "message": "Byelorisi"
    },
    "BZ": {
        "message": "Beliz"
    },
    "Back to $1": {
        "message": "Retounen nan $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Ou ka vin premye a jwenn Hola pou ifon / iPad - Enskri kounye a:"
    },
    "Browsing": {
        "message": "Navigasyon"
    },
    "Buffering problems?": {
        "message": "Pwoblèm tampon?"
    },
    "Buffering?": {
        "message": "Tampon?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Cocos [Keeling] Zile"
    },
    "CD": {
        "message": "Kongo - Kinshasa"
    },
    "CF": {
        "message": "Repiblik Afrik Santral"
    },
    "CG": {
        "message": "Kongo - Brazzaville"
    },
    "CH": {
        "message": "Swis"
    },
    "CI": {
        "message": "Côte d&#39;Ivoire"
    },
    "CL": {
        "message": "Chili"
    },
    "CM": {
        "message": "Kamewoun"
    },
    "CN": {
        "message": "Lachin"
    },
    "CO": {
        "message": "Kolonbi"
    },
    "CP": {
        "message": "Clipperton zile"
    },
    "CS": {
        "message": "Sèbi ak Montenegwo"
    },
    "CT": {
        "message": "Canton ak Enderbury Islands"
    },
    "CU": {
        "message": "Kiba"
    },
    "CV": {
        "message": "Kap Vè"
    },
    "CX": {
        "message": "Nwèl Island"
    },
    "CY": {
        "message": "Lil Chip"
    },
    "CZ": {
        "message": "Repiblik Tchekoslovaki"
    },
    "Changing country...": {
        "message": "Chanje peyi ..."
    },
    "Check out Hola for $1!": {
        "message": "Tcheke Hola pou $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Tcheke Hola pou aparèy mobil"
    },
    "Check your Internet connection": {
        "message": "Verify ou gen entènèt"
    },
    "Choose<br>Country": {
        "message": "Chwazi <br> Peyi"
    },
    "Configuring...": {
        "message": "Konfigirasyon ..."
    },
    "Connecting...": {
        "message": "Koneksyon ..."
    },
    "Cool site!": {
        "message": "Cool sit!"
    },
    "Creative licenses": {
        "message": "Lisans Creative"
    },
    "DD": {
        "message": "Almay Lès"
    },
    "DE": {
        "message": "Almay"
    },
    "DM": {
        "message": "Dominik"
    },
    "DO": {
        "message": "Repiblik Dominikèn"
    },
    "DZ": {
        "message": "Aljeri"
    },
    "Delete": {
        "message": "Netwaye"
    },
    "Deleted from my list": {
        "message": "Efase soti nan lis mwen an"
    },
    "Did it work?": {
        "message": "Èske li travay?"
    },
    "Did you experience any buffering?": {
        "message": "Èske ou te santi nenpòt tampon?"
    },
    "Disliked it": {
        "message": "Nèm li"
    },
    "Don't show again for $1 for one week": {
        "message": "pa montre ankò pou $1 pou yon semèn"
    },
    "Don't show again for any site for one week": {
        "message": "pa montre ankò pou nenpòt ki site pou yon semèn"
    },
    "Downloading": {
        "message": "Telechajman"
    },
    "EA": {
        "message": "Seta ak Melilla"
    },
    "EC": {
        "message": "Ekwatè"
    },
    "EE": {
        "message": "Estoni"
    },
    "EG": {
        "message": "Peyi Lejip"
    },
    "ES": {
        "message": "Espay"
    },
    "ET": {
        "message": "Etyopi"
    },
    "EU": {
        "message": "Inyon Ewopeyen an"
    },
    "Enable": {
        "message": "Pèmèt"
    },
    "Enable Hola Accelerator": {
        "message": "Pèmèt Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Jwi!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Pran plezi nan Hola pou Chrome?"
    },
    "Enter site to access": {
        "message": "Antre nan sit aksè"
    },
    "Enter your email": {
        "message": "Antre nan imel ou"
    },
    "FI": {
        "message": "Fenlann"
    },
    "FM": {
        "message": "Mikwonezi"
    },
    "FQ": {
        "message": "Franse Sid ak Antatik Teritwa"
    },
    "FR": {
        "message": "Lafrans"
    },
    "FX": {
        "message": "Metwopoliten Lafrans"
    },
    "Fast": {
        "message": "Vit"
    },
    "Finding new peers...": {
        "message": "Jwenn nouvo kamarad klas ..."
    },
    "Finding peers...": {
        "message": "Jwenn kamarad klas ..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Soti nan"
    },
    "Full list": {
        "message": "Full lis"
    },
    "GB": {
        "message": "Wayòm Ini"
    },
    "GF": {
        "message": "Franse gwiyane"
    },
    "GH": {
        "message": "Gana"
    },
    "GN": {
        "message": "Gine"
    },
    "GP": {
        "message": "Gwadloup"
    },
    "GQ": {
        "message": "Gine ekwateryal"
    },
    "GR": {
        "message": "Grès"
    },
    "GS": {
        "message": "South Georgia ak Zile yo sandwich Sid"
    },
    "GT": {
        "message": "Gwatemala"
    },
    "GY": {
        "message": "Giyàn"
    },
    "Get 24/7 Unblocking": {
        "message": "Jwenn 24/7 déblocage"
    },
    "Get Free Premium": {
        "message": "Jwenn gratis Premium"
    },
    "Get Hola Accelerator": {
        "message": "Jwenn Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Jwenn Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Jwenn Hola Plus pou un-enteronpr, sèvis anons-gratis."
    },
    "Get Hola Premium": {
        "message": "Jwenn Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Jwenn Hola pou android"
    },
    "Get Premium support": {
        "message": "Jwenn lajan sipò pou Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Jwenn Unlimited déblocage"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Jwenn aksè nan Kontwole sit, eseye li kounye a: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Jwenn èd nan men enjenyè sou Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Jwenn Serveurs ki pi rapid"
    },
    "Go": {
        "message": "Ale"
    },
    "Go Hola Premium": {
        "message": "Ale Hola Premium"
    },
    "HK": {
        "message": "Hong Kong SAR Lachin"
    },
    "HM": {
        "message": "Tande ak McDonald Islands Island"
    },
    "HN": {
        "message": "Ondiras"
    },
    "HR": {
        "message": "Kwoasi"
    },
    "HT": {
        "message": "Ayiti"
    },
    "HU": {
        "message": "Ongri"
    },
    "Hate it": {
        "message": "Rayi l'"
    },
    "Help": {
        "message": "Ede"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nmwen sèvi ak"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nMwen te kòmanse lè l sèvi avèk $1 ($2). Li pèmèt m 'navige entènèt la pi vit ak jwenn aksè nan $3 nan peyi m' yo."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola pa kapab travay paske yon lòt ekstansyon se kontwole anviwònman prokurasyon ou."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola pa travay byen nan mòd fenèt 8. Tanpri chanje a mòd Desktop. Klike sou <a> isit la </a> pou enstriksyon"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola a pa disponib kounye a, men nou ap travay sou li."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola se koupe, klike sou vire sou"
    },
    "Hola site list": {
        "message": "Hola sit lis"
    },
    "I can now access $1 from any country!": {
        "message": "Mwen kapab kounye a gen aksè a $1 nan nenpòt ki peyi!"
    },
    "I did not experience any buffering": {
        "message": "Mwen pa t 'santi nenpòt tampon"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Mwen jis jwenn aksè yon sit Kontwole lè l sèvi avèk Hola pou $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Mwen sèvi ak $1 yo wè $2 nan peyi mwen an, epi navige pi vit!"
    },
    "ID": {
        "message": "Endonezi"
    },
    "IE": {
        "message": "Iland"
    },
    "IL": {
        "message": "Izrayèl"
    },
    "IN": {
        "message": "Peyi Zend"
    },
    "IO": {
        "message": "Britanik Oseyan Endyen Teritwa"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islann"
    },
    "IT": {
        "message": "Itali"
    },
    "Improve translation": {
        "message": "Amelyore tradiksyon"
    },
    "Initializing...": {
        "message": "Inisyalizin ..."
    },
    "Install": {
        "message": "Enstale"
    },
    "Install Accelerator": {
        "message": "Enstale Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Enstale gratis Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Enstale Hola Engine kontinye lè l sèvi avèk Hola pou gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Imedyatman gade nenpòt Video torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Envite zanmi - gratis Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Envite zanmi yo. Jwenn Premium."
    },
    "It was okay": {
        "message": "Li te oke"
    },
    "JO": {
        "message": "Lòt bò larivyè Jouden"
    },
    "JP": {
        "message": "Japon"
    },
    "KH": {
        "message": "Kanbòdj"
    },
    "KM": {
        "message": "Komò"
    },
    "KN": {
        "message": "Saint Kits ak Nevi"
    },
    "KP": {
        "message": "Kore di Nò"
    },
    "KR": {
        "message": "Kore di Sid"
    },
    "KW": {
        "message": "Kowet"
    },
    "LB": {
        "message": "Liban"
    },
    "LR": {
        "message": "Liberya"
    },
    "LT": {
        "message": "Lityani"
    },
    "LV": {
        "message": "Letoni"
    },
    "LY": {
        "message": "Libi"
    },
    "Language": {
        "message": "Lang"
    },
    "Library": {
        "message": "Bibliyotèk"
    },
    "Like it": {
        "message": "Tankou li"
    },
    "Loading site...": {
        "message": "Loading"
    },
    "Log out": {
        "message": "Log deyò"
    },
    "Love Hola?": {
        "message": "Renmen Hola?"
    },
    "MA": {
        "message": "Mawòk"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldavi"
    },
    "ME": {
        "message": "Montenegwo"
    },
    "MK": {
        "message": "Masedwan"
    },
    "MM": {
        "message": "Myanma [Burma]"
    },
    "MN": {
        "message": "Mongoli"
    },
    "MO": {
        "message": "Macau SAR Lachin"
    },
    "MQ": {
        "message": "Matinik"
    },
    "MR": {
        "message": "Moritani"
    },
    "MU": {
        "message": "Moris"
    },
    "MV": {
        "message": "Maldiv"
    },
    "MX": {
        "message": "Meksik"
    },
    "MY": {
        "message": "Malezi"
    },
    "MZ": {
        "message": "Mozanbik"
    },
    "Make your Internet better with $1": {
        "message": "Fè entènèt ou a pi byen ak $1"
    },
    "Might not work on all sites": {
        "message": "Pa ta ka travay sou tout sit"
    },
    "More countries": {
        "message": "Plis peyi"
    },
    "More sites...": {
        "message": "plis..."
    },
    "More...": {
        "message": "plis..."
    },
    "My Account": {
        "message": "Kont mwen an"
    },
    "My History": {
        "message": "Istwa mwen"
    },
    "My Settings": {
        "message": "Anviwònman mwen"
    },
    "My favorites": {
        "message": "Favorites mwen"
    },
    "NA": {
        "message": "Namibi"
    },
    "NE": {
        "message": "Nijè"
    },
    "NG": {
        "message": "Nijerya"
    },
    "NI": {
        "message": "Nikaragwa"
    },
    "NO": {
        "message": "Nòvèj"
    },
    "NQ": {
        "message": "Rèn Maud Tè"
    },
    "NT": {
        "message": "Net Zòn"
    },
    "NZ": {
        "message": "New Zeland"
    },
    "Need Help?": {
        "message": "Bezwen Sekou?"
    },
    "Never ask me again": {
        "message": "Pa janm mande m 'ankò"
    },
    "Never be a peer": {
        "message": "Pa janm gen yon kanmarad"
    },
    "No": {
        "message": "Pa gen"
    },
    "No idle peers found.": {
        "message": "Pa gen lòt timoun parèy san fè anyen konsa yo te jwenn."
    },
    "No recent videos found": {
        "message": "Pa gen videyo ki sot pase yo te jwenn"
    },
    "No saved videos found": {
        "message": "Pa gen videyo sove jwenn"
    },
    "No title": {
        "message": "Pa gen tit"
    },
    "No videos found": {
        "message": "Pa gen videyo te jwenn"
    },
    "No videos found on active page": {
        "message": "Pa gen videyo a nan paj aktif"
    },
    "No, Thanks": {
        "message": "Pa gen, Mèsi"
    },
    "No, fix it": {
        "message": "Pa gen, fikse li"
    },
    "Not working?": {
        "message": "Se pa travay?"
    },
    "Number of users that pressed not working": {
        "message": "Nimewo nan itilizatè ki pa bourade k ap travay"
    },
    "Number of users that use this option": {
        "message": "Nimewo nan itilizatè ki sèvi ak opsyon sa a"
    },
    "OM": {
        "message": "Omàn"
    },
    "Oh, yes!": {
        "message": "Oh, repons lan se wi!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Fin vye granmoun vèsyon an Firefox. Press <a> isit la </a> mete yo ajou."
    },
    "On": {
        "message": "Sou"
    },
    "Open Media Player": {
        "message": "Louvri Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Mak nou Nouvo mpleye ap vini byento!"
    },
    "PC": {
        "message": "Abitan Zile Trust Teritwa"
    },
    "PE": {
        "message": "Perou"
    },
    "PF": {
        "message": "Franse Polynesia"
    },
    "PH": {
        "message": "Filipin"
    },
    "PL": {
        "message": "Polòy"
    },
    "PM": {
        "message": "Saint Pierre ak Miquelon"
    },
    "PS": {
        "message": "Palestinyen Teritwa"
    },
    "PT": {
        "message": "Pòtigal"
    },
    "PU": {
        "message": "US Miscellaneous Abitan Zile"
    },
    "PY": {
        "message": "Paragwe"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Tanpri enfim lòt <a>ekstansyon</a> ke ou panse ki ka kontwole anviwònman prokurasyon ou a, tankou anons-blockers, lòt sèvis vpn, elatriye"
    },
    "Please enter a valid email address.": {
        "message": "Tanpri antre yon adrès imel ki valab."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Tanpri antre yon adrès sit entènèt, tankou facebook.com"
    },
    "Please help us get better": {
        "message": "Tanpri ede nou jwenn pi bon"
    },
    "Popular in $1": {
        "message": "Popilè nan $1"
    },
    "Popular in the world": {
        "message": "Popilè nan mond lan"
    },
    "Popular sites": {
        "message": "Sit popilè"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Avwazinan Oceania"
    },
    "RO": {
        "message": "Woumani"
    },
    "RS": {
        "message": "Sèbi"
    },
    "RU": {
        "message": "Larisi"
    },
    "Rate us": {
        "message": "Evalye nou"
    },
    "Recent Videos": {
        "message": "Dènye Albòm"
    },
    "Remember server": {
        "message": "Sonje sèvè"
    },
    "Report a problem": {
        "message": "Rapòte yon pwoblèm"
    },
    "Retry safe mode": {
        "message": "Rekoumanse mòd ki an sekirite"
    },
    "SA": {
        "message": "Arabi Saoudit"
    },
    "SB": {
        "message": "Salomon Islands"
    },
    "SC": {
        "message": "Sesel"
    },
    "SD": {
        "message": "Soudan"
    },
    "SE": {
        "message": "Syèd"
    },
    "SI": {
        "message": "Sloveni"
    },
    "SJ": {
        "message": "Svalbard ak Jan Mayen"
    },
    "SK": {
        "message": "Slovaki"
    },
    "SL": {
        "message": "Syera Leòn"
    },
    "SO": {
        "message": "Somali"
    },
    "SR": {
        "message": "Sirinam"
    },
    "ST": {
        "message": "Sao Tome ak Prinsip"
    },
    "SU": {
        "message": "Inyon an Sovyetik Sosyalis Repiblik"
    },
    "SY": {
        "message": "Siri"
    },
    "Safe mode": {
        "message": "Safe mòd"
    },
    "Saved Videos": {
        "message": "Sove Videos"
    },
    "Saved for later": {
        "message": "Sove pou pita"
    },
    "Search video title": {
        "message": "Tit videyo Search"
    },
    "Select a Country": {
        "message": "Chwazi yon Peyi"
    },
    "Select site to unblock": {
        "message": "Chwazi sit dégager"
    },
    "Server saved!": {
        "message": "Sèvè sove!"
    },
    "Set safe mode for $1 $2": {
        "message": "Mete mòd ki an sekirite pou $1 $2"
    },
    "Settings": {
        "message": "Anviwònman"
    },
    "Share": {
        "message": "Pataje"
    },
    "Share $1 on $2": {
        "message": "Pataje $1 sou $2"
    },
    "Share $1 via $2": {
        "message": "Pataje $1 via $2"
    },
    "Share with friends!": {
        "message": "Pataje avèk zanmi!"
    },
    "Sign up": {
        "message": "Enskri"
    },
    "Solve buffering": {
        "message": "Rezoud tampon"
    },
    "Solve buffering problems with": {
        "message": "Rezoud pwoblèm tampon ak"
    },
    "Solves it": {
        "message": "Rezoud li"
    },
    "Staff Picks": {
        "message": "Chwa Anplwaye"
    },
    "Start Hola": {
        "message": "kòmanse"
    },
    "Starting...": {
        "message": "Koumanse ..."
    },
    "Stop Hola": {
        "message": "One Stop Hola"
    },
    "Stopping peer routing...": {
        "message": "Sispann routage kanmarad..."
    },
    "Stream Instantly": {
        "message": "Kouran Imedyatman"
    },
    "Submit": {
        "message": "Soumèt"
    },
    "Support Hola": {
        "message": "Sipò pou Hola"
    },
    "TC": {
        "message": "Il Tirk ak Kayiko"
    },
    "TF": {
        "message": "Franse Southern teritwa"
    },
    "TM": {
        "message": "Tirkmenistan"
    },
    "TN": {
        "message": "Tinizi"
    },
    "TT": {
        "message": "Trinidad ak Tobago"
    },
    "TZ": {
        "message": "Tanzani"
    },
    "Talk to us on $1": {
        "message": "Pale ak nou sou $1"
    },
    "Tell friends about $1": {
        "message": "Di zanmi sou $1"
    },
    "Testing connection...": {
        "message": "Koneksyon Tès..."
    },
    "Thank you!": {
        "message": "Mèsi!"
    },
    "There seems to be an error": {
        "message": "Gen sanble ap yon erè"
    },
    "Top popular sites": {
        "message": "Top sit popilè"
    },
    "Translate to your language": {
        "message": "Translate nan lang ou"
    },
    "Try again": {
        "message": "Eseye ankò"
    },
    "Try another server": {
        "message": "Eseye yon lòt sèvè"
    },
    "Try it": {
        "message": "Eseye li"
    },
    "Try safe mode": {
        "message": "Eseye mòd ki an sekirite"
    },
    "Try to <span>reload</span>": {
        "message": "Eseye <span> Reload </span>"
    },
    "Trying another peer...": {
        "message": "Eseye yon lòt kanmarad..."
    },
    "Turn off Accelerator": {
        "message": "Etenn Accelerator"
    },
    "Turn off Hola": {
        "message": "Etenn Hola"
    },
    "Turn on Accelerator": {
        "message": "Vire sou Accelerator"
    },
    "Turn on Hola": {
        "message": "Vire sou Hola"
    },
    "Turn on to get started": {
        "message": "Vire sou jwenn te kòmanse"
    },
    "UA": {
        "message": "Ikrèn"
    },
    "UM": {
        "message": "US minè avwazinan Islands"
    },
    "US": {
        "message": "Etazini"
    },
    "UY": {
        "message": "Irigwe"
    },
    "UZ": {
        "message": "Ouzbekistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker yo ki andikape"
    },
    "Update": {
        "message": "Mete ajou"
    },
    "Upgrade": {
        "message": "Mete ajou"
    },
    "Using": {
        "message": "Lè l sèvi avèk"
    },
    "Using Hola": {
        "message": "Lè l sèvi avèk Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent ak Grenadines yo"
    },
    "VD": {
        "message": "Nò Vyetnam"
    },
    "VE": {
        "message": "Venezyela"
    },
    "VG": {
        "message": "Britanik Zile Vyèj"
    },
    "VI": {
        "message": "Zile Vyèj Etazini"
    },
    "VN": {
        "message": "Vyetnam"
    },
    "VPN": {
        "message": "Vpn"
    },
    "VPN Premium": {
        "message": "Vpn Premium"
    },
    "VU": {
        "message": "Vanwatou"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Trè fin vye granmoun vèsyon an Chrome, <a> aktyalizasyon </a> Chrome yo sèvi ak Hola"
    },
    "Video": {
        "message": "Videyo"
    },
    "Video stuck?": {
        "message": "Videyo kole?"
    },
    "Videos available for instant streaming": {
        "message": "Videos disponib pou difizyon enstantane"
    },
    "WF": {
        "message": "Wallis ak Futuna"
    },
    "WK": {
        "message": "Reveye Island"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vle Hola sou lòt aparèy? (Xbox, PS, Apple televizyon, iPhone ...). Klike la a"
    },
    "Want to know more?": {
        "message": "Vle konnen plis?"
    },
    "Watch Now": {
        "message": "Koulye a, gade"
    },
    "We found $1 videos": {
        "message": "Nou jwenn $1 videyo"
    },
    "We will be in touch with you soon": {
        "message": "Nou pral an kontak ak ou byento"
    },
    "Working!": {
        "message": "K ap travay!"
    },
    "Working?": {
        "message": "K ap travay?"
    },
    "Works on all sites but slower": {
        "message": "Ap travay sou tout sit men pi dousman"
    },
    "YD": {
        "message": "Repiblik Demokratik Pèp la nan Yemèn"
    },
    "YE": {
        "message": "Yemèn"
    },
    "Yes": {
        "message": "Wi"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Ou bezwen ajou ak vèsyon an dènye nan Opera yo sèvi ak Hola. Peze <a>isit la</a> mete yo ajou."
    },
    "ZA": {
        "message": "Lafrik di sid"
    },
    "ZM": {
        "message": "Zanbi"
    },
    "ZZ": {
        "message": "Unknown oswa Envalid Rejyon"
    },
    "app_desc": {
        "message": "Sou sit entènèt Aksè bloke nan peyi ou, konpayi oswa lekòl ki gen Hola! Hola sa yo gratis epi fasil yo sèvi ak!"
    },
    "app_name": {
        "message": "Hola Pi bon entènèt"
    },
    "back to": {
        "message": "Retounen nan"
    },
    "changing...": {
        "message": "chanje ..."
    },
    "cool sites": {
        "message": "sit fre"
    },
    "current site": {
        "message": "sit aktyèl"
    },
    "day": {
        "message": "jou"
    },
    "days": {
        "message": "jou"
    },
    "even more...": {
        "message": "menm plis ..."
    },
    "mode": {
        "message": "mòd"
    },
    "more options...": {
        "message": "plis opsyon ..."
    },
    "not working?": {
        "message": "pa ap travay?"
    },
    "not working? try another server": {
        "message": "pa ap travay? eseye yon lòt sèvè"
    },
    "on this page": {
        "message": "nan paj sa a"
    },
    "sites that are censored": {
        "message": "sit ki Kontwole"
    },
    "start": {
        "message": "kòmanse"
    },
    "working? remember": {
        "message": "ap travay? sonje"
    }
};
return E; });