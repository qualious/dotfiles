'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "کے ذریعے"
    },
    "$1 Buffering?": {
        "message": "$1 کے بفرنگ؟"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 خوش بھی ایسا ہی کرنے کے لئے یہاں کلک کریں $2\n\n تک رسائی کے لئے: $3\n\nاس نے مجھے تیزی سے انٹرنیٹ سرف اور تک رسائی کی اجازت دیتا ہے جس میں خوش، انسٹال $4$5"
    },
    "$1 VPN": {
        "message": "$1 ویپیین"
    },
    "$1 VPN Premium": {
        "message": "$1 ویپیین پریمیم"
    },
    "$1 from $2": {
        "message": "$2 سے $1"
    },
    "$1 not found": {
        "message": "$1 نہیں ملا"
    },
    "$1 via Hola": {
        "message": "خوش ذریعے $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(کچھ Hola خصوصیات آپ کے ورژن پر دستیاب نہیں ہیں)"
    },
    "AC": {
        "message": "ادگم جزیرہ"
    },
    "AD": {
        "message": "انڈورا"
    },
    "AE": {
        "message": "متحدہ عرب امارات"
    },
    "AF": {
        "message": "افغانستان"
    },
    "AG": {
        "message": "انٹیگوا اور باربودا"
    },
    "AI": {
        "message": "انگویلا"
    },
    "AL": {
        "message": "البانیا"
    },
    "AM": {
        "message": "آر مینیا"
    },
    "AN": {
        "message": "نیدرلینڈز انٹیلیز"
    },
    "AO": {
        "message": "انگولا"
    },
    "AQ": {
        "message": "انٹار ٹکا"
    },
    "AR": {
        "message": "ارجنٹینا"
    },
    "AS": {
        "message": "امریکی ساموا"
    },
    "AT": {
        "message": "آسٹریا"
    },
    "AU": {
        "message": "آسٹریلیا"
    },
    "AW": {
        "message": "اروبا"
    },
    "AX": {
        "message": "ایلانڈ جزائر"
    },
    "AZ": {
        "message": "آذر بائجان"
    },
    "About": {
        "message": "کے بارے میں"
    },
    "About Hola": {
        "message": "خوش بارے میں"
    },
    "Accelerator": {
        "message": "سرعت"
    },
    "Accelerator is": {
        "message": "مسرع ہے"
    },
    "Access $1 - cool site!": {
        "message": "$1 رسائی - ڈاؤن لوڈ، اتارنا سائٹ!"
    },
    "Access $1?": {
        "message": "$1 تک رسائی حاصل کریں؟"
    },
    "Access any site from any country, free": {
        "message": "مفت، کسی بھی ملک کی طرف سے کوئی ویب سائٹ تک رسائی حاصل کریں"
    },
    "Access cool sites": {
        "message": "رسائی ڈاؤن لوڈ، اتارنا سائٹس"
    },
    "Access more sites": {
        "message": "رسائی زیادہ سائٹس"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "رسائی سائٹس آپ کے ملک میں سنسر اور ہیلو ساتھ آپ کے انٹرنیٹ تیز - مفت!"
    },
    "Accessing $1 with Hola": {
        "message": "ہیلو ساتھ $1 تک رسائی"
    },
    "Account": {
        "message": "اکاؤنٹ"
    },
    "Account type": {
        "message": "اکاؤنٹ کی اقسام"
    },
    "Activating...": {
        "message": "چالو..."
    },
    "All ($1)": {
        "message": "تمام ($1)"
    },
    "Apply settings...": {
        "message": "تراتیب کا اطلاق کریں ..."
    },
    "Author site:": {
        "message": "مصنف سائٹ:"
    },
    "Author:": {
        "message": "مصنف:"
    },
    "Awesome!": {
        "message": "بہت اچھے!"
    },
    "BA": {
        "message": "بوسنیا ہرزگوینا"
    },
    "BB": {
        "message": "بارباڈوس"
    },
    "BD": {
        "message": "بنگلا دیش"
    },
    "BE": {
        "message": "بیلجئیم"
    },
    "BF": {
        "message": "برکینا فاسو"
    },
    "BG": {
        "message": "بلغاریہ"
    },
    "BH": {
        "message": "بحرین"
    },
    "BI": {
        "message": "برنڈی"
    },
    "BJ": {
        "message": "بینن"
    },
    "BL": {
        "message": "سینٹ بارٹحیلیمی"
    },
    "BM": {
        "message": "برمودا"
    },
    "BN": {
        "message": "برونائی"
    },
    "BO": {
        "message": "بولیویا"
    },
    "BQ": {
        "message": "برطانوی انٹارکٹک علاقہ"
    },
    "BR": {
        "message": "برازیل"
    },
    "BS": {
        "message": "باھا ماس"
    },
    "BT": {
        "message": "بھوٹان"
    },
    "BV": {
        "message": "جزیرہ بووٹ"
    },
    "BW": {
        "message": "بوٹسوانا"
    },
    "BY": {
        "message": "بیلا رس"
    },
    "BZ": {
        "message": "بیلیز"
    },
    "Back to $1": {
        "message": "واپس $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "فون / رکن کے لئے خوش حاصل کرنے کے لئے سب سے پہلے ہو - اب کریں"
    },
    "Browsing": {
        "message": "براؤزنگ"
    },
    "Buffering problems?": {
        "message": "بفرن مسائل؟"
    },
    "Buffering?": {
        "message": "بفرن؟"
    },
    "CA": {
        "message": "کینیڈا"
    },
    "CC": {
        "message": "جزائر کوکوز"
    },
    "CD": {
        "message": "کانگو، جمہوری ریاست"
    },
    "CF": {
        "message": "جمہوریہ وسطی افریقہ"
    },
    "CG": {
        "message": "کانگو"
    },
    "CH": {
        "message": "سوئزر لینڈ"
    },
    "CI": {
        "message": "کوت داوواغ"
    },
    "CK": {
        "message": "جزائر کُک"
    },
    "CL": {
        "message": "چلی"
    },
    "CM": {
        "message": "کیمرون"
    },
    "CN": {
        "message": "چین"
    },
    "CO": {
        "message": "کولمبیا"
    },
    "CP": {
        "message": "کلپرٹن آئلینڈ"
    },
    "CR": {
        "message": "کوسٹا ریکا"
    },
    "CS": {
        "message": "سربیا اور مانٹینیگرو"
    },
    "CT": {
        "message": "کینٹن اور انڈربری جزائر"
    },
    "CU": {
        "message": "کیوبا"
    },
    "CV": {
        "message": "کیپ وردے"
    },
    "CX": {
        "message": "جزیرہ کرسمس"
    },
    "CY": {
        "message": "قبرص"
    },
    "CZ": {
        "message": "جمہوریہ چیک"
    },
    "Changing country...": {
        "message": "ملک کو تبدیل کرنے ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 کے لئے خوش چیک کریں!"
    },
    "Check out Hola for mobile devices": {
        "message": "موبائل آلات کے لئے ہیلو چیک کریں"
    },
    "Check your Internet connection": {
        "message": "آپ کو انٹرنیٹ کی توثیق ہے"
    },
    "Choose<br>Country": {
        "message": "انتخاب کریں <br> ملک"
    },
    "Configuring...": {
        "message": "ترتیب ..."
    },
    "Connecting...": {
        "message": "مربوط ..."
    },
    "Cool site!": {
        "message": "ڈاؤن لوڈ، اتارنا سائٹ!"
    },
    "Creative licenses": {
        "message": "تخلیقی لائسنسوں"
    },
    "DD": {
        "message": "مشرقی جرمنی"
    },
    "DE": {
        "message": "جرمنی"
    },
    "DG": {
        "message": "ڈیاگو گارسیا"
    },
    "DJ": {
        "message": "جبوتی"
    },
    "DK": {
        "message": "ڈنمارک"
    },
    "DM": {
        "message": "ڈومینیکا"
    },
    "DO": {
        "message": "ڈومینیکن ریپبلک"
    },
    "DZ": {
        "message": "الجیریا"
    },
    "Delete": {
        "message": "کو حذف کریں"
    },
    "Deleted from my list": {
        "message": "میری لسٹ سے خارج"
    },
    "Did it work?": {
        "message": "یہ کام کیا؟"
    },
    "Did you experience any buffering?": {
        "message": "آپ کو کسی بھی بفرن سامنا کرنا پڑا؟"
    },
    "Disliked it": {
        "message": "ناخوش"
    },
    "Don't show again for $1 for one week": {
        "message": "ایک ہفتے کے لئے $1 کے لئے دوبارہ نہ دکھائیں"
    },
    "Don't show again for any site for one week": {
        "message": "ایک ہفتے کے لئے کسی بھی ویب سائٹ کے لئے دوبارہ نہ دکھائیں"
    },
    "Downloading": {
        "message": "ڈاؤن لوڈ"
    },
    "EA": {
        "message": "سیوٹا اور Melilla"
    },
    "EC": {
        "message": "ایکواڈور"
    },
    "EE": {
        "message": "ایسٹونیا"
    },
    "EG": {
        "message": "مصر"
    },
    "EH": {
        "message": "مغربی صحارا"
    },
    "ER": {
        "message": "اریٹیریا"
    },
    "ES": {
        "message": "سپین"
    },
    "ET": {
        "message": "ایتھوپیا"
    },
    "EU": {
        "message": "یورپی یونین"
    },
    "Enable": {
        "message": "فعال کریں"
    },
    "Enable Hola Accelerator": {
        "message": "خوش سرعت فعال کریں"
    },
    "Enjoy!": {
        "message": "کا لطف اٹھائیں!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "کروم کے لئے ہیلو سے لطف اندوز؟"
    },
    "Enter site to access": {
        "message": "تک رسائی حاصل کرنے کی ویب سائٹ درج کریں"
    },
    "Enter your email": {
        "message": "آپ کا ای میل درج کریں"
    },
    "FI": {
        "message": "فن لینڈ"
    },
    "FJ": {
        "message": "فجی"
    },
    "FK": {
        "message": "جزائر فاک لینڈ"
    },
    "FM": {
        "message": "مائکرونیزیا"
    },
    "FO": {
        "message": "جزائرفارو"
    },
    "FQ": {
        "message": "فرانسیسی جنوبی اور انٹارکٹک علاقوں"
    },
    "FR": {
        "message": "فرانس"
    },
    "FX": {
        "message": "میٹروپولیٹن فرانس"
    },
    "Fast": {
        "message": "فاسٹ"
    },
    "Finding new peers...": {
        "message": "نئے ساتھیوں کی تلاش ..."
    },
    "Finding peers...": {
        "message": "ساتھیوں کی تلاش ..."
    },
    "Free": {
        "message": "مفت"
    },
    "From": {
        "message": "سے"
    },
    "Full list": {
        "message": "مکمل فہرست"
    },
    "GA": {
        "message": "غیبون"
    },
    "GB": {
        "message": "برطانیہ"
    },
    "GD": {
        "message": "گریناڈا"
    },
    "GE": {
        "message": "جارجیا"
    },
    "GF": {
        "message": "فرانسیسی گی آنا"
    },
    "GG": {
        "message": "گرنزی"
    },
    "GH": {
        "message": "گھانا"
    },
    "GI": {
        "message": "جبل الطارق"
    },
    "GL": {
        "message": "گرین لینڈ"
    },
    "GM": {
        "message": "گیمبیا"
    },
    "GN": {
        "message": "گنی"
    },
    "GP": {
        "message": "گواڈیلوپ"
    },
    "GQ": {
        "message": "استوائی گنی"
    },
    "GR": {
        "message": "یونان"
    },
    "GS": {
        "message": "جنوبی جارجیا اور جزائر جنوبی سینڈوچ"
    },
    "GT": {
        "message": "گوئٹے مالا"
    },
    "GU": {
        "message": "گوام"
    },
    "GW": {
        "message": "گنی بسائو"
    },
    "GY": {
        "message": "گیانا"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 غیر مسدود ہو جاؤ"
    },
    "Get Free Premium": {
        "message": "مفت پریمیم حاصل کریں"
    },
    "Get Hola Accelerator": {
        "message": "خوش سرعت حاصل کریں"
    },
    "Get Hola Player": {
        "message": "ملتا ہیلو پلیئر"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "غیر خلل پیدا ہوگیا، اشتھار مفت کی خدمت کے لئے Hola پلس حاصل کریں."
    },
    "Get Hola Premium": {
        "message": "خوش پریمیم حاصل کریں"
    },
    "Get Hola for Android": {
        "message": "لوڈ، اتارنا Android کے لئے خوش ہو جاؤ"
    },
    "Get Premium support": {
        "message": "پریمیم کی حمایت حاصل"
    },
    "Get Unlimited Unblocking": {
        "message": "لا محدود مسدود ہو جاؤ"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "، سنسر سائٹس تک رسائی حاصل کریں اسے ابھی آزمائیں: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "اسکائپ سے زائد انجینئر سے مدد حاصل:"
    },
    "Get the Fastest Servers": {
        "message": "سب سے تیزی سے سرور حاصل کریں"
    },
    "Go": {
        "message": "جائیں"
    },
    "Go Hola Premium": {
        "message": "جاؤ خوش پریمیم"
    },
    "HK": {
        "message": "ہانگ کانگ SAR چین"
    },
    "HM": {
        "message": "جزیرہ ہرڈ اور جزائر مکڈونلڈ"
    },
    "HN": {
        "message": "ہونڈوراس"
    },
    "HR": {
        "message": "کروشیا"
    },
    "HT": {
        "message": "ہائٹی"
    },
    "HU": {
        "message": "ہنگری"
    },
    "Hate it": {
        "message": "اس سے نفرت"
    },
    "Help": {
        "message": "مدد"
    },
    "Hey,\n\nI'm using": {
        "message": "ارے،\n\nمیں استعمال کر رہا ہوں"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "ہیلو،\n\nمیں $1 ($2) کا استعمال کرتے ہوئے شروع کر دیا. یہ میرے تیزی سے انٹرنیٹ سرف اور اپنے ملک میں $3 تک رسائی کی اجازت دیتا ہے."
    },
    "Hola": {
        "message": "خوش"
    },
    "Hola Accelerator": {
        "message": "خوش سرعت"
    },
    "Hola Media Player": {
        "message": "ہیلو میڈیا پلیئر"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "ایک اور توسیع آپ پراکسی ترتیبات کو کنٹرول ہے کیونکہ خوش کام نہیں کر سکتے."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ونڈوز 8 موڈ میں اچھی طرح سے کام نہیں کرتا. ڈیسک ٹاپ کے انداز پر تبدیل کریں. ہدایات کے لیے <a> یہاں </a> پر کلک کریں"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "ہیلو اب دستیاب نہیں ہے، لیکن ہم اس پر کام کر رہے ہیں."
    },
    "Hola is off, click it to turn it on": {
        "message": "ہیلو بند ہے، پر تبدیل کرنے کے لئے کلک کریں"
    },
    "Hola site list": {
        "message": "Hola سائٹ کی فہرست"
    },
    "I can now access $1 from any country!": {
        "message": "اب میں کسی بھی ملک سے $1 تک رسائی حاصل کر سکتے ہیں!"
    },
    "I did not experience any buffering": {
        "message": "میں کسی بھی بفرن کا تجربہ نہیں کیا"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "میں صرف $1 کے لئے خوش کا استعمال کرتے ہوئے سنسر سائٹ تک رسائی حاصل!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "میں نے اپنے ملک میں $2 کو دیکھنے کے لئے $1 کو استعمال کرتے ہوئے، اور تیزی سے سرف کر رہا ہوں!"
    },
    "IC": {
        "message": "کینری جزائر"
    },
    "ID": {
        "message": "انڈونیشیا"
    },
    "IE": {
        "message": "آئر لینڈ"
    },
    "IL": {
        "message": "اسرائیل"
    },
    "IM": {
        "message": "آئل آف مین"
    },
    "IN": {
        "message": "بھارت"
    },
    "IO": {
        "message": "بحرھند کا برٹش علاقہ"
    },
    "IQ": {
        "message": "عراق"
    },
    "IR": {
        "message": "ایران"
    },
    "IS": {
        "message": "آئس لینڈ"
    },
    "IT": {
        "message": "اٹلی"
    },
    "Improve translation": {
        "message": "ترجمہ کو بہتر بنانے کے"
    },
    "Initializing...": {
        "message": "ابتدا ..."
    },
    "Install": {
        "message": "انسٹال"
    },
    "Install Accelerator": {
        "message": "سرعت انسٹال"
    },
    "Install Free Hola Accelerator": {
        "message": "مفت خوش سرعت انسٹال"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "مفت کے لئے ہیلو استعمال کرنا جاری رکھنا ہیلو انجن نصب"
    },
    "Instantly watch any torrent Video": {
        "message": "فوری طور پر کسی بھی سیلاب ویڈیو دیکھیں"
    },
    "Invite friends - free Premium.": {
        "message": "دوستوں کو مدعو کریں - مفت پریمیم."
    },
    "Invite friends. Get Premium.": {
        "message": "دوستوں کو مدعو کریں. پریمیم حاصل کریں."
    },
    "It was okay": {
        "message": "یہ ٹھیک تھا"
    },
    "JE": {
        "message": "جرسی"
    },
    "JM": {
        "message": "جمیکا"
    },
    "JO": {
        "message": "اردن"
    },
    "JP": {
        "message": "جاپان"
    },
    "JT": {
        "message": "جانسٹن جزیرہ"
    },
    "KE": {
        "message": "کینیا"
    },
    "KG": {
        "message": "کرغستان"
    },
    "KH": {
        "message": "کمبوڈیا"
    },
    "KI": {
        "message": "کِرباتی"
    },
    "KM": {
        "message": "کوموروس"
    },
    "KN": {
        "message": "سینٹ کٹس اور نیوس"
    },
    "KP": {
        "message": "شمالی کوریا"
    },
    "KR": {
        "message": "جنوبی کوریا"
    },
    "KW": {
        "message": "کویت"
    },
    "KY": {
        "message": "جزائر کیمن"
    },
    "KZ": {
        "message": "قزاقستان"
    },
    "LA": {
        "message": "لاؤس"
    },
    "LB": {
        "message": "لبنان"
    },
    "LC": {
        "message": "سینٹ لوسیا"
    },
    "LI": {
        "message": "لکٹنسٹائن"
    },
    "LK": {
        "message": "سری لنکا"
    },
    "LR": {
        "message": "لائبیریا"
    },
    "LS": {
        "message": "لیسوتھو"
    },
    "LT": {
        "message": "لتھوانیا"
    },
    "LU": {
        "message": "لکسمبرگ"
    },
    "LV": {
        "message": "لٹوِیا"
    },
    "LY": {
        "message": "لیبیا"
    },
    "Language": {
        "message": "زبان"
    },
    "Library": {
        "message": "لائبریری"
    },
    "Like it": {
        "message": "اس کی طرح"
    },
    "Loading": {
        "message": "لوڈ کر رہا ہے"
    },
    "Loading site...": {
        "message": "لوڈ کر رہا ہے"
    },
    "Log in": {
        "message": "میں لاگ ان کریں"
    },
    "Log out": {
        "message": "باہر لاگ ان کریں"
    },
    "Love Hola?": {
        "message": "خوش پسند ہے؟"
    },
    "Love it": {
        "message": "اس سے محبت"
    },
    "MA": {
        "message": "مراکش"
    },
    "MC": {
        "message": "موناکو"
    },
    "MD": {
        "message": "مالدووا"
    },
    "ME": {
        "message": "مونٹینیگرو"
    },
    "MF": {
        "message": "سینٹ مارٹن"
    },
    "MG": {
        "message": "مڈغاسکر"
    },
    "MH": {
        "message": "جزائر مارشل"
    },
    "MI": {
        "message": "مڈوے جزائر"
    },
    "MK": {
        "message": "مقدونیہ"
    },
    "ML": {
        "message": "مالی"
    },
    "MM": {
        "message": "میانمر"
    },
    "MN": {
        "message": "منگولیا"
    },
    "MO": {
        "message": "ماکاؤ"
    },
    "MP": {
        "message": "شمالی ماریاناجزائر"
    },
    "MQ": {
        "message": "مارٹنیک"
    },
    "MR": {
        "message": "موریطانیہ"
    },
    "MS": {
        "message": "مانٹسریٹ"
    },
    "MT": {
        "message": "مالٹا"
    },
    "MU": {
        "message": "ماریشس"
    },
    "MV": {
        "message": "مالدیپ"
    },
    "MW": {
        "message": "ملاوی"
    },
    "MX": {
        "message": "میکسیکو"
    },
    "MY": {
        "message": "ملائیشیا"
    },
    "MZ": {
        "message": "موزنبیق"
    },
    "Make your Internet better with $1": {
        "message": "بنائیں آپ کے انٹرنیٹ بہتر کے ساتھ $1"
    },
    "Menu": {
        "message": "مینو"
    },
    "Might not work on all sites": {
        "message": "تمام سائٹس پر کام نہیں کر سکتے"
    },
    "Mode": {
        "message": "کے موڈ"
    },
    "More countries": {
        "message": "ممالک"
    },
    "More sites...": {
        "message": "مزید ..."
    },
    "More...": {
        "message": "مزید ..."
    },
    "My Account": {
        "message": "میرا اکاؤنٹ"
    },
    "My History": {
        "message": "میری تاریخ"
    },
    "My Settings": {
        "message": "میری ترتیبات"
    },
    "My favorites": {
        "message": "میری پسند"
    },
    "NA": {
        "message": "نمیبیا"
    },
    "NC": {
        "message": "نیو کیلیڈونیا"
    },
    "NE": {
        "message": "نائیجر"
    },
    "NF": {
        "message": "جزیرہ نارفولک"
    },
    "NG": {
        "message": "نائیجیریا"
    },
    "NI": {
        "message": "نکاراگوا"
    },
    "NL": {
        "message": "نیدرلینڈ"
    },
    "NO": {
        "message": "ناروے"
    },
    "NP": {
        "message": "نیپال"
    },
    "NQ": {
        "message": "Dronning Maud لینڈ"
    },
    "NR": {
        "message": "ناورو"
    },
    "NT": {
        "message": "غیر جانبدار زون"
    },
    "NU": {
        "message": "نیووے"
    },
    "NZ": {
        "message": "نیوزی لینڈ"
    },
    "Need Help?": {
        "message": "مدد کی ضرورت ہے؟"
    },
    "Netflix": {
        "message": "Netflix کے"
    },
    "Never ask me again": {
        "message": "پھر مجھ سے پوچھیں کبھی نہیں"
    },
    "Never be a peer": {
        "message": "ایک ہم مرتبہ نہیں ہو"
    },
    "No": {
        "message": "کوئی"
    },
    "No idle peers found.": {
        "message": "کوئی بیکار ساتھیوں پایا."
    },
    "No recent videos found": {
        "message": "کوئی حالیہ ویڈیوز نہیں ملے"
    },
    "No saved videos found": {
        "message": "کوئی بچایا ویڈیوز نہیں ملے"
    },
    "No title": {
        "message": "بلا عنوان"
    },
    "No videos found": {
        "message": "کوئی ویڈیوز نہیں ملے"
    },
    "No videos found on active page": {
        "message": "فعال صفحے پر پایا کوئی ویڈیوز"
    },
    "No, Thanks": {
        "message": "نہیں، شکریہ"
    },
    "No, fix it": {
        "message": "نہیں، یہ ٹھیک"
    },
    "Not working?": {
        "message": "کام نہیں کر رہا؟"
    },
    "Number of users that pressed not working": {
        "message": "کام نہیں کر رہا پر زور دیا ہے کہ صارفین کی تعداد"
    },
    "Number of users that use this option": {
        "message": "اس اختیار کو استعمال کرنے والے صارفین کی تعداد"
    },
    "OM": {
        "message": "عمان"
    },
    "Off": {
        "message": "بند"
    },
    "Oh, yes!": {
        "message": "جی ہاں، اوہ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "فائر فاکس کے پرانے ورژن. پریس <a> یہاں </a> کو اپ گریڈ کرنے کے لئے."
    },
    "On": {
        "message": "پر"
    },
    "Open Media Player": {
        "message": "کھولیں میڈیا پلیئر"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "ہمارے نئے برانڈ MPLAYER جلد ہی آ رہا ہے!"
    },
    "PA": {
        "message": "پانامہ"
    },
    "PC": {
        "message": "پیسفک جزائر ٹرسٹ علاقہ"
    },
    "PE": {
        "message": "پیرو"
    },
    "PF": {
        "message": "فرانسیسی پولینیسیا"
    },
    "PG": {
        "message": "پاپوا نیو گنی"
    },
    "PH": {
        "message": "فلپائن"
    },
    "PK": {
        "message": "پاکستان"
    },
    "PL": {
        "message": "پولینڈ"
    },
    "PM": {
        "message": "سینٹ پائرے اور میکویلون"
    },
    "PN": {
        "message": "جزائر پٹکیرن"
    },
    "PR": {
        "message": "پورٹو ریکو"
    },
    "PS": {
        "message": "فلسطین"
    },
    "PT": {
        "message": "پرتگال"
    },
    "PU": {
        "message": "امریکی متفرق پیسفک جزائر"
    },
    "PW": {
        "message": "پلاؤ"
    },
    "PY": {
        "message": "پیراگوئے"
    },
    "PZ": {
        "message": "پانامہ نہر زون"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "آپ وغیرہ اشتھار blockers کے، دیگر وی پی این خدمات، کے طور پر آپ پراکسی ترتیبات کو کنٹرول کر سکتے ہیں لگتا ہے کہ دوسرے <a>ملانے</a> کے غیر فعال براہ مہربانی"
    },
    "Please enter a valid email address.": {
        "message": "ایک درست ای میل ایڈریس درج کریں."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "facebook.com کی طرح، ایک ویب سائٹ ایڈریس درج کریں"
    },
    "Please help us get better": {
        "message": "ہمیں بہتر حاصل کرنے میں مدد کریں براہ مہربانی"
    },
    "Popular in $1": {
        "message": "ڈاؤن لوڈ، اتارنا میں $1"
    },
    "Popular in the world": {
        "message": "دنیا میں مقبول"
    },
    "Popular sites": {
        "message": "مقبول سائٹس"
    },
    "Premium": {
        "message": "پریمیم"
    },
    "QA": {
        "message": "قطر"
    },
    "QO": {
        "message": "بیرونی وشنیا"
    },
    "RE": {
        "message": "غے یونیوں"
    },
    "RO": {
        "message": "رومانیہ"
    },
    "RS": {
        "message": "سربیا"
    },
    "RU": {
        "message": "روس"
    },
    "RW": {
        "message": "روانڈا"
    },
    "Rate us": {
        "message": "ہمیں شرح"
    },
    "Recent Videos": {
        "message": "تازہ ترین ویڈیوز"
    },
    "Reload": {
        "message": "دوبارہ لوڈ کریں"
    },
    "Reload Hola": {
        "message": "Hola کو دوبارہ لوڈ کریں"
    },
    "Remember server": {
        "message": "سرور یاد رکھیں"
    },
    "Report a problem": {
        "message": "ایک مسئلہ رپورٹ"
    },
    "Retry safe mode": {
        "message": "محفوظ موڈ دوبارہ کوشش کریں"
    },
    "SA": {
        "message": "سعودی عرب"
    },
    "SB": {
        "message": "جزائرسولمون"
    },
    "SC": {
        "message": "سے شلز"
    },
    "SD": {
        "message": "سوڈان"
    },
    "SE": {
        "message": "سویڈن"
    },
    "SG": {
        "message": "سنگاپور"
    },
    "SH": {
        "message": "سینٹ ھیلینا"
    },
    "SI": {
        "message": "سلوانیہ"
    },
    "SJ": {
        "message": "سوالبارڈ اور جان میئن"
    },
    "SK": {
        "message": "سلوواکیہ"
    },
    "SL": {
        "message": "سیرالیون"
    },
    "SM": {
        "message": "سان میرینو"
    },
    "SN": {
        "message": "سینیگال"
    },
    "SO": {
        "message": "صوپالیہ"
    },
    "SR": {
        "message": "سورینام"
    },
    "ST": {
        "message": "ساؤ ٹوم اور پرنسپے"
    },
    "SU": {
        "message": "یونین سوویت سوشلسٹ جمہوریہ کے"
    },
    "SV": {
        "message": "ال سلواڈور"
    },
    "SY": {
        "message": "سیریا"
    },
    "SZ": {
        "message": "سوازی لینڈ"
    },
    "Safe": {
        "message": "محفوظ"
    },
    "Safe mode": {
        "message": "محفوظ طریقہ"
    },
    "Save": {
        "message": "محفوظ کریں"
    },
    "Saved Videos": {
        "message": "محفوظ کردہ ویڈیوز"
    },
    "Saved for later": {
        "message": "بعد کے لئے محفوظ کر لیا"
    },
    "Search video title": {
        "message": "تلاش ویڈیو عنوان"
    },
    "Select a Country": {
        "message": "ایک ملک منتخب کریں"
    },
    "Select site to unblock": {
        "message": "کھوال سائٹ کریں"
    },
    "Server saved!": {
        "message": "سرور بچا لیا!"
    },
    "Set safe mode for $1 $2": {
        "message": "سیٹ محفوظ موڈ $1 کے لئے $2"
    },
    "Settings": {
        "message": "ترتیبات"
    },
    "Share": {
        "message": "سیکنڈ اور"
    },
    "Share $1 on $2": {
        "message": "$2 $1 اشتراک"
    },
    "Share $1 via $2": {
        "message": "$2 کے ذریعے $1 اشتراک"
    },
    "Share with friends!": {
        "message": "دوستوں کے ساتھ اشتراک کریں!"
    },
    "Sign up": {
        "message": "سائن اپ کریں"
    },
    "Solve buffering": {
        "message": "بفرن حل"
    },
    "Solve buffering problems with": {
        "message": "ساتھ بفرن مسائل کے حل"
    },
    "Solves it": {
        "message": "یہ حل کرتی ہے"
    },
    "Staff Picks": {
        "message": "اسٹاف چنتا ہے"
    },
    "Start Hola": {
        "message": "شروع کریں"
    },
    "Starting...": {
        "message": "شروع ہورہا ہے ..."
    },
    "Stop Hola": {
        "message": "بند کرو خوش"
    },
    "Stopping peer routing...": {
        "message": "ہم مرتبہ روٹنگ روکنا ..."
    },
    "Stream": {
        "message": "ندی"
    },
    "Stream Instantly": {
        "message": "فوری طور پر ندی"
    },
    "Submit": {
        "message": "جمع کرائیں"
    },
    "Support Hola": {
        "message": "سپورٹ خوش"
    },
    "TA": {
        "message": "ٹریستان"
    },
    "TC": {
        "message": "جزائر کیکس اور ترکیّہ"
    },
    "TD": {
        "message": "چاڈ"
    },
    "TF": {
        "message": "جنوبی فرانسیسی علاقہ جات"
    },
    "TG": {
        "message": "ٹوگو"
    },
    "TH": {
        "message": "تھائی لینڈ"
    },
    "TJ": {
        "message": "تاجکستان"
    },
    "TK": {
        "message": "ٹوکیلاؤ"
    },
    "TL": {
        "message": "مشرقی تیمور"
    },
    "TM": {
        "message": "ترکمانستان"
    },
    "TN": {
        "message": "تیونس"
    },
    "TO": {
        "message": "تونگا"
    },
    "TR": {
        "message": "ترکی"
    },
    "TT": {
        "message": "ٹرینیڈاڈ اور ٹوباگو"
    },
    "TV": {
        "message": "ٹوالو"
    },
    "TW": {
        "message": "تائیوان"
    },
    "TZ": {
        "message": "تنزانیہ"
    },
    "Talk to us on $1": {
        "message": "$1 پر ہم سے بات کریں"
    },
    "Tell friends about $1": {
        "message": "دوستوں کے بارے میں $1 کو بتائیں"
    },
    "Testing connection...": {
        "message": "ٹیسٹنگ کنکشن ..."
    },
    "Thank you!": {
        "message": "آپ کا شکریہ!"
    },
    "There seems to be an error": {
        "message": "ایک خرابی نہیں ہے"
    },
    "Top popular sites": {
        "message": "اوپر ڈاؤن لوڈ، اتارنا سائٹس"
    },
    "Translate to your language": {
        "message": "آپ کی زبان کا ترجمہ کرنے کے لئے"
    },
    "Try again": {
        "message": "دوبارہ کوشش کریں"
    },
    "Try another server": {
        "message": "کسی دوسرے سرور کی کوشش کریں"
    },
    "Try it": {
        "message": "یہ کرنے کی کوشش"
    },
    "Try safe mode": {
        "message": "محفوظ موڈ کوشش"
    },
    "Try to <span>reload</span>": {
        "message": "<span> دوبارہ لوڈ </span> میں کرنے کی کوشش کریں"
    },
    "Trying another peer...": {
        "message": "ایک اور ہم مرتبہ کی کوشش کر رہے ..."
    },
    "Turn off Accelerator": {
        "message": "سرعت کو بند کر دیں"
    },
    "Turn off Hola": {
        "message": "ہیلو بند کریں"
    },
    "Turn on Accelerator": {
        "message": "مسرع پر بند کر دیں"
    },
    "Turn on Hola": {
        "message": "خوش پر بند کر دیں"
    },
    "Turn on to get started": {
        "message": "شروع کرنے کے لئے کو چالو کریں"
    },
    "UA": {
        "message": "یوکرائن"
    },
    "UG": {
        "message": "یوگنڈا"
    },
    "UM": {
        "message": "ریاست ہائے متحدہ اور بیرونی جزائر"
    },
    "US": {
        "message": "ریاست ہائے متحدہ امریکا"
    },
    "UY": {
        "message": "ہوراگوئے"
    },
    "UZ": {
        "message": "ازبکستان"
    },
    "Unblocker is disabled": {
        "message": "Unblocker غیر فعال ہے"
    },
    "Unblocker?": {
        "message": "Unblocker؟"
    },
    "Update": {
        "message": "اپ ڈیٹ کریں"
    },
    "Upgrade": {
        "message": "اپ ڈیٹ کریں"
    },
    "Using": {
        "message": "کا استعمال کرتے ہوئے"
    },
    "Using Hola": {
        "message": "خوش استعمال کرتے ہوئے"
    },
    "VA": {
        "message": "ویٹیکن سٹی"
    },
    "VC": {
        "message": "سینٹ کیرن اور گریناڈائنز"
    },
    "VD": {
        "message": "شمالی ویت نام"
    },
    "VE": {
        "message": "وینزولا"
    },
    "VG": {
        "message": "جزائر ورجن، برٹش"
    },
    "VI": {
        "message": "جزائر ورجن، امریکہ"
    },
    "VN": {
        "message": "ویت نام"
    },
    "VPN": {
        "message": "وی پی این"
    },
    "VPN Premium": {
        "message": "وی پی این پریمیم"
    },
    "VU": {
        "message": "وانواٹو"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "کروم کے بہت پرانے ورژن، <a> اپ ڈیٹ کریں </a> کروم Hola استعمال کرنے کے لئے"
    },
    "Video": {
        "message": "ویڈیو"
    },
    "Video stuck?": {
        "message": "ویڈیو پھنس گئے؟"
    },
    "Videos available for instant streaming": {
        "message": "فوری طور پر محرومی کے لئے دستیاب انگیز ویڈیوز"
    },
    "WF": {
        "message": "والس اور فتونہ"
    },
    "WK": {
        "message": "جزیرہ جاگو"
    },
    "WS": {
        "message": "ساموا"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "دوسرے آلات پر Hola چاہتے ہیں؟ (ایکس بکس، پی ایس، ایپل ٹی وی، فون ...). یہاں کلک کریں"
    },
    "Want to know more?": {
        "message": "مزید جاننے کے لئے چاہتے ہیں؟"
    },
    "Watch Now": {
        "message": "اب دیکھیئے"
    },
    "We found $1 videos": {
        "message": "ہم نے محسوس $1 ویڈیوز"
    },
    "We will be in touch with you soon": {
        "message": "ہم جلد ہی آپ کے ساتھ رابطے میں ہو جائے گا"
    },
    "Working!": {
        "message": "کام کر رہے ہیں!"
    },
    "Working?": {
        "message": "کام کر رہے ہیں؟"
    },
    "Works on all sites but slower": {
        "message": "تمام سائٹس لیکن سست پر کام کرتا ہے"
    },
    "YD": {
        "message": "یمن کی پیپلز جمہوریہ"
    },
    "YE": {
        "message": "یمن"
    },
    "YT": {
        "message": "مایوٹ"
    },
    "Yes": {
        "message": "جی ہاں"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "آپ خوش استعمال کرنے کے لئے اوپرا کا تازہ ترین ورژن پر اپ گریڈ کرنے کی ضرورت ہے. دبائیں <a>یہاں</a> اپ گریڈ کرنے."
    },
    "Youtube": {
        "message": "یو ٹیوب"
    },
    "ZA": {
        "message": "جنوبی افریقہ"
    },
    "ZM": {
        "message": "زیمبیا"
    },
    "ZW": {
        "message": "زمبابوے"
    },
    "ZZ": {
        "message": "نامعلوم یا غلط ریجن"
    },
    "app_desc": {
        "message": "آپ کے ملک، کمپنی یا خوش کے ساتھ اسکول میں بلاک تک رسائی کی ویب سائٹ! خوش مفت اور استعمال میں آسان ہے!"
    },
    "app_name": {
        "message": "Hola بہتر انٹرنیٹ"
    },
    "back to": {
        "message": "پر واپس"
    },
    "changing...": {
        "message": "بدلتے ہوئے ..."
    },
    "cool sites": {
        "message": "ڈاؤن لوڈ، اتارنا سائٹس"
    },
    "current site": {
        "message": "موجودہ ویب سائٹ"
    },
    "day": {
        "message": "دن"
    },
    "days": {
        "message": "دن"
    },
    "even more...": {
        "message": "اس سے بھی زیادہ ..."
    },
    "mode": {
        "message": "موڈ"
    },
    "more options...": {
        "message": "مزید اختیارات ..."
    },
    "not working?": {
        "message": "کام نہیں کر رہا؟"
    },
    "not working? try another server": {
        "message": "کام نہیں کر رہا؟ کسی دوسرے سرور کی کوشش"
    },
    "on this page": {
        "message": "اس صفحہ پر"
    },
    "sites that are censored": {
        "message": "سنسر کر رہے ہیں کہ سائٹس"
    },
    "start": {
        "message": "شروع کریں"
    },
    "working? remember": {
        "message": "کام کر رہے ہیں؟ یاد ہے"
    }
};
return E; });