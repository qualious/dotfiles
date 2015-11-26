'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " melalui "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola untuk mengakses $2\n\nKlik di sini untuk melakukan hal yang sama: $3\n\nIni menginstal Hola, yang memungkinkan saya berselancar di Internet lebih cepat dan akses $4$5"
    },
    "$1 from $2": {
        "message": "$1 dari $2"
    },
    "$1 not found": {
        "message": "$1 tidak ditemukan"
    },
    "$1 via Hola": {
        "message": "$1 melalui Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(beberapa fitur Hola tidak tersedia pada versi Anda)"
    },
    "AC": {
        "message": "Pulau Ascension"
    },
    "AD": {
        "message": "Andora"
    },
    "AE": {
        "message": "Uni Emirat Arab"
    },
    "AF": {
        "message": "Afganistan"
    },
    "AG": {
        "message": "Antigua dan Barbuda"
    },
    "AN": {
        "message": "Antilla Belanda"
    },
    "AQ": {
        "message": "Antarktika"
    },
    "AS": {
        "message": "Samoa Amerika"
    },
    "AX": {
        "message": "Kepulauan Aland"
    },
    "About": {
        "message": "Tentang"
    },
    "About Hola": {
        "message": "Tentang Hola"
    },
    "Accelerator": {
        "message": "Akselerator"
    },
    "Accelerator is": {
        "message": "Accelerator"
    },
    "Access $1 - cool site!": {
        "message": "Akses $1 - situs keren!"
    },
    "Access $1?": {
        "message": "Akses $1?"
    },
    "Access any site from any country, free": {
        "message": "akses situs apapun dari negara manapun, gratis!"
    },
    "Access cool sites": {
        "message": "Akses situs keren"
    },
    "Access more sites": {
        "message": "Akses lebih banyak situs"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Mengakses situs disensor di negara Anda dan mempercepat Internet Anda dengan Hola - Gratis!"
    },
    "Accessing $1 with Hola": {
        "message": "Mengakses $1 dengan Hola"
    },
    "Account": {
        "message": "Akun"
    },
    "Account type": {
        "message": "Jenis akun"
    },
    "Activating...": {
        "message": "Mengaktifkan..."
    },
    "All ($1)": {
        "message": "Semua ($1)"
    },
    "Apply settings...": {
        "message": "Terapkan pengaturan..."
    },
    "Author site:": {
        "message": "Situs pembuat:"
    },
    "Author:": {
        "message": "Pembuat:"
    },
    "Awesome!": {
        "message": "Keren!"
    },
    "BA": {
        "message": "Bosnia dan Herzegovina"
    },
    "BE": {
        "message": "Belgia"
    },
    "BL": {
        "message": "Saint Barthelemy"
    },
    "BQ": {
        "message": "Wilayah Antartika Inggris"
    },
    "BR": {
        "message": "Brasil"
    },
    "BS": {
        "message": "Bahama"
    },
    "BV": {
        "message": "Pulau Bouvet"
    },
    "BY": {
        "message": "Belarusia"
    },
    "Back to $1": {
        "message": "Kembali ke $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Jadilah yang pertama untuk mendapatkan Hola untuk iPhone / iPad - Daftar sekarang:"
    },
    "Buffering problems?": {
        "message": "Masalah buffering?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Kepulauan Cocos"
    },
    "CD": {
        "message": "Kongo - Kinshasa"
    },
    "CF": {
        "message": "Republik Afrika Tengah"
    },
    "CG": {
        "message": "Kongo - Republik"
    },
    "CH": {
        "message": "Swiss"
    },
    "CI": {
        "message": "Cote d'Ivoire"
    },
    "CK": {
        "message": "Kepulauan Cook"
    },
    "CL": {
        "message": "Cile"
    },
    "CM": {
        "message": "Kamerun"
    },
    "CN": {
        "message": "Cina"
    },
    "CO": {
        "message": "Kolombia"
    },
    "CP": {
        "message": "Pulau Clipperton"
    },
    "CR": {
        "message": "Kosta Rika"
    },
    "CS": {
        "message": "Serbia dan Montenegro"
    },
    "CT": {
        "message": "Canton dan Kepulauan Enderbury"
    },
    "CU": {
        "message": "Kuba"
    },
    "CV": {
        "message": "Tanjung Verde"
    },
    "CX": {
        "message": "Pulau Christmas"
    },
    "CY": {
        "message": "Siprus"
    },
    "CZ": {
        "message": "Republik Ceko"
    },
    "Changing country...": {
        "message": "Mengubah Negara..."
    },
    "Check out Hola for $1!": {
        "message": "Lihat Hola untuk $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Periksa Hola untuk perangkat mobile"
    },
    "Check your Internet connection": {
        "message": "Periksa koneksi Internet anda"
    },
    "Choose<br>Country": {
        "message": "Pilih<br>Negara"
    },
    "Configuring...": {
        "message": "Melakukan pengaturan..."
    },
    "Connecting...": {
        "message": "Menghubungkan ..."
    },
    "Cool site!": {
        "message": "Situs Keren!"
    },
    "Creative licenses": {
        "message": "Lisensi Creative"
    },
    "DD": {
        "message": "Jerman Timur"
    },
    "DE": {
        "message": "Jerman"
    },
    "DJ": {
        "message": "Jibuti"
    },
    "DM": {
        "message": "Dominika"
    },
    "DO": {
        "message": "Republik Dominika"
    },
    "DZ": {
        "message": "Aljazair"
    },
    "Delete": {
        "message": "Hapus"
    },
    "Deleted from my list": {
        "message": "Dihapus dari daftar saya"
    },
    "Did it work?": {
        "message": "Apakah itu bekerja?"
    },
    "Did you experience any buffering?": {
        "message": "Apakah Anda mengalami penyangga apapun?"
    },
    "Disliked it": {
        "message": "Disukai itu"
    },
    "Don't show again for $1 for one week": {
        "message": "Jangan tampilkan untuk $1 selama seminggu"
    },
    "Don't show again for any site for one week": {
        "message": "Jangan tampilkan untuk situs apapun selama seminggu"
    },
    "Downloading": {
        "message": "Men-download"
    },
    "EA": {
        "message": "Ceuta dan Melilla"
    },
    "EC": {
        "message": "Ekuador"
    },
    "EG": {
        "message": "Mesir"
    },
    "EH": {
        "message": "Sahara Barat"
    },
    "ES": {
        "message": "Spanyol"
    },
    "ET": {
        "message": "Etiopia"
    },
    "EU": {
        "message": "Uni Eropa"
    },
    "Enable": {
        "message": "Aktifkan"
    },
    "Enable Hola Accelerator": {
        "message": "Aktifkan Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Nikmati!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Menikmati Hola untuk Chrome?"
    },
    "Enter site to access": {
        "message": "Masukkan situs untuk mengakses"
    },
    "Enter your email": {
        "message": "Masukkan email Anda"
    },
    "FI": {
        "message": "Finlandia"
    },
    "FK": {
        "message": "Kepulauan Malvinas"
    },
    "FM": {
        "message": "Mikronesia"
    },
    "FO": {
        "message": "Kepulauan Faroe"
    },
    "FQ": {
        "message": "Perancis Selatan dan Antarktika Territories"
    },
    "FR": {
        "message": "Perancis"
    },
    "FX": {
        "message": "Perancis Metropolitan"
    },
    "Fast": {
        "message": "Cepat"
    },
    "Finding new peers...": {
        "message": "Mencari rekan baru..."
    },
    "Finding peers...": {
        "message": "Mencari rekan..."
    },
    "Free": {
        "message": "Gratis"
    },
    "From": {
        "message": "Dari"
    },
    "Full list": {
        "message": "Daftar lengkap"
    },
    "GB": {
        "message": "Inggris Raya"
    },
    "GF": {
        "message": "Guyana Perancis"
    },
    "GL": {
        "message": "Grinlandia"
    },
    "GQ": {
        "message": "Guinea Khatulistiwa"
    },
    "GR": {
        "message": "Yunani"
    },
    "GS": {
        "message": "Kepulauan South Sandwich dan South Georgia"
    },
    "Get 24/7 Unblocking": {
        "message": "Dapatkan unblok untuk 24/7"
    },
    "Get Free Premium": {
        "message": "Dapatkan Premium Gratis"
    },
    "Get Hola Accelerator": {
        "message": "Dapatkan Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Dapatkan Hola Pemain"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Dapatkan Hola Plus untuk layanan bebas-gangguan, bebas-iklan."
    },
    "Get Hola Premium": {
        "message": "Dapatkan Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Dapatkan Hola untuk Android"
    },
    "Get Premium support": {
        "message": "Dapatkan dukungan Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Dapatkan Unblocking Tanpa Batas"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Dapatkan akses ke situs disensor, coba sekarang: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Dapatkan bantuan dari teknisi melalui Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Dapatkan Server yang paling Cepat"
    },
    "Go": {
        "message": "Pergi"
    },
    "Go Hola Premium": {
        "message": "Dapatkan Hola Premium"
    },
    "HM": {
        "message": "Pulau Heard dan Kepulauan McDonald"
    },
    "HR": {
        "message": "Kroasia"
    },
    "HU": {
        "message": "Hungaria"
    },
    "Hate it": {
        "message": "Benci"
    },
    "Help": {
        "message": "Bantuan"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nsaya menggunakan"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nsaya mulai menggunakan $1 ($2). Ini membuat saya surfing internet lebih cepat dan mengakses $3 di negara saya."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola tidak bisa bekerja karena ekstensi lain adalah mengendalikan pengaturan proxy Anda."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola tidak bekerja dengan baik pada modus Windows 8. Silahkan ubah ke modus desktop. Klik <a>di sini</a> untuk penjelasan"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola tidak tersedia sekarang, tapi kami bekerja di atasnya."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola tidak aktif, klik untuk mengaktifkan"
    },
    "Hola site list": {
        "message": "Daftar situs unblocker"
    },
    "I can now access $1 from any country!": {
        "message": "Saya sekarang dapat mengakses $1 dari negara manapun!"
    },
    "I did not experience any buffering": {
        "message": "Saya tidak mengalami penyangga apapun"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Aku hanya diakses situs disensor menggunakan Hola untuk $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Saya menggunakan $1 untuk melihat $2 di negara saya, dan berselancar lebih cepat!"
    },
    "IC": {
        "message": "Kepulauan Canary"
    },
    "IE": {
        "message": "Irlandia"
    },
    "IM": {
        "message": "Pulau manusia"
    },
    "IO": {
        "message": "Wilayah Inggris di Samudra Hindia"
    },
    "IQ": {
        "message": "Irak"
    },
    "IS": {
        "message": "Islandia"
    },
    "IT": {
        "message": "Italia"
    },
    "Improve translation": {
        "message": "Perbarui Penerjemahan"
    },
    "Initializing...": {
        "message": "Inisialisasi, mohon tunggu..."
    },
    "Install": {
        "message": "Pasang"
    },
    "Install Accelerator": {
        "message": "Instal Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Instal Gratis Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Instal Hola Engine untuk terus menggunakan Hola gratis"
    },
    "Instantly watch any torrent Video": {
        "message": "Seketika menonton torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Undang teman - Premium gratis."
    },
    "Invite friends. Get Premium.": {
        "message": "Undang teman. Dapatkan Premium."
    },
    "It was okay": {
        "message": "Itu baik-baik saja"
    },
    "JE": {
        "message": "Baju kaos"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JO": {
        "message": "Yordania"
    },
    "JP": {
        "message": "Jepang"
    },
    "JT": {
        "message": "Johnston Pulau"
    },
    "KG": {
        "message": "Kirgistan"
    },
    "KH": {
        "message": "Kamboja"
    },
    "KM": {
        "message": "Komoros"
    },
    "KN": {
        "message": "Saint Kitts dan Nevis"
    },
    "KP": {
        "message": "Korea Utara"
    },
    "KR": {
        "message": "Korea Selatan"
    },
    "KY": {
        "message": "Kepulauan Kayman"
    },
    "KZ": {
        "message": "Kazakstan"
    },
    "LB": {
        "message": "Libanon"
    },
    "LT": {
        "message": "Lituania"
    },
    "LU": {
        "message": "Luksemburg"
    },
    "LY": {
        "message": "Libia"
    },
    "Language": {
        "message": "Bahasa"
    },
    "Library": {
        "message": "Perpustakaan"
    },
    "Like it": {
        "message": "Suka itu"
    },
    "Loading": {
        "message": "Memuat"
    },
    "Loading site...": {
        "message": "Memuat"
    },
    "Log in": {
        "message": "Login"
    },
    "Log out": {
        "message": "Keluar"
    },
    "Love Hola?": {
        "message": "Cinta Hola?"
    },
    "Love it": {
        "message": "Suka sekali"
    },
    "MA": {
        "message": "Maroko"
    },
    "MC": {
        "message": "Monako"
    },
    "MG": {
        "message": "Madagaskar"
    },
    "MH": {
        "message": "Kepulauan Marshall"
    },
    "MI": {
        "message": "Kepulauan Midway"
    },
    "MK": {
        "message": "Makedonia"
    },
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Makau SAR China"
    },
    "MP": {
        "message": "Kepulauan Mariana Utara"
    },
    "MV": {
        "message": "Maladewa"
    },
    "MX": {
        "message": "Meksiko"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Membuat Internet Anda lebih baik dengan $1"
    },
    "Might not work on all sites": {
        "message": "Tidak mungkin bekerja pada semua situs"
    },
    "More countries": {
        "message": "Lebih banyak daftar negara"
    },
    "More sites...": {
        "message": "Lanjut..."
    },
    "More...": {
        "message": "Lanjut..."
    },
    "My Account": {
        "message": "Akunku"
    },
    "My History": {
        "message": "Sejarah saya"
    },
    "My Settings": {
        "message": "Pengaturanku"
    },
    "My favorites": {
        "message": "Favoritku"
    },
    "NC": {
        "message": "Kaledonia Baru"
    },
    "NF": {
        "message": "Kepulauan Norfolk"
    },
    "NI": {
        "message": "Nikaragua"
    },
    "NL": {
        "message": "Belanda"
    },
    "NO": {
        "message": "Norwegia"
    },
    "NT": {
        "message": "Zona Netral"
    },
    "NZ": {
        "message": "Selandia Baru"
    },
    "Need Help?": {
        "message": "Butuh Bantuan?"
    },
    "Never ask me again": {
        "message": "Jangan tanya saya lagi"
    },
    "Never be a peer": {
        "message": "Tidak pernah menjadi rekan"
    },
    "No": {
        "message": "Tidak"
    },
    "No idle peers found.": {
        "message": "Tidak ditemukan rekan yang tak bekerja."
    },
    "No recent videos found": {
        "message": "Tidak ada video ditemukan"
    },
    "No saved videos found": {
        "message": "Tidak ada video yang disimpan ditemukan"
    },
    "No title": {
        "message": "Tidak ada judul"
    },
    "No videos found": {
        "message": "Tidak ada video ditemukan"
    },
    "No videos found on active page": {
        "message": "Tidak ada video ditemukan di halaman aktif"
    },
    "No, Thanks": {
        "message": "Tidak, Terima kasih"
    },
    "No, fix it": {
        "message": "Tidak, memperbaikinya"
    },
    "Not working?": {
        "message": "Tidak bekerja?"
    },
    "Number of users that pressed not working": {
        "message": "Jumlah pengguna yang ditekan tidak bekerja"
    },
    "Number of users that use this option": {
        "message": "Jumlah pengguna pilihan ini"
    },
    "Off": {
        "message": "Mati"
    },
    "Oh, yes!": {
        "message": "Oh, ya!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Versi lama Firefox. Tekan <a>di sini</a> untuk meng-upgrade."
    },
    "On": {
        "message": "Hidup"
    },
    "Open Media Player": {
        "message": "Terbuka Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Kami Brand New Mplayer adalah Coming Soon!"
    },
    "PC": {
        "message": "Wilayah Pacific Islands Kepercayaan"
    },
    "PF": {
        "message": "Polinesia Prancis"
    },
    "PG": {
        "message": "Nugini Papua Nugini"
    },
    "PH": {
        "message": "Filipina"
    },
    "PL": {
        "message": "Polandia"
    },
    "PM": {
        "message": "Saint Pierre dan Miquelon"
    },
    "PN": {
        "message": "Kepulauan Pitcairn"
    },
    "PR": {
        "message": "Puerto Riko"
    },
    "PS": {
        "message": "Otoritas Palestina"
    },
    "PT": {
        "message": "Portugis"
    },
    "PU": {
        "message": "US Miscellaneous Kepulauan Pasifik"
    },
    "PY": {
        "message": "Paraguai"
    },
    "PZ": {
        "message": "Zona Terusan Panama"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Nonaktifkan <a>ekstensi</a> lain yang menurut Anda mungkin mengontrol setelan proxy seperti ad-blocker, layanan VPN lain, dll"
    },
    "Please enter a valid email address.": {
        "message": "Silakan masukkan alamat email yang valid."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Masukkan alamat situs web, seperti facebook.com"
    },
    "Please help us get better": {
        "message": "Harap membantu kami menjadi lebih baik"
    },
    "Popular in $1": {
        "message": "Populer di $1"
    },
    "Popular in the world": {
        "message": "Populer di dunia"
    },
    "Popular sites": {
        "message": "Situs populer"
    },
    "Premium": {
        "message": "Premi"
    },
    "QO": {
        "message": "Oseania Luar"
    },
    "RO": {
        "message": "Rumania"
    },
    "RU": {
        "message": "Rusia"
    },
    "Rate us": {
        "message": "Beri kami"
    },
    "Recent Videos": {
        "message": "Video Terbaru"
    },
    "Reload": {
        "message": "Muat ulang"
    },
    "Reload Hola": {
        "message": "Muat ulang Hola"
    },
    "Remember server": {
        "message": "Ingat server"
    },
    "Report a problem": {
        "message": "Laporkan masalah"
    },
    "Retry safe mode": {
        "message": "Coba lagi safe mode"
    },
    "SA": {
        "message": "Arab Saudi"
    },
    "SB": {
        "message": "Kepulauan Solomon"
    },
    "SE": {
        "message": "Swedia"
    },
    "SG": {
        "message": "Singapura"
    },
    "SJ": {
        "message": "Kepulauan Svalbard dan Jan Mayen"
    },
    "ST": {
        "message": "Sao Tome dan Principe"
    },
    "SU": {
        "message": "Republik Sosialis Uni Soviet"
    },
    "SY": {
        "message": "Suriah"
    },
    "Safe": {
        "message": "Aman"
    },
    "Safe mode": {
        "message": "Mode aman"
    },
    "Save": {
        "message": "Simpan"
    },
    "Saved Videos": {
        "message": "Disimpan Video"
    },
    "Saved for later": {
        "message": "Disimpan untuk nanti"
    },
    "Search video title": {
        "message": "Cari judul video"
    },
    "Select a Country": {
        "message": "Pilih Negara"
    },
    "Select site to unblock": {
        "message": "Pilih situs untuk membuka blokir"
    },
    "Server saved!": {
        "message": "Server disimpan!"
    },
    "Set safe mode for $1 $2": {
        "message": "Mengatur mode aman untuk $1 $2"
    },
    "Settings": {
        "message": "Pengaturan"
    },
    "Share": {
        "message": "Bagikan"
    },
    "Share $1 on $2": {
        "message": "Berbagi $1 pada $2"
    },
    "Share $1 via $2": {
        "message": "Bagikan $1 via $2"
    },
    "Share with friends!": {
        "message": "Berbagi dengan teman-teman!"
    },
    "Sign up": {
        "message": "Mendaftar"
    },
    "Solve buffering": {
        "message": "Memecahkan penyangga"
    },
    "Solve buffering problems with": {
        "message": "Memecahkan masalah buffering dengan"
    },
    "Solves it": {
        "message": "Memecahkannya"
    },
    "Staff Picks": {
        "message": "Pilihan staf"
    },
    "Start Hola": {
        "message": "Mulai Hola"
    },
    "Starting...": {
        "message": "Mulai..."
    },
    "Stop Hola": {
        "message": "Hentikan Hola"
    },
    "Stopping peer routing...": {
        "message": "Menghentikan routing rekan..."
    },
    "Stream": {
        "message": "Aliran"
    },
    "Stream Instantly": {
        "message": "Streaming Seketika"
    },
    "Submit": {
        "message": "Menyerahkan"
    },
    "Support Hola": {
        "message": "Dukung Hola"
    },
    "TC": {
        "message": "Kepulauan Turks dan Caicos"
    },
    "TF": {
        "message": "Teritori Kutub Selatan Prancis"
    },
    "TG": {
        "message": "Untuk pergi"
    },
    "TL": {
        "message": "Timor Leste"
    },
    "TM": {
        "message": "Turkimenistan"
    },
    "TR": {
        "message": "Turki"
    },
    "TT": {
        "message": "Trinidad dan Tobago"
    },
    "Talk to us on $1": {
        "message": "Bicara kepada kami pada $1"
    },
    "Tell friends about $1": {
        "message": "Beritahu teman tentang $1"
    },
    "Testing connection...": {
        "message": "Uji coba koneksi..."
    },
    "Thank you!": {
        "message": "Terima kasih!"
    },
    "There seems to be an error": {
        "message": "Tampaknya ada kesalahan"
    },
    "Top popular sites": {
        "message": "Situs populer Top"
    },
    "Translate to your language": {
        "message": "Terjemahkan ke bahasa anda"
    },
    "Try again": {
        "message": "Coba lagi"
    },
    "Try another server": {
        "message": "Coba server lain"
    },
    "Try it": {
        "message": "Cobalah"
    },
    "Try safe mode": {
        "message": "Coba safe mode"
    },
    "Try to <span>reload</span>": {
        "message": "Cobalah untuk <span>ulang</span>"
    },
    "Trying another peer...": {
        "message": "Mencoba rekan lain ..."
    },
    "Turn off Accelerator": {
        "message": "Matikan Accelerator"
    },
    "Turn off Hola": {
        "message": "Matikan Hola"
    },
    "Turn on Accelerator": {
        "message": "Aktifkan Accelerator"
    },
    "Turn on Hola": {
        "message": "Aktifkan Hola"
    },
    "Turn on to get started": {
        "message": "Aktifkan untuk memulai"
    },
    "UA": {
        "message": "Ukraina"
    },
    "UM": {
        "message": "Kepulauan Kecil Terluar Amerika Serikat"
    },
    "US": {
        "message": "Amerika Serikat"
    },
    "Unblocker is disabled": {
        "message": "unblocker dinonaktifkan"
    },
    "Update": {
        "message": "Memperbarui"
    },
    "Upgrade": {
        "message": "Pembaruan"
    },
    "Using": {
        "message": "Menggunakan"
    },
    "Using Hola": {
        "message": "Menggunakan Hola"
    },
    "VA": {
        "message": "Vatikan"
    },
    "VC": {
        "message": "Saint Vincent dan Grenadines"
    },
    "VD": {
        "message": "Vietnam Utara"
    },
    "VG": {
        "message": "Kepulauan Virgin Inggris"
    },
    "VI": {
        "message": "Kepulauan U.S. Virgin"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Versi Chrome yang sangat kuno, <a>perbarui</a> Chrome untuk menggunakan Hola"
    },
    "Video stuck?": {
        "message": "Video terjebak?"
    },
    "Videos available for instant streaming": {
        "message": "Video yang tersedia untuk streaming instan"
    },
    "WF": {
        "message": "Kepulauan Wallis dan Futuna"
    },
    "WK": {
        "message": "Pulau Wake"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Ingin Hola pada perangkat lain? (Xbox, PS, Apple TV, iPhone ...). Klik di sini"
    },
    "Want to know more?": {
        "message": "Ingin tahu lebih banyak?"
    },
    "Watch Now": {
        "message": "Tonton Sekarang"
    },
    "We found $1 videos": {
        "message": "Kami menemukan $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Kami akan menghubungi Anda segera"
    },
    "Working!": {
        "message": "Bekerja!"
    },
    "Working?": {
        "message": "Bekerja?"
    },
    "Works on all sites but slower": {
        "message": "Bekerja pada semua situs tetapi lebih lambat"
    },
    "YD": {
        "message": "Republik Demokratik Rakyat Yaman"
    },
    "YE": {
        "message": "Yaman"
    },
    "Yes": {
        "message": "Ya"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Anda perlu meng-upgrade ke versi terbaru dari Opera untuk menggunakan Hola. Tekan <a>di sini</a> untuk meng-upgrade."
    },
    "ZA": {
        "message": "Afrika Selatan"
    },
    "ZZ": {
        "message": "Tidak diketahui atau tidak valid Region"
    },
    "app_desc": {
        "message": "Akses situs web yang diblok di negara, perusahaan atau sekolah anda dengan Hola! Hola gratis dan mudah dipakai!"
    },
    "app_name": {
        "message": "Hola Internet yang Lebih Baik"
    },
    "back to": {
        "message": "kembali ke"
    },
    "changing...": {
        "message": "mengubah..."
    },
    "cool sites": {
        "message": "situs keren"
    },
    "current site": {
        "message": "situs saat ini"
    },
    "day": {
        "message": "hari"
    },
    "days": {
        "message": "hari-hari"
    },
    "even more...": {
        "message": "bahkan lebih..."
    },
    "more options...": {
        "message": "Pilihan lain..."
    },
    "not working?": {
        "message": "tidak bekerja?"
    },
    "not working? try another server": {
        "message": "Tidak bekerja?"
    },
    "on this page": {
        "message": "pada halaman ini"
    },
    "sites that are censored": {
        "message": "situs yang disensor"
    },
    "start": {
        "message": "Mulai"
    },
    "working? remember": {
        "message": "bekerja? simpan"
    }
};
return E; });