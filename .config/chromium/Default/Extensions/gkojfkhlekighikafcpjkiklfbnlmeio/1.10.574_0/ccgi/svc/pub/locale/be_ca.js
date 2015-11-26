'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "via"
    },
    "$1 Buffering?": {
        "message": "$1 buffering?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola per accedir $2\n\nCliqueu aquí per fer el mateix: $3\n\nS'instal la de Hola, que em permet navegar per Internet més ràpid i d'accés $4 $5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN premium"
    },
    "$1 from $2": {
        "message": "$1 de $2"
    },
    "$1 not found": {
        "message": "$1 trobat"
    },
    "$1 via Hola": {
        "message": "$1 a través de Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(algunes funcionalitat d'Hola no estan disponibles amb la vostra versió)"
    },
    "AC": {
        "message": "Illa de l&#39;Ascensió"
    },
    "AE": {
        "message": "Unió dels Emirats Àrabs"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua i Barbuda"
    },
    "AI": {
        "message": "Anguila"
    },
    "AL": {
        "message": "Albània"
    },
    "AM": {
        "message": "Armènia"
    },
    "AN": {
        "message": "Antilles Neerlandeses"
    },
    "AQ": {
        "message": "Antàrtida"
    },
    "AS": {
        "message": "Samoa Americana"
    },
    "AT": {
        "message": "Àustria"
    },
    "AU": {
        "message": "Austràlia"
    },
    "AX": {
        "message": "Illes Åland"
    },
    "AZ": {
        "message": "Azerbaidjan"
    },
    "About": {
        "message": "Sobre"
    },
    "About Hola": {
        "message": "Sobre Hola"
    },
    "Accelerator": {
        "message": "Accelerador"
    },
    "Accelerator is": {
        "message": "Accelerator és"
    },
    "Access $1 - cool site!": {
        "message": "Accés $1 - cool site!"
    },
    "Access $1?": {
        "message": "Accedeixi a $1?"
    },
    "Access any site from any country, free": {
        "message": "Accediu a qualsevol lloc web des de qualsevol país!"
    },
    "Access cool sites": {
        "message": "Accés a llocs frescos"
    },
    "Access more sites": {
        "message": "Accedir a més llocs"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Accés a llocs censurats al seu país i accelerar la seva connexió a Internet amb Hola - gratuïts"
    },
    "Accessing $1 with Hola": {
        "message": "Accés a $1 amb Hola"
    },
    "Account": {
        "message": "Compte"
    },
    "Account type": {
        "message": "Tipus de compte"
    },
    "Activating...": {
        "message": "Activació..."
    },
    "All ($1)": {
        "message": "Tots ($1)"
    },
    "Apply settings...": {
        "message": "Aplicar la configuració ..."
    },
    "Author site:": {
        "message": "Lloc de l'autor:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Impressionant!"
    },
    "BA": {
        "message": "Bòsnia i Hercegovina"
    },
    "BD": {
        "message": "Bangla Desh"
    },
    "BE": {
        "message": "Bèlgica"
    },
    "BG": {
        "message": "Bulgària"
    },
    "BJ": {
        "message": "Benín"
    },
    "BL": {
        "message": "Sant Bartomeu"
    },
    "BM": {
        "message": "Bermudes"
    },
    "BO": {
        "message": "Bolívia"
    },
    "BQ": {
        "message": "Territori Antàrtic Britànic"
    },
    "BR": {
        "message": "Brasil"
    },
    "BS": {
        "message": "Bahames"
    },
    "BV": {
        "message": "Illa Bouvet"
    },
    "BY": {
        "message": "Bielorússia"
    },
    "Back to $1": {
        "message": "Tornar a $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Sigues el primer a obtenir hola per l'iPhone / iPad - Inscrigui ara:"
    },
    "Browsing": {
        "message": "Navegació"
    },
    "Buffering problems?": {
        "message": "Problemes de memòria?"
    },
    "CA": {
        "message": "Canadà"
    },
    "CC": {
        "message": "Illes Cocos"
    },
    "CD": {
        "message": "República Democràtica del Congo"
    },
    "CF": {
        "message": "República Centreafricana"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Suïssa"
    },
    "CI": {
        "message": "Costa d’Ivori"
    },
    "CK": {
        "message": "Illes Cook"
    },
    "CL": {
        "message": "Xile"
    },
    "CM": {
        "message": "Camerun"
    },
    "CN": {
        "message": "Xina"
    },
    "CO": {
        "message": "Colòmbia"
    },
    "CP": {
        "message": "L&#39;illa Clipperton"
    },
    "CS": {
        "message": "Sèrbia i Montenegro"
    },
    "CT": {
        "message": "Cantó i Illes Enderbury"
    },
    "CV": {
        "message": "Cap Verd"
    },
    "CX": {
        "message": "Illa Christmas"
    },
    "CY": {
        "message": "Xipre"
    },
    "CZ": {
        "message": "República Txeca"
    },
    "Changing country...": {
        "message": "Canviar país ..."
    },
    "Check out Hola for $1!": {
        "message": "Fes un cop d'ull de Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Sortida de Hola per a dispositius mòbils"
    },
    "Check your Internet connection": {
        "message": "Comproveu que estigueu connectat a Internet"
    },
    "Choose<br>Country": {
        "message": "Triar<br>País"
    },
    "Configuring...": {
        "message": "Configuració ..."
    },
    "Connecting...": {
        "message": "Connectant ..."
    },
    "Cool site!": {
        "message": "Cool web!"
    },
    "Creative licenses": {
        "message": "Les llicències Creative"
    },
    "DD": {
        "message": "Alemanya de l&#39;Est"
    },
    "DE": {
        "message": "Alemanya"
    },
    "DG": {
        "message": "Diego García"
    },
    "DK": {
        "message": "Dinamarca"
    },
    "DO": {
        "message": "República Dominicana"
    },
    "DZ": {
        "message": "Algèria"
    },
    "Delete": {
        "message": "Esborrar"
    },
    "Deleted from my list": {
        "message": "Esborrat de la cistella"
    },
    "Did it work?": {
        "message": "¿Va funcionar?"
    },
    "Did you experience any buffering?": {
        "message": "¿Va experimentar alguna buffering?"
    },
    "Disliked it": {
        "message": "No em va agradar que"
    },
    "Don't show again for $1 for one week": {
        "message": "No mostrar de nou per $1 per una setmana"
    },
    "Don't show again for any site for one week": {
        "message": "No mostrar de nou per qualsevol lloc per una setmana"
    },
    "Downloading": {
        "message": "Descàrrega"
    },
    "EA": {
        "message": "Ceuta i Melilla"
    },
    "EC": {
        "message": "Equador"
    },
    "EE": {
        "message": "Estònia"
    },
    "EG": {
        "message": "Egipte"
    },
    "EH": {
        "message": "Sàhara Occidental"
    },
    "ES": {
        "message": "Espanya"
    },
    "ET": {
        "message": "Etiòpia"
    },
    "EU": {
        "message": "Unió Europea"
    },
    "Enable": {
        "message": "Activa"
    },
    "Enable Hola Accelerator": {
        "message": "Activar Accelerador de Hola"
    },
    "Enjoy!": {
        "message": "Gaudiu!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Gaudint d&#39;Hola per Chrome?"
    },
    "Enter site to access": {
        "message": "Introduïu lloc per a l'accés"
    },
    "Enter your email": {
        "message": "Introduïu el vostre correu electrònic"
    },
    "FI": {
        "message": "Finlàndia"
    },
    "FK": {
        "message": "Illes Malvines"
    },
    "FM": {
        "message": "Micronèsia"
    },
    "FO": {
        "message": "Illes Fèroe"
    },
    "FQ": {
        "message": "Francès Terres australs i Antàrtiques"
    },
    "FR": {
        "message": "França"
    },
    "FX": {
        "message": "França metropolitana"
    },
    "Fast": {
        "message": "Ràpid"
    },
    "Finding new peers...": {
        "message": "Trobar nous companys ..."
    },
    "Finding peers...": {
        "message": "Trobar els seus companys ..."
    },
    "Free": {
        "message": "Lliure"
    },
    "From": {
        "message": "Des"
    },
    "Full list": {
        "message": "Llista completa"
    },
    "GB": {
        "message": "Regne Unit"
    },
    "GD": {
        "message": "Granada"
    },
    "GE": {
        "message": "Geòrgia"
    },
    "GF": {
        "message": "Guaiana Francesa"
    },
    "GL": {
        "message": "Grenlàndia"
    },
    "GM": {
        "message": "Gàmbia"
    },
    "GP": {
        "message": "Guadalupe"
    },
    "GQ": {
        "message": "Guinea Equatorial"
    },
    "GR": {
        "message": "Grècia"
    },
    "GS": {
        "message": "Illes Geòrgia del Sud i Sandwich del Sud"
    },
    "GW": {
        "message": "Guinea Bissau"
    },
    "GY": {
        "message": "Guaiana"
    },
    "Get 24/7 Unblocking": {
        "message": "Rep 24/7 de desbloqueig"
    },
    "Get Free Premium": {
        "message": "Obtenir gratis premium"
    },
    "Get Hola Accelerator": {
        "message": "Obtingui hola Accelerador"
    },
    "Get Hola Player": {
        "message": "Obtenir hola jugador"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Obteniu Hola Plus per a un servei sense interrupcions ni publicitat."
    },
    "Get Hola Premium": {
        "message": "Obtingui hola prima"
    },
    "Get Hola for Android": {
        "message": "Obtingui hola per Android"
    },
    "Get Premium support": {
        "message": "Obtingui assistència tècnica premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Obtenir il limitat de desbloqueig"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Obtenir accés als llocs censurats, prova-ho ara: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Obteniu ajuda d'un enginyer via Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Rep els servidors més ràpids"
    },
    "Go": {
        "message": "Anar"
    },
    "Go Hola Premium": {
        "message": "Anar de Hola prima"
    },
    "HK": {
        "message": "Regió administrativa especial xinesa de Hong Kong"
    },
    "HM": {
        "message": "Illa Heard i Illes McDonald"
    },
    "HN": {
        "message": "Hondures"
    },
    "HR": {
        "message": "Croàcia"
    },
    "HT": {
        "message": "Haití"
    },
    "HU": {
        "message": "Hongria"
    },
    "Hate it": {
        "message": "Odiar-ho"
    },
    "Help": {
        "message": "Ajudar"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nestic fent servir"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hola,\n\nvaig començar a utilitzar $1 ($2). Em permet navegar per Internet més ràpid i d'accés $3 al meu país."
    },
    "Hola Accelerator": {
        "message": "Hola Accelerador"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola no pot treballar a causa de una altra extensió està controlant la configuració del servidor intermediari."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola no funciona bé en mode Windows 8. Si us plau, canvieu al mode escriptori. <a>Instruccions</a>"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola no està disponible en aquest moment, però estem treballant en això."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola és apagat, feu clic a a encendre"
    },
    "Hola site list": {
        "message": "Llista de llocs a desbloquejar"
    },
    "I can now access $1 from any country!": {
        "message": "Ara puc accedir a $1 de qualsevol país!"
    },
    "I did not experience any buffering": {
        "message": "No vaig experimentar cap buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Jo només vaig accedir a un lloc censurat l'ús de Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Estic usant $1 de $2 veure al meu país, i navegar més ràpid!"
    },
    "IC": {
        "message": "Canàries"
    },
    "ID": {
        "message": "Indonèsia"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IM": {
        "message": "Illa de Man"
    },
    "IN": {
        "message": "Índia"
    },
    "IO": {
        "message": "Territori Britànic de l'Oceà Índic"
    },
    "IS": {
        "message": "Islàndia"
    },
    "IT": {
        "message": "Itàlia"
    },
    "Improve translation": {
        "message": "Milloreu la traducció"
    },
    "Initializing...": {
        "message": "Inicialitzant ..."
    },
    "Install": {
        "message": "Instal · lar"
    },
    "Install Accelerator": {
        "message": "Instal · lar Accelerador"
    },
    "Install Free Hola Accelerator": {
        "message": "Instal gratis Hola Accelerador"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instal de Hola motor per seguir utilitzant de Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Veure instantàniament qualsevol torrent vídeo"
    },
    "Invite friends - free Premium.": {
        "message": "Convida als teus amics - la prima."
    },
    "Invite friends. Get Premium.": {
        "message": "Convida als teus amics. Obtingui premium."
    },
    "It was okay": {
        "message": "Estava bé"
    },
    "JE": {
        "message": "Jersei"
    },
    "JO": {
        "message": "Jordània"
    },
    "JP": {
        "message": "Japó"
    },
    "KG": {
        "message": "Kirguizistan"
    },
    "KH": {
        "message": "Cambodja"
    },
    "KM": {
        "message": "Comores"
    },
    "KN": {
        "message": "Saint Christopher i Nevis"
    },
    "KP": {
        "message": "Corea del Nord"
    },
    "KR": {
        "message": "Corea del Sud"
    },
    "KY": {
        "message": "Illes Caiman"
    },
    "LB": {
        "message": "Líban"
    },
    "LC": {
        "message": "Santa Llúcia"
    },
    "LR": {
        "message": "Libèria"
    },
    "LT": {
        "message": "Lituània"
    },
    "LU": {
        "message": "Luxemburg"
    },
    "LV": {
        "message": "Letònia"
    },
    "LY": {
        "message": "Líbia"
    },
    "Language": {
        "message": "Idioma"
    },
    "Library": {
        "message": "Biblioteca"
    },
    "Like it": {
        "message": "M&#39;agrada"
    },
    "Loading": {
        "message": "Carregant"
    },
    "Loading site...": {
        "message": "Loading"
    },
    "Log in": {
        "message": "Inicia sessió"
    },
    "Log out": {
        "message": "Finalitzar la sessió"
    },
    "Love Hola?": {
        "message": "Amor de Hola?"
    },
    "Love it": {
        "message": "M'encanta"
    },
    "MA": {
        "message": "Marroc"
    },
    "MC": {
        "message": "Mònaco"
    },
    "MD": {
        "message": "Moldàvia"
    },
    "MH": {
        "message": "Illes Marshall"
    },
    "MI": {
        "message": "Illes Midway"
    },
    "MK": {
        "message": "Macedònia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongòlia"
    },
    "MO": {
        "message": "Regió administrativa especial xinesa de Macau"
    },
    "MP": {
        "message": "Illes Mariannes del Nord"
    },
    "MQ": {
        "message": "Martinica"
    },
    "MR": {
        "message": "Mauritània"
    },
    "MU": {
        "message": "Maurici"
    },
    "MX": {
        "message": "Mèxic"
    },
    "MY": {
        "message": "Malàisia"
    },
    "MZ": {
        "message": "Moçambic"
    },
    "Make your Internet better with $1": {
        "message": "Faci la seva millor Internet amb $1"
    },
    "Menu": {
        "message": "Menú"
    },
    "Might not work on all sites": {
        "message": "Potser no funcioni en tots els llocs"
    },
    "More countries": {
        "message": "Més països"
    },
    "More sites...": {
        "message": "més..."
    },
    "More...": {
        "message": "més..."
    },
    "My Account": {
        "message": "El meu compte"
    },
    "My History": {
        "message": "El meu Història"
    },
    "My Settings": {
        "message": "Els meus Opcions"
    },
    "My favorites": {
        "message": "Els meus preferits"
    },
    "NA": {
        "message": "Namíbia"
    },
    "NC": {
        "message": "Nova Caledònia"
    },
    "NE": {
        "message": "Níger"
    },
    "NF": {
        "message": "Illa Norfolk"
    },
    "NG": {
        "message": "Nigèria"
    },
    "NL": {
        "message": "Països Baixos"
    },
    "NO": {
        "message": "Noruega"
    },
    "NQ": {
        "message": "Terra de la Reina Maud"
    },
    "NT": {
        "message": "Zona Neutral"
    },
    "NZ": {
        "message": "Nova Zelanda"
    },
    "Need Help?": {
        "message": "Necessites ajuda?"
    },
    "Never ask me again": {
        "message": "Mai em pregunti de nou"
    },
    "Never be a peer": {
        "message": "Mai tinguis un company"
    },
    "No idle peers found.": {
        "message": "No s'han trobat companys d'inactivitat."
    },
    "No recent videos found": {
        "message": "No hi ha vídeos recents trobar"
    },
    "No saved videos found": {
        "message": "No hi ha vídeos guardats trobats"
    },
    "No title": {
        "message": "Sense títol"
    },
    "No videos found": {
        "message": "No hi ha vídeos"
    },
    "No videos found on active page": {
        "message": "No es troben a la pàgina activa vídeos"
    },
    "No, Thanks": {
        "message": "No, gràcies"
    },
    "No, fix it": {
        "message": "No, arreglar"
    },
    "Not working?": {
        "message": "No funciona?"
    },
    "Number of users that pressed not working": {
        "message": "Quantitat d'usuaris que han indicat que no els funciona"
    },
    "Number of users that use this option": {
        "message": "Quantitat d'usuaris que utilitzen aquesta opció"
    },
    "Off": {
        "message": "Desactivat"
    },
    "Oh, yes!": {
        "message": "Oh, sí!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versió antiga del Firefox. Premeu <a>aquí</a> per a actualitzar-lo."
    },
    "On": {
        "message": "Actiu"
    },
    "Open Media Player": {
        "message": "Obrir Reproductor de Mitjans"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "La nostra nova marca Mplayer és molt aviat!"
    },
    "PA": {
        "message": "Panamà"
    },
    "PC": {
        "message": "Territori Illes Fideïcomís del Pacífic"
    },
    "PE": {
        "message": "Perú"
    },
    "PF": {
        "message": "Polinèsia Francesa"
    },
    "PG": {
        "message": "Papua Nova Guinea"
    },
    "PH": {
        "message": "Filipines"
    },
    "PL": {
        "message": "Polònia"
    },
    "PM": {
        "message": "Saint Pierre i Miquelon"
    },
    "PN": {
        "message": "Illes Pitcairn"
    },
    "PS": {
        "message": "Palestina"
    },
    "PU": {
        "message": "Diversos nord-americans Illes del Pacífic"
    },
    "PY": {
        "message": "Paraguai"
    },
    "PZ": {
        "message": "Zona del Canal de Panamà"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Si us plau, desactivi altres <a>extensions</a> que es creu que pot controlar la configuració del proxy com ad-bloquejants, altres serveis de VPN, etc"
    },
    "Please enter a valid email address.": {
        "message": "Introduïu una adreça de correu electrònic vàlida."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Introduïu una adreça de lloc web, com facebook.com"
    },
    "Please help us get better": {
        "message": "Si us plau, ajuda'ns a millorar"
    },
    "Popular in $1": {
        "message": "Popular a $1"
    },
    "Popular in the world": {
        "message": "Populars en el món"
    },
    "Popular sites": {
        "message": "Els llocs populars"
    },
    "Premium": {
        "message": "Prima"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Perifèric Oceania"
    },
    "RE": {
        "message": "Illa de la Reunió"
    },
    "RS": {
        "message": "Sèrbia"
    },
    "RU": {
        "message": "Rússia"
    },
    "Rate us": {
        "message": "Valoran's"
    },
    "Recent Videos": {
        "message": "Vídeos Recents"
    },
    "Reload": {
        "message": "Torna a carregar"
    },
    "Reload Hola": {
        "message": "Torna a carregar Hola"
    },
    "Remember server": {
        "message": "Recordi servidor"
    },
    "Report a problem": {
        "message": "Informar d'una incidència"
    },
    "Retry safe mode": {
        "message": "Torneu a intentar el mode segur"
    },
    "SA": {
        "message": "Aràbia Saudita"
    },
    "SB": {
        "message": "Illes Salomó"
    },
    "SE": {
        "message": "Suècia"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Santa Helena"
    },
    "SI": {
        "message": "Eslovènia"
    },
    "SJ": {
        "message": "Svalbard i Jan Mayen"
    },
    "SK": {
        "message": "Eslovàquia"
    },
    "SM": {
        "message": "Sant Marino"
    },
    "SO": {
        "message": "Somàlia"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "São Tomé i Príncipe"
    },
    "SU": {
        "message": "Unió de Repúbliques Socialistes Soviètiques"
    },
    "SY": {
        "message": "Síria"
    },
    "SZ": {
        "message": "Swazilàndia"
    },
    "Safe": {
        "message": "Segura"
    },
    "Safe mode": {
        "message": "Mode segur"
    },
    "Save": {
        "message": "Guardar"
    },
    "Saved Videos": {
        "message": "Vídeos guardats"
    },
    "Saved for later": {
        "message": "Guardat per més tard"
    },
    "Search video title": {
        "message": "Cercar títol de vídeo"
    },
    "Select a Country": {
        "message": "Seleccioneu un país"
    },
    "Select site to unblock": {
        "message": "Seleccioneu el lloc per desbloquejar"
    },
    "Server saved!": {
        "message": "Servidor salvat!"
    },
    "Set safe mode for $1 $2": {
        "message": "Mode segur Ajust de $1 $2"
    },
    "Settings": {
        "message": "Configuració"
    },
    "Share": {
        "message": "Quota"
    },
    "Share $1 on $2": {
        "message": "Comparteix $1 a $2"
    },
    "Share $1 via $2": {
        "message": "Comparteix $1 a través de $2"
    },
    "Share with friends!": {
        "message": "Compartir amb els amics!"
    },
    "Sign up": {
        "message": "Contractar"
    },
    "Solve buffering": {
        "message": "Resoldre buffering"
    },
    "Solve buffering problems with": {
        "message": "Resoldre problemes d'emmagatzematge amb"
    },
    "Solves it": {
        "message": "Resol que"
    },
    "Staff Picks": {
        "message": "Seleccions del personal"
    },
    "Start Hola": {
        "message": "comença"
    },
    "Starting...": {
        "message": "començant..."
    },
    "Stop Hola": {
        "message": "Parada de Hola"
    },
    "Stopping peer routing...": {
        "message": "Detenció d'enrutament de parells ..."
    },
    "Stream": {
        "message": "Corrent"
    },
    "Stream Instantly": {
        "message": "Transmetin a l&#39;instant"
    },
    "Submit": {
        "message": "Presentar"
    },
    "Support Hola": {
        "message": "Suport de Hola"
    },
    "TA": {
        "message": "Tristán dóna Cunha"
    },
    "TC": {
        "message": "Illes Turks i Caicos"
    },
    "TD": {
        "message": "Txad"
    },
    "TF": {
        "message": "Territoris Francesos del Sud"
    },
    "TG": {
        "message": "Anar"
    },
    "TH": {
        "message": "Tailàndia"
    },
    "TJ": {
        "message": "Tadjikistan"
    },
    "TL": {
        "message": "Timor Oriental"
    },
    "TN": {
        "message": "Tunísia"
    },
    "TR": {
        "message": "Turquia"
    },
    "TT": {
        "message": "Trinitat i Tobago"
    },
    "TZ": {
        "message": "Tanzània"
    },
    "Talk to us on $1": {
        "message": "Parli amb nosaltres a $1"
    },
    "Tell friends about $1": {
        "message": "Digueu-li als seus amics voltant de $1"
    },
    "Testing connection...": {
        "message": "Provant la connexió ..."
    },
    "Thank you!": {
        "message": "Gràcies!"
    },
    "There seems to be an error": {
        "message": "Sembla que s'ha produït un error"
    },
    "Top popular sites": {
        "message": "Top llocs populars"
    },
    "Translate to your language": {
        "message": "Traduïu a la vostra llengua"
    },
    "Try again": {
        "message": "Ho a provar"
    },
    "Try another server": {
        "message": "Proveu amb un altre servidor"
    },
    "Try it": {
        "message": "Proveu"
    },
    "Try safe mode": {
        "message": "Proveu el mode segur"
    },
    "Try to <span>reload</span>": {
        "message": "Proveu de <span>tornar a carregar</span>"
    },
    "Trying another peer...": {
        "message": "Tractant altre company ..."
    },
    "Turn off Accelerator": {
        "message": "Apagueu accelerador"
    },
    "Turn off Hola": {
        "message": "Apagueu d'Hola"
    },
    "Turn on Accelerator": {
        "message": "Enceneu l'accelerador"
    },
    "Turn on Hola": {
        "message": "Girar sobre l'Hola"
    },
    "Turn on to get started": {
        "message": "Activa per a començar"
    },
    "UA": {
        "message": "Ucraïna"
    },
    "UM": {
        "message": "Illes Perifèriques Menors dels EUA"
    },
    "US": {
        "message": "Estats Units"
    },
    "UY": {
        "message": "Uruguai"
    },
    "Unblocker": {
        "message": "Besbloquejador"
    },
    "Unblocker is disabled": {
        "message": "El desbloquejador està desactivat"
    },
    "Update": {
        "message": "Actualitza"
    },
    "Upgrade": {
        "message": "Actualitza"
    },
    "Using": {
        "message": "Utilitzant"
    },
    "Using Hola": {
        "message": "L'ús d'Hola"
    },
    "VA": {
        "message": "Vaticà"
    },
    "VC": {
        "message": "Saint Vincent i les Grenadines"
    },
    "VD": {
        "message": "Vietnam del Nord"
    },
    "VE": {
        "message": "Veneçuela"
    },
    "VG": {
        "message": "Illes Verges Britàniques"
    },
    "VI": {
        "message": "Illes Verges Nord-americanes"
    },
    "VPN Premium": {
        "message": "VPN premium"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Esteu utilitzant una versió molt antiga del Chrome, <a>actualitzeu</a> el Chrome per a utilitzar Hola"
    },
    "Video": {
        "message": "Vídeo"
    },
    "Video stuck?": {
        "message": "Vídeo enganxat?"
    },
    "Videos available for instant streaming": {
        "message": "Videos disponibles per streaming instantani"
    },
    "WF": {
        "message": "Wallis i Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Voleu utilitzar Hola en altres dispositius (Xbox, PS, iPhone...)? Premeu aquí"
    },
    "Want to know more?": {
        "message": "Vols saber més?"
    },
    "Watch Now": {
        "message": "Veure ara"
    },
    "We found $1 videos": {
        "message": "Trobem $1 vídeos"
    },
    "We will be in touch with you soon": {
        "message": "Ens posarem en contacte amb vostè en breu"
    },
    "Working!": {
        "message": "Treballar!"
    },
    "Working?": {
        "message": "Treballar?"
    },
    "Works on all sites but slower": {
        "message": "Funciona en tots els llocs, però més lents"
    },
    "YD": {
        "message": "República Democràtica Popular del Iemen"
    },
    "YE": {
        "message": "Iemen"
    },
    "Yes": {
        "message": "Sí"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Cal actualitzar a l'última versió d'Opera per usar d'Hola. Premi <a>aquí</a> per actualitzar."
    },
    "ZA": {
        "message": "República de Sud-àfrica"
    },
    "ZM": {
        "message": "Zàmbia"
    },
    "ZZ": {
        "message": "Regió desconeguda o no vàlida"
    },
    "app_desc": {
        "message": "Llocs web d'accés bloquejats al seu país, empresa o escola amb Hola! Hola és gratis i fàcil d'usar!"
    },
    "app_name": {
        "message": "Hola Internet millor"
    },
    "back to": {
        "message": "torna a"
    },
    "changing...": {
        "message": "s'està canviant..."
    },
    "cool sites": {
        "message": "llocs frescos"
    },
    "current site": {
        "message": "lloc actual"
    },
    "day": {
        "message": "jornada"
    },
    "days": {
        "message": "dia"
    },
    "even more...": {
        "message": "encara més..."
    },
    "mode": {
        "message": "manera"
    },
    "more options...": {
        "message": "més opcions ..."
    },
    "not working?": {
        "message": "no funciona?"
    },
    "not working? try another server": {
        "message": "no funciona? provi amb un altre servidor"
    },
    "on this page": {
        "message": "en aquesta pàgina"
    },
    "sites that are censored": {
        "message": "llocs que són censurades"
    },
    "start": {
        "message": "comença"
    },
    "working? remember": {
        "message": "treball? recordar"
    }
};
return E; });