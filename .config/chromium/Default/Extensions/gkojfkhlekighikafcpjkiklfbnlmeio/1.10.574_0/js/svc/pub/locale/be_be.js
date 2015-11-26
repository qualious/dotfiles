'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " праз "
    },
    "$1 Buffering?": {
        "message": "Буферызацыі $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola атрымаць доступ да $2 Націсніце тут, каб зрабіць тое ж самае: $3 Ён ўсталёўвае Hola, які дазваляе мне падарожнічаць па Інтэрнэце хутчэй і доступ да $4 $5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN Прэміум"
    },
    "$1 from $2": {
        "message": "$1 ад $2"
    },
    "$1 not found": {
        "message": "$1 не знойдзены"
    },
    "$1 via Hola": {
        "message": "$1 з дапамогай Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Некаторыя Hola функцыі могуць быць недаступныя на вашым версія)"
    },
    "AC": {
        "message": "Востраў Ушэсця"
    },
    "AD": {
        "message": "Андора"
    },
    "AE": {
        "message": "Аб'яднаныя Арабскія Эміраты"
    },
    "AF": {
        "message": "Афганістан"
    },
    "AG": {
        "message": "Антыгуа і Барбуда"
    },
    "AI": {
        "message": "Ангуілля"
    },
    "AL": {
        "message": "Албанія"
    },
    "AM": {
        "message": "Арменія"
    },
    "AN": {
        "message": "Нідэрландскія Антылы"
    },
    "AO": {
        "message": "Ангола"
    },
    "AQ": {
        "message": "Антарктыка"
    },
    "AR": {
        "message": "Аргенціна"
    },
    "AS": {
        "message": "Амерыканскае Самоа"
    },
    "AT": {
        "message": "Аўстрыя"
    },
    "AU": {
        "message": "Аўстралія"
    },
    "AW": {
        "message": "Аруба"
    },
    "AX": {
        "message": "Аландскія астравы"
    },
    "AZ": {
        "message": "Азербайджан"
    },
    "About": {
        "message": "Аб"
    },
    "About Hola": {
        "message": "Аб Hola"
    },
    "Accelerator": {
        "message": "Паскаральнік"
    },
    "Accelerator is": {
        "message": "Паскаральнік"
    },
    "Access $1 - cool site!": {
        "message": "Доступ $1 - класны сайт!"
    },
    "Access $1?": {
        "message": "Доступ $1?"
    },
    "Access any site from any country, free": {
        "message": "Доступу да любога сайту з любой краіны, бясплатна"
    },
    "Access cool sites": {
        "message": "Доступу халаднавата сайты"
    },
    "Access more sites": {
        "message": "Доступу больш сайтаў"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Доступ да сайтаў цэнзуру ў вашай краіне і паскорыць ваш Інтэрнэт з Hola - бясплатна!"
    },
    "Accessing $1 with Hola": {
        "message": "Доступ $1 з Hola"
    },
    "Account": {
        "message": "Кошт"
    },
    "Account type": {
        "message": "Тып рахунку"
    },
    "Activating...": {
        "message": "Актывацыя..."
    },
    "All ($1)": {
        "message": "Усе ($1)"
    },
    "Apply settings...": {
        "message": "Прымяніць налады ..."
    },
    "Author site:": {
        "message": "Аўтар сайта:"
    },
    "Author:": {
        "message": "Аўтар:"
    },
    "Awesome!": {
        "message": "Цудоўна!"
    },
    "BA": {
        "message": "Боснія і Герцагавіна"
    },
    "BB": {
        "message": "Барбадас"
    },
    "BD": {
        "message": "Бангладэш"
    },
    "BE": {
        "message": "Бельгія"
    },
    "BF": {
        "message": "Буркіна-Фасо"
    },
    "BG": {
        "message": "Балгарыя"
    },
    "BH": {
        "message": "Бахрэйн"
    },
    "BI": {
        "message": "Бурундзі"
    },
    "BJ": {
        "message": "Бенін"
    },
    "BL": {
        "message": "Сен-Бартэльмі"
    },
    "BM": {
        "message": "Бермудскія астравы"
    },
    "BN": {
        "message": "Бруней-Дарусалам"
    },
    "BO": {
        "message": "Балівія"
    },
    "BQ": {
        "message": "Брытанская Антарктычная тэрыторыя"
    },
    "BR": {
        "message": "Бразілія"
    },
    "BS": {
        "message": "Багамскія Астравы"
    },
    "BT": {
        "message": "Бутан"
    },
    "BV": {
        "message": "Бувэ востраў"
    },
    "BW": {
        "message": "Батсвана"
    },
    "BY": {
        "message": "Беларусь"
    },
    "BZ": {
        "message": "Беліз"
    },
    "Back to $1": {
        "message": "Вярнуцца да $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Будзьце першым, каб атрымаць Hola для IPhone/IPad - Зарэгіструйцеся зараз:"
    },
    "Browsing": {
        "message": "Прагляд"
    },
    "Buffering problems?": {
        "message": "Праблемы буферызацыі?"
    },
    "Buffering?": {
        "message": "Буферызацыя?"
    },
    "CA": {
        "message": "Канада"
    },
    "CC": {
        "message": "Какосавыя астравы"
    },
    "CD": {
        "message": "Конга, Дэмакратычная Рэспубліка"
    },
    "CF": {
        "message": "Цэнтральна-Афрыканская Рэспубліка"
    },
    "CG": {
        "message": "Конга"
    },
    "CH": {
        "message": "Швейцарыя"
    },
    "CI": {
        "message": "Бераг Слановай Косці"
    },
    "CK": {
        "message": "Кука астравы"
    },
    "CL": {
        "message": "Чылі"
    },
    "CM": {
        "message": "Камерун"
    },
    "CN": {
        "message": "Кітай"
    },
    "CO": {
        "message": "Калумбія"
    },
    "CP": {
        "message": "Клиппертон"
    },
    "CR": {
        "message": "Коста-Рыка"
    },
    "CS": {
        "message": "Сербія і Чарнагорыя"
    },
    "CT": {
        "message": "Кантон і Эндербери"
    },
    "CU": {
        "message": "Куба"
    },
    "CV": {
        "message": "Каба-Вердэ"
    },
    "CX": {
        "message": "Калядаў востраў"
    },
    "CY": {
        "message": "Кіпр"
    },
    "CZ": {
        "message": "Чэхія"
    },
    "Changing country...": {
        "message": "Змена краіну ..."
    },
    "Check out Hola for $1!": {
        "message": "Праверце Hola за $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Праверце Hola для мабільных прылад"
    },
    "Check your Internet connection": {
        "message": "Пераканайцеся, у вас ёсць інтэрнэт"
    },
    "Choose<br>Country": {
        "message": "Выбіраць <br> Краіна"
    },
    "Configuring...": {
        "message": "Налада ..."
    },
    "Connecting...": {
        "message": "Падлучэнне ..."
    },
    "Cool site!": {
        "message": "Прахладны сайт!"
    },
    "Creative licenses": {
        "message": "Творчыя ліцэнзіі"
    },
    "DD": {
        "message": "Усходняя Германія"
    },
    "DE": {
        "message": "Германія"
    },
    "DG": {
        "message": "Дыега-Гарсія"
    },
    "DJ": {
        "message": "Джыбуці"
    },
    "DK": {
        "message": "Данія"
    },
    "DM": {
        "message": "Дамініка"
    },
    "DO": {
        "message": "Дамініканская Рэспубліка"
    },
    "DZ": {
        "message": "Алжыр"
    },
    "Delete": {
        "message": "Выдаляць"
    },
    "Deleted from my list": {
        "message": "Аддаленыя ад майго спісу"
    },
    "Did it work?": {
        "message": "Гэта спрацавала?"
    },
    "Did you experience any buffering?": {
        "message": "Ці ўзнікалі ў вас якой-небудзь буферызацыі?"
    },
    "Disliked it": {
        "message": "Не спадабалася гэта"
    },
    "Don't show again for $1 for one week": {
        "message": "Больш не паказваць за $1 на працягу аднаго тыдня"
    },
    "Don't show again for any site for one week": {
        "message": "Больш не паказваць для любога сайта на працягу аднаго тыдня"
    },
    "Downloading": {
        "message": "Загрузка"
    },
    "EA": {
        "message": "Сеўта і Мелілья"
    },
    "EC": {
        "message": "Эквадор"
    },
    "EE": {
        "message": "Эстонія"
    },
    "EG": {
        "message": "Егіпет"
    },
    "EH": {
        "message": "Заходняя Сахара"
    },
    "ER": {
        "message": "Эрытрэя"
    },
    "ES": {
        "message": "Іспанія"
    },
    "ET": {
        "message": "Эфіопія"
    },
    "EU": {
        "message": "Еўрасаюз"
    },
    "Enable": {
        "message": "Ўключыць"
    },
    "Enable Hola Accelerator": {
        "message": "Ўключыць Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Атрымлівайце асалоду ад!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Глядзім Hola для Chrome?"
    },
    "Enter site to access": {
        "message": "Уваход на сайт для доступу"
    },
    "Enter your email": {
        "message": "Калі ласка, увядзіце адрас электроннай пошты"
    },
    "FI": {
        "message": "Фінляндыя"
    },
    "FJ": {
        "message": "Фіджы"
    },
    "FK": {
        "message": "Фолклэндскія астравы"
    },
    "FM": {
        "message": "Мікранезія"
    },
    "FO": {
        "message": "Фарэрскія выспы"
    },
    "FQ": {
        "message": "Французскія Паўднёвыя і Антарктычныя Тэрыторыі"
    },
    "FR": {
        "message": "Францыя"
    },
    "FX": {
        "message": "Мітрапаліт Францыя"
    },
    "Fast": {
        "message": "Хутка"
    },
    "Finding new peers...": {
        "message": "Пошук новых калегаў ..."
    },
    "Finding peers...": {
        "message": "Пошук аднагодкаў ..."
    },
    "Free": {
        "message": "Бясплатна"
    },
    "From": {
        "message": "Ад"
    },
    "Full list": {
        "message": "Поўны спіс"
    },
    "GA": {
        "message": "Габон"
    },
    "GB": {
        "message": "Велікабрытанія"
    },
    "GD": {
        "message": "Грэнада"
    },
    "GE": {
        "message": "Грузія"
    },
    "GF": {
        "message": "Французская Гвіяна"
    },
    "GG": {
        "message": "Ваўняная фуфайка"
    },
    "GH": {
        "message": "Гана"
    },
    "GI": {
        "message": "Гібралтар"
    },
    "GL": {
        "message": "Грэнландыя"
    },
    "GM": {
        "message": "Гамбія"
    },
    "GN": {
        "message": "Гвінея"
    },
    "GP": {
        "message": "Гвадэлупа"
    },
    "GQ": {
        "message": "Экватарыяльная Гвінея"
    },
    "GR": {
        "message": "Грэцыя"
    },
    "GS": {
        "message": "Паўднёвая Джорджыя і Паўднёвыя Сандвічавы астравы"
    },
    "GT": {
        "message": "Гватэмала"
    },
    "GU": {
        "message": "Гуам"
    },
    "GW": {
        "message": "Гвінея-Бісаў"
    },
    "GY": {
        "message": "Гаяна"
    },
    "Get 24/7 Unblocking": {
        "message": "Атрымаць 24/7 разблакавання"
    },
    "Get Free Premium": {
        "message": "Атрымаць Бясплатна Premium"
    },
    "Get Hola Accelerator": {
        "message": "Атрымаць Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Атрымаць Hola гульца"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Атрымаць Hola плюс для якіх-небудзь перабояў, AD-бясплатная паслуга."
    },
    "Get Hola Premium": {
        "message": "Атрымаць Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Атрымаць Hola для Android"
    },
    "Get Premium support": {
        "message": "Атрымаць Прэміум падтрымку"
    },
    "Get Unlimited Unblocking": {
        "message": "Атрымаць неабмежаваны разблакавання"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Атрымаць доступ да цэнзуры сайтаў, паспрабуйце зараз: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Атрымаеце дапамогу ад інжынера па Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Атрымаеце хуткі сервераў"
    },
    "Go": {
        "message": "Перайсці"
    },
    "Go Hola Premium": {
        "message": "Перайсці Hola Прэміум"
    },
    "HK": {
        "message": "Гон-Конг, Кітай (САР)"
    },
    "HM": {
        "message": "Гэрда востраў і МакДоналда астравы"
    },
    "HN": {
        "message": "Гандурас"
    },
    "HR": {
        "message": "Харватыя"
    },
    "HT": {
        "message": "Гаіці"
    },
    "HU": {
        "message": "Венгрыя"
    },
    "Hate it": {
        "message": "Ненавіджу гэта"
    },
    "Help": {
        "message": "Дапамажыце"
    },
    "Hey,\n\nI'm using": {
        "message": "Эй,\n\nя выкарыстоўваю"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Прывітанне,\n\nя пачаў выкарыстоўваць $1 ($2). Гэта дазваляе мне падарожнічаць па Інтэрнэце хутчэй і доступ да $3 у маёй краіне."
    },
    "Hola Accelerator": {
        "message": "Hola акселератара"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola не можа працаваць, таму што іншы пашырэнне кантролю наладжвання проксі-сервера."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola не вельмі добра працуе ў рэжыме Windows 8. Пераключыцеся на рэжым працоўнага стала. Націсніце <a> тут </a> Інструкцыі"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola не даступная прама цяпер, але мы працуем над гэтым."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola выключаны, націсніце, каб уключыць"
    },
    "Hola site list": {
        "message": "Спіс Hola сайце"
    },
    "I can now access $1 from any country!": {
        "message": "Цяпер я магу адкрыць $1 з любой краіны!"
    },
    "I did not experience any buffering": {
        "message": "Я не адчуваў ніякіх буферызацыі"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Я проста звярталіся цэнзуры сайт, выкарыстоўваючы Hola за $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Я выкарыстоўваю $1, каб праглядаць $2 у маёй краіне, і падарожнічаць хутчэй!"
    },
    "IC": {
        "message": "Канарскія выспы"
    },
    "ID": {
        "message": "Інданезія"
    },
    "IE": {
        "message": "Ірландыя"
    },
    "IL": {
        "message": "Ізраіль"
    },
    "IM": {
        "message": "Востраў Мэн"
    },
    "IN": {
        "message": "Індыя"
    },
    "IO": {
        "message": "Брытанская тэрыторыя Індыйскага акіяну"
    },
    "IQ": {
        "message": "Ірак"
    },
    "IR": {
        "message": "Іран, Ісламская Рэспубліка"
    },
    "IS": {
        "message": "Ісландыя"
    },
    "IT": {
        "message": "Італія"
    },
    "Improve translation": {
        "message": "Паляпшэнне перакладу"
    },
    "Initializing...": {
        "message": "Ініцыялізацыя ..."
    },
    "Install": {
        "message": "Ўсталёўваць"
    },
    "Install Accelerator": {
        "message": "Усталюйце Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Ўсталяваць бясплатны Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Усталюйце Hola Рухавік працягваць выкарыстоўваць Hola бясплатна"
    },
    "Instantly watch any torrent Video": {
        "message": "Імгненна глядзець любы торэнт відэа"
    },
    "Invite friends - free Premium.": {
        "message": "Запрасіць сяброў - бясплатны Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Запрасіць сяброў. Атрымаць Premium."
    },
    "It was okay": {
        "message": "Гэта было добра"
    },
    "JE": {
        "message": "Джэрсі"
    },
    "JM": {
        "message": "Ямайка"
    },
    "JO": {
        "message": "Іарданія"
    },
    "JP": {
        "message": "Японія"
    },
    "JT": {
        "message": "Джонстан-Айлэнд"
    },
    "KE": {
        "message": "Кенія"
    },
    "KG": {
        "message": "Кыргызстан"
    },
    "KH": {
        "message": "Камбоджа"
    },
    "KI": {
        "message": "Кірыбаці"
    },
    "KM": {
        "message": "Каморскія Астравы"
    },
    "KN": {
        "message": "Сэнт-Кітс і Нэвіс"
    },
    "KP": {
        "message": "Паўночная Карэя"
    },
    "KR": {
        "message": "Паўднёвая Карэя"
    },
    "KW": {
        "message": "Кувейт"
    },
    "KY": {
        "message": "Кайманавы астравы"
    },
    "KZ": {
        "message": "Казахстан"
    },
    "LA": {
        "message": "Лаоская Народна-Дэмакратычная Рэспубліка"
    },
    "LB": {
        "message": "Ліван"
    },
    "LC": {
        "message": "Сэнт-Люсія"
    },
    "LI": {
        "message": "Ліхтэнштэйн"
    },
    "LK": {
        "message": "Шры-Ланка"
    },
    "LR": {
        "message": "Ліберыя"
    },
    "LS": {
        "message": "Лесота"
    },
    "LT": {
        "message": "Літва"
    },
    "LU": {
        "message": "Люксембург"
    },
    "LV": {
        "message": "Латвія"
    },
    "LY": {
        "message": "Лівійская Арабская Джамахірыя"
    },
    "Language": {
        "message": "Мова"
    },
    "Library": {
        "message": "Бібліятэка"
    },
    "Like it": {
        "message": "Падабаецца"
    },
    "Loading": {
        "message": "Загрузка"
    },
    "Loading site...": {
        "message": "Загрузка"
    },
    "Log in": {
        "message": "Увайсці"
    },
    "Log out": {
        "message": "Выйсці"
    },
    "Love Hola?": {
        "message": "Каханне Hola?"
    },
    "Love it": {
        "message": "Каханне гэта"
    },
    "MA": {
        "message": "Марока"
    },
    "MC": {
        "message": "Манака"
    },
    "MD": {
        "message": "Малдова"
    },
    "ME": {
        "message": "Чарнагорыя"
    },
    "MF": {
        "message": "Сен-Мартэн"
    },
    "MG": {
        "message": "Мадагаскар"
    },
    "MH": {
        "message": "Маршалавы Астравы"
    },
    "MI": {
        "message": "Мідўэй"
    },
    "MK": {
        "message": "Македонія, БЮР"
    },
    "ML": {
        "message": "Малі"
    },
    "MM": {
        "message": "М'янма"
    },
    "MN": {
        "message": "Манголія"
    },
    "MO": {
        "message": "Макао, Кітай (САР)"
    },
    "MP": {
        "message": "Паўночныя Марыянскія астравы"
    },
    "MQ": {
        "message": "Марцініка"
    },
    "MR": {
        "message": "Маўрытанія"
    },
    "MS": {
        "message": "Монсэрат"
    },
    "MT": {
        "message": "Мальта"
    },
    "MU": {
        "message": "Маўрыкій"
    },
    "MV": {
        "message": "Мальдыўскія Астравы"
    },
    "MW": {
        "message": "Малаві"
    },
    "MX": {
        "message": "Мексіка"
    },
    "MY": {
        "message": "Малайзія"
    },
    "MZ": {
        "message": "Мазамбік"
    },
    "Make your Internet better with $1": {
        "message": "Зрабіце ваш Інтэрнэт лепш з $1"
    },
    "Menu": {
        "message": "Меню"
    },
    "Might not work on all sites": {
        "message": "Можа не працаваць на ўсе сайты"
    },
    "Mode": {
        "message": "Рэжым"
    },
    "More countries": {
        "message": "Усё больш краін"
    },
    "More sites...": {
        "message": "больш ..."
    },
    "More...": {
        "message": "больш ..."
    },
    "My Account": {
        "message": "Мой рахунак"
    },
    "My History": {
        "message": "Мая гісторыя"
    },
    "My Settings": {
        "message": "Мае налады"
    },
    "My favorites": {
        "message": "Мае фаварыты"
    },
    "NA": {
        "message": "Намібія"
    },
    "NC": {
        "message": "Новая Каледонія"
    },
    "NE": {
        "message": "Нігер"
    },
    "NF": {
        "message": "Норфалкскія астравы"
    },
    "NG": {
        "message": "Нігерыя"
    },
    "NI": {
        "message": "Нікарагуа"
    },
    "NL": {
        "message": "Нідэрланды"
    },
    "NO": {
        "message": "Нарвегія"
    },
    "NP": {
        "message": "Непал"
    },
    "NQ": {
        "message": "Зямля Каралевы Мод"
    },
    "NR": {
        "message": "Науру"
    },
    "NT": {
        "message": "Нейтральная зона"
    },
    "NU": {
        "message": "Ніуэ"
    },
    "NZ": {
        "message": "Новая Зеландыя"
    },
    "Need Help?": {
        "message": "Патрэбна дапамога?"
    },
    "Never ask me again": {
        "message": "Ніколі не пытацца"
    },
    "Never be a peer": {
        "message": "Ніколі не быць аднагодкаў"
    },
    "No": {
        "message": "Няма"
    },
    "No idle peers found.": {
        "message": "Няма бяздзейныя баляў не знойдзена."
    },
    "No recent videos found": {
        "message": "Не знойдзена ні Апошнія відэа"
    },
    "No saved videos found": {
        "message": "Не знойдзена ні захаваныя відэа"
    },
    "No title": {
        "message": "Без назвы"
    },
    "No videos found": {
        "message": "Не знойдзеныя"
    },
    "No videos found on active page": {
        "message": "Няма вынікаў па актыўнай старонцы"
    },
    "No, Thanks": {
        "message": "Не, дзякуй"
    },
    "No, fix it": {
        "message": "Не, гэта выправіць"
    },
    "Not working?": {
        "message": "Не працуе?"
    },
    "Number of users that pressed not working": {
        "message": "Колькасць карыстальнікаў, націснутая не працуе"
    },
    "Number of users that use this option": {
        "message": "Колькасць карыстальнікаў, выкарыстоўваць гэтую опцыю"
    },
    "OM": {
        "message": "Аман"
    },
    "Off": {
        "message": "Выкл"
    },
    "Oh, yes!": {
        "message": "О, так!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Старая версія Firefox. Прэс <a>тут</a> для абнаўлення."
    },
    "On": {
        "message": "На"
    },
    "Open Media Player": {
        "message": "Адкрыць Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Наш новы Mplayer хутка!"
    },
    "PA": {
        "message": "Панама"
    },
    "PC": {
        "message": "Ціхаакіянскіх астравоў падапечная тэрыторыя"
    },
    "PE": {
        "message": "Перу"
    },
    "PF": {
        "message": "Франузская Палінэзія"
    },
    "PG": {
        "message": "Папуа-Новая Гвінея"
    },
    "PH": {
        "message": "Філіпіны"
    },
    "PK": {
        "message": "Пакістан"
    },
    "PL": {
        "message": "Польшча"
    },
    "PM": {
        "message": "Верасень-П&#39;ер і Міквэлон"
    },
    "PN": {
        "message": "Піткэрн"
    },
    "PR": {
        "message": "Пуэрта-Рыка"
    },
    "PS": {
        "message": "Палестынскія тэрыторыі"
    },
    "PT": {
        "message": "Партугалія"
    },
    "PU": {
        "message": "ЗША Рознае ціхаакіянскіх астравоў"
    },
    "PW": {
        "message": "Палаў"
    },
    "PY": {
        "message": "Парагвай"
    },
    "PZ": {
        "message": "Зона Панамскага канала"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Калі ласка, адключыце іншыя <a>пашырэння</a>, што вы думаеце, можа кантраляваць налады проксі-сервера, такія як пекла-блокаторы, іншыя паслугі VPN і г.д."
    },
    "Please enter a valid email address.": {
        "message": "Калі ласка, увядзіце дзеючы адрас электроннай пошты."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Калі ласка, увядзіце адрас вэб-сайта, як facebook.com"
    },
    "Please help us get better": {
        "message": "Калі ласка, дапамажыце нам стаць лепш"
    },
    "Popular in $1": {
        "message": "Папулярныя ў $1"
    },
    "Popular in the world": {
        "message": "Папулярныя ў свеце"
    },
    "Popular sites": {
        "message": "Папулярныя сайты"
    },
    "Premium": {
        "message": "Прэмія"
    },
    "QA": {
        "message": "Катар"
    },
    "QO": {
        "message": "Французкая Акіянія"
    },
    "RE": {
        "message": "Рэюньён"
    },
    "RO": {
        "message": "Румынія"
    },
    "RS": {
        "message": "Сербія"
    },
    "RU": {
        "message": "Расія"
    },
    "RW": {
        "message": "Руанда"
    },
    "Rate us": {
        "message": "Ацаніць нас"
    },
    "Recent Videos": {
        "message": "Апошнія відэа"
    },
    "Reload": {
        "message": "Перазагружаць"
    },
    "Reload Hola": {
        "message": "Абнавіць Hola"
    },
    "Remember server": {
        "message": "Запомніць сервер"
    },
    "Report a problem": {
        "message": "Паведаміць аб праблеме"
    },
    "Retry safe mode": {
        "message": "Паўтарыце бяспечны рэжым"
    },
    "SA": {
        "message": "Саудаўская Аравія"
    },
    "SB": {
        "message": "Саламонавы Астравы"
    },
    "SC": {
        "message": "Сейшэльскія Астравы"
    },
    "SD": {
        "message": "Судан"
    },
    "SE": {
        "message": "Швецыя"
    },
    "SG": {
        "message": "Сінгапур"
    },
    "SH": {
        "message": "Святой Алены, Востраў"
    },
    "SI": {
        "message": "Славенія"
    },
    "SJ": {
        "message": "Свальбард (Паўночна-Усходняя Зямля) і Ян-Маен"
    },
    "SK": {
        "message": "Славакія"
    },
    "SL": {
        "message": "Сьера-Леонэ"
    },
    "SM": {
        "message": "Сан - Марына"
    },
    "SN": {
        "message": "Сенегал"
    },
    "SO": {
        "message": "Самалі"
    },
    "SR": {
        "message": "Сурынам"
    },
    "ST": {
        "message": "Сан-Томэ і Прынсіпі"
    },
    "SU": {
        "message": "Саюз Савецкіх Сацыялістычных Рэспублік"
    },
    "SV": {
        "message": "Сальвадор"
    },
    "SY": {
        "message": "Сірыйская Арабская Рэспубліка"
    },
    "SZ": {
        "message": "Свазіленд"
    },
    "Safe": {
        "message": "Сейф"
    },
    "Safe mode": {
        "message": "Бяспечны рэжым"
    },
    "Save": {
        "message": "Захаваць"
    },
    "Saved Videos": {
        "message": "Захаваныя Відэа"
    },
    "Saved for later": {
        "message": "Захаваны для наступнага"
    },
    "Search video title": {
        "message": "Пошук відэа назву"
    },
    "Select a Country": {
        "message": "Абярыце краіну"
    },
    "Select site to unblock": {
        "message": "Выберыце сайт, каб разблакаваць"
    },
    "Server saved!": {
        "message": "Сервер выратаваны!"
    },
    "Set safe mode for $1 $2": {
        "message": "Усталюйце бяспечны рэжым для $1 $2"
    },
    "Settings": {
        "message": "Налады"
    },
    "Share": {
        "message": "Доля"
    },
    "Share $1 on $2": {
        "message": "Дайце $1 на $2"
    },
    "Share $1 via $2": {
        "message": "Дайце $1 з дапамогай $2"
    },
    "Share with friends!": {
        "message": "Падзяліся з сябрамі!"
    },
    "Sign up": {
        "message": "Зарэгістравацца"
    },
    "Solve buffering": {
        "message": "Вырашыце буферызацыі"
    },
    "Solve buffering problems with": {
        "message": "Рашэнне праблем буферызацыі з"
    },
    "Solves it": {
        "message": "Вырашае яе"
    },
    "Staff Picks": {
        "message": "Зорныя вайны"
    },
    "Start Hola": {
        "message": "пачатак"
    },
    "Starting...": {
        "message": "Starting ..."
    },
    "Stop Hola": {
        "message": "Стоп Hola"
    },
    "Stopping peer routing...": {
        "message": "Прыпынак аднагодкаў маршрутызацыю ..."
    },
    "Stream": {
        "message": "Паток"
    },
    "Stream Instantly": {
        "message": "Паток Імгненна"
    },
    "Submit": {
        "message": "Прадстаўляць"
    },
    "Support Hola": {
        "message": "Падтрымка Hola"
    },
    "TA": {
        "message": "Трыстан-да-Кунья"
    },
    "TC": {
        "message": "Тэркс і Кайкас астравы"
    },
    "TD": {
        "message": "Чад"
    },
    "TF": {
        "message": "Французскія Паўднёвыя тэрыторыі"
    },
    "TG": {
        "message": "Тога"
    },
    "TH": {
        "message": "Тайланд"
    },
    "TJ": {
        "message": "Таджыкістан"
    },
    "TK": {
        "message": "Такелаў"
    },
    "TL": {
        "message": "Усходні Тымор"
    },
    "TM": {
        "message": "Туркменістан"
    },
    "TN": {
        "message": "Туніс"
    },
    "TO": {
        "message": "Тангійская"
    },
    "TR": {
        "message": "Турцыя"
    },
    "TT": {
        "message": "Трынідад і Табага"
    },
    "TV": {
        "message": "Тувалу"
    },
    "TW": {
        "message": "Тайвань"
    },
    "TZ": {
        "message": "Танзанія, Аб'яднаная Рэспубліка"
    },
    "Talk to us on $1": {
        "message": "Звяртайцеся да нас па $1"
    },
    "Tell friends about $1": {
        "message": "Раскажы сябрам аб $1"
    },
    "Testing connection...": {
        "message": "Тэставанне злучэння ..."
    },
    "Thank you!": {
        "message": "Дзякуй!"
    },
    "There seems to be an error": {
        "message": "Там, здаецца, памылка"
    },
    "Top popular sites": {
        "message": "Топ папулярных сайтаў"
    },
    "Translate to your language": {
        "message": "Перавесці на ваш мову"
    },
    "Try again": {
        "message": "Паспрабуйце яшчэ раз"
    },
    "Try another server": {
        "message": "Паспрабуйце іншы сервер"
    },
    "Try it": {
        "message": "Паспрабуйце"
    },
    "Try safe mode": {
        "message": "Паспрабуйце бяспечны рэжым"
    },
    "Try to <span>reload</span>": {
        "message": "Паспрабуйце <span> перазагрузка </span>"
    },
    "Trying another peer...": {
        "message": "Спроба іншы аднагодкаў ..."
    },
    "Turn off Accelerator": {
        "message": "Выключыце Accelerator"
    },
    "Turn off Hola": {
        "message": "Выключыце Hola"
    },
    "Turn on Accelerator": {
        "message": "Уключыце Accelerator"
    },
    "Turn on Hola": {
        "message": "Уключыце Hola"
    },
    "Turn on to get started": {
        "message": "Уключыце, каб пачаць працу"
    },
    "UA": {
        "message": "Украіна"
    },
    "UG": {
        "message": "Уганда"
    },
    "UM": {
        "message": "ЗША Знешнія малыя астравы"
    },
    "US": {
        "message": "Злучаныя Штаты"
    },
    "UY": {
        "message": "Уругвай"
    },
    "UZ": {
        "message": "Узбекістан"
    },
    "Unblocker is disabled": {
        "message": "Unblocker адключаная"
    },
    "Update": {
        "message": "Абнаўленне"
    },
    "Upgrade": {
        "message": "Абнаўленне"
    },
    "Using": {
        "message": "Выкарыстанне"
    },
    "Using Hola": {
        "message": "Выкарыстанне Hola"
    },
    "VA": {
        "message": "Ватыкан"
    },
    "VC": {
        "message": "Сэнт-Вінсэнт і Грэнадыны"
    },
    "VD": {
        "message": "Паўночны В&#39;етнам"
    },
    "VE": {
        "message": "Венесуэла"
    },
    "VG": {
        "message": "Віргінскія астравы"
    },
    "VI": {
        "message": "Віргінскія астравы, ЗША"
    },
    "VN": {
        "message": "В'етнам"
    },
    "VPN Premium": {
        "message": "VPN Прэміум"
    },
    "VU": {
        "message": "Вануату"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Вельмі старая версія Chrome, <a> абнаўленне </a> Chrome выкарыстоўваць Hola"
    },
    "Video": {
        "message": "Відэа"
    },
    "Video stuck?": {
        "message": "Відэа затрымаўся?"
    },
    "Videos available for instant streaming": {
        "message": "Відэа даступны для імгненнага струменевага"
    },
    "WF": {
        "message": "Уоліс і Футуна"
    },
    "WK": {
        "message": "Уэйк"
    },
    "WS": {
        "message": "Самоа (Заходняе)"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Хочаце Hola ў іншых прыладах? (Xbox, PS, Apple TV, iPhone ...). Націсніце тут"
    },
    "Want to know more?": {
        "message": "Хочаце ведаць больш?"
    },
    "Watch Now": {
        "message": "Глядзець зараз"
    },
    "We found $1 videos": {
        "message": "Мы знайшлі $1 відэа"
    },
    "We will be in touch with you soon": {
        "message": "Мы будзем у кантакце з вамі ў бліжэйшы час"
    },
    "Working!": {
        "message": "Работа!"
    },
    "Working?": {
        "message": "Праца?"
    },
    "Works on all sites but slower": {
        "message": "Працуе на ўсіх сайтах, але больш павольнымі"
    },
    "YD": {
        "message": "Народна-Дэмакратычная Рэспубліка Емен"
    },
    "YE": {
        "message": "Емен"
    },
    "YT": {
        "message": "Маёта"
    },
    "Yes": {
        "message": "Ды"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Вам неабходна абнавіць да апошняй версіі оперы выкарыстоўваць Hola. Націсніце <a>тут</a> , каб абнавіць."
    },
    "ZA": {
        "message": "Паўднёва-Афрыканская Рэспубліка"
    },
    "ZM": {
        "message": "Замбія"
    },
    "ZW": {
        "message": "Зімбабвэ"
    },
    "ZZ": {
        "message": "Невядомы рэгіён"
    },
    "app_desc": {
        "message": "Сайты доступ да заблакаваным ў вашай краіне, кампаніі або школе з Hola! Hola з'яўляецца бясплатнай і просты ў выкарыстанні!"
    },
    "app_name": {
        "message": "Hola Лепш Інтэрнэт"
    },
    "back to": {
        "message": "вярнуўся да"
    },
    "changing...": {
        "message": "мяняецца ..."
    },
    "cool sites": {
        "message": "класныя сайты"
    },
    "current site": {
        "message": "Бягучы сайт"
    },
    "day": {
        "message": "дзень"
    },
    "days": {
        "message": "дзён"
    },
    "even more...": {
        "message": "яшчэ больш ..."
    },
    "mode": {
        "message": "рэжым"
    },
    "more options...": {
        "message": "больш опцый ..."
    },
    "not working?": {
        "message": "не працуе?"
    },
    "not working? try another server": {
        "message": "не працуе? паспрабуйце іншы сервер"
    },
    "on this page": {
        "message": "На гэтай старонцы"
    },
    "sites that are censored": {
        "message": "сайты, якія цэнзура"
    },
    "start": {
        "message": "пачатак"
    },
    "working? remember": {
        "message": "працуе? запомніць"
    }
};
return E; });