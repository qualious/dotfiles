'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " par "
    },
    "$1 Buffering?": {
        "message": "$1 tampon?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola pour accéder à $2\n\nCliquez ici pour faire la même chose: $3\n\nIl installe Hola, qui me permet de surfer sur Internet plus rapidement et accéder à $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN haut de gamme"
    },
    "$1 from $2": {
        "message": "$1 de $2"
    },
    "$1 not found": {
        "message": "$1 introuvable"
    },
    "$1 via Hola": {
        "message": "$1 par Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(certaines fonctionnalités Hola ne sont pas disponibles sur votre version)"
    },
    "AC": {
        "message": "Île de l&#39;Ascension"
    },
    "AD": {
        "message": "Andorre"
    },
    "AE": {
        "message": "Émirats arabes unis"
    },
    "AG": {
        "message": "Antigua-et-Barbuda"
    },
    "AL": {
        "message": "Albanie"
    },
    "AM": {
        "message": "Arménie"
    },
    "AN": {
        "message": "Antilles néerlandaises"
    },
    "AQ": {
        "message": "Antarctique"
    },
    "AR": {
        "message": "Argentine"
    },
    "AS": {
        "message": "Samoa américaines"
    },
    "AT": {
        "message": "Autriche"
    },
    "AU": {
        "message": "Australie"
    },
    "AX": {
        "message": "Îles Åland"
    },
    "AZ": {
        "message": "Azerbaïdjan"
    },
    "About": {
        "message": "Sur"
    },
    "About Hola": {
        "message": "À propos de Hola"
    },
    "Accelerator": {
        "message": "Accélérateur"
    },
    "Accelerator is": {
        "message": "Accelerator est"
    },
    "Access $1 - cool site!": {
        "message": "Accès $1 - ce site est cool!"
    },
    "Access $1?": {
        "message": "Débloqué $1?"
    },
    "Access any site from any country, free": {
        "message": "Accéder à tous sites Web à partir de n'importe quel pays, gratuitement"
    },
    "Access cool sites": {
        "message": "Accédez à des sites super"
    },
    "Access more sites": {
        "message": "Accès à plus de sites"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Les sites d&#39;accès censurés dans votre pays et accélérer votre Internet avec Hola - gratuit!"
    },
    "Accessing $1 with Hola": {
        "message": "Accès $1 avec Hola"
    },
    "Account": {
        "message": "Compte"
    },
    "Account type": {
        "message": "Type de compte"
    },
    "Activating...": {
        "message": "Activation..."
    },
    "All ($1)": {
        "message": "Tous ($1)"
    },
    "Apply settings...": {
        "message": "Appliquer les paramètres..."
    },
    "Author site:": {
        "message": "Site de l'auteur:"
    },
    "Author:": {
        "message": "Auteur:"
    },
    "Awesome!": {
        "message": "Génial!"
    },
    "BA": {
        "message": "Bosnie-Herzégovine"
    },
    "BB": {
        "message": "Barbade"
    },
    "BE": {
        "message": "Belgique"
    },
    "BG": {
        "message": "Bulgarie"
    },
    "BH": {
        "message": "Bahreïn"
    },
    "BJ": {
        "message": "Bénin"
    },
    "BL": {
        "message": "Saint-Barthélémy"
    },
    "BM": {
        "message": "Bermudes"
    },
    "BN": {
        "message": "Brunéi Darussalam"
    },
    "BO": {
        "message": "Bolivie"
    },
    "BQ": {
        "message": "Territoire britannique de l&#39;Antarctique"
    },
    "BR": {
        "message": "Brésil"
    },
    "BT": {
        "message": "Bhoutan"
    },
    "BV": {
        "message": "Île Bouvet"
    },
    "BY": {
        "message": "Bélarus"
    },
    "Back to $1": {
        "message": "Retour à $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Soyez le premier à obtenir Hola pour iPhone/iPad - Enregistrez-vous maintenant:"
    },
    "Browsing": {
        "message": "Parcourir"
    },
    "Buffering problems?": {
        "message": "Problèmes de mise en mémoire tampon?"
    },
    "Buffering?": {
        "message": "Mise en tampon?"
    },
    "CC": {
        "message": "Îles Cocos - Keeling"
    },
    "CD": {
        "message": "République démocratique du Congo"
    },
    "CF": {
        "message": "République centrafricaine"
    },
    "CG": {
        "message": "Congo"
    },
    "CH": {
        "message": "Suisse"
    },
    "CI": {
        "message": "Côte d&#39;Ivoire"
    },
    "CK": {
        "message": "Îles Cook"
    },
    "CL": {
        "message": "Chili"
    },
    "CM": {
        "message": "Cameroun"
    },
    "CN": {
        "message": "Chine"
    },
    "CO": {
        "message": "Colombie"
    },
    "CP": {
        "message": "Île de Clipperton"
    },
    "CS": {
        "message": "Serbie-et-Monténégro"
    },
    "CT": {
        "message": "Canton et Enderbury"
    },
    "CV": {
        "message": "Cap-Vert"
    },
    "CX": {
        "message": "Île Christmas"
    },
    "CY": {
        "message": "Chypre"
    },
    "CZ": {
        "message": "République tchèque"
    },
    "Changing country...": {
        "message": "Changement de pays..."
    },
    "Check out Hola for $1!": {
        "message": "Découvrez Hola pour $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Découvrez Hola pour les appareils mobiles"
    },
    "Check your Internet connection": {
        "message": "Vérifiez votre connexion Internet"
    },
    "Choose<br>Country": {
        "message": "Choisir <br> Pays"
    },
    "Configuring...": {
        "message": "Configuration ..."
    },
    "Connecting...": {
        "message": "Connexion en cours..."
    },
    "Cool site!": {
        "message": "Ce site est cool!"
    },
    "Creative licenses": {
        "message": "Licences Creative"
    },
    "DD": {
        "message": "Allemagne de l&#39;Est"
    },
    "DE": {
        "message": "Allemagne"
    },
    "DK": {
        "message": "Danemark"
    },
    "DM": {
        "message": "Dominique"
    },
    "DO": {
        "message": "République dominicaine"
    },
    "DZ": {
        "message": "Algérie"
    },
    "Delete": {
        "message": "Effacer"
    },
    "Deleted from my list": {
        "message": "Supprimé de ma liste"
    },
    "Did it work?": {
        "message": "Est-ce que cela à fonctionné?"
    },
    "Did you experience any buffering?": {
        "message": "Avez-vous vécu une mise en mémoire tampon?"
    },
    "Disliked it": {
        "message": "N'a pas aimé ce"
    },
    "Don't show again for $1 for one week": {
        "message": "Ne pas montrer de nouveau pour $1 pendant une semaine"
    },
    "Don't show again for any site for one week": {
        "message": "Ne pas montrer de nouveau pour tout site pendant une semaine"
    },
    "Downloading": {
        "message": "Téléchargement"
    },
    "EA": {
        "message": "Ceuta et Melilla"
    },
    "EC": {
        "message": "Équateur"
    },
    "EE": {
        "message": "Estonie"
    },
    "EG": {
        "message": "Égypte"
    },
    "EH": {
        "message": "Sahara occidental"
    },
    "ER": {
        "message": "Érythrée"
    },
    "ES": {
        "message": "Espagne"
    },
    "ET": {
        "message": "Éthiopie"
    },
    "EU": {
        "message": "Union européenne"
    },
    "Enable": {
        "message": "Activer"
    },
    "Enable Hola Accelerator": {
        "message": "Activer Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Amusez-vous!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Bénéficiant Hola pour Chrome?"
    },
    "Enter site to access": {
        "message": "Entrer sur le site pour accéder"
    },
    "Enter your email": {
        "message": "Entrez votre e-mail"
    },
    "FI": {
        "message": "Finlande"
    },
    "FJ": {
        "message": "Fidji"
    },
    "FK": {
        "message": "Îles Malouines"
    },
    "FM": {
        "message": "États fédérés de Micronésie"
    },
    "FO": {
        "message": "Îles Féroé"
    },
    "FQ": {
        "message": "Français Terres australes et antarctiques"
    },
    "FX": {
        "message": "France métropolitaine"
    },
    "Fast": {
        "message": "Vite"
    },
    "Finding new peers...": {
        "message": "Trouver de nouveaux pairs ..."
    },
    "Finding peers...": {
        "message": "Trouver pairs ..."
    },
    "Free": {
        "message": "Gratuit"
    },
    "From": {
        "message": "À partir de"
    },
    "Full list": {
        "message": "La pleine liste"
    },
    "GB": {
        "message": "Royaume-Uni"
    },
    "GD": {
        "message": "Grenade"
    },
    "GE": {
        "message": "Géorgie"
    },
    "GF": {
        "message": "Guyane française"
    },
    "GG": {
        "message": "Guernesey"
    },
    "GL": {
        "message": "Groenland"
    },
    "GM": {
        "message": "Gambie"
    },
    "GN": {
        "message": "Guinée"
    },
    "GQ": {
        "message": "Guinée équatoriale"
    },
    "GR": {
        "message": "Grèce"
    },
    "GS": {
        "message": "Géorgie du Sud et les îles Sandwich du Sud"
    },
    "GW": {
        "message": "Guinée-Bissau"
    },
    "GY": {
        "message": "Guyane"
    },
    "Get 24/7 Unblocking": {
        "message": "Accéder au Débloqueur 24h par jours, tous les jours"
    },
    "Get Free Premium": {
        "message": "Obtenez Free Premium"
    },
    "Get Hola Accelerator": {
        "message": "Obtenez Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Obtenez le lecteur Hola"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Obtenez Hola Plus pour un service sans limite et sans publicité."
    },
    "Get Hola Premium": {
        "message": "Obtenez Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Obtenez Hola pour Android"
    },
    "Get Premium support": {
        "message": "Obtenez de l'aide premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Obtenez le Débloqueur sans limitations"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Accédez aux sites censurés, essayez-le maintenant: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Obtenez de l'aide d'un ingénieur sur Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Accéder au serveur le plus rapide"
    },
    "Go": {
        "message": "Aller"
    },
    "Go Hola Premium": {
        "message": "Devenez Premium"
    },
    "HK": {
        "message": "R.A.S. chinoise de Hong Kong"
    },
    "HM": {
        "message": "Îles Heard et MacDonald"
    },
    "HR": {
        "message": "Croatie"
    },
    "HT": {
        "message": "Haïti"
    },
    "HU": {
        "message": "Hongrie"
    },
    "Hate it": {
        "message": "Le detesté"
    },
    "Help": {
        "message": "Aide"
    },
    "Hey,\n\nI'm using": {
        "message": "Hé,\n\nJe suis en train d'utiliser"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Salut,\n\nj'ai commencé à utiliser $1 ($2). Il me permet de surfer sur Internet plus rapidement et accéder à $3 en mon pays."
    },
    "Hola Accelerator": {
        "message": "Accélérateur Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ne peut pas travailler à cause d'une autre extension est en train de contrôler vos paramètres de proxy."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ne fonctionne pas correctement dans le mode Windows 8. Merci de repasser sur le mode bureau. Cliquez <a>ici</a> pour des instructions"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola n'est pas disponible en ce moment, mais nous y travaillons."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola est désactivé, cliquez sur à allumer"
    },
    "Hola site list": {
        "message": "Liste des sites du débloqueur"
    },
    "I can now access $1 from any country!": {
        "message": "Je peux maintenant accéder à $1 de n'importe quel pays!"
    },
    "I did not experience any buffering": {
        "message": "Je n'ai pas eu une mise en mémoire tampon"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Je viens d'accéder à un site censuré en utilisant Hola pour $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "J'utilise $1 pour voir $2 dans mon pays, et surfer plus vite!"
    },
    "IC": {
        "message": "les îles Canaries"
    },
    "ID": {
        "message": "Indonésie"
    },
    "IE": {
        "message": "Irlande"
    },
    "IL": {
        "message": "Israël"
    },
    "IM": {
        "message": "Île de Man"
    },
    "IN": {
        "message": "Inde"
    },
    "IO": {
        "message": "Territoire britannique de l'océan Indien"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islande"
    },
    "IT": {
        "message": "Italie"
    },
    "Improve translation": {
        "message": "Améliorer la traduction"
    },
    "Initializing...": {
        "message": "Initialisation, merci de patienter..."
    },
    "Install": {
        "message": "Installer"
    },
    "Install Accelerator": {
        "message": "Installez Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Installez Hola Accelerator gratuit"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Installez Hola moteur pour continuer à utiliser Hola gratuitement"
    },
    "Instantly watch any torrent Video": {
        "message": "Regarder instantanément ne importe quelle vidéo torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Invitez vos amis - Premium gratuit."
    },
    "Invite friends. Get Premium.": {
        "message": "Invitez vos amis. Obtenez Premium."
    },
    "It was okay": {
        "message": "C&#39;était pas mal"
    },
    "JM": {
        "message": "Jamaïque"
    },
    "JO": {
        "message": "Jordanie"
    },
    "JP": {
        "message": "Japon"
    },
    "KG": {
        "message": "Kirghizistan"
    },
    "KH": {
        "message": "Cambodge"
    },
    "KM": {
        "message": "Comores"
    },
    "KN": {
        "message": "Saint-Kitts-et-Nevis"
    },
    "KP": {
        "message": "Corée du Nord"
    },
    "KR": {
        "message": "Corée du Sud"
    },
    "KW": {
        "message": "Koweït"
    },
    "KY": {
        "message": "Îles Caïmans"
    },
    "LB": {
        "message": "Liban"
    },
    "LC": {
        "message": "Sainte-Lucie"
    },
    "LR": {
        "message": "Libéria"
    },
    "LT": {
        "message": "Lituanie"
    },
    "LV": {
        "message": "Lettonie"
    },
    "LY": {
        "message": "Libye"
    },
    "Language": {
        "message": "Langue"
    },
    "Library": {
        "message": "Bibliothèque"
    },
    "Like it": {
        "message": "J&#39;aime ça"
    },
    "Loading": {
        "message": "Chargement en cours"
    },
    "Loading site...": {
        "message": "Chargement en cours..."
    },
    "Log in": {
        "message": "S'identifier"
    },
    "Log out": {
        "message": "Déconnexion"
    },
    "Love Hola?": {
        "message": "Vous aimez Hola?"
    },
    "Love it": {
        "message": "Aimer"
    },
    "MA": {
        "message": "Maroc"
    },
    "MD": {
        "message": "Moldavie"
    },
    "ME": {
        "message": "Monténégro"
    },
    "MF": {
        "message": "Saint-Martin"
    },
    "MH": {
        "message": "Îles Marshall"
    },
    "MI": {
        "message": "Midway"
    },
    "MK": {
        "message": "Macédoine"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Mongolie"
    },
    "MO": {
        "message": "R.A.S. chinoise de Macao"
    },
    "MP": {
        "message": "Îles Mariannes du Nord"
    },
    "MR": {
        "message": "Mauritanie"
    },
    "MT": {
        "message": "Malte"
    },
    "MU": {
        "message": "Maurice"
    },
    "MX": {
        "message": "Mexique"
    },
    "MY": {
        "message": "Malaisie"
    },
    "Make your Internet better with $1": {
        "message": "Faites de votre mieux Internet avec $1"
    },
    "Might not work on all sites": {
        "message": "Pourrait ne pas fonctionner sur tous les sites"
    },
    "More countries": {
        "message": "Plus de pays"
    },
    "More sites...": {
        "message": "Plus de sites..."
    },
    "More...": {
        "message": "Plus..."
    },
    "My Account": {
        "message": "Mon compte"
    },
    "My History": {
        "message": "Mon Histoire"
    },
    "My Settings": {
        "message": "Mes réglages"
    },
    "My favorites": {
        "message": "Mes favories"
    },
    "NA": {
        "message": "Namibie"
    },
    "NC": {
        "message": "Nouvelle-Calédonie"
    },
    "NF": {
        "message": "Île Norfolk"
    },
    "NG": {
        "message": "Nigéria"
    },
    "NL": {
        "message": "Pays-Bas"
    },
    "NO": {
        "message": "Norvège"
    },
    "NP": {
        "message": "Népal"
    },
    "NQ": {
        "message": "Terre Dronning Maud"
    },
    "NT": {
        "message": "Zone Neutre"
    },
    "NZ": {
        "message": "Nouvelle-Zélande"
    },
    "Need Help?": {
        "message": "Besoin d'aide?"
    },
    "Never ask me again": {
        "message": "Ne plus me demander"
    },
    "Never be a peer": {
        "message": "Ne jamais être un pair"
    },
    "No": {
        "message": "Aucun"
    },
    "No idle peers found.": {
        "message": "Pas de pairs inactifs trouvés."
    },
    "No recent videos found": {
        "message": "Aucune vidéo récentes ont montré"
    },
    "No saved videos found": {
        "message": "Pas de vidéos enregistrées trouvé"
    },
    "No title": {
        "message": "Pas de titre"
    },
    "No videos found": {
        "message": "Pas de vidéos trouvées"
    },
    "No videos found on active page": {
        "message": "Pas de vidéos trouvées sur page active"
    },
    "No, Thanks": {
        "message": "Non, Merci"
    },
    "No, fix it": {
        "message": "Non, fixer"
    },
    "Not working?": {
        "message": "Cela ne fonctionne pas?"
    },
    "Number of users that pressed not working": {
        "message": "Nombre d'utilisateur qui ont cliqué sur «Ne marche pas ?»"
    },
    "Number of users that use this option": {
        "message": "Nombre d'utilisateurs qui utilisent cette option"
    },
    "Off": {
        "message": "Éteindre"
    },
    "Oh, yes!": {
        "message": "Oh, oui!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Ancienne version de Firefox. Cliquez <a>ici</a> pour mettre à jour."
    },
    "On": {
        "message": "Allumer"
    },
    "Open Media Player": {
        "message": "Ouvrir Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Notre tout nouveau MPlayer arrive bientôt!"
    },
    "PC": {
        "message": "Territoire du Pacifique Islands Trust"
    },
    "PE": {
        "message": "Pérou"
    },
    "PF": {
        "message": "Polynésie française"
    },
    "PG": {
        "message": "Papouasie-Nouvelle-Guinée"
    },
    "PL": {
        "message": "Pologne"
    },
    "PM": {
        "message": "Saint-Pierre-et-Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Porto Rico"
    },
    "PS": {
        "message": "Territoire palestinien"
    },
    "PU": {
        "message": "Divers îles du Pacifique des États-Unis"
    },
    "PW": {
        "message": "Palaos"
    },
    "PZ": {
        "message": "Zone du canal de Panama"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "S'il vous plaît désactiver toutes autres <a>extensions</a> qui contrôlent vos paramètres de proxy tels que les ad-blockers, d'autres services de VPN, etc."
    },
    "Please enter a valid email address.": {
        "message": "Veuillez entrer une adresse email valide."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Veuillez entrer une adresse de site web, comme facebook.com"
    },
    "Please help us get better": {
        "message": "S'il vous plaît aidez-nous à nous améliorer"
    },
    "Popular in $1": {
        "message": "Populaire dans $1"
    },
    "Popular in the world": {
        "message": "Populaire dans le monde"
    },
    "Popular sites": {
        "message": "Les sites populaires"
    },
    "Premium": {
        "message": "Primium"
    },
    "QO": {
        "message": "Autre Océanie"
    },
    "RO": {
        "message": "Roumanie"
    },
    "RS": {
        "message": "Serbie"
    },
    "RU": {
        "message": "Russie"
    },
    "Rate us": {
        "message": "Évaluez nous"
    },
    "Recent Videos": {
        "message": "Nouvelles vidéos"
    },
    "Reload": {
        "message": "Recharger"
    },
    "Reload Hola": {
        "message": "Recharger Hola"
    },
    "Remember server": {
        "message": "Se souvenir du serveur"
    },
    "Report a problem": {
        "message": "Signaler un problème"
    },
    "Retry safe mode": {
        "message": "Réessayez mode sans échec"
    },
    "SA": {
        "message": "Arabie saoudite"
    },
    "SB": {
        "message": "Îles Salomon"
    },
    "SD": {
        "message": "Soudan"
    },
    "SE": {
        "message": "Suède"
    },
    "SG": {
        "message": "Singapour"
    },
    "SH": {
        "message": "Sainte-Hélène"
    },
    "SI": {
        "message": "Slovénie"
    },
    "SJ": {
        "message": "Svalbard et Île Jan Mayen"
    },
    "SK": {
        "message": "Slovaquie"
    },
    "SM": {
        "message": "Saint-Marin"
    },
    "SN": {
        "message": "Sénégal"
    },
    "SO": {
        "message": "Somalie"
    },
    "ST": {
        "message": "Sao Tomé-et-Principe"
    },
    "SU": {
        "message": "Union des Républiques socialistes soviétiques"
    },
    "SV": {
        "message": "le Salvador"
    },
    "SY": {
        "message": "Syrie"
    },
    "Safe": {
        "message": "Sûr"
    },
    "Safe mode": {
        "message": "Mode sans échec"
    },
    "Save": {
        "message": "Enregistrer"
    },
    "Saved Videos": {
        "message": "Vidéos favoris"
    },
    "Saved for later": {
        "message": "Saved pour plus tard"
    },
    "Search video title": {
        "message": "Recherche Vidéo"
    },
    "Select a Country": {
        "message": "Sélectionnez un pays"
    },
    "Select site to unblock": {
        "message": "Sélectionnez un site à débloquer"
    },
    "Server saved!": {
        "message": "Serveur enregistré!"
    },
    "Set safe mode for $1 $2": {
        "message": "Réglez le mode sans échec pour $1 $2"
    },
    "Settings": {
        "message": "Réglages"
    },
    "Share": {
        "message": "Partager"
    },
    "Share $1 on $2": {
        "message": "Partager $1 sur $2"
    },
    "Share $1 via $2": {
        "message": "Partagez $1 par $2"
    },
    "Share with friends!": {
        "message": "Partager avec des amis!"
    },
    "Sign up": {
        "message": "S'inscrire"
    },
    "Solve buffering": {
        "message": "Résolvez tampon"
    },
    "Solve buffering problems with": {
        "message": "Résolvez les problèmes de tampon avec"
    },
    "Solves it": {
        "message": "Il résout"
    },
    "Staff Picks": {
        "message": "Choix de notre équipe"
    },
    "Start Hola": {
        "message": "Démarrer Hola"
    },
    "Starting...": {
        "message": "Démarrage..."
    },
    "Stop Hola": {
        "message": "Arrêter Hola"
    },
    "Stopping peer routing...": {
        "message": "Arrêter l'acheminement des pairs ..."
    },
    "Stream": {
        "message": "Courant"
    },
    "Stream Instantly": {
        "message": "Diffusent instantanément"
    },
    "Submit": {
        "message": "Soumettre"
    },
    "Support Hola": {
        "message": "Soutenir Hola"
    },
    "TC": {
        "message": "Îles Turks et Caïques"
    },
    "TD": {
        "message": "Tchad"
    },
    "TF": {
        "message": "Terres australes françaises"
    },
    "TG": {
        "message": "Aller"
    },
    "TH": {
        "message": "Thaïlande"
    },
    "TJ": {
        "message": "Tadjikistan"
    },
    "TL": {
        "message": "Timor oriental"
    },
    "TM": {
        "message": "Turkménistan"
    },
    "TN": {
        "message": "Tunisie"
    },
    "TR": {
        "message": "Turquie"
    },
    "TT": {
        "message": "Trinité-et-Tobago"
    },
    "TW": {
        "message": "Taïwan"
    },
    "TZ": {
        "message": "Tanzanie"
    },
    "Talk to us on $1": {
        "message": "Parlez-nous sur $1"
    },
    "Tell friends about $1": {
        "message": "Parlez à vos amis de $1"
    },
    "Testing connection...": {
        "message": "Test de connexion..."
    },
    "Thank you!": {
        "message": "Merci!"
    },
    "There seems to be an error": {
        "message": "Il semble y avoir une erreur"
    },
    "Top popular sites": {
        "message": "Sites populaires Top"
    },
    "Translate to your language": {
        "message": "Traduire dans votre langue"
    },
    "Try again": {
        "message": "Essayer de nouveau"
    },
    "Try another server": {
        "message": "Essayez un autre serveur"
    },
    "Try it": {
        "message": "Essayez-le"
    },
    "Try safe mode": {
        "message": "Essayez le mode sans échec"
    },
    "Try to <span>reload</span>": {
        "message": "Essayez de <span>recharger</span>"
    },
    "Trying another peer...": {
        "message": "Essai d'un autre pair..."
    },
    "Turn off Accelerator": {
        "message": "Éteignez Accelerator"
    },
    "Turn off Hola": {
        "message": "Éteignez Hola"
    },
    "Turn on Accelerator": {
        "message": "Allumez l'accélérateur"
    },
    "Turn on Hola": {
        "message": "Allumez Hola"
    },
    "Turn on to get started": {
        "message": "Allumez pour commencer"
    },
    "UG": {
        "message": "Ouganda"
    },
    "UM": {
        "message": "Îles Mineures Éloignées des États-Unis"
    },
    "US": {
        "message": "États-Unis"
    },
    "UZ": {
        "message": "Ouzbékistan"
    },
    "Unblocker": {
        "message": "Débloqueur"
    },
    "Unblocker is disabled": {
        "message": "Débloqueur désactivé"
    },
    "Unblocker?": {
        "message": "Débloqueur?"
    },
    "Update": {
        "message": "Mettre à jour"
    },
    "Upgrade": {
        "message": "Mise à jour"
    },
    "Using": {
        "message": "Utilisation"
    },
    "Using Hola": {
        "message": "Utilisation Hola"
    },
    "VA": {
        "message": "État de la Cité du Vatican"
    },
    "VC": {
        "message": "Saint-Vincent-et-les Grenadines"
    },
    "VD": {
        "message": "Nord-Vietnam"
    },
    "VG": {
        "message": "Îles Vierges britanniques"
    },
    "VI": {
        "message": "Îles Vierges des États-Unis"
    },
    "VN": {
        "message": "Viêt Nam"
    },
    "VPN Premium": {
        "message": "VPN haut de gamme"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Version très ancienne de Chrome. <a>Mettez à jour</a> Chrome pour utiliser Hola"
    },
    "Video": {
        "message": "Vidéo"
    },
    "Video stuck?": {
        "message": "Vidéo bloquée?"
    },
    "Videos available for instant streaming": {
        "message": "Vidéos disponibles pour le streaming instantané"
    },
    "WF": {
        "message": "Wallis-et-Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Vous voulez Hola sur d'autres appareils (Xbox, PS, Apple TV, iPhone ...) ? Cliquez ici"
    },
    "Want to know more?": {
        "message": "Voulez-vous en savoir plus?"
    },
    "Watch Now": {
        "message": "Regarder maintenant"
    },
    "We found $1 videos": {
        "message": "Nous avons trouvé $1 vidéos"
    },
    "We will be in touch with you soon": {
        "message": "Nous serons en contact avec vous bientôt"
    },
    "Working!": {
        "message": "Ça Fonctionne!"
    },
    "Working?": {
        "message": "Cela fonctionne t'il?"
    },
    "Works on all sites but slower": {
        "message": "Fonctionne sur tous les sites, mais plus lents"
    },
    "YD": {
        "message": "République démocratique populaire du Yémen"
    },
    "YE": {
        "message": "Yémen"
    },
    "Yes": {
        "message": "Oui"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Vous devez mettre à jour vers la dernière version d'Opera pour utiliser Hola. Appuyez <a>ici</a> pour mettre à jour."
    },
    "ZA": {
        "message": "Afrique du Sud"
    },
    "ZM": {
        "message": "Zambie"
    },
    "ZZ": {
        "message": "région indéterminée"
    },
    "app_desc": {
        "message": "Accéder aux sites bloqués dans votre pays, entreprise ou école avec Hola! Hola est gratuit et facile à utiliser!"
    },
    "app_name": {
        "message": "Hola offre une meilleure navigation internet"
    },
    "back to": {
        "message": "revenir à"
    },
    "changing...": {
        "message": "Modification..."
    },
    "cool sites": {
        "message": "chouettes sites"
    },
    "current site": {
        "message": "site actuel"
    },
    "day": {
        "message": "jour"
    },
    "days": {
        "message": "journées"
    },
    "even more...": {
        "message": "Encore plus..."
    },
    "more options...": {
        "message": "Plus d'options..."
    },
    "not working?": {
        "message": "ça ne fonctionne pas?"
    },
    "not working? try another server": {
        "message": "ne fonctionne pas? essayer un autre serveur"
    },
    "on this page": {
        "message": "sur cette page"
    },
    "sites that are censored": {
        "message": "sites qui sont censurés"
    },
    "start": {
        "message": "démarrer"
    },
    "working? remember": {
        "message": "Fonctionne? Se souvenir"
    }
};
return E; });