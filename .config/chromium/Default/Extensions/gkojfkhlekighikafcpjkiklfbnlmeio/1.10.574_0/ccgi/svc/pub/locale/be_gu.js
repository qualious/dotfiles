'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "દ્વારા"
    },
    "$1 Buffering?": {
        "message": "$1 બફર?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola જ કરવા માટે અહીં $2\n\nક્લિક કરો ઍક્સેસ કરવા માટે: $3\n\n તે મને ઝડપી ઇન્ટરનેટ સર્ફ અને ઍક્સેસ કરી શકો છો કે જે મહત્તમ, સ્થાપિત $4$5"
    },
    "$1 VPN": {
        "message": "$1 વીપીએન"
    },
    "$1 VPN Premium": {
        "message": "$1 વીપીએન પ્રીમિયમ"
    },
    "$1 from $2": {
        "message": "$2 માંથી $1"
    },
    "$1 not found": {
        "message": "$1 મળ્યા નથી"
    },
    "$1 via Hola": {
        "message": "Hola મારફતે $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(આ વર્ઝનમાં હોલાની અન્ય સેવાઓ ઉપ્લબ્ધ નથી)"
    },
    "AC": {
        "message": "એસેન્શન ટાપુ"
    },
    "AD": {
        "message": "ઍંડોરા"
    },
    "AE": {
        "message": "યુનાઇટેડ અરબ એમિરેટ્સ"
    },
    "AF": {
        "message": "અફઘાનિસ્તાન"
    },
    "AG": {
        "message": "એન્ટીગુઆ અને બરબુડા"
    },
    "AI": {
        "message": "ઍંગ્વિલા"
    },
    "AL": {
        "message": "અલ્બેનિયા"
    },
    "AM": {
        "message": "આર્મેનિયા"
    },
    "AN": {
        "message": "નેધરલેંડ્સ એંટિલેસ"
    },
    "AO": {
        "message": "અંગોલા"
    },
    "AQ": {
        "message": "એન્ટાર્કટિકા"
    },
    "AR": {
        "message": "આર્જેન્ટીના"
    },
    "AS": {
        "message": "અમેરીકન સમોઆ"
    },
    "AT": {
        "message": "ઑસ્ટ્રિયા"
    },
    "AU": {
        "message": "ઑસ્ટ્રેલિયા"
    },
    "AW": {
        "message": "અરુબા"
    },
    "AX": {
        "message": "એલેંડ આઇલેન્ડ્સ"
    },
    "AZ": {
        "message": "અઝરબૈજાન"
    },
    "About": {
        "message": "વિશે"
    },
    "About Hola": {
        "message": "Hola વિશે"
    },
    "Accelerator": {
        "message": "ગતિ વધારનાર"
    },
    "Accelerator is": {
        "message": "એક્સેલેટર છે"
    },
    "Access $1 - cool site!": {
        "message": "$1 વપરાશ - ઠંડી સાઇટ!"
    },
    "Access $1?": {
        "message": "$1 ઍક્સેસ?"
    },
    "Access any site from any country, free": {
        "message": "તમે કોઈ પણ વેબસાઈટ કોઈ પણ દેશથી મફતમાં ખોલી શકો છો!"
    },
    "Access cool sites": {
        "message": "ઍક્સેસ ઠંડી સાઇટ્સ"
    },
    "Access more sites": {
        "message": "ઍક્સેસ વધુ સાઇટ્સ"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "ઍક્સેસ સાઇટ્સ તમારા દેશમાં સેન્સર અને Hola સાથે તમારા ઇન્ટરનેટ વેગ - મફત!"
    },
    "Accessing $1 with Hola": {
        "message": "Hola સાથે $1 ઍક્સેસ"
    },
    "Account": {
        "message": "ખાતું"
    },
    "Account type": {
        "message": "એકાઉન્ટ પ્રકાર"
    },
    "Activating...": {
        "message": "સક્રિય..."
    },
    "All ($1)": {
        "message": "બધા ($1)"
    },
    "Apply settings...": {
        "message": "સેટિંગ્સ લાગુ કરો ..."
    },
    "Author site:": {
        "message": "લેખક સાઇટ:"
    },
    "Author:": {
        "message": "લેખક:"
    },
    "Awesome!": {
        "message": "અદ્ભુત!"
    },
    "BA": {
        "message": "બોસ્નિયા અને હર્ઝેગોવિના"
    },
    "BB": {
        "message": "બારબાડોસ"
    },
    "BD": {
        "message": "બાંગ્લાદેશ"
    },
    "BE": {
        "message": "બેલ્જીયમ"
    },
    "BF": {
        "message": "બુર્કિના ફાસો"
    },
    "BG": {
        "message": "બલ્ગેરિયા"
    },
    "BH": {
        "message": "બેહરીન"
    },
    "BI": {
        "message": "બુરુંડી"
    },
    "BJ": {
        "message": "બેનિન"
    },
    "BL": {
        "message": "સેંટ બાર્થલેમી"
    },
    "BM": {
        "message": "બર્મુડા"
    },
    "BN": {
        "message": "બ્રુનેઇ"
    },
    "BO": {
        "message": "બોલિવિયા"
    },
    "BQ": {
        "message": "બ્રિટિશ એન્ટાર્કટિક ટેરિટરી"
    },
    "BR": {
        "message": "બ્રાઝિલ"
    },
    "BS": {
        "message": "બહામાસ"
    },
    "BT": {
        "message": "ભૂટાન"
    },
    "BV": {
        "message": "બૌવેત આઇલેન્ડ"
    },
    "BW": {
        "message": "બોત્સ્વાના"
    },
    "BY": {
        "message": "બેલારુસ"
    },
    "BZ": {
        "message": "બેલીઝ"
    },
    "Back to $1": {
        "message": "પાછા માટે $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "/ આઇફોન iPad માટે Hola વિચાર પ્રથમ હોઈ - હવે રજીસ્ટર કરો:"
    },
    "Browsing": {
        "message": "બ્રાઉઝિંગ"
    },
    "Buffering problems?": {
        "message": "બફર સમસ્યા છે?"
    },
    "Buffering?": {
        "message": "બફર?"
    },
    "CA": {
        "message": "કેનેડા"
    },
    "CC": {
        "message": "કોકોઝ આઇલેન્ડ"
    },
    "CD": {
        "message": "કોંગો - કિંશાસા"
    },
    "CF": {
        "message": "સેંટ્રલ આફ્રિકન રીપબ્લિક"
    },
    "CG": {
        "message": "કોંગો - બ્રાઝાવિલે"
    },
    "CH": {
        "message": "સ્વિટ્ઝર્લૅન્ડ"
    },
    "CI": {
        "message": "આઇવરી કોસ્ટ"
    },
    "CK": {
        "message": "કુક આઇલેન્ડ્સ"
    },
    "CL": {
        "message": "ચિલી"
    },
    "CM": {
        "message": "કૅમરૂન"
    },
    "CN": {
        "message": "ચીન"
    },
    "CO": {
        "message": "કોલમ્બિયા"
    },
    "CP": {
        "message": "ક્લિપરટન આઇલેન્ડ"
    },
    "CR": {
        "message": "કોસ્ટા રિકા"
    },
    "CS": {
        "message": "સર્બિયા અને મોન્ટેનેગ્રો"
    },
    "CT": {
        "message": "કેન્ટોન અને એન્ડરબરી ટાપુઓ"
    },
    "CU": {
        "message": "ક્યુબા"
    },
    "CV": {
        "message": "કૅપ વર્ડે"
    },
    "CX": {
        "message": "ક્રિસમસ આઇલેંડ"
    },
    "CY": {
        "message": "સાયપ્રસ"
    },
    "CZ": {
        "message": "ચેક રીપબ્લિક"
    },
    "Changing country...": {
        "message": "દેશ બદલવાનું ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 માટે મહત્તમ તપાસો!"
    },
    "Check out Hola for mobile devices": {
        "message": "મોબાઇલ ઉપકરણો માટે Hola તપાસો"
    },
    "Check your Internet connection": {
        "message": "તમારું ઈન્ટરનેટ ચાલું છે કે નહિં તેની ખાતરી કરી લો"
    },
    "Choose<br>Country": {
        "message": "પસંદ કરો <br> દેશ"
    },
    "Configuring...": {
        "message": "રૂપરેખાંકિત કરી રહ્યા છે ..."
    },
    "Connecting...": {
        "message": "કનેક્ટિંગ ..."
    },
    "Cool site!": {
        "message": "કૂલ સાઇટ!"
    },
    "Creative licenses": {
        "message": "સર્જનાત્મક લાઇસન્સ"
    },
    "DD": {
        "message": "પૂર્વ જર્મની"
    },
    "DE": {
        "message": "જર્મની"
    },
    "DG": {
        "message": "ડિગો ગ્રેસીયા"
    },
    "DJ": {
        "message": "જીબૌટી"
    },
    "DK": {
        "message": "ડેનમાર્ક"
    },
    "DM": {
        "message": "ડોમિનિકા"
    },
    "DO": {
        "message": "ડોમિનિકન રીપબ્લિક"
    },
    "DZ": {
        "message": "અલ્જીરિયા"
    },
    "Delete": {
        "message": "કાઢી"
    },
    "Deleted from my list": {
        "message": "મારા યાદીમાંથી કાઢી"
    },
    "Did it work?": {
        "message": "તે કામ કરી છે?"
    },
    "Did you experience any buffering?": {
        "message": "જો તમે કોઇ બફરીંગને અનુભવ કર્યો હતો?"
    },
    "Disliked it": {
        "message": "નાપસંદ"
    },
    "Don't show again for $1 for one week": {
        "message": "એક અઠવાડિયા માટે $1 માટે ફરીથી બતાવશો નહીં"
    },
    "Don't show again for any site for one week": {
        "message": "એક અઠવાડિયા માટે કોઈપણ સાઇટ માટે ફરીથી બતાવશો નહીં"
    },
    "Downloading": {
        "message": "ડાઉનલોડ"
    },
    "EA": {
        "message": "ક્વેટા અને Melilla"
    },
    "EC": {
        "message": "એક્વાડોર"
    },
    "EE": {
        "message": "એસ્ટોનિયા"
    },
    "EG": {
        "message": "ઇજિપ્ત"
    },
    "EH": {
        "message": "પશ્ચિમી સહારા"
    },
    "ER": {
        "message": "એરિટ્રિયા"
    },
    "ES": {
        "message": "સ્પેન"
    },
    "ET": {
        "message": "ઇથિઓપિયા"
    },
    "EU": {
        "message": "યુરોપિયન યુનિયન"
    },
    "Enable": {
        "message": "ચાલું કરો"
    },
    "Enable Hola Accelerator": {
        "message": "Hola એક્સેલેટર સક્ષમ કરો"
    },
    "Enjoy!": {
        "message": "આનંદ માણો!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome માટે Hola માણી?"
    },
    "Enter site to access": {
        "message": "વપરાશ માટે સાઇટ દાખલ કરો"
    },
    "Enter your email": {
        "message": "તમારા ઇમેઇલ દાખલ કરો"
    },
    "FI": {
        "message": "ફીનલેંડ"
    },
    "FJ": {
        "message": "ફીજી"
    },
    "FK": {
        "message": "ફૉકલૅંડ આઇલૅંડ્સ"
    },
    "FM": {
        "message": "માઇક્રોનેશિયા"
    },
    "FO": {
        "message": "ફૅરો આઇલેન્ડ્સ"
    },
    "FQ": {
        "message": "ફ્રેન્ચ સાઉધર્ન અને એન્ટાર્કટિક પ્રદેશો"
    },
    "FR": {
        "message": "ફ્રાંસ"
    },
    "FX": {
        "message": "મેટ્રોપોલિટન ફ્રાન્સમાં"
    },
    "Fast": {
        "message": "ઝડપી"
    },
    "Finding new peers...": {
        "message": "નવા મિત્રો શોધી રહ્યું છે ..."
    },
    "Finding peers...": {
        "message": "મિત્રો શોધી રહ્યું છે ..."
    },
    "Free": {
        "message": "મુક્ત"
    },
    "From": {
        "message": "પ્રતિ"
    },
    "Full list": {
        "message": "સંપૂર્ણ યાદી"
    },
    "GA": {
        "message": "ગેબન"
    },
    "GB": {
        "message": "યુનાઇટેડ કિંગડમ"
    },
    "GD": {
        "message": "ગ્રેનેડા"
    },
    "GE": {
        "message": "જ્યોર્જીયા"
    },
    "GF": {
        "message": "ફ્રેંચ ગયાના"
    },
    "GG": {
        "message": "ગ્વેર્નસે"
    },
    "GH": {
        "message": "ઘાના"
    },
    "GI": {
        "message": "જીબ્રાલ્ટર"
    },
    "GL": {
        "message": "ગ્રીનલેન્ડ"
    },
    "GM": {
        "message": "ગેમ્બિયા"
    },
    "GN": {
        "message": "ગિની"
    },
    "GP": {
        "message": "ગ્વાડેલોપ"
    },
    "GQ": {
        "message": "ઇક્વેટોરિયલ ગિની"
    },
    "GR": {
        "message": "ગ્રીસ"
    },
    "GS": {
        "message": "દક્ષિણ જ્યોર્જીયા અને દક્ષિણ સેન્ડવિચ આઇલેન્ડ"
    },
    "GT": {
        "message": "ગ્વાટેમાલા"
    },
    "GU": {
        "message": "ગ્વામ"
    },
    "GW": {
        "message": "ગિની-બિસાઉ"
    },
    "GY": {
        "message": "ગયાના"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 તગત મેળવો"
    },
    "Get Free Premium": {
        "message": "મુક્ત પ્રીમિયમ મેળવો"
    },
    "Get Hola Accelerator": {
        "message": "Hola એક્સેલેટર મેળવો"
    },
    "Get Hola Player": {
        "message": "વિચાર મહત્તમ પ્લેયર"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "કોઈ પણ અડચણ કે જાહેરાત ન જોઈતી હોય તો હોલા પ્લસ મેળવો અને તેની સેવા નો લાભ લો"
    },
    "Get Hola Premium": {
        "message": "Hola પ્રીમિયમ મેળવો"
    },
    "Get Hola for Android": {
        "message": "Android માટે Hola મેળવો"
    },
    "Get Premium support": {
        "message": "પ્રીમિયમ આધાર મેળવો"
    },
    "Get Unlimited Unblocking": {
        "message": "અનલિમિટેડ તગત મેળવો"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", સેન્સર સાઇટ્સ ઍક્સેસ મેળવો હવે તે પ્રયાસ કરો: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "સ્કાઈપ દ્વારા એન્જિનિયર ની મદદ મેળવો:"
    },
    "Get the Fastest Servers": {
        "message": "સૌથી ઝડપી સર્વરો મેળવો"
    },
    "Go": {
        "message": "જાઓ"
    },
    "Go Hola Premium": {
        "message": "જાવ Hola પ્રીમિયમ"
    },
    "HK": {
        "message": "હોંગકોંગ SAR ચીન"
    },
    "HM": {
        "message": "હર્ડ આઇલૅંડ એંડ મેકડોનાલ્ડ આઇલૅંડ્સ"
    },
    "HN": {
        "message": "હોન્ડુરસ"
    },
    "HR": {
        "message": "ક્રોએશિયા"
    },
    "HT": {
        "message": "હૈતિ"
    },
    "HU": {
        "message": "હંગેરી"
    },
    "Hate it": {
        "message": "તે અપ્રિય"
    },
    "Help": {
        "message": "મદદ"
    },
    "Hey,\n\nI'm using": {
        "message": "અરે,\n\nહું ઉપયોગ કરું છું"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "હાય,\n\nહું $1 ($2) ઉપયોગ કરવાનું શરૂ કર્યું. તે મને ઝડપી ઇન્ટરનેટ સર્ફ અને મારા દેશમાં $3 ઍક્સેસ કરી શકો છો."
    },
    "Hola Accelerator": {
        "message": "Hola એક્સેલેટર"
    },
    "Hola Media Player": {
        "message": "Hola મીડિયા પ્લેયર"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "અન્ય એક્સટેન્શનને તમારા પ્રોક્સી સેટિંગ્સ નિયંત્રિત છે કારણ કે Hola કામ કરી શકતું નથી."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola વિન્ડોઝ 8 સ્થિતિમાં સારી રીતે કામ કરતું નથી. જુઓ: મોડ પર સ્વિચ કરો. ક્લિક કરો <a>અહીં</a> સૂચનો માટે"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola હાલમાં ઉપલબ્ધ નથી, પરંતુ અમે તેના પર કામ કરી રહ્યા છે."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola બંધ છે, પર ચાલુ કરવા માટે ક્લિક કરો"
    },
    "Hola site list": {
        "message": "ખોલનાર  સાઈટ લીસ્ટ"
    },
    "I can now access $1 from any country!": {
        "message": "હું હવે કોઇ દેશમાંથી $1 ઍક્સેસ કરી શકો છો!"
    },
    "I did not experience any buffering": {
        "message": "હું કોઇ બફરીંગને અનુભવ નહોતો"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "હું માત્ર $1 માટે મહત્તમ ઉપયોગ કરીને સેન્સર સાઇટ ઍક્સેસ!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "હું મારા દેશમાં $2 જોવા માટે $1 નો ઉપયોગ કરીને, અને ઝડપી સર્ફ છું!"
    },
    "IC": {
        "message": "કેનેરી ટાપુઓ"
    },
    "ID": {
        "message": "ઇન્ડોનેશિયા"
    },
    "IE": {
        "message": "આયર્લેંડ"
    },
    "IL": {
        "message": "ઇઝરાઇલ"
    },
    "IM": {
        "message": "ઇસ્લે ઓફ મૅન"
    },
    "IN": {
        "message": "ભારત"
    },
    "IO": {
        "message": "બ્રિટિશ ઇન્ડિયન ઓશન ટેરિટરી"
    },
    "IQ": {
        "message": "ઇરાક"
    },
    "IR": {
        "message": "ઈરાન"
    },
    "IS": {
        "message": "આઇસલેન્ડ"
    },
    "IT": {
        "message": "ઇટાલી"
    },
    "Improve translation": {
        "message": "અનુવાદ સુધારો"
    },
    "Initializing...": {
        "message": "પ્રારંભ થાય છે..."
    },
    "Install": {
        "message": "સ્થાપિત"
    },
    "Install Accelerator": {
        "message": "એક્સેલેટર સ્થાપિત"
    },
    "Install Free Hola Accelerator": {
        "message": "નિઃશુલ્ક Hola એક્સેલેટર સ્થાપિત"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "મફત માટે Hola ઉપયોગ ચાલુ રાખવા માટે મહત્તમ એન્જિન સ્થાપિત"
    },
    "Instantly watch any torrent Video": {
        "message": "તરત કોઇ ટૉરેંટ વિડીયો જુઓ"
    },
    "Invite friends - free Premium.": {
        "message": "મિત્રોને આમંત્રિત - મુક્ત પ્રીમિયમ."
    },
    "Invite friends. Get Premium.": {
        "message": "મિત્રો આમંત્રિત કરો. પ્રીમિયમ મેળવો."
    },
    "It was okay": {
        "message": "તે ઠીક હતું"
    },
    "JE": {
        "message": "જર્સી"
    },
    "JM": {
        "message": "જમૈકા"
    },
    "JO": {
        "message": "જોર્ડન"
    },
    "JP": {
        "message": "જાપાન"
    },
    "JT": {
        "message": "જોહન્સ્ટન આઇલેન્ડ"
    },
    "KE": {
        "message": "કેન્યા"
    },
    "KG": {
        "message": "કિર્ગિઝ્સ્તાન"
    },
    "KH": {
        "message": "કંબોડિયા"
    },
    "KI": {
        "message": "કિરિબાટી"
    },
    "KM": {
        "message": "કોમોરસ"
    },
    "KN": {
        "message": "સેંટ કિટ્સ એંડ નેવિસ"
    },
    "KP": {
        "message": "ઉત્તર કોરિયા"
    },
    "KR": {
        "message": "દક્ષિણ કોરિયા"
    },
    "KW": {
        "message": "કુવૈત"
    },
    "KY": {
        "message": "કેયમેન આઇલૅંડ્સ"
    },
    "KZ": {
        "message": "કઝાકિસ્તાન"
    },
    "LA": {
        "message": "લાઓસ"
    },
    "LB": {
        "message": "લેબનોન"
    },
    "LC": {
        "message": "સેંટ લુસિયા"
    },
    "LI": {
        "message": "લૈચટેંસ્ટેઇન"
    },
    "LK": {
        "message": "શ્રીલંકા"
    },
    "LR": {
        "message": "લાઇબેરિયા"
    },
    "LS": {
        "message": "લેસોથો"
    },
    "LT": {
        "message": "લિથુનિયા"
    },
    "LU": {
        "message": "લક્ઝમબર્ગ"
    },
    "LV": {
        "message": "લેતવિયા"
    },
    "LY": {
        "message": "લિબિયા"
    },
    "Language": {
        "message": "ભાષા"
    },
    "Library": {
        "message": "લાઇબ્રેરી"
    },
    "Like it": {
        "message": "ગમ્યું"
    },
    "Loading": {
        "message": "લોડ થાય છે"
    },
    "Loading site...": {
        "message": "લોડ થાય છે"
    },
    "Log in": {
        "message": "પ્રવેશ કરો"
    },
    "Log out": {
        "message": "લૉગ આઉટ કરો"
    },
    "Love Hola?": {
        "message": "Hola પ્રેમ કરો છો?"
    },
    "Love it": {
        "message": "તેને પ્રેમ"
    },
    "MA": {
        "message": "મોરોક્કો"
    },
    "MC": {
        "message": "મોનાકો"
    },
    "MD": {
        "message": "મોલડોવા"
    },
    "ME": {
        "message": "મૉન્ટેંનેગ્રો"
    },
    "MF": {
        "message": "સેંટ માર્ટિન"
    },
    "MG": {
        "message": "મેડાગાસ્કર"
    },
    "MH": {
        "message": "માર્શલ આઇલેન્ડ્સ"
    },
    "MI": {
        "message": "મિડવે આઇલેન્ડ"
    },
    "MK": {
        "message": "મેસેડોનિયા"
    },
    "ML": {
        "message": "માલી"
    },
    "MM": {
        "message": "મ્યાંમાર"
    },
    "MN": {
        "message": "મંગોલિયા"
    },
    "MO": {
        "message": "મકાઓ SAR ચીન"
    },
    "MP": {
        "message": "ઉતરીય મારિયાના આઇલેન્ડ્સ"
    },
    "MQ": {
        "message": "માર્ટીનીક"
    },
    "MR": {
        "message": "મૌરિટાનિયા"
    },
    "MS": {
        "message": "મોંટસેરાત"
    },
    "MT": {
        "message": "માલ્ટા"
    },
    "MU": {
        "message": "મોરિશિયસ"
    },
    "MV": {
        "message": "માલદિવ્સ"
    },
    "MW": {
        "message": "માલાવી"
    },
    "MX": {
        "message": "મેક્સિકો"
    },
    "MY": {
        "message": "મલેશિયા"
    },
    "MZ": {
        "message": "મોઝામ્બિક"
    },
    "Make your Internet better with $1": {
        "message": "બનાવો તમારા ઇન્ટરનેટ સારી સાથે $1"
    },
    "Menu": {
        "message": "મેનુ"
    },
    "Might not work on all sites": {
        "message": "બધા સાઇટ્સ પર કામ ન કરી શકે"
    },
    "Mode": {
        "message": "સ્થિતિ"
    },
    "More countries": {
        "message": "વધુ દેશોમાં"
    },
    "More sites...": {
        "message": "વધારે..."
    },
    "More...": {
        "message": "વધારે..."
    },
    "My Account": {
        "message": "મારું એકાઉન્ટ"
    },
    "My History": {
        "message": "મારા ઇતિહાસ"
    },
    "My Settings": {
        "message": "મારી સેટિંગ્સ"
    },
    "My favorites": {
        "message": "મારી પસંદ"
    },
    "NA": {
        "message": "નામિબિયા"
    },
    "NC": {
        "message": "ન્યુ સેલેડોનિયા"
    },
    "NE": {
        "message": "નાઇજર"
    },
    "NF": {
        "message": "નોરફૉક આઇલેન્ડ"
    },
    "NG": {
        "message": "નાઇજીરીયા"
    },
    "NI": {
        "message": "નિકારાગુઆ"
    },
    "NL": {
        "message": "નેધરલેન્ડ"
    },
    "NO": {
        "message": "નૉર્વે"
    },
    "NP": {
        "message": "નેપાળ"
    },
    "NQ": {
        "message": "Dronning મૌડ જમીન"
    },
    "NR": {
        "message": "નૌરુ"
    },
    "NT": {
        "message": "ન્યુટ્રલ ઝોન"
    },
    "NU": {
        "message": "નીયુ"
    },
    "NZ": {
        "message": "ન્યુઝીલેન્ડ"
    },
    "Need Help?": {
        "message": "મદદ જરૂર છે?"
    },
    "Never ask me again": {
        "message": "ફરીથી મને પૂછો ક્યારેય"
    },
    "Never be a peer": {
        "message": "એક પીઅર કરી ક્યારેય"
    },
    "No": {
        "message": "કોઈ"
    },
    "No idle peers found.": {
        "message": "કોઈ નિષ્ક્રિય પેઢીઓ જોવા મળે છે."
    },
    "No recent videos found": {
        "message": "મંચ તાજેતરની વિડિઓઝ મળ્યાં"
    },
    "No saved videos found": {
        "message": "કોઈ બચાવી વિડિઓઝ મળ્યાં"
    },
    "No title": {
        "message": "શીર્ષક નહીં"
    },
    "No videos found": {
        "message": "કોઈ વિડિઓઝ મળ્યાં"
    },
    "No videos found on active page": {
        "message": "સક્રિય પાનાં પર મળ્યું નથી વિડિઓઝ"
    },
    "No, Thanks": {
        "message": "ના, આભાર"
    },
    "No, fix it": {
        "message": "ના, તેને ઠીક"
    },
    "Not working?": {
        "message": "માટે કામ નથી?"
    },
    "Number of users that pressed not working": {
        "message": "કામ નથી દબાવવામાં કે વપરાશકર્તાઓની સંખ્યા"
    },
    "Number of users that use this option": {
        "message": "આ વિકલ્પ વાપરો કે વપરાશકર્તાઓની સંખ્યા"
    },
    "OM": {
        "message": "ઑમાન"
    },
    "Off": {
        "message": "બંધ"
    },
    "Oh, yes!": {
        "message": "હા, ઓહ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox નું વર્ઝન જુનું છે . અપડેટ કરવા માટે <a>અહિયાં</a>દબાવો "
    },
    "On": {
        "message": "ચાલું"
    },
    "Open Media Player": {
        "message": "ઓપન મીડિયા પ્લેયર"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "અમારા બ્રાન્ડ ન્યૂ Mplayer જલ્દી આવે છે!"
    },
    "PA": {
        "message": "પનામા"
    },
    "PC": {
        "message": "પેસિફિક ટાપુઓ ટ્રસ્ટ ટેરિટરી"
    },
    "PE": {
        "message": "પેરુ"
    },
    "PF": {
        "message": "ફ્રેંચ પોલિનેશિયા"
    },
    "PG": {
        "message": "પપુઆ ન્યુ ગિની"
    },
    "PH": {
        "message": "ફિલિપિન્સ"
    },
    "PK": {
        "message": "પાકિસ્તાન"
    },
    "PL": {
        "message": "પોલેંડ"
    },
    "PM": {
        "message": "સેંટ પીએરે એન્ડ મિકીલોન"
    },
    "PN": {
        "message": "પીટકૈર્ન"
    },
    "PR": {
        "message": "પ્યુઅર્ટો રિકો"
    },
    "PS": {
        "message": "પેલેસ્ટિનિયન ટેરિટરી"
    },
    "PT": {
        "message": "પોર્ટુગલ"
    },
    "PU": {
        "message": "યુએસ લખેલા ન હોય તેવા પેસિફિક ટાપુઓ"
    },
    "PW": {
        "message": "પલાઉ"
    },
    "PY": {
        "message": "પેરાગ્વે"
    },
    "PZ": {
        "message": "પનામા કેનાલ ઝોન"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "તમે વગેરે જાહેરાત બ્લોકર, અન્ય વીપીએન સેવાઓ, કે તમારી પ્રોક્સી સેટિંગ્સ નિયંત્રિત શકે છે કે અન્ય <a>એક્સ્ટેન્શન્સ</a> અક્ષમ કરો"
    },
    "Please enter a valid email address.": {
        "message": "માન્ય ઇમેઇલ સરનામું દાખલ કરો."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com જેવી, એક વેબ સાઇટ સરનામું દાખલ કરો"
    },
    "Please help us get better": {
        "message": "અમને વધુ સારી રીતે મળી મદદ કરો"
    },
    "Popular in $1": {
        "message": "વિખ્યાત માં $1"
    },
    "Popular in the world": {
        "message": "વિશ્વમાં વિખ્યાત"
    },
    "Popular sites": {
        "message": "લોકપ્રિય સાઇટ્સ"
    },
    "Premium": {
        "message": "પ્રીમિયમ"
    },
    "QA": {
        "message": "કતાર"
    },
    "QO": {
        "message": "સાથી ઓશનિયા"
    },
    "RE": {
        "message": "રીયુનિયન"
    },
    "RO": {
        "message": "રોમાનિયા"
    },
    "RS": {
        "message": "સર્બિયા"
    },
    "RU": {
        "message": "રશિયા"
    },
    "RW": {
        "message": "રવાંડા"
    },
    "Rate us": {
        "message": "અમને દર"
    },
    "Recent Videos": {
        "message": "તાજેતરના વિડિઓઝ"
    },
    "Reload": {
        "message": "રીલોડ કરો"
    },
    "Reload Hola": {
        "message": "હોલા રીલોડ કરો"
    },
    "Remember server": {
        "message": "સર્વર યાદ રાખો"
    },
    "Report a problem": {
        "message": "સમસ્યાની જાણ કરો"
    },
    "Retry safe mode": {
        "message": "સુરક્ષિત મોડ ફરી પ્રયાસ કરો"
    },
    "SA": {
        "message": "સાઉદી અરેબિયા"
    },
    "SB": {
        "message": "સોલોમન આઇલેન્ડ"
    },
    "SC": {
        "message": "શેશેલ્સ"
    },
    "SD": {
        "message": "સુદાન"
    },
    "SE": {
        "message": "સ્વીડન"
    },
    "SG": {
        "message": "સિંગાપુર"
    },
    "SH": {
        "message": "સેંટ હેલેના"
    },
    "SI": {
        "message": "સ્લોવેનિયા"
    },
    "SJ": {
        "message": "સ્વાલબર્ડ એંડ જેન મેયન"
    },
    "SK": {
        "message": "સ્લોવેકિયા"
    },
    "SL": {
        "message": "સીએરા લેઓન"
    },
    "SM": {
        "message": "સૅન મેરિનો"
    },
    "SN": {
        "message": "સેનેગલ"
    },
    "SO": {
        "message": "સોમાલિયા"
    },
    "SR": {
        "message": "સુરીનામ"
    },
    "ST": {
        "message": "સાઓ ટૉમ અને પ્રિંસિપે"
    },
    "SU": {
        "message": "યુનિયન સોવિયેત સમાજવાદી ગણતંત્ર"
    },
    "SV": {
        "message": "એલ સેલ્વાડોર"
    },
    "SY": {
        "message": "સીરિયા"
    },
    "SZ": {
        "message": "સ્વાઝિલેન્ડ"
    },
    "Safe": {
        "message": "સેફ"
    },
    "Safe mode": {
        "message": "સલામત સ્થિતિ"
    },
    "Save": {
        "message": "સેવ કરો"
    },
    "Saved Videos": {
        "message": "સાચવી વિડિઓઝ"
    },
    "Saved for later": {
        "message": "પછીના માટે સાચવી"
    },
    "Search video title": {
        "message": "શોધ વિડિઓ શીર્ષક"
    },
    "Select a Country": {
        "message": "એક દેશ પસંદ કરો"
    },
    "Select site to unblock": {
        "message": "અનાવરોધિત કરો સાઇટ પસંદ"
    },
    "Server saved!": {
        "message": "સર્વર સાચવવામાં!"
    },
    "Set safe mode for $1 $2": {
        "message": "સેટ સુરક્ષિત મોડ $1 માટે $2"
    },
    "Settings": {
        "message": "સેટીંગ્સ"
    },
    "Share": {
        "message": "શેર"
    },
    "Share $1 on $2": {
        "message": "$2 પર $1 શેર કરો"
    },
    "Share $1 via $2": {
        "message": "$2 દ્વારા $1 શેર કરો"
    },
    "Share with friends!": {
        "message": "મિત્રો સાથે શેર કરો!"
    },
    "Sign up": {
        "message": "સાઇન અપ કરો"
    },
    "Solve buffering": {
        "message": "બફરીંગને ઉકેલો"
    },
    "Solve buffering problems with": {
        "message": "સાથે બફરીંગને પ્રશ્નો ઉકેલો"
    },
    "Solves it": {
        "message": "તે નિવારે"
    },
    "Staff Picks": {
        "message": "સ્ટાફ ચૂંટે"
    },
    "Start Hola": {
        "message": "આરંભ કરો"
    },
    "Starting...": {
        "message": "આરંભ થાય છે"
    },
    "Stop Hola": {
        "message": "બંધ Hola"
    },
    "Stopping peer routing...": {
        "message": "પીઅર રાઉટીંગ અટકાવવાનું ..."
    },
    "Stream": {
        "message": "સ્ટ્રીમ"
    },
    "Stream Instantly": {
        "message": "ઝટપટ સ્ટ્રીમ"
    },
    "Submit": {
        "message": "સબમિટ કરો"
    },
    "Support Hola": {
        "message": "આધાર Hola"
    },
    "TA": {
        "message": "ટ્રીસ્ટન દા કુન્હા"
    },
    "TC": {
        "message": "ટર્ક્સ એન્ડ કૈકોસ આઇલેન્ડ્સ"
    },
    "TD": {
        "message": "ચાડ"
    },
    "TF": {
        "message": "ફ્રેંચ સદર્ન ટેરિટરીઝ"
    },
    "TG": {
        "message": "ટોગો"
    },
    "TH": {
        "message": "થાઇલેંડ"
    },
    "TJ": {
        "message": "તાજીકિસ્તાન"
    },
    "TK": {
        "message": "ટોકેલાઉ"
    },
    "TL": {
        "message": "પૂર્વ તિમોર"
    },
    "TM": {
        "message": "તુર્ક્મનિસ્તાન"
    },
    "TN": {
        "message": "ટ્યુનિશિયા"
    },
    "TO": {
        "message": "ટોંગા"
    },
    "TR": {
        "message": "તુર્કસ્તાન"
    },
    "TT": {
        "message": "ત્રિનિડાડ અને ટોબેગો"
    },
    "TV": {
        "message": "તુવાલુ"
    },
    "TW": {
        "message": "તાઇવાન"
    },
    "TZ": {
        "message": "તાંઝાનિયા"
    },
    "Talk to us on $1": {
        "message": "$1 પર અમને સાથે વાત"
    },
    "Tell friends about $1": {
        "message": "મિત્રો લગભગ $1 કહો"
    },
    "Testing connection...": {
        "message": "પરીક્ષણ જોડાણ ..."
    },
    "Thank you!": {
        "message": "આભાર!"
    },
    "There seems to be an error": {
        "message": "લાગે છે કે કોઈ લોચો છે"
    },
    "Top popular sites": {
        "message": "ટોચના લોકપ્રિય સાઇટ્સ"
    },
    "Translate to your language": {
        "message": "તમારી ભાષામાં અનુવાદ કરો"
    },
    "Try again": {
        "message": "ફરીથી પ્રયત્ન કરો"
    },
    "Try another server": {
        "message": "અન્ય સર્વર પ્રયાસ કરો"
    },
    "Try it": {
        "message": "તેનો પ્રયાસ કરી જુઓ"
    },
    "Try safe mode": {
        "message": "સુરક્ષિત મોડ પ્રયત્ન કરો"
    },
    "Try to <span>reload</span>": {
        "message": "<span>રીલોડ</span>થવાનો પ્રયત્ન થાય છે"
    },
    "Trying another peer...": {
        "message": "અન્ય પીઅર પ્રયત્ન કરી રહ્યું છે ..."
    },
    "Turn off Accelerator": {
        "message": "એક્સેલેટર બંધ કરો"
    },
    "Turn off Hola": {
        "message": "Hola બંધ કરો"
    },
    "Turn on Accelerator": {
        "message": "એક્સેલેટર ચાલુ કરો"
    },
    "Turn on Hola": {
        "message": "Hola ચાલુ કરો"
    },
    "Turn on to get started": {
        "message": "આરંભ કરવાં માટે ચાલું કરો"
    },
    "UA": {
        "message": "ટર્કી"
    },
    "UG": {
        "message": "યુગાંડા"
    },
    "UM": {
        "message": "સંયુક્ત રાજ્ય માઇનર આઉટલાઇંગ આયલેન્ડ"
    },
    "US": {
        "message": "સંયુકત રાજ્ય/ અમેરિકા"
    },
    "UY": {
        "message": "ઉરુગ્વે"
    },
    "UZ": {
        "message": "ઉઝ્બેકિસ્તાન"
    },
    "Unblocker": {
        "message": "ખોલનાર"
    },
    "Unblocker is disabled": {
        "message": "સાઈટ ખોલનાર બંધ છે"
    },
    "Update": {
        "message": "અપ્ડેટ કરો"
    },
    "Upgrade": {
        "message": "અપ્ડેટ કરો"
    },
    "Using": {
        "message": "મદદથી"
    },
    "Using Hola": {
        "message": "Hola મદદથી"
    },
    "VA": {
        "message": "વેટિકન"
    },
    "VC": {
        "message": "સેંટ વિંસેંટ એંડ ધ ગ્રેનેડિન્સ"
    },
    "VD": {
        "message": "ઉત્તર વિયેતનામ"
    },
    "VE": {
        "message": "વેનેઝુએલા"
    },
    "VG": {
        "message": "બ્રિટિશ વર્જિન આઇલેન્ડ"
    },
    "VI": {
        "message": "યુ.એસ વર્જિન આઇલેન્ડ"
    },
    "VN": {
        "message": "વિયેતનામ"
    },
    "VPN": {
        "message": "વીપીએન"
    },
    "VPN Premium": {
        "message": "વીપીએન પ્રીમિયમ"
    },
    "VU": {
        "message": "વાનુઆતુ"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "તમારા ક્રોમનું વર્ઝન બહુ જ જુનુ છે. તમારું ક્રોમ <a> અહિંયા </a> અપ્ડેટ કરો"
    },
    "Video": {
        "message": "વિડિઓ "
    },
    "Video stuck?": {
        "message": "વિડિઓ અટકી?"
    },
    "Videos available for instant streaming": {
        "message": "ઇન્સ્ટન્ટ સ્ટ્રીમિંગ માટે ઉપલબ્ધ વિડિઓઝ"
    },
    "WF": {
        "message": "વૉલિસ એંડ ફ્યુચુના"
    },
    "WK": {
        "message": "ટાપુ વેક"
    },
    "WS": {
        "message": "સમોઆ"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "શું તમારે હોલા નો લાભ અન્ય યંત્રો પર લેવો છે (જેમ કે Xbox,PS,Apple TV, IPhone). અહિયાં Click કરો"
    },
    "Want to know more?": {
        "message": "વધુ જાણવા માંગો છો?"
    },
    "Watch Now": {
        "message": "હવે જુઓ"
    },
    "We found $1 videos": {
        "message": "અમે મળી $1 વિડિઓઝ"
    },
    "We will be in touch with you soon": {
        "message": "અમે જલ્દી તમારી સાથે સંપર્કમાં હશે"
    },
    "Working!": {
        "message": "કામ!"
    },
    "Working?": {
        "message": "કામ કરો છો?"
    },
    "Works on all sites but slower": {
        "message": "બધી સાઇટ્સ પરંતુ ધીમી પર કામ કરે છે"
    },
    "YD": {
        "message": "યેમેન પીપલ્સ ડેમોક્રેટિક રિપબ્લિક"
    },
    "YE": {
        "message": "યેમેન"
    },
    "YT": {
        "message": "મેયોટ"
    },
    "Yes": {
        "message": "હા"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "તમે Hola વાપરવા માટે ઓપેરા તાજેતરની આવૃત્તિમાં સુધારો કરવાની જરૂર છે. દબાવો <a>અહીં</a> સુધારો કરવા માટે."
    },
    "Youtube": {
        "message": "યુ ટ્યુબ"
    },
    "ZA": {
        "message": "દક્ષિણ આફ્રિકા"
    },
    "ZM": {
        "message": "ઝામ્બિયા"
    },
    "ZW": {
        "message": "ઝિમ્બાબ્વે"
    },
    "ZZ": {
        "message": "અજ્ઞાત અથવા અમાન્ય પ્રદેશ"
    },
    "app_desc": {
        "message": "તમારો દેશ, કંપની કે Hola સાથે શાળામાં અવરોધિત ઍક્સેસ વેબસાઇટ્સ! Hola મુક્ત અને વાપરવા માટે સરળ છે!"
    },
    "app_name": {
        "message": "Hola બેહતર ઈંટરનેટ"
    },
    "back to": {
        "message": "થી પાછા"
    },
    "changing...": {
        "message": "બદલે છે..."
    },
    "cool sites": {
        "message": "ઠંડી સાઇટ્સ"
    },
    "current site": {
        "message": "વર્તમાન સાઇટ"
    },
    "day": {
        "message": "દિવસ"
    },
    "days": {
        "message": "દિવસ"
    },
    "even more...": {
        "message": "હજુ વધારે..."
    },
    "mode": {
        "message": "સ્થિતિ"
    },
    "more options...": {
        "message": "વધુ વિકલ્પો ..."
    },
    "not working?": {
        "message": "કામ નથી?"
    },
    "not working? try another server": {
        "message": "કામ નથી? અન્ય સર્વર પ્રયાસ"
    },
    "on this page": {
        "message": "આ પાનાં પર"
    },
    "sites that are censored": {
        "message": "સેન્સર છે કે સાઇટ્સ"
    },
    "start": {
        "message": "આરંભ કરો"
    },
    "working? remember": {
        "message": "કામ કરો છો? યાદ રાખવું"
    }
};
return E; });