'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " trí "
    },
    "$1 Buffering?": {
        "message": "$1 Mhaolánaithe?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola rochtain a fháil ar $2\n\nCliceáil anseo chun an rud céanna: $3\n\ninstalls sé Hola, a ligeann dom a surf an Idirlíon níos tapúla agus rochtain a fháil ar $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN Préimh"
    },
    "$1 from $2": {
        "message": "$1 ó $2"
    },
    "$1 not found": {
        "message": "$1 gan aimsiú"
    },
    "$1 via Hola": {
        "message": "$1 trí Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Nach bhfuil roinnt gnéithe Hola ar fáil ar do version)"
    },
    "AC": {
        "message": "Oileán Deascabhála"
    },
    "AD": {
        "message": "Andóra"
    },
    "AE": {
        "message": "Aontas na nÉimíríochtaí Arabacha"
    },
    "AF": {
        "message": "An Afganastáin"
    },
    "AG": {
        "message": "Aintíge agus Barbúda"
    },
    "AL": {
        "message": "An Albáin"
    },
    "AM": {
        "message": "An Airméin"
    },
    "AN": {
        "message": "Antillí na hÍsiltíre"
    },
    "AO": {
        "message": "Angóla"
    },
    "AQ": {
        "message": "An Antartaice"
    },
    "AR": {
        "message": "An Airgintín"
    },
    "AS": {
        "message": "Samó Meiriceánach"
    },
    "AT": {
        "message": "An Ostair"
    },
    "AU": {
        "message": "An Astráil"
    },
    "AW": {
        "message": "Arúba"
    },
    "AX": {
        "message": "Oileáin Alaind"
    },
    "AZ": {
        "message": "An Asarbaiseáin"
    },
    "About": {
        "message": "Maidir"
    },
    "About Hola": {
        "message": "Maidir Hola"
    },
    "Accelerator": {
        "message": "Luasaire"
    },
    "Accelerator is": {
        "message": "Tá Luasaire"
    },
    "Access $1 - cool site!": {
        "message": "Rochtain $1 - láithreán cool!"
    },
    "Access $1?": {
        "message": "Rochtain $1?"
    },
    "Access any site from any country, free": {
        "message": "Rochtain ar aon suíomh ó aon tír, saor in aisce"
    },
    "Access cool sites": {
        "message": "Suíomhanna Rochtana fionnuar"
    },
    "Access more sites": {
        "message": "Láithreáin Rochtana níos mó"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Suíomhanna Rochtana censored i do thír agus dlús a do Idirlín le Hola - Saor in Aisce!"
    },
    "Accessing $1 with Hola": {
        "message": "Rochtain $1 le Hola"
    },
    "Account": {
        "message": "Cuntas"
    },
    "Account type": {
        "message": "Cineál Cuntais"
    },
    "All ($1)": {
        "message": "($1) go léir"
    },
    "Apply settings...": {
        "message": "Suímh Iarratas a..."
    },
    "Author site:": {
        "message": "Suíomh Údar:"
    },
    "Author:": {
        "message": "Údar:"
    },
    "Awesome!": {
        "message": "Uamhnach!"
    },
    "BA": {
        "message": "An Bhoisnia agus Heirseagóvéin"
    },
    "BB": {
        "message": "Barbadós"
    },
    "BD": {
        "message": "An Bhanglaidéis"
    },
    "BE": {
        "message": "An Bheilg"
    },
    "BF": {
        "message": "Buircíne Fasó"
    },
    "BG": {
        "message": "An Bhulgáir"
    },
    "BH": {
        "message": "Bairéin"
    },
    "BI": {
        "message": "An Bhurúin"
    },
    "BJ": {
        "message": "Beinin"
    },
    "BM": {
        "message": "Beirmiúda"
    },
    "BN": {
        "message": "Brúiné"
    },
    "BO": {
        "message": "An Bholaiv"
    },
    "BQ": {
        "message": "Críoch na Breataine san Antartach"
    },
    "BR": {
        "message": "An Bhrasaíl"
    },
    "BS": {
        "message": "Na Bahámaí"
    },
    "BT": {
        "message": "An Bhútáin"
    },
    "BV": {
        "message": "Oileán Bouvet"
    },
    "BW": {
        "message": "An Bhotsuáin"
    },
    "BY": {
        "message": "An Bhealarúis"
    },
    "BZ": {
        "message": "An Bheilís"
    },
    "Back to $1": {
        "message": "Ar ais go $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Bí ar an chéad a fháil Hola do iPhone / iPad - Cláraigh anois:"
    },
    "Browsing": {
        "message": "Brabhsáil"
    },
    "Buffering problems?": {
        "message": "Fadhbanna mhaolánaithe?"
    },
    "Buffering?": {
        "message": "Mhaolánaithe?"
    },
    "CA": {
        "message": "Ceanada"
    },
    "CC": {
        "message": "Oileáin na gCócónna"
    },
    "CD": {
        "message": "Poblacht Dhaonlathach an Chongó"
    },
    "CF": {
        "message": "Poblacht na hAfraice Láir"
    },
    "CG": {
        "message": "An Congó"
    },
    "CH": {
        "message": "An Eilvéis"
    },
    "CI": {
        "message": "An Cósta Eabhair"
    },
    "CK": {
        "message": "Oileáin Cook"
    },
    "CL": {
        "message": "An tSile"
    },
    "CM": {
        "message": "Camarún"
    },
    "CN": {
        "message": "An tSín"
    },
    "CO": {
        "message": "An Cholóim"
    },
    "CP": {
        "message": "Clipperton oileán"
    },
    "CR": {
        "message": "Cósta Ríce"
    },
    "CS": {
        "message": "An tSeirbia agus Montainéagró"
    },
    "CT": {
        "message": "Canton agus Oileáin Enderbury"
    },
    "CU": {
        "message": "Cúba"
    },
    "CV": {
        "message": "An Rinn Ghlas"
    },
    "CX": {
        "message": "Oileán na Nollag"
    },
    "CY": {
        "message": "An Chipir"
    },
    "CZ": {
        "message": "Poblacht na Seice"
    },
    "Changing country...": {
        "message": "Athrú tír ..."
    },
    "Check out Hola for $1!": {
        "message": "Amharc ar Hola do $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Amharc ar Hola le haghaidh feistí soghluaiste"
    },
    "Check your Internet connection": {
        "message": "Fíoraigh go bhfuil tú Idirlíon"
    },
    "Choose<br>Country": {
        "message": "Roghnaigh <br> Tír"
    },
    "Configuring...": {
        "message": "Chumrú ..."
    },
    "Connecting...": {
        "message": "Nascadh ..."
    },
    "Cool site!": {
        "message": "Láithreán Cool!"
    },
    "Creative licenses": {
        "message": "Ceadúnais Creative"
    },
    "DD": {
        "message": "Oirthear na Gearmáine"
    },
    "DE": {
        "message": "An Ghearmáin"
    },
    "DK": {
        "message": "An Danmhairg"
    },
    "DM": {
        "message": "Doiminice"
    },
    "DO": {
        "message": "An Phoblacht Dhoiminiceach"
    },
    "DZ": {
        "message": "An Ailgéir"
    },
    "Delete": {
        "message": "Scrios"
    },
    "Deleted from my list": {
        "message": "Scriosta as mo liosta"
    },
    "Did it work?": {
        "message": "An raibh sé ag obair?"
    },
    "Did you experience any buffering?": {
        "message": "An raibh tú ag taithí aon mhaolánaithe?"
    },
    "Disliked it": {
        "message": "Carachtair sé"
    },
    "Don't show again for $1 for one week": {
        "message": "Ná taispeáin arís do $1 le haghaidh seachtain amháin"
    },
    "Don't show again for any site for one week": {
        "message": "Ná taispeáin arís le haghaidh aon suíomh ar feadh seachtaine"
    },
    "Downloading": {
        "message": "Íosluchtú"
    },
    "EA": {
        "message": "Ceuta agus Melilla"
    },
    "EC": {
        "message": "Eacuadór"
    },
    "EE": {
        "message": "An Eastóin"
    },
    "EG": {
        "message": "An Éigipt"
    },
    "EH": {
        "message": "An Sahára Thiar"
    },
    "ER": {
        "message": "An Eiritré"
    },
    "ES": {
        "message": "An Spáinn"
    },
    "ET": {
        "message": "An Aetóip"
    },
    "EU": {
        "message": "an tAontas Eorpach"
    },
    "Enable": {
        "message": "Cumasaigh"
    },
    "Enable Hola Accelerator": {
        "message": "Cumasaigh Hola Luasaire"
    },
    "Enjoy!": {
        "message": "Bain sult as!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Taitneamh a bhaint as Hola do Chrome?"
    },
    "Enter site to access": {
        "message": "Cuir isteach láthair chun rochtain"
    },
    "Enter your email": {
        "message": "Cuir isteach do r-phost"
    },
    "FI": {
        "message": "An Fhionlainn"
    },
    "FJ": {
        "message": "Fidsí"
    },
    "FK": {
        "message": "Oileáin Fháclainne"
    },
    "FM": {
        "message": "An Mhicrinéis"
    },
    "FO": {
        "message": "Oileáin Fharó"
    },
    "FQ": {
        "message": "Fraincis Deiscirt agus an Antartaigh de chuid na Críocha"
    },
    "FR": {
        "message": "An Fhrainc"
    },
    "FX": {
        "message": "Metropolitan An Fhrainc"
    },
    "Finding new peers...": {
        "message": "Lorg piaraí nua ..."
    },
    "Finding peers...": {
        "message": "Piaraí Lorg ..."
    },
    "Free": {
        "message": "Saor in Aisce"
    },
    "From": {
        "message": "Ó"
    },
    "Full list": {
        "message": "Liosta iomlán"
    },
    "GA": {
        "message": "An Ghabúin"
    },
    "GB": {
        "message": "An Ríocht Aontaithe"
    },
    "GE": {
        "message": "An tSeoirsia"
    },
    "GF": {
        "message": "An Ghuáin Fhrancach"
    },
    "GG": {
        "message": "Geansaí"
    },
    "GH": {
        "message": "Gána"
    },
    "GI": {
        "message": "Giobráltar"
    },
    "GL": {
        "message": "An Ghraonlainn"
    },
    "GM": {
        "message": "An Ghaimbia"
    },
    "GN": {
        "message": "An Ghuine"
    },
    "GP": {
        "message": "Guadalúip"
    },
    "GQ": {
        "message": "An Ghuine Mheánchriosach"
    },
    "GR": {
        "message": "An Ghréig"
    },
    "GS": {
        "message": "An tSeoirsia Theas agus Oileáin Sandwich Theas"
    },
    "GT": {
        "message": "Guatamala"
    },
    "GW": {
        "message": "An Ghuine-Bhissau"
    },
    "GY": {
        "message": "An Ghuáin"
    },
    "Get 24/7 Unblocking": {
        "message": "Faigh 24/7 unblocking"
    },
    "Get Free Premium": {
        "message": "Faigh Préimh Saor in Aisce"
    },
    "Get Hola Accelerator": {
        "message": "Faigh Hola Luasaire"
    },
    "Get Hola Player": {
        "message": "Faigh Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Faigh Hola Plus le un-isteach, seirbhís ad-saor in aisce."
    },
    "Get Hola Premium": {
        "message": "Faigh Hola Préimh"
    },
    "Get Hola for Android": {
        "message": "Faigh Hola do Android"
    },
    "Get Premium support": {
        "message": "Faigh tacaíocht Préimh"
    },
    "Get Unlimited Unblocking": {
        "message": "Faigh Unlimited unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Faigh rochtain ar láithreáin censored, déan iarracht é anois: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Faigh cabhair ó innealtóir thar Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Faigh na Freastalaithe tapúla"
    },
    "Go": {
        "message": "Téigh"
    },
    "Go Hola Premium": {
        "message": "Téigh Hola Préimh"
    },
    "HK": {
        "message": "R.R.S. na Síne Hong Cong"
    },
    "HM": {
        "message": "Oileán Heard agus Oileáin McDonald"
    },
    "HN": {
        "message": "Hondúras"
    },
    "HR": {
        "message": "An Chróit"
    },
    "HT": {
        "message": "Háití"
    },
    "HU": {
        "message": "An Ungáir"
    },
    "Hate it": {
        "message": "Is fuath liom é"
    },
    "Help": {
        "message": "Cabhair"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\ntá mé ag baint úsáide as"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Dia duit,\n\nthosaigh mé ag baint úsáide as $1 ($2). Ligeann sé dom surf an Idirlíon níos tapúla agus rochtain a fháil ar $3 i mo thír."
    },
    "Hola Accelerator": {
        "message": "Hola Luasaire"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Ní féidir Hola obair toisc go bhfuil síneadh eile a smachtú do socruithe seachfhreastalaí."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Ní Hola ag obair go maith i Windows 8 mód. Le do thoil ag aistriú chuig mód deisce. Cliceáil <a> anseo </a> le haghaidh treoracha"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Ní Hola fáil ceart anois, ach táimid ag obair ar sé."
    },
    "Hola is off, click it to turn it on": {
        "message": "Tá Hola amach, cliceáil chun dul ar"
    },
    "Hola site list": {
        "message": "Liosta láithreán Unblocker"
    },
    "I can now access $1 from any country!": {
        "message": "Is féidir liom rochtain a fháil anois $1 ó aon tír!"
    },
    "I did not experience any buffering": {
        "message": "Ní raibh mé taithí aon mhaolánaithe"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Rochtain mé díreach tar éis an suíomh cinsireacht ag baint úsáide as Hola do $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Tá mé ag baint úsáide as $1 chun amharc $2 i mo thír, agus surf níos tapúla!"
    },
    "IC": {
        "message": "HOileáin Chanáracha"
    },
    "ID": {
        "message": "An Indinéis"
    },
    "IE": {
        "message": "Éire"
    },
    "IL": {
        "message": "Iosrael"
    },
    "IM": {
        "message": "Oileán Mhanann"
    },
    "IN": {
        "message": "An India"
    },
    "IO": {
        "message": "Críocha Briotanacha an Aigéin Indiagh"
    },
    "IQ": {
        "message": "An Iaráic"
    },
    "IR": {
        "message": "An Iaráin"
    },
    "IS": {
        "message": "An Íoslainn"
    },
    "IT": {
        "message": "An Iodáil"
    },
    "Improve translation": {
        "message": "Feabhas a chur ar aistriúcháin"
    },
    "Initializing...": {
        "message": "Initializing ..."
    },
    "Install": {
        "message": "Suiteáil"
    },
    "Install Accelerator": {
        "message": "Suiteáil Luasaire"
    },
    "Install Free Hola Accelerator": {
        "message": "Suiteáil Saor Hola Luasaire"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Suiteáil Hola Inneall chun leanúint ar aghaidh ag baint úsáide as Hola saor in aisce"
    },
    "Instantly watch any torrent Video": {
        "message": "Láithreach féachaint ar aon Video torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Tabhair cuireadh do chairde - Préimh saor in aisce."
    },
    "Invite friends. Get Premium.": {
        "message": "Tabhair cuireadh do chairde. Faigh Préimh."
    },
    "It was okay": {
        "message": "Bhí sé ceart go leor"
    },
    "JE": {
        "message": "Geirsí"
    },
    "JM": {
        "message": "Iamáice"
    },
    "JO": {
        "message": "An Iordáin"
    },
    "JP": {
        "message": "An tSeapáin"
    },
    "JT": {
        "message": "Oileán Johnston"
    },
    "KE": {
        "message": "An Chéinia"
    },
    "KG": {
        "message": "An Chirgeastáin"
    },
    "KH": {
        "message": "An Chambóid"
    },
    "KI": {
        "message": "Ciribeas"
    },
    "KM": {
        "message": "Oileáin Chomóra"
    },
    "KN": {
        "message": "Saint Kitts agus Nevis"
    },
    "KP": {
        "message": "An Chóiré Thuaidh"
    },
    "KR": {
        "message": "An Chóiré Theas"
    },
    "KW": {
        "message": "Cuáit"
    },
    "KY": {
        "message": "Oileáin na gCadhman"
    },
    "KZ": {
        "message": "An Chasacstáin"
    },
    "LB": {
        "message": "An Liobáin"
    },
    "LC": {
        "message": "San Lúisia"
    },
    "LI": {
        "message": "Lichtinstéin"
    },
    "LK": {
        "message": "Srí Lanca"
    },
    "LR": {
        "message": "An Libéir"
    },
    "LS": {
        "message": "Leosóta"
    },
    "LT": {
        "message": "An Liotuáin"
    },
    "LU": {
        "message": "Lucsamburg"
    },
    "LV": {
        "message": "An Laitvia"
    },
    "LY": {
        "message": "An Libia"
    },
    "Language": {
        "message": "Teanga"
    },
    "Library": {
        "message": "Leabharlann"
    },
    "Like it": {
        "message": "Cosúil é"
    },
    "Loading": {
        "message": "Luchtú"
    },
    "Loading site...": {
        "message": "Luchtú"
    },
    "Log in": {
        "message": "Logáil isteach"
    },
    "Log out": {
        "message": "Logáil amach"
    },
    "Love Hola?": {
        "message": "Grá Hola?"
    },
    "Love it": {
        "message": "Is breá é"
    },
    "MA": {
        "message": "Maracó"
    },
    "MC": {
        "message": "Monacó"
    },
    "MD": {
        "message": "An Mholdóiv"
    },
    "ME": {
        "message": "Montainéagró"
    },
    "MH": {
        "message": "Oileáin Marshall"
    },
    "MI": {
        "message": "Midway Oileán"
    },
    "MK": {
        "message": "An Mhacadóin"
    },
    "ML": {
        "message": "Mailí"
    },
    "MM": {
        "message": "Maenmar"
    },
    "MN": {
        "message": "An Mhongóil"
    },
    "MO": {
        "message": "R.R.S. na Síne Macáó"
    },
    "MP": {
        "message": "Oileáin Mariana Thuaidh"
    },
    "MQ": {
        "message": "Martainíc"
    },
    "MR": {
        "message": "An Mharatáin"
    },
    "MS": {
        "message": "Montsarat"
    },
    "MT": {
        "message": "Málta"
    },
    "MU": {
        "message": "Oileán Mhuirís"
    },
    "MV": {
        "message": "Na Maildiví"
    },
    "MW": {
        "message": "An Mhaláiv"
    },
    "MX": {
        "message": "Meicsiceo"
    },
    "MY": {
        "message": "An Mhalaeisia"
    },
    "MZ": {
        "message": "Mósaimbíc"
    },
    "Make your Internet better with $1": {
        "message": "Déan do Idirlíon níos fearr le $1"
    },
    "Menu": {
        "message": "Clár"
    },
    "Might not work on all sites": {
        "message": "Ní fhéadfadh obair ar gach suíomh"
    },
    "Mode": {
        "message": "Mód"
    },
    "More countries": {
        "message": "Níos mó tíortha"
    },
    "More sites...": {
        "message": "níos mó ..."
    },
    "More...": {
        "message": "níos mó ..."
    },
    "My Account": {
        "message": "Mo Chuntas"
    },
    "My History": {
        "message": "Mo Stair"
    },
    "My Settings": {
        "message": "Mo Socruithe"
    },
    "My favorites": {
        "message": "Mo Favorites"
    },
    "NA": {
        "message": "An Namaib"
    },
    "NC": {
        "message": "An Nua-Chaladóin"
    },
    "NE": {
        "message": "An Nígir"
    },
    "NF": {
        "message": "Oileán Norfolk"
    },
    "NG": {
        "message": "An Nigéir"
    },
    "NI": {
        "message": "Nicearagua"
    },
    "NL": {
        "message": "An Ísiltír"
    },
    "NO": {
        "message": "An Iorua"
    },
    "NP": {
        "message": "Neipeal"
    },
    "NQ": {
        "message": "Dronning Maud Talún"
    },
    "NR": {
        "message": "Nárú"
    },
    "NT": {
        "message": "Neodrach Crios"
    },
    "NU": {
        "message": "Nívé"
    },
    "NZ": {
        "message": "An Nua-Shéalainn"
    },
    "Need Help?": {
        "message": "An riachtanas is gá Cabhair?"
    },
    "Never ask me again": {
        "message": "Ná ceist dom arís"
    },
    "Never be a peer": {
        "message": "Ná bheith ina piaraí"
    },
    "No": {
        "message": "Uimh"
    },
    "No idle peers found.": {
        "message": "Uimh piaraí díomhaoin aimsithe."
    },
    "No recent videos found": {
        "message": "Níl físeáin le déanaí le fáil"
    },
    "No saved videos found": {
        "message": "Níl físeáin shábháil le fáil"
    },
    "No title": {
        "message": "Níl teideal"
    },
    "No videos found": {
        "message": "Níl físeáin le fáil"
    },
    "No videos found on active page": {
        "message": "Níl físeáin le fáil ar leathanach gníomhach"
    },
    "No, Thanks": {
        "message": "Níl, Go raibh maith agat"
    },
    "No, fix it": {
        "message": "Níl, a shocrú"
    },
    "Not working?": {
        "message": "Nach bhfuil ag obair?"
    },
    "Number of users that pressed not working": {
        "message": "Líon na n-úsáideoirí nach brúite ag obair"
    },
    "Number of users that use this option": {
        "message": "Líon na n-úsáideoirí a bhaineann úsáid as an rogha seo"
    },
    "OM": {
        "message": "Óman"
    },
    "Oh, yes!": {
        "message": "OH tá!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Sean-leagan de Firefox. Preas <a> anseo </a> a uasghrádú."
    },
    "On": {
        "message": "Ar"
    },
    "Open Media Player": {
        "message": "Oscail Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Ár Brand New MPlayer Tá teacht go luath!"
    },
    "PC": {
        "message": "Críoch Iontaobhas Oileáin Pacific"
    },
    "PE": {
        "message": "Peiriú"
    },
    "PF": {
        "message": "An Pholainéis Fhrancach"
    },
    "PG": {
        "message": "Nua-Ghuine Phapua"
    },
    "PH": {
        "message": "Na hOileáin Fhilipíneacha"
    },
    "PK": {
        "message": "An Phacastáin"
    },
    "PL": {
        "message": "An Pholainn"
    },
    "PM": {
        "message": "Saint Pierre agus Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Portó Ríce"
    },
    "PS": {
        "message": "Na Críocha Pailistíneacha"
    },
    "PT": {
        "message": "An Phortaingéil"
    },
    "PU": {
        "message": "Stáit Aontaithe Poist Ilghnéitheach Oileáin Pacific"
    },
    "PY": {
        "message": "Paragua"
    },
    "PZ": {
        "message": "Panama Zone Chanáil"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Cuir dhíchumasú <a>síntí</a> eile a cheapann tú a d'fhéadfadh rialú do socruithe seachfhreastalaí, mar shampla ad-blockers, seirbhísí VPN eile, etc"
    },
    "Please enter a valid email address.": {
        "message": "Cuir isteach seoladh ríomhphoist bailí."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Cuir isteach seoladh láithreán gréasáin, cosúil le facebook.com"
    },
    "Please help us get better": {
        "message": "Cabhraigh linn a fháil níos fearr"
    },
    "Popular in $1": {
        "message": "Coitianta i $1"
    },
    "Popular in the world": {
        "message": "Sa tóir ar fud an domhain"
    },
    "Popular sites": {
        "message": "Suíomhanna Coitianta"
    },
    "Premium": {
        "message": "Préimh"
    },
    "QA": {
        "message": "Catar"
    },
    "QO": {
        "message": "Imeallacha Aigéine"
    },
    "RO": {
        "message": "An Rómáin"
    },
    "RS": {
        "message": "An tSeirbia"
    },
    "RU": {
        "message": "Cónaidhm na Rúise"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Ráta linn"
    },
    "Recent Videos": {
        "message": "Físeáin Déanaí"
    },
    "Reload": {
        "message": "Athlódáil"
    },
    "Reload Hola": {
        "message": "Athlódáil Hola"
    },
    "Remember server": {
        "message": "Cuimhnigh freastalaí"
    },
    "Report a problem": {
        "message": "Tuarascáil fadhb"
    },
    "Retry safe mode": {
        "message": "Retry mód sábháilte"
    },
    "SA": {
        "message": "An Araib Shádach"
    },
    "SB": {
        "message": "Oileáin Sholaimh"
    },
    "SC": {
        "message": "Na Séiséil"
    },
    "SD": {
        "message": "An tSúdáin"
    },
    "SE": {
        "message": "An tSualainn"
    },
    "SG": {
        "message": "Singeapór"
    },
    "SH": {
        "message": "San Héilin"
    },
    "SI": {
        "message": "An tSlóvéin"
    },
    "SJ": {
        "message": "Svalbard agus Jan Mayen"
    },
    "SK": {
        "message": "An tSlóvaic"
    },
    "SL": {
        "message": "Siarra Leon"
    },
    "SM": {
        "message": "San Mairíne"
    },
    "SN": {
        "message": "An tSeineagáil"
    },
    "SO": {
        "message": "An tSomáil"
    },
    "SR": {
        "message": "Suranam"
    },
    "ST": {
        "message": "Sao Tome agus Principe"
    },
    "SU": {
        "message": "Aontas na bPoblachtaí Sóivéadacha Sóisialacha"
    },
    "SV": {
        "message": "An tSalvadóir"
    },
    "SY": {
        "message": "An tSiria"
    },
    "SZ": {
        "message": "An tSuasalainn"
    },
    "Safe": {
        "message": "Sábháilte"
    },
    "Safe mode": {
        "message": "Mód sábháilte"
    },
    "Save": {
        "message": "Sábháil"
    },
    "Saved Videos": {
        "message": "Sábháilte Físeáin"
    },
    "Saved for later": {
        "message": "Sábháilte do déanaí"
    },
    "Search video title": {
        "message": "Teideal físeán Cuardaigh"
    },
    "Select a Country": {
        "message": "Roghnaigh Tír"
    },
    "Select site to unblock": {
        "message": "Roghnaigh suíomh a unblock"
    },
    "Server saved!": {
        "message": "Freastalaí shábháil!"
    },
    "Set safe mode for $1 $2": {
        "message": "Mód sábháilte Socraigh ar $1 $2"
    },
    "Settings": {
        "message": "Socruithe"
    },
    "Share": {
        "message": "Comhroinn"
    },
    "Share $1 on $2": {
        "message": "Comhroinn $1 ar $2"
    },
    "Share $1 via $2": {
        "message": "Comhroinn $1 trí $2"
    },
    "Share with friends!": {
        "message": "Comhroinn le cairde!"
    },
    "Sign up": {
        "message": "Cláraigh"
    },
    "Solve buffering": {
        "message": "Réitigh mhaolánaithe"
    },
    "Solve buffering problems with": {
        "message": "Réitigh fadhbanna mhaolánaithe le"
    },
    "Solves it": {
        "message": "Réitíonn sé"
    },
    "Staff Picks": {
        "message": "Picks Foirne"
    },
    "Start Hola": {
        "message": "tús a chur"
    },
    "Starting...": {
        "message": "Ag tosú..."
    },
    "Stopping peer routing...": {
        "message": "Stopadh ródú piaraí..."
    },
    "Stream": {
        "message": "Sruth"
    },
    "Stream Instantly": {
        "message": "Sruth Láithreach"
    },
    "Submit": {
        "message": "Cuir"
    },
    "Support Hola": {
        "message": "Tacaíocht Hola"
    },
    "TC": {
        "message": "Oileáin Turks agus Caicos"
    },
    "TD": {
        "message": "Sead"
    },
    "TF": {
        "message": "Críocha Deisceartacha na Fraince"
    },
    "TG": {
        "message": "Tóga"
    },
    "TH": {
        "message": "An Téalainn"
    },
    "TJ": {
        "message": "An Táidsíceastáin"
    },
    "TK": {
        "message": "Tócalá"
    },
    "TL": {
        "message": "Tíomór Thoir"
    },
    "TM": {
        "message": "An Tuircméanastáin"
    },
    "TN": {
        "message": "An Túinéis"
    },
    "TR": {
        "message": "An Tuirc"
    },
    "TT": {
        "message": "Oileáin na Tríonóide agus Tobága"
    },
    "TV": {
        "message": "Túválú"
    },
    "TW": {
        "message": "An Téaváin"
    },
    "TZ": {
        "message": "An Tansáin"
    },
    "Talk to us on $1": {
        "message": "Labhair linn ar $1"
    },
    "Tell friends about $1": {
        "message": "Inis cairde thart ar $1"
    },
    "Testing connection...": {
        "message": "Nasc Tástáil..."
    },
    "Thank you!": {
        "message": "Go raibh maith agat!"
    },
    "There seems to be an error": {
        "message": "Dealraíonn sé go bhfuil earráid"
    },
    "Top popular sites": {
        "message": "Láithreáin tóir Barr"
    },
    "Translate to your language": {
        "message": "Aistrigh le do theanga"
    },
    "Try again": {
        "message": "Bain triail eile as"
    },
    "Try another server": {
        "message": "Bain triail as freastalaí eile"
    },
    "Try it": {
        "message": "Bain triail as"
    },
    "Try safe mode": {
        "message": "Bain triail as mód sábháilte"
    },
    "Try to <span>reload</span>": {
        "message": "Bain triail as a <span> reload </span>"
    },
    "Trying another peer...": {
        "message": "Ag iarraidh piaraí eile..."
    },
    "Turn off Accelerator": {
        "message": "Múch Luasaire"
    },
    "Turn off Hola": {
        "message": "Múch Hola"
    },
    "Turn on Accelerator": {
        "message": "Cas ar Luasaire"
    },
    "Turn on Hola": {
        "message": "Cas ar Hola"
    },
    "Turn on to get started": {
        "message": "Cas ar chun tús a chur"
    },
    "UA": {
        "message": "An Úcráin"
    },
    "UG": {
        "message": "Úganda"
    },
    "UM": {
        "message": "Mion-Oileáin Imeallacha S.A.M."
    },
    "US": {
        "message": "Stáit Aontaithe Mheiriceá"
    },
    "UY": {
        "message": "Urugua"
    },
    "UZ": {
        "message": "Úisbéiceastáin"
    },
    "Unblocker is disabled": {
        "message": "Tá Unblocker faoi mhíchumas"
    },
    "Update": {
        "message": "Nuashonraigh"
    },
    "Upgrade": {
        "message": "Nuashonraigh"
    },
    "Using": {
        "message": "Ag baint úsáide as"
    },
    "Using Hola": {
        "message": "Ag baint úsáide as Hola"
    },
    "VA": {
        "message": "An Vatacáin"
    },
    "VC": {
        "message": "Saint Vincent agus na Grenadines"
    },
    "VD": {
        "message": "Vítneam Thuaidh"
    },
    "VE": {
        "message": "Veiniséala"
    },
    "VG": {
        "message": "Oileáin Bhriotanacha na Maighdean"
    },
    "VI": {
        "message": "Oileáin na Maighdean S.A.M."
    },
    "VN": {
        "message": "Vít Neam"
    },
    "VPN Premium": {
        "message": "VPN Préimh"
    },
    "VU": {
        "message": "Vanuatú"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Leagan an-aois de Chrome, <a> cothrom le dáta </a> Chrome a úsáid Hola"
    },
    "Video stuck?": {
        "message": "Video bhfostú?"
    },
    "Videos available for instant streaming": {
        "message": "Físeáin fáil le haghaidh sruthú toirt"
    },
    "WF": {
        "message": "Oileáin Vailís agus Futúna"
    },
    "WS": {
        "message": "Samó"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Want Hola ar gléasanna eile? (Xbox, PS, Apple teilifíse, iPhone ...). Cliceáil anseo"
    },
    "Want to know more?": {
        "message": "Want a fhios níos mó?"
    },
    "Watch Now": {
        "message": "Féach Anois"
    },
    "We found $1 videos": {
        "message": "Fuair ​​muid $1 físeáin"
    },
    "We will be in touch with you soon": {
        "message": "Beidh muid i dteagmháil leat go luath"
    },
    "Working!": {
        "message": "Ag obair!"
    },
    "Working?": {
        "message": "Ag obair?"
    },
    "Works on all sites but slower": {
        "message": "Oibreacha ar gach suíomh ach níos moille"
    },
    "YD": {
        "message": "Daon-Phoblacht Dhaonlathach Éimin"
    },
    "YE": {
        "message": "Éimin"
    },
    "Yes": {
        "message": "Is ea"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Ní mór duit a uasghrádú chun an leagan is déanaí de Opera a úsáid Hola. Preas <a>anseo</a> chun uasghrádú."
    },
    "ZA": {
        "message": "An Afraic Theas"
    },
    "ZM": {
        "message": "An tSaimbia"
    },
    "ZW": {
        "message": "An tSiombáib"
    },
    "ZZ": {
        "message": "Réigiún Anaithnid nó Neamhbhailí"
    },
    "app_desc": {
        "message": "Láithreáin ghréasáin Rochtain blocáilte i do thír féin, cuideachta nó ar scoil le Hola! Is Hola saor in aisce agus éasca le húsáid!"
    },
    "app_name": {
        "message": "Hola Níos Fearr Idirlín"
    },
    "back to": {
        "message": "ar ais go"
    },
    "changing...": {
        "message": "atá ag athrú..."
    },
    "cool sites": {
        "message": "láithreáin fionnuar"
    },
    "current site": {
        "message": "láithreán atá ann faoi láthair"
    },
    "day": {
        "message": "lá"
    },
    "days": {
        "message": "laethanta"
    },
    "even more...": {
        "message": "fiú níos mó..."
    },
    "mode": {
        "message": "Mód"
    },
    "more options...": {
        "message": "roghanna níos mó..."
    },
    "not working?": {
        "message": "nach bhfuil ag obair?"
    },
    "not working? try another server": {
        "message": "nach bhfuil ag obair? iarracht freastalaí eile"
    },
    "on this page": {
        "message": "ar an leathanach seo"
    },
    "sites that are censored": {
        "message": "láithreáin a bhfuil cinsireacht"
    },
    "start": {
        "message": "tús a chur"
    },
    "working? remember": {
        "message": "ag obair? cuimhnigh"
    }
};
return E; });