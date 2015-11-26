'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " drwy "
    },
    "$1 Buffering?": {
        "message": "Ydy $1 yn byffro?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola i gyrchu $2\n\nCliciwch yma i wneud yr un fath: $3\n\nMae'n gosod Hola, sy'n gadael i mi syrffio'r rhyngrwyd yn gyflymach ac yn cyrchu $4$5"
    },
    "$1 VPN": {
        "message": "Rhithrwydwaith Breifat (VPN) $1"
    },
    "$1 VPN Premium": {
        "message": "Rhithrwydwaith Breifat (VPN) Premiwm $1"
    },
    "$1 from $2": {
        "message": "$1 o $2"
    },
    "$1 not found": {
        "message": "$1 heb ei ganfod"
    },
    "$1 via Hola": {
        "message": "$1 drwy Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Nid yw rhai nodweddion Hola ar gael ar eich fersiwn chi)"
    },
    "AC": {
        "message": "Ynys Ascension"
    },
    "AE": {
        "message": "Yr Emiradau Arabaidd Unedig"
    },
    "AF": {
        "message": "Affganistan"
    },
    "AG": {
        "message": "Antigwa a Barbiwda"
    },
    "AN": {
        "message": "Ynysoedd Caribî yr Iseldiroedd"
    },
    "AR": {
        "message": "Yr Ariannin"
    },
    "AS": {
        "message": "Samoa Americanaidd"
    },
    "AT": {
        "message": "Awstria"
    },
    "AU": {
        "message": "Awstralia"
    },
    "AX": {
        "message": "Ynysoedd Aland"
    },
    "About": {
        "message": "Ynglŷn"
    },
    "About Hola": {
        "message": "Ynghylch Hola"
    },
    "Accelerator": {
        "message": "Cyflymydd"
    },
    "Accelerator is": {
        "message": "Cyflymydd yn"
    },
    "Access $1 - cool site!": {
        "message": "Cyrchu $1 - safle cwl!"
    },
    "Access $1?": {
        "message": "Dad-rwystrwch $1?"
    },
    "Access any site from any country, free": {
        "message": "Cyrchwch unrhyw wefan o unrhyw wlad, yn rhad ac am ddim"
    },
    "Access cool sites": {
        "message": "Cyrchu safleoedd cwl"
    },
    "Access more sites": {
        "message": "Cyrchu mwy o safleoedd cwl"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Safleoedd Mynediad sensro yn eich gwlad ac yn cyflymu eich Rhyngrwyd gyda Hola - ddim!"
    },
    "Accessing $1 with Hola": {
        "message": "Cyrchu $1 gyda Hola"
    },
    "Account": {
        "message": "Cyfrif"
    },
    "Account type": {
        "message": "Math o gyfrif"
    },
    "Activating...": {
        "message": "Ysgogi..."
    },
    "All ($1)": {
        "message": "Mae pob ($1)"
    },
    "Apply settings...": {
        "message": "Gweithredu’r gosodiadau..."
    },
    "Author site:": {
        "message": "Awdur y wefan:"
    },
    "Author:": {
        "message": "Awdur:"
    },
    "Awesome!": {
        "message": "Gwych!"
    },
    "BA": {
        "message": "Bosnia a Hercegovina"
    },
    "BE": {
        "message": "Gwlad Belg"
    },
    "BG": {
        "message": "Bwlgaria"
    },
    "BM": {
        "message": "Bermwda"
    },
    "BO": {
        "message": "Bolifia"
    },
    "BQ": {
        "message": "Tirogaeth Antarctig Prydain"
    },
    "BR": {
        "message": "Brasil"
    },
    "BS": {
        "message": "Y Bahamas"
    },
    "BT": {
        "message": "Bhwtan"
    },
    "BV": {
        "message": "Ynys Bouvet"
    },
    "BY": {
        "message": "Belarws"
    },
    "Back to $1": {
        "message": "Yn ôl i $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Byddwch y cyntaf i gael Hola ar gyfer iPhone / iPad - Cofrestrwch nawr:"
    },
    "Browsing": {
        "message": "Yn pori"
    },
    "Buffering problems?": {
        "message": "Problemau byffro o hyd?"
    },
    "Buffering?": {
        "message": "Byffro o hyd?"
    },
    "CC": {
        "message": "Ynysoedd Cocos (Keeling)"
    },
    "CD": {
        "message": "Gweriniaeth Ddemocrataidd y Congo"
    },
    "CF": {
        "message": "Gweriniaeth Canol Affrica"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Y Swistir"
    },
    "CI": {
        "message": "Côte d&#39;Ivoire"
    },
    "CK": {
        "message": "Ynysoedd Cook"
    },
    "CM": {
        "message": "Y Camerwn"
    },
    "CN": {
        "message": "Tsiena"
    },
    "CP": {
        "message": "Ynys Clipperton"
    },
    "CS": {
        "message": "Serbia a Montenegro"
    },
    "CT": {
        "message": "Canton ac Ynysoedd Enderbury"
    },
    "CU": {
        "message": "Ciwba"
    },
    "CX": {
        "message": "Ynys y Nadolig"
    },
    "CZ": {
        "message": "Gweriniaeth Tsiec"
    },
    "Changing country...": {
        "message": "Wrthi’n newid gwlad..."
    },
    "Check out Hola for $1!": {
        "message": "Rhowch gynnig ar Hola i $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Edrychwch ar Hola ar gyfer dyfeisiau symudol"
    },
    "Check your Internet connection": {
        "message": "Gwiriwch fod cysylltiad â'r rhyngrwyd  gennych"
    },
    "Choose<br>Country": {
        "message": "Dewiswch<br>Wlad"
    },
    "Configuring...": {
        "message": "Wrthi’n ffurfweddu..."
    },
    "Connecting...": {
        "message": "Wrthi’n cysylltu..."
    },
    "Cool site!": {
        "message": "Safle cwl!"
    },
    "Creative licenses": {
        "message": "Trwyddedau creadigol"
    },
    "DD": {
        "message": "Gorllewin yr Almaen "
    },
    "DE": {
        "message": "Yr Almaen"
    },
    "DK": {
        "message": "Denmarc"
    },
    "DO": {
        "message": "Y Weriniaeth Ddominicaidd"
    },
    "Delete": {
        "message": "Dileu"
    },
    "Deleted from my list": {
        "message": "Dileu o fy rhestr"
    },
    "Did it work?": {
        "message": "A oedd yn gweithio?"
    },
    "Did you experience any buffering?": {
        "message": "Oeddech chi'n profi byffro o hyd?"
    },
    "Disliked it": {
        "message": "Casáu ei"
    },
    "Don't show again for $1 for one week": {
        "message": "Peidiwch â dangos eto am $1 am wythnos"
    },
    "Don't show again for any site for one week": {
        "message": "Peidiwch â dangos eto am unrhyw safle am wythnos"
    },
    "Downloading": {
        "message": "Wrthi’n lawrlwytho"
    },
    "EA": {
        "message": "Ceuta a Melilla"
    },
    "EC": {
        "message": "Ecwador"
    },
    "EG": {
        "message": "Yr Aifft"
    },
    "EH": {
        "message": "Gorllewin Sahara"
    },
    "ES": {
        "message": "Sbaen"
    },
    "EU": {
        "message": "Yr Undeb Ewropeaidd"
    },
    "Enable": {
        "message": "Galluogwch"
    },
    "Enable Hola Accelerator": {
        "message": "Galluogi Cyflymydd Hola"
    },
    "Enjoy!": {
        "message": "Mwynhewch!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Mwynhau Hola ar gyfer Chrome?"
    },
    "Enter site to access": {
        "message": "Cyrchwch y safle i’w ddefnyddio"
    },
    "Enter your email": {
        "message": "Rhowch eich e-bost"
    },
    "FI": {
        "message": "Y Ffindir"
    },
    "FK": {
        "message": "Ynysoedd y Falkland"
    },
    "FO": {
        "message": "Ynysoedd Ffaröe"
    },
    "FQ": {
        "message": "Tiriogaethau Antarctig a De Ffrainc "
    },
    "FR": {
        "message": "Ffrainc"
    },
    "FX": {
        "message": "Ffrainc Fetropolitan"
    },
    "Fast": {
        "message": "Cyflym"
    },
    "Finding new peers...": {
        "message": "Canfyddwch gyfoedion newydd..."
    },
    "Finding peers...": {
        "message": "Wrthi’n canfod cyfoedion..."
    },
    "Free": {
        "message": "Am ddim"
    },
    "From": {
        "message": "o"
    },
    "Full list": {
        "message": "Rhestr lawn"
    },
    "GB": {
        "message": "Prydain Fawr"
    },
    "GF": {
        "message": "Giana Ffrengig"
    },
    "GG": {
        "message": "Ynys y Garn"
    },
    "GL": {
        "message": "Yr Ynys Las"
    },
    "GN": {
        "message": "Gini"
    },
    "GQ": {
        "message": "Gini Gyhydeddol"
    },
    "GR": {
        "message": "Gwlad Groeg"
    },
    "GS": {
        "message": "Ynysoedd De Georgia a De Sandwich"
    },
    "Get 24/7 Unblocking": {
        "message": "Dad-rwystrwch 24/7"
    },
    "Get Free Premium": {
        "message": "Defnyddiwch Bremiwm am ddim"
    },
    "Get Hola Accelerator": {
        "message": "Defnyddiwch Cyflymydd Hola "
    },
    "Get Hola Player": {
        "message": "Cael Hola Chwaraewr"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Gosodwch Hola Plus i gael gwasanaeth rhag hysbysebion ac un sy'n ddi-dor."
    },
    "Get Hola Premium": {
        "message": "Defnyddiwch Bremiwm Hola"
    },
    "Get Hola for Android": {
        "message": "Defnyddiwch Hola ar gyfer Android"
    },
    "Get Premium support": {
        "message": "Cewch gefnogaeth Premiwm"
    },
    "Get Unlimited Unblocking": {
        "message": "Gosodwch Dad-rwystro heb gyfyngiadau"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Cyrchu safleoedd a rwystrwyd, rhowch gynnig arni nawr: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Gofynnwch am gymorth gan beiriannydd dros skype:"
    },
    "Get the Fastest Servers": {
        "message": "Gosodwch y Gweinyddwyr Cyflymach"
    },
    "Go": {
        "message": "Ewch"
    },
    "Go Hola Premium": {
        "message": "Gosodwch Bremiwm"
    },
    "HK": {
        "message": "Hong Cong"
    },
    "HM": {
        "message": "Ynys Heard ac Ynysoedd McDonald"
    },
    "HN": {
        "message": "Hondwras"
    },
    "HU": {
        "message": "Hwngari"
    },
    "Hate it": {
        "message": "Gasáu"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nDwi'n defnyddio"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Shwmae,\n\nDwi wedi dechrau defnyddio $1 ($2). Mae'n gadael imi syrffio'r rhyngrwyd yn gyflymach ac yn cael cyrchu $3 yn fy ngwlad."
    },
    "Hola Accelerator": {
        "message": " Cyflymydd Hola"
    },
    "Hola Media Player": {
        "message": "Hola Chyfryngau Chwaraewr"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Ni all Hola weithio oherwydd bod estyniad arall yn rheoli’ch gosodiadau dirprwy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Nid yw Hola yn gweithio'n dda gydag Windows 8. Newidiwch i ddull bwrdd gwaith. Cliciwch <a>yma</a> am gyfarwyddiadau"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Nid yw Hola ar gael ar hyn o bryd, ond yr ydym ceisio ei drwsio."
    },
    "Hola is off, click it to turn it on": {
        "message": "Mae Hola i ffwrdd, cliciwch i gynnau"
    },
    "Hola site list": {
        "message": "Rhestr gwefannau Hola"
    },
    "I can now access $1 from any country!": {
        "message": "Bellach, dwi’n gallu cyrchu $1 o unrhyw wlad!"
    },
    "I did not experience any buffering": {
        "message": "Doeddwn i ddim yn profi unrhyw byffro"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Dwi newydd gyrchu safle a rwystrwyd gan ddefnyddio Hola ar $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Dwi’n defnyddio $1 i weld $2 yn fy ngwlad i ac i syrffio’n gyflymach!"
    },
    "IC": {
        "message": "Yr Ynysoedd Dedwydd"
    },
    "IE": {
        "message": "Iwerddon"
    },
    "IM": {
        "message": "Ynys Manaw"
    },
    "IO": {
        "message": "Tiriogaeth Cefnfor India Prydain"
    },
    "IQ": {
        "message": "Irac"
    },
    "IS": {
        "message": "Gwlad yr Iâ"
    },
    "IT": {
        "message": "Yr Eidal"
    },
    "Improve translation": {
        "message": "Cynigiwch gyfieithiadau"
    },
    "Initializing...": {
        "message": "Wrthi'n ymgychwyn..."
    },
    "Install": {
        "message": "Gosod"
    },
    "Install Accelerator": {
        "message": "Gosod Cyflymydd"
    },
    "Install Free Hola Accelerator": {
        "message": "Gosod Hola Cyflymydd yn rhad ac am ddim "
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Gosod Hola Engine parhau i ddefnyddio Hola am ddim"
    },
    "Instantly watch any torrent Video": {
        "message": "Gyfisol wylio unrhyw torrent Fideo"
    },
    "Invite friends - free Premium.": {
        "message": "Gwahodd ffrindiau a chael Premiwm am ddim."
    },
    "Invite friends. Get Premium.": {
        "message": "Gwahodd ffrindiau a chael Premiwm"
    },
    "It was okay": {
        "message": "Roedd yn iawn"
    },
    "JO": {
        "message": "Yr Iorddonen"
    },
    "JP": {
        "message": "Siapan"
    },
    "JT": {
        "message": "Ynys Johnston"
    },
    "KE": {
        "message": "Cenia"
    },
    "KG": {
        "message": "Cirgistan"
    },
    "KN": {
        "message": "Saint Kitts a Nevis"
    },
    "KP": {
        "message": "Gogledd Corea"
    },
    "KR": {
        "message": "De Corea"
    },
    "KY": {
        "message": "Ynysoedd Cayman"
    },
    "LB": {
        "message": "Libanus"
    },
    "LT": {
        "message": "Lithwania"
    },
    "LU": {
        "message": "Lwcsembwrg"
    },
    "LV": {
        "message": "Latfia"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Iaith (Language)"
    },
    "Library": {
        "message": "Llyfrgell"
    },
    "Like it": {
        "message": "Hoffi"
    },
    "Loading": {
        "message": "Wrthi'n llwytho"
    },
    "Loading site...": {
        "message": "Wrthi'n llwytho’r safle..."
    },
    "Log in": {
        "message": "Mewngofnodi"
    },
    "Log out": {
        "message": "Allgofnodi"
    },
    "Love Hola?": {
        "message": "Caru Hola?"
    },
    "Love it": {
        "message": "Wrth eu bodd"
    },
    "MA": {
        "message": "Moroco"
    },
    "MD": {
        "message": "Moldofa"
    },
    "MH": {
        "message": "Ynysoedd Marshall"
    },
    "MI": {
        "message": "Midway Atoll"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Macau"
    },
    "MP": {
        "message": "Ynysoedd Gogledd Mariana"
    },
    "MR": {
        "message": "Mawritania"
    },
    "MU": {
        "message": "Mawrisiws"
    },
    "MX": {
        "message": "Mecsico"
    },
    "Make your Internet better with $1": {
        "message": "Gwnewch i'ch rhyngrwyd yn well gyda $1"
    },
    "Menu": {
        "message": "Dewislen"
    },
    "Might not work on all sites": {
        "message": "Efallai na fydd yn gweithio ar bob safle"
    },
    "Mode": {
        "message": "Modd"
    },
    "More countries": {
        "message": "Rhagor o wledydd"
    },
    "More sites...": {
        "message": "Rhagor o safleoedd..."
    },
    "More...": {
        "message": "Rhagor ..."
    },
    "My Account": {
        "message": "Fy Nghyfrif"
    },
    "My History": {
        "message": "Fy Hanes"
    },
    "My Settings": {
        "message": "Fy Ngosodiadau"
    },
    "My favorites": {
        "message": "Fy ffefrynnau i"
    },
    "NC": {
        "message": "Caledonia Newydd"
    },
    "NF": {
        "message": "Ynys Norfolk"
    },
    "NI": {
        "message": "Nicaragwa"
    },
    "NL": {
        "message": "Yr Iseldiroedd"
    },
    "NO": {
        "message": "Norwy"
    },
    "NR": {
        "message": "Nawrw"
    },
    "NT": {
        "message": "Parth Niwtral"
    },
    "NZ": {
        "message": "Seland Newydd"
    },
    "Need Help?": {
        "message": "Angen cymorth?"
    },
    "Never ask me again": {
        "message": "Peidiwch byth â gofyn imi eto"
    },
    "Never be a peer": {
        "message": "Peidiwch byth â bod yn gyfoed"
    },
    "No": {
        "message": "Na"
    },
    "No idle peers found.": {
        "message": "Ni chanfu cyfoedion segur."
    },
    "No recent videos found": {
        "message": "Dim fideos diweddar a geir"
    },
    "No saved videos found": {
        "message": "Dim fideos a arbedwyd hyd i"
    },
    "No title": {
        "message": "Dim teitl"
    },
    "No videos found": {
        "message": "Dim fideos o hyd"
    },
    "No videos found on active page": {
        "message": "Dim fideos ar dudalen gweithredol"
    },
    "No, Thanks": {
        "message": "Dim diolch"
    },
    "No, fix it": {
        "message": "Na. Trwsiwch"
    },
    "Not working?": {
        "message": "Ddim yn gweithio?"
    },
    "Number of users that pressed not working": {
        "message": "Y nifer o ddefnyddwyr a wasgodd 'Nid yw'n gweithio"
    },
    "Number of users that use this option": {
        "message": "Y nifer o ddefnyddwyr sy'n defnyddio'r dewis hwn"
    },
    "Off": {
        "message": "I ffwrdd"
    },
    "Oh, yes!": {
        "message": "Oedd!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Hen fersiwn o Firefox. Gwasgwch <a>yma</a> i uwchraddio."
    },
    "On": {
        "message": "Ymlaen"
    },
    "Open Media Player": {
        "message": "Agor y Chwaraewr Cyfryngau"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Mae ein chwaraewr m newydd sbon yn dod yn fuan!"
    },
    "PC": {
        "message": "Tiriogaeth Ymddiriedolaeth Ynysoedd y Môr Tawel"
    },
    "PE": {
        "message": "Perw"
    },
    "PF": {
        "message": "Polynesia Ffrainc"
    },
    "PG": {
        "message": "Papua Gini Newydd"
    },
    "PH": {
        "message": "Philipinau"
    },
    "PK": {
        "message": "Pacistan"
    },
    "PL": {
        "message": "Gwlad Pwyl"
    },
    "PM": {
        "message": "Saint Pierre a Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Tiriogaeth Palesteina"
    },
    "PT": {
        "message": "Portiwgal"
    },
    "PU": {
        "message": "Ynysoedd Pasiffig Amrywiol yr Unol Daleithiau"
    },
    "PZ": {
        "message": "Parth Camlas Panama"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Analluogwch <a>estyniadau</a> eraill y credwch y gallai reoli’ch gosodiadau dirprwy fel ad-atalyddion, gwasanaethau Rhithrwydweithiau Breifat eraill, ac ati"
    },
    "Please enter a valid email address.": {
        "message": "Rhowch gyfeiriad e-bost dilys."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Rhowch gyfeiriad gwefan, fel facebook.com"
    },
    "Please help us get better": {
        "message": "Helpwch inni wella"
    },
    "Popular in $1": {
        "message": "Poblogaidd yn: $1"
    },
    "Popular in the world": {
        "message": "Poblogaidd yn y byd"
    },
    "Popular sites": {
        "message": "Safleoedd poblogaidd"
    },
    "Premium": {
        "message": "Premiwm"
    },
    "QO": {
        "message": "Oceania Pellennig"
    },
    "RO": {
        "message": "Rwmania"
    },
    "RU": {
        "message": "Rwsia"
    },
    "Rate us": {
        "message": "Cyfradd ni"
    },
    "Recent Videos": {
        "message": "Fideos diweddar"
    },
    "Reload": {
        "message": "Ail-lwythwch"
    },
    "Reload Hola": {
        "message": "Ail-lwythwch Hola"
    },
    "Remember server": {
        "message": "Cofiwch y weinydd"
    },
    "Report a problem": {
        "message": "Rhowch wybod am broblem"
    },
    "Retry safe mode": {
        "message": "Ceisio eto 'n ddihangol ddelw"
    },
    "SA": {
        "message": "Sawdi-Arabia"
    },
    "SB": {
        "message": "Ynysoedd Solomon"
    },
    "SD": {
        "message": "Y Swdan"
    },
    "SI": {
        "message": "Slofenia"
    },
    "SJ": {
        "message": "Svalbard a Jan Mayen"
    },
    "SK": {
        "message": "Slofacia"
    },
    "SN": {
        "message": "Sénégal"
    },
    "SR": {
        "message": "Swrinam"
    },
    "ST": {
        "message": "Sao Tome a Principe"
    },
    "SU": {
        "message": "Undeb y Gweriniaethau Sofiet Sosialaidd"
    },
    "SV": {
        "message": "Salfador"
    },
    "Safe": {
        "message": "Diogel"
    },
    "Safe mode": {
        "message": "Modd Diogel"
    },
    "Save": {
        "message": "Cadw"
    },
    "Saved Videos": {
        "message": "Fideos a arbedwyd"
    },
    "Saved for later": {
        "message": "Ei arbed ar gyfer yn ddiweddarach"
    },
    "Search video title": {
        "message": "Chwilio teitl fideo"
    },
    "Select a Country": {
        "message": "Dewiswch Wlad"
    },
    "Select site to unblock": {
        "message": "Dewiswch safle i ddad-rwystro"
    },
    "Server saved!": {
        "message": "Coffwyd y gweinydd !"
    },
    "Set safe mode for $1 $2": {
        "message": "Gosod modd diogel ar gyfer $1 $2"
    },
    "Settings": {
        "message": "Gosodiadau"
    },
    "Share": {
        "message": "Rhannwch"
    },
    "Share $1 on $2": {
        "message": "Rhannwch $1 ar $2"
    },
    "Share $1 via $2": {
        "message": "Rhannwch $1 drwy $2"
    },
    "Share with friends!": {
        "message": "Rhannu gyda ffrindiau!"
    },
    "Sign up": {
        "message": "Cofrestrwch"
    },
    "Solve buffering": {
        "message": "Datrys byffro"
    },
    "Solve buffering problems with": {
        "message": "Datrys problemau byffro gyda"
    },
    "Solves it": {
        "message": "Datrys ef"
    },
    "Staff Picks": {
        "message": "Detholiadau'r Staff"
    },
    "Start Hola": {
        "message": "Dechrau Hola"
    },
    "Starting...": {
        "message": "Wrthi'n dechrau ..."
    },
    "Stop Hola": {
        "message": "Stopio Hola"
    },
    "Stopping peer routing...": {
        "message": "Wrthi’n stopio llwybro cyfoedion ..."
    },
    "Stream": {
        "message": "Ffrwd"
    },
    "Stream Instantly": {
        "message": "Ffrwd Gyfisol"
    },
    "Submit": {
        "message": "Cyflwyno"
    },
    "Support Hola": {
        "message": "Cymorth Hola"
    },
    "TC": {
        "message": "Ynysoedd Turks a Caicos"
    },
    "TF": {
        "message": "Tiriogaethau Ffrengig y De"
    },
    "TH": {
        "message": "Gwlad Thai"
    },
    "TJ": {
        "message": "Tajicistan"
    },
    "TM": {
        "message": "Tyrcmenistan"
    },
    "TN": {
        "message": "Tiwnisia"
    },
    "TR": {
        "message": "Twrci"
    },
    "TT": {
        "message": "Trinidad a Thobago"
    },
    "TV": {
        "message": "Twfalw"
    },
    "TZ": {
        "message": "Tansanïa"
    },
    "Talk to us on $1": {
        "message": "Siaradwch â ni ar $1"
    },
    "Tell friends about $1": {
        "message": "Dywedwch wrth ffrindiau am $1"
    },
    "Testing connection...": {
        "message": "Wrthi’n profi’r cysylltiad..."
    },
    "Thank you!": {
        "message": "Diolch yn fawr!"
    },
    "There seems to be an error": {
        "message": "Ymddengys fod gwall"
    },
    "Top popular sites": {
        "message": "Prif safleoedd poblogaidd"
    },
    "Translate to your language": {
        "message": "Cyfieithwch i mewn i'ch iaith chi"
    },
    "Try again": {
        "message": "Ceisiwch eto"
    },
    "Try another server": {
        "message": "Rhowch gynnig ar weinydd arall"
    },
    "Try it": {
        "message": "Rhowch gynnig arni"
    },
    "Try safe mode": {
        "message": "Rhowch gynnig ar ddihangol ddelw"
    },
    "Try to <span>reload</span>": {
        "message": "Ceisiwch <span>ail-lwytho</span>"
    },
    "Trying another peer...": {
        "message": "Wrthi’n rhoi cynnig ar gyfoed arall ..."
    },
    "Turn off Accelerator": {
        "message": "Diffoddwch Gyflymydd"
    },
    "Turn off Hola": {
        "message": "Diffoddwch Hola"
    },
    "Turn on Accelerator": {
        "message": "Cyneuwch Gyflymydd"
    },
    "Turn on Hola": {
        "message": "Cyneuwch Hola"
    },
    "Turn on to get started": {
        "message": "Cyneuwch i ddechrau arni"
    },
    "UA": {
        "message": "Wcráin"
    },
    "UM": {
        "message": "Mân Ynysoedd Pellennig yr Unol Daleithiau"
    },
    "US": {
        "message": "Yr Unol Daleithiau"
    },
    "UZ": {
        "message": "Wsbecistan"
    },
    "Unblocker": {
        "message": "Dad-rwystrydd"
    },
    "Unblocker is disabled": {
        "message": "Analluogir y dad-rwystrydd"
    },
    "Unblocker?": {
        "message": "Dad-rwystrydd?"
    },
    "Update": {
        "message": "Diweddarwch"
    },
    "Upgrade": {
        "message": "Uwchraddiwch"
    },
    "Using": {
        "message": "Defnyddio"
    },
    "Using Hola": {
        "message": "Defnyddio Hola"
    },
    "VA": {
        "message": "Y Fatican"
    },
    "VC": {
        "message": "Saint Vincent a’r Grenadines"
    },
    "VD": {
        "message": "Gogledd Fietnam"
    },
    "VE": {
        "message": "Feneswela"
    },
    "VG": {
        "message": "Ynysoedd Prydeinig y Wyryf"
    },
    "VI": {
        "message": "Ynysoedd Americanaidd y Wyryf"
    },
    "VN": {
        "message": "Fietnam"
    },
    "VPN": {
        "message": "Rhithrwydwaith Breifat"
    },
    "VPN Premium": {
        "message": "Rhithrwydwaith Breifat Premiwm"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Fersiwn hen iawn o Chrome, <a>diweddarwch</a> Chrome i ddefnyddio Hola"
    },
    "Video": {
        "message": "Fideo"
    },
    "Video stuck?": {
        "message": "A yw’r fideo wedi oedi?"
    },
    "Videos available for instant streaming": {
        "message": "Fideos ar gael ar gyfer ffrydio ar unwaith"
    },
    "WF": {
        "message": "Wallis a Futuna"
    },
    "WK": {
        "message": "Ynys Wake"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Am osod Hola ar ddyfeisiau eraill? (Xbox, PS, Apple TV, iPhone ...). Cliciwch yma"
    },
    "Want to know more?": {
        "message": "Am wybod ragor?"
    },
    "Watch Now": {
        "message": "Gwyliwch Nawr"
    },
    "We found $1 videos": {
        "message": "Canfuom $1 fideos"
    },
    "We will be in touch with you soon": {
        "message": "Byddwn yn cysylltu â chi yn fuan"
    },
    "Working!": {
        "message": "Mae’n gweithio!"
    },
    "Working?": {
        "message": "Ydy'n gweithio?"
    },
    "Works on all sites but slower": {
        "message": "Gwaith ar bob safle, ond yn arafach"
    },
    "YD": {
        "message": "De Yemen"
    },
    "Yes": {
        "message": "Ydy"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Mae angen uwchraddio i'r fersiwn diweddaraf o Opera arnoch i ddefnyddio Hola. Gwasgwch <a>yma</a> i uwchraddio."
    },
    "ZA": {
        "message": "De Affrica"
    },
    "ZM": {
        "message": "Sambia"
    },
    "ZW": {
        "message": "Simbabwe"
    },
    "ZZ": {
        "message": "Anhysbys neu Ranbarth Annilys "
    },
    "app_desc": {
        "message": "Cyrchu gwefannau a rwystrir yn eich gwlad, cwmni, neu ysgol chi gyda Hola! Mae Hola am ddim ac yn rhwydd i’w ddefnyddio!"
    },
    "app_name": {
        "message": "Rhyngrwyd Well Hola"
    },
    "back to": {
        "message": "yn ôl i"
    },
    "changing...": {
        "message": "wrthi'n newid ..."
    },
    "cool sites": {
        "message": "safleoedd cŵl"
    },
    "current site": {
        "message": "safle cyfredol"
    },
    "day": {
        "message": "diwrnod"
    },
    "days": {
        "message": "diwrnod"
    },
    "even more...": {
        "message": "hyd yn oed mwy ..."
    },
    "mode": {
        "message": "Modd"
    },
    "more options...": {
        "message": "rhagor o ddewisiadau..."
    },
    "not working?": {
        "message": "ddim yn gweithio?"
    },
    "not working? try another server": {
        "message": "ddim yn gweithio? rhowch gynnig ar weinydd arall"
    },
    "on this page": {
        "message": "ar y dudalen hon"
    },
    "sites that are censored": {
        "message": "safleoedd sy'n cael eu sensro"
    },
    "start": {
        "message": "dechreuwch"
    },
    "working? remember": {
        "message": "yn gweithio? cofier!"
    }
};
return E; });