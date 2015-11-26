'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "بواسطة"
    },
    "$1 Buffering?": {
        "message": "$1 اعطاء الاوامر؟"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 حولا للوصول $2 انقر هنا لتفعل الشيء نفسه: $3 لأنه يثبت حولا، الذي يتيح لي تصفح الإنترنت بشكل أسرع والوصول إلى $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN بريميوم"
    },
    "$1 from $2": {
        "message": "$1 من $2"
    },
    "$1 not found": {
        "message": "$1 لم يتم العثور"
    },
    "$1 via Hola": {
        "message": "$1 عن طريق حولا"
    },
    "(some Hola features are not available on your version)": {
        "message": "(بعض الميزات لا تتوفر في الإصدار الخاص بك)"
    },
    "AC": {
        "message": "جزيرة الصعود"
    },
    "AD": {
        "message": "أندورا"
    },
    "AE": {
        "message": "الامارات العربية المتحدة"
    },
    "AF": {
        "message": "أفغانستان"
    },
    "AG": {
        "message": "أنتيجوا وبربودا"
    },
    "AI": {
        "message": "أنجويلا"
    },
    "AL": {
        "message": "ألبانيا"
    },
    "AM": {
        "message": "أرمينيا"
    },
    "AN": {
        "message": "جزر الأنتيل الهولندية"
    },
    "AO": {
        "message": "أنجولا"
    },
    "AQ": {
        "message": "القطب الجنوبي"
    },
    "AR": {
        "message": "الأرجنتين"
    },
    "AS": {
        "message": "ساموا الأمريكية"
    },
    "AT": {
        "message": "النمسا"
    },
    "AU": {
        "message": "أستراليا"
    },
    "AW": {
        "message": "آروبا"
    },
    "AX": {
        "message": "جزر أولان"
    },
    "AZ": {
        "message": "أذربيجان"
    },
    "About": {
        "message": "حول"
    },
    "About Hola": {
        "message": "حول حولا"
    },
    "Accelerator": {
        "message": "مسرع"
    },
    "Accelerator is": {
        "message": "مسرع هو"
    },
    "Access $1 - cool site!": {
        "message": "الحصول $1 - الموقع بارد!"
    },
    "Access $1?": {
        "message": "وصول $1؟"
    },
    "Access any site from any country, free": {
        "message": "الوصول إلى أي موقع من أي بلد!"
    },
    "Access cool sites": {
        "message": "الوصول مواقعنا الرائعة"
    },
    "Access more sites": {
        "message": "وصول المزيد من المواقع"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "مواقع الوصول راقبت في بلدكم، وتسريع الإنترنت مع هولاء - مجانا!"
    },
    "Accessing $1 with Hola": {
        "message": "الحصول على $1 مع حولا"
    },
    "Account": {
        "message": "حساب"
    },
    "Account type": {
        "message": "نوع الحساب"
    },
    "Activating...": {
        "message": "تفعيل..."
    },
    "All ($1)": {
        "message": "جميع ($1)"
    },
    "Apply settings...": {
        "message": "تطبيق الإعدادات ..."
    },
    "Author site:": {
        "message": "موقع المؤلف:"
    },
    "Author:": {
        "message": "المؤلف:"
    },
    "Awesome!": {
        "message": "رهيبة!"
    },
    "BA": {
        "message": "البوسنة والهرسك"
    },
    "BB": {
        "message": "بربادوس"
    },
    "BD": {
        "message": "بنجلاديش"
    },
    "BE": {
        "message": "بلجيكا"
    },
    "BF": {
        "message": "بوركينا فاسو"
    },
    "BG": {
        "message": "بلغاريا"
    },
    "BH": {
        "message": "البحرين"
    },
    "BI": {
        "message": "بوروندي"
    },
    "BJ": {
        "message": "بنين"
    },
    "BL": {
        "message": "سانت بارتيليمي"
    },
    "BM": {
        "message": "برمودا"
    },
    "BN": {
        "message": "بروناي"
    },
    "BO": {
        "message": "بوليفيا"
    },
    "BQ": {
        "message": "إقليم أنتاركتيكا البريطاني"
    },
    "BR": {
        "message": "البرازيل"
    },
    "BS": {
        "message": "الباهاما"
    },
    "BT": {
        "message": "بوتان"
    },
    "BV": {
        "message": "جزيرة بوفيه"
    },
    "BW": {
        "message": "بتسوانا"
    },
    "BY": {
        "message": "روسيا البيضاء"
    },
    "BZ": {
        "message": "بليز"
    },
    "Back to $1": {
        "message": "العودة $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "كن أول من يحصل على حولا لفون / آي باد - سجل الآن:"
    },
    "Browsing": {
        "message": "التصفح"
    },
    "Buffering problems?": {
        "message": "مشاكل التخزين المؤقت؟"
    },
    "Buffering?": {
        "message": "التخزين المؤقت؟"
    },
    "CA": {
        "message": "كندا"
    },
    "CC": {
        "message": "جزر كوكوس"
    },
    "CD": {
        "message": "جمهورية الكونغو الديمقراطية"
    },
    "CF": {
        "message": "جمهورية افريقيا الوسطى"
    },
    "CG": {
        "message": "الكونغو - برازافيل"
    },
    "CH": {
        "message": "سويسرا"
    },
    "CI": {
        "message": "ساحل العاج"
    },
    "CK": {
        "message": "جزر كوك"
    },
    "CL": {
        "message": "شيلي"
    },
    "CM": {
        "message": "الكاميرون"
    },
    "CN": {
        "message": "الصين"
    },
    "CO": {
        "message": "كولومبيا"
    },
    "CP": {
        "message": "جزيرة كليبرتون"
    },
    "CR": {
        "message": "كوستاريكا"
    },
    "CS": {
        "message": "صربيا والجبل الأسود"
    },
    "CT": {
        "message": "كانتون وجزر إندربري"
    },
    "CU": {
        "message": "كوبا"
    },
    "CV": {
        "message": "الرأس الأخضر"
    },
    "CX": {
        "message": "جزيرة الكريسماس"
    },
    "CY": {
        "message": "قبرص"
    },
    "CZ": {
        "message": "جمهورية التشيك"
    },
    "Changing country...": {
        "message": "يتم تغيير الدوله..."
    },
    "Check out Hola for $1!": {
        "message": "تحقق من حولا ل $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "تحقق من هولاء للهواتف النقالة"
    },
    "Check your Internet connection": {
        "message": "التحقق من أن يكون لديك إنترنت"
    },
    "Choose<br>Country": {
        "message": "اختار <br> بلد"
    },
    "Configuring...": {
        "message": "تكوين ..."
    },
    "Connecting...": {
        "message": "ربط ..."
    },
    "Cool site!": {
        "message": "الموقع رائع!"
    },
    "Creative licenses": {
        "message": "تراخيص الإبداعية"
    },
    "DD": {
        "message": "ألمانيا الشرقية"
    },
    "DE": {
        "message": "ألمانيا"
    },
    "DG": {
        "message": "دييغو غارسيا"
    },
    "DJ": {
        "message": "جيبوتي"
    },
    "DK": {
        "message": "الدانمرك"
    },
    "DM": {
        "message": "دومينيكا"
    },
    "DO": {
        "message": "جمهورية الدومينيك"
    },
    "DZ": {
        "message": "الجزائر"
    },
    "Delete": {
        "message": "حذف"
    },
    "Deleted from my list": {
        "message": "حذف من قائمتي"
    },
    "Did it work?": {
        "message": "لم يعمل؟"
    },
    "Did you experience any buffering?": {
        "message": "هل تواجه أي التخزين المؤقت؟"
    },
    "Disliked it": {
        "message": "لم يعجبني"
    },
    "Don't show again for $1 for one week": {
        "message": "لا تظهر مرة أخرى ل $1 لمدة أسبوع واحد"
    },
    "Don't show again for any site for one week": {
        "message": "لا تظهر مرة أخرى على أي موقع لمدة أسبوع واحد"
    },
    "Downloading": {
        "message": "تحميل"
    },
    "EA": {
        "message": "سبتة ومليلة"
    },
    "EC": {
        "message": "الاكوادور"
    },
    "EE": {
        "message": "استونيا"
    },
    "EG": {
        "message": "مصر"
    },
    "EH": {
        "message": "الصحراء الغربية"
    },
    "ER": {
        "message": "اريتريا"
    },
    "ES": {
        "message": "أسبانيا"
    },
    "ET": {
        "message": "اثيوبيا"
    },
    "EU": {
        "message": "الاتحاد الأوروبي"
    },
    "Enable": {
        "message": "تمكين"
    },
    "Enable Hola Accelerator": {
        "message": "تمكين حولا مسرع"
    },
    "Enjoy!": {
        "message": "التمتع به!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "تتمتع هولاء للكروم؟"
    },
    "Enter site to access": {
        "message": "أدخل الموقع إلى الوصول"
    },
    "Enter your email": {
        "message": "ادخل بريدك الإلكتروني"
    },
    "FI": {
        "message": "فنلندا"
    },
    "FJ": {
        "message": "فيجي"
    },
    "FK": {
        "message": "جزر فوكلاند"
    },
    "FM": {
        "message": "ميكرونيزيا"
    },
    "FO": {
        "message": "جزر فارو"
    },
    "FQ": {
        "message": "الجنوب الفرنسي والأراضي القطبية"
    },
    "FR": {
        "message": "فرنسا"
    },
    "FX": {
        "message": "متروبوليتان فرنسا"
    },
    "Fast": {
        "message": "بسرعة"
    },
    "Finding new peers...": {
        "message": "العثور على أقرانه جديدة ..."
    },
    "Finding peers...": {
        "message": "العثور على أقرانه ..."
    },
    "Free": {
        "message": "حر"
    },
    "From": {
        "message": "من"
    },
    "Full list": {
        "message": "القائمة الكاملة"
    },
    "GA": {
        "message": "الجابون"
    },
    "GB": {
        "message": "المملكة المتحدة"
    },
    "GD": {
        "message": "جرينادا"
    },
    "GE": {
        "message": "جورجيا"
    },
    "GF": {
        "message": "غويانا"
    },
    "GG": {
        "message": "غيرنسي"
    },
    "GH": {
        "message": "غانا"
    },
    "GI": {
        "message": "جبل طارق"
    },
    "GL": {
        "message": "جرينلاند"
    },
    "GM": {
        "message": "غامبيا"
    },
    "GN": {
        "message": "غينيا"
    },
    "GP": {
        "message": "جوادلوب"
    },
    "GQ": {
        "message": "غينيا الاستوائية"
    },
    "GR": {
        "message": "اليونان"
    },
    "GS": {
        "message": "جورجيا الجنوبية وجزر ساندويتش الجنوبية"
    },
    "GT": {
        "message": "جواتيمالا"
    },
    "GU": {
        "message": "جوام"
    },
    "GW": {
        "message": "غينيا بيساو"
    },
    "GY": {
        "message": "غيانا"
    },
    "Get 24/7 Unblocking": {
        "message": "الحصول على 24/7 إلغاء الحظر"
    },
    "Get Free Premium": {
        "message": "الحصول مجانا بريميوم"
    },
    "Get Hola Accelerator": {
        "message": "الحصول حولا مسرع"
    },
    "Get Hola Player": {
        "message": "الحصول على لاعب حولا"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": ".احصل على هولا + لخدمه غير متقطعه ، خالية من الاعلانات"
    },
    "Get Hola Premium": {
        "message": "الحصول على قسط حولا"
    },
    "Get Hola for Android": {
        "message": "الحصول على هولاء لالروبوت"
    },
    "Get Premium support": {
        "message": "الحصول على دعم ممتاز"
    },
    "Get Unlimited Unblocking": {
        "message": "غير محدود الحصول على إلغاء الحظر"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "الوصول إلى مواقع محظورة، نحاول الآن: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "الحصول على مساعدة من مهندس على سكايب:"
    },
    "Get the Fastest Servers": {
        "message": "الحصول على أسرع خوادم"
    },
    "Go": {
        "message": "ذهاب"
    },
    "Go Hola Premium": {
        "message": "الذهاب حولا بريميوم"
    },
    "HK": {
        "message": "هونج كونج الصينية"
    },
    "HM": {
        "message": "جزيرة هيرد وماكدونالد"
    },
    "HN": {
        "message": "هندوراس"
    },
    "HR": {
        "message": "كرواتيا"
    },
    "HT": {
        "message": "هايتي"
    },
    "HU": {
        "message": "المجر"
    },
    "Hate it": {
        "message": "اكرهها"
    },
    "Help": {
        "message": "مساعدة"
    },
    "Hey,\n\nI'm using": {
        "message": "مهلا، أنا باستخدام"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "مرحبا، لقد بدأت باستخدام $1 ($2). فإنه يتيح لي تصفح الإنترنت بشكل أسرع والوصول $3 في بلدي."
    },
    "Hola": {
        "message": "حولا"
    },
    "Hola Accelerator": {
        "message": "حولا مسرع"
    },
    "Hola Media Player": {
        "message": "حولا ميديا بلاير"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "حولا لا يستطيعون العمل بسبب تمديد آخر هو السيطرة على إعدادات الوكيل الخاص بك."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "حولا لا تعمل بشكل جيد في ويندوز 8 واسطة. يرجى التبديل إلى وضع سطح المكتب. انقر <a>هنا</a> للحصول على تعليمات"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "حولا غير متوفرة في الوقت الراهن، لكننا نعمل على ذلك."
    },
    "Hola is off, click it to turn it on": {
        "message": "حولا معطلة، انقر فوق إلى تشغيل"
    },
    "Hola site list": {
        "message": "قائمة موقع فك الحظر"
    },
    "I can now access $1 from any country!": {
        "message": "يمكنني الآن الوصول $1 من أي بلد!"
    },
    "I did not experience any buffering": {
        "message": "أنا لم تواجه أي التخزين المؤقت"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "أنا فقط الوصول إليها الموقع للرقابة باستخدام حولا ل $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "أنا باستخدام $1 الى عرض $2 في بلدي، وتصفح أسرع!"
    },
    "IC": {
        "message": "جزر الكناري"
    },
    "ID": {
        "message": "اندونيسيا"
    },
    "IE": {
        "message": "أيرلندا"
    },
    "IL": {
        "message": "اسرائيل"
    },
    "IM": {
        "message": "جزيرة مان"
    },
    "IN": {
        "message": "الهند"
    },
    "IO": {
        "message": "المحيط الهندي البريطاني"
    },
    "IQ": {
        "message": "العراق"
    },
    "IR": {
        "message": "ايران"
    },
    "IS": {
        "message": "أيسلندا"
    },
    "IT": {
        "message": "ايطاليا"
    },
    "Improve translation": {
        "message": "تحسين الترجمة"
    },
    "Initializing...": {
        "message": "تهيئة، يرجى الانتظار..."
    },
    "Install": {
        "message": "تثبيت"
    },
    "Install Accelerator": {
        "message": "تثبيت مسرع"
    },
    "Install Free Hola Accelerator": {
        "message": "تثبيت حولا مسرع مجانا"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "تثبيت هولاء محرك الاستمرار في استخدام هولاء مجانا"
    },
    "Instantly watch any torrent Video": {
        "message": "مشاهدة الفور أي سيل فيديو"
    },
    "Invite friends - free Premium.": {
        "message": "دعوة الأصدقاء - بريميوم مجانا."
    },
    "Invite friends. Get Premium.": {
        "message": "دعوة الأصدقاء. الحصول على قسط."
    },
    "It was okay": {
        "message": "أنه بخير"
    },
    "JE": {
        "message": "جيرسي"
    },
    "JM": {
        "message": "جامايكا"
    },
    "JO": {
        "message": "الأردن"
    },
    "JP": {
        "message": "اليابان"
    },
    "JT": {
        "message": "جزيرة جونستون"
    },
    "KE": {
        "message": "كينيا"
    },
    "KG": {
        "message": "قرغيزستان"
    },
    "KH": {
        "message": "كمبوديا"
    },
    "KI": {
        "message": "كيريباتي"
    },
    "KM": {
        "message": "جزر القمر"
    },
    "KN": {
        "message": "سانت كيتس ونيفيس"
    },
    "KP": {
        "message": "كوريا الشمالية"
    },
    "KR": {
        "message": "كوريا الجنوبية"
    },
    "KW": {
        "message": "الكويت"
    },
    "KY": {
        "message": "جزر الكايمن"
    },
    "KZ": {
        "message": "كازاخستان"
    },
    "LA": {
        "message": "لاوس"
    },
    "LB": {
        "message": "لبنان"
    },
    "LC": {
        "message": "سانت لوسيا"
    },
    "LI": {
        "message": "ليختنشتاين"
    },
    "LK": {
        "message": "سريلانكا"
    },
    "LR": {
        "message": "ليبيريا"
    },
    "LS": {
        "message": "ليسوتو"
    },
    "LT": {
        "message": "ليتوانيا"
    },
    "LU": {
        "message": "لوكسمبورج"
    },
    "LV": {
        "message": "لاتفيا"
    },
    "LY": {
        "message": "ليبيا"
    },
    "Language": {
        "message": "اللغة"
    },
    "Library": {
        "message": "مكتبة"
    },
    "Like it": {
        "message": "يعجب ب"
    },
    "Loading": {
        "message": "تحميل"
    },
    "Loading site...": {
        "message": "تحميل"
    },
    "Log in": {
        "message": "تسجيل الدخول"
    },
    "Log out": {
        "message": "تسجيل الخروج"
    },
    "Love Hola?": {
        "message": "أحب حولا؟"
    },
    "Love it": {
        "message": "أحبه"
    },
    "MA": {
        "message": "المغرب"
    },
    "MC": {
        "message": "موناكو"
    },
    "MD": {
        "message": "مولدافيا"
    },
    "ME": {
        "message": "الجبل الأسود"
    },
    "MF": {
        "message": "سانت مارتين"
    },
    "MG": {
        "message": "مدغشقر"
    },
    "MH": {
        "message": "جزر المارشال"
    },
    "MI": {
        "message": "جزر ميدواي"
    },
    "MK": {
        "message": "مقدونيا"
    },
    "ML": {
        "message": "مالي"
    },
    "MM": {
        "message": "ميانمار"
    },
    "MN": {
        "message": "منغوليا"
    },
    "MO": {
        "message": "ماكاو الصينية"
    },
    "MP": {
        "message": "جزر ماريانا الشمالية"
    },
    "MQ": {
        "message": "مارتينيك"
    },
    "MR": {
        "message": "موريتانيا"
    },
    "MS": {
        "message": "مونتسرات"
    },
    "MT": {
        "message": "مالطا"
    },
    "MU": {
        "message": "موريشيوس"
    },
    "MV": {
        "message": "جزر الملديف"
    },
    "MW": {
        "message": "ملاوي"
    },
    "MX": {
        "message": "المكسيك"
    },
    "MY": {
        "message": "ماليزيا"
    },
    "MZ": {
        "message": "موزمبيق"
    },
    "Make your Internet better with $1": {
        "message": "جعل الإنترنت بشكل أفضل مع $1"
    },
    "Menu": {
        "message": "القائمة"
    },
    "Might not work on all sites": {
        "message": "قد لا تعمل على جميع المواقع"
    },
    "Mode": {
        "message": "طريقة"
    },
    "More countries": {
        "message": "مزيد من الدول"
    },
    "More sites...": {
        "message": "أكثر..."
    },
    "More...": {
        "message": "أكثر..."
    },
    "My Account": {
        "message": "حسابي"
    },
    "My History": {
        "message": "بلدي التاريخ"
    },
    "My Settings": {
        "message": "إعدادات بلدي"
    },
    "My favorites": {
        "message": "بلدي المفضلة"
    },
    "NA": {
        "message": "ناميبيا"
    },
    "NC": {
        "message": "كاليدونيا الجديدة"
    },
    "NE": {
        "message": "النيجر"
    },
    "NF": {
        "message": "جزيرة نورفوك"
    },
    "NG": {
        "message": "نيجيريا"
    },
    "NI": {
        "message": "نيكاراجوا"
    },
    "NL": {
        "message": "هولندا"
    },
    "NO": {
        "message": "النرويج"
    },
    "NP": {
        "message": "نيبال"
    },
    "NQ": {
        "message": "دروننغ مود لاند"
    },
    "NR": {
        "message": "نورو"
    },
    "NT": {
        "message": "المنطقة المحايدة"
    },
    "NU": {
        "message": "نيوي"
    },
    "NZ": {
        "message": "نيوزيلاندا"
    },
    "Need Help?": {
        "message": "بحاجة الى مساعدة؟"
    },
    "Netflix": {
        "message": "نيتفليكس"
    },
    "Never ask me again": {
        "message": "لم تسألني ثانية"
    },
    "Never be a peer": {
        "message": "أبدا أن يكون أحد الزملاء"
    },
    "No": {
        "message": "لا"
    },
    "No idle peers found.": {
        "message": "لم يتم العثور على أقرانه الخمول."
    },
    "No recent videos found": {
        "message": "أي مقاطع فيديو حديثة وجدت"
    },
    "No saved videos found": {
        "message": "لا مقاطع الفيديو المحفوظة وجدت"
    },
    "No title": {
        "message": "بدون عنوان"
    },
    "No videos found": {
        "message": "لا العثور على الفيديو"
    },
    "No videos found on active page": {
        "message": "لم يتم العثور على الصفحة النشطة أشرطة الفيديو"
    },
    "No, Thanks": {
        "message": "لا، شكرا"
    },
    "No, fix it": {
        "message": "لا، اصلاحها"
    },
    "Not working?": {
        "message": "لا يعمل؟"
    },
    "Number of users that pressed not working": {
        "message": "عدد المستخدمين الذين ضغطت لا تعمل"
    },
    "Number of users that use this option": {
        "message": "عدد المستخدمين الذين استخدام هذا الخيار"
    },
    "OM": {
        "message": "عمان"
    },
    "Off": {
        "message": "ايقاف"
    },
    "Oh, yes!": {
        "message": "أوه، نعم!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "إصدار قديم من فايرفوكس. الصحافة <a>هنا</a> لترقية "
    },
    "On": {
        "message": "تشغيل"
    },
    "Open Media Player": {
        "message": "فتح ميديا بلاير"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "علامتنا التجارية الجديدة إمبلاير قريبا!"
    },
    "PA": {
        "message": "بنما"
    },
    "PC": {
        "message": "إقليم جزر المحيط الهادئ الثقة"
    },
    "PE": {
        "message": "بيرو"
    },
    "PF": {
        "message": "بولينيزيا الفرنسية"
    },
    "PG": {
        "message": "بابوا غينيا الجديدة"
    },
    "PH": {
        "message": "الفيلبين"
    },
    "PK": {
        "message": "باكستان"
    },
    "PL": {
        "message": "بولندا"
    },
    "PM": {
        "message": "سانت بيير وميكولون"
    },
    "PN": {
        "message": "بتكايرن"
    },
    "PR": {
        "message": "بورتوريكو"
    },
    "PS": {
        "message": "فلسطين"
    },
    "PT": {
        "message": "البرتغال"
    },
    "PU": {
        "message": "الولايات المتحدة متنوعة جزر المحيط الهادئ"
    },
    "PW": {
        "message": "بالاو"
    },
    "PY": {
        "message": "باراجواي"
    },
    "PZ": {
        "message": "منطقة قناة بنما"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "يرجى تعطيل <a>ملحقات</a> الأخرى التي تعتقد أنها قد التحكم في إعدادات الوكيل الخاص بك مثل حاصرات الإعلان، وخدمات VPN الأخرى، الخ."
    },
    "Please enter a valid email address.": {
        "message": "يرجى إدخال عنوان بريد إلكتروني صالح."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "يرجى إدخال عنوان موقع على شبكة الإنترنت، مثل facebook.com"
    },
    "Please help us get better": {
        "message": "يرجى مساعدتنا في الحصول على أفضل"
    },
    "Popular in $1": {
        "message": "الشعبية في $1"
    },
    "Popular in the world": {
        "message": "شعبية في العالم"
    },
    "Popular sites": {
        "message": "مواقع شعبية"
    },
    "Premium": {
        "message": "علاوة"
    },
    "QA": {
        "message": "قطر"
    },
    "QO": {
        "message": "خراج أوقيانوسيا"
    },
    "RE": {
        "message": "روينيون"
    },
    "RO": {
        "message": "رومانيا"
    },
    "RS": {
        "message": "صربيا"
    },
    "RU": {
        "message": "روسيا"
    },
    "RW": {
        "message": "رواندا"
    },
    "Rate us": {
        "message": "قيمنا"
    },
    "Recent Videos": {
        "message": "فيديو الأخيرة"
    },
    "Reload": {
        "message": "تحديث"
    },
    "Reload Hola": {
        "message": "تحديث هولا"
    },
    "Remember server": {
        "message": "تذكر الخادم"
    },
    "Report a problem": {
        "message": "تقرير عن مشكلة"
    },
    "Retry safe mode": {
        "message": "إعادة المحاولة الوضع الآمن"
    },
    "SA": {
        "message": "المملكة العربية السعودية"
    },
    "SB": {
        "message": "جزر سليمان"
    },
    "SC": {
        "message": "سيشل"
    },
    "SD": {
        "message": "السودان"
    },
    "SE": {
        "message": "السويد"
    },
    "SG": {
        "message": "سنغافورة"
    },
    "SH": {
        "message": "سانت هيلنا"
    },
    "SI": {
        "message": "سلوفينيا"
    },
    "SJ": {
        "message": "سفالبارد وجان مايان"
    },
    "SK": {
        "message": "سلوفاكيا"
    },
    "SL": {
        "message": "سيراليون"
    },
    "SM": {
        "message": "سان مارينو"
    },
    "SN": {
        "message": "السنغال"
    },
    "SO": {
        "message": "الصومال"
    },
    "SR": {
        "message": "سورينام"
    },
    "ST": {
        "message": "ساو تومي وبرينسيبي"
    },
    "SU": {
        "message": "اتحاد الجمهوريات الاشتراكية السوفياتية"
    },
    "SV": {
        "message": "السلفادور"
    },
    "SY": {
        "message": "سوريا"
    },
    "SZ": {
        "message": "سوازيلاند"
    },
    "Safe": {
        "message": "آمن"
    },
    "Safe mode": {
        "message": "الوضع الآمن"
    },
    "Save": {
        "message": "حفظ"
    },
    "Saved Videos": {
        "message": "فيديو المحفوظة"
    },
    "Saved for later": {
        "message": "حفظ لوقت لاحق"
    },
    "Search video title": {
        "message": "عنوان البحث الفيديو"
    },
    "Select a Country": {
        "message": "اختر البلد"
    },
    "Select site to unblock": {
        "message": "تحديد الموقع لكسر الجمود"
    },
    "Server saved!": {
        "message": "خادم حفظها!"
    },
    "Set safe mode for $1 $2": {
        "message": "ضبط الوضع آمنا لل $1 $2"
    },
    "Settings": {
        "message": "إعدادات"
    },
    "Share": {
        "message": "حصة"
    },
    "Share $1 on $2": {
        "message": "تبادل $1 على $2"
    },
    "Share $1 via $2": {
        "message": "تبادل $1 $2 عن طريق"
    },
    "Share with friends!": {
        "message": "شارك مع الاصدقاء!"
    },
    "Sign up": {
        "message": "الاشتراك"
    },
    "Solve buffering": {
        "message": "حل التخزين المؤقت"
    },
    "Solve buffering problems with": {
        "message": "حل مشاكل التخزين المؤقت مع"
    },
    "Solves it": {
        "message": "يحل"
    },
    "Staff Picks": {
        "message": "اللقطات الموظفين"
    },
    "Start Hola": {
        "message": "ابدأ"
    },
    "Starting...": {
        "message": "ابتداء ..."
    },
    "Stop Hola": {
        "message": "توقف حولا"
    },
    "Stopping peer routing...": {
        "message": "وقف توجيه الأقران ..."
    },
    "Stream": {
        "message": "تيار"
    },
    "Stream Instantly": {
        "message": "تيار الفور"
    },
    "Submit": {
        "message": "عرض"
    },
    "Support Hola": {
        "message": "دعم حولا"
    },
    "TA": {
        "message": "تريستان دا كونها"
    },
    "TC": {
        "message": "جزر الترك وجايكوس"
    },
    "TD": {
        "message": "تشاد"
    },
    "TF": {
        "message": "المقاطعات الجنوبية الفرنسية"
    },
    "TG": {
        "message": "توجو"
    },
    "TH": {
        "message": "تايلند"
    },
    "TJ": {
        "message": "طاجكستان"
    },
    "TK": {
        "message": "توكيلو"
    },
    "TL": {
        "message": "تيمور الشرقية"
    },
    "TM": {
        "message": "تركمانستان"
    },
    "TN": {
        "message": "تونس"
    },
    "TO": {
        "message": "تونجا"
    },
    "TR": {
        "message": "تركيا"
    },
    "TT": {
        "message": "ترينيداد وتوباغو"
    },
    "TV": {
        "message": "توفالو"
    },
    "TW": {
        "message": "تايوان"
    },
    "TZ": {
        "message": "تانزانيا"
    },
    "Talk to us on $1": {
        "message": "التحدث الينا على $1"
    },
    "Tell friends about $1": {
        "message": "أخبر أصدقائك حوالي $1"
    },
    "Testing connection...": {
        "message": "اتصال اختبار ..."
    },
    "Thank you!": {
        "message": "شكرا لك!"
    },
    "There seems to be an error": {
        "message": "يبدو أن هناك خطأ"
    },
    "Top popular sites": {
        "message": "المواقع شعبية أعلى"
    },
    "Translate to your language": {
        "message": "تترجم إلى لغتك"
    },
    "Try again": {
        "message": "حاول مرة أخرى"
    },
    "Try another server": {
        "message": "محاولة ملقم آخر"
    },
    "Try it": {
        "message": "تحاول ذلك"
    },
    "Try safe mode": {
        "message": "محاولة الوضع الآمن"
    },
    "Try to <span>reload</span>": {
        "message": "<span>إعادة التحميل</span>"
    },
    "Trying another peer...": {
        "message": "تحاول الأقران آخر ..."
    },
    "Turn off Accelerator": {
        "message": "إيقاف مسرع"
    },
    "Turn off Hola": {
        "message": "إيقاف حولا"
    },
    "Turn on Accelerator": {
        "message": "تشغيل مسرع"
    },
    "Turn on Hola": {
        "message": "تشغيل حولا"
    },
    "Turn on to get started": {
        "message": "اشغل لبدأ العمل"
    },
    "UA": {
        "message": "أوكرانيا"
    },
    "UG": {
        "message": "أوغندا"
    },
    "UM": {
        "message": "جزر الولايات المتحدة البعيدة الصغيرة"
    },
    "US": {
        "message": "الولايات المتحدة الأمريكية"
    },
    "UY": {
        "message": "أورجواي"
    },
    "UZ": {
        "message": "أوزبكستان"
    },
    "Unblocker": {
        "message": "فك الحظر"
    },
    "Unblocker is disabled": {
        "message": "تم تعطيل فك الحظر"
    },
    "Unblocker?": {
        "message": "Unblocker؟"
    },
    "Update": {
        "message": "تحديث"
    },
    "Upgrade": {
        "message": "تحديث"
    },
    "Using": {
        "message": "باستخدام"
    },
    "Using Hola": {
        "message": "باستخدام حولا"
    },
    "VA": {
        "message": "الفاتيكان"
    },
    "VC": {
        "message": "سانت فنسنت وغرنادين"
    },
    "VD": {
        "message": "شمال فيتنام"
    },
    "VE": {
        "message": "فنزويلا"
    },
    "VG": {
        "message": "جزر فرجين البريطانية"
    },
    "VI": {
        "message": "جزر فرجين الأمريكية"
    },
    "VN": {
        "message": "فيتنام"
    },
    "VPN Premium": {
        "message": "VPN بريميوم"
    },
    "VU": {
        "message": "فانواتو"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "الكروم لاستخدام هولا <a>تحديث</a>"
    },
    "Video": {
        "message": "جارى"
    },
    "Video stuck?": {
        "message": "تمسك الفيديو؟"
    },
    "Videos available for instant streaming": {
        "message": "أشرطة الفيديو المتاحة لتدفق لحظة"
    },
    "WF": {
        "message": "جزر والس وفوتونا"
    },
    "WK": {
        "message": "جزيرة ويك"
    },
    "WS": {
        "message": "ساموا"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "هل تريد هولا على أجهزة أخرى؟ (إكس بوكس، PS، آبل، آي فون ...). انقر هنا"
    },
    "Want to know more?": {
        "message": "تريد أن تعرف أكثر؟"
    },
    "Watch Now": {
        "message": "مشاهدة الآن"
    },
    "We found $1 videos": {
        "message": "وجدنا $1 أشرطة الفيديو"
    },
    "We will be in touch with you soon": {
        "message": "سنكون على اتصال معكم قريبا"
    },
    "Working!": {
        "message": "العمل!"
    },
    "Working?": {
        "message": "العمل؟"
    },
    "Works on all sites but slower": {
        "message": "يعمل على جميع المواقع ولكن أبطأ"
    },
    "YD": {
        "message": "الجمهورية الديمقراطية الشعبية اليمنية"
    },
    "YE": {
        "message": "اليمن"
    },
    "YT": {
        "message": "مايوت"
    },
    "Yes": {
        "message": "نعم"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "تحتاج إلى ترقية إلى أحدث إصدار من أوبرا لاستخدام حولا. اضغط <a>هنا</a> للترقية."
    },
    "Youtube": {
        "message": "يوتيوب"
    },
    "ZA": {
        "message": "جمهورية جنوب افريقيا"
    },
    "ZM": {
        "message": "زامبيا"
    },
    "ZW": {
        "message": "زيمبابوي"
    },
    "ZZ": {
        "message": "منطقة غير معرفة"
    },
    "app_desc": {
        "message": "المواقع المحجوبة في الوصول البلاد، شركتك أو المدرسة مع هولاء! حولا هو حر وسهلة الاستعمال!"
    },
    "app_name": {
        "message": "هولا إنترنت أفضل"
    },
    "back to": {
        "message": "الرجوع"
    },
    "changing...": {
        "message": "يتم التغير..."
    },
    "cool sites": {
        "message": "مواقعنا الرائعة"
    },
    "current site": {
        "message": "الموقع الحالي"
    },
    "day": {
        "message": "يوم"
    },
    "days": {
        "message": "أيام"
    },
    "even more...": {
        "message": "حتى أكثر..."
    },
    "mode": {
        "message": "طريقة"
    },
    "more options...": {
        "message": "المزيد من الخيارات ..."
    },
    "not working?": {
        "message": "لا يعمل؟"
    },
    "not working? try another server": {
        "message": "لا يعمل؟ محاولة ملقم آخر"
    },
    "on this page": {
        "message": "في هذه الصفحة"
    },
    "sites that are censored": {
        "message": "المواقع التي تخضع للرقابة"
    },
    "start": {
        "message": "بداية"
    },
    "working? remember": {
        "message": "العمل؟ تذكر"
    }
};
return E; });