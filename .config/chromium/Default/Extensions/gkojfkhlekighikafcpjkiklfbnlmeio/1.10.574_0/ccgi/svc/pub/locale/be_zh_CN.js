'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "通过"
    },
    "$1 Buffering?": {
        "message": "$1的缓冲？"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1HOLA的访问$2\n\n点击这里做同样：$3\n\n它安装HOLA的，这让我上网的速度更快，访问$4$5"
    },
    "$1 VPN": {
        "message": "$1VPN"
    },
    "$1 VPN Premium": {
        "message": "$1VPN溢价"
    },
    "$1 from $2": {
        "message": "$1$2"
    },
    "$1 not found": {
        "message": "$1未找到"
    },
    "$1 via Hola": {
        "message": "通过HOLA$1"
    },
    "(some Hola features are not available on your version)": {
        "message": "（HOLA的一些功能在这个版本中无法使用）"
    },
    "AC": {
        "message": "阿森松岛"
    },
    "AD": {
        "message": "安道尔"
    },
    "AE": {
        "message": "阿拉伯联合酋长国"
    },
    "AF": {
        "message": "阿富汗"
    },
    "AG": {
        "message": "安提瓜和巴布达"
    },
    "AI": {
        "message": "安圭拉"
    },
    "AL": {
        "message": "阿尔巴尼亚"
    },
    "AM": {
        "message": "亚美尼亚"
    },
    "AN": {
        "message": "荷属安的列斯群岛"
    },
    "AO": {
        "message": "安哥拉"
    },
    "AQ": {
        "message": "南极洲"
    },
    "AR": {
        "message": "阿根廷"
    },
    "AS": {
        "message": "美属萨摩亚"
    },
    "AT": {
        "message": "奥地利"
    },
    "AU": {
        "message": "澳大利亚"
    },
    "AW": {
        "message": "阿鲁巴"
    },
    "AX": {
        "message": "奥兰群岛"
    },
    "AZ": {
        "message": "阿塞拜疆"
    },
    "About": {
        "message": "大约"
    },
    "About Hola": {
        "message": "关于HOLA"
    },
    "Accelerator": {
        "message": "加速器"
    },
    "Accelerator is": {
        "message": "加速器已经"
    },
    "Access $1 - cool site!": {
        "message": "进入$1 - 优秀网站！"
    },
    "Access $1?": {
        "message": "访问$1？"
    },
    "Access any site from any country, free": {
        "message": "免费访问任何国家的任何网站"
    },
    "Access cool sites": {
        "message": "访问优秀网站"
    },
    "Access more sites": {
        "message": "访问更多网站"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "访问网站封杀在你的国家，加速您的互联网与霍拉 - 免费！"
    },
    "Accessing $1 with Hola": {
        "message": "正在访问$1使用HOLA"
    },
    "Account": {
        "message": "帐户"
    },
    "Account type": {
        "message": "帐户类型"
    },
    "Activating...": {
        "message": "激活..."
    },
    "All ($1)": {
        "message": "所有（$1）"
    },
    "Apply settings...": {
        "message": "应用设置..."
    },
    "Author site:": {
        "message": "作者网站："
    },
    "Author:": {
        "message": "作者："
    },
    "Awesome!": {
        "message": "真棒！"
    },
    "BA": {
        "message": "波斯尼亚和黑塞哥维那"
    },
    "BB": {
        "message": "巴巴多斯"
    },
    "BD": {
        "message": "孟加拉国"
    },
    "BE": {
        "message": "比利时"
    },
    "BF": {
        "message": "布基纳法索"
    },
    "BG": {
        "message": "保加利亚"
    },
    "BH": {
        "message": "巴林"
    },
    "BI": {
        "message": "布隆迪"
    },
    "BJ": {
        "message": "贝宁"
    },
    "BL": {
        "message": "圣巴泰勒米"
    },
    "BM": {
        "message": "百慕大"
    },
    "BN": {
        "message": "文莱"
    },
    "BO": {
        "message": "玻利维亚"
    },
    "BQ": {
        "message": "英属南极领地"
    },
    "BR": {
        "message": "巴西"
    },
    "BS": {
        "message": "巴哈马"
    },
    "BT": {
        "message": "不丹"
    },
    "BV": {
        "message": "布维特岛"
    },
    "BW": {
        "message": "博茨瓦纳"
    },
    "BY": {
        "message": "白俄罗斯"
    },
    "BZ": {
        "message": "伯利兹"
    },
    "Back to $1": {
        "message": "返回到$1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "抢先取得iPhone/iPad可用的HOLA - 现在注册："
    },
    "Browsing": {
        "message": "浏览"
    },
    "Buffering problems?": {
        "message": "缓冲的问题？"
    },
    "Buffering?": {
        "message": "缓冲？"
    },
    "CA": {
        "message": "加拿大"
    },
    "CC": {
        "message": "科科斯群岛"
    },
    "CD": {
        "message": "刚果（金）"
    },
    "CF": {
        "message": "中非共和国"
    },
    "CG": {
        "message": "刚果（布）"
    },
    "CH": {
        "message": "瑞士"
    },
    "CI": {
        "message": "象牙海岸"
    },
    "CK": {
        "message": "库克群岛"
    },
    "CL": {
        "message": "智利"
    },
    "CM": {
        "message": "喀麦隆"
    },
    "CN": {
        "message": "中国"
    },
    "CO": {
        "message": "哥伦比亚"
    },
    "CP": {
        "message": "克利珀顿岛"
    },
    "CR": {
        "message": "哥斯达黎加"
    },
    "CS": {
        "message": "塞尔维亚和黑山"
    },
    "CT": {
        "message": "广州和恩德伯里群岛"
    },
    "CU": {
        "message": "古巴"
    },
    "CV": {
        "message": "佛得角"
    },
    "CX": {
        "message": "圣诞岛"
    },
    "CY": {
        "message": "塞浦路斯"
    },
    "CZ": {
        "message": "捷克共和国"
    },
    "Changing country...": {
        "message": "改变国家..."
    },
    "Check out Hola for $1!": {
        "message": "检查HOLA的$1！"
    },
    "Check out Hola for mobile devices": {
        "message": "退房HOLA的用于移动设备"
    },
    "Check your Internet connection": {
        "message": "检查您的网络连接"
    },
    "Choose<br>Country": {
        "message": "选择<br>国家"
    },
    "Configuring...": {
        "message": "设置..."
    },
    "Connecting...": {
        "message": "连接中..."
    },
    "Cool site!": {
        "message": "优秀的网站！"
    },
    "Creative licenses": {
        "message": "创意牌"
    },
    "DD": {
        "message": "东德"
    },
    "DE": {
        "message": "德国"
    },
    "DG": {
        "message": "迪戈加西亚岛"
    },
    "DJ": {
        "message": "吉布提"
    },
    "DK": {
        "message": "丹麦"
    },
    "DM": {
        "message": "多米尼加"
    },
    "DO": {
        "message": "多米尼加共和国"
    },
    "DZ": {
        "message": "阿尔及利亚"
    },
    "Delete": {
        "message": "删除"
    },
    "Deleted from my list": {
        "message": "从我的列表中删除"
    },
    "Did it work?": {
        "message": "起作用了吗？"
    },
    "Did you experience any buffering?": {
        "message": "你有没有遇到任何缓冲？"
    },
    "Disliked it": {
        "message": "不喜欢它"
    },
    "Don't show again for $1 for one week": {
        "message": "一周内不要再提示$1"
    },
    "Don't show again for any site for one week": {
        "message": "一周内不要再提示任何网站"
    },
    "Downloading": {
        "message": "正在下载"
    },
    "EA": {
        "message": "休达和梅利利亚"
    },
    "EC": {
        "message": "厄瓜多尔"
    },
    "EE": {
        "message": "爱沙尼亚"
    },
    "EG": {
        "message": "埃及"
    },
    "EH": {
        "message": "西撒哈拉"
    },
    "ER": {
        "message": "厄立特里亚"
    },
    "ES": {
        "message": "西班牙"
    },
    "ET": {
        "message": "埃塞俄比亚"
    },
    "EU": {
        "message": "欧盟"
    },
    "Enable": {
        "message": "启用"
    },
    "Enable Hola Accelerator": {
        "message": "启用HOLA加速器"
    },
    "Enjoy!": {
        "message": "尽情享受吧！"
    },
    "Enjoying Hola for Chrome?": {
        "message": "享受霍拉为Chrome浏览器？"
    },
    "Enter site to access": {
        "message": "输入网址访问"
    },
    "Enter your email": {
        "message": "输入您的电子邮件"
    },
    "FI": {
        "message": "芬兰"
    },
    "FJ": {
        "message": "斐济"
    },
    "FK": {
        "message": "福克兰群岛"
    },
    "FM": {
        "message": "密克罗尼西亚联邦"
    },
    "FO": {
        "message": "法罗群岛"
    },
    "FQ": {
        "message": "法属南部和南极领地"
    },
    "FR": {
        "message": "法国"
    },
    "FX": {
        "message": "法国本土"
    },
    "Fast": {
        "message": "迅"
    },
    "Finding new peers...": {
        "message": "寻找新的节点..."
    },
    "Finding peers...": {
        "message": "寻找节点..."
    },
    "Free": {
        "message": "免费"
    },
    "From": {
        "message": "从"
    },
    "Full list": {
        "message": "全部列表"
    },
    "GA": {
        "message": "加蓬"
    },
    "GB": {
        "message": "英国"
    },
    "GD": {
        "message": "格林纳达"
    },
    "GE": {
        "message": "格鲁吉亚"
    },
    "GF": {
        "message": "法属圭亚那"
    },
    "GG": {
        "message": "格恩西岛"
    },
    "GH": {
        "message": "加纳"
    },
    "GI": {
        "message": "直布罗陀"
    },
    "GL": {
        "message": "格陵兰"
    },
    "GM": {
        "message": "冈比亚"
    },
    "GN": {
        "message": "几内亚"
    },
    "GP": {
        "message": "瓜德罗普岛"
    },
    "GQ": {
        "message": "赤道几内亚"
    },
    "GR": {
        "message": "希腊"
    },
    "GS": {
        "message": "南乔治亚岛和南桑威齐群岛"
    },
    "GT": {
        "message": "危地马拉"
    },
    "GU": {
        "message": "关岛"
    },
    "GW": {
        "message": "几内亚比绍"
    },
    "GY": {
        "message": "圭亚那"
    },
    "Get 24/7 Unblocking": {
        "message": "获取24/7解锁"
    },
    "Get Free Premium": {
        "message": "获取免费高级版"
    },
    "Get Hola Accelerator": {
        "message": "获取HOLA加速器"
    },
    "Get Hola Player": {
        "message": "获取HOLA播放器"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "获取HOLA增强版，免费去广告服务。"
    },
    "Get Hola Premium": {
        "message": "获取HOLA高级版"
    },
    "Get Hola for Android": {
        "message": "获取Android版HOLA"
    },
    "Get Premium support": {
        "message": "获取高级支持"
    },
    "Get Unlimited Unblocking": {
        "message": "获取无限制解除封锁"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "访问被封锁的网站，现在就来试试：$1"
    },
    "Get help from engineer over Skype:": {
        "message": "通过Skype获取人工帮助："
    },
    "Get the Fastest Servers": {
        "message": "获得最快的服务器"
    },
    "Go": {
        "message": "去"
    },
    "Go Hola Premium": {
        "message": "转到HOLA高级版"
    },
    "HK": {
        "message": "中国香港特别行政区"
    },
    "HM": {
        "message": "赫德与麦克唐纳群岛"
    },
    "HN": {
        "message": "洪都拉斯"
    },
    "HR": {
        "message": "克罗地亚"
    },
    "HT": {
        "message": "海地"
    },
    "HU": {
        "message": "匈牙利"
    },
    "Hate it": {
        "message": "讨厌它"
    },
    "Help": {
        "message": "帮助"
    },
    "Hey,\n\nI'm using": {
        "message": "嘿，\n\n我正在使用"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "嗨，\n\n我开始用$1（$2）了。它让我的上网速度更快并能在我的国家访问$3。"
    },
    "Hola": {
        "message": "HOLA"
    },
    "Hola Accelerator": {
        "message": "HOLA加速器"
    },
    "Hola Media Player": {
        "message": "HOLA 媒体播放器"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "HOLA不能工作，因为另一个扩展程序正在控制您的代理设置。"
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "HOLA不支持Windows 8模式。请切换到桌面模式。点击<a>这里</a>查看说明"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "HOLA暂时不可用，但我们正在努力。"
    },
    "Hola is off, click it to turn it on": {
        "message": "HOLA已关闭，点击开启"
    },
    "Hola site list": {
        "message": "HOLA网站列表"
    },
    "I can now access $1 from any country!": {
        "message": "我现在可以从任何国家访问$1！"
    },
    "I did not experience any buffering": {
        "message": "我没有遇到任何缓冲"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "我刚刚通过HOLA访问了$1，一个被封锁的网站！"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "我使用的是$1，查看$2在我的国家，上网速度更快！"
    },
    "IC": {
        "message": "加那利群岛"
    },
    "ID": {
        "message": "印度尼西亚"
    },
    "IE": {
        "message": "爱尔兰"
    },
    "IL": {
        "message": "以色列"
    },
    "IM": {
        "message": "曼岛"
    },
    "IN": {
        "message": "印度"
    },
    "IO": {
        "message": "英属印度洋领地"
    },
    "IQ": {
        "message": "伊拉克"
    },
    "IR": {
        "message": "伊朗"
    },
    "IS": {
        "message": "冰岛"
    },
    "IT": {
        "message": "意大利"
    },
    "Improve translation": {
        "message": "改进翻译"
    },
    "Initializing...": {
        "message": "初始化..."
    },
    "Install": {
        "message": "安装"
    },
    "Install Accelerator": {
        "message": "安装加速器"
    },
    "Install Free Hola Accelerator": {
        "message": "安装免费HOLA加速器"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "安装HOLA的引擎继续使用霍拉免费"
    },
    "Instantly watch any torrent Video": {
        "message": "马上观看任何BT视频"
    },
    "Invite friends - free Premium.": {
        "message": "邀请朋友 - 免费获得高级版。"
    },
    "Invite friends. Get Premium.": {
        "message": "邀请朋友。获取高级版。"
    },
    "It was okay": {
        "message": "这是好的"
    },
    "JE": {
        "message": "泽西岛"
    },
    "JM": {
        "message": "牙买加"
    },
    "JO": {
        "message": "约旦"
    },
    "JP": {
        "message": "日本"
    },
    "JT": {
        "message": "约翰斯顿环礁"
    },
    "KE": {
        "message": "肯尼亚"
    },
    "KG": {
        "message": "吉尔吉斯斯坦"
    },
    "KH": {
        "message": "柬埔寨"
    },
    "KI": {
        "message": "基里巴斯"
    },
    "KM": {
        "message": "科摩罗"
    },
    "KN": {
        "message": "圣基茨和尼维斯"
    },
    "KP": {
        "message": "朝鲜"
    },
    "KR": {
        "message": "韩国"
    },
    "KW": {
        "message": "科威特"
    },
    "KY": {
        "message": "开曼群岛"
    },
    "KZ": {
        "message": "哈萨克斯坦"
    },
    "LA": {
        "message": "老挝人民民主共和国"
    },
    "LB": {
        "message": "黎巴嫩"
    },
    "LC": {
        "message": "圣卢西亚"
    },
    "LI": {
        "message": "列支敦士登"
    },
    "LK": {
        "message": "斯里兰卡"
    },
    "LR": {
        "message": "利比里亚"
    },
    "LS": {
        "message": "莱索托"
    },
    "LT": {
        "message": "立陶宛"
    },
    "LU": {
        "message": "卢森堡"
    },
    "LV": {
        "message": "拉脱维亚"
    },
    "LY": {
        "message": "利比亚"
    },
    "Language": {
        "message": "语言"
    },
    "Library": {
        "message": "图书馆"
    },
    "Like it": {
        "message": "喜欢它"
    },
    "Loading": {
        "message": "加载"
    },
    "Loading site...": {
        "message": "加载网站"
    },
    "Log in": {
        "message": "登录"
    },
    "Log out": {
        "message": "注销"
    },
    "Love Hola?": {
        "message": "喜欢HOLA？"
    },
    "Love it": {
        "message": "爱它"
    },
    "MA": {
        "message": "摩洛哥"
    },
    "MC": {
        "message": "摩纳哥"
    },
    "MD": {
        "message": "摩尔多瓦"
    },
    "ME": {
        "message": "黑山共和国"
    },
    "MF": {
        "message": "圣马丁"
    },
    "MG": {
        "message": "马达加斯加"
    },
    "MH": {
        "message": "马绍尔群岛"
    },
    "MI": {
        "message": "中途岛"
    },
    "MK": {
        "message": "马其顿"
    },
    "ML": {
        "message": "马里"
    },
    "MM": {
        "message": "缅甸"
    },
    "MN": {
        "message": "蒙古"
    },
    "MO": {
        "message": "中国澳门特别行政区"
    },
    "MP": {
        "message": "北马里亚纳群岛"
    },
    "MQ": {
        "message": "马提尼克群岛"
    },
    "MR": {
        "message": "毛里塔尼亚"
    },
    "MS": {
        "message": "蒙塞拉特群岛"
    },
    "MT": {
        "message": "马耳他"
    },
    "MU": {
        "message": "毛里求斯"
    },
    "MV": {
        "message": "马尔代夫"
    },
    "MW": {
        "message": "马拉维"
    },
    "MX": {
        "message": "墨西哥"
    },
    "MY": {
        "message": "马来西亚"
    },
    "MZ": {
        "message": "莫桑比克"
    },
    "Make your Internet better with $1": {
        "message": "使用$1，让你的互联网更好"
    },
    "Menu": {
        "message": "菜单"
    },
    "Might not work on all sites": {
        "message": "可能无法正常工作的所有网站"
    },
    "Mode": {
        "message": "模式"
    },
    "More countries": {
        "message": "更多国家"
    },
    "More sites...": {
        "message": "更多网站..."
    },
    "More...": {
        "message": "更多..."
    },
    "My Account": {
        "message": "我的账户"
    },
    "My History": {
        "message": "我的历史"
    },
    "My Settings": {
        "message": "我的设置"
    },
    "My favorites": {
        "message": "我的收藏"
    },
    "NA": {
        "message": "纳米比亚"
    },
    "NC": {
        "message": "新喀里多尼亚"
    },
    "NE": {
        "message": "尼日尔"
    },
    "NF": {
        "message": "诺福克岛"
    },
    "NG": {
        "message": "尼日利亚"
    },
    "NI": {
        "message": "尼加拉瓜"
    },
    "NL": {
        "message": "荷兰"
    },
    "NO": {
        "message": "挪威"
    },
    "NP": {
        "message": "尼泊尔"
    },
    "NQ": {
        "message": "毛德皇后地"
    },
    "NR": {
        "message": "瑙鲁"
    },
    "NT": {
        "message": "中立区"
    },
    "NU": {
        "message": "纽埃"
    },
    "NZ": {
        "message": "新西兰"
    },
    "Need Help?": {
        "message": "需要帮助吗？"
    },
    "Netflix": {
        "message": "Netflix公司"
    },
    "Never ask me again": {
        "message": "不再询问"
    },
    "Never be a peer": {
        "message": "不作为节点"
    },
    "No": {
        "message": "不"
    },
    "No idle peers found.": {
        "message": "没有找到空闲的可用节点。"
    },
    "No recent videos found": {
        "message": "发现最近没有视频"
    },
    "No saved videos found": {
        "message": "发现没有保存的视频"
    },
    "No title": {
        "message": "无标题"
    },
    "No videos found": {
        "message": "未找到视频"
    },
    "No videos found on active page": {
        "message": "没有影片在活动页面找到"
    },
    "No, Thanks": {
        "message": "不，谢谢"
    },
    "No, fix it": {
        "message": "不，解决它"
    },
    "Not working?": {
        "message": "没有效果？"
    },
    "Number of users that pressed not working": {
        "message": "报告无法运行的用户数"
    },
    "Number of users that use this option": {
        "message": "使用此选项的用户数"
    },
    "OM": {
        "message": "阿曼"
    },
    "Off": {
        "message": "关"
    },
    "Oh, yes!": {
        "message": "哦，是的！"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "老版本的Firefox。按<a>这里</a>升级。"
    },
    "On": {
        "message": "开"
    },
    "Open Media Player": {
        "message": "打开媒体播放器"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "我们即将推出全新的Mplayer!"
    },
    "PA": {
        "message": "巴拿马"
    },
    "PC": {
        "message": "太平洋群岛托管地"
    },
    "PE": {
        "message": "秘鲁"
    },
    "PF": {
        "message": "法属波利尼西亚"
    },
    "PG": {
        "message": "巴布亚新几内亚"
    },
    "PH": {
        "message": "菲律宾"
    },
    "PK": {
        "message": "巴基斯坦"
    },
    "PL": {
        "message": "波兰"
    },
    "PM": {
        "message": "圣皮埃尔和密克隆"
    },
    "PN": {
        "message": "皮特凯恩"
    },
    "PR": {
        "message": "波多黎各"
    },
    "PS": {
        "message": "巴勒斯坦领土"
    },
    "PT": {
        "message": "葡萄牙"
    },
    "PU": {
        "message": "美属太平洋群岛"
    },
    "PW": {
        "message": "帕劳"
    },
    "PY": {
        "message": "巴拉圭"
    },
    "PZ": {
        "message": "巴拿马运河区"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "请禁用您的其他代理扩展程序，例如广告拦截，或其他VPN<a>扩展</a>"
    },
    "Please enter a valid email address.": {
        "message": "请输入有效的电子邮件地址。"
    },
    "Please enter a web site address, like facebook.com": {
        "message": "请输入网站地址，如facebook.com"
    },
    "Please help us get better": {
        "message": "请帮助我们做的更好"
    },
    "Popular in $1": {
        "message": "热门$1"
    },
    "Popular in the world": {
        "message": "世界热门"
    },
    "Popular sites": {
        "message": "热门网站"
    },
    "Premium": {
        "message": "高级版"
    },
    "QA": {
        "message": "卡塔尔"
    },
    "QO": {
        "message": "离岛大洋洲"
    },
    "RE": {
        "message": "留尼汪"
    },
    "RO": {
        "message": "罗马尼亚"
    },
    "RS": {
        "message": "塞尔维亚"
    },
    "RU": {
        "message": "俄罗斯"
    },
    "RW": {
        "message": "卢旺达"
    },
    "Rate us": {
        "message": "评价我们"
    },
    "Recent Videos": {
        "message": "最近的影片"
    },
    "Reload": {
        "message": "重新载入"
    },
    "Reload Hola": {
        "message": "重新载入HOLA"
    },
    "Remember server": {
        "message": "记住这个服务器"
    },
    "Report a problem": {
        "message": "报告问题"
    },
    "Retry safe mode": {
        "message": "重试安全模式"
    },
    "SA": {
        "message": "沙特阿拉伯"
    },
    "SB": {
        "message": "所罗门群岛"
    },
    "SC": {
        "message": "塞舌尔群岛"
    },
    "SD": {
        "message": "苏丹"
    },
    "SE": {
        "message": "瑞典"
    },
    "SG": {
        "message": "新加坡"
    },
    "SH": {
        "message": "圣赫勒拿"
    },
    "SI": {
        "message": "斯洛文尼亚"
    },
    "SJ": {
        "message": "斯瓦尔巴特和扬马延"
    },
    "SK": {
        "message": "斯洛伐克"
    },
    "SL": {
        "message": "塞拉利昂"
    },
    "SM": {
        "message": "圣马力诺"
    },
    "SN": {
        "message": "塞内加尔"
    },
    "SO": {
        "message": "索马里"
    },
    "SR": {
        "message": "苏里南"
    },
    "ST": {
        "message": "圣多美和普林西比"
    },
    "SU": {
        "message": "苏联"
    },
    "SV": {
        "message": "萨尔瓦多"
    },
    "SY": {
        "message": "叙利亚"
    },
    "SZ": {
        "message": "斯威士兰"
    },
    "Safe": {
        "message": "保险"
    },
    "Safe mode": {
        "message": "安全模式"
    },
    "Save": {
        "message": "保存"
    },
    "Saved Videos": {
        "message": "保存视频"
    },
    "Saved for later": {
        "message": "保存后"
    },
    "Search video title": {
        "message": "搜索视频标题"
    },
    "Select a Country": {
        "message": "选择国家"
    },
    "Select site to unblock": {
        "message": "选择要解锁的网站"
    },
    "Server saved!": {
        "message": "服务器已保存！"
    },
    "Set safe mode for $1 $2": {
        "message": "设置安全模式$1 $2"
    },
    "Settings": {
        "message": "设置"
    },
    "Share": {
        "message": "分享"
    },
    "Share $1 on $2": {
        "message": "分享$1$2"
    },
    "Share $1 via $2": {
        "message": "通过$2共享$1"
    },
    "Share with friends!": {
        "message": "和朋友分享！"
    },
    "Sign up": {
        "message": "注册"
    },
    "Solve buffering": {
        "message": "解决缓冲"
    },
    "Solve buffering problems with": {
        "message": "解决缓冲问题"
    },
    "Solves it": {
        "message": "解决它"
    },
    "Staff Picks": {
        "message": "工作人员精选"
    },
    "Start Hola": {
        "message": "开始HOLA"
    },
    "Starting...": {
        "message": "启动中..."
    },
    "Stop Hola": {
        "message": "停止HOLA"
    },
    "Stopping peer routing...": {
        "message": "停止端路由..."
    },
    "Stream": {
        "message": "流"
    },
    "Stream Instantly": {
        "message": "瞬间流"
    },
    "Submit": {
        "message": "提交"
    },
    "Support Hola": {
        "message": "支持HOLA"
    },
    "TA": {
        "message": "特里斯坦达库尼亚"
    },
    "TC": {
        "message": "特克斯和凯科斯群岛"
    },
    "TD": {
        "message": "乍得"
    },
    "TF": {
        "message": "法属南部领土"
    },
    "TG": {
        "message": "多哥"
    },
    "TH": {
        "message": "泰国"
    },
    "TJ": {
        "message": "塔吉克斯坦"
    },
    "TK": {
        "message": "托克劳"
    },
    "TL": {
        "message": "东帝汶"
    },
    "TM": {
        "message": "土库曼斯坦"
    },
    "TN": {
        "message": "突尼斯"
    },
    "TO": {
        "message": "汤加"
    },
    "TR": {
        "message": "土耳其"
    },
    "TT": {
        "message": "特立尼达和多巴哥"
    },
    "TV": {
        "message": "图瓦卢"
    },
    "TW": {
        "message": "台湾"
    },
    "TZ": {
        "message": "坦桑尼亚"
    },
    "Talk to us on $1": {
        "message": "请告诉我们$1"
    },
    "Tell friends about $1": {
        "message": "告诉朋友$1"
    },
    "Testing connection...": {
        "message": "测试连接..."
    },
    "Thank you!": {
        "message": "谢谢！"
    },
    "There seems to be an error": {
        "message": "可能发生了一个错误"
    },
    "Top popular sites": {
        "message": "热门热门网站"
    },
    "Translate to your language": {
        "message": "翻译到您的语言"
    },
    "Try again": {
        "message": "再试一次"
    },
    "Try another server": {
        "message": "尝试另一台服务器"
    },
    "Try it": {
        "message": "试试它"
    },
    "Try safe mode": {
        "message": "尝试安全模式"
    },
    "Try to <span>reload</span>": {
        "message": "尝试<span>重新载入</span>"
    },
    "Trying another peer...": {
        "message": "尝试另一个节点..."
    },
    "Turn off Accelerator": {
        "message": "关闭加速器"
    },
    "Turn off Hola": {
        "message": "关闭HOLA"
    },
    "Turn on Accelerator": {
        "message": "启动加速器"
    },
    "Turn on Hola": {
        "message": "打开HOLA"
    },
    "Turn on to get started": {
        "message": "开启并开始浏览"
    },
    "UA": {
        "message": "乌克兰"
    },
    "UG": {
        "message": "乌干达"
    },
    "UM": {
        "message": "美国边远小岛"
    },
    "US": {
        "message": "美国"
    },
    "UY": {
        "message": "乌拉圭"
    },
    "UZ": {
        "message": "乌兹别克斯坦"
    },
    "Unblocker": {
        "message": "解锁器"
    },
    "Unblocker is disabled": {
        "message": "Unblocker已停用"
    },
    "Unblocker?": {
        "message": "解锁器？"
    },
    "Update": {
        "message": "更新"
    },
    "Upgrade": {
        "message": "更新"
    },
    "Using": {
        "message": "使用"
    },
    "Using Hola": {
        "message": "使用HOLA"
    },
    "VA": {
        "message": "梵蒂冈"
    },
    "VC": {
        "message": "圣文森特和格林纳丁斯"
    },
    "VD": {
        "message": "北越"
    },
    "VE": {
        "message": "委内瑞拉"
    },
    "VG": {
        "message": "英属维京群岛"
    },
    "VI": {
        "message": "美属维京群岛"
    },
    "VN": {
        "message": "越南"
    },
    "VPN Premium": {
        "message": "VPN高级版"
    },
    "VU": {
        "message": "瓦努阿图"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome版本过老，<a>更新</a>Chrome浏览器以使用HOLA"
    },
    "Video": {
        "message": "视频"
    },
    "Video stuck?": {
        "message": "视频卡？"
    },
    "Videos available for instant streaming": {
        "message": "可以即时串流影片"
    },
    "WF": {
        "message": "瓦利斯和富图纳"
    },
    "WK": {
        "message": "威克岛"
    },
    "WS": {
        "message": "萨摩亚"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "想在其他设备上使用HOLA吗？ （Xbox，PS，Apple TV，iPhone 等等）。请点击这里"
    },
    "Want to know more?": {
        "message": "想了解更多?"
    },
    "Watch Now": {
        "message": "现在看"
    },
    "We found $1 videos": {
        "message": "我们发现$1视频"
    },
    "We will be in touch with you soon": {
        "message": "我们将与您尽快联系"
    },
    "Working!": {
        "message": "工作！"
    },
    "Working?": {
        "message": "工作？"
    },
    "Works on all sites but slower": {
        "message": "适用于所有的网站，但速度较慢"
    },
    "YD": {
        "message": "南也门"
    },
    "YE": {
        "message": "也门"
    },
    "YT": {
        "message": "马约特"
    },
    "Yes": {
        "message": "是的"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "你需要升级到最新的Opera来使用HOLA。按<a>这里</a>升级。"
    },
    "ZA": {
        "message": "南非"
    },
    "ZM": {
        "message": "赞比亚"
    },
    "ZW": {
        "message": "津巴布韦"
    },
    "ZZ": {
        "message": "未知或无效地区"
    },
    "app_desc": {
        "message": "访问被你的国家，公司或学校封锁的网站！ HOLA是免费的且易于使用的！"
    },
    "app_name": {
        "message": "HOLA 更好的互联网"
    },
    "back to": {
        "message": "回到"
    },
    "changing...": {
        "message": "更改..."
    },
    "cool sites": {
        "message": "优秀网站"
    },
    "current site": {
        "message": "当前站点"
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
        "message": "更多选项..."
    },
    "not working?": {
        "message": "不起作用？"
    },
    "not working? try another server": {
        "message": "不起作用？尝试另一台服务器"
    },
    "on this page": {
        "message": "此页面上"
    },
    "sites that are censored": {
        "message": "被封锁的网站"
    },
    "start": {
        "message": "开始"
    },
    "working? remember": {
        "message": "有效果？记得"
    }
};
return E; });