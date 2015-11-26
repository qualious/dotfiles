'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " vasitəsilə "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola eyni etmək üçün burada $2\n\nbasın daxil olmaq üçün: $3\b\bBu mənə daha sürətli İnternet sörf və daxil imkan verir Hola quraşdırır $4 $5"
    },
    "$1 from $2": {
        "message": "$2 $1"
    },
    "$1 not found": {
        "message": "$1 tapılmadı"
    },
    "$1 via Hola": {
        "message": "$1 vasitəsilə Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Bəzi Hola funksiyalar Sizin versiyası mövcud deyil)"
    },
    "AE": {
        "message": "Birləşmiş Ərəb Emiratları"
    },
    "AF": {
        "message": "Əfqənistan"
    },
    "AG": {
        "message": "Antiqua və Barbuda"
    },
    "AI": {
        "message": "Anquila"
    },
    "AL": {
        "message": "Albaniya"
    },
    "AM": {
        "message": "Ermənistan"
    },
    "AN": {
        "message": "Hollandiya antilleri"
    },
    "AQ": {
        "message": "Antarktika"
    },
    "AR": {
        "message": "Arqentina"
    },
    "AS": {
        "message": "Amerika Samoası"
    },
    "AT": {
        "message": "Avstriya"
    },
    "AU": {
        "message": "Avstraliya"
    },
    "AX": {
        "message": "Aland Adaları"
    },
    "AZ": {
        "message": "Azərbaycan"
    },
    "About": {
        "message": "Haqqında"
    },
    "About Hola": {
        "message": "Hola haqqında"
    },
    "Accelerator": {
        "message": "Sürətləndirici"
    },
    "Accelerator is": {
        "message": "Accelerator deyil"
    },
    "Access $1 - cool site!": {
        "message": "$1 Access - sərin site!"
    },
    "Access $1?": {
        "message": "$1 daxil ol?"
    },
    "Access any site from any country, free": {
        "message": "Azad, hər bir ölkə hər hansı bir site daxil"
    },
    "Access more sites": {
        "message": "Access çox saytlar"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Access sites sizin ölkədə senzura və Hola ilə İnternet sürətləndirmək - Pulsuz!"
    },
    "Accessing $1 with Hola": {
        "message": "Hola ilə $1 giriş"
    },
    "Account": {
        "message": "Hesab"
    },
    "Account type": {
        "message": "Haqq-hesab növü"
    },
    "Activating...": {
        "message": "Aktivləşdirmə..."
    },
    "All ($1)": {
        "message": "Bütün ($1)"
    },
    "Apply settings...": {
        "message": "Ayarları müraciət ..."
    },
    "Author site:": {
        "message": "Müəllif site:"
    },
    "BA": {
        "message": "Bosniya və Herzokovina"
    },
    "BD": {
        "message": "Banqladeş"
    },
    "BE": {
        "message": "Belçika"
    },
    "BG": {
        "message": "Bolqariya"
    },
    "BH": {
        "message": "Bahreyn"
    },
    "BL": {
        "message": "Seynt Bartelemey"
    },
    "BN": {
        "message": "Bruney"
    },
    "BO": {
        "message": "Boliviya"
    },
    "BR": {
        "message": "Braziliya"
    },
    "BS": {
        "message": "Bahamalar"
    },
    "BT": {
        "message": "Butan"
    },
    "BV": {
        "message": "Bove Adası"
    },
    "BW": {
        "message": "Botsvana"
    },
    "BZ": {
        "message": "Beliz"
    },
    "Back to $1": {
        "message": "Geri $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "IPhone/iPad üçün Hola almaq üçün ilk olun - indi Qeydiyyatdan Keçin:"
    },
    "Browsing": {
        "message": "Tarama"
    },
    "Buffering problems?": {
        "message": "Buffering problemlər?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kokos Adaları"
    },
    "CD": {
        "message": "Konqo - Kinşasa"
    },
    "CF": {
        "message": "Orta Afrika respublikası"
    },
    "CG": {
        "message": "Konqo - Brazavil"
    },
    "CH": {
        "message": "isveçriya"
    },
    "CI": {
        "message": "İvori Sahili"
    },
    "CK": {
        "message": "Kuk Adaları"
    },
    "CL": {
        "message": "Çile"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Çin"
    },
    "CO": {
        "message": "Kolumbiya"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Serbiya və Çernoqoriya"
    },
    "CT": {
        "message": "Canton və Enderbury Islands"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Kape Verde"
    },
    "CX": {
        "message": "Çristmas Adası"
    },
    "CY": {
        "message": "Kipr"
    },
    "CZ": {
        "message": "Çex respublikası"
    },
    "Changing country...": {
        "message": "Ölkə dəyişdirilməsi..."
    },
    "Check out Hola for $1!": {
        "message": "$1 üçün Hola edin!"
    },
    "Check out Hola for mobile devices": {
        "message": "Mobil cihazlar üçün Hola edin"
    },
    "Check your Internet connection": {
        "message": "İnternet var yoxlamaq"
    },
    "Choose<br>Country": {
        "message": "Seçmək <br> Ölkə"
    },
    "Configuring...": {
        "message": "Nizamlama..."
    },
    "Connecting...": {
        "message": "Connecting ..."
    },
    "Creative licenses": {
        "message": "Creative lisenziya"
    },
    "DD": {
        "message": "Şərqi Almaniya"
    },
    "DE": {
        "message": "Almaniya"
    },
    "DJ": {
        "message": "Ciboti"
    },
    "DK": {
        "message": "Danemarka"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominik Respublikası"
    },
    "DZ": {
        "message": "Cezayır"
    },
    "Delete": {
        "message": "Sil"
    },
    "Deleted from my list": {
        "message": "Mənim siyahıdan çıxarılmışdır"
    },
    "Did it work?": {
        "message": "Bu iş mi?"
    },
    "Did you experience any buffering?": {
        "message": "Əgər hər hansı bir buffering təcrübə mi?"
    },
    "Disliked it": {
        "message": "Onu sevmədiyi"
    },
    "Don't show again for $1 for one week": {
        "message": "Bir həftə üçün $1 üçün yenidən göstərmək etməyin"
    },
    "Don't show again for any site for one week": {
        "message": "Bir həftə hər hansı bir site üçün bir daha göstərmək etməyin"
    },
    "Downloading": {
        "message": "Yükləmə"
    },
    "EA": {
        "message": "Ceuta və Melilla"
    },
    "EC": {
        "message": "Ekvador"
    },
    "EE": {
        "message": "Estoniya"
    },
    "EG": {
        "message": "Misir"
    },
    "EH": {
        "message": "Qərb Sahara"
    },
    "ER": {
        "message": "Eritreya"
    },
    "ES": {
        "message": "İspaniya"
    },
    "ET": {
        "message": "Efiopiya"
    },
    "EU": {
        "message": "Avropa Birliyi"
    },
    "Enable Hola Accelerator": {
        "message": "Hola Accelerator Enable"
    },
    "Enjoy!": {
        "message": "Zövq alın!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome üçün Hola zövq?"
    },
    "Enter site to access": {
        "message": "Daxil olmaq üçün site daxil edin"
    },
    "Enter your email": {
        "message": "Sizin e-poçt daxil edin"
    },
    "FI": {
        "message": "Finlandiya"
    },
    "FJ": {
        "message": "Fici"
    },
    "FK": {
        "message": "Folkland Adaları"
    },
    "FM": {
        "message": "Mikronesiya"
    },
    "FO": {
        "message": "Faro Adaları"
    },
    "FQ": {
        "message": "Fransız Cənubi və Antarktik Territories"
    },
    "FR": {
        "message": "Fransa"
    },
    "FX": {
        "message": "Böyükşəhər Fransa"
    },
    "Fast": {
        "message": "Sürətli"
    },
    "Finding new peers...": {
        "message": "Yeni həmyaşıdları tapmaq ..."
    },
    "Finding peers...": {
        "message": "Həmyaşıdları tapmaq ..."
    },
    "Free": {
        "message": "Pulsuz"
    },
    "From": {
        "message": "Etibarən"
    },
    "Full list": {
        "message": "Tam siyahı"
    },
    "GA": {
        "message": "Qabon"
    },
    "GB": {
        "message": "Birləşmiş Krallıq"
    },
    "GD": {
        "message": "Qrenada"
    },
    "GE": {
        "message": "Gürcüstan"
    },
    "GF": {
        "message": "Fransız Quyanası"
    },
    "GG": {
        "message": "Görnsey"
    },
    "GH": {
        "message": "Qana"
    },
    "GL": {
        "message": "Qrinland"
    },
    "GM": {
        "message": "Qambiya"
    },
    "GN": {
        "message": "Qvineya"
    },
    "GP": {
        "message": "Qvadalup"
    },
    "GQ": {
        "message": "Ekvator Qineya"
    },
    "GR": {
        "message": "Yunanıstan"
    },
    "GS": {
        "message": "Cənub Gürcüstan və Cənub Sandvilç Adaları"
    },
    "GT": {
        "message": "Qvatemala"
    },
    "GU": {
        "message": "Quam"
    },
    "GW": {
        "message": "Qvineya-Bisau"
    },
    "GY": {
        "message": "Quyana"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 Açma alın"
    },
    "Get Free Premium": {
        "message": "Pulsuz Premium alın"
    },
    "Get Hola Accelerator": {
        "message": "Hola sürətləndirici almaq"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Un-müdaxilə, reklam pulsuz xidmət Hola Plus alın."
    },
    "Get Hola Premium": {
        "message": "Hola Premium alın"
    },
    "Get Hola for Android": {
        "message": "Android üçün Hola alın"
    },
    "Get Premium support": {
        "message": "Premium dəstək alın"
    },
    "Get Unlimited Unblocking": {
        "message": "Unlimited Açma alın"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", Senzura saytlar əldə indi cəhd edin: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Üzərində skype mühəndis yardım alın:"
    },
    "Get the Fastest Servers": {
        "message": "Fastest Serverlər alın"
    },
    "Go": {
        "message": "Getmək"
    },
    "Go Hola Premium": {
        "message": "Hola Premium Go"
    },
    "HK": {
        "message": "Honk Konq çina"
    },
    "HM": {
        "message": "Hörd və Makdonald Adaları"
    },
    "HN": {
        "message": "Qonduras"
    },
    "HR": {
        "message": "Xorvatiya"
    },
    "HU": {
        "message": "Macaristan"
    },
    "Hate it": {
        "message": "Nifrət"
    },
    "Help": {
        "message": "Kömək"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nmən istifadə edirəm"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nI $1 ($2) istifadə edərək başladı. Bu mənə daha sürətli İnternet sörf və ölkəmdə $3 daxil olmaq imkanı verir."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Uzadılması proxy ayarlarını nəzarət edir, çünki Hola işləyə bilməz."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola Windows 8 rejimində yaxşı işləmir. Masa üstü moduna edin. Talimatlar üçün <a>burada</a> basın"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola hazırda mövcud deyil, lakin biz bunun üzərində işləyirik."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola off, açmaq üçün basın"
    },
    "Hola site list": {
        "message": "Hola site siyahısı"
    },
    "I can now access $1 from any country!": {
        "message": "Mən indi hər hansı bir ölkə $1 əldə edə bilərsiniz!"
    },
    "I did not experience any buffering": {
        "message": "Mən heç bir buffering yaşamadı"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Mən yalnız $1 üçün Hola istifadə edərək senzura site əldə!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Mən ölkənin $2 Təfərrüatlar üçün $1 istifadə edərək, və daha sürətli sörf alıram!"
    },
    "IC": {
        "message": "Kanar adaları"
    },
    "ID": {
        "message": "İndoneziya"
    },
    "IE": {
        "message": "İrlandiya"
    },
    "IL": {
        "message": "İzrail"
    },
    "IM": {
        "message": "Man Adası"
    },
    "IN": {
        "message": "Hindistan"
    },
    "IO": {
        "message": "Britaniya-Hindistan Okeanik territoriyası"
    },
    "IQ": {
        "message": "İrak"
    },
    "IR": {
        "message": "İran"
    },
    "IS": {
        "message": "İslandiya"
    },
    "IT": {
        "message": "İtaliya"
    },
    "Improve translation": {
        "message": "Tərcümə təkmilləşdirilməsi"
    },
    "Initializing...": {
        "message": "Başlatılıyor..."
    },
    "Install Accelerator": {
        "message": "Accelerator yüklemeniz"
    },
    "Install Free Hola Accelerator": {
        "message": "Pulsuz Hola Accelerator yüklemeniz"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Pulsuz üçün Hola istifadə edərək davam etmək Hola mühərrik yüklemek"
    },
    "Instantly watch any torrent Video": {
        "message": "Dərhal hər hansı bir torrent video izləmək"
    },
    "Invite friends - free Premium.": {
        "message": "Dostları Dəvət - pulsuz Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Dostları dəvət edirik. Premium almaq."
    },
    "It was okay": {
        "message": "Tamam oldu"
    },
    "JE": {
        "message": "Cörsi"
    },
    "JM": {
        "message": "Yamayka"
    },
    "JO": {
        "message": "Ürdün"
    },
    "JP": {
        "message": "Yaponiya"
    },
    "KG": {
        "message": "Kırqızstan"
    },
    "KH": {
        "message": "Kambodiya"
    },
    "KM": {
        "message": "Komoros"
    },
    "KN": {
        "message": "Seynt Kits və Nevis"
    },
    "KP": {
        "message": "Şimal Koreya"
    },
    "KR": {
        "message": "Cənub Koreya"
    },
    "KW": {
        "message": "Kuveyt"
    },
    "KY": {
        "message": "Kayman Adaları"
    },
    "KZ": {
        "message": "Kazaxstan"
    },
    "LC": {
        "message": "Seynt Lusiya"
    },
    "LI": {
        "message": "Lixtenşteyn"
    },
    "LK": {
        "message": "Şri Lanka"
    },
    "LR": {
        "message": "Liberiya"
    },
    "LS": {
        "message": "Lesoto"
    },
    "LT": {
        "message": "Litva"
    },
    "LU": {
        "message": "Lüksemburq"
    },
    "LV": {
        "message": "Latviya"
    },
    "Language": {
        "message": "Dil"
    },
    "Library": {
        "message": "Kitabxana"
    },
    "Like it": {
        "message": "Bu kimi"
    },
    "Loading": {
        "message": "Yükvurma"
    },
    "Loading site...": {
        "message": "Yükvurma"
    },
    "Log in": {
        "message": "Daxil ol"
    },
    "Log out": {
        "message": "Cixış"
    },
    "Love Hola?": {
        "message": "Hola Love?"
    },
    "Love it": {
        "message": "Bunu sevirəm"
    },
    "MA": {
        "message": "Morokko"
    },
    "MC": {
        "message": "Monako"
    },
    "MD": {
        "message": "Moldaviya"
    },
    "ME": {
        "message": "Monteneqro"
    },
    "MF": {
        "message": "Seynt Martin"
    },
    "MG": {
        "message": "Madaqaskar"
    },
    "MH": {
        "message": "Marşal Adaları"
    },
    "MK": {
        "message": "Masedoniya"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Monqoliya"
    },
    "MO": {
        "message": "Makao Çina"
    },
    "MP": {
        "message": "Şimal Mariana Adaları"
    },
    "MQ": {
        "message": "Martiniqu"
    },
    "MR": {
        "message": "Mavritaniya"
    },
    "MS": {
        "message": "Montserat"
    },
    "MU": {
        "message": "Mavritis"
    },
    "MV": {
        "message": "Maldiv"
    },
    "MW": {
        "message": "Malavi"
    },
    "MX": {
        "message": "Meksika"
    },
    "MY": {
        "message": "Malaysiya"
    },
    "MZ": {
        "message": "Mazambik"
    },
    "Make your Internet better with $1": {
        "message": "Sizin Internet daha yaxşı $1"
    },
    "Menu": {
        "message": "Menyu"
    },
    "Might not work on all sites": {
        "message": "Bütün sites üzərində işləməyə bilər"
    },
    "More countries": {
        "message": "Daha çox ölkə"
    },
    "More sites...": {
        "message": "ətraflı..."
    },
    "More...": {
        "message": "ətraflı..."
    },
    "My Account": {
        "message": "Mənim Hesabım"
    },
    "My History": {
        "message": "Mənim Tarix"
    },
    "My Settings": {
        "message": "Texniki düzəlişlərim"
    },
    "My favorites": {
        "message": "Bəyəndiklərim"
    },
    "NA": {
        "message": "Namibiya"
    },
    "NC": {
        "message": "Yeni Kaledoniya"
    },
    "NE": {
        "message": "nijer"
    },
    "NF": {
        "message": "Norfolk Adası"
    },
    "NG": {
        "message": "Nijeriya"
    },
    "NI": {
        "message": "Nikaraqua"
    },
    "NL": {
        "message": "Hollandiya"
    },
    "NO": {
        "message": "Norvec"
    },
    "NT": {
        "message": "Neytral Zone"
    },
    "NU": {
        "message": "Niye"
    },
    "NZ": {
        "message": "Yeni Zelandiya"
    },
    "Need Help?": {
        "message": "Kömək lazımdır?"
    },
    "Never ask me again": {
        "message": "Yenə mənə sual heç vaxt"
    },
    "Never be a peer": {
        "message": "Bir peer heç vaxt"
    },
    "No": {
        "message": "Heç bir"
    },
    "No idle peers found.": {
        "message": "No boş həmyaşıdları tapılmadı."
    },
    "No recent videos found": {
        "message": "No son video tapılmadı"
    },
    "No saved videos found": {
        "message": "No xilas Video tapılmadı"
    },
    "No videos found": {
        "message": "Video tapılmadı"
    },
    "No videos found on active page": {
        "message": "Aktiv səhifədə tapılmadı videolar"
    },
    "No, Thanks": {
        "message": "Xeyr, sağ olun"
    },
    "No, fix it": {
        "message": "Xeyr, bunu düzeltmek"
    },
    "Not working?": {
        "message": "Iş deyil?"
    },
    "Number of users that pressed not working": {
        "message": "Iş deyil bərk ki, istifadəçilər sayı"
    },
    "Number of users that use this option": {
        "message": "Bu seçimi istifadə edən istifadəçilərin sayı"
    },
    "Oh, yes!": {
        "message": "Yes, Oh!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox Köhnə versiyası. Mətbuat <a> burada </a> təkmilləşdirmək."
    },
    "On": {
        "message": "Haqqında"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Bizim Brand New Mplayer Tezliklə edir!"
    },
    "PC": {
        "message": "Pacific Islands Trust ərazisi"
    },
    "PF": {
        "message": "Fransız Polineziya"
    },
    "PG": {
        "message": "Papua Yeni Qvineya"
    },
    "PH": {
        "message": "Filipin"
    },
    "PL": {
        "message": "Polşa"
    },
    "PM": {
        "message": "Seynt Piyer və Mikelon"
    },
    "PN": {
        "message": "Pitkarn"
    },
    "PR": {
        "message": "Puerto Riko"
    },
    "PS": {
        "message": "Fələstin Bölqüsü"
    },
    "PT": {
        "message": "Portuqal"
    },
    "PU": {
        "message": "States Müxtəlif Pacific Islands"
    },
    "PW": {
        "message": "Palav"
    },
    "PY": {
        "message": "Paraqvay"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Belə və s. Ad-blokerlerinin, digər VPN xidmətləri, proxy ayarlarını kontrol bilər edirəm ki, digər <a>uzantıları</a> aradan buraxın."
    },
    "Please enter a valid email address.": {
        "message": "Düzgün e-mail daxil edin."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com kimi, bir web site ünvanını daxil edin"
    },
    "Please help us get better": {
        "message": "Daha yaxşı kömək edin"
    },
    "Popular in $1": {
        "message": "Popular $1"
    },
    "Popular in the world": {
        "message": "Dünyada məşhur"
    },
    "Popular sites": {
        "message": "Populyar saytlar"
    },
    "Premium": {
        "message": "Mükafat"
    },
    "QO": {
        "message": "Ucqar Okeaniya"
    },
    "RE": {
        "message": "Reyunion"
    },
    "RO": {
        "message": "Romaniya"
    },
    "RS": {
        "message": "Serbiya"
    },
    "RU": {
        "message": "Rusiya"
    },
    "RW": {
        "message": "Rvanda"
    },
    "Rate us": {
        "message": "Rate bizə"
    },
    "Recent Videos": {
        "message": "Son Videos"
    },
    "Reload": {
        "message": "Yenidən yükləmək"
    },
    "Reload Hola": {
        "message": "Hola yenidən yüklə"
    },
    "Remember server": {
        "message": "Server saxla"
    },
    "Report a problem": {
        "message": "Bir sorunu bildirmek"
    },
    "Retry safe mode": {
        "message": "Təhlükəsiz rejimi Yeniden Dene"
    },
    "SA": {
        "message": "Saudi Ərəbistan"
    },
    "SB": {
        "message": "Solomon Adaları"
    },
    "SC": {
        "message": "Seyçels"
    },
    "SD": {
        "message": "sudan"
    },
    "SE": {
        "message": "isveç"
    },
    "SG": {
        "message": "Sinqapur"
    },
    "SH": {
        "message": "Seynt Elena"
    },
    "SI": {
        "message": "Sloveniya"
    },
    "SJ": {
        "message": "svalbard və yan mayen"
    },
    "SK": {
        "message": "Slovakiya"
    },
    "SL": {
        "message": "Siyera Leon"
    },
    "SN": {
        "message": "Seneqal"
    },
    "SO": {
        "message": "Somaliya"
    },
    "SR": {
        "message": "surinamə"
    },
    "ST": {
        "message": "Sao Tom və Prinsip"
    },
    "SU": {
        "message": "Sovet Sosialist Respublikaları"
    },
    "SY": {
        "message": "siriya"
    },
    "SZ": {
        "message": "svazilənd"
    },
    "Safe": {
        "message": "Təhlükəsiz"
    },
    "Save": {
        "message": "Yadda saxla"
    },
    "Saved Videos": {
        "message": "Saxlanılan Video"
    },
    "Saved for later": {
        "message": "Daha sonra qeyd"
    },
    "Search video title": {
        "message": "Axtar video adı"
    },
    "Select a Country": {
        "message": "Ölkə seçin"
    },
    "Select site to unblock": {
        "message": "Yolunu açmaq üçün site seçin"
    },
    "Server saved!": {
        "message": "Server xilas!"
    },
    "Set safe mode for $1 $2": {
        "message": "Set təhlükəsiz rejimi $1 $2"
    },
    "Settings": {
        "message": "Ayarları"
    },
    "Share": {
        "message": "Pay"
    },
    "Share $1 on $2": {
        "message": "$2 $1 paylaş"
    },
    "Share $1 via $2": {
        "message": "$2 vasitəsilə $1 paylaş"
    },
    "Share with friends!": {
        "message": "Dostları ilə Share!"
    },
    "Sign up": {
        "message": "Up with"
    },
    "Solve buffering": {
        "message": "Buffering həll"
    },
    "Solve buffering problems with": {
        "message": "Ilə buffering problemləri həll"
    },
    "Solves it": {
        "message": "Həll edir"
    },
    "Staff Picks": {
        "message": "İşçilər Picks"
    },
    "Start Hola": {
        "message": "başlamaq"
    },
    "Starting...": {
        "message": "Başlanğıc..."
    },
    "Stopping peer routing...": {
        "message": "Peer marşrutlaşdırma dayandırılması..."
    },
    "Stream": {
        "message": "Axın"
    },
    "Stream Instantly": {
        "message": "Dərhal Stream"
    },
    "Submit": {
        "message": "Tarixi"
    },
    "TC": {
        "message": "Türk və Kaykos Adaları"
    },
    "TD": {
        "message": "Çad"
    },
    "TF": {
        "message": "Fransız Cənub teritoriyası"
    },
    "TG": {
        "message": "Toqo"
    },
    "TH": {
        "message": "tayland"
    },
    "TJ": {
        "message": "tacikistan"
    },
    "TL": {
        "message": "Şərq Timor"
    },
    "TM": {
        "message": "Türkmənistan"
    },
    "TN": {
        "message": "Tunisiya"
    },
    "TO": {
        "message": "Tonqa"
    },
    "TR": {
        "message": "Türkiya"
    },
    "TT": {
        "message": "Trinidan və Tobaqo"
    },
    "TW": {
        "message": "tayvan"
    },
    "TZ": {
        "message": "tanzaniya"
    },
    "Talk to us on $1": {
        "message": "$1 bizə danışmaq"
    },
    "Tell friends about $1": {
        "message": "Dostlara $1 deyin"
    },
    "Testing connection...": {
        "message": "Test bağlantısı..."
    },
    "Thank you!": {
        "message": "Təşəkkür edirik!"
    },
    "There seems to be an error": {
        "message": "Bir səhv var görünür"
    },
    "Top popular sites": {
        "message": "Top məşhur sites"
    },
    "Translate to your language": {
        "message": "Dilinizə tərcümə"
    },
    "Try again": {
        "message": "Daha cəhd edin"
    },
    "Try another server": {
        "message": "Başqa bir server keçir"
    },
    "Try it": {
        "message": "Keçir"
    },
    "Try safe mode": {
        "message": "Təhlükəsiz rejimi cəhd edin"
    },
    "Try to <span>reload</span>": {
        "message": "<span> Yenidən </span> çalışın"
    },
    "Trying another peer...": {
        "message": "Başqa peer çalışır..."
    },
    "Turn off Accelerator": {
        "message": "Accelerator söndürün"
    },
    "Turn off Hola": {
        "message": "Hola söndürün"
    },
    "Turn on Accelerator": {
        "message": "Accelerator yandırın"
    },
    "Turn on Hola": {
        "message": "Hola yandırın"
    },
    "Turn on to get started": {
        "message": "Başlamaq üçün yandırın"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UG": {
        "message": "Uqanda"
    },
    "UM": {
        "message": "Birləşmiş Ştatların uzaq adaları"
    },
    "US": {
        "message": "Amerika Birləşmiş Ştatları"
    },
    "UY": {
        "message": "Uruqvay"
    },
    "UZ": {
        "message": "Özbəkistan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker aradan"
    },
    "Upgrade": {
        "message": "Update"
    },
    "Using": {
        "message": "Istifadə"
    },
    "Using Hola": {
        "message": "Hola istifadə"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Seynt Vinsent və Qrenada"
    },
    "VD": {
        "message": "Şimali Vyetnam"
    },
    "VE": {
        "message": "Venesuela"
    },
    "VG": {
        "message": "Britaniya Virgin Adaları"
    },
    "VI": {
        "message": "ABŞ Virqin Adaları"
    },
    "VN": {
        "message": "Vyetnam"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome Çox köhnə versiyası <a> yeniləmə </a> Chrome Hola istifadə etmək"
    },
    "Video stuck?": {
        "message": "Video vurulmuş?"
    },
    "Videos available for instant streaming": {
        "message": "Ani axın üçün mövcud Videos"
    },
    "WF": {
        "message": "Valis və Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Digər cihazlar Hola istəyirsiniz? (Xbox, PS, Apple TV, iPhone ...). Buraya basın"
    },
    "Want to know more?": {
        "message": "Daha çox bilmək istəyirsiniz?"
    },
    "Watch Now": {
        "message": "İndi baxın"
    },
    "We found $1 videos": {
        "message": "Biz aşkar $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Biz tezliklə sizinlə əlaqə olacaq"
    },
    "Working!": {
        "message": "İş!"
    },
    "Working?": {
        "message": "İş?"
    },
    "Works on all sites but slower": {
        "message": "Bütün sites lakin yavaş üzərində işləyir"
    },
    "YD": {
        "message": "Yəmən Xalq Demokratik Respublikası"
    },
    "YT": {
        "message": "Mayot"
    },
    "Yes": {
        "message": "Bəli"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Siz Hola istifadə Opera ən son versiyası yükseltmek lazımdır. Mətbuat <a>burada</a> yükseltmek üçün."
    },
    "ZA": {
        "message": "Cənub Afrika"
    },
    "ZM": {
        "message": "Zambiya"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "bilinmir"
    },
    "app_desc": {
        "message": "Sizin ölkə, şirkət və ya Hola ilə məktəb bağlanacaq Access saytları! Hola pulsuz və istifadə üçün asandır!"
    },
    "app_name": {
        "message": "Hola Better İnternet"
    },
    "back to": {
        "message": "geri"
    },
    "changing...": {
        "message": "dəyişdirilməsi..."
    },
    "current site": {
        "message": "cari site"
    },
    "day": {
        "message": "gün"
    },
    "days": {
        "message": "gün"
    },
    "even more...": {
        "message": "daha..."
    },
    "mode": {
        "message": "rejimi"
    },
    "not working?": {
        "message": "iş deyil?"
    },
    "not working? try another server": {
        "message": "iş deyil? Başqa bir server cəhd"
    },
    "on this page": {
        "message": "Bu səhifədə"
    },
    "sites that are censored": {
        "message": "senzura ki, saytlar"
    },
    "start": {
        "message": "başlamaq"
    },
    "working? remember": {
        "message": "iş? xatırlamaq"
    }
};
return E; });