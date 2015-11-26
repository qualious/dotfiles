'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " لەڕێی "
    },
    "$1 Buffering?": {
        "message": "$1 وەرگرتنی؟"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola بۆ کردنەوەی $2\n\nکلیک لێرە بکە بۆ هەمان: $3\n\nپێوەکراوی Hola دادەبەزێت، کە ڕێگەدەدات خێراتر ئینتەرنێت بەکاربهێنم و سایتەکان بکەمەوە$4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN ـنی پارەدان"
    },
    "$1 from $2": {
        "message": "$1 لە $2"
    },
    "$1 not found": {
        "message": "$1 نەدۆزرایەوە"
    },
    "$1 via Hola": {
        "message": "$1 لەرێی Hola ـەوە"
    },
    "(some Hola features are not available on your version)": {
        "message": "(هەندێک خزمەتگوزاری Hola لەبەردەستدا نیە بۆ وەشانەکەی تۆ)"
    },
    "About": {
        "message": "دەربارەی"
    },
    "About Hola": {
        "message": "دەربارەی Hola"
    },
    "Accelerator": {
        "message": "خێراکەر"
    },
    "Accelerator is": {
        "message": "خێراکەر چالاکە"
    },
    "Access $1 - cool site!": {
        "message": "کردنەوەی $1 - سایتی نایاب!"
    },
    "Access $1?": {
        "message": "کردنەوەی $1؟"
    },
    "Access any site from any country, free": {
        "message": "کردنەوەی هەر سایتێک لە هەر ووڵاتێک بێت، بەخۆڕایی"
    },
    "Access cool sites": {
        "message": "سەردانکردنی ماڵپەڕە نایابەکان"
    },
    "Access more sites": {
        "message": "کردنەوەی سایتی زیاتر"
    },
    "Accessing $1 with Hola": {
        "message": "کردنەوەی $1 بەهۆی Hola ـەوە"
    },
    "Account": {
        "message": "هەژمار"
    },
    "Account type": {
        "message": "جۆری هەژمار"
    },
    "All ($1)": {
        "message": "هەموو ($1)"
    },
    "Apply settings...": {
        "message": "جێبەجێکردنی ڕێکخستنەکان..."
    },
    "Author site:": {
        "message": "سایتی خاوەندار:"
    },
    "Author:": {
        "message": "خاوەندار:"
    },
    "Awesome!": {
        "message": "سەرنجڕاکێشە!"
    },
    "Back to $1": {
        "message": "گەڕانەوە بۆ $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "ببە بە یەکەم کەسی بەکارهێنەری Hola لە ئامێرەکانی ئایفۆن/ئایپاد - ئێستا هەژمار دروستبکە:"
    },
    "Browsing": {
        "message": "کردنەوەی"
    },
    "Buffering problems?": {
        "message": "کێشە هەیە لە وەرگرتندا؟"
    },
    "Buffering?": {
        "message": "وەردەگیرێت؟"
    },
    "Changing country...": {
        "message": "گۆڕینی ووڵات..."
    },
    "Check out Hola for $1!": {
        "message": "Hola بەدەستبهێنە بۆ $1!"
    },
    "Check your Internet connection": {
        "message": "تۆڕی پەیوەندی ئینتەرنێتەکەت بپشکنە"
    },
    "Choose<br>Country": {
        "message": "ووڵات<br>هەڵبژێرە"
    },
    "Configuring...": {
        "message": "ڕێکخستنەکان..."
    },
    "Connecting...": {
        "message": "پەیوەندیکردن..."
    },
    "Cool site!": {
        "message": "سایتە نایابەکان!"
    },
    "Creative licenses": {
        "message": "مۆڵەتی داهێنان"
    },
    "Delete": {
        "message": "سڕینەوە"
    },
    "Deleted from my list": {
        "message": "سڕینەوە لە لیستەکەمدا"
    },
    "Did it work?": {
        "message": "ئایا کاریکرد؟"
    },
    "Did you experience any buffering?": {
        "message": "هیچ شارەزاییەکت هەیە لە وەرگرتندا؟"
    },
    "Don't show again for $1 for one week": {
        "message": "دووبارە پیشانم مەدەرەوە بۆ $1 ماوەی یەک هەفتە"
    },
    "Don't show again for any site for one week": {
        "message": "پیشانی مەدەرەوە بۆ هیچ سایتێک بۆ ماوەی هەفتەیەک"
    },
    "Downloading": {
        "message": "دادەگیرێت"
    },
    "Enable": {
        "message": "چالاککردن"
    },
    "Enable Hola Accelerator": {
        "message": "چالاککردنی خێراکەری Hola"
    },
    "Enjoy!": {
        "message": "کاتێکی خۆش!"
    },
    "Enter site to access": {
        "message": "سایت بنووسە بۆ کردنەوە"
    },
    "Enter your email": {
        "message": "پۆستی ئەلکترۆنیت بنووسە"
    },
    "Fast": {
        "message": "خێرا"
    },
    "Finding new peers...": {
        "message": "دۆزینەوەی هاوشێوەی نوێ..."
    },
    "Finding peers...": {
        "message": "دۆزینەوەی نێرەرەکان..."
    },
    "Free": {
        "message": "خۆڕایی"
    },
    "From": {
        "message": "لە"
    },
    "Full list": {
        "message": "هەموو لیستەکە"
    },
    "Get 24/7 Unblocking": {
        "message": "بەدەستهێنانی ٢٤/٧ بیست و چوار کاتژمێر و هەفتانە لە کردنەوەی سایتەکان"
    },
    "Get Free Premium": {
        "message": "بەدەستهێنانی شێوازی پارەدان بە خۆڕایی"
    },
    "Get Hola Accelerator": {
        "message": "خێراکەری Hola"
    },
    "Get Hola Player": {
        "message": "لێدەری Hola"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "بەدەستهێنانی وەشانی پارەدانی Hola بۆ خزمەتگوزاری زیاتر و لابردنی ڕیکلامەکان."
    },
    "Get Hola Premium": {
        "message": "بەدەستهێنانی وەشانی پارەدانی Hola"
    },
    "Get Hola for Android": {
        "message": "Hola بۆ ئەندرۆید"
    },
    "Get Premium support": {
        "message": "پاڵپشتی شێوازی پارەدان"
    },
    "Get Unlimited Unblocking": {
        "message": "بەدەستهێنانی کردنەوەی بێسنوور"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "سایتە ڕێگریکراوەکان بکەرەوە، تاقیبکەرەوە ئێستا: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "وەرگرتنی یارمەتی لە ئەندازیارەوە لەڕێی سکایپەوە:"
    },
    "Get the Fastest Servers": {
        "message": "بەدەستهێنانی خێراترین ڕاژەکار"
    },
    "Go": {
        "message": "بڕۆ"
    },
    "Go Hola Premium": {
        "message": "کردن بە وەشانی پارەدانی Hola"
    },
    "Help": {
        "message": "یارمەتی"
    },
    "Hey,\n\nI'm using": {
        "message": "سڵاو,\n\nمن بەرنامەی"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "سڵاو,\n\nمن ئێستا  $1 ($2) ، بەکار ئەهێنم کە زۆرباشە و ڕێگەدەدات بە خێراترین شێوە ئینتەرنێت بکەمەوە $3 لە ووڵاتەکەمدا."
    },
    "Hola": {
        "message": "پێوەکراوی Hola"
    },
    "Hola Accelerator": {
        "message": "خێراکەری Hola"
    },
    "Hola Media Player": {
        "message": "لێدەری ڕەنگاڵەی Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ناتوانێ کاربکات چونکە پێوەکراوێکی تر کۆنترۆڵی ڕێکخستنەکانی پرۆکسی کردووە."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola لە شێوازی ویندۆز هەشت ٨ دا بەباشی کار ناکات، تکایە بیگۆڕە بۆ شێوازی دیسکتۆپ کلیک <a>لێرە</a> بۆ رێنماییەکان"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola لە ئێستادا لەبەردەستدا نیە، بەڵام ئێمە کاری لەسەر دەکەین."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola ناچالاکە، کلیکی لەسەر بکە بۆ چالاککردنی"
    },
    "Hola site list": {
        "message": "لیستی سایتەکانی Hola"
    },
    "I can now access $1 from any country!": {
        "message": "ئێستا ئەتوانم $1 بکەمەوە لەهەر ووڵاتێکەوە بێت!"
    },
    "I did not experience any buffering": {
        "message": "هیچ شارەزاییەکم نیە لە وەرگرتندا"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "من سایتە چاودێریکراو و ڕێگریکراوەکانم کرد بەهۆی Hola بە $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "من پێوەکراوی $1 بەکار ئەهێنم بۆ بینینی $2 لە ووڵاتەکەمدا، وە خێراتریش ئینتەرنێت ئەکرێتەوە!"
    },
    "Improve translation": {
        "message": "باشترکردنی وەرگێڕان"
    },
    "Initializing...": {
        "message": "ئامادەکردن..."
    },
    "Install": {
        "message": "دابەزاندن"
    },
    "Install Accelerator": {
        "message": "دابەزاندنی خێراکەر"
    },
    "Install Free Hola Accelerator": {
        "message": "دابەزاندنی خێراکەری Hola بەخۆڕایی"
    },
    "Instantly watch any torrent Video": {
        "message": "ڕاستەوخۆ سەیری هەر ڤیدیۆیەکی تۆرێنت بکە"
    },
    "Invite friends - free Premium.": {
        "message": "هاوڕێکانت بانگهێشت بکە - وەشانی پارەدان ئەبێ بە خۆڕایی."
    },
    "Invite friends. Get Premium.": {
        "message": "هاوڕێکانت بانگهێشت بکە، وەشانی پارەدان وەرگرە."
    },
    "Language": {
        "message": "زمان"
    },
    "Library": {
        "message": "فۆڵدەر"
    },
    "Loading": {
        "message": "چاوەڕوانبە"
    },
    "Loading site...": {
        "message": "کردنەوەی سایت..."
    },
    "Log in": {
        "message": "چوونەژورەوە"
    },
    "Log out": {
        "message": "دەرچوون"
    },
    "Love Hola?": {
        "message": "Hola ـت بەدڵە؟"
    },
    "Make your Internet better with $1": {
        "message": "ئینتەرنێتەکەت باشتر بکە بەهۆی $1"
    },
    "Menu": {
        "message": "هەڵبژاردن"
    },
    "Might not work on all sites": {
        "message": "لەوانەیە لە ھەموو سایتێکدا کار نەکات"
    },
    "Mode": {
        "message": "شێواز"
    },
    "More countries": {
        "message": "ووڵاتی زیاتر"
    },
    "More sites...": {
        "message": "سایتی زیاتر..."
    },
    "More...": {
        "message": "زیاتر..."
    },
    "My Account": {
        "message": "هەژمارەکەم"
    },
    "My History": {
        "message": "مێژوو"
    },
    "My Settings": {
        "message": "ڕێکخستنەکانم"
    },
    "My favorites": {
        "message": "دڵخوازەکانم"
    },
    "Need Help?": {
        "message": "پێویستت بە یارمەتیە؟"
    },
    "Netflix": {
        "message": "سایتی Netflix"
    },
    "Never ask me again": {
        "message": "هەرگیز پرسیار مەکەرەوە"
    },
    "Never be a peer": {
        "message": "نەبوون بە هاوشێوە هەرگیز"
    },
    "No": {
        "message": "نەخێر"
    },
    "No idle peers found.": {
        "message": "هیچ وەرگرێکی سەرهێڵ نەدۆزرایەوە."
    },
    "No recent videos found": {
        "message": "هیچ دوایین ڤیدیۆیەک نەدۆزرایەوە"
    },
    "No saved videos found": {
        "message": "هیچ ڤیدیۆیەکی پاشەکەوتکراو نەدۆزرایەوە"
    },
    "No title": {
        "message": "بێ ناونیشان"
    },
    "No videos found": {
        "message": "هیچ ڤیدیۆییەک نەدۆزرایەوە"
    },
    "No videos found on active page": {
        "message": "هیچ ڤیدیۆیەک نەدۆزرایەوە لەم پەڕەیەدا"
    },
    "No, Thanks": {
        "message": "نەخێر، سوپاس"
    },
    "No, fix it": {
        "message": "نەخێر، چارەسەرکردن"
    },
    "Not working?": {
        "message": "کاری نەکرد؟"
    },
    "Number of users that pressed not working": {
        "message": "ژمارەی ئەو کەسانەی کە ڕایانگەیاندووە کار ناکات"
    },
    "Number of users that use this option": {
        "message": "ژمارەی ئەو کەسانەی ئەم هەڵبژاردنە بەکار ئەهێنن"
    },
    "Off": {
        "message": "ناچالاک"
    },
    "Oh, yes!": {
        "message": "بەڵێ، زۆرباشە!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "وەشانی فایەرفۆکس کۆنە، کلیک <a>لێرە</a> بکە بۆ نوێکردنەوە."
    },
    "On": {
        "message": "چالاک"
    },
    "Open Media Player": {
        "message": "کردنەوەی لێدەری ڕەنگاڵە"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "خزمەتگوزارییەکی نوێمان Mplayer بەمزوانە لەبەردەستدا ئەبێت!"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "تکایە <a>پێوەکراوەکانی</a> تر ناچالاک بکە کە ئەزانی ئەبنە هۆی کۆنترۆڵکردنی ڕێکخستنەکانی پرۆکسی وەکو ڕێگریکەری ڕیکلام، یان خزمەتگوزارییەکانی تری VPN، هتد."
    },
    "Please enter a valid email address.": {
        "message": "تکایە ناونیشانی پۆستی ئەلکترۆنی دروست بنووسە."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "تکایە ناونیشانی وێب سایتێک بنووسە، بۆ نمونە facebook.com"
    },
    "Please help us get better": {
        "message": "تکایە یارمەتیدەربە لە باشترکردنیدا"
    },
    "Popular in $1": {
        "message": "سایتە بەناوبانگەکان لە $1"
    },
    "Popular in the world": {
        "message": "سایتە بەناوبانگەکانی جیهان"
    },
    "Popular sites": {
        "message": "سایتە بەناوبانگەکان"
    },
    "Premium": {
        "message": "پارەدان"
    },
    "Recent Videos": {
        "message": "دوایین ڤیدیۆکان"
    },
    "Reload": {
        "message": "ئیشپێکردنەوە"
    },
    "Reload Hola": {
        "message": "ئیشپێکردنەوەی Hola"
    },
    "Remember server": {
        "message": "بیرخستنەوەی ڕاژەکار"
    },
    "Report a problem": {
        "message": "ڕاپۆرتکردنی کێشە"
    },
    "Save": {
        "message": "پاراستن"
    },
    "Saved Videos": {
        "message": "ڤیدیۆ پاشەکەوتکراوەکان"
    },
    "Saved for later": {
        "message": "پارێزرا بۆ کاتێکی تر"
    },
    "Search video title": {
        "message": "گەڕان بۆ ناونیشانی ڤیدیۆ"
    },
    "Select a Country": {
        "message": "وڵاتێک دیاریبکە"
    },
    "Select site to unblock": {
        "message": "سایتێک دیاریبکە بۆ کردنەوە"
    },
    "Server saved!": {
        "message": "ڕاژەکار پارێزرا!"
    },
    "Settings": {
        "message": "ڕێکخستنەکان"
    },
    "Share": {
        "message": "بڵاوکردنەوە"
    },
    "Share $1 on $2": {
        "message": "بڵاوکردنەوەی $1 لە $2"
    },
    "Share $1 via $2": {
        "message": "بڵاوکردنەوەی $1 لەڕێی $2"
    },
    "Sign up": {
        "message": "خۆ تۆمارکردن"
    },
    "Solve buffering": {
        "message": "چارەسەرکردنی وەرگرتن"
    },
    "Solve buffering problems with": {
        "message": "چارەسەرکردنی کێشەی وەرگرتن بەهۆی"
    },
    "Solves it": {
        "message": "چارەسەرکردن"
    },
    "Staff Picks": {
        "message": "هەڵبژاردەکانی ئێمە"
    },
    "Start Hola": {
        "message": "دەستپێکردنی Hola"
    },
    "Starting...": {
        "message": "دەستپێکردن..."
    },
    "Stop Hola": {
        "message": "وەستاندنی Hola"
    },
    "Stopping peer routing...": {
        "message": "وەستاندنی وەرگری هاوشێوە..."
    },
    "Stream": {
        "message": "لێدان"
    },
    "Stream Instantly": {
        "message": "لێدانی ڕاستەوخۆ"
    },
    "Submit": {
        "message": "ناردن"
    },
    "Support Hola": {
        "message": "پاڵپشتی Hola"
    },
    "Talk to us on $1": {
        "message": "پەیوەندیمان پێوە بکە لە $1"
    },
    "Tell friends about $1": {
        "message": "بە هاوڕێکانت بڵێ دەربارەی $1"
    },
    "Testing connection...": {
        "message": "تاقیکردنەوەی پەیوەندی..."
    },
    "Thank you!": {
        "message": "سوپاس!"
    },
    "There seems to be an error": {
        "message": "وا دیارە کێشەیەک هەیە"
    },
    "Top popular sites": {
        "message": "سایتە بەناوبانگەکان"
    },
    "Translate to your language": {
        "message": "وەرگێڕان بۆ زمانەکەت"
    },
    "Try again": {
        "message": "دووبارە هەوڵدانەوە"
    },
    "Try another server": {
        "message": "تاقیکردنەوەی ڕاژەکارێکی تر"
    },
    "Try it": {
        "message": "تاقی بکەرەوە"
    },
    "Try to <span>reload</span>": {
        "message": "هەوڵدان بۆ <span>دووبارەکردنەوە</span>"
    },
    "Trying another peer...": {
        "message": "تاقیکردنەوەی وەرگرێکی تر..."
    },
    "Turn off Accelerator": {
        "message": "ناچالاککردنی خێراکەر"
    },
    "Turn off Hola": {
        "message": "ناچالاککردنی Hola"
    },
    "Turn on Accelerator": {
        "message": "چالاککردنی خێراکردن"
    },
    "Turn on Hola": {
        "message": "چالاککردنی Hola"
    },
    "Turn on to get started": {
        "message": "چالاکی بکە بۆ دەستپێکردن"
    },
    "Unblocker": {
        "message": "کردنەوەی قفڵ"
    },
    "Unblocker is disabled": {
        "message": "کردنەوەی قفڵ ناچالاککراوە"
    },
    "Unblocker?": {
        "message": "کردنەوەی قفڵ؟"
    },
    "Update": {
        "message": "نوێکردنەوە"
    },
    "Upgrade": {
        "message": "بەرزکرنەوەی وەشان"
    },
    "Using": {
        "message": "بەکارهێنانی"
    },
    "Using Hola": {
        "message": "بەکارهێنانی Hola"
    },
    "VPN": {
        "message": "ڤی پی ئێن VPN"
    },
    "VPN Premium": {
        "message": "VPN ی شێوەی پارەدان"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "وەشانی گۆگڵ کرۆم زۆر کۆنە، تکایە <a>نوێیبکەرەوە</a> بۆ بەکارهێنانی Hola"
    },
    "Video": {
        "message": "ڤیدیۆ"
    },
    "Video stuck?": {
        "message": "ڤیدیۆ کێشەی هەیە؟"
    },
    "Videos available for instant streaming": {
        "message": "ڤیدیۆکان ئامادەن بۆ سەیرکردنی ڕاستەوخۆ"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "ئەتەوێ Hola بەکاربهێنیت لە ئامێرەکانی تردا؟ وەکو (کۆمپیوتەر، ئێکس بۆکس، ئەپڵ تیڤی، ئەندرۆید، ئایفۆن...) ئەوا کلیک لێرە بکە"
    },
    "Want to know more?": {
        "message": "ئەتەوێ زیاتر بزانیت؟"
    },
    "Watch Now": {
        "message": "سەیرکردن"
    },
    "We found $1 videos": {
        "message": "لەم سایتەدا $1 ڤیدیۆ هەیە"
    },
    "We will be in touch with you soon": {
        "message": "بەمزوانە وەڵامت ئەدەینەوە"
    },
    "Working!": {
        "message": "کاریکرد!"
    },
    "Working?": {
        "message": "کاریکرد؟"
    },
    "Yes": {
        "message": "بەڵێ"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "پێویستە دوایین وەشانی وێبگەڕی ئۆپێرا دابگریت بۆ بەکارهێنانی ئەم پێوەکراوە، کلیک <a>لێرە</a> بکە بۆ نوێکردنەوە."
    },
    "Youtube": {
        "message": "سایتی یوتوب YouTube"
    },
    "app_desc": {
        "message": "کردنەوەی ئەو سایتانەی قفڵکراون لە وڵاتەکەدا، لە کۆمپانیا یان قوتابخانە بەهۆی Hola ـەوە، Hola خۆڕاییە و بەکارهێنانی ئاسانە!"
    },
    "app_name": {
        "message": "Hola ئینتەرنێتێکی باشتر"
    },
    "back to": {
        "message": "گەڕانەوە بۆ"
    },
    "changing...": {
        "message": "گۆڕینی..."
    },
    "cool sites": {
        "message": "ماڵپەڕە نایابەکان"
    },
    "current site": {
        "message": "ئەم سایتە"
    },
    "even more...": {
        "message": "هەرەوەها زیاتریش..."
    },
    "mode": {
        "message": "شێواز"
    },
    "more options...": {
        "message": "هەڵبژاردنی زیاتر..."
    },
    "not working?": {
        "message": "کارینەکرد؟"
    },
    "not working? try another server": {
        "message": "کارینەکرد؟ ڕاژەکاری تر بەکاربهێنە"
    },
    "on this page": {
        "message": "لەم لاپەڕەیەدا"
    },
    "sites that are censored": {
        "message": "سایتە چاودێریکراوەکان"
    },
    "start": {
        "message": "دەستپێکردن"
    },
    "working? remember": {
        "message": "کاریکرد؟ بیرخستنەوە"
    }
};
return E; });