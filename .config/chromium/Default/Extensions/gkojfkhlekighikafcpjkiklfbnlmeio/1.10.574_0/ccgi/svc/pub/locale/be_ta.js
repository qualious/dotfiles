'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " வழியே "
    },
    "$1 Buffering?": {
        "message": "$1 இல் இடைநிலைப்படுத்துகிறது?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 ஹோலா அதே செய்ய இங்கே $2\n\nஉதவிக்கு அணுக: $3\n\nஅது எனக்கு வேகமாக இணையத்தை மற்றும் அணுக முடியும், இது வணக்கம், நிறுவுகிறது $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN பிரீமியம்"
    },
    "$1 from $2": {
        "message": "$2 $1"
    },
    "$1 not found": {
        "message": "$1 காணப்படவில்லை"
    },
    "$1 via Hola": {
        "message": "Hola வழியாக $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(சில ஹோலா அம்சங்கள் உங்கள் பதிப்பு கிடைக்காது)"
    },
    "AC": {
        "message": "அசென்சன் தீவு"
    },
    "AD": {
        "message": "அன்டோரா"
    },
    "AE": {
        "message": "ஐக்கிய அரபு கூட்டாட்சி"
    },
    "AF": {
        "message": "ஆப்கானிஸ்தான்"
    },
    "AG": {
        "message": "ஆன்டிகுவா மற்றும் பார்புடா"
    },
    "AI": {
        "message": "அங்குய்லா"
    },
    "AL": {
        "message": "அல்பேனியா"
    },
    "AM": {
        "message": "ஆர்மேனியா"
    },
    "AN": {
        "message": "நெதெர்லேண்ட் ஆண்டிலிஸ்"
    },
    "AO": {
        "message": "அங்கோலா"
    },
    "AQ": {
        "message": "அன்டார்டிகா"
    },
    "AR": {
        "message": "அர்ஜெண்டினா"
    },
    "AS": {
        "message": "அமெரிக்க சமோவா"
    },
    "AT": {
        "message": "ஆஸ்திரியா"
    },
    "AU": {
        "message": "ஆஸ்திரேலியா"
    },
    "AW": {
        "message": "அரூபா"
    },
    "AX": {
        "message": "ஆலந்து தீவுகள்"
    },
    "AZ": {
        "message": "அஜர்பைஜான்"
    },
    "About": {
        "message": "பற்றி"
    },
    "About Hola": {
        "message": "Hola பற்றி"
    },
    "Accelerator": {
        "message": "வேகத்தை விரைவுபடுத்தும் பொறி"
    },
    "Accelerator is": {
        "message": "முடுக்கி ஆகிறது"
    },
    "Access $1 - cool site!": {
        "message": "$1 அணுகல் - குளிர் தளம்!"
    },
    "Access $1?": {
        "message": "$1 அணுக?"
    },
    "Access any site from any country, free": {
        "message": "இலவச, எந்த நாட்டில் இருந்து எந்த தளத்தில் அணுக"
    },
    "Access cool sites": {
        "message": "அணுகல் குளிர் தளங்கள்"
    },
    "Access more sites": {
        "message": "அணுகல் தளங்கள்"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "அணுகல் தளங்கள் உங்கள் நாட்டில் தணிக்கை ஹோலா உங்கள் இணைய முடுக்கி - இலவச!"
    },
    "Accessing $1 with Hola": {
        "message": "ஹோலா மூலம் $1 அணுகும்"
    },
    "Account": {
        "message": "கணக்கு"
    },
    "Account type": {
        "message": "கணக்கு வகை"
    },
    "Activating...": {
        "message": "செயல்படுத்துகிறது..."
    },
    "All ($1)": {
        "message": "அனைத்து ($1)"
    },
    "Apply settings...": {
        "message": "அமைப்புகள் பொருந்தும் ..."
    },
    "Author site:": {
        "message": "ஆசிரியர் தளம்:"
    },
    "Author:": {
        "message": "ஆசிரியர்:"
    },
    "Awesome!": {
        "message": "அற்புதம்!"
    },
    "BA": {
        "message": "போஸ்னியா மற்றும் ஹெர்ஸிகோவினா"
    },
    "BB": {
        "message": "பார்படோஸ்"
    },
    "BD": {
        "message": "பங்களாதேஷ்"
    },
    "BE": {
        "message": "பெல்ஜியம்"
    },
    "BF": {
        "message": "புர்கினா ஃபாஸோ"
    },
    "BG": {
        "message": "பல்கேரியா"
    },
    "BH": {
        "message": "பஹ்ரைன்"
    },
    "BI": {
        "message": "புருண்டி"
    },
    "BJ": {
        "message": "பெனின்"
    },
    "BL": {
        "message": "செயின்ட் பார்தேலெமி"
    },
    "BM": {
        "message": "பெர்முடா"
    },
    "BN": {
        "message": "புரூனேய்"
    },
    "BO": {
        "message": "பொலிவியா"
    },
    "BQ": {
        "message": "பிரித்தானிய அண்டார்டிக் மண்டலம்"
    },
    "BR": {
        "message": "பிரேஸில்"
    },
    "BS": {
        "message": "பஹமாஸ்"
    },
    "BT": {
        "message": "பூடான்"
    },
    "BV": {
        "message": "பொவேட் தீவுகள்"
    },
    "BW": {
        "message": "போட்ஸ்வானா"
    },
    "BY": {
        "message": "பெலாரூஸ்"
    },
    "BZ": {
        "message": "பெலிஸ்"
    },
    "Back to $1": {
        "message": "மீண்டும் $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "ஐபோன் / ஐபாட் Hola பெற முதலில் - இப்போது பதிவு:"
    },
    "Browsing": {
        "message": "உலாவல்"
    },
    "Buffering problems?": {
        "message": "தாங்கல் பிரச்சினைகள் என்ன?"
    },
    "Buffering?": {
        "message": "தாங்கல்?"
    },
    "CA": {
        "message": "கனடா"
    },
    "CC": {
        "message": "காகோஸ் தீவுகள்"
    },
    "CD": {
        "message": "காங்கோ - கின்சாசா"
    },
    "CF": {
        "message": "மத்திய ஆப்ரிக்கக் குடியரசு"
    },
    "CG": {
        "message": "காங்கோ - ப்ராஸாவில்லே"
    },
    "CH": {
        "message": "ஸ்விட்சர்லாந்து"
    },
    "CI": {
        "message": "ஐவரி கோஸ்ட்"
    },
    "CK": {
        "message": "குக் தீவுகள்"
    },
    "CL": {
        "message": "சிலி"
    },
    "CM": {
        "message": "கேமரூன்"
    },
    "CN": {
        "message": "சீனா"
    },
    "CO": {
        "message": "கொலம்பியா"
    },
    "CP": {
        "message": "கிலிப்பர்டன் தீவில்"
    },
    "CR": {
        "message": "கோஸ்டாரிகா"
    },
    "CS": {
        "message": "செர்பியா மற்றும் மான்டேநெக்ரோ"
    },
    "CT": {
        "message": "மண்டலம் மற்றும் எண்டர்பரி தீவுகள்"
    },
    "CU": {
        "message": "கியூபா"
    },
    "CV": {
        "message": "கேப் வெர்டே"
    },
    "CX": {
        "message": "கிறிஸ்துமஸ் தீவு"
    },
    "CY": {
        "message": "சைப்ரஸ்"
    },
    "CZ": {
        "message": "செக் குடியரசு"
    },
    "Changing country...": {
        "message": "நாட்டின் மாற்றுகிறது ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 ஹோலா பாருங்கள்!"
    },
    "Check out Hola for mobile devices": {
        "message": "மொபைல் சாதனங்களுக்கான ஹோலா பாருங்கள்"
    },
    "Check your Internet connection": {
        "message": "நீங்கள் இணைய வேண்டும்"
    },
    "Choose<br>Country": {
        "message": "தேர்வு <br> நாடு"
    },
    "Configuring...": {
        "message": "கட்டமைத்தல் ..."
    },
    "Connecting...": {
        "message": "இணைக்கிறது ..."
    },
    "Cool site!": {
        "message": "குளிர் தளம்!"
    },
    "Creative licenses": {
        "message": "கிரியேட்டிவ் உரிமம்"
    },
    "DD": {
        "message": "கிழக்கு ஜேர்மனியில்"
    },
    "DE": {
        "message": "ஜெர்மன்"
    },
    "DG": {
        "message": "டீகோ கார்சியா"
    },
    "DJ": {
        "message": "ஜிபௌடி"
    },
    "DK": {
        "message": "டென்மார்க்"
    },
    "DM": {
        "message": "டொமினிகா"
    },
    "DO": {
        "message": "டொமினிகன் குடியரசு"
    },
    "DZ": {
        "message": "அல்ஜீரியா"
    },
    "Delete": {
        "message": "நீக்கு"
    },
    "Deleted from my list": {
        "message": "என் பட்டியலில் இருந்து நீக்கப்பட்ட"
    },
    "Did it work?": {
        "message": "அது வேலை செய்யவில்லை?"
    },
    "Did you experience any buffering?": {
        "message": "நீங்கள் எந்த தாங்கல் அனுபவம் செய்யவில்லை?"
    },
    "Disliked it": {
        "message": "பிடிக்காதது"
    },
    "Don't show again for $1 for one week": {
        "message": "ஒரு வாரம் $1 மீண்டும் காட்ட வேண்டாம்"
    },
    "Don't show again for any site for one week": {
        "message": "ஒரு வாரம் எந்த தளம் மீண்டும் காண்பிக்க வேண்டாம்"
    },
    "Downloading": {
        "message": "பதிவிறக்குகிறது"
    },
    "EA": {
        "message": "சீடா மற்றும் மெலில்லா"
    },
    "EC": {
        "message": "ஈக்வடார்"
    },
    "EE": {
        "message": "எஸ்டோனியா"
    },
    "EG": {
        "message": "எகிப்து"
    },
    "EH": {
        "message": "மேற்கு சஹாரா"
    },
    "ER": {
        "message": "எரிட்ரியா"
    },
    "ES": {
        "message": "ஸ்பெயின்"
    },
    "ET": {
        "message": "எதியோப்பியா"
    },
    "EU": {
        "message": "ஐரோப்பிய ஒன்றியம்"
    },
    "Enable": {
        "message": "உதவும்"
    },
    "Enable Hola Accelerator": {
        "message": "Hola, கூகுளின்"
    },
    "Enjoy!": {
        "message": "மகிழுங்கள்!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome க்கான ஹோலா நன்றாக உள்ளதா?"
    },
    "Enter site to access": {
        "message": "அணுகல் தளம் சேர்க்கவும்"
    },
    "Enter your email": {
        "message": "உங்கள் மின்னஞ்சல் சேர்க்கவும்"
    },
    "FI": {
        "message": "பின்லாந்து"
    },
    "FJ": {
        "message": "ஃபிஜி"
    },
    "FK": {
        "message": "ஃபாக்லான்ட் தீவுகள்"
    },
    "FM": {
        "message": "மைக்ரோனேஷியா"
    },
    "FO": {
        "message": "ஃபெரௌ தீவுகள்"
    },
    "FQ": {
        "message": "பிரஞ்சு தெற்கத்திய மற்றும் அண்டார்க்டிக் நிலப்பகுதிகள்"
    },
    "FR": {
        "message": "பிரான்ஸ்"
    },
    "FX": {
        "message": "பெருநகர பிரான்ஸ்"
    },
    "Fast": {
        "message": "விரைவு"
    },
    "Finding new peers...": {
        "message": "புதிய நண்பர்கள் கண்டுபிடிப்பதில் ..."
    },
    "Finding peers...": {
        "message": "சக கண்டுபிடித்து ..."
    },
    "Free": {
        "message": "இலவச"
    },
    "From": {
        "message": "இருந்து"
    },
    "Full list": {
        "message": "முழு பட்டியல்"
    },
    "GA": {
        "message": "கேபான்"
    },
    "GB": {
        "message": "பிரிடிஷ் கூட்டரசு"
    },
    "GD": {
        "message": "கிரனெடா"
    },
    "GE": {
        "message": "ஜார்ஜியா"
    },
    "GF": {
        "message": "ஃப்ரென்ச் கயானா"
    },
    "GG": {
        "message": "கெர்ன்சி"
    },
    "GH": {
        "message": "கானா"
    },
    "GI": {
        "message": "ஜிப்ரால்டர்"
    },
    "GL": {
        "message": "கிரீன்லாண்ட்"
    },
    "GM": {
        "message": "காம்பியா"
    },
    "GN": {
        "message": "கினி"
    },
    "GP": {
        "message": "க்வாதேலோப்"
    },
    "GQ": {
        "message": "ஈக்குவாடோரியல் கினி"
    },
    "GR": {
        "message": "கிரீஸ்"
    },
    "GS": {
        "message": "தென் ஜியார்ஜியா மற்றும் தென் சான்ட்விச் தீவுகள்"
    },
    "GT": {
        "message": "குவாத்தாமாலா"
    },
    "GU": {
        "message": "குவாம்"
    },
    "GW": {
        "message": "கினி-பிஸ்ஸாவ்"
    },
    "GY": {
        "message": "கயானா"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 விடுவிக்கிறது கிடைக்கும்"
    },
    "Get Free Premium": {
        "message": "இலவச பிரீமியம் பெற"
    },
    "Get Hola Accelerator": {
        "message": "Hola முடுக்கி கிடைக்கும்"
    },
    "Get Hola Player": {
        "message": "கிடைக்கும் ஹோலா ப்ளேயர்"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "ஐ.நா. குறுக்கிட்டு, விளம்பர இலவச சேவையை ஹோலா பிளஸ் கிடைக்கும்."
    },
    "Get Hola Premium": {
        "message": "Hola, பிரீமியம் பெற"
    },
    "Get Hola for Android": {
        "message": "அண்ட்ராய்டு Hola கிடைக்கும்"
    },
    "Get Premium support": {
        "message": "பிரீமியம் ஆதரவு கிடைக்கும்"
    },
    "Get Unlimited Unblocking": {
        "message": "வரம்பற்ற விடுவிக்கிறது கிடைக்கும்"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "தணிக்கை தளங்கள் அணுகலை பெற இப்போது அதை முயற்சி: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "ஸ்கைப் வழியாக பொறியாளர் இருந்து உதவிக்கு:"
    },
    "Get the Fastest Servers": {
        "message": "வேகமாக சேவையகங்கள் கிடைக்கும்"
    },
    "Go": {
        "message": "போய்"
    },
    "Go Hola Premium": {
        "message": "செல் Hola, பிரீமியம்"
    },
    "HK": {
        "message": "ஹாங் காங் எஸ்.ஏ.ஆர் சைனா"
    },
    "HM": {
        "message": "ஹேர்ட் மற்றும் மெக்டொனால்டு"
    },
    "HN": {
        "message": "ஹாண்டுராஸ்"
    },
    "HR": {
        "message": "குரோசியா"
    },
    "HT": {
        "message": "ஹெய்தி"
    },
    "HU": {
        "message": "ஹங்கேரி"
    },
    "Hate it": {
        "message": "அதை வெறுக்கிறேன்"
    },
    "Help": {
        "message": "உதவும்"
    },
    "Hey,\n\nI'm using": {
        "message": "ஏய்,\n\nநான் பயன்படுத்தி வருகிறேன்"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nநான் $1 ($2) பயன்படுத்தி தொடங்கியது. இது என்னை வேகமாக இணையத்தை மற்றும் என் நாட்டில் $3 அணுக முடியும்."
    },
    "Hola": {
        "message": "ஹோலா"
    },
    "Hola Accelerator": {
        "message": "Hola முடுக்கி"
    },
    "Hola Media Player": {
        "message": "ஹோலா மீடியா பிளேயர்"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "மற்றொரு நீட்டிப்பு ப்ராக்ஸி அமைப்புகளை கட்டுப்படுத்தும் ஏனெனில் Hola, வேலை செய்ய முடியாது."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "ஹோலா விண்டோஸ் 8 முறை நன்றாக வேலை செய்யாது. டெஸ்க்டாப் முறை மாற வேண்டும். விவரங்களுக்கு <a> இங்கே </a> கிளிக்"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "ஹோலா இப்போது இல்லை, ஆனால் நாம் அதை வேலை."
    },
    "Hola is off, click it to turn it on": {
        "message": "ஹோலா விட்டு, திரும்ப கிளிக் செய்யவும்"
    },
    "Hola site list": {
        "message": "Hola தளம் பட்டியல்"
    },
    "I can now access $1 from any country!": {
        "message": "நான் இப்போது எந்த நாட்டில் இருந்து $1 அணுக முடியும்!"
    },
    "I did not experience any buffering": {
        "message": "நான் எந்த தாங்கல் அனுபவம் இல்லை"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "நான் $1 ஹோலா பயன்படுத்தி ஒரு தணிக்கை தளத்தில் அணுக!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "நான் என் நாட்டில் $2 பார்வையிட $1 பயன்படுத்தி, மற்றும் வேகமாக உலாவுவது!"
    },
    "IC": {
        "message": "கேனரி தீவுகள்"
    },
    "ID": {
        "message": "இந்தோனேஷியா"
    },
    "IE": {
        "message": "அயர்லாந்து"
    },
    "IL": {
        "message": "இஸ்ரேல்"
    },
    "IM": {
        "message": "ஐல் ஆஃப் மேன்"
    },
    "IN": {
        "message": "இந்தியா"
    },
    "IO": {
        "message": "பிரிட்டிஷ் இந்தியப் பெருங்கடல் மாஹாணம்"
    },
    "IQ": {
        "message": "இராக்"
    },
    "IR": {
        "message": "ஈரான்"
    },
    "IS": {
        "message": "ஐஸ்லாந்து"
    },
    "IT": {
        "message": "இத்தாலி"
    },
    "Improve translation": {
        "message": "மொழிபெயர்ப்பு மேம்படுத்த"
    },
    "Initializing...": {
        "message": "துவக்குகிறது ..."
    },
    "Install": {
        "message": "நிறுவு"
    },
    "Install Accelerator": {
        "message": "முடுக்கி நிறுவ"
    },
    "Install Free Hola Accelerator": {
        "message": "இலவச Hola முடுக்கி நிறுவ"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "இலவசமாக ஹோலா பயன்படுத்தி தொடர்ந்து ஹோலா எஞ்சின் நிறுவவும்"
    },
    "Instantly watch any torrent Video": {
        "message": "உடனடியாக எந்த வேகமான நீரோட்டம் வீடியோ பார்க்க"
    },
    "Invite friends - free Premium.": {
        "message": "நண்பர்களுக்கு அழைப்பு - இலவச பிரீமியம்."
    },
    "Invite friends. Get Premium.": {
        "message": "நண்பர்களுக்கு அழைப்பு. பிரீமியம் கிடைக்கும்."
    },
    "It was okay": {
        "message": "இது பரவாயில்லை"
    },
    "JE": {
        "message": "ஜெர்சி"
    },
    "JM": {
        "message": "ஜமாய்க்கா"
    },
    "JO": {
        "message": "ஜொர்டான்"
    },
    "JP": {
        "message": "ஜப்பான்"
    },
    "JT": {
        "message": "ஜான்ஸ்டன் தீவு"
    },
    "KE": {
        "message": "கென்யா"
    },
    "KG": {
        "message": "கிர்கிஸ்தான்"
    },
    "KH": {
        "message": "கம்போடியா"
    },
    "KI": {
        "message": "கிரிபடி"
    },
    "KM": {
        "message": "கோமரோஸ்"
    },
    "KN": {
        "message": "செயின்ட் கிட்ஸ் மற்றும் நெவிஸ்"
    },
    "KP": {
        "message": "வட கொரியா"
    },
    "KR": {
        "message": "தென் கொரியா"
    },
    "KW": {
        "message": "குவைத்து"
    },
    "KY": {
        "message": "கேமென் தீவுகள்"
    },
    "KZ": {
        "message": "கஜகஸ்தான்"
    },
    "LA": {
        "message": "லாவோஸ்"
    },
    "LB": {
        "message": "லெபனான்"
    },
    "LC": {
        "message": "செயின்ட் லூசியா"
    },
    "LI": {
        "message": "லிச்செண்ஸ்டெய்ன்"
    },
    "LK": {
        "message": "இலங்கை"
    },
    "LR": {
        "message": "லைபேரியா"
    },
    "LS": {
        "message": "லெசோதோ"
    },
    "LT": {
        "message": "லிதுவேனியா"
    },
    "LU": {
        "message": "லக்ஸ்சம்பர்க்"
    },
    "LV": {
        "message": "லாட்வியா"
    },
    "LY": {
        "message": "லிப்யா"
    },
    "Language": {
        "message": "மொழி"
    },
    "Library": {
        "message": "நூலகம்"
    },
    "Like it": {
        "message": "அது போலவே"
    },
    "Loading": {
        "message": "சுமையேற்றம்"
    },
    "Loading site...": {
        "message": "சுமையேற்றம்"
    },
    "Log in": {
        "message": "பதிவு"
    },
    "Log out": {
        "message": "வெளியே புகுபதிகை"
    },
    "Love Hola?": {
        "message": "Hola, காதல்?"
    },
    "Love it": {
        "message": "இது காதல்"
    },
    "MA": {
        "message": "மொரோக்கோ"
    },
    "MC": {
        "message": "மொனாக்கோ"
    },
    "MD": {
        "message": "மால்டோவா"
    },
    "ME": {
        "message": "மான்டேனெக்ரோ"
    },
    "MF": {
        "message": "செயின் மார்டீன்"
    },
    "MG": {
        "message": "மடகாஸ்கர்"
    },
    "MH": {
        "message": "மார்ஷல் தீவுகள்"
    },
    "MI": {
        "message": "மிட்வே தீவுகள்"
    },
    "MK": {
        "message": "மசெடோணியா"
    },
    "ML": {
        "message": "மாலீ"
    },
    "MM": {
        "message": "மியான்மார்"
    },
    "MN": {
        "message": "மங்கோலியா"
    },
    "MO": {
        "message": "மெக்கௌ"
    },
    "MP": {
        "message": "வடக்கு மரியானா தீவுகள்"
    },
    "MQ": {
        "message": "மார்டினிக்"
    },
    "MR": {
        "message": "மௌரிடானியா"
    },
    "MS": {
        "message": "மௌன்ட்செராட்"
    },
    "MT": {
        "message": "மால்டா"
    },
    "MU": {
        "message": "மொரிசியஸ்"
    },
    "MV": {
        "message": "மாலத்தீவு"
    },
    "MW": {
        "message": "மலாவீ"
    },
    "MX": {
        "message": "மெக்சிகோ"
    },
    "MY": {
        "message": "மலேஷியா"
    },
    "MZ": {
        "message": "மொசாம்பிக்"
    },
    "Make your Internet better with $1": {
        "message": "உங்கள் இணைய சிறப்பாக $1"
    },
    "Menu": {
        "message": "பட்டி"
    },
    "Might not work on all sites": {
        "message": "அனைத்து தளங்களில் வேலை இல்லை என்று"
    },
    "Mode": {
        "message": "முறை"
    },
    "More countries": {
        "message": "மேலும் நாடுகளில்"
    },
    "More sites...": {
        "message": "மேலும் ..."
    },
    "More...": {
        "message": "மேலும் ..."
    },
    "My Account": {
        "message": "எனது கணக்கு"
    },
    "My History": {
        "message": "என் வரலாறு"
    },
    "My Settings": {
        "message": "என் அமைப்புகள்"
    },
    "My favorites": {
        "message": "என் அபிமான"
    },
    "NA": {
        "message": "நமீபியா"
    },
    "NC": {
        "message": "புதிய கலிடோன்யா"
    },
    "NE": {
        "message": "நைஜர்"
    },
    "NF": {
        "message": "நார்ஃபாக் தீவுகள்"
    },
    "NG": {
        "message": "நைஜீரியா"
    },
    "NI": {
        "message": "நிகாராகுவா"
    },
    "NL": {
        "message": "நெதர்லாந்து"
    },
    "NO": {
        "message": "நார்வே"
    },
    "NP": {
        "message": "நேபாளம்"
    },
    "NQ": {
        "message": "Dronning மாட் மனை"
    },
    "NR": {
        "message": "நௌரு"
    },
    "NT": {
        "message": "நடுநிலை மண்டலம்"
    },
    "NU": {
        "message": "நியூ"
    },
    "NZ": {
        "message": "நியூசிலாந்து"
    },
    "Need Help?": {
        "message": "உதவி தேவையா?"
    },
    "Netflix": {
        "message": "நெட்ஃபிக்ஸ்"
    },
    "Never ask me again": {
        "message": "மீண்டும் என்னிடம் கேட்க வேண்டாம்"
    },
    "Never be a peer": {
        "message": "ஒரு பீர் இருக்க முடியாது"
    },
    "No": {
        "message": "இல்லை"
    },
    "No idle peers found.": {
        "message": "இல்லை சும்மா சக காணப்படும்."
    },
    "No recent videos found": {
        "message": "சமீபத்தில் எந்த வீடியோக்கள் இல்லை"
    },
    "No saved videos found": {
        "message": "சேமிக்கப்பட்ட வீடியோக்கள் இல்லை"
    },
    "No title": {
        "message": "தலைப்பு இல்லை"
    },
    "No videos found": {
        "message": "வீடியோக்கள் எதுவும் காணப்படவில்லை"
    },
    "No videos found on active page": {
        "message": "செயலில் பக்கம் காணப்படவில்லை வீடியோக்கள்"
    },
    "No, Thanks": {
        "message": "இல்லை, நன்றி"
    },
    "No, fix it": {
        "message": "இல்லை, அது சரி"
    },
    "Not working?": {
        "message": "வேலை?"
    },
    "Number of users that pressed not working": {
        "message": "வேலை அழுத்தம் பயனர்கள் எண்ணிக்கை"
    },
    "Number of users that use this option": {
        "message": "இந்த விருப்பத்தை பயன்படுத்த பயனர்கள் எண்ணிக்கை"
    },
    "OM": {
        "message": "ஓமான்"
    },
    "Off": {
        "message": "இனிய"
    },
    "Oh, yes!": {
        "message": "ஓ, ஆமாம்!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "பயர்பாக்ஸ் பழைய பதிப்பு. பிரஸ் <a> இங்கே </a> மேம்படுத்த."
    },
    "On": {
        "message": "மீது"
    },
    "Open Media Player": {
        "message": "திறந்த மீடியா பிளேயர்"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "நமது புதிய mplayer விரைவில் வருகிறது!"
    },
    "PA": {
        "message": "பனாமா"
    },
    "PC": {
        "message": "பசிபிக் தீவுகள் அறக்கட்டளை பிரதேசம்"
    },
    "PE": {
        "message": "பெரு"
    },
    "PF": {
        "message": "ஃப்ரென்ச் பாலினேஷியா"
    },
    "PG": {
        "message": "பாப்புவா நியூ கினி"
    },
    "PH": {
        "message": "பிலிப்பைன்ஸ்"
    },
    "PK": {
        "message": "பாகிஸ்தான்"
    },
    "PL": {
        "message": "போலந்து"
    },
    "PM": {
        "message": "செயின்ட் பியர் மற்றும் மிக்வேலான்"
    },
    "PN": {
        "message": "பிட்கேன்"
    },
    "PR": {
        "message": "போர்த்த ரிக்கோ"
    },
    "PS": {
        "message": "பாலஸ்தீனியன் மாஹாணம்"
    },
    "PT": {
        "message": "போர்ச்சுக்கல்"
    },
    "PU": {
        "message": "அமெரிக்க இதர பசிபிக் தீவுகள்"
    },
    "PW": {
        "message": "பலவ்"
    },
    "PY": {
        "message": "பாரகுவே"
    },
    "PZ": {
        "message": "பனாமா கால்வாய் மண்டலம்"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "மற்ற முடக்க தயவு செய்து <a>நீட்சிகள்</a> நீங்கள் போன்ற விளம்பரத்தை பிளாக்கர்ஸ், மற்ற VPN சேவைகள், உங்கள் ப்ராக்ஸி அமைப்புகளை கட்டுப்படுத்த முடியும் என்று"
    },
    "Please enter a valid email address.": {
        "message": "ஒரு செல்லுபடியாகும் மின்னஞ்சல் முகவரியை உள்ளிடவும்."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com போன்ற, ஒரு இணைய தளம் முகவரியை உள்ளிடவும்"
    },
    "Please help us get better": {
        "message": "நமக்கு நல்லது பெற உதவுங்கள்"
    },
    "Popular in $1": {
        "message": "பிரபலமான $1"
    },
    "Popular in the world": {
        "message": "உலக உள்ள புகழ்பெற்ற"
    },
    "Popular sites": {
        "message": "பிரபலமான தளங்கள்"
    },
    "Premium": {
        "message": "பிரீமியம்"
    },
    "QA": {
        "message": "காடார்"
    },
    "QO": {
        "message": "சுற்றியுள்ள ஓசியானியா"
    },
    "RE": {
        "message": "ரீயூனியன்"
    },
    "RO": {
        "message": "ருமேனியா"
    },
    "RS": {
        "message": "செர்பியா"
    },
    "RU": {
        "message": "ரஷ்யா"
    },
    "RW": {
        "message": "ருவான்டா"
    },
    "Rate us": {
        "message": "எங்களை மதிப்பிட"
    },
    "Recent Videos": {
        "message": "சமீபத்திய வீடியோக்கள்"
    },
    "Reload": {
        "message": "ஏற்றவும்"
    },
    "Reload Hola": {
        "message": "ஹோலா ஏற்றவும்"
    },
    "Remember server": {
        "message": "சர்வர் நினைவில்"
    },
    "Report a problem": {
        "message": "ஒரு பிரச்சனை தெரிவியுங்கள்"
    },
    "Retry safe mode": {
        "message": "பாதுகாப்பான முறையில் மீண்டும் முயற்சி செய்"
    },
    "SA": {
        "message": "சவூதி அரேபியா"
    },
    "SB": {
        "message": "சாலமன் தீவுகள்"
    },
    "SC": {
        "message": "செஷெல்ஸ்"
    },
    "SD": {
        "message": "சூடான்"
    },
    "SE": {
        "message": "ஸ்வீடன்"
    },
    "SG": {
        "message": "சிங்கப்பூர்"
    },
    "SH": {
        "message": "செயின்ட் ஹெலெனா"
    },
    "SI": {
        "message": "ஸ்லோவேனியா"
    },
    "SJ": {
        "message": "ஸ்வல்பார்டு மற்றும் ஜான் மேயன்"
    },
    "SK": {
        "message": "ஸ்லோவாகியா"
    },
    "SL": {
        "message": "சியேரா லியோன்"
    },
    "SM": {
        "message": "சான் மெரினோ"
    },
    "SN": {
        "message": "செனெகல்"
    },
    "SO": {
        "message": "சொமாலியா"
    },
    "SR": {
        "message": "சூரினாம்"
    },
    "ST": {
        "message": "சாவ் தோம் மற்றும் ப்ரின்சிபி"
    },
    "SU": {
        "message": "சோவியத் சோசலிசக் குடியரசுகளின்"
    },
    "SV": {
        "message": "எல் சால்வடார்"
    },
    "SY": {
        "message": "சிரியா"
    },
    "SZ": {
        "message": "ஸ்வாஸிலாண்ட்"
    },
    "Safe": {
        "message": "பாதுகாப்பான"
    },
    "Safe mode": {
        "message": "பாதுகாப்பான முறையில்"
    },
    "Save": {
        "message": "சேமி"
    },
    "Saved Videos": {
        "message": "சேமித்த வீடியோக்கள்"
    },
    "Saved for later": {
        "message": "பின்னர் சேமிக்கப்படும்"
    },
    "Search video title": {
        "message": "தேடல் வீடியோ தலைப்பு"
    },
    "Select a Country": {
        "message": "ஒரு தேர்ந்தெடுக்கவும் நாடு"
    },
    "Select site to unblock": {
        "message": "தடைநீக்கம் செய்ய அதுவாகவே"
    },
    "Server saved!": {
        "message": "சர்வர் காப்பாற்றினார்!"
    },
    "Set safe mode for $1 $2": {
        "message": "அமை பாதுகாப்பான முறையில் $1 $2"
    },
    "Settings": {
        "message": "அமைப்புகள்"
    },
    "Share": {
        "message": "பகிர்"
    },
    "Share $1 on $2": {
        "message": "$2 இல் $1 Share"
    },
    "Share $1 via $2": {
        "message": "$2 வழியாக $1 Share"
    },
    "Share with friends!": {
        "message": "நண்பர்கள் பகிர்ந்து!"
    },
    "Sign up": {
        "message": "பதிவு"
    },
    "Solve buffering": {
        "message": "தாங்கல் தீர்க்க"
    },
    "Solve buffering problems with": {
        "message": "உடன் தாங்கல் பிரச்சினைகளை தீர்க்க"
    },
    "Solves it": {
        "message": "அதை தீர்ப்பதை"
    },
    "Staff Picks": {
        "message": "ஊழியருக்கு"
    },
    "Start Hola": {
        "message": "ஆரம்பி"
    },
    "Starting...": {
        "message": "தொடக்க ..."
    },
    "Stop Hola": {
        "message": "நிறுத்து Hola"
    },
    "Stopping peer routing...": {
        "message": "பியர் ரூட்டிங் நிறுத்தாமல் ..."
    },
    "Stream": {
        "message": "நீரோடை"
    },
    "Stream Instantly": {
        "message": "உடனடியாக சிற்றாறு"
    },
    "Submit": {
        "message": "சமர்ப்பிக்கவும்"
    },
    "Support Hola": {
        "message": "ஆதரவு Hola"
    },
    "TA": {
        "message": "ட்ரிஸ்டன் டா கன்ஹா"
    },
    "TC": {
        "message": "டர்க்ஸ் மற்றும் கைகோஸ் தீவுகள்"
    },
    "TD": {
        "message": "சாட்"
    },
    "TF": {
        "message": "ஃப்ரென்ச் தெற்கு மாஹாணங்கள்"
    },
    "TG": {
        "message": "டோகோ"
    },
    "TH": {
        "message": "தாய்லாந்து"
    },
    "TJ": {
        "message": "தாஜிகிஸ்தான்"
    },
    "TK": {
        "message": "டோகேலோ"
    },
    "TL": {
        "message": "கிழக்கு திமோர்"
    },
    "TM": {
        "message": "துர்க்மெனிஸ்தான்"
    },
    "TN": {
        "message": "டுனிசியா"
    },
    "TO": {
        "message": "டோங்கா"
    },
    "TR": {
        "message": "துருக்கி"
    },
    "TT": {
        "message": "திரினிடாட் மற்றும் தொபாகோ"
    },
    "TV": {
        "message": "துவாலூ"
    },
    "TW": {
        "message": "தைவான்"
    },
    "TZ": {
        "message": "டான்சானியா"
    },
    "Talk to us on $1": {
        "message": "$1 எங்களுடன் பேச"
    },
    "Tell friends about $1": {
        "message": "நண்பர்கள் சுமார் $1 சொல்லுங்கள்"
    },
    "Testing connection...": {
        "message": "இணைப்பை சோதிக்கிறது ..."
    },
    "Thank you!": {
        "message": "நன்றி!"
    },
    "There seems to be an error": {
        "message": "ஒரு பிழை இருப்பதாக தெரிகிறது"
    },
    "Top popular sites": {
        "message": "சிறந்த பிரபலமான தளங்கள்"
    },
    "Translate to your language": {
        "message": "உங்கள் மொழியை மொழிபெயர்"
    },
    "Try again": {
        "message": "மீண்டும் முயற்சிக்கவும்"
    },
    "Try another server": {
        "message": "மற்றொரு சர்வர் முயற்சி"
    },
    "Try it": {
        "message": "அதை முயற்சி"
    },
    "Try safe mode": {
        "message": "பாதுகாப்பான முறையில் முயற்சி"
    },
    "Try to <span>reload</span>": {
        "message": "<span> மறுஏற்றம் </span> முயற்சி"
    },
    "Trying another peer...": {
        "message": "மற்றொரு பியர் முயற்சி ..."
    },
    "Turn off Accelerator": {
        "message": "முடுக்கி அணைக்க"
    },
    "Turn off Hola": {
        "message": "ஹோலா அணைக்க"
    },
    "Turn on Accelerator": {
        "message": "முடுக்கி இயக்கு"
    },
    "Turn on Hola": {
        "message": "ஹோலா இயக்கு"
    },
    "Turn on to get started": {
        "message": "தொடங்குவதற்கு இயக்கு"
    },
    "UA": {
        "message": "உக்ரைன்"
    },
    "UG": {
        "message": "உகாண்டா"
    },
    "UM": {
        "message": "யுனைட்டட் ஸ்டேட்ஸும் சிறிய அவுட்லைன் தீவுகளும்"
    },
    "US": {
        "message": "ஐக்கிய அமெரிக்க குடியரசு"
    },
    "UY": {
        "message": "உருகுவே"
    },
    "UZ": {
        "message": "உஸ்பெகிஸ்தான்"
    },
    "Unblocker is disabled": {
        "message": "Unblocker முடக்கப்பட்டுள்ளது"
    },
    "Update": {
        "message": "புதுப்பி"
    },
    "Upgrade": {
        "message": "புதுப்பி"
    },
    "Using": {
        "message": "பயன்படுத்தி"
    },
    "Using Hola": {
        "message": "Hola பயன்படுத்தி"
    },
    "VA": {
        "message": "வாடிகன்"
    },
    "VC": {
        "message": "செயின் வின்சன்ட் மற்றும் கிரெனடைன்ஸ்"
    },
    "VD": {
        "message": "வடக்கு வியட்நாம்"
    },
    "VE": {
        "message": "வெனஜுவேலா"
    },
    "VG": {
        "message": "பிரிட்டீஷ் கன்னித் தீவுகள்"
    },
    "VI": {
        "message": "யூ.எஸ் கன்னித் தீவுகள்"
    },
    "VN": {
        "message": "வியட்நாம்"
    },
    "VPN": {
        "message": "மெ.த.பி.க்குள்ளேயே"
    },
    "VPN Premium": {
        "message": "VPN பிரீமியம்"
    },
    "VU": {
        "message": "வனுவாட்டு"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "குரோம் மிக பழைய பதிப்பு, <a> மேம்படுத்தல் </a> குரோம் ஹோலா பயன்படுத்த"
    },
    "Video": {
        "message": "வீடியோ"
    },
    "Video stuck?": {
        "message": "வீடியோ சிக்கி?"
    },
    "Videos available for instant streaming": {
        "message": "உடனடி ஸ்ட்ரீமிங் கிடைக்கும் வீடியோக்கள்"
    },
    "WF": {
        "message": "வாலிஸ் மற்றும் ஃப்யூசுனா"
    },
    "WK": {
        "message": "வேக் தீவு"
    },
    "WS": {
        "message": "சமோவா"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "பிற சாதனங்களில் ஹோலா வேண்டும்? (எக்ஸ்பாக்ஸ், சோசலிஸ்ட் கட்சி, ஆப்பிள் டிவி, ஐபோன் ...). இங்கே கிளிக் செய்யவும்"
    },
    "Want to know more?": {
        "message": "மேலும் தெரிந்து கொள்ள வேண்டும்?"
    },
    "Watch Now": {
        "message": "இப்போது காண்க"
    },
    "We found $1 videos": {
        "message": "நாம் காணவில்லை $1 வீடியோக்கள்"
    },
    "We will be in touch with you soon": {
        "message": "நாம் விரைவில் நீங்கள் தொடர்பு இருக்கும்"
    },
    "Working!": {
        "message": "வேலை!"
    },
    "Working?": {
        "message": "வேலை?"
    },
    "Works on all sites but slower": {
        "message": "அனைத்து தளங்களையும் ஆனால் மெதுவாக வேலை"
    },
    "YD": {
        "message": "யேமன் மக்கள் ஜனநாயக குடியரசு"
    },
    "YE": {
        "message": "யேமன்"
    },
    "YT": {
        "message": "மயோத்"
    },
    "Yes": {
        "message": "ஆம்"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "நீங்கள் Hola பயன்படுத்த ஓபரா சமீபத்திய பதிப்பை மேம்படுத்த வேண்டும். அழுத்தவும் <a>இங்கே</a> மேம்படுத்த."
    },
    "ZA": {
        "message": "தென் ஆப்ரிக்கா"
    },
    "ZM": {
        "message": "சாம்பியா"
    },
    "ZW": {
        "message": "ஜிம்பாப்வே"
    },
    "ZZ": {
        "message": "தெரியாத அல்லது செல்லாத பிரதேசம்"
    },
    "app_desc": {
        "message": "உங்கள் நாடு, நிறுவனம் அல்லது Hola, பள்ளி தடுக்கப்பட்டது அணுகல் வலைத்தளங்கள்! Hola, இலவச மற்றும் பயன்படுத்த எளிதானது!"
    },
    "app_name": {
        "message": "ஹோலா சிறந்த இணைய"
    },
    "back to": {
        "message": "ஆதரிக்க"
    },
    "changing...": {
        "message": "மாறும் ..."
    },
    "cool sites": {
        "message": "குளிர் தளங்கள்"
    },
    "current site": {
        "message": "தற்போதைய தளம்"
    },
    "day": {
        "message": "நாள்"
    },
    "days": {
        "message": "நாட்களில்"
    },
    "even more...": {
        "message": "மேலும் ..."
    },
    "mode": {
        "message": "முறையில்"
    },
    "more options...": {
        "message": "மேலும் விருப்பத்தேர்வுகளை ..."
    },
    "not working?": {
        "message": "வேலை இல்லை?"
    },
    "not working? try another server": {
        "message": "வேலை இல்லை? மற்றொரு சர்வர் முயற்சி"
    },
    "on this page": {
        "message": "இந்த பக்கத்தில்"
    },
    "sites that are censored": {
        "message": "தணிக்கை தளங்கள்"
    },
    "start": {
        "message": "ஆரம்பி"
    },
    "working? remember": {
        "message": "வேலை? நினைவில்"
    }
};
return E; });