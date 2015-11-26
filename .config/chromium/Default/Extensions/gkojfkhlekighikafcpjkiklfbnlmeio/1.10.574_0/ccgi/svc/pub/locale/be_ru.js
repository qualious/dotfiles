'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " через "
    },
    "$1 Buffering?": {
        "message": "Буферизация $1?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola получить доступ к $2\n\nНажмите здесь, чтобы сделать то же самое: $3\n\nОн устанавливает Hola, который позволяет мне путешествовать по Интернету быстрее и доступ к $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN Премиум"
    },
    "$1 from $2": {
        "message": "$1 от $2"
    },
    "$1 not found": {
        "message": "$1 не найден"
    },
    "$1 via Hola": {
        "message": "$1 через Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(некоторые функции Hola недоступны в вашей версии)"
    },
    "AC": {
        "message": "Остров Вознесения"
    },
    "AD": {
        "message": "Андорра"
    },
    "AE": {
        "message": "Объединенные Арабские Эмираты"
    },
    "AF": {
        "message": "Афганистан"
    },
    "AG": {
        "message": "Антигуа и Барбуда"
    },
    "AI": {
        "message": "Ангуилла"
    },
    "AL": {
        "message": "Албания"
    },
    "AM": {
        "message": "Армения"
    },
    "AN": {
        "message": "Нидерландские Антильские острова"
    },
    "AO": {
        "message": "Ангола"
    },
    "AQ": {
        "message": "Антарктика"
    },
    "AR": {
        "message": "Аргентина"
    },
    "AS": {
        "message": "Американское Самоа"
    },
    "AT": {
        "message": "Австрия"
    },
    "AU": {
        "message": "Австралия"
    },
    "AW": {
        "message": "Аруба"
    },
    "AX": {
        "message": "Аландские острова"
    },
    "AZ": {
        "message": "Азербайджан"
    },
    "About": {
        "message": "О программе"
    },
    "About Hola": {
        "message": "О Hola"
    },
    "Accelerator": {
        "message": "Ускоритель"
    },
    "Accelerator is": {
        "message": "Ускоритель"
    },
    "Access $1 - cool site!": {
        "message": "Доступ $1 - классный сайт!"
    },
    "Access $1?": {
        "message": "Включить доступ к $1?"
    },
    "Access any site from any country, free": {
        "message": "Бесплатный доступ к любому сайту из любой страны"
    },
    "Access cool sites": {
        "message": "Доступ к классным сайтам"
    },
    "Access more sites": {
        "message": "Доступ к большему количеству сайтов"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Доступ к сайтам цензуре в вашей стране и ускорить ваш Интернет с Hola - бесплатно!"
    },
    "Accessing $1 with Hola": {
        "message": "Доступ $1 с Hola"
    },
    "Account": {
        "message": "Аккаунт"
    },
    "Account type": {
        "message": "Тип аккаунта"
    },
    "Activating...": {
        "message": "Активация..."
    },
    "All ($1)": {
        "message": "Все ($1)"
    },
    "Apply settings...": {
        "message": "Применение настроек..."
    },
    "Author site:": {
        "message": "Автор сайта:"
    },
    "Author:": {
        "message": "Автор:"
    },
    "Awesome!": {
        "message": "Потрясающе!"
    },
    "BA": {
        "message": "Босния и Герцеговина"
    },
    "BB": {
        "message": "Барбадос"
    },
    "BD": {
        "message": "Бангладеш"
    },
    "BE": {
        "message": "Бельгия"
    },
    "BF": {
        "message": "Буркина Фасо"
    },
    "BG": {
        "message": "Болгария"
    },
    "BH": {
        "message": "Бахрейн"
    },
    "BI": {
        "message": "Бурунди"
    },
    "BJ": {
        "message": "Бенин"
    },
    "BL": {
        "message": "Остров Святого Бартоломея"
    },
    "BM": {
        "message": "Бермудские Острова"
    },
    "BN": {
        "message": "Бруней Даруссалам"
    },
    "BO": {
        "message": "Боливия"
    },
    "BQ": {
        "message": "Британская Антарктическая территория"
    },
    "BR": {
        "message": "Бразилия"
    },
    "BS": {
        "message": "Багамские острова"
    },
    "BT": {
        "message": "Бутан"
    },
    "BV": {
        "message": "Остров Буве"
    },
    "BW": {
        "message": "Ботсвана"
    },
    "BY": {
        "message": "Беларусь"
    },
    "BZ": {
        "message": "Белиз"
    },
    "Back to $1": {
        "message": "Назад к $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Будьте первым, чтобы получить Hola для IPhone / IPad - Зарегистрируйтесь сейчас:"
    },
    "Browsing": {
        "message": "Просмотр"
    },
    "Buffering problems?": {
        "message": "Проблемы буферизации?"
    },
    "Buffering?": {
        "message": "Буферизация?"
    },
    "CA": {
        "message": "Канада"
    },
    "CC": {
        "message": "Кокосовые острова"
    },
    "CD": {
        "message": "Демократическая Республика Конго"
    },
    "CF": {
        "message": "Центрально-Африканская Республика"
    },
    "CG": {
        "message": "Конго"
    },
    "CH": {
        "message": "Швейцария"
    },
    "CI": {
        "message": "Кот д’Ивуар"
    },
    "CK": {
        "message": "Острова Кука"
    },
    "CL": {
        "message": "Чили"
    },
    "CM": {
        "message": "Камерун"
    },
    "CN": {
        "message": "Китай"
    },
    "CO": {
        "message": "Колумбия"
    },
    "CP": {
        "message": "Клиппертон"
    },
    "CR": {
        "message": "Коста-Рика"
    },
    "CS": {
        "message": "Сербия и Черногория"
    },
    "CT": {
        "message": "Кантон и Эндербери"
    },
    "CU": {
        "message": "Куба"
    },
    "CV": {
        "message": "Острова Зеленого Мыса"
    },
    "CX": {
        "message": "Остров Рождества"
    },
    "CY": {
        "message": "Кипр"
    },
    "CZ": {
        "message": "Чешская республика"
    },
    "Changing country...": {
        "message": "Изменение страны..."
    },
    "Check out Hola for $1!": {
        "message": "Проверьте Hola для $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Проверьте Hola для мобильных устройств"
    },
    "Check your Internet connection": {
        "message": "Проверьте интернет-соединение"
    },
    "Choose<br>Country": {
        "message": "Выберите<br>страну"
    },
    "Configuring...": {
        "message": "Настройка..."
    },
    "Connecting...": {
        "message": "Подключение..."
    },
    "Cool site!": {
        "message": "Классный сайт!"
    },
    "Creative licenses": {
        "message": "Творческие лицензии"
    },
    "DD": {
        "message": "Восточная Германия"
    },
    "DE": {
        "message": "Германия"
    },
    "DG": {
        "message": "Диего-Гарсия"
    },
    "DJ": {
        "message": "Джибути"
    },
    "DK": {
        "message": "Дания"
    },
    "DM": {
        "message": "Остров Доминика"
    },
    "DO": {
        "message": "Доминиканская Республика"
    },
    "DZ": {
        "message": "Алжир"
    },
    "Delete": {
        "message": "Удалять"
    },
    "Deleted from my list": {
        "message": "Удаленные от моего списка"
    },
    "Did it work?": {
        "message": "Это сработало?"
    },
    "Did you experience any buffering?": {
        "message": "Возникала ли у вас какая-либо буферизация?"
    },
    "Disliked it": {
        "message": "Не понравилось это"
    },
    "Don't show again for $1 for one week": {
        "message": "Не показывать для $1 в течение недели"
    },
    "Don't show again for any site for one week": {
        "message": "Не показывать для любого сайта в течение недели"
    },
    "Downloading": {
        "message": "Загрузка"
    },
    "EA": {
        "message": "Сеута и Мелилья"
    },
    "EC": {
        "message": "Эквадор"
    },
    "EE": {
        "message": "Эстония"
    },
    "EG": {
        "message": "Египет"
    },
    "EH": {
        "message": "Западная Сахара"
    },
    "ER": {
        "message": "Эритрея"
    },
    "ES": {
        "message": "Испания"
    },
    "ET": {
        "message": "Эфиопия"
    },
    "EU": {
        "message": "Европейский Союз"
    },
    "Enable": {
        "message": "Включить"
    },
    "Enable Hola Accelerator": {
        "message": "Включить Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Наслаждайтесь!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Смотрим Hola для Chrome?"
    },
    "Enter site to access": {
        "message": "Введите сайт для доступа"
    },
    "Enter your email": {
        "message": "Введите адрес электронной почты"
    },
    "FI": {
        "message": "Финляндия"
    },
    "FJ": {
        "message": "Фиджи"
    },
    "FK": {
        "message": "Фолклендские острова"
    },
    "FM": {
        "message": "Федеративные Штаты Микронезии"
    },
    "FO": {
        "message": "Фарерские острова"
    },
    "FQ": {
        "message": "Французские Южные и Антарктические Территории"
    },
    "FR": {
        "message": "Франция"
    },
    "FX": {
        "message": "Митрополит Франция"
    },
    "Fast": {
        "message": "Быстрый"
    },
    "Finding new peers...": {
        "message": "Поиск новых пиров..."
    },
    "Finding peers...": {
        "message": "Поиск пиров..."
    },
    "Free": {
        "message": "Бесплатно"
    },
    "From": {
        "message": "От"
    },
    "Full list": {
        "message": "Полный список"
    },
    "GA": {
        "message": "Габон"
    },
    "GB": {
        "message": "Великобритания"
    },
    "GD": {
        "message": "Гренада"
    },
    "GE": {
        "message": "Грузия"
    },
    "GF": {
        "message": "Французская Гвиана"
    },
    "GG": {
        "message": "Гернси"
    },
    "GH": {
        "message": "Гана"
    },
    "GI": {
        "message": "Гибралтар"
    },
    "GL": {
        "message": "Гренландия"
    },
    "GM": {
        "message": "Гамбия"
    },
    "GN": {
        "message": "Гвинея"
    },
    "GP": {
        "message": "Гваделупа"
    },
    "GQ": {
        "message": "Экваториальная Гвинея"
    },
    "GR": {
        "message": "Греция"
    },
    "GS": {
        "message": "Южная Джорджия и Южные Сандвичевы Острова"
    },
    "GT": {
        "message": "Гватемала"
    },
    "GU": {
        "message": "Гуам"
    },
    "GW": {
        "message": "Гвинея-Биссау"
    },
    "GY": {
        "message": "Гайана"
    },
    "Get 24/7 Unblocking": {
        "message": "Получить доступ к любым сайтам 24/7"
    },
    "Get Free Premium": {
        "message": "Получить бесплатный Premium"
    },
    "Get Hola Accelerator": {
        "message": "Получить Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Получить Hola игрока"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Загрузить Hola Plus для бесперебойного доступа без рекламы."
    },
    "Get Hola Premium": {
        "message": "Получить Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Получить Hola для Android"
    },
    "Get Premium support": {
        "message": "Получить Premium поддержку"
    },
    "Get Unlimited Unblocking": {
        "message": "Получить неограниченную разблокировку"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Получить доступ к цензуре сайтов, попробуйте сейчас: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Получить помощь от инженера по Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Получить самые быстрые серверы"
    },
    "Go": {
        "message": "Перейти"
    },
    "Go Hola Premium": {
        "message": "Перейти на Hola Premium"
    },
    "HK": {
        "message": "Гонконг, Особый Административный Район Китая"
    },
    "HM": {
        "message": "Острова Херд и Макдональд"
    },
    "HN": {
        "message": "Гондурас"
    },
    "HR": {
        "message": "Хорватия"
    },
    "HT": {
        "message": "Гаити"
    },
    "HU": {
        "message": "Венгрия"
    },
    "Hate it": {
        "message": "Ненавидеть это"
    },
    "Help": {
        "message": "Помощь"
    },
    "Hey,\n\nI'm using": {
        "message": "Эй,\n\nя использую"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Привет,\n\nя начал использовать $1 ($2). Это позволяет мне путешествовать по Интернету быстрее и иметь доступ к $3 в моей стране."
    },
    "Hola Accelerator": {
        "message": "Hola ускоритель"
    },
    "Hola Media Player": {
        "message": "Медиа плеер Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola не может работать, потому что другое расширение контролирует настройки прокси-сервера."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola не работает в режиме Windows 8. Пожалуйста, перейдите в режим рабочего стола. Нажмите <a>здесь</a> для получения инструкций"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola не доступна прямо сейчас, но мы работаем над этим."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola выключена, нажмите, чтобы включить"
    },
    "Hola site list": {
        "message": "Список сайтов для разблокировки"
    },
    "I can now access $1 from any country!": {
        "message": "Теперь я могу открыть $1 из любой страны!"
    },
    "I did not experience any buffering": {
        "message": "Я не испытывал никакой буферизации"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Я пользуюсь заблокированным сайтом, используя Hola за $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Я использую $1, чтобы просмотреть $2 в моей стране, и путешествовать быстрее!"
    },
    "IC": {
        "message": "Канарские острова"
    },
    "ID": {
        "message": "Индонезия"
    },
    "IE": {
        "message": "Ирландия"
    },
    "IL": {
        "message": "Израиль"
    },
    "IM": {
        "message": "Остров Мэн"
    },
    "IN": {
        "message": "Индия"
    },
    "IO": {
        "message": "Британская территория в Индийском океане"
    },
    "IQ": {
        "message": "Ирак"
    },
    "IR": {
        "message": "Иран"
    },
    "IS": {
        "message": "Исландия"
    },
    "IT": {
        "message": "Италия"
    },
    "Improve translation": {
        "message": "Улучшить перевод"
    },
    "Initializing...": {
        "message": "Инициализация..."
    },
    "Install": {
        "message": "Установить"
    },
    "Install Accelerator": {
        "message": "Установите Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Установить бесплатный Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Установите Hola Двигатель продолжать использовать Hola бесплатно"
    },
    "Instantly watch any torrent Video": {
        "message": "Мгновенно смотреть любой торрент видео"
    },
    "Invite friends - free Premium.": {
        "message": "Приглашайте друзей и получите Hola Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Пригласите друзей. Получите Hola Premium."
    },
    "It was okay": {
        "message": "Это было нормально"
    },
    "JE": {
        "message": "Джерси"
    },
    "JM": {
        "message": "Ямайка"
    },
    "JO": {
        "message": "Иордания"
    },
    "JP": {
        "message": "Япония"
    },
    "JT": {
        "message": "Джонстон-Айленд"
    },
    "KE": {
        "message": "Кения"
    },
    "KG": {
        "message": "Кыргызстан"
    },
    "KH": {
        "message": "Камбоджа"
    },
    "KI": {
        "message": "Кирибати"
    },
    "KM": {
        "message": "Коморские Острова"
    },
    "KN": {
        "message": "Сент-Киттс и Невис"
    },
    "KP": {
        "message": "Корейская Народно-Демократическая Республика"
    },
    "KR": {
        "message": "Республика Корея"
    },
    "KW": {
        "message": "Кувейт"
    },
    "KY": {
        "message": "Каймановы острова"
    },
    "KZ": {
        "message": "Казахстан"
    },
    "LA": {
        "message": "Лаос"
    },
    "LB": {
        "message": "Ливан"
    },
    "LC": {
        "message": "Сент-Люсия"
    },
    "LI": {
        "message": "Лихтенштейн"
    },
    "LK": {
        "message": "Шри-Ланка"
    },
    "LR": {
        "message": "Либерия"
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
        "message": "Латвия"
    },
    "LY": {
        "message": "Ливия"
    },
    "Language": {
        "message": "Язык"
    },
    "Library": {
        "message": "Библиотека"
    },
    "Like it": {
        "message": "Нравится"
    },
    "Loading": {
        "message": "Загрузка"
    },
    "Loading site...": {
        "message": "Загрузка сайта..."
    },
    "Log in": {
        "message": "Войти"
    },
    "Log out": {
        "message": "Выйти"
    },
    "Love Hola?": {
        "message": "Нравится Hola?"
    },
    "Love it": {
        "message": "Любить это"
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
        "message": "Черногория"
    },
    "MF": {
        "message": "Остров Святого Мартина"
    },
    "MG": {
        "message": "Мадагаскар"
    },
    "MH": {
        "message": "Маршалловы Острова"
    },
    "MI": {
        "message": "Мидуэй"
    },
    "MK": {
        "message": "Македония"
    },
    "ML": {
        "message": "Мали"
    },
    "MM": {
        "message": "Мьянма"
    },
    "MN": {
        "message": "Монголия"
    },
    "MO": {
        "message": "Макао (особый административный район КНР)"
    },
    "MP": {
        "message": "Северные Марианские Острова"
    },
    "MQ": {
        "message": "Мартиник"
    },
    "MR": {
        "message": "Мавритания"
    },
    "MS": {
        "message": "Монсеррат"
    },
    "MT": {
        "message": "Мальта"
    },
    "MU": {
        "message": "Маврикий"
    },
    "MV": {
        "message": "Мальдивы"
    },
    "MW": {
        "message": "Малави"
    },
    "MX": {
        "message": "Мексика"
    },
    "MY": {
        "message": "Малайзия"
    },
    "MZ": {
        "message": "Мозамбик"
    },
    "Make your Internet better with $1": {
        "message": "Сделайте ваш Интернет лучше с $1"
    },
    "Menu": {
        "message": "Меню"
    },
    "Might not work on all sites": {
        "message": "Может не работать на некоторых сайтах"
    },
    "Mode": {
        "message": "Режим"
    },
    "More countries": {
        "message": "Ещё страны"
    },
    "More sites...": {
        "message": "Больше сайтов..."
    },
    "More...": {
        "message": "Еще..."
    },
    "My Account": {
        "message": "Аккаунт"
    },
    "My History": {
        "message": "Моя история"
    },
    "My Settings": {
        "message": "Настройки"
    },
    "My favorites": {
        "message": "Избранное"
    },
    "NA": {
        "message": "Намибия"
    },
    "NC": {
        "message": "Новая Каледония"
    },
    "NE": {
        "message": "Нигер"
    },
    "NF": {
        "message": "Остров Норфолк"
    },
    "NG": {
        "message": "Нигерия"
    },
    "NI": {
        "message": "Никарагуа"
    },
    "NL": {
        "message": "Нидерланды"
    },
    "NO": {
        "message": "Норвегия"
    },
    "NP": {
        "message": "Непал"
    },
    "NQ": {
        "message": "Земля Королевы Мод"
    },
    "NR": {
        "message": "Науру"
    },
    "NT": {
        "message": "Нейтральная зона"
    },
    "NU": {
        "message": "Ниуе"
    },
    "NZ": {
        "message": "Новая Зеландия"
    },
    "Need Help?": {
        "message": "Нужна помощь?"
    },
    "Never ask me again": {
        "message": "Никогда не спрашивать"
    },
    "Never be a peer": {
        "message": "Никогда не быть пиром"
    },
    "No": {
        "message": "Нет"
    },
    "No idle peers found.": {
        "message": "Свободных пиров не найдено."
    },
    "No recent videos found": {
        "message": "Не найдено ни Последние видео"
    },
    "No saved videos found": {
        "message": "Не найдено ни сохраненные видео"
    },
    "No title": {
        "message": "Без названия"
    },
    "No videos found": {
        "message": "Не найдены"
    },
    "No videos found on active page": {
        "message": "Нет результатов по активной странице"
    },
    "No, I need help": {
        "message": "Нет, мне нужна помощь"
    },
    "No, Thanks": {
        "message": "Нет, спасибо"
    },
    "No, fix it": {
        "message": "Нет, исправьте это"
    },
    "Not working?": {
        "message": "Не работает?"
    },
    "Number of users that pressed not working": {
        "message": "Число пользователей, которые нажали 'не работает'"
    },
    "Number of users that use this option": {
        "message": "Число пользователей, которые используют эту возможность"
    },
    "OM": {
        "message": "Оман"
    },
    "Off": {
        "message": "Выкл"
    },
    "Oh, yes!": {
        "message": "О, да!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Старая версия Firefox. Нажмите <a>здесь</a> для обновления."
    },
    "On": {
        "message": "Вкл"
    },
    "Open Media Player": {
        "message": "Открыть Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Наш новый Mplayer скоро!"
    },
    "PA": {
        "message": "Панама"
    },
    "PC": {
        "message": "Тихоокеанских островов подопечная территория"
    },
    "PE": {
        "message": "Перу"
    },
    "PF": {
        "message": "Французская Полинезия"
    },
    "PG": {
        "message": "Папуа-Новая Гвинея"
    },
    "PH": {
        "message": "Филиппины"
    },
    "PK": {
        "message": "Пакистан"
    },
    "PL": {
        "message": "Польша"
    },
    "PM": {
        "message": "Сен-Пьер и Микелон"
    },
    "PN": {
        "message": "Питкерн"
    },
    "PR": {
        "message": "Пуэрто-Рико"
    },
    "PS": {
        "message": "Палестинская автономия"
    },
    "PT": {
        "message": "Португалия"
    },
    "PU": {
        "message": "США Разное тихоокеанских островов"
    },
    "PW": {
        "message": "Палау"
    },
    "PY": {
        "message": "Парагвай"
    },
    "PZ": {
        "message": "Зона Панамского канала"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Пожалуйста, отключите другие <a>расширения</a>, которые могут контролировать настройки прокси-сервера, такие как блокировщики рекламы, другие услуги VPN и т.д."
    },
    "Please enter a valid email address.": {
        "message": "Пожалуйста, введите действующий адрес электронной почты."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Пожалуйста, введите адрес веб-сайта, например facebook.com"
    },
    "Please help us get better": {
        "message": "Пожалуйста, помогите нам стать лучше"
    },
    "Popular in $1": {
        "message": "Популярные в $1"
    },
    "Popular in the world": {
        "message": "Популярные в мире"
    },
    "Popular sites": {
        "message": "Популярные сайты"
    },
    "Premium": {
        "message": "Премиум"
    },
    "QA": {
        "message": "Катар"
    },
    "QO": {
        "message": "Французкая Океания"
    },
    "RE": {
        "message": "Реюньон"
    },
    "RO": {
        "message": "Румыния"
    },
    "RS": {
        "message": "Сербия"
    },
    "RU": {
        "message": "Россия"
    },
    "RW": {
        "message": "Руанда"
    },
    "Rate us": {
        "message": "Оцените нас"
    },
    "Recent Videos": {
        "message": "Последние видео"
    },
    "Reload": {
        "message": "Перезапустить"
    },
    "Reload Hola": {
        "message": "Перезапустить Hola"
    },
    "Remember server": {
        "message": "Запомнить сервер"
    },
    "Report a problem": {
        "message": "Сообщить об ошибке"
    },
    "Retry safe mode": {
        "message": "Повторите безопасный режим"
    },
    "SA": {
        "message": "Саудовская Аравия"
    },
    "SB": {
        "message": "Соломоновы Острова"
    },
    "SC": {
        "message": "Сейшельские Острова"
    },
    "SD": {
        "message": "Судан"
    },
    "SE": {
        "message": "Швеция"
    },
    "SG": {
        "message": "Сингапур"
    },
    "SH": {
        "message": "Остров Святой Елены"
    },
    "SI": {
        "message": "Словения"
    },
    "SJ": {
        "message": "Свальбард и Ян-Майен"
    },
    "SK": {
        "message": "Словакия"
    },
    "SL": {
        "message": "Сьерра-Леоне"
    },
    "SM": {
        "message": "Сан-Марино"
    },
    "SN": {
        "message": "Сенегал"
    },
    "SO": {
        "message": "Сомали"
    },
    "SR": {
        "message": "Суринам"
    },
    "ST": {
        "message": "Сан-Томе и Принсипи"
    },
    "SU": {
        "message": "Союз Советских Социалистических Республик"
    },
    "SV": {
        "message": "Сальвадор"
    },
    "SY": {
        "message": "Сирийская Арабская Республика"
    },
    "SZ": {
        "message": "Свазиленд"
    },
    "Safe": {
        "message": "Безопасно"
    },
    "Safe mode": {
        "message": "Безопасный режим"
    },
    "Save": {
        "message": "Сохранить"
    },
    "Saved Videos": {
        "message": "Сохраненные Видео"
    },
    "Saved for later": {
        "message": "Сохранены для последующего"
    },
    "Search video title": {
        "message": "Поиск видео название"
    },
    "Select a Country": {
        "message": "Выберите страну"
    },
    "Select site to unblock": {
        "message": "Выберите сайт, чтобы разблокировать"
    },
    "Server saved!": {
        "message": "Сервер сохранен!"
    },
    "Set safe mode for $1 $2": {
        "message": "Установите безопасный режим для $1 $2"
    },
    "Settings": {
        "message": "Настройки"
    },
    "Share": {
        "message": "Поделиться"
    },
    "Share $1 on $2": {
        "message": "Поделитесь $1 на $2"
    },
    "Share $1 via $2": {
        "message": "Поделитесь $1 с помощью $2"
    },
    "Share with friends!": {
        "message": "Поделиться с друзьями!"
    },
    "Sign up": {
        "message": "Регистрация"
    },
    "Solve buffering": {
        "message": "Решите проблемы буферизации"
    },
    "Solve buffering problems with": {
        "message": "Решение проблем буферизации с"
    },
    "Solves it": {
        "message": "Решает ее"
    },
    "Staff Picks": {
        "message": "Звёздные войны"
    },
    "Start Hola": {
        "message": "Запустить Hola"
    },
    "Starting...": {
        "message": "Запуск..."
    },
    "Stop Hola": {
        "message": "Остановить Hola"
    },
    "Stopping peer routing...": {
        "message": "Отключение пиров..."
    },
    "Stream": {
        "message": "Поток"
    },
    "Stream Instantly": {
        "message": "Поток Мгновенно"
    },
    "Submit": {
        "message": "Передать"
    },
    "Support Hola": {
        "message": "Поддержать Hola"
    },
    "TA": {
        "message": "Тристан-да-Кунья"
    },
    "TC": {
        "message": "Острова Тёркс и Кайкос"
    },
    "TD": {
        "message": "Чад"
    },
    "TF": {
        "message": "Французские Южные Территории"
    },
    "TG": {
        "message": "Того"
    },
    "TH": {
        "message": "Таиланд"
    },
    "TJ": {
        "message": "Таджикистан"
    },
    "TK": {
        "message": "Токелау"
    },
    "TL": {
        "message": "Восточный Тимор"
    },
    "TM": {
        "message": "Туркменистан"
    },
    "TN": {
        "message": "Тунис"
    },
    "TO": {
        "message": "Тонга"
    },
    "TR": {
        "message": "Турция"
    },
    "TT": {
        "message": "Тринидад и Тобаго"
    },
    "TV": {
        "message": "Тувалу"
    },
    "TW": {
        "message": "Тайвань"
    },
    "TZ": {
        "message": "Танзания"
    },
    "Talk to us on $1": {
        "message": "Обращайтесь к нам по $1"
    },
    "Tell friends about $1": {
        "message": "Рассказать друзьям про $1"
    },
    "Testing connection...": {
        "message": "Проверка соединения..."
    },
    "Thank you!": {
        "message": "Спасибо!"
    },
    "There seems to be an error": {
        "message": "Кажется, есть ошибка"
    },
    "Top popular sites": {
        "message": "Топ популярных сайтов"
    },
    "Translate to your language": {
        "message": "Переведите на ваш язык"
    },
    "Try again": {
        "message": "Повторить"
    },
    "Try another server": {
        "message": "Попробовать другой сервер"
    },
    "Try it": {
        "message": "Попробуйте"
    },
    "Try safe mode": {
        "message": "Попробуйте безопасный режим"
    },
    "Try to <span>reload</span>": {
        "message": "Попробуйте <span>перезапустить</span>"
    },
    "Trying another peer...": {
        "message": "Попытка с другим пиром ..."
    },
    "Turn off Accelerator": {
        "message": "Выключите Accelerator"
    },
    "Turn off Hola": {
        "message": "Выключите Hola"
    },
    "Turn on Accelerator": {
        "message": "Включите Accelerator"
    },
    "Turn on Hola": {
        "message": "Включите Hola"
    },
    "Turn on to get started": {
        "message": "Включите, чтобы начать работу"
    },
    "UA": {
        "message": "Украина"
    },
    "UG": {
        "message": "Уганда"
    },
    "UM": {
        "message": "Внешние малые острова (США)"
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
    "Unblocker": {
        "message": "Разблокирование"
    },
    "Unblocker is disabled": {
        "message": "Unblocker отключен"
    },
    "Unblocker?": {
        "message": "Разблокировать?"
    },
    "Update": {
        "message": "Обновление"
    },
    "Upgrade": {
        "message": "Улучшение"
    },
    "Using": {
        "message": "Использование"
    },
    "Using Hola": {
        "message": "Использование Hola"
    },
    "VA": {
        "message": "Ватикан"
    },
    "VC": {
        "message": "Сент-Винсент и Гренадины"
    },
    "VD": {
        "message": "Северный Вьетнам"
    },
    "VE": {
        "message": "Венесуэла"
    },
    "VG": {
        "message": "Британские Виргинские Острова"
    },
    "VI": {
        "message": "Американские Виргинские острова"
    },
    "VN": {
        "message": "Вьетнам"
    },
    "VPN Premium": {
        "message": "VPN Премиум"
    },
    "VU": {
        "message": "Вануату"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Очень старая версия Chrome. Обновите Chrome для того, чтобы использовать Hola. <a>Обновление</a>"
    },
    "Video": {
        "message": "Видео"
    },
    "Video stuck?": {
        "message": "Видео застряло?"
    },
    "Videos available for instant streaming": {
        "message": "Видео доступно для мгновенного потокового"
    },
    "WF": {
        "message": "Уоллис и Футуна"
    },
    "WK": {
        "message": "Уэйк"
    },
    "WS": {
        "message": "Самоа"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Хотите использовать Hola на других устройствах? (Xbox, PS, Apple TV, iPhone...). Нажмите здесь"
    },
    "Want to know more?": {
        "message": "Хотите знать больше?"
    },
    "Watch Now": {
        "message": "Смотреть сейчас"
    },
    "We found $1 videos": {
        "message": "Мы нашли $1 видео"
    },
    "We will be in touch with you soon": {
        "message": "Мы свяжемся с вами в ближайшее время"
    },
    "Working!": {
        "message": "Работает!"
    },
    "Working?": {
        "message": "Работает?"
    },
    "Works on all sites but slower": {
        "message": "Работает на всех сайтах, но более медленными"
    },
    "YD": {
        "message": "Народно-Демократическая Республика Йемен"
    },
    "YE": {
        "message": "Йемен"
    },
    "YT": {
        "message": "Майотта"
    },
    "Yes": {
        "message": "Да"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Вам необходимо обновить Opera до последней версии, чтобы использовать Hola. Нажмите <a>здесь</a> , чтобы обновить."
    },
    "ZA": {
        "message": "Южная Африка"
    },
    "ZM": {
        "message": "Замбия"
    },
    "ZW": {
        "message": "Зимбабве"
    },
    "ZZ": {
        "message": "Неизвестный или недействительный регион"
    },
    "app_desc": {
        "message": "Просматривайте сайты, заблокированные в вашей стране, компании или школе с помощью Hola! Hola - бесплатный и удобный сервис!"
    },
    "app_name": {
        "message": "Улучшенный интернет с Hola"
    },
    "back to": {
        "message": "вернуться к"
    },
    "changing...": {
        "message": "замена..."
    },
    "cool sites": {
        "message": "классные сайты"
    },
    "current site": {
        "message": "Текущий сайт"
    },
    "day": {
        "message": "день"
    },
    "days": {
        "message": "дней"
    },
    "even more...": {
        "message": "еще больше..."
    },
    "mode": {
        "message": "режим"
    },
    "more options...": {
        "message": "дополнительные опции..."
    },
    "not working?": {
        "message": "не работает?"
    },
    "not working? try another server": {
        "message": "не работает? попробовать другой сервер"
    },
    "on this page": {
        "message": "На этой странице"
    },
    "sites that are censored": {
        "message": "сайты с цензурой"
    },
    "start": {
        "message": "запустить"
    },
    "working? remember": {
        "message": "работает? сохранить"
    }
};
return E; });