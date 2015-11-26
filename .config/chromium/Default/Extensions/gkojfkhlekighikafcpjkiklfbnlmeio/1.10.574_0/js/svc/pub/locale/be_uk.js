'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " через "
    },
    "$1 Buffering?": {
        "message": "Буферизації $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola отримати доступ до $2\n\nНатисніть тут, щоб зробити те ж саме: $3\n\nВін встановлює Hola, який дозволяє мені подорожувати по Інтернету швидше і доступ до $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN Преміум"
    },
    "$1 from $2": {
        "message": "$1 від $2"
    },
    "$1 not found": {
        "message": "$1 не найден"
    },
    "$1 via Hola": {
        "message": "$1 за допомогою Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Деякі Hola функції можуть бути недоступні на вашому версія)"
    },
    "AC": {
        "message": "Острів Вознесіння"
    },
    "AD": {
        "message": "Андорра"
    },
    "AE": {
        "message": "Обʼєднані Арабські Емірати"
    },
    "AF": {
        "message": "Афганістан"
    },
    "AG": {
        "message": "Антигуа і Барбуда"
    },
    "AI": {
        "message": "Ангілья"
    },
    "AL": {
        "message": "Албанія"
    },
    "AM": {
        "message": "Вірменія"
    },
    "AN": {
        "message": "Нідерландські Антильські Острови"
    },
    "AO": {
        "message": "Ангола"
    },
    "AQ": {
        "message": "Антарктида"
    },
    "AR": {
        "message": "Аргентина"
    },
    "AS": {
        "message": "Американське Самоа"
    },
    "AT": {
        "message": "Австрія"
    },
    "AU": {
        "message": "Австралія"
    },
    "AW": {
        "message": "Аруба"
    },
    "AX": {
        "message": "Аландські острови"
    },
    "AZ": {
        "message": "Азербайджан"
    },
    "About": {
        "message": "Про"
    },
    "About Hola": {
        "message": "Про Hola"
    },
    "Accelerator": {
        "message": "Прискорювач"
    },
    "Accelerator is": {
        "message": "Прискорювач"
    },
    "Access $1 - cool site!": {
        "message": "Доступ $1 - класний сайт!"
    },
    "Access $1?": {
        "message": "Доступ $1?"
    },
    "Access any site from any country, free": {
        "message": "Доступу до будь-якого сайту з будь-якої країни, безкоштовно"
    },
    "Access cool sites": {
        "message": "Доступу прохолодно сайти"
    },
    "Access more sites": {
        "message": "Доступу більше сайтів"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Доступ до сайтів цензурі у вашій країні і прискорити ваш Інтернет з Hola - безкоштовно!"
    },
    "Accessing $1 with Hola": {
        "message": "Доступ $1 з Hola"
    },
    "Account": {
        "message": "Рахунок"
    },
    "Account type": {
        "message": "Тип рахунку"
    },
    "Activating...": {
        "message": "Активація..."
    },
    "All ($1)": {
        "message": "Всі ($1)"
    },
    "Apply settings...": {
        "message": "Застосувати налаштування ..."
    },
    "Author site:": {
        "message": "Автор сайту:"
    },
    "Author:": {
        "message": "Автор:"
    },
    "Awesome!": {
        "message": "Приголомшливо!"
    },
    "BA": {
        "message": "Боснія і Герцоговина"
    },
    "BB": {
        "message": "Барбадос"
    },
    "BD": {
        "message": "Бангладеш"
    },
    "BE": {
        "message": "Бельгія"
    },
    "BF": {
        "message": "Буркіна-Фасо"
    },
    "BG": {
        "message": "Болгарія"
    },
    "BH": {
        "message": "Бахрейн"
    },
    "BI": {
        "message": "Бурунді"
    },
    "BJ": {
        "message": "Бенін"
    },
    "BL": {
        "message": "Острів Святого Бартоломея"
    },
    "BM": {
        "message": "Бермуди"
    },
    "BN": {
        "message": "Бруней"
    },
    "BO": {
        "message": "Болівія"
    },
    "BQ": {
        "message": "Британська Антарктична територія"
    },
    "BR": {
        "message": "Бразилія"
    },
    "BS": {
        "message": "Багами"
    },
    "BT": {
        "message": "Бутан"
    },
    "BV": {
        "message": "Острів Буве"
    },
    "BW": {
        "message": "Ботсвана"
    },
    "BY": {
        "message": "Білорусь"
    },
    "BZ": {
        "message": "Беліз"
    },
    "Back to $1": {
        "message": "Повернутися до $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Будьте першим, щоб отримати Hola для IPhone / IPad - Зареєструйтеся зараз:"
    },
    "Browsing": {
        "message": "Перегляд"
    },
    "Buffering problems?": {
        "message": "Проблеми буферизації?"
    },
    "Buffering?": {
        "message": "Буферизація?"
    },
    "CA": {
        "message": "Канада"
    },
    "CC": {
        "message": "Кокосові острови"
    },
    "CD": {
        "message": "Демократична Республіка Конґо"
    },
    "CF": {
        "message": "Центральноафриканська Республіка"
    },
    "CG": {
        "message": "Конґо - Браззавіль"
    },
    "CH": {
        "message": "Швейцарія"
    },
    "CI": {
        "message": "Кот д’Івуар"
    },
    "CK": {
        "message": "Острови Кука"
    },
    "CL": {
        "message": "Чилі"
    },
    "CM": {
        "message": "Камерун"
    },
    "CN": {
        "message": "Китай"
    },
    "CO": {
        "message": "Колумбія"
    },
    "CP": {
        "message": "Клиппертон"
    },
    "CR": {
        "message": "Коста-Рика"
    },
    "CS": {
        "message": "Сербія та Чорногорія"
    },
    "CT": {
        "message": "Кантон і Ендербері"
    },
    "CU": {
        "message": "Куба"
    },
    "CV": {
        "message": "Кабо-Верде"
    },
    "CX": {
        "message": "Острів Різдва"
    },
    "CY": {
        "message": "Кіпр"
    },
    "CZ": {
        "message": "Чеська республіка"
    },
    "Changing country...": {
        "message": "Зміна країну ..."
    },
    "Check out Hola for $1!": {
        "message": "Перевірте Hola за $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Перевірте Hola для мобільних пристроїв"
    },
    "Check your Internet connection": {
        "message": "Переконайтеся, у вас є інтернет"
    },
    "Choose<br>Country": {
        "message": "Вибирати <br> Країна"
    },
    "Configuring...": {
        "message": "Налаштування ..."
    },
    "Connecting...": {
        "message": "Підключення ..."
    },
    "Cool site!": {
        "message": "Прохолодний сайт!"
    },
    "Creative licenses": {
        "message": "Творчі ліцензії"
    },
    "DD": {
        "message": "Східна Німеччина"
    },
    "DE": {
        "message": "Німеччина"
    },
    "DG": {
        "message": "Дієго-Гарсія"
    },
    "DJ": {
        "message": "Джібуті"
    },
    "DK": {
        "message": "Данія"
    },
    "DM": {
        "message": "Домінік"
    },
    "DO": {
        "message": "Домініканська Республіка"
    },
    "DZ": {
        "message": "Алжир"
    },
    "Delete": {
        "message": "Видаляти"
    },
    "Deleted from my list": {
        "message": "Віддалені від мого списку"
    },
    "Did it work?": {
        "message": "Це спрацювало?"
    },
    "Did you experience any buffering?": {
        "message": "Чи виникали у вас будь-якої буферизації?"
    },
    "Disliked it": {
        "message": "Не сподобалося це"
    },
    "Don't show again for $1 for one week": {
        "message": "Більше не показувати за $1 протягом одного тижня"
    },
    "Don't show again for any site for one week": {
        "message": "Більше не показувати для будь-якого сайту протягом одного тижня"
    },
    "Downloading": {
        "message": "Завантаження"
    },
    "EA": {
        "message": "Сеута і Мелілья"
    },
    "EC": {
        "message": "Еквадор"
    },
    "EE": {
        "message": "Естонія"
    },
    "EG": {
        "message": "Єгипет"
    },
    "EH": {
        "message": "Західна Сахара"
    },
    "ER": {
        "message": "Еритрея"
    },
    "ES": {
        "message": "Іспанія"
    },
    "ET": {
        "message": "Ефіопія"
    },
    "EU": {
        "message": "Європейський Союз"
    },
    "Enable": {
        "message": "Включити"
    },
    "Enable Hola Accelerator": {
        "message": "Включити Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Насолоджуйтесь!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Дивимося Hola для Chrome?"
    },
    "Enter site to access": {
        "message": "Вхід на сайт для доступу"
    },
    "Enter your email": {
        "message": "Введіть адресу електронної пошти"
    },
    "FI": {
        "message": "Фінляндія"
    },
    "FJ": {
        "message": "Фіджі"
    },
    "FK": {
        "message": "Фолклендські острови"
    },
    "FM": {
        "message": "Мікронезія"
    },
    "FO": {
        "message": "Фарерські острови"
    },
    "FQ": {
        "message": "Французькі Південні та Антарктичні Території"
    },
    "FR": {
        "message": "Франція"
    },
    "FX": {
        "message": "Митрополит Франція"
    },
    "Fast": {
        "message": "Швидко"
    },
    "Finding new peers...": {
        "message": "Пошук нових колег ..."
    },
    "Finding peers...": {
        "message": "Пошук однолітків ..."
    },
    "Free": {
        "message": "Безкоштовно"
    },
    "From": {
        "message": "Від"
    },
    "Full list": {
        "message": "Повний список"
    },
    "GA": {
        "message": "Габон"
    },
    "GB": {
        "message": "Великобританія"
    },
    "GD": {
        "message": "Гренада"
    },
    "GE": {
        "message": "Грузія"
    },
    "GF": {
        "message": "Французька Гвіана"
    },
    "GG": {
        "message": "Гернсі"
    },
    "GH": {
        "message": "Гана"
    },
    "GI": {
        "message": "Гібралтар"
    },
    "GL": {
        "message": "Гренландія"
    },
    "GM": {
        "message": "Гамбія"
    },
    "GN": {
        "message": "Гвінея"
    },
    "GP": {
        "message": "Гваделупа"
    },
    "GQ": {
        "message": "Екваторіальна Гвінея"
    },
    "GR": {
        "message": "Греція"
    },
    "GS": {
        "message": "Південна Джорджія та Південні Сандвічеві Острови"
    },
    "GT": {
        "message": "Гватемала"
    },
    "GU": {
        "message": "Гуам"
    },
    "GW": {
        "message": "Гвінея-Біссау"
    },
    "GY": {
        "message": "Гайана"
    },
    "Get 24/7 Unblocking": {
        "message": "Отримати 24/7 розблокування"
    },
    "Get Free Premium": {
        "message": "Отримати Безкоштовно Premium"
    },
    "Get Hola Accelerator": {
        "message": "Отримати Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Отримати Hola гравця"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Отримати Hola плюс для будь-яких перебоїв, AD-безкоштовна послуга."
    },
    "Get Hola Premium": {
        "message": "Отримати Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Отримати Hola для Android"
    },
    "Get Premium support": {
        "message": "Отримати Преміум підтримку"
    },
    "Get Unlimited Unblocking": {
        "message": "Отримати необмежений розблокування"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Отримати доступ до цензури сайтів, спробуйте зараз: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Отримайте допомогу від інженера по Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Отримайте швидкий серверів"
    },
    "Go": {
        "message": "Перейти"
    },
    "Go Hola Premium": {
        "message": "Перейти Hola Преміум"
    },
    "HK": {
        "message": "Гонконґ О.А.Р. Китаю"
    },
    "HM": {
        "message": "Острови Херд і Мак-Дональд"
    },
    "HN": {
        "message": "Гондурас"
    },
    "HR": {
        "message": "Хорватія"
    },
    "HT": {
        "message": "Гаїті"
    },
    "HU": {
        "message": "Угорщина"
    },
    "Hate it": {
        "message": "Ненавиджу це"
    },
    "Help": {
        "message": "Допоможіть"
    },
    "Hey,\n\nI'm using": {
        "message": "Ей,\n\nя використовую"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Привіт,\n\nя почав використовувати $1 ($2). Це дозволяє мені подорожувати по Інтернету швидше і доступ до $3 в моїй країні."
    },
    "Hola Accelerator": {
        "message": "Hola акселератора"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola не може працювати, тому що інший розширення контролю настройки проксі-сервера."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola не дуже добре працює в режимі Windows 8. Перейдіть на режим робочого столу. Натисніть <a> тут </a> Інструкції"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola недоступна прямо зараз, але ми працюємо над цим."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola вимкнений, натисніть, щоб включити"
    },
    "Hola site list": {
        "message": "Список Hola сайті"
    },
    "I can now access $1 from any country!": {
        "message": "Тепер я можу відкрити $1 з будь-якої країни!"
    },
    "I did not experience any buffering": {
        "message": "Я не відчував ніяких буферизації"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Я просто зверталися цензурі сайт, використовуючи Hola за $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Я використовую $1, щоб переглянути $2 в моїй країні, і подорожувати швидше!"
    },
    "IC": {
        "message": "Канарські острови"
    },
    "ID": {
        "message": "Індонезія"
    },
    "IE": {
        "message": "Ірландія"
    },
    "IL": {
        "message": "Ізраїль"
    },
    "IM": {
        "message": "Острів Мен"
    },
    "IN": {
        "message": "Індія"
    },
    "IO": {
        "message": "Британські території Індійського океану"
    },
    "IQ": {
        "message": "Ірак"
    },
    "IR": {
        "message": "Іран"
    },
    "IS": {
        "message": "Ісландія"
    },
    "IT": {
        "message": "Італія"
    },
    "Improve translation": {
        "message": "Поліпшення перекладу"
    },
    "Initializing...": {
        "message": "Ініціалізація ..."
    },
    "Install": {
        "message": "Встановлювати"
    },
    "Install Accelerator": {
        "message": "Встановіть Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Встановити безкоштовний Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Встановіть Hola Двигун продовжувати використовувати Hola безкоштовно"
    },
    "Instantly watch any torrent Video": {
        "message": "Миттєво дивитися будь торрент відео"
    },
    "Invite friends - free Premium.": {
        "message": "Запросити друзів - безкоштовний Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Запросити друзів. Отримати Premium."
    },
    "It was okay": {
        "message": "Це було добре"
    },
    "JE": {
        "message": "Джерсі"
    },
    "JM": {
        "message": "Ямайка"
    },
    "JO": {
        "message": "Йорданія"
    },
    "JP": {
        "message": "Японія"
    },
    "JT": {
        "message": "Джонстон-Айленд"
    },
    "KE": {
        "message": "Кенія"
    },
    "KG": {
        "message": "Киргизстан"
    },
    "KH": {
        "message": "Камбоджа"
    },
    "KI": {
        "message": "Кірибаті"
    },
    "KM": {
        "message": "Коморські Острови"
    },
    "KN": {
        "message": "Сент-Кітс і Невіс"
    },
    "KP": {
        "message": "Північна Корея"
    },
    "KR": {
        "message": "Південна Корея"
    },
    "KW": {
        "message": "Кувейт"
    },
    "KY": {
        "message": "Кайманові острови"
    },
    "KZ": {
        "message": "Казахстан"
    },
    "LA": {
        "message": "Лаос"
    },
    "LB": {
        "message": "Ліван"
    },
    "LC": {
        "message": "Сент-Люсія"
    },
    "LI": {
        "message": "Ліхтенштейн"
    },
    "LK": {
        "message": "Шрі-Ланка"
    },
    "LR": {
        "message": "Ліберія"
    },
    "LS": {
        "message": "Лесото"
    },
    "LT": {
        "message": "Литва"
    },
    "LU": {
        "message": "Люксембург"
    },
    "LV": {
        "message": "Латвія"
    },
    "LY": {
        "message": "Лівія"
    },
    "Language": {
        "message": "Мова"
    },
    "Library": {
        "message": "Бібліотека"
    },
    "Like it": {
        "message": "Люблю це"
    },
    "Loading": {
        "message": "Завантаження"
    },
    "Loading site...": {
        "message": "Завантаження"
    },
    "Log in": {
        "message": "Ввійти"
    },
    "Log out": {
        "message": "Вийти"
    },
    "Love Hola?": {
        "message": "Любов Hola?"
    },
    "Love it": {
        "message": "Любов це"
    },
    "MA": {
        "message": "Марокко"
    },
    "MC": {
        "message": "Монако"
    },
    "MD": {
        "message": "Молдова"
    },
    "ME": {
        "message": "Чорногорія"
    },
    "MF": {
        "message": "Острів Святого Мартіна"
    },
    "MG": {
        "message": "Мадагаскар"
    },
    "MH": {
        "message": "Маршаллові Острови"
    },
    "MI": {
        "message": "Мідуей"
    },
    "MK": {
        "message": "Македонія"
    },
    "ML": {
        "message": "Малі"
    },
    "MM": {
        "message": "Мʼянма"
    },
    "MN": {
        "message": "Монголія"
    },
    "MO": {
        "message": "Макао О.А.Р. Китаю"
    },
    "MP": {
        "message": "Північні Маріанські Острови"
    },
    "MQ": {
        "message": "Мартиніка"
    },
    "MR": {
        "message": "Мавританія"
    },
    "MS": {
        "message": "Монсеррат"
    },
    "MT": {
        "message": "Мальта"
    },
    "MU": {
        "message": "Маврикій"
    },
    "MV": {
        "message": "Мальдіви"
    },
    "MW": {
        "message": "Малаві"
    },
    "MX": {
        "message": "Мексика"
    },
    "MY": {
        "message": "Малайзія"
    },
    "MZ": {
        "message": "Мозамбік"
    },
    "Make your Internet better with $1": {
        "message": "Зробіть ваш Інтернет краще з $1"
    },
    "Menu": {
        "message": "Меню"
    },
    "Might not work on all sites": {
        "message": "Може не працювати на всі сайти"
    },
    "Mode": {
        "message": "Режим"
    },
    "More countries": {
        "message": "Все більше країн"
    },
    "More sites...": {
        "message": "більше ..."
    },
    "More...": {
        "message": "більше ..."
    },
    "My Account": {
        "message": "Мій аккаунт"
    },
    "My History": {
        "message": "Моя історія"
    },
    "My Settings": {
        "message": "Мої налаштування"
    },
    "My favorites": {
        "message": "Мої фаворити"
    },
    "NA": {
        "message": "Намібія"
    },
    "NC": {
        "message": "Нова Каледонія"
    },
    "NE": {
        "message": "Нігер"
    },
    "NF": {
        "message": "Острів Норфолк"
    },
    "NG": {
        "message": "Нігерія"
    },
    "NI": {
        "message": "Нікарагуа"
    },
    "NL": {
        "message": "Нідерланди"
    },
    "NO": {
        "message": "Норвегія"
    },
    "NP": {
        "message": "Непал"
    },
    "NQ": {
        "message": "Земля Королеви Мод"
    },
    "NR": {
        "message": "Науру"
    },
    "NT": {
        "message": "Нейтральна зона"
    },
    "NU": {
        "message": "Нія"
    },
    "NZ": {
        "message": "Нова Зеландія"
    },
    "Need Help?": {
        "message": "Потрібна допомога?"
    },
    "Never ask me again": {
        "message": "Ніколи не питати"
    },
    "Never be a peer": {
        "message": "Ніколи не бути однолітків"
    },
    "No": {
        "message": "Ні"
    },
    "No idle peers found.": {
        "message": "Ні пусті бенкетів не знайдено."
    },
    "No recent videos found": {
        "message": "Не знайдено Останні відео"
    },
    "No saved videos found": {
        "message": "Не знайдено збережені відео"
    },
    "No title": {
        "message": "Без назви"
    },
    "No videos found": {
        "message": "Не знайдені"
    },
    "No videos found on active page": {
        "message": "Немає результатів по активній сторінці"
    },
    "No, Thanks": {
        "message": "Ні, дякую"
    },
    "No, fix it": {
        "message": "Ні, це виправити"
    },
    "Not working?": {
        "message": "Не працює?"
    },
    "Number of users that pressed not working": {
        "message": "Кількість користувачів, натиснута не працює"
    },
    "Number of users that use this option": {
        "message": "Кількість користувачів, використовувати цю опцію"
    },
    "OM": {
        "message": "Оман"
    },
    "Off": {
        "message": "Викл"
    },
    "Oh, yes!": {
        "message": "О, так!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Стара версія Firefox. Прес <a> тут </a> для оновлення."
    },
    "On": {
        "message": "На"
    },
    "Open Media Player": {
        "message": "Відкрити Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Наш новий Mplayer скоро!"
    },
    "PA": {
        "message": "Панама"
    },
    "PC": {
        "message": "Тихоокеанських островів підопічна територія"
    },
    "PE": {
        "message": "Перу"
    },
    "PF": {
        "message": "Французька Полінезія"
    },
    "PG": {
        "message": "Папуа Нова Гвінея"
    },
    "PH": {
        "message": "Філіппіни"
    },
    "PK": {
        "message": "Пакистан"
    },
    "PL": {
        "message": "Польща"
    },
    "PM": {
        "message": "Сен-Пʼєр і Мікелон"
    },
    "PN": {
        "message": "Піткерн"
    },
    "PR": {
        "message": "Пуерто-Ріко"
    },
    "PS": {
        "message": "Палестина"
    },
    "PT": {
        "message": "Португалія"
    },
    "PU": {
        "message": "США Різне тихоокеанських островів"
    },
    "PW": {
        "message": "Палау"
    },
    "PY": {
        "message": "Парагвай"
    },
    "PZ": {
        "message": "Зона Панамського каналу"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Будь ласка, вимкніть інші <a>розширення</a>, що ви думаєте, може контролювати настройки проксі-сервера, такі як ад-блокатори, інші послуги VPN і т.д."
    },
    "Please enter a valid email address.": {
        "message": "Будь ласка, введіть діючий адресу електронної пошти."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Будь ласка, введіть адресу веб-сайту, як facebook.com"
    },
    "Please help us get better": {
        "message": "Допоможіть нам стати краще"
    },
    "Popular in $1": {
        "message": "Популярні в $1"
    },
    "Popular in the world": {
        "message": "Популярні в світі"
    },
    "Popular sites": {
        "message": "Популярні сайти"
    },
    "Premium": {
        "message": "Премія"
    },
    "QA": {
        "message": "Катар"
    },
    "QO": {
        "message": "Французька Океанія"
    },
    "RE": {
        "message": "Реюньйон"
    },
    "RO": {
        "message": "Румунія"
    },
    "RS": {
        "message": "Сербія"
    },
    "RU": {
        "message": "Росія"
    },
    "RW": {
        "message": "Руанда"
    },
    "Rate us": {
        "message": "Оцінити нас"
    },
    "Recent Videos": {
        "message": "Останні відео"
    },
    "Reload": {
        "message": "Перезавантажувати"
    },
    "Reload Hola": {
        "message": "Оновити Hola"
    },
    "Remember server": {
        "message": "Запам'ятати сервер"
    },
    "Report a problem": {
        "message": "Повідомити про проблему"
    },
    "Retry safe mode": {
        "message": "Повторіть безпечний режим"
    },
    "SA": {
        "message": "Саудівська Аравія"
    },
    "SB": {
        "message": "Соломонові Острови"
    },
    "SC": {
        "message": "Сейшели"
    },
    "SD": {
        "message": "Судан"
    },
    "SE": {
        "message": "Швеція"
    },
    "SG": {
        "message": "Сінгапур"
    },
    "SH": {
        "message": "Острів Святої Єлени"
    },
    "SI": {
        "message": "Словенія"
    },
    "SJ": {
        "message": "Острови Свальбард та Ян-Маєн"
    },
    "SK": {
        "message": "Словакія"
    },
    "SL": {
        "message": "Сьєрра-Леоне"
    },
    "SM": {
        "message": "Сан-Марино"
    },
    "SN": {
        "message": "Сенегал"
    },
    "SO": {
        "message": "Сомалі"
    },
    "SR": {
        "message": "Суринам"
    },
    "ST": {
        "message": "Сан-Томе і Прінсіпі"
    },
    "SU": {
        "message": "Союз Радянських Соціалістичних Республік"
    },
    "SV": {
        "message": "Сальвадор"
    },
    "SY": {
        "message": "Сирія"
    },
    "SZ": {
        "message": "Свазіленд"
    },
    "Safe": {
        "message": "Безпечний"
    },
    "Safe mode": {
        "message": "Безпечний режим"
    },
    "Save": {
        "message": "Зберегти"
    },
    "Saved Videos": {
        "message": "Збережені Відео"
    },
    "Saved for later": {
        "message": "Збережені для подальшого"
    },
    "Search video title": {
        "message": "Пошук відео назву"
    },
    "Select a Country": {
        "message": "Виберіть країну"
    },
    "Select site to unblock": {
        "message": "Виберіть сайт, щоб розблокувати"
    },
    "Server saved!": {
        "message": "Сервер врятовані!"
    },
    "Set safe mode for $1 $2": {
        "message": "Встановіть безпечний режим для $1 $2"
    },
    "Settings": {
        "message": "Налаштування"
    },
    "Share": {
        "message": "Частка"
    },
    "Share $1 on $2": {
        "message": "Дайте $1 на $2"
    },
    "Share $1 via $2": {
        "message": "Дайте $1 за допомогою $2"
    },
    "Share with friends!": {
        "message": "Поділися з друзями!"
    },
    "Sign up": {
        "message": "Зареєструватися"
    },
    "Solve buffering": {
        "message": "Вирішіть буферизації"
    },
    "Solve buffering problems with": {
        "message": "Рішення проблем буферизації з"
    },
    "Solves it": {
        "message": "Вирішує її"
    },
    "Staff Picks": {
        "message": "Зоряні війни"
    },
    "Start Hola": {
        "message": "початок"
    },
    "Starting...": {
        "message": "Starting ..."
    },
    "Stop Hola": {
        "message": "Стоп Hola"
    },
    "Stopping peer routing...": {
        "message": "Зупинка однолітків маршрутизацію ..."
    },
    "Stream": {
        "message": "Потік"
    },
    "Stream Instantly": {
        "message": "Потік Миттєво"
    },
    "Submit": {
        "message": "Представляти"
    },
    "Support Hola": {
        "message": "Підтримка Hola"
    },
    "TA": {
        "message": "Тристан-да-Кунья"
    },
    "TC": {
        "message": "Теркс і Кайкос"
    },
    "TD": {
        "message": "Чад"
    },
    "TF": {
        "message": "Французькі Південні Території"
    },
    "TG": {
        "message": "Того"
    },
    "TH": {
        "message": "Таїланд"
    },
    "TJ": {
        "message": "Таджикистан"
    },
    "TK": {
        "message": "Токелау"
    },
    "TL": {
        "message": "Східний Тимор"
    },
    "TM": {
        "message": "Туркменистан"
    },
    "TN": {
        "message": "Туніс"
    },
    "TO": {
        "message": "Тонга"
    },
    "TR": {
        "message": "Туреччина"
    },
    "TT": {
        "message": "Тринідад і Тобаго"
    },
    "TV": {
        "message": "Тувалу"
    },
    "TW": {
        "message": "Тайвань"
    },
    "TZ": {
        "message": "Танзанія"
    },
    "Talk to us on $1": {
        "message": "Звертайтеся до нас по $1"
    },
    "Tell friends about $1": {
        "message": "Розкажи друзям про $1"
    },
    "Testing connection...": {
        "message": "Тестування з'єднання ..."
    },
    "Thank you!": {
        "message": "Спасибо!"
    },
    "There seems to be an error": {
        "message": "Там, здається, помилка"
    },
    "Top popular sites": {
        "message": "Топ популярних сайтів"
    },
    "Translate to your language": {
        "message": "Перевести на свою мову"
    },
    "Try again": {
        "message": "Спробуйте ще раз"
    },
    "Try another server": {
        "message": "Спробуйте інший сервер"
    },
    "Try it": {
        "message": "Спробуйте"
    },
    "Try safe mode": {
        "message": "Спробуйте безпечний режим"
    },
    "Try to <span>reload</span>": {
        "message": "Спробуйте <span> перезавантаження </span>"
    },
    "Trying another peer...": {
        "message": "Спроба іншого однолітків ..."
    },
    "Turn off Accelerator": {
        "message": "Вимкніть Accelerator"
    },
    "Turn off Hola": {
        "message": "Вимкніть Hola"
    },
    "Turn on Accelerator": {
        "message": "Увімкніть Accelerator"
    },
    "Turn on Hola": {
        "message": "Увімкніть Hola"
    },
    "Turn on to get started": {
        "message": "Увімкніть, щоб почати роботу"
    },
    "UA": {
        "message": "Україна"
    },
    "UG": {
        "message": "Уганда"
    },
    "UM": {
        "message": "Віддалені Острови США"
    },
    "US": {
        "message": "США"
    },
    "UY": {
        "message": "Уругвай"
    },
    "UZ": {
        "message": "Узбекистан"
    },
    "Unblocker is disabled": {
        "message": "Unblocker відключена"
    },
    "Update": {
        "message": "Оновлення"
    },
    "Upgrade": {
        "message": "Оновлення"
    },
    "Using": {
        "message": "Використання"
    },
    "Using Hola": {
        "message": "Використання Hola"
    },
    "VA": {
        "message": "Ватикан"
    },
    "VC": {
        "message": "Сент-Вінсент і Гренадини"
    },
    "VD": {
        "message": "Північний В&#39;єтнам"
    },
    "VE": {
        "message": "Венесуела"
    },
    "VG": {
        "message": "Віргінські острови Британії"
    },
    "VI": {
        "message": "Віргінські острови США"
    },
    "VN": {
        "message": "Вʼєтнам"
    },
    "VPN Premium": {
        "message": "VPN Преміум"
    },
    "VU": {
        "message": "Вануату"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Дуже стара версія Chrome, <a> оновлення </a> Chrome використовувати Hola"
    },
    "Video": {
        "message": "Відео"
    },
    "Video stuck?": {
        "message": "Відео застряг?"
    },
    "Videos available for instant streaming": {
        "message": "Відео доступне для миттєвого потокового"
    },
    "WF": {
        "message": "Уолліс і Футуна"
    },
    "WK": {
        "message": "Уейк"
    },
    "WS": {
        "message": "Самоа"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Хочете Hola в інших пристроях? (Xbox, PS, Apple TV, iPhone ...). Натисніть тут"
    },
    "Want to know more?": {
        "message": "Хочете знати більше?"
    },
    "Watch Now": {
        "message": "Дивитися зараз"
    },
    "We found $1 videos": {
        "message": "Ми знайшли $1 відео"
    },
    "We will be in touch with you soon": {
        "message": "Ми будемо в контакті з вами найближчим часом"
    },
    "Working!": {
        "message": "Робота!"
    },
    "Working?": {
        "message": "Робота?"
    },
    "Works on all sites but slower": {
        "message": "Працює на всіх сайтах, але більш повільними"
    },
    "YD": {
        "message": "Народно-Демократична Республіка Ємен"
    },
    "YE": {
        "message": "Ємен"
    },
    "YT": {
        "message": "Майот"
    },
    "Yes": {
        "message": "Так"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Вам необхідно оновити до останньої версії опери використовувати Hola. Натисніть <a>тут</a> , щоб оновити."
    },
    "ZA": {
        "message": "ПАР"
    },
    "ZM": {
        "message": "Замбія"
    },
    "ZW": {
        "message": "Зімбабве"
    },
    "ZZ": {
        "message": "Невідомий або неправильний регіон"
    },
    "app_desc": {
        "message": "Сайти доступ до заблокованих у вашій країні, компанії або школі з Hola! Hola є безкоштовною і простий у використанні!"
    },
    "app_name": {
        "message": "Hola Краще Інтернет"
    },
    "back to": {
        "message": "повернувся до"
    },
    "changing...": {
        "message": "змінюється ..."
    },
    "cool sites": {
        "message": "класні сайти"
    },
    "current site": {
        "message": "Поточний сайт"
    },
    "day": {
        "message": "день"
    },
    "days": {
        "message": "днів"
    },
    "even more...": {
        "message": "ще більше ..."
    },
    "mode": {
        "message": "режим"
    },
    "more options...": {
        "message": "більше опцій ..."
    },
    "not working?": {
        "message": "не працює?"
    },
    "not working? try another server": {
        "message": "не працює? спробуйте інший сервер"
    },
    "on this page": {
        "message": "На цій сторінці"
    },
    "sites that are censored": {
        "message": "сайти, які цензура"
    },
    "start": {
        "message": "початок"
    },
    "working? remember": {
        "message": "працює? запам'ятати"
    }
};
return E; });