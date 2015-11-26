'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "באמצעות"
    },
    "$1 Buffering?": {
        "message": "$1 חציצה?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola לAccess $2\n\nלחצו כאן כדי לעשות את אותו הדבר: $3\n\nזה מתקין Hola, המאפשר לי לגלוש באינטרנט במהירות רבה יותר ולגשת $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN פרימיום"
    },
    "$1 from $2": {
        "message": "$1 מ $2"
    },
    "$1 not found": {
        "message": "$1 לא נמצא"
    },
    "$1 via Hola": {
        "message": "$1 באמצעות Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(כמה תכונות Hola אינן זמינות בגרסה שלך)"
    },
    "AC": {
        "message": "אי התעלות"
    },
    "AD": {
        "message": "אנדורה"
    },
    "AE": {
        "message": "איחוד האמירויות הערביות"
    },
    "AF": {
        "message": "אפגניסטן"
    },
    "AG": {
        "message": "אנטיגואה וברבודה"
    },
    "AI": {
        "message": "אנגילה"
    },
    "AL": {
        "message": "אלבניה"
    },
    "AM": {
        "message": "ארמניה"
    },
    "AN": {
        "message": "אנטילים הולנדיים"
    },
    "AO": {
        "message": "אנגולה"
    },
    "AQ": {
        "message": "אנטארקטיקה"
    },
    "AR": {
        "message": "ארגנטינה"
    },
    "AS": {
        "message": "סמואה האמריקנית"
    },
    "AT": {
        "message": "אוסטריה"
    },
    "AU": {
        "message": "אוסטרליה"
    },
    "AW": {
        "message": "ארובה"
    },
    "AX": {
        "message": "איי אלנד"
    },
    "AZ": {
        "message": "אזרביג'ן"
    },
    "About": {
        "message": "אודות"
    },
    "About Hola": {
        "message": "אודות Hola"
    },
    "Accelerator": {
        "message": "מאיץ"
    },
    "Accelerator is": {
        "message": "Accelerator הוא"
    },
    "Access $1 - cool site!": {
        "message": "גישה $1 - אתר מגניב!"
    },
    "Access $1?": {
        "message": "לגשת $1?"
    },
    "Access any site from any country, free": {
        "message": "!לגשת לכל אתר מכל מדינה"
    },
    "Access cool sites": {
        "message": "אתרים מגניבים גישה"
    },
    "Access more sites": {
        "message": "אתרים נוספים גישה"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "אתרי גישה מצונזרים במדינה שלך ולהאיץ את האינטרנט שלך עם Hola - חינם!"
    },
    "Accessing $1 with Hola": {
        "message": "גישה $1 Hola"
    },
    "Account": {
        "message": "חשבון"
    },
    "Account type": {
        "message": "סוג החשבון"
    },
    "Activating...": {
        "message": "הפעלה..."
    },
    "All ($1)": {
        "message": "כל ($1)"
    },
    "Apply settings...": {
        "message": "החל הגדרות ..."
    },
    "Author site:": {
        "message": "אתר מחבר:"
    },
    "Author:": {
        "message": "מחבר:"
    },
    "Awesome!": {
        "message": "מדהים!"
    },
    "BA": {
        "message": "בוסניה והרצגובינה"
    },
    "BB": {
        "message": "ברבדוס"
    },
    "BD": {
        "message": "בנגלדש"
    },
    "BE": {
        "message": "בלגיה"
    },
    "BF": {
        "message": "בורקינה פאסו"
    },
    "BG": {
        "message": "בולגריה"
    },
    "BH": {
        "message": "בחריין"
    },
    "BI": {
        "message": "בורונדי"
    },
    "BJ": {
        "message": "בנין"
    },
    "BL": {
        "message": "סנט ברתולומיאו"
    },
    "BM": {
        "message": "ברמודה"
    },
    "BN": {
        "message": "ברוניי"
    },
    "BO": {
        "message": "בוליביה"
    },
    "BQ": {
        "message": "טריטוריה בריטית באנטארקטיקה"
    },
    "BR": {
        "message": "ברזיל"
    },
    "BS": {
        "message": "איי בהאמה"
    },
    "BT": {
        "message": "בהוטן"
    },
    "BV": {
        "message": "איי בובה"
    },
    "BW": {
        "message": "בוטסוואנה"
    },
    "BY": {
        "message": "בלארוס"
    },
    "BZ": {
        "message": "בליז"
    },
    "Back to $1": {
        "message": "חזור $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "להיות הראשון כדי לקבל Hola עבור iPhone / iPad - הירשם עכשיו:"
    },
    "Browsing": {
        "message": "גלישה"
    },
    "Buffering problems?": {
        "message": "בעיות חציצה?"
    },
    "Buffering?": {
        "message": "חציצה?"
    },
    "CA": {
        "message": "קנדה"
    },
    "CC": {
        "message": "איי קוקוס"
    },
    "CD": {
        "message": "קונגו - קינשאסה"
    },
    "CF": {
        "message": "הרפובליקה של מרכז אפריקה"
    },
    "CG": {
        "message": "קונגו - ברזאויל"
    },
    "CH": {
        "message": "שווייץ"
    },
    "CI": {
        "message": "חוף השנהב"
    },
    "CK": {
        "message": "איי קוק"
    },
    "CL": {
        "message": "צ׳ילה"
    },
    "CM": {
        "message": "קמרון"
    },
    "CN": {
        "message": "סין"
    },
    "CO": {
        "message": "קולומביה"
    },
    "CP": {
        "message": "אי קליפרטון"
    },
    "CR": {
        "message": "קוסטה ריקה"
    },
    "CS": {
        "message": "סרביה ומונטנגרו"
    },
    "CT": {
        "message": "קנטון ואיי אנדרברי"
    },
    "CU": {
        "message": "קובה"
    },
    "CV": {
        "message": "כף ורדה"
    },
    "CX": {
        "message": "איי כריסטמס"
    },
    "CY": {
        "message": "קפריסין"
    },
    "CZ": {
        "message": "צ׳כיה"
    },
    "Changing country...": {
        "message": "משנה מדינה..."
    },
    "Check out Hola for $1!": {
        "message": "עזיבה Hola עבור $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "בדוק את Hola למכשירים ניידים"
    },
    "Check your Internet connection": {
        "message": "בדוק את חיבור האינטרט שלך"
    },
    "Choose<br>Country": {
        "message": "לבחור <br> מדינה"
    },
    "Configuring...": {
        "message": "מגדיר תצורה ..."
    },
    "Connecting...": {
        "message": "מתחבר..."
    },
    "Cool site!": {
        "message": "אתר מגניב!"
    },
    "Creative licenses": {
        "message": "רישיונות Creative"
    },
    "DD": {
        "message": "גרמניה המזרחית"
    },
    "DE": {
        "message": "גרמניה"
    },
    "DG": {
        "message": "דיאגו גרסיה"
    },
    "DJ": {
        "message": "ג׳יבוטי"
    },
    "DK": {
        "message": "דנמרק"
    },
    "DM": {
        "message": "דומיניקה"
    },
    "DO": {
        "message": "הרפובליקה הדומיניקנית"
    },
    "DZ": {
        "message": "אלג׳יריה"
    },
    "Delete": {
        "message": "מחק"
    },
    "Deleted from my list": {
        "message": "נמחק מהרשימה שלי"
    },
    "Did it work?": {
        "message": "האם זה עובד?"
    },
    "Did you experience any buffering?": {
        "message": "האם אתם חווית איטיות בטעינה?"
    },
    "Disliked it": {
        "message": "לא אהבתי את זה"
    },
    "Don't show again for $1 for one week": {
        "message": "אל תציג שוב עבור $1 עבור שבוע אחד"
    },
    "Don't show again for any site for one week": {
        "message": "אל תציג שוב לכל אתר למשך שבוע אחד"
    },
    "Downloading": {
        "message": "הורדה"
    },
    "EA": {
        "message": "סאוטה ומלייה"
    },
    "EC": {
        "message": "אקוודור"
    },
    "EE": {
        "message": "אסטוניה"
    },
    "EG": {
        "message": "מצרים"
    },
    "EH": {
        "message": "סהרה המערבית"
    },
    "ER": {
        "message": "אריתראה"
    },
    "ES": {
        "message": "ספרד"
    },
    "ET": {
        "message": "אתיופיה"
    },
    "EU": {
        "message": "האיחוד האירופי"
    },
    "Enable": {
        "message": "אפשר"
    },
    "Enable Hola Accelerator": {
        "message": "אפשר Hola Accelerator"
    },
    "Enjoy!": {
        "message": "תהנו!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "נהנית Hola עבור Chrome?"
    },
    "Enter site to access": {
        "message": "נכנס לאתר לגישה"
    },
    "Enter your email": {
        "message": "הזן את כתובת האימייל שלך"
    },
    "FI": {
        "message": "פינלנד"
    },
    "FJ": {
        "message": "פיג׳י"
    },
    "FK": {
        "message": "איי פוקלנד"
    },
    "FM": {
        "message": "מיקרונזיה"
    },
    "FO": {
        "message": "איי פארו"
    },
    "FQ": {
        "message": "צרפתי דרומי ואנטארקטיקה שטחים"
    },
    "FR": {
        "message": "צרפת"
    },
    "FX": {
        "message": "מטרופולין צרפת"
    },
    "Fast": {
        "message": "מהיר"
    },
    "Finding new peers...": {
        "message": "מציאת עמיתים חדשים ..."
    },
    "Finding peers...": {
        "message": "מציאת בני גילם ..."
    },
    "Free": {
        "message": "חינם"
    },
    "From": {
        "message": "מ"
    },
    "Full list": {
        "message": "רשימה מלאה"
    },
    "GA": {
        "message": "גאבון"
    },
    "GB": {
        "message": "בריטניה"
    },
    "GD": {
        "message": "גרנדה"
    },
    "GE": {
        "message": "גאורגיה"
    },
    "GF": {
        "message": "גיאנה הצרפתית"
    },
    "GG": {
        "message": "גרנסי"
    },
    "GH": {
        "message": "גאנה"
    },
    "GI": {
        "message": "גיברלטר"
    },
    "GL": {
        "message": "גרינלנד"
    },
    "GM": {
        "message": "גמביה"
    },
    "GN": {
        "message": "גיניאה"
    },
    "GP": {
        "message": "גוואדלופ"
    },
    "GQ": {
        "message": "גיניאה המשוונית"
    },
    "GR": {
        "message": "יוון"
    },
    "GS": {
        "message": "ג׳ורג׳יה הדרומית ואיי סנדוויץ׳ הדרומיים"
    },
    "GT": {
        "message": "גואטמלה"
    },
    "GU": {
        "message": "גואם"
    },
    "GW": {
        "message": "גיניאה-ביסאו"
    },
    "GY": {
        "message": "גיאנה"
    },
    "Get 24/7 Unblocking": {
        "message": "קבל 24/7 ביטול חסימה"
    },
    "Get Free Premium": {
        "message": "קבל פרימיום חינם"
    },
    "Get Hola Accelerator": {
        "message": "קבל Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "קבל Hola נגן"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "קבל Hola פלוס עבור שירות רצוף, נטול פרסומות"
    },
    "Get Hola Premium": {
        "message": "קבל Hola פרימיום"
    },
    "Get Hola for Android": {
        "message": "הורד את Hola לאנדרואיד"
    },
    "Get Premium support": {
        "message": "קבל תמיכת פרימיום"
    },
    "Get Unlimited Unblocking": {
        "message": "קבל שחרור חסימות ללא הגבלה"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "קבל גישה לאתרים מצונזרים, לנסות את זה עכשיו: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "קבל עזרה ממהנדס בסקייפ:"
    },
    "Get the Fastest Servers": {
        "message": "קבל את שרתים המהיר ביותר"
    },
    "Go": {
        "message": "עבור"
    },
    "Go Hola Premium": {
        "message": "עבור ל Hola פרימיום"
    },
    "HK": {
        "message": "הונג קונג (מחוז מנהלי מיוחד של סין)"
    },
    "HM": {
        "message": "איי הרד ואיי מקדונלנד"
    },
    "HN": {
        "message": "הונדורס"
    },
    "HR": {
        "message": "קרואטיה"
    },
    "HT": {
        "message": "האיטי"
    },
    "HU": {
        "message": "הונגריה"
    },
    "Hate it": {
        "message": "שונא את זה"
    },
    "Help": {
        "message": "עזרה"
    },
    "Hey,\n\nI'm using": {
        "message": "היי,\n\nאני משתמש"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "היי,\n\nהתחלתי להשתמש $1 ($2). זה מאפשר לי לגלוש באינטרנט במהירות רבה יותר ולגשת ל $3 במדינה שלי."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola לא יכול לעבוד, כי הרחבה נוספת היא שליטה בהגדרות הפרוקסי שלך."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola לא עובד היטב במצב של Windows 8. נא עבור למצב שולחן עבודה. לחץ <a>כאן</a> לקבלת הוראות"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola אינו זמין כרגע, אבל אנחנו עובדים על זה."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola כבוי, לחץ על ללהפעיל"
    },
    "Hola site list": {
        "message": "רשימת אתרים לפתיחה"
    },
    "I can now access $1 from any country!": {
        "message": "עכשיו אני יכול ניגש $1 מכל מדינה!"
    },
    "I did not experience any buffering": {
        "message": "לא חוויתי איטיות בטעינה"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "אני פשוט לגשת לאתר צונזר באמצעות Hola עבור $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "אני משתמש $1 כדי להציג $2 במדינה שלי, ולגלוש יותר מהר!"
    },
    "IC": {
        "message": "האים הקנאריים"
    },
    "ID": {
        "message": "אינדונזיה"
    },
    "IE": {
        "message": "אירלנד"
    },
    "IL": {
        "message": "ישראל"
    },
    "IM": {
        "message": "האי מאן"
    },
    "IN": {
        "message": "הודו"
    },
    "IO": {
        "message": "טריטוריה בריטית באוקיאנוס ההודי"
    },
    "IQ": {
        "message": "עיראק"
    },
    "IR": {
        "message": "איראן"
    },
    "IS": {
        "message": "איסלנד"
    },
    "IT": {
        "message": "איטליה"
    },
    "Improve translation": {
        "message": "לשפר את התרגום"
    },
    "Initializing...": {
        "message": "מאתחל, אנא המתן..."
    },
    "Install": {
        "message": "התקן"
    },
    "Install Accelerator": {
        "message": "התקן Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "התקנה חינם Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "התקן Hola מנוע להמשיך להשתמש Hola בחינם"
    },
    "Instantly watch any torrent Video": {
        "message": "באופן מיידי לצפות בכל וידאו סיקור"
    },
    "Invite friends - free Premium.": {
        "message": "הזמנה חברים - פרימיום בחינם."
    },
    "Invite friends. Get Premium.": {
        "message": "הזמנה חברים. קבל פרימיום."
    },
    "It was okay": {
        "message": "זה היה בסדר"
    },
    "JE": {
        "message": "ג'רסי"
    },
    "JM": {
        "message": "ג׳מייקה"
    },
    "JO": {
        "message": "ירדן"
    },
    "JP": {
        "message": "יפן"
    },
    "JT": {
        "message": "אי ג&#39;ונסטון"
    },
    "KE": {
        "message": "קניה"
    },
    "KG": {
        "message": "קירגיזסטן"
    },
    "KH": {
        "message": "קמבודיה"
    },
    "KI": {
        "message": "קיריבאטי"
    },
    "KM": {
        "message": "קומורוס"
    },
    "KN": {
        "message": "סנט קיטס ונוויס"
    },
    "KP": {
        "message": "צפון קוריאה"
    },
    "KR": {
        "message": "דרום קוריאה"
    },
    "KW": {
        "message": "כווית"
    },
    "KY": {
        "message": "איי קיימן"
    },
    "KZ": {
        "message": "קזחסטן"
    },
    "LA": {
        "message": "לאוס"
    },
    "LB": {
        "message": "לבנון"
    },
    "LC": {
        "message": "סנט לוסיה"
    },
    "LI": {
        "message": "ליכטנשטיין"
    },
    "LK": {
        "message": "סרי לנקה"
    },
    "LR": {
        "message": "ליבריה"
    },
    "LS": {
        "message": "לסוטו"
    },
    "LT": {
        "message": "ליטא"
    },
    "LU": {
        "message": "לוקסמבורג"
    },
    "LV": {
        "message": "לטביה"
    },
    "LY": {
        "message": "לוב"
    },
    "Language": {
        "message": "שפה"
    },
    "Library": {
        "message": "ספרייה"
    },
    "Like it": {
        "message": "אוהב את זה"
    },
    "Loading": {
        "message": "טוען"
    },
    "Loading site...": {
        "message": "טוען"
    },
    "Log in": {
        "message": "התחבר"
    },
    "Log out": {
        "message": "התנתק"
    },
    "Love Hola?": {
        "message": "אוהב את Hola?"
    },
    "Love it": {
        "message": "אוהב את זה"
    },
    "MA": {
        "message": "מרוקו"
    },
    "MC": {
        "message": "מונקו"
    },
    "MD": {
        "message": "מולדובה"
    },
    "ME": {
        "message": "מונטנגרו"
    },
    "MF": {
        "message": "סנט מרטין"
    },
    "MG": {
        "message": "מדגסקר"
    },
    "MH": {
        "message": "איי מרשל"
    },
    "MI": {
        "message": "איי מידוויי"
    },
    "MK": {
        "message": "מקדוניה"
    },
    "ML": {
        "message": "מאלי"
    },
    "MM": {
        "message": "מייאנמאר"
    },
    "MN": {
        "message": "מונגוליה"
    },
    "MO": {
        "message": "מקאו (מחוז מנהלי מיוחד של סין)"
    },
    "MP": {
        "message": "איי מריאנה הצפוניים"
    },
    "MQ": {
        "message": "מרטיניק"
    },
    "MR": {
        "message": "מאוריטניה"
    },
    "MS": {
        "message": "מונסראט"
    },
    "MT": {
        "message": "מלטה"
    },
    "MU": {
        "message": "מאוריציוס"
    },
    "MV": {
        "message": "מלדיבים"
    },
    "MW": {
        "message": "מלאווי"
    },
    "MX": {
        "message": "מקסיקו"
    },
    "MY": {
        "message": "מלזיה"
    },
    "MZ": {
        "message": "מוזמביק"
    },
    "Make your Internet better with $1": {
        "message": "תעשו לאינטרנט טוב יותר עם $1"
    },
    "Menu": {
        "message": "תפריט"
    },
    "Might not work on all sites": {
        "message": "לא יכול לעבוד בכל האתרים"
    },
    "Mode": {
        "message": "מצב"
    },
    "More countries": {
        "message": "מדינות נוספות"
    },
    "More sites...": {
        "message": "עוד..."
    },
    "More...": {
        "message": "עוד..."
    },
    "My Account": {
        "message": "החשבון שלי"
    },
    "My History": {
        "message": "ההיסטוריה שלי"
    },
    "My Settings": {
        "message": "ההגדרות שלי"
    },
    "My favorites": {
        "message": "המועדפים שלי"
    },
    "NA": {
        "message": "נמיביה"
    },
    "NC": {
        "message": "קלדוניה החדשה"
    },
    "NE": {
        "message": "ניז׳ר"
    },
    "NF": {
        "message": "איי נורפוק"
    },
    "NG": {
        "message": "ניגריה"
    },
    "NI": {
        "message": "ניקרגואה"
    },
    "NL": {
        "message": "הולנד"
    },
    "NO": {
        "message": "נורווגיה"
    },
    "NP": {
        "message": "נפאל"
    },
    "NQ": {
        "message": "ארץ המלכה מוד"
    },
    "NR": {
        "message": "נאורו"
    },
    "NT": {
        "message": "איזור נייטרלי"
    },
    "NU": {
        "message": "ניווה"
    },
    "NZ": {
        "message": "ניו זילנד"
    },
    "Need Help?": {
        "message": "צריך עזרה?"
    },
    "Netflix": {
        "message": "נטפליקס"
    },
    "Never ask me again": {
        "message": "לעולם אל תשאל אותי שוב"
    },
    "Never be a peer": {
        "message": "לעולם לא יהיה עמית"
    },
    "No": {
        "message": "לא"
    },
    "No idle peers found.": {
        "message": "לא נמצאו עמיתים פעילים."
    },
    "No recent videos found": {
        "message": "אין סרטונים האחרונים מצאו"
    },
    "No saved videos found": {
        "message": "אין סרטונים הצילו נמצאו"
    },
    "No title": {
        "message": "אין כותרת"
    },
    "No videos found": {
        "message": "לא נמצאו סרטונים"
    },
    "No videos found on active page": {
        "message": "לא נמצאו סרטונים בדף פעיל"
    },
    "No, Thanks": {
        "message": "לא, תודה"
    },
    "No, fix it": {
        "message": "לא, לתקן את זה"
    },
    "Not working?": {
        "message": "לא עובד?"
    },
    "Number of users that pressed not working": {
        "message": "מספר המשתמשים שלחצו לא עובדים"
    },
    "Number of users that use this option": {
        "message": "מספר המשתמשים שמשתמשים באפשרות זו"
    },
    "OM": {
        "message": "עומאן"
    },
    "Off": {
        "message": "כבוי"
    },
    "Oh, yes!": {
        "message": "אה, כן!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "גרסה ישנה של פיירפוקס. לחץ <a>כאן</a> לשדרוג."
    },
    "On": {
        "message": "פועל"
    },
    "Open Media Player": {
        "message": "פתוחה Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "המותג החדש Mplayer בקרוב!"
    },
    "PA": {
        "message": "פנמה"
    },
    "PC": {
        "message": "טריטורית פסיפיק איי נאמנות"
    },
    "PE": {
        "message": "פרו"
    },
    "PF": {
        "message": "פולינזיה הצרפתית"
    },
    "PG": {
        "message": "פפואה גיניאה החדשה"
    },
    "PH": {
        "message": "פיליפינים"
    },
    "PK": {
        "message": "פקיסטן"
    },
    "PL": {
        "message": "פולין"
    },
    "PM": {
        "message": "סנט פייר ומיקלון"
    },
    "PN": {
        "message": "פיטקרן"
    },
    "PR": {
        "message": "פורטו ריקו"
    },
    "PS": {
        "message": "הרשות הפלסטינית"
    },
    "PT": {
        "message": "פורטוגל"
    },
    "PU": {
        "message": "ארה&quot;ב איי האוקיינוס ​​השקט שונים"
    },
    "PW": {
        "message": "פאלאו"
    },
    "PY": {
        "message": "פרגוואי"
    },
    "PZ": {
        "message": "איזור תעלת פנמה"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "בבקשה לבטל את <a>סיומות</a> אחרות שאתה חושב שאולי לשלוט בהגדרות הפרוקסי שלך כגון חוסמי מודעות, שירותי VPN אחרים, וכו יכפי"
    },
    "Please enter a valid email address.": {
        "message": "נא להזין את כתובת דוא&quot;ל חוקית."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "נא להזין את כתובת אתר אינטרנט, כמו facebook.com"
    },
    "Please help us get better": {
        "message": "אנא עזרו לנו להשתפר"
    },
    "Popular in $1": {
        "message": "פופולרי ב$1"
    },
    "Popular in the world": {
        "message": "פופולרי בעולם"
    },
    "Popular sites": {
        "message": "אתרים פופולריים"
    },
    "Premium": {
        "message": "פרמיום"
    },
    "QA": {
        "message": "קטאר"
    },
    "QO": {
        "message": "אוקיאניה פריפריה"
    },
    "RE": {
        "message": "ראוניון"
    },
    "RO": {
        "message": "רומניה"
    },
    "RS": {
        "message": "סרביה"
    },
    "RU": {
        "message": "רוסיה"
    },
    "RW": {
        "message": "רואנדה"
    },
    "Rate us": {
        "message": "דרג אותנו"
    },
    "Recent Videos": {
        "message": "הקלטות חדשות"
    },
    "Reload": {
        "message": "טען מחדש"
    },
    "Reload Hola": {
        "message": "רענן את הולה"
    },
    "Remember server": {
        "message": "זכור את השרת"
    },
    "Report a problem": {
        "message": "דווח על בעיה"
    },
    "Retry safe mode": {
        "message": "נסה מצב בטוח שנית"
    },
    "SA": {
        "message": "ערב הסעודית"
    },
    "SB": {
        "message": "איי שלמה"
    },
    "SC": {
        "message": "איי סיישל"
    },
    "SD": {
        "message": "סודן"
    },
    "SE": {
        "message": "שוודיה"
    },
    "SG": {
        "message": "סינגפור"
    },
    "SH": {
        "message": "סנט הלנה"
    },
    "SI": {
        "message": "סלובניה"
    },
    "SJ": {
        "message": "סוולבארד וז׳אן מאיין"
    },
    "SK": {
        "message": "סלובקיה"
    },
    "SL": {
        "message": "סיירה לאונה"
    },
    "SM": {
        "message": "סן מרינו"
    },
    "SN": {
        "message": "סנגל"
    },
    "SO": {
        "message": "סומליה"
    },
    "SR": {
        "message": "סורינם"
    },
    "ST": {
        "message": "סאו טומה ופרינסיפה"
    },
    "SU": {
        "message": "ברית המועצות"
    },
    "SV": {
        "message": "אל סלבדור"
    },
    "SY": {
        "message": "סוריה"
    },
    "SZ": {
        "message": "סווזילנד"
    },
    "Safe": {
        "message": "בטוח"
    },
    "Safe mode": {
        "message": "מצב בטוח"
    },
    "Save": {
        "message": "שמור"
    },
    "Saved Videos": {
        "message": "וידאו שנשמר"
    },
    "Saved for later": {
        "message": "הציל למועד מאוחר יותר"
    },
    "Search video title": {
        "message": "כותרת חיפוש וידאו"
    },
    "Select a Country": {
        "message": "בחר מדינה"
    },
    "Select site to unblock": {
        "message": "בחר אתר כדי לבטל את החסימה"
    },
    "Server saved!": {
        "message": "השרת הציל!"
    },
    "Set safe mode for $1 $2": {
        "message": "מצב בטוח להגדיר עבור $1 $2"
    },
    "Settings": {
        "message": "הגדרות"
    },
    "Share": {
        "message": "שתף"
    },
    "Share $1 on $2": {
        "message": "$1 מנית על $2"
    },
    "Share $1 via $2": {
        "message": "$1 מנית באמצעות $2"
    },
    "Share with friends!": {
        "message": "לשתף עם חברים!"
    },
    "Sign up": {
        "message": "הרשם"
    },
    "Solve buffering": {
        "message": "לפתור חציצה"
    },
    "Solve buffering problems with": {
        "message": "לפתור בעיות עם חציצה"
    },
    "Solves it": {
        "message": "פותר אותו"
    },
    "Staff Picks": {
        "message": "מבחר צוות"
    },
    "Start Hola": {
        "message": "התחל"
    },
    "Starting...": {
        "message": "מתחיל ..."
    },
    "Stop Hola": {
        "message": "עצור את Hola"
    },
    "Stopping peer routing...": {
        "message": "הפסקת ניתוב עמיתים ..."
    },
    "Stream": {
        "message": "זרם"
    },
    "Stream Instantly": {
        "message": "להזרים באופן מיידי"
    },
    "Submit": {
        "message": "להגיש"
    },
    "Support Hola": {
        "message": "תמוך ב Hola"
    },
    "TA": {
        "message": "טריסטן דה קונה"
    },
    "TC": {
        "message": "איי טורקס וקאיקוס"
    },
    "TD": {
        "message": "צ׳אד"
    },
    "TF": {
        "message": "טריטוריות דרומיות של צרפת"
    },
    "TG": {
        "message": "טוגו"
    },
    "TH": {
        "message": "תאילנד"
    },
    "TJ": {
        "message": "טג׳יקיסטן"
    },
    "TK": {
        "message": "טוקלאו"
    },
    "TL": {
        "message": "מזרח טימור"
    },
    "TM": {
        "message": "טורקמניסטן"
    },
    "TN": {
        "message": "תוניסיה"
    },
    "TO": {
        "message": "טונגה"
    },
    "TR": {
        "message": "טורקיה"
    },
    "TT": {
        "message": "טרינידד וטובגו"
    },
    "TV": {
        "message": "טובלו"
    },
    "TW": {
        "message": "טייוואן"
    },
    "TZ": {
        "message": "טנזניה"
    },
    "Talk to us on $1": {
        "message": "דבר איתנו ב- $1"
    },
    "Tell friends about $1": {
        "message": "לספר לחברים על $1"
    },
    "Testing connection...": {
        "message": "חיבור בדיקה ..."
    },
    "Thank you!": {
        "message": "תודה לך!"
    },
    "There seems to be an error": {
        "message": "נראה שיש שגיאה"
    },
    "Top popular sites": {
        "message": "אתרים פופולריים העליונים"
    },
    "Translate to your language": {
        "message": "תרגם לשפה שלך"
    },
    "Try again": {
        "message": "נסה שוב"
    },
    "Try another server": {
        "message": "נסה שרת אחר"
    },
    "Try it": {
        "message": "נסה את זה"
    },
    "Try safe mode": {
        "message": "נסה מצב בטוח"
    },
    "Try to <span>reload</span>": {
        "message": "נסה <span>לרענן</span>"
    },
    "Trying another peer...": {
        "message": "מנסה עמיתים אחר ..."
    },
    "Turn off Accelerator": {
        "message": "כבה את המאיץ"
    },
    "Turn off Hola": {
        "message": "כבה את Hola"
    },
    "Turn on Accelerator": {
        "message": "הפעל Accelerator"
    },
    "Turn on Hola": {
        "message": "הפעל Hola"
    },
    "Turn on to get started": {
        "message": "הפעל כדי להתחיל"
    },
    "UA": {
        "message": "אוקראינה"
    },
    "UG": {
        "message": "אוגנדה"
    },
    "UM": {
        "message": "איים קטנים שלחוף ארצות הברית"
    },
    "US": {
        "message": "ארצות הברית"
    },
    "UY": {
        "message": "אורוגוואי"
    },
    "UZ": {
        "message": "אוזבקיסטן"
    },
    "Unblocker": {
        "message": "פותח חסימה"
    },
    "Unblocker is disabled": {
        "message": "מסיר החסימות מנוטרל"
    },
    "Update": {
        "message": "עדכון"
    },
    "Upgrade": {
        "message": "עדכן"
    },
    "Using": {
        "message": "באמצעות"
    },
    "Using Hola": {
        "message": "שימוש Hola"
    },
    "VA": {
        "message": "הוותיקן"
    },
    "VC": {
        "message": "סנט וינסנט והגרנדינים"
    },
    "VD": {
        "message": "צפון ויאטנם"
    },
    "VE": {
        "message": "ונצואלה"
    },
    "VG": {
        "message": "איי הבתולה הבריטיים"
    },
    "VI": {
        "message": "איי הבתולה האמריקניים"
    },
    "VN": {
        "message": "וייטנאם"
    },
    "VPN Premium": {
        "message": "VPN פרימיום"
    },
    "VU": {
        "message": "ונואטו"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "גרסה מאוד ישנה של Chrome. <a>update</a> Chrome בשביל להשתמש ב Hola"
    },
    "Video": {
        "message": "וידאו"
    },
    "Video stuck?": {
        "message": "הוידאו תקוע?"
    },
    "Videos available for instant streaming": {
        "message": "וידאו זמין להזרמה מיידית"
    },
    "WF": {
        "message": "איי ווליס ופוטונה"
    },
    "WK": {
        "message": "שרות איילנד"
    },
    "WS": {
        "message": "סמואה"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "מעוניין ב Hola במכשירים נוספים? (Xbox, PS, Apple TV, אייפון ...). לחץ כאן"
    },
    "Want to know more?": {
        "message": "רוצה לדעת עוד?"
    },
    "Watch Now": {
        "message": "צפה עכשיו"
    },
    "We found $1 videos": {
        "message": "מצאנו $1 קטעי וידאו"
    },
    "We will be in touch with you soon": {
        "message": "אנחנו נהיה איתך בקשר בקרוב"
    },
    "Working!": {
        "message": "עובד!"
    },
    "Working?": {
        "message": "עובד?"
    },
    "Works on all sites but slower": {
        "message": "עובד על כל האתרים, אבל איטיים יותר"
    },
    "YD": {
        "message": "הרפובליקה העממית הדמוקרטית של תימן"
    },
    "YE": {
        "message": "תימן"
    },
    "YT": {
        "message": "מאיוט"
    },
    "Yes": {
        "message": "כן"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "אתה צריך לשדרג לגרסה העדכנית ביותר של אופרה על מנת להשתמש ב Hola. לחץ <a>כאן</a> לשדרג."
    },
    "ZA": {
        "message": "דרום אפריקה"
    },
    "ZM": {
        "message": "זמביה"
    },
    "ZW": {
        "message": "זימבאבווה"
    },
    "ZZ": {
        "message": "אזור לא ידוע או לא תקין"
    },
    "app_desc": {
        "message": "קבל גישה לאתרים החסומים במדינה, חברה או בית הספר שלך עם Hola !Hola חינמי וקל לשימוש!"
    },
    "app_name": {
        "message": "Hola אינטרנט טוב יותר"
    },
    "back to": {
        "message": "בחזרה אל"
    },
    "changing...": {
        "message": "משתנה..."
    },
    "cool sites": {
        "message": "אתרים מגניבים"
    },
    "current site": {
        "message": "אתר נוכחי"
    },
    "day": {
        "message": "יום"
    },
    "days": {
        "message": "ימים"
    },
    "even more...": {
        "message": "אפילו יותר..."
    },
    "mode": {
        "message": "מצב"
    },
    "more options...": {
        "message": "אפשרויות נוספות ..."
    },
    "not working?": {
        "message": "לא עובד?"
    },
    "not working? try another server": {
        "message": "לא עובד? תנסה שרת אחר"
    },
    "on this page": {
        "message": "בדף זה"
    },
    "sites that are censored": {
        "message": "אתרים שצונזרו"
    },
    "start": {
        "message": "התחל"
    },
    "working? remember": {
        "message": "עובד? שמור"
    }
};
return E; });