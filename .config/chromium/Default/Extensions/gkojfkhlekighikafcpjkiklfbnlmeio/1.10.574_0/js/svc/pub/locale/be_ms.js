'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " melalui "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola untuk mengakses $2\n\nKlik di sini untuk melakukan perkara yang sama: $3\n\nIa memasang Hola, yang membolehkan saya melayari internet dengan lebih cepat dan mengakses $4$5"
    },
    "$1 from $2": {
        "message": "$1 daripada $2"
    },
    "$1 not found": {
        "message": "$1 tidak dijumpai"
    },
    "$1 via Hola": {
        "message": "$1 melalui Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(sesetengah fungsi Hola tidak terdapat pada versi yang sedang anda gunakan)"
    },
    "AC": {
        "message": "Pulau Ascension"
    },
    "AE": {
        "message": "Emiriah Arab Bersatu"
    },
    "AG": {
        "message": "Antigua dan Barbuda"
    },
    "AN": {
        "message": "Antillen Belanda"
    },
    "AQ": {
        "message": "Antartika"
    },
    "AX": {
        "message": "Kepulauan Åland"
    },
    "About": {
        "message": "Mengenai"
    },
    "About Hola": {
        "message": "Mengenai Hola"
    },
    "Accelerator": {
        "message": "Pemecut"
    },
    "Accelerator is": {
        "message": "Pemecut adalah"
    },
    "Access $1 - cool site!": {
        "message": "Akses $1 - tapak sejuk!"
    },
    "Access $1?": {
        "message": "Mengakses $1?"
    },
    "Access any site from any country, free": {
        "message": "Akses bebas ke mana-mana laman web dari mana-mana negara, percuma"
    },
    "Access cool sites": {
        "message": "Akses laman sejuk"
    },
    "Access more sites": {
        "message": "Akses lebih tapak"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Laman Akses ditapis di negara anda dan mempercepatkan Internet anda dengan Hola - Percuma!"
    },
    "Accessing $1 with Hola": {
        "message": "Mengakses $1 dengan Hola"
    },
    "Account": {
        "message": "Akaun"
    },
    "Account type": {
        "message": "Jenis akaun"
    },
    "Activating...": {
        "message": "Mengaktifkan..."
    },
    "All ($1)": {
        "message": "Semua ($1)"
    },
    "Apply settings...": {
        "message": "Guna tetapan..."
    },
    "Author site:": {
        "message": "Penulis laman:"
    },
    "Author:": {
        "message": "Penulis:"
    },
    "BA": {
        "message": "Bosnia dan Herzegovina"
    },
    "BQ": {
        "message": "Wilayah Antartika British"
    },
    "BV": {
        "message": "Pulau Bouvet"
    },
    "Back to $1": {
        "message": "Kembali kepada $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Menjadi yang pertama untuk mendapatkan Hola untuk iPhone / iPad - Daftar sekarang:"
    },
    "Browsing": {
        "message": "Pelayaran"
    },
    "Buffering problems?": {
        "message": "Masalah buffering?"
    },
    "CA": {
        "message": "Kanada"
    },
    "CC": {
        "message": "Cocos (Keeling) Islands"
    },
    "CD": {
        "message": "Democratic Republic of the Congo"
    },
    "CF": {
        "message": "Republik Afrika Tengah"
    },
    "CG": {
        "message": "Congo"
    },
    "CI": {
        "message": "Pantai Gading"
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
    "CX": {
        "message": "Pulau Krismas"
    },
    "CY": {
        "message": "Kibris"
    },
    "CZ": {
        "message": "Republik Czech"
    },
    "Changing country...": {
        "message": "Negara berubah ..."
    },
    "Check out Hola for $1!": {
        "message": "Semak Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Semak Hola untuk peranti mudah alih"
    },
    "Check your Internet connection": {
        "message": "Sila pastikan anda telah bersambung dengan Internet"
    },
    "Choose<br>Country": {
        "message": "Pilih <br> Negara"
    },
    "Configuring...": {
        "message": "Mengkonfigurasi ..."
    },
    "Connecting...": {
        "message": "Menyambung ..."
    },
    "Cool site!": {
        "message": "Tapak sejuk!"
    },
    "Creative licenses": {
        "message": "Lesen Creative"
    },
    "DD": {
        "message": "Jerman Timur"
    },
    "DE": {
        "message": "Jerman"
    },
    "DJ": {
        "message": "Jibouti"
    },
    "DO": {
        "message": "Republik Dominican"
    },
    "DZ": {
        "message": "Aljazair"
    },
    "Delete": {
        "message": "Padam"
    },
    "Deleted from my list": {
        "message": "Dipadam dari senarai saya"
    },
    "Did it work?": {
        "message": "Adakah ia berfungsi?"
    },
    "Did you experience any buffering?": {
        "message": "Adakah anda mengalami sebarang buffering?"
    },
    "Disliked it": {
        "message": "Tidak suka"
    },
    "Don't show again for $1 for one week": {
        "message": "Jangan tunjukkan lagi $1 untuk satu minggu"
    },
    "Don't show again for any site for one week": {
        "message": "Jangan tunjukkan lagi untuk mana-mana tapak untuk satu minggu"
    },
    "Downloading": {
        "message": "Memuat turun"
    },
    "EA": {
        "message": "Ceuta dan Melilla"
    },
    "EG": {
        "message": "Mesir"
    },
    "EH": {
        "message": "Sahara Barat"
    },
    "ES": {
        "message": "Sepanyol"
    },
    "EU": {
        "message": "Kesatuan Eropah"
    },
    "Enable": {
        "message": "Aktifkan"
    },
    "Enable Hola Accelerator": {
        "message": "Membolehkan Hola Pemecut"
    },
    "Enjoy!": {
        "message": "Nikmati!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Menikmati Hola untuk Chrome?"
    },
    "Enter site to access": {
        "message": "Masukkan laman web untuk akses"
    },
    "Enter your email": {
        "message": "Masukkan e-mel"
    },
    "FK": {
        "message": "Kepulauan Falkland"
    },
    "FO": {
        "message": "Kepulauan Faroe"
    },
    "FQ": {
        "message": "Perancis Selatan dan Antartika Wilayah"
    },
    "FR": {
        "message": "Perancis"
    },
    "FX": {
        "message": "Metropolitan Perancis"
    },
    "Finding new peers...": {
        "message": "Mencari rakan-rakan baru ..."
    },
    "Finding peers...": {
        "message": "Mencari rakan-rakan ..."
    },
    "Free": {
        "message": "Bebas"
    },
    "From": {
        "message": "Dari"
    },
    "Full list": {
        "message": "Senarai Penuh"
    },
    "GR": {
        "message": "Yunani"
    },
    "GS": {
        "message": "Georgia Selatan dan Kepulauan Sandwich Selatan"
    },
    "GW": {
        "message": "Guinea Bissau"
    },
    "Get 24/7 Unblocking": {
        "message": "Dapatkan nyahsekatan 24/7"
    },
    "Get Free Premium": {
        "message": "Dapatkan Premium Percuma"
    },
    "Get Hola Accelerator": {
        "message": "Dapatkan Hola Pemecut"
    },
    "Get Hola Player": {
        "message": "Dapatkan Hola pemain"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Dapatkan Hola Plus untuk servis tanpa gangguan dan bebas iklan."
    },
    "Get Hola Premium": {
        "message": "Dapatkan Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Dapatkan Hola untuk Android"
    },
    "Get Premium support": {
        "message": "Dapatkan sokongan Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Dapatkan nyahsekatan tanpa had"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Dapatkan akses ke laman web ditapis, cuba sekarang: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Dapatkan bantuan daripada jurutera melalui Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Dapatkan Pelayan-Pelayan Lebih Laju"
    },
    "Go": {
        "message": "Pergi"
    },
    "Go Hola Premium": {
        "message": "Dapatkan Premium"
    },
    "HK": {
        "message": "Hong Kong S.A.R., China"
    },
    "HM": {
        "message": "Pulau Heard dan Kepulauan McDonald"
    },
    "HU": {
        "message": "Hungari"
    },
    "Hate it": {
        "message": "Membencinya"
    },
    "Help": {
        "message": "Membantu"
    },
    "Hey,\n\nI'm using": {
        "message": "Hei,\n\nsaya menggunakan"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nsaya mula menggunakan $1 ($2). Ia membolehkan saya melayari internet dengan lebih cepat dan mengakses $3 di negara saya."
    },
    "Hola Accelerator": {
        "message": "Hola Pemecut"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola tidak boleh bekerja kerana lanjutan lain mengawal tetapan proksi anda."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola tidak dapat berfungsi dengan baik dalam mode Windows 8. Sila tukar kepada mode desktop. Klik <a>di sini</a> untuk arahan selanjutnya"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola tidak boleh didapati sekarang, tetapi kita bekerja di atasnya."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola dimatikan, klik untuk menghidupkan"
    },
    "Hola site list": {
        "message": "Senarai laman Unblocker"
    },
    "I can now access $1 from any country!": {
        "message": "Saya kini boleh mengakses $1 dari mana-mana negara!"
    },
    "I did not experience any buffering": {
        "message": "Saya tidak mengalami sebarang buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Saya hanya melayari laman yang ditapis menggunakan Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Saya menggunakan $1 untuk melihat $2 di negara saya, dan melayari lebih cepat!"
    },
    "IC": {
        "message": "Kepulauan Canary"
    },
    "IN": {
        "message": "Hindia"
    },
    "IO": {
        "message": "Bhutan"
    },
    "IT": {
        "message": "Itali"
    },
    "Improve translation": {
        "message": "Tambah baik terjemahan"
    },
    "Initializing...": {
        "message": "Sedang memulakan..."
    },
    "Install": {
        "message": "Pasang"
    },
    "Install Accelerator": {
        "message": "Pasang Pemecut"
    },
    "Install Free Hola Accelerator": {
        "message": "Pasang Percuma Hola Pemecut"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Pasang Hola Engine untuk terus menggunakan Hola secara percuma"
    },
    "Instantly watch any torrent Video": {
        "message": "Tonton mana-mana torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Menjemput rakan-rakan - Premium percuma."
    },
    "Invite friends. Get Premium.": {
        "message": "Jemput rakan-rakan. Dapatkan Premium."
    },
    "It was okay": {
        "message": "Ia adalah ok"
    },
    "JM": {
        "message": "Jamaika"
    },
    "JP": {
        "message": "Jepun"
    },
    "JT": {
        "message": "Pulau Johnston"
    },
    "KH": {
        "message": "Kemboja"
    },
    "KN": {
        "message": "Saint Kitts dan Nevis"
    },
    "KP": {
        "message": "Utara Korea"
    },
    "KR": {
        "message": "Selatan Korea"
    },
    "KY": {
        "message": "Kepulauan Cayman"
    },
    "LB": {
        "message": "Lubnan"
    },
    "LU": {
        "message": "Luksembourg"
    },
    "Language": {
        "message": "Bahasa"
    },
    "Library": {
        "message": "Perpustakaan"
    },
    "Like it": {
        "message": "Sukakannya"
    },
    "Loading": {
        "message": "Sedang memuat"
    },
    "Loading site...": {
        "message": "Sedang memuat"
    },
    "Log in": {
        "message": "Log masuk"
    },
    "Log out": {
        "message": "Log keluar"
    },
    "Love Hola?": {
        "message": "Cinta Hola?"
    },
    "Love it": {
        "message": "Suka"
    },
    "MA": {
        "message": "Maghribi"
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
    "MM": {
        "message": "Myanmar"
    },
    "MO": {
        "message": "Macao S.A.R., China"
    },
    "MP": {
        "message": "Kepulauan Mariana Utara"
    },
    "MV": {
        "message": "Maldiv"
    },
    "MX": {
        "message": "Meksiko"
    },
    "MZ": {
        "message": "Mozambik"
    },
    "Make your Internet better with $1": {
        "message": "Buat Internet anda dengan lebih baik dengan $1"
    },
    "Might not work on all sites": {
        "message": "Mungkin tidak berfungsi pada semua laman"
    },
    "Mode": {
        "message": "Mod"
    },
    "More countries": {
        "message": "Negara-negara lain"
    },
    "More sites...": {
        "message": "lanjut..."
    },
    "More...": {
        "message": "lanjut..."
    },
    "My Account": {
        "message": "Akaun Saya"
    },
    "My History": {
        "message": "Sejarah saya"
    },
    "My Settings": {
        "message": "Tetapan Saya"
    },
    "My favorites": {
        "message": "Kegemaran saya"
    },
    "NF": {
        "message": "Pulau Norfolk"
    },
    "NL": {
        "message": "Belanda"
    },
    "NQ": {
        "message": "Dronning Maud Tanah"
    },
    "NT": {
        "message": "Zon Neutral"
    },
    "Need Help?": {
        "message": "Perlu Bantuan?"
    },
    "Never ask me again": {
        "message": "Jangan sekali-kali tanya saya lagi"
    },
    "Never be a peer": {
        "message": "Jangan sekali-kali menjadi rakan sebaya"
    },
    "No": {
        "message": "Tiada"
    },
    "No idle peers found.": {
        "message": "Tiada rakan-rakan terbiar dijumpai."
    },
    "No recent videos found": {
        "message": "Tiada video baru-baru ini ditemui"
    },
    "No saved videos found": {
        "message": "Tiada video yang disimpan ditemui"
    },
    "No title": {
        "message": "Tiada tajuk"
    },
    "No videos found": {
        "message": "Tiada video dijumpai"
    },
    "No videos found on active page": {
        "message": "Tiada video dijumpai di halaman aktif"
    },
    "No, Thanks": {
        "message": "Tidak, Terima kasih sahaja"
    },
    "No, fix it": {
        "message": "Tidak, ia menetapkan"
    },
    "Not working?": {
        "message": "Tidak berfungsi?"
    },
    "Number of users that pressed not working": {
        "message": "Bilangan pengguna yang menekan tidak berfungsi"
    },
    "Number of users that use this option": {
        "message": "Bilangan pengguna yang menggunakan pilihan ini"
    },
    "Off": {
        "message": "Lepas"
    },
    "Oh, yes!": {
        "message": "Oh, ya!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox versi lama. Tekan <a>di sini</a> untuk menaiktaraf versi."
    },
    "On": {
        "message": "Atas"
    },
    "Open Media Player": {
        "message": "Buka Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Jenama Kami Baru Mplayer yang Akan Datang!"
    },
    "PC": {
        "message": "Wilayah Kepulauan Pasifik Amanah"
    },
    "PF": {
        "message": "Polynesia Perancis"
    },
    "PH": {
        "message": "Filipina"
    },
    "PM": {
        "message": "Saint Pierre dan Miquelon"
    },
    "PN": {
        "message": "Pitcairn"
    },
    "PS": {
        "message": "Palestinian Territory"
    },
    "PT": {
        "message": "Feringgi"
    },
    "PU": {
        "message": "US Pelbagai Kepulauan Pasifik"
    },
    "PZ": {
        "message": "Zon Terusan Panama"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Sila mematikan <a>sambungan lain</a> yang anda fikir mungkin mengawal tetapan proksi anda seperti iklan-blockers, perkhidmatan VPN lain, dan lain-lain"
    },
    "Please enter a valid email address.": {
        "message": "Sila masukkan alamat e-mel yang sah."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Sila masukkan alamat laman web, seperti facebook.com"
    },
    "Please help us get better": {
        "message": "Sila membantu kami menjadi lebih baik"
    },
    "Popular in $1": {
        "message": "Popular dalam $1"
    },
    "Popular in the world": {
        "message": "Popular di serata dunia"
    },
    "Popular sites": {
        "message": "Laman web popular"
    },
    "Premium": {
        "message": "Premi"
    },
    "RU": {
        "message": "Rusia"
    },
    "Rate us": {
        "message": "Menilai kami"
    },
    "Recent Videos": {
        "message": "Video Terkini"
    },
    "Reload": {
        "message": "Memuat semula"
    },
    "Reload Hola": {
        "message": "Muat semula Hola"
    },
    "Remember server": {
        "message": "Ingat server"
    },
    "Report a problem": {
        "message": "Laporkan masalah"
    },
    "Retry safe mode": {
        "message": "Cuba semula mod selamat"
    },
    "SA": {
        "message": "Arab Saudi"
    },
    "SB": {
        "message": "Kepulauan Solomon"
    },
    "SG": {
        "message": "Singapura"
    },
    "SJ": {
        "message": "Svalbard dan Jan Mayen"
    },
    "SL": {
        "message": "Siera Leon"
    },
    "SR": {
        "message": "Surinam"
    },
    "ST": {
        "message": "Sao Tome dan Principe"
    },
    "SU": {
        "message": "Kesatuan Republik Sosialis Soviet"
    },
    "Safe": {
        "message": "Selamat"
    },
    "Save": {
        "message": "Simpan"
    },
    "Saved Videos": {
        "message": "Disimpan Video"
    },
    "Saved for later": {
        "message": "Disimpan untuk masa lain"
    },
    "Search video title": {
        "message": "Tajuk video Carian"
    },
    "Select a Country": {
        "message": "Pilih Negara"
    },
    "Select site to unblock": {
        "message": "Pilih tapak untuk membuka sekatan"
    },
    "Server saved!": {
        "message": "Server diselamatkan!"
    },
    "Set safe mode for $1 $2": {
        "message": "Tetapkan mod selamat untuk $1 $2"
    },
    "Settings": {
        "message": "Tetapan"
    },
    "Share": {
        "message": "Kongsi"
    },
    "Share $1 on $2": {
        "message": "Kongsi $1 pada $2"
    },
    "Share $1 via $2": {
        "message": "Kongsi $1 melalui $2"
    },
    "Share with friends!": {
        "message": "Kongsi dengan kawan-kawan!"
    },
    "Sign up": {
        "message": "Daftar"
    },
    "Solve buffering": {
        "message": "Menyelesaikan buffering"
    },
    "Solve buffering problems with": {
        "message": "Menyelesaikan masalah buffering dengan"
    },
    "Solves it": {
        "message": "Menyelesaikan ia"
    },
    "Staff Picks": {
        "message": "Pilihan Staf"
    },
    "Start Hola": {
        "message": "mula"
    },
    "Starting...": {
        "message": "Sedang bermula..."
    },
    "Stop Hola": {
        "message": "Hentikan Hola"
    },
    "Stopping peer routing...": {
        "message": "Menghentikan rakan sebaya routing ..."
    },
    "Stream Instantly": {
        "message": "Aliran serta merta"
    },
    "Submit": {
        "message": "Hantar"
    },
    "Support Hola": {
        "message": "Sokong Hola"
    },
    "TC": {
        "message": "Kepulauan Turks dan Caicos"
    },
    "TD": {
        "message": "Cad"
    },
    "TF": {
        "message": "French Southern Territory"
    },
    "TG": {
        "message": "Untuk pergi"
    },
    "TJ": {
        "message": "Tadjikistan"
    },
    "TR": {
        "message": "Turki"
    },
    "TT": {
        "message": "Trinidad dan Tobago"
    },
    "Talk to us on $1": {
        "message": "Bercakap dengan kami pada $1"
    },
    "Tell friends about $1": {
        "message": "Beritahu rakan-rakan tentang $1"
    },
    "Testing connection...": {
        "message": "Sambungan ujian ..."
    },
    "Thank you!": {
        "message": "Terima kasih!"
    },
    "There seems to be an error": {
        "message": "Terdapat ralat"
    },
    "Top popular sites": {
        "message": "Laman popular Top"
    },
    "Translate to your language": {
        "message": "Terjemah kepada bahasa anda"
    },
    "Try again": {
        "message": "Cuba lagi"
    },
    "Try another server": {
        "message": "Cuba pelayan lain"
    },
    "Try it": {
        "message": "Cubalah"
    },
    "Try safe mode": {
        "message": "Cuba mod selamat"
    },
    "Try to <span>reload</span>": {
        "message": "Cuba untuk <span>muat semula</span>"
    },
    "Trying another peer...": {
        "message": "Cuba rakan sebaya lain ..."
    },
    "Turn off Accelerator": {
        "message": "Matikan Accelerator"
    },
    "Turn off Hola": {
        "message": "Matikan Hola"
    },
    "Turn on Accelerator": {
        "message": "Hidupkan Accelerator"
    },
    "Turn on Hola": {
        "message": "Hidupkan Hola"
    },
    "Turn on to get started": {
        "message": "Aktifkan untuk memulakan Hola"
    },
    "UM": {
        "message": "United States Minor Outlying Islands"
    },
    "US": {
        "message": "Amerika Syarikat"
    },
    "Unblocker is disabled": {
        "message": "Unblocker telah dinyahaktif"
    },
    "Update": {
        "message": "Kemaskini"
    },
    "Upgrade": {
        "message": "Naik taraf"
    },
    "Using": {
        "message": "Menggunakan"
    },
    "Using Hola": {
        "message": "Menggunakan Hola"
    },
    "VA": {
        "message": "Vatican"
    },
    "VC": {
        "message": "Saint Vincent dan Grenadines"
    },
    "VD": {
        "message": "Vietnam Utara"
    },
    "VG": {
        "message": "Kepulauan Virgin British"
    },
    "VI": {
        "message": "Kepulauan Virgin Amerika Syarikat"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Anda sedang menggunakan versi chrome yang lama, <a>sila kemaskini</a> Chrome untuk menggunakan Hola"
    },
    "Video stuck?": {
        "message": "Video terperangkap?"
    },
    "Videos available for instant streaming": {
        "message": "Video boleh didapati untuk penstriman segera"
    },
    "WF": {
        "message": "Kepulauan Wallis dan Futuna"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Mahu Hola pada peranti yang lain? (Xbox, PS, Apple TV, iPhone...). Klik di sini"
    },
    "Want to know more?": {
        "message": "Ingin tahu lebih lanjut?"
    },
    "Watch Now": {
        "message": "Menonton Sekarang"
    },
    "We found $1 videos": {
        "message": "Kami mendapati $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Kami akan berhubung dengan anda tidak lama lagi"
    },
    "Working!": {
        "message": "Bekerja!"
    },
    "Working?": {
        "message": "Bekerja?"
    },
    "Works on all sites but slower": {
        "message": "Kerja-kerja semua laman web yang tetapi lebih perlahan"
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
        "message": "Anda perlu menaik taraf kepada versi terbaru Opera untuk menggunakan Hola. Tekan <a>sini</a> untuk menaik taraf."
    },
    "ZA": {
        "message": "Afrika Selatan"
    },
    "ZZ": {
        "message": "Tidak diketahui atau Rantau sah"
    },
    "app_desc": {
        "message": "Laman web akses disekat di negara anda, syarikat atau sekolah dengan Hola! Hola adalah percuma dan mudah untuk digunakan!"
    },
    "app_name": {
        "message": "Hola - Internet Yang Lebih Baik"
    },
    "back to": {
        "message": "kembali kepada"
    },
    "changing...": {
        "message": "sedang menukar..."
    },
    "cool sites": {
        "message": "laman sejuk"
    },
    "current site": {
        "message": "tapak semasa"
    },
    "day": {
        "message": "hari"
    },
    "days": {
        "message": "hari"
    },
    "even more...": {
        "message": "dan lebih pilihan lagi..."
    },
    "mode": {
        "message": "mod"
    },
    "more options...": {
        "message": "pilihan-pilihan lain..."
    },
    "not working?": {
        "message": "tidak berfungsi?"
    },
    "not working? try another server": {
        "message": "tidak berfungsi? cuba server lain"
    },
    "on this page": {
        "message": "pada halaman ini"
    },
    "sites that are censored": {
        "message": "laman web yang ditapis"
    },
    "start": {
        "message": "mula"
    },
    "working? remember": {
        "message": "bekerja? ingat"
    }
};
return E; });