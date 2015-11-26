'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " преко "
    },
    "$1 Buffering?": {
        "message": "$1 Пуферисање?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Хола да приступите $2\n\nКликните овде да уради исто: $3\n\nТо инсталира Хола, што ми омогућава да сурфују Интернетом брже и приступили $4$5"
    },
    "$1 VPN": {
        "message": "$1 ВПН"
    },
    "$1 VPN Premium": {
        "message": "$1 ВПН Премиум"
    },
    "$1 from $2": {
        "message": "$1 од $2"
    },
    "$1 not found": {
        "message": "$1 није пронађен"
    },
    "$1 via Hola": {
        "message": "$1 преко Хола"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Хола неке функције нису доступне од верзије)"
    },
    "AC": {
        "message": "Асценсион Исланд"
    },
    "AD": {
        "message": "Андора"
    },
    "AE": {
        "message": "Уједињени Арапски Емирати"
    },
    "AF": {
        "message": "Авганистан"
    },
    "AG": {
        "message": "Антигве и Барбуда"
    },
    "AI": {
        "message": "Ангвила"
    },
    "AL": {
        "message": "Албанија"
    },
    "AM": {
        "message": "Арменија"
    },
    "AN": {
        "message": "Холандски Антили"
    },
    "AO": {
        "message": "Ангола"
    },
    "AQ": {
        "message": "Антарктик"
    },
    "AR": {
        "message": "Аргентина"
    },
    "AS": {
        "message": "Америчка Самоа"
    },
    "AT": {
        "message": "Аустрија"
    },
    "AU": {
        "message": "Аустралија"
    },
    "AW": {
        "message": "Аруба"
    },
    "AX": {
        "message": "Аландска острва"
    },
    "AZ": {
        "message": "Азербејџан"
    },
    "About": {
        "message": "Око"
    },
    "About Hola": {
        "message": "О Хола"
    },
    "Accelerator": {
        "message": "Акцелератор"
    },
    "Accelerator is": {
        "message": "Аццелератор је"
    },
    "Access $1 - cool site!": {
        "message": "Приступ $1 - Цоол сите!"
    },
    "Access $1?": {
        "message": "Приступите $1?"
    },
    "Access any site from any country, free": {
        "message": "Приступ било који сајт из било које земље, бесплатно"
    },
    "Access cool sites": {
        "message": "Аццесс Цоол сајтове"
    },
    "Access more sites": {
        "message": "Приступне више локација"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Приступ сајтови цензурисани у вашој земљи и да убрза свој Интернет са Хола - Бесплатно!"
    },
    "Accessing $1 with Hola": {
        "message": "Приступање $1 са Хола"
    },
    "Account": {
        "message": "Рачун"
    },
    "Account type": {
        "message": "Тип налога"
    },
    "Activating...": {
        "message": "Активирање..."
    },
    "All ($1)": {
        "message": "Све ($1)"
    },
    "Apply settings...": {
        "message": "Примени подешавања..."
    },
    "Author site:": {
        "message": "Аутор сајта:"
    },
    "Author:": {
        "message": "Аутор:"
    },
    "Awesome!": {
        "message": "Авесоме!"
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
        "message": "Белгија"
    },
    "BF": {
        "message": "Буркина Фасо"
    },
    "BG": {
        "message": "Бугарска"
    },
    "BH": {
        "message": "Бахреин"
    },
    "BI": {
        "message": "Бурунди"
    },
    "BJ": {
        "message": "Бенин"
    },
    "BL": {
        "message": "Свети Бартоломеј"
    },
    "BM": {
        "message": "Бермуда"
    },
    "BN": {
        "message": "Брунеј"
    },
    "BO": {
        "message": "Боливија"
    },
    "BQ": {
        "message": "Бритисх Антарцтиц Территори"
    },
    "BR": {
        "message": "Бразил"
    },
    "BS": {
        "message": "Бахами"
    },
    "BT": {
        "message": "Бутан"
    },
    "BV": {
        "message": "Буве Острва"
    },
    "BW": {
        "message": "Боцвана"
    },
    "BY": {
        "message": "Белорусија"
    },
    "BZ": {
        "message": "Белизе"
    },
    "Back to $1": {
        "message": "Назад на $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Будите први који ће добити Хола за иПхоне / иПад - региструј се одмах:"
    },
    "Browsing": {
        "message": "Бровсинг"
    },
    "Buffering problems?": {
        "message": "Пуферујућа проблеми?"
    },
    "Buffering?": {
        "message": "Пуферисање?"
    },
    "CA": {
        "message": "Канада"
    },
    "CC": {
        "message": "Кокос (Келинг) Острва"
    },
    "CD": {
        "message": "Демократска република Конго"
    },
    "CF": {
        "message": "Централно Афричка Република"
    },
    "CG": {
        "message": "Конго"
    },
    "CH": {
        "message": "Швајцарска"
    },
    "CI": {
        "message": "Обала Слоноваче"
    },
    "CK": {
        "message": "Кукова Острва"
    },
    "CL": {
        "message": "Чиле"
    },
    "CM": {
        "message": "Камерун"
    },
    "CN": {
        "message": "Кина"
    },
    "CO": {
        "message": "Колумбија"
    },
    "CP": {
        "message": "Цлиппертон Исланд"
    },
    "CR": {
        "message": "Костарика"
    },
    "CS": {
        "message": "Србија и Црна Гора"
    },
    "CT": {
        "message": "Кантона и Ендербери Острва"
    },
    "CU": {
        "message": "Куба"
    },
    "CV": {
        "message": "Капе Верде"
    },
    "CX": {
        "message": "Божићна острва"
    },
    "CY": {
        "message": "Кипар"
    },
    "CZ": {
        "message": "Чешка"
    },
    "Changing country...": {
        "message": "Промена земљу..."
    },
    "Check out Hola for $1!": {
        "message": "Цхецк оут Хола за $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Цхецк оут Хола за мобилне уређаје"
    },
    "Check your Internet connection": {
        "message": "Уверите се да имате Интернет"
    },
    "Choose<br>Country": {
        "message": "Изабрати<br>Земља"
    },
    "Configuring...": {
        "message": "Конфигурисање..."
    },
    "Connecting...": {
        "message": "Повезивање..."
    },
    "Cool site!": {
        "message": "Цоол сите!"
    },
    "Creative licenses": {
        "message": "Цреативе лиценце"
    },
    "DD": {
        "message": "Источна Немачка"
    },
    "DE": {
        "message": "Немачка"
    },
    "DG": {
        "message": "Дијего Гарсија"
    },
    "DJ": {
        "message": "Џибути"
    },
    "DK": {
        "message": "Данска"
    },
    "DM": {
        "message": "Доминика"
    },
    "DO": {
        "message": "Доминиканска Република"
    },
    "DZ": {
        "message": "Алжир"
    },
    "Delete": {
        "message": "Избрисати"
    },
    "Deleted from my list": {
        "message": "Избрисана из мог списка"
    },
    "Did it work?": {
        "message": "Да ли то ради?"
    },
    "Did you experience any buffering?": {
        "message": "Да ли сте имали буфферинг?"
    },
    "Disliked it": {
        "message": "Не свиђа ми се"
    },
    "Don't show again for $1 for one week": {
        "message": "Не приказуј поново за $1 за једну недељу"
    },
    "Don't show again for any site for one week": {
        "message": "Не приказуј поново за било који сајт за једну недељу"
    },
    "Downloading": {
        "message": "Преузимање"
    },
    "EA": {
        "message": "Сеута и Мелиља"
    },
    "EC": {
        "message": "Еквадор"
    },
    "EE": {
        "message": "Естонија"
    },
    "EG": {
        "message": "Египат"
    },
    "EH": {
        "message": "Западна Сахара"
    },
    "ER": {
        "message": "Еритреја"
    },
    "ES": {
        "message": "Шпанија"
    },
    "ET": {
        "message": "Етиопија"
    },
    "EU": {
        "message": "европска унија"
    },
    "Enable": {
        "message": "Омогућити"
    },
    "Enable Hola Accelerator": {
        "message": "Омогући хола акцелератор"
    },
    "Enjoy!": {
        "message": "Уживајте!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Уживање Хола за Цхроме?"
    },
    "Enter site to access": {
        "message": "Ентер сите за приступ"
    },
    "Enter your email": {
        "message": "Унесите ваш е-маил"
    },
    "FI": {
        "message": "Финска"
    },
    "FJ": {
        "message": "Фиџи"
    },
    "FK": {
        "message": "Фолкландска Острва"
    },
    "FM": {
        "message": "Микронезија"
    },
    "FO": {
        "message": "Фарска Острва"
    },
    "FQ": {
        "message": "Француске јужне и Антарцтиц територије"
    },
    "FR": {
        "message": "Француска"
    },
    "FX": {
        "message": "Митрополит Француска"
    },
    "Fast": {
        "message": "Брзо"
    },
    "Finding new peers...": {
        "message": "Проналажење нових вршњаке..."
    },
    "Finding peers...": {
        "message": "Проналажење вршњаке..."
    },
    "Free": {
        "message": "Слободан"
    },
    "From": {
        "message": "Фром"
    },
    "Full list": {
        "message": "Пуна листа"
    },
    "GA": {
        "message": "Габон"
    },
    "GB": {
        "message": "Велика Британија"
    },
    "GD": {
        "message": "Гренада"
    },
    "GE": {
        "message": "Грузија"
    },
    "GF": {
        "message": "Француска Гвајана"
    },
    "GG": {
        "message": "Гурнси"
    },
    "GH": {
        "message": "Гана"
    },
    "GI": {
        "message": "Гибралтар"
    },
    "GL": {
        "message": "Гренланд"
    },
    "GM": {
        "message": "Гамбија"
    },
    "GN": {
        "message": "Гвинеја"
    },
    "GP": {
        "message": "Гваделупе"
    },
    "GQ": {
        "message": "Екваторијална Гвинеја"
    },
    "GR": {
        "message": "Грчка"
    },
    "GS": {
        "message": "Јужна Џорџија и Јужна Сендвич Острва"
    },
    "GT": {
        "message": "Гватемала"
    },
    "GU": {
        "message": "Гуам"
    },
    "GW": {
        "message": "Гвинеја-Бисао"
    },
    "GY": {
        "message": "Гвајана"
    },
    "Get 24/7 Unblocking": {
        "message": "Гет 24/7 за деблокаду"
    },
    "Get Free Premium": {
        "message": "Гет Фрее Премиум"
    },
    "Get Hola Accelerator": {
        "message": "Гет хола акцелератор"
    },
    "Get Hola Player": {
        "message": "Гет Хола играча"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Набавите Хола плус за УН-прекида, без реклама сервиса."
    },
    "Get Hola Premium": {
        "message": "Гет хола Премиум"
    },
    "Get Hola for Android": {
        "message": "Набавите Хола за Андроид"
    },
    "Get Premium support": {
        "message": "Гет Премиум подршку"
    },
    "Get Unlimited Unblocking": {
        "message": "Гет Унлимитед деблокаду"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Набавите приступ цензурисани сајтовима, покушајте да га сада: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Потражите помоћ од инжењера преко скипе:"
    },
    "Get the Fastest Servers": {
        "message": "Набавите најбржи Серверс"
    },
    "Go": {
        "message": "Иди"
    },
    "Go Hola Premium": {
        "message": "Иди Хола Премиум"
    },
    "HK": {
        "message": "Хонг Конг С. А. Р. Кина"
    },
    "HM": {
        "message": "Херд и Мекдоналд Острва"
    },
    "HN": {
        "message": "Хондурас"
    },
    "HR": {
        "message": "Хрватска"
    },
    "HT": {
        "message": "Хаити"
    },
    "HU": {
        "message": "Мађарска"
    },
    "Hate it": {
        "message": "Мрзи то"
    },
    "Help": {
        "message": "Помоћ"
    },
    "Hey,\n\nI'm using": {
        "message": "Хеј,\n\nја сам помоћу"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Здраво,\n\nпочео сам да користим $1 ($2). То вам омогућава да сурфују Интернетом брже и приступили $3 у мојој земљи."
    },
    "Hola": {
        "message": "Хола"
    },
    "Hola Accelerator": {
        "message": "Хола Аццелератор"
    },
    "Hola Media Player": {
        "message": "Хола Медиа Плаиер"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Хола не могу да раде јер други продужетак контролише поставке проки."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Хола не ради добро у Виндовс 8 режиму. Молимо вас пребацили на десктоп режим. Кликните <a> овде </a> за упутства"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Хола није доступан сада, али радимо на томе."
    },
    "Hola is off, click it to turn it on": {
        "message": "Хола је искључен, кликните да бисте укључили"
    },
    "Hola site list": {
        "message": "Унблоцкер сајт листа"
    },
    "I can now access $1 from any country!": {
        "message": "Сада можете да приступите $1 из било које земље!"
    },
    "I did not experience any buffering": {
        "message": "Нисам осетите буфферинг"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Управо сам приступљено цензурисану сајт помоћу Хола за $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ја користим $1 да видите $2 у мојој земљи, и сурфујете брже!"
    },
    "IC": {
        "message": "Канарска острва"
    },
    "ID": {
        "message": "Индонезија"
    },
    "IE": {
        "message": "Ирска"
    },
    "IL": {
        "message": "Израел"
    },
    "IM": {
        "message": "Острво Ман"
    },
    "IN": {
        "message": "Индија"
    },
    "IO": {
        "message": "Британска територија у Индијском океану"
    },
    "IQ": {
        "message": "Ирак"
    },
    "IR": {
        "message": "Иран"
    },
    "IS": {
        "message": "Исланд"
    },
    "IT": {
        "message": "Италија"
    },
    "Improve translation": {
        "message": "Побољшати превод"
    },
    "Initializing...": {
        "message": "Покретање..."
    },
    "Install": {
        "message": "Инсталирати"
    },
    "Install Accelerator": {
        "message": "Инсталирајте Аццелератор"
    },
    "Install Free Hola Accelerator": {
        "message": "Инсталирајте Фрее хола акцелератор"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Инсталл Хола Енгине да наставите да користите Хола бесплатно"
    },
    "Instantly watch any torrent Video": {
        "message": "Одмах погледати било који торрент Видео"
    },
    "Invite friends - free Premium.": {
        "message": "Позовите пријатеље - Фрее Премиум."
    },
    "Invite friends. Get Premium.": {
        "message": "Позови пријатеље. Гет Премиум."
    },
    "It was okay": {
        "message": "То је у реду"
    },
    "JE": {
        "message": "Џерси"
    },
    "JM": {
        "message": "Јамајка"
    },
    "JO": {
        "message": "Јордан"
    },
    "JP": {
        "message": "Јапан"
    },
    "JT": {
        "message": "Јохнстон Исланд"
    },
    "KE": {
        "message": "Кенија"
    },
    "KG": {
        "message": "Киргизстан"
    },
    "KH": {
        "message": "Камбоџа"
    },
    "KI": {
        "message": "Кирибати"
    },
    "KM": {
        "message": "Коморска Острва"
    },
    "KN": {
        "message": "Сент Китс и Невис"
    },
    "KP": {
        "message": "Северна Кореја"
    },
    "KR": {
        "message": "Јужна Кореја"
    },
    "KW": {
        "message": "Кувајт"
    },
    "KY": {
        "message": "Кајманска Острва"
    },
    "KZ": {
        "message": "Казахстан"
    },
    "LA": {
        "message": "Лаос"
    },
    "LB": {
        "message": "Либан"
    },
    "LC": {
        "message": "Сент Луција"
    },
    "LI": {
        "message": "Лихтенштајн"
    },
    "LK": {
        "message": "Шри Ланка"
    },
    "LR": {
        "message": "Либерија"
    },
    "LS": {
        "message": "Лесото"
    },
    "LT": {
        "message": "Литванија"
    },
    "LU": {
        "message": "Луксембург"
    },
    "LV": {
        "message": "Летонија"
    },
    "LY": {
        "message": "Либија"
    },
    "Language": {
        "message": "Језик"
    },
    "Library": {
        "message": "Библиотека"
    },
    "Like it": {
        "message": "Допада ми се"
    },
    "Loading": {
        "message": "Утовар"
    },
    "Loading site...": {
        "message": "Утовар"
    },
    "Log in": {
        "message": "Пријави се"
    },
    "Log out": {
        "message": "Одјава"
    },
    "Love Hola?": {
        "message": "Лове Хола?"
    },
    "Love it": {
        "message": "Свиђа ми се"
    },
    "MA": {
        "message": "Мароко"
    },
    "MC": {
        "message": "Монако"
    },
    "MD": {
        "message": "Молдавија"
    },
    "ME": {
        "message": "Црна Гора"
    },
    "MF": {
        "message": "Сент Мартин"
    },
    "MG": {
        "message": "Мадагаскар"
    },
    "MH": {
        "message": "Маршалска Острва"
    },
    "MI": {
        "message": "Мидвеј"
    },
    "MK": {
        "message": "Македонија"
    },
    "ML": {
        "message": "Мали"
    },
    "MM": {
        "message": "Мијанмар"
    },
    "MN": {
        "message": "Монголија"
    },
    "MO": {
        "message": "Макао С. А. Р. Кина"
    },
    "MP": {
        "message": "Северна Маријанска Острва"
    },
    "MQ": {
        "message": "Мартиник"
    },
    "MR": {
        "message": "Мауританија"
    },
    "MS": {
        "message": "Монсерат"
    },
    "MT": {
        "message": "Малта"
    },
    "MU": {
        "message": "Маурицијус"
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
        "message": "Малезија"
    },
    "MZ": {
        "message": "Мозамбик"
    },
    "Make your Internet better with $1": {
        "message": "Би ваш интернет боље са $1"
    },
    "Menu": {
        "message": "Мену"
    },
    "Might not work on all sites": {
        "message": "Можда неће радити на свим сајтовима"
    },
    "Mode": {
        "message": "Начин"
    },
    "More countries": {
        "message": "Више земаља"
    },
    "More sites...": {
        "message": "Више..."
    },
    "More...": {
        "message": "Више ..."
    },
    "My Account": {
        "message": "Мој налог"
    },
    "My History": {
        "message": "Моја историја"
    },
    "My Settings": {
        "message": "Моја подешавања"
    },
    "My favorites": {
        "message": "Моји фаворити"
    },
    "NA": {
        "message": "Намибија"
    },
    "NC": {
        "message": "Нова Каледонија"
    },
    "NE": {
        "message": "Нигер"
    },
    "NF": {
        "message": "Норфолк Острво"
    },
    "NG": {
        "message": "Нигерија"
    },
    "NI": {
        "message": "Никарагва"
    },
    "NL": {
        "message": "Холандија"
    },
    "NO": {
        "message": "Норвешка"
    },
    "NP": {
        "message": "Непал"
    },
    "NQ": {
        "message": "Дроннинг Мауд Ланд"
    },
    "NR": {
        "message": "Науру"
    },
    "NT": {
        "message": "Неутрална зона"
    },
    "NU": {
        "message": "Ниуе"
    },
    "NZ": {
        "message": "Нови Зеланд"
    },
    "Need Help?": {
        "message": "Потребна вам је помоћ?"
    },
    "Netflix": {
        "message": "Нетфликс"
    },
    "Never ask me again": {
        "message": "Никада ме опет питати"
    },
    "Never be a peer": {
        "message": "Никада се вршњачка"
    },
    "No": {
        "message": "Не"
    },
    "No idle peers found.": {
        "message": "Није пронађен ниједан мировања вршњаци."
    },
    "No recent videos found": {
        "message": "Нема недавних видеос фоунд"
    },
    "No saved videos found": {
        "message": "Нема сачуваних видеос фоунд"
    },
    "No title": {
        "message": "Без наслова"
    },
    "No videos found": {
        "message": "Но видеос фоунд"
    },
    "No videos found on active page": {
        "message": "Но фоунд он активној страни видеа"
    },
    "No, Thanks": {
        "message": "Не, хвала"
    },
    "No, fix it": {
        "message": "Не, поправити"
    },
    "Not working?": {
        "message": "Не ради?"
    },
    "Number of users that pressed not working": {
        "message": "Број корисника који не раде притисну"
    },
    "Number of users that use this option": {
        "message": "Број корисника који користе ову опцију"
    },
    "OM": {
        "message": "Оман"
    },
    "Off": {
        "message": "Офф"
    },
    "Oh, yes!": {
        "message": "О, да!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Стара верзија Фирефок. Притисните <a> овде </a> за надоградњу."
    },
    "On": {
        "message": "О"
    },
    "Open Media Player": {
        "message": "Опен Медиа Плаиер"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Наш Бранд Нев Мплаиер је Ускоро!"
    },
    "PA": {
        "message": "Панама"
    },
    "PC": {
        "message": "Пацифиц Исландс територије под старатељством"
    },
    "PE": {
        "message": "Перу"
    },
    "PF": {
        "message": "Француска Полинезија"
    },
    "PG": {
        "message": "Папуа Нова Гвинеја"
    },
    "PH": {
        "message": "Филипини"
    },
    "PK": {
        "message": "Пакистан"
    },
    "PL": {
        "message": "Пољска"
    },
    "PM": {
        "message": "Сен Пјер и Микелон"
    },
    "PN": {
        "message": "Питкерн"
    },
    "PR": {
        "message": "Порто Рико"
    },
    "PS": {
        "message": "Палестинска територија"
    },
    "PT": {
        "message": "Португал"
    },
    "PU": {
        "message": "САД Остале Пацифиц Исландс"
    },
    "PW": {
        "message": "Палау"
    },
    "PY": {
        "message": "Парагвај"
    },
    "PZ": {
        "message": "Панамски канал зона"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Молимо онемогућите друге <a>додатке</a> за које мислите да могу контролисати поставке проки као што су ад-блокатора, других ВПН услуга, итд"
    },
    "Please enter a valid email address.": {
        "message": "Унесите исправну емаил адресу."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Унесите веб сајт адресу, као фацебоок.цом"
    },
    "Please help us get better": {
        "message": "Помозите нам да боље"
    },
    "Popular in $1": {
        "message": "Популарно у $1"
    },
    "Popular in the world": {
        "message": "Популарно у свету"
    },
    "Popular sites": {
        "message": "Популарни сајтови"
    },
    "Premium": {
        "message": "Премија"
    },
    "QA": {
        "message": "Катар"
    },
    "QO": {
        "message": "Удаљен Океанија"
    },
    "RE": {
        "message": "Реинион"
    },
    "RO": {
        "message": "Румунија"
    },
    "RS": {
        "message": "Србија"
    },
    "RU": {
        "message": "Русија"
    },
    "RW": {
        "message": "Руанда"
    },
    "Rate us": {
        "message": "Оцените нас"
    },
    "Recent Videos": {
        "message": "Рецент Видеос"
    },
    "Reload": {
        "message": "Поново напунити"
    },
    "Reload Hola": {
        "message": "Релоад Хола"
    },
    "Remember server": {
        "message": "Запамти сервер"
    },
    "Report a problem": {
        "message": "Пријавите проблем"
    },
    "Retry safe mode": {
        "message": "Покушајте поново безбедни режим"
    },
    "SA": {
        "message": "Саудијска Арабија"
    },
    "SB": {
        "message": "Соломонска Острва"
    },
    "SC": {
        "message": "Сејшели"
    },
    "SD": {
        "message": "Судан"
    },
    "SE": {
        "message": "Шведска"
    },
    "SG": {
        "message": "Сингапур"
    },
    "SH": {
        "message": "Света Јелена"
    },
    "SI": {
        "message": "Словенија"
    },
    "SJ": {
        "message": "Свалбард и Јанмајен Острва"
    },
    "SK": {
        "message": "Словачка"
    },
    "SL": {
        "message": "Сијера Леоне"
    },
    "SM": {
        "message": "Сан Марино"
    },
    "SN": {
        "message": "Сенегал"
    },
    "SO": {
        "message": "Сомалија"
    },
    "SR": {
        "message": "Суринам"
    },
    "ST": {
        "message": "Сао Томе и Принципе"
    },
    "SU": {
        "message": "Савез Совјетских Социјалистичких Република"
    },
    "SV": {
        "message": "Салвадор"
    },
    "SY": {
        "message": "Сирија"
    },
    "SZ": {
        "message": "Свазиленд"
    },
    "Safe": {
        "message": "Сигурна"
    },
    "Safe mode": {
        "message": "Безбедни режим"
    },
    "Save": {
        "message": "Саве"
    },
    "Saved Videos": {
        "message": "Сачувани Видео"
    },
    "Saved for later": {
        "message": "Сачувати за касније"
    },
    "Search video title": {
        "message": "Сеарцх видео наслов"
    },
    "Select a Country": {
        "message": "Селецт а Цоунтри"
    },
    "Select site to unblock": {
        "message": "Изаберите сајт да одблокира"
    },
    "Server saved!": {
        "message": "Сервер сачувана!"
    },
    "Set safe mode for $1 $2": {
        "message": "Сет безбедни режим за $1 $2"
    },
    "Settings": {
        "message": "Подешавања"
    },
    "Share": {
        "message": "Удео"
    },
    "Share $1 on $2": {
        "message": "Делите $1 на $2"
    },
    "Share $1 via $2": {
        "message": "Поделите $1 виа $2"
    },
    "Share with friends!": {
        "message": "Подели са пријатељима!"
    },
    "Sign up": {
        "message": "Пријавите се"
    },
    "Solve buffering": {
        "message": "Решите буфферинг"
    },
    "Solve buffering problems with": {
        "message": "Решавање проблема са међупохрана"
    },
    "Solves it": {
        "message": "Решава се"
    },
    "Staff Picks": {
        "message": "Вии Гамес"
    },
    "Start Hola": {
        "message": "старт"
    },
    "Starting...": {
        "message": "Покретање..."
    },
    "Stop Hola": {
        "message": "Стани Хола"
    },
    "Stopping peer routing...": {
        "message": "Заустављање вршњачког рутирање..."
    },
    "Stream": {
        "message": "Поток"
    },
    "Stream Instantly": {
        "message": "Стреам Одмах"
    },
    "Submit": {
        "message": "Поднети"
    },
    "Support Hola": {
        "message": "Подршка Хола"
    },
    "TA": {
        "message": "Тристан да Цунха"
    },
    "TC": {
        "message": "Туркс и Кајкос Острва"
    },
    "TD": {
        "message": "Чад"
    },
    "TF": {
        "message": "Француске Јужне Територије"
    },
    "TG": {
        "message": "Того"
    },
    "TH": {
        "message": "Тајланд"
    },
    "TJ": {
        "message": "Таџикистан"
    },
    "TK": {
        "message": "Токелау"
    },
    "TL": {
        "message": "Источни Тимор"
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
        "message": "Турска"
    },
    "TT": {
        "message": "Тринидад и Тобаго"
    },
    "TV": {
        "message": "Тувалу"
    },
    "TW": {
        "message": "Тајван"
    },
    "TZ": {
        "message": "Танзанија"
    },
    "Talk to us on $1": {
        "message": "Разговарају са нама о $1"
    },
    "Tell friends about $1": {
        "message": "Реци пријатељима о $1"
    },
    "Testing connection...": {
        "message": "Тестирање веза..."
    },
    "Thank you!": {
        "message": "Хвала!"
    },
    "There seems to be an error": {
        "message": "Изгледа да постоји грешка"
    },
    "Top popular sites": {
        "message": "Врх популарног Ситес"
    },
    "Translate to your language": {
        "message": "Преведи на вашем језику"
    },
    "Try again": {
        "message": "Покушајте поново"
    },
    "Try another server": {
        "message": "Пробајте други сервер"
    },
    "Try it": {
        "message": "Пробајте"
    },
    "Try safe mode": {
        "message": "Покушајте безбедни режим"
    },
    "Try to <span>reload</span>": {
        "message": "Покушајте да <span> претовара </span>"
    },
    "Trying another peer...": {
        "message": "Покушавајући други пеер..."
    },
    "Turn off Accelerator": {
        "message": "Искључите Аццелератор"
    },
    "Turn off Hola": {
        "message": "Искључите Хола"
    },
    "Turn on Accelerator": {
        "message": "Укључите Аццелератор"
    },
    "Turn on Hola": {
        "message": "Укључите Хола"
    },
    "Turn on to get started": {
        "message": "Укључите да бисте започели"
    },
    "UA": {
        "message": "Украјина"
    },
    "UG": {
        "message": "Уганда"
    },
    "UM": {
        "message": "Мања удаљена острва САД"
    },
    "US": {
        "message": "Сједињене Америчке Државе"
    },
    "UY": {
        "message": "Уругвај"
    },
    "UZ": {
        "message": "Узбекистан"
    },
    "Unblocker": {
        "message": "Унблоцкер"
    },
    "Unblocker is disabled": {
        "message": "Унблоцкер је онемогућен"
    },
    "Unblocker?": {
        "message": "Унблоцкер?"
    },
    "Update": {
        "message": "Ажурирање"
    },
    "Upgrade": {
        "message": "Ажурирање"
    },
    "Using": {
        "message": "Користећи"
    },
    "Using Hola": {
        "message": "Коришћење Хола"
    },
    "VA": {
        "message": "Ватикан"
    },
    "VC": {
        "message": "Сент Винсент и Гренадини"
    },
    "VD": {
        "message": "Северни Вијетнам"
    },
    "VE": {
        "message": "Венецуела"
    },
    "VG": {
        "message": "Британска Девичанска Острва"
    },
    "VI": {
        "message": "С.А.Д. Девичанска Острва"
    },
    "VN": {
        "message": "Вијетнам"
    },
    "VPN": {
        "message": "ВПН"
    },
    "VPN Premium": {
        "message": "ВПН Премиум"
    },
    "VU": {
        "message": "Вануату"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Веома стара верзија Цхроме, <a> ажурирање </a> Цхроме користи Хола"
    },
    "Video": {
        "message": "Видео"
    },
    "Video stuck?": {
        "message": "Видео заглави?"
    },
    "Videos available for instant streaming": {
        "message": "Видео аваилабле фор инстант стреаминг"
    },
    "WF": {
        "message": "Валис и Футуна Острва"
    },
    "WK": {
        "message": "Ваке Исланд"
    },
    "WS": {
        "message": "Самоа"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Желите Хола на другим уређајима? (Ксбок, ПС, Аппле ТВ, иПхоне ...). Кликните овде"
    },
    "Want to know more?": {
        "message": "Желите да сазнате више?"
    },
    "Watch Now": {
        "message": "Ватцх Нов"
    },
    "We found $1 videos": {
        "message": "Ве фоунд $1 видеос"
    },
    "We will be in touch with you soon": {
        "message": "Ускоро ћемо бити у контакту са вама"
    },
    "Working!": {
        "message": "Рад!"
    },
    "Working?": {
        "message": "Рад?"
    },
    "Works on all sites but slower": {
        "message": "Радови на свим локацијама, али споријим"
    },
    "YD": {
        "message": "Народна Демократска Република Јемен"
    },
    "YE": {
        "message": "Јемен"
    },
    "YT": {
        "message": "Мајоте"
    },
    "Yes": {
        "message": "Да"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Потребно је да надоградите на најновију верзију Опере да користе Хола. Притисните <a>овде</a> за надоградњу."
    },
    "Youtube": {
        "message": "ИоуТубе"
    },
    "ZA": {
        "message": "Јужноафричка Република"
    },
    "ZM": {
        "message": "Замбија"
    },
    "ZW": {
        "message": "Зимбабве"
    },
    "ZZ": {
        "message": "Непозната или неважећа област"
    },
    "app_desc": {
        "message": "Приступ сајтова блокиран у вашој земљи, фирме или школе са Хола! Хола је бесплатан и једноставан за коришћење!"
    },
    "app_name": {
        "message": "Хола Боље интернету"
    },
    "back to": {
        "message": "назад до"
    },
    "changing...": {
        "message": "мења..."
    },
    "cool sites": {
        "message": "Цоол Ситес"
    },
    "current site": {
        "message": "струја сајт"
    },
    "day": {
        "message": "дан"
    },
    "days": {
        "message": "дани"
    },
    "even more...": {
        "message": "још више..."
    },
    "mode": {
        "message": "Режим"
    },
    "more options...": {
        "message": "више опција..."
    },
    "not working?": {
        "message": "не ради?"
    },
    "not working? try another server": {
        "message": "не ради? пробајте други сервер"
    },
    "on this page": {
        "message": "на овој страници"
    },
    "sites that are censored": {
        "message": "сајтови који су цензурисане"
    },
    "start": {
        "message": "старт"
    },
    "working? remember": {
        "message": "ради? запамтити"
    }
};
return E; });