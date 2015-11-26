'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " thông qua "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola để truy cập $2\n\nBấm vào đây để làm như vậy: $3\n\nNó cài đặt Hola, cho phép tôi lướt web nhanh hơn và truy cập $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN cao cấp"
    },
    "$1 from $2": {
        "message": "$1 từ $2"
    },
    "$1 not found": {
        "message": "$1 không tìm thấy"
    },
    "$1 via Hola": {
        "message": "$1 qua Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Một số tính năng Hola không có sẵn trên phiên bản của bạn)"
    },
    "AC": {
        "message": "Đảo Ascension"
    },
    "AE": {
        "message": "Các Tiểu Vương quốc A-rập Thống nhất"
    },
    "AF": {
        "message": "Áp-ga-ni-xtan"
    },
    "AG": {
        "message": "An-ti-gu-a và Ba-bu-đa"
    },
    "AL": {
        "message": "An-ba-ni"
    },
    "AM": {
        "message": "Ác-mê-ni-a"
    },
    "AN": {
        "message": "Tây Ấn Hà Lan"
    },
    "AO": {
        "message": "Ăng-gô-la"
    },
    "AQ": {
        "message": "Nam Cực"
    },
    "AR": {
        "message": "Ác-hen-ti-na"
    },
    "AS": {
        "message": "Đảo Somoa thuộc Mỹ"
    },
    "AT": {
        "message": "Áo"
    },
    "AU": {
        "message": "Úc"
    },
    "AX": {
        "message": "Quần đảo Aland"
    },
    "AZ": {
        "message": "Ai-déc-bai-gian"
    },
    "About": {
        "message": "Về"
    },
    "About Hola": {
        "message": "Về Hola"
    },
    "Accelerator": {
        "message": "Gia tốc"
    },
    "Accelerator is": {
        "message": "Accelerator là"
    },
    "Access $1 - cool site!": {
        "message": "Truy cập $1 - trang web mát mẻ!"
    },
    "Access $1?": {
        "message": "Truy cập $1?"
    },
    "Access any site from any country, free": {
        "message": "Truy cập các trang web từ bất kỳ nước nào, miễn phí"
    },
    "Access cool sites": {
        "message": "Truy cập trang web mát mẻ"
    },
    "Access more sites": {
        "message": "Truy cập nhiều trang web"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Các trang web truy cập bị kiểm duyệt ở nước bạn và tăng tốc độ Internet của bạn với Hola - Miễn phí!"
    },
    "Accessing $1 with Hola": {
        "message": "Truy cập $1 với Hola"
    },
    "Account": {
        "message": "Tài khoản"
    },
    "Account type": {
        "message": "Loại tài khoản"
    },
    "Activating...": {
        "message": "Kích hoạt..."
    },
    "All ($1)": {
        "message": "Tất cả ($1)"
    },
    "Apply settings...": {
        "message": "Áp dụng cài đặt ..."
    },
    "Author site:": {
        "message": "Tác giả trang web:"
    },
    "Author:": {
        "message": "Tác giả:"
    },
    "BA": {
        "message": "Bô-xni-a Héc-xê-gô-vi-na"
    },
    "BB": {
        "message": "Bác-ba-đốt"
    },
    "BD": {
        "message": "Băng-la-đét"
    },
    "BE": {
        "message": "Bỉ"
    },
    "BF": {
        "message": "Buốc-ki-na Pha-xô"
    },
    "BG": {
        "message": "Bun-ga-ri"
    },
    "BH": {
        "message": "Ba-ren"
    },
    "BI": {
        "message": "Bu-run-đi"
    },
    "BJ": {
        "message": "Bê-nanh"
    },
    "BN": {
        "message": "Bru-nây"
    },
    "BO": {
        "message": "Bô-li-vi-a"
    },
    "BQ": {
        "message": "Lãnh thổ Nam Cực Anh"
    },
    "BR": {
        "message": "Bra-xin"
    },
    "BS": {
        "message": "Ba-ha-ma"
    },
    "BT": {
        "message": "Bu-tan (Bhutan)"
    },
    "BV": {
        "message": "Đảo Bouvet (Na Uy)"
    },
    "BW": {
        "message": "Bốt-xoa-na"
    },
    "BY": {
        "message": "Bê-la-rút"
    },
    "BZ": {
        "message": "Bê-li-xê"
    },
    "Back to $1": {
        "message": "Lại đến $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Hãy là người đầu tiên để có được Hola cho iPhone / iPad - Đăng ký tại:"
    },
    "Browsing": {
        "message": "Duyệt"
    },
    "Buffering problems?": {
        "message": "Vấn đề đệm?"
    },
    "Buffering?": {
        "message": "Đệm?"
    },
    "CA": {
        "message": "Ca-na-đa"
    },
    "CC": {
        "message": "Quần đảo Cocos"
    },
    "CD": {
        "message": "Cộng hoà dân chủ Côngô"
    },
    "CF": {
        "message": "Cộng hòa Trung Phi"
    },
    "CG": {
        "message": "Công-gô"
    },
    "CH": {
        "message": "Thụy Sĩ"
    },
    "CI": {
        "message": "Bờ Biển Ngà"
    },
    "CK": {
        "message": "Quần Đảo Cook"
    },
    "CL": {
        "message": "Chi-lê"
    },
    "CM": {
        "message": "Ca-mơ-run"
    },
    "CN": {
        "message": "Trung Quốc"
    },
    "CO": {
        "message": "Cô-lôm-bi-a"
    },
    "CP": {
        "message": "Đảo Clipperton"
    },
    "CR": {
        "message": "Cốt-xta Ri-ca"
    },
    "CS": {
        "message": "Séc-bia"
    },
    "CT": {
        "message": "Canton và đảo Enderbury"
    },
    "CU": {
        "message": "Cu Ba"
    },
    "CV": {
        "message": "Cáp-ve"
    },
    "CX": {
        "message": "Đảo Giáng Sinh"
    },
    "CY": {
        "message": "Síp"
    },
    "CZ": {
        "message": "Cộng hòa Séc"
    },
    "Changing country...": {
        "message": "Thay đổi đất nước ..."
    },
    "Check out Hola for $1!": {
        "message": "Kiểm tra Hola cho $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Kiểm tra Hola cho thiết bị di động"
    },
    "Check your Internet connection": {
        "message": "Xác minh bạn có Internet"
    },
    "Choose<br>Country": {
        "message": "Chọn <br> Nước"
    },
    "Configuring...": {
        "message": "Cấu hình..."
    },
    "Connecting...": {
        "message": "Kết nối..."
    },
    "Cool site!": {
        "message": "Cool!"
    },
    "Creative licenses": {
        "message": "Giấy phép Creative"
    },
    "DD": {
        "message": "Đông Đức"
    },
    "DE": {
        "message": "Đức"
    },
    "DJ": {
        "message": "Gi-bu-ti"
    },
    "DK": {
        "message": "Đan Mạch"
    },
    "DO": {
        "message": "Cộng hoà Đô-mi-ni-ca"
    },
    "DZ": {
        "message": "An-giê-ri"
    },
    "Delete": {
        "message": "Xóa bỏ"
    },
    "Deleted from my list": {
        "message": "Xóa khỏi danh sách của tôi"
    },
    "Did it work?": {
        "message": "Nó đã làm việc?"
    },
    "Did you experience any buffering?": {
        "message": "Bạn có gặp bất kỳ đệm?"
    },
    "Disliked it": {
        "message": "Không thích nó"
    },
    "Don't show again for $1 for one week": {
        "message": "Không hiển thị một lần nữa cho $1 cho một tuần"
    },
    "Don't show again for any site for one week": {
        "message": "Không hiển thị một lần nữa cho bất kỳ trang web trong một tuần"
    },
    "Downloading": {
        "message": "Tải về"
    },
    "EA": {
        "message": "Ceuta và Melilla"
    },
    "EC": {
        "message": "Ê-cu-a-đo"
    },
    "EE": {
        "message": "E-xtô-ni-a"
    },
    "EG": {
        "message": "Ai Cập"
    },
    "EH": {
        "message": "Tây Sahara"
    },
    "ER": {
        "message": "Ê-ri-tơ-rê-a"
    },
    "ES": {
        "message": "Tây Ban Nha"
    },
    "ET": {
        "message": "Ê-ti-ô-pi-a"
    },
    "EU": {
        "message": "công đoàn châu Âu"
    },
    "Enable": {
        "message": "Cho phép"
    },
    "Enable Hola Accelerator": {
        "message": "Cho phép Hola họa"
    },
    "Enjoy!": {
        "message": "Thưởng thức!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Thưởng thức Hola cho Chrome?"
    },
    "Enter site to access": {
        "message": "Nhập trang web để truy cập"
    },
    "Enter your email": {
        "message": "Nhập email của bạn"
    },
    "FI": {
        "message": "Phần Lan"
    },
    "FJ": {
        "message": "Phi-gi"
    },
    "FK": {
        "message": "Quần Đảo Falkland"
    },
    "FM": {
        "message": "Mi-crô-nê-xi-a"
    },
    "FO": {
        "message": "Quần Đảo Faroe"
    },
    "FQ": {
        "message": "Pháp phía Nam và Nam Cực lãnh thổ"
    },
    "FR": {
        "message": "Pháp"
    },
    "FX": {
        "message": "Metropolitan Pháp"
    },
    "Fast": {
        "message": "Nhanh"
    },
    "Finding new peers...": {
        "message": "Việc tìm kiếm các đồng nghiệp mới..."
    },
    "Finding peers...": {
        "message": "Việc tìm kiếm các đồng nghiệp..."
    },
    "Free": {
        "message": "Tự do"
    },
    "From": {
        "message": "Từ"
    },
    "Full list": {
        "message": "Danh mục đầy đủ"
    },
    "GA": {
        "message": "Ga-bông"
    },
    "GB": {
        "message": "Vương quốc Anh"
    },
    "GD": {
        "message": "Grê-na-đa"
    },
    "GE": {
        "message": "Gru-di-a"
    },
    "GF": {
        "message": "Quiana thuộc Pháp"
    },
    "GH": {
        "message": "Gha-na"
    },
    "GL": {
        "message": "Băng Đảo"
    },
    "GM": {
        "message": "Găm-bi-a"
    },
    "GN": {
        "message": "Ghi-nê"
    },
    "GQ": {
        "message": "Ghi-nê Xích-đạo"
    },
    "GR": {
        "message": "Hy Lạp"
    },
    "GS": {
        "message": "Quần đảo Nam Georgia và Nam Sandwich"
    },
    "GT": {
        "message": "Goa-tê-ma-la"
    },
    "GU": {
        "message": "Đảo Gu-am"
    },
    "GW": {
        "message": "Ghi-nê Bít-xao"
    },
    "GY": {
        "message": "Guy-a-na"
    },
    "Get 24/7 Unblocking": {
        "message": "Có 24/7 Unblocking"
    },
    "Get Free Premium": {
        "message": "Nhận miễn phí cao cấp"
    },
    "Get Hola Accelerator": {
        "message": "Nhận Hola họa"
    },
    "Get Hola Player": {
        "message": "Nhận Hola Chơi"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Nhận Hola Plus chưa bị gián đoạn, dịch vụ quảng cáo miễn phí."
    },
    "Get Hola Premium": {
        "message": "Nhận Hola cao cấp"
    },
    "Get Hola for Android": {
        "message": "Nhận Hola cho Android"
    },
    "Get Premium support": {
        "message": "Hỗ trợ phí bảo hiểm"
    },
    "Get Unlimited Unblocking": {
        "message": "Được giới hạn Unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Hãy truy cập vào các trang web bị kiểm duyệt, hãy thử nó ngay bây giờ: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Được sự giúp đỡ từ kỹ sư qua skype:"
    },
    "Get the Fastest Servers": {
        "message": "Được các máy chủ nhanh nhất"
    },
    "Go": {
        "message": "Tới"
    },
    "Go Hola Premium": {
        "message": "Go Hola cao cấp"
    },
    "HK": {
        "message": "Đặc khu hành chính Hồng Kông thuộc CHND Trung Hoa"
    },
    "HM": {
        "message": "Đảo Heard và Quần đảo McDonald"
    },
    "HN": {
        "message": "Hôn-đu-rát"
    },
    "HR": {
        "message": "Crô-a-ti-a"
    },
    "HT": {
        "message": "Ha-i-ti"
    },
    "HU": {
        "message": "Hung-ga-ri"
    },
    "Hate it": {
        "message": "Ghét nó"
    },
    "Help": {
        "message": "Giúp"
    },
    "Hey,\n\nI'm using": {
        "message": "Này,\n\ntôi đang sử dụng"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Xin chào,\n\ntôi bắt đầu sử dụng $1 ($2). Nó cho tôi lướt web nhanh hơn và truy cập $3 ở nước tôi."
    },
    "Hola Accelerator": {
        "message": "Hola họa"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola không thể làm việc vì phần mở rộng khác là kiểm soát các thiết lập proxy của bạn."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola không làm việc tốt trong chế độ Windows 8. Xin vui lòng chuyển sang chế độ máy tính để bàn. Nhấp <a> đây </a> để được hướng dẫn"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola không có sẵn ngay bây giờ, nhưng chúng tôi đang làm việc trên nó."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola tắt, bấm vào để bật"
    },
    "Hola site list": {
        "message": "Danh sách trang web unblocker"
    },
    "I can now access $1 from any country!": {
        "message": "Bây giờ tôi có thể truy cập $1 từ bất kỳ nước nào!"
    },
    "I did not experience any buffering": {
        "message": "Tôi đã không gặp bất kỳ đệm"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Tôi chỉ truy cập một trang web bị kiểm duyệt bằng cách sử dụng Hola cho $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Tôi đang sử dụng $1 để xem $2 ở đất nước tôi, và lướt web nhanh hơn!"
    },
    "IC": {
        "message": "đảo Canary"
    },
    "ID": {
        "message": "Nam Dương"
    },
    "IE": {
        "message": "Ai-len"
    },
    "IL": {
        "message": "I-xra-en"
    },
    "IM": {
        "message": "Đảo Man"
    },
    "IN": {
        "message": "Ấn Độ"
    },
    "IO": {
        "message": "Thuộc địa Anh tại Ấn Độ Dương"
    },
    "IQ": {
        "message": "I-rắc"
    },
    "IR": {
        "message": "I-ran"
    },
    "IS": {
        "message": "Ai-xơ-len"
    },
    "IT": {
        "message": "Ý"
    },
    "Improve translation": {
        "message": "Cải thiện dịch"
    },
    "Initializing...": {
        "message": "Bắt đầu ..."
    },
    "Install": {
        "message": "Cài đặt"
    },
    "Install Accelerator": {
        "message": "Cài đặt Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Cài đặt miễn phí Hola họa"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Cài đặt Hola Engine để tiếp tục sử dụng Hola miễn phí"
    },
    "Instantly watch any torrent Video": {
        "message": "Ngay lập tức xem bất kỳ video torrent"
    },
    "Invite friends - free Premium.": {
        "message": "Mời bạn bè - Premium miễn phí."
    },
    "Invite friends. Get Premium.": {
        "message": "Mời bạn bè. Nhận Premium."
    },
    "It was okay": {
        "message": "Nó là okay"
    },
    "JE": {
        "message": "Áo nịt len"
    },
    "JM": {
        "message": "Ha-mai-ca"
    },
    "JO": {
        "message": "Gióc-đa-ni"
    },
    "JP": {
        "message": "Nhật Bản"
    },
    "JT": {
        "message": "Đảo Johnston"
    },
    "KE": {
        "message": "Kê-ni-a"
    },
    "KG": {
        "message": "Cư-rơ-gư-xtan"
    },
    "KH": {
        "message": "Campuchia"
    },
    "KI": {
        "message": "Ki-ri-ba-ti"
    },
    "KM": {
        "message": "Cô-mô"
    },
    "KN": {
        "message": "Xan-kít và Nê-vi"
    },
    "KP": {
        "message": "Bắc Triều Tiên"
    },
    "KR": {
        "message": "Hàn Quốc"
    },
    "KW": {
        "message": "Cô-oét"
    },
    "KY": {
        "message": "Quần Đảo Cayman"
    },
    "KZ": {
        "message": "Ka-dắc-xtan"
    },
    "LA": {
        "message": "Lào"
    },
    "LB": {
        "message": "Li-băng"
    },
    "LC": {
        "message": "Xan Lu-xi"
    },
    "LI": {
        "message": "Lich-ten-xtên"
    },
    "LK": {
        "message": "Xri Lan-ca"
    },
    "LR": {
        "message": "Li-bê-ri-a"
    },
    "LS": {
        "message": "Lê-xô-thô"
    },
    "LT": {
        "message": "Li-tu-a-ni-a"
    },
    "LU": {
        "message": "Lúc-xăm-bua"
    },
    "LV": {
        "message": "Lát-vi-a"
    },
    "LY": {
        "message": "Li-bi"
    },
    "Language": {
        "message": "Ngôn ngữ"
    },
    "Library": {
        "message": "Thư viện"
    },
    "Like it": {
        "message": "Thích nó"
    },
    "Loading": {
        "message": "Tải"
    },
    "Loading site...": {
        "message": "Tải"
    },
    "Log in": {
        "message": "Đăng nhập"
    },
    "Log out": {
        "message": "Đăng xuất"
    },
    "Love Hola?": {
        "message": "Yêu Hola?"
    },
    "Love it": {
        "message": "Tình yêu nó"
    },
    "MA": {
        "message": "Ma-rốc"
    },
    "MC": {
        "message": "Mô-na-cô"
    },
    "MD": {
        "message": "Môn-đô-va"
    },
    "MG": {
        "message": "Ma-đa-gát-xca"
    },
    "MH": {
        "message": "Quần đảo Mác-san"
    },
    "MI": {
        "message": "Quần đảo Midway"
    },
    "MK": {
        "message": "Ma-xê-đô-ni-a"
    },
    "ML": {
        "message": "Ma-li"
    },
    "MM": {
        "message": "Mi-an-ma"
    },
    "MN": {
        "message": "Mông Cổ"
    },
    "MO": {
        "message": "Đặc khu hành chính Macao thuộc CHND Trung Hoa"
    },
    "MP": {
        "message": "Quần Đảo Bắc Mariana"
    },
    "MR": {
        "message": "Mô-ri-ta-ni"
    },
    "MT": {
        "message": "Man-ta"
    },
    "MU": {
        "message": "Mô-ri-xơ"
    },
    "MV": {
        "message": "Man-đi-vơ"
    },
    "MW": {
        "message": "Ma-la-uy"
    },
    "MX": {
        "message": "Mê-hi-cô"
    },
    "MY": {
        "message": "Ma-lay-xi-a"
    },
    "MZ": {
        "message": "Mô-dăm-bích"
    },
    "Make your Internet better with $1": {
        "message": "Làm cho Internet của bạn tốt hơn với $1"
    },
    "Menu": {
        "message": "Đơn"
    },
    "Might not work on all sites": {
        "message": "Có thể không làm việc trên tất cả các trang web"
    },
    "Mode": {
        "message": "Chế độ"
    },
    "More countries": {
        "message": "Nhiều quốc gia"
    },
    "More sites...": {
        "message": "hơn..."
    },
    "More...": {
        "message": "hơn..."
    },
    "My Account": {
        "message": "Tài khoản của tôi"
    },
    "My History": {
        "message": "Lịch sử của tôi"
    },
    "My Settings": {
        "message": "Thiết lập của tôi"
    },
    "My favorites": {
        "message": "Yêu thích của tôi"
    },
    "NA": {
        "message": "Nam-mi-bi-a"
    },
    "NE": {
        "message": "Ni-giê"
    },
    "NF": {
        "message": "Đảo Norfolk"
    },
    "NG": {
        "message": "Ni-giê-ri-a"
    },
    "NI": {
        "message": "Ni-ca-ra-goa"
    },
    "NL": {
        "message": "Hà Lan"
    },
    "NO": {
        "message": "Na Uy"
    },
    "NP": {
        "message": "Nê-pan"
    },
    "NZ": {
        "message": "Niu Di-lân"
    },
    "Need Help?": {
        "message": "Cần Trợ giúp?"
    },
    "Never ask me again": {
        "message": "Không bao giờ hỏi tôi một lần nữa"
    },
    "Never be a peer": {
        "message": "Không bao giờ là một peer"
    },
    "No": {
        "message": "Không"
    },
    "No idle peers found.": {
        "message": "Không có đồng nghiệp nhàn rỗi được tìm thấy."
    },
    "No recent videos found": {
        "message": "Không tìm thấy video mới"
    },
    "No saved videos found": {
        "message": "Không tìm thấy video được lưu"
    },
    "No title": {
        "message": "Không có tiêu đề"
    },
    "No videos found": {
        "message": "Không tìm thấy video"
    },
    "No videos found on active page": {
        "message": "Không tìm thấy video trên trang hoạt động"
    },
    "No, Thanks": {
        "message": "Không, Cảm ơn"
    },
    "No, fix it": {
        "message": "Không, sửa chữa nó"
    },
    "Not working?": {
        "message": "Không làm việc?"
    },
    "Number of users that pressed not working": {
        "message": "Số lượng người dùng ép không làm việc"
    },
    "Number of users that use this option": {
        "message": "Số lượng người dùng sử dụng tùy chọn này"
    },
    "OM": {
        "message": "Ô-man"
    },
    "Off": {
        "message": "Tắt"
    },
    "Oh, yes!": {
        "message": "Ồ, có chứ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Phiên bản cũ của Firefox. Báo chí <a> đây </a> để nâng cấp."
    },
    "On": {
        "message": "Mở"
    },
    "Open Media Player": {
        "message": "Mở Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Brand New Mplayer của chúng tôi là Coming Soon!"
    },
    "PA": {
        "message": "Pa-na-ma"
    },
    "PC": {
        "message": "Pacific Islands Lãnh thổ ủy thác"
    },
    "PE": {
        "message": "Pê-ru"
    },
    "PF": {
        "message": "Polynesia thuộc Pháp"
    },
    "PG": {
        "message": "Pa-pu-a Niu Ghi-nê"
    },
    "PH": {
        "message": "Phi-lip-pin"
    },
    "PK": {
        "message": "Pa-ki-xtan"
    },
    "PL": {
        "message": "Ba Lan"
    },
    "PM": {
        "message": "Saint Pierre và Miquelon"
    },
    "PN": {
        "message": "Quần đảo Pitcairn"
    },
    "PS": {
        "message": "Lãnh thổ Palestine"
    },
    "PT": {
        "message": "Bồ Đào Nha"
    },
    "PU": {
        "message": "Mỹ Miscellaneous đảo Thái Bình Dương"
    },
    "PY": {
        "message": "Pa-ra-goay"
    },
    "PZ": {
        "message": "Vùng Kênh đào Panama"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Hãy vô hiệu hóa phần <a>mở rộng</a> khác mà bạn nghĩ rằng có thể kiểm soát các thiết lập proxy của bạn chẳng hạn như quảng cáo-blockers, dịch vụ VPN khác, vv"
    },
    "Please enter a valid email address.": {
        "message": "Vui lòng nhập một địa chỉ email hợp lệ."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Vui lòng nhập một địa chỉ trang web, như facebook.com"
    },
    "Please help us get better": {
        "message": "Xin vui lòng giúp chúng tôi có được tốt hơn"
    },
    "Popular in $1": {
        "message": "Phổ biến trong $1"
    },
    "Popular in the world": {
        "message": "Phổ biến trên thế giới"
    },
    "Popular sites": {
        "message": "Các trang web phổ biến"
    },
    "Premium": {
        "message": "Cao cấp"
    },
    "QA": {
        "message": "Ca-ta"
    },
    "QO": {
        "message": "Châu Đại Dương xa xôi hẻo lánh"
    },
    "RO": {
        "message": "Ru-ma-ni"
    },
    "RS": {
        "message": "Xéc-bi"
    },
    "RU": {
        "message": "Nga"
    },
    "RW": {
        "message": "Ru-an-đa"
    },
    "Rate us": {
        "message": "Đánh giá chúng tôi"
    },
    "Recent Videos": {
        "message": "Video gần đây"
    },
    "Reload": {
        "message": "Tải lại"
    },
    "Reload Hola": {
        "message": "Nạp lại Hola"
    },
    "Remember server": {
        "message": "Nhớ máy chủ"
    },
    "Report a problem": {
        "message": "Báo cáo một vấn đề"
    },
    "Retry safe mode": {
        "message": "Thử lại chế độ an toàn"
    },
    "SA": {
        "message": "A-rập Xê-út"
    },
    "SB": {
        "message": "Quần đảo Xô-lô-mông"
    },
    "SC": {
        "message": "Xây-sen"
    },
    "SD": {
        "message": "Xu-đăng"
    },
    "SE": {
        "message": "Thụy Điển"
    },
    "SG": {
        "message": "Xin-ga-po"
    },
    "SI": {
        "message": "Xlô-ven-ni-a"
    },
    "SJ": {
        "message": "Svalbard và Jan Mayen"
    },
    "SK": {
        "message": "Xlô-va-ki-a"
    },
    "SL": {
        "message": "Xi-ê-ra Lê-ôn"
    },
    "SM": {
        "message": "Xan Ma-ri-nô"
    },
    "SN": {
        "message": "Xê-nê-gan"
    },
    "SO": {
        "message": "Xô-ma-li"
    },
    "SR": {
        "message": "Xu-ri-nam"
    },
    "ST": {
        "message": "Xao Tô-mê và Prin-xi-pê"
    },
    "SU": {
        "message": "Liên hiệp các bang Xô-viết"
    },
    "SV": {
        "message": "En-san-va-đo"
    },
    "SY": {
        "message": "Xi-ri"
    },
    "SZ": {
        "message": "Xoa-di-len"
    },
    "Safe": {
        "message": "An toàn"
    },
    "Safe mode": {
        "message": "Chế độ an toàn"
    },
    "Save": {
        "message": "Lưu"
    },
    "Saved Videos": {
        "message": "Video lưu"
    },
    "Saved for later": {
        "message": "Lưu lại để sau này"
    },
    "Search video title": {
        "message": "Tìm kiếm tiêu đề video"
    },
    "Select a Country": {
        "message": "Chọn quốc gia"
    },
    "Select site to unblock": {
        "message": "Chọn các trang web để mở khóa"
    },
    "Server saved!": {
        "message": "Máy chủ lưu!"
    },
    "Set safe mode for $1 $2": {
        "message": "Thiết lập chế độ an toàn cho $1 $2"
    },
    "Settings": {
        "message": "Cài đặt"
    },
    "Share": {
        "message": "Phần"
    },
    "Share $1 on $2": {
        "message": "Chia sẻ $1 trên $2"
    },
    "Share $1 via $2": {
        "message": "Chia sẻ $1 qua $2"
    },
    "Share with friends!": {
        "message": "Chia sẻ với bạn bè!"
    },
    "Sign up": {
        "message": "Ghi tên"
    },
    "Solve buffering": {
        "message": "Giải quyết đệm"
    },
    "Solve buffering problems with": {
        "message": "Giải quyết vấn đề với đệm"
    },
    "Solves it": {
        "message": "Giải quyết nó"
    },
    "Staff Picks": {
        "message": "Chọn lựa tiêu nhân viên"
    },
    "Start Hola": {
        "message": "bắt đầu"
    },
    "Starting...": {
        "message": "Bắt đầu..."
    },
    "Stop Hola": {
        "message": "Dừng Hola"
    },
    "Stopping peer routing...": {
        "message": "Dừng ngang tuyến..."
    },
    "Stream": {
        "message": "Suối"
    },
    "Stream Instantly": {
        "message": "Dòng Ngay lập tức"
    },
    "Submit": {
        "message": "Gửi"
    },
    "Support Hola": {
        "message": "Hỗ trợ Hola"
    },
    "TC": {
        "message": "Quần Đảo Turk và Caicos"
    },
    "TD": {
        "message": "Sát"
    },
    "TF": {
        "message": "Thuộc Địa Nam của Pháp"
    },
    "TG": {
        "message": "Tô-gô"
    },
    "TH": {
        "message": "Thái Lan"
    },
    "TJ": {
        "message": "Tát-gi-ki-xtan"
    },
    "TL": {
        "message": "Đông Ti-mo"
    },
    "TM": {
        "message": "Tuốc-mê-ni-xtan"
    },
    "TN": {
        "message": "Tuy-ni-di"
    },
    "TO": {
        "message": "Tông-ga"
    },
    "TR": {
        "message": "Thổ Nhĩ Kỳ"
    },
    "TT": {
        "message": "Tri-ni-đát và Tô-ba-gô"
    },
    "TV": {
        "message": "Tu-va-lu"
    },
    "TW": {
        "message": "Đài Loan"
    },
    "TZ": {
        "message": "Tan-da-ni-a"
    },
    "Talk to us on $1": {
        "message": "Nói chuyện với chúng tôi trên $1"
    },
    "Tell friends about $1": {
        "message": "Kể cho bạn bè khoảng $1"
    },
    "Testing connection...": {
        "message": "Kết nối thử nghiệm ..."
    },
    "Thank you!": {
        "message": "Cảm ơn bạn!"
    },
    "There seems to be an error": {
        "message": "Có vẻ là một lỗi"
    },
    "Top popular sites": {
        "message": "Các trang web phổ biến hàng đầu"
    },
    "Translate to your language": {
        "message": "Dịch ngôn ngữ của bạn"
    },
    "Try again": {
        "message": "Thử lại"
    },
    "Try another server": {
        "message": "Thử máy chủ khác"
    },
    "Try it": {
        "message": "Thử"
    },
    "Try safe mode": {
        "message": "Hãy thử chế độ an toàn"
    },
    "Try to <span>reload</span>": {
        "message": "Cố gắng <span> tải lại </span>"
    },
    "Trying another peer...": {
        "message": "Cố gắng ngang hàng khác..."
    },
    "Turn off Accelerator": {
        "message": "Tắt Accelerator"
    },
    "Turn off Hola": {
        "message": "Tắt Hola"
    },
    "Turn on Accelerator": {
        "message": "Bật Accelerator"
    },
    "Turn on Hola": {
        "message": "Bật Hola"
    },
    "Turn on to get started": {
        "message": "Bật để bắt đầu"
    },
    "UA": {
        "message": "U-crai-na"
    },
    "UG": {
        "message": "U-gan-đa"
    },
    "UM": {
        "message": "Các đảo nhỏ xa trung tâm thuộc Mỹ"
    },
    "US": {
        "message": "Hoa Kỳ"
    },
    "UY": {
        "message": "U-ru-goay"
    },
    "UZ": {
        "message": "U-dơ-bê-ki-xtan"
    },
    "Unblocker is disabled": {
        "message": "Unblocker bị vô hiệu hóa"
    },
    "Update": {
        "message": "Cập nhật"
    },
    "Upgrade": {
        "message": "Cập nhật"
    },
    "Using": {
        "message": "Sử dụng"
    },
    "Using Hola": {
        "message": "Sử dụng Hola"
    },
    "VA": {
        "message": "Va-ti-căng"
    },
    "VC": {
        "message": "Xan Vin-xen và Grê-na-din"
    },
    "VD": {
        "message": "Bắc Việt Nam"
    },
    "VE": {
        "message": "Vê-nê-zu-ê-la"
    },
    "VG": {
        "message": "Đảo Virgin, thuộc Anh"
    },
    "VI": {
        "message": "Quần đảo Virgin, Mỹ"
    },
    "VN": {
        "message": "Việt Nam"
    },
    "VPN Premium": {
        "message": "VPN cao cấp"
    },
    "VU": {
        "message": "Va-nu-a-tu"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Phiên bản rất cũ của Chrome, <a> cập nhật </a> Chrome sử dụng Hola"
    },
    "Video stuck?": {
        "message": "Video bị mắc kẹt?"
    },
    "Videos available for instant streaming": {
        "message": "Video có sẵn để truyền tải ngay lập tức"
    },
    "WF": {
        "message": "Wallis và Futuna"
    },
    "WS": {
        "message": "Xa-moa"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Muốn Hola trên các thiết bị khác? (Xbox, PS, Apple TV, iPhone ...). Bấm vào đây"
    },
    "Want to know more?": {
        "message": "Bạn muốn biết thêm?"
    },
    "Watch Now": {
        "message": "Bây giờ xem"
    },
    "We found $1 videos": {
        "message": "Chúng tôi tìm thấy $1 video"
    },
    "We will be in touch with you soon": {
        "message": "Chúng tôi sẽ liên lạc với bạn sớm"
    },
    "Working!": {
        "message": "Làm việc!"
    },
    "Working?": {
        "message": "Làm việc?"
    },
    "Works on all sites but slower": {
        "message": "Hoạt động trên tất cả các trang web, nhưng chậm hơn"
    },
    "YD": {
        "message": "Cộng hòa Dân chủ Nhân dân Yemen"
    },
    "YE": {
        "message": "Y-ê-men"
    },
    "Yes": {
        "message": "Vâng"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Bạn cần phải nâng cấp lên phiên bản mới nhất của Opera để sử dụng Hola. Nhấn <a>vào đây</a> để nâng cấp."
    },
    "ZA": {
        "message": "Nam Phi"
    },
    "ZM": {
        "message": "Dăm-bi-a"
    },
    "ZW": {
        "message": "Dim-ba-bu-ê"
    },
    "ZZ": {
        "message": "Vùng Chưa biết hoặc không Hợp lệ"
    },
    "app_desc": {
        "message": "Các trang web truy cập bị chặn trong nước, công ty hoặc trường học với Hola của bạn! Hola là miễn phí và dễ sử dụng!"
    },
    "app_name": {
        "message": "Hola tốt hơn Internet"
    },
    "back to": {
        "message": "sao đến"
    },
    "changing...": {
        "message": "thay đổi..."
    },
    "cool sites": {
        "message": "trang web mát mẻ"
    },
    "current site": {
        "message": "Trang web hiện tại"
    },
    "day": {
        "message": "ngày"
    },
    "days": {
        "message": "ngày"
    },
    "even more...": {
        "message": "nhiều hơn..."
    },
    "mode": {
        "message": "chế độ"
    },
    "more options...": {
        "message": "nhiều lựa chọn hơn..."
    },
    "not working?": {
        "message": "không làm việc?"
    },
    "not working? try another server": {
        "message": "không làm việc? thử máy chủ khác"
    },
    "on this page": {
        "message": "trên trang này"
    },
    "sites that are censored": {
        "message": "các trang web được kiểm duyệt"
    },
    "start": {
        "message": "bắt đầu"
    },
    "working? remember": {
        "message": "làm việc? nhớ"
    }
};
return E; });