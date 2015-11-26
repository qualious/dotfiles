'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " ద్వారా "
    },
    "$1 Buffering?": {
        "message": "$1 బఫర్?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 హోలా అదే చేయాలని ఇక్కడ $2\n\nక్లిక్ యాక్సెస్: $3\n\nఇది నాకు వేగవంతమైన ఇంటర్నెట్ సర్ఫ్ మరియు యాక్సెస్ అనుమతించే హోలా, సంస్థాపిస్తుంది $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN ప్రీమియమ్"
    },
    "$1 from $2": {
        "message": "$2 నుండి $1"
    },
    "$1 not found": {
        "message": "$1 దొరకలేదు"
    },
    "$1 via Hola": {
        "message": "Hola ద్వారా $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(కొన్ని హోలా లక్షణాలు మీ వెర్షన్ అందుబాటులో లేవు)"
    },
    "AC": {
        "message": "అసెన్షన్ ద్వీపం"
    },
    "AD": {
        "message": "అన్డోరా"
    },
    "AE": {
        "message": "యునైటెడ్ ఆరబ్ ఎమిరేట్స్"
    },
    "AF": {
        "message": "ఆఫ్ఘానిస్తాన్"
    },
    "AG": {
        "message": "ఆంటిగ్వా మరియు బార్బుడా"
    },
    "AI": {
        "message": "ఆంగవిల్లా"
    },
    "AL": {
        "message": "అల్బేనియా"
    },
    "AM": {
        "message": "ఆర్మేనియా"
    },
    "AN": {
        "message": "నేదేర్లేండ్స్ అంటిల్లిస్"
    },
    "AO": {
        "message": "అంగోలా"
    },
    "AQ": {
        "message": "అంటార్కటికా"
    },
    "AR": {
        "message": "ఆర్జెంటినా"
    },
    "AS": {
        "message": "అమెరికన్ సమోవా"
    },
    "AT": {
        "message": "ఆస్ట్రియా"
    },
    "AU": {
        "message": "ఆస్ట్రేలియా"
    },
    "AW": {
        "message": "అరుబా"
    },
    "AX": {
        "message": "ఆలేండ్ దీవులు"
    },
    "AZ": {
        "message": "అజర్బైజాన్"
    },
    "About": {
        "message": "గురించి"
    },
    "About Hola": {
        "message": "Hola గురించి"
    },
    "Accelerator": {
        "message": "త్వరణం"
    },
    "Accelerator is": {
        "message": "Accelerator ఉంది"
    },
    "Access $1 - cool site!": {
        "message": "$1 యాక్సెస్ - చల్లని సైట్!"
    },
    "Access $1?": {
        "message": "$1 యాక్సెస్?"
    },
    "Access any site from any country, free": {
        "message": "ఉచిత, ఏ దేశం నుండి ఏ సైట్ యాక్సెస్"
    },
    "Access cool sites": {
        "message": "యాక్సెస్ చల్లని సైట్లు"
    },
    "Access more sites": {
        "message": "యాక్సెస్ మరిన్ని సైట్లను"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "యాక్సెస్ సైట్లు మీ దేశంలో సెన్సార్ మరియు హోలా మీ ఇంటర్నెట్ వేగవంతం - ఉచిత!"
    },
    "Accessing $1 with Hola": {
        "message": "హోలా తో $1 యాక్సెస్"
    },
    "Account": {
        "message": "ఖాతా"
    },
    "Account type": {
        "message": "ఖాతా రకం"
    },
    "Activating...": {
        "message": "సక్రియం చేస్తోంది ..."
    },
    "All ($1)": {
        "message": "అన్ని ($1)"
    },
    "Apply settings...": {
        "message": "సెట్టింగులను వర్తించు..."
    },
    "Author site:": {
        "message": "రచయిత సైట్:"
    },
    "Author:": {
        "message": "రచయిత:"
    },
    "Awesome!": {
        "message": "పరమాద్భుతం!"
    },
    "BA": {
        "message": "బాస్నియా మరియు హీర్జిగోవినా"
    },
    "BB": {
        "message": "బార్బడోస్"
    },
    "BD": {
        "message": "బాంగ్లాదేష్"
    },
    "BE": {
        "message": "బెల్జియం"
    },
    "BF": {
        "message": "బుర్కినా ఫాసో"
    },
    "BG": {
        "message": "బల్గేరియా"
    },
    "BH": {
        "message": "బహరేన్"
    },
    "BI": {
        "message": "బురుండి"
    },
    "BJ": {
        "message": "బెనిన్"
    },
    "BL": {
        "message": "సెంట్ బర్తేలెమీ"
    },
    "BM": {
        "message": "బర్మయుడా"
    },
    "BN": {
        "message": "బ్రునై"
    },
    "BO": {
        "message": "బొలీవియా"
    },
    "BQ": {
        "message": "బ్రిటిష్ అంటార్కిటిక్ టెరిటరీ"
    },
    "BR": {
        "message": "బ్రజిల్"
    },
    "BS": {
        "message": "బహామాస్"
    },
    "BT": {
        "message": "భూటాన్"
    },
    "BV": {
        "message": "బొవెట్ దీవి"
    },
    "BW": {
        "message": "బోట్స్వానా"
    },
    "BY": {
        "message": "బెలారస్"
    },
    "BZ": {
        "message": "బెలీజ్"
    },
    "Back to $1": {
        "message": "తిరిగి $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "ఐఫోన్ / ఐప్యాడ్ కోసం Hola పొందడానికి మొదటి - ఇప్పుడు నమోదు:"
    },
    "Browsing": {
        "message": "బ్రౌజింగ్"
    },
    "Buffering problems?": {
        "message": "బఫరింగ్ సమస్యలు?"
    },
    "Buffering?": {
        "message": "బఫరింగ్?"
    },
    "CA": {
        "message": "కెనడా"
    },
    "CC": {
        "message": "కోకోస్ దీవులు"
    },
    "CD": {
        "message": "కాంగో- కిన్షాసా"
    },
    "CF": {
        "message": "మధ్యమ ఆఫ్రికా రిపబ్లిక్"
    },
    "CG": {
        "message": "కాంగో- బ్రాజావిల్లి"
    },
    "CH": {
        "message": "స్విట్జర్లేండ్"
    },
    "CI": {
        "message": "ఐవరీ కోస్ట్"
    },
    "CK": {
        "message": "కుక్ దీవులు"
    },
    "CL": {
        "message": "చిలి"
    },
    "CM": {
        "message": "కెమరూన్"
    },
    "CN": {
        "message": "చైనా"
    },
    "CO": {
        "message": "కొలంబియా"
    },
    "CP": {
        "message": "క్లిప్పేర్టన్ ద్వీపం"
    },
    "CR": {
        "message": "కోస్టారికా"
    },
    "CS": {
        "message": "సర్బియా మరియు మంటెనీగ్రో"
    },
    "CT": {
        "message": "కాంటన్ అండ్ ఎండర్బ్రీ దీవులు"
    },
    "CU": {
        "message": "క్యూబా"
    },
    "CV": {
        "message": "కేప్ వెర్డే"
    },
    "CX": {
        "message": "క్రిస్మస్ దీవి"
    },
    "CY": {
        "message": "సైప్రస్"
    },
    "CZ": {
        "message": "చెక్ గణరాజ్యం"
    },
    "Changing country...": {
        "message": "దేశంలో మారుతున్న..."
    },
    "Check out Hola for $1!": {
        "message": "$1 కోసం హోలా తనిఖీ!"
    },
    "Check out Hola for mobile devices": {
        "message": "మొబైల్ పరికరాల కోసం Hola తనిఖీ"
    },
    "Check your Internet connection": {
        "message": "మీరు ఇంటర్నెట్ కలిగి ధృవీకరించండి"
    },
    "Choose<br>Country": {
        "message": "ఎంచుకోండి <br> దేశం"
    },
    "Configuring...": {
        "message": "ఆకృతీకరిస్తోంది..."
    },
    "Connecting...": {
        "message": "కనెక్ట్ అవుతోంది..."
    },
    "Cool site!": {
        "message": "కూల్ సైట్!"
    },
    "Creative licenses": {
        "message": "క్రియేటివ్ లైసెన్సుల"
    },
    "DD": {
        "message": "తూర్పు జర్మనీ"
    },
    "DE": {
        "message": "ఙర్మని"
    },
    "DG": {
        "message": "డియెగో గార్సియా"
    },
    "DJ": {
        "message": "జిబౌటి"
    },
    "DK": {
        "message": "డెన్మార్క్"
    },
    "DM": {
        "message": "డోమెనిక"
    },
    "DO": {
        "message": "డొమినికన్ గణ రాజ్యం"
    },
    "DZ": {
        "message": "అల్జీరియా"
    },
    "Delete": {
        "message": "తొలగించు"
    },
    "Deleted from my list": {
        "message": "నా జాబితా నుండి తొలగించబడిన"
    },
    "Did it work?": {
        "message": "ఇది పని చేసింది?"
    },
    "Did you experience any buffering?": {
        "message": "మీరు ఏ బఫరింగ్ ఎదుర్కొన్నారా?"
    },
    "Disliked it": {
        "message": "ఇష్టపడకపోవడంతో"
    },
    "Don't show again for $1 for one week": {
        "message": "ఒక వారం $1 కోసం మళ్ళీ చూపవద్దు"
    },
    "Don't show again for any site for one week": {
        "message": "ఒక వారం ఏ సైట్ కోసం మళ్ళీ చూపవద్దు"
    },
    "Downloading": {
        "message": "డౌన్లోడ్"
    },
    "EA": {
        "message": "Ceuta మరియు మెలిల్లా"
    },
    "EC": {
        "message": "ఈక్వడోర్"
    },
    "EE": {
        "message": "ఎస్టోనియా"
    },
    "EG": {
        "message": "ఈజిప్ట్"
    },
    "EH": {
        "message": "పడమటి సహారా"
    },
    "ER": {
        "message": "ఎరిట్రియా"
    },
    "ES": {
        "message": "స్పేన్"
    },
    "ET": {
        "message": "ఇథియోపియా"
    },
    "EU": {
        "message": "ఐరోపా సంఘము"
    },
    "Enable": {
        "message": "ప్రారంభించు"
    },
    "Enable Hola Accelerator": {
        "message": "Hola Accelerator ప్రారంభించు"
    },
    "Enjoy!": {
        "message": "ఆనందించండి!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome కోసం Hola ఆనందించే?"
    },
    "Enter site to access": {
        "message": "యాక్సెస్ సైట్ ఎంటర్"
    },
    "Enter your email": {
        "message": "మీ ఇమెయిల్ ఎంటర్"
    },
    "FI": {
        "message": "ఫిన్లాండ్"
    },
    "FJ": {
        "message": "ఫిజి"
    },
    "FK": {
        "message": "ఫాక్ లేండ్ దీవులు"
    },
    "FM": {
        "message": "మైక్రోనేశియ"
    },
    "FO": {
        "message": "ఫారో దీవులు"
    },
    "FQ": {
        "message": "దక్షిణ ఫ్రెంచ్ మరియు అంటార్కిటిక్ భూభాగాలు"
    },
    "FR": {
        "message": "ఫ్రాన్స్‌"
    },
    "FX": {
        "message": "ఫ్రాన్స్ ప్రధాన భూభాగం"
    },
    "Fast": {
        "message": "ఫాస్ట్"
    },
    "Finding new peers...": {
        "message": "కొత్త సహచరులకు ఫైండింగ్..."
    },
    "Finding peers...": {
        "message": "సహచరులకు ఫైండింగ్..."
    },
    "Free": {
        "message": "ఉచిత"
    },
    "From": {
        "message": "నుండి"
    },
    "Full list": {
        "message": "పూర్తి జాబితా"
    },
    "GA": {
        "message": "గేబన్"
    },
    "GB": {
        "message": "బ్రిటన్"
    },
    "GD": {
        "message": "గ్రెనెడా"
    },
    "GE": {
        "message": "జార్జియా"
    },
    "GF": {
        "message": "ఫ్రెంచ్ గియానా"
    },
    "GG": {
        "message": "గ్వేర్నసే"
    },
    "GH": {
        "message": "ఘానా"
    },
    "GI": {
        "message": "జిబ్రాల్టార్"
    },
    "GL": {
        "message": "గ్రీన్లేండ్"
    },
    "GM": {
        "message": "గాంబియా"
    },
    "GN": {
        "message": "గినియా"
    },
    "GP": {
        "message": "గ్వాడేలోప్"
    },
    "GQ": {
        "message": "ఎక్వేటోరియాల్ గినియా"
    },
    "GR": {
        "message": "గ్రీస్"
    },
    "GS": {
        "message": "దక్షిణ జార్జియా మరియు దక్షిణ సాండ్విచ్ దీవులు"
    },
    "GT": {
        "message": "గ్వాటిమాల"
    },
    "GU": {
        "message": "గ్వామ్"
    },
    "GW": {
        "message": "గినియా-బిస్సావ్"
    },
    "GY": {
        "message": "గయానా"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 అనుమతిస్తోంది పొందండి"
    },
    "Get Free Premium": {
        "message": "ఉచిత ప్రీమియం పొందండి"
    },
    "Get Hola Accelerator": {
        "message": "Hola Accelerator పొందండి"
    },
    "Get Hola Player": {
        "message": "పొందండి హోలా ప్లేయర్"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "అన్-ఇంటరప్టెడ్, AD-ఉచిత సేవ కోసం హోలా ప్లస్ పొందండి."
    },
    "Get Hola Premium": {
        "message": "Hola ప్రీమియం పొందండి"
    },
    "Get Hola for Android": {
        "message": "Android కోసం Hola పొందండి"
    },
    "Get Premium support": {
        "message": "ప్రీమియమ్ మద్దతు పొందండి"
    },
    "Get Unlimited Unblocking": {
        "message": "అపరిమిత అనుమతిస్తోంది పొందండి"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "సెన్సార్ సైట్లకు యాక్సెస్ పొందండి ఇప్పుడు ప్రయత్నించండి: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "స్కైప్ పైగా ఇంజనీర్ నుండి సహాయాన్ని పొందండి:"
    },
    "Get the Fastest Servers": {
        "message": "వేగంగా సర్వర్లు పొందండి"
    },
    "Go": {
        "message": "వెళ్ళండి"
    },
    "Go Hola Premium": {
        "message": "వెళ్ళండి Hola ప్రీమియమ్"
    },
    "HK": {
        "message": "చైనా యొక్క హాంగ్కాంగ్"
    },
    "HM": {
        "message": "హెర్డ్ దీవి మరియు మాక్ డోనాల్డ్ దీవులు"
    },
    "HN": {
        "message": "హోండోరాస్"
    },
    "HR": {
        "message": "క్రోయేషియా"
    },
    "HT": {
        "message": "హైటి"
    },
    "HU": {
        "message": "హన్గేరి"
    },
    "Hate it": {
        "message": "ద్వేషం"
    },
    "Help": {
        "message": "సహాయం"
    },
    "Hey,\n\nI'm using": {
        "message": "హే,\n\nనేను ఉపయోగించి నేను"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "హాయ్,\n\nనేను $1 ($2) ఉపయోగించడం ప్రారంభించారు. ఇది నాకు వేగవంతమైన ఇంటర్నెట్ సర్ఫ్ మరియు నా దేశం లో $3 యాక్సెస్ అనుమతిస్తుంది."
    },
    "Hola": {
        "message": "హోలా"
    },
    "Hola Accelerator": {
        "message": "హోలా Accelerator"
    },
    "Hola Media Player": {
        "message": "హోలా మీడియా ప్లేయర్"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "వేరొక పొడిగింపు మీ ప్రాక్సీ సెట్టింగ్లను నియంత్రణ ఎందుకంటే Hola పనిచేయదు."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "హోలా Windows 8 మోడ్లో గొప్పగా పని లేదు. డెస్క్టాప్ మోడ్కు దయచేసి. సూచనల కోసం <a> ఇక్కడ </a> క్లిక్ చేయండి"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "హోలా ప్రస్తుతం అందుబాటులో లేదు, కానీ మేము అది పని."
    },
    "Hola is off, click it to turn it on": {
        "message": "హోలా ఆఫ్, ఆన్ క్లిక్"
    },
    "Hola site list": {
        "message": "Hola సైట్ జాబితా"
    },
    "I can now access $1 from any country!": {
        "message": "నేను ఇప్పుడు ఏ దేశం నుండి $1 యాక్సెస్ చేయవచ్చు!"
    },
    "I did not experience any buffering": {
        "message": "నేను ఏ బఫరింగ్ అనుభూతి లేదు"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "నేను కేవలం $1 కోసం హోలా ఉపయోగించి ఒక సెన్సార్ సైట్ ఆక్సెస్డ్!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "నేను నా దేశంలో $2 వీక్షించడానికి $1 ఉపయోగించి, మరియు వేగంగా సర్ఫ్ చేస్తున్నాను!"
    },
    "IC": {
        "message": "కానరీ దీవులు"
    },
    "ID": {
        "message": "ఇండోనేషియా"
    },
    "IE": {
        "message": "ఐర్ లాండ్"
    },
    "IL": {
        "message": "ఇస్రాయేల్"
    },
    "IM": {
        "message": "ఐల్ ఆఫ్ మాన్"
    },
    "IN": {
        "message": "భారత దేశం"
    },
    "IO": {
        "message": "బ్రిటిష్ భారతీయ ఓషన్ ప్రాంతం"
    },
    "IQ": {
        "message": "ఇరాక్"
    },
    "IR": {
        "message": "ఇరాన్"
    },
    "IS": {
        "message": "ఐస్లాండ్"
    },
    "IT": {
        "message": "ఇటలి"
    },
    "Improve translation": {
        "message": "అనువాద మెరుగుపరచండి"
    },
    "Initializing...": {
        "message": "ప్రారంభిస్తోంది..."
    },
    "Install": {
        "message": "ఇన్స్టాల్"
    },
    "Install Accelerator": {
        "message": "Accelerator ఇన్స్టాల్"
    },
    "Install Free Hola Accelerator": {
        "message": "ఉచిత Hola Accelerator ఇన్స్టాల్"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "ఉచిత కోసం Hola ఉపయోగించడం కొనసాగించాలని Hola ఇంజిన్ ఇన్స్టాల్"
    },
    "Instantly watch any torrent Video": {
        "message": "తక్షణమే ఏ టొరెంట్ వీడియో చూడటానికి"
    },
    "Invite friends - free Premium.": {
        "message": "స్నేహితులను ఆహ్వానించండి - ఉచిత ప్రీమియం."
    },
    "Invite friends. Get Premium.": {
        "message": "స్నేహితులను ఆహ్వానించండి. ప్రీమియం పొందండి."
    },
    "It was okay": {
        "message": "ఇది ఫరవాలేదు"
    },
    "JE": {
        "message": "జర్సి"
    },
    "JM": {
        "message": "జమైకా"
    },
    "JO": {
        "message": "జార్డాన్"
    },
    "JP": {
        "message": "జపాన్"
    },
    "JT": {
        "message": "జాన్స్టన్ ద్వీపం"
    },
    "KE": {
        "message": "కెన్యా"
    },
    "KG": {
        "message": "కిర్జిస్తాన్"
    },
    "KH": {
        "message": "కంబోడియా"
    },
    "KI": {
        "message": "కిరిబాటి"
    },
    "KM": {
        "message": "కొమొరోస్"
    },
    "KN": {
        "message": "సెంట్ కిట్ట్స్ మరియు నెవిస్"
    },
    "KP": {
        "message": "ఉత్తర కొరియా"
    },
    "KR": {
        "message": "దక్షిణ కొరియా"
    },
    "KW": {
        "message": "కువైట్"
    },
    "KY": {
        "message": "కేమాన్ దీవులు"
    },
    "KZ": {
        "message": "కజాఖస్తాన్"
    },
    "LA": {
        "message": "లావోస్"
    },
    "LB": {
        "message": "లెబనాన్"
    },
    "LC": {
        "message": "సెంట్ లూసియా"
    },
    "LI": {
        "message": "లిక్టెస్టేన్"
    },
    "LK": {
        "message": "శ్రీలంక"
    },
    "LR": {
        "message": "లైబీరియా"
    },
    "LS": {
        "message": "లెసోతో"
    },
    "LT": {
        "message": "లిథుయేనియా"
    },
    "LU": {
        "message": "లక్సంబర్గ్"
    },
    "LV": {
        "message": "లాట్వియ"
    },
    "LY": {
        "message": "లిబియా"
    },
    "Language": {
        "message": "భాష"
    },
    "Library": {
        "message": "లైబ్రరీ"
    },
    "Like it": {
        "message": "ఇష్టం"
    },
    "Loading": {
        "message": "లోడ్"
    },
    "Loading site...": {
        "message": "లోడ్..."
    },
    "Log in": {
        "message": "లోనికి ప్రవేశించండి"
    },
    "Log out": {
        "message": "లాగ్ అవుట్"
    },
    "Love Hola?": {
        "message": "Hola లవ్?"
    },
    "Love it": {
        "message": "ఇది లవ్"
    },
    "MA": {
        "message": "మొరాక్కో"
    },
    "MC": {
        "message": "మొనాకో"
    },
    "MD": {
        "message": "మోల్ డోవ"
    },
    "ME": {
        "message": "మోంటేనేగ్రో"
    },
    "MF": {
        "message": "సెంట్ మార్టిన్"
    },
    "MG": {
        "message": "మాడ్గాస్కార్"
    },
    "MH": {
        "message": "మార్షల్ దీవులు"
    },
    "MI": {
        "message": "మిడ్వే దీవులు"
    },
    "MK": {
        "message": "మేసెడోనియా"
    },
    "ML": {
        "message": "మాలి"
    },
    "MM": {
        "message": "మ్యాన్మార్"
    },
    "MN": {
        "message": "మంగోలియా"
    },
    "MO": {
        "message": "మాకావ్ SAR చైనా"
    },
    "MP": {
        "message": "ఉత్తర మరియానా దీవులు"
    },
    "MQ": {
        "message": "మార్టినిక్"
    },
    "MR": {
        "message": "మౌరిటేనియా"
    },
    "MS": {
        "message": "మోంట్సేర్రాట్"
    },
    "MT": {
        "message": "మాల్టా"
    },
    "MU": {
        "message": "మారిషస్"
    },
    "MV": {
        "message": "మాల్దీవులు"
    },
    "MW": {
        "message": "మాలావి"
    },
    "MX": {
        "message": "మెక్సికో"
    },
    "MY": {
        "message": "మలేషియా"
    },
    "MZ": {
        "message": "మొజాంబిక్"
    },
    "Make your Internet better with $1": {
        "message": "మీ ఇంటర్నెట్ ఉత్తమంగా $1"
    },
    "Menu": {
        "message": "మెనూ"
    },
    "Might not work on all sites": {
        "message": "అన్ని సైట్లలో పని చేయకపోవచ్చు"
    },
    "Mode": {
        "message": "మోడ్"
    },
    "More countries": {
        "message": "మరింత దేశాలు"
    },
    "More sites...": {
        "message": "మరింత..."
    },
    "More...": {
        "message": "మరింత..."
    },
    "My Account": {
        "message": "నా ఖాతా"
    },
    "My History": {
        "message": "నా చరిత్ర"
    },
    "My Settings": {
        "message": "నా సెట్టింగులు"
    },
    "My favorites": {
        "message": "నా ఇష్టాలు"
    },
    "NA": {
        "message": "నమీబియా"
    },
    "NC": {
        "message": "క్రొత్త కాలెడోనియా"
    },
    "NE": {
        "message": "నైజర్"
    },
    "NF": {
        "message": "నార్ఫాక్ దీవి"
    },
    "NG": {
        "message": "నైజీరియా"
    },
    "NI": {
        "message": "నికరాగువా"
    },
    "NL": {
        "message": "నేదర్లాండ్స్"
    },
    "NO": {
        "message": "నారవే"
    },
    "NP": {
        "message": "నేపాల్"
    },
    "NQ": {
        "message": "Dronning మాడ్ భూమి"
    },
    "NR": {
        "message": "నౌరు"
    },
    "NT": {
        "message": "తటస్థ జోన్"
    },
    "NU": {
        "message": "నియు"
    },
    "NZ": {
        "message": "న్యుజిలేండ్"
    },
    "Need Help?": {
        "message": "సహాయం కావాలా?"
    },
    "Netflix": {
        "message": "నెట్ఫ్లిక్స్"
    },
    "Never ask me again": {
        "message": "నన్ను మళ్లీ ఎప్పటికీ అడగవద్దు"
    },
    "Never be a peer": {
        "message": "ఒక పీర్ ఎప్పటికీ"
    },
    "No": {
        "message": "సంఖ్య"
    },
    "No idle peers found.": {
        "message": "ఏ పనిలేకుండా సహచరులకు దొరకలేదు."
    },
    "No recent videos found": {
        "message": "ఇటీవలి వీడియోలను దొరకలేదు"
    },
    "No saved videos found": {
        "message": "సేవ్ చేసిన వీడియోలు దొరకలేదు"
    },
    "No title": {
        "message": "శీర్షిక"
    },
    "No videos found": {
        "message": "వీడియోలు ఏవీ"
    },
    "No videos found on active page": {
        "message": "క్రియాశీల పేజీ ఏవీ లేవు వీడియోలు"
    },
    "No, Thanks": {
        "message": "వద్దు, ధన్యవాదాలు"
    },
    "No, fix it": {
        "message": "కాదు, అది పరిష్కరించడానికి"
    },
    "Not working?": {
        "message": "పని కాదు?"
    },
    "Number of users that pressed not working": {
        "message": "పని కాదు ఒత్తిడి వినియోగదారుల సంఖ్య"
    },
    "Number of users that use this option": {
        "message": "ఈ ఎంపికను ఉపయోగించే వినియోగదారుల సంఖ్య"
    },
    "OM": {
        "message": "ఒమాన్"
    },
    "Off": {
        "message": "ఆఫ్"
    },
    "Oh, yes!": {
        "message": "అవును!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox యొక్క పాత వెర్షన్ను. ప్రెస్ <a> ఇక్కడ </a> అప్గ్రేడ్."
    },
    "On": {
        "message": "పైన"
    },
    "Open Media Player": {
        "message": "ఓపెన్ మీడియా ప్లేయర్"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "మా బ్రాండ్ న్యూ Mplayer త్వరలో వస్తోంది!"
    },
    "PA": {
        "message": "పనామా"
    },
    "PC": {
        "message": "పసిఫిక్ దీవులు ట్రస్ట్ భూభాగం"
    },
    "PE": {
        "message": "పెరూ"
    },
    "PF": {
        "message": "ఫ్రెంచ్ పోలినిషియా"
    },
    "PG": {
        "message": "పాపువా న్యు గినియా"
    },
    "PH": {
        "message": "ఫిలి పైన్స్"
    },
    "PK": {
        "message": "పాకిస్తాన్"
    },
    "PL": {
        "message": "పోలాండ్"
    },
    "PM": {
        "message": "సెంట్ పియెర్ మరియు మికెలాన్"
    },
    "PN": {
        "message": "పిట్కెర్న్"
    },
    "PR": {
        "message": "పోటోరికో"
    },
    "PS": {
        "message": "పాలిస్తినియాన్ ప్రాంతం"
    },
    "PT": {
        "message": "పోర్చుగల్"
    },
    "PU": {
        "message": "సంయుక్త ఇతరాలు పసిఫిక్ దీవులు"
    },
    "PW": {
        "message": "పలావు"
    },
    "PY": {
        "message": "పెరగువే"
    },
    "PZ": {
        "message": "పనామా కాలువ జోన్"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "మీరు అటువంటి ప్రకటన బ్లాకర్స్, ఇతర VPN సేవలు, మీ ప్రాక్సీ సెట్టింగ్లను నియంత్రించడానికి ఉండవచ్చు భావించే ఇతర <a>పొడిగింపులు</a> డిసేబుల్ చెయ్యండి"
    },
    "Please enter a valid email address.": {
        "message": "ఒక చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామా నమోదు చేయండి."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com ఒక వెబ్ సైట్ చిరునామా నమోదు చేయండి"
    },
    "Please help us get better": {
        "message": "మాకు మంచి పొందడానికి సహాయం చేయండి"
    },
    "Popular in $1": {
        "message": "ప్రాచుర్యం లో $1"
    },
    "Popular in the world": {
        "message": "ప్రపంచంలో ప్రాచుర్యం"
    },
    "Popular sites": {
        "message": "ప్రజాదరణ సైట్లు"
    },
    "Premium": {
        "message": "ప్రీమియమ్"
    },
    "QA": {
        "message": "కతర్"
    },
    "QO": {
        "message": "సుదూర ఓషియానియా"
    },
    "RE": {
        "message": "రియూనియన్"
    },
    "RO": {
        "message": "రోమానియా"
    },
    "RS": {
        "message": "సెర్బియా"
    },
    "RU": {
        "message": "రష్య"
    },
    "RW": {
        "message": "ర్వాండా"
    },
    "Rate us": {
        "message": "మాకు రేటు"
    },
    "Recent Videos": {
        "message": "ఇటీవలి వీడియోలు"
    },
    "Reload": {
        "message": "రీలోడ్"
    },
    "Reload Hola": {
        "message": "హోలా రీలోడ్"
    },
    "Remember server": {
        "message": "సర్వర్ గుర్తుంచుకో"
    },
    "Report a problem": {
        "message": "ఒక సమస్యను నివేదించండి"
    },
    "Retry safe mode": {
        "message": "సేఫ్ మోడ్ తిరిగి ప్రయత్నించు"
    },
    "SA": {
        "message": "సౌదీ అరేబియా"
    },
    "SB": {
        "message": "సోలోమన్ దీవులు"
    },
    "SC": {
        "message": "సీషెల్స్"
    },
    "SD": {
        "message": "సుడాన్"
    },
    "SE": {
        "message": "స్వీడన్"
    },
    "SG": {
        "message": "సింగపూర్"
    },
    "SH": {
        "message": "సెంట్ హెలినా"
    },
    "SI": {
        "message": "స్లోవేనియా"
    },
    "SJ": {
        "message": "స్వాల్బార్డ్ మరియు యాన్ మాయేన్"
    },
    "SK": {
        "message": "స్లోవేకియా"
    },
    "SL": {
        "message": "సియెర్రా లియాన్"
    },
    "SM": {
        "message": "సాన్ మారినో"
    },
    "SN": {
        "message": "సెనెగల్"
    },
    "SO": {
        "message": "సోమాలియా"
    },
    "SR": {
        "message": "సురినామ్"
    },
    "ST": {
        "message": "సావోటోమ్ మరియు ప్రిన్సిపే"
    },
    "SU": {
        "message": "యూనియన్ ఆఫ్ సోవియట్ సోషలిస్ట్ రిపబ్లిక్స్"
    },
    "SV": {
        "message": "ఎల్ సాల్వడోర్"
    },
    "SY": {
        "message": "సిరియా"
    },
    "SZ": {
        "message": "స్వాజీలేండ్"
    },
    "Safe": {
        "message": "సేఫ్"
    },
    "Safe mode": {
        "message": "సురక్షిత మోడ్"
    },
    "Save": {
        "message": "సేవ్"
    },
    "Saved Videos": {
        "message": "సేవ్ వీడియోలు"
    },
    "Saved for later": {
        "message": "తరువాత కోసం సేవ్"
    },
    "Search video title": {
        "message": "వీడియోను శోధించు టైటిల్"
    },
    "Select a Country": {
        "message": "ఒక దేశం ఎంచుకోండి"
    },
    "Select site to unblock": {
        "message": "అనుమతించవచ్చు సైట్ ఎంచుకోండి"
    },
    "Server saved!": {
        "message": "సర్వర్ సేవ్!"
    },
    "Set safe mode for $1 $2": {
        "message": "సెట్ సేఫ్ మోడ్ $1 $2"
    },
    "Settings": {
        "message": "సెట్టింగులు"
    },
    "Share $1 on $2": {
        "message": "$2 న $1 Share"
    },
    "Share $1 via $2": {
        "message": "$2 ద్వారా $1 Share"
    },
    "Share with friends!": {
        "message": "స్నేహితులతో భాగస్వామ్యం!"
    },
    "Sign up": {
        "message": "సైన్ అప్"
    },
    "Solve buffering": {
        "message": "బఫరింగ్ పరిష్కరించండి"
    },
    "Solve buffering problems with": {
        "message": "తో బఫరింగ్ సమస్యలను పరిష్కరించండి"
    },
    "Solves it": {
        "message": "ఛేదిస్తాడు"
    },
    "Staff Picks": {
        "message": "సిబ్బంది ఎంపికలు"
    },
    "Start Hola": {
        "message": "ప్రారంభించు"
    },
    "Starting...": {
        "message": "ప్రారంభిస్తోంది..."
    },
    "Stop Hola": {
        "message": "స్టాప్ Hola"
    },
    "Stopping peer routing...": {
        "message": "పీర్ రౌటింగ్ ఆపడం..."
    },
    "Stream": {
        "message": "స్ట్రీమ్"
    },
    "Stream Instantly": {
        "message": "వెంటనే STREAM"
    },
    "Submit": {
        "message": "సమర్పించండి"
    },
    "Support Hola": {
        "message": "మద్దతు హాయ్"
    },
    "TC": {
        "message": "తుర్క్ మరియు కాలికోస్ దీవులు"
    },
    "TD": {
        "message": "చాద్"
    },
    "TF": {
        "message": "ఫ్రెంచ్ దక్షిణ ప్రాంతాలు"
    },
    "TG": {
        "message": "టోగో"
    },
    "TH": {
        "message": "థాయ్ లాండ్"
    },
    "TJ": {
        "message": "టాజీకిస్తాన్"
    },
    "TK": {
        "message": "టోకేలావ్"
    },
    "TL": {
        "message": "తూర్పు టిమోర్"
    },
    "TM": {
        "message": "తుర్కమెస్తాన్"
    },
    "TN": {
        "message": "ట్యునీషియా"
    },
    "TO": {
        "message": "టోంగా"
    },
    "TR": {
        "message": "టర్కీ"
    },
    "TT": {
        "message": "ట్రినిడేడ్ మరియు టొబాగో"
    },
    "TV": {
        "message": "టువాలు"
    },
    "TW": {
        "message": "టైవాన్"
    },
    "TZ": {
        "message": "టాంజానియా"
    },
    "Talk to us on $1": {
        "message": "$1 న మాకు చర్చ"
    },
    "Tell friends about $1": {
        "message": "స్నేహితులు గురించి $1 చెప్పండి"
    },
    "Testing connection...": {
        "message": "టెస్టింగ్ కనెక్షన్..."
    },
    "Thank you!": {
        "message": "ధన్యవాదాలు!"
    },
    "There seems to be an error": {
        "message": "లోపం ఉన్నట్లు తెలుస్తోంది"
    },
    "Top popular sites": {
        "message": "టాప్ ప్రముఖ సైట్లు"
    },
    "Translate to your language": {
        "message": "మీ భాషను అనువదించు"
    },
    "Try again": {
        "message": "మళ్ళీ ప్రయత్నించండి"
    },
    "Try another server": {
        "message": "మరొక సర్వర్ ప్రయత్నించండి"
    },
    "Try it": {
        "message": "దీనిని ప్రయత్నించండి"
    },
    "Try safe mode": {
        "message": "సురక్షిత మోడ్ను ప్రయత్నించండి"
    },
    "Try to <span>reload</span>": {
        "message": "<span> రీలోడ్ </span> ప్రయత్నించండి"
    },
    "Trying another peer...": {
        "message": "మరో పీర్ ప్రయత్నిస్తోంది..."
    },
    "Turn off Accelerator": {
        "message": "యాక్సిలేటర్ ఆఫ్ తిరగండి"
    },
    "Turn off Hola": {
        "message": "హోలా ఆఫ్ తిరగండి"
    },
    "Turn on Accelerator": {
        "message": "యాక్సిలేటర్ చెయ్యి"
    },
    "Turn on Hola": {
        "message": "హోలా ఆన్ చెయ్యి"
    },
    "Turn on to get started": {
        "message": "ప్రారంభించడానికి న తిరగండి"
    },
    "UA": {
        "message": "యుక్రెన్"
    },
    "UG": {
        "message": "యుగాండా"
    },
    "UM": {
        "message": "సంయుక్త రాజ్య అమెరికా యునైటెడ్ స్టేట్స్ మైనర్ బయట ఉన్న దీవులు"
    },
    "US": {
        "message": "సంయుక్త రాజ్య అమెరికా"
    },
    "UY": {
        "message": "ఉరుగువే"
    },
    "UZ": {
        "message": "ఉజ్బెకిస్తాన్"
    },
    "Unblocker is disabled": {
        "message": "Unblocker నిలిపివేయబడింది"
    },
    "Update": {
        "message": "అప్డేట్"
    },
    "Upgrade": {
        "message": "అప్డేట్"
    },
    "Using": {
        "message": "ఉపయోగించి"
    },
    "Using Hola": {
        "message": "Hola ఉపయోగించి"
    },
    "VA": {
        "message": "వేటికెన్"
    },
    "VC": {
        "message": "సెంట్ విన్సెంట్ మరియు గ్రెనడీన్స్"
    },
    "VD": {
        "message": "ఉత్తర వియత్నాం"
    },
    "VE": {
        "message": "వెనుజువేలా"
    },
    "VG": {
        "message": "బ్రిటిష్ వర్జిన్ దీవులు"
    },
    "VI": {
        "message": "యు.ఎస్. వర్జిన్ దీవులు"
    },
    "VN": {
        "message": "వియట్నాం"
    },
    "VPN Premium": {
        "message": "VPN ప్రీమియమ్"
    },
    "VU": {
        "message": "వనౌటు"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome యొక్క చాలా పాత వెర్షన్, <a> నవీకరణ </a> Chrome హోలా ఉపయోగించడానికి"
    },
    "Video": {
        "message": "వీడియో"
    },
    "Video stuck?": {
        "message": "వీడియో కష్టం?"
    },
    "Videos available for instant streaming": {
        "message": "తక్షణ స్ట్రీమింగ్ అందుబాటులో వీడియోలు"
    },
    "WF": {
        "message": "వాలిస్ మరియు ఫ్యుత్యునా"
    },
    "WK": {
        "message": "వేక్ దీవి"
    },
    "WS": {
        "message": "సమోవా"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "ఇతర పరికరాల్లో హోలా వాంట్? (Xbox, PS, ఆపిల్ TV, ఐఫోన్ ...). ఇక్కడ క్లిక్ చేయండి"
    },
    "Want to know more?": {
        "message": "మరింత తెలుసుకోవాలంటే?"
    },
    "Watch Now": {
        "message": "ఇప్పుడు చూడండి"
    },
    "We found $1 videos": {
        "message": "మేము కనుగొన్న $1 వీడియోలు"
    },
    "We will be in touch with you soon": {
        "message": "మేము వెంటనే మీరు సన్నిహితంగా ఉంటుంది"
    },
    "Working!": {
        "message": "పని!"
    },
    "Working?": {
        "message": "పని?"
    },
    "Works on all sites but slower": {
        "message": "అన్ని సైట్లు కానీ నెమ్మదిగా వర్క్స్"
    },
    "YD": {
        "message": "యెమెన్ పీపుల్స్ డెమోక్రటిక్ రిపబ్లిక్"
    },
    "YE": {
        "message": "యెమెన్"
    },
    "YT": {
        "message": "మాయొట్టి"
    },
    "Yes": {
        "message": "అవును"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "మీరు Hola ఉపయోగించడానికి Opera యొక్క తాజా వెర్షన్ అప్గ్రేడ్ అవసరం. నొక్కండి <a>ఇక్కడ</a> అప్గ్రేడ్."
    },
    "ZA": {
        "message": "దక్షిణ ఆఫ్రికా రాజ్యం"
    },
    "ZM": {
        "message": "జాంబియా"
    },
    "ZW": {
        "message": "జింబాబ్వే"
    },
    "ZZ": {
        "message": "తెలియని లేదా చెల్లని ప్రాంతం"
    },
    "app_desc": {
        "message": "మీ దేశం, సంస్థ లేదా Hola తో పాఠశాలలో బ్లాక్ వెబ్సైట్లను యాక్సెస్! Hola ఉచిత మరియు ఉపయోగించడానికి సులభం!"
    },
    "app_name": {
        "message": "హోలా బెటర్ ఇంటర్నెట్"
    },
    "back to": {
        "message": "కు వెనుకకు"
    },
    "changing...": {
        "message": "మారుతున్న..."
    },
    "cool sites": {
        "message": "చల్లని సైట్లు"
    },
    "current site": {
        "message": "ప్రస్తుత సైట్"
    },
    "day": {
        "message": "రోజు"
    },
    "days": {
        "message": "రోజులు"
    },
    "even more...": {
        "message": "మరింత..."
    },
    "mode": {
        "message": "మోడ్"
    },
    "more options...": {
        "message": "మరిన్ని ఎంపికలు..."
    },
    "not working?": {
        "message": "పని కాదు?"
    },
    "not working? try another server": {
        "message": "పని కాదు? మరొక సర్వర్ ప్రయత్నించండి"
    },
    "on this page": {
        "message": "ఈ పేజీలో"
    },
    "sites that are censored": {
        "message": "సెన్సార్ సైట్లని"
    },
    "start": {
        "message": "ప్రారంభించు"
    },
    "working? remember": {
        "message": "పని? గుర్తు"
    }
};
return E; });