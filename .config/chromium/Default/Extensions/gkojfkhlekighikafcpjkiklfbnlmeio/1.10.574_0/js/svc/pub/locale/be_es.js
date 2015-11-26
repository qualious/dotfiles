'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " vía "
    },
    "$1 Buffering?": {
        "message": "¿$1 Buffering?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 de Hola para acceder $2\n\nHaga clic aquí para hacer lo mismo: $3\n\nSe instala de Hola, que me permite navegar por Internet más rápido y de acceso $4$5"
    },
    "$1 from $2": {
        "message": "$1 de $2"
    },
    "$1 not found": {
        "message": "$1 no encontrado"
    },
    "$1 via Hola": {
        "message": "$1 vía Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(algunas características de Hola no están disponibles en tu versión)"
    },
    "AC": {
        "message": "Isla de la Ascensión"
    },
    "AE": {
        "message": "Emiratos Árabes Unidos"
    },
    "AF": {
        "message": "Afganistán"
    },
    "AG": {
        "message": "Antigua y Barbuda"
    },
    "AI": {
        "message": "Anguila"
    },
    "AN": {
        "message": "Antillas Neerlandesas"
    },
    "AQ": {
        "message": "Antártida"
    },
    "AS": {
        "message": "Samoa Americana"
    },
    "AX": {
        "message": "Islas Åland"
    },
    "AZ": {
        "message": "Azerbaiyán"
    },
    "About": {
        "message": "Acerca de"
    },
    "About Hola": {
        "message": "Acerca de Hola"
    },
    "Accelerator": {
        "message": "Acelerador"
    },
    "Accelerator is": {
        "message": "El acelerador es"
    },
    "Access $1 - cool site!": {
        "message": "Acceso $1 - sitio fresco!"
    },
    "Access $1?": {
        "message": "Acceder $1?"
    },
    "Access any site from any country, free": {
        "message": "Accede a cualquier sitio desde cualquier país, gratis"
    },
    "Access cool sites": {
        "message": "Acceso a sitios frescos"
    },
    "Access more sites": {
        "message": "Accede a más sitios"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Acceso a sitios censurados en su país y acelerar su conexión a Internet con Hola - ¡Gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Acceso a $1 con Hola"
    },
    "Account": {
        "message": "Cuenta"
    },
    "Account type": {
        "message": "Tipo de cuenta"
    },
    "Activating...": {
        "message": "Activación..."
    },
    "All ($1)": {
        "message": "Todos ($1)"
    },
    "Apply settings...": {
        "message": "Aplicar configuración..."
    },
    "Author site:": {
        "message": "Sitio del autor:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "¡Genial!"
    },
    "BA": {
        "message": "Bosnia-Herzegovina"
    },
    "BE": {
        "message": "Bélgica"
    },
    "BH": {
        "message": "Bahréin"
    },
    "BJ": {
        "message": "Benín"
    },
    "BL": {
        "message": "San Bartolomé"
    },
    "BM": {
        "message": "Bermudas"
    },
    "BN": {
        "message": "Brunéi"
    },
    "BQ": {
        "message": "Territorio Antártico Británico"
    },
    "BR": {
        "message": "Brasil"
    },
    "BT": {
        "message": "Bután"
    },
    "BV": {
        "message": "Isla Bouvet"
    },
    "BW": {
        "message": "Botsuana"
    },
    "BY": {
        "message": "Bielorrusia"
    },
    "BZ": {
        "message": "Belice"
    },
    "Back to $1": {
        "message": "Volver a $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Sé el primero en tener Hola para iPhone e iPad - Regístrate ahora:"
    },
    "Browsing": {
        "message": "Navegando"
    },
    "Buffering problems?": {
        "message": "¿Problemas de buffer?"
    },
    "Buffering?": {
        "message": "¿Buffering?"
    },
    "CA": {
        "message": "Canadá"
    },
    "CC": {
        "message": "Islas Cocos"
    },
    "CD": {
        "message": "República Democrática del Congo"
    },
    "CF": {
        "message": "República Centroafricana"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Suiza"
    },
    "CI": {
        "message": "Costa de Marfil"
    },
    "CK": {
        "message": "Islas Cook"
    },
    "CM": {
        "message": "Camerún"
    },
    "CP": {
        "message": "La isla Clipperton"
    },
    "CS": {
        "message": "Serbia y Montenegro"
    },
    "CT": {
        "message": "Cantón y Islas Enderbury"
    },
    "CV": {
        "message": "Cabo Verde"
    },
    "CX": {
        "message": "Isla Christmas"
    },
    "CY": {
        "message": "Chipre"
    },
    "CZ": {
        "message": "República Checa"
    },
    "Changing country...": {
        "message": "Cambiando de país..."
    },
    "Check out Hola for $1!": {
        "message": "Echa un vistazo a Hola por $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Salida de Hola para dispositivos móviles"
    },
    "Check your Internet connection": {
        "message": "Comprueba tu conexión a Internet"
    },
    "Choose<br>Country": {
        "message": "Elige<br>País"
    },
    "Configuring...": {
        "message": "Configurando..."
    },
    "Connecting...": {
        "message": "Conectando..."
    },
    "Cool site!": {
        "message": "Genial sitio!"
    },
    "Creative licenses": {
        "message": "Las licencias Creative"
    },
    "DD": {
        "message": "Alemania del Este"
    },
    "DE": {
        "message": "Alemania"
    },
    "DG": {
        "message": "Diego García"
    },
    "DJ": {
        "message": "Yibuti"
    },
    "DK": {
        "message": "Dinamarca"
    },
    "DO": {
        "message": "República Dominicana"
    },
    "DZ": {
        "message": "Argelia"
    },
    "Delete": {
        "message": "Borrar"
    },
    "Deleted from my list": {
        "message": "Borrado de mi lista"
    },
    "Did it work?": {
        "message": "¿Ha funcionado?"
    },
    "Did you experience any buffering?": {
        "message": "¿Has experimentado buffering?"
    },
    "Disliked it": {
        "message": "No me gustó que"
    },
    "Don't show again for $1 for one week": {
        "message": "No mostrar de nuevo por $1 durante una semana"
    },
    "Don't show again for any site for one week": {
        "message": "No mostrar de nuevo en ningún sitio durante una semana"
    },
    "Downloading": {
        "message": "Descargando"
    },
    "EA": {
        "message": "Ceuta y Melilla"
    },
    "EG": {
        "message": "Egipto"
    },
    "EH": {
        "message": "Sáhara Occidental"
    },
    "ES": {
        "message": "España"
    },
    "ET": {
        "message": "Etiopía"
    },
    "EU": {
        "message": "Union Europea"
    },
    "Enable": {
        "message": "Habilitar"
    },
    "Enable Hola Accelerator": {
        "message": "Habilitar acelerador Hola"
    },
    "Enjoy!": {
        "message": "¡A disfrutar!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Disfrutando de Hola para Chrome?"
    },
    "Enter site to access": {
        "message": "Introduce un sitio para acceder"
    },
    "Enter your email": {
        "message": "Intruduce tu correo electrónico"
    },
    "FI": {
        "message": "Finlandia"
    },
    "FJ": {
        "message": "Fiyi"
    },
    "FK": {
        "message": "Islas Malvinas"
    },
    "FO": {
        "message": "Islas Feroe"
    },
    "FQ": {
        "message": "Francés Tierras Australes y Antárticas"
    },
    "FR": {
        "message": "Francia"
    },
    "FX": {
        "message": "Francia metropolitana"
    },
    "Fast": {
        "message": "Rápido"
    },
    "Finding new peers...": {
        "message": "Buscando nuevos compañeros..."
    },
    "Finding peers...": {
        "message": "Buscando compañeros..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Desde"
    },
    "Full list": {
        "message": "Lista completa"
    },
    "GA": {
        "message": "Gabón"
    },
    "GB": {
        "message": "Reino Unido"
    },
    "GD": {
        "message": "Granada"
    },
    "GF": {
        "message": "Guayana Francesa"
    },
    "GL": {
        "message": "Groenlandia"
    },
    "GP": {
        "message": "Guadalupe"
    },
    "GQ": {
        "message": "Guinea Ecuatorial"
    },
    "GR": {
        "message": "Grecia"
    },
    "GS": {
        "message": "Islas Georgia del Sur y Sandwich del Sur"
    },
    "GY": {
        "message": "Guayana"
    },
    "Get 24/7 Unblocking": {
        "message": "Obtén desbloqueo 24/7"
    },
    "Get Free Premium": {
        "message": "Obten Premium gratis"
    },
    "Get Hola Accelerator": {
        "message": "Obtén el acelerador Hola"
    },
    "Get Hola Player": {
        "message": "Obtén el reproductor Hola"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Obtén Hola Plus para un servicio ininterrumpido y sin anuncios."
    },
    "Get Hola Premium": {
        "message": "Consigue Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Consigue Hola para Android"
    },
    "Get Premium support": {
        "message": "Obtén soporte Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Obtén el desbloqueo ilimitado"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Obtén acceso a sitios censurados, pruébalo ahora: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Consigue ayuda de un ingeniero a través de Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Obtén los servidores más rápidos"
    },
    "Go": {
        "message": "Ir"
    },
    "Go Hola Premium": {
        "message": "Ir a Hola Premium"
    },
    "HK": {
        "message": "Región Administrativa Especial de Hong Kong de la República Popular China"
    },
    "HM": {
        "message": "Islas Heard y McDonald"
    },
    "HR": {
        "message": "Croacia"
    },
    "HT": {
        "message": "Haití"
    },
    "HU": {
        "message": "Hungría"
    },
    "Hate it": {
        "message": "Lo odio"
    },
    "Help": {
        "message": "Ayuda"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nLo estoy usando"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hola,\n\nEmpecé usando $1 ($2). Ello me permitió navegar por Internet más rápido y acceder $3 en mi país."
    },
    "Hola Accelerator": {
        "message": "Acelerador Hola"
    },
    "Hola Media Player": {
        "message": "Reproductor Multimedia Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola no puede funcionar porque otra extensión está controlando tu configuración de proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola no funciona bien en modo Windows 8. Por favor, cambia a modo escritorio. Clic <a>aquí</a> para obtener instrucciones"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola no está disponible en este momento, pero estamos trabajando en ello."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola esá apagado, haz clic encima para encender"
    },
    "Hola site list": {
        "message": "Lista de sitios de Hola"
    },
    "I can now access $1 from any country!": {
        "message": "Ahora puedo acceder a $1 de cualquier país!"
    },
    "I did not experience any buffering": {
        "message": "No he experimentado buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Acabo de acceder a un sitio censurado usando Hola por $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Estoy usando $1 para ver $2 en mi país, y navegar más rápido!"
    },
    "IC": {
        "message": "Islas Canarias"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IM": {
        "message": "Isla de Man"
    },
    "IO": {
        "message": "Territorio Británico del Océano Índico"
    },
    "IQ": {
        "message": "Irak"
    },
    "IR": {
        "message": "Irán"
    },
    "IS": {
        "message": "Islandia"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Mejora la traducción"
    },
    "Initializing...": {
        "message": "Iniciando..."
    },
    "Install": {
        "message": "Instalar"
    },
    "Install Accelerator": {
        "message": "Instalar acelerador"
    },
    "Install Free Hola Accelerator": {
        "message": "Instalar el acelerador de Hola gratuito"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instale de Hola motor para seguir utilizando de Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Ver instantáneamente cualquier vídeo torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Invitar a amigos - Premium gratis."
    },
    "Invite friends. Get Premium.": {
        "message": "Invita a amigos. Obtén Premium."
    },
    "It was okay": {
        "message": "Estuvo bien"
    },
    "JO": {
        "message": "Jordania"
    },
    "JP": {
        "message": "Japón"
    },
    "KE": {
        "message": "Kenia"
    },
    "KG": {
        "message": "Kirguistán"
    },
    "KH": {
        "message": "Camboya"
    },
    "KM": {
        "message": "Comoras"
    },
    "KN": {
        "message": "San Cristóbal y Nieves"
    },
    "KP": {
        "message": "Corea del Norte"
    },
    "KR": {
        "message": "Corea del Sur"
    },
    "KY": {
        "message": "Islas Caimán"
    },
    "KZ": {
        "message": "Kazajistán"
    },
    "LB": {
        "message": "Líbano"
    },
    "LC": {
        "message": "Santa Lucía"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Lituania"
    },
    "LU": {
        "message": "Luxemburgo"
    },
    "LV": {
        "message": "Letonia"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Idioma"
    },
    "Library": {
        "message": "Biblioteca"
    },
    "Like it": {
        "message": "Gusta"
    },
    "Loading": {
        "message": "Cargando"
    },
    "Loading site...": {
        "message": "Cargando sitio..."
    },
    "Log in": {
        "message": "Entrar"
    },
    "Log out": {
        "message": "Salir"
    },
    "Love Hola?": {
        "message": "¿Te gusta Hola?"
    },
    "Love it": {
        "message": "Lo amo"
    },
    "MA": {
        "message": "Marruecos"
    },
    "MC": {
        "message": "Mónaco"
    },
    "MD": {
        "message": "Moldavia"
    },
    "MF": {
        "message": "San Martín"
    },
    "MH": {
        "message": "Islas Marshall"
    },
    "MI": {
        "message": "Islas Midway"
    },
    "ML": {
        "message": "Malí"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Región Administrativa Especial de Macao de la República Popular China"
    },
    "MP": {
        "message": "Islas Marianas del Norte"
    },
    "MQ": {
        "message": "Martinica"
    },
    "MU": {
        "message": "Mauricio"
    },
    "MV": {
        "message": "Maldivas"
    },
    "MW": {
        "message": "Malaui"
    },
    "MX": {
        "message": "México"
    },
    "MY": {
        "message": "Malasia"
    },
    "Make your Internet better with $1": {
        "message": "Mejora tu Internet por $1"
    },
    "Menu": {
        "message": "Menú"
    },
    "Might not work on all sites": {
        "message": "Puede que no funcione en todos los sitios"
    },
    "Mode": {
        "message": "Modo"
    },
    "More countries": {
        "message": "Más países"
    },
    "More sites...": {
        "message": "Más sitios..."
    },
    "More...": {
        "message": "Más..."
    },
    "My Account": {
        "message": "Mi cuenta"
    },
    "My History": {
        "message": "Mi Historia"
    },
    "My Settings": {
        "message": "Mi configuración"
    },
    "My favorites": {
        "message": "Mis favoritos"
    },
    "NC": {
        "message": "Nueva Caledonia"
    },
    "NE": {
        "message": "Níger"
    },
    "NF": {
        "message": "Isla Norfolk"
    },
    "NL": {
        "message": "Países Bajos"
    },
    "NO": {
        "message": "Noruega"
    },
    "NQ": {
        "message": "Tierra de la Reina Maud"
    },
    "NT": {
        "message": "Zona Neutral"
    },
    "NU": {
        "message": "Isla Niue"
    },
    "NZ": {
        "message": "Nueva Zelanda"
    },
    "Need Help?": {
        "message": "¿Necesitas ayuda?"
    },
    "Never ask me again": {
        "message": "Nunca preguntarme de nuevo"
    },
    "Never be a peer": {
        "message": "Nunca ser un compañero"
    },
    "No": {
        "message": "Sin"
    },
    "No idle peers found.": {
        "message": "No se han encontrado compañeros inactivos."
    },
    "No recent videos found": {
        "message": "No hay vídeos recientes encontraron"
    },
    "No saved videos found": {
        "message": "No hay videos guardados encontrados"
    },
    "No title": {
        "message": "Sin título"
    },
    "No videos found": {
        "message": "No hay vídeos"
    },
    "No videos found on active page": {
        "message": "No se encuentran en la página activa vídeos"
    },
    "No, Thanks": {
        "message": "No, gracias"
    },
    "No, fix it": {
        "message": "No, arréglalo"
    },
    "Not working?": {
        "message": "¿No funciona?"
    },
    "Number of users that pressed not working": {
        "message": "Número de usuarios que pulsaron no funciona"
    },
    "Number of users that use this option": {
        "message": "Número de usuarios que usan esta opción"
    },
    "OM": {
        "message": "Omán"
    },
    "Off": {
        "message": "Apagado"
    },
    "Oh, yes!": {
        "message": "Oh, sí!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versión de Firefox antigua. Pulsa <a>aquí</a> para actualizar."
    },
    "On": {
        "message": "Encendido"
    },
    "Open Media Player": {
        "message": "Abrir Reproductor de Medios"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Nuestro nuevo Reproductor Multimedia está a punto de llegar!"
    },
    "PA": {
        "message": "Panamá"
    },
    "PC": {
        "message": "Territorio Islas Fideicomiso del Pacífico"
    },
    "PE": {
        "message": "Perú"
    },
    "PF": {
        "message": "Polinesia Francesa"
    },
    "PG": {
        "message": "Papúa Nueva Guinea"
    },
    "PH": {
        "message": "Filipinas"
    },
    "PK": {
        "message": "Pakistán"
    },
    "PL": {
        "message": "Polonia"
    },
    "PM": {
        "message": "San Pedro y Miquelón"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestina"
    },
    "PU": {
        "message": "Varios estadounidenses Islas del Pacífico"
    },
    "PZ": {
        "message": "Zona del Canal de Panamá"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Por favor, deshabilita otras <a>extensiones</a> que creas que podrían estar controlando tu configuración de proxy, tales como bloqueadores de anuncios, otros servicios VPN, etc."
    },
    "Please enter a valid email address.": {
        "message": "Por favor, introduzca una dirección de correo válida."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Por favor, introduzca una dirección web, como google.com"
    },
    "Please help us get better": {
        "message": "Por favor, ayúdanos a mejorar"
    },
    "Popular in $1": {
        "message": "Popular en $1"
    },
    "Popular in the world": {
        "message": "Popular en el mundo"
    },
    "Popular sites": {
        "message": "Sitios populares"
    },
    "Premium": {
        "message": "Prima"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Periférico Oceanía"
    },
    "RE": {
        "message": "Reunión"
    },
    "RO": {
        "message": "Rumanía"
    },
    "RU": {
        "message": "Rusia"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Valorar con nosotros"
    },
    "Recent Videos": {
        "message": "Videos Recientes"
    },
    "Reload": {
        "message": "Recargar"
    },
    "Reload Hola": {
        "message": "Recargar Hola"
    },
    "Remember server": {
        "message": "Recordar servidor"
    },
    "Report a problem": {
        "message": "Informar de un problema"
    },
    "Retry safe mode": {
        "message": "Vuelva a intentar el modo seguro"
    },
    "SA": {
        "message": "Arabia Saudí"
    },
    "SB": {
        "message": "Islas Salomón"
    },
    "SD": {
        "message": "Sudán"
    },
    "SE": {
        "message": "Suecia"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Santa Elena"
    },
    "SI": {
        "message": "Eslovenia"
    },
    "SJ": {
        "message": "Svalbard y Jan Mayen"
    },
    "SK": {
        "message": "Eslovaquia"
    },
    "SL": {
        "message": "Sierra Leona"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Santo Tomé y Príncipe"
    },
    "SU": {
        "message": "Unión de Repúblicas Socialistas Soviéticas"
    },
    "SY": {
        "message": "Siria"
    },
    "SZ": {
        "message": "Suazilandia"
    },
    "Safe": {
        "message": "A salvo"
    },
    "Safe mode": {
        "message": "Modo seguro"
    },
    "Save": {
        "message": "Guardar"
    },
    "Saved Videos": {
        "message": "Vídeos guardados"
    },
    "Saved for later": {
        "message": "Guardado para más tarde"
    },
    "Search video title": {
        "message": "Buscar título de vídeo"
    },
    "Select a Country": {
        "message": "Selecciona un País"
    },
    "Select site to unblock": {
        "message": "Selecciona un sitio para desbloquearlo"
    },
    "Server saved!": {
        "message": "¡Servidor guardado!"
    },
    "Set safe mode for $1 $2": {
        "message": "Modo seguro Ajuste por $1 $2"
    },
    "Settings": {
        "message": "Configuración"
    },
    "Share": {
        "message": "Compartir"
    },
    "Share $1 on $2": {
        "message": "Compartir $1 en $2"
    },
    "Share $1 via $2": {
        "message": "Compartir $1 a través de $2"
    },
    "Share with friends!": {
        "message": "¡Compartir con amigos!"
    },
    "Sign up": {
        "message": "Crear cuenta"
    },
    "Solve buffering": {
        "message": "Arreglar buffering"
    },
    "Solve buffering problems with": {
        "message": "Arreglar problemas de buffering con"
    },
    "Solves it": {
        "message": "Lo soluciona"
    },
    "Staff Picks": {
        "message": "Selecciones del personal"
    },
    "Start Hola": {
        "message": "Iniciar Hola"
    },
    "Starting...": {
        "message": "Iniciando..."
    },
    "Stop Hola": {
        "message": "Detener Hola"
    },
    "Stopping peer routing...": {
        "message": "Deteniendo el rutado por pares..."
    },
    "Stream": {
        "message": "Corriente"
    },
    "Stream Instantly": {
        "message": "Transmitan al instante"
    },
    "Submit": {
        "message": "Enviar"
    },
    "Support Hola": {
        "message": "Apoya Hola"
    },
    "TA": {
        "message": "Tristán da Cunha"
    },
    "TC": {
        "message": "Islas Turcas y Caicos"
    },
    "TF": {
        "message": "Territorios Australes Franceses"
    },
    "TG": {
        "message": "Ir"
    },
    "TH": {
        "message": "Tailandia"
    },
    "TJ": {
        "message": "Tayikistán"
    },
    "TL": {
        "message": "Timor Oriental"
    },
    "TM": {
        "message": "Turkmenistán"
    },
    "TN": {
        "message": "Túnez"
    },
    "TR": {
        "message": "Turquía"
    },
    "TT": {
        "message": "Trinidad y Tobago"
    },
    "TW": {
        "message": "Taiwán"
    },
    "Talk to us on $1": {
        "message": "Habla con nosotros en $1"
    },
    "Tell friends about $1": {
        "message": "Cuéntales a tus amigos $1"
    },
    "Testing connection...": {
        "message": "Comprobando conexión..."
    },
    "Thank you!": {
        "message": "¡Gracias!"
    },
    "There seems to be an error": {
        "message": "Parece que hay un error"
    },
    "Top popular sites": {
        "message": "Top sitios populares"
    },
    "Translate to your language": {
        "message": "Traduce a tu idioma"
    },
    "Try again": {
        "message": "Prueba otra vez"
    },
    "Try another server": {
        "message": "Prueba otro servidor"
    },
    "Try it": {
        "message": "Pruébalo"
    },
    "Try safe mode": {
        "message": "Pruebe el modo seguro"
    },
    "Try to <span>reload</span>": {
        "message": "Prueba <span>recargando</span>"
    },
    "Trying another peer...": {
        "message": "Probando otro par..."
    },
    "Turn off Accelerator": {
        "message": "Apagar acelerador"
    },
    "Turn off Hola": {
        "message": "Apagar Hola"
    },
    "Turn on Accelerator": {
        "message": "Encender el acelerador"
    },
    "Turn on Hola": {
        "message": "Encender Hola"
    },
    "Turn on to get started": {
        "message": "Enciéndelo para empezar"
    },
    "UA": {
        "message": "Ucrania"
    },
    "UM": {
        "message": "Islas menores alejadas de los Estados Unidos"
    },
    "US": {
        "message": "Estados Unidos"
    },
    "UZ": {
        "message": "Uzbekistán"
    },
    "Unblocker": {
        "message": "Desbloqueador"
    },
    "Unblocker is disabled": {
        "message": "El desbloqueador está deshabilitado"
    },
    "Unblocker?": {
        "message": "¿Desbloqueador?"
    },
    "Update": {
        "message": "Actualizar"
    },
    "Upgrade": {
        "message": "Mejorar"
    },
    "Using": {
        "message": "Utilizando"
    },
    "Using Hola": {
        "message": "Usando Hola"
    },
    "VA": {
        "message": "Ciudad del Vaticano"
    },
    "VC": {
        "message": "San Vicente y las Granadinas"
    },
    "VD": {
        "message": "Vietnam del Norte"
    },
    "VG": {
        "message": "Islas Vírgenes Británicas"
    },
    "VI": {
        "message": "Islas Vírgenes de los Estados Unidos"
    },
    "VPN": {
        "message": "RPV"
    },
    "VPN Premium": {
        "message": "VPN premium"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Versión de Chrome muy vieja, <a>actualiza</a> Chrome para usar Hola"
    },
    "Video": {
        "message": "Vídeo"
    },
    "Video stuck?": {
        "message": "¿Vídeo atascado?"
    },
    "Videos available for instant streaming": {
        "message": "Videos disponibles para streaming instantáneo"
    },
    "WF": {
        "message": "Wallis y Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "¿Quieres Hola en otros dispositivos? (Xbox, PS, Apple TV, iPhone...). Pulsa aquí"
    },
    "Want to know more?": {
        "message": "¿Quieres saber más?"
    },
    "Watch Now": {
        "message": "Ver ahora"
    },
    "We found $1 videos": {
        "message": "Encontramos $1 vídeos"
    },
    "We will be in touch with you soon": {
        "message": "Nos pondremos en contacto contigo pronto"
    },
    "Working!": {
        "message": "¡Funcionando!"
    },
    "Working?": {
        "message": "¿Funciona?"
    },
    "Works on all sites but slower": {
        "message": "Funciona en todos los sitios, pero más lentos"
    },
    "YD": {
        "message": "República Democrática Popular del Yemen"
    },
    "Yes": {
        "message": "Sí"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Tienes que actualizar a la última versión de Opera para usar Hola. Pulsa <a>aquí</a> para actualizar."
    },
    "ZA": {
        "message": "Sudáfrica"
    },
    "ZW": {
        "message": "Zimbabue"
    },
    "ZZ": {
        "message": "Región desconocida o no válida"
    },
    "app_desc": {
        "message": "¡Accede a sitios web bloqueados en tu país, compañía o colegio con Hola! ¡Hola es gratis y fácil de usar!"
    },
    "app_name": {
        "message": "Hola mejor Internet"
    },
    "back to": {
        "message": "volver a"
    },
    "changing...": {
        "message": "cambiando..."
    },
    "cool sites": {
        "message": "sitios frescos"
    },
    "current site": {
        "message": "sitio actual"
    },
    "day": {
        "message": "jornada"
    },
    "days": {
        "message": "día"
    },
    "even more...": {
        "message": "aun más..."
    },
    "mode": {
        "message": "modo"
    },
    "more options...": {
        "message": "más opciones..."
    },
    "not working?": {
        "message": "¿No funciona?"
    },
    "not working? try another server": {
        "message": "¿No funciona? Prueba otro servidor"
    },
    "on this page": {
        "message": "en esta página"
    },
    "sites that are censored": {
        "message": "sitios censurados"
    },
    "start": {
        "message": "Empezar"
    },
    "working? remember": {
        "message": "¿Funciona? Recordar"
    }
};
return E; });