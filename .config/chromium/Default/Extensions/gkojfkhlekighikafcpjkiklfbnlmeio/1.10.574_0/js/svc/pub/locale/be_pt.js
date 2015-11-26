'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " através "
    },
    "$1 Buffering?": {
        "message": "$1 A carregar?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola para aceder $2\n\nClica aqui para fazer o mesmo: $3\n\nInstala o Hola, que te permite de navegar na Internet mais rápido e de acesso $4$5"
    },
    "$1 from $2": {
        "message": "$1 de $2"
    },
    "$1 not found": {
        "message": "$1 não encontrado"
    },
    "$1 via Hola": {
        "message": "$1 através do Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Hola - alguns recursos não estão disponíveis na tua versão)"
    },
    "AC": {
        "message": "Ilha de Ascensão"
    },
    "AE": {
        "message": "Emirados Árabes Unidos"
    },
    "AF": {
        "message": "Afeganistão"
    },
    "AG": {
        "message": "Antígua e Barbuda"
    },
    "AI": {
        "message": "Anguila"
    },
    "AL": {
        "message": "Albânia"
    },
    "AM": {
        "message": "Arménia"
    },
    "AN": {
        "message": "Antilhas Holandesas"
    },
    "AQ": {
        "message": "Antárctida"
    },
    "AS": {
        "message": "Samoa Americana"
    },
    "AT": {
        "message": "Áustria"
    },
    "AU": {
        "message": "Austrália"
    },
    "AX": {
        "message": "Ilhas Åland"
    },
    "AZ": {
        "message": "Azerbaijão"
    },
    "About": {
        "message": "Acerca de"
    },
    "About Hola": {
        "message": "Acerca do Hola"
    },
    "Accelerator": {
        "message": "Acelerador"
    },
    "Accelerator is": {
        "message": "O Acelerador está"
    },
    "Access $1 - cool site!": {
        "message": "Acesso $1 – óptimo site!"
    },
    "Access $1?": {
        "message": "Acede $1?"
    },
    "Access any site from any country, free": {
        "message": "Acede a qualquer site a partir de qualquer país!"
    },
    "Access cool sites": {
        "message": "Óptimos sites a aceder"
    },
    "Access more sites": {
        "message": "Acede a mais sites"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Acessar sites censurados em seu país e acelerar o seu Internet com Hola - Grátis!"
    },
    "Accessing $1 with Hola": {
        "message": "A aceder $1 com Hola"
    },
    "Account": {
        "message": "Conta"
    },
    "Account type": {
        "message": "Tipo de conta"
    },
    "Activating...": {
        "message": "Ativando..."
    },
    "All ($1)": {
        "message": "Tudo ($1)"
    },
    "Apply settings...": {
        "message": "Aplicar definições..."
    },
    "Author site:": {
        "message": "Site do autor:"
    },
    "Author:": {
        "message": "Autor:"
    },
    "Awesome!": {
        "message": "Impressionante!"
    },
    "BA": {
        "message": "Bósnia-Herzegovina"
    },
    "BE": {
        "message": "Bélgica"
    },
    "BF": {
        "message": "Burquina Faso"
    },
    "BG": {
        "message": "Bulgária"
    },
    "BJ": {
        "message": "Benim"
    },
    "BL": {
        "message": "São Bartolomeu"
    },
    "BM": {
        "message": "Bermudas"
    },
    "BO": {
        "message": "Bolívia"
    },
    "BQ": {
        "message": "Território Antárctico Britânico"
    },
    "BR": {
        "message": "Brasil"
    },
    "BT": {
        "message": "Butão"
    },
    "BV": {
        "message": "Ilha Bouvet"
    },
    "BW": {
        "message": "Botsuana"
    },
    "BY": {
        "message": "Bielorrússia"
    },
    "Back to $1": {
        "message": "Voltar para $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Sê o primeiro a obter o Hola para iPhone / iPad - Inscreve-te agora:"
    },
    "Browsing": {
        "message": "Navegar"
    },
    "Buffering problems?": {
        "message": "Problemas com o carregamento?"
    },
    "Buffering?": {
        "message": "A carregar?"
    },
    "CA": {
        "message": "Canadá"
    },
    "CC": {
        "message": "Ilhas dos Cocos"
    },
    "CD": {
        "message": "Congo-Kinshasa"
    },
    "CF": {
        "message": "República Centro-Africana"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Suíça"
    },
    "CI": {
        "message": "Costa do Marfim"
    },
    "CK": {
        "message": "Ilhas Cook"
    },
    "CM": {
        "message": "República dos Camarões"
    },
    "CO": {
        "message": "Colômbia"
    },
    "CP": {
        "message": "Ilha de Clipperton"
    },
    "CS": {
        "message": "Sérvia e Montenegro"
    },
    "CT": {
        "message": "Ilhas Canton e Enderbury"
    },
    "CV": {
        "message": "Cabo Verde"
    },
    "CX": {
        "message": "Ilhas Natal"
    },
    "CY": {
        "message": "Chipre"
    },
    "CZ": {
        "message": "República Tcheca"
    },
    "Changing country...": {
        "message": "A alterar de País..."
    },
    "Check out Hola for $1!": {
        "message": "Confere o Hola por $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Confira Hola para dispositivos móveis"
    },
    "Check your Internet connection": {
        "message": "Verifica a ligação à Internet"
    },
    "Choose<br>Country": {
        "message": "Escolhe o <br>País"
    },
    "Configuring...": {
        "message": "A definir..."
    },
    "Connecting...": {
        "message": "A ligar..."
    },
    "Cool site!": {
        "message": "Óptimo site!"
    },
    "Creative licenses": {
        "message": "Licenças Creative"
    },
    "DD": {
        "message": "Alemanha Oriental"
    },
    "DE": {
        "message": "Alemanha"
    },
    "DJ": {
        "message": "Djibuti"
    },
    "DK": {
        "message": "Dinamarca"
    },
    "DO": {
        "message": "República Dominicana"
    },
    "DZ": {
        "message": "Argélia"
    },
    "Delete": {
        "message": "Eliminar"
    },
    "Deleted from my list": {
        "message": "Eliminar de a minha lista"
    },
    "Did it work?": {
        "message": "Funcionou?"
    },
    "Did you experience any buffering?": {
        "message": "Experimentaste algum carregamento?"
    },
    "Disliked it": {
        "message": "Não gostei"
    },
    "Don't show again for $1 for one week": {
        "message": "Não mostrar outra vez por $1 por uma semana"
    },
    "Don't show again for any site for one week": {
        "message": "Não mostrar de novo vários sites durante uma semana."
    },
    "Downloading": {
        "message": "A transferir"
    },
    "EA": {
        "message": "Ceuta e Melila"
    },
    "EC": {
        "message": "Equador"
    },
    "EE": {
        "message": "Estónia"
    },
    "EG": {
        "message": "Egipto"
    },
    "EH": {
        "message": "Saara Ocidental"
    },
    "ER": {
        "message": "Eritreia"
    },
    "ES": {
        "message": "Espanha"
    },
    "ET": {
        "message": "Etiópia"
    },
    "EU": {
        "message": "União Europeia"
    },
    "Enable": {
        "message": "Activar"
    },
    "Enable Hola Accelerator": {
        "message": "Activar o Acelerador do Hola"
    },
    "Enjoy!": {
        "message": "Diverte-te!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Apreciando Hola para o Chrome?"
    },
    "Enter site to access": {
        "message": "Introduz o site a aceder"
    },
    "Enter your email": {
        "message": "Introduz o teu e-mail"
    },
    "FI": {
        "message": "Finlândia"
    },
    "FK": {
        "message": "Ilhas Malvinas"
    },
    "FM": {
        "message": "Micronésia"
    },
    "FO": {
        "message": "Ilhas Feroé"
    },
    "FQ": {
        "message": "Terras Austrais e Antárcticas Francesas"
    },
    "FR": {
        "message": "França"
    },
    "FX": {
        "message": "França Metropolitana"
    },
    "Fast": {
        "message": "Rápido"
    },
    "Finding new peers...": {
        "message": "A procurar novos pares..."
    },
    "Finding peers...": {
        "message": "A procurar pares..."
    },
    "Free": {
        "message": "Grátis"
    },
    "From": {
        "message": "Para"
    },
    "Full list": {
        "message": "Lista completa"
    },
    "GA": {
        "message": "Gabão"
    },
    "GB": {
        "message": "Reino Unido"
    },
    "GD": {
        "message": "Granada"
    },
    "GE": {
        "message": "Geórgia"
    },
    "GF": {
        "message": "Guiana Francesa"
    },
    "GH": {
        "message": "Gana"
    },
    "GL": {
        "message": "Gronelândia"
    },
    "GM": {
        "message": "Gâmbia"
    },
    "GN": {
        "message": "Guiné"
    },
    "GP": {
        "message": "Guadalupe"
    },
    "GQ": {
        "message": "Guiné Equatorial"
    },
    "GR": {
        "message": "Grécia"
    },
    "GS": {
        "message": "Geórgia do Sul e Ilhas Sandwich do Sul"
    },
    "GW": {
        "message": "Guiné Bissau"
    },
    "GY": {
        "message": "Guiana"
    },
    "Get 24/7 Unblocking": {
        "message": "Obter um desbloqueio por 24/7"
    },
    "Get Free Premium": {
        "message": "Obter o Premium Grátis "
    },
    "Get Hola Accelerator": {
        "message": "Obter o Acelerador do Hola"
    },
    "Get Hola Player": {
        "message": "Obter o Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Obtém o Hola Plus para um serviço ininterrupto e livre de publicidade "
    },
    "Get Hola Premium": {
        "message": "Obter o Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Obter o Hola para Android"
    },
    "Get Premium support": {
        "message": "Obter suporte Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Obter um desbloqueio ilimitado"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Obtém acesso a sites censurados, experimenta-o agora: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Obter ajuda dum engenheiro pelo Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Obter os servidores mais rápidos"
    },
    "Go": {
        "message": "Ir"
    },
    "Go Hola Premium": {
        "message": "Ir para o Hola Premium"
    },
    "HK": {
        "message": "Hong Kong, Região Admin. Especial da China"
    },
    "HM": {
        "message": "Ilhas Heard e McDonald"
    },
    "HR": {
        "message": "Croácia"
    },
    "HU": {
        "message": "Hungria"
    },
    "Hate it": {
        "message": "Odeio"
    },
    "Help": {
        "message": "Ajuda"
    },
    "Hey,\n\nI'm using": {
        "message": "Ei,\n\neu estou a utilizar"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Olá,\n\neu comecei a utilizar $1 ($2). Ele permite-me de navegar na Internet mais rápido e aceder $3 ao meu país."
    },
    "Hola Accelerator": {
        "message": "Acelerador do Hola"
    },
    "Hola Media Player": {
        "message": "Media Player do Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "O Hola não consegue funcionar porque outra extensão está a controlar as definições de proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "O Hola não trabalha bem no modo Windows 8. Por favor muda para o modo do ambiente de trabalho. Clica <a>aqui</a> para instruções"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "O Hola não está disponível no momento, mas estamos a trabalhar nisso."
    },
    "Hola is off, click it to turn it on": {
        "message": "O Hola está desligado, clica em ligar"
    },
    "Hola site list": {
        "message": "Lista de sites desbloqueados"
    },
    "I can now access $1 from any country!": {
        "message": "Agora eu posso aceder $1 a partir de qualquer país!"
    },
    "I did not experience any buffering": {
        "message": "Eu não experimentei nenhum carregamento "
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Eu só acedi a um site censurado utilizando o Hola por $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Eu estou a utilizar $1 a $2 no meu país, e navego mais rápido!"
    },
    "IC": {
        "message": "Ilhas Canárias"
    },
    "ID": {
        "message": "Indonésia"
    },
    "IE": {
        "message": "Irlanda"
    },
    "IM": {
        "message": "Ilha de Man"
    },
    "IN": {
        "message": "Índia"
    },
    "IO": {
        "message": "Território Britânico do Oceano Índico"
    },
    "IQ": {
        "message": "Iraque"
    },
    "IR": {
        "message": "Irão"
    },
    "IS": {
        "message": "Islândia"
    },
    "IT": {
        "message": "Itália"
    },
    "Improve translation": {
        "message": "Ajuda a melhorar a tradução"
    },
    "Initializing...": {
        "message": "A iniciar..."
    },
    "Install": {
        "message": "Instalar"
    },
    "Install Accelerator": {
        "message": "Instala o Acelerador"
    },
    "Install Free Hola Accelerator": {
        "message": "Instalar o Acelerador do Hola Grátis"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instale Hola Engine para continuar usando Hola gratuitamente"
    },
    "Instantly watch any torrent Video": {
        "message": "Assistir instantaneamente a qualquer vídeo do torrente"
    },
    "Invite friends - free Premium.": {
        "message": "Convida os teus amigos - Premium Grátis."
    },
    "Invite friends. Get Premium.": {
        "message": "Convida os teus amigos. Adere ao Premium."
    },
    "It was okay": {
        "message": "Estava tudo bem"
    },
    "JO": {
        "message": "Jordânia"
    },
    "JP": {
        "message": "Japão"
    },
    "JT": {
        "message": "Atol Johnston"
    },
    "KE": {
        "message": "Quénia"
    },
    "KG": {
        "message": "Quirguízia"
    },
    "KH": {
        "message": "Camboja"
    },
    "KI": {
        "message": "Quiribati"
    },
    "KM": {
        "message": "Comores"
    },
    "KN": {
        "message": "São Cristóvão e Nevis"
    },
    "KP": {
        "message": "Coreia do Norte"
    },
    "KR": {
        "message": "Coreia do Sul"
    },
    "KW": {
        "message": "Kuweit"
    },
    "KY": {
        "message": "Ilhas Cayman"
    },
    "KZ": {
        "message": "Cazaquistão"
    },
    "LA": {
        "message": "República Popular Democrática do Laos"
    },
    "LB": {
        "message": "Líbano"
    },
    "LC": {
        "message": "Santa Lúcia"
    },
    "LR": {
        "message": "Libéria"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Lituânia"
    },
    "LU": {
        "message": "Luxemburgo"
    },
    "LV": {
        "message": "Letónia"
    },
    "LY": {
        "message": "Líbia"
    },
    "Language": {
        "message": "Língua"
    },
    "Library": {
        "message": "Biblioteca"
    },
    "Like it": {
        "message": "Gosto disso"
    },
    "Loading": {
        "message": "A carregar"
    },
    "Loading site...": {
        "message": "A carregar o site…"
    },
    "Log in": {
        "message": "Iniciar sessão"
    },
    "Log out": {
        "message": "Terminar sessão"
    },
    "Love Hola?": {
        "message": "Gostas do Hola?"
    },
    "Love it": {
        "message": "Adoro"
    },
    "MA": {
        "message": "Marrocos"
    },
    "MC": {
        "message": "Mónaco"
    },
    "MD": {
        "message": "Moldávia"
    },
    "MF": {
        "message": "São Martinho"
    },
    "MG": {
        "message": "Madagáscar"
    },
    "MH": {
        "message": "Ilhas Marshall"
    },
    "MI": {
        "message": "Atol Midway"
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
        "message": "Macau, Região Admin. Especial da China"
    },
    "MP": {
        "message": "Ilhas Marianas do Norte"
    },
    "MQ": {
        "message": "Martinica"
    },
    "MR": {
        "message": "Mauritânia"
    },
    "MU": {
        "message": "Maurício"
    },
    "MV": {
        "message": "Maldivas"
    },
    "MW": {
        "message": "Malavi"
    },
    "MX": {
        "message": "México"
    },
    "MY": {
        "message": "Malásia"
    },
    "MZ": {
        "message": "Moçambique"
    },
    "Make your Internet better with $1": {
        "message": "Faz uma melhor Internet com $1"
    },
    "Menu": {
        "message": "Painel"
    },
    "Might not work on all sites": {
        "message": "Poderá não funcionar em todos os sites"
    },
    "Mode": {
        "message": "Modo"
    },
    "More countries": {
        "message": "Mais países"
    },
    "More sites...": {
        "message": "Mais sites..."
    },
    "More...": {
        "message": "Mais..."
    },
    "My Account": {
        "message": "A minha conta"
    },
    "My History": {
        "message": "O meu histórico"
    },
    "My Settings": {
        "message": "As minhas definições"
    },
    "My favorites": {
        "message": "Os meus favoritos"
    },
    "NA": {
        "message": "Namíbia"
    },
    "NC": {
        "message": "Nova Caledónia"
    },
    "NE": {
        "message": "Níger"
    },
    "NF": {
        "message": "Ilha Norfolk"
    },
    "NG": {
        "message": "Nigéria"
    },
    "NI": {
        "message": "Nicarágua"
    },
    "NL": {
        "message": "Holanda"
    },
    "NO": {
        "message": "Noruega"
    },
    "NQ": {
        "message": "Terra da Rainha Maud"
    },
    "NT": {
        "message": "Zona Neutra (entre a Arábia Saudita e o Iraque)"
    },
    "NZ": {
        "message": "Nova Zelândia"
    },
    "Need Help?": {
        "message": "Precisas de Ajuda?"
    },
    "Never ask me again": {
        "message": "Por favor, não me perguntar outra vez."
    },
    "Never be a peer": {
        "message": "Nunca ser um par"
    },
    "No": {
        "message": "Não"
    },
    "No idle peers found.": {
        "message": "Não foram encontrados pares inactivos."
    },
    "No recent videos found": {
        "message": "Não há nenhum vídeo recentes encontrado"
    },
    "No saved videos found": {
        "message": "Não há vídeos guardados encontrado"
    },
    "No title": {
        "message": "Sem título"
    },
    "No videos found": {
        "message": "Não foram encontrados vídeos"
    },
    "No videos found on active page": {
        "message": "Não foram encontrados vídeos na página activa"
    },
    "No, Thanks": {
        "message": "Não, Obrigado"
    },
    "No, fix it": {
        "message": "Não, reparar"
    },
    "Not working?": {
        "message": "Não funciona?"
    },
    "Number of users that pressed not working": {
        "message": "Número de utilizadores que clicaram em \"não está a funcionar\""
    },
    "Number of users that use this option": {
        "message": "Número de utilizadores que utilizam esta opção"
    },
    "OM": {
        "message": "Omã"
    },
    "Off": {
        "message": "Desligado"
    },
    "Oh, yes!": {
        "message": "Oh, sim!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Tens uma versão antiga do Firefox. Clica <a>aqui</a> para actualizar."
    },
    "On": {
        "message": "Ligado"
    },
    "Open Media Player": {
        "message": "Abrir o Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "A nossa nova marca Mplayer está a chegar brevemente!"
    },
    "PA": {
        "message": "Panamá"
    },
    "PC": {
        "message": "Protectorado das Ilhas do Pacífico das Nações Unidas"
    },
    "PE": {
        "message": "Perú"
    },
    "PF": {
        "message": "Polinésia Francesa"
    },
    "PG": {
        "message": "Papua-Nova Guiné"
    },
    "PH": {
        "message": "Filipinas"
    },
    "PK": {
        "message": "Paquistão"
    },
    "PL": {
        "message": "Polónia"
    },
    "PM": {
        "message": "Saint Pierre e Miquelon"
    },
    "PN": {
        "message": "Ilhas Pitcairn"
    },
    "PR": {
        "message": "Porto Rico"
    },
    "PS": {
        "message": "Território da Palestina"
    },
    "PU": {
        "message": "Diversas Ilhas do Pacífico dos Estados Unidos da América"
    },
    "PY": {
        "message": "Paraguai"
    },
    "PZ": {
        "message": "Panamá Canal Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Por favor encerra as <a>extensões</a> que possam estar a controlar as definições de proxy,  por exemplo o Ad-Blocker's, e outros serviços VPN, etc."
    },
    "Please enter a valid email address.": {
        "message": "Por favor introduz um endereço de e-mail válido."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Por favor introduz um endereço de web site, como facebook.com"
    },
    "Please help us get better": {
        "message": "Ajuda-nos a melhorar"
    },
    "Popular in $1": {
        "message": "Popular em $1"
    },
    "Popular in the world": {
        "message": "Popular no mundo"
    },
    "Popular sites": {
        "message": "Os sites populares"
    },
    "QA": {
        "message": "Catar"
    },
    "QO": {
        "message": "Oceânia Distante"
    },
    "RE": {
        "message": "Reunião"
    },
    "RO": {
        "message": "Roménia"
    },
    "RS": {
        "message": "Sérvia"
    },
    "RU": {
        "message": "Rússia"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Nos avalie"
    },
    "Recent Videos": {
        "message": "Vídeos Recentes"
    },
    "Reload": {
        "message": "Recarregar"
    },
    "Reload Hola": {
        "message": "Recarregar o Hola"
    },
    "Remember server": {
        "message": "Relembrar servidor"
    },
    "Report a problem": {
        "message": "Comunicar um problema"
    },
    "Retry safe mode": {
        "message": "Repetir o modo de segurança"
    },
    "SA": {
        "message": "Arábia Saudita"
    },
    "SB": {
        "message": "Ilhas Salomão"
    },
    "SD": {
        "message": "Sudão"
    },
    "SE": {
        "message": "Suécia"
    },
    "SG": {
        "message": "Singapura"
    },
    "SH": {
        "message": "Santa Helena"
    },
    "SI": {
        "message": "Eslovénia"
    },
    "SJ": {
        "message": "Svalbard e Jan Mayen"
    },
    "SK": {
        "message": "Eslováquia"
    },
    "SL": {
        "message": "Serra Leoa"
    },
    "SO": {
        "message": "Somália"
    },
    "ST": {
        "message": "São Tomé e Príncipe"
    },
    "SU": {
        "message": "União Soviética"
    },
    "SY": {
        "message": "Síria"
    },
    "SZ": {
        "message": "Suazilândia"
    },
    "Safe": {
        "message": "Seguro"
    },
    "Safe mode": {
        "message": "Modo de segurança"
    },
    "Save": {
        "message": "Guardar"
    },
    "Saved Videos": {
        "message": "Vídeos guardados"
    },
    "Saved for later": {
        "message": "Guardar para mais tarde"
    },
    "Search video title": {
        "message": "Pesquisar título de vídeo"
    },
    "Select a Country": {
        "message": "Escolhe um País"
    },
    "Select site to unblock": {
        "message": "Escolhe um site a desbloquear"
    },
    "Server saved!": {
        "message": "Servidor guardado!"
    },
    "Set safe mode for $1 $2": {
        "message": "Modo de segurança definido para $1 $2"
    },
    "Settings": {
        "message": "Definições"
    },
    "Share": {
        "message": "Partilhar"
    },
    "Share $1 on $2": {
        "message": "Partilhar o $1 no $2"
    },
    "Share $1 via $2": {
        "message": "Partilhar o $1 via $2"
    },
    "Share with friends!": {
        "message": "Compartilhe com amigos!"
    },
    "Sign up": {
        "message": "Inscrever-se"
    },
    "Solve buffering": {
        "message": "Resolver carregamento"
    },
    "Solve buffering problems with": {
        "message": "Resolver problemas de carregamento com"
    },
    "Solves it": {
        "message": "Resolve-lo"
    },
    "Staff Picks": {
        "message": "Escolhas da equipa"
    },
    "Start Hola": {
        "message": "Iniciar o Hola"
    },
    "Starting...": {
        "message": "A iniciar..."
    },
    "Stop Hola": {
        "message": "Parar o Hola"
    },
    "Stopping peer routing...": {
        "message": "A parar encaminhamento dos pares..."
    },
    "Stream": {
        "message": "Transmissão"
    },
    "Stream Instantly": {
        "message": "Transmissão instantânea"
    },
    "Submit": {
        "message": "Enviar"
    },
    "Support Hola": {
        "message": "Ajuda do Hola"
    },
    "TA": {
        "message": "Tristão da Cunha"
    },
    "TC": {
        "message": "Ilhas Turcas e Caicos"
    },
    "TD": {
        "message": "Chade"
    },
    "TF": {
        "message": "Territórios Franceses do Sul"
    },
    "TG": {
        "message": "Ir"
    },
    "TH": {
        "message": "Tailândia"
    },
    "TJ": {
        "message": "Tadjiquistão"
    },
    "TK": {
        "message": "Toquelau"
    },
    "TL": {
        "message": "Timor Leste"
    },
    "TM": {
        "message": "Turquemenistão"
    },
    "TN": {
        "message": "Tunísia"
    },
    "TR": {
        "message": "Turquia"
    },
    "TT": {
        "message": "Trindade e Tobago"
    },
    "TZ": {
        "message": "Tanzânia"
    },
    "Talk to us on $1": {
        "message": "Fala connosco no $1"
    },
    "Tell friends about $1": {
        "message": "Diz aos teus amigos acerca o $1"
    },
    "Testing connection...": {
        "message": "A testar ligação..."
    },
    "Thank you!": {
        "message": "Obrigado!"
    },
    "There seems to be an error": {
        "message": "Parece que há um erro"
    },
    "Top popular sites": {
        "message": "Top dos sites populares"
    },
    "Translate to your language": {
        "message": "Traduzir para a tua língua"
    },
    "Try again": {
        "message": "Tenta novamente"
    },
    "Try another server": {
        "message": "Experimenta outro servidor"
    },
    "Try it": {
        "message": "Experimenta"
    },
    "Try safe mode": {
        "message": "Tente o modo de segurança"
    },
    "Try to <span>reload</span>": {
        "message": "Tenta <span>recarregar</span>"
    },
    "Trying another peer...": {
        "message": "A experimentar outro par..."
    },
    "Turn off Accelerator": {
        "message": "Desligar o Acelerador"
    },
    "Turn off Hola": {
        "message": "Desligar o Hola"
    },
    "Turn on Accelerator": {
        "message": "Ligar o Acelerador "
    },
    "Turn on Hola": {
        "message": "Ligar o Hola"
    },
    "Turn on to get started": {
        "message": "Clica aqui para começar"
    },
    "UA": {
        "message": "Ucrânia"
    },
    "UM": {
        "message": "Ilhas Menores Distantes dos Estados Unidos da América"
    },
    "US": {
        "message": "Estados Unidos da América"
    },
    "UY": {
        "message": "Uruguai"
    },
    "UZ": {
        "message": "Usbequistão"
    },
    "Unblocker": {
        "message": "Desbloqueador"
    },
    "Unblocker is disabled": {
        "message": "O desbloqueador está desactivado"
    },
    "Unblocker?": {
        "message": "Desbloqueador?"
    },
    "Update": {
        "message": "Actualizar"
    },
    "Upgrade": {
        "message": "Actualização"
    },
    "Using": {
        "message": "A utilizar"
    },
    "Using Hola": {
        "message": "A utilizar o Hola"
    },
    "VA": {
        "message": "Vaticano"
    },
    "VC": {
        "message": "São Vicente e Granadinas"
    },
    "VD": {
        "message": "Vietnam do Norte"
    },
    "VG": {
        "message": "Ilhas Virgens Britânicas"
    },
    "VI": {
        "message": "Ilhas Virgens Americanas"
    },
    "VN": {
        "message": "Vietnã"
    },
    "VPN Premium": {
        "message": "VPN premium"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Tens uma versão muito antiga do Chrome, <a>actualiza</a> o Chrome para utilizar o Hola "
    },
    "Video": {
        "message": "Vídeo"
    },
    "Video stuck?": {
        "message": "Vídeo bloqueado?"
    },
    "Videos available for instant streaming": {
        "message": "Vídeos disponíveis para transmissão instantânea"
    },
    "WF": {
        "message": "Wallis e Futuna"
    },
    "WK": {
        "message": "Ilha Wake"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Queres o Hola noutros dispositivos (Xbox, PS, Apple TV, iPhone, etc)? Clica aqui"
    },
    "Want to know more?": {
        "message": "Queres descobrir mais?"
    },
    "Watch Now": {
        "message": "Assiste agora"
    },
    "We found $1 videos": {
        "message": "Encontramos $1 vídeos"
    },
    "We will be in touch with you soon": {
        "message": "Nós entraremos em contacto contigo brevemente"
    },
    "Working!": {
        "message": "Funciona!"
    },
    "Working?": {
        "message": "Funciona?"
    },
    "Works on all sites but slower": {
        "message": "Funciona em todos os sites, mas mais lentos"
    },
    "YD": {
        "message": "República Democrática do Iémen"
    },
    "YE": {
        "message": "Iémen"
    },
    "YT": {
        "message": "Maiote"
    },
    "Yes": {
        "message": "Sim"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Precisas de actualizar o Opera para que o Hola possa funcionar. Carrega <a>aqui</a> para actualizar."
    },
    "ZA": {
        "message": "África do Sul"
    },
    "ZM": {
        "message": "Zâmbia"
    },
    "ZW": {
        "message": "Zimbábue"
    },
    "ZZ": {
        "message": "Zona desconhecida"
    },
    "app_desc": {
        "message": "Acede a websites bloqueados no teu país, empresa ou escola como o Hola! O Hola é grátis e simples de utilizar!"
    },
    "app_name": {
        "message": "Hola - Uma Internet Superior"
    },
    "back to": {
        "message": "retroceder para"
    },
    "changing...": {
        "message": "a alterar..."
    },
    "cool sites": {
        "message": "óptimos sites"
    },
    "current site": {
        "message": "site actual"
    },
    "day": {
        "message": "dia"
    },
    "days": {
        "message": "dias"
    },
    "even more...": {
        "message": "mais ainda"
    },
    "mode": {
        "message": "modo"
    },
    "more options...": {
        "message": "mais opções..."
    },
    "not working?": {
        "message": "não está a funcionar?"
    },
    "not working? try another server": {
        "message": "Não funciona? Tenta outro servidor."
    },
    "on this page": {
        "message": "nesta página"
    },
    "sites that are censored": {
        "message": "sites que são censurados"
    },
    "start": {
        "message": "começar"
    },
    "working? remember": {
        "message": "Funciona? Relembrar"
    }
};
return E; });