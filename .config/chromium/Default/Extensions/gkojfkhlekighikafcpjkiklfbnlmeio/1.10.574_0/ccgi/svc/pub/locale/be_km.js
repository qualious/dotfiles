'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " តាមរយៈ "
    },
    "$1 Buffering?": {
        "message": "$1 សតិបណ្តោះអាសន្ន?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola ដើម្បីចូលដំណើរការ $2\n\nសូមចុចទីនេះដើម្បីធ្វើដូចនេះ: $3\n\nវាដំឡើង Hola ដែលបានអនុញ្ញាតឱ្យខ្ញុំឱ្យអាចប្រើប្រាស់អ៊ីនធឺណិតលឿននិងទទួលបាន $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN ពិសេស"
    },
    "$1 from $2": {
        "message": "$1 ពី $2"
    },
    "$1 not found": {
        "message": "រកមិនឃើញ $1"
    },
    "$1 via Hola": {
        "message": "$1 តាមរយៈ Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(លក្ខណៈពិសេសមួយចំនួន Hola គឺមិនអាចប្រើបាននៅលើកំណែរបស់អ្នក)"
    },
    "AC": {
        "message": "ការកោះយាងឡើងទៅ"
    },
    "AD": {
        "message": "អានដូរ៉ា"
    },
    "AE": {
        "message": "អេមីរ៉ែទអារ៉ាប់រួម"
    },
    "AF": {
        "message": "អាហ្វហ្គានីស្ថាន"
    },
    "AG": {
        "message": "Antigua និង Barbuda"
    },
    "AI": {
        "message": "អង់ហ្ស៊ីឡា"
    },
    "AL": {
        "message": "អាល់បានី"
    },
    "AM": {
        "message": "អារមេនី"
    },
    "AN": {
        "message": "អង់ទីយ៍ហុល្លង់"
    },
    "AO": {
        "message": "អង់ហ្គោឡា"
    },
    "AQ": {
        "message": "អង់តាក់ទិក"
    },
    "AR": {
        "message": "អាហ្សង់ទីន"
    },
    "AS": {
        "message": "សាម័រអាមេរិក"
    },
    "AT": {
        "message": "អូទ្រីស"
    },
    "AU": {
        "message": "អូស្ត្រាលី"
    },
    "AX": {
        "message": "កោះÅland"
    },
    "AZ": {
        "message": "អាហ៊្សែរបែហ្សង់"
    },
    "About": {
        "message": "អំពី"
    },
    "About Hola": {
        "message": "អំពី Hola"
    },
    "Accelerator": {
        "message": "បង្កើនល្បឿន"
    },
    "Accelerator is": {
        "message": "បង្កើនល្បឿនគឺ"
    },
    "Access $1 - cool site!": {
        "message": "លទ្ធភាពទទួលបាន $1 - បណ្តាញត្រជាក់!"
    },
    "Access $1?": {
        "message": "ចូលប្រើ $1?"
    },
    "Access any site from any country, free": {
        "message": "ចូលដំណើរការតំបន់បណ្ដាញពីប្រទេសណាមួយទេណាមួយដោយឥតគិតថ្លៃ"
    },
    "Access cool sites": {
        "message": "ការចូលដំណើរការតំបន់ត្រជាក់"
    },
    "Access more sites": {
        "message": "ការចូលដំណើរការតំបន់បណ្ដាញកាន់តែច្រើន"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "ការ​ចូល​ដំណើរ​ការ​ពិនិត្យ​ចាប់​ពិរុទ្ធ​ក្នុង​តំបន់​ប​ណ្តា​ញ​របស់​អ្នក​និង​បង្កើន​ល្បឿន​របស់​ប្រទេស​អ៊ី​ន​ធើ​ណែ​របស់​អ្នក​ជាមួយ Hola - ឥត​គិត​ថ្លៃ​!"
    },
    "Accessing $1 with Hola": {
        "message": "ការចូលប្រើ $1 ដោយមាន Hola"
    },
    "Account": {
        "message": "គណនី"
    },
    "Account type": {
        "message": "ប្រភេទគណនី"
    },
    "Activating...": {
        "message": "ការធ្វើឱ្យ..."
    },
    "All ($1)": {
        "message": "ទាំងអស់ ($1)"
    },
    "Apply settings...": {
        "message": "អនុវត្តការកំណត់ ..."
    },
    "Author site:": {
        "message": "តំបន់បណ្តាញអ្នកនិពន្ធ:"
    },
    "Author:": {
        "message": "អ្នកនិពន្ធ:"
    },
    "Awesome!": {
        "message": "ល្អមែនទែន!"
    },
    "BA": {
        "message": "បូស្ន៉ី"
    },
    "BB": {
        "message": "បារបាដូស"
    },
    "BD": {
        "message": "បង់ក្លាដេស្ហ"
    },
    "BE": {
        "message": "បែលហ្ស៉ិក"
    },
    "BF": {
        "message": "ប៊ូរគីណាហ្វាសូ"
    },
    "BG": {
        "message": "ប៊ុលហ្គារី"
    },
    "BH": {
        "message": "បារ៉ែន"
    },
    "BI": {
        "message": "ប៊ូរុនឌី"
    },
    "BJ": {
        "message": "បេណាំង"
    },
    "BL": {
        "message": "លោក Saint បាតេឡេម៉ី"
    },
    "BM": {
        "message": "ប្រទេស Bermuda"
    },
    "BN": {
        "message": "ប៊្រុយណេ"
    },
    "BO": {
        "message": "បូលីវី"
    },
    "BQ": {
        "message": "ដែនដីតំបន់អង់តាក់ទិកអង់គ្លេស"
    },
    "BR": {
        "message": "ប្រេស៊ីល"
    },
    "BS": {
        "message": "បាហាម៉ា"
    },
    "BT": {
        "message": "ប៊ូតាន"
    },
    "BV": {
        "message": "កោះ Bouvet"
    },
    "BW": {
        "message": "បុតស្វាណា"
    },
    "BY": {
        "message": "បេឡារុស្ស"
    },
    "BZ": {
        "message": "បេលីហ្ស"
    },
    "Back to $1": {
        "message": "ត្រឡប់ទៅ $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "ជាលើកដំបូងដើម្បីទទួលបាន Hola សំរាប់ iPhone / iPad ថ្មី - ចុះឈ្មោះឥឡូវនេះ:"
    },
    "Browsing": {
        "message": "រកមើល"
    },
    "Buffering problems?": {
        "message": "បញ្ហាសតិបណ្តោះអាសន្ន?"
    },
    "Buffering?": {
        "message": "សតិបណ្តោះអាសន្ន?"
    },
    "CA": {
        "message": "កាណាដា"
    },
    "CC": {
        "message": "កោះកូកូ [វីណាស់]"
    },
    "CD": {
        "message": "កុងហ្គោ - គីនសាសា"
    },
    "CF": {
        "message": "សាធារណរដ្ឋអាហ្វ្រិកកណ្ដាល"
    },
    "CG": {
        "message": "កុងហ្គោ"
    },
    "CH": {
        "message": "ស្វីស"
    },
    "CI": {
        "message": "កូដឌីវ័រ"
    },
    "CK": {
        "message": "កោះឃុក"
    },
    "CL": {
        "message": "ឈីលី"
    },
    "CM": {
        "message": "កាមេរូន"
    },
    "CN": {
        "message": "ចិន"
    },
    "CO": {
        "message": "កូឡុំប៊ី"
    },
    "CP": {
        "message": "ការកោះ Clipperton"
    },
    "CR": {
        "message": "កូស្តារីកា"
    },
    "CS": {
        "message": "ស៊ែប៊ីនិងម៉ុងតេណេហ្គ្រោ"
    },
    "CT": {
        "message": "Canton និងកោះ Enderbury"
    },
    "CU": {
        "message": "គុយបា"
    },
    "CV": {
        "message": "កាបវែរ"
    },
    "CX": {
        "message": "កោះ Christmas"
    },
    "CY": {
        "message": "ស៉ីពរ៍"
    },
    "CZ": {
        "message": "សាធារណរដ្ឋឆេក"
    },
    "Changing country...": {
        "message": "ការផ្លាស់ប្តូរប្រទេស ..."
    },
    "Check out Hola for $1!": {
        "message": "សូមពិនិត្យមើលការចេញ Hola សម្រាប់ $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "ពិនិត្យចេញ Hola សម្រាប់ឧបករណ៍ចល័ត"
    },
    "Check your Internet connection": {
        "message": "សុទ្ធតែបានបញ្ជាក់់អ្នកមានអ៊ីនធឺណែ"
    },
    "Choose<br>Country": {
        "message": "ជ្រើស <br> ប្រទេស"
    },
    "Configuring...": {
        "message": "ការកំណត់រចនាសម្ព័ន្ធ..."
    },
    "Connecting...": {
        "message": "ការតភ្ជាប់..."
    },
    "Cool site!": {
        "message": "តំបន់បណ្តាញត្រជាក់!"
    },
    "Creative licenses": {
        "message": "អាជ្ញាប័ណ្ណប្រកបដោយការច្នៃប្រឌិត"
    },
    "DD": {
        "message": "ភាគខាងកើតប្រទេសអាល្លឺម៉ង់"
    },
    "DE": {
        "message": "អាល្លឺម៉ង់"
    },
    "DG": {
        "message": "តំបន់ Diego Garcia"
    },
    "DJ": {
        "message": "ហ្ស៉ីបូទី"
    },
    "DK": {
        "message": "ដាណឺម៉ាក"
    },
    "DM": {
        "message": "ដូមីនីកា"
    },
    "DO": {
        "message": "សាធារណរដ្ឋដូមីនីកែន"
    },
    "DZ": {
        "message": "អាល់ហ្សេរី"
    },
    "Delete": {
        "message": "លុប"
    },
    "Deleted from my list": {
        "message": "បានលុបចេញពីបញ្ជីរបស់ខ្ញុំ"
    },
    "Did it work?": {
        "message": "តើវាធ្វើការ?"
    },
    "Did you experience any buffering?": {
        "message": "តើអ្នកធ្លាប់មានសតិបណ្ដោះអាសន្នណាមួយ?"
    },
    "Disliked it": {
        "message": "ចូលចិត្តវា"
    },
    "Don't show again for $1 for one week": {
        "message": "កុំបង្ហាញជាថ្មីម្តងទៀតសម្រាប់ $1 សម្រាប់មួយសប្តាហ៍"
    },
    "Don't show again for any site for one week": {
        "message": "កុំបង្ហាញជាថ្មីម្តងទៀតសម្រាប់តំបន់បណ្ដាញសម្រាប់មួយសប្តាហ៍ណាមួយ"
    },
    "Downloading": {
        "message": "ការទាញយក"
    },
    "EA": {
        "message": "Ceuta និង Melilla"
    },
    "EC": {
        "message": "អេក្វាឌ័រ"
    },
    "EE": {
        "message": "អេស្តូនី"
    },
    "EG": {
        "message": "អេហ្ស៉ីប"
    },
    "EH": {
        "message": "សាហារ៉ាខាងលិច"
    },
    "ER": {
        "message": "អេរីទ្រា"
    },
    "ES": {
        "message": "អេស្ប៉ាញ"
    },
    "ET": {
        "message": "អេត្យូពី"
    },
    "EU": {
        "message": "សហភាពអឺរ៉ុប"
    },
    "Enable": {
        "message": "អនុញ្ញាត"
    },
    "Enable Hola Accelerator": {
        "message": "បើកការបង្កើនល្បឿន Hola"
    },
    "Enjoy!": {
        "message": "សូមរីករាយជាមួយ!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "រីករាយជាមួយ Hola សម្រាប់ Chrome?"
    },
    "Enter site to access": {
        "message": "បញ្ចូលការចូលដំណើរការទៅកាន់តំបន់បណ្តាញ"
    },
    "Enter your email": {
        "message": "បញ្ចូលអ៊ីម៉ែលរបស់អ្នក"
    },
    "FI": {
        "message": "ហ្វាំងឡង់"
    },
    "FJ": {
        "message": "ហ្វ៉ីហ្ស៉ី"
    },
    "FK": {
        "message": "កោះ Falkland"
    },
    "FM": {
        "message": "មិក្រូនេស៊ី"
    },
    "FO": {
        "message": "កោះហ្វារ៉ូ"
    },
    "FQ": {
        "message": "ប្រទេសបារាំងភាគខាងត្បូងនិងមហាសមុទ្រអង់តាក់ទិកទឹកដី"
    },
    "FR": {
        "message": "បារាំង"
    },
    "FX": {
        "message": "ទីរកុងបារាំង"
    },
    "Fast": {
        "message": "ដែលមានល្បឿនលឿន"
    },
    "Finding new peers...": {
        "message": "ការស្វែងរកមិត្តភក្តិថ្មី..."
    },
    "Finding peers...": {
        "message": "ការស្វែងរកមិត្តភក្តិ..."
    },
    "Free": {
        "message": "ដោយឥតគិតថ្លៃ"
    },
    "From": {
        "message": "មកពី"
    },
    "Full list": {
        "message": "បញ្ជីពេញ"
    },
    "GA": {
        "message": "ហ្គាបុង"
    },
    "GB": {
        "message": "ចក្រភពអង់គ្លេស"
    },
    "GD": {
        "message": "ហ្គ្រេណាដា"
    },
    "GE": {
        "message": "ហ្សកហ្ស៉ី"
    },
    "GF": {
        "message": "ប្រទេសបារាំងនូ"
    },
    "GH": {
        "message": "ហ្កាណា"
    },
    "GL": {
        "message": "ហ្គ្រីនលែន"
    },
    "GM": {
        "message": "ហ្គាំប៊ី"
    },
    "GN": {
        "message": "ហ្គីណេ"
    },
    "GP": {
        "message": "ហ្គា"
    },
    "GQ": {
        "message": "ហ្គីណេអេក្វាទ័រ"
    },
    "GR": {
        "message": "ក្រិច"
    },
    "GS": {
        "message": "ហ្សកហ្ស៊ីខាងត្បូងនិងខាងត្បូងកោះ Sandwich"
    },
    "GT": {
        "message": "ហ្គាតេម៉ាឡា"
    },
    "GU": {
        "message": "កោះហ្គួម"
    },
    "GW": {
        "message": "ហ្គីណេប៊ីសូ"
    },
    "GY": {
        "message": "ហ្គីយ៉ាណា"
    },
    "Get 24/7 Unblocking": {
        "message": "ទទួលបាន 24/7 អនុញ្ញាតិកម្មវិធី"
    },
    "Get Free Premium": {
        "message": "ទទួលបានដោយសេរីពិសេស"
    },
    "Get Hola Accelerator": {
        "message": "ទទួលបាន Hola ការបង្កើនល្បឿន"
    },
    "Get Hola Player": {
        "message": "ទទួលបានអ្នកលេង Hola"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "ទទួលបាន Hola បូកសម្រាប់ការអង្គការសហប្រជាជាតិផ្អាកសេវា Ad-ឥតគិតថ្លៃ។"
    },
    "Get Hola Premium": {
        "message": "ទទួលបាន Hola ពិសេស"
    },
    "Get Hola for Android": {
        "message": "ទទួលបាន Hola សម្រាប់ប្រព័ន្ធប្រតិបត្តិការ Android"
    },
    "Get Premium support": {
        "message": "ទទួលបានការគាំទ្រពិសេស"
    },
    "Get Unlimited Unblocking": {
        "message": "ទទួលបានគ្មានដែនកំណត់អនុញ្ញាតិកម្មវិធី"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "ទទួលបានការចូលដំណើរការទៅកាន់តំបន់បណ្ដាញពិនិត្យចាប់ពិរុទ្ធបានព្យាយាមវាឥឡូវនេះ: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "ទទួលបានជំនួយពីវិស្វករនៅលើ Skype:"
    },
    "Get the Fastest Servers": {
        "message": "ទទួលបានម៉ាស៊ីនបម្រើលឿនបំផុត"
    },
    "Go": {
        "message": "ចូលទៅ"
    },
    "Go Hola Premium": {
        "message": "ទៅ Hola ពិសេស"
    },
    "HK": {
        "message": "ហុងកុង"
    },
    "HM": {
        "message": "កោះឮនិងកោះក្រុមហ៊ុន McDonald"
    },
    "HN": {
        "message": "ហុងឌួរ៉ាស់"
    },
    "HR": {
        "message": "ក្រូអាស៊ី"
    },
    "HT": {
        "message": "ហៃទី"
    },
    "HU": {
        "message": "ហុងគ្រី"
    },
    "Hate it": {
        "message": "ស្អប់"
    },
    "Help": {
        "message": "ជំនួយ"
    },
    "Hey,\n\nI'm using": {
        "message": "តើខ្ញុំកំពុងប្រើ"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "hi,\n\nខ្ញុំបានចាប់ផ្តើមប្រើប្រាស់ $1 ($2) ។ វាអនុញ្ញាតឱ្យខ្ញុំអាចប្រើប្រាស់អ៊ីនធឺណិតលឿននិងទទួលបាន $3 នៅក្នុងប្រទេសរបស់ខ្ញុំ។"
    },
    "Hola Accelerator": {
        "message": "Hola ការបង្កើនល្បឿន"
    },
    "Hola Media Player": {
        "message": "hola កម្មវិធីចាក់មេឌៀ"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola មិនអាចធ្វើការដោយសារតែផ្នែកបន្ថែមផ្សេងទៀតត្រូវបានត្រួតពិនិត្យការកំណត់ប្រូកស៊ីរបស់អ្នក។"
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola មិនធ្វើការបានយ៉ាងល្អក្នុង Windows 8 របៀប។ សូមប្ដូរទៅរបៀបផ្ទៃតុ។ ចុច <a> នៅទីនេះ </a> សម្រាប់សេចក្តីណែនាំ"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola គឺមិនអាចប្រើបាននៅពេលឥឡូវនេះទេប៉ុន្តែយើងកំពុងធ្វើការលើវា។"
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola បិទចុច ដើម្បីបើក"
    },
    "Hola site list": {
        "message": "តំបន់បណ្តាញបញ្ជី Hola"
    },
    "I can now access $1 from any country!": {
        "message": "ឥឡូវនេះខ្ញុំអាចទទួលបាន $1 ពីប្រទេសណាមួយទេ!"
    },
    "I did not experience any buffering": {
        "message": "ខ្ញុំមិនធ្លាប់មានសតិបណ្ដោះអាសន្នណាមួយ"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "ខ្ញុំគ្រាន់តែបានចូលដំណើរការបណ្តាញពិនិត្យចាប់ពិរុទ្ធដោយប្រើ Hola សម្រាប់ $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "ខ្ញុំកំពុងប្រើការ $1 ដើម្បីមើល  $2 នៅក្នុងប្រទេសរបស់ខ្ញុំនិងការប្រើប្រាស់អ៉ីនលឿន!"
    },
    "IC": {
        "message": "កោះ Canary"
    },
    "ID": {
        "message": "ឥណ្ឌូនេស៊ី"
    },
    "IE": {
        "message": "អៀរឡង់"
    },
    "IL": {
        "message": "អ៊ីស្រាអែល"
    },
    "IN": {
        "message": "ឥណ្ឌា"
    },
    "IO": {
        "message": "សមុទ្រឥណ្ឌាចក្រភពអង់គ្លេស"
    },
    "IQ": {
        "message": "អ៊ីរ៉ាក់"
    },
    "IR": {
        "message": "អ៊ីរ៉ង់"
    },
    "IS": {
        "message": "អ៉ីស្លង់"
    },
    "IT": {
        "message": "អ៊ីតាលី"
    },
    "Improve translation": {
        "message": "កែលម្អការបកប្រែ"
    },
    "Initializing...": {
        "message": "កំពុងចាប់ផ្ដើម..."
    },
    "Install": {
        "message": "ដំឡើង"
    },
    "Install Accelerator": {
        "message": "ដំឡើងបង្កើនល្បឿន"
    },
    "Install Free Hola Accelerator": {
        "message": "ដំឡើង Hola ការបង្កើនល្បឿនដោយឥតគិតថ្លៃ"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "ដំឡើង Hola ម៉ាស៊ីនបន្តប្រើ Hola ដោយឥតគិតថ្លៃ"
    },
    "Instantly watch any torrent Video": {
        "message": "ភ្លាមមើលវីដេអូណាមួយ torrent"
    },
    "Invite friends - free Premium.": {
        "message": "សូមអញ្ជើញមិត្តភក្តិ - Premium មានឥតគិតថ្លៃ។"
    },
    "Invite friends. Get Premium.": {
        "message": "សូមអញ្ជើញមិត្តភក្តិ។ ទទួលបានពិសេស។"
    },
    "It was okay": {
        "message": "វាគឺជាការមិនអីទេ"
    },
    "JE": {
        "message": "ជឺស៊ី"
    },
    "JM": {
        "message": "ហ្សាម៉ាអ៉ិគ"
    },
    "JO": {
        "message": "ហ៊្សកដានី"
    },
    "JP": {
        "message": "ជប៉ុន"
    },
    "JT": {
        "message": "កោះនៅតំបន់ Johnston"
    },
    "KE": {
        "message": "កេនយ៉ា"
    },
    "KG": {
        "message": "គៀរហ្គីស្តង់"
    },
    "KH": {
        "message": "កម្ពុជា"
    },
    "KI": {
        "message": "គិរិបាទី"
    },
    "KM": {
        "message": "កុំម៉ូរ៉ូស"
    },
    "KN": {
        "message": "លោក Saint ឃីតនិងនេវីស"
    },
    "KP": {
        "message": "សាធារណរដ្ឋប្រជាធិបតេយ្យប្រជាមានិតកូរ៉េ"
    },
    "KR": {
        "message": "សាធារណរដ្ឋកូរ៉េ"
    },
    "KW": {
        "message": "គុយវ៉ែត"
    },
    "KY": {
        "message": "កោះ"
    },
    "KZ": {
        "message": "កាហ្សាក់ស្តាង់់"
    },
    "LA": {
        "message": "ឡាវ"
    },
    "LB": {
        "message": "លីបង់"
    },
    "LC": {
        "message": "លោក Saint Lucia"
    },
    "LI": {
        "message": "លិចទេនស្តែន"
    },
    "LK": {
        "message": "ស្រីលង្កា"
    },
    "LR": {
        "message": "លីបេរីយ៉ា"
    },
    "LS": {
        "message": "លើសូតូ"
    },
    "LT": {
        "message": "លីទុយអានី"
    },
    "LU": {
        "message": "លុចហ្សំបួរ"
    },
    "LV": {
        "message": "ឡាតវីយ៉ា"
    },
    "LY": {
        "message": "លីប៊ី"
    },
    "Language": {
        "message": "ភាសា"
    },
    "Library": {
        "message": "បណ្ណាល័យ"
    },
    "Like it": {
        "message": "ចូលចិត្តវា"
    },
    "Loading": {
        "message": "កំពុងផ្ទុក"
    },
    "Loading site...": {
        "message": "កំពុងផ្ទុក"
    },
    "Log in": {
        "message": "ចូល"
    },
    "Log out": {
        "message": "ចេញ"
    },
    "Love Hola?": {
        "message": "ស្រឡាញ់ Hola?"
    },
    "Love it": {
        "message": "ស្រឡាញ់វា"
    },
    "MA": {
        "message": "ម៉ារ៉ុក"
    },
    "MC": {
        "message": "ម៉ូណាកូ"
    },
    "MD": {
        "message": "សាធារណរដ្ឋម៉ុលដាវី"
    },
    "ME": {
        "message": "ម៉ុងតេណេហ្គ្រោ"
    },
    "MF": {
        "message": "លោក Saint លោកម៉ាទីន"
    },
    "MG": {
        "message": "ម៉ាដាហ្កាស្ការ"
    },
    "MH": {
        "message": "កោះម៉ាស្យល"
    },
    "MI": {
        "message": "កោះពាក់កណ្តាល"
    },
    "MK": {
        "message": "ម៉ាសេដន"
    },
    "ML": {
        "message": "ម៉ាលី"
    },
    "MM": {
        "message": "មីយ៉ាន់ម៉ា"
    },
    "MN": {
        "message": "ម៉ុងហ្គោលី"
    },
    "MO": {
        "message": "ទីក្រុងម៉ាកាវមន SAR ប្រទេសចិន"
    },
    "MP": {
        "message": "កោះម៉ារៀណាភាគខាងជើង"
    },
    "MQ": {
        "message": "ម៉ាទី"
    },
    "MR": {
        "message": "ម៉ូរីតានី"
    },
    "MT": {
        "message": "ម៉ាល់តា"
    },
    "MU": {
        "message": "ម៉ូរីទុស"
    },
    "MV": {
        "message": "ម៉ាល់ឌីវ"
    },
    "MW": {
        "message": "ម៉ាឡាវី"
    },
    "MX": {
        "message": "ម៉ិចសិក"
    },
    "MY": {
        "message": "ម៉ាលេស៉ី"
    },
    "MZ": {
        "message": "ម៉ូហ្សាំប៊ិក"
    },
    "Make your Internet better with $1": {
        "message": "ធ្វើឱ្យកាន់តែប្រសើរឡើងជាមួយអ៊ីនធឺណិតរបស់អ្នក $1"
    },
    "Menu": {
        "message": "ម៉ឺនុយ"
    },
    "Might not work on all sites": {
        "message": "អាចនឹងមិនដំណើរការនៅលើតំបន់បណ្ដាញទាំងអស់"
    },
    "Mode": {
        "message": "របៀប"
    },
    "More countries": {
        "message": "បណ្តាប្រទេសជាច្រើនទៀត"
    },
    "More sites...": {
        "message": "បន្ថែមទៀត ..."
    },
    "More...": {
        "message": "បន្ថែមទៀត ..."
    },
    "My Account": {
        "message": "គណនីរបស់ខ្ញុំ"
    },
    "My History": {
        "message": "ប្រវត្តិរបស់យើង"
    },
    "My Settings": {
        "message": "ការកំណត់របស់ខ្ញុំ"
    },
    "My favorites": {
        "message": "ចិត្តរបស់ខ្ញុំ"
    },
    "NA": {
        "message": "ណាមីប៊ី"
    },
    "NC": {
        "message": "Caledonia ថ្មី"
    },
    "NE": {
        "message": "នីហ្សេរ"
    },
    "NF": {
        "message": "កោះ Norfolk"
    },
    "NG": {
        "message": "នីហ្សេរីយ៉ា"
    },
    "NI": {
        "message": "នីការ៉ាហ្គ័រ"
    },
    "NL": {
        "message": "ហូល្លង់"
    },
    "NO": {
        "message": "ន័រវែស"
    },
    "NP": {
        "message": "នេប៉ាល់"
    },
    "NQ": {
        "message": "Dronning Maud ដីធ្លី"
    },
    "NR": {
        "message": "ណូរុ"
    },
    "NT": {
        "message": "អព្យាក្រឹតតំបន់"
    },
    "NZ": {
        "message": "នូវែលហ្សេឡង់"
    },
    "Need Help?": {
        "message": "ត្រូវការជំនួយ?"
    },
    "Never ask me again": {
        "message": "មិនដែលសួរខ្ញុំម្តងទៀត"
    },
    "Never be a peer": {
        "message": "មិនដែលត្រូវបានមិត្តភក្ដិមួយ"
    },
    "No": {
        "message": "គ្មាន"
    },
    "No idle peers found.": {
        "message": "គ្មានមិត្តភក្តិទំនេរបានរកឃើញ។"
    },
    "No recent videos found": {
        "message": "វីដេអូចុងក្រោយនេះបានរកឃើញនោះទេ"
    },
    "No saved videos found": {
        "message": "គ្មានរកឃើញវីដេអូដែលបានរក្សាទុក"
    },
    "No title": {
        "message": "គ្មានចំណងជើង"
    },
    "No videos found": {
        "message": "គ្មានរកឃើញវីដេអូ"
    },
    "No videos found on active page": {
        "message": "បានរកឃើញនៅលើទំព័រសកម្មវីដេអូមិនមាន"
    },
    "No, Thanks": {
        "message": "គ្មានសូមអរគុណ,"
    },
    "No, fix it": {
        "message": "គ្មានការជួសជុលវា"
    },
    "Not working?": {
        "message": "មិនធ្វើការ?"
    },
    "Number of users that pressed not working": {
        "message": "ចំនួននៃអ្នកប្រើដែលបានសង្កត់មិនធ្វើការងារ"
    },
    "Number of users that use this option": {
        "message": "ចំនួននៃអ្នកប្រើដែលប្រើជម្រើសនេះ"
    },
    "OM": {
        "message": "អូម៉ង់"
    },
    "Off": {
        "message": "បិត"
    },
    "Oh, yes!": {
        "message": "អូបាទ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "កំណែចាស់នៃការរបស់ Firefox ។ សារពត៌មាន <a> នៅទីនេះ </a> ដើម្បីធ្វើឱ្យប្រសើរឡើង។"
    },
    "On": {
        "message": "លើ"
    },
    "Open Media Player": {
        "message": "ការបើកចំហកម្មវិធីចាក់មេឌៀ"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "ម៉ាកថ្មី MPlayer របស់យើងត្រូវបានយាងមកមិនយូរមិនឆាប់!"
    },
    "PA": {
        "message": "ប៉ាណាម៉ា"
    },
    "PC": {
        "message": "ដែនដីនៅតំបន់ប៉ាស៊ីហ្វិកកោះជឿទុកចិត្ត"
    },
    "PE": {
        "message": "ប៉េរូ"
    },
    "PG": {
        "message": "ប៉ាពូអានូវែលហ្គីណេ"
    },
    "PH": {
        "message": "ហ្វ៉ីលីពីន"
    },
    "PK": {
        "message": "ប៉ាគីស្ថាន"
    },
    "PL": {
        "message": "ប៉ូលូញ"
    },
    "PM": {
        "message": "លោក Saint Pierre និង Miquelon"
    },
    "PN": {
        "message": "កោះ Pitcairn"
    },
    "PR": {
        "message": "ព័រតូរីកូ"
    },
    "PS": {
        "message": "ប៉ាលេស្ទីន"
    },
    "PT": {
        "message": "ព័រទុយហ្កាល់"
    },
    "PU": {
        "message": "កោះច្រើននៅតំបន់ប៉ាស៊ីហ្វិករបស់អាមេរិក"
    },
    "PW": {
        "message": "ប៉ា"
    },
    "PY": {
        "message": "ប៉ារ៉ាហ្គាយ"
    },
    "PZ": {
        "message": "តំបន់ប៉ាណាម៉ាប្រឡាយ"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "សូមបិទផ្នែក<a>បន្ថែម</a>ផ្សេងទៀតដែលអ្នកគិតថាអាចត្រួតពិនិត្យការកំណត់ប្រូកស៊ីរបស់អ្នកដូចជាផ្សាយពាណិជ្ជកម្មបាំងសេវាផ្សេងទៀត VPN ល"
    },
    "Please enter a valid email address.": {
        "message": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ។"
    },
    "Please enter a web site address, like facebook.com": {
        "message": "សូមបញ្ចូលអាសយដ្ឋានតំបន់បណ្ដាញដូចជា facebook.com"
    },
    "Please help us get better": {
        "message": "សូមជួយយើងទទួលបានល្អប្រសើរជាងមុន"
    },
    "Popular in $1": {
        "message": "ការពេញនិយមនៅក្នុង $1"
    },
    "Popular in the world": {
        "message": "ការពេញនិយមនៅក្នុងពិភពលោក"
    },
    "Popular sites": {
        "message": "គេហទំព័រដ៏ពេញនិយម"
    },
    "Premium": {
        "message": "បុព្វលាភ"
    },
    "QA": {
        "message": "កាតារ"
    },
    "QO": {
        "message": "outlying អូសេអានី"
    },
    "RE": {
        "message": "រីយូនៀ"
    },
    "RO": {
        "message": "រូម៉ានី"
    },
    "RS": {
        "message": "ស៊ែប៊ី"
    },
    "RU": {
        "message": "រូស្ស៊ី"
    },
    "RW": {
        "message": "រវ៉ាន់ដា"
    },
    "Rate us": {
        "message": "អត្រាការប្រាក់អាមេរិក"
    },
    "Recent Videos": {
        "message": "វីដេអូថ្មី"
    },
    "Reload": {
        "message": "ផ្ទុកឡើងវិញ"
    },
    "Reload Hola": {
        "message": "ផ្ទុកឡើងវិញ Hola"
    },
    "Remember server": {
        "message": "ចូរចាំថាម៉ាស៊ីនបម្រើ"
    },
    "Report a problem": {
        "message": "រាយការណ៍បញ្ហាមួយ"
    },
    "Retry safe mode": {
        "message": "ព្យាយាមម្ដងទៀតរបៀបសុវត្ថិភាព"
    },
    "SA": {
        "message": "អារ៉ាប៊ីសាអ៊ូឌីត"
    },
    "SB": {
        "message": "កោះ Solomon"
    },
    "SC": {
        "message": "សីសែល"
    },
    "SD": {
        "message": "ស៊ូដង់"
    },
    "SE": {
        "message": "ស៊ុយអែដ"
    },
    "SG": {
        "message": "សិង្ហបុរី"
    },
    "SH": {
        "message": "សង់ហេឡេណា"
    },
    "SI": {
        "message": "ស្លូវេនី"
    },
    "SJ": {
        "message": "Svalbard និងមករា Mayen"
    },
    "SK": {
        "message": "ស្លូវ៉ាគី"
    },
    "SL": {
        "message": "សេរ៉ាឡេអូន"
    },
    "SM": {
        "message": "សាន់ម៉ារីណូ"
    },
    "SN": {
        "message": "សេនេហ្កាល់"
    },
    "SO": {
        "message": "សូម៉ាលី"
    },
    "SR": {
        "message": "សូរីណាម"
    },
    "ST": {
        "message": "សៅតុំនិងព្រីនស៊ីប៉េ"
    },
    "SU": {
        "message": "សហភាពសាធារណរដ្ឋសង្គមនិយមសូវៀត"
    },
    "SV": {
        "message": "អែលសាល់វ៉ាឌ័រ"
    },
    "SY": {
        "message": "ស៊ីរី"
    },
    "SZ": {
        "message": "សូហ្ស៉ីឡង់"
    },
    "Safe": {
        "message": "មាន​សុវត្ថិភាព"
    },
    "Safe mode": {
        "message": "របៀបសុវត្ថិភាព"
    },
    "Save": {
        "message": "រក្សាទុក"
    },
    "Saved Videos": {
        "message": "វីដេអូដែលបានរក្សាទុក"
    },
    "Saved for later": {
        "message": "បានរក្សាទុកសម្រាប់ពេលក្រោយ"
    },
    "Search video title": {
        "message": "ពានរង្វាន់វដេអូស្វែងរក"
    },
    "Select a Country": {
        "message": "ជ្រើសប្រទេសមួយ"
    },
    "Select site to unblock": {
        "message": "ជ្រើសតំបន់បណ្តាញដើម្បីអនុញ្ញាតិ"
    },
    "Server saved!": {
        "message": "ម៉ាស៊ីនបម្រើបានរក្សាទុក!"
    },
    "Set safe mode for $1 $2": {
        "message": "កំណត់របៀបដែលមានសុវត្ថិភាពសម្រាប់ $1 $2"
    },
    "Settings": {
        "message": "ការកំណត់"
    },
    "Share": {
        "message": "ចែករំលែក"
    },
    "Share $1 on $2": {
        "message": "ចែករំលែក $1 នៅលើ $2"
    },
    "Share $1 via $2": {
        "message": "ចែករំលែក $1 តាមរយៈ $2"
    },
    "Share with friends!": {
        "message": "ចែករំលែកជាមួយមិត្តភក្តិ!"
    },
    "Sign up": {
        "message": "ចុះឈ្មោះ"
    },
    "Solve buffering": {
        "message": "ដោះស្រាយសតិបណ្ដោះអាសន្ន"
    },
    "Solve buffering problems with": {
        "message": "ដោះស្រាយបញ្ហាជាមួយនឹងសតិបណ្ដោះអាសន្ន"
    },
    "Solves it": {
        "message": "ដោះស្រាយវា"
    },
    "Staff Picks": {
        "message": "Picks បុគ្គលិក"
    },
    "Start Hola": {
        "message": "ចាប់ផ្តើម"
    },
    "Starting...": {
        "message": "កំពុងចាប់ផ្ដើម ..."
    },
    "Stop Hola": {
        "message": "បញ្ឈប់ Hola"
    },
    "Stopping peer routing...": {
        "message": "ការបញ្ឈប់ការនាំផ្លូវពីមិត្តភក្តិ..."
    },
    "Stream": {
        "message": "ស្ទ្រីម"
    },
    "Stream Instantly": {
        "message": "ការផ្សាយភ្លាម"
    },
    "Submit": {
        "message": "ដាក់ស្នើ"
    },
    "Support Hola": {
        "message": "ការគាំទ្ររបស់ Hola"
    },
    "TA": {
        "message": "Tristan ដា Cunha"
    },
    "TC": {
        "message": "កោះ Caicos ទួហើយ"
    },
    "TD": {
        "message": "ឆាដ"
    },
    "TF": {
        "message": "ទឹកដីភាគខាងត្បូងរបស់ប្រទេសបារាំង"
    },
    "TG": {
        "message": "តូហ្គូ"
    },
    "TH": {
        "message": "ថៃ"
    },
    "TJ": {
        "message": "តាដហ្ស៉ីគីស្តង់"
    },
    "TL": {
        "message": "ទីម័រខាងកើត"
    },
    "TM": {
        "message": "ទួគមេនីស្តង់"
    },
    "TN": {
        "message": "ទុយនេស៊ី"
    },
    "TO": {
        "message": "តុងហ្គា"
    },
    "TR": {
        "message": "ទួរគី"
    },
    "TT": {
        "message": "ទ្រីនីដាដនឹងតូបាហ្គោ"
    },
    "TW": {
        "message": "តៃវ៉ាន់"
    },
    "TZ": {
        "message": "តង់ហ្សានី"
    },
    "Talk to us on $1": {
        "message": "និយាយទៅពួកយើងនៅលើ $1"
    },
    "Tell friends about $1": {
        "message": "ប្រាប់មិត្តភក្តិប្រហែល $1 ដុល្លារ"
    },
    "Testing connection...": {
        "message": "ការតភ្ជាប់ការធ្វើតេស្ត ..."
    },
    "Thank you!": {
        "message": "សូមអរគុណ!"
    },
    "There seems to be an error": {
        "message": "វាហាក់ដូចជាមានកំហុសមួយ"
    },
    "Top popular sites": {
        "message": "គេហទំព័រដ៏ពេញនិយមកំពូល"
    },
    "Translate to your language": {
        "message": "បកប្រែទៅជាភាសារបស់អ្នក"
    },
    "Try again": {
        "message": "សូមព្យាយាមម្តងទៀត"
    },
    "Try another server": {
        "message": "សូមសាកល្បងម៉ាស៊ីនបម្រើផ្សេងទៀត"
    },
    "Try it": {
        "message": "សាកល្បងវា"
    },
    "Try safe mode": {
        "message": "សូមព្យាយាមរបៀបសុវត្ថិភាព"
    },
    "Try to <span>reload</span>": {
        "message": "<span>ព្យាយាមផ្ទុកឡើងវិញ</span>"
    },
    "Trying another peer...": {
        "message": "ព្យាយាមមិត្តភក្ដិផ្សេងទៀត ..."
    },
    "Turn off Accelerator": {
        "message": "បិទបង្កើនល្បឿន"
    },
    "Turn off Hola": {
        "message": "បិទ Hola"
    },
    "Turn on Accelerator": {
        "message": "បើកការបង្កើនល្បឿន"
    },
    "Turn on Hola": {
        "message": "បើក Hola"
    },
    "Turn on to get started": {
        "message": "បើកនៅលើដើម្បីចាប់ផ្តើម"
    },
    "UA": {
        "message": "អ៊ុយក្រែន"
    },
    "UG": {
        "message": "អ៊ូហ្កង់ដា"
    },
    "UM": {
        "message": "អាមេរិកបានកោះឆ្ងាយអនីតិជន"
    },
    "US": {
        "message": "សហរដ្ឋអាមេរិក"
    },
    "UY": {
        "message": "អ៊ុយរុយហ្គាយ"
    },
    "UZ": {
        "message": "អ៊ូហ្សបេគីស្តង់"
    },
    "Unblocker": {
        "message": "អនុញ្ញាតិកម្មវិធី"
    },
    "Unblocker is disabled": {
        "message": "Unblocker ត្រូវបានបិទ"
    },
    "Unblocker?": {
        "message": "អនុញ្ញាតិកម្មវិធី?"
    },
    "Update": {
        "message": "ធ្វើឱ្យទាន់សម័យ"
    },
    "Upgrade": {
        "message": "ធ្វើឱ្យទាន់សម័យ"
    },
    "Using": {
        "message": "ការប្រើ"
    },
    "Using Hola": {
        "message": "ដោយប្រើ Hola"
    },
    "VA": {
        "message": "វ៉ាទីកង់"
    },
    "VC": {
        "message": "សាំងវ៉ាំងសង់និងហ្គ្រីណាឌី"
    },
    "VD": {
        "message": "វៀតណាមខាងជើង"
    },
    "VE": {
        "message": "វេនេហ្ស៊ុយឡា"
    },
    "VG": {
        "message": "កោះ Virgin របស់អង់គ្លេស"
    },
    "VI": {
        "message": "កោះ Virgin ក្នុងសហរដ្ឋអាមេរិក"
    },
    "VN": {
        "message": "វៀតណាម"
    },
    "VPN Premium": {
        "message": "VPN ពិសេស"
    },
    "VU": {
        "message": "វ៉ានូអាទូ"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "កំណែដែលចាស់ណាស់នៃ Chrome, <a> ធ្វើឱ្យទាន់សម័យ </a> Chrome ដើម្បីប្រើ Hola"
    },
    "Video": {
        "message": "សតិបណ្"
    },
    "Video stuck?": {
        "message": "វីដេអូជាប់គាំង?"
    },
    "Videos available for instant streaming": {
        "message": "វីដេអូដែលអាចរកបានសម្រាប់ការផ្សាយបន្ទាន់"
    },
    "WF": {
        "message": "Wallis និង Futuna"
    },
    "WK": {
        "message": "ភ្ញាក់កោះ"
    },
    "WS": {
        "message": "សាមូអា"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "ចង់ Hola នៅលើឧបករណ៍ផ្សេងទៀត? (Xbox, PS ក្រុមហ៊ុន Apple ទូរទស្សន៍ទូរស័ព្ទ iPhone ... ) ។ សូមចុចនៅទីនេះ"
    },
    "Want to know more?": {
        "message": "ចង់ដឹងបន្ថែមទៀត?"
    },
    "Watch Now": {
        "message": "មើលឥឡូវ"
    },
    "We found $1 videos": {
        "message": "យើងបានរកឃើញ $1 វីដេអូ"
    },
    "We will be in touch with you soon": {
        "message": "យើងនឹងនៅក្នុងការទំនាក់ទំនងជាមួយអ្នកក្នុងពេលឆាប់"
    },
    "Working!": {
        "message": "ធ្វើការ!"
    },
    "Working?": {
        "message": "ធ្វើការ?"
    },
    "Works on all sites but slower": {
        "message": "ធ្វើការនៅលើតំបន់ទាំងអស់ប៉ុន្តែយឺត"
    },
    "YD": {
        "message": "សាធារណរដ្ឋប្រជាធិបតេយ្យប្រជាជនយេម៉ែន"
    },
    "YE": {
        "message": "យេមែន"
    },
    "YT": {
        "message": "ម៉ាយុត"
    },
    "Yes": {
        "message": "បាទ"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "អ្នកត្រូវការដើម្បីធ្វើឱ្យប្រសើរឡើងទៅកំណែចុងក្រោយបំផុតរបស់កម្មវិធី Opera ក្នុងការប្រើ Hola ។ ចុច <a>ទីនេះ</a> ដើម្បីធ្វើឱ្យប្រសើរឡើង។"
    },
    "Youtube": {
        "message": "គេហទំព័រ YouTube"
    },
    "ZA": {
        "message": "អាហ្វ្រិកខាងត្បូង"
    },
    "ZM": {
        "message": "ហ្សាំប៊ី"
    },
    "ZW": {
        "message": "ហ្ស៊ីមបាបវ៉េ"
    },
    "ZZ": {
        "message": "មិនស្គាល់ឬតំបន់មិនត្រឹមត្រូវ"
    },
    "app_desc": {
        "message": "គេហទំព័រការចូលដំណើរការរាំងខ្ទប់នៅក្នុងប្រទេសរបស់អ្នកក្រុមហ៊ុនឬសាលាជាមួយ Hola! Hola គឺដោយឥតគិតថ្លៃនិងមានភាពងាយស្រួលក្នុងការប្រើ!"
    },
    "app_name": {
        "message": "អ៊ិនធឺណិ Hola កាន់តែប្រសើរ"
    },
    "back to": {
        "message": "ត្រលប់ទៅ"
    },
    "changing...": {
        "message": "ការផ្លាស់ប្តូរ ..."
    },
    "cool sites": {
        "message": "តំបន់ត្រជាក់"
    },
    "current site": {
        "message": "បណ្តាញនាពេលបច្ចុប្បន្ន"
    },
    "day": {
        "message": "ក្នុងមួយថ្ងៃ"
    },
    "days": {
        "message": "ថ្ងៃ"
    },
    "even more...": {
        "message": "ទោះបីជាមានច្រើនទៀត ..."
    },
    "mode": {
        "message": "របៀប"
    },
    "more options...": {
        "message": "ជម្រើសជាច្រើនទៀត ..."
    },
    "not working?": {
        "message": "មិនធ្វើការ?"
    },
    "not working? try another server": {
        "message": "មិនធ្វើការ? ព្យាយាមម៉ាស៊ីនបម្រើផ្សេងទៀត"
    },
    "on this page": {
        "message": "នៅលើទំព័រនេះ"
    },
    "sites that are censored": {
        "message": "តំបន់ដែលត្រូវបានត្រួតពិនិត្យ"
    },
    "start": {
        "message": "ចាប់ផ្តើម"
    },
    "working? remember": {
        "message": "ធ្វើការ? ចងចាំ"
    }
};
return E; });