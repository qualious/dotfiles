'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " чрез "
    },
    "$1 Buffering?": {
        "message": "$1 Буфериращ?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola да работят с $2\n\nКликнете тук, за да направи същото: $3\n\nТой се инсталира Hola, което ми позволява да сърфирате в интернет по-бърза и достъп до $4$5 пет"
    },
    "$1 from $2": {
        "message": "$1 от $2"
    },
    "$1 not found": {
        "message": "$1 не е намерен"
    },
    "$1 via Hola": {
        "message": "$1 чрез Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Някои Hola функции не са налични на вашия версия)"
    },
    "AC": {
        "message": "Остров Възнесение"
    },
    "AD": {
        "message": "Андора"
    },
    "AE": {
        "message": "Обединени арабски емирства"
    },
    "AF": {
        "message": "Афганистан"
    },
    "AG": {
        "message": "Антигуа и Барбуда"
    },
    "AI": {
        "message": "Ангуила"
    },
    "AL": {
        "message": "Албания"
    },
    "AM": {
        "message": "Армения"
    },
    "AN": {
        "message": "Холандски Антили"
    },
    "AO": {
        "message": "Ангола"
    },
    "AQ": {
        "message": "Антарктика"
    },
    "AR": {
        "message": "Аржентина"
    },
    "AS": {
        "message": "Американско Самоа"
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
        "message": "Аландски о-ви"
    },
    "AZ": {
        "message": "Азербайджан"
    },
    "About": {
        "message": "Около"
    },
    "About Hola": {
        "message": "За Hola"
    },
    "Accelerator": {
        "message": "Ускорител"
    },
    "Accelerator is": {
        "message": "Accelerator е"
    },
    "Access $1 - cool site!": {
        "message": "Достъп $1 - прохладно място!"
    },
    "Access $1?": {
        "message": "Достъп до $1?"
    },
    "Access any site from any country, free": {
        "message": "Достъп до някой сайт от всяка страна, без"
    },
    "Access cool sites": {
        "message": "Достъп готини сайтове"
    },
    "Access more sites": {
        "message": "Достъп до повече сайтове"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Сайтове за достъп цензурирани във вашата страна и за ускоряване на вашия интернет с Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Достъп до $1 с Hola"
    },
    "Account": {
        "message": "Сметка"
    },
    "Account type": {
        "message": "Тип на профила"
    },
    "Activating...": {
        "message": "Активиране..."
    },
    "All ($1)": {
        "message": "All ($1),"
    },
    "Apply settings...": {
        "message": "Приложете настройките ..."
    },
    "Author site:": {
        "message": "Автор сайт:"
    },
    "Author:": {
        "message": "Автор:"
    },
    "Awesome!": {
        "message": "Страхотно!"
    },
    "BA": {
        "message": "Босна и Херцеговина"
    },
    "BB": {
        "message": "Барбадос"
    },
    "BD": {
        "message": "Бангладеш"
    },
    "BE": {
        "message": "Белгия"
    },
    "BF": {
        "message": "Буркина Фасо"
    },
    "BG": {
        "message": "България"
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
        "message": "Сейнт Бартоломей"
    },
    "BM": {
        "message": "Бермуда"
    },
    "BN": {
        "message": "Бруней Дарусалам"
    },
    "BO": {
        "message": "Боливия"
    },
    "BQ": {
        "message": "Британска антарктическа територия"
    },
    "BR": {
        "message": "Бразилия"
    },
    "BS": {
        "message": "Бахами"
    },
    "BT": {
        "message": "Бутан"
    },
    "BV": {
        "message": "Остров Буве"
    },
    "BW": {
        "message": "Ботсуана"
    },
    "BY": {
        "message": "Беларус"
    },
    "BZ": {
        "message": "Белиз"
    },
    "Back to $1": {
        "message": "Обратно до $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Бъдете първия, за да получите Hola за iPhone / IPAD - Регистрирайте се сега:"
    },
    "Buffering problems?": {
        "message": "Проблеми буфери?"
    },
    "Buffering?": {
        "message": "Буфериращ?"
    },
    "CA": {
        "message": "Канада"
    },
    "CC": {
        "message": "Кокосови (Кийлинг) острови"
    },
    "CD": {
        "message": "Демократична република Конго"
    },
    "CF": {
        "message": "Централноафриканска Република"
    },
    "CG": {
        "message": "Конго"
    },
    "CH": {
        "message": "Швейцария"
    },
    "CI": {
        "message": "Бряг на слоновата кост"
    },
    "CK": {
        "message": "Острови Кук"
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
        "message": "Клипертън остров"
    },
    "CR": {
        "message": "Коста Рика"
    },
    "CS": {
        "message": "Сърбия и Черна гора"
    },
    "CT": {
        "message": "Canton и Ендербъри острови"
    },
    "CU": {
        "message": "Куба"
    },
    "CV": {
        "message": "Кабо Верде"
    },
    "CX": {
        "message": "Остров Кристмас"
    },
    "CY": {
        "message": "Кипър"
    },
    "CZ": {
        "message": "Чешка република"
    },
    "Changing country...": {
        "message": "Смяна на страна ..."
    },
    "Check out Hola for $1!": {
        "message": "Вижте Hola за $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Вижте Hola за мобилни устройства"
    },
    "Check your Internet connection": {
        "message": "Уверете се, че имате интернет"
    },
    "Choose<br>Country": {
        "message": "Избирам <br> Страна"
    },
    "Configuring...": {
        "message": "Конфигуриране на ..."
    },
    "Connecting...": {
        "message": "Свързване ..."
    },
    "Cool site!": {
        "message": "Cool сайт!"
    },
    "Creative licenses": {
        "message": "Creative лицензи"
    },
    "DD": {
        "message": "Източна Германия"
    },
    "DE": {
        "message": "Германия"
    },
    "DG": {
        "message": "Диего Гарсия"
    },
    "DJ": {
        "message": "Джибути"
    },
    "DK": {
        "message": "Дания"
    },
    "DM": {
        "message": "Доминика"
    },
    "DO": {
        "message": "Доминиканска република"
    },
    "DZ": {
        "message": "Алжир"
    },
    "Delete": {
        "message": "Изтривам"
    },
    "Deleted from my list": {
        "message": "Заличени от моя списък"
    },
    "Did it work?": {
        "message": "Получи ли се?"
    },
    "Did you experience any buffering?": {
        "message": "Срещали ли сте буфериране?"
    },
    "Disliked it": {
        "message": "Не ми хареса това"
    },
    "Don't show again for $1 for one week": {
        "message": "Да не се показват отново за $1 за една седмица"
    },
    "Don't show again for any site for one week": {
        "message": "Не се показва отново за всеки сайт за една седмица"
    },
    "Downloading": {
        "message": "Изтеглянето"
    },
    "EA": {
        "message": "Сеута и Мелила"
    },
    "EC": {
        "message": "Еквадор"
    },
    "EE": {
        "message": "Естония"
    },
    "EG": {
        "message": "Египет"
    },
    "EH": {
        "message": "Западна Сахара"
    },
    "ER": {
        "message": "Еритрея"
    },
    "ES": {
        "message": "Испания"
    },
    "ET": {
        "message": "Етиопия"
    },
    "EU": {
        "message": "Европейски съюз"
    },
    "Enable": {
        "message": "Активирайте"
    },
    "Enable Hola Accelerator": {
        "message": "Активирайте Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Наслаждавайте се!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Радвайки Hola за Chrome?"
    },
    "Enter site to access": {
        "message": "Въведете сайт за достъп"
    },
    "Enter your email": {
        "message": "Въведете вашия имейл"
    },
    "FI": {
        "message": "Финландия"
    },
    "FJ": {
        "message": "Фиджи"
    },
    "FK": {
        "message": "Фолклендски острови"
    },
    "FM": {
        "message": "Микронезия, Обединени Щати"
    },
    "FO": {
        "message": "Фарьорски острови"
    },
    "FQ": {
        "message": "Френски южни и антарктически територии"
    },
    "FR": {
        "message": "Франция"
    },
    "FX": {
        "message": "Metropolitan Франция"
    },
    "Fast": {
        "message": "Бърз"
    },
    "Finding new peers...": {
        "message": "Намирането на нови колеги ..."
    },
    "Finding peers...": {
        "message": "Намирането връстници ..."
    },
    "Free": {
        "message": "Безплатно"
    },
    "From": {
        "message": "От"
    },
    "Full list": {
        "message": "Пълен списък"
    },
    "GA": {
        "message": "Габон"
    },
    "GB": {
        "message": "Обединено кралство"
    },
    "GD": {
        "message": "Гренада"
    },
    "GE": {
        "message": "Грузия"
    },
    "GF": {
        "message": "Френска Гвиана"
    },
    "GG": {
        "message": "о. Гърнзи"
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
        "message": "Екваториална Гвинея"
    },
    "GR": {
        "message": "Гърция"
    },
    "GS": {
        "message": "Южна Джорджия и Южни Сандвичеви Острови"
    },
    "GT": {
        "message": "Гватемала"
    },
    "GU": {
        "message": "Гуам"
    },
    "GW": {
        "message": "Гвинея-Бисау"
    },
    "GY": {
        "message": "Гвиана"
    },
    "Get 24/7 Unblocking": {
        "message": "Вземи 24/7 за деблокиране"
    },
    "Get Free Premium": {
        "message": "Вземи безплатен Premium"
    },
    "Get Hola Accelerator": {
        "message": "Вземи Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Вземи Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Вземи Hola Plus за не-прекъснато, без реклами услуга."
    },
    "Get Hola Premium": {
        "message": "Вземи Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Вземи Hola за Android"
    },
    "Get Premium support": {
        "message": "Вземи Premium подкрепа"
    },
    "Get Unlimited Unblocking": {
        "message": "Get Unlimited деблокиране"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Да получите достъп до цензурира сайтове, го Опитайте се сега: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Получите помощ от инженер по Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Вземи най-бързия сървъри"
    },
    "Go": {
        "message": "Отиди"
    },
    "Go Hola Premium": {
        "message": "Отиди Hola Premium"
    },
    "HK": {
        "message": "Хонг-Конг О.А.Р. на Китай"
    },
    "HM": {
        "message": "Остров Хърд и Острови Макдоналд"
    },
    "HN": {
        "message": "Хондурас"
    },
    "HR": {
        "message": "Хърватска"
    },
    "HT": {
        "message": "Хаити"
    },
    "HU": {
        "message": "Унгария"
    },
    "Hate it": {
        "message": "Мразя го"
    },
    "Help": {
        "message": "Помощ"
    },
    "Hey,\n\nI'm using": {
        "message": "Хей,\n\nаз съм с"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Здравейте,\n\nаз започна да използва $1 ($2). Това ми позволява да сърфирате в интернет по-бърза и достъп до $3 в моята страна."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola не може да работи, защото друго разширение е контролирането на вашите прокси настройки."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola не работи добре в Windows 8 режим. Моля, преминете към работния плот режим. Кликнете <a> тук </a> за инструкции"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola не е налична в момента, но ние работим върху него."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola е изключен, кликнете, за да включите"
    },
    "Hola site list": {
        "message": "Списък Hola сайт"
    },
    "I can now access $1 from any country!": {
        "message": "Сега мога да работят с $1, от всяка страна!"
    },
    "I did not experience any buffering": {
        "message": "Не е срещала буфериране"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Просто преглеждана цензурирана сайт с помощта на Hola за $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Аз съм с $1 $2 видите в моята страна, и да сърфирате по-бързо!"
    },
    "IC": {
        "message": "Канарски острови"
    },
    "ID": {
        "message": "Индонезия"
    },
    "IE": {
        "message": "Ирландия"
    },
    "IL": {
        "message": "Израел"
    },
    "IM": {
        "message": "Острови Ман"
    },
    "IN": {
        "message": "Индия"
    },
    "IO": {
        "message": "Британски територии в Индийския океан"
    },
    "IQ": {
        "message": "Ирак"
    },
    "IR": {
        "message": "Иран, Ислямска република"
    },
    "IS": {
        "message": "Исландия"
    },
    "IT": {
        "message": "Италия"
    },
    "Improve translation": {
        "message": "Подобряване на превода"
    },
    "Initializing...": {
        "message": "Инициализиране ..."
    },
    "Install": {
        "message": "Инсталирам"
    },
    "Install Accelerator": {
        "message": "Инсталирайте Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Настанявам Свободен Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Инсталирайте Hola Engine да продължите да използвате Hola безплатно"
    },
    "Instantly watch any torrent Video": {
        "message": "Мигновено гледате всеки торент Video"
    },
    "Invite friends - free Premium.": {
        "message": "Поканете приятели - безплатно Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Поканете приятели. Вземи Premium."
    },
    "It was okay": {
        "message": "Това е добре"
    },
    "JE": {
        "message": "о. Джързи"
    },
    "JM": {
        "message": "Ямайка"
    },
    "JO": {
        "message": "Йордания"
    },
    "JP": {
        "message": "Япония"
    },
    "KE": {
        "message": "Кения"
    },
    "KG": {
        "message": "Киргизстан"
    },
    "KH": {
        "message": "Камбоджа"
    },
    "KI": {
        "message": "Кирибати"
    },
    "KM": {
        "message": "Комори"
    },
    "KN": {
        "message": "Сейнт Китс и Невис"
    },
    "KP": {
        "message": "Корея, Северна"
    },
    "KR": {
        "message": "Корея, Южна"
    },
    "KW": {
        "message": "Кувейт"
    },
    "KY": {
        "message": "Кайманови острови"
    },
    "KZ": {
        "message": "Казахстан"
    },
    "LA": {
        "message": "Народна демократична република Лаос"
    },
    "LB": {
        "message": "Ливан"
    },
    "LC": {
        "message": "Сейнт Лусия"
    },
    "LI": {
        "message": "Лихтенщайн"
    },
    "LK": {
        "message": "Шри Ланка"
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
        "message": "Либийска арабска джамахирия"
    },
    "Language": {
        "message": "Език"
    },
    "Library": {
        "message": "Библиотека"
    },
    "Like it": {
        "message": "Харесай го"
    },
    "Loading": {
        "message": "Товарене"
    },
    "Loading site...": {
        "message": "Товарене"
    },
    "Log in": {
        "message": "Влезте в"
    },
    "Log out": {
        "message": "Изход"
    },
    "Love Hola?": {
        "message": "Любовта Hola?"
    },
    "Love it": {
        "message": "Обичам го"
    },
    "MA": {
        "message": "Мароко"
    },
    "MC": {
        "message": "Монако"
    },
    "MD": {
        "message": "Молдова, Република"
    },
    "ME": {
        "message": "Черна гора"
    },
    "MF": {
        "message": "Сейнт Мартин"
    },
    "MG": {
        "message": "Мадагаскар"
    },
    "MH": {
        "message": "Маршалови острови"
    },
    "MK": {
        "message": "Македония, Република"
    },
    "ML": {
        "message": "Мали"
    },
    "MM": {
        "message": "Мианмар"
    },
    "MN": {
        "message": "Монголия"
    },
    "MO": {
        "message": "Макао О.А.Р. на Китай"
    },
    "MP": {
        "message": "Северни Мариански Острови"
    },
    "MQ": {
        "message": "Мартиника"
    },
    "MR": {
        "message": "Мавритания"
    },
    "MS": {
        "message": "Монсерат"
    },
    "MT": {
        "message": "Малта"
    },
    "MU": {
        "message": "Мавриций"
    },
    "MV": {
        "message": "Малдиви"
    },
    "MW": {
        "message": "Малави"
    },
    "MX": {
        "message": "Мексико"
    },
    "MY": {
        "message": "Малайзия"
    },
    "MZ": {
        "message": "Мозамбик"
    },
    "Make your Internet better with $1": {
        "message": "Направете своя Интернет по-добре с $1"
    },
    "Menu": {
        "message": "Меню"
    },
    "Might not work on all sites": {
        "message": "Може и да не работят по всички сайтове"
    },
    "Mode": {
        "message": "Вид"
    },
    "More countries": {
        "message": "Повече страни"
    },
    "More sites...": {
        "message": "още..."
    },
    "More...": {
        "message": "още..."
    },
    "My Account": {
        "message": "Моят профил"
    },
    "My History": {
        "message": "Моята история"
    },
    "My Settings": {
        "message": "Мои Настройки"
    },
    "My favorites": {
        "message": "Моите фаворити"
    },
    "NA": {
        "message": "Намибия"
    },
    "NC": {
        "message": "Нова Каледония"
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
        "message": "Холандия"
    },
    "NO": {
        "message": "Норвегия"
    },
    "NP": {
        "message": "Непал"
    },
    "NQ": {
        "message": "Кралица Мод Land"
    },
    "NR": {
        "message": "Науру"
    },
    "NU": {
        "message": "Ниуе"
    },
    "NZ": {
        "message": "Нова Зеландия"
    },
    "Need Help?": {
        "message": "Нуждаете се от помощ?"
    },
    "Never ask me again": {
        "message": "Никога не ме питай отново"
    },
    "Never be a peer": {
        "message": "Никога не се партньорска"
    },
    "No": {
        "message": "Не"
    },
    "No idle peers found.": {
        "message": "Няма намерени празни връстници."
    },
    "No recent videos found": {
        "message": "Няма намерени последните видеоклипове"
    },
    "No saved videos found": {
        "message": "Няма намерени записани видеоклипове"
    },
    "No title": {
        "message": "Няма заглавие"
    },
    "No videos found": {
        "message": "Няма намерени видеоклипове"
    },
    "No videos found on active page": {
        "message": "Не са намерени върху активната страница видеоклипове"
    },
    "No, Thanks": {
        "message": "Не, благодаря"
    },
    "No, fix it": {
        "message": "Не, го оправя"
    },
    "Not working?": {
        "message": "Не работи?"
    },
    "Number of users that pressed not working": {
        "message": "Брой на потребителите, че не е натиснат, работещи"
    },
    "Number of users that use this option": {
        "message": "Брой на потребителите, които използват тази опция"
    },
    "OM": {
        "message": "Оман"
    },
    "Off": {
        "message": "От"
    },
    "Oh, yes!": {
        "message": "О, да!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Стара версия на Firefox. Натиснете <a> тук </a> за ъпгрейд."
    },
    "On": {
        "message": "На"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Нашата Brand New Mplayer идва скоро!"
    },
    "PA": {
        "message": "Панама"
    },
    "PE": {
        "message": "Перу"
    },
    "PF": {
        "message": "Френска Полинезия"
    },
    "PG": {
        "message": "Папуа Нова Гвинея"
    },
    "PH": {
        "message": "Филипини"
    },
    "PK": {
        "message": "Пакистан"
    },
    "PL": {
        "message": "Полша"
    },
    "PM": {
        "message": "Сен Пиер и Мигелон"
    },
    "PN": {
        "message": "Питкайрн"
    },
    "PR": {
        "message": "Пуерто Рико"
    },
    "PS": {
        "message": "Палестински територии"
    },
    "PT": {
        "message": "Португалия"
    },
    "PU": {
        "message": "САЩ Разни Тихоокеанските острови"
    },
    "PW": {
        "message": "Палау"
    },
    "PY": {
        "message": "Парагвай"
    },
    "PZ": {
        "message": "Зона на Панамския канал"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Моля, деактивирайте други <a>разширения</a>, които смятате, че може да контролира вашите прокси настройки като Ad-блокери, други VPN услуги и т.н."
    },
    "Please enter a valid email address.": {
        "message": "Моля, въведете валиден имейл адрес."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Моля, въведете адрес на уеб сайт, като facebook.com"
    },
    "Please help us get better": {
        "message": "Моля да ни помогне да получите по-добро"
    },
    "Popular in $1": {
        "message": "Търсени в $1"
    },
    "Popular in the world": {
        "message": "Популярни в света"
    },
    "Popular sites": {
        "message": "Популярни сайтове"
    },
    "QA": {
        "message": "Катар"
    },
    "QO": {
        "message": "Отдалечените Океания"
    },
    "RE": {
        "message": "Реюниън"
    },
    "RO": {
        "message": "Румъния"
    },
    "RS": {
        "message": "Сърбия"
    },
    "RU": {
        "message": "Руска федерация"
    },
    "RW": {
        "message": "Руанда"
    },
    "Rate us": {
        "message": "Оцени нас"
    },
    "Recent Videos": {
        "message": "Последни Videos"
    },
    "Reload": {
        "message": "Презареди"
    },
    "Reload Hola": {
        "message": "Презареди Hola"
    },
    "Remember server": {
        "message": "Запомни сървъра"
    },
    "Report a problem": {
        "message": "Съобщи за проблем"
    },
    "Retry safe mode": {
        "message": "Повторен опит безопасен режим"
    },
    "SA": {
        "message": "Саудитска Арабия"
    },
    "SB": {
        "message": "Соломонови острови"
    },
    "SC": {
        "message": "Сейшели"
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
        "message": "Света Елена"
    },
    "SI": {
        "message": "Словения"
    },
    "SJ": {
        "message": "Свалбард и Ян Майен"
    },
    "SK": {
        "message": "Словакия"
    },
    "SL": {
        "message": "Сиера Леоне"
    },
    "SM": {
        "message": "Сан Марино"
    },
    "SN": {
        "message": "Сенегал"
    },
    "SO": {
        "message": "Сомалия"
    },
    "SR": {
        "message": "Суринам"
    },
    "ST": {
        "message": "Сао Томе и Принципе"
    },
    "SU": {
        "message": "Съюз на съветските социалистически републики"
    },
    "SV": {
        "message": "Ел Салвадор"
    },
    "SY": {
        "message": "Сирийска арабска република"
    },
    "SZ": {
        "message": "Суазиленд"
    },
    "Safe": {
        "message": "Безопасен"
    },
    "Safe mode": {
        "message": "Безопасен режим"
    },
    "Saved Videos": {
        "message": "Запазени Videos"
    },
    "Saved for later": {
        "message": "Запазено за по-късно"
    },
    "Search video title": {
        "message": "Търсене на заглавието"
    },
    "Select a Country": {
        "message": "Изберете държава"
    },
    "Select site to unblock": {
        "message": "Изберете място за деблокиране"
    },
    "Server saved!": {
        "message": "Сървър спасен!"
    },
    "Set safe mode for $1 $2": {
        "message": "Определете безопасен режим за $1 $2"
    },
    "Settings": {
        "message": "Настройки"
    },
    "Share": {
        "message": "Дял"
    },
    "Share $1 on $2": {
        "message": "Сподели $1 в $2"
    },
    "Share $1 via $2": {
        "message": "Сподели $1 през $2"
    },
    "Share with friends!": {
        "message": "Сподели с приятели!"
    },
    "Sign up": {
        "message": "Регистрирайте се"
    },
    "Solve buffering": {
        "message": "Решете буфериране"
    },
    "Solve buffering problems with": {
        "message": "Решете проблемите с буферни"
    },
    "Solves it": {
        "message": "Той решава"
    },
    "Staff Picks": {
        "message": "Прогнози за персонала"
    },
    "Start Hola": {
        "message": "начало"
    },
    "Starting...": {
        "message": "Като се започне..."
    },
    "Stopping peer routing...": {
        "message": "Спирането на партньорска маршрутизация..."
    },
    "Stream": {
        "message": "Поток"
    },
    "Stream Instantly": {
        "message": "Поток Мигновено"
    },
    "Submit": {
        "message": "Подаване"
    },
    "Support Hola": {
        "message": "Подкрепа Hola"
    },
    "TA": {
        "message": "Тристан да Куня"
    },
    "TC": {
        "message": "Острови Туркс и Кайкос"
    },
    "TD": {
        "message": "Чад"
    },
    "TF": {
        "message": "Френски южни територии"
    },
    "TG": {
        "message": "Того"
    },
    "TH": {
        "message": "Тайланд"
    },
    "TJ": {
        "message": "Таджикистан"
    },
    "TK": {
        "message": "Токелау"
    },
    "TL": {
        "message": "Източен Тимор"
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
        "message": "Тайван"
    },
    "TZ": {
        "message": "Танзания"
    },
    "Talk to us on $1": {
        "message": "Говорете с нас с по $1"
    },
    "Tell friends about $1": {
        "message": "Кажете на приятелите си за $1"
    },
    "Testing connection...": {
        "message": "Тестване на свързване..."
    },
    "Thank you!": {
        "message": "Благодаря ви!"
    },
    "There seems to be an error": {
        "message": "Изглежда има грешка"
    },
    "Top popular sites": {
        "message": "Най-популярни сайтове"
    },
    "Translate to your language": {
        "message": "Преведи на вашия език"
    },
    "Try again": {
        "message": "Опитайте отново"
    },
    "Try another server": {
        "message": "Опитайте друг сървър"
    },
    "Try it": {
        "message": "Опитайте се да го"
    },
    "Try safe mode": {
        "message": "Опитайте безопасен режим"
    },
    "Try to <span>reload</span>": {
        "message": "Опитайте се да <span> презареди </span>"
    },
    "Trying another peer...": {
        "message": "Опитвайки друга партньорска..."
    },
    "Turn off Accelerator": {
        "message": "Изключете Accelerator"
    },
    "Turn off Hola": {
        "message": "Изключете Hola"
    },
    "Turn on Accelerator": {
        "message": "Включете Accelerator"
    },
    "Turn on Hola": {
        "message": "Включете Hola"
    },
    "Turn on to get started": {
        "message": "Включете, за да започнете"
    },
    "UA": {
        "message": "Украйна"
    },
    "UG": {
        "message": "Уганда"
    },
    "UM": {
        "message": "САЩ - външни острови"
    },
    "US": {
        "message": "САЩ"
    },
    "UY": {
        "message": "Уругвай"
    },
    "UZ": {
        "message": "Узбекистан"
    },
    "Unblocker is disabled": {
        "message": "Unblocker е забранено"
    },
    "Update": {
        "message": "Обновете"
    },
    "Upgrade": {
        "message": "Обновете"
    },
    "Using": {
        "message": "Използване"
    },
    "Using Hola": {
        "message": "Използването на Hola"
    },
    "VA": {
        "message": "Свещено море (Ватиканска държава)"
    },
    "VC": {
        "message": "Сейнт Винсънт и Гренадини"
    },
    "VD": {
        "message": "Северен Виетнам"
    },
    "VE": {
        "message": "Венецуела"
    },
    "VG": {
        "message": "Британски Вирджински острони"
    },
    "VI": {
        "message": "САЩ, Вирджински острови"
    },
    "VN": {
        "message": "Виетнам"
    },
    "VU": {
        "message": "Вануату"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Много стара версия на Chrome, <a> Актуална </a> Chrome за използване Hola"
    },
    "Video": {
        "message": "Видео"
    },
    "Video stuck?": {
        "message": "Video остана?"
    },
    "Videos available for instant streaming": {
        "message": "Клипове на разположение за незабавни стрийминг"
    },
    "WF": {
        "message": "Уолис и Футуна"
    },
    "WK": {
        "message": "Уейк"
    },
    "WS": {
        "message": "Самоа"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Искате Hola на други устройства? (Xbox, PS, Apple TV, iPhone ...). Щракнете тук"
    },
    "Want to know more?": {
        "message": "Искате да знаете повече?"
    },
    "Watch Now": {
        "message": "Гледай сега"
    },
    "We found $1 videos": {
        "message": "Открихме $1 видеоклипове"
    },
    "We will be in touch with you soon": {
        "message": "Ние ще се свържем с вас скоро"
    },
    "Working!": {
        "message": "Работа!"
    },
    "Working?": {
        "message": "Работа?"
    },
    "Works on all sites but slower": {
        "message": "Работи на всички сайтове, но по-бавно"
    },
    "YD": {
        "message": "Народнодемократична република Йемен"
    },
    "YE": {
        "message": "Йемен"
    },
    "YT": {
        "message": "Мейот"
    },
    "Yes": {
        "message": "Да"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Трябва да обновите до последната версия на Opera да използва Hola. Натиснете <a>тук, за</a> да обновите."
    },
    "ZA": {
        "message": "Южна Африка"
    },
    "ZM": {
        "message": "Замбия"
    },
    "ZW": {
        "message": "Зимбабве"
    },
    "ZZ": {
        "message": "Непозната или несъществуваща област"
    },
    "app_desc": {
        "message": "Достъп блокирани сайтове във вашата страна, фирма или училище с Hola! Hola е безплатен и лесен за употреба!"
    },
    "app_name": {
        "message": "Hola добро Интернет"
    },
    "back to": {
        "message": "се върна до"
    },
    "changing...": {
        "message": "промяна..."
    },
    "cool sites": {
        "message": "Готини сайтове"
    },
    "current site": {
        "message": "текущия сайт"
    },
    "day": {
        "message": "ден"
    },
    "days": {
        "message": "дни"
    },
    "even more...": {
        "message": "още повече..."
    },
    "mode": {
        "message": "начин"
    },
    "more options...": {
        "message": "повече опции ..."
    },
    "not working?": {
        "message": "не работи?"
    },
    "not working? try another server": {
        "message": "не работи? опитайте друг сървър"
    },
    "on this page": {
        "message": "На тази страница"
    },
    "sites that are censored": {
        "message": "сайтове, които са цензурирани"
    },
    "start": {
        "message": "начало"
    },
    "working? remember": {
        "message": "работи? помня"
    }
};
return E; });