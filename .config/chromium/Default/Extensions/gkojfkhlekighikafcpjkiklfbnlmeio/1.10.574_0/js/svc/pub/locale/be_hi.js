'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "के माध्यम से"
    },
    "$1 Buffering?": {
        "message": "$1 बफ़र?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 होला भी ऐसा ही करने के लिए यहाँ $2\n\nक्लिक करें का उपयोग करने के लिए: $3\n\nयह मुझे तेजी से इंटरनेट सर्फ और उपयोग करने देता है जो होला, स्थापित करता है $4$5"
    },
    "$1 VPN": {
        "message": "$1 वीपीएन"
    },
    "$1 VPN Premium": {
        "message": "$1 वीपीएन प्रीमियम"
    },
    "$1 from $2": {
        "message": "$2 से $1"
    },
    "$1 not found": {
        "message": "$1 नहीं मिला"
    },
    "$1 via Hola": {
        "message": "होला के माध्यम से $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(कुछ होला सुविधाओं को अपनी संस्करण पर उपलब्ध नहीं हैं)"
    },
    "AC": {
        "message": "उदगम द्वीप"
    },
    "AD": {
        "message": "अन्डोरा"
    },
    "AE": {
        "message": "संयुक्त अरब अमीरात"
    },
    "AF": {
        "message": "अफ़गानिस्तान"
    },
    "AG": {
        "message": "एंटिगुआ और बरबुडा"
    },
    "AI": {
        "message": "एंगुइला"
    },
    "AL": {
        "message": "अल्बानिया"
    },
    "AM": {
        "message": "आर्मेनिया"
    },
    "AN": {
        "message": "नीदरलैंड्स एंटिलीज़"
    },
    "AO": {
        "message": "अंगोला"
    },
    "AQ": {
        "message": "अंटार्कटिका"
    },
    "AR": {
        "message": "अर्जेन्टीना"
    },
    "AS": {
        "message": "अमेरिकी समोआ"
    },
    "AT": {
        "message": "ऑस्ट्रिया"
    },
    "AU": {
        "message": "ऑस्ट्रेलिया"
    },
    "AW": {
        "message": "अरूबा"
    },
    "AX": {
        "message": "एलैंड द्वीपसमूह"
    },
    "AZ": {
        "message": "अज़रबैजान"
    },
    "About": {
        "message": "के बारे में"
    },
    "About Hola": {
        "message": "होला बारे में"
    },
    "Accelerator": {
        "message": "त्वरक"
    },
    "Accelerator is": {
        "message": "त्वरक है"
    },
    "Access $1 - cool site!": {
        "message": "$1 पहुंच - शांत साइट!"
    },
    "Access $1?": {
        "message": "$1 का उपयोग?"
    },
    "Access any site from any country, free": {
        "message": "मुक्त, किसी भी देश से किसी भी साइट का उपयोग"
    },
    "Access cool sites": {
        "message": "पहुंच शांत साइटों"
    },
    "Access more sites": {
        "message": "उपयोग अधिक साइटों"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "पहुँच साइटों को अपने देश में सेंसर और होला के साथ अपने इंटरनेट में तेजी लाने - नि: शुल्क!"
    },
    "Accessing $1 with Hola": {
        "message": "होला साथ $1 तक पहुँचने"
    },
    "Account": {
        "message": "खाता"
    },
    "Account type": {
        "message": "खाता प्रकार"
    },
    "Activating...": {
        "message": "सक्रिय कर रहा है..."
    },
    "All ($1)": {
        "message": "सभी ($1)"
    },
    "Apply settings...": {
        "message": "सेटिंग्स लागू करें ..."
    },
    "Author site:": {
        "message": "लेखक साइट:"
    },
    "Author:": {
        "message": "लेखक:"
    },
    "Awesome!": {
        "message": "कमाल है!"
    },
    "BA": {
        "message": "बोस्निया और हर्ज़िगोविना"
    },
    "BB": {
        "message": "बारबाडोस"
    },
    "BD": {
        "message": "बांग्लादेश"
    },
    "BE": {
        "message": "बेल्जियम"
    },
    "BF": {
        "message": "बुर्किना फ़ासो"
    },
    "BG": {
        "message": "बुल्गारिया"
    },
    "BH": {
        "message": "बाहरेन"
    },
    "BI": {
        "message": "बुरुंडी"
    },
    "BJ": {
        "message": "बेनिन"
    },
    "BL": {
        "message": "सेंट बार्थेलेमी"
    },
    "BM": {
        "message": "बरमूडा"
    },
    "BN": {
        "message": "ब्रुनेई"
    },
    "BO": {
        "message": "बोलीविया"
    },
    "BQ": {
        "message": "ब्रिटिश अंटार्कटिक क्षेत्र"
    },
    "BR": {
        "message": "ब्राजील"
    },
    "BS": {
        "message": "बहामा"
    },
    "BT": {
        "message": "भूटान"
    },
    "BV": {
        "message": "बौवेत द्वीप"
    },
    "BW": {
        "message": "बोत्स्वाना"
    },
    "BY": {
        "message": "बेलारूस"
    },
    "BZ": {
        "message": "बेलिज"
    },
    "Back to $1": {
        "message": "वापस $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "IPhone / iPad के लिए होला पहले मिल जाना - अब रजिस्टर करें:"
    },
    "Browsing": {
        "message": "ब्राउजिंग"
    },
    "Buffering problems?": {
        "message": "बफरिंग समस्या?"
    },
    "Buffering?": {
        "message": "बफरिंग?"
    },
    "CA": {
        "message": "कनाडा"
    },
    "CC": {
        "message": "कोकोस द्वीप"
    },
    "CD": {
        "message": "कोंगो जनतांत्रिक गणतंत्र"
    },
    "CF": {
        "message": "सेंट्रल अफ्रीकन रिपब्लिक"
    },
    "CG": {
        "message": "कांगो"
    },
    "CH": {
        "message": "स्विस"
    },
    "CI": {
        "message": "आईवरी कोस्ट"
    },
    "CK": {
        "message": "कुक द्वीपसमूह"
    },
    "CL": {
        "message": "चिली"
    },
    "CM": {
        "message": "कैमरून"
    },
    "CN": {
        "message": "चीन"
    },
    "CO": {
        "message": "कोलम्बिया"
    },
    "CP": {
        "message": "क्लिपर्टन द्वीप"
    },
    "CR": {
        "message": "कोस्टारीका"
    },
    "CS": {
        "message": "सर्बिया व मॉण्टेनेग्रो"
    },
    "CT": {
        "message": "कैंटन और एंडरबरी द्वीप"
    },
    "CU": {
        "message": "क्यूबा"
    },
    "CV": {
        "message": "कैप वर्डे"
    },
    "CX": {
        "message": "क्रिसमस द्वीप"
    },
    "CY": {
        "message": "साइप्रस"
    },
    "CZ": {
        "message": "चेक गणराज्य"
    },
    "Changing country...": {
        "message": "देश बदलना..."
    },
    "Check out Hola for $1!": {
        "message": "$1 के लिए होला देखें!"
    },
    "Check out Hola for mobile devices": {
        "message": "मोबाइल उपकरणों के लिए होला बाहर की जाँच करें"
    },
    "Check your Internet connection": {
        "message": "आप इंटरनेट है सत्यापित करें"
    },
    "Choose<br>Country": {
        "message": "चुनें <br> देश"
    },
    "Configuring...": {
        "message": "विन्यास कर रहा है ..."
    },
    "Connecting...": {
        "message": "जुड़ रहा है ..."
    },
    "Cool site!": {
        "message": "कूल साइट!"
    },
    "Creative licenses": {
        "message": "क्रिएटिव लाइसेंस"
    },
    "DD": {
        "message": "पूर्वी जर्मनी"
    },
    "DE": {
        "message": "जर्मनी"
    },
    "DG": {
        "message": "डिएगो गार्सिया"
    },
    "DJ": {
        "message": "जिबूती"
    },
    "DK": {
        "message": "डेनमार्क"
    },
    "DM": {
        "message": "डोमिनिक"
    },
    "DO": {
        "message": "डोमिनिकन गणराज्य"
    },
    "DZ": {
        "message": "अल्जीरिया"
    },
    "Delete": {
        "message": "हटाना"
    },
    "Deleted from my list": {
        "message": "मेरी सूची से हटाए गए"
    },
    "Did it work?": {
        "message": "यह काम किया?"
    },
    "Did you experience any buffering?": {
        "message": "आप किसी भी तरह की बफरिंग आ रही है?"
    },
    "Disliked it": {
        "message": "यह नापसंद"
    },
    "Don't show again for $1 for one week": {
        "message": "एक सप्ताह के लिए $1 के लिए फिर से दिखाने के लिए नहीं"
    },
    "Don't show again for any site for one week": {
        "message": "एक सप्ताह के लिए किसी भी साइट के लिए फिर से दिखाने के लिए नहीं"
    },
    "Downloading": {
        "message": "डाउनलोडिंग"
    },
    "EA": {
        "message": "सेउटा और मेलिला"
    },
    "EC": {
        "message": "इक्वाडोर"
    },
    "EE": {
        "message": "एस्टोनिया"
    },
    "EG": {
        "message": "मिस्र"
    },
    "EH": {
        "message": "पश्चिमी सहारा"
    },
    "ER": {
        "message": "इरिट्रिया"
    },
    "ES": {
        "message": "स्पेन"
    },
    "ET": {
        "message": "इथियोपिया"
    },
    "EU": {
        "message": "यूरोपीय संघ"
    },
    "Enable": {
        "message": "सक्षम"
    },
    "Enable Hola Accelerator": {
        "message": "होला त्वरक सक्रिय करें"
    },
    "Enjoy!": {
        "message": "आनंद लें!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "क्रोम के लिए होला मजा आ रहा है?"
    },
    "Enter site to access": {
        "message": "उपयोग हेतु साइट में प्रवेश करें"
    },
    "Enter your email": {
        "message": "अपने ईमेल दर्ज करें"
    },
    "FI": {
        "message": "फिनलैंड"
    },
    "FJ": {
        "message": "फिजी"
    },
    "FK": {
        "message": "फ़ॉकलैंड द्वीप"
    },
    "FM": {
        "message": "माइक्रोनेशिया"
    },
    "FO": {
        "message": "फरोए द्वीप"
    },
    "FQ": {
        "message": "फ्रांस के दक्षिणी और अंटार्कटिक प्रदेशों"
    },
    "FR": {
        "message": "फ्रांस"
    },
    "FX": {
        "message": "महानगर फ्रांस"
    },
    "Fast": {
        "message": "उपवास"
    },
    "Finding new peers...": {
        "message": "नए साथियों ढूंढ रहा है ..."
    },
    "Finding peers...": {
        "message": "साथियों ढूंढ रहा है ..."
    },
    "Free": {
        "message": "मुक्त"
    },
    "From": {
        "message": "से"
    },
    "Full list": {
        "message": "पूरी सूची"
    },
    "GA": {
        "message": "गैबॉन"
    },
    "GB": {
        "message": "ब्रितन"
    },
    "GD": {
        "message": "ग्रेनेडा"
    },
    "GE": {
        "message": "जॉर्जिया"
    },
    "GF": {
        "message": "फ़्रांसीसी गिआना"
    },
    "GG": {
        "message": "ग्वेर्नसे"
    },
    "GH": {
        "message": "घाना"
    },
    "GI": {
        "message": "जिब्राल्टर"
    },
    "GL": {
        "message": "ग्रीनलैण्ड"
    },
    "GM": {
        "message": "गाम्बिया"
    },
    "GN": {
        "message": "गिनी"
    },
    "GP": {
        "message": "ग्वाडेलोप"
    },
    "GQ": {
        "message": "इक्वेटोरियल गिनी"
    },
    "GR": {
        "message": "ग्रीस"
    },
    "GS": {
        "message": "दक्षिण जोर्जिया और दक्षिण सैंडविच द्वीपसमूह"
    },
    "GT": {
        "message": "गोतेदाला"
    },
    "GU": {
        "message": "गुआम"
    },
    "GW": {
        "message": "गीनी-बिसाउ"
    },
    "GY": {
        "message": "गुयाना"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 अनब्लॉक करें"
    },
    "Get Free Premium": {
        "message": "नि: शुल्क प्रीमियम करें"
    },
    "Get Hola Accelerator": {
        "message": "होला त्वरक करें"
    },
    "Get Hola Player": {
        "message": "जाओ होला प्लेयर"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "संयुक्त राष्ट्र बाधित, विज्ञापन नि: शुल्क सेवा के लिए होला प्लस करें."
    },
    "Get Hola Premium": {
        "message": "होला प्रीमियम करें"
    },
    "Get Hola for Android": {
        "message": "एंड्रॉयड के लिए होला करें"
    },
    "Get Premium support": {
        "message": "बढ़िया मदद मिलती है"
    },
    "Get Unlimited Unblocking": {
        "message": "असीमित अनब्लॉक करें"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", सेंसर साइटों के लिए उपयोग हो अब यह कोशिश: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "स्काइपे से अधिक इंजीनियर से मदद प्राप्त करें:"
    },
    "Get the Fastest Servers": {
        "message": "सबसे तेजी से सर्वर प्राप्त"
    },
    "Go": {
        "message": "जाओ"
    },
    "Go Hola Premium": {
        "message": "जाओ होला प्रीमियम"
    },
    "HK": {
        "message": "हांगकांग विशेष प्रशासनिक क्षेत्र चीन"
    },
    "HM": {
        "message": "हर्ड द्वीप और मैकडोनॉल्ड द्वीप"
    },
    "HN": {
        "message": "हाण्डूरस"
    },
    "HR": {
        "message": "क्रोशिया"
    },
    "HT": {
        "message": "हाइती"
    },
    "HU": {
        "message": "हंगरी"
    },
    "Hate it": {
        "message": "घृणा करता हूं"
    },
    "Help": {
        "message": "मदद"
    },
    "Hey,\n\nI'm using": {
        "message": "अरे,\n\nमैं उपयोग कर रहा हूँ"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "हाय,\n\nमैं $1 ($2) का उपयोग शुरू कर दिया. यह मुझे तेजी से इंटरनेट सर्फ और मेरे देश में $3 उपयोग करने देता है."
    },
    "Hola": {
        "message": "होला"
    },
    "Hola Accelerator": {
        "message": "होला त्वरक"
    },
    "Hola Media Player": {
        "message": "होला मीडिया प्लेयर"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "एक और विस्तार अपनी प्रॉक्सी सेटिंग नियंत्रित कर रहा है क्योंकि होला काम नहीं कर सकता."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "होला विंडोज 8 मोड में अच्छी तरह से काम नहीं करता है. डेस्कटॉप मोड में स्विच करें. निर्देश के लिए <a> यहां </a> क्लिक करें"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "होला अभी उपलब्ध नहीं है, लेकिन हम उस पर काम कर रहे हैं."
    },
    "Hola is off, click it to turn it on": {
        "message": "होला बंद है, पर बारी के लिए क्लिक करें"
    },
    "Hola site list": {
        "message": "Hola साइट सूची"
    },
    "I can now access $1 from any country!": {
        "message": "मैं अब किसी भी देश से $1 का उपयोग कर सकते हैं!"
    },
    "I did not experience any buffering": {
        "message": "मैं किसी भी तरह की बफरिंग अनुभव नहीं था"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "मैं सिर्फ $1 के लिए होला का उपयोग कर एक सेंसर साइट पहुँचा!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "मैं अपने देश में $2 को देखने के लिए $1 का उपयोग कर, और तेजी से सर्फ कर रहा हूँ!"
    },
    "IC": {
        "message": "कैनरी द्वीप"
    },
    "ID": {
        "message": "इंडोनेशिया"
    },
    "IE": {
        "message": "आयरलैंड"
    },
    "IL": {
        "message": "इसराइल"
    },
    "IM": {
        "message": "आइल ऑफ मैन"
    },
    "IN": {
        "message": "भारत"
    },
    "IO": {
        "message": "ब्रिटिश हिंद महासागरीय क्षेत्र"
    },
    "IQ": {
        "message": "इराक"
    },
    "IR": {
        "message": "ईरान"
    },
    "IS": {
        "message": "आइसलैंड"
    },
    "IT": {
        "message": "इटली"
    },
    "Improve translation": {
        "message": "अनुवाद में सुधार"
    },
    "Initializing...": {
        "message": "आरंभ कर रहा है ..."
    },
    "Install": {
        "message": "स्थापित करें"
    },
    "Install Accelerator": {
        "message": "त्वरक स्थापित करें"
    },
    "Install Free Hola Accelerator": {
        "message": "मुफ्त होला त्वरक स्थापित करें"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "मुक्त करने के लिए होला का उपयोग जारी रखने के लिए होला इंजन स्थापित"
    },
    "Instantly watch any torrent Video": {
        "message": "तुरंत किसी भी धार वीडियो देखने"
    },
    "Invite friends - free Premium.": {
        "message": "मित्रों को आमंत्रित करें - मुफ्त प्रीमियम."
    },
    "Invite friends. Get Premium.": {
        "message": "मित्रों को आमंत्रित करें. प्रीमियम करें."
    },
    "It was okay": {
        "message": "यह ठीक था"
    },
    "JE": {
        "message": "जर्सी"
    },
    "JM": {
        "message": "जमाइका"
    },
    "JO": {
        "message": "जोर्डन"
    },
    "JP": {
        "message": "जापान"
    },
    "JT": {
        "message": "जॉनसन द्वीप"
    },
    "KE": {
        "message": "केन्या"
    },
    "KG": {
        "message": "किर्गिज़तान"
    },
    "KH": {
        "message": "कम्बोडिया"
    },
    "KI": {
        "message": "किरिबाती"
    },
    "KM": {
        "message": "कोमोरोस"
    },
    "KN": {
        "message": "सेंट किट्स और नेविस"
    },
    "KP": {
        "message": "उत्तर कोरिया"
    },
    "KR": {
        "message": "दक्षिण कोरिया"
    },
    "KW": {
        "message": "कुवैत"
    },
    "KY": {
        "message": "केमैन द्वीपसमूह"
    },
    "KZ": {
        "message": "कजाखस्तान"
    },
    "LA": {
        "message": "लाओस"
    },
    "LB": {
        "message": "लेबनान"
    },
    "LC": {
        "message": "सेंट लूसिया"
    },
    "LI": {
        "message": "लिकटेंस्टीन"
    },
    "LK": {
        "message": "श्रीलंका"
    },
    "LR": {
        "message": "लाइबेरिया"
    },
    "LS": {
        "message": "लेसोथो"
    },
    "LT": {
        "message": "लिथुआनिया"
    },
    "LU": {
        "message": "लक्समबर्ग"
    },
    "LV": {
        "message": "लात्विया"
    },
    "LY": {
        "message": "लीबिया"
    },
    "Language": {
        "message": "भाषा"
    },
    "Library": {
        "message": "पुस्तकालय"
    },
    "Like it": {
        "message": "यह पसंद है"
    },
    "Loading": {
        "message": "लदान"
    },
    "Loading site...": {
        "message": "लदान"
    },
    "Log in": {
        "message": "लॉगिन"
    },
    "Log out": {
        "message": "बाहर प्रवेश करें"
    },
    "Love Hola?": {
        "message": "होला प्यार?"
    },
    "Love it": {
        "message": "इसे प्यार करना"
    },
    "MA": {
        "message": "मोरक्को"
    },
    "MC": {
        "message": "मोनाको"
    },
    "MD": {
        "message": "मोल्डाविया"
    },
    "ME": {
        "message": "मोंटेनेग्रो"
    },
    "MF": {
        "message": "सेंट मार्टिन"
    },
    "MG": {
        "message": "मैडागास्कर"
    },
    "MH": {
        "message": "मार्शल द्वीप"
    },
    "MI": {
        "message": "मिडवे द्वीप"
    },
    "MK": {
        "message": "मैसेडोनिया"
    },
    "ML": {
        "message": "माली"
    },
    "MM": {
        "message": "म्यानमार"
    },
    "MN": {
        "message": "मंगोलिया"
    },
    "MO": {
        "message": "मकाओ चीन"
    },
    "MP": {
        "message": "नॉर्दन मारियाना द्वीपसमूह"
    },
    "MQ": {
        "message": "मार्टीनिक"
    },
    "MR": {
        "message": "मॉरिटानिया"
    },
    "MS": {
        "message": "मॉन्ट्सेराट"
    },
    "MT": {
        "message": "माल्टा"
    },
    "MU": {
        "message": "मॉरिशस"
    },
    "MV": {
        "message": "मालदीव"
    },
    "MW": {
        "message": "मलावी"
    },
    "MX": {
        "message": "मेक्सिको"
    },
    "MY": {
        "message": "मलेशिया"
    },
    "MZ": {
        "message": "मोजाम्बिक"
    },
    "Make your Internet better with $1": {
        "message": "सुनिश्चित करें कि आपका इंटरनेट बेहतर के साथ $1"
    },
    "Menu": {
        "message": "मेनू"
    },
    "Might not work on all sites": {
        "message": "सभी साइटों पर काम नहीं कर सकता"
    },
    "Mode": {
        "message": "साधन"
    },
    "More countries": {
        "message": "अधिक देशों"
    },
    "More sites...": {
        "message": "अधिक..."
    },
    "More...": {
        "message": "अधिक..."
    },
    "My Account": {
        "message": "मेरा खाता"
    },
    "My History": {
        "message": "मेरा इतिहास"
    },
    "My Settings": {
        "message": "मेरी सेटिंग्स"
    },
    "My favorites": {
        "message": "मेरी पसंदीदा"
    },
    "NA": {
        "message": "नामीबिया"
    },
    "NC": {
        "message": "न्यू कैलेडोनिया"
    },
    "NE": {
        "message": "नाइजर"
    },
    "NF": {
        "message": "नॉरफ़ॉक द्वीप"
    },
    "NG": {
        "message": "नाइजीरिया"
    },
    "NI": {
        "message": "निकारागुआ"
    },
    "NL": {
        "message": "नीदरलैण्ड"
    },
    "NO": {
        "message": "नॉर्वे"
    },
    "NP": {
        "message": "नेपाल"
    },
    "NQ": {
        "message": "Dronning मॉड भूमि"
    },
    "NR": {
        "message": "नाउरु"
    },
    "NT": {
        "message": "तटस्थ क्षेत्र"
    },
    "NU": {
        "message": "नीयू"
    },
    "NZ": {
        "message": "न्यूज़ीलैंड"
    },
    "Need Help?": {
        "message": "मदद की ज़रूरत है?"
    },
    "Never ask me again": {
        "message": "फिर कभी नहीं पूछें"
    },
    "Never be a peer": {
        "message": "एक सहकर्मी होना कभी नहीं"
    },
    "No": {
        "message": "नहीं"
    },
    "No idle peers found.": {
        "message": "कोई बेकार साथियों पाया."
    },
    "No recent videos found": {
        "message": "कोई हाल के वीडियो मिला"
    },
    "No saved videos found": {
        "message": "कोई बचाया वीडियो मिला"
    },
    "No title": {
        "message": "कोई शीर्षक नहीं"
    },
    "No videos found": {
        "message": "कोई वीडियो नहीं मिले"
    },
    "No videos found on active page": {
        "message": "सक्रिय पृष्ठ पर कोई वीडियो नहीं मिला"
    },
    "No, Thanks": {
        "message": "नहीं, धन्यवाद"
    },
    "No, fix it": {
        "message": "नहीं, यह तय"
    },
    "Not working?": {
        "message": "काम नहीं?"
    },
    "Number of users that pressed not working": {
        "message": "काम नहीं दबाया वाले प्रयोक्ताओं की संख्या"
    },
    "Number of users that use this option": {
        "message": "इस विकल्प का उपयोग करने वाले उपयोगकर्ताओं की संख्या"
    },
    "OM": {
        "message": "ओमान"
    },
    "Off": {
        "message": "बंद"
    },
    "Oh, yes!": {
        "message": "हाँ, ओह!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox के पुराने संस्करण. प्रेस <a> यहां </a> उन्नत करने के लिए."
    },
    "On": {
        "message": "पर"
    },
    "Open Media Player": {
        "message": "ओपन मीडिया प्लेयर"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "हमारे ब्रांड नए Mplayer जल्द ही आ रहा है!"
    },
    "PA": {
        "message": "पनामा"
    },
    "PC": {
        "message": "प्रशांत द्वीप समूह ट्रस्ट क्षेत्र"
    },
    "PE": {
        "message": "पेरू"
    },
    "PF": {
        "message": "फ़्रांसीसी पॉलिनेशिया"
    },
    "PG": {
        "message": "पापुआ न्यू गिनी"
    },
    "PH": {
        "message": "फिलीपिंस"
    },
    "PK": {
        "message": "पाकिस्तान"
    },
    "PL": {
        "message": "पोलैंड"
    },
    "PM": {
        "message": "सेंट पिएरे और मिक्वेलन"
    },
    "PN": {
        "message": "पिटकैर्न"
    },
    "PR": {
        "message": "पर्टो रीको"
    },
    "PS": {
        "message": "फ़िलिस्तीन"
    },
    "PT": {
        "message": "पुर्तगाल"
    },
    "PU": {
        "message": "अमेरिका विविध प्रशांत द्वीप समूह"
    },
    "PW": {
        "message": "पलाऊ"
    },
    "PY": {
        "message": "पारागुए"
    },
    "PZ": {
        "message": "पनामा नहर क्षेत्र"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "आप ऐसे विज्ञापन ब्लॉकर्स, अन्य वीपीएन सेवाओं, के रूप में अपनेप्रॉक्सी सेटिंग्स को नियंत्रित कर सकते हैं लगता है कि अन्य <a>एक्सटेंशन</a>अक्षम करें"
    },
    "Please enter a valid email address.": {
        "message": "एक मान्य ईमेल पता दर्ज करें."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com की तरह, एक वेब साइट का पता दाखिल करें"
    },
    "Please help us get better": {
        "message": "हमें बेहतर हो मदद करो"
    },
    "Popular in $1": {
        "message": "लोकप्रिय $1"
    },
    "Popular in the world": {
        "message": "दुनिया में लोकप्रिय"
    },
    "Popular sites": {
        "message": "लोकप्रिय साइटों"
    },
    "Premium": {
        "message": "प्रीमियम"
    },
    "QA": {
        "message": "कतर"
    },
    "QO": {
        "message": "आउटलाइंग ओशिनिया"
    },
    "RE": {
        "message": "रियूनियन"
    },
    "RO": {
        "message": "रोमानिया"
    },
    "RS": {
        "message": "सर्बिया"
    },
    "RU": {
        "message": "रूस"
    },
    "RW": {
        "message": "रूआण्डा"
    },
    "Rate us": {
        "message": "हमें रेटिंग दें"
    },
    "Recent Videos": {
        "message": "हाल के वीडियो"
    },
    "Reload": {
        "message": "सीमा से अधिक लादना"
    },
    "Reload Hola": {
        "message": "होला पुनः लोड"
    },
    "Remember server": {
        "message": "सर्वर याद रखें"
    },
    "Report a problem": {
        "message": "कोई भी समस्या रिपोर्ट करें"
    },
    "Retry safe mode": {
        "message": "सुरक्षित मोड पुन: प्रयास करें"
    },
    "SA": {
        "message": "सऊदी अरब"
    },
    "SB": {
        "message": "सोलोमन द्वीप"
    },
    "SC": {
        "message": "सेशेल्स"
    },
    "SD": {
        "message": "सूडान"
    },
    "SE": {
        "message": "स्वीडन"
    },
    "SG": {
        "message": "सिंगापुर"
    },
    "SH": {
        "message": "सेंट हेलेना"
    },
    "SI": {
        "message": "स्लोवेनिया"
    },
    "SJ": {
        "message": "स्वालबर्ड और जान मायेन"
    },
    "SK": {
        "message": "स्लोवाकिया"
    },
    "SL": {
        "message": "सियरालेओन"
    },
    "SM": {
        "message": "सैन मेरीनो"
    },
    "SN": {
        "message": "सेनेगल"
    },
    "SO": {
        "message": "सोमालिया"
    },
    "SR": {
        "message": "सुरिनाम"
    },
    "ST": {
        "message": "साउ-तोम-प्रिंसिप"
    },
    "SU": {
        "message": "सोवियत संघ समाजवादी गणराज्य"
    },
    "SV": {
        "message": "अल साल्वाडोर"
    },
    "SY": {
        "message": "सीरिया"
    },
    "SZ": {
        "message": "सुआजीलैंड"
    },
    "Safe": {
        "message": "सुरक्षित"
    },
    "Safe mode": {
        "message": "सुरक्षित मोड"
    },
    "Save": {
        "message": "सेव"
    },
    "Saved Videos": {
        "message": "सहेजे गए वीडियो"
    },
    "Saved for later": {
        "message": "बाद के लिए बचा लिया"
    },
    "Search video title": {
        "message": "खोज वीडियो शीर्षक"
    },
    "Select a Country": {
        "message": "कोई देश चुनें"
    },
    "Select site to unblock": {
        "message": "जुदा करने के लिए साइट का चयन करें"
    },
    "Server saved!": {
        "message": "सर्वर बचाया!"
    },
    "Set safe mode for $1 $2": {
        "message": "सेट सुरक्षित मोड $1 के लिए $2"
    },
    "Settings": {
        "message": "सेटिंग्स"
    },
    "Share": {
        "message": "शेयर"
    },
    "Share $1 on $2": {
        "message": "$2 पर $1 शेयर"
    },
    "Share $1 via $2": {
        "message": "$2 के माध्यम से $1 शेयर"
    },
    "Share with friends!": {
        "message": "दोस्तों के साथ बांटें!"
    },
    "Sign up": {
        "message": "साइन अप"
    },
    "Solve buffering": {
        "message": "बफरिंग का समाधान"
    },
    "Solve buffering problems with": {
        "message": "साथ बफरिंग समस्याओं का समाधान"
    },
    "Solves it": {
        "message": "इसे हल"
    },
    "Staff Picks": {
        "message": "कर्मचारियों की पसंद"
    },
    "Start Hola": {
        "message": "प्रारंभ"
    },
    "Starting...": {
        "message": "शुरू ..."
    },
    "Stop Hola": {
        "message": "बंद करो होला"
    },
    "Stopping peer routing...": {
        "message": "सहकर्मी मार्ग रोक रहा है ..."
    },
    "Stream": {
        "message": "धारा"
    },
    "Stream Instantly": {
        "message": "तुरन्त स्ट्रीम"
    },
    "Submit": {
        "message": "प्रस्तुत करना"
    },
    "Support Hola": {
        "message": "समर्थन होला"
    },
    "TA": {
        "message": "त्रिस्तान दा कुन्हा"
    },
    "TC": {
        "message": "तुर्क् और् कैकोज़ द्वीप"
    },
    "TD": {
        "message": "चाड"
    },
    "TF": {
        "message": "फ़्रांसीसी दक्षिणी क्षेत्र"
    },
    "TG": {
        "message": "टोगो"
    },
    "TH": {
        "message": "थाइलैंड"
    },
    "TJ": {
        "message": "ताजिकिस्तान"
    },
    "TK": {
        "message": "तोकेलाउ"
    },
    "TL": {
        "message": "पूर्वी तिमोर"
    },
    "TM": {
        "message": "तुर्कमेनिस्तान"
    },
    "TN": {
        "message": "तुनिशिया"
    },
    "TO": {
        "message": "टोंगा"
    },
    "TR": {
        "message": "तुर्की"
    },
    "TT": {
        "message": "त्रिनिडाड और टोबैगो"
    },
    "TV": {
        "message": "तुवालु"
    },
    "TW": {
        "message": "ताइवान"
    },
    "TZ": {
        "message": "तंजा़निया"
    },
    "Talk to us on $1": {
        "message": "$1 पर हमसे बात करो"
    },
    "Tell friends about $1": {
        "message": "दोस्तों के बारे में $1 बताएँ"
    },
    "Testing connection...": {
        "message": "जांच कनेक्शन ..."
    },
    "Thank you!": {
        "message": "धन्यवाद!"
    },
    "There seems to be an error": {
        "message": "एक त्रुटि हो रहा है"
    },
    "Top popular sites": {
        "message": "शीर्ष लोकप्रिय साइटों"
    },
    "Translate to your language": {
        "message": "अपनी भाषा में अनुवाद"
    },
    "Try again": {
        "message": "फिर से कोशिश करें"
    },
    "Try another server": {
        "message": "एक और सर्वर की कोशिश करो"
    },
    "Try it": {
        "message": "यह कोशिश करो"
    },
    "Try safe mode": {
        "message": "सुरक्षित मोड की कोशिश करो"
    },
    "Try to <span>reload</span>": {
        "message": "<span> पुनः लोड </span> के लिए प्रयास करें"
    },
    "Trying another peer...": {
        "message": "एक अन्य सहकर्मी कोशिश कर रहा है..."
    },
    "Turn off Accelerator": {
        "message": "त्वरक बंद करें"
    },
    "Turn off Hola": {
        "message": "होला बंद करें"
    },
    "Turn on Accelerator": {
        "message": "एक्सीलेटर पर मुड़ें"
    },
    "Turn on Hola": {
        "message": "होला चालू करें"
    },
    "Turn on to get started": {
        "message": "आरंभ करने के लिए चालू करें"
    },
    "UA": {
        "message": "यूक्रेन"
    },
    "UG": {
        "message": "युगांडा"
    },
    "UM": {
        "message": "युनाइटेड स्टेट्स माइनर आउटलाइंग द्वीपसमूह"
    },
    "US": {
        "message": "संयुक्त राज्य अमेरिका"
    },
    "UY": {
        "message": "युरूगुए"
    },
    "UZ": {
        "message": "उजबेकिस्तान"
    },
    "Unblocker": {
        "message": "अवरोध हटाने वाला"
    },
    "Unblocker is disabled": {
        "message": "Unblocker अक्षम हो जाता है"
    },
    "Update": {
        "message": "अद्यतन करें"
    },
    "Upgrade": {
        "message": "अद्यतन"
    },
    "Using": {
        "message": "का प्रयोग"
    },
    "Using Hola": {
        "message": "होला का प्रयोग"
    },
    "VA": {
        "message": "वैटिकन"
    },
    "VC": {
        "message": "सेंट विनसेंट एंड ग्रेनाडाइन्स"
    },
    "VD": {
        "message": "उत्तरी वियतनाम"
    },
    "VE": {
        "message": "वेनेजुएला"
    },
    "VG": {
        "message": "ब्रिटिश वर्जिन द्वीपसमूह"
    },
    "VI": {
        "message": "अमेरिकी वर्जिन टापू"
    },
    "VN": {
        "message": "वियतनाम"
    },
    "VPN": {
        "message": "वीपीएन"
    },
    "VPN Premium": {
        "message": "वीपीएन प्रीमियम"
    },
    "VU": {
        "message": "वानुअतु"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "क्रोम के बहुत पुराने संस्करण, <a> अद्यतन </a> क्रोम होला उपयोग करने के लिए"
    },
    "Video": {
        "message": "वीडियो"
    },
    "Video stuck?": {
        "message": "वीडियो फंस रहे हैं?"
    },
    "Videos available for instant streaming": {
        "message": "तत्काल स्ट्रीमिंग के लिए उपलब्ध वीडियो"
    },
    "WF": {
        "message": "वालिस और फ़्यूचूना"
    },
    "WK": {
        "message": "वेक आइलैंड"
    },
    "WS": {
        "message": "समोआ"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "अन्य उपकरणों पर होला चाहते हैं? (एक्सबॉक्स, पुनश्च, एप्पल टी वी, iPhone ...). यहां क्लिक करें"
    },
    "Want to know more?": {
        "message": "और अधिक जानने की इच्छा है?"
    },
    "Watch Now": {
        "message": "अब देखिए"
    },
    "We found $1 videos": {
        "message": "हमने पाया $1 वीडियो"
    },
    "We will be in touch with you soon": {
        "message": "हम जल्द ही आप के साथ संपर्क में हो जाएगा"
    },
    "Working!": {
        "message": "काम कर!"
    },
    "Working?": {
        "message": "काम करते हो?"
    },
    "Works on all sites but slower": {
        "message": "सभी साइटों लेकिन धीमी पर काम करता है"
    },
    "YD": {
        "message": "यमन की पीपुल्स डेमोक्रेटिक रिपब्लिक"
    },
    "YE": {
        "message": "यमन"
    },
    "YT": {
        "message": "मैयट"
    },
    "Yes": {
        "message": "हाँ"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "आप होला उपयोग करने के लिए ओपेरा के नवीनतम संस्करण को अपग्रेड करने की जरूरत है. प्रेस <a>यहां</a> के उन्नयन के लिए."
    },
    "Youtube": {
        "message": "यू-ट्यूब"
    },
    "ZA": {
        "message": "दक्षिण अफ्रीका"
    },
    "ZM": {
        "message": "जाम्बिया"
    },
    "ZW": {
        "message": "जिम्बाब्वे"
    },
    "ZZ": {
        "message": "अज्ञात या अवैध क्षेत्र"
    },
    "app_desc": {
        "message": "अपने देश, कंपनी या होला साथ स्कूल में अवरुद्ध पहुँच वेबसाइटों! होला स्वतंत्र और प्रयोग करने में आसान है!"
    },
    "app_name": {
        "message": "होला बेहतर इंटरनेट"
    },
    "back to": {
        "message": "से वापस"
    },
    "changing...": {
        "message": "बदल रहा है..."
    },
    "cool sites": {
        "message": "शांत साइटों"
    },
    "current site": {
        "message": "वर्तमान साइट"
    },
    "day": {
        "message": "दिन"
    },
    "days": {
        "message": "दिनों"
    },
    "even more...": {
        "message": "और भी बहुत कुछ..."
    },
    "mode": {
        "message": "मोड"
    },
    "more options...": {
        "message": "अधिक विकल्प..."
    },
    "not working?": {
        "message": "काम नहीं कर रहा?"
    },
    "not working? try another server": {
        "message": "काम नहीं कर रहा? एक और सर्वर की कोशिश"
    },
    "on this page": {
        "message": "इस पृष्ठ पर"
    },
    "sites that are censored": {
        "message": "सेंसर कर रहे हैं कि साइटों"
    },
    "start": {
        "message": "प्रारंभ"
    },
    "working? remember": {
        "message": "काम करते हो? याद"
    }
};
return E; });