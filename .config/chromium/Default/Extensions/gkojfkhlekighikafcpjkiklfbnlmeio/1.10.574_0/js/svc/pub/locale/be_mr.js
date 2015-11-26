'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " द्वारा "
    },
    "$1 Buffering?": {
        "message": "$1 वर बफर?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola तसे करण्यास येथे $2\n\nक्लिक करा: $3\n\nतो मला जलद इंटरनेट समुद्रकिनार्यावर फुटणार्या फेसाळ लाटा आणि प्रवेश करू देते जे Hola, स्थापित $4$5"
    },
    "$1 VPN": {
        "message": "$1 व्हीपीएन"
    },
    "$1 VPN Premium": {
        "message": "$1 व्हीपीएन प्रीमियम"
    },
    "$1 from $2": {
        "message": "$2 $1"
    },
    "$1 not found": {
        "message": "$1 आढळले नाही"
    },
    "$1 via Hola": {
        "message": "Hola मार्गे $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(काही Hola वैशिष्ट्ये आपल्या आवृत्ती वर उपलब्ध नाहीत)"
    },
    "AC": {
        "message": "असेन्शन बेट"
    },
    "AD": {
        "message": "अँडोरा"
    },
    "AE": {
        "message": "संयुक्त अरब अमीरात"
    },
    "AF": {
        "message": "अफगाणिस्तान"
    },
    "AG": {
        "message": "अँटिग्वा आणि बर्बुडा"
    },
    "AI": {
        "message": "अँग्विला"
    },
    "AL": {
        "message": "अल्बानिया"
    },
    "AM": {
        "message": "आर्मेनिया"
    },
    "AN": {
        "message": "नेदरलँड्स अँटिल्स"
    },
    "AO": {
        "message": "अंगोला"
    },
    "AQ": {
        "message": "अंटार्क्टिक"
    },
    "AR": {
        "message": "अर्जेंटिना"
    },
    "AS": {
        "message": "अमेरिकन सामोआ"
    },
    "AT": {
        "message": "ऑस्ट्रिया"
    },
    "AU": {
        "message": "ऑस्ट्रेलिया"
    },
    "AW": {
        "message": "अरुबा"
    },
    "AX": {
        "message": "अलँड बेटे"
    },
    "AZ": {
        "message": "अझरबैजान"
    },
    "About": {
        "message": "बद्दल"
    },
    "About Hola": {
        "message": "Hola बद्दल"
    },
    "Accelerator": {
        "message": "वेगवर्धक"
    },
    "Accelerator is": {
        "message": "प्रवेगक आहे"
    },
    "Access $1 - cool site!": {
        "message": "$1 प्रवेश - थंड साइट!"
    },
    "Access $1?": {
        "message": "$1 प्रवेश?"
    },
    "Access any site from any country, free": {
        "message": "मोफत, कोणत्याही देशातून कोणत्याही साइटला प्रवेश करा"
    },
    "Access cool sites": {
        "message": "प्रवेश थंड साइट"
    },
    "Access more sites": {
        "message": "प्रवेश अधिक साइट्स"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "प्रवेश साइट आपल्या देशात होउन आणि Hola आपल्या इंटरनेट गती - मोफत!"
    },
    "Accessing $1 with Hola": {
        "message": "Hola सह $1 प्रवेश प्राप्त करणे"
    },
    "Account": {
        "message": "खाते"
    },
    "Account type": {
        "message": "खाते प्रकार"
    },
    "Activating...": {
        "message": "सक्रिय करीत आहे..."
    },
    "All ($1)": {
        "message": "सर्व ($1)"
    },
    "Apply settings...": {
        "message": "सेटिंग्ज बदल लागू ..."
    },
    "Author site:": {
        "message": "लेखक साइट:"
    },
    "Author:": {
        "message": "लेखक:"
    },
    "Awesome!": {
        "message": "अप्रतिम!"
    },
    "BA": {
        "message": "बोस्निया अणि हर्जेगोविना"
    },
    "BB": {
        "message": "बार्बाडोस"
    },
    "BD": {
        "message": "बांग्लादेश"
    },
    "BE": {
        "message": "बेल्जियम"
    },
    "BF": {
        "message": "बुर्किना फासो"
    },
    "BG": {
        "message": "बल्गेरिया"
    },
    "BH": {
        "message": "बहारीन"
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
        "message": "बर्मुडा"
    },
    "BN": {
        "message": "ब्रुनेई"
    },
    "BO": {
        "message": "बोलिव्हिया"
    },
    "BQ": {
        "message": "ब्रिटिश अंटार्क्टिक प्रदेश"
    },
    "BR": {
        "message": "ब्राझिल"
    },
    "BS": {
        "message": "बहामाज"
    },
    "BT": {
        "message": "भूतान"
    },
    "BV": {
        "message": "बोउवेट बेट"
    },
    "BW": {
        "message": "बोट्सवाना"
    },
    "BY": {
        "message": "बेलारूस"
    },
    "BZ": {
        "message": "बेलिझे"
    },
    "Back to $1": {
        "message": "परत $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "आयफोन / iPad साठी Hola सर्वप्रथम प्राप्त - आता नोंदणी:"
    },
    "Browsing": {
        "message": "ब्राउझिंग"
    },
    "Buffering problems?": {
        "message": "बफर समस्या?"
    },
    "Buffering?": {
        "message": "बफर?"
    },
    "CA": {
        "message": "कॅनडा"
    },
    "CC": {
        "message": "कोकोस बेटे"
    },
    "CD": {
        "message": "काँगो - किंशासा"
    },
    "CF": {
        "message": "केंद्रीय अफ्रिकी प्रजासत्ताक"
    },
    "CG": {
        "message": "काँगो - ब्राजाविले"
    },
    "CH": {
        "message": "स्वित्झर्लंड"
    },
    "CI": {
        "message": "आयव्हरी कोस्ट"
    },
    "CK": {
        "message": "कुक बेटे"
    },
    "CL": {
        "message": "चिली"
    },
    "CM": {
        "message": "कॅमेरून"
    },
    "CN": {
        "message": "चीन"
    },
    "CO": {
        "message": "कोलम्बिया"
    },
    "CP": {
        "message": "क्लिपरटोन बेट"
    },
    "CR": {
        "message": "कोस्टारिका"
    },
    "CS": {
        "message": "सर्बिया आणि माँटेनेग्रो"
    },
    "CT": {
        "message": "कॅनटन आणि एंडरबरी बेटे"
    },
    "CU": {
        "message": "क्यूबा"
    },
    "CV": {
        "message": "केप व्हर्डे"
    },
    "CX": {
        "message": "ख्रिसमस बेट"
    },
    "CY": {
        "message": "सायप्रस"
    },
    "CZ": {
        "message": "झेक प्रजासत्ताक"
    },
    "Changing country...": {
        "message": "देश बदलत आहे ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 Hola बाहेर पहा!"
    },
    "Check out Hola for mobile devices": {
        "message": "मोबाइल उपकरणांसाठी Hola पहा"
    },
    "Check your Internet connection": {
        "message": "आपण इंटरनेट आहेत सत्यापित"
    },
    "Choose<br>Country": {
        "message": "निवडणे <br> देश"
    },
    "Configuring...": {
        "message": "संरचीत ..."
    },
    "Connecting...": {
        "message": "कनेक्ट करीत आहे ..."
    },
    "Cool site!": {
        "message": "छान साइट!"
    },
    "Creative licenses": {
        "message": "क्रिएटिव्ह परवाने"
    },
    "DD": {
        "message": "पूर्व जर्मनी"
    },
    "DE": {
        "message": "जर्मनी"
    },
    "DG": {
        "message": "दिएगो गार्सिया"
    },
    "DJ": {
        "message": "जिबौटी"
    },
    "DK": {
        "message": "डेन्मार्क"
    },
    "DM": {
        "message": "डोमिनिका"
    },
    "DO": {
        "message": "डोमिनिकन प्रजासत्ताक"
    },
    "DZ": {
        "message": "अल्जीरिया"
    },
    "Delete": {
        "message": "हटवा"
    },
    "Deleted from my list": {
        "message": "माझी यादी हटविली"
    },
    "Did it work?": {
        "message": "ते काम का?"
    },
    "Did you experience any buffering?": {
        "message": "आपण कोणत्याही बफरींग अनुभवल्या?"
    },
    "Disliked it": {
        "message": "हे आवडले नाही"
    },
    "Don't show again for $1 for one week": {
        "message": "एक आठवडा $1 साठी पुन्हा दर्शवू नका"
    },
    "Don't show again for any site for one week": {
        "message": "एक आठवडा कोणत्याही साइटला पुन्हा दर्शवू नका"
    },
    "Downloading": {
        "message": "डाउनलोड"
    },
    "EA": {
        "message": "स्यूटा आणि मेलिला"
    },
    "EC": {
        "message": "इक्वेडोर"
    },
    "EE": {
        "message": "एस्टोनिया"
    },
    "EG": {
        "message": "इजिप्त"
    },
    "EH": {
        "message": "पश्चिम सहारा"
    },
    "ER": {
        "message": "इरिट्रिया"
    },
    "ES": {
        "message": "स्पेन"
    },
    "ET": {
        "message": "इथिओपिया"
    },
    "EU": {
        "message": "युरोपियन युनियन"
    },
    "Enable": {
        "message": "सक्षम करा"
    },
    "Enable Hola Accelerator": {
        "message": "Hola प्रवेगक सक्षम"
    },
    "Enjoy!": {
        "message": "आनंद घ्या!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome साठी Hola आनंद?"
    },
    "Enter site to access": {
        "message": "प्रवेश करण्यासाठी साइट प्रविष्ट करा"
    },
    "Enter your email": {
        "message": "आपला ईमेल प्रविष्ट करा"
    },
    "FI": {
        "message": "फिनलंड"
    },
    "FJ": {
        "message": "फिजी"
    },
    "FK": {
        "message": "फॉकलंड बेटे"
    },
    "FM": {
        "message": "मायक्रोनेशिया"
    },
    "FO": {
        "message": "फरोए बेटे"
    },
    "FQ": {
        "message": "फ्रान्सचे दक्षिणी व अंटार्क्टिक प्रदेश"
    },
    "FR": {
        "message": "फ्रान्स"
    },
    "FX": {
        "message": "महानगर फ्रान्स"
    },
    "Fast": {
        "message": "वेगवान"
    },
    "Finding new peers...": {
        "message": "नवीन तोलामोलाचा शोधत आहे ..."
    },
    "Finding peers...": {
        "message": "तोलामोलाचा शोधत आहे ..."
    },
    "Free": {
        "message": "मोफत"
    },
    "From": {
        "message": "कडून"
    },
    "Full list": {
        "message": "पूर्ण यादी"
    },
    "GA": {
        "message": "गॅबॉन"
    },
    "GB": {
        "message": "ब्रिटन"
    },
    "GD": {
        "message": "ग्रेनेडा"
    },
    "GE": {
        "message": "जॉर्जिया"
    },
    "GF": {
        "message": "फ्रेंच गयाना"
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
        "message": "ग्रीनलँड"
    },
    "GM": {
        "message": "गाम्बिया"
    },
    "GN": {
        "message": "गिनी"
    },
    "GP": {
        "message": "ग्वाडेलोउपे"
    },
    "GQ": {
        "message": "इक्वेटोरियल गिनी"
    },
    "GR": {
        "message": "ग्रीस"
    },
    "GS": {
        "message": "दक्षिण जॉर्जिया आणि दक्षिण सँडविच बेटे"
    },
    "GT": {
        "message": "ग्वाटेमाला"
    },
    "GU": {
        "message": "गुआम"
    },
    "GW": {
        "message": "गिनी-बिसाउ"
    },
    "GY": {
        "message": "गयाना"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 अनावरोधित मिळवा"
    },
    "Get Free Premium": {
        "message": "मोफत प्रीमियम मिळवा"
    },
    "Get Hola Accelerator": {
        "message": "Hola प्रवेगक मिळवा"
    },
    "Get Hola Player": {
        "message": "मिळवा Hola प्लेअर"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "रद्द, व्यत्यय आला जाहिरात मुक्त सेवेसाठी Hola प्लस मिळवा."
    },
    "Get Hola Premium": {
        "message": "Hola Premium मिळवा"
    },
    "Get Hola for Android": {
        "message": "Android साठी Hola मिळवा"
    },
    "Get Premium support": {
        "message": "प्रीमियम समर्थन मिळवा"
    },
    "Get Unlimited Unblocking": {
        "message": "अमर्यादित अनावरोधित मिळवा"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", सेंसर्ड साइट प्रवेश मिळवा आता प्रयत्न: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Skype चेंडू अभियंता मदत मिळवा:"
    },
    "Get the Fastest Servers": {
        "message": "वेगवान सर्व्हर्स् मिळवा"
    },
    "Go": {
        "message": "जा"
    },
    "Go Hola Premium": {
        "message": "जा Hola प्रीमियम"
    },
    "HK": {
        "message": "हाँगकाँग विशेष प्रशासनिक क्षेत्र चीन"
    },
    "HM": {
        "message": "हर्ड बेट आणि मैकडोनाल्ड बेट"
    },
    "HN": {
        "message": "होंडुराज्"
    },
    "HR": {
        "message": "क्रोएशिया"
    },
    "HT": {
        "message": "हैती"
    },
    "HU": {
        "message": "हंगेरी"
    },
    "Hate it": {
        "message": "तो द्वेष"
    },
    "Help": {
        "message": "मदत"
    },
    "Hey,\n\nI'm using": {
        "message": "अहो,\n\nमी वापरत असतो"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "हाय,\n\nमी $1 ($2) वापरून सुरु. तो मला जलद इंटरनेट समुद्रकिनार्यावर फुटणार्या फेसाळ लाटा आणि माझ्या देशात $3 प्रवेश करू देते."
    },
    "Hola Accelerator": {
        "message": "Hola प्रवेगक"
    },
    "Hola Media Player": {
        "message": "Hola मीडिया प्लेअर"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "दुसर्या विस्तारास आपल्या प्रॉक्सी सेटिंग्ज नियंत्रित आहे कारण Hola काम करू शकत नाही."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola विंडोज 8 मोडमध्ये काही होत नाही. डेस्कटॉप मोड कडे स्विच करा. सूचनांसाठी <a> येथे </a> क्लिक करा"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola सध्या उपलब्ध नाही, परंतु आम्ही त्यावर काम करीत आहोत."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola बंद आहे, चालू क्लिक करा"
    },
    "Hola site list": {
        "message": "Hola साइट सूची"
    },
    "I can now access $1 from any country!": {
        "message": "मी आता कोणत्याही देशातून $1 प्रवेश करू शकता!"
    },
    "I did not experience any buffering": {
        "message": "मी कोणत्याही बफरींग अनुभव नाही"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "मी फक्त $1 Hola वापर करून सेंसर्ड साइटवर प्रवेश!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "मी माझ्या देशात $2 पाहण्यासाठी $1 वापरून, आणि जलद समुद्रकिनार्यावर फुटणार्या फेसाळ लाटा असतो!"
    },
    "IC": {
        "message": "कॅनरी बेटे"
    },
    "ID": {
        "message": "इंडोनेशिया"
    },
    "IE": {
        "message": "आयर्लंड"
    },
    "IL": {
        "message": "इस्त्राइल"
    },
    "IM": {
        "message": "इस्ले ऑफ मॅन"
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
        "message": "ईराण"
    },
    "IS": {
        "message": "आइसलँड"
    },
    "IT": {
        "message": "इटली"
    },
    "Improve translation": {
        "message": "अनुवाद सुधारा"
    },
    "Initializing...": {
        "message": "आरंभ करीत आहे ..."
    },
    "Install": {
        "message": "स्थापित"
    },
    "Install Accelerator": {
        "message": "प्रवेगक स्थापित"
    },
    "Install Free Hola Accelerator": {
        "message": "मोफत Hola प्रवेगक स्थापित"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "विनामूल्य Hola वापर करणे सुरू Hola इंजिन स्थापित"
    },
    "Instantly watch any torrent Video": {
        "message": "झटपट कोणत्याही जोराचा प्रवाह व्हिडिओ पाहण्यासाठी"
    },
    "Invite friends - free Premium.": {
        "message": "मित्रांना आमंत्रित करा - मुक्त प्रीमियम."
    },
    "Invite friends. Get Premium.": {
        "message": "मित्रांना आमंत्रित करा. प्रीमियम मिळवा."
    },
    "It was okay": {
        "message": "ते ठीक होते"
    },
    "JE": {
        "message": "जर्सी"
    },
    "JM": {
        "message": "जमैका"
    },
    "JO": {
        "message": "जॉर्डन"
    },
    "JP": {
        "message": "जपान"
    },
    "JT": {
        "message": "जॉन्स्टोनचा बेट"
    },
    "KE": {
        "message": "केनिया"
    },
    "KG": {
        "message": "किरगीझस्तान"
    },
    "KH": {
        "message": "कंबोडिया"
    },
    "KI": {
        "message": "किरीबाटी"
    },
    "KM": {
        "message": "कोमोरोज"
    },
    "KN": {
        "message": "सेंट किट्स आणि नेव्हिस"
    },
    "KP": {
        "message": "उत्तर कोरिया"
    },
    "KR": {
        "message": "दक्षिण कोरिया"
    },
    "KW": {
        "message": "कुवेत"
    },
    "KY": {
        "message": "केमन बेटे"
    },
    "KZ": {
        "message": "कझाकस्तान"
    },
    "LA": {
        "message": "लाओस"
    },
    "LB": {
        "message": "लेबानन"
    },
    "LC": {
        "message": "सेंट ल्यूसिया"
    },
    "LI": {
        "message": "लिंचेनस्टाइन"
    },
    "LK": {
        "message": "श्रीलंका"
    },
    "LR": {
        "message": "लायबेरिया"
    },
    "LS": {
        "message": "लेसोथो"
    },
    "LT": {
        "message": "लिथुआनिया"
    },
    "LU": {
        "message": "लक्झेंबर्ग"
    },
    "LV": {
        "message": "लाट्विया"
    },
    "LY": {
        "message": "लिबिया"
    },
    "Language": {
        "message": "भाषा"
    },
    "Library": {
        "message": "ग्रंथालय"
    },
    "Like it": {
        "message": "आवडणे"
    },
    "Loading": {
        "message": "ओझे"
    },
    "Loading site...": {
        "message": "ओझे"
    },
    "Log in": {
        "message": "प्रवेश करा"
    },
    "Log out": {
        "message": "लॉग आउट"
    },
    "Love Hola?": {
        "message": "Hola प्रेम?"
    },
    "Love it": {
        "message": "ते प्रेम"
    },
    "MA": {
        "message": "मोरोक्को"
    },
    "MC": {
        "message": "मोनॅको"
    },
    "MD": {
        "message": "मोल्डोव्हा"
    },
    "ME": {
        "message": "मोंटेनेग्रो"
    },
    "MF": {
        "message": "सेंट मार्टिन"
    },
    "MG": {
        "message": "मादागास्कर"
    },
    "MH": {
        "message": "मार्शल बेटे"
    },
    "MI": {
        "message": "मिडवे द्वीपसमूह"
    },
    "MK": {
        "message": "मॅसेडोनिया"
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
        "message": "मकाऊ SAR चीन"
    },
    "MP": {
        "message": "उत्तरी मारियाना बेटे"
    },
    "MQ": {
        "message": "मार्टिनिक"
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
        "message": "मालदीव्ज"
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
        "message": "मोझाम्बिक"
    },
    "Make your Internet better with $1": {
        "message": "आपला इंटरनेट उत्तम $1"
    },
    "Menu": {
        "message": "मेनू"
    },
    "Might not work on all sites": {
        "message": "सर्व साइटवर काम करणार नाही"
    },
    "Mode": {
        "message": "मोड"
    },
    "More countries": {
        "message": "आणखी देश"
    },
    "More sites...": {
        "message": "अधिक ..."
    },
    "More...": {
        "message": "अधिक ..."
    },
    "My Account": {
        "message": "माझे खाते"
    },
    "My History": {
        "message": "माझे इतिहास"
    },
    "My Settings": {
        "message": "माझे सेटिंग्ज"
    },
    "My favorites": {
        "message": "माझे आवडते"
    },
    "NA": {
        "message": "नमीबिया"
    },
    "NC": {
        "message": "न्यू कॅलेडोनिया"
    },
    "NE": {
        "message": "नाइजर"
    },
    "NF": {
        "message": "नॉरफॉक बेट"
    },
    "NG": {
        "message": "नायजेरिया"
    },
    "NI": {
        "message": "निकाराग्वे"
    },
    "NL": {
        "message": "नेदरलँड"
    },
    "NO": {
        "message": "नॉर्वे"
    },
    "NP": {
        "message": "नेपाळ"
    },
    "NQ": {
        "message": "Dronning मॉड जमीन"
    },
    "NR": {
        "message": "नऊरु"
    },
    "NT": {
        "message": "तटस्थ झोन"
    },
    "NU": {
        "message": "नीयू"
    },
    "NZ": {
        "message": "न्यूझीलंड"
    },
    "Need Help?": {
        "message": "मदत हवी आहे?"
    },
    "Never ask me again": {
        "message": "मला पुन्हा विचारू नका"
    },
    "Never be a peer": {
        "message": "एक सरदार जाऊ नका"
    },
    "No": {
        "message": "नाही"
    },
    "No idle peers found.": {
        "message": "नाही निष्क्रिय तोलामोलाचा आढळले."
    },
    "No recent videos found": {
        "message": "अलीकडील व्हिडिओ आढळले"
    },
    "No saved videos found": {
        "message": "जतन व्हिडिओ आढळले"
    },
    "No title": {
        "message": "शीर्षक नाही"
    },
    "No videos found": {
        "message": "कोणतेही व्हिडिओ आढळले नाहीत"
    },
    "No videos found on active page": {
        "message": "सक्रिय पृष्ठ सापडले नाहीत व्हिडिओ"
    },
    "No, Thanks": {
        "message": "नाही, धन्यवाद"
    },
    "No, fix it": {
        "message": "नाही, हे निश्चित"
    },
    "Not working?": {
        "message": "काम करीत नाही?"
    },
    "Number of users that pressed not working": {
        "message": "काम नाही दाबली की वापरकर्त्यांची संख्या"
    },
    "Number of users that use this option": {
        "message": "या पर्यायचा वापर त्या वापरकर्त्यांची संख्या"
    },
    "OM": {
        "message": "ओमान"
    },
    "Off": {
        "message": "बंद"
    },
    "Oh, yes!": {
        "message": "होय, ओहो!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox ची जुनी आवृत्ती. प्रेस <a> येथे </a> सुधारीत करणे."
    },
    "On": {
        "message": "चालू"
    },
    "Open Media Player": {
        "message": "उघडा मीडिया प्लेअर"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "आमच्या ब्रँड न्यू एम-प्लेयर Name लवकरच येत आहे!"
    },
    "PA": {
        "message": "पनामा"
    },
    "PC": {
        "message": "पॅसिफिक बेटे ट्रस्ट प्रदेश"
    },
    "PE": {
        "message": "पेरू"
    },
    "PF": {
        "message": "फ्रेंच पॉलिनेशिया"
    },
    "PG": {
        "message": "पापुआ न्यू गिनी"
    },
    "PH": {
        "message": "फिलीपिन्स"
    },
    "PK": {
        "message": "पाकिस्तान"
    },
    "PL": {
        "message": "पोलंड"
    },
    "PM": {
        "message": "सेंट पियरे आणि मिक्वेलोन"
    },
    "PN": {
        "message": "पिटकॅर्न"
    },
    "PR": {
        "message": "पोर्टो रिको"
    },
    "PS": {
        "message": "पॅलेस्टिनी प्रदेश"
    },
    "PT": {
        "message": "पोर्तुगाल"
    },
    "PU": {
        "message": "अमेरिकन विविध पॅसिफिक बेटे"
    },
    "PW": {
        "message": "पलाऊ"
    },
    "PY": {
        "message": "पराग्वे"
    },
    "PZ": {
        "message": "पनामा कालवा झोन"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "आपण जसे इ जाहिरात-ब्लॉकर, इतर व्हीपीएन सेवा, म्हणून आपली प्रॉक्सी सेटिंग्ज नियंत्रित वाटते की कदाचित इतर <a>विस्तार</a> अक्षम करा"
    },
    "Please enter a valid email address.": {
        "message": "एक वैध ईमेल पत्ता प्रविष्ट करा."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com सारखे एक वेब साइट पत्ता प्रविष्ट करा"
    },
    "Please help us get better": {
        "message": "आम्हाला चांगले करण्यात मदत करा"
    },
    "Popular in $1": {
        "message": "लोकप्रिय मध्ये $1"
    },
    "Popular in the world": {
        "message": "जगातील लोकप्रिय"
    },
    "Popular sites": {
        "message": "लोकप्रिय साइट"
    },
    "Premium": {
        "message": "विम्याचा हप्ता"
    },
    "QA": {
        "message": "कतार"
    },
    "QO": {
        "message": "आउटलायिंग ओशनिया"
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
        "message": "रशिया"
    },
    "RW": {
        "message": "रवांडा"
    },
    "Rate us": {
        "message": "आम्हाला रेट"
    },
    "Recent Videos": {
        "message": "अलीकडील व्हिडिओ"
    },
    "Reload": {
        "message": "रीलोड करा"
    },
    "Reload Hola": {
        "message": "Hola रीलोड करा"
    },
    "Remember server": {
        "message": "सर्व्हर लक्षात ठेवा"
    },
    "Report a problem": {
        "message": "एक समस्या नोंदवा"
    },
    "Retry safe mode": {
        "message": "सुरक्षित मोड पुन्हा प्रयत्न करा"
    },
    "SA": {
        "message": "सौदी अरब"
    },
    "SB": {
        "message": "सोलोमन बेटे"
    },
    "SC": {
        "message": "सेशेल्स"
    },
    "SD": {
        "message": "सूदान"
    },
    "SE": {
        "message": "स्वीडन"
    },
    "SG": {
        "message": "सिंगापूर"
    },
    "SH": {
        "message": "सेंट हेलेना"
    },
    "SI": {
        "message": "स्लोव्हेनिया"
    },
    "SJ": {
        "message": "स्वालबर्ड आणि जान मायेन"
    },
    "SK": {
        "message": "स्लोव्हाकिया"
    },
    "SL": {
        "message": "सिएरा लेओन"
    },
    "SM": {
        "message": "सॅन मरीनो"
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
        "message": "साओ टोम आणि प्रिंसिपे"
    },
    "SU": {
        "message": "सोवियेत संघ या"
    },
    "SV": {
        "message": "अल साल्वाडोर"
    },
    "SY": {
        "message": "सीरिया"
    },
    "SZ": {
        "message": "स्वाझिलँड"
    },
    "Safe": {
        "message": "सुरक्षित"
    },
    "Safe mode": {
        "message": "सुरक्षित पद्धत"
    },
    "Save": {
        "message": "जतन करा"
    },
    "Saved Videos": {
        "message": "जतन केलेले व्हिडिओ"
    },
    "Saved for later": {
        "message": "नंतर जतन"
    },
    "Search video title": {
        "message": "शोध व्हिडिओ शीर्षक"
    },
    "Select a Country": {
        "message": "एक देश निवडा"
    },
    "Select site to unblock": {
        "message": "अनावरोधित करण्यासाठी साइट निवडा"
    },
    "Server saved!": {
        "message": "सर्व्हर जतन!"
    },
    "Set safe mode for $1 $2": {
        "message": "सेट सुरक्षित मोड $1 $2"
    },
    "Settings": {
        "message": "सेटिंग्ज"
    },
    "Share": {
        "message": "सामायिक करा"
    },
    "Share $1 on $2": {
        "message": "$2 रोजी $1 सामायिक करा"
    },
    "Share $1 via $2": {
        "message": "$2 द्वारे $1 शेअर करा"
    },
    "Share with friends!": {
        "message": "मित्रांसह सामायिक करा!"
    },
    "Sign up": {
        "message": "साइन अप करा"
    },
    "Solve buffering": {
        "message": "बफरींग सोडवा"
    },
    "Solve buffering problems with": {
        "message": "सह बफरींग समस्या सोडविण्यास"
    },
    "Solves it": {
        "message": "तो निराकरण"
    },
    "Staff Picks": {
        "message": "कर्मचारी पिकअप"
    },
    "Start Hola": {
        "message": "प्रारंभ"
    },
    "Starting...": {
        "message": "प्रारंभ करीत आहे ..."
    },
    "Stop Hola": {
        "message": "थांबवा Hola"
    },
    "Stopping peer routing...": {
        "message": "सरदार मार्ग थांबविणे ..."
    },
    "Stream": {
        "message": "प्रवाह"
    },
    "Stream Instantly": {
        "message": "झटपट प्रवाहात"
    },
    "Submit": {
        "message": "सबमिट करा"
    },
    "Support Hola": {
        "message": "समर्थन Hola"
    },
    "TA": {
        "message": "ट्रिस्टन दा कुन्हा"
    },
    "TC": {
        "message": "टर्क्स आणि कैकोस बेटे"
    },
    "TD": {
        "message": "चाड"
    },
    "TF": {
        "message": "फ्रेंच दाक्षिणात्य प्रदेश"
    },
    "TG": {
        "message": "टोगो"
    },
    "TH": {
        "message": "थायलंड"
    },
    "TJ": {
        "message": "ताजिकिस्तान"
    },
    "TK": {
        "message": "तोकेलाउ"
    },
    "TL": {
        "message": "पूर्व तिमोर"
    },
    "TM": {
        "message": "तुर्कमेनिस्तान"
    },
    "TN": {
        "message": "ट्यूनिशिया"
    },
    "TO": {
        "message": "टोंगा"
    },
    "TR": {
        "message": "तुर्की"
    },
    "TT": {
        "message": "त्रिनिदाद आणि टोबॅगो"
    },
    "TV": {
        "message": "टुवालु"
    },
    "TW": {
        "message": "तैवान"
    },
    "TZ": {
        "message": "टांझानिया"
    },
    "Talk to us on $1": {
        "message": "$1 वर आम्हाला बोला"
    },
    "Tell friends about $1": {
        "message": "मित्र बद्दल $1 सांगा"
    },
    "Testing connection...": {
        "message": "चाचणी कनेक्शन ..."
    },
    "Thank you!": {
        "message": "धन्यवाद!"
    },
    "There seems to be an error": {
        "message": "चूक असावी असं दिसतं"
    },
    "Top popular sites": {
        "message": "शीर्ष लोकप्रिय साइट"
    },
    "Translate to your language": {
        "message": "आपल्या भाषेत अनुवाद करा"
    },
    "Try again": {
        "message": "पुन्हा प्रयत्न करा"
    },
    "Try another server": {
        "message": "दुसर्या सर्व्हर प्रयत्न"
    },
    "Try it": {
        "message": "हे वापरून पहा"
    },
    "Try safe mode": {
        "message": "सुरक्षित मोड वापरून पहा"
    },
    "Try to <span>reload</span>": {
        "message": "<span> रीलोड करा </span> वापरून पहा"
    },
    "Trying another peer...": {
        "message": "दुसरा सरदार प्रयत्न करीत आहे ..."
    },
    "Turn off Accelerator": {
        "message": "प्रवेगक बंद करा"
    },
    "Turn off Hola": {
        "message": "Hola बंद करा"
    },
    "Turn on Accelerator": {
        "message": "प्रवेगक चालू"
    },
    "Turn on Hola": {
        "message": "Hola चालू"
    },
    "Turn on to get started": {
        "message": "प्रारंभ करण्यासाठी चालू करा"
    },
    "UA": {
        "message": "यूक्रेन"
    },
    "UG": {
        "message": "युगांडा"
    },
    "UM": {
        "message": "युनाइटेड स्टेट्स माइनर आउटलाइंग बेटे"
    },
    "US": {
        "message": "संयुक्त राज्ये /अमेरिका"
    },
    "UY": {
        "message": "उरुग्वे"
    },
    "UZ": {
        "message": "उझबेकिस्तान"
    },
    "Unblocker is disabled": {
        "message": "Unblocker अक्षम आहे"
    },
    "Update": {
        "message": "अद्यतनित करा"
    },
    "Upgrade": {
        "message": "अद्यतनित करा"
    },
    "Using": {
        "message": "वापरणे"
    },
    "Using Hola": {
        "message": "Hola वापरणे"
    },
    "VA": {
        "message": "व्हॅटिकन"
    },
    "VC": {
        "message": "सेंट व्हिन्सेंट आणि ग्रेनडाइन्स"
    },
    "VD": {
        "message": "उत्तर व्हिएतनाम"
    },
    "VE": {
        "message": "व्हेनेझुएला"
    },
    "VG": {
        "message": "ब्रिटिश व्हर्जिन बेटे"
    },
    "VI": {
        "message": "यू.एस. व्हर्जिन बेटे"
    },
    "VN": {
        "message": "व्हिएतनाम"
    },
    "VPN": {
        "message": "व्हीपीएन"
    },
    "VPN Premium": {
        "message": "व्हीपीएन प्रीमियम"
    },
    "VU": {
        "message": "वानौटु"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome ची खूपच जुने आवृत्ती, <a> सुधारणा </a> वर Chrome मध्ये Hola वापरण्याची"
    },
    "Video": {
        "message": "व्हिडिओ"
    },
    "Video stuck?": {
        "message": "व्हिडिओ अडकले?"
    },
    "Videos available for instant streaming": {
        "message": "झटपट प्रवाह उपलब्ध व्हिडिओ"
    },
    "WF": {
        "message": "वालिस आणि फ्यूचूना"
    },
    "WK": {
        "message": "बेट"
    },
    "WS": {
        "message": "सामोआ"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "इतर डिव्हाइसवर Hola इच्छिता? (Xbox, ps, Apple टीव्ही, आयफोन ...). येथे क्लिक करा"
    },
    "Want to know more?": {
        "message": "अधिक जाणून घेऊ इच्छित?"
    },
    "Watch Now": {
        "message": "आता पहा"
    },
    "We found $1 videos": {
        "message": "आम्ही आढळले $1 व्हिडिओ"
    },
    "We will be in touch with you soon": {
        "message": "आम्ही लवकरच आपण संपर्कात असेल"
    },
    "Working!": {
        "message": "काम!"
    },
    "Working?": {
        "message": "कार्य करीत आहात?"
    },
    "Works on all sites but slower": {
        "message": "सर्व साइटना पण हळु वर कार्य करते"
    },
    "YD": {
        "message": "येमेन पीपल्स लोकशाही प्रजासत्ताक"
    },
    "YE": {
        "message": "येमेन"
    },
    "YT": {
        "message": "मायोट्टे"
    },
    "Yes": {
        "message": "होय"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "आपण Hola वापरण्यासाठी ऑपेरा नवीनतम आवृत्तीवर सुधारणा करणे आवश्यक आहे. दाबू <a>येथे</a> सुधारणा करण्यासाठी."
    },
    "Youtube": {
        "message": "YouTube वर"
    },
    "ZA": {
        "message": "दक्षिण अफ्रिका"
    },
    "ZM": {
        "message": "झाम्बिया"
    },
    "ZW": {
        "message": "झिम्बाब्वे"
    },
    "ZZ": {
        "message": "अज्ञात वा अवैध प्रदेश"
    },
    "app_desc": {
        "message": "आपला देश, कंपनी किंवा Hola सह शाळेत अवरोधित प्रवेश वेबसाइट! Hola मोफत आणि वापरण्यास सोपा आहे!"
    },
    "app_name": {
        "message": "Hola उत्तम इंटरनेट"
    },
    "back to": {
        "message": "परत"
    },
    "changing...": {
        "message": "बदलताना ..."
    },
    "cool sites": {
        "message": "थंड साइट"
    },
    "current site": {
        "message": "वर्तमान साइट"
    },
    "day": {
        "message": "दिवस"
    },
    "days": {
        "message": "दिवस"
    },
    "even more...": {
        "message": "आणखी ..."
    },
    "mode": {
        "message": "मोड"
    },
    "more options...": {
        "message": "अधिक पर्याय ..."
    },
    "not working?": {
        "message": "काम करीत नाही?"
    },
    "not working? try another server": {
        "message": "काम करीत नाही? दुसर्या सर्व्हर प्रयत्न"
    },
    "on this page": {
        "message": "या पृष्ठावरील"
    },
    "sites that are censored": {
        "message": "सेंसर्ड केलेल्या साइट्सवर"
    },
    "start": {
        "message": "प्रारंभ"
    },
    "working? remember": {
        "message": "काम? स्मरण"
    }
};
return E; });