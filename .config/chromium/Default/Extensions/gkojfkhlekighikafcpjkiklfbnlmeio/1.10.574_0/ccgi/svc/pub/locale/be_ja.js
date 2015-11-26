'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "経由"
    },
    "$1 Buffering?": {
        "message": "$1のバッファリング？"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1オラは同じことをするためにここに$2\n\nクリックしてアクセスします: $3\n\nそれは私がより速くネットサーフィンしてアクセスできますオラがインストール$4$5"
    },
    "$1 VPN": {
        "message": "$1のVPN"
    },
    "$1 VPN Premium": {
        "message": "$1のVPNプレミアム"
    },
    "$1 from $2": {
        "message": "$2から$1"
    },
    "$1 not found": {
        "message": "$1が見つかりません"
    },
    "$1 via Hola": {
        "message": "$1経由Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "（一部の機能はお使いののバージョンでは使用できません）"
    },
    "AC": {
        "message": "アセンション島"
    },
    "AD": {
        "message": "アンドラ"
    },
    "AE": {
        "message": "アラブ首長国連邦"
    },
    "AF": {
        "message": "アフガニスタン"
    },
    "AG": {
        "message": "アンティグア・バーブーダ"
    },
    "AI": {
        "message": "アンギラ"
    },
    "AL": {
        "message": "アルバニア"
    },
    "AM": {
        "message": "アルメニア"
    },
    "AN": {
        "message": "オランダ領アンティル諸島"
    },
    "AO": {
        "message": "アンゴラ"
    },
    "AQ": {
        "message": "南極大陸"
    },
    "AR": {
        "message": "アルゼンチン"
    },
    "AS": {
        "message": "米領サモア"
    },
    "AT": {
        "message": "オーストリア"
    },
    "AU": {
        "message": "オーストラリア"
    },
    "AW": {
        "message": "アルバ島"
    },
    "AX": {
        "message": "オーランド諸島"
    },
    "AZ": {
        "message": "アゼルバイジャン"
    },
    "About": {
        "message": "約"
    },
    "About Hola": {
        "message": "はいはいについて"
    },
    "Accelerator": {
        "message": "アクセラレータ"
    },
    "Accelerator is": {
        "message": "アクセラレータは、"
    },
    "Access $1 - cool site!": {
        "message": "$1アクセス - クールサイト！"
    },
    "Access $1?": {
        "message": "アクセス$1？"
    },
    "Access any site from any country, free": {
        "message": "自由に、どの国からの任意のサイトにアクセスする"
    },
    "Access cool sites": {
        "message": "アクセスクールサイト"
    },
    "Access more sites": {
        "message": "より多くのサイトにアクセス"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "アクセスサイトは、あなたの国で検閲し、はいはいであなたのインターネットを加速 - 無料！"
    },
    "Accessing $1 with Hola": {
        "message": "オラと$1へのアクセス"
    },
    "Account": {
        "message": "アカウント"
    },
    "Account type": {
        "message": "口座の種類"
    },
    "Activating...": {
        "message": "アクティブに..."
    },
    "All ($1)": {
        "message": "すべて（$1）"
    },
    "Apply settings...": {
        "message": "設定を適用します..."
    },
    "Author site:": {
        "message": "著者サイト："
    },
    "Author:": {
        "message": "著者："
    },
    "Awesome!": {
        "message": "素晴らしい！"
    },
    "BA": {
        "message": "ボスニア・ヘルツェゴビナ"
    },
    "BB": {
        "message": "バルバドス"
    },
    "BD": {
        "message": "バングラデシュ"
    },
    "BE": {
        "message": "ベルギー"
    },
    "BF": {
        "message": "ブルキナファソ"
    },
    "BG": {
        "message": "ブルガリア"
    },
    "BH": {
        "message": "バーレーン"
    },
    "BI": {
        "message": "ブルンジ"
    },
    "BJ": {
        "message": "ベニン"
    },
    "BL": {
        "message": "サン・バルテルミー"
    },
    "BM": {
        "message": "バミューダ"
    },
    "BN": {
        "message": "ブルネイ"
    },
    "BO": {
        "message": "ボリビア"
    },
    "BQ": {
        "message": "イギリス領南極地域"
    },
    "BR": {
        "message": "ブラジル"
    },
    "BS": {
        "message": "バハマ"
    },
    "BT": {
        "message": "ブータン"
    },
    "BV": {
        "message": "ブーベ島"
    },
    "BW": {
        "message": "ボツワナ"
    },
    "BY": {
        "message": "ベラルーシ"
    },
    "BZ": {
        "message": "ベリーズ"
    },
    "Back to $1": {
        "message": "戻る$1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "iPhone / iPad用はいはいを取得する最初の - 今すぐ登録。"
    },
    "Browsing": {
        "message": "拾い読み"
    },
    "Buffering problems?": {
        "message": "バッファリングの問題？"
    },
    "Buffering?": {
        "message": "バッファリング？"
    },
    "CA": {
        "message": "カナダ"
    },
    "CC": {
        "message": "ココス (キーリング) 諸島"
    },
    "CD": {
        "message": "コンゴ民主共和国 (キンシャサ)"
    },
    "CF": {
        "message": "中央アフリカ共和国"
    },
    "CG": {
        "message": "コンゴ共和国 (ブラザビル)"
    },
    "CH": {
        "message": "スイス"
    },
    "CI": {
        "message": "コートジボワール"
    },
    "CK": {
        "message": "クック諸島"
    },
    "CL": {
        "message": "チリ"
    },
    "CM": {
        "message": "カメルーン"
    },
    "CN": {
        "message": "中国"
    },
    "CO": {
        "message": "コロンビア"
    },
    "CP": {
        "message": "クリッパートン島"
    },
    "CR": {
        "message": "コスタリカ"
    },
    "CS": {
        "message": "セルビア・モンテネグロ"
    },
    "CT": {
        "message": "カントンとエンダベリー諸島"
    },
    "CU": {
        "message": "キューバ"
    },
    "CV": {
        "message": "カーボベルデ"
    },
    "CX": {
        "message": "クリスマス島"
    },
    "CY": {
        "message": "キプロス"
    },
    "CZ": {
        "message": "チェコ共和国"
    },
    "Changing country...": {
        "message": "国を変更する..."
    },
    "Check out Hola for $1!": {
        "message": "$1のためにオラをチェックしてください！"
    },
    "Check out Hola for mobile devices": {
        "message": "モバイルデバイス用はいはいをチェック"
    },
    "Check your Internet connection": {
        "message": "インターネットに接続されていることを確認"
    },
    "Choose<br>Country": {
        "message": "選ぶ<br>国"
    },
    "Configuring...": {
        "message": "設定..."
    },
    "Connecting...": {
        "message": "接続しています..."
    },
    "Cool site!": {
        "message": "クールサイト！"
    },
    "Creative licenses": {
        "message": "クリエイティブライセンス"
    },
    "DD": {
        "message": "東ドイツ"
    },
    "DE": {
        "message": "ドイツ"
    },
    "DG": {
        "message": "ディエゴ・ガルシア"
    },
    "DJ": {
        "message": "ジブチ"
    },
    "DK": {
        "message": "デンマーク"
    },
    "DM": {
        "message": "ドミニカ国"
    },
    "DO": {
        "message": "ドミニカ共和国"
    },
    "DZ": {
        "message": "アルジェリア"
    },
    "Delete": {
        "message": "削除"
    },
    "Deleted from my list": {
        "message": "私のリストから削除"
    },
    "Did it work?": {
        "message": "それは動作しましたか？"
    },
    "Did you experience any buffering?": {
        "message": "あなたはどんなバッファリングを体験しましたか？"
    },
    "Disliked it": {
        "message": "それを気に入らなかった点"
    },
    "Don't show again for $1 for one week": {
        "message": "1週間の$1のために再度表示しない"
    },
    "Don't show again for any site for one week": {
        "message": "1週間分の任意のサイトのために再度表示しない"
    },
    "Downloading": {
        "message": "ダウンロード"
    },
    "EA": {
        "message": "セウタとメリリャ"
    },
    "EC": {
        "message": "エクアドル"
    },
    "EE": {
        "message": "エストニア"
    },
    "EG": {
        "message": "エジプト"
    },
    "EH": {
        "message": "西サハラ"
    },
    "ER": {
        "message": "エリトリア"
    },
    "ES": {
        "message": "スペイン"
    },
    "ET": {
        "message": "エチオピア"
    },
    "EU": {
        "message": "欧州連合"
    },
    "Enable": {
        "message": "有効にする"
    },
    "Enable Hola Accelerator": {
        "message": "はいはいアクセラレータを有効にする"
    },
    "Enjoy!": {
        "message": "お楽しみください！"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Chromeのためはいはいを楽しみますか？"
    },
    "Enter site to access": {
        "message": "アクセスにサイトを入力してください"
    },
    "Enter your email": {
        "message": "あなたのメールアドレスを入力"
    },
    "FI": {
        "message": "フィンランド"
    },
    "FJ": {
        "message": "フィジー"
    },
    "FK": {
        "message": "フォークランド諸島"
    },
    "FM": {
        "message": "ミクロネシア"
    },
    "FO": {
        "message": "フェロー諸島"
    },
    "FQ": {
        "message": "フランス領南方および南極領土"
    },
    "FR": {
        "message": "フランス"
    },
    "FX": {
        "message": "フランス本土"
    },
    "Fast": {
        "message": "ファスト"
    },
    "Finding new peers...": {
        "message": "新しい仲間を見つける..."
    },
    "Finding peers...": {
        "message": "ピアを発見する..."
    },
    "Free": {
        "message": "フリー"
    },
    "From": {
        "message": "から"
    },
    "Full list": {
        "message": "全リスト"
    },
    "GA": {
        "message": "ガボン"
    },
    "GB": {
        "message": "イギリス"
    },
    "GD": {
        "message": "グレナダ"
    },
    "GE": {
        "message": "グルジア"
    },
    "GF": {
        "message": "仏領ギアナ"
    },
    "GG": {
        "message": "ガーンジー"
    },
    "GH": {
        "message": "ガーナ"
    },
    "GI": {
        "message": "ジブラルタル"
    },
    "GL": {
        "message": "グリーンランド"
    },
    "GM": {
        "message": "ガンビア"
    },
    "GN": {
        "message": "ギニア"
    },
    "GP": {
        "message": "グアドループ"
    },
    "GQ": {
        "message": "赤道ギニア"
    },
    "GR": {
        "message": "ギリシャ"
    },
    "GS": {
        "message": "南ジョージア島・南サンドイッチ諸島"
    },
    "GT": {
        "message": "グアテマラ"
    },
    "GU": {
        "message": "グアム"
    },
    "GW": {
        "message": "ギニアビサウ"
    },
    "GY": {
        "message": "ガイアナ"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7ブロック解除を取得"
    },
    "Get Free Premium": {
        "message": "無料プレミアムを取得"
    },
    "Get Hola Accelerator": {
        "message": "はいはいアクセラレータを取得"
    },
    "Get Hola Player": {
        "message": "オラPlayerを入手"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "非中断、広告なしのサービスのためにオラPlusを入手してください。"
    },
    "Get Hola Premium": {
        "message": "はいはいプレミアムを取得"
    },
    "Get Hola for Android": {
        "message": "Android用はいはいを取得"
    },
    "Get Premium support": {
        "message": "プレミアムサポートを入手する"
    },
    "Get Unlimited Unblocking": {
        "message": "無制限のブロック解除を取得"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "検閲サイトへのアクセスを取得し、今それを試してください：$1"
    },
    "Get help from engineer over Skype:": {
        "message": "Skype でエンジニアからの助けを得る："
    },
    "Get the Fastest Servers": {
        "message": "最速のサーバーを取得"
    },
    "Go": {
        "message": "行く"
    },
    "Go Hola Premium": {
        "message": "はいはいプレミアムに行く"
    },
    "HK": {
        "message": "中華人民共和国香港特別行政区"
    },
    "HM": {
        "message": "ハード島・マクドナルド諸島"
    },
    "HN": {
        "message": "ホンジュラス"
    },
    "HR": {
        "message": "クロアチア"
    },
    "HT": {
        "message": "ハイチ"
    },
    "HU": {
        "message": "ハンガリー"
    },
    "Hate it": {
        "message": "それを嫌います"
    },
    "Help": {
        "message": "助け"
    },
    "Hey,\n\nI'm using": {
        "message": "ねえ、\n\n私が使用しています"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "こんにちは、\n\n私は$1（$2）を使い始めた。それは私がより速くネットサーフィンし、私の国では$3にアクセスできます。"
    },
    "Hola": {
        "message": "はいはい"
    },
    "Hola Accelerator": {
        "message": "はいはいアクセラレータ"
    },
    "Hola Media Player": {
        "message": "オラメディアプレイヤー"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "別の拡張がプロキシ設定を制御しているので、オラは働くことができない。"
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "オラは、Windows 8のモードではうまく動作しません。デスクトップモードに切り替えてください。手順について<a>ここをクリック</a>し"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "オラは今使用できませんが、私たちはそれに取り組んでいる。"
    },
    "Hola is off, click it to turn it on": {
        "message": "オラがオフで、オンにするをクリック"
    },
    "Hola site list": {
        "message": "アンブロックサイト一覧"
    },
    "I can now access $1 from any country!": {
        "message": "私は今、どの国から$1にアクセスすることができます！"
    },
    "I did not experience any buffering": {
        "message": "私はすべてのバッファリングを経験していない"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "私はちょうど$1のためにオラを使用して検閲サイトにアクセス！"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "私は私の国では$2を表示するには、$1を使用して、より高速なネットサーフィンしています！"
    },
    "IC": {
        "message": "カナリア諸島"
    },
    "ID": {
        "message": "インドネシア"
    },
    "IE": {
        "message": "アイルランド"
    },
    "IL": {
        "message": "イスラエル"
    },
    "IM": {
        "message": "マン島"
    },
    "IN": {
        "message": "インド"
    },
    "IO": {
        "message": "英領インド洋植民地"
    },
    "IQ": {
        "message": "イラク"
    },
    "IR": {
        "message": "イラン"
    },
    "IS": {
        "message": "アイスランド"
    },
    "IT": {
        "message": "イタリア"
    },
    "Improve translation": {
        "message": "翻訳を向上させる"
    },
    "Initializing...": {
        "message": "初期化中..."
    },
    "Install": {
        "message": "インストール"
    },
    "Install Accelerator": {
        "message": "アクセラレータをインストール"
    },
    "Install Free Hola Accelerator": {
        "message": "無料はいはいアクセラレータをインストール"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "無料はいはいを引き続き使用するはいはいエンジンをインストールします。"
    },
    "Instantly watch any torrent Video": {
        "message": "瞬時に任意のTorrentビデオを見る"
    },
    "Invite friends - free Premium.": {
        "message": "友達を招待 - 無料プレミアム。"
    },
    "Invite friends. Get Premium.": {
        "message": "友達を招待。プレミアムを入手してください。"
    },
    "It was okay": {
        "message": "それは大丈夫でした"
    },
    "JE": {
        "message": "ジャージー"
    },
    "JM": {
        "message": "ジャマイカ"
    },
    "JO": {
        "message": "ヨルダン"
    },
    "JP": {
        "message": "日本"
    },
    "JT": {
        "message": "ジョンストン島"
    },
    "KE": {
        "message": "ケニア"
    },
    "KG": {
        "message": "キルギスタン"
    },
    "KH": {
        "message": "カンボジア"
    },
    "KI": {
        "message": "キリバス"
    },
    "KM": {
        "message": "コモロ"
    },
    "KN": {
        "message": "セントクリストファー・ネイビス"
    },
    "KP": {
        "message": "朝鮮民主主義人民共和国"
    },
    "KR": {
        "message": "大韓民国"
    },
    "KW": {
        "message": "クウェート"
    },
    "KY": {
        "message": "ケイマン諸島"
    },
    "KZ": {
        "message": "カザフスタン"
    },
    "LA": {
        "message": "ラオス"
    },
    "LB": {
        "message": "レバノン"
    },
    "LC": {
        "message": "セントルシア"
    },
    "LI": {
        "message": "リヒテンシュタイン"
    },
    "LK": {
        "message": "スリランカ"
    },
    "LR": {
        "message": "リベリア"
    },
    "LS": {
        "message": "レソト"
    },
    "LT": {
        "message": "リトアニア"
    },
    "LU": {
        "message": "ルクセンブルグ"
    },
    "LV": {
        "message": "ラトビア"
    },
    "LY": {
        "message": "リビア"
    },
    "Language": {
        "message": "言語："
    },
    "Library": {
        "message": "ライブラリ"
    },
    "Like it": {
        "message": "それのような"
    },
    "Loading": {
        "message": "読み込み中"
    },
    "Loading site...": {
        "message": "読み込み中"
    },
    "Log in": {
        "message": "ログイン"
    },
    "Log out": {
        "message": "ログアウト"
    },
    "Love Hola?": {
        "message": "はいはいが好き？"
    },
    "Love it": {
        "message": "大好きです"
    },
    "MA": {
        "message": "モロッコ"
    },
    "MC": {
        "message": "モナコ"
    },
    "MD": {
        "message": "モルドバ"
    },
    "ME": {
        "message": "モンテネグロ"
    },
    "MF": {
        "message": "セント・マーチン"
    },
    "MG": {
        "message": "マダガスカル"
    },
    "MH": {
        "message": "マーシャル諸島共和国"
    },
    "MI": {
        "message": "ミッドウェー諸島"
    },
    "MK": {
        "message": "マケドニア"
    },
    "ML": {
        "message": "マリ"
    },
    "MM": {
        "message": "ミャンマー"
    },
    "MN": {
        "message": "モンゴル"
    },
    "MO": {
        "message": "中華人民共和国マカオ特別行政区"
    },
    "MP": {
        "message": "北マリアナ諸島"
    },
    "MQ": {
        "message": "マルティニーク島"
    },
    "MR": {
        "message": "モーリタニア"
    },
    "MS": {
        "message": "モントセラト島"
    },
    "MT": {
        "message": "マルタ"
    },
    "MU": {
        "message": "モーリシャス"
    },
    "MV": {
        "message": "モルジブ"
    },
    "MW": {
        "message": "マラウィ"
    },
    "MX": {
        "message": "メキシコ"
    },
    "MY": {
        "message": "マレーシア"
    },
    "MZ": {
        "message": "モザンビーク"
    },
    "Make your Internet better with $1": {
        "message": "$1であなたのインターネットをより良くする"
    },
    "Menu": {
        "message": "メニュー"
    },
    "Might not work on all sites": {
        "message": "すべてのサイトでは動作しない場合があります"
    },
    "Mode": {
        "message": "モード"
    },
    "More countries": {
        "message": "さらに多くの国"
    },
    "More sites...": {
        "message": "もっと..."
    },
    "More...": {
        "message": "もっと..."
    },
    "My Account": {
        "message": "マイアカウント"
    },
    "My History": {
        "message": "私の歴史"
    },
    "My Settings": {
        "message": "私の設定"
    },
    "My favorites": {
        "message": "お気に入り"
    },
    "NA": {
        "message": "ナミビア"
    },
    "NC": {
        "message": "ニューカレドニア"
    },
    "NE": {
        "message": "ニジェール"
    },
    "NF": {
        "message": "ノーフォーク島"
    },
    "NG": {
        "message": "ナイジェリア"
    },
    "NI": {
        "message": "ニカラグア"
    },
    "NL": {
        "message": "オランダ"
    },
    "NO": {
        "message": "ノルウェー"
    },
    "NP": {
        "message": "ネパール"
    },
    "NQ": {
        "message": "ドロンイングモードランド"
    },
    "NR": {
        "message": "ナウル"
    },
    "NT": {
        "message": "ニュートラルゾーン"
    },
    "NU": {
        "message": "ニウエ島"
    },
    "NZ": {
        "message": "ニュージーランド"
    },
    "Need Help?": {
        "message": "ヘルプが必要ですか？"
    },
    "Netflix": {
        "message": "ネットフリックス"
    },
    "Never ask me again": {
        "message": "再び私に尋ねることはありません"
    },
    "Never be a peer": {
        "message": "ピアになることはありません"
    },
    "No": {
        "message": "いいえ"
    },
    "No idle peers found.": {
        "message": "アイドルピアが見つかりませんでした。"
    },
    "No recent videos found": {
        "message": "最近の動画が見つかりませんでした"
    },
    "No saved videos found": {
        "message": "いいえ保存された動画が見つかりませんでした"
    },
    "No title": {
        "message": "タイトルなし"
    },
    "No videos found": {
        "message": "動画が見つかりませんでした"
    },
    "No videos found on active page": {
        "message": "動画アクティブなページにありません"
    },
    "No, Thanks": {
        "message": "いや、いいよ"
    },
    "No, fix it": {
        "message": "いいえ、それを修正"
    },
    "Not working?": {
        "message": "動作しない？"
    },
    "Number of users that pressed not working": {
        "message": "働いていない押さユーザー数"
    },
    "Number of users that use this option": {
        "message": "このオプションを使用するユーザーの数"
    },
    "OM": {
        "message": "オマーン"
    },
    "Off": {
        "message": "オフ"
    },
    "Oh, yes!": {
        "message": "はい、ああ！"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefoxの古いバージョンの。プレス<a>ここ</a>をアップグレードする。"
    },
    "On": {
        "message": "オン"
    },
    "Open Media Player": {
        "message": "オープンメディアプレイヤー"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "私たちのブランドニューMPlayerはすぐに来ている！"
    },
    "PA": {
        "message": "パナマ"
    },
    "PC": {
        "message": "太平洋諸島信託統治地域"
    },
    "PE": {
        "message": "ペルー"
    },
    "PF": {
        "message": "仏領ポリネシア"
    },
    "PG": {
        "message": "パプアニューギニア"
    },
    "PH": {
        "message": "フィリピン"
    },
    "PK": {
        "message": "パキスタン"
    },
    "PL": {
        "message": "ポーランド"
    },
    "PM": {
        "message": "サンピエール島・ミクロン島"
    },
    "PN": {
        "message": "ピトケアン島"
    },
    "PR": {
        "message": "プエルトリコ"
    },
    "PS": {
        "message": "パレスチナ領土"
    },
    "PT": {
        "message": "ポルトガル"
    },
    "PU": {
        "message": "米国その他の太平洋諸島"
    },
    "PW": {
        "message": "パラオ"
    },
    "PY": {
        "message": "パラグアイ"
    },
    "PZ": {
        "message": "パナマ運河地帯"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "あなたはなど、広告ブロッカー、他のVPNサービスなど、プロキシ設定を制御するかもしれないと思う他の<a>拡張</a>機能を無効にしてください"
    },
    "Please enter a valid email address.": {
        "message": "有効なメールアドレスを入力してください。"
    },
    "Please enter a web site address, like facebook.com": {
        "message": "facebook.comのように、Webサイトのアドレスを入力してください。"
    },
    "Please help us get better": {
        "message": "私たちが良く助けてください"
    },
    "Popular in $1": {
        "message": "$1でも人気"
    },
    "Popular in the world": {
        "message": "世界で人気"
    },
    "Popular sites": {
        "message": "人気サイト"
    },
    "Premium": {
        "message": "プレミアム"
    },
    "QA": {
        "message": "カタール"
    },
    "QO": {
        "message": "辺境オセアニア"
    },
    "RE": {
        "message": "レユニオン島"
    },
    "RO": {
        "message": "ルーマニア"
    },
    "RS": {
        "message": "セルビア"
    },
    "RU": {
        "message": "ロシア"
    },
    "RW": {
        "message": "ルワンダ"
    },
    "Rate us": {
        "message": "私たちを評価します"
    },
    "Recent Videos": {
        "message": "最近の動画"
    },
    "Reload": {
        "message": "リロード"
    },
    "Reload Hola": {
        "message": "Hola をリロード"
    },
    "Remember server": {
        "message": "サーバーを覚えている"
    },
    "Report a problem": {
        "message": "問題を報告する"
    },
    "Retry safe mode": {
        "message": "セーフモードを再試行"
    },
    "SA": {
        "message": "サウジアラビア"
    },
    "SB": {
        "message": "ソロモン諸島"
    },
    "SC": {
        "message": "セーシェル"
    },
    "SD": {
        "message": "スーダン"
    },
    "SE": {
        "message": "スウェーデン"
    },
    "SG": {
        "message": "シンガポール"
    },
    "SH": {
        "message": "セントヘレナ"
    },
    "SI": {
        "message": "スロベニア"
    },
    "SJ": {
        "message": "スバールバル諸島・ヤンマイエン島"
    },
    "SK": {
        "message": "スロバキア"
    },
    "SL": {
        "message": "シエラレオネ"
    },
    "SM": {
        "message": "サンマリノ"
    },
    "SN": {
        "message": "セネガル"
    },
    "SO": {
        "message": "ソマリア"
    },
    "SR": {
        "message": "スリナム"
    },
    "ST": {
        "message": "サントメ・プリンシペ"
    },
    "SU": {
        "message": "ソビエト社会主義共和国連邦"
    },
    "SV": {
        "message": "エルサルバドル"
    },
    "SY": {
        "message": "シリア"
    },
    "SZ": {
        "message": "スワジランド"
    },
    "Safe": {
        "message": "セーフ"
    },
    "Safe mode": {
        "message": "セーフ・モード"
    },
    "Save": {
        "message": "保存"
    },
    "Saved Videos": {
        "message": "保存された動画"
    },
    "Saved for later": {
        "message": "後でのために保存"
    },
    "Search video title": {
        "message": "検索ビデオタイトル"
    },
    "Select a Country": {
        "message": "国を選択"
    },
    "Select site to unblock": {
        "message": "ブロックを解除するために、サイトを選択"
    },
    "Server saved!": {
        "message": "サーバは、保存された！"
    },
    "Set safe mode for $1 $2": {
        "message": "$1 $2のための安全なモードを設定します"
    },
    "Settings": {
        "message": "設定"
    },
    "Share": {
        "message": "シェア"
    },
    "Share $1 on $2": {
        "message": "$2で$1を共有"
    },
    "Share $1 via $2": {
        "message": "$2を経由して$1を共有"
    },
    "Share with friends!": {
        "message": "友達と共有！"
    },
    "Sign up": {
        "message": "登録"
    },
    "Solve buffering": {
        "message": "バッファリングを解く"
    },
    "Solve buffering problems with": {
        "message": "とバッファリングの問題を解決"
    },
    "Solves it": {
        "message": "それを解決します"
    },
    "Staff Picks": {
        "message": "スタッフのお勧め"
    },
    "Start Hola": {
        "message": "開始"
    },
    "Starting...": {
        "message": "開始しています..."
    },
    "Stop Hola": {
        "message": "ストップオラ"
    },
    "Stopping peer routing...": {
        "message": "ピアのルーティングを停止しています..."
    },
    "Stream": {
        "message": "ストリーム"
    },
    "Stream Instantly": {
        "message": "即座にストリーム"
    },
    "Submit": {
        "message": "提出する"
    },
    "Support Hola": {
        "message": "Hola を支援"
    },
    "TA": {
        "message": "トリスタン・ダ・クーニャ"
    },
    "TC": {
        "message": "タークス諸島・カイコス諸島"
    },
    "TD": {
        "message": "チャド"
    },
    "TF": {
        "message": "フランス領極南諸島"
    },
    "TG": {
        "message": "トーゴ"
    },
    "TH": {
        "message": "タイ"
    },
    "TJ": {
        "message": "タジキスタン"
    },
    "TK": {
        "message": "トケラウ諸島"
    },
    "TL": {
        "message": "東ティモール"
    },
    "TM": {
        "message": "トルクメニスタン"
    },
    "TN": {
        "message": "チュニジア"
    },
    "TO": {
        "message": "トンガ"
    },
    "TR": {
        "message": "トルコ"
    },
    "TT": {
        "message": "トリニダード・トバゴ"
    },
    "TV": {
        "message": "ツバル"
    },
    "TW": {
        "message": "台湾"
    },
    "TZ": {
        "message": "タンザニア"
    },
    "Talk to us on $1": {
        "message": "$1で私たちに相談して"
    },
    "Tell friends about $1": {
        "message": "友人を約$1に知らせる"
    },
    "Testing connection...": {
        "message": "テスト接続..."
    },
    "Thank you!": {
        "message": "ありがとうございました！"
    },
    "There seems to be an error": {
        "message": "エラーが発生しました"
    },
    "Top popular sites": {
        "message": "トップ人気サイト"
    },
    "Translate to your language": {
        "message": "あなたの言語に翻訳"
    },
    "Try again": {
        "message": "再試行する"
    },
    "Try another server": {
        "message": "別のサーバを試す"
    },
    "Try it": {
        "message": "それをお試しください"
    },
    "Try safe mode": {
        "message": "セーフモードを試してみてください"
    },
    "Try to <span>reload</span>": {
        "message": "<span>リロードしてみてください</span>"
    },
    "Trying another peer...": {
        "message": "別のピアを試す..."
    },
    "Turn off Accelerator": {
        "message": "アクセラレータをオフにする"
    },
    "Turn off Hola": {
        "message": "オラの電源をオフに"
    },
    "Turn on Accelerator": {
        "message": "アクセラレータをオンにする"
    },
    "Turn on Hola": {
        "message": "オラの電源を入れます"
    },
    "Turn on to get started": {
        "message": "始めるためにオン"
    },
    "UA": {
        "message": "ウクライナ"
    },
    "UG": {
        "message": "ウガンダ"
    },
    "UM": {
        "message": "米領太平洋諸島"
    },
    "US": {
        "message": "アメリカ合衆国"
    },
    "UY": {
        "message": "ウルグアイ"
    },
    "UZ": {
        "message": "ウズベキスタン"
    },
    "Unblocker": {
        "message": "アンブロック"
    },
    "Unblocker is disabled": {
        "message": "アンブロックが無効になっています"
    },
    "Unblocker?": {
        "message": "閉塞除去？"
    },
    "Update": {
        "message": "アップデート"
    },
    "Upgrade": {
        "message": "アップグレード"
    },
    "Using": {
        "message": "使い方"
    },
    "Using Hola": {
        "message": "はいはいを使用した"
    },
    "VA": {
        "message": "バチカン市国"
    },
    "VC": {
        "message": "セントビンセント・グレナディーン諸島"
    },
    "VD": {
        "message": "北ベトナム"
    },
    "VE": {
        "message": "ベネズエラ"
    },
    "VG": {
        "message": "イギリス領ヴァージン諸島"
    },
    "VI": {
        "message": "アメリカ領ヴァージン諸島"
    },
    "VN": {
        "message": "ベトナム"
    },
    "VPN Premium": {
        "message": "VPNのプレミアム"
    },
    "VU": {
        "message": "バヌアツ"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome のバージョンが古すぎます。Hola を利用するために <a>Chrome をアップデート</a>してください。"
    },
    "Video": {
        "message": "ビデオ"
    },
    "Video stuck?": {
        "message": "ビデオが立ち往生？"
    },
    "Videos available for instant streaming": {
        "message": "インスタントストリーミングに利用できるビデオ"
    },
    "WF": {
        "message": "ウォリス・フツナ"
    },
    "WK": {
        "message": "ウェーク島"
    },
    "WS": {
        "message": "サモア"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "他のデバイス（Xbox、PS、Apple TV、iPhone ...）でも Hola を利用できます。"
    },
    "Want to know more?": {
        "message": "もっと知りたいですか？"
    },
    "Watch Now": {
        "message": "今すぐ見る"
    },
    "We found $1 videos": {
        "message": "私たちは、$1 動画を見つけました"
    },
    "We will be in touch with you soon": {
        "message": "私たちはあなたとすぐに連絡させていただき"
    },
    "Working!": {
        "message": "WORKING！"
    },
    "Working?": {
        "message": "働いてるの？"
    },
    "Works on all sites but slower": {
        "message": "すべてのサイトの作品より遅いです"
    },
    "YD": {
        "message": "イエメン人民民主共和国"
    },
    "YE": {
        "message": "イエメン"
    },
    "YT": {
        "message": "マヨット島"
    },
    "Yes": {
        "message": "はい"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "あなたは、はいはいを使用するには、Operaの最新バージョンにアップグレードする必要があります。を押して<a>、ここで</a>アップグレードする。"
    },
    "Youtube": {
        "message": "ユーチューブ"
    },
    "ZA": {
        "message": "南アフリカ"
    },
    "ZM": {
        "message": "ザンビア"
    },
    "ZW": {
        "message": "ジンバブエ"
    },
    "ZZ": {
        "message": "不明な地域"
    },
    "app_desc": {
        "message": "オラとあなたの国、会社や学校でブロックされたアクセスのウェブサイト！オラは、無料で使いやすい！"
    },
    "app_name": {
        "message": "はいはいより良いインターネット"
    },
    "back to": {
        "message": "戻す"
    },
    "changing...": {
        "message": "変化..."
    },
    "cool sites": {
        "message": "クールサイト"
    },
    "current site": {
        "message": "現在のサイト"
    },
    "day": {
        "message": "日"
    },
    "days": {
        "message": "日"
    },
    "even more...": {
        "message": "さらに..."
    },
    "mode": {
        "message": "モード"
    },
    "more options...": {
        "message": "コスメ"
    },
    "not working?": {
        "message": "動作していない？"
    },
    "not working? try another server": {
        "message": "動作していない？別のサーバを試す"
    },
    "on this page": {
        "message": "このページの"
    },
    "sites that are censored": {
        "message": "検閲されているサイト"
    },
    "start": {
        "message": "開始"
    },
    "working? remember": {
        "message": "働いてるの？覚えている"
    }
};
return E; });