'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "通過"
    },
    "$1 Buffering?": {
        "message": "$1 緩衝中？"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1HOLA的訪問$2\n\n點擊這裡做同樣：$3\n\n它安裝HOLA的，這讓我上網的速度更快，訪問$4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN高級版"
    },
    "$1 from $2": {
        "message": "$1$2"
    },
    "$1 not found": {
        "message": "$1未找到"
    },
    "$1 via Hola": {
        "message": "以Hola訪問 $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(有些Hola功能無法在你的版本上使用)"
    },
    "AC": {
        "message": "阿森松島"
    },
    "AD": {
        "message": "安道爾"
    },
    "AE": {
        "message": "阿拉伯聯合大公國"
    },
    "AF": {
        "message": "阿富汗"
    },
    "AG": {
        "message": "安地卡及巴布達"
    },
    "AI": {
        "message": "安圭拉島"
    },
    "AL": {
        "message": "阿爾巴尼亞"
    },
    "AM": {
        "message": "亞美尼亞"
    },
    "AN": {
        "message": "荷屬安地列斯"
    },
    "AO": {
        "message": "安哥拉"
    },
    "AQ": {
        "message": "南極洲"
    },
    "AR": {
        "message": "阿根廷"
    },
    "AS": {
        "message": "美屬薩摩亞群島"
    },
    "AT": {
        "message": "奧地利"
    },
    "AU": {
        "message": "澳洲"
    },
    "AW": {
        "message": "阿路巴"
    },
    "AX": {
        "message": "亞蘭群島"
    },
    "AZ": {
        "message": "亞塞拜然"
    },
    "About": {
        "message": "大約"
    },
    "About Hola": {
        "message": "關於Hola"
    },
    "Accelerator": {
        "message": "加速器"
    },
    "Accelerator is": {
        "message": "加速器"
    },
    "Access $1 - cool site!": {
        "message": "進入$1 - 很酷的網站！"
    },
    "Access $1?": {
        "message": "訪問$1？"
    },
    "Access any site from any country, free": {
        "message": "從任何國家訪問任何網站，完全免費"
    },
    "Access cool sites": {
        "message": "訪問酷站"
    },
    "Access more sites": {
        "message": "訪問更多的網站"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "訪問網站封殺在你的國家，加速您的互聯網與霍拉 - 免費！"
    },
    "Accessing $1 with Hola": {
        "message": "訪問$1與霍拉"
    },
    "Account": {
        "message": "帳戶"
    },
    "Account type": {
        "message": "賬戶類型"
    },
    "Activating...": {
        "message": "激活..."
    },
    "All ($1)": {
        "message": "所有（$1）"
    },
    "Apply settings...": {
        "message": "採用設定..."
    },
    "Author site:": {
        "message": "作者網站"
    },
    "Author:": {
        "message": "作者:"
    },
    "Awesome!": {
        "message": "真棒！"
    },
    "BA": {
        "message": "波士尼亞與赫塞格維納"
    },
    "BB": {
        "message": "巴貝多"
    },
    "BD": {
        "message": "孟加拉"
    },
    "BE": {
        "message": "比利時"
    },
    "BF": {
        "message": "布吉納法索"
    },
    "BG": {
        "message": "保加利亞"
    },
    "BH": {
        "message": "巴林"
    },
    "BI": {
        "message": "蒲隆地"
    },
    "BJ": {
        "message": "貝南"
    },
    "BL": {
        "message": "聖巴瑟米"
    },
    "BM": {
        "message": "百慕達"
    },
    "BN": {
        "message": "汶萊"
    },
    "BO": {
        "message": "玻利維亞"
    },
    "BQ": {
        "message": "英屬南極領土"
    },
    "BR": {
        "message": "巴西"
    },
    "BS": {
        "message": "巴哈馬"
    },
    "BT": {
        "message": "不丹"
    },
    "BV": {
        "message": "布威島"
    },
    "BW": {
        "message": "波札那"
    },
    "BY": {
        "message": "白俄羅斯"
    },
    "BZ": {
        "message": "貝里斯"
    },
    "Back to $1": {
        "message": "返回到$1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "成為第一個獲得iPhone/iPad版Hola的 - 現在註冊："
    },
    "Browsing": {
        "message": "瀏覽"
    },
    "Buffering problems?": {
        "message": "緩衝的問題？"
    },
    "Buffering?": {
        "message": "緩衝中？"
    },
    "CA": {
        "message": "加拿大"
    },
    "CC": {
        "message": "可可斯群島"
    },
    "CD": {
        "message": "剛果民主共和國"
    },
    "CF": {
        "message": "中非共和國"
    },
    "CG": {
        "message": "剛果"
    },
    "CH": {
        "message": "瑞士"
    },
    "CI": {
        "message": "科特迪瓦"
    },
    "CK": {
        "message": "庫克群島"
    },
    "CL": {
        "message": "智利"
    },
    "CM": {
        "message": "喀麥隆"
    },
    "CN": {
        "message": "中華人民共和國"
    },
    "CO": {
        "message": "哥倫比亞"
    },
    "CP": {
        "message": "克利珀頓島"
    },
    "CR": {
        "message": "哥斯大黎加"
    },
    "CS": {
        "message": "塞爾維亞和蒙特尼哥羅"
    },
    "CT": {
        "message": "廣州和恩德伯里群島"
    },
    "CU": {
        "message": "古巴"
    },
    "CV": {
        "message": "維德角"
    },
    "CX": {
        "message": "聖誕島"
    },
    "CY": {
        "message": "賽普勒斯"
    },
    "CZ": {
        "message": "捷克共和國"
    },
    "Changing country...": {
        "message": "更改國家..."
    },
    "Check out Hola for $1!": {
        "message": "退房HOLA的$1！"
    },
    "Check out Hola for mobile devices": {
        "message": "退房HOLA的用於移動設備"
    },
    "Check your Internet connection": {
        "message": "檢查你的網路連線"
    },
    "Choose<br>Country": {
        "message": "選擇<br>國家"
    },
    "Configuring...": {
        "message": "配置中..."
    },
    "Connecting...": {
        "message": "連線中..."
    },
    "Cool site!": {
        "message": "很酷的網站！"
    },
    "Creative licenses": {
        "message": "創意牌"
    },
    "DD": {
        "message": "東德"
    },
    "DE": {
        "message": "德國"
    },
    "DG": {
        "message": "迪戈加西亞"
    },
    "DJ": {
        "message": "吉布地"
    },
    "DK": {
        "message": "丹麥"
    },
    "DM": {
        "message": "多明尼加"
    },
    "DO": {
        "message": "多明尼加共和國"
    },
    "DZ": {
        "message": "阿爾及利亞"
    },
    "Delete": {
        "message": "刪除"
    },
    "Deleted from my list": {
        "message": "從我的列表中刪除"
    },
    "Did it work?": {
        "message": "沒有工作？"
    },
    "Did you experience any buffering?": {
        "message": "有沒有一點緩衝？"
    },
    "Disliked it": {
        "message": "不喜歡它"
    },
    "Don't show again for $1 for one week": {
        "message": "在$1, 一個星期不要再顯示"
    },
    "Don't show again for any site for one week": {
        "message": "在任何網站, 一個星期不要再顯示"
    },
    "Downloading": {
        "message": "下載中"
    },
    "EA": {
        "message": "休達和梅利利亞"
    },
    "EC": {
        "message": "厄瓜多"
    },
    "EE": {
        "message": "愛沙尼亞"
    },
    "EG": {
        "message": "埃及"
    },
    "EH": {
        "message": "西撒哈拉"
    },
    "ER": {
        "message": "厄利垂亞"
    },
    "ES": {
        "message": "西班牙"
    },
    "ET": {
        "message": "衣索比亞"
    },
    "EU": {
        "message": "歐盟"
    },
    "Enable": {
        "message": "啟用"
    },
    "Enable Hola Accelerator": {
        "message": "啟用Hola加速器"
    },
    "Enjoy!": {
        "message": "盡情享受吧！"
    },
    "Enjoying Hola for Chrome?": {
        "message": "享受霍拉為Chrome瀏覽器？"
    },
    "Enter site to access": {
        "message": "進入網站訪問"
    },
    "Enter your email": {
        "message": "輸入你的電子郵件"
    },
    "FI": {
        "message": "芬蘭"
    },
    "FJ": {
        "message": "斐濟"
    },
    "FK": {
        "message": "福克蘭群島"
    },
    "FM": {
        "message": "密克羅尼西亞群島"
    },
    "FO": {
        "message": "法羅群島"
    },
    "FQ": {
        "message": "法國南部和南極領土"
    },
    "FR": {
        "message": "法國"
    },
    "FX": {
        "message": "法國本土"
    },
    "Fast": {
        "message": "迅"
    },
    "Finding new peers...": {
        "message": "尋找新的peers..."
    },
    "Finding peers...": {
        "message": "尋找peers..."
    },
    "Free": {
        "message": "免費"
    },
    "From": {
        "message": "從"
    },
    "Full list": {
        "message": "全部列表"
    },
    "GA": {
        "message": "加彭"
    },
    "GB": {
        "message": "英國"
    },
    "GD": {
        "message": "格瑞納達"
    },
    "GE": {
        "message": "喬治亞共和國"
    },
    "GF": {
        "message": "法屬圭亞那"
    },
    "GG": {
        "message": "根西島"
    },
    "GH": {
        "message": "迦納"
    },
    "GI": {
        "message": "直布羅陀"
    },
    "GL": {
        "message": "格陵蘭"
    },
    "GM": {
        "message": "甘比亞"
    },
    "GN": {
        "message": "幾內亞"
    },
    "GP": {
        "message": "哥德普洛"
    },
    "GQ": {
        "message": "赤道幾內亞"
    },
    "GR": {
        "message": "希臘"
    },
    "GS": {
        "message": "南喬治亞與南三明治群島"
    },
    "GT": {
        "message": "瓜地馬拉"
    },
    "GU": {
        "message": "關島"
    },
    "GW": {
        "message": "幾內亞比索"
    },
    "GY": {
        "message": "蓋亞納"
    },
    "Get 24/7 Unblocking": {
        "message": "取得24/7解鎖"
    },
    "Get Free Premium": {
        "message": "取得免費的高級版"
    },
    "Get Hola Accelerator": {
        "message": "取得Hola加速器"
    },
    "Get Hola Player": {
        "message": "獲取霍拉播放器"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "取得Hola Plus以享用不間斷、沒有廣告的網路服務。"
    },
    "Get Hola Premium": {
        "message": "取得Hola高級版"
    },
    "Get Hola for Android": {
        "message": "取得Android版Hola"
    },
    "Get Premium support": {
        "message": "取得高級版支緩"
    },
    "Get Unlimited Unblocking": {
        "message": "取得無限解鎖"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "可以訪問審查的網站，現在就來試試：$1"
    },
    "Get help from engineer over Skype:": {
        "message": "透過Skype取得電腦工程師的幫助:"
    },
    "Get the Fastest Servers": {
        "message": "取得最快的服務器"
    },
    "Go": {
        "message": "去"
    },
    "Go Hola Premium": {
        "message": "轉到Hola高級版"
    },
    "HK": {
        "message": "中華人民共和國香港特別行政區"
    },
    "HM": {
        "message": "赫德與麥克當諾群島"
    },
    "HN": {
        "message": "宏都拉斯"
    },
    "HR": {
        "message": "克羅埃西亞"
    },
    "HT": {
        "message": "海地"
    },
    "HU": {
        "message": "匈牙利"
    },
    "Hate it": {
        "message": "恨它"
    },
    "Help": {
        "message": "幫助"
    },
    "Hey,\n\nI'm using": {
        "message": "嘿，\n\n我使用"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "嗨，\n\n我開始用$1（$2）。它讓我在網上衝浪速度更快，訪問$3在我的國家。"
    },
    "Hola": {
        "message": "HOLA"
    },
    "Hola Accelerator": {
        "message": "Hola加速器"
    },
    "Hola Media Player": {
        "message": "HOLA媒體播放器"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola不能運，因為另一個擴展元件在控制你的代理伺服器設定。"
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola不能在Windows 8很好的運行。請切換到桌上模式。按<a>這裡</a>獲得指引"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "HOLA無法使用的權利，但我們正在努力。"
    },
    "Hola is off, click it to turn it on": {
        "message": "HOLA關閉，請點擊開啟"
    },
    "Hola site list": {
        "message": "解鎖網站列表"
    },
    "I can now access $1 from any country!": {
        "message": "我現在可以從任何國家進入$1！"
    },
    "I did not experience any buffering": {
        "message": "沒有一點緩衝"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "我剛剛訪問使用HOLA的$1一個審查的網站！"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "我使用的是$1，查看$2在我的國家，上網速度更快！"
    },
    "IC": {
        "message": "加那利群島"
    },
    "ID": {
        "message": "印尼"
    },
    "IE": {
        "message": "愛爾蘭"
    },
    "IL": {
        "message": "以色列"
    },
    "IM": {
        "message": "曼島"
    },
    "IN": {
        "message": "印度"
    },
    "IO": {
        "message": "英屬印度洋領土"
    },
    "IQ": {
        "message": "伊拉克"
    },
    "IR": {
        "message": "伊朗"
    },
    "IS": {
        "message": "冰島"
    },
    "IT": {
        "message": "義大利"
    },
    "Improve translation": {
        "message": "改善翻譯"
    },
    "Initializing...": {
        "message": "啟動中..."
    },
    "Install": {
        "message": "安裝"
    },
    "Install Accelerator": {
        "message": "安裝加速器"
    },
    "Install Free Hola Accelerator": {
        "message": "安裝免費Hola加速器"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "安裝HOLA的引擎繼續使用霍拉免費"
    },
    "Instantly watch any torrent Video": {
        "message": "立即觀看任何視頻洪流"
    },
    "Invite friends - free Premium.": {
        "message": "邀請朋友 - 免貴的高級版。"
    },
    "Invite friends. Get Premium.": {
        "message": "邀請朋友。獲取高級版。"
    },
    "It was okay": {
        "message": "這是好的"
    },
    "JE": {
        "message": "澤西島"
    },
    "JM": {
        "message": "牙買加"
    },
    "JO": {
        "message": "約旦"
    },
    "JP": {
        "message": "日本"
    },
    "JT": {
        "message": "約翰斯頓島"
    },
    "KE": {
        "message": "肯亞"
    },
    "KG": {
        "message": "吉爾吉斯"
    },
    "KH": {
        "message": "柬埔寨"
    },
    "KI": {
        "message": "吉里巴斯"
    },
    "KM": {
        "message": "科摩羅群島"
    },
    "KN": {
        "message": "聖克里斯多福及尼維斯"
    },
    "KP": {
        "message": "北韓"
    },
    "KR": {
        "message": "南韓"
    },
    "KW": {
        "message": "科威特"
    },
    "KY": {
        "message": "開曼群島"
    },
    "KZ": {
        "message": "哈薩克"
    },
    "LA": {
        "message": "寮國"
    },
    "LB": {
        "message": "黎巴嫩"
    },
    "LC": {
        "message": "聖露西亞"
    },
    "LI": {
        "message": "列支敦斯登"
    },
    "LK": {
        "message": "斯里蘭卡"
    },
    "LR": {
        "message": "賴比瑞亞"
    },
    "LS": {
        "message": "賴索扥"
    },
    "LT": {
        "message": "立陶宛"
    },
    "LU": {
        "message": "盧森堡"
    },
    "LV": {
        "message": "拉脫維亞"
    },
    "LY": {
        "message": "利比亞"
    },
    "Language": {
        "message": "語言"
    },
    "Library": {
        "message": "圖書館"
    },
    "Like it": {
        "message": "不管你喜歡"
    },
    "Loading": {
        "message": "載入中"
    },
    "Loading site...": {
        "message": "網站載入中"
    },
    "Log in": {
        "message": "登入"
    },
    "Log out": {
        "message": "登出"
    },
    "Love Hola?": {
        "message": "喜歡Hola？"
    },
    "Love it": {
        "message": "愛它"
    },
    "MA": {
        "message": "摩洛哥"
    },
    "MC": {
        "message": "摩納哥"
    },
    "MD": {
        "message": "摩爾多瓦"
    },
    "ME": {
        "message": "蒙特內哥羅"
    },
    "MF": {
        "message": "聖馬丁"
    },
    "MG": {
        "message": "馬達加斯加"
    },
    "MH": {
        "message": "馬紹爾群島"
    },
    "MI": {
        "message": "中途島"
    },
    "MK": {
        "message": "馬其頓"
    },
    "ML": {
        "message": "馬利"
    },
    "MM": {
        "message": "緬甸"
    },
    "MN": {
        "message": "蒙古"
    },
    "MO": {
        "message": "中華人民共和國澳門特別行政區"
    },
    "MP": {
        "message": "北馬里亞納群島"
    },
    "MQ": {
        "message": "馬丁尼克島"
    },
    "MR": {
        "message": "茅利塔尼亞"
    },
    "MS": {
        "message": "蒙特色拉特島"
    },
    "MT": {
        "message": "馬爾他"
    },
    "MU": {
        "message": "模里西斯"
    },
    "MV": {
        "message": "馬爾地夫"
    },
    "MW": {
        "message": "馬拉威"
    },
    "MX": {
        "message": "墨西哥"
    },
    "MY": {
        "message": "馬來西亞"
    },
    "MZ": {
        "message": "莫三比克"
    },
    "Make your Internet better with $1": {
        "message": "讓你的互聯網更好的$1"
    },
    "Menu": {
        "message": "菜單"
    },
    "Might not work on all sites": {
        "message": "可能無法正常工作的所有網站"
    },
    "Mode": {
        "message": "模式"
    },
    "More countries": {
        "message": "更多國家"
    },
    "More sites...": {
        "message": "更多網站···"
    },
    "More...": {
        "message": "更多···"
    },
    "My Account": {
        "message": "我的賬戶"
    },
    "My History": {
        "message": "我的歷史"
    },
    "My Settings": {
        "message": "我的設定"
    },
    "My favorites": {
        "message": "我的收藏"
    },
    "NA": {
        "message": "納米比亞"
    },
    "NC": {
        "message": "新喀里多尼亞群島"
    },
    "NE": {
        "message": "尼日"
    },
    "NF": {
        "message": "諾福克島"
    },
    "NG": {
        "message": "奈及利亞"
    },
    "NI": {
        "message": "尼加拉瓜"
    },
    "NL": {
        "message": "荷蘭"
    },
    "NO": {
        "message": "挪威"
    },
    "NP": {
        "message": "尼泊爾"
    },
    "NQ": {
        "message": "毛德皇後地"
    },
    "NR": {
        "message": "諾魯"
    },
    "NT": {
        "message": "中立區"
    },
    "NU": {
        "message": "紐威島"
    },
    "NZ": {
        "message": "紐西蘭"
    },
    "Need Help?": {
        "message": "需要幫助嗎？"
    },
    "Netflix": {
        "message": "Netflix公司"
    },
    "Never ask me again": {
        "message": "不要再問我"
    },
    "Never be a peer": {
        "message": "不要成為peer"
    },
    "No": {
        "message": "無"
    },
    "No idle peers found.": {
        "message": "沒有發現空閒的peer。"
    },
    "No recent videos found": {
        "message": "發現最近沒有視頻"
    },
    "No saved videos found": {
        "message": "發現沒有保存的視頻"
    },
    "No title": {
        "message": "無標題"
    },
    "No videos found": {
        "message": "未找到視頻"
    },
    "No videos found on active page": {
        "message": "沒有影片在活動頁面找到"
    },
    "No, Thanks": {
        "message": "不，謝謝"
    },
    "No, fix it": {
        "message": "不，解決它"
    },
    "Not working?": {
        "message": "成功？"
    },
    "Number of users that pressed not working": {
        "message": "回報不能用的使用者數量"
    },
    "Number of users that use this option": {
        "message": "使用這個選項的使用者數量"
    },
    "OM": {
        "message": "阿曼王國"
    },
    "Off": {
        "message": "關閉"
    },
    "Oh, yes!": {
        "message": "哦，是的！"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox版本過舊。按<a>這裡</a>升級。"
    },
    "On": {
        "message": "開"
    },
    "Open Media Player": {
        "message": "打開媒體播放器"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "我們全新的Mplayer即將到來！"
    },
    "PA": {
        "message": "巴拿馬"
    },
    "PC": {
        "message": "太平洋島嶼託管領土"
    },
    "PE": {
        "message": "秘魯"
    },
    "PF": {
        "message": "法屬玻里尼西亞"
    },
    "PG": {
        "message": "巴布亞紐幾內亞"
    },
    "PH": {
        "message": "菲律賓"
    },
    "PK": {
        "message": "巴基斯坦"
    },
    "PL": {
        "message": "波蘭"
    },
    "PM": {
        "message": "聖彼德與密啟崙"
    },
    "PN": {
        "message": "皮特康"
    },
    "PR": {
        "message": "波多黎各"
    },
    "PS": {
        "message": "巴勒斯坦"
    },
    "PT": {
        "message": "葡萄牙"
    },
    "PU": {
        "message": "美國其他太平洋島嶼"
    },
    "PW": {
        "message": "帛琉"
    },
    "PY": {
        "message": "巴拉圭"
    },
    "PZ": {
        "message": "巴拿馬運河區"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "請停用你認為可能控制你的代理伺服器設定的<a>擴展元件</a>，如廣告過濾器，其他VPN服務等"
    },
    "Please enter a valid email address.": {
        "message": "請輸入有效的電郵地址。"
    },
    "Please enter a web site address, like facebook.com": {
        "message": "請輸入網站地址，如facebook.com"
    },
    "Please help us get better": {
        "message": "請幫助我們做得更好"
    },
    "Popular in $1": {
        "message": "在$1很熱門"
    },
    "Popular in the world": {
        "message": "紅遍全球"
    },
    "Popular sites": {
        "message": "熱門網站"
    },
    "Premium": {
        "message": "高級版"
    },
    "QA": {
        "message": "卡達"
    },
    "QO": {
        "message": "離島大洋洲"
    },
    "RE": {
        "message": "留尼旺"
    },
    "RO": {
        "message": "羅馬尼亞"
    },
    "RS": {
        "message": "塞爾維亞"
    },
    "RU": {
        "message": "俄羅斯"
    },
    "RW": {
        "message": "盧安達"
    },
    "Rate us": {
        "message": "評價我們"
    },
    "Recent Videos": {
        "message": "最近的影片"
    },
    "Reload": {
        "message": "重新載入"
    },
    "Reload Hola": {
        "message": "重新載入Hola"
    },
    "Remember server": {
        "message": "記住服務器"
    },
    "Report a problem": {
        "message": "回報問題"
    },
    "Retry safe mode": {
        "message": "重試安全模式"
    },
    "SA": {
        "message": "沙烏地阿拉伯"
    },
    "SB": {
        "message": "索羅門群島"
    },
    "SC": {
        "message": "塞席爾"
    },
    "SD": {
        "message": "蘇丹"
    },
    "SE": {
        "message": "瑞典"
    },
    "SG": {
        "message": "新加坡"
    },
    "SH": {
        "message": "聖赫勒拿島"
    },
    "SI": {
        "message": "斯洛維尼亞"
    },
    "SJ": {
        "message": "冷岸及央麥恩群島"
    },
    "SK": {
        "message": "斯洛伐克"
    },
    "SL": {
        "message": "獅子山"
    },
    "SM": {
        "message": "聖馬利諾"
    },
    "SN": {
        "message": "塞內加爾"
    },
    "SO": {
        "message": "索馬利亞"
    },
    "SR": {
        "message": "蘇利南"
    },
    "ST": {
        "message": "聖多美及普林西比"
    },
    "SU": {
        "message": "蘇維埃社會主義共和國聯盟"
    },
    "SV": {
        "message": "薩爾瓦多"
    },
    "SY": {
        "message": "敘利亞"
    },
    "SZ": {
        "message": "史瓦濟蘭"
    },
    "Safe": {
        "message": "保險"
    },
    "Safe mode": {
        "message": "安全模式"
    },
    "Save": {
        "message": "保存"
    },
    "Saved Videos": {
        "message": "保存視頻"
    },
    "Saved for later": {
        "message": "保存後"
    },
    "Search video title": {
        "message": "搜索視頻標題"
    },
    "Select a Country": {
        "message": "選擇國家"
    },
    "Select site to unblock": {
        "message": "選擇現場解除封鎖"
    },
    "Server saved!": {
        "message": "服務器已保存！"
    },
    "Set safe mode for $1 $2": {
        "message": "設置安全模式$1$2"
    },
    "Settings": {
        "message": "設定"
    },
    "Share": {
        "message": "分享"
    },
    "Share $1 on $2": {
        "message": "分享$1$2"
    },
    "Share $1 via $2": {
        "message": "通過$2共享$1"
    },
    "Share with friends!": {
        "message": "與朋友分享！"
    },
    "Sign up": {
        "message": "註冊"
    },
    "Solve buffering": {
        "message": "解決緩衝"
    },
    "Solve buffering problems with": {
        "message": "解決緩衝問題以"
    },
    "Solves it": {
        "message": "解決它"
    },
    "Staff Picks": {
        "message": "工作人員精選"
    },
    "Start Hola": {
        "message": "啟動Hola"
    },
    "Starting...": {
        "message": "啟動中..."
    },
    "Stop Hola": {
        "message": "停止Hola"
    },
    "Stopping peer routing...": {
        "message": "停止端路由..."
    },
    "Stream": {
        "message": "流"
    },
    "Stream Instantly": {
        "message": "瞬間流"
    },
    "Submit": {
        "message": "提交"
    },
    "Support Hola": {
        "message": "支持Hola"
    },
    "TA": {
        "message": "特里斯坦 - 達庫尼亞群島"
    },
    "TC": {
        "message": "土克斯及開科斯群島"
    },
    "TD": {
        "message": "查德"
    },
    "TF": {
        "message": "法屬南方屬地"
    },
    "TG": {
        "message": "多哥共和國"
    },
    "TH": {
        "message": "泰國"
    },
    "TJ": {
        "message": "塔吉克"
    },
    "TK": {
        "message": "托克勞群島"
    },
    "TL": {
        "message": "東帝汶"
    },
    "TM": {
        "message": "土庫曼"
    },
    "TN": {
        "message": "突尼西亞"
    },
    "TO": {
        "message": "東加"
    },
    "TR": {
        "message": "土耳其"
    },
    "TT": {
        "message": "千里達及托巴哥"
    },
    "TV": {
        "message": "吐瓦魯"
    },
    "TW": {
        "message": "台灣"
    },
    "TZ": {
        "message": "坦尚尼亞"
    },
    "Talk to us on $1": {
        "message": "請告訴我們$1"
    },
    "Tell friends about $1": {
        "message": "告訴朋友關於$1"
    },
    "Testing connection...": {
        "message": "測試連接..."
    },
    "Thank you!": {
        "message": "謝謝！"
    },
    "There seems to be an error": {
        "message": "似乎發生錯誤了"
    },
    "Top popular sites": {
        "message": "熱門熱門網站"
    },
    "Translate to your language": {
        "message": "翻譯至你的語言"
    },
    "Try again": {
        "message": "再試一次"
    },
    "Try another server": {
        "message": "嘗試另一台服務器"
    },
    "Try it": {
        "message": "試試吧"
    },
    "Try safe mode": {
        "message": "嘗試安全模式"
    },
    "Try to <span>reload</span>": {
        "message": "嘗試<span>重新載入</span>"
    },
    "Trying another peer...": {
        "message": "嘗試另一個peer..."
    },
    "Turn off Accelerator": {
        "message": "關閉加速器"
    },
    "Turn off Hola": {
        "message": "關閉霍拉"
    },
    "Turn on Accelerator": {
        "message": "打開加速器"
    },
    "Turn on Hola": {
        "message": "打開霍拉"
    },
    "Turn on to get started": {
        "message": "開啟以使用"
    },
    "UA": {
        "message": "烏克蘭"
    },
    "UG": {
        "message": "烏干達"
    },
    "UM": {
        "message": "美屬邊疆群島"
    },
    "US": {
        "message": "美國"
    },
    "UY": {
        "message": "烏拉圭"
    },
    "UZ": {
        "message": "烏茲別克"
    },
    "Unblocker": {
        "message": "解鎖器"
    },
    "Unblocker is disabled": {
        "message": "解鎖器已被停用"
    },
    "Unblocker?": {
        "message": "解鎖器？"
    },
    "Update": {
        "message": "更新"
    },
    "Upgrade": {
        "message": "升級"
    },
    "Using": {
        "message": "使用"
    },
    "Using Hola": {
        "message": "使用Hola"
    },
    "VA": {
        "message": "梵蒂岡"
    },
    "VC": {
        "message": "聖文森及格瑞那丁"
    },
    "VD": {
        "message": "北越"
    },
    "VE": {
        "message": "委內瑞拉"
    },
    "VG": {
        "message": "英屬維京群島"
    },
    "VI": {
        "message": "美屬維京群島"
    },
    "VN": {
        "message": "越南"
    },
    "VPN Premium": {
        "message": "VPN高級版"
    },
    "VU": {
        "message": "萬那杜"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "你使用的Chrome版本很舊了, <a>更新</a> Chrome 以使用Hola"
    },
    "Video": {
        "message": "視頻"
    },
    "Video stuck?": {
        "message": "視頻停頓？"
    },
    "Videos available for instant streaming": {
        "message": "可以即時串流影片"
    },
    "WF": {
        "message": "瓦利斯和福杜納群島"
    },
    "WK": {
        "message": "威克島"
    },
    "WS": {
        "message": "薩摩亞群島"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "想要在其他裝置上使用Hola嗎? (Xbox, PS, Apple TV, iPhone...). 按此"
    },
    "Want to know more?": {
        "message": "想了解更多？"
    },
    "Watch Now": {
        "message": "現在看"
    },
    "We found $1 videos": {
        "message": "我們發現$1視頻"
    },
    "We will be in touch with you soon": {
        "message": "我們將盡快與你聯繫"
    },
    "Working!": {
        "message": "成功！"
    },
    "Working?": {
        "message": "成功嗎？"
    },
    "Works on all sites but slower": {
        "message": "適用於所有的網站，但速度較慢"
    },
    "YD": {
        "message": "也門人民民主共和國"
    },
    "YE": {
        "message": "葉門"
    },
    "YT": {
        "message": "馬約特"
    },
    "Yes": {
        "message": "是的"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "你需要升級到Opera的最新版本以使用Hola。按<a>這裡</a>升級。"
    },
    "Youtube": {
        "message": "YouTube的"
    },
    "ZA": {
        "message": "南非"
    },
    "ZM": {
        "message": "尚比亞"
    },
    "ZW": {
        "message": "辛巴威"
    },
    "ZZ": {
        "message": "未確定的區域"
    },
    "app_desc": {
        "message": "訪問被你國家、公司或學校擋住的網站！Hola免費且易於使用！"
    },
    "app_name": {
        "message": "Hola - 更好的網路"
    },
    "back to": {
        "message": "回到"
    },
    "changing...": {
        "message": "更改中..."
    },
    "cool sites": {
        "message": "酷網站"
    },
    "current site": {
        "message": "當前站點"
    },
    "day": {
        "message": "天"
    },
    "days": {
        "message": "天"
    },
    "even more...": {
        "message": "更多..."
    },
    "mode": {
        "message": "模式"
    },
    "more options...": {
        "message": "更多選項..."
    },
    "not working?": {
        "message": "不成功?"
    },
    "not working? try another server": {
        "message": "不成功？嘗試另一台服務器"
    },
    "on this page": {
        "message": "此頁面上"
    },
    "sites that are censored": {
        "message": "被審查的網站"
    },
    "start": {
        "message": "開始"
    },
    "working? remember": {
        "message": "成功嗎？記得"
    }
};
return E; });