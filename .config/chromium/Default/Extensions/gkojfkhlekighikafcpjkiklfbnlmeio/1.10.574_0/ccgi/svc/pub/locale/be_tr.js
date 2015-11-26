'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " vasıtasıyla "
    },
    "$1 Buffering?": {
        "message": "$1 Ön belleğe alınıyor?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola aynı yapmak için buraya $2\n\ntıklayın erişmek: $3\n\nBu beni daha hızlı internette sörf ve erişmenizi sağlayan Hola, yükler $4 $5"
    },
    "$1 VPN": {
        "message": "VPN $1"
    },
    "$1 VPN Premium": {
        "message": "VPN Ücretli servis $1"
    },
    "$1 from $2": {
        "message": "$2 $1"
    },
    "$1 not found": {
        "message": "$1 bulunamadı"
    },
    "$1 via Hola": {
        "message": "Hola ile $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Bazı Hola özellikleri yüklü sürümünde mevcut değil)"
    },
    "AC": {
        "message": "Yükseliş ada"
    },
    "AE": {
        "message": "Birleşik Arap Emirlikleri"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua ve Barbuda"
    },
    "AL": {
        "message": "Arnavutluk"
    },
    "AM": {
        "message": "Ermenistan"
    },
    "AN": {
        "message": "Hollanda Antilleri"
    },
    "AO": {
        "message": "Angora"
    },
    "AQ": {
        "message": "Antarktika"
    },
    "AR": {
        "message": "Arjantin"
    },
    "AS": {
        "message": "Amerikan Samoası"
    },
    "AT": {
        "message": "Avusturya"
    },
    "AU": {
        "message": "Avustralya"
    },
    "AX": {
        "message": "Aland Adaları"
    },
    "AZ": {
        "message": "Azerbaycan"
    },
    "About": {
        "message": "Hakkında"
    },
    "About Hola": {
        "message": "Hola Hakkında"
    },
    "Accelerator": {
        "message": "Hızlandırıcı"
    },
    "Accelerator is": {
        "message": "Hızlandırıcısı"
    },
    "Access $1 - cool site!": {
        "message": "$1 Erişim - cool site!"
    },
    "Access $1?": {
        "message": "Erişim $1?"
    },
    "Access any site from any country, free": {
        "message": "Ücretsiz, herhangi bir ülkeden herhangi bir siteye erişim"
    },
    "Access cool sites": {
        "message": "Erişim serin siteleri"
    },
    "Access more sites": {
        "message": "Daha fazla siteye ulaşın"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Erişim siteleri ülkenizde sansürlendi ve Hola ile interneti hızlandırmak - Ücretsiz!"
    },
    "Accessing $1 with Hola": {
        "message": "Hola ile Erişim $1"
    },
    "Account": {
        "message": "Hesap"
    },
    "Account type": {
        "message": "Hesap türü"
    },
    "Activating...": {
        "message": "Etkinleştirme..."
    },
    "All ($1)": {
        "message": "Hepsi ($1)"
    },
    "Apply settings...": {
        "message": "Ayarları uygula..."
    },
    "Author site:": {
        "message": "Yazar sitesi:"
    },
    "Author:": {
        "message": "Yazar:"
    },
    "Awesome!": {
        "message": "Müthiş!"
    },
    "BA": {
        "message": "Bosna Hersek"
    },
    "BD": {
        "message": "Bangladeş"
    },
    "BE": {
        "message": "Belçika"
    },
    "BG": {
        "message": "Bulgaristan"
    },
    "BH": {
        "message": "Bahreyn"
    },
    "BL": {
        "message": "Saint Barthelemy"
    },
    "BO": {
        "message": "Bolivya"
    },
    "BQ": {
        "message": "İngiliz Antarktika Bölgesi"
    },
    "BR": {
        "message": "Brezilya"
    },
    "BS": {
        "message": "Bahamalar"
    },
    "BT": {
        "message": "Butan"
    },
    "BV": {
        "message": "Bouvet Adası"
    },
    "BW": {
        "message": "Botsvana"
    },
    "BY": {
        "message": "Beyaz Rusya"
    },
    "Back to $1": {
        "message": "$1’a geri dön"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "iPhone ve iPad için kullanılabilir olduğunda, Hola’yı ilk olarak sizin almanız için şimdi kaydolun:"
    },
    "Browsing": {
        "message": "Tarama"
    },
    "Buffering problems?": {
        "message": "Önbellek sorunları?"
    },
    "Buffering?": {
        "message": "Önbellek?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Cocos Adaları"
    },
    "CD": {
        "message": "Kongo - Kinşasa"
    },
    "CF": {
        "message": "Orta Afrika Cumhuriyeti"
    },
    "CG": {
        "message": "Kongo - Brazavil"
    },
    "CH": {
        "message": "İsviçre"
    },
    "CI": {
        "message": "Fildişi Sahili"
    },
    "CK": {
        "message": "Cook Adaları"
    },
    "CL": {
        "message": "Şili"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Çin"
    },
    "CO": {
        "message": "Kolombiya"
    },
    "CP": {
        "message": "Clipperton adası"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Sırbistan-Karadağ"
    },
    "CT": {
        "message": "Kanton ve Enderbury Adaları"
    },
    "CU": {
        "message": "Küba"
    },
    "CX": {
        "message": "Christmas Adası"
    },
    "CY": {
        "message": "Güney Kıbrıs Rum Kesimi"
    },
    "CZ": {
        "message": "Çek Cumhuriyeti"
    },
    "Changing country...": {
        "message": "Ülke değiştiriliyor..."
    },
    "Check out Hola for $1!": {
        "message": "$1 için Hola göz atın!"
    },
    "Check out Hola for mobile devices": {
        "message": "Mobil cihazlar için Hola göz atın"
    },
    "Check your Internet connection": {
        "message": "İnternet bağlantınızı kontrol ediniz"
    },
    "Choose<br>Country": {
        "message": "Ülke<br>Seçiniz"
    },
    "Configuring...": {
        "message": "Yapılandırıyor..."
    },
    "Connecting...": {
        "message": "Bağlanıyor..."
    },
    "Cool site!": {
        "message": "Serin sitesi!"
    },
    "Creative licenses": {
        "message": "Yaratıcı lisansları"
    },
    "DD": {
        "message": "Doğu Almanya"
    },
    "DE": {
        "message": "Almanya"
    },
    "DJ": {
        "message": "Cibuti"
    },
    "DK": {
        "message": "Danimarka"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Dominik Cumhuriyeti"
    },
    "DZ": {
        "message": "Cezayir"
    },
    "Delete": {
        "message": "Silmek"
    },
    "Deleted from my list": {
        "message": "Benim listeden silindi"
    },
    "Did it work?": {
        "message": "Çalışmadı mı?"
    },
    "Did you experience any buffering?": {
        "message": "Herhangi bir önbellek sorunu yaşadınız mı?"
    },
    "Disliked it": {
        "message": "Bunu Beğenmedim"
    },
    "Don't show again for $1 for one week": {
        "message": "Bir hafta boyunca $1 tekrar gösterme"
    },
    "Don't show again for any site for one week": {
        "message": "Bir hafta boyunca herhangi bir site için tekrar gösterme"
    },
    "Downloading": {
        "message": "İndiriliyor"
    },
    "EA": {
        "message": "Ceuta ve Melilla"
    },
    "EC": {
        "message": "Ekvador"
    },
    "EE": {
        "message": "Estonya"
    },
    "EG": {
        "message": "Mısır"
    },
    "EH": {
        "message": "Batı Sahara"
    },
    "ER": {
        "message": "Eritre"
    },
    "ES": {
        "message": "İspanya"
    },
    "ET": {
        "message": "Etiyopya"
    },
    "EU": {
        "message": "Avrupa Birliği"
    },
    "Enable": {
        "message": "Etkinleştir"
    },
    "Enable Hola Accelerator": {
        "message": "Hola hızlandırıcı’yı etkinleştirin"
    },
    "Enjoy!": {
        "message": "Tadını çıkarın!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chrome için Hola Enjoying?"
    },
    "Enter site to access": {
        "message": "Erişim sağlamak istediğiniz siteyi girin"
    },
    "Enter your email": {
        "message": "E-postanızı girin"
    },
    "FI": {
        "message": "Finlandiya"
    },
    "FK": {
        "message": "Falkland Adaları"
    },
    "FM": {
        "message": "Mikronezya Federal Eyaletleri"
    },
    "FO": {
        "message": "Faroe Adaları"
    },
    "FQ": {
        "message": "Fransız Güney ve Antarktika Toprakları"
    },
    "FR": {
        "message": "Fransa"
    },
    "FX": {
        "message": "Büyükşehir Fransa"
    },
    "Fast": {
        "message": "Hızlı"
    },
    "Finding new peers...": {
        "message": "Yeni eşler aranıyor..."
    },
    "Finding peers...": {
        "message": "Eşler aranıyor..."
    },
    "Free": {
        "message": "Ücretsiz"
    },
    "From": {
        "message": "Gönderen"
    },
    "Full list": {
        "message": "Tüm liste"
    },
    "GB": {
        "message": "Birleşik Krallık"
    },
    "GE": {
        "message": "Gürcistan"
    },
    "GF": {
        "message": "Fransız Guyanası"
    },
    "GG": {
        "message": "Bir tür inek"
    },
    "GH": {
        "message": "Gana"
    },
    "GI": {
        "message": "Cebelitarık"
    },
    "GL": {
        "message": "Grönland"
    },
    "GM": {
        "message": "Gambiya"
    },
    "GN": {
        "message": "Gine"
    },
    "GQ": {
        "message": "Ekvator Ginesi"
    },
    "GR": {
        "message": "Yunanistan"
    },
    "GS": {
        "message": "Güney Georgia ve Güney Sandwich Adaları"
    },
    "GW": {
        "message": "Gine-Bissau"
    },
    "Get 24/7 Unblocking": {
        "message": "7/24 Engel kaldırmaya sahip olun"
    },
    "Get Free Premium": {
        "message": "Bedava Premium alın"
    },
    "Get Hola Accelerator": {
        "message": "Hola Hızlandırıcı alın"
    },
    "Get Hola Player": {
        "message": "Get Hola Oyuncu"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Kesintisiz, reklamsız hizmet için Hola Plus alın."
    },
    "Get Hola Premium": {
        "message": "Hola Premium alın"
    },
    "Get Hola for Android": {
        "message": "Android için Hola edinin"
    },
    "Get Premium support": {
        "message": "Premium desteği alın"
    },
    "Get Unlimited Unblocking": {
        "message": "Sınırsız Engel Kaldırma alın"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", Sansürlü sitelere erişin şimdi deneyin: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Skype üzerinden teknik destek yardımı alın:"
    },
    "Get the Fastest Servers": {
        "message": "En Hızlı Sunuculara Sahip Olun"
    },
    "Go": {
        "message": "Git"
    },
    "Go Hola Premium": {
        "message": "Şimdi Hola Premium alın"
    },
    "HK": {
        "message": "Hong Kong SAR - Çin"
    },
    "HM": {
        "message": "Heard Adası ve McDonald Adaları"
    },
    "HR": {
        "message": "Hırvatistan"
    },
    "HU": {
        "message": "Macaristan"
    },
    "Hate it": {
        "message": "Nefret"
    },
    "Help": {
        "message": "Yardım"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nben kullanıyorum"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Merhaba,\n\nben $1 ($2) kullanmaya başladı. Bu beni daha hızlı internette sörf ve ülkemde $3 erişmenizi sağlar."
    },
    "Hola Accelerator": {
        "message": "Hola Hızlandırıcı"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola çalışmıyor, başka bir eklenti Proxy ayarlarınızı kontrol ediyor."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola Windows 8 modunda iyi çalışmaz. Masaüstü moduna geçiniz. Talimatlar için <a>buraya</a> tıklayın"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola şuan kullanılamıyor, daha iyi bir deneyim için üzerinde çalışıyoruz."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola kapalı, açmak için tıklayın"
    },
    "Hola site list": {
        "message": "Hola site listesi"
    },
    "I can now access $1 from any country!": {
        "message": "Ben artık herhangi bir ülkeden $1 erişebilirsiniz!"
    },
    "I did not experience any buffering": {
        "message": "Önbelleğe yüklenemedi"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ben sadece $1 için Hola kullanarak bir sansür sitesine erişim!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ülkemde $2 görüntülemek $1 kullanarak ve daha hızlı sörf ediyorum!"
    },
    "IC": {
        "message": "Kanarya Adaları"
    },
    "ID": {
        "message": "Endonezya"
    },
    "IE": {
        "message": "İrlanda"
    },
    "IL": {
        "message": "İsrail"
    },
    "IM": {
        "message": "Man Adası"
    },
    "IN": {
        "message": "Hindistan"
    },
    "IO": {
        "message": "Hint Okyanusu İngiliz Bölgesi"
    },
    "IQ": {
        "message": "Irak"
    },
    "IR": {
        "message": "İran"
    },
    "IS": {
        "message": "İzlanda"
    },
    "IT": {
        "message": "İtalya"
    },
    "Improve translation": {
        "message": "Çeviriyi geliştirin"
    },
    "Initializing...": {
        "message": "Başlatılıyor ..."
    },
    "Install": {
        "message": "Yükle"
    },
    "Install Accelerator": {
        "message": "Hızlandırıcıyı yükleyin"
    },
    "Install Free Hola Accelerator": {
        "message": "Ücretsiz Hola Hızlandırıcı yükleyin"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Bedava Hola kullanmaya devam etmek için Hola Engine yükleyin"
    },
    "Instantly watch any torrent Video": {
        "message": "Anında herhangi bir torrent video izle"
    },
    "Invite friends - free Premium.": {
        "message": "Arkadaşlarını davet et bedava Premium kazan."
    },
    "Invite friends. Get Premium.": {
        "message": "Arkadaşlarını davet et. Premium’u al."
    },
    "It was okay": {
        "message": "Tamam oldu"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Ürdün"
    },
    "JP": {
        "message": "Japonya"
    },
    "KG": {
        "message": "Kırgızistan"
    },
    "KH": {
        "message": "Kamboçya"
    },
    "KM": {
        "message": "Komorlar"
    },
    "KN": {
        "message": "Saint Kitts ve Nevis"
    },
    "KP": {
        "message": "Kuzey Kore"
    },
    "KR": {
        "message": "Güney Kore"
    },
    "KW": {
        "message": "Kuveyt"
    },
    "KY": {
        "message": "Cayman Adaları"
    },
    "KZ": {
        "message": "Kazakistan"
    },
    "LB": {
        "message": "Lübnan"
    },
    "LC": {
        "message": "Lucia"
    },
    "LR": {
        "message": "Liberya"
    },
    "LT": {
        "message": "Litvanya"
    },
    "LU": {
        "message": "Lüksemburg"
    },
    "LV": {
        "message": "Letonya"
    },
    "Language": {
        "message": "Dil"
    },
    "Library": {
        "message": "Kütüphane"
    },
    "Loading": {
        "message": "Yükleniyor"
    },
    "Loading site...": {
        "message": "Site yükleniyor..."
    },
    "Log in": {
        "message": "Oturumu aç"
    },
    "Log out": {
        "message": "Oturumu kapat"
    },
    "Love Hola?": {
        "message": "Hola’yı sevdin mi?"
    },
    "Love it": {
        "message": "Onu seviyorum"
    },
    "MA": {
        "message": "Fas"
    },
    "MC": {
        "message": "Monako"
    },
    "ME": {
        "message": "Karadağ"
    },
    "MF": {
        "message": "Saint Martin,"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Marshall Adaları"
    },
    "MI": {
        "message": "Midway Adaları"
    },
    "MK": {
        "message": "Makedonya"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MN": {
        "message": "Moğolistan"
    },
    "MO": {
        "message": "Makao S.A.R. Çin"
    },
    "MP": {
        "message": "Kuzey Mariana Adaları"
    },
    "MQ": {
        "message": "Martinik"
    },
    "MR": {
        "message": "Moritanya"
    },
    "MV": {
        "message": "Maldivler"
    },
    "MW": {
        "message": "Malavi"
    },
    "MX": {
        "message": "Meksika"
    },
    "MY": {
        "message": "Malezya"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Marka İnternet ile daha iyi $1"
    },
    "Menu": {
        "message": "Menü"
    },
    "Might not work on all sites": {
        "message": "Tüm siteleri üzerinde işe yaramayabilir"
    },
    "Mode": {
        "message": "Kip"
    },
    "More countries": {
        "message": "Daha fazla ülke"
    },
    "More sites...": {
        "message": "Daha fazla site..."
    },
    "More...": {
        "message": "Daha fazla..."
    },
    "My Account": {
        "message": "Hesabım"
    },
    "My History": {
        "message": "Benim Tarih"
    },
    "My Settings": {
        "message": "Ayarlarım"
    },
    "My favorites": {
        "message": "Favorilerim"
    },
    "NA": {
        "message": "Namibya"
    },
    "NC": {
        "message": "Yeni Kaledonya"
    },
    "NE": {
        "message": "Nijer"
    },
    "NF": {
        "message": "Norfolk Adası"
    },
    "NG": {
        "message": "Nijerya"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Hollanda"
    },
    "NO": {
        "message": "Norveç"
    },
    "NT": {
        "message": "Tarafsız Bölge"
    },
    "NZ": {
        "message": "Yeni Zelanda"
    },
    "Need Help?": {
        "message": "Yardım mı lazım?"
    },
    "Never ask me again": {
        "message": "Tekrar sorma"
    },
    "Never be a peer": {
        "message": "Asla bir eş olma"
    },
    "No": {
        "message": "Hayır"
    },
    "No idle peers found.": {
        "message": "Kullanılmayan eş bulunamadı."
    },
    "No recent videos found": {
        "message": "Hiçbir son videolar bulunamadı"
    },
    "No saved videos found": {
        "message": "Hiçbir kaydedilmiş video bulunamadı"
    },
    "No title": {
        "message": "Hiçbir başlık"
    },
    "No videos found": {
        "message": "Video bulunamadı"
    },
    "No videos found on active page": {
        "message": "Aktif sayfada bulunamadı video"
    },
    "No, Thanks": {
        "message": "Hayır, teşekkürler"
    },
    "No, fix it": {
        "message": "Hayır, düzelt"
    },
    "Not working?": {
        "message": "Çalışmıyor mu?"
    },
    "Number of users that pressed not working": {
        "message": "Çalışmıyor olarak bildirim yapan kullanıcıların sayısı"
    },
    "Number of users that use this option": {
        "message": "Bu seçeneği kullanan kullanıcıların sayısı"
    },
    "OM": {
        "message": "Umman"
    },
    "Off": {
        "message": "Kapalı"
    },
    "Oh, yes!": {
        "message": "Oh, Evet!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox'un eski sürümü. Yükseltmek için <a>buraya</a> tıklayın."
    },
    "On": {
        "message": "Açık"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Bizim Brand New Mplayer Yakında!"
    },
    "PC": {
        "message": "Pasifik Adaları Güven Territory"
    },
    "PF": {
        "message": "Fransız Polinezyası"
    },
    "PG": {
        "message": "Papua Yeni Gine"
    },
    "PH": {
        "message": "Filipinler"
    },
    "PL": {
        "message": "Polonya"
    },
    "PM": {
        "message": "Saint Pierre ve Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PR": {
        "message": "Porto Riko"
    },
    "PS": {
        "message": "Filistin Bölgesi"
    },
    "PT": {
        "message": "Portekiz"
    },
    "PU": {
        "message": "ABD Çeşitli Pasifik Adaları"
    },
    "PZ": {
        "message": "Panama Kanalı Bölgesi"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Lütfen Proxy ayarlarınızı kontrol ettiğini düşündüğünüz Reklam Engelleyici, diğer VPN servisleri, vb. diğer <a>Uzantıları</a> devre dışı bırakınız."
    },
    "Please enter a valid email address.": {
        "message": "Geçerli bir e-posta adresi giriniz."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "facebook.com gibi, bir web sitesi adresi giriniz"
    },
    "Please help us get better": {
        "message": "Daha iyi bir deneyim için bize yardımcı olun"
    },
    "Popular in $1": {
        "message": "$1’da popüler"
    },
    "Popular in the world": {
        "message": "Dünyada popüler"
    },
    "Popular sites": {
        "message": "Popüler siteler"
    },
    "Premium": {
        "message": "Ücretli Hizmet"
    },
    "QA": {
        "message": "Katar"
    },
    "QO": {
        "message": "Dış Okyanusya"
    },
    "RE": {
        "message": "Reunion"
    },
    "RO": {
        "message": "Romanya"
    },
    "RS": {
        "message": "Sırbistan"
    },
    "RU": {
        "message": "Rusya Federasyonu"
    },
    "RW": {
        "message": "Ruanda"
    },
    "Rate us": {
        "message": "Bizi değerlendirin"
    },
    "Recent Videos": {
        "message": "Yeni Videolar"
    },
    "Reload": {
        "message": "Yeniden Yükle"
    },
    "Reload Hola": {
        "message": "Hola’yı yeniden yükle"
    },
    "Remember server": {
        "message": "Sunucuyu hatırla"
    },
    "Report a problem": {
        "message": "Sorun bildir"
    },
    "Retry safe mode": {
        "message": "Güvenli mod yeniden deneyin"
    },
    "SA": {
        "message": "Suudi Arabistan"
    },
    "SB": {
        "message": "Solomon Adaları"
    },
    "SC": {
        "message": "Seyşel Adaları"
    },
    "SE": {
        "message": "İsveç"
    },
    "SG": {
        "message": "Singapur"
    },
    "SH": {
        "message": "Aziz Helena"
    },
    "SI": {
        "message": "Slovenya"
    },
    "SJ": {
        "message": "Svalbard ve Jan Mayen"
    },
    "SK": {
        "message": "Slovakya"
    },
    "SO": {
        "message": "Somali"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sao Tome ve Principe"
    },
    "SU": {
        "message": "Sovyet Sosyalist Cumhuriyetleri Birliği"
    },
    "SY": {
        "message": "Suriye"
    },
    "SZ": {
        "message": "Svaziland"
    },
    "Safe": {
        "message": "Güvenli"
    },
    "Safe mode": {
        "message": "Güvenli mod"
    },
    "Save": {
        "message": "Kaydet"
    },
    "Saved Videos": {
        "message": "Kaydedilen videolar"
    },
    "Saved for later": {
        "message": "Sonrası için kaydedilen"
    },
    "Search video title": {
        "message": "Video ara başlığı"
    },
    "Select a Country": {
        "message": "Bir ülke seçin"
    },
    "Select site to unblock": {
        "message": "Engelini kaldırmak için siteyi seçin"
    },
    "Server saved!": {
        "message": "Sunucu kaydedildi!"
    },
    "Set safe mode for $1 $2": {
        "message": "Set güvenli mod $1 $2"
    },
    "Settings": {
        "message": "Ayarlar"
    },
    "Share": {
        "message": "Pay"
    },
    "Share $1 on $2": {
        "message": "$1 üzerinde $2 paylaş"
    },
    "Share $1 via $2": {
        "message": "$1 ile $2 paylaş"
    },
    "Share with friends!": {
        "message": "Arkadaşlarınla paylaş!"
    },
    "Sign up": {
        "message": "Kaydol"
    },
    "Solve buffering": {
        "message": "Önbelleği çözün"
    },
    "Solve buffering problems with": {
        "message": "İle önbellek sorunları çözün"
    },
    "Solves it": {
        "message": "Bunu çözümle"
    },
    "Staff Picks": {
        "message": "Personel Seçtikleri"
    },
    "Start Hola": {
        "message": "Hola’yı başlat"
    },
    "Starting...": {
        "message": "Başlatılıyor ..."
    },
    "Stop Hola": {
        "message": "Hola’yı durdur"
    },
    "Stopping peer routing...": {
        "message": "Eş yönlendirmeyi durdurun..."
    },
    "Stream": {
        "message": "Dere"
    },
    "Stream Instantly": {
        "message": "Anında akışı"
    },
    "Submit": {
        "message": "Gönderin"
    },
    "Support Hola": {
        "message": "Hola’yı destekle"
    },
    "TC": {
        "message": "Turks ve Caicos Adaları"
    },
    "TD": {
        "message": "Çad"
    },
    "TF": {
        "message": "Fransız Güney Bölgeleri"
    },
    "TG": {
        "message": "Gitmek"
    },
    "TH": {
        "message": "Tayland"
    },
    "TJ": {
        "message": "Tacikistan"
    },
    "TL": {
        "message": "Doğu Timor"
    },
    "TM": {
        "message": "Türkmenistan"
    },
    "TN": {
        "message": "Tunus"
    },
    "TR": {
        "message": "Türkiye"
    },
    "TT": {
        "message": "Trinidad ve Tobago"
    },
    "TW": {
        "message": "Tayvan"
    },
    "TZ": {
        "message": "Tanzanya"
    },
    "Talk to us on $1": {
        "message": "$1 ile bizimle iletişimi geç"
    },
    "Tell friends about $1": {
        "message": "Arkadaşlarınıza $1’dan bahsedin"
    },
    "Testing connection...": {
        "message": "Bağlantıyı test ediyor..."
    },
    "Thank you!": {
        "message": "Teşekkür ederim!"
    },
    "There seems to be an error": {
        "message": "Bir hata var gibi görünüyor"
    },
    "Top popular sites": {
        "message": "En popüler siteler"
    },
    "Translate to your language": {
        "message": "Kendi diline çevir"
    },
    "Try again": {
        "message": "Tekrar deneyin"
    },
    "Try another server": {
        "message": "Diğer sunucuyu deneyin"
    },
    "Try it": {
        "message": "Deneyin"
    },
    "Try safe mode": {
        "message": "Güvenli mod deneyin"
    },
    "Try to <span>reload</span>": {
        "message": "<span>Yeniden yüklemeye</span> çalışın"
    },
    "Trying another peer...": {
        "message": "Diğer eş kontrol ediliyor..."
    },
    "Turn off Accelerator": {
        "message": "Hızlandırıcıyı kapat"
    },
    "Turn off Hola": {
        "message": "Hola’yı kapat"
    },
    "Turn on Accelerator": {
        "message": "Hızlandırıcıyı aç"
    },
    "Turn on Hola": {
        "message": "Hola’yı aç"
    },
    "Turn on to get started": {
        "message": "Başlamak için açın"
    },
    "UA": {
        "message": "Ukrayna"
    },
    "UM": {
        "message": "Amerika Birleşik Devletleri Küçük Dış Adaları"
    },
    "US": {
        "message": "Amerika Birleşik Devletleri"
    },
    "UZ": {
        "message": "Özbekistan"
    },
    "Unblocker": {
        "message": "Engel Kaldırma"
    },
    "Unblocker is disabled": {
        "message": "Engel Kaldırma devre dışı"
    },
    "Unblocker?": {
        "message": "Engel Kaldırıcı?"
    },
    "Update": {
        "message": "Güncelleştirme"
    },
    "Upgrade": {
        "message": "Yükselt"
    },
    "Using": {
        "message": "Kullanımı"
    },
    "Using Hola": {
        "message": "Hola’yı kullanma"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent ve Grenadinler"
    },
    "VD": {
        "message": "Kuzey Vietnam"
    },
    "VG": {
        "message": "İngiliz Virgin Adaları"
    },
    "VI": {
        "message": "ABD Virgin Adaları"
    },
    "VPN Premium": {
        "message": "Ücretli VPN servisi"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome’un çok eski sürümü, Hola eklentisini kullanmak için Chrome'u <a>güncelleştirin</a>"
    },
    "Video stuck?": {
        "message": "Video takıldı mı?"
    },
    "Videos available for instant streaming": {
        "message": "Anlık akışı için kullanılabilir Videolar"
    },
    "WF": {
        "message": "Wallis ve Futuna"
    },
    "WK": {
        "message": "Wake Adası"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Diğer cihazlarda Hola’yı görmek ister misiniz? (Xbox, PS, Apple TV, iPhone ...). Buraya tıklayın"
    },
    "Want to know more?": {
        "message": "Daha fazla bilmek ister misiniz?"
    },
    "Watch Now": {
        "message": "Şimdi İzle"
    },
    "We found $1 videos": {
        "message": "Biz bulundu $1 videolar"
    },
    "We will be in touch with you soon": {
        "message": "Yakında sizinle iletişim kuracağız"
    },
    "Working!": {
        "message": "Çalışıyor!"
    },
    "Working?": {
        "message": "Çalışıyor mu?"
    },
    "Works on all sites but slower": {
        "message": "Tüm sitelerde ama yavaş İşleri"
    },
    "YD": {
        "message": "Yemen Demokratik Halk Cumhuriyeti"
    },
    "Yes": {
        "message": "Evet"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Hola kullanmak için Opera son sürümüne yükseltmeniz gerekiyor. Yükseltmek için <a>buraya</a> tıklayın."
    },
    "ZA": {
        "message": "Güney Afrika"
    },
    "ZM": {
        "message": "Zambiya"
    },
    "ZW": {
        "message": "Zimbabve"
    },
    "ZZ": {
        "message": "Bilinmeyen veya Geçersiz Bölge"
    },
    "app_desc": {
        "message": "Ülkenizdeki, şirketinizdeki ya da okulunuzdaki engellenmiş sitelere Hola ile ulaşın!, Hola kolay ve ücretsizdir!"
    },
    "app_name": {
        "message": "Hola daha iyi internet"
    },
    "back to": {
        "message": "geri"
    },
    "changing...": {
        "message": "değiştiriliyor..."
    },
    "cool sites": {
        "message": "serin siteleri"
    },
    "current site": {
        "message": "Geçerli site"
    },
    "day": {
        "message": "gün"
    },
    "days": {
        "message": "günler"
    },
    "even more...": {
        "message": "daha da fazla ..."
    },
    "mode": {
        "message": "kip"
    },
    "more options...": {
        "message": "daha fazla seçenek..."
    },
    "not working?": {
        "message": "çalışmıyor mu?"
    },
    "not working? try another server": {
        "message": "Çalışmıyor mu? Diğer sunucuyu deneyin"
    },
    "on this page": {
        "message": "Bu sayfada"
    },
    "sites that are censored": {
        "message": "sansürlü siteler"
    },
    "start": {
        "message": "başlat"
    },
    "working? remember": {
        "message": "Çalışıyor mu? hatırla"
    }
};
return E; });