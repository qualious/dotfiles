'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "از طریق"
    },
    "$1 Buffering?": {
        "message": "$1 بافری؟"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 سلام برای دسترسی به $2\n\nاینجا را کلیک کنید برای انجام همان: $3\n\nنصب سلام، که اجازه می دهد به من گشت و گذار در اینترنت سریع تر و دسترسی به $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN حق بیمه"
    },
    "$1 from $2": {
        "message": "$1 از $2"
    },
    "$1 not found": {
        "message": "$1 یافت نشد"
    },
    "$1 via Hola": {
        "message": "$1 را از طریق سلام"
    },
    "(some Hola features are not available on your version)": {
        "message": "(بعضی از ویژگی های هولا نمیتوانند کامل شوند به خاطر ورژن موجود)"
    },
    "AC": {
        "message": "جزیره معراج"
    },
    "AD": {
        "message": "آندورا"
    },
    "AE": {
        "message": "امارات متحدهٔ عربی"
    },
    "AF": {
        "message": "افغانستان"
    },
    "AG": {
        "message": "آنتیگوا و باربودا"
    },
    "AI": {
        "message": "آنگیل"
    },
    "AL": {
        "message": "آلبانی"
    },
    "AM": {
        "message": "ارمنستان"
    },
    "AN": {
        "message": "آنتیل هلند"
    },
    "AO": {
        "message": "آنگولا"
    },
    "AQ": {
        "message": "جنوبگان"
    },
    "AR": {
        "message": "آرژانتین"
    },
    "AS": {
        "message": "ساموای امریکا"
    },
    "AT": {
        "message": "اتریش"
    },
    "AU": {
        "message": "استرالیا"
    },
    "AW": {
        "message": "آروبا"
    },
    "AX": {
        "message": "جزایر آلاند"
    },
    "AZ": {
        "message": "جمهوری آذربایجان"
    },
    "About": {
        "message": "در باره"
    },
    "About Hola": {
        "message": "درباره سلام"
    },
    "Accelerator": {
        "message": "شتاب دهنده"
    },
    "Accelerator is": {
        "message": "شتاب دهنده است"
    },
    "Access $1 - cool site!": {
        "message": "دسترسی $1 - سایت باحال!"
    },
    "Access $1?": {
        "message": "دسترسی $1؟"
    },
    "Access any site from any country, free": {
        "message": "دسترسی به هر سایتی از هر کشوری، مجانی"
    },
    "Access cool sites": {
        "message": "دسترسی به سایت های خنک"
    },
    "Access more sites": {
        "message": "دسترسی به سایت های"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "سایت های دسترسی در کشور شما سانسور و سرعت بخشیدن به اینترنت خود را با سلام - رایگان است!"
    },
    "Accessing $1 with Hola": {
        "message": "دسترسی $1 با سلام"
    },
    "Account": {
        "message": "حساب"
    },
    "Account type": {
        "message": "نوع حساب"
    },
    "Activating...": {
        "message": "فعالسازی..."
    },
    "All ($1)": {
        "message": "همه ($1)"
    },
    "Apply settings...": {
        "message": "درخواست تنظیمات ..."
    },
    "Author site:": {
        "message": "سایت نویسنده:"
    },
    "Author:": {
        "message": "نویسنده:"
    },
    "Awesome!": {
        "message": "عالی!"
    },
    "BA": {
        "message": "بوسنی و هرزگوین"
    },
    "BB": {
        "message": "باربادوس"
    },
    "BD": {
        "message": "بنگلادش"
    },
    "BE": {
        "message": "بلژیک"
    },
    "BF": {
        "message": "بورکینافاسو"
    },
    "BG": {
        "message": "بلغارستان"
    },
    "BH": {
        "message": "بحرین"
    },
    "BI": {
        "message": "بوروندی"
    },
    "BJ": {
        "message": "بنین"
    },
    "BL": {
        "message": "سنت بارتلیمی"
    },
    "BM": {
        "message": "برمودا"
    },
    "BN": {
        "message": "برونئی"
    },
    "BO": {
        "message": "بولیوی"
    },
    "BQ": {
        "message": "قطب جنوب قلمرو بریتانیا"
    },
    "BR": {
        "message": "برزیل"
    },
    "BS": {
        "message": "باهاما"
    },
    "BT": {
        "message": "بوتان"
    },
    "BV": {
        "message": "جزیرهٔ بووت"
    },
    "BW": {
        "message": "بوتسوانا"
    },
    "BY": {
        "message": "بیلوروسی"
    },
    "BZ": {
        "message": "بلیز"
    },
    "Back to $1": {
        "message": "برگشت به $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "برای اولین بار به دریافت سلام برای آیفون / آی پد باشید - در حال حاضر ثبت نام:"
    },
    "Browsing": {
        "message": "مرور"
    },
    "Buffering problems?": {
        "message": "مشکلات بافری؟"
    },
    "Buffering?": {
        "message": "بافری؟"
    },
    "CA": {
        "message": "کانادا"
    },
    "CC": {
        "message": "جزایر کوکوس"
    },
    "CD": {
        "message": "کنگو کینشاسا"
    },
    "CF": {
        "message": "جمهوری افریقای مرکزی"
    },
    "CG": {
        "message": "کنگو برازویل"
    },
    "CH": {
        "message": "سوئیس"
    },
    "CI": {
        "message": "ساحل عاج"
    },
    "CK": {
        "message": "جزایر کوک"
    },
    "CL": {
        "message": "شیلی"
    },
    "CM": {
        "message": "کامرون"
    },
    "CN": {
        "message": "چین"
    },
    "CO": {
        "message": "کلمبیا"
    },
    "CP": {
        "message": "جزیره کلیپرتون"
    },
    "CR": {
        "message": "کاستاریکا"
    },
    "CS": {
        "message": "صربستان و مونته‌نگرو"
    },
    "CT": {
        "message": "کانتون و جزایر اندربری"
    },
    "CU": {
        "message": "کوبا"
    },
    "CV": {
        "message": "کیپ ورد"
    },
    "CX": {
        "message": "جزیرهٔ کریسمس"
    },
    "CY": {
        "message": "قبرس"
    },
    "CZ": {
        "message": "جمهوری چک"
    },
    "Changing country...": {
        "message": "تغییر کشور ..."
    },
    "Check out Hola for $1!": {
        "message": "بررسی کنید سلام برای $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "اتمام سلام برای دستگاه های تلفن همراه"
    },
    "Check your Internet connection": {
        "message": "مطمئن شوید که اینترنت شما متصل است"
    },
    "Choose<br>Country": {
        "message": "را انتخاب کنید <br> کشور"
    },
    "Configuring...": {
        "message": "پیکربندی ..."
    },
    "Connecting...": {
        "message": "اتصال ..."
    },
    "Cool site!": {
        "message": "سایت دانلود!"
    },
    "Creative licenses": {
        "message": "مجوز خلاق"
    },
    "DD": {
        "message": "شرق آلمان"
    },
    "DE": {
        "message": "آلمان"
    },
    "DG": {
        "message": "دیگو گارسیا"
    },
    "DJ": {
        "message": "جیبوتی"
    },
    "DK": {
        "message": "دانمارک"
    },
    "DM": {
        "message": "دومینیک"
    },
    "DO": {
        "message": "جمهوری دومینیکن"
    },
    "DZ": {
        "message": "الجزایر"
    },
    "Delete": {
        "message": "حذف کردن"
    },
    "Deleted from my list": {
        "message": "حذف از لیست من"
    },
    "Did it work?": {
        "message": "آیا کار می کند؟"
    },
    "Did you experience any buffering?": {
        "message": "آیا هر بافر شما تجربه؟"
    },
    "Disliked it": {
        "message": "آن را دوست نداشت"
    },
    "Don't show again for $1 for one week": {
        "message": "آیا برای $1 برای یک هفته دوباره نشان داده نشود"
    },
    "Don't show again for any site for one week": {
        "message": "آیا برای هر سایت به مدت یک هفته را نشان نمی دهد دوباره"
    },
    "Downloading": {
        "message": "دانلود"
    },
    "EA": {
        "message": "سبته و ملیله"
    },
    "EC": {
        "message": "اکوادر"
    },
    "EE": {
        "message": "استونی"
    },
    "EG": {
        "message": "مصر"
    },
    "EH": {
        "message": "صحرای غربی"
    },
    "ER": {
        "message": "اریتره"
    },
    "ES": {
        "message": "اسپانیا"
    },
    "ET": {
        "message": "اتیوپی"
    },
    "EU": {
        "message": "اتحادیه اروپا"
    },
    "Enable": {
        "message": "فعال"
    },
    "Enable Hola Accelerator": {
        "message": "فعال کردن سلام کارت"
    },
    "Enjoy!": {
        "message": "لذت بردن از!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "با بهره گیری از سلام برای کروم؟"
    },
    "Enter site to access": {
        "message": "سایت را وارد کنید تا دسترسی"
    },
    "Enter your email": {
        "message": "ایمیل خود را وارد"
    },
    "FI": {
        "message": "فنلاند"
    },
    "FJ": {
        "message": "فیجی"
    },
    "FK": {
        "message": "جزایر فالکلند"
    },
    "FM": {
        "message": "میکرونزی"
    },
    "FO": {
        "message": "جزایر فارو"
    },
    "FQ": {
        "message": "جنوب فرانسه و نواحی قطب"
    },
    "FR": {
        "message": "فرانسه"
    },
    "FX": {
        "message": "شهری فرانسه"
    },
    "Fast": {
        "message": "سریع"
    },
    "Finding new peers...": {
        "message": "پیدا کردن دوستان جدید ..."
    },
    "Finding peers...": {
        "message": "پیدا کردن دوستان ..."
    },
    "Free": {
        "message": "رایگان"
    },
    "From": {
        "message": "از"
    },
    "Full list": {
        "message": "فهرست کامل"
    },
    "GA": {
        "message": "گابون"
    },
    "GB": {
        "message": "بریتانیا"
    },
    "GD": {
        "message": "گرانادا"
    },
    "GE": {
        "message": "گرجستان"
    },
    "GF": {
        "message": "گویان فرانسه"
    },
    "GG": {
        "message": "گرنزی"
    },
    "GH": {
        "message": "غنا"
    },
    "GI": {
        "message": "جبل‌الطارق"
    },
    "GL": {
        "message": "گروئنلند"
    },
    "GM": {
        "message": "گامبیا"
    },
    "GN": {
        "message": "گینه"
    },
    "GP": {
        "message": "گوادلوپ"
    },
    "GQ": {
        "message": "گینهٔ استوایی"
    },
    "GR": {
        "message": "یونان"
    },
    "GS": {
        "message": "جورجیای جنوبی و جزایر ساندویچ جنوبی"
    },
    "GT": {
        "message": "گواتمالا"
    },
    "GU": {
        "message": "گوام"
    },
    "GW": {
        "message": "گینهٔ بیسائو"
    },
    "GY": {
        "message": "گویان"
    },
    "Get 24/7 Unblocking": {
        "message": "دریافت 24/7 رفع انسداد"
    },
    "Get Free Premium": {
        "message": "دریافت رایگان حق بیمه"
    },
    "Get Hola Accelerator": {
        "message": "دریافت سلام کارت"
    },
    "Get Hola Player": {
        "message": "دریافت سلام پلیر"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "هولا پلاس بگیرید تا بی وقفه وصل باشید, بدون تبلیغات"
    },
    "Get Hola Premium": {
        "message": "دریافت سلام حق بیمه"
    },
    "Get Hola for Android": {
        "message": "دریافت سلام برای آندروید"
    },
    "Get Premium support": {
        "message": "دریافت خدمات بیمه"
    },
    "Get Unlimited Unblocking": {
        "message": "دریافت فضای مجاز: نامحدود رفع انسداد"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "دسترسی به سایت های سانسور شده، آن را امتحان کنید در حال حاضر: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "از مهندسین ما کمک بگیرید توسط اسکایپ:"
    },
    "Get the Fastest Servers": {
        "message": "دریافت سریع ترین سرور"
    },
    "Go": {
        "message": "برو"
    },
    "Go Hola Premium": {
        "message": "برو سلام حق بیمه"
    },
    "HK": {
        "message": "هنگ‌کنگ، ناحیهٔ ویژهٔ حکومتی چین"
    },
    "HM": {
        "message": "جزیرهٔ هرد و جزایر مک‌دونالد"
    },
    "HN": {
        "message": "هندوراس"
    },
    "HR": {
        "message": "کرواسی"
    },
    "HT": {
        "message": "هاییتی"
    },
    "HU": {
        "message": "مجارستان"
    },
    "Hate it": {
        "message": "ازش متنفرم"
    },
    "Help": {
        "message": "کمک"
    },
    "Hey,\n\nI'm using": {
        "message": "با سلام،\n\nمن با استفاده از"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "سلام،\n\nمن شروع به استفاده از $1 ($2). این به من اجازه گشت و گذار در اینترنت سریع تر و دسترسی به $3 در کشور من."
    },
    "Hola": {
        "message": "هولا"
    },
    "Hola Accelerator": {
        "message": "سلام کارت"
    },
    "Hola Media Player": {
        "message": "سلام مدیا پلیر"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "سلام نمی توانند کار کنند چرا که پسوند دیگری است کنترل تنظیمات پروکسی خود را."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "سلام به خوبی در ویندوز 8 حالت کار نمی کند. لطفا به حالت رومیزی تغییر دهید. کلیک کنید <a>اینجا</a> برای دستورالعمل"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "سلام دسترس نیست در حال حاضر، اما ما در حال کار بر روی آن."
    },
    "Hola is off, click it to turn it on": {
        "message": "سلام کردن است، کلیک کنید به نوبه خود در"
    },
    "Hola site list": {
        "message": "لیست سایتهای رفع فیلترشده"
    },
    "I can now access $1 from any country!": {
        "message": "من هم اکنون می توانید از هر کشور دسترسی $1!"
    },
    "I did not experience any buffering": {
        "message": "من هیچ بافر را تجربه نمی کنند"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "من فقط دیده یک سایت با استفاده از سانسور سلام برای $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "من با استفاده از $1 به $2 مشاهده در کشور من، و گشت و گذار سریع تر!"
    },
    "IC": {
        "message": "جزایر قناری"
    },
    "ID": {
        "message": "اندونزی"
    },
    "IE": {
        "message": "ایرلند"
    },
    "IL": {
        "message": "اسرائیل"
    },
    "IM": {
        "message": "جزیرهٔ مان"
    },
    "IN": {
        "message": "هند"
    },
    "IO": {
        "message": "مستعمره‌های بریتانیا در اقیانوس هند"
    },
    "IQ": {
        "message": "عراق"
    },
    "IR": {
        "message": "ایران"
    },
    "IS": {
        "message": "ایسلند"
    },
    "IT": {
        "message": "ایتالیا"
    },
    "Improve translation": {
        "message": "تصحیح ترجمه"
    },
    "Initializing...": {
        "message": "راه اندازی..."
    },
    "Install": {
        "message": "نصب"
    },
    "Install Accelerator": {
        "message": "نصب کارت"
    },
    "Install Free Hola Accelerator": {
        "message": "نصب رایگان سلام کارت"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "نصب سلام موتور به ادامه استفاده از سلام به صورت رایگان"
    },
    "Instantly watch any torrent Video": {
        "message": "فورا تماشای هر تورنت فیلم"
    },
    "Invite friends - free Premium.": {
        "message": "دعوت از دوستان - حق بیمه رایگان."
    },
    "Invite friends. Get Premium.": {
        "message": "دعوت از دوستان. دریافت حق بیمه."
    },
    "It was okay": {
        "message": "خوب بود"
    },
    "JE": {
        "message": "جرسی"
    },
    "JM": {
        "message": "جامائیکا"
    },
    "JO": {
        "message": "اردن"
    },
    "JP": {
        "message": "ژاپن"
    },
    "JT": {
        "message": "جزیره جانستون"
    },
    "KE": {
        "message": "کنیا"
    },
    "KG": {
        "message": "قرقیزستان"
    },
    "KH": {
        "message": "کامبوج"
    },
    "KI": {
        "message": "کیریباتی"
    },
    "KM": {
        "message": "کومورو"
    },
    "KN": {
        "message": "سنت کیتس و نویس"
    },
    "KP": {
        "message": "کرهٔ شمالی"
    },
    "KR": {
        "message": "کرهٔ جنوبی"
    },
    "KW": {
        "message": "کویت"
    },
    "KY": {
        "message": "جزایر کِیمن"
    },
    "KZ": {
        "message": "قزاقستان"
    },
    "LA": {
        "message": "لائوس"
    },
    "LB": {
        "message": "لبنان"
    },
    "LC": {
        "message": "سنت لوسیا"
    },
    "LI": {
        "message": "لیختن‌اشتاین"
    },
    "LK": {
        "message": "سری‌لانکا"
    },
    "LR": {
        "message": "لیبریا"
    },
    "LS": {
        "message": "لسوتو"
    },
    "LT": {
        "message": "لیتوانی"
    },
    "LU": {
        "message": "لوکزامبورگ"
    },
    "LV": {
        "message": "لتونی"
    },
    "LY": {
        "message": "لیبی"
    },
    "Language": {
        "message": "زبان"
    },
    "Library": {
        "message": "کتابخانه"
    },
    "Like it": {
        "message": "آن را دوست دارم"
    },
    "Loading": {
        "message": "بارگذاری"
    },
    "Loading site...": {
        "message": "بارگذاری"
    },
    "Log in": {
        "message": "ورود به سامانه"
    },
    "Log out": {
        "message": "ورود از"
    },
    "Love Hola?": {
        "message": "عشق سلام؟"
    },
    "Love it": {
        "message": "دوستش دارم"
    },
    "MA": {
        "message": "مراکش"
    },
    "MC": {
        "message": "موناکو"
    },
    "MD": {
        "message": "مولداوی"
    },
    "ME": {
        "message": "مونته‌نگرو"
    },
    "MF": {
        "message": "سنت مارتین"
    },
    "MG": {
        "message": "ماداگاسکار"
    },
    "MH": {
        "message": "جزایر مارشال"
    },
    "MI": {
        "message": "جزایر میدوی"
    },
    "MK": {
        "message": "مقدونیه"
    },
    "ML": {
        "message": "مالی"
    },
    "MM": {
        "message": "میانمار"
    },
    "MN": {
        "message": "مغولستان"
    },
    "MO": {
        "message": "ماکائو، ناحیهٔ ویژهٔ حکومتی چین"
    },
    "MP": {
        "message": "جزایر ماریانای شمالی"
    },
    "MQ": {
        "message": "مارتینیک"
    },
    "MR": {
        "message": "موریتانی"
    },
    "MS": {
        "message": "مونت‌سرات"
    },
    "MT": {
        "message": "مالت"
    },
    "MU": {
        "message": "موریس"
    },
    "MV": {
        "message": "مالدیو"
    },
    "MW": {
        "message": "مالاوی"
    },
    "MX": {
        "message": "مکزیک"
    },
    "MY": {
        "message": "مالزی"
    },
    "MZ": {
        "message": "موزامبیک"
    },
    "Make your Internet better with $1": {
        "message": "را به اینترنت خود را بهتر با $1"
    },
    "Menu": {
        "message": "منوی"
    },
    "Might not work on all sites": {
        "message": "ممکن است کار کند در تمام سایت های"
    },
    "Mode": {
        "message": "طرز"
    },
    "More countries": {
        "message": "کشورهای بیشتر"
    },
    "More sites...": {
        "message": "...بیشتر"
    },
    "More...": {
        "message": "...بیشتر"
    },
    "My Account": {
        "message": "حساب کاربری من"
    },
    "My History": {
        "message": "تاریخچه من"
    },
    "My Settings": {
        "message": "تنظیمات من"
    },
    "My favorites": {
        "message": "مورد علاقه های شما"
    },
    "NA": {
        "message": "نامیبیا"
    },
    "NC": {
        "message": "کالدونیای جدید"
    },
    "NE": {
        "message": "نیجر"
    },
    "NF": {
        "message": "جزیرهٔ نورفولک"
    },
    "NG": {
        "message": "نیجریه"
    },
    "NI": {
        "message": "نیکاراگوئه"
    },
    "NL": {
        "message": "هلند"
    },
    "NO": {
        "message": "نروژ"
    },
    "NP": {
        "message": "نپال"
    },
    "NQ": {
        "message": "Dronning مود زمین"
    },
    "NR": {
        "message": "نائورو"
    },
    "NT": {
        "message": "منطقه بی طرف"
    },
    "NU": {
        "message": "نیوئه"
    },
    "NZ": {
        "message": "زلاند نو"
    },
    "Need Help?": {
        "message": "به راهنمایی نیاز دارید؟"
    },
    "Netflix": {
        "message": "Netflix بکشد"
    },
    "Never ask me again": {
        "message": "هرگز دوباره از من بپرسید"
    },
    "Never be a peer": {
        "message": "هرگز یک همکار است"
    },
    "No": {
        "message": "بدون"
    },
    "No idle peers found.": {
        "message": "بدون هم بیکار یافت."
    },
    "No recent videos found": {
        "message": "بدون ویدیو ها در بر داشت"
    },
    "No saved videos found": {
        "message": "هیچ ویدیوی نجات یافت"
    },
    "No title": {
        "message": "بدون عنوان"
    },
    "No videos found": {
        "message": "ویدیویی یافت نشد"
    },
    "No videos found on active page": {
        "message": "بدون فیلم بر روی صفحه فعال"
    },
    "No, Thanks": {
        "message": "نه، با تشکر"
    },
    "No, fix it": {
        "message": "نه، آن را برطرف"
    },
    "Not working?": {
        "message": "کار نمی کند؟"
    },
    "Number of users that pressed not working": {
        "message": "تعداد کاربرانی که انتخاب کرده اند \"کار نمیکنه\""
    },
    "Number of users that use this option": {
        "message": "تعداد کاربرانی که از این گزینه استفاده میکنند"
    },
    "OM": {
        "message": "عمان"
    },
    "Off": {
        "message": "خاموش"
    },
    "Oh, yes!": {
        "message": "آه، بله!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "ورژن فایرفاکس شما قدیمیه. کلیک کنید <a>اینجا</a>برای به روز کردن "
    },
    "On": {
        "message": "روشن"
    },
    "Open Media Player": {
        "message": "گسترش مدیا پلیر"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "ما با نام تجاری جدید از MPlayer است که به زودی!"
    },
    "PA": {
        "message": "پاناما"
    },
    "PC": {
        "message": "قلمرو جزایر اقیانوس آرام اعتماد"
    },
    "PE": {
        "message": "پرو"
    },
    "PF": {
        "message": "پلی‌نزی فرانسه"
    },
    "PG": {
        "message": "پاپوا گینهٔ نو"
    },
    "PH": {
        "message": "فیلیپین"
    },
    "PK": {
        "message": "پاکستان"
    },
    "PL": {
        "message": "لهستان"
    },
    "PM": {
        "message": "سنت پیر و میکلون"
    },
    "PN": {
        "message": "پیتکایرن"
    },
    "PR": {
        "message": "پورتو ریکو"
    },
    "PS": {
        "message": "فلسطین"
    },
    "PT": {
        "message": "پرتغال"
    },
    "PU": {
        "message": "آمریکا دیگر جزایر اقیانوس آرام"
    },
    "PW": {
        "message": "پالائو"
    },
    "PY": {
        "message": "پاراگوئه"
    },
    "PZ": {
        "message": "منطقه کانال پاناما"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "لطفا <a>پسوند</a> های دیگر که شما فکر می کنید ممکن است تنظیمات پروکسی خود را مانند آگهی مسدود کننده، خدمات VPN، و غیره کنترل غیر فعال"
    },
    "Please enter a valid email address.": {
        "message": "لطفا یک آدرس ایمیل معتبر وارد کنید."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "لطفا آدرس وب سایت را وارد کنید، مانند facebook.com"
    },
    "Please help us get better": {
        "message": "لطفا به ما کمک بهتر"
    },
    "Popular in $1": {
        "message": "محبوب در $1"
    },
    "Popular in the world": {
        "message": "محبوب در جهان"
    },
    "Popular sites": {
        "message": "سایت های محبوب"
    },
    "Premium": {
        "message": "حق بیمه"
    },
    "QA": {
        "message": "قطر"
    },
    "QO": {
        "message": "حاشیهای اقیانوسیه"
    },
    "RE": {
        "message": "ریونیون"
    },
    "RO": {
        "message": "رومانی"
    },
    "RS": {
        "message": "صربستان"
    },
    "RU": {
        "message": "روسیه"
    },
    "RW": {
        "message": "رواندا"
    },
    "Rate us": {
        "message": "به ما رای دهید"
    },
    "Recent Videos": {
        "message": "ویدیو ها"
    },
    "Reload": {
        "message": "بارگذاری دوباره"
    },
    "Reload Hola": {
        "message": "بارگذاری دوباره هولا"
    },
    "Remember server": {
        "message": "به یاد داشته باشید سرور"
    },
    "Report a problem": {
        "message": "گزارش یک مشکل"
    },
    "Retry safe mode": {
        "message": "دوباره سعی کنید حالت امن"
    },
    "SA": {
        "message": "عربستان سعودی"
    },
    "SB": {
        "message": "جزایر سلیمان"
    },
    "SC": {
        "message": "سیشل"
    },
    "SD": {
        "message": "سودان"
    },
    "SE": {
        "message": "سوئد"
    },
    "SG": {
        "message": "سنگاپور"
    },
    "SH": {
        "message": "سنت هلن"
    },
    "SI": {
        "message": "اسلوونی"
    },
    "SJ": {
        "message": "اسوالبارد و جان ماین"
    },
    "SK": {
        "message": "اسلواکی"
    },
    "SL": {
        "message": "سیرالئون"
    },
    "SM": {
        "message": "سان مارینو"
    },
    "SN": {
        "message": "سنگال"
    },
    "SO": {
        "message": "سومالی"
    },
    "SR": {
        "message": "سورینام"
    },
    "ST": {
        "message": "سائو تومه و پرینسیپه"
    },
    "SU": {
        "message": "اتحادیه جماهیر شوروی سوسیالیستی"
    },
    "SV": {
        "message": "السالوادور"
    },
    "SY": {
        "message": "سوریه"
    },
    "SZ": {
        "message": "سوازیلند"
    },
    "Safe": {
        "message": "بی خطر"
    },
    "Safe mode": {
        "message": "حالت امن"
    },
    "Save": {
        "message": "ذخیره"
    },
    "Saved Videos": {
        "message": "فیلم نگاه شده"
    },
    "Saved for later": {
        "message": "ذخیره برای بعد"
    },
    "Search video title": {
        "message": "جستجو در عنوان ویدئو"
    },
    "Select a Country": {
        "message": "انتخاب یک کشور"
    },
    "Select site to unblock": {
        "message": "انتخاب سایت به خار چیدن"
    },
    "Server saved!": {
        "message": "سرور را نجات داد!"
    },
    "Set safe mode for $1 $2": {
        "message": "حالت امن تنظیم برای $1 $2"
    },
    "Settings": {
        "message": "تنظیمات"
    },
    "Share": {
        "message": "سهم"
    },
    "Share $1 on $2": {
        "message": "اشتراک $1 در $2"
    },
    "Share $1 via $2": {
        "message": "اشتراک $1 از $2"
    },
    "Share with friends!": {
        "message": "با دوستان به اشتراک گذاشتن!"
    },
    "Sign up": {
        "message": "ثبت نام"
    },
    "Solve buffering": {
        "message": "حل بافر"
    },
    "Solve buffering problems with": {
        "message": "حل مشکلات بافر با"
    },
    "Solves it": {
        "message": "را حل میکند"
    },
    "Staff Picks": {
        "message": "تراکم کارکنان"
    },
    "Start Hola": {
        "message": "شروع"
    },
    "Starting...": {
        "message": "در حال شروع..."
    },
    "Stop Hola": {
        "message": "توقف سلام"
    },
    "Stopping peer routing...": {
        "message": "توقف مسیر یابی همکار ..."
    },
    "Stream": {
        "message": "جریان"
    },
    "Stream Instantly": {
        "message": "جریان فورا"
    },
    "Submit": {
        "message": "ارسال"
    },
    "Support Hola": {
        "message": "پشتیبانی سلام"
    },
    "TA": {
        "message": "تریستان داکونها"
    },
    "TC": {
        "message": "جزایر ترک و کایکوس"
    },
    "TD": {
        "message": "چاد"
    },
    "TF": {
        "message": "مستعمره‌های جنوبی فرانسه"
    },
    "TG": {
        "message": "توگو"
    },
    "TH": {
        "message": "تایلند"
    },
    "TJ": {
        "message": "تاجیکستان"
    },
    "TK": {
        "message": "توکلائو"
    },
    "TL": {
        "message": "تیمور شرقی"
    },
    "TM": {
        "message": "ترکمنستان"
    },
    "TN": {
        "message": "تونس"
    },
    "TO": {
        "message": "تونگا"
    },
    "TR": {
        "message": "ترکیه"
    },
    "TT": {
        "message": "ترینیداد و توباگو"
    },
    "TV": {
        "message": "تووالو"
    },
    "TW": {
        "message": "تایوان"
    },
    "TZ": {
        "message": "تانزانیا"
    },
    "Talk to us on $1": {
        "message": "بحث به ما در $1"
    },
    "Tell friends about $1": {
        "message": "دوستان بگویید حدود $1"
    },
    "Testing connection...": {
        "message": "اتصال تست ..."
    },
    "Thank you!": {
        "message": "تشکر از شما!"
    },
    "There seems to be an error": {
        "message": "به نظر مشکلی پیش اومده"
    },
    "Top popular sites": {
        "message": "سایت های محبوب بالا"
    },
    "Translate to your language": {
        "message": "به زبان خودتون ترجمه کنید"
    },
    "Try again": {
        "message": "دوباره سعی کنید"
    },
    "Try another server": {
        "message": "سعی کنید سرور دیگر"
    },
    "Try it": {
        "message": "آن را امتحان کنید"
    },
    "Try safe mode": {
        "message": "سعی کنید حالت امن"
    },
    "Try to <span>reload</span>": {
        "message": "<span>بارگذاری</span>در حال سعی برای"
    },
    "Trying another peer...": {
        "message": "تلاش همکار دیگر ..."
    },
    "Turn off Accelerator": {
        "message": "غیرفعال کردن کارت"
    },
    "Turn off Hola": {
        "message": "غیرفعال کردن سلام"
    },
    "Turn on Accelerator": {
        "message": "روشن کردن کارت"
    },
    "Turn on Hola": {
        "message": "روشن کردن سلام"
    },
    "Turn on to get started": {
        "message": "برای شروع روشن کنید"
    },
    "UA": {
        "message": "اوکراین"
    },
    "UG": {
        "message": "اوگاندا"
    },
    "UM": {
        "message": "جزایر کوچک دورافتادهٔ ایالات متحده"
    },
    "US": {
        "message": "ایالات متحدهٔ امریکا"
    },
    "UY": {
        "message": "اوروگوئه"
    },
    "UZ": {
        "message": "ازبکستان"
    },
    "Unblocker": {
        "message": "فیلترشکن"
    },
    "Unblocker is disabled": {
        "message": "فیلترشکن غیرفعال است"
    },
    "Unblocker?": {
        "message": "Unblocker؟"
    },
    "Update": {
        "message": "به روز رسانی"
    },
    "Upgrade": {
        "message": "به روز رسانی"
    },
    "Using": {
        "message": "با استفاده از"
    },
    "Using Hola": {
        "message": "با استفاده از سلام"
    },
    "VA": {
        "message": "واتیکان"
    },
    "VC": {
        "message": "سنت وینسنت و گرنادین"
    },
    "VD": {
        "message": "ویتنام شمالی"
    },
    "VE": {
        "message": "ونزوئلا"
    },
    "VG": {
        "message": "جزایر ویرجین بریتانیا"
    },
    "VI": {
        "message": "جزایر ویرجین ایالات متحده"
    },
    "VN": {
        "message": "ویتنام"
    },
    "VPN": {
        "message": "شبکه اختصاصی مجازی"
    },
    "VPN Premium": {
        "message": "VPN حق بیمه"
    },
    "VU": {
        "message": "وانواتو"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "ورژن کروم شما خیلی قدیمیه, <a>بروز کنید</a> کروم رو تا از هولا استفاده کنید"
    },
    "Video": {
        "message": "ویدیو"
    },
    "Video stuck?": {
        "message": "ویدئو گیر کرده؟"
    },
    "Videos available for instant streaming": {
        "message": "فیلم دسترس برای جریان از طریق مسنجر"
    },
    "WF": {
        "message": "والیس و فیوتونا"
    },
    "WK": {
        "message": "جزیره ویک"
    },
    "WS": {
        "message": "ساموا"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "میخواهید هولا را روی دیگر دستگاه ها امتحان کنید؟ (Xbox, PS, Apple TV, iPhone...). اینجا کلیک کنید"
    },
    "Want to know more?": {
        "message": "آیا می خواهید بیشتر بدانید؟"
    },
    "Watch Now": {
        "message": "سازمان دیده بان در حال حاضر"
    },
    "We found $1 videos": {
        "message": "ما در بر داشت $1 فیلم"
    },
    "We will be in touch with you soon": {
        "message": "ما در تماس با شما به زودی"
    },
    "Working!": {
        "message": "کار!"
    },
    "Working?": {
        "message": "کار؟"
    },
    "Works on all sites but slower": {
        "message": "کار بر روی تمام سایت های اما کندتر"
    },
    "YD": {
        "message": "جمهوری دموکراتیک خلق یمن"
    },
    "YE": {
        "message": "یمن"
    },
    "YT": {
        "message": "مایوت"
    },
    "Yes": {
        "message": "بله"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "شما نیاز به ارتقاء به آخرین نسخه از اپرا استفاده سلام. را فشار دهید <a>در اینجا</a> به ارتقا دهید."
    },
    "Youtube": {
        "message": "یوتیوب"
    },
    "ZA": {
        "message": "افریقای جنوبی"
    },
    "ZM": {
        "message": "زامبیا"
    },
    "ZW": {
        "message": "زیمبابوه"
    },
    "ZZ": {
        "message": "ناحیهٔ نامشخص یا نامعتبر"
    },
    "app_desc": {
        "message": "وب سایت های مسدود، دسترسی در کشور، شرکت یا مدرسه با سلام شما! سلام رایگان و آسان برای استفاده است!"
    },
    "app_name": {
        "message": "هولا اینترنت بهتر"
    },
    "back to": {
        "message": "برگرد به"
    },
    "changing...": {
        "message": "در حال تغییر..."
    },
    "cool sites": {
        "message": "سایت های خنک"
    },
    "current site": {
        "message": "سایت در حال حاضر"
    },
    "day": {
        "message": "روز"
    },
    "days": {
        "message": "روزها"
    },
    "even more...": {
        "message": "حتی بیشتر..."
    },
    "mode": {
        "message": "حالت"
    },
    "more options...": {
        "message": "گزینه های بیشتر ..."
    },
    "not working?": {
        "message": "کار نمی کند؟"
    },
    "not working? try another server": {
        "message": "کار نمی کند؟ سعی کنید سرور دیگر"
    },
    "on this page": {
        "message": "در این صفحه"
    },
    "sites that are censored": {
        "message": "سایت های که سانسور می شوند"
    },
    "start": {
        "message": "شروع"
    },
    "working? remember": {
        "message": "کار؟ به یاد داشته باشید"
    }
};
return E; });