'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "এর মাধ্যমে"
    },
    "$1 Buffering?": {
        "message": "$1 বাফারিং?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 হোলা একই কাজ করার জন্য এখানে ক্লিক করুন $2\n\nঅ্যাক্সেস: $3\n\nএটা আমার দ্রুত ইন্টারনেট সার্ফ এবং অ্যাক্সেস করতে দেয়, যা Hola, ইনস্টল $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN প্রিমিয়াম"
    },
    "$1 from $2": {
        "message": "$2 থেকে $1"
    },
    "$1 not found": {
        "message": "$1 পাওয়া যায় না"
    },
    "$1 via Hola": {
        "message": "Hola মাধ্যমে $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(কিছু Hola বৈশিষ্ট্য আপনার সংস্করণে উপলব্ধ হয় না)"
    },
    "AC": {
        "message": "আসেনশন দ্বীপ"
    },
    "AD": {
        "message": "এ্যান্ডোরা"
    },
    "AE": {
        "message": "সংযুক্ত আরব আমিরাত"
    },
    "AF": {
        "message": "আফগানিস্তান"
    },
    "AG": {
        "message": "এন্টিগুয়া ও বারবুডা"
    },
    "AI": {
        "message": "এ্যাঙ্গুইলা"
    },
    "AL": {
        "message": "আলব্যানিয়া"
    },
    "AM": {
        "message": "আর্মেনিয়া"
    },
    "AN": {
        "message": "নেদারল্যান্ডস এ্যান্টিলিস"
    },
    "AO": {
        "message": "এ্যাঙ্গোলা"
    },
    "AQ": {
        "message": "এন্টার্কটিকা"
    },
    "AR": {
        "message": "আর্জেণ্টাইনা"
    },
    "AS": {
        "message": "আমেরিকান সামোয়া"
    },
    "AT": {
        "message": "অস্ট্রিয়া"
    },
    "AU": {
        "message": "অস্ট্রেলিয়া"
    },
    "AW": {
        "message": "আরুবা"
    },
    "AX": {
        "message": "আলান্ড দ্বীপপুঞ্জ"
    },
    "AZ": {
        "message": "আজারবাইজান"
    },
    "About": {
        "message": "প্রায়"
    },
    "About Hola": {
        "message": "Hola সম্পর্কে"
    },
    "Accelerator": {
        "message": "বেগবর্ধক"
    },
    "Accelerator is": {
        "message": "বেগবর্ধক হয়"
    },
    "Access $1 - cool site!": {
        "message": "$1 অ্যাক্সেস - শীতল সাইট!"
    },
    "Access $1?": {
        "message": "$1 অ্যাক্সেস?"
    },
    "Access any site from any country, free": {
        "message": "বিনামূল্যে, কোন দেশ থেকে যে কোন সাইট অ্যাক্সেস"
    },
    "Access cool sites": {
        "message": "প্রবেশ শীতল সাইট"
    },
    "Access more sites": {
        "message": "অ্যাকসেস আরো সাইট"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "অ্যাক্সেস সাইট আপনার দেশে সেন্সর এবং Hola সাথে আপনার ইন্টারনেট ত্বরান্বিত - বিনামূল্যে!"
    },
    "Accessing $1 with Hola": {
        "message": "হোলা সঙ্গে $1 ব্যবহার"
    },
    "Account": {
        "message": "হিসাব"
    },
    "Account type": {
        "message": "অ্যাকাউন্ট ধরন"
    },
    "Activating...": {
        "message": "সক্রিয় করা হচ্ছে..."
    },
    "All ($1)": {
        "message": "সমস্ত ($1)"
    },
    "Apply settings...": {
        "message": "সেটিংস প্রয়োগ করুন ..."
    },
    "Author site:": {
        "message": "লেখক সাইট:"
    },
    "Author:": {
        "message": "লেখক:"
    },
    "Awesome!": {
        "message": "জট্টিল!"
    },
    "BA": {
        "message": "বসনিয়া ও হার্জেগোভিনা"
    },
    "BB": {
        "message": "বারবাদোস"
    },
    "BD": {
        "message": "বাংলাদেশ"
    },
    "BE": {
        "message": "বেলজিয়াম"
    },
    "BF": {
        "message": "বুরকিনা ফাসো"
    },
    "BG": {
        "message": "বুলগেরিয়া"
    },
    "BH": {
        "message": "বাহরাইন"
    },
    "BI": {
        "message": "বুরুন্ডি"
    },
    "BJ": {
        "message": "বেনিন"
    },
    "BL": {
        "message": "সেন্ট বারথেলিমি"
    },
    "BM": {
        "message": "বারমুডা"
    },
    "BN": {
        "message": "ব্রুনেই"
    },
    "BO": {
        "message": "বোলিভিয়া"
    },
    "BQ": {
        "message": "ব্রিটিশ এন্টারটিক এলাকা"
    },
    "BR": {
        "message": "ব্রাজিল"
    },
    "BS": {
        "message": "বাহামা দ্বীপপুঞ্জ"
    },
    "BT": {
        "message": "ভুটান"
    },
    "BV": {
        "message": "বোভেট দ্বীপ"
    },
    "BW": {
        "message": "বতসোয়ানা"
    },
    "BY": {
        "message": "বেলোরুশিয়া"
    },
    "BZ": {
        "message": "বেলিয"
    },
    "Back to $1": {
        "message": "পিছনে থেকে $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "আইফোন / রহমান জন্য Hola পেতে প্রথম হতে - এখন রেজিস্টার:"
    },
    "Browsing": {
        "message": "ব্রাউজিং"
    },
    "Buffering problems?": {
        "message": "বাফারিং সমস্যা?"
    },
    "Buffering?": {
        "message": "বাফারিং?"
    },
    "CA": {
        "message": "কানাডা"
    },
    "CC": {
        "message": "কোকোস দ্বীপপুঞ্জ"
    },
    "CD": {
        "message": "কঙ্গো - কিনসাসা"
    },
    "CF": {
        "message": "মধ্য আফ্রিকান প্রজাতন্ত্র"
    },
    "CG": {
        "message": "কঙ্গো"
    },
    "CH": {
        "message": "সুইজর্লণ্ড"
    },
    "CI": {
        "message": "আইভরি কোস্ট"
    },
    "CK": {
        "message": "কুক দ্বীপপুঞ্জ"
    },
    "CL": {
        "message": "চিলি"
    },
    "CM": {
        "message": "ক্যামেরুন"
    },
    "CN": {
        "message": "চীন"
    },
    "CO": {
        "message": "কোলোম্বিয়া"
    },
    "CP": {
        "message": "ক্লিপারটন আইল্যান্ড"
    },
    "CR": {
        "message": "কোস্টারিকা"
    },
    "CS": {
        "message": "সারবিয়ান এবং মন্টেনিগ্রো"
    },
    "CT": {
        "message": "ক্যান্টন এবং Enderbury দ্বীপপুঞ্জ"
    },
    "CU": {
        "message": "কিউবা"
    },
    "CV": {
        "message": "কেপভার্দে"
    },
    "CX": {
        "message": "ক্রিসমাস দ্বীপ"
    },
    "CY": {
        "message": "সাইপ্রাস"
    },
    "CZ": {
        "message": "চেক প্রজাতন্ত্র"
    },
    "Changing country...": {
        "message": "দেশ পরিবর্তন ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 জন্য হোলা পরীক্ষা করে দেখুন!"
    },
    "Check out Hola for mobile devices": {
        "message": "মোবাইল ডিভাইসের জন্য Hola খুঁজে বার"
    },
    "Check your Internet connection": {
        "message": "আপনি ইন্টারনেট আছে কিনা তা পরীক্ষা করুন"
    },
    "Choose<br>Country": {
        "message": "নির্বাচন করা <br> দেশ"
    },
    "Configuring...": {
        "message": "কনফিগার করার ..."
    },
    "Connecting...": {
        "message": "সংযুক্ত হচ্ছে ..."
    },
    "Cool site!": {
        "message": "ডাউনলোড সাইট!"
    },
    "Creative licenses": {
        "message": "ক্রিয়েটিভ লাইসেন্স"
    },
    "DD": {
        "message": "পূর্ব জার্মানি"
    },
    "DE": {
        "message": "জার্মানি"
    },
    "DG": {
        "message": "দিয়েগো গার্সিয়া"
    },
    "DJ": {
        "message": "জিবুতি"
    },
    "DK": {
        "message": "ডেনমার্ক"
    },
    "DM": {
        "message": "ডোমিনিকা"
    },
    "DO": {
        "message": "ডোমেনিকান প্রজাতন্ত্র"
    },
    "DZ": {
        "message": "এলজিরিয়া"
    },
    "Delete": {
        "message": "মুছে দিন"
    },
    "Deleted from my list": {
        "message": "আমার তালিকা থেকে মুছে ফেলা"
    },
    "Did it work?": {
        "message": "এটি কি কাজ?"
    },
    "Did you experience any buffering?": {
        "message": "আপনার কোন বাফার উপলব্ধ অনুভব করেছিল?"
    },
    "Disliked it": {
        "message": "এটি অপছন্দ"
    },
    "Don't show again for $1 for one week": {
        "message": "এক সপ্তাহের জন্য $1 জন্য আবার দেখাবেন না"
    },
    "Don't show again for any site for one week": {
        "message": "এক সপ্তাহের জন্য কোন সাইট জন্য আবার দেখাবেন না"
    },
    "Downloading": {
        "message": "ডাউনলোড"
    },
    "EA": {
        "message": "কুউটা এবং মেলিলা"
    },
    "EC": {
        "message": "ইকুয়েডর"
    },
    "EE": {
        "message": "এস্তোনিয়া"
    },
    "EG": {
        "message": "মিশর"
    },
    "EH": {
        "message": "পশ্চিমী সাহারা"
    },
    "ER": {
        "message": "ইরিত্রিয়া"
    },
    "ES": {
        "message": "স্পেন"
    },
    "ET": {
        "message": "ইফিওপিয়া"
    },
    "EU": {
        "message": "ইয়ুরোপের সংঘ"
    },
    "Enable": {
        "message": "সক্ষম করা"
    },
    "Enable Hola Accelerator": {
        "message": "Hola বেগবর্ধক সক্রিয় করুন"
    },
    "Enjoy!": {
        "message": "উপভোগ করুন!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome- এর জন্য Hola সেবন?"
    },
    "Enter site to access": {
        "message": "অ্যাক্সেস সাইটে প্রবেশ"
    },
    "Enter your email": {
        "message": "আপনার ইমেল লিখুন"
    },
    "FI": {
        "message": "ফিন্ল্যাণ্ড"
    },
    "FJ": {
        "message": "ফিজি"
    },
    "FK": {
        "message": "ফকল্যান্ড দ্বীপপুঞ্জ"
    },
    "FM": {
        "message": "মাইক্রোনেশিয়া"
    },
    "FO": {
        "message": "ফ্যারও দ্বীপপুঞ্জ"
    },
    "FQ": {
        "message": "ফরাসি দক্ষিণ ও দখিনা অঞ্চলসমূহ"
    },
    "FR": {
        "message": "ফ্রান্স"
    },
    "FX": {
        "message": "মেট্রোপলিটন ফ্রান্স"
    },
    "Fast": {
        "message": "দ্রুত"
    },
    "Finding new peers...": {
        "message": "নতুন সহকর্মীরা খোঁজা ..."
    },
    "Finding peers...": {
        "message": "সহকর্মীরা খোঁজা ..."
    },
    "Free": {
        "message": "বিনামূল্যে"
    },
    "From": {
        "message": "থেকে"
    },
    "Full list": {
        "message": "সম্পূর্ণ তালিকা"
    },
    "GA": {
        "message": "গ্যাবন"
    },
    "GB": {
        "message": "গ্রেটবৃটেন"
    },
    "GD": {
        "message": "গ্রেনাডা"
    },
    "GE": {
        "message": "জর্জিয়া"
    },
    "GF": {
        "message": "ফরাসী গায়ানা"
    },
    "GG": {
        "message": "গ্রাঞ্জি"
    },
    "GH": {
        "message": "ঘানা"
    },
    "GI": {
        "message": "জিব্রাল্টার"
    },
    "GL": {
        "message": "গ্রীনল্যান্ড"
    },
    "GM": {
        "message": "গাম্বিয়া"
    },
    "GN": {
        "message": "গিনি"
    },
    "GP": {
        "message": "গুয়াদেলৌপ"
    },
    "GQ": {
        "message": "নিরক্ষীয় গিনি"
    },
    "GR": {
        "message": "গ্রীস্"
    },
    "GS": {
        "message": "দক্ষিণ জর্জিয়া ও দক্ষিণ স্যান্ডউইচ দ্বীপপুঞ"
    },
    "GT": {
        "message": "গোয়াটিমালা"
    },
    "GU": {
        "message": "গুয়াম"
    },
    "GW": {
        "message": "গিনি-বিসাউ"
    },
    "GY": {
        "message": "গিয়ানা"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 আনব্লকিং পান"
    },
    "Get Free Premium": {
        "message": "ফ্রি প্রিমিয়াম পান"
    },
    "Get Hola Accelerator": {
        "message": "Hola বেগবর্ধক পান"
    },
    "Get Hola Player": {
        "message": "পান Hola প্লেয়ার"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "জাতিসংঘের বাধাপ্রাপ্ত, বিজ্ঞাপন মুক্ত পরিসেবার জন্য Hola প্লাস পান."
    },
    "Get Hola Premium": {
        "message": "Hola প্রিমিয়াম পান"
    },
    "Get Hola for Android": {
        "message": "Android এর জন্য Hola পান"
    },
    "Get Premium support": {
        "message": "প্রিমিয়াম সমর্থন পান"
    },
    "Get Unlimited Unblocking": {
        "message": "আনলিমিটেড আনব্লকিং পান"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", সেন্সর সাইট অ্যাক্সেস পান এটি এখন চেষ্টা করুন: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "স্কাইপ প্রকৌশলী থেকে সাহায্য পাওয়া যায়:"
    },
    "Get the Fastest Servers": {
        "message": "দ্রুততম সার্ভার পান"
    },
    "Go": {
        "message": "যান"
    },
    "Go Hola Premium": {
        "message": "যান Hola প্রিমিয়াম"
    },
    "HK": {
        "message": "হংকং এসএআর চীনা"
    },
    "HM": {
        "message": "হার্ড দ্বীপ এবং ম্যাকডোনাল্ড দ্বীপপুঞ্জ"
    },
    "HN": {
        "message": "হণ্ডুরাস"
    },
    "HR": {
        "message": "ক্রোয়েশিয়া"
    },
    "HT": {
        "message": "হাইতি"
    },
    "HU": {
        "message": "হাঙ্গেরি"
    },
    "Hate it": {
        "message": "ঘৃণা করি"
    },
    "Help": {
        "message": "সাহায্য করুন"
    },
    "Hey,\n\nI'm using": {
        "message": "আরে,\n\nআমি ব্যবহার করছি"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "হাই,\n\nআমি $1 ($2) ব্যবহার করে. এটা আমার দ্রুত ইন্টারনেট সার্ফ এবং আমার দেশ $3 অ্যাক্সেস করতে দেয়."
    },
    "Hola Accelerator": {
        "message": "Hola বেগবর্ধক"
    },
    "Hola Media Player": {
        "message": "Hola মিডিয়া প্লেয়ার"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "অন্য এক্সটেনশন আপনার প্রক্সি সেটিংস নিয়ন্ত্রন কারণ Hola কাজ নাও করতে পারে."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola উইন্ডোজ 8 মোডে দুর্দান্ত কাজ করে না. ডেস্কটপ মোডে স্যুইচ করুন দয়া করে. নির্দেশাবলীর জন্য <a> এখানে </a> ক্লিক করুন"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola অধিকার এখন পাওয়া যায় না, কিন্তু আমরা এটা কাজ করছে."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola বন্ধ, চালু ক্লিক করুন"
    },
    "Hola site list": {
        "message": "Hola সাইট তালিকা"
    },
    "I can now access $1 from any country!": {
        "message": "আমি এখন যে কোনো দেশ থেকে $1 অ্যাক্সেস করতে পারেন!"
    },
    "I did not experience any buffering": {
        "message": "আমি কোনো বাফার উপলব্ধ সম্মুখীন করা হয়নি"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "আমি কেবল $1 জন্য হোলা ব্যবহার করে একটি সেন্সর সাইট ব্যবহার!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "আমি আমার দেশের $2 দেখতে $1 ব্যবহার করে, এবং দ্রুত সার্ফ করছি!"
    },
    "IC": {
        "message": "ক্যানারি দ্বীপপুঞ্জ"
    },
    "ID": {
        "message": "ইন্দোনেশিয়া"
    },
    "IE": {
        "message": "আয়ার্লণ্ড"
    },
    "IL": {
        "message": "ইস্রায়েল"
    },
    "IM": {
        "message": "ম্যানদ্বীপ"
    },
    "IN": {
        "message": "ভারত"
    },
    "IO": {
        "message": "ব্রিটিশ ভারত মহাসাগরীয় অঞ্চল"
    },
    "IQ": {
        "message": "ইরাক"
    },
    "IR": {
        "message": "ইরান"
    },
    "IS": {
        "message": "আইসলণ্ড"
    },
    "IT": {
        "message": "ইতালী"
    },
    "Improve translation": {
        "message": "অনুবাদ উন্নতি"
    },
    "Initializing...": {
        "message": "আরম্ভের ..."
    },
    "Install": {
        "message": "ইনস্টল করুন"
    },
    "Install Accelerator": {
        "message": "বেগবর্ধক ইনস্টল করুন"
    },
    "Install Free Hola Accelerator": {
        "message": "বিনামূল্যে Hola বেগবর্ধক ইনস্টল করুন"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "চালাও Hola ব্যবহার করা চালিয়ে যেতে Hola ইঞ্জিন ইনস্টল"
    },
    "Instantly watch any torrent Video": {
        "message": "তাত্ক্ষণিকভাবে কোনো জলস্রোত ভিডিও ঘড়ি"
    },
    "Invite friends - free Premium.": {
        "message": "বন্ধুদের আমন্ত্রণ - বিনামূল্যে প্রিমিয়াম."
    },
    "Invite friends. Get Premium.": {
        "message": "বন্ধুদের আমন্ত্রণ. প্রিমিয়াম পান."
    },
    "It was okay": {
        "message": "এটা ঠিক ছিলো"
    },
    "JE": {
        "message": "জার্সি"
    },
    "JM": {
        "message": "জ্যামেকা"
    },
    "JO": {
        "message": "জর্ডন"
    },
    "JP": {
        "message": "জাপান"
    },
    "JT": {
        "message": "জনস্টন দ্বীপ"
    },
    "KE": {
        "message": "কেনিয়া"
    },
    "KG": {
        "message": "কির্গিজিয়া"
    },
    "KH": {
        "message": "কাম্বোজ"
    },
    "KI": {
        "message": "কিরিবাতি"
    },
    "KM": {
        "message": "কমোরোস"
    },
    "KN": {
        "message": "সেন্ট কিটস ও নেভিস"
    },
    "KP": {
        "message": "উত্তর কোরিয়া"
    },
    "KR": {
        "message": "দক্ষিণ কোরিয়া"
    },
    "KW": {
        "message": "কুয়েত"
    },
    "KY": {
        "message": "কেম্যান দ্বীপপুঞ্জ"
    },
    "KZ": {
        "message": "কাজাকস্থান"
    },
    "LA": {
        "message": "লাওস"
    },
    "LB": {
        "message": "লেবানন"
    },
    "LC": {
        "message": "সেন্ট লুসিয়া"
    },
    "LI": {
        "message": "লিচেনস্টেইন"
    },
    "LK": {
        "message": "শ্রীলঙ্কা"
    },
    "LR": {
        "message": "লাইবেরিয়া"
    },
    "LS": {
        "message": "লেসোথো"
    },
    "LT": {
        "message": "লিত্ভা"
    },
    "LU": {
        "message": "লাক্সেমবার্গ"
    },
    "LV": {
        "message": "লাত্ভিয়া"
    },
    "LY": {
        "message": "লিবিয়া"
    },
    "Language": {
        "message": "ভাষা"
    },
    "Library": {
        "message": "লাইব্রেরি"
    },
    "Like it": {
        "message": "পছন্দ করি"
    },
    "Loading": {
        "message": "বোঝাই"
    },
    "Loading site...": {
        "message": "বোঝাই"
    },
    "Log in": {
        "message": "লগিন করো"
    },
    "Log out": {
        "message": "লগ আউট"
    },
    "Love Hola?": {
        "message": "Hola ভালবাসেন?"
    },
    "Love it": {
        "message": "এটি প্রেমের"
    },
    "MA": {
        "message": "মোরক্কো"
    },
    "MC": {
        "message": "মোনাকো"
    },
    "MD": {
        "message": "মোল্দাভিয়া"
    },
    "ME": {
        "message": "মন্টিনিগ্রো"
    },
    "MF": {
        "message": "সেন্ট মার্টিন"
    },
    "MG": {
        "message": "মাদাগাস্কার"
    },
    "MH": {
        "message": "মার্শাল দ্বীপপুঞ্জ"
    },
    "MI": {
        "message": "মিডওয়ে দ্বীপপুঞ্জ"
    },
    "MK": {
        "message": "ম্যাসাডোনিয়া"
    },
    "ML": {
        "message": "মালি"
    },
    "MM": {
        "message": "মায়ানমার"
    },
    "MN": {
        "message": "মঙ্গোলিয়া"
    },
    "MO": {
        "message": "ম্যাকাও এসএআর চীনা"
    },
    "MP": {
        "message": "উত্তরাঞ্চলীয় মারিয়ানা দ্বীপপুঞ্জ"
    },
    "MQ": {
        "message": "মার্টিনিক"
    },
    "MR": {
        "message": "মরিতানিয়া"
    },
    "MS": {
        "message": "মন্টসেরাট"
    },
    "MT": {
        "message": "মাল্টা"
    },
    "MU": {
        "message": "মরিশাস"
    },
    "MV": {
        "message": "মালদ্বীপ"
    },
    "MW": {
        "message": "মালাউই"
    },
    "MX": {
        "message": "মক্সিকো"
    },
    "MY": {
        "message": "মাল্যাশিয়া"
    },
    "MZ": {
        "message": "মোজাম্বিক"
    },
    "Make your Internet better with $1": {
        "message": "নিশ্চিত করুন যে আপনার ইন্টারনেট ভাল সঙ্গে $1"
    },
    "Menu": {
        "message": "মেনু"
    },
    "Might not work on all sites": {
        "message": "সমস্ত সাইটকে কাজ হতে পারে না"
    },
    "Mode": {
        "message": "মোড"
    },
    "More countries": {
        "message": "আরো দেশ"
    },
    "More sites...": {
        "message": "আরও অনেক কিছু ..."
    },
    "More...": {
        "message": "আরও অনেক কিছু ..."
    },
    "My Account": {
        "message": "আমার অ্যাকাউন্ট"
    },
    "My History": {
        "message": "আমার ইতিহাস"
    },
    "My Settings": {
        "message": "আমার সেটিংস"
    },
    "My favorites": {
        "message": "আমার প্রিয়"
    },
    "NA": {
        "message": "নামিবিয়া"
    },
    "NC": {
        "message": "নিউ ক্যালেডোনিয়া"
    },
    "NE": {
        "message": "নাইজার"
    },
    "NF": {
        "message": "নিরফোক দ্বীপ"
    },
    "NG": {
        "message": "নাইজেরিয়া"
    },
    "NI": {
        "message": "নিকারাগুয়া"
    },
    "NL": {
        "message": "হলণ্ড"
    },
    "NO": {
        "message": "নরওয়ে"
    },
    "NP": {
        "message": "নেপাল"
    },
    "NQ": {
        "message": "Dronning Maud ভূমি"
    },
    "NR": {
        "message": "নাউরু"
    },
    "NT": {
        "message": "নিরপেক্ষ অঞ্চল"
    },
    "NU": {
        "message": "নিউয়ে"
    },
    "NZ": {
        "message": "নিউ জিলণ্ড"
    },
    "Need Help?": {
        "message": "সাহায্য প্রয়োজন?"
    },
    "Never ask me again": {
        "message": "আবার আমাকে জিজ্ঞাসা করবেন না"
    },
    "Never be a peer": {
        "message": "একটি পিয়ার হবে না"
    },
    "No": {
        "message": "না"
    },
    "No idle peers found.": {
        "message": "কোন অলস মিত্রগণ পাওয়া."
    },
    "No recent videos found": {
        "message": "কোন সাম্প্রতিক ভিডিও পাওয়া"
    },
    "No saved videos found": {
        "message": "কোন সংরক্ষিত ভিডিও পাওয়া"
    },
    "No title": {
        "message": "কোনো শিরোনাম নেই"
    },
    "No videos found": {
        "message": "কোন ভিডিও পাওয়া"
    },
    "No videos found on active page": {
        "message": "সক্রিয় পৃষ্ঠায় পাওয়া কোন ভিডিও"
    },
    "No, Thanks": {
        "message": "না, ধন্যবাদ"
    },
    "No, fix it": {
        "message": "না, এটা ঠিক"
    },
    "Not working?": {
        "message": "কাজ নেই?"
    },
    "Number of users that pressed not working": {
        "message": "কাজ না করে চাপা যে ব্যবহারকারীর সংখ্যা"
    },
    "Number of users that use this option": {
        "message": "এই অপশনটি ব্যবহার করে ব্যবহারকারীর সংখ্যা"
    },
    "OM": {
        "message": "ওমান"
    },
    "Off": {
        "message": "বন্ধ"
    },
    "Oh, yes!": {
        "message": "হ্যাঁ, ওহ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox-র পুরোনো সংস্করণ. প্রেস <a> এখানে </a> আপগ্রেড করার."
    },
    "On": {
        "message": "উপর"
    },
    "Open Media Player": {
        "message": "ওপেন মিডিয়া প্লেয়ার"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "আমাদের নতুন ব্র্যান্ডের Mplayer শীঘ্রই আসছে হয়!"
    },
    "PA": {
        "message": "পানামা"
    },
    "PC": {
        "message": "প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জ ট্রাস্ট টেরিটরি"
    },
    "PE": {
        "message": "পিরু"
    },
    "PF": {
        "message": "ফরাসী পলিনেশিয়া"
    },
    "PG": {
        "message": "পাপুয়া নিউ গিনি"
    },
    "PH": {
        "message": "ফিলিপাইন"
    },
    "PK": {
        "message": "পাকিস্তান"
    },
    "PL": {
        "message": "পোল্যাণ্ড"
    },
    "PM": {
        "message": "সেন্ট পিয়ের ও মিকুয়েলন"
    },
    "PN": {
        "message": "পিটকেয়ার্ন"
    },
    "PR": {
        "message": "পুয়ের্টোরিকো"
    },
    "PS": {
        "message": "ফিলিস্তিন অঞ্চল"
    },
    "PT": {
        "message": "পর্তুগাল"
    },
    "PU": {
        "message": "অবস্থান বিবিধ প্রশান্ত মহাসাগরীয় দ্বীপপুঞ্জ"
    },
    "PW": {
        "message": "পালাউ"
    },
    "PY": {
        "message": "প্যারাগোয়ে"
    },
    "PZ": {
        "message": "পানামা খাল জোন"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "আপনি যেমন বিজ্ঞাপন ব্লকার, অন্যান্য তথ্য VPN সেবা, হিসাবে আপনার প্রক্সি সেটিংস নিয়ন্ত্রণ করা হতে পারে মনে করেন যে অন্যান্য <a>এক্সটেনশন</a> নিষ্ক্রিয় করুন"
    },
    "Please enter a valid email address.": {
        "message": "একটি বৈধ ইমেইল ঠিকানা লিখুন."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com মত একটি ওয়েব সাইট ঠিকানা লিখুন"
    },
    "Please help us get better": {
        "message": "আমাদের আরও ভাল সাহায্য করুন"
    },
    "Popular in $1": {
        "message": "জনপ্রিয় এ $1"
    },
    "Popular in the world": {
        "message": "বিশ্বের জনপ্রিয়"
    },
    "Popular sites": {
        "message": "জনপ্রিয় সাইট"
    },
    "Premium": {
        "message": "প্রিমিয়াম"
    },
    "QA": {
        "message": "কাতার"
    },
    "QO": {
        "message": "পার্শ্ববর্তী ওশেনিয়া"
    },
    "RE": {
        "message": "রিইউনিয়ন"
    },
    "RO": {
        "message": "রুমানিয়া"
    },
    "RS": {
        "message": "সারবিয়া"
    },
    "RU": {
        "message": "রাশিয়া"
    },
    "RW": {
        "message": "রুয়ান্ডা"
    },
    "Rate us": {
        "message": "আমাদের ব্যাপারে আপনার মতামত দিন"
    },
    "Recent Videos": {
        "message": "সাম্প্রতিক ভিডিও"
    },
    "Reload": {
        "message": "পুনরায় বোঝাই করা"
    },
    "Reload Hola": {
        "message": "Hola পুনঃ লোড করুন"
    },
    "Remember server": {
        "message": "সার্ভার মনে রাখুন"
    },
    "Report a problem": {
        "message": "একটি সমস্যা প্রতিবেদন করুন"
    },
    "Retry safe mode": {
        "message": "নিরাপদ মোড পুনঃচেষ্টা"
    },
    "SA": {
        "message": "সাউদি আরব"
    },
    "SB": {
        "message": "সলোমন দ্বীপপুঞ্জ"
    },
    "SC": {
        "message": "সিসিলি"
    },
    "SD": {
        "message": "সুদান"
    },
    "SE": {
        "message": "সুইডেন"
    },
    "SG": {
        "message": "সিঙ্গাপুর"
    },
    "SH": {
        "message": "সেন্ট হেলেনা"
    },
    "SI": {
        "message": "স্লোভানিয়া"
    },
    "SJ": {
        "message": "স্বালবার্ড ও জান মেয়েন"
    },
    "SK": {
        "message": "শ্লোভাকিয়া"
    },
    "SL": {
        "message": "সিয়েরালিওন"
    },
    "SM": {
        "message": "সান মারিনো"
    },
    "SN": {
        "message": "সেনেগাল"
    },
    "SO": {
        "message": "সোমালি"
    },
    "SR": {
        "message": "সুরিনাম"
    },
    "ST": {
        "message": "সাওটোমা ও প্রিন্সিপি"
    },
    "SU": {
        "message": "সাবেক সোভিয়েত ইউনিয়ন এর"
    },
    "SV": {
        "message": "এল সালভেদর"
    },
    "SY": {
        "message": "সিরিয়া"
    },
    "SZ": {
        "message": "সোয়াজিল্যান্ড"
    },
    "Safe": {
        "message": "নিরাপদ"
    },
    "Safe mode": {
        "message": "নিরাপদ ভাবে"
    },
    "Save": {
        "message": "সংরক্ষণ করুন"
    },
    "Saved Videos": {
        "message": "সংরক্ষিত ভিডিও"
    },
    "Saved for later": {
        "message": "পরে জন্য সংরক্ষিত"
    },
    "Search video title": {
        "message": "অনুসন্ধান ভিডিও শিরোনাম"
    },
    "Select a Country": {
        "message": "একটি দেশ নির্বাচন করুন"
    },
    "Select site to unblock": {
        "message": "আনব্লক সাইট নির্বাচন করুন"
    },
    "Server saved!": {
        "message": "সার্ভার সংরক্ষিত!"
    },
    "Set safe mode for $1 $2": {
        "message": "সেট নিরাপদ মোড $1 জন্য $2"
    },
    "Settings": {
        "message": "সেটিংস"
    },
    "Share": {
        "message": "ভাগ"
    },
    "Share $1 on $2": {
        "message": "$2 $1 শেয়ার করুন"
    },
    "Share $1 via $2": {
        "message": "$2 এর মাধ্যমে $1 শেয়ার করুন"
    },
    "Share with friends!": {
        "message": "বন্ধুদের সাথে ভাগাভাগি করা!"
    },
    "Sign up": {
        "message": "সাইন আপ করুন"
    },
    "Solve buffering": {
        "message": "বাফার উপলব্ধ সমাধান"
    },
    "Solve buffering problems with": {
        "message": "সঙ্গে বাফার উপলব্ধ সমস্যা সমাধান"
    },
    "Solves it": {
        "message": "এটি solves"
    },
    "Staff Picks": {
        "message": "স্টাফ পিক"
    },
    "Start Hola": {
        "message": "শুরু"
    },
    "Starting...": {
        "message": "শুরু হচ্ছে ..."
    },
    "Stop Hola": {
        "message": "বন্ধ করুন Hola"
    },
    "Stopping peer routing...": {
        "message": "পিয়ার রাউটিং বন্ধ ..."
    },
    "Stream": {
        "message": "প্রবাহ"
    },
    "Stream Instantly": {
        "message": "অবিলম্বে প্রবাহ"
    },
    "Submit": {
        "message": "জমা দিন"
    },
    "Support Hola": {
        "message": "সাপোর্ট Hola"
    },
    "TA": {
        "message": "ত্রিস্তান দা কুনহা"
    },
    "TC": {
        "message": "তুর্কস ও কাইকোস দ্বীপপুঞ্জ"
    },
    "TD": {
        "message": "চাদ"
    },
    "TF": {
        "message": "ফরাসী দক্ষিণাঞ্চল"
    },
    "TG": {
        "message": "টোগো"
    },
    "TH": {
        "message": "থাই"
    },
    "TJ": {
        "message": "তাজিকস্থান"
    },
    "TK": {
        "message": "টোকেলাউ"
    },
    "TL": {
        "message": "পূর্ব-তিমুর"
    },
    "TM": {
        "message": "তুর্কমেনিয়া"
    },
    "TN": {
        "message": "টিউনিস্"
    },
    "TO": {
        "message": "টোঙ্গা"
    },
    "TR": {
        "message": "তুরস্ক"
    },
    "TT": {
        "message": "ত্রিনিনাদ ও টোব্যাগো"
    },
    "TV": {
        "message": "টুভালু"
    },
    "TW": {
        "message": "তাইওয়ান"
    },
    "TZ": {
        "message": "তাঞ্জানিয়া"
    },
    "Talk to us on $1": {
        "message": "$1 আমাদের আলোচনা"
    },
    "Tell friends about $1": {
        "message": "বন্ধু সম্পর্কে $1 বলুন"
    },
    "Testing connection...": {
        "message": "টেস্টিং সংযোগ ..."
    },
    "Thank you!": {
        "message": "আপনাকে ধন্যবাদ!"
    },
    "There seems to be an error": {
        "message": "একটি ত্রুটি আছে বলে মনে হয়"
    },
    "Top popular sites": {
        "message": "শীর্ষ জনপ্রিয় সাইট"
    },
    "Translate to your language": {
        "message": "আপনার ভাষা থেকে অনুবাদ"
    },
    "Try again": {
        "message": "আবার চেষ্টা করুন"
    },
    "Try another server": {
        "message": "অন্য সার্ভার ব্যবহার করে দেখুন"
    },
    "Try it": {
        "message": "এটি ব্যবহার করে দেখুন"
    },
    "Try safe mode": {
        "message": "নিরাপদ মোড চেষ্টা"
    },
    "Try to <span>reload</span>": {
        "message": "<span> পুনরায় লোড করুন </span> চেষ্টা করুন"
    },
    "Trying another peer...": {
        "message": "অন্য পিয়ার চেষ্টা করছে ..."
    },
    "Turn off Accelerator": {
        "message": "বেগবর্ধক বন্ধ করুন"
    },
    "Turn off Hola": {
        "message": "হোলা বন্ধ করুন"
    },
    "Turn on Accelerator": {
        "message": "বেগবর্ধক চালু করুন"
    },
    "Turn on Hola": {
        "message": "হোলা চালু করুন"
    },
    "Turn on to get started": {
        "message": "শুরু করার জন্য চালু করুন"
    },
    "UA": {
        "message": "ইউক্রেইন"
    },
    "UG": {
        "message": "উগান্ডা"
    },
    "UM": {
        "message": "যুক্তরাষ্ট্রের ক্ষুদ্র ও পার্শ্ববর্তী দ্বীপপুঞ্জ"
    },
    "US": {
        "message": "মার্কিন যুক্তরাষ্ট্র"
    },
    "UY": {
        "message": "উরুগোয়ে"
    },
    "UZ": {
        "message": "উজ্বেকিস্থান"
    },
    "Unblocker is disabled": {
        "message": "Unblocker নিষ্ক্রিয় করা হয়েছে"
    },
    "Update": {
        "message": "আপডেট করুন"
    },
    "Upgrade": {
        "message": "আপডেট করুন"
    },
    "Using": {
        "message": "ব্যবহার"
    },
    "Using Hola": {
        "message": "Hola ব্যবহার"
    },
    "VA": {
        "message": "ভ্যাটিকান সিটি"
    },
    "VC": {
        "message": "সেন্ট ভিনসেন্ট ও দ্যা গ্রেনাডিনস"
    },
    "VD": {
        "message": "উত্তর ভিয়েতনাম"
    },
    "VE": {
        "message": "ভেনেজুয়েলা"
    },
    "VG": {
        "message": "ব্রিটিশ ভার্জিন দ্বীপপুঞ্জ"
    },
    "VI": {
        "message": "মার্কিন ভার্জিন দ্বীপপুঞ্জ"
    },
    "VN": {
        "message": "ভিয়েতনাম"
    },
    "VPN": {
        "message": "তথ্য VPN"
    },
    "VPN Premium": {
        "message": "তথ্য VPN প্রিমিয়াম"
    },
    "VU": {
        "message": "ভানুয়াটু"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome-এর অত্যন্ত পুরোনো সংস্করণ, <a> আপডেট করুন </a> Chrome-Hola ব্যবহার"
    },
    "Video": {
        "message": "ভিডিও"
    },
    "Video stuck?": {
        "message": "ভিডিও আটকে?"
    },
    "Videos available for instant streaming": {
        "message": "তাত্ক্ষণিক স্ট্রিমিং জন্য উপলব্ধ ভিডিও"
    },
    "WF": {
        "message": "ওয়ালিস ও ফুটুনা"
    },
    "WK": {
        "message": "ওয়েক দ্বীপ"
    },
    "WS": {
        "message": "সামোয়া"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "অন্যান্য ডিভাইসের Hola চান? (মান্নান ভুঁইয়া, থানা, অ্যাপল টিভি, আইফোন ...). এখানে ক্লিক করুন"
    },
    "Want to know more?": {
        "message": "আরো জানতে চান?"
    },
    "Watch Now": {
        "message": "এখন দেখুন"
    },
    "We found $1 videos": {
        "message": "আমরা পাওয়া $1 ভিডিও"
    },
    "We will be in touch with you soon": {
        "message": "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করা হবে"
    },
    "Working!": {
        "message": "কাজ!"
    },
    "Working?": {
        "message": "কাজ করছেন?"
    },
    "Works on all sites but slower": {
        "message": "সমস্ত সাইটকে কিন্তু ধীর উপর কাজ করে"
    },
    "YD": {
        "message": "ইয়েমেনের পিপলস ডেমোক্রেটিক রিপাবলিক"
    },
    "YE": {
        "message": "ইমেন"
    },
    "YT": {
        "message": "মায়োত্তে"
    },
    "Yes": {
        "message": "হ্যাঁ"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "আপনি Hola ব্যবহার অপেরা এর সর্বশেষ সংস্করণে আপগ্রেড করা প্রয়োজন. টিপুন <a>এখানে</a> আপগ্রেড."
    },
    "Youtube": {
        "message": "ইউটিউবে"
    },
    "ZA": {
        "message": "দক্ষিণ আফ্রিকা"
    },
    "ZM": {
        "message": "জাম্বিয়া"
    },
    "ZW": {
        "message": "জিম্বাবুয়ে"
    },
    "ZZ": {
        "message": "অজানা অথবা ভুল স্থান"
    },
    "app_desc": {
        "message": "আপনার দেশ, কোম্পানি বা Hola সাথে স্কুলে অবরুদ্ধ অ্যাক্সেস ওয়েবসাইট! Hola বিনামূল্যে এবং ব্যবহার করা সহজ!"
    },
    "app_name": {
        "message": "Hola উন্নত ইন্টারনেট"
    },
    "back to": {
        "message": "ফিরে"
    },
    "changing...": {
        "message": "পরিবর্তন ..."
    },
    "cool sites": {
        "message": "শীতল সাইট"
    },
    "current site": {
        "message": "বর্তমান সাইট"
    },
    "day": {
        "message": "দিন"
    },
    "days": {
        "message": "দিন"
    },
    "even more...": {
        "message": "এমনকি আরও অনেক কিছু ..."
    },
    "mode": {
        "message": "মোড"
    },
    "more options...": {
        "message": "আরও বিকল্প ..."
    },
    "not working?": {
        "message": "কাজ করছে না?"
    },
    "not working? try another server": {
        "message": "কাজ করছে না? অন্য সার্ভার চেষ্টা"
    },
    "on this page": {
        "message": "এই পৃষ্ঠায়"
    },
    "sites that are censored": {
        "message": "সেন্সর করা হয় যে সাইটগুলি"
    },
    "start": {
        "message": "শুরু"
    },
    "working? remember": {
        "message": "কাজ? মনে রাখা"
    }
};
return E; });